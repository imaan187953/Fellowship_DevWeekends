import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <span className="text-6xl">🥄</span>
      <h1 className="font-display text-4xl font-semibold text-charcoal mt-4">
        This page fell off the counter.
      </h1>
      <p className="mt-3 text-taupe">
        We couldn't find what you're looking for. Let's get you back to the kitchen.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex px-5 py-2.5 rounded-lg bg-forest text-cream font-semibold text-sm hover:bg-forest-light transition-colors duration-300"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
