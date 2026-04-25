/**
 * GitHub release binary URLs. Keep in sync with `releases.md` when version bumps.
 * @see https://github.com/AlchemistReturns/grit/releases
 */
const RELEASE_TAG = "v1.0.0";
const BASE = `https://github.com/AlchemistReturns/grit/releases/download/${RELEASE_TAG}` as const;

export type GritInstallPlatformId = "windows" | "mac-arm" | "mac-intel" | "linux";

export type GritInstallRow = {
	id: GritInstallPlatformId;
	label: string;
	sublabel: string;
	filename: string;
	href: string;
};

export const GRIT_INSTALL_ROWS: GritInstallRow[] = [
	{
		id: "windows",
		label: "Windows",
		sublabel: "x64 · .exe",
		filename: "grit-windows-amd64.exe",
		href: `${BASE}/grit-windows-amd64.exe`,
	},
	{
		id: "mac-arm",
		label: "macOS",
		sublabel: "Apple Silicon (ARM64)",
		filename: "grit-darwin-arm64",
		href: `${BASE}/grit-darwin-arm64`,
	},
	{
		id: "mac-intel",
		label: "macOS",
		sublabel: "Intel (x64)",
		filename: "grit-darwin-amd64",
		href: `${BASE}/grit-darwin-amd64`,
	},
	{
		id: "linux",
		label: "Linux",
		sublabel: "x64",
		filename: "grit-linux-amd64",
		href: `${BASE}/grit-linux-amd64`,
	},
];

type NavWithUACH = Navigator & {
	userAgentData?: { getHighEntropyValues: (hints: string[]) => Promise<{ architecture?: string }> };
};

/**
 * Heuristic when the UA string lies (e.g. Chrome on M2 still says "Intel Mac OS X").
 * Apple Silicon machines expose Apple/Metal/ANGLE(Apple) WebGL on the integrated GPU.
 */
function isLikelyAppleSiliconByWebGL(): boolean {
	if (typeof document === "undefined") {
		return false;
	}
	try {
		const canvas = document.createElement("canvas");
		const gl = canvas.getContext("webgl") as WebGLRenderingContext | null;
		if (!gl) {
			return false;
		}
		const ext = gl.getExtension("WEBGL_debug_renderer_info");
		if (!ext) {
			return false;
		}
		const v = (gl.getParameter(ext.UNMASKED_VENDOR_WEBGL) as string) || "";
		const r = (gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) as string) || "";
		const combined = `${v} ${r}`.toLowerCase();
		if (combined.includes("apple m1") || combined.includes("apple m2") || combined.includes("apple m3") || combined.includes("apple m4") || combined.includes("apple m5") || combined.includes("apple m6")) {
			return true;
		}
		if (combined.includes("apple gpu") || /angle.*apple,.*apple m/.test(combined) || /apple, apple m/.test(combined)) {
			return true;
		}
	} catch {
		/* no WebGL or blocked */
	}
	return false;
}

/**
 * Best-effort client hint for which binary row to highlight.
 * Async: Chromium on Apple Silicon still sends a desktop Intel-like UA; we read
 * `architecture` from User-Agent Client Hints, then a WebGL fallback, then
 * default to Intel if nothing matches.
 */
export async function detectGritInstallPlatform(): Promise<GritInstallPlatformId | null> {
	if (typeof navigator === "undefined") {
		return null;
	}
	const ua = navigator.userAgent;

	if (/Win(dows|32|64|CE)/i.test(ua) || /Windows/i.test(ua)) {
		return "windows";
	}

	if (/(iPhone|iPad|iPod|Android|Mobile)/i.test(ua) && /Mobi|Android|iP(hone|ad|od)/i.test(ua)) {
		return null;
	}

	if (/Mac|Macintosh/i.test(ua)) {
		/* Honest UA (newer Safari / some builds) */
		if (
			/arm64|aarch64|Apple Silicon|arm ?Mac|Mac.*ARM|Apple M\d|OS X.*ARM/i.test(ua)
		) {
			return "mac-arm";
		}
		/* Client Hints: reliable on Chrome / Edge for real CPU arch */
		const n = navigator as NavWithUACH;
		if (n.userAgentData?.getHighEntropyValues) {
			try {
				const h = await n.userAgentData.getHighEntropyValues(["architecture"]);
				const arch = h.architecture?.toLowerCase() ?? "";
				if (arch === "arm" || arch === "aarch64") {
					return "mac-arm";
				}
				if (arch === "x86" || arch === "x86-64" || arch === "amd64" || arch === "x64") {
					return "mac-intel";
				}
			} catch {
				/* permission or API failure */
			}
		}
		if (isLikelyAppleSiliconByWebGL()) {
			return "mac-arm";
		}
		/* No reliable signal: older Intel Macs, or very locked-down browsers */
		return "mac-intel";
	}

	if (/Linux|X11/i.test(ua) && !/Android|Mobile/i.test(ua)) {
		return "linux";
	}

	return null;
}
