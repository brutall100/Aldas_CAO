const LargeLink = (props) => {
    // const classes = props.classes
    const { classes, url, children } = props

    if (!url || !children) {
        return
    }

    return (
        <a href={url} className={`large-link ${classes ? classes : ''}`} >
            {children}
        </a>
    )
}

export default LargeLink