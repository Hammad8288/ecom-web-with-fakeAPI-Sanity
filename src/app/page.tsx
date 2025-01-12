import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className=" bg-gray-700 text-white">
        <div className="container mx-auto flex flex-col items-center justify-center text-center py-20 px-4">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Welcome to <span className="text-indigo-500 ">&quot;Hammad Store&quot;</span>
          </h1>
          <p className="text-xl max-w-2xl mb-8">
            Discover the latest products enjoy amazing discounts and experience shopping like never before.
          </p>
          <div className="flex gap-4">
            <Link href="/products">
              <div className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 text-lg font-medium rounded shadow">
                Shop Now
              </div>
            </Link>
          </div>
        </div>

      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">What Our Customers Say</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="flex-1 p-6 bg-gray-100 shadow rounded-lg">
                <p className="text-gray-700 italic">
                  &quot;Amazing products and service! Highly recommend this store!&quot;
                </p>
                <div className="mt-4 text-right">
                  <p className="text-gray-900 font-bold">Customer {testimonial}</p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Shop?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Join our growing community of happy customers. Find everything you need today!
        </p>
      </section>
    </div>
  );
};

export default HomePage;
