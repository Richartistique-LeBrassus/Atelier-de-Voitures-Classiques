import React from 'react';

const Ethos = () => {
  return (
    <section
      aria-label="Prill Porsche Classics Ethos"
      className="relative flex flex-col items-center justify-center w-full bg-black text-white overflow-hidden"
    >
      {/* Ethos Header + Paragraph */}
      <div className="z-10 max-w-4xl px-6 text-center py-24">
        <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6">
          Prill Porsche Classics <br/> Unrivalled Experience Unrivalled Expertise
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Guided by the spirit of Automotive Connoisseur Andy Prill, 
          a lifelong engineer and racer, 
          Prill Porsche Classics is born from passion, family, and the timeless artistry of Porsche.
          Vituoso Engineer Mr. Prill restores each machine as a living sculpture of speed and memory.
          Every detail is an act of devotion — where engineering meets emotion, and heritage becomes art.
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
                      className="ap-lookbook-element__video relative w-full h-full overflow-hidden rounded-2xl shadow-lg"
                    >
                      <video
                        data-v-76326de7=""
                        title="Video of a woman opening a hardcover book titled The Watch – Stories and Savoir Faire"
                        autoPlay
                        loop
                        playsInline
                        muted
                        className="w-full h-full object-cover"
                      >
                        <source
                          data-v-76326de7=""
                          src="/content/dam/ap/com/homepage/2025/octobre-2025-rd5/book_sd_1.mp4#t=0.001"
                          type="video/mp4"
                        />
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