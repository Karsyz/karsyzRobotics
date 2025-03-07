import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Excalidraw } from "@excalidraw/excalidraw";
import { useState } from "react"

function Whiteboard() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  return (
    <section className="min-h-screen flex flex-col bg-gray-100 font-sans">
      <Navbar />
      <div className="mt-16 relative flex-1">
        <div className="absolute inset-0">
          <Excalidraw
            initialData={{
              elements: [],
              appState: {
                theme: isDarkMode ? "dark" : "light",
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Whiteboard;
