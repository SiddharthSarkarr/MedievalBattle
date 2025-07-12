import React, { useState } from "react";
import InputForm from "./Components/SampleInput";
import ResultDisplay from "./Components/SampleOutput";
import { evaluateArrangement } from "./Helpers/Estimator";
import { getAllPermutations } from "./Helpers/Calculation";
import "./App.css";

const parseInput = (input) => {
  return input.split(";").map((item) => {
    const [cls, count] = item.split("#");
    return { class: cls.trim(), count: parseInt(count.trim()) };
  });
};

function App() {
  const [result, setResult] = useState(null);

  const handleSubmit = (ownInput, enemyInput) => {
    const ownPlatoons = parseInput(ownInput);
    const enemyPlatoons = parseInput(enemyInput);

    const permutations = getAllPermutations(ownPlatoons);

    for (let perm of permutations) {
      const { winCount } = evaluateArrangement(perm, enemyPlatoons);
      if (winCount >= 3) {
        setResult(perm);
        return;
      }
    }

    setResult("There is no chance of winning");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 border shadow-lg rounded p-4 bg-white">
      <h1 className="text-xl font-bold mb-4 text-center">Medieval Battle Planner</h1>
      <InputForm onSubmit={handleSubmit} />
      <ResultDisplay result={result} />
    </div>
  );
}

export default App;
