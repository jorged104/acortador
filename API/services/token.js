import jwt from 'jsonwebtoken'
import models from '../models';

const keyconfig = process.env.KEYCONFIG || "devpassword";

export default{
    encode: async(_id,rol,email) => {
        const token = jwt.sign({_id:_id,rol:rol,email:email}, keyconfig ,{expiresIn: '1d'});
        return token;
    },
    verify: async(token) =>{
        try {
            const {_id} = await jwt.verify(token,keyconfig);
            return _id;
        } catch (error) {
            return false;
        }
    },
    decode: async(token) => {
        try{
            const  _id = await this.verify(token);
            console.log(_id);
            const user = await models.Usuario.findOne({_id:_id});
            if(user){
                return user;
            }
            return false;
        }catch(error){
            return false;
        }
    },
    
        
}