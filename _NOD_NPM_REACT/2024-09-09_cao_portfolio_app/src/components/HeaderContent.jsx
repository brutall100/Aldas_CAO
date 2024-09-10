const HeaderContent = (props) => {
    const {title, paragraph1, paragraph2, buttonText} = props;
    return (
        <header>
            <h1>{title}</h1>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
            <button>{buttonText}</button>
        </header>
    );
};

export default HeaderContent;