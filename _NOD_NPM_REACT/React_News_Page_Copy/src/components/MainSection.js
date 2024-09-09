import NewsSection from "./NewsSection"
import VideoSection from "./VideoSection"

const MainSection = () => {
    return (
        <main>
            <h1 className="page-title">Naujienos</h1>

            <NewsSection />
            <VideoSection />
        </main>
    )
}

export default MainSection