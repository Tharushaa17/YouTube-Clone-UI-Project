import React, { useEffect, useState } from "react";
import CategoryCards from "../components/CategoryCards";
import ProductCard from "../components/ProductCard";


const Home = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        const shuffledData = data.sort(() => Math.random() - 0.5);
        const randomSubset = shuffledData
          .slice(0, 4)
          .map((item) => ({ ...item }));

         
        setResult(randomSubset);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="p-5 text-3xl font-bold">Flash Sale</h1>

      <div className="p-10 flex flex-wrap">
        {result.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2">
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          </div>
        ))}
      </div>

      <h1 className="p-5 text-3xl font-bold">Product Categories</h1>
      
      <div className="p-10 flex flex-wrap items-center justify-center sm:justify-start">
        <div className="p-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
          <CategoryCards
            color="bg-[#FF5E84]"
            name="Woman's Category"
            path="/woman"
          />
        </div>

        <div className="p-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
          <CategoryCards
            color="bg-[#2BD9AF]"
            name="Men's Category"
            path="/men"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
