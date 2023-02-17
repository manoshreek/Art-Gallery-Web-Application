var express = require('express');
var router = express.Router();
var path = require('path');

const multer  = require('multer');
var fs = require('fs');
require('dotenv/config');

var imageModel = require('../models/images.model');

/* GET IMAGES */

router.get('/', (req, res) => {
    console.log("INSIDE GET IMAGES ROUTER");
    const result = new Array();
	imageModel.find({}, (err, items) => {
		if (err) {
			console.log(err);
			res.status(500).send('An error occurred', err);
		}
		else {
            for(var i =0;i<items.length;i++){
                var temp ={
                    src : Buffer.from(items[i].img.data, 'base64').toString('base64'),
                    name: items[i].name,
                    desc: items[i].description,
                    id: items[i]._id
                }
                result.push(temp);
            }

            /*const formatedImages = result.map(buffer => {
                return `<img src="data:image/png;base64,${buffer.toString("base64")}"/>`
              }).join("");
*/
            res.send(result);
		}
	});
});

/* UPLOAD IMAGES */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/data/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

var upload = multer({storage: storage});

router.post('/uploadImage', upload.single('image'), (req, res, next) => {

    var obj = {
        name: req.body.name,
        description: req.body.description,
        img: {
            
            data: fs.readFileSync('./public/data/uploads/'+req.file.filename),
            contentType: 'image/png'
        }
    }
    
    imageModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            item.save();
            res.send({status: 200, message: "Image Upload Successful!"});
        }
    });
});


module.exports = router;
