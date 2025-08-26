import transformOne from "@/assets/examples/Rectangle 8.png";

// Motion
import { motion } from 'motion/react'

const ourWorks = [
  transformOne,
  transformOne,
  transformOne,
  transformOne,
  transformOne,
  transformOne,
];

export const Works = () => {
  return (
    <section className="relative bg-gray-50 py-20">
      <div className="relative z-10">

        <div className="xl:basis-md space-y-2 place-items-center text-center w-10/12 m-auto mb-10">
          <motion.div
            initial={{ opacity: 0, translateY: '-30px' }}
            whileInView={{ opacity: 1, translateY: '0px' }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">
              Nuestros trabajos
            </h2>
          </motion.div>

          <p className="text-secondary-foreground">Frase de refuerzo para la seccion de nuestros trabajos.La voy a pensar yo, no se preocupen.</p>
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex">
            <motion.div
              className="flex flex-shrink-0"
              animate={{
                x: [0, -(320 + 32) * ourWorks.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {ourWorks.map((transform, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-4">
                  <img
                    src={transform}
                    alt={`Pet transformation ${index + 1}`}
                    className="object-cover rounded-sm drop-shadow-xl"
                  />
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-shrink-0"
              animate={{
                x: [0, -(320 + 32) * ourWorks.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {ourWorks.map((transform, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-4">
                  <img
                    src={transform}
                    alt={`Pet transformation ${index + 1}`}
                    className="object-cover rounded-sm drop-shadow-xl"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};