import React from "react";

function Speed({ setSpeed, speed, calculateSpeed }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 my-4">
      <h3 className="text-xl font-bold text-indigo-800 mb-4">Playback Speed</h3>
      <div className="flex gap-4">
        <select
          id="calculate"
          value={speed}
          className="form-select px-2 py-3 rounded border-indigo-200 flex-1"
          onChange={(e) => {
            setSpeed(e.target.value);
          }}
        >
          <option value="2">2</option>
          <option value="1.5">1.5</option>
          <option value="1.25">1.25</option>
          <option value="1">Normal</option>
          <option value="0.75">0.75</option>
          <option value="0.5">0.5</option>
          <option value="0.25">0.25</option>
        </select>
        <button
          onClick={calculateSpeed}
          className="px-4 py-3 bg-indigo-900 hover:bg-indigo-700 duration-300 rounded text-white"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}

export default Speed;
