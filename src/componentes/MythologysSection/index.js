import Demigod from "../Demigods"
import "../MythologysSection/MythologysSection.css"

const MythologySection = (props) => {
    const css = {backgroundColor: props.background}
    return(
        <section className="mythologys-section">
            <h3>{props.name}</h3>
            <div key={props.name} style={css} className="image">
                {props.demigods.map(demigod => <Demigod key={demigod.name} name={demigod.name} age={demigod.age} mythology={demigod.mythology}/>)}
            </div>
        </section>
    )
}

export default MythologySection