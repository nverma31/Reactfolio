import React from "react";

const StickyScrollComponent = () => {
  return (
    <div className="relative w-full">
      {/* Text Column */}
      <div className="w-1/2 fixed top-20 left-0 px-8">
        <div className="max-w-[600px]">
          <h2 className="text-3xl font-bold mb-4">Sticky Title</h2>
          <p className="text-lg">
            This text remains sticky as the image scrolls next to it. You can add any
            content here, and it will stay fixed in position while the user scrolls
            through the image on the right.
          </p>
        </div>
      </div>

      {/* Image Column */}
      <div className="w-1/2 ml-auto">
        <img
          src="/images/projects/sixt/fullpage.jpg"
          alt="SIXT Project Full Page"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default StickyScrollComponent; 