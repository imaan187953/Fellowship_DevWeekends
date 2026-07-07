import { useState } from 'react'

function SearchBar({ onSearch, initialValue = '' }) {
  const [value, setValue] = useState(initialValue)

  const submit = () => {
    if (value.trim()) {
      onSearch(value)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submit()
    }
  }

  return (
    <div className="flex items-stretch gap-2 w-full">
      <div className="relative flex-1">
        <span className="absolute inset-y-0 left-3 flex items-center text-taupe pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
          </svg>
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search recipes, e.g. pizza, pasta, curry..."
          aria-label="Search recipes"
          className="w-full pl-9 pr-3 py-2 rounded-lg border border-black/10 bg-white text-sm text-charcoal placeholder:text-taupe/70 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-shadow duration-200"
        />
      </div>
      <button
        type="button"
        onClick={submit}
        className="shrink-0 px-4 py-2 rounded-lg bg-forest text-cream text-sm font-semibold hover:bg-forest-light transition-colors duration-200"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
