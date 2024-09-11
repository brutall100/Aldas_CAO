const EventItem = (props) => {
  const { imageSrc, location, day, month } = props

  return (
    <div className="event-item">
        <a href="/#">
            {imageSrc && (
              <div className="event-item-image-wrapper">
                <img src={imageSrc} alt="" className="event-item-image" />
              </div>
            )}
    
            <div className="event-item-content-wrapper">
              <div className="event-date">
                {(day && month) ? (
                  <>
                    <span className="event-day">30</span>
                    <span className="event-month">Geg</span>
                  </>
                ) : (
                  <span className="event-month">Soon</span>
                )}
              </div>
              <div className="event-item-content">
                  <span className="event-location">{location ? location : 'Online'}</span>
                  <h3 className="event-title">CodeAcademy galimybės verslui</h3>
              </div>
            </div>
        </a>
    </div>
  )
}

export default EventItem