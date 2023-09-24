import React from 'react';

const Blogs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Job Site Blog</h1>
        
        {/* Blog Post 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">How to Find Your Dream Job</h2>
          <p className="text-gray-600 mb-2 md:mb-4">Published on September 24, 2023 by John Doe</p>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non orci vel eros semper feugiat.
            Vivamus id ante ut ipsum fringilla cursus. Integer venenatis bibendum mi, eget bibendum justo
            dignissim eu. Sed euismod lectus eu enim tincidunt, id bibendum libero posuere.
          </p>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Top Tech Companies to Work for in 2023</h2>
          <p className="text-gray-600 mb-2 md:mb-4">Published on September 20, 2023 by Jane Smith</p>
          <p className="text-gray-800">
            In hac habitasse platea dictumst. Praesent tincidunt justo et mauris malesuada, eget vestibulum
            odio tristique. Nam feugiat eros ut lorem ultrices malesuada. Sed efficitur mauris vel gravida
            ultricies.
          </p>
        </div>
        
        {/* Add more blog posts here */}
        
      </div>
    </div>
  );
};

export default Blogs;
