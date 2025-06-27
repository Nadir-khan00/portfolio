import { Code, Database, Layout, Server, Smartphone, Zap } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Tools & Languages",
      icon: Code,
      skills: ["Tailwind CSS", "gsap", "VS Code", "GitHub", "Git"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Performance",
      icon: Zap,
      skills: ["Optimization", "Testing", "CI/CD", "Monitoring", "SEO"],
      color: "from-yellow-500 to-orange-500",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".skills-0",
      { x: -400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-0",
          toggleActions: "play reverse play reverse",

          start: "top center",
          end: "bottom 20%",
        },
      }
    );

    gsap.fromTo(
      ".skills-1",
      { y: 400, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-1",
          toggleActions: "play reverse play reverse",

          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      ".skills-2",
      { x: 400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-2",
          toggleActions: "play reverse play reverse",

          start: "top center",
          end: "bottom 20%",
        },
      }
    );
    gsap.fromTo(
      ".skills-section",
      {
        rotateX: 90,
        transformPerspective: 800,
        transformOrigin: "top center",
      },
      {
        rotateX: 0,

        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-section",
          toggleActions: "play none play reverse",
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 skills-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl italic text-muted-foreground max-w-2xl mx-auto">
            I specialize in modern web technologies and have experience across
            the full development stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative p-6 bg-white dark:bg-transparent rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300  border border-gray-100 ${`skills-${index}`}`}
            >
              <div
                className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}
              >
                <category.icon className="text-white" size={24} />
              </div>

              <h3 className="text-xl dark:text-white font-semibold mb-4  text-gray-900">
                {category.title}
              </h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-2  bg-gray-50 
                     rounded-lg :hover:bg-gray-100 dark:bg-transparent   transition-colors"
                  >
                    <span className="text-sm font-medium dark:text-white  text-gray-700">
                      {skill}
                    </span>
                    <div className="w-16 h-2 bg-gray-200   rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full animate-pulse`}
                        style={{ width: `${80 + Math.random() * 20}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
