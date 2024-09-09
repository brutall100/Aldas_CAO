import LargeLink from "./LargeLink"
import VideoWrapper from "./VideoWrapper"

const VideoSection = () => {
  return (
    <section className="video-section">
        <h2 className="section-title">Vaizdo įrašai</h2>

        <div className="video-list">
            <VideoWrapper />
            <VideoWrapper />
            <VideoWrapper />
        </div>

        <LargeLink url="/#">
          Visi video
        </LargeLink>
    </section>
  )
}

export default VideoSection