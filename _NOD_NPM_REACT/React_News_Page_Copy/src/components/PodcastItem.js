const PodcastItem = ({ image, length, title, date }) => {

  return (
    <div className="podcast-item">
        <div className="podcast-controls">
            <img src={image} alt="" className="podcast-image" />
            <span className="podcast-length">Trukmė: {length}</span>
            <button className="podcast-play">Play</button>
        </div>
        <div className="podcast-content">
            <h3 className="podcast-title">{title}</h3>
            <span className="podcast-date">{date}</span>
        </div>
    </div>
  )
}

export default PodcastItem