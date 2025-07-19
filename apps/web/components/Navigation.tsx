"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Scissors, Menu, X } from "lucide-react";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { label: "Home", id: "hero" },
        { label: "Services", id: "services" },
        { label: "About", id: "about" },
        { label: "Reviews", id: "testimonials" },
        { label: "Contact", id: "contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-background/95 backdrop-blur-sm masculine-shadow border-b border-border"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => scrollToSection("hero")}
                    >
                        <div className="w-8 h-8 rounded-full barbershop-accent flex items-center justify-center">
                            <Scissors className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold barbershop-text-gradient">
                            FreshCutz
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button
                            onClick={() => scrollToSection("contact")}
                            className="barbershop-accent text-primary-foreground hover:opacity-90"
                        >
                            Book Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={
                            isMobileMenuOpen ? "Close menu" : "Open menu"
                        }
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-background border-t border-border">
                        <div className="py-4 space-y-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="px-4 pt-2">
                                <Button
                                    onClick={() => scrollToSection("contact")}
                                    className="w-full barbershop-accent text-primary-foreground hover:opacity-90"
                                >
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
