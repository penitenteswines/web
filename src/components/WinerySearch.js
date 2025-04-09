import React, { useState } from 'react';
import products from '../products.json';
import alfaCruxLogo from '../assets/alfaCruxLogo.webp';
import antigalLogo from '../assets/antigalLogo.webp';
import atamisqueLogo from '../assets/atamisqueLogo.webp';
import casarenaLogo from '../assets/casarenaLogo.webp';
import donaPaulaLogo from '../assets/donaPaulaLogo.webp';
import elEstecoLogo from '../assets/elEstecoLogo.webp';
import zuccardiLogo from '../assets/zuccardiLogo.webp';
import fincaFlichmanLogo from '../assets/flichmanLogo.webp';
import fincaLasMorasLogo from '../assets/fincaLasMorasLogo.webp';
import flechasDeLosAndesLogo from '../assets/flechasDeLosAndesLogo.webp';
import lasPerdicesLogo from '../assets/lasPerdicesLogo.webp';
import luigiBoscaLogo from '../assets/luigiBoscaLogo.webp';
import monteviejoLogo from '../assets/monteviejoLogo.webp';
import navarroCorreasLogo from '../assets/navarroCorreasLogo.webp';
import nietoSenetinerLogo from '../assets/nietoSenetinerLogo.webp';
import salenteinLogo from '../assets/salenteinLogo.webp';
import teltecaLogo from '../assets/teltecaLogo.webp';
import trapicheLogo from '../assets/trapicheLogo.webp';
import triventoLogo from '../assets/triventoLogo.webp';
import septimaLogo from '../assets/septimaLogo.webp';
import kaikenLogo from '../assets/kaikenLogo.webp';
import carmeloPattiLogo from '../assets/carmeloPattiLogo.webp';
import piumeLogo from '../assets/piumeLogo.webp';
import silleroLogo from '../assets/silleroLogo.webp';
import miVictoriaLogo from '../assets/miVictoriaLogo.webp';
import barberisLogo from '../assets/barberisLogo.webp';
import bianchiLogo from '../assets/bianchiLogo.webp';
import bressiaLogo from '../assets/bressiaLogo.webp';
import calliaLogo from '../assets/calliaLogo.webp';
import caroLogo from '../assets/caroLogo.webp';
import catenaZapataLogo from '../assets/catenaZapataLogo.webp';
import rosellBoherLogo from '../assets/rosellBoherLogo.webp';
import domaineNicoLogo from '../assets/domaineNicoLogo.webp';
import laAzulLogo from '../assets/laAzulLogo.webp';
import altalandLogo from '../assets/altalandLogo.webp';
import laPostaLogo from '../assets/laPostaLogo.webp';
import laRuralLogo from '../assets/laRuralLogo.webp';
import lopezLogo from '../assets/lopezLogo.webp';
import lucaLogo from '../assets/lucaLogo.webp';
import marquesDelSurLogo from '../assets/marquesDelSurLogo.webp';
import mendelLogo from '../assets/mendelLogo.webp';
import mosquitaMuertaLogo from '../assets/mosquitaMuertaLogo.webp';
import mummLogo from '../assets/mummLogo.webp';
import elefanteLogo from '../assets/elefanteLogo.webp';
import ukoLogo from '../assets/ukoLogo.webp';
import casaGliAmiciLogo from '../assets/casaGliAmiciLogo.webp';
import seladaLogo from '../assets/seladaLogo.webp';




