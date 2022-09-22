const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Devuelve todos los clientes');
});

module.exports = router;