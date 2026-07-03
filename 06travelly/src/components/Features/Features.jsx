import './Features.css'

const features = [
  {
    id: 'destinations',
    title: 'Best Destinations',
    description: 'Explore top destinations around the world.',
    bg: 'blue',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 22s7-6.55 7-12A7 7 0 0 0 5 10c0 5.45 7 12 7 12Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    id: 'price',
    title: 'Best Price Guarantee',
    description: 'We ensure the best prices for your travel.',
    bg: 'green',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 12.3 12.7 19.6a2 2 0 0 1-2.83 0l-6.47-6.47a2 2 0 0 1-.4-2.24L5.6 4.6a2 2 0 0 1 1.8-1.1H14a2 2 0 0 1 1.42.59l4.58 4.58a2 2 0 0 1 0 2.83Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="9.5" cy="8.5" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'support',
    title: '24/7 Support',
    description: 'Our team is always here to help you.',
    bg: 'purple',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 13v-1a8 8 0 0 1 16 0v1"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <rect x="3" y="13" width="4" height="6" rx="1.3" stroke="currentColor" strokeWidth="1.7" />
        <rect x="17" y="13" width="4" height="6" rx="1.3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M20 19a4 4 0 0 1-4 3h-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'secure',
    title: 'Safe & Secure',
    description: 'Your safety and security are our priority.',
    bg: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 3 5 5.7v5.4c0 5 3 8.6 7 9.9 4-1.3 7-4.9 7-9.9V5.7L12 3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="m9.3 12.2 1.9 1.9 3.5-3.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function Features() {
  return (
    <section className="features">
      <div className="container features__grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <div className={`feature-card__icon feature-card__icon--${feature.bg}`}>
              {feature.icon}
            </div>
            <h3 className="feature-card__title">{feature.title}</h3>
            <p className="feature-card__desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
