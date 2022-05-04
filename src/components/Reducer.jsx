function reducer(state, action){
    switch(action.type){
        case 'get-notes':
            const stateWithAllNotes = {
                ...state, listOfNotes: action.payload
            }
            
            return stateWithAllNotes
        case 'add-note':
            console.log(action.payload)
            const newNote = action.payload
            const newListOfNotesAdded = [...state.listOfNotes, newNote]
            const newStateAddedNote = {...state, listOfNotes: newListOfNotesAdded}
            return newStateAddedNote
        case 'remove-note':
            const newListOfNotesDeleted = state.listOfNotes.filter(note => note.id !== action.payload.id)
            const newStateNoteDeleted ={...state, listOfNotes: newListOfNotesDeleted}
            return newStateNoteDeleted
        case 'update-note':
            const newListOfNotesFiltered = state.listOfNotes.filter(note => note.id !== action.payload.id)
            const newListOfNotesFilteredModified = [...newListOfNotesFiltered, action.payload]
            const newStateNoteUpdated = {...state, listOfNotes: newListOfNotesFilteredModified}
            return newStateNoteUpdated
    }
}

export default reducer