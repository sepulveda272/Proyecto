const {Router} = require('express');
const {getGlisemia,postGlisemia,deleteGlisemia,updateGlisemia} = require('../controllers/glisemia.controllers.js');

const router = Router();

router.get('/',getGlisemia);
router.post("/",postGlisemia);
router.delete("/:id",deleteGlisemia);
router.put("/:id",updateGlisemia);


module.exports = router;

