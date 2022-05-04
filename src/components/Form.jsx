import React, {useContext, useState, useRef} from 'react'
import { Store } from './StoreProvider';

const Form = () => {

    const formRef = useRef(null)

    const onAdd = (event) =>{
        event.preventDefault();
        if(title && message){
            dispatch({
                type: 'add-note',
                payload: {
                    title,
                    message
                }
            }
            )
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
