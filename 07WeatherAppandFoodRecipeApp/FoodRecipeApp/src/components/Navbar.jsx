import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar.jsx'
import { useRecipes } from '../context/RecipeContext.jsx'

const navLinkClasses = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
    isActive ? 'bg-forest text-cream' : 'text-forest hover:bg-forest/10'
  }`

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { searchRecipes } = useRecipes()
  const navigate = useNavigate()

  const handleSearch = (term) => {
    searchRecipes(term)
    setMobileOpen(false)
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-black/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0 group" onClick={() => setMobileOpen(false)}>
            <span className="text-2xl transition-transform duration-300 group-hover:-rotate-12">🍴</span>
            <span className="font-display text-xl sm:text-2xl font-semibold text-forest tracking-tight">
              Forkful
            </span>
          </Link>

          <div className="hidden md:block flex-1 max-w-xl">
            <SearchBar onSearch={handleSearch} />
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClasses} end>
              Home
            </NavLink>
            <NavLink to="/favorites" className={navLinkClasses}>
              Favorites
            </NavLink>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-forest hover:bg-forest/10 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 animate-[fadeIn_0.2s_ease-out]">
            <SearchBar onSearch={handleSearch} />
            <nav className="flex flex-col gap-1">
              <NavLink to="/" className={navLinkClasses} end onClick={() => setMobileOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/favorites" className={navLinkClasses} onClick={() => setMobileOpen(false)}>
                Favorites
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
