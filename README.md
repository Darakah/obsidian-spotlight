# Obsidian Spotlight
![GitHub release)](https://img.shields.io/github/v/release/Darakah/obsidian-spotlight)
![GitHub all releases](https://img.shields.io/github/downloads/Darakah/obsidian-spotlight/total)

Show random block of note from vault / in a specified project or with a certain combination of tags.

## Example

<img src="https://raw.githubusercontent.com/Darakah/obsidian-spotlight/main/images/Example_1.png" />

## Features
- Render block to show a note or a block of note
- Note is chosen randomly based on all search parameters & updated everytime the note is re-opened
- Filter using a combination of tags e.g. `tag1;tag2;tag3`
- Filter by path location / note name
- Specify div width/height and alignment

## Usage

- To display a note spotlight use render block id `spotlight-note` 
- To display a block spotlight use render block id `spotlight-block`
- Each line represents a certain argument. Arguments are identified by with the following syntax: `argumentName`=`argumentValue` for e.g. to set div width: `divWidth=50` which sets the container width to 50% of the note width. 
- Each argument must be on a separate line. 
- Arguments can be in any order
- Arguments that was not specified are set to default values
- Arguments are: `tags`, `match`, `divWidth`, `divHeight` and `divAlign`
- The parameters are the following:
  - `tags` tag list based on which to choose note pool to display from. Tags must be separated by a `;` without the `#` at the start. e.g. to get a note with tags `#test` and `#now` the first line must be `test;now` or `now;test`
  - `Path of notes to get info from` e.g. `Project Main/Project 1` for all notes in `Project Main/Project 1/`
  - `Div container width in %`
  - `Div Height in Pixels`
  - `Div alignment` e.g. `left` or `right`

<img src="https://raw.githubusercontent.com/Darakah/obsidian-spotlight/main/images/Example_3.png"/>

## Settings:

<img src="https://raw.githubusercontent.com/Darakah/obsidian-spotlight/main/images/Settings.png"/>


## Release Notes

### v0.1.1
- Code improvements

### v0.1.0
- Initial release


## Support

[![Github Sponsorship](https://raw.githubusercontent.com/Darakah/Darakah/e0fe245eaef23cb4a5f19fe9a09a9df0c0cdc8e1/icons/github_sponsor_btn.svg)](https://github.com/sponsors/Darakah) [<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/darakah)
