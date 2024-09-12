function ProductList(props){
    return(
        <div>
            <h1>Prekių sąrašas</h1>
            <ul>
                {props.products.map((product, index) => {
                    return <li key={index}>{product}</li>
                })}
            </ul>
        </div>
    )
}

export default ProductList;