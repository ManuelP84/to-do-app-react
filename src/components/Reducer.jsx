function reducer(state, action){
    switch(action.type){
        case 'add-note':
            console.log('adding note')
            const newNote = {
                id: Math.floor(Math.random()*100),
                title: action.payload.title,
                message: action.payload.message,
                done: false 
            }
            const newListOfNotes = [...state.listOfNotes, newNote]
            console.log(newNote)
            const newStateAddedNote = {...state, listOfNotes: newListOfNotes}
            return newStateAddedNote
        case 'remove-note':
            return state
        case 'update-note':
            return state
    }
}

export default reducer