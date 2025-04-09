import React, { useState } from 'react';
import products from '../products.json';
import grapeIcon from '../assets/grapeIcon.webp';
import './VarietalSearch.css';


function VarietalSearch({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterApplied, setFilterApplied] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterVarietal = (varietal) => {
    setSearchTerm(varietal);
    setFilterApplied(true);
  };

  const handleClearFilter = () => {
    setSearchTerm("");
    setFilterApplied(false);
  };

  const filteredProducts = products.filter(product =>
    product.variety.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatPrice = (price) => {
    if (typeof price !== 'number') price = Number(price);
    return price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
  };

  return (
    <div>
      <h2>Buscar por Varietal</h2>
      <input
        type="text"
        placeholder="Buscar varietal..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {!filterApplied && (
        <div className='varietal-buttons-container'>
          <button onClick={() => handleFilterVarietal("Albariño")} className="varietal-button">
            <img src={grapeIcon} alt="Albariño" className="varietal-logo" />
            Albariño
          </button>
          <button onClick={() => handleFilterVarietal("Ancellotta")} className="varietal-button">
            <img src={grapeIcon} alt="Ancellotta" className="varietal-logo" />
            Ancellotta
          </button>
          <button onClick={() => handleFilterVarietal("Bonarda")} className="varietal-button">
            <img src={grapeIcon} alt="Bonarda" className="varietal-logo" />
            Bonarda
          </button>
          <button onClick={() => handleFilterVarietal("Blend")} className="varietal-button">
            <img src={grapeIcon} alt="Blend" className="varietal-logo" />
            Blend
          </button>
          <button onClick={() => handleFilterVarietal("Cabernet Sauvignon")} className="varietal-button">
            <img src={grapeIcon} alt="Cabernet Sauvignon" className="varietal-logo" />
            Cabernet Sauvignon
          </button>
          <button onClick={() => handleFilterVarietal("Cabernet Franc")} className="varietal-button">
            <img src={grapeIcon} alt="Cabernet Franc" className="varietal-logo" />
            Cabernet Franc
          </button>
          <button onClick={() => handleFilterVarietal("Caladoc")} className="varietal-button">
            <img src={grapeIcon} alt="Caladoc" className="varietal-logo" />
            Caladoc
          </button>
          <button onClick={() => handleFilterVarietal("Carmenere")} className="varietal-button">
            <img src={grapeIcon} alt="Carmenere" className="varietal-logo" />
            Carmenere
          </button>
          <button onClick={() => handleFilterVarietal("Chardonnay")} className="varietal-button">
            <img src={grapeIcon} alt="Chardonnay" className="varietal-logo" />
            Chardonnay
          </button>
          <button onClick={() => handleFilterVarietal("Chenin")} className="varietal-button">
            <img src={grapeIcon} alt="Chenin" className="varietal-logo" />
            Chenin
          </button>
          <button onClick={() => handleFilterVarietal("Criolla")} className="varietal-button">
            <img src={grapeIcon} alt="Criolla" className="varietal-logo" />
            Criolla
          </button>
          <button onClick={() => handleFilterVarietal("Dulce")} className="varietal-button">
            <img src={grapeIcon} alt="Dulce" className="varietal-logo" />
            Dulce
          </button>
          <button onClick={() => handleFilterVarietal("Gewustraminer")} className="varietal-button">
            <img src={grapeIcon} alt="Gewustraminer" className="varietal-logo" />
            Gewustraminer
          </button>
          <button onClick={() => handleFilterVarietal("Malbec")} className="varietal-button">
            <img src={grapeIcon} alt="Malbec" className="varietal-logo" />
            Malbec
          </button>
          <button onClick={() => handleFilterVarietal("Merlot")} className="varietal-button">
            <img src={grapeIcon} alt="Merlot" className="varietal-logo" />
            Merlot
          </button>
          <button onClick={() => handleFilterVarietal("Moscatel")} className="varietal-button">
            <img src={grapeIcon} alt="Moscatel" className="varietal-logo" />
            Moscatel
          </button>
          <button onClick={() => handleFilterVarietal("Naranjo")} className="varietal-button">
            <img src={grapeIcon} alt="Naranjo" className="varietal-logo" />
            Naranjo
          </button>
          <button onClick={() => handleFilterVarietal("Petit Verdot")} className="varietal-button">
            <img src={grapeIcon} alt="Petit Verdot" className="varietal-logo" />
            Petit Verdot
          </button>
          <button onClick={() => handleFilterVarietal("Pinot Noir")} className="varietal-button">
            <img src={grapeIcon} alt="Pinot Noir" className="varietal-logo" />
            Pinot Noir
          </button>
          <button onClick={() => handleFilterVarietal("Riesling")} className="varietal-button">
            <img src={grapeIcon} alt="Riesling" className="varietal-logo" />
            Riesling
          </button>
          <button onClick={() => handleFilterVarietal("Rosado")} className="varietal-button">
            <img src={grapeIcon} alt="Rosado" className="varietal-logo" />
            Rosado
          </button>
          <button onClick={() => handleFilterVarietal("Sauvignon Blanc")} className="varietal-button">
            <img src={grapeIcon} alt="Sauvignon Blanc" className="varietal-logo" />
            Sauvignon Blanc
          </button>
          <button onClick={() => handleFilterVarietal("Semillón")} className="varietal-button">
            <img src={grapeIcon} alt="Semillón" className="varietal-logo" />
            Semillón
          </button>
          <button onClick={() => handleFilterVarietal("Syrah")} className="varietal-button">
            <img src={grapeIcon} alt="Syrah" className="varietal-logo" />
            Syrah
          </button>
          <button onClick={() => handleFilterVarietal("Tannat")} className="varietal-button">
            <img src={grapeIcon} alt="Tannat" className="varietal-logo" />
            Tannat
          </button>
          <button onClick={() => handleFilterVarietal("Tempranillo")} className="varietal-button">
            <img src={grapeIcon} alt="Tempranillo" className="varietal-logo" />
            Tempranillo
          </button>
          <button onClick={() => handleFilterVarietal("Teroldego")} className="varietal-button">
            <img src={grapeIcon} alt="Teroldego" className="varietal-logo" />
            Teroldego
          </button>
          <button onClick={() => handleFilterVarietal("Torrontés")} className="varietal-button">
            <img src={grapeIcon} alt="Torrontés" className="varietal-logo" />
            Torrontés
          </button>
          <button onClick={() => handleFilterVarietal("Viognier")} className="varietal-button">
            <img src={grapeIcon} alt="Viognier" className="varietal-logo" />
            Viognier
          </button>
          <button onClick={() => handleFilterVarietal("Brut")} className="varietal-button">
            <img src={grapeIcon} alt="Brut" className="varietal-logo" />
            Brut
          </button>
          <button onClick={() => handleFilterVarietal("Extra Brut")} className="varietal-button">
            <img src={grapeIcon} alt="Extra Brut" className="varietal-logo" />
            Extra Brut
          </button>
          <button onClick={() => handleFilterVarietal("Nature")} className="varietal-button">
            <img src={grapeIcon} alt="Nature" className="varietal-logo" />
            Nature
          </button>
          <button onClick={() => handleFilterVarietal("Brut Nature")} className="varietal-button">
            <img src={grapeIcon} alt="Brut Nature" className="varietal-logo" />
            Brut Nature
          </button>
        </div>
      )}


      {filterApplied && (
        <button onClick={handleClearFilter} className="varietal-button">
          Volver
        </button>
      )}
      {Object.keys(filteredProducts.reduce((acc, product) => {
        acc[product.variety] = true;
        return acc;
      }, {})).map((variety, index) => (
        <div key={index} className="varietal-group">
          <h3>{variety}</h3>
          <div className="product-list">
            {filteredProducts
              .filter(product => product.variety === variety)
              .map((product, idx) => (
                <div key={idx} className="product-card">
                  <div className='product-info'>
                    <h4>{product.name}</h4>
                    <p>Bodega: {product.winery}</p>
                    <p>Precio: {formatPrice(product.price)} ARS</p>
                  </div>
                  <div className='product-button'>
                    <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default VarietalSearch;
