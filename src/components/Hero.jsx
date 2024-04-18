import { motion } from "framer-motion";
import { styles } from "../styles";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { profile1 } from "../assets";
import classNames from "classnames";

const Hero = () => {
  const [roles] = useTypewriter({
    words: ["Web Developer", "RPA Developer", "Problem Solver", "Programmer"],
    loop: {},
    typeSpeed: 60,
    deleteSpeed: 80,
  });

  const cn = (...inputs) => {
    return classNames(inputs);
  };

  return (
    <section className="relative mx-auto h-screen w-full pt-[120px]">
      <div
        className={cn(
          "absolute inset-0 mx-auto grid max-w-7xl grid-cols-1 items-center justify-between gap-5 md:grid-cols-2 ",
          styles.paddingX
        )}
      >
        <div className="order-2 flex justify-center gap-3 md:order-1">
          <div className="hidden flex-col items-center justify-center sm:flex">
            <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
            <div className="violet-gradient h-40 w-1 md:h-80" />
          </div>

          <div className="text-center md:text-start">
            <h1 className={styles.heroHeadText}>
              Hi, I'm <br />
              <span className="text-[#915EFF]">Kundan</span>
            </h1>

            <div className={cn(styles.heroSubText, "mt-2 text-white-100")}>
              <span>I am a</span>
              <br />
              <span>{roles}</span>
            </div>

            <a
              href="/"
              className="bg-gradient-to-br from-purple-700 to-pink-500 mt-6 inline-block cursor-pointer rounded-2xl bg-accent  px-6 py-3 font-semibold tracking-wider text-white shadow-lg transition-all hover:scale-105"
              target="_blank"
            >
              Check Resume
            </a>
          </div>
        </div>
        {/* Right side */}
        <div className="relative order-1 mt-[120px] w-full md:order-2 md:mt-0">
          {/* Profile Picture */}
          <div className="relative mx-auto  flex aspect-square max-h-[280px] w-full max-w-[280px] items-center justify-center rounded-full md:max-h-[400px] md:max-w-[400px]">
            <img
              src={profile1}
              alt="Kundan's Profile"
              fill="true"
              className="rounded-full border-2 border-accent object-cover"
              priority="true"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-10">
        <a href="#about">
          <div className="hidden h-16 w-9 justify-center rounded-3xl border-4 border-secondary p-2 md:flex">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeatType: "loop",
                repeat: Infinity,
              }}
              className="h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
