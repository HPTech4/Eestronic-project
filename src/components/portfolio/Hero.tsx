import React, { useEffect, useState } from "react";
import profileImage from "../../Assets/IMG-20251020-WA0019.jpg";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "IOT Expert | Embedded Systems Engineer | AI Enthusiast";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero flex flex-col items-center justify-center text-center py-20">
      <aside className="profile-card">
        <div className="profile-media">
          <img
            src={profileImage}
            alt="Portrait of Olaoye Blessing Immanuel"
            className="rounded-full w-40 h-40"
          />
        </div>
      </aside>
      <h1 className="text-4xl font-bold mt-6">Olaoye Blessing Immanuel</h1>
      <p className="text-lg mt-4">{text}</p>
      <div className="mt-6">
        <a href="#work" className="btn btn-primary mr-4">
          View Projects
        </a>
        <a href="#contact" className="btn btn-secondary">
          Contact Me
        </a>
      </div>
    </section>
  );
}
