import "./Demigods.css"

const Demigod = ({name, age, mythology}) => {
    return (
        <div className="demigod-card">   
            <div className="name-age">

                <h4>{age}</h4>
                <h5>{name}</h5>

            </div>
            <div className="mythology">   
                
            </div>
        </div>
    )
}

export default Demigod