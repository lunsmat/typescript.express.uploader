import { Request } from 'express';
import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import aws from 'aws-sdk';
import multerS3 from 'multer-s3';

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve(__dirname, '..', 'tmp', 'uploads'));
        },
        filename: (req, file, callback) => {
            crypto.randomBytes(16, (error, hash) => {
                if (error)
                    callback(error, null);

                const key = `${hash.toString('hex')}-${file.originalname}`;

                req.body.key = key;
                req.body.url = `uploads/${key}`;
                callback(null, key);
            });
        }
    }),
    S3: multerS3({
        s3: new aws.S3(),
        bucket: process.env.BUCKET_NAME,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req: Request, file, callback) => {
            crypto.randomBytes(16, (error, hash) => {
                if (error)
                    callback(error, null);

                const key = `${hash.toString('hex')}-${file.originalname}`;
                req.body.key = key;
                callback(null, key);
            });
        }
    })
};

const multerConfig: multer.Options = {
    dest: path.resolve(__dirname, '..', 'tmp', 'uploads'),
    storage: storageTypes[process.env.STORAGE_TYPE],
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, callback) => {
        const allowedTypes = [
            'image/jpeg',
            'image/jpg',
            'image/pjpeg',
            'image/png',
            'image/gif',
        ];

        if (!allowedTypes.includes(file.mimetype))
            callback(new Error('Invalid file type'));

        callback(null, true);
    },
};

export { multerConfig };
