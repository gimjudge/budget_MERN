const express = require('express');
const router = express.Router();
const app = express();

router.get('/', function (req, res) {
    res.send('Hello World');
});

// export router
module.exports = router;