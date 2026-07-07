import { useRecipes } from '../context/RecipeContext.jsx'
import RecipeCard from '../components/RecipeCard.jsx'
import Loading from '../components/Loading.jsx'
import SearchBar from '../components/SearchBar.jsx'

function WelcomeHero() {
  const { searchRecipes } = useRecipes()
  const ideas = ['Pizza', 'Ramen', 'Tacos', 'Curry', 'Pancakes']

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center relative">
        <span className="inline-block text-5xl mb-4">🍳</span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-forest leading-tight max-w-2xl mx-auto">
          Find the recipe you didn't know you were craving.
        </h1>
        <p className="mt-4 text-taupe max-w-lg mx-auto">
          Search thousands of recipes from around the web, and keep the ones you love in your favorites.
        </p>

        <div className="mt-8 max-w-xl mx-auto">
          <SearchBar onSearch={searchRecipes} />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs uppercase tracking-wide text-taupe font-mono">Try:</span>
          {ideas.map((idea) => (
            <button
              key={idea}
              type="button"
              onClick={() => searchRecipes(idea)}
              className="px-3 py-1 rounded-full bg-white border border-black/10 text-sm text-forest hover:bg-forest hover:text-cream hover:border-forest transition-colors duration-200"
            >
              {idea}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function Home() {
  const { recipes, loading, error, hasSearched, searchTerm } = useRecipes()

  if (!hasSearched) {
    return <WelcomeHero />
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-semibold text-charcoal">
          Results for <span className="text-forest">&ldquo;{searchTerm}&rdquo;</span>
        </h2>
        {!loading && !error && (
          <p className="text-sm text-taupe mt-1">
            {recipes.length} recipe{recipes.length === 1 ? '' : 's'} found
          </p>
        )}
      </div>

      {loading && <Loading label="Searching for recipes..." />}

      {!loading && error && (
        <div className="text-center py-16 bg-white rounded-xl shadow-lg">
          <span className="text-4xl">😕</span>
          <p className="mt-4 text-charcoal font-medium max-w-md mx-auto">{error}</p>
        </div>
      )}

      {!loading && !error && recipes.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
