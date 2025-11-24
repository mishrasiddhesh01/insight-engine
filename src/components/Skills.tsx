import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Core Analytics",
    skills: ["SQL", "Python", "R", "Excel"],
  },
  {
    title: "BI & Visualization",
    skills: ["Tableau", "Power BI", "QuickSight", "IBM Cognos"],
  },
  {
    title: "Data Warehouses",
    skills: [
      "Snowflake",
      "Redshift",
      "BigQuery",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
    ],
  },
  {
    title: "Analytics Engineering",
    skills: [
      "dbt",
      "Dimensional Modeling",
      "Airflow",
      "Fivetran",
      "AWS Glue",
      "CI/CD",
    ],
  },
  {
    title: "Experimentation & Statistics",
    skills: ["A/B Testing", "t-tests", "chi-square", "KPI Design"],
  },
  {
    title: "Data Ingestion & Storage",
    skills: ["APIs", "CSV/JSON/Parquet", "S3/GCS/ADLS"],
  },
  {
    title: "Big Data & ML",
    skills: ["Spark", "XGBoost", "SHAP", "NLP"],
  },
  {
    title: "Collaboration",
    skills: ["GitHub", "Agile/Scrum", "Jira", "Confluence"],
  },
  {
    title: "Higher-Ed Domain",
    skills: [
      "SIS (Banner, PeopleSoft)",
      "Retention/Persistence/Graduation",
      "IPEDS",
      "Accreditation",
      "FERPA",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-bold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-xs hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-white">Certifications</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Microsoft Power BI Data Analyst Associate (PL-300)
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Databricks Certified Data Analyst Associate
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Associate Data Analyst in SQL (DataCamp)
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
