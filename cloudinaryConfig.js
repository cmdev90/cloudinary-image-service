const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'cm-impulse',
    api_key: '985367835439826',
    api_secret: 'I015aGyZms3TesUrqqR56jKtOxc'
});

exports.uploads = (file) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file, (result, error) => {
            if (error) return reject(error);
            return resolve(result);
        }, { resource_type: "auto" })
    });
};