import Hero from "../../components/Home/Hero";
import ServicesPreview from "../../components/Home/ServicesPreview";
import FeaturedProjects from "../../components/Home/FeaturedProjects";
import CTASection from "../../components/Home/CTASection";

export default function Home() {
    return (
        <>
            <Hero />
            <ServicesPreview />
            <FeaturedProjects />
            <CTASection />
        </>
    );
}