import React from "react";

export function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">ES</h1>
      <nav className="flex gap-4">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#work" className="hover:underline">Project</a>
        <a href="/Assets/ImmanuelCV2025.pdf" download className="btn">
          Resume
        </a>
      </nav>
    </header>
  );
}
