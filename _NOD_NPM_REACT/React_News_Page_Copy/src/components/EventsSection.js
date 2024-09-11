import EventItem from './EventItem'
import LargeLink from './LargeLink'

const EventsSection = () => {
  return (
    <section className="events-section">
        <h2 className="section-title">Renginiai</h2>

        <div className="events-list">
            <EventItem day="5" month="spa" location="Upės g. 21, Greenhall 1, 10 aukštas ir Online" imageSrc="https://codeacademy.lt/wp-content/uploads/2024/06/0530_CA_event-768x432.png" />
            <EventItem day="5"  />
            <EventItem location="Upės g. 21, Greenhall 1, 10 aukštas ir Online" />
        </div>

        <LargeLink url="/#">Daugiau</LargeLink>
    </section>
  )
}

export default EventsSection