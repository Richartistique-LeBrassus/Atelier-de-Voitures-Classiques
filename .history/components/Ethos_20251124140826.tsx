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
          flex-wrap max-w-[270px] font-extrabold font-mono">
            Prill Porsche Classics <br/>                             
          </motion.h2>
          <div className="w-full inline-flex text-end lg:p-5 xl:px-12">
            <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} 
            className="text-4xl md:text-5xl xl:text-6xl mb-16 sm:sm:mb-24 xl:mb-16
             uppercase text-left
            flex-wrap max-w-[270px] sm:max-w-full">
              <span className="font-bold font-mono text-2xl">
                London based Classic Car Magnate for over 35 years</span>
              <br/>
              <span className="font-bold font-mono text-2xl">Unrivalled<br/>Expertise</span>   
            </motion.h3>
          </div>
        
        
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="leading-9 sm:leading-8 font-mono text-left lg:max-w-[470px] xl:indent-12 
          lg:h-full items-end align-bottom sm:mb-10 indent-4
          xl:max-w-[560px] max-w-[570px] xl:p-5"
        >
          Guided by the spirit of <span className="font-extrabold">Automotive Connoisseur Andy Prill - </span> a lifelong engineer, racer 
          and custodian of Stuttgart’s finest — Prill Porsche Classics was born from passion, family, and 
          a devotion to the timeless art of Porsche.
          <span className="font-extrabold"> Virtuoso Engineer Mr. Prill</span> restores each machine as a living sculpture of speed and memory.
          Every detail is an act of reverence
          <span className="font-extrabold"> — where engineering meets emotion, and heritage becomes drivable, resonant art.</span>
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
                //src="/imgs/onfilm.jpg"
                src="/imgs/shoplogo.webp"
                alt="A photo of a large hardback book titled The Watch – Stories and Savoir Faire."
                className="w-full h-full object-cover"
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
                src="/imgs/rolls.webp"
                alt="A photo of a large hardback book titled The Watch – Stories and Savoir Faire."
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ethos;