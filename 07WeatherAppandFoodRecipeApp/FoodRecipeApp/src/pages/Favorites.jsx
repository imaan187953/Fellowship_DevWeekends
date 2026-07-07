import { Link } from 'react-router-dom'
import { useRecipes } from '../context/RecipeContext.jsx'
import RecipeCard from '../components/RecipeCard.jsx'

function Favorites() {
  const { favorites } = useRecipes()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="font-display text-2xl font-semibold text-charcoal mb-8">Your Favorites</h2>

      {favorites.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl shadow-lg">
          <span className="text-4xl">🍲</span>
          <p className="mt-4 text-charcoal font-medium">No favorite recipes yet.</p>
          <p className="mt-1 text-sm text-taupe">Recipes you save will show up here.</p>
          <Link
            to="/"
            className="mt-6 inline-flex px-4 py-2 rounded-lg bg-forest text-cream text-sm font-semibold hover:bg-forest-light transition-colors duration-300"
          >
            Discover recipes
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites
