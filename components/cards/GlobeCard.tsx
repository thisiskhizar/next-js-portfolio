import GridGlobe from "./GridGlobe";

const GlobeCard = () => {
  return (
    <div className="relative w-full h-full min-h-60 md:min-h-0">
      <h2 className="font-sans text-2xl lg:text-3xl font-bold pt-5 px-5 text-center z-10 pointer-events-none bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/50">
        Delivering Real Results for Clients Worldwide.
      </h2>
      <GridGlobe />
    </div>
  );
};
export default GlobeCard;
