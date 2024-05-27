import Button from "./Button";

const Banner = () => {
  return (
    <section className="bg-[url(/bg.png)] pt-64 pb-60 relative z-10 after:-z-10 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(106,98,197,0.7)]">
      <div className="container">
        <h1 className="w-[1080px] m-auto text-[84px] font-bold text-white text-center capitalize">
          yOU’RE UNIQUE.YOUR WEBSITE SHOULD BE TOO
        </h1>
        <p className="leading-10 text-2xl text-center text-white font-normal w-[715px] m-auto pt-5 pb-4">
          A beautiful website passionately crafted for your small business. Our
          Digital Agency development has changed the way brands and businesses
          use technology for growing business.
        </p>
        <div className="flex justify-center gap-7">
          <Button title="Get free quoto" />
          <Button title="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
