import transformOne from "@/assets/examples/Rectangle 8.png";


// Components
import { SectionDescription, SectionHeader, SectionTitle } from "@/components/section-header";

// Motion
import { motion } from 'motion/react'

export const Works = () => {
  const ourWorks = [
    transformOne,
    transformOne,
    transformOne,
    transformOne,
    transformOne,
    transformOne,
  ];

  return (
    <section className="relative bg-gray-50 py-20">
      <div className="relative z-10">

        <SectionHeader className="xl:basis-md space-y-5 place-items-center text-center w-10/12 m-auto mb-10">
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
            <SectionTitle className="font-bold">
              Nuestros trabajos
            </SectionTitle>
          </motion.div>

          <SectionDescription>Frase de refuerzo para la seccion de nuestros trabajos.La voy a pensar yo, no se preocupen.</SectionDescription>
        </SectionHeader>

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