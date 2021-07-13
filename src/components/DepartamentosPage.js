import React from 'react';

import Footer from './Footer';
import NavMenu from './NavMenu';

function DepartamentosPage() {
  return (
    <div className="App">
      <div id="menu">
        <NavMenu />
      </div>
      <div id="cuerpo">
        <h1>Departamentos</h1>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default DepartamentosPage;
