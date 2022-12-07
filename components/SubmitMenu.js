import { useEffect, useState } from 'react';
import { supaInsert } from '../functions/supaInsert';
import styles from '../styles/Home.module.css';
import UserList from '../components/userList';

export default function SubmitMenu() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')

        let liveData = {
        name,
        email,
        message
        }
    
        supaInsert(liveData).then((res) => {
        console.log('Response succeeded!')
        setName('')
        setEmail('')
        setMessage('')
        document.getElementById("myForm").reset();
        window.location.reload();
        })
    }

    return(
    <div className={styles.container}>
        < form id="myForm" className={styles.main} > 
            < formgroup className={styles.inputGroup} >
            < label htmlFor='name'>Name</label>
            < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className={styles.inputField} />  
            </formgroup>  < formgroup className={styles.inputGroup} >
            < label htmlFor='email'>Email</label>
            < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className={styles.inputField} />
            </formgroup>  < formgroup className={styles.inputGroup} >
            < label htmlFor='message'>Message</label>
            < input type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message' className={styles.inputField} />
            </formgroup>  < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
        </form >
        </div>
    )
}