import Demigod from "../DemigodCard"
import "../MythologysSection/MythologysSection.css"

const MythologySection = (props) => {
    const css = {background: props.background, backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'bottom'}
    return(
        props.demigods.length > 0 && <section className="mythologys-section">
            <h3>{props.name}</h3>
            <div style={css} className="image">
                {props.demigods.map(demigod => <Demigod key={demigod.name} name={demigod.name} age={demigod.age} mythology={demigod.mythology} god={demigod.god}/>)}
            </div>
        </section>
    )
}

export default MythologySection