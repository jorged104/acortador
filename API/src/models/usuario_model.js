import mongoose , {Schema} from 'mongoose';

const usuario_schema = new Schema({
    rol:            {type:String, maxlength:30, required:true , default:'user'},
    nombre:         {type:String, maxlength:30, required:true},
    apellido:       {type:String, maxlength:30, required:true},
    email:          {type:String, maxlength:50, unique:true, required:true},
    password:       {type:String, maxlength:200, required:true},
    estado:         {type:Number, default:0}, // no - verificado -- verificado -- no activo 
    saldo:          {type:Number, default:0 , required:true},
    createAt:       {type:Date  , default: Date.now}
});

const usuario = mongoose.model('usuario', usuario_schema);
export default usuario;