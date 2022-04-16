const express = require("express");
const fs = require("fs");
const router = express.Router();

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file);
    const skip = ['index'].includes(fileWithOutExt);
    if(!skip){
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`));
    }
})

router.get('*', (req, res) => {
    res.status(404);
    res.send({error: 'Not fount'});
})

module.exports = router;
