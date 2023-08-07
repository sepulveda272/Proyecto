const {Router} = require('express');
const {getGlisemiia,getGlisemias,postGlisemia,deleteGlisemia,updateGlisemia} = require('../controllers/glisemia.controllers.js');

const router = Router();

router.get('/',getGlisemias);
router.get('/:id',getGlisemiia);
router.post("/",postGlisemia);
router.delete("/:id",deleteGlisemia);
router.put("/:id",updateGlisemia);


module.exports = router;

