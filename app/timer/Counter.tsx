"use client";
import React, { useState, useEffect, useRef } from "react";

const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60 * 60 * 1000); // 30 hours in ms
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const endTimeRef = useRef(null);

  useEffect(() => {
    if (running) {
      endTimeRef.current = Date.now() + timeLeft;
      intervalRef.current = setInterval(() => {
        const distance = endTimeRef.current - Date.now();
        if (distance <= 0) {
          clearInterval(intervalRef.current);
          setTimeLeft(0);
          setRunning(false);
          return;
        }
        setTimeLeft(distance);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const min = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const timeUnits = [
    { value: hours, label: "Hours" },
    { value: min, label: "Minutes" },
    { value: sec, label: "Seconds" },
  ];

  const handleReset = () => {
    setRunning(false);
    setTimeLeft(30 * 60 * 60 * 1000);
  };

  return (
    <div className="relative mt-5">
      <div className="text-center">
        <div className="text-white flex justify-center items-start gap-8">
          {timeUnits.map((unit, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="shadow-2xl shadow-blue-500/50 bg-gradient-to-tr from-sky-900 to-neutral-900 rounded-2xl p-1">
                <div className="backdrop-blur-sm font-bold rounded-xl p-6 text-center tabular-nums bg-black/20">
                  <p className="text-9xl font-bold">
                    {unit.value.toString().padStart(2, "0")}
                  </p>
                </div>
              </div>
              <p className="text-xl font-semibold text-gray-200 mt-4 tracking-wider">
                {unit.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => setRunning((prev) => !prev)}
            disabled={timeLeft === 0}
            className="px-10 py-3 rounded-xl text-white font-semibold text-lg bg-gradient-to-tr from-sky-700 to-sky-500 shadow-lg shadow-blue-500/40 hover:from-sky-600 hover:to-sky-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            {running ? "Pause" : "Start"}
          </button>
          <button
            onClick={handleReset}
            className="px-10 py-3 rounded-xl text-white font-semibold text-lg bg-gradient-to-tr from-neutral-700 to-neutral-600 shadow-lg hover:from-neutral-600 hover:to-neutral-500 transition-all"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;