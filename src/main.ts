import { Plugin } from 'obsidian';
import { } from './utils'
import { SpotlightSettingTab } from './settings'
import { SpotlightProcessor } from './block'
import type { SpotlightSettings } from './types';
import { SETTINGS } from './constants';

export default class SpotlightPlugin extends Plugin {
	settings: SpotlightSettings;
	containerEl: HTMLElement;

	async onload() {
		// Load message
		await this.loadSettings();
		console.log('Loaded Spotlight Plugin');

		// Register note spotlight renderer
		this.registerMarkdownCodeBlockProcessor('spotlight-note', async (source, el) => {
			const proc = new SpotlightProcessor();
			let args = source.split("\n")
			await proc.run(this, source, el, this.app, this.settings, args, false);
		});

		// Register block spotlight renderer
		this.registerMarkdownCodeBlockProcessor('spotlight-block', async (source, el) => {
			const proc = new SpotlightProcessor();
			let args = source.split("\n")
			await proc.run(this, source, el, this.app, this.settings, args, true);
		});

		this.addSettingTab(new SpotlightSettingTab(this.app, this));
	}

	onunload() {
		console.log('unloading Spotlight Plugin');
	}

	async loadSettings() {
		this.settings = Object.assign({}, SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
