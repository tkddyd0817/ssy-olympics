import { useState } from 'react'

import './App.css'
import MedalItem from './components/MedalItem'
import MedalForm from './components/MedalForm'
import logolmage from '../public/images.png'





function App() {



//   const [country,setCountry] = useState("")
//   const [gold,setGold] = useState(0)
//   const [silver,setSilver] = useState(0)
//   const [bronze,setBronze] = useState(0)

// const resetForm = () =>{
//   setCountry('')
//   setGold('')
//   setSilver('')
//   setBronze('')
// }

 
  

  return (
    <div id='root'>
      <div><img  src={logolmage}/></div>
      
      <div className='Main-Container'>
        <h1>파리 올림픽</h1>
        <MedalForm
        handleSubmit={handleSubmit}
        handleNationChange={handleNationChange}
        handleGoldChange={handleGoldChange}
        handleSilverChange={handleSilverChange}
        handleBronzeChange={handleBronzeChange}
        update={update}
        />

        
        <MedalItem
        medals={medals}
        remove={remove}/>
      </div>

    </div>
  
  )
};

export default App



