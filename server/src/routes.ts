import express from 'express'; 

import InvestidoresController from './controller/InvestidoresController';

const investidoresController = new InvestidoresController(); 

const routes = express.Router();

routes.get('/investidor', investidoresController.index); 
routes.post('/investidor', investidoresController.create); 
routes.delete('/investidor', investidoresController.delete); 
routes.get('/investidorLoad', investidoresController.loadInvestidor); 
routes.put('/investidor', investidoresController.update); 

export default routes; 