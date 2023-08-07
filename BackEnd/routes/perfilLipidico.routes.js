const {Router} = require('express');
const {getPerfil,getPerfilLipidicos,postPerfilLipidico,deletePerfilLipidico,updatePerfilLipidico} = require('../controllers/perfilLipidico.controllers.js');

const router = Router();

router.get('/',getPerfilLipidicos);
router.get('/:id',getPerfil);
router.post("/",postPerfilLipidico);
router.delete("/:id",deletePerfilLipidico);
router.put("/:id",updatePerfilLipidico);


module.exports = router;

