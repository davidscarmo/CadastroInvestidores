import {Request, Response} from 'express'; 
import db from '../database/connection';

export default class InvestidoresController
{
    async index (request: Request, response: Response)
    {
        try
        {
            const investidores = await db('investidores').select('*'); 

            return response.status(201).json(investidores);
        }
        catch(err)
        {
            return response.status(400).json(
                {
                    err
                }
            );   
        }
    }

    async create(request: Request, response: Response)
    {
        const{
            nome, 
            capital, 
            prazo, 
            toleranciaRisco
        } = request.body; 

        try
        {
            await db('investidores').insert(
                {
                    nome, 
                    capital,
                    prazo, 
                    toleranciaRisco
                }); 
                return response.status(201).send(); 
        }
        catch(err)
        {
            return response.status(400).json(
                {
                    err
                }
            )
        }
    }

    async delete(request: Request, response: Response)
    {
       
        const {
            codigo 
        } = request.query; 
        
       
        try{
            await db('investidores').where('codigo',  String(codigo)).del();       
            return response.status(200).send(); 
        }
        catch(err)
        {
            return response.status(400).json(
                {
                    err: 'Erro ao excluir investidor' 
                }
            )
        }
  
    }

    async update(request: Request, response: Response)
    {
        const 
        {
            codigo,
            nome, 
            capital,
            prazo, 
            toleranciaRisco
        } = request.body; 

        try
        {
            await db('investidores').where('codigo', '=', codigo)
            .update(
                {
                    nome, 
                    capital,
                    prazo, 
                    toleranciaRisco
                
                });
                return response.status(200).send(); 
        }
        catch(err)
        {
            return response.status(400).json(
                {
                    error: 'Error ao tentar atualizar'
                }
            ); 
        }
    }
    async loadInvestidor(request: Request, response: Response)
    {
        const 
        {
            codigo
        } = request.query;

        try 
        {
            const investidor = await db('investidores').select('*').where('codigo', '=', String(codigo)); 

            return response.status(201).json(investidor); 
        }
        catch(err)
        {
            return response.status(400).json(
                {
                    error: 'Não foi possível carregar o ivnestidor' 
                }
            );
        }
    }
}