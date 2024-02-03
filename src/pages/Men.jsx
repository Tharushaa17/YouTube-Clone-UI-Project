import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

const Men = () => {

  const [result, setResult] = useState([]);

  const category = "men's clothing"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        const data = await res.json();

        console.log(data);
       
        setResult(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="p-5 text-3xl font-bold">Men's Clothings</h1>

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
    </>
  )
}

export default Men