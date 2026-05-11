import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [results, setResults] = useState(null);

  const calculateBmi = () => {
    if (!height || !weight) {
      setResults({ message: "Please enter both height and weight.", category: "error" });
      return;
    }

    const heightMeters = height / 100;
    const bmi = (weight / (heightMeters * heightMeters)).toFixed(1);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    setResults({ bmi, category });
  };

  return (
    <div className="container">
      <div className="calculator-card">
        <h1>BMI Calculator</h1>
        
        <div className="input-group">
          <label>Height (cm)</label>
          <input 
            type="number" 
            placeholder="e.g. 175" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Weight (kg)</label>
          <input 
            type="number" 
            placeholder="e.g. 70" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <button className="calc-btn" onClick={calculateBmi}>Calculate BMI</button>

        {results && (
          <div className={`results-box ${results.category?.toLowerCase()}`}>
            {results.bmi ? (
              <>
                <p className="bmi-score">{results.bmi}</p>
                <p className="bmi-category">{results.category}</p>
              </>
            ) : (
              <p className="error-msg">{results.message}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;