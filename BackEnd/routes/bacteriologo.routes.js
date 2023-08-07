const {Router} = require('express');
const {check} = require('express-validator')
const {getBacteriologo,getBacteriologos,postBacteriologo,deleteBacteriologo,updateBacteriologo} = require('../controllers/bacteriologo.controllers.js');
const { validateDocument } = require('../middlewares/validate.documents.js');

const router = Router();

router.get('/:id',getBacteriologo);
router.get('/',getBacteriologos)
router.post("/",[
    check('nombre','El nombre no es valido').not().isEmpty(),
    check('email', 'El correo no es valido').isEmail(),
    check('cedula', 'La cedula tiene que ser de 8 caracteres').isLength({min: 8}),
    validateDocument
],postBacteriologo);
router.delete("/:id",deleteBacteriologo);
router.put("/:id",updateBacteriologo);


module.exports = router;

