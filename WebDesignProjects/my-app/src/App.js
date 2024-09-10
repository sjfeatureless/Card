// src/App.js
import React, { useRef, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import './App.css';
import Gojo from './asset/Gojo.png';
import White from './asset/White.png';
import Rose from './asset/Rose.png';
import Cooper from './asset/Cooper.png';
import Adele from './asset/AdeleVanSolace.png';
import Lili from './asset/Lili Sis.png';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];

    const createParticle = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'purple';
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width || particle.x < 0) particle.speedX *= -1;
        if (particle.y > canvas.height || particle.y < 0) particle.speedY *= -1;
      });
      requestAnimationFrame(drawParticles);
    };

    for (let i = 0; i < 100; i++) createParticle();
    drawParticles();
  }, []);

  const profiles = [
    { name: 'Shayne(jk)', age: 21, location: 'Philippines', image: Gojo },
    { name: 'Snow', age: 25, location: 'North Pole', image: White },
    { name: 'Rose', age: 21, location: 'France', image: Rose },
    { name: 'Cooper(my cat)', age: 1000, location: 'Chicago', image: Cooper },
    { name: 'Adele Van Solace', age: 25, location: 'Houston', image: Adele },
    { name: 'Lili Sis', age: 13, location: 'Home', image: Lili },
  ];

  return (
    <div className="App">
      <canvas ref={canvasRef} className="canvas" />
      <div className="profile-grid">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            age={profile.age}
            location={profile.location}
            image={profile.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
