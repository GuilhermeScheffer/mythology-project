import './Form.css'
import MythologySelect from '../MythologySelect'
import GodsSelect from '../GodsSelect'
import Inputs from '../Inputs'
import Button from '../Button'
import { useState } from 'react'


const Formulario = (props) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [mythology, setMythology] = useState('')
    const [god, setGod] = useState('')
    
    const onSubmit = (event) => {
        event.preventDefault()
        props.newdemigodadd({
            name,
            age,
            mythology
        })
        setName('')
        setAge('')
        setMythology('')
        setGod('')
    }

    return (
        <section className="form">
            <form onSubmit={onSubmit}>

                <Inputs
                setname={name => setName(name)} 
                setage={age => setAge(age)}
                valuename={name}
                valueage={age}/>

                <MythologySelect 
                mythologyslist={props.mythologyslist} 
                setmythology={mythology => setMythology(mythology)}
                value={mythology}/>

                <GodsSelect 
                godsnameslist={props.godsnameslist} 
                setgod={god => setGod(god)}
                value={god}/>
                <Button>
                    Criar Semideus
                </Button>
            </form>
        </section>
    )
}

export default Formulario