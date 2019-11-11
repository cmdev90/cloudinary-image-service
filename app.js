const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


require('./eurikaClient')();

//  THIS WILL ALLOW US TO SET UP MIDDLEWARES TO RESPOND TO HTTP REQUEST.
var app = express();
var router = require('./router');

// HERE WE WILL LET OUR APP TO GET ACCESS TO THE STATIC FOLDERS LIKE CSS, IMAGES.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// HANDLING CORS ERRORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.headers('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE');
        return res.status(200).json({})
    }
    next();
})

const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/uploads', router);

// //HANDLE ERROR
// app.use((req, res, next) => {
//     const error = new Error('NOT FOUND')
//     error.status = 404
//     next(error, req, res)
// })

// app.use((error, req, res, next) => {
//     // console.log(req, error);
//     res.status(error.status || 500)
//     res.json({
//         error: {
//             message: error.message
//         }
//     })
// })

// DO NOT FORGET TO EXPORT THE FILE
module.exports = app