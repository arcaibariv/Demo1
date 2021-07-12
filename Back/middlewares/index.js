require('dotenv').config();
const rateLimit = require("express-rate-limit");

const corsOption = {
  origin: function (origin, callback) {
    if (process.env.LISTA_BLANCA.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback (new Error('No autorizado por CORS'))
   }
  }
}

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, //15 minutos
  max: 25,
  message: "usted excedió el limite de accesos a la API"
});

module.exports = { corsOption, limiter }