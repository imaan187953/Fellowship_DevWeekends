import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useRecipes } from '../context/RecipeContext.jsx'
import Loading from '../components/Loading.jsx'

function formatQuantity(qty) {
  if (qty === null || qty === undefined) return ''
  // Round to at most 2 decimal places without trailing zeros (e.g. 1.5, not 1.50)
  return Math.round(qty * 100) / 100
}

function RecipeDetails() {
  const { id } = useParams()
  const { selectedRecipe, detailsLoading, detailsError, getRecipeDetails, toggleFavorite, isFavorite } =
    useRecipes()

  useEffect(() => {
    getRecipeDetails(id)
  }, [id, getRecipeDetails])

  if (detailsLoading) {
    return <Loading label="Fetching recipe details..." />
  }

  if (detailsError) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <span className="text-4xl">🔥</span>
        <p className="mt-4 text-charcoal font-medium">{detailsError}</p>
        <Link
          to="/"
          className="mt-6 inline-flex px-4 py-2 rounded-lg bg-forest text-cream text-sm font-semibold hover:bg-forest-light transition-colors duration-300"
        >
          Back to search
        </Link>
      </div>
    )
  }

  if (!selectedRecipe) {
    return null
  }

  const favorited = isFavorite(selectedRecipe.id)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-64 sm:h-80 w-full bg-cream-dim">
          {selectedRecipe.image ? (
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">🍽️</div>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sm text-taupe font-mono uppercase tracking-wide">
            {selectedRecipe.publisher || 'Unknown publisher'}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal mt-1">
            {selectedRecipe.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cream-dim">
              <span aria-hidden="true">⏱️</span>
              <span className="text-sm font-medium text-charcoal">
                {selectedRecipe.cookingTime ?? '—'} min
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cream-dim">
              <span aria-hidden="true">🍽️</span>
              <span className="text-sm font-medium text-charcoal">
                {selectedRecipe.servings ?? '—'} servings
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => toggleFavorite(selectedRecipe)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-300 ${
                favorited
                  ? 'bg-clay text-cream hover:bg-clay/90'
                  : 'bg-amber text-charcoal hover:bg-amber-dark hover:text-cream'
              }`}
            >
              {favorited ? (
                <>
                  <span aria-hidden="true">✕</span> Remove from Favorites
                </>
              ) : (
                <>
                  <span aria-hidden="true">★</span> Add to Favorites
                </>
              )}
            </button>

            {selectedRecipe.sourceUrl && (
              <a
                href={selectedRecipe.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-forest text-forest hover:bg-forest hover:text-cream transition-colors duration-300"
              >
                View Original Source
              </a>
            )}
          </div>

          <div className="mt-10">
            <h2 className="font-display text-xl font-semibold text-charcoal mb-4">Ingredients</h2>
            {selectedRecipe.ingredients.length === 0 ? (
              <p className="text-taupe text-sm">No ingredient list available for this recipe.</p>
            ) : (
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {selectedRecipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-charcoal">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber shrink-0" aria-hidden="true" />
                    <span>
                      {ing.quantity ? (
                        <span className="font-mono font-medium">{formatQuantity(ing.quantity)} </span>
                      ) : null}
                      {ing.unit ? <span>{ing.unit} </span> : null}
                      {ing.description}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails
