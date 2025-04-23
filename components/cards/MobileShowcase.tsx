const MobileShowcase = () => {
  return (
    <div className="relative flex flex-col justify-between h-full w-full min-h-[500px] md:min-h-0 pt-6 px-6 overflow-hidden rounded-3xl text-white group">
      {/* Text Content */}
      <div className="z-10 transition duration-200 group-hover/bento:translate-x-2">
        <h3 className="font-sans text-2xl lg:text-3xl font-bold pointer-events-none bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/50">
          Custom Mobile Apps
        </h3>
        <p className="text-base text-white-100 mt-2 md:leading-relaxed">
          I build responsive, high-performance mobile apps backed by solid,
          scalable APIs.
        </p>
      </div>

      {/* Mockup image container */}
      <div className="relative flex justify-center mt-6 h-[70%]">
        <div className="absolute inset-x-3 top-0 bottom-0 overflow-hidden rounded-t-[40px] border-x-[8px] border-t-[8px] border-gray-700 bg-gray-900 shadow-2xl">
          <img
            src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
            alt="Mobile Mockup"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileShowcase;
