//Importo los modulos necesarios
const sequelize = require('./conexion')

//Exporto los modulos

module.exports.nuevoUsuario = async (usr)=> {
    try {
        console.log('nuevoUsuario dentro')
        console.log(usr)

        let resultado = await sequelize.query(`SELECT * FROM usuarios WHERE apellido = '${usr[1]}'`);
        if (resultado.lenght > 0){
            return false
        }else {
            await sequelize.query(`INSERT INTO dbo.usuarios (nombre, apellido, usuario, password, correo) VALUES (?,?,?,?,?)`, 
            {replacements: usr, type: sequelize.QueryTypes.INSERT})
            return true
        }
    }catch (err) {
        console.log('error en nuevoUsuario dbUsuario')
        throw new Error (err)
    }
}

module.exports.existenciaDeUsuario = async (usr)=>{
    let usuario = [usr.usuario , usr.password]
    try {
        let resultado = await sequelize.query(`SELECT * FROM dbo.usuarios WHERE usuarios.usuario = '${usuario[0]}'`);
        if (resultado != undefined) {
            let chequeado = await sequelize.query(`SELECT * FROM usuarios WHERE usuarios.contrasena = '${usuario[1]}'`);
            if (chequeado != undefined) {
                return true
            }else {
                return false
            }
        }else {
            return false
        }
    }catch (err) {
        console.log(err)
        throw new Error (err)
    }
}

module.exports.usuarios = async ()=>{
    try {
        let resultado = await sequelize.query('SELECT * FROM usuarios')
        return resultado
    }catch (err){
        console.log(err)
        throw new Error (err)
    }
}

