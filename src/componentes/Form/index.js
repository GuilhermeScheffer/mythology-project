import './Form.css'
import MythologySelect from '../Selects'
import Inputs from '../Inputs'
import Button from '../Button'
import { useState } from 'react'
import GodsSelect from '../GodsSelect'


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
            mythology,
            god
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
                valuemythology={mythology}/>
                <GodsSelect 
                godsnameslist={props.godsnameslist}
                setgod={god => setGod(god)}
                valuegod={god}
                mythology={mythology}/>
                <Button>
                    Criar Semideus
                </Button>
            </form>
        </section>
    )
}

export default Formulario