import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './components/menu';


function App() {
  const [inputItens, setInputItens] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("");

  // Redux
  const itens = useSelector((state) => state.itensReducer.itens);
  const stateTitulo = useSelector((state) => state.tituloReducer.titulo);
  
  const dispatch = useDispatch();

  function adicionaritens(event) {
    event.preventDefault();
    const objFruta = {
      nome: inputItens
    }
    dispatch({type: "ADICIONAR", value: objFruta});
  }

  function alterarTitulo(event) {
    setInputTitulo(event.target.value);
    dispatch({type: "ALTERAR", value: event.target.value});
  }

  return (
    <div className="container justify-content-center mt-5">
      <Menu />
      <form>
        <label className="mr-2">Título da lista: </label>
        <input className="text-center mb-4" placeholder="Alterar título de lista"
        value={inputTitulo}
        onChange={alterarTitulo}
        />
      </form>

      <form onSubmit={adicionaritens}>

    <h1><i className="fas fa-clipboard-list mr-3"/>{stateTitulo}</h1>

        <input className="text-center mt-3 mb-2 ml-4"
          placeholder="Digite um item"
          value={inputItens}
          onChange={(event) => setInputItens(event.target.value)}
        />
        <br />
        <button className="btn mt-2 bg-dark text-light ml-5">
          Adicionar Item
        </button>

      </form>
      <div className="mt-3">
      {
        itens.map((item, index) => {
          return (
            <li className="mt-1" key={index}>{item.nome}</li>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
