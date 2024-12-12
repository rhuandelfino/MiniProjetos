import React, { useState } from 'react';



function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
            <p>Este é o conteúdo do modal.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
