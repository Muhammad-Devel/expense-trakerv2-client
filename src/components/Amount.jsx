import React from "react";

function Amount({counts, total, monthlyTotal}) {
  return (
    <div className="grid grid-cols-0 grid-rows-0 gap-4 text-lg">
      <div className="col-span-5 text-md md:text-2xl font-semibold text-gray-800">
        This month : {monthlyTotal}
      </div>
      <div className="col-span-2 row-start-2 text-sm md:text-lg text-gray-700">
        Total count: {counts}
      </div>
      <div className="col-span-3 col-start-3 row-start-2 text-sm md:text-lg text-gray-700">
        All time: {total}
      </div>
    </div>
  );
}

export default Amount;
