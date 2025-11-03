import { useNavigate } from 'react-router-dom'
import './App.css'

interface BookCard {
  id: number
  title: string
  type: 'libro' | 'poema' | 'cuento' | 'ensayo'
}

const mockBooks: BookCard[] = [
  { id: 1, title: "Poema1", type: "poema" },
]

function App() {
  const navigate = useNavigate();

  const handleBookClick = (book: BookCard) => {
    if (book.title === "Poema1") {
      navigate('/poema1');
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="main-title">Bienvenidos a la mente de Macana</h1>
        <p className="subtitle">Un universo de palabras, historias y reflexiones</p>
      </header>

      <main className="main-content">
        <section className="books-section">
          <h2 className="section-title">Mis Escritos</h2>
          <div className="books-grid">
            {mockBooks.map((book) => (
              <div key={book.id} className="book-card">
                <div className="book-image-placeholder">
                  <span className="book-type">{book.type}</span>
                </div>
                <h3 className="book-title">{book.title}</h3>
                <button 
                  className="read-button"
                  onClick={() => handleBookClick(book)}
                >
                  Leer
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Macana - Todos los derechos reservados</p>
      </footer>
    </div>
  )
}

export default App