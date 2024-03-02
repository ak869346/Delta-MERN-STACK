import './App.css'

import Title from './Title.jsx';
import Product from './Product.jsx';
import ProductTab from './ProductTab.jsx';
// import {Title} from './Title.jsx';  // named export...
import Description from './Description.jsx';

// function Title() {
//   return <h1>I am the Title</h1>
// }

// function Description() {
//   return <h3>I am the Description</h3>
// }

function App() {
  return (
    <>
    {/* <button>Hello World</button>
    <p>This is paragraph</p> */}
    {/* <Title />
    <Description/>
    <Title />
    <Description/> */}

    {/* <Product/>
    <Product/>
    <Product/> */}
    <ProductTab/>
    </>
  );
}

export default App
