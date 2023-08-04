const {Router} = require('express');
const {check} = require('express-validator')
const {getPaciente,postPaciente,deletePaciente,updatePaciente} = require('../controllers/paciente.controllers.js');
const { validateDocument } = require('../middlewares/validate.documents.js');

const router = Router();

router.get('/',getPaciente);
router.post("/",[
    check('nombre','El nombre no es valido').not().isEmpty(),
    check('celular', 'El celular tiene que ser de 10 caracteres').isLength({min: 10}),
    validateDocument
],postPaciente);
router.delete("/:id",deletePaciente);
router.put("/:id",updatePaciente);


module.exports = router;

