const GodsSelect = (props) => {
    const AddGod = (event) => {
        props.setgod(event.target.value)
    }
    if (props.mythology === 'Grega') { 
        return(
        <div className="container">
            <label>Escolha o Deus que você herdará poderes</label>
            <select onChange={AddGod} required={false} value={props.valuegod}>                   
                <option value=""></option>
                {props.godsnameslist.filter(item => item.id === 'grega').map(name => name.name.map(godname => <option key={godname}>{godname}</option>))}
            </select>
        </div>
    )
    } else if (props.mythology === 'Egípcia') {
        return(
            <div className="container">
                <label>Escolha o Deus que você herdará poderes</label>
                <select onChange={AddGod} required={false} value={props.valuegod}>                   
                    <option value=""></option>
                    {props.godsnameslist.filter(item => item.id === 'egipcia').map(name => name.name.map(godname => <option key={godname}>{godname}</option>))}
                </select>
            </div>
    )
    } else if (props.mythology === 'Nórdica') {
        return(
            <div className="container">
                <label>Escolha o Deus que você herdará poderes</label>
                <select onChange={AddGod} required={false} value={props.valuegod}>                   
                    <option value=""></option>
                    {props.godsnameslist.filter(item => item.id === 'nordica').map(name => name.name.map(godname => <option key={godname}>{godname}</option>))}
                </select>
            </div>
    )
    } else if (props.mythology === 'Japonesa') {
        return(
            <div className="container">
                <label>Escolha o Deus que você herdará poderes</label>
                <select onChange={AddGod} required={false} value={props.valuegod}>                   
                    <option value=""></option>
                    {props.godsnameslist.filter(item => item.id === 'japonesa').map(name => name.name.map(godname => <option key={godname}>{godname}</option>))}
                </select>
            </div>
    )
    }
} 

export default GodsSelect