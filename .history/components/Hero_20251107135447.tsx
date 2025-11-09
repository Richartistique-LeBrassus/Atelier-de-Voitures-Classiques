"use client";

const Hero = () => {
  return (
    <section  className="sticky top-0 h-screen z-[1] w-full">
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
      <div
        className="sticky top-0 h-screen flex items-center 
        justify-center text-white text-5xl font-bold 
        uppercase"
      >
        Prill <br/>Porsche<br/> Classics
      </div>
    </section>
  );
};

export default Hero; 