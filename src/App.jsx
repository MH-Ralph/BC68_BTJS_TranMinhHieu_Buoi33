import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <header className="py-5 px-5 bg-gray-500">
        <div className="container text-center text-2xl  text-white">
          Shoe Shop
        </div>
      </header>

      <section className="content py-5 px-5">
        <div className="container">
          <ProductList />
        </div>
      </section>
    </>
  );
}

export default App;
