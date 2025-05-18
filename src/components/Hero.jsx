import { motion } from "framer-motion";
import { styles } from "../styles";
import { useTypewriter } from "react-simple-typewriter";
import { profile1 } from "../assets";

const Hero = () => {
  const [roles] = useTypewriter({
    words: ["Web Developer", "RPA Developer", "Problem Solver", "Programmer"],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 80,
  });

  return (
    <section className="relative mx-auto h-screen w-full pt-[120px]">
      <div
        className={`${styles.paddingX} mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 items-center gap-8`}
      >
        {/* Left Content */}
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-start">
            <div className="hidden sm:flex flex-col items-center mr-4">
              <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
              <div className="violet-gradient h-40 w-1 sm:h-80" />
            </div>

            <div>
              <h1 className={styles.heroHeadText}>
                Hi, I'm <span className="text-[#915EFF]">Kundan</span>
              </h1>

              <div className={`${styles.heroSubText} mt-2 text-white-100`}>
                I am a <span className="text-[#915EFF]">{roles}</span>
              </div>

              <a
                href="/CV_Kundan_Mokhale.pdf"
                className="mt-6 inline-block rounded-2xl bg-gradient-to-br from-purple-700 to-pink-500 px-6 py-3 font-semibold tracking-wider text-white shadow-lg transition-transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
                download="Kundan_Mokhale_Resume.pdf"
              >
                Check Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Picture */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative aspect-square w-[280px] md:w-[400px]">
            <img
              src={profile1}
              alt="Kundan's Profile"
              className="h-full w-full rounded-full border-2 border-accent object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full">
        <a href="#about" className="flex justify-center">
          <motion.div
            className="hidden md:flex h-16 w-9 items-center justify-center rounded-3xl border-4 border-secondary p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="h-3 w-3 rounded-full bg-secondary"
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
