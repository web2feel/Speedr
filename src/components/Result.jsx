import React from "react";

function Result({ result }) {
  return <div className="bg-gradient-to-br from-indigo-700 to-indigo-900  shadow rounded-lg p-8 my-4 text-center text-2xl text-white">
      Your media will run for <br/>
      <span className="text-4xl">
      { result.hours > 1 ? `${result.hours} Hours ` : `${result.hours} Hour `}
      { result.minutes > 0 ? `${result.minutes} Minutes` : ''}
      </span>
   </div>;
}

export default Result;
