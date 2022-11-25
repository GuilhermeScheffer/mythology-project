import "../Inputs/Inputs.css"

const Inputs = (props) => {

    const AddNameInput = (event) => {
        props.setname(event.target.value)

    }

    const AddAgeInput = (event) => {
        props.setage(event.target.value)
        
    }

    return(
        <div className="inputs">

            <label>Nome</label>
            <input value={props.valuename} id='name' onChange={AddNameInput} required={true}></input>

            <label>Idade</label>
            <input value={props.valueage} id='age' onChange={AddAgeInput} required={true}></input>

        </div>
    )
}

export default Inputs