import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/shadcn/popover"
import { useState } from "react"


export const WhatsAppPopOver = () => {

    const { open, setOpen } = useWhatsAppPopOver()

    return <Popover open={open} onOpenChange={() => setOpen(!open)}>
        <PopoverTrigger className="fixed bottom-2 right-2 z-50">Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
}

const useWhatsAppPopOver = () => {
    const [open, setOpen] = useState(false)

    return { open, setOpen }
}