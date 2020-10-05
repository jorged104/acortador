import express from 'express';
import morgan from 'morgan';
import cors  from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import helmet from 'helmet';
import router from './routes';

//conect db 
mongoose.Promise = global.Promise;
const dburl =  process.env.DB || 'mongodb://localhost:27017/acortador';
mongoose.connect(dburl, {useNewUrlParser:true,useCreateIndex:true})
.then(mongoose => console.log('Conectando a la db 27017'))
.catch(err => console.log(err));


const app=express();
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',router);
app.use(express.static(path.join(__dirname,'public')));

app.set('port',process.env.PORT || 3000);


app.listen(app.get('port'),()=>{
    console.log('server on' + app.get('port'));
});
