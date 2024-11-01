function MedalItem(props) {
    return (
        <>
            {props.medals.length > 0 ? (props.medals.sort((a, b) => b.gold - a.gold).map((medal) => (

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
                    <tbody>
                        <tr>
                            <td>{medal.country}</td>
                            <td>{medal.gold}</td>
                            <td>{medal.silver}</td>
                            <td>{medal.bronze}</td>
                            <td>
                                <button type='submit' className='remove-button' onClick={() => props.remove(medal.country)} >삭제</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ))) : (<div>데이터가 없습니다.</div>)
        }
        </>
    );
}

export default MedalItem;







