import mongoose from 'mongoose';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';

export interface PhotoInterface extends mongoose.Document {
    name: string;
    size: number;
    key: string;
    url?: string;
    createdAt: Date;
}

const PhotoSchema = new mongoose.Schema<PhotoInterface>({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

PhotoSchema.pre('remove', function() {
    switch (process.env.STORAGE_TYPE) {

    case 'local':
        return promisify(fs.unlink)(
            path.resolve(__dirname, '..',   '..', 'tmp', 'uploads', this.key)
        );
    }
});

const Photo = mongoose.model<PhotoInterface>('Photo', PhotoSchema);

export { Photo };
