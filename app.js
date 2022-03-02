const yargs = require('yargs');
const {addNote, removeNote,listNotes, readNote} = require('./notes');

//set version
yargs.version('1.1.0')

//create add command

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        addNote(argv.title, argv.body)
    }
})

//read command

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        readNote(argv.title)
    }
})

//remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        removeNote(argv.title)
    }
})

//list command

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        listNotes()
    }
})
yargs.parse()
// console.log(yargs.argv)