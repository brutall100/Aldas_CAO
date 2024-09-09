import EventItem from './EventItem'
import LargeLink from './LargeLink'

const EventsSection = () => {
  return (
    <section className="events-section">
        <h2 className="section-title">Renginiai</h2>

        <div className="events-list">
            <EventItem />
            <EventItem />
            <EventItem />
        </div>

        <LargeLink url="/#">Daugiau</LargeLink>
    </section>
  )
}

export default EventsSection