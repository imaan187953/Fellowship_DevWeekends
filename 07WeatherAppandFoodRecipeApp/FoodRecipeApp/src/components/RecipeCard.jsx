import { Link } from 'react-router-dom'

function RecipeCard({ recipe }) {
  if (!recipe) return null

  return (
    <div className="recipe-card-notch relative flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300">
      <div className="relative h-44 w-full overflow-hidden bg-cream-dim">
        {recipe.image ? (
          <img
            src={recipe.image}
            alt={recipe.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">🍽️</div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 gap-2">
        <h3 className="font-display text-lg font-semibold text-charcoal leading-snug line-clamp-2">
          {recipe.title}
        </h3>
        <p className="text-sm text-taupe font-mono uppercase tracking-wide">
          {recipe.publisher || 'Unknown publisher'}
        </p>

        <Link
          to={`/recipe/${recipe.id}`}
          className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-amber text-charcoal font-semibold text-sm hover:bg-amber-dark hover:text-cream transition-colors duration-300"
        >
          View Recipe
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default RecipeCard
