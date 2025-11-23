import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Data Analyst 1",
    company: "Pima Community College",
    period: "2025 - Present",
    achievements: [
      "Transformed 140+ datasets into decision-ready insights using SQL and R, cutting reporting turnaround by 30%",
      "Automated KPI reporting in Power BI with RLS, improving stakeholder comprehension by 25%",
      "Implemented data quality procedures across Banner & warehouse systems, reducing errors by 40%",
      "Designed SAP/Power BI dashboards increasing executive adoption by 30%",
    ],
    color: "primary",
  },
  {
    title: "Data Analyst Intern",
    company: "UMD Counseling Center",
    period: "2023 - 2024",
    achievements: [
      "Built student-risk prediction models achieving AUC of 0.86, improving outreach and resource allocation",
      "Implemented SQL/dbt quality checks reducing data defects by 50%",
      "Designed Qualtrics surveys with improved sampling, raising usable responses by 15%",
      "Created Tableau dashboards improving time-to-first-visit and utilization metrics tracking",
    ],
    color: "accent",
  },
  {
    title: "Data Analyst, Data Integrity & Reporting",
    company: "Deloitte",
    period: "2021 - 2022",
    achievements: [
      "Led Salesforce remediation for 2M+ records, reducing duplicates by 38%",
      "Integrated multi-source data for executive insights, increasing prospect coverage by 30%",
      "Established Salesforce governance with 15 automated QA checks, reducing defects by 45%",
      "Built CRM KPI scorecards improving forecast accuracy by 10%",
    ],
    color: "primary",
  },
  {
    title: "Data Analyst Intern",
    company: "Fresenius Medical Care",
    period: "2024",
    achievements: [
      "Developed Python NLP pipeline (F1=0.82) boosting patient retention by 15%",
      "Unified claims and CRM data in SQL/Redshift, cutting audit prep time by 67%",
      "Deployed SSRS email dashboards for improved KPI accessibility",
    ],
    color: "accent",
  },
  {
    title: "Data Science Intern",
    company: "Servify",
    period: "2022 - 2023",
    achievements: [
      "Built repeat-service risk model (AUC 0.81) lowering repeat incidents by 12%",
      "Optimized Spark ETL on Databricks, reducing runtime by 35%",
      "Generated experiment insights improving NPS by 6 points",
    ],
    color: "primary",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Professional <span className="gradient-text">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative animate-fade-in ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card
                  className={`p-6 card-hover ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  } border-l-4 ${
                    exp.color === "primary" ? "border-l-primary" : "border-l-accent"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                      exp.color === "primary" ? "bg-primary" : "bg-accent"
                    } border-4 border-background shadow-glow`}
                  ></div>

                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 ml-14">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
