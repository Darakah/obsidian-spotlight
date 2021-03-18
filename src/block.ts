import type { App, Component } from 'obsidian'
import { MarkdownRenderer } from 'obsidian'
import { chooseRnadomNote, randomBlock } from './utils'
import type { SpotlightSettings } from './types';

export class SpotlightProcessor {

	async run(Comp: Component, source: string, el: HTMLElement, app: App, settings: SpotlightSettings, args: string[], block: boolean) {

		let tags = args[0] ? args[0].split(';') : null
		let match = args[1] ? `${args[1]}.*` : ".*"
		let divWidth = parseInt(args[2]) ? parseInt(args[2]) : settings.divWidth
		let heightPar = parseInt(args[3]) ? parseInt(args[3]) : settings.divheight
		let divAlign = (args[4]?.trim() == 'right') ? 'right' : 'left'

		let currentNote = app.workspace.getActiveFile().path
		let randomNote = chooseRnadomNote(app.vault.getMarkdownFiles(), tags, app.metadataCache, match, currentNote, block, settings)

		let elCanvas = el.createDiv({ cls: 'spotlight-container', attr: { id: 'container' } });
		elCanvas.setAttribute('style', `width:${divWidth}%; height:${heightPar}px; float: ${divAlign};`)

		if (!randomNote) {
			elCanvas.setText('No note was found for the given search parameters!');
			return;
		}

		let text = await app.vault.adapter.read(randomNote.path)

		elCanvas.createEl('a', { cls: "internal-link", href: `${randomNote.path}` }).createEl('i', {
			cls: 'fa fa-external-link spotlight-link',
			attr: { 'aria-hidden': 'true', 'style': 'float: right' }
		})

		if (block) {
			let blocks = app.metadataCache.getFileCache(randomNote).blocks
			MarkdownRenderer.renderMarkdown(randomBlock(text, blocks), elCanvas, currentNote, Comp)
			return
		}

		MarkdownRenderer.renderMarkdown(text, elCanvas, currentNote, Comp)
	}
}