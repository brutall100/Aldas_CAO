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

    if (!title || !url) {
        return ''
    }

    // let categoryElement
    // if (category) {
    //     categoryElement = <span className="news-item-category">{category}</span>
    // }

    const categoryElement = category && <span className="news-item-category">{category}</span>
    const dateElement = date && <span className="news-item-date">{date}</span>
    const imageElement = imageSrc && (
        <div className="news-item-image-wrapper">
            <img src={imageSrc} alt="" className="news-item-image" />
        </div>
    )

    return (
        <div className="news-item">
            <a href={url}>
                {imageElement}
                <div className="news-item-content">
                    {categoryElement}
                    <h2 className="news-item-title">{title}</h2>
                    {dateElement}
                </div>
            </a>
        </div>
    )
}

export default NewsItem