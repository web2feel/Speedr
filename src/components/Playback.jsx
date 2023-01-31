import React from "react";

function Playback({setMinutes,setHours}) {
  return (
    <div className="bg-white shadow rounded-lg p-6 my-4">
      <h3 className="text-xl font-bold text-indigo-800 mb-4">
        Playback Duration
      </h3>
      <div className="flex gap-6">
        <div className="flex flex-col flex-1">
          <label htmlFor="hours" className="text-indigo-900">Hours</label>
          <input
            type="number"
            id="hours"
            className="block w-full rounded border-indigo-200 px-2 py-3 min-w-fit"
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="minutes" className="text-indigo-900">Minutes</label>
          <input
            type="number"
            id="minutes"
            className="block w-full rounded border-indigo-200 px-2 py-3 min-w-fit"
            onChange={(e) => setMinutes(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Playback;
