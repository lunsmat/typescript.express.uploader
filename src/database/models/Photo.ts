import mongoose from 'mongoose';

export interface PhotoInterface extends mongoose.Document {
    name: string;
    size: number;
    key: string;
    url?: string;
    createdAt: Date;
}

const photoSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Photo = mongoose.model<PhotoInterface>('Photo', photoSchema);

export { Photo };
