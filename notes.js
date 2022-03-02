const fs = require('fs');
// import chalk from 'chalk'


const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.filter((note)=>note.title === title);

    if (duplicateNote.length ===0){
        notes.push({
            title: title,
            body: body
        })
        console.log(`Title: ${title} added`);
    } else {
        console.log(`Title: ${title} already exist`)
    }
    saveNotes(notes)
};

const removeNote = (title) =>{
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if(notes.length > notesToKeep.length){
        console.log(`Title: ${title} is removed`)
        saveNotes(notesToKeep) 
 
    } else {
        console.log(`Title: ${title} not found!`)   
    }
};

const listNotes = () =>{
    const notes = loadNotes();
    console.log('Your Notes')
    const notesLists = notes.forEach((note)=>{
        console.log(note.title)
    });
};

const readNote = (title) => {
    const notes = loadNotes();
    const noteList = notes.find((note)=>note.title === title);
    if (!noteList){
        console.log(`Title: ${title} not found!`)
    } else {
        console.log(`Note title: ${noteList.title}`)
        console.log(`Note body: ${noteList.body}`)
    }
}

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync('notes.json');
        const notesStr = notesBuffer.toString();
        return JSON.parse(notesStr)
    } catch(e) {
        return []
    }
};

const saveNotes = (notes) =>{
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON)
}


module.exports={
    addNote,
    removeNote,
    listNotes,
    readNote
}