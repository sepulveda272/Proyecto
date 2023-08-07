const {Router} = require('express');
const {getCuadroHemaricos,postCuadroHemarico,deleteCuadroHemarico,updateCuadroHematico, getCuadro} = require('../controllers/cuadroHematico.controllers.js');

const router = Router();

router.get('/',getCuadroHemaricos);
router.get('/:id',getCuadro)
router.post("/",postCuadroHemarico);
router.delete("/:id",deleteCuadroHemarico);
router.put("/:id",updateCuadroHematico);


module.exports = router;

