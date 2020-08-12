


        const AWS = require('aws-sdk');

const create = async (req, res) => {
        
// try {
        // Set the region 
        var profile = {
            accessKeyId: "accessKeyId",
            secretAccessKey: "secretAccessKey",
            region: "us-east-2"
        }
         
        AWS.config.update(profile);
        // ​
        // // Create S3 service object
        s3 = new AWS.S3({apiVersion: '2006-03-01'});
        // ​
        // // call S3 to retrieve upload file to specified bucket
        console.log(req.body)
        console.log(req.files)
        var file = req.files.file;
        var uploadParams = {Bucket: "careers.form.gatsby", Key: file.name, Body: file.data, ACL: 'public-read'};

        // // call S3 to retrieve upload file to specified bucket
        s3.upload (uploadParams, function (err, data) {
          if (err) {
              console.log(err)
            res.status(401).json({Error: err});
          } if (data) {
            res.status(200).json({Success: data.Location});
          }
        });
    // } catch (error) {
    //     res.status(401).json(error);
    // }
}

module.exports = {
    create
}