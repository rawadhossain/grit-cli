import GithubSlugger from "github-slugger";

/**
 * Build doc section ids the same way as `rehype-slug` (github-slugger), in
 * document order, so sidebar links match rendered heading `id` attributes.
 */
export function getDocsTocSections(markdown: string): { id: string; label: string }[] {
	const slugger = new GithubSlugger();
	return markdown
		.split("\n")
		.map((line) => line.match(/^##\s+(.*)\s*$/))
		.filter(Boolean)
		.map((m) => {
			const label = (m as RegExpMatchArray)[1].trim();
			return { id: slugger.slug(label), label };
		})
		.filter((s) => s.id !== "table-of-contents");
}
