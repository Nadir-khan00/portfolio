import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import gsap from "gsap";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ey6m5st", // From EmailJS dashboard
        "template_2j6wi9k", // From EmailJS dashboard
        formData,
        "0wvoBsYMJiRUIVO9H" // From EmailJS dashboard
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Outlook",
      value: "Nadirkhan2009@outlook.com",
      link: "mailto:Nadirkhan2009@outlook.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+923082252009",
      link: "",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pakistan,Bahwalpur",
      link: "#",
    },
  ];
  useEffect(() => {
    gsap.fromTo(
      ".contact-card",
      { x: -400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".contact-card",
          toggleActions: "play reverse play reverse",
          start: "top 80%",
          end: "bottom 20%",
        },
        duration: 1,
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".contact-section",
      { x: 400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".contact-section",
          toggleActions: "play reverse play reverse",
          start: "top 80%",
          end: "bottom 20%",
        },
        duration: 1,
      }
    );
  }, []);

  return (
    <section id="contact" className="py-20  from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl italic text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 dark:text-white gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="contact-card hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-blue-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 contact-section ">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-white mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-white mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-white mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-white mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
