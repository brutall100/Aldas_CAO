const Hero = (props) => {
    const { title, subtitle } = props;

    if (!title || !subtitle) {
        return null;
    }


    return (
        <div className="Hero">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
}

export default Hero;
