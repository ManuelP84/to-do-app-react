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
            const newListOfNotesFiltered = state.listOfNotes.map(note => {
                if(note.id === action.payload.id){
                    return action.payload
                }
                return note
            })
            const newStateNoteUpdated = {...state, listOfNotes: newListOfNotesFiltered}
            return newStateNoteUpdated
    }
}

export default reducer