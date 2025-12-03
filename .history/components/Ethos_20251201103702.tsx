"use client"
import { motion } from 'framer-motion';

const Ethos = () => {
  return (
    <section
      aria-label="Prill Porsche Classics Ethos"
      className="relative z-20 mt-[100vh]
       flex flex-col items-center justify-center w-full 
      bg-white text-neutral-950 min-h-fit 
      py-7 sm:py-12 md:py-16 lg:py-28 
      px-5 md:px-7"
    >
      <div className="max-w-7xl w-full lg:inline-flex lg:justify-between
        lg:align-bottom lg:items-end xl:items-center py-20"
      >
        <div className="lg:flex-col md:px-20">
          <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl mb-10 sm:mb-16 xl:mb-10
          uppercase text-left tracking-[0.3rem]
          flex-wrap max-w-[270px] font-extrabold font-mono text-green-950">
            Graeme <br/>Hunt <br/>London                          
          </motion.h2>
          <div className="w-full inline-flex text-end lg:p-5 xl:px-12">
            <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} 
            className="text-4xl md:text-5xl xl:text-6xl mb-16 sm:sm:mb-24 xl:mb-16
             uppercase text-left
            flex-wrap max-w-[270px]">
              <span className="font-bold font-mono text-2xl">
                London based Classic Car Magnate
              </span> 
            </motion.h3>
          </div>
                
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="leading-9 sm:leading-8 font-mono text-left lg:max-w-[470px]
          lg:h-full items-end align-bottom sm:mb-10 
          xl:max-w-[560px] max-w-[570px] xl:p-5"
        >
          Graeme Hunt spent 13 years at Jack Barclay Ltd, 
          rising from Salesman in 1989 to Managing Director within seven years, 
          and ultimately guiding the company back to independent ownership in 1997. 
          He founded Graeme Hunt Ltd in 2001, 
          bringing with him a deep passion for Bentleys and classic cars of all kinds, 
          stocking vehicles he’d be happy to own and 
          personally using them to ensure they’re free of imperfections. 
          As both an enthusiastic owner and dealer, 
          he understands the needs of fellow classic-car 
          enthusiasts and has restored numerous significant cars, 
          from AC Cobras and Range Rovers to pre-war models such as an 
          award-winning Phantom III. His experience, dedication, 
          and hands-on approach underpin the high level of service he 
          aims to provide to every customer.          
        </motion.p>
        </div>
      </div>

      {/* Lookbook Visual */}
      <div className="lookbook container responsivegrid w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className=" 
          grid grid-cols-1 2xl:grid-cols-2 xl:gap-1 gap-4 pb-24">
          
          {/* Image Element */}
          <div className="lookbookElement image ap-lookbook__element-wrapper--square1 ap-lookbook__element-wrapper">
            <div className="w-full h-[80vw] 2xl:h-[45vw]">
              <img
                //src="/imgs/gh.jpg"
                src="/imgs/bg.jpg"
                alt="A photo of a large hardback book titled The Watch – Stories and Savoir Faire."
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
          {/* Video Element 
          <div className="lookbookElement image ap-lookbook__element-wrapper--square2 ap-lookbook__element-wrapper">
            <div className="w-full h-[80vw] 2xl:h-[45vw]">
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
                  src="/vids/ethos.mp4"
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
          </div> */}
          <div className="lookbookElement image ap-lookbook__element-wrapper--square1 ap-lookbook__element-wrapper">
            <div className="w-full h-[80vw] 2xl:h-[45vw]">
              <img
                //src="/imgs/tree.jpg"
                src="/imgs/madel.jpg"
                alt="A photo of a large hardback book titled The Watch – Stories and Savoir Faire."
                className="w-full h-full object-cover object-bottom"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ethos;