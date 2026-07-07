import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import RecipeDetails from './pages/RecipeDetails.jsx'
import Favorites from './pages/Favorites.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="border-t border-black/5 py-6 text-center text-sm text-taupe font-body">
        <p>
          Made with <span className="text-clay">♥</span> for home cooks · Recipe data from{' '}
          <a
            href="https://forkify-api.jonas.io/"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-amber decoration-2 underline-offset-2 hover:text-forest transition-colors"
          >
            Forkify API
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
