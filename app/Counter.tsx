"use client";

import React, { useState, useEffect } from "react";

const Counter = () => {
  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const countDownDate = new Date("April 16, 2026 02:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setDay(0);
        setHours(0);
        setMin(0);
        setSec(0);
        return;
      }

      setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMin(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSec(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { value: hours, label: 'Hours' },
    { value: min, label: 'Minutes' },
    { value: sec, label: 'Seconds' },
  ];

  return (
    <div className="relative mt-5">
      <div className="text-center">
        <div className="text-white flex justify-center items-start gap-8">
          {timeUnits.map((unit, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="shadow-2xl shadow-blue-500/50 bg-gradient-to-tr from-sky-900 to-neutral-900 rounded-2xl p-1"
              >
                <div className="backdrop-blur-sm font-bold rounded-xl p-6 text-center tabular-nums bg-black/20">
                  <p className="text-9xl font-bold">
                    {unit.value.toString().padStart(2, "0")}
                  </p>
                </div>
              </div>
              <p className="text-xl font-semibold text-gray-200 mt-4 tracking-wider">{unit.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;