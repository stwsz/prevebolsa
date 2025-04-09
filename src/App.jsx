import React from 'react';
import Layout from './Layout';

function App() {
  document.title = 'PreveBolsa | Bem-vindo à Página Inicial';

  return (
    <Layout>
      <h2>Bem-vindo!</h2>
      <p>Esse é o conteúdo principal da página.</p>
    </Layout>
  );
}

export default App;
