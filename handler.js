const cloud = require('./cloudinaryConfig');

exports.createApp = (req, res) => {
    let imageDetails = {
        imageName: req.body.imageName,
        cloudImage: req.file.path,
        imageId: ''
    };

    cloud.uploads(imageDetails.cloudImage).then((result) => {
        return res.json({
            created: 'created',
            message: "image uploaded successfully!!",
            details: result
        });
    }).catch((err) => {
        res.json({
            err: err,
            message: 'could not upload image, try again'
        });
    });
};