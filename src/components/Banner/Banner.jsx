import BannerImg from "../../assets/images/bannger.png";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div
        className="flex flex-col h-[600px] bg-cover text-center items-center justify-center text-white rounded-b-[30px]"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <h1 className=" w-[890px] leading-20  font-bold text-5xl">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="w-[890px] text-lg">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className=" flex gap-8 mt-12 font-lexend text-[#150b2b] font-bold">
          <a href="#" className="bg-[#0be58a] px-12 py-4 rounded-3xl border-2 border-[#0be58a]">Explore Now</a>
          <a href="#" className="bg-[#0be58a00] px-12 py-4 rounded-3xl border-1 border-white text-white">Explore Now</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
