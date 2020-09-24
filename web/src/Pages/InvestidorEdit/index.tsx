import React, { useState, FormEvent, useEffect } from 'react'; 
import './styles.css'; 
import api from '../../Services/api'; 
import { useHistory } from 'react-router-dom';

const CadastroInvestidor = () => 
{
    const [codigo, setCodigo] = useState('');
    const [nome, setNome] = useState(''); 
    const [capital, setCapital] = useState(''); 
    const [prazo, setPrazo] = useState(''); 
    const [toleranciaRisco, setToleranciaRisco] = useState(''); 
    const history = useHistory();

    const handleLoad = async () => 
    {
        const code = await localStorage.getItem('codigo'); 
        
        
        const response = await api.get('investidorLoad', {
            params: 
            {
                codigo: code
            }
        }); 
        setCodigo(response.data[0].codigo);
        setNome(response.data[0].nome); 
        setCapital(response.data[0].capital); 
        setPrazo(response.data[0].prazo); 
        setToleranciaRisco(response.data[0].toleranciaRisco); 
    }

    useEffect(() => 
    {
        handleLoad();
    }, []); 
    const handleEditInvestidor = (e: FormEvent) => 
    {
        e.preventDefault(); 
        api.put('/investidor', 
        {
            codigo,
            nome, 
            capital, 
            prazo, 
            toleranciaRisco
        }).then(
            () => 
            {
                alert('investidor editado com sucesso!'); 
                history.push('/InvestidoresList')
            }
        ).catch(
            () => 
            { 
                alert('Não foi possível editar o investidor!');
            }
        )
    }

    useEffect(() => 
    {
        const oddEven = capital.toString().split('');
        const numberToTest = parseInt(oddEven[oddEven.length-1])
        if( numberToTest=== 0)
        {
            console.log('O número é 0')
        }
        else if(numberToTest%2=== 0)
        {
            console.log('par');
        }
        else
        {
            console.log('ímpar');
        }
        
       
    },[capital]);
  
    return(
        <div className="container" id="form-announcements">
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
    <div className="null0"></div>
    <main className="form-area"> 
        <form className="form" onSubmit={handleEditInvestidor}>
           
                <h2>
                    Preencha os dados
                </h2>
                <div className="input-group">
                    <label htmlFor="nome">
                        Nome
                    </label><br/>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome"
                        value={nome}
                        onChange={(e)=> {setNome(e.target.value)}}/>
                </div>
                
                <div className="input-group">
                    <label htmlFor="capital">Informe o capital</label> <br/>
                    <input 
                        type="text" 
                        name="capital"
                        id="capital"
                        value={capital}
                        onChange={(e)=>{setCapital(e.target.value)}}/>
                </div>

                <div className="input-group">
                    <label htmlFor="prazo">Prazo</label> <br/>
                    <input 
                        type="text" 
                        name="prazo"
                        id="prazo"
                        value={prazo}
                        onChange={(e)=>{setPrazo(e.target.value)}}/>
                </div>

                <div className="input-group">
                    <label htmlFor="toleranciaRisco">Tolerância à Riscos</label> <br/>
                    <input 
                        type="text" 
                        name="toleranciaRisco"
                        id="toleranciaRisco"
                        value={toleranciaRisco}
                        onChange={(e)=>{setToleranciaRisco(e.target.value)}}/>
                </div>

                <div className="button-area">
                    <button type="submit">Editar Investidor</button>
                </div>
        </form>
        <div className="null1"></div>
    </main>
     
        <footer className="footer">
            <p>
                Todos os direitos reservados &#169; Carmo Invest 2020
            </p>
        </footer>
    </div>
    )
}; 

export default CadastroInvestidor;