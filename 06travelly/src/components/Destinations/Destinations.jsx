import DestinationCard from '../DestinationCard/DestinationCard'
import './Destinations.css'

const destinations = [
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    rating: 4.8,
    reviews: 1200,
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    rating: 4.9,
    reviews: 980,
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    country: 'Switzerland',
    rating: 4.7,
    reviews: 870,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'thailand',
    name: 'Thailand',
    country: 'Thailand',
    rating: 4.6,
    reviews: 760,
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
  },
]

function Destinations() {
  return (
    <section className="destinations" id="destinations">
      <div className="container">
        <div className="destinations__header">
          <span className="section-eyebrow">Top Destinations</span>
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">
            Explore some of the most beautiful places in the world.
          </p>
        </div>

        <div className="destinations__grid">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              image={destination.image}
              country={destination.country}
              name={destination.name}
              rating={destination.rating}
              reviews={destination.reviews}
            />
          ))}
        </div>

        <div className="destinations__cta">
          <a href="#all-destinations" className="btn btn-primary">
            View All Destinations
          </a>
        </div>
      </div>
    </section>
  )
}

export default Destinations
