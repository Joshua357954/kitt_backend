const express = require('express');
const router = express.Router();


router.get('/checkUser', (req, res) => {
	res.send("Checking User")
  
});


module.exports = router;
