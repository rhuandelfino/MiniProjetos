import React, { useState } from 'react';

function ToggleTema() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div style={{ backgroundColor: isDark ? '#1A1A19' : 'white', color: isDark ? 'white' : '#1A1A19' }}>
      <p>{isDark ? 'Tema Escuro' : 'Tema Claro'}</p>
      <button onClick={toggleTheme}>
        Alternar para {isDark ? 'Claro' : 'Escuro'}
      </button>
    </div>
  );
}

export default ToggleTema