import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Data Analyst 1",
    company: "Pima Community College",
    period: "2025 - Present",
    achievements: [
      "Delivered decision-ready insights for Enrollment & Student Success by analyzing 140+ program datasets in SQL/R, accelerating cabinet-ready reporting by 30%",
      "Automated KPI tracking with Power BI (DAX YTD/rolling metrics, drill-through, RLS), boosting understanding of retention/persistence trends by 25% and reducing ad-hoc requests",
      "Built repeatable data-quality workflows across Banner SIS and the warehouse, implementing validation checks that cut data defects by 40% and manual cleaning by 35%",
      "Designed and maintained SAP/Power BI dashboards synthesizing longitudinal KPIs, reducing ad-hoc report volume by 20% and increasing dashboard adoption by 30%",
    ],    
    color: "primary",
  },
  {
    title: "Data Analyst Intern",
    company: "University of Maryland Counseling Center",
    period: "2023 - 2024",
    achievements: [
      "Engineered logistic and GBM-based student-risk models (AUC 0.86) supporting proactive outreach, cohort segmentation, and equity-focused resource allocation",
      "Improved longitudinal data reliability with SQL checks and dbt test/docs, reducing defects by 50% and ensuring IRB/FERPA-aligned lineage and reproducibility",
      "Enhanced Qualtrics survey workflows through sampling refinements, monitoring, and instrument redesign, raising usable responses by 15% and cutting cycle time by 20%",
      "Built Tableau dashboards and analytical briefs integrating multi-source KPIs, reducing time-to-first-visit by 7 days and improving appointment capacity utilization by 12%",
    ],    
    color: "accent",
  },
  {
    title: "Data Analyst, Data Integrity & Reporting",
    company: "Deloitte",
    period: "2021 - 2022",
    achievements: [
      "Led Salesforce CRM remediation for 2M+ records by defining deduplication rules in Access/MSSQL and Excel dashboards, reducing duplicates by 38% and improving SLA accuracy to 99%",
      "Developed executive insights packs by integrating BoardEx, Hoover’s, LinkedIn, and Salesforce via automated Power Query pivots, expanding prospect coverage by 30%",
      "Established CRM governance with GDPR-aligned SOPs and 15 automated QA checks, lowering data defects by 45% and saving ~10 analyst hours per month",
      "Created CRM KPI scorecards for pipeline coverage, contact quality, and response rates, improving forecast accuracy by 10% and boosting campaign performance by 8%",
    ],    
    color: "primary",
  },
  {
    title: "Data Analyst Intern",
    company: "Fresenius Medical Care",
    period: "2024",
    achievements: [
      "Productionized a Python NLP pipeline (F1 0.82) for sentiment analysis of call transcripts, enabling targeted outreach that increased patient retention by 15%",
      "Unified claims and CRM datasets using SQL with documented lineage and Redshift tables, reducing audit-prep time from 3 days to under 1 day",
      "Configured SSRS role-based dashboards and email subscriptions, improving timely visibility of regional KPIs for operational leads",
    ],    
    color: "accent",
  },
  {
    title: "Data Science Intern",
    company: "Servify",
    period: "2022 - 2023",
    achievements: [
      "Modeled repeat-service risk using SQL/Python (AUC 0.81), enabling interventions that lowered repeat incidents by 12%",
      "Productionized Spark ETL workflows on Databricks powering SLA/NPS dashboards, cutting runtime by 35% and revealing operational hotspots",
      "Delivered experiment readouts with statistical confidence, shaping roadmap priorities and contributing to a 6-point lift in NPS",
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
