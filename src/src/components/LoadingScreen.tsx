import { useEffect, useState } from 'react';
import dragonLogo from '@/assets/dragon-fist-logo.png';

const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState('Entering the Dojo');
  
  const loadingMessages = [
    'Entering the Dojo',
    'Preparing Strike',
    'Channeling Chi',
    'Ready for Combat',
    'Enter the Dragon'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText(prev => {
        const currentIndex = loadingMessages.indexOf(prev);
        return loadingMessages[(currentIndex + 1) % loadingMessages.length];
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-shadow flex items-center justify-center z-50">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Dragon Logo Animation */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-dragon rounded-full blur-lg opacity-50 animate-pulse scale-110"></div>
          <div className="relative w-24 h-24 mx-auto">
            <img 
              src={dragonLogo} 
              alt="Dragon Fist" 
              className="w-full h-full object-contain animate-spin-slow dragon-glow"
              style={{
                filter: 'drop-shadow(0 0 20px hsl(0 89% 51% / 0.8))',
                animation: 'martial-pulse 2s ease-in-out infinite'
              }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-3xl font-martial font-bold text-dragon mb-6 animate-fade-in">
          {loadingText}
        </h2>

        {/* Martial Arts Loading Bars */}
        <div className="w-64 mx-auto mb-6">
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-8 martial-gradient rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.2s'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Strike Animation */}
        <div className="relative w-48 h-1 mx-auto bg-border rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-full martial-gradient rounded-full transform -translate-x-full animate-strike"></div>
        </div>

        {/* Chi Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-secondary rounded-full animate-float"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;