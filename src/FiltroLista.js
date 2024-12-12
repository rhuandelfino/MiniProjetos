import React, { useState } from 'react';

function FiltroLista() {
  const [search, setSearch] = useState('');
  const items = ['Banana', 'Maçã', 'Laranja', 'Manga', 'Uva'];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FiltroLista;