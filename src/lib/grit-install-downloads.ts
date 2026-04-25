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

/** Best-effort client hint for which binary row to highlight. */
export function detectGritInstallPlatform(): GritInstallPlatformId | null {
	if (typeof navigator === "undefined") return null;
	const ua = navigator.userAgent;

	if (/Win(dows|32|64|CE)/i.test(ua) || /Windows/i.test(ua)) {
		return "windows";
	}

	if (/(iPhone|iPad|iPod|Android|Mobile)/i.test(ua) && /Mobi|Android|iP(hone|ad|od)/i.test(ua)) {
		return null;
	}

	if (/Mac|Macintosh/i.test(ua)) {
		if (/arm64|ARM64|Apple M|aarch64|Apple Silicon/i.test(ua)) {
			return "mac-arm";
		}
		return "mac-intel";
	}

	if (/Linux|X11/i.test(ua) && !/Android|Mobile/i.test(ua)) {
		return "linux";
	}

	return null;
}
