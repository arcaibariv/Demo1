//Importo los modulos necesarios
const dbUsuarios = require('../db/dbUsuarios')
const jwt = require('jsonwebtoken')


//Exporto los modulos de trabajo

module.exports.listaUsuarios = async ()=>{
    try {
        let resultado = await dbUsuarios.usuarios()
        return resultado
    }catch (err){
        console.log(`error en user.model lista Usuario:${err}`)
        throw new Error ('Ocurrio un error en la consulta')
    }
}

module.exports.crearUsuarios = async (usuario)=> {
    let usrNuevo = [
        usuario.nombre,
        usuario.apellido,
        usuario.usuario,
        usuario.password,
        usuario.correo
    ]
    try {
        let resultado = await dbUsuarios.nuevoUsuario(usrNuevo)
        if (resultado) {
            return 'Alta de usuario correcta'
        }else {
            
            throw new Error ('Error en la creacion del usuario o el usuario ya existe')
        }

    }catch (err) {
        console.log(`error en user.model crear Usuario:${err}`)
        throw new Error ('Error en la creacion del usuario')
    }
}

module.exports.chequearUsrValido = async (usr)=>{
    try {
        let resultado = await dbUsuarios.existenciaDeUsuario (usr)
        console.log(resultado)
        if (resultado) {
            return resultado
        }else {
            throw new Error ('No existe el Usuario')
        }
    }catch (err) {
        console.log(`error en user.model chequear Usuario:${err}`)
        throw new Error (err)
    }
}

module.exports.generaToken = async (data)=> {
    const resultado = jwt.sign({
        data} , process.env.SECRET_KEY 
    ) //Tiempo maximo 15 minutos de validez
    return resultado
}

module.exports.verificacionUsuario = async (token)=> {
    const resultado = jwt.verify(token, process.env.SECRET_KEY)

    if(resultado){
        return resultado
    }else {
        throw new Error ('Token no valido!')
    }
}