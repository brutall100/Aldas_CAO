const NewsItem = (props) => {
    // console.log(props)
    // console.log(props.title)
    // console.log(props.date)
    // console.log(props.category)
    // console.log(props.imageSrc)
    // console.log(props.url)
    // const title = 'Sėkmės istorija – įsidarbinimas į Asteri'
    // const date = '2024-05-23'
    // const category = 'Sėkmės istorija'
    // const url = '/#'
    // const imageSrc = 'https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png'

    // const title = props.title
    // const date = props.date
    // const category = props.category
    // const url = props.url
    // const imageSrc = props.imageSrc

    const { title, date, category, url, imageSrc } = props

    return (
        <div className="news-item">
            <a href={url}>
                <div className="news-item-image-wrapper">
                    <img src={imageSrc} alt="" className="news-item-image" />
                </div>
                <div className="news-item-content">
                    <span className="news-item-category">{category}</span>
                    <h2 className="news-item-title">{title}</h2>
                    <span className="news-item-date">{date}</span>
                </div>
            </a>
        </div>
    )
}

export default NewsItem