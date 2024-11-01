


프로젝트의 기능구현 부분들
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


저는 이번 프로젝트를 하면서 입력갑을 나타내는 MedalForm , 출력값을 나타내는 MedalItem 으로 구분하여 진행하였습니다.


MedalForm 페이지
function MedalForm(props) {
    const [country, setcountry] = useState("")
    const [gold, setgold] = useState(0)
    const [silver, setsilver] = useState(0)
    const [bronze, setbronze] = useState(0)

    return (<form className='input-group' onSubmit={props.handleSubmit}>
        <div className='input-field'>
            <label>국가명</label>
            <input type="text" placeholder='국가를 입력하세요' onChange={props.handleNationChange} />
        </div>
        <div className='input-field'>
            <label>금메달</label>
            <input type="number" placeholder='0' onChange={props.handleGoldChange} />
        </div>

        <div className='input-field'>
            <label>은메달</label>
            <input type="number" placeholder='0' onChange={props.handleSilverChange} />
        </div>

        <div className='input-field'>
            <label>동메달</label>
            <input type="number" placeholder='0' onChange={props.handleBronzeChange} />
        </div>

        <div className='button-group'>
            <button type='submit'>국가 추가</button>
            <button type="button" onClick={props.update}>업데이트</button>
        </div>
    </form>
    );
}

export default MedalForm;


MedalItem  페이지
function MedalItem(props) {
    if (props.medals.length === 0) {
        return
        (<div>데이터가 없습니다.</div>)
    }
    return (
        <>



            <div className='rank-text' >
                <table>
                    <thead>
                        <tr>
                            <th>국가명</th>
                            <th>금메달</th>
                            <th>은메달</th>
                            <th>동메달</th>
                            <th>액션</th>
                        </tr>
                    </thead>
                    <tbody >

                        {props.medals.sort((a, b) => b.gold - a.gold).map((medal) => {
                            return (
                                <tr>
                                    <td>{medal.country}</td>
                                    <td>{medal.gold}</td>
                                    <td>{medal.silver}</td>
                                    <td>{medal.bronze}</td>
                                    <td>
                                        <button type='submit' className='remove-button' onClick={() => props.remove(medal.country)} >삭제</button>
                                    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>

        </>
    );
}

export default MedalItem;






app.jsx 부분

return (
    <div id='root'>
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
}

export default App


아직 많이 부족하지만 봐주셔서 감사합니다^^