function WinerySearch({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterApplied, setFilterApplied] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterWinery = (winery) => {
    setSearchTerm(winery);
    setFilterApplied(true);
  };

  const handleClearFilter = () => {
    setSearchTerm("");
    setFilterApplied(false);
  };

  const filteredProducts = products.filter(product =>
    product.winery.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatPrice = (price) => {
    if (typeof price !== 'number') price = Number(price);
    return price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
  };

  return (
    <div>
      <h2>Buscar por Bodega</h2>
      <input
        type="text"
        placeholder="Buscar bodega..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {!filterApplied && (
        <div className='winery-buttons-container'>
          <button onClick={() => handleFilterWinery("Alfa Crux")} className="winery-button">
            <img src={alfaCruxLogo} alt="Alfa Crux Logo" className="winery-logo" />
            Alfa Crux
          </button>
          <button onClick={() => handleFilterWinery("Altaland")} className="winery-button">
            <img src={altalandLogo} alt="Altaland Logo" className="winery-logo" />
            Altaland
          </button>
          <button onClick={() => handleFilterWinery("Antigal")} className="winery-button">
            <img src={antigalLogo} alt="Antigal Logo" className="winery-logo" />
            Antigal
          </button>
          <button onClick={() => handleFilterWinery("Atamisque")} className="winery-button">
            <img src={atamisqueLogo} alt="Atamisque Logo" className="winery-logo" />
            Atamisque
          </button>
          <button onClick={() => handleFilterWinery("Barberis")} className="winery-button">
            <img src={barberisLogo} alt="Barberis Logo" className="winery-logo" />
            Barberis
          </button>
          <button onClick={() => handleFilterWinery("Bianchi")} className="winery-button">
            <img src={bianchiLogo} alt="Bianchi Logo" className="winery-logo" />
            Bianchi
          </button>
          <button onClick={() => handleFilterWinery("Bressia")} className="winery-button">
            <img src={bressiaLogo} alt="Bressia Logo" className="winery-logo" />
            Bressia
          </button>
          <button onClick={() => handleFilterWinery("Callia")} className="winery-button">
            <img src={calliaLogo} alt="Callia Logo" className="winery-logo" />
            Callia
          </button>
          <button onClick={() => handleFilterWinery("Carmelo Patti")} className="winery-button">
            <img src={carmeloPattiLogo} alt="Carmelo Patti Logo" className="winery-logo" />
            Carmelo Patti
          </button>
          <button onClick={() => handleFilterWinery("Caro")} className="winery-button">
            <img src={caroLogo} alt="Caro Logo" className="winery-logo" />
            Caro
          </button>
          <button onClick={() => handleFilterWinery("Casa Gli Amici")} className="winery-button">
            <img src={casaGliAmiciLogo} alt="Casa Gli Amici Logo" className="winery-logo" />
            Casa Gli Amici
          </button>
          <button onClick={() => handleFilterWinery("Casarena")} className="winery-button">
            <img src={casarenaLogo} alt="Casarena Logo" className="winery-logo" />
            Casarena
          </button>
          <button onClick={() => handleFilterWinery("Catena Zapata")} className="winery-button">
            <img src={catenaZapataLogo} alt="Catena Zapata Logo" className="winery-logo" />
            Catena Zapata
          </button>
          <button onClick={() => handleFilterWinery("Domaine Nico")} className="winery-button">
            <img src={domaineNicoLogo} alt="Domaine Nico Logo" className="winery-logo" />
            Domaine Nico
          </button>
          <button onClick={() => handleFilterWinery("Doña Paula")} className="winery-button">
            <img src={donaPaulaLogo} alt="Doña Paula Logo" className="winery-logo" />
            Doña Paula
          </button>
          <button onClick={() => handleFilterWinery("El Esteco")} className="winery-button">
            <img src={elEstecoLogo} alt="El Esteco Logo" className="winery-logo" />
            El Esteco
          </button>
          <button onClick={() => handleFilterWinery("Elefante")} className="winery-button">
            <img src={elefanteLogo} alt="Elefante Logo" className="winery-logo" />
            Elefante
          </button>
          <button onClick={() => handleFilterWinery("Finca Flichman")} className="winery-button">
            <img src={fincaFlichmanLogo} alt="Finca Flichman Logo" className="winery-logo" />
            Finca Flichman
          </button>
          <button onClick={() => handleFilterWinery("Finca Las Moras")} className="winery-button">
            <img src={fincaLasMorasLogo} alt="Finca Flichman Logo" className="winery-logo" />
            Finca Las Moras
          </button>
          <button onClick={() => handleFilterWinery("Flechas De Los Andes")} className="winery-button">
            <img src={flechasDeLosAndesLogo} alt="Flechas De Los Andes Logo" className="winery-logo" />
            Flechas De Los Andes
          </button>
          <button onClick={() => handleFilterWinery("Kaiken")} className="winery-button">
            <img src={kaikenLogo} alt="Kaiken Logo" className="winery-logo" />
            Kaiken
          </button>
          <button onClick={() => handleFilterWinery("La Azul")} className="winery-button">
            <img src={laAzulLogo} alt="La Azul Logo" className="winery-logo" />
            La Azul
          </button>
          <button onClick={() => handleFilterWinery("La Posta")} className="winery-button">
            <img src={laPostaLogo} alt="La Posta Logo" className="winery-logo" />
            La Posta
          </button>
          <button onClick={() => handleFilterWinery("La Rural")} className="winery-button">
            <img src={laRuralLogo} alt="La Rural Logo" className="winery-logo" />
            La Rural
          </button>
          <button onClick={() => handleFilterWinery("Las Perdices")} className="winery-button">
            <img src={lasPerdicesLogo} alt="Las Perdices Logo" className="winery-logo" />
            Las Perdices
          </button>
          <button onClick={() => handleFilterWinery("Lopez")} className="winery-button">
            <img src={lopezLogo} alt="Lopez Logo" className="winery-logo" />
            López
          </button>
          <button onClick={() => handleFilterWinery("Luca")} className="winery-button">
            <img src={lucaLogo} alt="Luca Logo" className="winery-logo" />
            Luca
          </button>
          <button onClick={() => handleFilterWinery("Luigi Bosca")} className="winery-button">
            <img src={luigiBoscaLogo} alt="Luigi Bosca Logo" className="winery-logo" />
            Luigi Bosca
          </button>
          <button onClick={() => handleFilterWinery("Marques Del Sur")} className="winery-button">
            <img src={marquesDelSurLogo} alt="Marques Del Sur Logo" className="winery-logo" />
            Marques Del Sur
          </button>
          <button onClick={() => handleFilterWinery("Mendel")} className="winery-button">
            <img src={mendelLogo} alt="Mendel Logo" className="winery-logo" />
            Mendel
          </button>
          <button onClick={() => handleFilterWinery("Mi Victoria")} className="winery-button">
            <img src={miVictoriaLogo} alt="Mi Victoria Logo" className="winery-logo" />
            Mi Victoria
          </button>
          <button onClick={() => handleFilterWinery("Monteviejo")} className="winery-button">
            <img src={monteviejoLogo} alt="Monteviejo Logo" className="winery-logo" />
            Monteviejo
          </button>
          <button onClick={() => handleFilterWinery("Mosquita Muerta")} className="winery-button">
            <img src={mosquitaMuertaLogo} alt="Mosquita Muerta Logo" className="winery-logo" />
            Mosquita Muerta
          </button>
          <button onClick={() => handleFilterWinery("Mumm")} className="winery-button">
            <img src={mummLogo} alt="Mumm Logo" className="winery-logo" />
            Mumm
          </button>
          <button onClick={() => handleFilterWinery("Navarro Correas")} className="winery-button">
            <img src={navarroCorreasLogo} alt="Navarro Correas Logo" className="winery-logo" />
            Navarro Correas
          </button>
          <button onClick={() => handleFilterWinery("Nieto Senetiner")} className="winery-button">
            <img src={nietoSenetinerLogo} alt="Nieto Senetiner Logo" className="winery-logo" />
            Nieto Senetiner
          </button>
          <button onClick={() => handleFilterWinery("Piume")} className="winery-button">
            <img src={piumeLogo} alt="Piume Logo" className="winery-logo" />
            Piume
          </button>
          <button onClick={() => handleFilterWinery("Rosell Boher")} className="winery-button">
            <img src={rosellBoherLogo} alt="Rosell Boher Logo" className="winery-logo" />
            Rosell Boher
          </button>
          <button onClick={() => handleFilterWinery("Salentein")} className="winery-button">
            <img src={salenteinLogo} alt="Salentein Logo" className="winery-logo" />
            Salentein
          </button>
          <button onClick={() => handleFilterWinery("Selada")} className="winery-button">
            <img src={seladaLogo} alt="Selada Logo" className="winery-logo" />
            Selada
          </button>
          <button onClick={() => handleFilterWinery("Septima")} className="winery-button">
            <img src={septimaLogo} alt="Septima Logo" className="winery-logo" />
            Séptima
          </button>
          <button onClick={() => handleFilterWinery("Sillero")} className="winery-button">
            <img src={silleroLogo} alt="Sillero Logo" className="winery-logo" />
            Sillero
          </button>
          <button onClick={() => handleFilterWinery("Telteca")} className="winery-button">
            <img src={teltecaLogo} alt="Telteca Logo" className="winery-logo" />
            Telteca
          </button>
          <button onClick={() => handleFilterWinery("Trapiche")} className="winery-button">
            <img src={trapicheLogo} alt="Trapiche Logo" className="winery-logo" />
            Trapiche
          </button>
          <button onClick={() => handleFilterWinery("Trivento")} className="winery-button">
            <img src={triventoLogo} alt="Trivento Logo" className="winery-logo" />
            Trivento
          </button>
          <button onClick={() => handleFilterWinery("Uko Wines")} className="winery-button">
            <img src={ukoLogo} alt="Uko Wines Logo" className="winery-logo" />
            Uko Wines
          </button>
          <button onClick={() => handleFilterWinery("Zuccardi")} className="winery-button">
            <img src={zuccardiLogo} alt="Zuccardi Logo" className="winery-logo" />
            Zuccardi
          </button>
        </div>
      )}
      {filterApplied && (
        <button onClick={handleClearFilter} className="winery-button">
          Volver
        </button>
      )}
      {Object.keys(filteredProducts.reduce((acc, product) => {
        acc[product.winery] = true;
        return acc;
      }, {})).map((winery, index) => (
        <div key={index} className="winery-group">
          <h3>{winery}</h3>
          <div className="product-list">
            {filteredProducts
              .filter(product => product.winery === winery)
              .map((product, idx) => (
                <div key={idx} className="product-card">
                  <div className='product-info'>
                    <h4>{product.name}</h4>
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

export default WinerySearch;
