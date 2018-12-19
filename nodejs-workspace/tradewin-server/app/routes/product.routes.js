const express = require('express');
const prodCtrl = require('../controllers/products.controller');
const authCtrl = require('../middleware/auth.ctrl');
const router = express.Router();
const multer = require("multer");

//STORING FILES AND IMAGES IN DATABASE AND BACKEND
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
        cb(null, true)
    }else{
        cb(null, false);
    }
}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 40
    },
    fileFilter : fileFilter
});

router
    .route('/products')
    .get(authCtrl.tokenValidator,prodCtrl.getAllProducts);

router
    .route('/products/new')
    .post(upload.single("productImage"), prodCtrl.addOneProduct);

router
    .route('/products/:productId')
    .get(prodCtrl.getOneProduct);

// update 
router
    .route('/products/update/:productId')
    .put(authCtrl.tokenValidator, prodCtrl.updateOneProduct);

//delete a document
router
    .route('/products/delete/:productId')
    .delete(authCtrl.tokenValidator, prodCtrl.deleteOne);

module.exports = router;