import { useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addMedals, updateMedals } from "../redux/MedalsSlice";
import { toast } from "react-toastify";

function MedalForm() {
  const dispatch = useDispatch();
  const medals = useSelector((state) => state.medals.medals);

  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const resetForm = () => {
    setCountry("");
    setGold("");
    setSilver("");
    setBronze("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMedal = {
      id: Date.now(),
      country,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    };
    if (
      medals.find(
        (medal) =>
          medal.country.trim().toLowerCase() === country.trim().toLowerCase()
      )
    ) {
      toast.error("중복돤 국가입니다.");
      return;
    }
    dispatch(addMedals(newMedal));
    toast.success("국가 가 등록되었습니다.");
    resetForm();
    return;
  };

  const handleUpdate = () => {
    const currentMedal = medals.find((medal) => medal.country === country);

    if (currentMedal) {
      const currentMedalData = {
        ...currentMedal,
        country,
        gold: Number(gold),
        silver: Number(silver),
        bronze: Number(bronze),
      };
      dispatch(updateMedals(currentMedalData));
      toast.success("업데이트 완료");
      resetForm();
      return;
    } else {
      toast.error("업데이트 실패");
      return;
    }
  };

  return (
    <form className="input-group" onSubmit={handleSubmit}>
      <div className="input-field">
        <label>국가명: </label>
        <input
          type="text"
          placeholder="국가를 입력하세요"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </div>

      <div className="input-field">
        <label>금메달: </label>
        <input
          type="number"
          placeholder="0"
          value={gold}
          onChange={(e) => setGold(Number(e.target.value) || "")}
          min={0}
        />
      </div>

      <div className="input-field">
        <label>은메달: </label>
        <input
          type="number"
          placeholder="0"
          value={silver}
          onChange={(e) => setSilver(Number(e.target.value) || "")}
          min={0}
        />
      </div>

      <div className="input-field">
        <label>동메달: </label>
        <input
          type="number"
          placeholder="0"
          value={bronze}
          onChange={(e) => setBronze(Number(e.target.value) || "")}
          min={0}
        />
      </div>

      <div className="button-group">
        <button type="submit">국가 추가</button>
        <button type="button" onClick={handleUpdate}>
          업데이트
        </button>
      </div>
    </form>
  );
}

export default MedalForm;
