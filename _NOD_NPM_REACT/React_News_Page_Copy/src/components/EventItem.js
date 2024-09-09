const EventItem = (props) => {
  const { url, imgSrc, imgAlt, day, month, location, eventTitle } = props
  return (
    <div className="event-item">
        <a href={url}>
            <div className="event-item-image-wrapp">
            <img src={imgSrc} alt={imgAlt} className="event-item-image" />
            </div>
    
            <div className="event-item-content-wrapper">
            <div className="event-date">
                <span className="event-day">{day}</span>
                <span className="event-month">{month}</span>
            </div>
            <div className="event-item-content">
                <span className="event-location">{location}</span>
                <h3 className="event-title">{eventTitle}</h3>
            </div>
            </div>
        </a>
    </div>
  )
}

export default EventItem

