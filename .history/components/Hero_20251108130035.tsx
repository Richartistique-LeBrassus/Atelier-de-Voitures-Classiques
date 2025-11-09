"use client";

const Hero = () => {
  return (
    <section  className="sticky top-0 h-screen z-1 w-full">
      <div className="absolute w-full h-full">
        <video 
          src="/vids/prill-bg.mp4"
          className="w-full h-full object-cover brightness-70"
          //autoPlay
          muted
          loop  
        >            
        </video>
      </div>  
      {/*<div
        className="sticky top-0 h-screen flex items-center 
        justify-center text-white text-5xl font-extrabold font-mono
        uppercase"
      >
        Prill <br/>Porsche<br/> Classics
      </div>*/}
      <div className="flex flex-col font-mono w-[120px] sm:w-[140px] md:w-40
          text-lg sm:text-2xl md:text-3xl font-extrabold text-black uppercase">
            <p className="relative tracking-[0.92rem] md:tracking-[1rem]
              inline-block 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:right-[0.4rem] after:h-px after:bg-black">
              PRILL
            </p>
            <p className="flex flex-col text-sm pt-1 md:text-base">
              Porsche Classics  
            </p>
          </div>
    </section>
  );
};

export default Hero; 