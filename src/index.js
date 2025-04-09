import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar solo los estilos necesarios para reducir el tamaño del bundle.
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Considera importar solo los componentes de Bootstrap que necesites.

import React, { Suspense, lazy } from 'react'; // Importa React y las herramientas de Suspense y lazy loading.
import ReactDOM from 'react-dom';
const App = lazy(() => import('./App')); // Usa lazy loading para cargar la App solo cuando sea necesario.

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}> {/* Usa Suspense para manejar la carga de componentes con lazy loading */}
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
