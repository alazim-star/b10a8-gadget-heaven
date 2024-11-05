import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { productId: 1, product_title: "Dell XPS 15", price: 1499.99, rating: 4.8 },
  { productId: 2, product_title: "HP Pavilion 14", price: 799.99, rating: 4.5 },
  { productId: 3, product_title: "Asus ZenBook 13", price: 999.99, rating: 4.6 },
  { productId: 4, product_title: "iPhone 14 Pro", price: 999.99, rating: 4.9 },
  { productId: 5, product_title: "Samsung Galaxy S23 Ultra", price: 1199.99, rating: 4.8 },
  { productId: 6, product_title: "Apple AirPods Pro (2nd Gen)", price: 249.99, rating: 4.8 },
  { productId: 7, product_title: "Anker PowerCore 20000", price: 49.99, rating: 4.7 },
  { productId: 8, product_title: "Logitech MX Master 3S", price: 99.99, rating: 4.8 },
  { productId: 9, product_title: "Apple Watch Series 8", price: 399.99, rating: 4.9 },
  { productId: 10, product_title: "Samsung Galaxy Watch 5", price: 299.99, rating: 4.7 },
  { productId: 11, product_title: "Garmin Forerunner 955", price: 499.99, rating: 4.8 }
];

const Statistics = () => {
  return (
    <div>
      <div className="bg-[#9538e2] h-[263px]">
        <div className="text-center text-white py-10">
          <h1 className="text-3xl font-bold mt-5">Statistics</h1>
          <p>
            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
          </p>
        </div>
      </div>

      <h3 className="font-bold text-2xl text-center mt-10">Statistics Chart</h3>

      <div className="mt-5 container mx-auto" style={{ height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 20, right: 80, bottom: 20, left: 20 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="product_title" label={{ value: 'Product Name', position: 'insideBottomRight', offset: 0 }} />
            <YAxis label={{ value: 'Price', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="price" fill="#ecdff9" stroke="#8884d8" />
            <Bar dataKey="price" barSize={20} fill="#9538e2" />
            <Line type="monotone" dataKey="rating" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
