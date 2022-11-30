import "./Demigods.css"

const Demigod = ({name, age, mythology}) => {
    return (
        <div className="demigod-card">   
            <div className="name-age">

                <h4>{age}</h4>
                <h5>{name}</h5>
            </div>
            <div className="demigod-image">
                <img src="/imgs/poseidon.png" alt="imagem poseidon"></img>   
            </div>
            <div className="about-card">
                <p>{name}, filho do Deus Poseidon, tem poderes incriveis e uma rola enorme</p>
            </div>
        </div>
    )
}

export default Demigod