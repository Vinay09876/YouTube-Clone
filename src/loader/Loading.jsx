import React from "react";

function Loading() {
  return (
    <div>
      <span className="flex items-center justify-center h-screen text-2xl">
        {/* for loading we have given css in index.css file */}
        <div class="loader"></div>
      </span>
    </div>
  );
}

export default Loading;
