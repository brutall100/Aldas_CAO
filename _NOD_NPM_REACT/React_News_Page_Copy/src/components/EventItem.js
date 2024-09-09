const EventItem = () => {
  return (
    <div className="event-item">
        <a href="/#">
            <div className="event-item-image-wrapp">
            <img src="https://codeacademy.lt/wp-content/uploads/2024/06/0530_CA_event-768x432.png" alt="" className="event-item-image" />
            </div>
    
            <div className="event-item-content-wrapper">
            <div className="event-date">
                <span className="event-day">30</span>
                <span className="event-month">Geg</span>
            </div>
            <div className="event-item-content">
                <span className="event-location">Upės g. 21, Greenhall 1, 10 aukštas ir Online </span>
                <h3 className="event-title">CodeAcademy galimybės verslui</h3>
            </div>
            </div>
        </a>
    </div>
  )
}

export default EventItem