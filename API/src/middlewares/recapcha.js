import axios from 'axios';

const secret_key = '6LfOIMkZAAAAAJWeSEB8VtaFegRHW-kbRiwMFt8r'

export default{
    verifycapcha: async(req,res,next) =>{
        const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${req.query.tokencap}`;
        axios.post(url,{},
        {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
            },
          }
          ).then(res =>{
              console.log(res.data);
              console.log(res.data.success);
            if(res.data.success){
                if(res.data.score >= 0.5){
                    next();
                }else{
                    res.status(404).send({
                        message: 'You are a robot'
                          });
                }
            }else{
                res.status(404).send({
                message: 'You are a robot'
                  });
            }
             
        }).catch(error =>{
             res.status(404).send({
                message: 'No token valid'
            });
        })
    }
}