import express from "express"
import { books } from "./content/books.js"
import cors from "cors"

const app = express();
app.use(cors())
const port = process.env.PORT || 5000;
// Сообщение о том, что сервер запущен и прослушивает указанный порт 
app.listen(port, () => console.log(`Listening on port ${port}`)); //Строка 6


// Создание GET маршрута
app.get('/books', (req, res) => {
    res.send(books);
});

app.get('/books/:id', (req, res) => {
    let bookById = books.filter((item, id) => {
        return (Number(req.params.id) === Number(item.productId) ? true : false)
    })
    res.send(bookById[0]);
}); 