import './App.css';

function App() {
  return (
    <div className="container">
      <div className="page-content">
        <main>
          <h1 className="page-title">Naujienos</h1>

          <section className="news-section">
            <div className="main-news">
              <div className="news-item">
                <a href="#">
                  <div className="news-item-image-wrapper">
                    <img src="https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png" alt="" className="news-item-image" />
                  </div>
                  <div className="news-item-content">
                    <span className="news-item-category">Sėkmės istorija</span>
                    <h2 className="news-item-title">Sėkmės istorija – įsidarbinimas į Asteri</h2>
                    <span className="news-item-date">2024-05-23</span>
                  </div>
                </a>
              </div>

              <div className="news-item">
                <a href="#">
                  <div className="news-item-image-wrapper">
                    <img src="https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png" alt="" className="news-item-image" />
                  </div>
                  <div className="news-item-content">
                    <span className="news-item-category">Sėkmės istorija</span>
                    <h2 className="news-item-title">Sėkmės istorija – įsidarbinimas į Asteri</h2>
                    <span className="news-item-date">2024-05-23</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="secondary-news">
              <div className="news-item">
                <a href="#">
                  <div className="news-item-image-wrapper">
                    <img src="https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png" alt="" className="news-item-image" />
                  </div>
                  <div className="news-item-content">
                    <span className="news-item-category">Sėkmės istorija</span>
                    <h2 className="news-item-title">Sėkmės istorija – įsidarbinimas į Asteri</h2>
                    <span className="news-item-date">2024-05-23</span>
                  </div>
                </a>
              </div>

              <div className="news-item">
                <a href="#">
                  <div className="news-item-image-wrapper">
                    <img src="https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png" alt="" className="news-item-image" />
                  </div>
                  <div className="news-item-content">
                    <span className="news-item-category">Sėkmės istorija</span>
                    <h2 className="news-item-title">Sėkmės istorija – įsidarbinimas į Asteri</h2>
                    <span className="news-item-date">2024-05-23</span>
                  </div>
                </a>
              </div>

              <div className="news-item">
                <a href="#">
                  <div className="news-item-image-wrapper">
                    <img src="https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png" alt="" className="news-item-image" />
                  </div>
                  <div className="news-item-content">
                    <span className="news-item-category">Sėkmės istorija</span>
                    <h2 className="news-item-title">Sėkmės istorija – įsidarbinimas į Asteri</h2>
                    <span className="news-item-date">2024-05-23</span>
                  </div>
                </a>
              </div>
            </div>

            <a href="#" className="large-link">
              Visos naujienos
            </a> 
          </section>

          <section className="video-section">
            <h2 className="section-title">Vaizdo įrašai</h2>

            <div className="video-list">
              <div className="video-wrapper">
                <h3 className="video-title">#6 Studentės istorija: sėkmė slypi disciplinoje</h3>

                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Rz6bswWbPqw?si=0Je3Y085kS2QibIg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="video-wrapper">
                <h3 className="video-title">#6 Studentės istorija: sėkmė slypi disciplinoje</h3>

                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Rz6bswWbPqw?si=0Je3Y085kS2QibIg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <a href="#" className="large-link">
              Visi video
            </a>
          </section>
        </main>

        <aside>
          <section className="podcasts-section">
            <h2 className="section-title">Podcastai ir radijo laidos</h2>

            <div className="podcasts-list">
              <div className="podcast-item">
                <div className="podcast-controls">
                  <img src="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png" alt="" className="podcast-image" />
                  <span className="podcast-length">Trukmė: 7:55</span>
                  <button className="podcast-play">Play</button>
                </div>
                <div className="podcast-content">
                  <h3 className="podcast-title">Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</h3>
                  <span className="podcast-date">2021-09-02</span>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default App;

