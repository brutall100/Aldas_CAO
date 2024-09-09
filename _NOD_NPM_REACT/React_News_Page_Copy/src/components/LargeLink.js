const LargeLink = (props) => {
    return (
        <a href={props.url} className="large-link">
            {props.children}
        </a>
    )
}

export default LargeLink