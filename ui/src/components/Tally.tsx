import React from 'react';

const selections = [
  {
    match: "Áustria - Sérvia",
    selection: "Áustria",
    odd: 2.11
  },
  {
    match: "Irlanda - Hungria",
    selection: "Hungria",
    odd: 2.52
  },
  {
    match: "Irlanda - Hungria",
    selection: "Hungria",
    odd: 2.52
  },
  {
    match: "Irlanda - Hungria",
    selection: "Hungria",
    odd: 2.52
  },
  {
    match: "Irlanda - Hungria",
    selection: "Hungria",
    odd: 2.52
  },
  {
    match: "Irlanda - Hungria",
    selection: "Hungria",
    odd: 2.52
  }
];

function Tally() {
  return (
    <div className="flex flex-col p-4 h-96 w-80">
      <div className="mb-4">
        <h2 className="mb-2 text-lg font-bold">2 selections</h2>
      </div>
      {selections.map((selection, index) => (
        <div key={index} className="p-2 mb-4 bg-white rounded-lg shadow-md">
          <div className="mb-1 text-sm text-gray-700">{selection.match}</div>
          <div className="text-lg font-bold text-gray-900">{selection.selection}</div>
          <div className="text-sm text-gray-500">{selection.odd}</div>
        </div>
      ))}
      <div className="p-4 mt-auto bg-white rounded-lg shadow-md">
        <div className="mb-2 text-sm text-gray-700">Amount</div>
        <input type="number" className="w-full p-2 mb-2 border rounded" placeholder="Points" />
        <div className="mb-2 text-sm text-gray-700">Possible Gains</div>
        <div className="mb-4 text-lg font-bold text-gray-900">0 points</div>
        <button className="w-full p-2 btn btn-primary">Bet</button>
      </div>
    </div>
  );
}

export default Tally;
