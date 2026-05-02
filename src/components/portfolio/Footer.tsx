import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2026 Eestronics Portfolio. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href="mailto:contact@eestronics.com" className="hover:underline">Email</a>
        </div>
      </div>
    </footer>
  );
}
