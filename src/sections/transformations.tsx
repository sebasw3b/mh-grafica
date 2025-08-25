import transformOne from "@/assets/images/transformations/1csutCuzuanHfHefES3ht6Dxs.avif";
import transformTwo from '@/assets/images/transformations/R0zwiPvpMjot4yRS5Kt7o5qXPZE.avif'
import transformThree from '@/assets/images/transformations/UhmRJPz95GTkUc4mWzPkqzKKBo.avif'
import transformFour from '@/assets/images/transformations/gdazkzYQoelrKS6F9T4ShSwi12Y.avif'
import transformFive from "@/assets/images/transformations/ZkAxj2dJJrguqs66HyLtK6NcFLM.jpeg"

// Components
import { SectionBadge, SectionDescription, SectionHeader, SectionTitle } from "@/components/section-header";

// Motion
import { motion } from 'motion/react'

export const Transformations = () => {
  const transformations = [
    transformOne,
    transformTwo,
    transformThree,
    transformFour,
    transformFive
  ];

  return (
    <section className="relative bg-gray-50 py-20">
      <div className="relative z-10">

        <SectionHeader className="xl:basis-md space-y-5 place-items-center text-center w-9/12 m-auto mb-10">
          <SectionBadge className="fill-accent" variant="secondary">
            <svg
              className="fill-accent w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
            >
              <g>
                <path
                  d="M176,112,74.34,213.66a8,8,0,0,1-11.31,0L42.34,193a8,8,0,0,1,0-11.31L144,80Z"
                  opacity="0.2"
                ></path>
                <path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>
              </g>
            </svg>
            Transformations
          </SectionBadge>
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
            <SectionTitle>
              Smiles, styles,
              <br />
              and
              <span className="text-accent"> happy tails</span>
            </SectionTitle>
          </motion.div>

          <SectionDescription>Take a peek at some of our recent transformations. From {"\n"}
            fluffy pups to sleek kitties, every pet leaves looking like a star.</SectionDescription>
        </SectionHeader>

        <div className="w-full overflow-hidden">
          <div className="flex">
            <motion.div
              className="flex flex-shrink-0"
              animate={{
                x: [0, -(320 + 32) * transformations.length]
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
              {transformations.map((transform, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-4">
                  <img
                    src={transform}
                    alt={`Pet transformation ${index + 1}`}
                    className="w-80 h-80 object-cover rounded-2xl border-4 border-white drop-shadow-lg"
                  />
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-shrink-0"
              animate={{
                x: [0, -(320 + 32) * transformations.length]
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
              {transformations.map((transform, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-4">
                  <img
                    src={transform}
                    alt={`Pet transformation ${index + 1}`}
                    className="w-80 h-80 object-cover rounded-2xl border-4 border-white drop-shadow-lg"
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