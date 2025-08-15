import { useSelector } from "react-redux";

function MedalItem() {
  const medals = useSelector((state) => state.medals.medals);
  
  return (
    <>
      <div className="rank-text">
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
            {[...medals]
              .sort(
                (a, b) =>
                  b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze
              )
              .map((medal) => (
                <tr key={medal.id}>
                  <td>국가명: {medal.country}</td>
                  <td>금메달: {medal.gold}</td>
                  <td>은메달: {medal.silver}</td>
                  <td>동메달: {medal.bronze}</td>
                  <td>
                    <button type="submit" className="remove-button">
                      삭제
                    </button>
                  </td>
                </tr>
              ))}

            {/* {props.medals.sort((a, b) => b.gold - a.gold).map((medal) => {
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
                        })} */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MedalItem;
