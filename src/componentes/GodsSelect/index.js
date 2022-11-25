import './GodsSelect.css'

const GodsSelect = (props) => {

    const AddGod = (event) => {
        props.setgod(event.target.value)
        console.log(event.target.value)
    }

    return (
        
            <div className="container">
                <label>Escolha o Deus que você herdará poderes</label>
                <select onChange={AddGod}>                   
                    <option value=""></option>

                </select>
            </div>
    )
}

export default GodsSelect