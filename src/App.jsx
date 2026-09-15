import React, { useState, useEffect } from 'react';
import {
  Download,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Briefcase,
  Layers,
  Award,
  GraduationCap,
  Cloud,
  Database,
  Code,
  Brain,
  ArrowUp
} from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('manideepganji96@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  if (loading) {
    return (
      <div className="loader-overlay">
        <div id="triangle">
          <svg id="Layer_1" data-name="Layer 1" version="1.1" viewBox="0 0 2000 2000">
            <polygon className="cls-1" points="928 781 1021 951 784.5 1371.97 1618 1371.97 1530.32 1544 509 1539 928 781"></polygon>
            <polygon className="cls-3" points="1618 1371.97 784.5 1371.97 874.93 1211 1346 1211 923.1 456 1110.06 456 1618 1371.97"></polygon>
            <g id="Layer_2" data-name="Layer 2">
              <polygon className="cls-2" points="418 1372.74 509 1539 928 781 1162.32 1211 1346 1211 923.1 456 418 1372.74"></polygon>
            </g>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">

      {/* ── NAVIGATION ── */}
      <header className="nav-bar">
        <div className="container-custom nav-inner">
          <a href="#about" className="nav-logo">
            MG
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#impact">Impact</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#certifications">Certs</a>
            <a href="#education">Education</a>
          </nav>

          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </div>
      </header>

      <main className="container-custom">
        {/* ── SECTION: HERO / ABOUT ── */}
        <section id="about" className="section section--hero">
          <h1 className="hero-name">Manideep Ganji</h1>

          <p className="hero-role">
            Senior Data Engineer · Cloud Architect · Big Data & GenAI
          </p>

          <p className="hero-bio">
            Nearly 7 years of experience architecting scalable enterprise data platforms,
            real-time analytics pipelines, and cloud-native solutions across Databricks, GCP, and Azure.
          </p>

          <div className="hero-actions">
            <a
              href="ManideepGanji_DataEngineer_Resume.pdf"
              target="_blank"
              download
              className="btn-primary"
            >
              <Download style={{ width: 14, height: 14 }} />
              Resume
            </a>

            <a
              href="http://www.linkedin.com/in/manideep-ganji"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin style={{ width: 14, height: 14 }} />
              LinkedIn
              <ExternalLink style={{ width: 11, height: 11, color: '#A3A3A3' }} />
            </a>

            <a
              href="mailto:manideepganji96@gmail.com"
              className="btn-secondary"
            >
              <Mail style={{ width: 14, height: 14 }} />
              Email
            </a>
          </div>
        </section>

        {/* ── SECTION: KEY IMPACT ── */}
        <section id="impact" className="section">
          <div className="section-header">
            <div className="section-label">01 — Impact</div>
            <h2 className="section-title">Proven Track Record</h2>
            <p className="section-subtitle">
              Measurable engineering milestones across enterprise lakehouses and distributed systems.
            </p>
          </div>

          <div className="metrics-grid">
            <div className="metric-cell">
              <div className="metric-value">7+</div>
              <div className="metric-label">Years Experience</div>
            </div>
            <div className="metric-cell">
              <div className="metric-value">50+</div>
              <div className="metric-label">Technical Interviews</div>
            </div>
            <div className="metric-cell">
              <div className="metric-value">5</div>
              <div className="metric-label">Markets Transformed</div>
            </div>
            <div className="metric-cell">
              <div className="metric-value">B+</div>
              <div className="metric-label">Records Processed</div>
            </div>
          </div>
        </section>

        {/* ── SECTION: SKILLS ── */}
        <section id="skills" className="section">
          <div className="section-header">
            <div className="section-label">02 — Skills</div>
            <h2 className="section-title">Technical Competencies</h2>
            <p className="section-subtitle">
              End-to-end expertise across modern cloud platforms, big data compute, and GenAI.
            </p>
          </div>

          <div className="skills-grid">
            {/* Cloud Platforms */}
            <div className="skill-card">
              <div className="skill-card-title">
                <Cloud /> Cloud Platforms
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div>
                  <div className="skill-sub-label">GCP</div>
                  <div className="skill-tags">
                    {['BigQuery', 'Dataproc', 'Composer', 'GKE', 'Dataflow', 'Bigtable', 'GCS'].map(s => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="skill-sub-label">Azure</div>
                  <div className="skill-tags">
                    {['Data Factory', 'Databricks', 'Synapse'].map(s => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="skill-sub-label">AWS</div>
                  <div className="skill-tags">
                    {['S3', 'Glue', 'EMR', 'Redshift'].map(s => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Big Data & Databricks */}
            <div className="skill-card">
              <div className="skill-card-title">
                <Database /> Big Data & Databricks
              </div>
              <div className="skill-card-desc">
                Distributed processing, Medallion lakehouse design, and metadata governance.
              </div>
              <div className="skill-tags">
                {['Apache Spark', 'PySpark', 'Databricks Workflows', 'DBFS', 'Delta Lake', 'Unity Catalog', 'MLOps'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="skill-card">
              <div className="skill-card-title">
                <Code /> Languages & Scripting
              </div>
              <div className="skill-card-desc">
                Production scripting, SQL query tuning, and automated CI/CD pipelines.
              </div>
              <div className="skill-tags">
                {['SQL', 'Python', 'PySpark', 'Scala', 'Unix / Shell', 'Git & CI/CD'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

            {/* GenAI */}
            <div className="skill-card">
              <div className="skill-card-title">
                <Brain /> GenAI & Frameworks
              </div>
              <div className="skill-card-desc">
                AI-assisted engineering, LLM integrations, and RAG architectures.
              </div>
              <div className="skill-tags">
                {['Databricks Genie', 'ChatGPT', 'Claude', 'Julius AI', 'Gemini', 'RAG Applications'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="competency-bar">
            <div className="competency-title">
              <Layers /> Core Competencies
            </div>
            <div className="competency-tags">
              {[
                'Cloud Architecture Design',
                'ETL Optimization',
                'Real-time Streaming',
                'Data Integration',
                'Data Governance',
                'Quality Assurance'
              ].map(c => (
                <span key={c} className="competency-chip">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION: EXPERIENCE ── */}
        <section id="experience" className="section">
          <div className="section-header">
            <div className="section-label">03 — Experience</div>
            <h2 className="section-title">Work History</h2>
            <p className="section-subtitle">
              Timeline of enterprise roles, large-scale migrations, and team leadership.
            </p>
          </div>

          <div className="timeline">
            {/* Role 1 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-title">Senior Data Engineer</div>
                    <div className="exp-company">Fractal Analytics · Hyderabad, India</div>
                  </div>
                  <div className="exp-date">Jan 2024 – Present</div>
                </div>

                <ul className="exp-bullets">
                  <li className="exp-bullet">
                    <span>Spearheading scalable Databricks & Spark platforms for a global CPG enterprise.</span>
                  </li>
                  <li className="exp-bullet">
                    <span>Architected cloud-native data warehouses using <strong>BigQuery</strong> and <strong>GCS</strong>.</span>
                  </li>
                  <li className="exp-bullet">
                    <span>Integrated AI-driven engineering practices to cut development effort while maintaining <strong>SonarQube</strong> compliance.</span>
                  </li>
                  <li className="exp-bullet">
                    <span>Directed AMEA transformation across 5 international markets.</span>
                  </li>
                  <li className="exp-bullet">
                    <span>Orchestrated cross-functional collaboration across Data Science, DevOps, and Product teams.</span>
                  </li>
                </ul>

                <div className="exp-tags">
                  {['Databricks', 'Apache Spark', 'BigQuery', 'GCS', 'GenAI', 'SonarQube', 'AMEA'].map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Role 2 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-title">Senior Data Engineer</div>
                    <div className="exp-company">Quantiphi Analytics · Bengaluru, India</div>
                  </div>
                  <div className="exp-date">Sep 2022 – Dec 2023</div>
                </div>

                <ul className="exp-bullets">
                  <li className="exp-bullet">
                    <span>Migrated on-prem PySpark batch workloads to <strong>GCP Dataproc</strong> & <strong>Cloud Composer</strong>.</span>
                  </li>
                  <li className="exp-bullet">
                    <span>Deployed real-time data streaming on <strong>Google Kubernetes Engine (GKE)</strong> with Docker.</span>
                  </li>
                  <li className="exp-bullet">
                    <span>Built end-to-end ETL frameworks using Dataflow, BigQuery, and external APIs.</span>
                  </li>
                  <li className="exp-bullet">
                    <span>Directed a team of 8 data engineering professionals on large-scale cloud migrations.</span>
                  </li>
                </ul>

                <div className="exp-tags">
                  {['GCP Dataproc', 'Cloud Composer', 'GKE', 'Dataflow', 'BigQuery', 'PySpark', 'Docker'].map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Role 3 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-title">Data Engineer</div>
                    <div className="exp-company">Loctruth · Bengaluru, India</div>
                  </div>
                  <div className="exp-date">Oct 2020 – Sep 2022</div>
                </div>

                <ul className="exp-bullets">
                  <li className="exp-bullet">
                    <span>Engineered a geospatial platform processing millions to billions of time-series records daily.</span>
                  </li>
                  <li className="exp-bullet">
                    <span>Automated clustering and trend-analysis models for behavioral customer segmentation.</span>
                  </li>
                  <li className="exp-bullet">
                    <span>Architected scalable APIs, CDP integrations, and custom geolocation audience tools.</span>
                  </li>
                </ul>

                <div className="exp-tags">
                  {['Geospatial', 'Time-Series', 'Python', 'Spark', 'Clustering', 'REST APIs', 'CDP'].map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Role 4 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-title">Data Engineer</div>
                    <div className="exp-company">Reliance Industries Limited · Navi Mumbai, India</div>
                  </div>
                  <div className="exp-date">Jun 2019 – May 2020</div>
                </div>

                <ul className="exp-bullets">
                  <li className="exp-bullet">
                    <span>Processed large-scale enterprise datasets using <strong>Hadoop, Hive, Sqoop, Spark, and HDFS</strong>.</span>
                  </li>
                  <li className="exp-bullet">
                    <span>Built optimized ETL pipelines using Spark SQL and Scala to streamline HDFS-to-RDBMS data flow.</span>
                  </li>
                </ul>

                <div className="exp-tags">
                  {['Apache Hadoop', 'Hive', 'Sqoop', 'Apache Spark', 'Scala', 'HDFS', 'SQL'].map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION: CERTIFICATIONS ── */}
        <section id="certifications" className="section">
          <div className="section-header">
            <div className="section-label">04 — Certifications</div>
            <h2 className="section-title">Professional Credentials</h2>
            <p className="section-subtitle">
              Continuous specialization in Generative AI, cloud deployment, and responsible AI.
            </p>
          </div>

          <div className="cert-grid">
            <div className="cert-card">
              <Award />
              <div>
                <div className="cert-name">Generative AI for Data Engineers</div>
                <div className="cert-issuer">Udemy</div>
              </div>
            </div>

            <div className="cert-card">
              <Award />
              <div>
                <div className="cert-name">Coding with Gen AI</div>
                <div className="cert-issuer">Coursera</div>
              </div>
            </div>

            <div className="cert-card">
              <Award />
              <div>
                <div className="cert-name">Generative AI Apps Deployment & Monitoring</div>
                <div className="cert-issuer">Databricks Academy</div>
              </div>
            </div>

            <div className="cert-card">
              <Award />
              <div>
                <div className="cert-name">Responsible AI in the Gen AI Era</div>
                <div className="cert-issuer">Analytics Vidhya</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION: EDUCATION ── */}
        <section id="education" className="section">
          <div className="section-header">
            <div className="section-label">05 — Education</div>
            <h2 className="section-title">Academic Background</h2>
            <p className="section-subtitle">
              Foundation in big data analytics, computer science, and electronics engineering.
            </p>
          </div>

          <div className="edu-grid">
            <div className="edu-card">
              <div className="edu-degree">
                <GraduationCap />
                M.Tech in Computer Science Engineering
              </div>
              <div className="edu-spec">Specialization: Big Data Analytics</div>
              <div className="edu-meta">
                <span>VIT, Vellore</span>
                <span className="edu-year">2020</span>
              </div>
            </div>

            <div className="edu-card">
              <div className="edu-degree">
                <GraduationCap />
                B.Tech in Electronics & Computer Engineering
              </div>
              <div className="edu-spec">Electronics and Computer Engineering</div>
              <div className="edu-meta">
                <span>JNTUH</span>
                <span className="edu-year">2018</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION: CONTACT ── */}
        <section id="contact" className="section section--contact">
          <div className="contact-card">
            <div className="section-label">06 — Connect</div>
            <h2 className="contact-title">
              Let's build scalable data solutions together.
            </h2>
            <p className="contact-desc">
              Open for Senior Data Engineering, Cloud Architecture, and Consulting roles.
            </p>

            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-info-label">
                  <Mail /> Email
                </div>
                <div className="contact-info-value">manideepganji96@gmail.com</div>
              </div>

              <div className="contact-info">
                <div className="contact-info-label">
                  <Phone /> Phone
                </div>
                <div className="contact-info-value">+91-9985999352</div>
              </div>

              <div className="contact-info">
                <div className="contact-info-label">
                  <MapPin /> Location
                </div>
                <div className="contact-info-value">Hyderabad, India</div>
              </div>
            </div>

            <div className="contact-actions">
              <a
                href="mailto:manideepganji96@gmail.com"
                className="btn-primary"
              >
                <Mail style={{ width: 13, height: 13 }} />
                Send Email
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn-secondary"
              >
                {copied
                  ? <Check style={{ width: 13, height: 13, color: '#22c55e' }} />
                  : <Copy style={{ width: 13, height: 13 }} />
                }
                {copied ? 'Copied!' : 'Copy Email'}
              </button>

              <a
                href="http://www.linkedin.com/in/manideep-ganji"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin style={{ width: 13, height: 13 }} />
                LinkedIn
                <ExternalLink style={{ width: 10, height: 10, color: '#A3A3A3' }} />
              </a>
            </div>
          </div>

          <footer className="footer">
            <div>© 2026 Manideep Ganji</div>
            <a href="#about">Back to Top ↑</a>
          </footer>
        </section>
      </main>
    </div>
  );
}
