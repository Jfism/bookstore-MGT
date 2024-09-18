import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js'; // Import from config.js

// Define a Mongoose schema and model for books
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishYear: { type: Number, required: true }
});

const Book = mongoose.model('Book', bookSchema);

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Welcome to Mernstack Tutorials");
});

app.post('/books', async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;

        if (!title || !author || !publishYear) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const newBook = new Book({ title, author, publishYear });
        await newBook.save();

        res.status(201).send({ message: 'Book saved successfully!' });
    } catch (error) {
        console.error('Error saving book:', error.message);
        res.status(500).send({ message: error.message });
    }
});

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to the database');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });
