import React, { useState } from 'react';

const wines = [
  'Malbec - Bodega A',
  'Cabernet Sauvignon - Bodega B',
  'Merlot - Bodega C'
]; // Lista de ejemplo

function SearchPanel() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setResults(wines.filter(wine => wine.toLowerCase().includes(searchQuery.toLowerCase())));
  };

  return (
    <div>
      <h1>Panel de Búsqueda</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={handleSearch}
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPanel;
