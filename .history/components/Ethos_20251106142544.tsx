import React from 'react';

const Ethos = () => {
  return (
    <section
      aria-label="Prill Porsche Classics Ethos"
      className="relative flex flex-col items-center justify-center w-full 
      bg-white text-neutral-950 overflow-hidden py-7"
    >
      {/* Ethos Header + Paragraph */}
      <div className="z-10 max-w-4xl px-6 text-center py-24">
        <h2 className="text-4xl md:text-5xl mb-10 uppercase text-left tracking-[0.3rem]
        flex-wrap max-w-[270px]">
          Prill Porsche Classics <br/>                             
        </h2>
        <h2 className="text-4xl md:text-5xl mb-16 uppercase text-left tracking-[0.3rem]
        flex-wrap max-w-[270px]">
          <span className="font-bold font-mono text-2xl">Unrivalled<br/>Experience</span>
          <br/>
          <span className="font-bold font-mono text-2xl">Unrivalled<br/>Expertise</span>   
        </h2>
        <p className="leading-relaxed font-mono text-left">
          Guided by the spirit of <span className="font-bold">Automotive Connoisseur Andy Prill,</span>           
          a lifelong engineer and racer, 
          Prill Porsche Classics is born from passion, family, and the timeless artistry of Porsche.
          Vituoso Engineer Mr. Prill restores each machine as a living sculpture of speed and memory.
          Every detail is an act of devotion — where engineering meets emotion, and heritage becomes drivable, loud art.
        </p>
      </div>

      {/* Lookbook Visual */}
      <div className="lookbook container responsivegrid w-full max-w-7xl">
        <div className="ap-lookbook-app initialized-ApLookbook" data-v-app="">
          <div className="ap-lookbook-wrapper ap-lookbook-wrapper--black">
            <div data-v-1367169b="" className="ap-lookbook ap-lookbook-basic ap-lookbook--D grid grid-cols-1 md:grid-cols-2 gap-4 px-6 pb-24">
              
              {/* Image Element */}
              <div className="lookbookElement image ap-lookbook__element-wrapper--square1 ap-lookbook__element-wrapper">
                <div className="ap-lookbook-element__wrapper">
                  <div data-v-76326de7="" className="ap-lookbook-element">
                    <div data-v-76326de7="" className="ap-lookbook-element__image">
                      <img
                        src="https://dynamicmedia.audemarspiguet.com/is/image/audemarspiguet/RD5_lookbook_1584x1584?size=1920,0&wid=1920&fmt=avif-alpha&dpr=off"
                        alt="A photo of a large hardback book titled The Watch – Stories and Savoir Faire."
                        className="w-full h-auto object-cover shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Element */}
              <div className="lookbookElement image ap-lookbook__element-wrapper--square2 ap-lookbook__element-wrapper">
                <div className="ap-lookbook-element__wrapper">
                  <div data-v-76326de7="" className="ap-lookbook-element">
                    <button
                      data-v-76326de7=""
                      aria-label="Video button play"
                      className="ap-lookbook-element__video relative w-full h-full overflow-hidden shadow-lg"
                    >
                      <video
                        data-v-76326de7=""
                        title="Video of a woman opening a hardcover book titled The Watch – Stories and Savoir Faire"
                        autoPlay
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ethos;