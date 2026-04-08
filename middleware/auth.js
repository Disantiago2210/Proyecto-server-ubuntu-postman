const API_KEY = '123456';

function verificarApiKey(req, res, next) {
  const key = req.headers['x-api-key'];

  console.log('KEY RECIBIDA:', key); // 👈 agrega esto

  if (!key || key !== API_KEY) {
    return res.status(401).json({
      error: 'No autorizado. Incluye el header x-api-key.',
      codigo: 401
    });
  }

  next();
}

module.exports = verificarApiKey;
