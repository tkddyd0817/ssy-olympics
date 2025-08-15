import { useDispatch, useSelector } from "react-redux";
import { deleteMedals } from "../redux/MedalsSlice";

function MedalItem() {
  const dispatch = useDispatch();
  const medals = useSelector((state) => state.medals.medals);

  const handleDelete = (id) => {
    dispatch(deleteMedals(id));
    alert("삭제완료");
    return;
  };

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
                  <td>{medal.country}</td>
                  <td>{medal.gold}</td>
                  <td>{medal.silver}</td>
                  <td>{medal.bronze}</td>
                  <td>
                    <button
                      type="button"
                      className="remove-button"
                      onClick={() => handleDelete(medal.id)}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MedalItem;
