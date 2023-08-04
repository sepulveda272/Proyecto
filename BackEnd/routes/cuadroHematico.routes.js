const {Router} = require('express');
const {getCuadroHemarico,postCuadroHemarico,deleteCuadroHemarico,updateCuadroHematico} = require('../controllers/cuadroHematico.controllers.js');

const router = Router();

router.get('/',getCuadroHemarico);
router.post("/",postCuadroHemarico);
router.delete("/:id",deleteCuadroHemarico);
router.put("/:id",updateCuadroHematico);


module.exports = router;

