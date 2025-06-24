import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      // Select all elements with the animation class
      const animatedElements =
        footerRef.current.querySelectorAll(".footer-animate");

      // Set initial state (hidden)
      gsap.set(animatedElements, {
        y: -40,
        opacity: 0,
      });

      // Animate in with stagger
      gsap.to(animatedElements, {
        y: -0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-animate",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 footer-animate">
              NADIR KHAN
            </h3>
            <p className="text-gray-300 mb-4 footer-animate">
              Passionate full-stack developer creating beautiful, functional,
              and user-centered digital experiences.
            </p>
            <div className="flex space-x-4 footer-animate">
              <a
                href="https://github.com/Nadir-khan00"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nadir-khan-3565b8353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:Nadirkhan2009@outlook.com"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 footer-animate">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Projects", "Skills", "About", "Contact"].map(
                (item, i) => (
                  <li key={i} className="footer-animate">
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 footer-animate">
              Get In Touch
            </h4>
            <div className="space-y-2 text-gray-300">
              {[
                "Nadirkhan2009@outlook.com",
                "+923082252009",
                "Bahawalpur, Pakistan",
              ].map((item, i) => (
                <p key={i} className="footer-animate">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center footer-animate">
            © {currentYear} Nadir Khan
            <Heart className="mx-1 text-red-500" size={16} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
