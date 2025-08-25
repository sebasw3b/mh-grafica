import image from '@/assets/examples/PHOTO-2025-08-01-15-25-59.jpg'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/shadcn/popover"
import { motion } from 'motion/react'
import { useEffect, useState } from "react"


export const WhatsAppPopOver = () => {

    const { open, setOpen } = useWhatsAppPopOver()

    return <Popover open={open} onOpenChange={() => setOpen(!open)}>
        <motion.div
            className='fixed bottom-0 right-2 z-40'
            initial={{ opacity: 0, translateY: '-30px' }}
            whileInView={{ opacity: 1, translateY: '0px' }}
            transition={{
                duration: 0.7,
                ease: 'easeInOut',
                delay: 3
            }}
            viewport={{ once: true }}
        >
            <PopoverTrigger>
                <img
                    src={image}
                    alt="Descripción principal del producto"
                    width="1200"
                    height="600"
                    className="object-cover rounded-full w-20 h-20 aspect-square border-3 border-green-500"
                />
            </PopoverTrigger>
        </motion.div>

        <PopoverContent sideOffset={10} className='-translate-x-3'>Ventana de whatsapp.</PopoverContent>
    </Popover>
}

const useWhatsAppPopOver = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const timeOut = setTimeout(() => setOpen(true), 10000)

        return () => clearTimeout(timeOut)
    }, [])

    return { open, setOpen }
}