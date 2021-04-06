# JSPapper
![JSPaperLogo](https://raw.githubusercontent.com/vishnuk7/jspaper-cli/main/README/JSPaperLogo.png)

JSPaper is React App which is codeeditor + markdown like jupyter notebook. In this app you can write js and jsx code and also you can write markdown.

## Installation

```bash
$ npm i jspaper -g
```
## CLI Usage

**Directly using npx**

```bash
$ npx jspaper serve
```
![default](https://raw.githubusercontent.com/vishnuk7/jspaper-cli/main/README/default.png)

**or**

After installing jspaper into your system

```bash
$ jspaper serve
```

Command line options:

```bash
Usage: jspaper [options] [command]

Options:
  -h, --help                  display help for command

Commands:
  serve [options] [filename]  Open a file for editing 📝
  help [command]              display help for command
```

create custom file and assign a port

```bash
$ jspaper serve book.js -port 3002
```
![default](https://raw.githubusercontent.com/vishnuk7/jspaper-cli/main/README/port.png)


## License
[MIT](https://choosealicense.com/licenses/mit/)
