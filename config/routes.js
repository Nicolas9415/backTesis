const router = require('express').Router();
const dataController = require('../app/controllers/dataController');

router.get('/data', dataController.index);
router.get('/data/:id', dataController.show);
router.post('/data', dataController.create);
router.put('/data/:id', dataController.update);
router.delete('/data/:id', dataController.delete);

module.exports = router;
