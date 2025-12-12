import React from 'react';
import { Scene } from './components/Scene';
import { HandTracker } from './components/HandTracker';
import { ExperienceProvider, useExperience } from './context/ExperienceContext';
import { AppMode } from './types';

const UI: React.FC = () => {
  const { mode, addPhoto, handData } = useExperience();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      addPhoto(e.target.files[0]);
    }
  };

  if (mode === AppMode.LOADING) {
    return (
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
        <div className="w-16 h-16 border-t-2 border-l-2 border-[#C0C0C0] rounded-full animate-spin mb-8"></div>
        <h2 className="font-cinzel text-xl tracking-[0.2em] text-[#C0C0C0]">
          Loading Christmas Memory
        </h2>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Header */}
      <header className="w-full flex justify-center pt-8">
        <h1 className="font-cinzel text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFFACD] to-[#D4AF37] drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
          Merry Christmas
        </h1>
      </header>

      {/* Controls / Instructions */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4">
        
        {/* Upload Button */}
        <label className="pointer-events-auto cursor-pointer group">
          <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
          <div className="px-8 py-3 border border-[#D4AF37] bg-black/50 backdrop-blur-md text-[#D4AF37] font-serif tracking-widest uppercase text-sm transition-all group-hover:bg-[#D4AF37] group-hover:text-black">
            Add Photo Memory
          </div>
        </label>

        {/* Gesture Guide */}
        <div className="flex gap-8 text-[#C0C0C0] text-xs font-serif tracking-widest opacity-70 mt-4">
          <div className={`flex flex-col items-center transition-colors ${mode === AppMode.TREE ? 'text-[#D4AF37]' : ''}`}>
            <span className="text-xl mb-1">✊</span>
            <span>FIST: Tree</span>
          </div>
          <div className={`flex flex-col items-center transition-colors ${mode === AppMode.SCATTER ? 'text-[#7A00E6]' : ''}`}>
            <span className="text-xl mb-1">🖐</span>
            <span>OPEN: Scatter</span>
          </div>
          <div className={`flex flex-col items-center transition-colors ${mode === AppMode.FOCUS ? 'text-[#D4AF37]' : ''}`}>
            <span className="text-xl mb-1">👌</span>
            <span>PINCH: Focus</span>
          </div>
        </div>
        
        {/* Tracking Status */}
        <div className="text-[10px] text-gray-600 mt-2">
           Tracking: {handData.current.detected ? 'Active' : 'Searching...'}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ExperienceProvider>
      <div className="relative w-full h-screen bg-black">
        <HandTracker />
        <UI />
        <Scene />
      </div>
    </ExperienceProvider>
  );
};

export default App;