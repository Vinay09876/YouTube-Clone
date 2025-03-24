import moment from "moment";
import React from "react";

function Time({ time }) {
  const timeLength = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss");
  return (
    <div>
      <span className="absolute bottom-2 right-2 bg-black text-white py-2 px-2 rounded-md text-xs">
        {timeLength}
      </span>
    </div>
  );
}

export default Time;
