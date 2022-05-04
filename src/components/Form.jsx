import React, {useContext, useState, useRef} from 'react'
import { Store } from './StoreProvider';

const Form = () => {

    const formRef = useRef(null)    

    const onAdd = async(event) =>{
        event.preventDefault();
        if(title && message){
            const noteFromForm = {
                title,
                message,
                done: false
            }
            let noteSavedPromise = await fetch("http://localhost:8081/api/save/note",
            {
                method:'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(noteFromForm)
            })

            let noteSaved = await noteSavedPromise.json()
            console.log()

            dispatch({
                type: 'add-note',
                payload: noteSaved             
            })
            formRef.current.reset()
        }
    }

    const {state, dispatch} = useContext(Store)

    const [title, setTitle] = useState('');

    const [message, setMessage] = useState('');

    const addTitle = (event)=>{
        setTitle(event.target.value)
    }

    const addMessage = (event)=>{
        setMessage(event.target.value)
    }

    return (

        <form ref={formRef}>
            <input onChange={addTitle} type="text" name='title' placeholder='Title'/>
            <input onChange={addMessage} type="text" name="message" placeholder='Message'/>
            <button onClick={onAdd}>Add note!</button>
        </form>
    )
}

export default Form
