import { useEffect, useState } from 'react';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor glow */}
      <div
        className="fixed pointer-events-none z-50 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="w-10 h-10 rounded-full bg-primary/30 blur-md animate-pulse"></div>
      </div>

      {/* Dragon fire trail */}
      <div
        className="fixed pointer-events-none z-40 transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x - 15,
          top: mousePosition.y - 15,
        }}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-dragon opacity-40 blur-sm"></div>
      </div>

      {/* Inner core */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
        }}
      >
        <div className="w-1 h-1 rounded-full bg-primary"></div>
      </div>

      {/* Sparks effect on movement */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="fixed pointer-events-none z-30 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - Math.random() * 40 + 20,
            top: mousePosition.y - Math.random() * 40 + 20,
          }}
        >
          <div 
            className="w-0.5 h-0.5 rounded-full bg-secondary animate-ping"
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: '0.8s'
            }}
          ></div>
        </div>
      ))}
    </>
  );
};

export default MouseFollower;