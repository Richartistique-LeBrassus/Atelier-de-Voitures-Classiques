"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section  className="sticky top-0 h-screen z-1 w-full">
      <div className="absolute w-full h-full">
        {/*<video 
          src="/vids/star.mp4"
          className="w-full h-full object-cover brightness-70"
          autoPlay
          muted
          loop  
        >            
        </video>*/}
        <img 
          src="/imgs/graeme-bg.jpg" 
          className="w-full h-full object-cover brightness-70"
          alt="bg" 
        />
      </div>  
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="sticky top-0 h-screen flex items-center max-w-[85vw]
        justify-center text-white text-[60px] font-mono font-extrabold mx-auto
        uppercase"
      >
        <div className="flex flex-col w-full mx-auto">
          Graeme <br/>Hunt
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 