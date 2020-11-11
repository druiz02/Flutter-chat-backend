// path : api/login


const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario } = require('../controllers/auth');
const validarCampos = require('../middlewares/validar-campos');

const router = Router();

const { body, validationResult } = require('express-validator');

router.
post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    // username must be an email
    // body('nombre').not().isEmpty(),
    // body('email').not().isEmpty(),
    // body('password').not().isEmpty()

    // password must be at least 5 chars long
    //    body('password').isLength({ min: 5 })
], crearUsuario);

// router.post('/new', [
//     check('nombre', 'El nombre es obligatorio').not().isEmpty(),
//     validarCampos
// ], crearUsuario);


// router.post('/new', function(req, res) {
//     check('nombre', 'El nombre es obligatorio').not().isEmpty();
//     validarCampos;

// }, crearUsuario);

module.exports = router;