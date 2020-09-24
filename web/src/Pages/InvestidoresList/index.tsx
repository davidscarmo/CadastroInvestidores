import React, { useEffect, useState } from 'react'; 
import api from '../../Services/api';
import { useHistory } from 'react-router-dom';

import './styles.css';

export interface Investidor 
{
    codigo: string; 
    nome: string; 
    capital: string; 
    prazo: string; 
    toleranciaRisco: string;
     
}

interface InvestidorItemProps
{
    investidor: Investidor;
}

const InvestidoresList: React.FC<InvestidorItemProps> = ({investidor}) =>
{
    
    const [investidores, setInvestidores] = useState([]);

    const teste2 = async () => 
    {
      console.log('wtf');
     const response= await api.get('/investidor'); 
     console.log(response.data);
      setInvestidores(response.data); 
    }
    
  useEffect(() => 
  {
    teste2();
    
  }, []);

  const handleDelete = async (value: string) =>
  {
      await api.delete('investidor', {
          params: 
          {
            codigo: value
          }
      }); 

      alert('investidor excluído com sucesso!');
      teste2(); 
  }
  const history = useHistory(); 
  const handleEdit = async(value: string) => 
  {
     await localStorage.setItem('codigo', value); 
     
      history.push('/investidorEdit')
  }
   return( 
    
  <div className="">
      <header className="page-header">
        
        <div className="top-bar-container">
            
            <div className="logo-area">
                <p>Carmo Invest</p>
            </div>
            
        </div>
        <div className="header-content">
            <p>
           Cadastro de Investidores
            </p>
        </div>
      </header>
      <table className="table  table-hover">
      <thead className="">
          <tr>
              <th scope="col" className=""aria-label="Name">Código</th>
              <th scope="col" className="">Nome</th>
              <th scope="col" className="">Capital</th>
              <th scope="col" className="">Prazo</th>
              <th scope="col" className="">Tolerância à risco</th>
              <th>Editar</th>
              <th>Deletar</th>
          </tr>
      </thead>
      <tbody>
          {investidores.map((investidor: Investidor) => 
            {
              return(  <tr>
            <th>{investidor.codigo}</th>
            <th>{investidor.nome}</th>
            <th>{investidor.capital}</th>
            <th>{investidor.prazo}</th>
            <th>{investidor.toleranciaRisco}</th>
            <th className="button-area2"><button onClick={() => handleEdit(investidor.codigo)}> Edit </button></th>
            <th className="button-area2"><button onClick={() => handleDelete(investidor.codigo)}> Excluir </button></th>
          </tr>
            )})} 
      </tbody>
      </table>
      <div className="button-area">
                    <button > <a href="/investidorCreate"> Cadastrar Investidor</a></button>
                </div>
      <footer className="footer">
            <p>
                Todos os direitos reservados &#169; Carmo Invest 2020
            </p>
        </footer>
  </div>
 ); 
}

export default InvestidoresList; 