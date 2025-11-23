import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "High Growth Drug Prediction Using Claims Data",
    description: [
      "XGBoost model achieving 87% AUC for identifying high-growth pharmaceutical products",
      "Feature engineering in Snowflake with SHAP analysis for model interpretability",
      "Executive dashboards enabling strategic portfolio decisions",
    ],
    tools: ["XGBoost", "Snowflake", "SHAP", "Python", "Tableau"],
  },
  {
    title: "HCAHPS Insight Dashboard",
    description: [
      "Interactive Tableau dashboard analyzing patient satisfaction metrics",
      "SQL data preprocessing and quality validation pipeline",
      "Improved patient satisfaction scores by 25% and decision efficiency by 30%",
    ],
    tools: ["Tableau", "SQL", "Healthcare Analytics"],
  },
  {
    title: "Vaccination Insights Dashboard",
    description: [
      "Comprehensive immunization tracking and analysis dashboard",
      "SQL-based data cleanup and transformation workflows",
      "Enhanced health outcomes by 25% through data-driven insights",
    ],
    tools: ["Tableau", "SQL", "Public Health Data"],
  },
  {
    title: "Healthcare Data SQL Analysis",
    description: [
      "Analysis of operational data across 130+ U.S. hospitals",
      "Complex SQL pipelines for multi-dimensional analysis",
      "Identified operational savings opportunities of 15%",
    ],
    tools: ["SQL", "PostgreSQL", "Data Analysis"],
  },
  {
    title: "Bankruptcy Prediction Using PySpark",
    description: [
      "Financial risk prediction model with 18% accuracy improvement",
      "Distributed computing on PySpark for large-scale data processing",
      "Key driver analysis identifying ROA and gross margin as critical factors",
    ],
    tools: ["PySpark", "Machine Learning", "Financial Analytics"],
  },
  {
    title: "Beer Reviews Analysis",
    description: [
      "Clustering analysis on 1.5M+ beer reviews",
      "Market positioning strategies for brewery optimization",
      "Python-based exploratory data analysis and visualization",
    ],
    tools: ["Python", "Clustering", "NLP", "Market Research"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 card-hover group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {project.description.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {project.tools.map((tool, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="text-xs border-primary/30 text-primary"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
