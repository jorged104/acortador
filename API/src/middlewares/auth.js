import token from '../services/token';
export default{
    
    verify_usuario: async(req,res,next) =>{
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No token header'
            });
        }
        const response = await token.verify(req.headers.token);
        if(response){
            req.body.id = response;
            next();
        }else{
            return res.status(404).send({
                message: 'No token valid'
            });
        }
    },
    verify_admin: async(req,res,next) =>{
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await token.decode(req.headers.token);
        if(response.rol == 'admin'){
            next();
        }else{
            return res.status(404).send({
                message: 'No token'
            });
        }

    }
}