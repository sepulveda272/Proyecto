const {Router} = require('express');
const {getPerfilLipidico,postPerfilLipidico,deletePerfilLipidico,updatePerfilLipidico} = require('../controllers/perfilLipidico.controllers.js');

const router = Router();

router.get('/',getPerfilLipidico);
router.post("/",postPerfilLipidico);
router.delete("/:id",deletePerfilLipidico);
router.put("/:id",updatePerfilLipidico);


module.exports = router;

