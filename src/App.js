import "./App.css";
import { useState } from "react";
import Dropdown from "./components/Dropdown";

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;
    const resultMale = gramsLeft / (weight * 0.7);
    const resultFemale = gramsLeft / (weight * 0.6);
    let resultCalc;

    if (gender === "male" && resultMale >= 0) {
      resultCalc = resultMale;
    } else if (gender === "female" && resultFemale >= 0) {
      resultCalc = resultFemale;
    } else {
      resultCalc = 0;
    }
    setResult(resultCalc);
  }

  return (
    <>
      <h3>Calculating blood alcohol level</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight in kg</label>
          <br />
          <input
            name="weight"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Bottles </label>
          <br /> 
          <select value={bottles} onChange={(e) => setBottles(e.target.value)}>
            <Dropdown />
          </select> 
        </div>
        <div>
          <label>Time in hr</label>
          <br />
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            <Dropdown />  
          </select>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            defaultChecked
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="female">Female</label>
        </div>
        <div>
          <label>Blood alcohol level</label>
          <br />
          <output>{result.toFixed(2)}</output>
          <br />
        </div>
        <button>Calculate</button>
      </form>
    </>
  );
}