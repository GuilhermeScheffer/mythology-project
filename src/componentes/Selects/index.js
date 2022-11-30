import './Selects.css'

const MythologySelect = (props) => {

    const AddMythology = (event) => {
        props.setmythology(event.target.value)

    }

    const AddGod = (event) => {
        props.setgod(event.target.value)
    }

    const mythology = props.valuemythology

    return (
        <>
            <div className="container">
                <label>Escolha a mitologia de seu semideus</label>
                <select onChange={AddMythology} required={true} value={props.valuemythology}>
                    <option value="Selecione uma opção"></option>
                    {props.mythologyslist.map(item => <option key={item.name}>{item.name}</option>)}
                </select>
            </div>

             <div className="container">
                    <label>Escolha o Deus que você herdará poderes</label>
                    <select onChange={AddGod} required={false} value={props.valuegod}>                   
                        <option value=""></option>

                    </select>
                </div>
        </>
    )
}

export default MythologySelect