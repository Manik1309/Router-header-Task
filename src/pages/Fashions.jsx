import React from 'react';

const Fashions = ({products}) => {
    return (
        <div>
            <div>
            <div>
            <h1 className='text-black font-extrabold text-2xl'>FASHIONS</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">   
      {products.filter(product => ( product.category === "fashion")).map(product => (
        <div key={product.id}            
          className="border p-4 rounded shadow hover:shadow-lg transition duration-300">
          <img  className="w-full h-auto object-cover"
            src={product.images && product.images[0]}   alt={product.title}
          />
          <div>
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <h4 className="text-sm text-gray-600">Category: {product.category}</h4>
            <h4 className="text-sm text-gray-600">Rating: {product.rating} ⭐</h4>
            <h4 className="text-sm font-bold">Price:{product.price}</h4>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
        </div>
        </div>
        </div>
    );
};

export default Fashions;