const express = require('express');
const UserController = require('./Controllers/User');
const router = express.Router();

router.post('/user/id', UserController.store);
router.put('/user/id', UserController.update);
router.get('/users', UserController.index);
router.get('/user/id', UserController.show);
router.delete('/user/id', UserController.destroy);

module.exports = router;