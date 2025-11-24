import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
              <img
                src="https://i.postimg.cc/nr6NNBLy/1000096182.jpg"
                alt="Profile"
                className="w-full h-full object-cover scale-80"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
          </div>

          <h2 className="text-base md:text-lg font-medium mb-4 text-muted-foreground">
            Hello, I'm Siddhesh
          </h2>

          <h1 className="text-[1.92rem] md:text-[2.88rem] font-bold mb-6 leading-tight">
            <span className="gradient-text">Data Strategy</span> &{" "}
            <span className="gradient-text">Insights Professional</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Driving smarter decisions by connecting strategy, systems, and analytics.
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Specializing in Institutional Research, Healthcare Analytics, Predictive
            Modeling, and Data Engineering Workflows
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
