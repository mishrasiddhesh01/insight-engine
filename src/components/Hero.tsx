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
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center text-4xl font-bold text-white shadow-glow animate-glow-pulse">
              SM
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Data Analyst</span> &{" "}
            <span className="gradient-text">Analytics Engineer</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Transforming Complex Data Into Clear, Actionable Insights
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Specializing in institutional research, healthcare analytics, predictive
            modeling, and data engineering workflows
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
