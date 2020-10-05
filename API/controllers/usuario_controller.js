import models from '../models';
import bcrypt from 'bcryptjs';
import token from '../services/token';

export default{
    add: async(req,res,next) =>{
        try {
            req.body.password = await bcrypt.hash(req.body.password,10);
            req.body.saldo = 0;
            const reg = await models.Usuario.create(req.body);
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            
        }
    },
    query: async(req,res,next) =>{
        try{
            const reg = await models.Usuario.findOne({_id:req.query._id});
            if(!req){
                res.status(404).send({
                    message: "El registro no existe"
                });
            }else{
                res.status(200).json(reg);
            }
        }catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            
        }
    },
    list: async(req,res,next) =>{
        try{
            let valor = req.query.valor;
            const reg = await models.Usuario.find(
                    {
                        $or:[
                                {'nombre':new RegExp(valor,'i')},
                                {'email': new RegExp(valor,'i')}
                            ]
                    },
                    {createAt:0})
            .sort({'createAt':-1});
            res.status(200).json(reg);
        }catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
          
        }
    },
    activate: async(req,res,next) =>{
        try{
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.body._id},{estado:1});
            res.status(200).json(reg);
        }catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
        
        }
    },
    deactivate:async(req,res,next) =>{
        try{
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        }catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
        }
    },
    login: async (req,res,next) =>{
        try{
            let user = await models.Usuario.findOne({email: req.body.email});
            if(user){
                let match = await bcrypt.compare(req.body.password, user.password);
                if(match){
                   let tokenReturn = await token.encode(user._id,user.rol,user.email);
                   res.status(200).json({tokenReturn});
                }else{
                    res.status(400).send({
                        message: 'Error password o email incorrectos'
                    });
                } 
            }
            else{
                res.status(400).send({
                    message: 'Error password o email incorrectos'
                });
                
            }
            
        }catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            
        }
    }
}