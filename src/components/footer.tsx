import { Logo } from "./logo";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-12 px-4 font-primary">
            <div className="max-w-6xl mx-auto">
                {/* Logo */}
                <div className="mb-4">
                    <Logo />
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Browse Section */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4 text-sm">Browse</h3>
                        <nav className="space-y-2">
                            <a href="/" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                Home
                            </a>
                            <a href="/features" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                Features
                            </a>
                            <a href="/pricing" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                Pricing
                            </a>
                        </nav>
                    </div>

                    {/* Resources Section */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4 text-sm">Resources</h3>
                        <nav className="space-y-2">
                            <a href="/blog" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                Blog home
                            </a>
                            <a href="/blog/single" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                Blog single
                            </a>
                            <a href="/apps" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                Apps
                            </a>
                        </nav>
                    </div>

                    {/* Information Section */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4 text-sm">Information</h3>
                        <nav className="space-y-2">
                            <a href="/about" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                About us
                            </a>
                            <a href="/contact" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                Contact us
                            </a>
                            <a href="/404" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                404 page
                            </a>
                        </nav>
                    </div>

                    {/* Follow Us Section */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4 text-sm">Follow Us</h3>
                        <nav className="space-y-2">
                            <a
                                href="https://dribbble.com"
                                className="block text-secondary-foreground text-sm hover:text-foreground transition-colors"
                            >
                                Dribbble
                            </a>
                            <a
                                href="https://behance.net"
                                className="block text-secondary-foreground text-sm hover:text-foreground transition-colors"
                            >
                                Behance
                            </a>
                            <a
                                href="https://instagram.com"
                                className="block text-secondary-foreground text-sm hover:text-foreground transition-colors"
                            >
                                Instagram
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border gap-4">
                    <p className="text-muted-foreground text-sm">© 2025 MH Grafica. Todos los derechos reservados</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span>Desarrollado por sebasw3b</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
