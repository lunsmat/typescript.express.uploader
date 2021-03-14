import mongoose from 'mongoose';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import aws from 'aws-sdk';

const S3 = new aws.S3();

export interface PhotoInterface extends mongoose.Document {
    name: string;
    size: number;
    key: string;
    url: string;
    storageType: 'local' | 'S3';
    createdAt: Date;
}

const PhotoSchema = new mongoose.Schema<PhotoInterface>({
    name: String,
    size: Number,
    key: String,
    url: String,
    storageType: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

PhotoSchema.pre('remove', function() {
    switch (this.storageType) {

    case 'local':
        return promisify(fs.unlink)(
            path.resolve(__dirname, '..',   '..', 'tmp', 'uploads', this.key)
        );

    case 'S3':
        return S3
            .deleteObject({
                Bucket: process.env.BUCKET_NAME,
                Key: this.key
            }).promise();
    }
});

const Photo = mongoose.model<PhotoInterface>('Photo', PhotoSchema);

export { Photo };
