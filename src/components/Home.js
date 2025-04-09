import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import wineryIcon from '../assets/wineryIcon.webp';
import varietalIcon from '../assets/varietalIcon.webp';
import homeLogo from '../assets/homeLogo.webp';
import products from '../products.json';
import ProductCard from './ProductCard'; // Importamos el nuevo componente

function Home({ addToCart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setResults(
      products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.variety.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.winery.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  return (
    <div>
      <div className='home-primary-container'>
        <img className='home-logo' src={homeLogo} alt="Penitentes Wines" />
        <h1 className='d-none'>Penitentes Wines</h1>
      </div>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={handleSearch}
      />
      <div className="product-list">
        {results.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
      <p>Selecciona una opción de búsqueda adicional:</p>
      <ul className="home-buttons-container">
        <li className="button-item">
          <Link to="/winery-search" className="button">
            <img src={wineryIcon} alt="Buscar por Bodega" className="button-icon" />
            <span>Buscar por Bodega</span>
          </Link>
        </li>
        <li className="button-item">
          <Link to="/varietal-search" className="button">
            <img src={varietalIcon} alt="Buscar por Varietal" className="button-icon" />
            <span>Buscar por Varietal</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
