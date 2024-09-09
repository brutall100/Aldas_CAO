import EventItem from './EventItem'
import LargeLink from './LargeLink'

const EventsSection = () =>
{
  return (
    <section className="events-section">
      <h2 className="section-title">Renginiai</h2>

      <div className="events-list">
        <EventItem
          url="/#"
          imgSrc="https://codeacademy.lt/wp-content/uploads/2024/06/0530_CA_event-768x432.png"
          imgAlt="Image of event"
          day="30"
          month="Kov"
          location="Upės g. 21, Greenhall 1, 10 aukštas ir Online"
          eventTitle="Galimybės verslui"
        />
        <EventItem
          url="/#"
          imgSrc="https://codeacademy.lt/wp-content/uploads/2024/06/0530_CA_event-768x432.png"
          imgAlt="Image of event"
          day="2"
          month="Geg"
          location="Upės g. 21, Greenhall 1, 10 aukštas ir Online"
          eventTitle="CodeAcademy galimybės verslui"
        />
        <EventItem
          url="/#"
          imgSrc="https://codeacademy.lt/wp-content/uploads/2024/06/0530_CA_event-768x432.png"
          imgAlt="Image of event"
          day="25"
          month="Lie"
          location="Upės g. 21, Greenhall 1, 10 aukštas ir Online"
          eventTitle="CodeAcademy galimybės verslui"
        />

      </div>

      <LargeLink url="/#">Daugiau</LargeLink>
    </section>
  )
}

export default EventsSection

