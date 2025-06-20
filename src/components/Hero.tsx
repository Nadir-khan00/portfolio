import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  //  const { triggerProjectsAnimation } = useAnimation();
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToSkills = () => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  //  hello

  useEffect(() => {
    gsap.fromTo(
      ".Name",
      {
        rotateX: 90, // makes it appear like it's laying down
        transformPerspective: 800, // depth effect
        transformOrigin: "top center",
      },
      {
        rotateX: 0, // brings it upright
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".Name",
          toggleActions: "play none play reverse",
          start: "top 80%",
          end: "bottom 20%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex  items-center justify-center relative overflow-hidden "
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />

      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="Name text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Hi, I'm Nadir
          </h1>
          <p className="text-xl md:text-2xl italic text-muted-foreground mb-8 max-w-3xl mx-auto">
            A passionate Front-end developer creating beautiful, functional, and
            user-centered digital experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              View My Work
            </Button>
            {/* <Button variant="outline" size="lg" className="px-8 py-3">
              Download CV
            </Button> */}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Nadir-khan00"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nadir-khan-3565b8353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="Nadirkhan2009@outlook.com"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            className="animate-bounce cursor-pointer"
            onClick={scrollToSkills}
          >
            <ArrowDown
              className="mx-auto text-muted-foreground hover:text-blue-600"
              size={24}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
