import { useState } from 'react'
import '../App.css'


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







