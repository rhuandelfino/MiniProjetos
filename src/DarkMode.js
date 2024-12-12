import React, { useState, useEffect } from 'react';

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  );

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>
        Alternar para {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </div>
  );
}

export default DarkMode;
