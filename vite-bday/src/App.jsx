import './App.css';
import { useState, useRef, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState("Wishing you a fantastic day filled with joy and laughter!");
  const [showButton, setShowButton] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const audioRef = useRef(null);
  const imageContainerRef = useRef(null);

  const handleClick = () => {
    setMessage("Hope your birthday is as amazing as you are! 🎈🎁");
    setShowButton(true);
    playMusic();
  };

  const toggleImages = () => {
    setShowImages(!showImages);
  };

  const playMusic = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (showImages) {
      const interval = setInterval(() => {
        setScrollPosition((prev) => (prev + 1) % 300); // Adjust value for speed
      }, 30);
      return () => clearInterval(interval);
    }
  }, [showImages]);

  return (
    <div className="app-container">
      <h1>🎉 Happy Birthday! 🎂</h1>
      <p>{message}</p>
      <button onClick={handleClick}>Click for a Surprise</button>

      {showButton && (
        <>
          <button onClick={toggleImages}>{showImages ? "Hide Pictures" : "Show Pictures"}</button>
          <button onClick={playMusic}>{isPlaying ? "Pause Music 🎵" : "Play Music 🎶"}</button>
        </>
      )}

      {showImages && (
        <div className="image-container" ref={imageContainerRef} style={{ transform: `translateX(-${scrollPosition}px)` }}>
          <img src="/BDAY1.jpeg" alt="BDAY1" className="birthday-image expanding-image" />
          <img src="/BDAY2.jpeg" alt="BDAY2" className="birthday-image expanding-image" />
          <img src="/BDAY3.jpeg" alt="BDAY3" className="birthday-image expanding-image" />
          <img src="/BDAY4.jpeg" alt="BDAY4" className="birthday-image expanding-image" />
          <img src='/BDAY5.jpeg' alt='BDAY5' className='birthday-image expanding-image' />
          <img src='/BDAY6.jpeg' alt='BDAY6' className='birthday-image expanding-image' />
        </div>
      )}

      <audio ref={audioRef} src="/APT.mp3" loop></audio>
    </div>
  );
}

export default App;
