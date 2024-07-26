'use client';
import Contact from './sections/contact';
import Hero from './sections/hero';
import About from './sections/about';
import Footer from './sections/footer';
import Work from './sections/work';
import Experience from './sections/experience';

export default function App() {
    return (
        <main className="flex flex-col w-full h-auto justify-center items-center relative">
            <Hero />
            <About />
            <Work />
            <Experience />
            <Contact />
            <Footer />
        </main>
    );
}