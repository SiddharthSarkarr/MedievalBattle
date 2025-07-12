import React from "react";

export default function ResultDisplay({ result }) {
  return (
    <div className="p-4">
      {result ? (
        result === "There is no chance of winning" ? (
          <p className="text-red-500 font-bold">{result}</p>
        ) : (
          <div>
            <p className="font-bold mb-2">Winning Arrangement:</p>
            <p className="bg-gray-100 p-2 rounded">
              {result.map((p) => `${p.class}#${p.count}`).join(";")}
            </p>
          </div>
        )
      ) : null}
    </div>
  );
}
