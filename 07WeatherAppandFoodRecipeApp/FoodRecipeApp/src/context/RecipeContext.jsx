import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const RecipeContext = createContext(null)

const API_BASE = 'https://forkify-api.herokuapp.com/api/v2/recipes'
const FAVORITES_STORAGE_KEY = 'forkful:favorites'

// Normalizes the Forkify API's snake_case recipe shape into a flat object
// so the rest of the app never has to think about the raw API response.
function normalizeRecipe(recipe) {
  if (!recipe) return null
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    image: recipe.image_url,
    sourceUrl: recipe.source_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients:
      recipe.ingredients?.map((ing) => ({
        quantity: ing.quantity,
        unit: ing.unit,
        description: ing.description,
      })) ?? [],
  }
}

export function RecipeProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [detailsLoading, setDetailsLoading] = useState(false)
  const [detailsError, setDetailsError] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)

  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
    } catch {
      // Ignore storage failures (e.g. private browsing quota) - favorites just
      // won't persist across reloads in that case.
    }
  }, [favorites])

  const searchRecipes = useCallback(async (query) => {
    const trimmed = query?.trim()
    if (!trimmed) return

    setSearchTerm(trimmed)
    setLoading(true)
    setError(null)
    setHasSearched(true)

    try {
      const res = await fetch(`${API_BASE}?search=${encodeURIComponent(trimmed)}`)
      if (!res.ok) {
        throw new Error(`Search failed with status ${res.status}`)
      }
      const data = await res.json()
      const results = data?.data?.recipes ?? []
      setRecipes(results.map(normalizeRecipe))
      if (results.length === 0) {
        setError('No recipes matched your search. Try a different ingredient or dish.')
      }
    } catch (err) {
      console.error('searchRecipes failed:', err)
      setRecipes([])
      setError('Something went wrong while searching. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  const getRecipeDetails = useCallback(async (id) => {
    if (!id) return

    setDetailsLoading(true)
    setDetailsError(null)
    setSelectedRecipe(null)

    try {
      const res = await fetch(`${API_BASE}/${id}`)
      if (!res.ok) {
        throw new Error(`Recipe fetch failed with status ${res.status}`)
      }
      const data = await res.json()
      const recipe = normalizeRecipe(data?.data?.recipe)
      if (!recipe) {
        throw new Error('Recipe not found in response')
      }
      setSelectedRecipe(recipe)
    } catch (err) {
      console.error('getRecipeDetails failed:', err)
      setDetailsError("We couldn't load this recipe. It may have been removed, or your connection dropped.")
    } finally {
      setDetailsLoading(false)
    }
  }, [])

  const toggleFavorite = useCallback((recipe) => {
    if (!recipe?.id) return
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === recipe.id)
      if (exists) {
        return prev.filter((fav) => fav.id !== recipe.id)
      }
      return [...prev, recipe]
    })
  }, [])

  const isFavorite = useCallback(
    (id) => favorites.some((fav) => fav.id === id),
    [favorites],
  )

  const value = {
    searchTerm,
    recipes,
    loading,
    error,
    hasSearched,
    selectedRecipe,
    detailsLoading,
    detailsError,
    favorites,
    searchRecipes,
    getRecipeDetails,
    toggleFavorite,
    isFavorite,
  }

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRecipes() {
  const context = useContext(RecipeContext)
  if (!context) {
    throw new Error('useRecipes must be used within a RecipeProvider')
  }
  return context
}
