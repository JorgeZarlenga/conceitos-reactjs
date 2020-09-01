import React, {useEffect, useState} from "react";
import api from './services/api';

import "./styles.css";

function App() {

//  const [repositories, setRepositories] = [];

  async function handleAddRepository() {
    
    /*
    const response = await api.post('repositories', {
      title: `Novo repositório ${Date.now()}`
    });

    const repository = response.data;
        
    // Aplicando conceito de imutabilidade, copiando todos os projetos já existentes através do spread operator:
    setRepositories([...repositories, repository]);
    */
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
