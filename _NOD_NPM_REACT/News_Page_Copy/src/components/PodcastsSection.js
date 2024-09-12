import PodcastItem from './PodcastItem'

const PodcastsSection = () => {
  return (
    <section className="podcasts-section">
        <h2 className="section-title">Podcastai ir radijo laidos</h2>

        <div className="podcasts-list">
            <PodcastItem
              title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
              date="2021-09-02"
              length="7:55"
            />
            <PodcastItem
              title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
              date="2021-09-02"
              image="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png"
            />
            <PodcastItem
              title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
              length="7:55"
              image="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png"
            />
            <PodcastItem
              date="2024-09-02"
              length="7:55"
              image="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png"
            />

        </div>
    </section>
  )
}

export default PodcastsSection