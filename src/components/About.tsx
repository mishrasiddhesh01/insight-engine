import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-semibold">data analyst and analytics engineer</span> with a passion for turning complex datasets into clear, actionable insights. With a background spanning institutional research, healthcare analytics, and consulting, I've honed my ability to bridge the gap between technical analysis and strategic storytelling.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I hold a <span className="text-foreground font-semibold">Master's in Information Systems from the University of Maryland</span>, where I focused on predictive analytics, statistical modeling, and data visualization. My work has ranged from building decision-ready insights for higher education institutions to designing predictive models that improve patient outcomes in healthcare settings.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              What drives me is the belief that <span className="text-foreground font-semibold">data should inform decisions, not just describe them</span>. Whether it's through SQL queries, Python pipelines, or interactive dashboards, I strive to make data accessible, reliable, and impactful.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond the numbers, I'm curious, growth-oriented, and always looking to learn. When I'm not working with data, you'll find me exploring new technologies, staying active, or seeking balance through mindfulness and reflection.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>

          <div className="space-y-6">
            <Card className="p-6 card-hover border-l-4 border-l-primary">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold">Master of Science in Information Systems</h4>
                  <p className="text-primary font-semibold">University of Maryland, College Park</p>
                </div>
                <span className="text-muted-foreground font-medium mt-2 md:mt-0">2023 - 2024</span>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">Courses:</span> Predictive Analytics, Statistical Modeling, Data Mining, Data Visualization, Cloud Computing, A/B Testing
              </p>
            </Card>

            <Card className="p-6 card-hover border-l-4 border-l-accent">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold">Bachelor of Engineering in Information Technology</h4>
                  <p className="text-primary font-semibold">University of Mumbai</p>
                </div>
                <span className="text-muted-foreground font-medium mt-2 md:mt-0">2019 - 2023</span>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">Courses:</span> Big Data Analytics, Python Programming, Database Management, Machine Learning, Algorithms, Project Management
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
