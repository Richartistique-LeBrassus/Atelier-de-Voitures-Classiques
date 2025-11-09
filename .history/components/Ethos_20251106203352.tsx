import React from 'react';

const Ethos = () => {
  return (
    <section
      aria-label="Prill Porsche Classics Ethos"
      className="relative flex flex-col items-center justify-center w-full 
      bg-white text-neutral-950 overflow-hidden 
      py-7 sm:py-12 lg:py-20 xl:py-28
      px-5 md:px-7"
    >
      <div className="z-10 max-w-7xl w-full lg:inline-flex lg:justify-between
        lg:align-bottom lg:items-end xl:items-center py-20"
      >
        <div className=" lg:flex-col">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-10 sm:mb-16
          uppercase text-left tracking-[0.3rem]
          flex-wrap max-w-[270px] font-bold">
            Prill Porsche Classics <br/>                             
          </h2>
          <div className="w-full inline-flex text-end lg:p-5 xl:px-12">
            <h2 className="text-4xl md:text-5xl xl:text-6xl mb-16 sm:sm:mb-22
             uppercase text-left tracking-[0.3rem]
            flex-wrap max-w-[270px]">
              <span className="font-bold font-mono text-2xl">Unrivalled<br/>Experience</span>
              <br/>
              <span className="font-bold font-mono text-2xl">Unrivalled<br/>Expertise</span>   
            </h2>
          </div>
        </div>
        
        
        <p className="leading-9 sm:leading-8 font-mono text-left lg:max-w-[470px] xl:indent-12 
          lg:h-full items-end align-bottom 
          xl:max-w-[560px] max-w-[570px] xl:p-5"
        >
          Guided by the spirit of <span className="font-extrabold">Automotive Connoisseur Andy Prill,</span> a lifelong engineer and racer, 
          Prill Porsche Classics is born from passion, family, and the timeless artistry of Porsche.
          <span className="font-extrabold">Vituoso Engineer Mr. Prill</span> restores each machine as a living sculpture of speed and memory.
          Every detail is an act of devotion
          <span className="font-extrabold"> — where engineering meets emotion, and heritage becomes drivable, loud art.</span>
        </p>
      </div>

      {/* Lookbook Visual */}
      <div className="lookbook container responsivegrid w-full max-w-7xl">
            <div data-v-1367169b="" 
              className=" 
              grid grid-cols-1 xl:grid-cols-2 xl:gap-1 gap-4 pb-24">
              
              {/* Image Element */}
              <div className="lookbookElement image ap-lookbook__element-wrapper--square1 ap-lookbook__element-wrapper">
                <div className="w-full h-[80vw] xl:h-[45vw]">
                  <img
                    //src="/imgs/onfilm.jpg"
                    src="/imgs/15.jpg"
                    alt="A photo of a large hardback book titled The Watch – Stories and Savoir Faire."
                    className="w-full h-full object-cover object-right"
                  />
                </div>
              </div>

              {/* Video Element */}
              <div className="lookbookElement image ap-lookbook__element-wrapper--square2 ap-lookbook__element-wrapper">
                <div className="w-full h-[80vw] xl:h-[45vw]">
                  <button
                    data-v-76326de7=""
                    aria-label="Video button play"
                    className="ap-lookbook-element__video relative w-full h-full overflow-hidden shadow-lg"
                  >
                    <video
                      data-v-76326de7=""
                      title="Video of a woman opening a hardcover book titled The Watch – Stories and Savoir Faire"
                      //autoPlay
                      loop
                      playsInline
                      muted
                      className="w-full h-full object-cover"
                      src="/vids/prill-bg.mp4"
                    >
                    </video>
                    <div
                      data-v-76326de7=""
                      className="absolute inset-0 bg-black/20 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="icon-pause text-white text-4xl"></span>
                    </div>
                  </button>
                </div>
              </div>

            </div>


      </div>
    </section>
  );
};

export default Ethos;