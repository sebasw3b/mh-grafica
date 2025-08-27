import { Logo } from "./logo";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-12 px-4 font-primary">
            <div className="max-w-6xl mx-auto">
                {/* Logo */}
                <div className="mb-6">
                    <Logo />
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Browse Section */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4 text-sm">Los banners</h3>
                        <nav className="space-y-2">
                            <a href="/" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                Caracteristicas
                            </a>
                            <a href="/features" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                Como se arman
                            </a>
                            <a href="/pricing" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                Porque estos banners y no otros
                            </a>
                        </nav>
                    </div>

                    {/* Resources Section */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4 text-sm">Sobre nosotros</h3>
                        <nav className="space-y-2">
                            <a href="/blog" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                Quienes somos
                            </a>
                            <a href="/blog/single" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                Experiencia
                            </a>
                            <a href="/apps" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                Forma de trabajo
                            </a>
                        </nav>
                    </div>

                    {/* Information Section */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4 text-sm">Contacto</h3>
                        <nav className="space-y-2">
                            <a href="/about" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                Telefono
                            </a>
                            <a href="/contact" className="block text-secondary-foreground text-sm hover:text-foreground transition-colors">
                                Email
                            </a>
                        </nav>
                    </div>

                    {/* Follow Us Section */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4 text-sm">Seguinos en redes</h3>
                        <nav className="space-y-2">
                            <a
                                href="#"
                                className="block text-secondary-foreground text-sm hover:text-foreground transition-colors"
                            >
                                Facebook
                            </a>
                            <a
                                href="#"
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
