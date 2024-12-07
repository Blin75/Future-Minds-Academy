const books = [
    {
        title: 'Kronikë në Gur',
        author: 'Ismajl Kadare'
    },
    {
        title: 'Kështjella',
        author: 'Ismajl Kadare'
    },
    {
        title: 'Doktor Gjilpëra',
        author: 'Faik Konica'
    },
    {
        title: 'Ura me tri harqe',
        author: 'Ismajl Kadare'
    }
]

//component 1
const BookRow = ({book, author}) => {
    return <li className="BookRow">{book} - {author}</li>
}



const BookList = ({books}) => {
   books.sort((a,b) =>  a.title.localeCompare(b.title));

    return <div className="BookList">
        <h3 className="BookList_Title">Books</h3>
    
        <ol className="BookList_List">
            {
                books.map(book => <BookRow book={book.title} author={book.author}></BookRow>)
            }
        </ol>
    </div>
}



//krijohet vetem nje here
const root = document.getElementById('root');

//thirret vetem nje here
ReactDOM.render(<BookList books={books} />, root);