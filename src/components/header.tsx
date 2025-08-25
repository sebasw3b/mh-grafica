import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "./logo"
import { Button } from "../shadcn/button"

interface NavItem {
  label: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { label: "Servicios", href: "#" },
  { label: "Quienes somos", href: "#" },
  { label: "Preguntas frecuentes", href: "#" },
  { label: "Contactar", href: "#" }
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.div
      className="fixed xl:sticky inset-0 z-50 bg-white"
      animate={{
        height: isMenuOpen ? "100vh" : "4.2rem"
      }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <header className="w-full h-16 xl:py-2.5">
        <div className="flex justify-between items-center h-full max-w-11/12 xl:max-w-6xl mx-auto">
          <Logo />
          <nav aria-label="desktop-navigation">
            <ul className="hidden xl:flex gap-10 text-foreground/80 font-medium text-sm xl:text-base">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-accent transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ResponsiveNavigation
            isOpen={isMenuOpen}
            onToggle={setIsMenuOpen}
          />
          <Button
            aria-label="book-appointment"
            size="lg"
            className="hidden xl:inline-block text-base rounded-full"
          >
            Solicita presupuesto
          </Button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={NAV_ITEMS}
      />
    </motion.div>
  )
}

const ResponsiveNavigation = ({
  isOpen,
  onToggle
}: {
  isOpen: boolean
  onToggle: (open: boolean) => void
}) => {
  return (
    <nav className="xl:hidden">
      <button
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-controls="main-menu"
        aria-expanded={isOpen}
        onClick={() => onToggle(!isOpen)}
        className="block md:hidden relative z-60"
        type="button"
      >
        <div className="relative w-8 h-8">
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -4 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 w-6 h-0.5 rounded-[10px] bg-foreground top-1/2 -translate-y-1/2 origin-center"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 4 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 w-6 h-0.5 rounded-[10px] bg-foreground top-1/2 -translate-y-1/2 origin-center"
          />
        </div>
      </button>
    </nav>
  )
}

const MobileMenu = ({
  isOpen,
  onClose,
  items
}: {
  isOpen: boolean
  onClose: () => void
  items: NavItem[]
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className="xl:hidden px-4 pb-8 mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center gap-6 text-xl mt-12">
            {items.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="w-full flex justify-center"
              >
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block w-full text-center px-4 py-3 text-secondary-foreground tracking-tighter font-medium hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                </a>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + items.length * 0.1 }}
              className="w-full max-w-xs mt-4"
            >
              <Button className="w-full text-base rounded-full font-normal" size="lg" onClick={onClose}>
                Solicita presupuesto
              </Button>
            </motion.div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default Header
