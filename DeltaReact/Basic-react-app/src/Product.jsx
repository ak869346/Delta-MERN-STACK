import "./Product.css";

function Product({title,price,feature,features2}) {
    const list = feature.map((featur) => <li>{featur}</li>);
    // let isDiscount = price>10000 ? "Discount - 5% " : "";

    let styles = {backgroundColor: price>10000 ? "yellow" : null};
    return (
        <div className="Product" style={styles}>
            <h1>{title}</h1>
            <h3>Price: {price}</h3>
            <p>{list}</p>
            <p>{features2.a}</p>
            {/* <p>{isDiscount}</p> */}
            {price>10000 ? <p>Discount - 5%</p> : null}
        </div>
    );
}

export default Product;
