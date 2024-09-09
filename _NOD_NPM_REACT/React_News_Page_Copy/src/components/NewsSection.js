import LargeLink from "./LargeLink"
import NewsItem from "./NewsItem"

const NewsSection = () => {
    return (
        <section className="news-section">
            <div className="main-news">
                <NewsItem 
                    title="Sėkmės istorija – įsidarbinimas į Asteri" 
                    date="2024-05-23" 
                    category="Sėkmės istorija 2" 
                    url="/#" 
                    imageSrc="https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png" 
                />

                <NewsItem
                    title="Sėkmės istorija – įsidarbinimas į Asteri" 
                    date="2024-07-23" 
                    category="Sėkmės istorija" 
                    url="/#" 
                    imageSrc="https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png" 
                />
            </div>

            <div className="secondary-news">
                <NewsItem
                    title="Sėkmės istorija – įsidarbinimas į Asteri!" 
                    date="2024-05-23" 
                    category="Sėkmės istorija" 
                    url="/#" 
                    imageSrc="https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png" 
                />
                <NewsItem
                    title="Sėkmės istorija – įsidarbinimas į Asteri" 
                    date="2024-05-23" 
                    category="Sėkmės istorija" 
                    url="/#" 
                    imageSrc="https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png" 
                />
                <NewsItem
                    title="Sėkmės istorija – įsidarbinimas į Asteri" 
                    date="2024-05-23" 
                    category="Sėkmės istorija" 
                    url="/#" 
                    imageSrc="https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png" 
                />
                <NewsItem
                    title="Sėkmės istorija – įsidarbinimas į Asteri" 
                    date="2024-05-23" 
                    category="Sėkmės istorija" 
                    url="/#" 
                    imageSrc="https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png" 
                />
            </div>

            <LargeLink url="/#">
                <span>Visos</span> naujienos
            </LargeLink>
        </section>
    )
}

export default NewsSection