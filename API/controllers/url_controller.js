import models from '../models';
import bcrypt from 'bcryptjs';


export default{
    add: async(req,res,next) =>{
        try {
            const reg = await models.Url.create({full: req.body.full, user: req.body.id});
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error' 
            });
            
        }
    },
    query: async(req,res,next) =>{
        try{
            const reg = await models.Url.findOne({short:req.query.id});   
            if(!req){
                res.status(404).send({
                    message: "El registro no existe"
                });
            }else{
                reg.clicks++
                reg.save()
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
            const reg = await models.Url.find(
                    {
                       user: req.body.id
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
            const reg = await models.Url.findByIdAndUpdate({_id:req.body._id},{estado:1});
            res.status(200).json(reg);
        }catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
        
        }
    },
    deactivate:async(req,res,next) =>{
        try{
            const reg = await models.Url.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        }catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
        }
    },

}