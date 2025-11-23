import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in collaborating or discussing data analytics? Feel free to reach
          out. I'm always open to new opportunities and conversations.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 flex items-center gap-4 card-hover">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a
                href="mailto:sidm@umd.edu"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                sidm@umd.edu
              </a>
            </div>
          </Card>

          <Card className="p-6 flex items-center gap-4 card-hover">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <a
                href="tel:+12404688932"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +1 (240) 468-8932
              </a>
            </div>
          </Card>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name *
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  className="border-border"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="border-border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject *
              </label>
              <Input
                id="subject"
                placeholder="What's this about?"
                required
                className="border-border"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message *
              </label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={6}
                required
                className="border-border resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
