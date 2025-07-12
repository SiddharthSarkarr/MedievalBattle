import React, { useState } from "react";

export default function InputForm({ onSubmit }) {
  const [ownPlatoons, setOwnPlatoons] = useState([
    "Spearmen#10",
    "Militia#30",
    "FootArcher#20",
    "LightCavalry#1000",
    "HeavyCavalry#120",
  ]);
  const [enemyPlatoons, setEnemyPlatoons] = useState([
    "Militia#10",
    "Spearmen#10",
    "FootArcher#1000",
    "LightCavalry#120",
    "CavalryArcher#100",
  ]);

  const handleSubmit = () => {
    const ownInput = ownPlatoons.join(";");
    const enemyInput = enemyPlatoons.join(";");
    onSubmit(ownInput, enemyInput);
  };

  return (
    <div className="space-y-4 p-4">
      <div>
        <h2 className="font-bold mb-2">⚔️ Your Platoons</h2>
        <textarea
          className="w-full p-2 border rounded"
          rows="5"
          value={ownPlatoons.join("\n")}
          onChange={(e) => setOwnPlatoons(e.target.value.split("\n"))}
          placeholder="Enter one platoon per line: e.g. Spearmen#10"
        />
      </div>

      <div>
        <h2 className="font-bold mb-2">🏰 Enemy Platoons</h2>
        <textarea
          className="w-full p-2 border rounded"
          rows="5"
          value={enemyPlatoons.join("\n")}
          onChange={(e) => setEnemyPlatoons(e.target.value.split("\n"))}
          placeholder="Enter one platoon per line: e.g. Militia#10"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Find Winning Arrangement
      </button>
    </div>
  );
}
