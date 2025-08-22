// Components
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionBadge, SectionDescription, SectionHeader, SectionTitle } from "@/components/groomify/section-header";

// Motion
import {motion} from 'motion/react'

// Icons
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { DoorIcon } from "@/assets/icons/DoorIcon";
import { HandShakeIcon } from "@/assets/icons/HandShakeIcon";
import { BookIcon } from "@/assets/icons/BookIcon";
import { ArrowActionIcon } from "@/assets/icons/ArrowActionIcon";


export const ContactUs = () => {
  return (
    <section className="relative bg-secondary py-20 bg-[url('src/assets/images/backgrounds/white-texture.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="border-y border-foreground/5 absolute inset-0 bg-white/90 z-0" />

      <div className="relative max-w-10/12 m-auto flex flex-col xl:flex-row gap-20">

        <div className="space-y-10 basis-1/2">

          <SectionHeader className="gap-3">
            <SectionBadge className="fill-accent" variant="secondary">
              <HandShakeIcon />
              Contact us
            </SectionBadge>
            <motion.div
            initial={{ opacity: 0, translateY:'-30px'}}
            whileInView={{ opacity: 1, translateY:'0px' }}
            transition={{
              duration:0.5,
              ease:'easeInOut',
              delay:0.1,
            }}
            viewport={{once:true}}
          >

<SectionTitle>
              How to <span className="text-accent">get <br></br>in touch</span> with us
            </SectionTitle>
            </motion.div>
            <SectionDescription>Have a question? We're always here to help.</SectionDescription>
          </SectionHeader>

          <div className="rounded-2xl overflow-hidden h-120">
            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d188.9128874441777!2d-73.98479!3d40.74869!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ0JzU1LjMiTiA3M8KwNTknMDUuMiJX!5e0!3m2!1sen!2sus!4v1748531982164!5m2!1sen!2sus" width="100%" height="100%" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="space-y-4 basis-1/2">
          <Card className="">
            <CardHeader>
              <div className="border w-fit border-[#595e6626] rounded-full p-2 mb-2">
                <BookIcon className="fill-accent h-7 w-7"/>
              </div>
              <CardTitle className="text-xl">Book online</CardTitle>
              <CardDescription className="text-base">Choose your date and book online now.</CardDescription>
            </CardHeader>
            
           
            <CardFooter>
              <Button size="sm" className="group text-xs">
                <ArrowActionIcon className="group-hover:rotate-35 transition ease-in-out duration-400 fill-white size-3"/>
                Book now</Button>
            </CardFooter>
          </Card>

          <Card className="space-y-6">
            <CardHeader>
              <div className="border w-fit border-[#595e6626] rounded-full p-2 mb-2">
                <PhoneIcon className="fill-accent h-7 w-7"/>
              </div>
              <CardTitle className="text-xl">Call us</CardTitle>
              <CardDescription className="text-base">Speak to us over the phone.</CardDescription>
            </CardHeader>
            
           
            <CardFooter>
              <Button size="sm" className="group text-xs">
                <ArrowActionIcon className="group-hover:rotate-35 transition ease-in-out duration-400 fill-white size-3"/>
                Call Us</Button>
            </CardFooter>
          </Card>

          <Card className="space-y-6">
            <CardHeader>
              <div className="border w-fit border-[#595e6626] rounded-full p-2 mb-2">
                <DoorIcon className="fill-accent h-7 w-7"/>
              </div>
              <CardTitle className="text-xl">Visit us</CardTitle>
              <CardDescription className="text-base">Monday to Friday 8am - 5pm</CardDescription>
            </CardHeader>
            
           
            <CardFooter>
              <Button size="sm" className="group text-xs">
                <ArrowActionIcon className="group-hover:rotate-35 transition ease-in-out duration-400 fill-white size-3"/>
                Get directions</Button>
            </CardFooter>
          </Card>
        </div>

      </div>



    </section>
  );
};

