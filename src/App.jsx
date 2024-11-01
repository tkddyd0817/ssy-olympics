import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MedalItem from './components/MedalItem'
import MedalForm from './components/MedalForm'
import logolmage from '../public/images.png'





function App() {
  const [country,setcountry] = useState("")
  const [gold,setgold] = useState(0)
  const [silver,setsilver] = useState(0)
  const [bronze,setbronze] = useState(0)


// 사용자가 입력한 국가와  매달갯수가 있는 데이터
const [medals, setmedals] = useState([]);
  
  //사용자에게 국가명을 입력받는 함수
  const handleNationChange = (e) =>{
    setcountry(e.target.value);
  };

  //금메달 갯수를 입력하는 함수
  const handleGoldChange = (e)=>{
    setgold(e.target.value);
  };



  //은메달 갯수를 입력하는 함수
  const handleSilverChange = (e)=>{
    setsilver(e.target.value);
  };

  //동메달 갯수를 입력하는 함수
  const handleBronzeChange = (e)=>{
    setbronze(e.target.value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();//새로고침을 막아주는기능

    const newMedal={country, gold, silver, bronze}
    setmedals((prev)=>[...prev,newMedal])
    console.log(medals) 
  };

//삭제기능 구현코드
  const remove = (countryName) => {
    setmedals(medals.filter((medal)=> {
      return countryName !== medal.country ;//같지않은것만 남긴다.
    }))
    }

//업데이트 버튼을 누르면 값이 변하는 코드
const update = (e)=>{
  e.preventDefault()
  let result =  medals.some((medal)=>
    medal.country === country 
  )
console.log(medals,country );
console.log(result);
  if(result){
  let arr= medals.map((medal)=>{
      return medal.country===country ?  {...medal, country, gold, silver, bronze} : medal;
    })

    setmedals(arr)
  }
}


    
  
  

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



