import { Award, Coffee, Heart, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Coffee, value: "50+", label: "Cups of Coffee" },
    { icon: Award, value: "20+", label: "Projects Completed" },
    { icon: Users, value: "10+", label: "Happy Clients" },
    { icon: Heart, value: "1+", label: "Years Experience" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                I'm a passionate Front-end developer with over 1 years of
                experience creating digital solutions that make a difference. My
                journey started with a curiosity about how things work on the
                web, and it has evolved into a career dedicated to crafting
                exceptional user experiences.
              </p>
              <p className="text-lg">
                I specialize in modern web technologies including React,
                Node.js, and cloud platforms. I believe in writing clean,
                maintainable code and staying up-to-date with the latest
                industry trends and best practices.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying a good cup of
                coffee while reading about the latest developments in tech.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white rounded-lg shadow-md"
                >
                  <stat.icon className="mx-auto text-blue-600 mb-2" size={32} />
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-8 text-white">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 object-cover rounded-lg mb-6"
              >
                <source src="./portfolio-video.mp4" type="video/mp4" />
                {/* Browser will show nothing if video fails to load (no fallback) */}
              </video>
              <h3 className="text-xl font-semibold mb-2">Always Learning</h3>
              <p className="text-blue-100 italic">
                I'm constantly exploring new technologies and methodologies to
                stay at the forefront of web development.
              </p>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
