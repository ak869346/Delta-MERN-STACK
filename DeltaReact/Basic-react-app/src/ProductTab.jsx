import Product from "./Product";

function ProductTab() {
    let option1 = ["Hi-tech","Durable","Fast"];
    // let option1 = [<li>"Hi-tech"</li>,<li>"Durable"</li>,<li>"Fast"</li>];
    let option2 = {a:"Hi-tech",b:"Durable",c:"Fast"};
    return (
        <>
            <Product title="Mobile Phone" price="10000" feature={option1} features2={option2}/>
            <Product title="Laptop" price="45000" feature={option1} features2={option2}/>
            <Product title="Tablets" price="25000" feature={option1} features2={option2}/>
        </>
    );
}

export default ProductTab;