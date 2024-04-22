"use client";
import { useState } from "react";

const Weather = () => {
  // change theme if I tap on the weather card
  const [weatherTheme, setTheme] = useState("dark");
  const changeTheme = () => {
    if (weatherTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <div
        onClick={changeTheme}
        className={`mt-8 flex transform cursor-pointer select-none flex-col justify-between rounded-3xl bg-gradient-to-b p-4

      text-white transition-transform duration-300 ease-in-out hover:scale-105 focus:scale-105 active:scale-105 md:p-10
    ${
      weatherTheme === "dark"
        ? "from-gray-900 to-gray-600"
        : "from-blue-600 to-sky-400"
    }
    `}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="m-0">Nancy</p>
            <p className="m-0 text-5xl">21°</p>
          </div>
          <div className="text-right text-sm md:text-base">
            <svg
              xmlns="http://www.w3 .org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-auto h-5 w-5"
            >
              <path d="M1 12.5A4.5 4.5 0 005.5 17H15a4 4 0 001.866-7.539 3.504 3.504 0 00-4.504-4.272A4.5 4.5 0 004.06 8.235 4.502 4.502 0 001 12.5z" />
            </svg>
            <p className="m-0 mt-2 font-medium leading-tight">mostly cloudy</p>
            <p className="m-0 font-medium leading-tight">H:72° L:58°</p>
          </div>
        </div>
        <div className="mt-2 flex w-full justify-between md:mt-6">
          {[1, 2, 3, 4, 5, 6].map((number, i) => (
            <div key={i} className="m-0 flex flex-col items-center gap-1">
              <p className="mb-0 text-xs opacity-75 md:text-sm">{number}PM</p>
              {number < 4 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M1 12.5A4.5 4.5 0 005.5 17H15a4 4 0 001.866-7.539 3.504 3.504 0 00-4.504-4.272A4.5 4.5 0 004.06 8.235 4.502 4.502 0 001 12.5z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-400"
                >
                  <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                </svg>
              )}
              <p className="m-0 text-sm font-medium md:text-base">67°</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8 mt-4">
        <figcaption>Try tapping on me to switch theme.</figcaption>
      </div>
    </>
  );
};

export default Weather;
