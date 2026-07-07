function Loading({ label = 'Loading recipes...' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20" role="status" aria-live="polite">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-forest/15" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-amber border-r-amber animate-spin" />
      </div>
      <p className="text-sm font-medium text-taupe">{label}</p>
    </div>
  )
}

export default Loading
