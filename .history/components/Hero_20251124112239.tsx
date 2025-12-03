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
        className="sticky top-0 h-screen flex flex-col items-start max-w-[85vw]
        justify-center text-white text-5xl font-extrabold font-mono
        uppercase"
      >
        Graeme <br/>Hunt 
        <br/><span className="text-xl">Ltd</span>
      </motion.div>
    </section>
  );
};

export default Hero; 