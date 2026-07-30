"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-slate-900 border border-slate-800 rounded-xl max-w-xs mx-auto shadow-lg">
      <h2 className="text-xl font-bold text-white">Interactive Counter</h2>
      <div
        className="text-4xl font-mono text-cyan-400"
        data-testid="count-value"
      >
        {count}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white rounded-lg transition-colors cursor-pointer"
          data-testid="decrement-button"
        >
          - Decrement
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-white rounded-lg transition-colors cursor-pointer"
          data-testid="increment-button"
        >
          Increment Bro +
        </button>
      </div>
    </div>
  );
}
