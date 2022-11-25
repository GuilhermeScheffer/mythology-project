import './MythologySelect.css'

const MythologySelect = (props) => {

    const AddMythology = (event) => {
        props.setmythology(event.target.value)
    }

    return (
        <div className="container">
            <label>Escolha a mitologia de seu semideus</label>
            <select onChange={AddMythology} required={true} value={props.value}>
                <option value=""></option>
                {props.mythologyslist.map(item => <option key={item.name}>{item.name}</option>)}
            </select>
        </div>
    )
}

export default MythologySelect