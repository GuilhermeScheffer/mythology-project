import React from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Form';
import MythologySection from './componentes/MythologysSection';
import Statement from './componentes/Statement/Statement';
import MythologysTypes from './api/MythologysTypes.json'
import { useState } from 'react';
import Gods from './api/Gods.json'


function App() {

  //  const mythologysList = [
  //    {name: 'grega', image: 'url(/imgs/greek.jpg)'},
  //    {name: 'egipcia', image: 'url(/imgs/greek.jpg)'},
  //    {name: 'nordica', image: 'url(/imgs/greek.jpg)'},
  //    {name: 'japonesa', image: 'url(/imgs/greek.jpg)'}
  // ]


    const [mythologysList, setMytholysList] = useState(MythologysTypes.Types)
    const [godsNamesList, setGodName] = useState(Gods)
    const [demigods, setDemigods] = useState([])

    const newDemigodAdd = (demigod) => {
      setDemigods([...demigods, demigod])
    };
    

  // const renderSection = () => {
  //   mythologysList.map(item => <MythologySection 
  //     name={item.name} 
  //     background={item.background}
  //     />)
  // }

  return (
    <div className="App">
      <Banner />
      <Statement />
      <Formulario 
      mythologyslist={mythologysList} 
      godsnameslist={godsNamesList}
      newdemigodadd={newDemigodAdd}/>

      {mythologysList.map(item => <MythologySection 
       name={item.name} 
       background={item.image}
       demigods={demigods.filter(demigod => demigod.mythology === item.name)}
       />)}
    </div>
  );
}

export default App;
