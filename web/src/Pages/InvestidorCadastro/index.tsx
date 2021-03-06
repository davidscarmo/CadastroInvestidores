import React, { useState, FormEvent, useEffect } from 'react'; 
import './styles.css'; 
import api from '../../Services/api'; 
import { useHistory } from 'react-router-dom';

const CadastroInvestidor = () => 
{
    const [nome, setNome] = useState(''); 
    const [capital, setCapital] = useState(''); 
    const [prazo, setPrazo] = useState(''); 
    const [toleranciaRisco, setToleranciaRisco] = useState(''); 

    const history = useHistory();

    const handleCreateInvestidor = (e: FormEvent) => 
    {
        e.preventDefault(); 
        api.post('/investidor', 
        {
            nome, 
            capital, 
            prazo, 
            toleranciaRisco
        }).then(
            () => 
            {
                alert('Investidor cadastrado com sucesso!'); 
                history.push('/');
            }
        ).catch(
            (err) => 
            { 
                console.log(err);
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
               Cadastrar Investidor
                </p>
            </div>

        </header>
    <div className="null0"></div>
    <main className="form-area"> 
        <form className="form" onSubmit={handleCreateInvestidor}>
           
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
                        onChange={(e)=> {setNome(e.target.value)}} required/>
                </div>
                
                <div className="input-group">
                    <label htmlFor="capital">Informe o capital</label> <br/>
                    <input 
                        type="number" 
                        name="capital"
                        id="capital"
                        pattern= "[0-9]" 
                        value={capital}
                        onChange={(e)=>{setCapital(e.target.value)}} 
                        required/>
                </div>

                <div className="input-group">
                    <label htmlFor="prazo">Prazo</label> <br/>
                    <input 
                        type="text" 
                        name="prazo"
                        id="prazo"
                        value={prazo}
                        onChange={(e)=>{setPrazo(e.target.value)}} required/>
                </div>

                <div className="input-group">
                    <label htmlFor="toleranciaRisco">Tolerância à Riscos</label> <br/>
                    <input 
                        type="text" 
                        name="toleranciaRisco"
                        id="toleranciaRisco"
                        value={toleranciaRisco}
                        onChange={(e)=>{setToleranciaRisco(e.target.value)}} required/>
                </div>

                <div className="button-area">
                    <button type="submit">Cadastrar Investidor</button>
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
