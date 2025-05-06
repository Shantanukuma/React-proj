import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("yellow"); ////// state manage ment

  // function changeBackground(color) {
  //   setColor(color)
  // }
  return (
    <div
      class="flex flex-row  items-center justify-center gap-10 h-screen"
      style={{ backgroundColor: color }}
    >
      {/* <h1 class="text-3xl font-bold mb-6 text-black drop-shadow">
        Tailwind Background Changer
      </h1> */}
      <button
        onClick={() => setColor("Red")}
        class="bg-black text-white px-6 py-3 rounded-lg shadow cursor-pointer hover:bg-gray-700 transition"
      >
        Red
      </button>
      <button
        onClick={() => setColor("blue")}
        class="bg-black text-white px-6 py-3 rounded-lg shadow cursor-pointer hover:bg-gray-700 transition"
      >
        Blue
      </button>
      <button
        onClick={() => setColor("orange")}
        class="bg-black text-white px-6 py-3 rounded-lg shadow cursor-pointer hover:bg-gray-700 transition"
      >
        Orange
      </button>
      <button
        onClick={() => setColor("green")}
        class="bg-black text-white px-6 py-3 rounded-lg shadow cursor-pointer hover:bg-gray-700 transition"
      >
        Green
      </button>
      <button
        onClick={() => setColor("white")}
        class="bg-black text-white px-6 py-3 rounded-lg shadow cursor-pointer hover:bg-gray-700 transition"
      >
        White
      </button>
      <button
        onClick={() => setColor("tomato")}
        class="bg-black text-white px-6 py-3 rounded-lg shadow cursor-pointer hover:bg-gray-700 transition"
      >
        tomato
      </button>
      <button
        onClick={() => setColor("cyan")}
        class="bg-black text-white px-6 py-3 rounded-lg shadow cursor-pointer hover:bg-gray-700 transition"
      >
        Cyan
      </button>
    </div>
  );
}

export default App;
