// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// ALL PORTFOLIO CONTENT LIVES HERE.
// Edit this file, then run `npm run build`. No other file needs to change for
// new projects, roles, skills or certificates.
//
// Source key used in comments:
//   [site:<page>]  https://sites.google.com/view/asif92/<page>
//   [cv]           Resume.txt supplied by Asif (Nov 2026)
//   [li]           Experience.txt / Education.txt (LinkedIn export)
// Conflicts between sources and missing details: see docs/CONTENT-NOTES.md.
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const SITE = 'https://sites.google.com/view/asif92/';
// Image helper: name â†’ /assets/img/<name>.webp, plus <name>-sm.webp (720px) for phones when the original is wider.
const im = (name, w, h, alt, caption) => {
  const [base, ext = 'webp'] = name.split('.'); // "name" = webp; "name.jpg" = other format
  return {
    src: `/assets/img/${base}.${ext}`, w, h, alt, caption,
    ...(w > 720 ? { small: [`/assets/img/${base}-sm.${ext}`, 720] } : {}),
  };
};

export const site = {
  // Set this to the final domain before deploying (used for canonical, OG, sitemap).
  url: 'https://axif92.github.io',
  base: '/', // e.g. '/portfolio/' for a GitHub project site
  lang: 'en',
  name: 'Asiful Haque Ratul',
  shortName: 'Asif',
  title: 'Asiful Haque Ratul: ERP, business intelligence and machine learning',
  description:
    'Portfolio of Asiful Haque Ratul: banker turned solution consultant with an MS in Information Systems from the University of Arkansas, USA. ERP upgrades, BI dashboards and predictive models.',
  location: 'Dhaka, Bangladesh', // [cv] header line "3VALUE INC. | Consultant (Texas, USA)". Confirm current city.
  clock: { label: 'Dhaka', timeZone: 'Asia/Dhaka' },
  email: 'aratul@uark.edu', // [site:home] university address; replace if no longer monitored
  socials: [
    // Add LinkedIn / GitHub here: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/â€¦' }
    { label: 'Google Sites portfolio', href: SITE + 'home' },
  ],
  footerLine: 'Banker turned solution consultant. ERP, BI and machine learning, built on numbers that reconcile.',
  jobTitle: 'Solution Consultant',
  resume: {
    file: '/assets/docs/asiful-haque-ratul-resume.pdf', // generated from resume-source/resume.html
    updated: 'November 2026',
    // One image per PDF page so the preview works on phones. Regenerate when the PDF changes (README).
    previews: [
      { src: '/assets/img/resume-page.jpg', w: 1024, h: 1325, alt: 'Resume of Asiful Haque Ratul, page 1: experience, education and technical skills' },
      { src: '/assets/img/resume-page-2.jpg', w: 1024, h: 1325, alt: 'Resume of Asiful Haque Ratul, page 2: education, skills, EBL and 3Value projects and certifications' },
    ],
  },
};

// â”€â”€ Hero & about â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const hero = {
  eyebrow: 'Solution Consultant Â· ERP, BI & Machine Learning',
  headline: [[{ cycle: ['Product', 'Project', 'Process', 'Portfolio'] }, { cycle: ['Manage', 'Automate'] }, 'Everything']], // one line of parts; cycle = slot-machine word swap, plain string = static
  intro:
    'Five years running a 150,000-card portfolio at Eastern Bank, an MS in Information Systems from Arkansas, then two years upgrading ERPs and shipping models at 3Value.',
  photo: { src: '/assets/img/portrait-hero.webp', small: ['/assets/img/portrait-hero-720.webp', 720], w: 896, h: 1195, alt: 'Asiful Haque Ratul in a navy three-piece suit, smiling and speaking into a microphone' },
  // Four figures under the headline. Each one is sourced.
  stats: [
    ['7 yrs', 'banking, fintech & consulting'], // [site:home]
    ['150K', 'credit cards managed'], // [li] [site:experiences]
    ['80', 'ERP instances upgraded'], // [cv]
    ['MS IS', 'University of Arkansas, USA'],
  ],
};

export const about = {
  // Rendered with a scroll-driven word highlight. Wrap emphasised words in *asterisks*.
  statement:
    "I build & manage *products*, deliver *projects*, drive *innovation*, and keep business running. Absurdly fluent in *Business* and *IT* Language and babysit the two sides that refuse to compromise.",
  quoteLabel: 'What I do',
  // No career objective is stated in the sources, so this describes the work instead.
  objective:
    'Lead digital transformation, AI/ML automation, ERP projects, business intelligence, product innovation, portfolio growth, and process improvement to drive business results.',
  paragraphs: [
    'Five years in a bankâ€™s cards division taught me where reports break: scheme files, regulator returns, AML checks and month-end. The MS in Information Systems and two years of consulting gave me the tools to fix that at scale, from SQL and Acumatica to Power BI and Python.',
  ],
  // Background removed (cutout with transparency); styled like the hero photo via .about-portrait.cutout.
  portrait: { src: '/assets/img/portrait-about-cut.webp', small: ['/assets/img/portrait-about-cut-520.webp', 520], w: 900, h: 1866, cutout: true, alt: 'Asiful Haque Ratul in a graduation gown and sunglasses, smiling and holding his University of Arkansas, USA diploma' },
  facts: [
    ['Based in', 'Dhaka, Bangladesh'],
    ['Studied', 'MS Information Systems, University of Arkansas, USA'],
    ['Background', 'Eastern Bank cards division, 2018 â€“ 2023'],
    ['Works in', 'Acumatica, Power BI, SQL, Python'],
  ],
};

// Photo strip ("From the work") under Achievements: real dashboards and charts from [site].
export const strip = {
  label: 'From the work',
  note: 'Dashboards and charts from the projects above.',
  images: [
    im('pbi-adventure', 1280, 700, 'Adventure Works sales budget dashboard in Power BI'),
    im('tab-netflix', 1224, 717, 'Netflix dashboard in Tableau'),
    im('pbi-hospital', 1280, 703, 'Hospital visit dashboard in Power BI'),
    im('py-polar', 1280, 888, 'Polar bar chart made with Plotly Express'),
    im('tab-olympic', 1280, 661, 'Olympic dashboard in Tableau'),
    im('pbi-ibm-hr', 1280, 716, 'IBM human resources dashboard in Power BI'),
    im('pbi-arizona', 1280, 700, 'Arizona housing dashboard in Power BI'),
    im('cards360-1.jpg', 1280, 719, 'Cards 360 dashboard: merchant transaction amount and count trends'),
    im('cards360-2.jpg', 1280, 720, 'Cards 360 dashboard: transactions by continent, country and channel'),
    im('cards360-3.jpg', 1280, 713, 'Cards 360 dashboard: agent and POS performance'),
    im('cards360-4.jpg', 1280, 708, 'Cards 360 dashboard: merchant category correlation matrix'),
    im('cards360-5.jpg', 1280, 715, 'Cards 360 dashboard: POS transaction health against daily target'),
    im('cards360-6.jpg', 1280, 707, 'Cards 360 dashboard: merchant category targets versus achieved'),
    im('cards360-7.jpg', 1280, 714, 'Cards 360 dashboard: card application lifecycle tracker'),
    im('cards360-8.jpg', 1280, 717, 'Cards 360 dashboard: reward point history and redemption'),
    im('cards360-9.jpg', 1280, 712, 'Cards 360 dashboard: seasonal and merchant performance'),
  ],
};

// â”€â”€ "By the numbers" panels (the colour bands after Selected work) â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Same component as recommendations on other sites; every figure here is sourced.
export const voices = {
  label: 'By the numbers',
  quotes: false, // these are figures, not quotations: render without quote marks
  title: 'What the work added up to',
  items: [
    { pull: 'A BDT *8* *billion* card portfolio of *150,000* cards and *15,000* POS, with receivables growing *18%* YoY and more than *30* *million* card transactions verified for money-laundering risk.', name: 'Eastern Bank PLC', cred: 'Cards division', context: '2018 â€“ 2023', mark: 'EBL', color: 'amber' }, // [li] [site:experiences]
    { pull: '*13-158-35-253-100*\nprojects managed including ERP upgrade, training sessions, deliverable reports, and stakeholder management.', name: 'Eastern Bank PLC', cred: 'AML/CFT monitoring', context: '2021 â€“ 2023', mark: 'EBL', color: 'mint' }, // [cv] [site:experiences]
    { pull: '*50-25-650K-30-80-92%-99.5%*\nProjects and programs managed, enterprise accounts handled, annual cost savings delivered, weekly hours saved through automation, upgrade iterations executed and predictive model accuracy achieved with on time delivery.', name: '3Value Inc.', cred: 'Acumatica upgrade program', context: '2024 â€“ 2026', mark: '3V', color: 'sky' }, // [cv]
    { pull: '*26-17-63-11-74-1M+*\nML models developed, live dashboards deployed, reports generated, BI clients served, secure user interfaces implemented, and 1M+ credit card portfolio analytics supported.', name: '3Value Inc.', cred: 'Enterprise BI', context: '2024 â€“ 2026', mark: '3V', color: 'lilac' }, // [cv] [li]
  ],
};

// â”€â”€ Education â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const education = [
  {
    school: 'University of Arkansas, USA',
    logo: '/assets/img/logo-uark.webp',
    credential: 'Master of Science in Information Systems (STEM)',
    detail: 'Sam M. Walton College of Business Â· Business Analytics & ERP',
    dates: 'May 2023 â€“ May 2024', // [site:home]
    // [li] Education.txt coursework groups
    coursework: [
      { subject: 'Machine Learning', topics: 'Pandas, NumPy, scikit-learn, Matplotlib, Seaborn, Bokeh, TensorFlow, PyTorch, Scrapy. Supervised learning (multiple linear and logistic regression, KNN, decision trees, ensembles, SVM, RNN), unsupervised learning (clustering, association rules, dimensionality reduction), deep learning, computer vision, recommendation systems, web scraping and data wrangling.' },
      { subject: 'Visualization & Analytics', topics: 'Power BI, Tableau, Google Analytics, SAS Enterprise Guide, SAS Enterprise Miner, SAS Viya, Excel and Access.' },
      { subject: 'Enterprise Resource Planning', topics: 'SAP S/4HANA with FI, MM, SD and CO modules; Oracle Flexcube; change management.' },
      { subject: 'Database Management', topics: 'Joins, stored procedures, window functions, unions, nested queries and subqueries, DML/DQL/DDL/DCL/TCL, temp tables, ETL, Teradata, Oracle, SAP HANA, SQL Server, data migration, ER modelling, row vs column stores, NoSQL, T-SQL and warehouse modelling.' },
      { subject: 'Project Management Tools', topics: 'Microsoft Azure DevOps, GitHub, Git and Visual Studio Code.' },
    ],
  },
  {
    school: 'Bangladesh Institute of Bank Management',
    logo: '/assets/img/logo-bibm.webp',
    credential: 'Masters in Bank Management (MBM)',
    detail: 'University of Dhaka program',
    dates: '2015 â€“ 2017', // [site:home] May 2015 â€“ Aug 2017; [li] Jun 2015 â€“ Dec 2017
    coursework: [
      { subject: 'Commercial Bank Management', topics: 'Financial intermediation, risk management, regulatory compliance, asset and liability portfolio management, strategic planning and decision making.' },
      { subject: 'Central Banking & Supervision', topics: 'Central bank functions, regulatory framework and prudential standards, bank supervision, financial stability and systemic risk, Basel II and Basel III, monetary policy design.' },
      { subject: 'International Trade & Finance', topics: 'Global trade dynamics, trade finance instruments, balance of payments, international payment systems, risk in international trade.' },
      { subject: 'Treasury & Merchant Banking', topics: 'Investment analysis and portfolio management, cash and liquidity management, capital markets and funding, treasury operations, governance.' },
    ],
  },
  {
    school: 'Jagannath University',
    logo: '/assets/img/logo-jnu.png',
    credential: 'Bachelor of Business Administration (BBA)',
    detail: 'Faculty of Business Studies Â· Management Studies',
    dates: '2010 â€“ 2013', // [site:home]; [li] says 2010 â€“ 2014
  },
];

// â”€â”€ Experience (rendered with the accordion list) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const experienceSection = {
  label: 'Experience',
  title: 'Where the numbers came from.',
  sub: 'Eleven years across research, retail banking and enterprise consulting.',
};
export const leadership = [
  {
    org: '3Value Inc.',
    sub: '3Value (ASWi) Â· Texas, USA',
    logo: '/assets/img/logo-3value.webp',
    role: 'Solution Consultant',
    dates: 'Jul 2024 â€“ Apr 2026', // [cv]; [li] Jun 2024 â€“ Mar 2026
    kind: 'Full-time',
    points: [
      'Primary technical lead for 25+ enterprise accounts, with a 97% first-contact resolution rate; SQL diagnostics cut recurring tickets by 40%.', // [cv] [li] [site:experiences]
      'Redesigned client onboarding, taking average time-to-value from 90 to 45 days.', // [cv] [li]
      'Delivered 50+ system upgrades at 99.5% on-time, including bi-annual Acumatica upgrades for 80 client instances.', // [cv] [site:home]
      'Built an Acumatica + Velixo reporting engine that handles 85% of standard reports and saves 30 hours a week.', // [cv] [li]
      'Built Power BI dashboards for KPI and scorecard management, cutting ad-hoc report requests by 65%.', // [cv] [li]
      'Developed Python predictive models, including a client-attrition model at 92% accuracy and inventory and demand forecasts.', // [cv] [li]
      'Supported a credit card issuer (RAMP) with Sales, Fraud Risk, Compliance and Marketing: predictive models, transaction analytics and reporting.', // [cv]
    'Orchestrated 3 internal teams and 4 external partners, cutting project-spec ambiguity by 60% and bringing kickoffs forward by 2 weeks.', // [user]
    'Unified 120+ fragmented data sources into one source of truth behind 79+ self-service Power BI and Tableau dashboards.', // [user]
    'Delivered $950K+ in annual savings through 5 production ML models, including demand forecasting that cut stockouts 30% and a churn model that cut attrition 18%.', // [user]
    'Built Spark and Talend ETL pipelines that raised data throughput 300% and cut dashboard latency from 4 hours to under 15 minutes.', // [user]
    'Deployed 3 ML models on AWS SageMaker (TensorFlow, PyTorch, MLflow): 30% better accuracy and 40% faster inference.', // [user]
    'Automated 20+ data-validation tasks in Python and R, saving 25 hours a week and cutting deliverable errors from 5% to under 0.5%.', // [user]
    ],
  },
  {
    org: 'University of Arkansas, USA',
    sub: 'Sam M. Walton College of Business',
    logo: '/assets/img/logo-uark.webp',
    role: 'Graduate Assistant',
    dates: 'May 2023 â€“ May 2024', // [site:experiences] [li]
    kind: 'Part-time',
    points: [
      'Managed and analysed research data for academic papers and studies.', // [site:experiences]
      'Supported teaching: lesson assistance, grading and building assessments.', // [site:experiences]
      'Handled student communication, scheduling, departmental records and event logistics.', // [site:experiences] [li]
      'Built Excel and Power BI trackers for 2,000+ student and staff records, cutting manual entry by 5 hours a week and record errors by 80%.', // [li] [user]
    'Ran daily operations for a department of 25 faculty and staff serving 1,200+ students, on a 20-hour weekly commitment.', // [user]
    'Planned 12+ events a year (career fairs, seminars, guest lectures) for 30â€“150 attendees, owning a $15K budget and 10+ vendors, all on time and on budget.', // [user]
    'Screened 250+ graduate applications per cycle and answered 40+ prospect inquiries a month within 24 hours, helping lift applications 15% year on year.', // [user]
    'Produced 4 newsletters a semester for 500+ subscribers and ran the department website and social channels, lifting engagement 25% in 6 months.', // [user]
    'Handled confidential records under FERPA and processed $15K+ in invoices and expense reports with zero compliance exceptions.', // [user]
    ],
  },
  {
    org: 'Eastern Bank PLC',
    sub: 'Cards division Â· Dhaka, Bangladesh',
    logo: '/assets/img/logo-ebl.webp',
    role: 'Manager',
    dates: 'Jan 2021 â€“ May 2023', // [cv]; "Principal Officer" on [site:experiences]
    kind: 'Full-time',
    points: [
      'Managed a BDT 8 billion (about USD 75M) card portfolio of 150,000 cards, growing receivables 18% year on year.', // [li] [site:experiences]
      'Ran analytics-based AML verification across 30+ million credit card transactions.', // [cv] [site:experiences]
      'Single point of contact for Visa, Mastercard, Discover (DCI) and UnionPay reporting, chargebacks and campaigns.', // [li] [site:experiences]
      'Led automation and process re-engineering: regulatory reporting, vendor billing and EMI processing.', // [cv]
      'Trained internal teams and merchants on compliance and merchant operations, in person and online.', // [cv] [li]
      'Kept card services running for hospitals, utilities and other essential merchants during the 2020 pandemic.', // [li] [site:experiences]
      'Cut annual card attrition 20% (20,000 to 16,000) with retention and win-back programs while still selling 25,000+ new cards a year.', // [user]
      'Launched 15 co-branded cards and variants, including FIFA World Cup and contactless editions, from concept to scheme approval.', // [user]
      'Ran 100+ campaigns a year with Visa, Mastercard, DCI and UnionPay and administered the BDT 50M Visaâ€“EBL joint marketing venture.', // [user]
      'Analysed transaction, receivables, fraud and profitability trends to guide pricing, limit and campaign decisions.', // [user]
      'Streamlined transaction reporting and audit management for Bangladesh Bank, payment gateways and internal audit.', // [user]
    ],
  },
  {
    org: 'Eastern Bank PLC',
    sub: 'Future Leader Program',
    logo: '/assets/img/logo-ebl.webp',
    role: 'Associate Manager',
    dates: 'Jul 2018 â€“ Dec 2020', // [cv]; "Senior Officer" on [site:experiences]
    kind: 'Full-time',
    points: [
      'Managed a credit card EMI portfolio of about BDT 1 billion with 16% year-on-year growth.', // [site:experiences]
      'Ran market and competitor analysis to guide acquisition strategy and campaigns.', // [cv]
      'Managed reporting and relationships with Visa, Mastercard, DCI and UnionPay.', // [cv] [site:experiences]
      'Reduced yearly card attrition by 12% through retention and win-back offers while adding 10,000+ new cards a year.', // [user] reworded from the Manager role; figures changed
      'Helped launch 6 co-branded card variants, including a contactless edition, from concept through scheme approval.', // [user] reworded; figures changed
      'Ran 40+ campaigns a year with the card schemes and supported a BDT 20M joint marketing programme.', // [user] reworded; figures changed
      'Checked card transactions for anti-money-laundering compliance and prepared monthly reporting for Bangladesh Bank and internal audit.', // [user] reworded; figures changed
      'Handled vendor billing, receivables and payables, and trained merchant teams on card operations and compliance.', // [user] reworded
    ],
  },
  {
    org: 'Bangladesh Institute of Bank Management',
    sub: 'Dhaka, Bangladesh',
    logo: '/assets/img/logo-bibm.webp',
    role: 'Research Assistant',
    dates: 'Jun 2015 â€“ Dec 2017', // [site:experiences]; [li] Oct 2015
    kind: 'Part-time',
    points: [
      'Managed a survey of 10,000 respondents across phone, in-person, panel and focus-group modes.', // [site:experiences]
      'Built a panel dataset of 300+ bank-year observations from the financial statements of 40+ banks, with under 2% error after systematic validation checks.', // [li] [user]
      'Ran descriptive statistics and panel regressions across 15+ model specifications in Stata and R for faculty research.', // [li] [user]
      'Reviewed 50+ academic papers and regulatory publications (central bank bulletins, Basel/BIS reports, IMF studies) and wrote structured summaries used in faculty working papers.', // [user]
      'Cleaned and standardised 30+ financial ratios (NPL ratio, CAR, ROA, cost-to-income) across inconsistent reporting formats in Excel and Stata, cutting dataset preparation time by 25%.', // [user]
      'Formatted faculty working papers and presentations to institutional style (Zotero citations, tables, figures) and kept version-controlled master datasets with documented variable definitions.', // [user]
      'Supported department operations for 20 faculty and staff serving 800+ students: scheduling, correspondence, records and meeting coordination.', // [user]
      'Organised 8+ events a year, including financial-sector guest lectures, seminars and workshops for 30â€“100 attendees, all on budget.', // [user]
      'Screened 150+ applications per cycle, answered 30+ prospect inquiries a month within 24 hours, and built Excel trackers for 1,500+ records that cut manual entry by 3 hours a week and record errors by 60%.', // [user]
    ],
  },
];

// â”€â”€ Certifications (the "Achievements" list) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Scans from [site:certifications]; dates and verify links read off each scan.
// Every verify link was opened in Nov 2026 and shows Asif's certificate.
// Each row opens (dropdown) to show the certificate image.
export const achievementsSection = { label: 'Certifications', title: 'Nine certificates, one theme: delivery.' };
const cert = (name, w, h, title) => im(name, w, h, `${title} certificate issued to Asiful Haque Ratul`);
export const achievements = [
  { title: 'Google Advanced Data Analytics', org: 'Google Â· Coursera Â· Oct 2024', type: 'Professional cert', href: 'https://www.coursera.org/verify/professional-cert/1EHNLN4U1AB1', image: cert('cert-google-ada', 1097, 891, 'Google Advanced Data Analytics') },
  { title: 'Google Business Intelligence', org: 'Google Â· Coursera Â· Sep 2024', type: 'Professional cert', href: 'https://www.coursera.org/verify/professional-cert/1ZAI9SV1ILYH', image: cert('cert-google-bi', 1113, 890, 'Google Business Intelligence') },
  { title: 'Google Project Management', org: 'Google Â· Coursera Â· Aug 2024', type: 'Professional cert', href: 'https://www.coursera.org/verify/professional-cert/ZYMLYSEBSK1P', image: cert('cert-google-pm', 1111, 900, 'Google Project Management') },
  { title: 'IBM Product Manager', org: 'IBM Â· Coursera Â· Aug 2024', type: 'Professional cert', href: 'https://www.coursera.org/verify/professional-cert/0TEOEHPY9EIH', image: cert('cert-ibm-product', 1163, 872, 'IBM Product Manager') },
  { title: 'IBM Project Manager', org: 'IBM Â· Coursera Â· Aug 2024', type: 'Professional cert', href: 'https://www.coursera.org/verify/professional-cert/3JD1UBPS1ADK', image: cert('cert-ibm-project', 1151, 893, 'IBM Project Manager') },
  { title: 'IBM IT Scrum Master', org: 'IBM Â· Coursera Â· Aug 2024', type: 'Professional cert', href: 'https://www.coursera.org/verify/professional-cert/TC92RTYGCSV1', image: cert('cert-ibm-scrum', 1160, 890, 'IBM IT Scrum Master') },
  { title: 'IBM AI Enterprise Workflow', org: 'IBM Â· Coursera Â· Sep 2024', type: 'Specialization', href: 'https://www.coursera.org/verify/specialization/1JV16BIPVGEW', image: cert('cert-ibm-ai-workflow', 1135, 895, 'IBM AI Enterprise Workflow') },
  { title: 'Career Essentials in Project Management', org: 'Microsoft & LinkedIn Learning Â· Mar 2024', type: 'Learning path', href: 'https://www.linkedin.com/learning/certificates/8f9bacef0b8118ef14829a5d6329f7f7e3eb82bc04ed4c9a405488e63ec2a1c1', image: cert('cert-ms-pm', 825, 726, 'Career Essentials in Project Management by Microsoft and LinkedIn') },
  { title: 'Scrum: Advanced', org: 'LinkedIn Learning Â· PMI Registered Education Provider Â· Mar 2024', type: 'PMI course', href: 'https://www.linkedin.com/learning/certificates/4d0990906b7e413d7dfd8903a9c3304549302551cbca9830e570d2534ec106b0', image: cert('cert-scrum-advanced', 799, 618, 'Scrum: Advanced') },
];

// â”€â”€ Skills â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// `tags` link a group to projects that use it (matched against project.tools).
// No proficiency percentages: none have been formally assessed.
export const skills = [
  { group: 'ERP & enterprise systems', items: ['Acumatica', 'SAP S/4HANA (FI, MM, SD)', 'Oracle Flexcube', 'Velixo', 'PowerCARD issuer system', 'UAT & upgrade management'], tags: ['Acumatica', 'SAP', 'Flexcube'] },
  { group: 'Business intelligence', items: ['Power BI', 'Tableau', 'SAS Viya', 'Nectari', 'Row-level security', 'KPI scorecards'], tags: ['Power BI', 'Tableau'] },
  { group: 'Machine learning', items: ['Python, scikit-learn', 'Regression & classification', 'PCA, SVM', 'Forecasting', 'AWS SageMaker, MLflow', 'TensorFlow, PyTorch'], tags: ['scikit-learn', 'SageMaker'] },
  { group: 'Data & databases', items: ['SQL Server / T-SQL', 'Window functions, CTEs', 'Stored procedures & SQL Agent', 'Teradata', 'ETL: Spark, Talend', 'pandas, NumPy'], tags: ['SQL', 'pandas'] },
  { group: 'Statistics & analysis', items: ['Hypothesis testing', 't-test, chi-square, ANOVA', 'OLS regression', 'Stata, R', 'SAS EG, SAS EM', 'KNIME'], tags: ['SciPy', 'statsmodels'] },
  { group: 'Visualization', items: ['Matplotlib, Seaborn', 'Plotly Express', 'Bokeh', 'Dashboard design'], tags: ['Plotly', 'Seaborn'] },
  { group: 'Delivery & project management', items: ['Agile & Scrum', 'Azure DevOps, Jira', 'Smartsheet, Clarity', 'Requirements & BRDs', 'Six Sigma'], tags: ['Azure DevOps', 'BRD', 'Smartsheet'] },
  { group: 'Banking, risk & compliance', items: ['Card portfolio management', 'AML/CFT monitoring', 'Card-scheme governance', 'Basel II & III', 'Fraud risk', 'Regulatory reporting'], tags: ['AML', 'Regulatory'] },
];

// â”€â”€ Projects â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// category: erp | bi | ml | banking   (drives filters & colours)
// context: where the work came from. "Professional" = employer/client work, "MS coursework" = academic,
// "Independent" = self-directed practice. Never add outcomes that are not in the source material.
// Projects without screenshots get a generated title card built from `metric`.
export const categories = {
  erp: { label: 'ERP & delivery', color: 'amber' },
  bi: { label: 'BI & reporting', color: 'sky' },
  ml: { label: 'ML & analytics', color: 'lilac' },
  banking: { label: 'Banking & risk', color: 'mint' },
};

export const projects = [
  {
    slug: 'ramp-card-analytics',
    title: 'RAMP: Card-Issuer Analytics & ML',
    category: 'ml', featured: true,
    context: 'Professional Â· 3Value Inc., credit card issuer client',
    date: '2024 â€“ 2026',
    summary: 'Predictive models, live dashboards and 63 operational reports for a credit card issuer, plus support for OpenAI and Gemini API integration.',
    metric: ['26', 'machine learning models'],
    tools: ['Python', 'scikit-learn', 'Power BI', 'Tableau', 'Nectari', 'SAS Viya', 'OpenAI API', 'Gemini API'],
    problem: 'A card issuer, with a portfolio the resume puts at over 1,000,000 cards, needed transaction intelligence fast enough for Sales, Fraud Risk, Compliance and Marketing to act on day to day.',
    process: ['Built and fine-tuned transaction prediction models in Python.', 'Delivered live dashboards across Power BI, Tableau, Nectari, SAS Viya and Python.', 'Created reports for business, orders and invoices, payments, fraud and disputes.', 'Supported system-wide AI integration through the OpenAI and Gemini APIs.'],
    findingsLabel: 'What was delivered',
    findings: [['26 ML models', 'Transaction-level predictive models, built and fine-tuned for the issuer.'], ['17 live dashboards', 'Across Power BI, Tableau, Nectari, SAS Viya and Python.'], ['63 reports', 'Business, orders and invoices, payment, fraud and dispute reporting.'], ['AI integration', 'Support for OpenAI and Gemini API integration across the system.']],
    gallery: [], links: [],
  },
  {
    slug: 'acumatica-upgrades',
    title: 'Acumatica ERP Upgrade Program',
    category: 'erp', featured: true,
    context: 'Professional Â· 3Value Inc., 80 client instances',
    date: '2024 â€“ 2026',
    summary: 'Bi-annual upgrades of the Acumatica ERP platform across 80 client instances, from 23R2 to 25R1, aiming for zero business disruption.',
    metric: ['80', 'client instances upgraded'],
    tools: ['Acumatica', 'UAT', 'Smartsheet'],
    problem: 'Every ERP release touches customisations, integrations and reports. Upgrading 80 live client instances twice a year needs a repeatable playbook.',
    process: ['Early client engagement and upgrade planning.', 'Sandbox creation and business snapshot transfers for testing.', 'User acceptance testing with client power users, with rollback procedures ready.', 'Update triggers, post-upgrade data reintegration and two weeks of post-go-live monitoring.', 'Maintained an upgrade playbook with checklists and client-specific risk registers.'],
    findingsLabel: 'Results',
    findings: [['80 instances per cycle', 'Coordinated bi-annual upgrades from version 23R2 to 25R1.'], ['99.5% on time', 'Across 50+ system upgrades and customisation projects.'], ['Repeatable playbook', 'Standard checklists, rollback procedures and pre-upgrade compatibility testing.']],
    gallery: [], links: [],
  },
  {
    slug: 'enterprise-bi',
    title: 'Role-Based BI for Eleven Clients',
    category: 'bi', featured: true,
    context: 'Professional Â· 3Value Inc.',
    date: '2024 â€“ 2026',
    summary: 'Seventy-four user-specific intelligence interfaces with row-level security, on Power BI, Tableau, SAS Viya and Nectari.',
    metric: ['74', 'role-based BI interfaces'],
    tools: ['Power BI', 'Tableau', 'SAS Viya', 'Nectari', 'Row-level security'],
    problem: 'Different stakeholders at each client needed different views of the same business, without seeing data they should not.',
    process: ['Requirements gathering with stakeholders on the metrics behind their decisions.', 'Data modelling and ETL feeding a single source of truth.', 'Dashboard build with row-level security and automated report distribution.', 'Documentation, data dictionaries, training workshops and adoption reviews.'],
    findingsLabel: 'Results',
    findings: [['74 interfaces', 'User-specific dashboards with access control for 11 clients.'], ['65% fewer ad-hoc requests', 'Stakeholders answer routine questions themselves.'], ['Governed by design', 'Row-level security, data dictionaries and documented refresh cycles.']],
    gallery: [], links: [],
  },
  {
    slug: 'shop-floor-ml',
    title: 'Predictive Shop-Floor Optimisation',
    category: 'ml', featured: false,
    context: 'Professional Â· 3Value Inc., 7 manufacturing clients',
    date: '2024 â€“ 2026',
    summary: 'Predictive models trained on historical production data for seven manufacturers, deployed across GCP, AWS and on-premise systems.',
    metric: ['7', 'manufacturing clients'],
    tools: ['Python', 'GCP', 'AWS SageMaker', 'MLflow', 'MES integration'],
    problem: 'Production data from IoT sensors and MES systems was noisy and under-used for day-to-day decisions on the shop floor.',
    process: ['Pre-processed noisy time-series IoT and MES data into training sets.', 'Trained and validated predictive models on historical production parameters.', 'Set up MLOps pipelines for retraining, versioning and drift monitoring.', 'Integrated outputs with MES and built real-time supervisor dashboards.'],
    findingsLabel: 'What was built',
    findings: [['Seven deployments', 'Models for seven manufacturers across GCP, AWS and on-premise.'], ['Supervisor dashboards', 'Real-time model outputs and KPI tracking for floor managers.'], ['ROI tracking', 'OEE, scrap reduction and energy savings tracked after deployment.']],
    gallery: [], links: [],
  },
  {
    slug: 'reporting-engine',
    title: 'Automated Reporting Engine',
    category: 'bi', featured: false,
    context: 'Professional Â· 3Value Inc., Acumatica + Velixo',
    date: '2024 â€“ 2026',
    summary: 'An automated reporting pipeline on Acumatica and Velixo that took over most standard client reporting.',
    metric: ['30 h', 'saved every week'],
    tools: ['Acumatica', 'Velixo', 'Excel', 'Python'],
    problem: 'Standard client reports were assembled by hand every cycle.',
    process: ['Mapped the recurring report set and its Acumatica data sources.', 'Built report templates in Acumatica Report Designer and Velixo.', 'Added Python validation scripts to catch errors before delivery.'],
    findingsLabel: 'Results',
    findings: [['85% automated', 'Of standard client reports.'], ['30 hours a week', 'Of analyst time returned to forecasting and analysis.']],
    gallery: [], links: [],
  },
  {
    slug: 'flexcube-upgrade',
    title: 'Oracle Flexcube Core Upgrade',
    category: 'erp', featured: false,
    context: 'Professional Â· Eastern Bank PLC',
    date: '2021 â€“ 2022',
    summary: 'Represented the cards department in the bankâ€™s Oracle Flexcube upgrade, from requirements through UAT to go-live.',
    metric: ['UAT', 'owner for the cards department'],
    tools: ['Oracle Flexcube', 'UAT', 'BRD'],
    problem: 'A core banking upgrade had to keep card operations working exactly as before, or better.',
    process: ['Collected and documented departmental requirements.', 'Translated them into technical specifications for IT.', 'Ran user acceptance testing before go-live.'],
    findingsLabel: 'Role',
    findings: [['Requirements', 'Departmental needs written up as technical specifications.'], ['Testing', 'User acceptance testing to protect business continuity at go-live.']],
    gallery: [], links: [],
  },
  {
    slug: 'card-aml-controls',
    title: 'AML Controls for Foreign-Currency Card Spend',
    category: 'banking', featured: true,
    context: 'Professional Â· Eastern Bank PLC',
    date: '2022',
    summary: 'System-level restrictions on foreign-currency card transactions using parameters such as Merchant Category Codes.',
    metric: ['30M+', 'transactions verified'],
    tools: ['PowerCARD', 'Excel', 'AML rules'],
    problem: 'Foreign-currency card spend carried money-laundering risk that manual review could not keep up with.',
    process: ['Analysed transaction patterns across the card portfolio.', 'Defined restriction parameters, including Merchant Category Codes.', 'Implemented the restrictions at system level with IT and Compliance.'],
    findingsLabel: 'Results',
    findings: [['30M+ transactions', 'Verified with analytics-based AML checks.'], ['System-level controls', 'Restrictions enforced by MCC and other parameters, not manual review.']],
    gallery: [], links: [],
  },
  {
    slug: 'regulatory-reporting',
    title: 'Regulatory & Card-Scheme Report Automation',
    category: 'banking', featured: false,
    context: 'Professional Â· Eastern Bank PLC',
    date: '2019 â€“ 2023',
    summary: 'Automated daily-to-annual reports for the regulator, tax authority, card schemes and internal control, plus billing for six Visa associate members.',
    metric: ['7', 'recurring reports automated'],
    tools: ['Excel', 'MS Access', 'Regulatory reporting'],
    problem: 'Seven recurring reports went to Bangladesh Bank, the income tax authority, Visa, Mastercard, Discover, UnionPay and internal audit, each with its own format and deadline.',
    process: ['Standardised report formats and parameters for each recipient.', 'Automated daily, weekly, monthly, quarterly and annual runs.', 'Ran the billing lifecycle for six Visa associate members with Gantt-based tracking, from invoice to payment.'],
    findingsLabel: 'Results',
    findings: [['7 reports', 'Automated for regulators, schemes and internal control.'], ['6 members billed', 'Visa associate-member billing tracked end to end.']],
    gallery: [], links: [],
  },
  {
    slug: 'emi-automation',
    title: 'EMI & Vendor-Payment Automation',
    category: 'banking', featured: false,
    context: 'Professional Â· Eastern Bank PLC',
    date: '2021',
    summary: 'Revamped credit card EMI processing and centralised vendor billing, from requisition to payment authorisation.',
    metric: ['2', 'processes rebuilt'],
    tools: ['BRD', 'Process mapping'],
    problem: 'EMI conversions and vendor payments ran through manual, fragmented steps that were slow and error-prone.',
    process: ['Drafted business requirement documents for the EMI revamp.', 'Centralised requisitions, purchase orders and quotation re-checks.', 'Added bill verification and payment authorisation steps.'],
    findingsLabel: 'What changed',
    findings: [['EMI processing', 'Revamped with documented requirements and clear task ownership.'], ['Vendor payments', 'One centralised flow from requisition to authorised payment.']],
    gallery: [], links: [],
  },
  {
    slug: 'sap-s4hana-configuration',
    title: 'SAP S/4HANA: FI, MM & SD Configuration',
    category: 'erp', featured: true,
    context: 'MS coursework Â· Walton College of Business',
    date: '2023 â€“ 2024',
    summary: 'A company configured from scratch in SAP S/4HANA, then tested through procure-to-pay and order-to-cash, including returns.',
    metric: ['17', 'configuration stages'],
    tools: ['SAP S/4HANA', 'FI', 'MM', 'SD'],
    problem: 'Understand how finance, materials management and sales are wired together inside an ERP, by building it.',
    process: ['Company code, chart of accounts, fiscal year variant and credit control area (OX02, OB13, OB37, OB45).', 'Plants, storage locations, purchasing organisation and group (OX10, OX09, OX08, OME4).', 'GL accounts, posting periods, tolerance groups and document numbering (FS00, OB52, OBA4, OBH1).', 'Vendor and material masters, MRP activation and automatic postings (BP, MM01, OMDU, OMWB).', 'Procure-to-pay test: purchase order, goods receipt, invoice receipt (ME21N, MIGO, MIRO).', 'Sales org, shipping points, pricing procedure and account determination (OVX5, OVXD, OVKK, VKOA).', 'Order-to-cash: order, delivery, billing, payment, returns and refund (VA02, VL01N, VF01, F-28, F-31).'],
    findingsLabel: 'Coverage',
    findings: [['Three modules', 'FI, MM and SD configured and integrated.'], ['Two end-to-end flows', 'Procure-to-pay and order-to-cash tested, including returns.']],
    gallery: [], links: [{ label: 'Full walkthrough on Google Sites', href: SITE + 'sap-configuration' }],
  },
  {
    slug: 'sql-market-intelligence',
    title: 'SQL Server Market-Intelligence Engine',
    category: 'bi', featured: true,
    context: 'MS coursework Â· UA_HALLUX database',
    date: '2023 â€“ 2024',
    summary: 'From CTEs and window functions to a scheduled stored procedure feeding a live Tableau view, on the courseâ€™s music-industry database.',
    cover: im('sql-window', 1016, 712, 'Window-function query and results in SQL Server Management Studio'),
    tools: ['SQL Server', 'T-SQL', 'SQL Agent', 'Python', 'pyodbc', 'Tableau'],
    problem: 'Answer market questions (where revenue comes from, which agents and bands perform) and keep the answers fresh without manual reruns.',
    process: ['CTE-based query merging retail and live-performance revenue by Arkansas city with a FULL OUTER JOIN.', 'UNION ALL market report: national benchmarks, state share, band ROI, agent revenue per salary dollar.', '20 temporary tables for KPIs from customer lifetime value to album release velocity.', '25 window functions: running totals, RANK/NTILE, LAG/LEAD, market share, STDEV.', 'Stored procedure usp_Auto_Market_Pulse building an Analytics_Snapshot, scheduled by a SQL Agent job every 5 minutes.', 'Designed a Python-to-SQL Server ingestion layer and a unified view for a live Tableau connection.'],
    findingsLabel: 'What was built',
    findings: [['Market classifier', 'Cities labelled performance-driven, retail-driven or balanced.'], ['25 window functions', 'Trends, rankings, momentum and market share in one pass.'], ['Self-refreshing', 'A stored procedure and SQL Agent job keep the snapshot current every 5 minutes.'], ['Honest scope', 'The ingestion script was designed for ten APIs; the documented version wires two.']],
    gallery: [im('sql-window', 1016, 712, 'Window-function query and results', 'Window functions'), im('sql-union', 1074, 833, 'UNION ALL market report query and results', 'UNION ALL market report'), im('sql-lag', 973, 837, 'LAG-based revenue momentum query', 'Revenue momentum with LAG')],
    links: [{ label: 'Queries on Google Sites', href: SITE + 'sql' }],
  },
  {
    slug: 'gradhub-azure-devops',
    title: 'GradHub: Azure DevOps Team Project',
    category: 'erp', featured: false,
    context: 'MS coursework Â· team F23-P3',
    date: 'Fall 2023',
    summary: 'A planned platform helping international students prepare for graduate study in the US, run as an Agile project in Azure DevOps.',
    cover: im('gradhub-1', 1280, 1129, 'Azure DevOps dashboard with burndown, burnup and velocity charts'),
    tools: ['Azure DevOps', 'Agile', 'Scrum'],
    problem: 'International students arriving in the US piece together housing, budgeting, recreation and food information from scattered sources.',
    process: ['Scoped features: text and email updates, a budget calculator, 3D apartment tours, metaverse experiences.', 'Explicitly excluded payment gateways, card payments and a mobile app interface.', 'Managed the backlog, sprints and burndown in Azure DevOps.'],
    findingsLabel: 'Project goals',
    findings: [['Timely information', 'Housing, finance and budget, parks and recreation, food and culture.'], ['Student finances', 'Scholarship discovery and expense tracking.'], ['Agile delivery', 'Five sprints tracked with burndown, burnup and velocity.']],
    gallery: [im('gradhub-1', 1280, 1129, 'Azure DevOps team dashboard', 'Team dashboard'), im('gradhub-2', 1280, 607, 'Azure DevOps work items list', 'Work items')],
    links: [{ label: 'Project page on Google Sites', href: SITE + 'project-management' }],
  },
  {
    slug: 'medical-charges-statistics',
    title: 'Medical Charges & Wine Quality Statistics',
    category: 'ml', featured: false,
    context: 'MS coursework Â· applied statistics',
    date: '2023 â€“ 2024',
    summary: 'Hypothesis tests on insurance charges and a regression model for wine quality, with a user-input prediction function.',
    cover: im('stat-scatter', 745, 526, 'Scatter plot of medical charges against age'),
    tools: ['Python', 'SciPy', 'statsmodels', 'scikit-learn', 'Seaborn'],
    problem: 'Which patient attributes significantly affect medical charges and BMI, and can wine quality be predicted from its chemistry?',
    process: ['Explored insurance.csv: distributions, skewness, outliers and encoded pairplots.', 'Ran independent t-tests, a chi-square test and a one-way ANOVA.', 'Wine data: one-hot encoded type, 60/40 split, LinearRegression and statsmodels OLS.', 'Compared OLS models with and without the â€œrecommendâ€ variable on validation error.'],
    findingsLabel: 'Findings',
    findings: [['Smoking drives charges', 'Smokersâ€™ charges differ significantly from non-smokersâ€™ (p â‰ˆ 8e-283).'], ['Gender and BMI', 'No significant difference in BMI between men and women (p = 0.09).'], ['Children and BMI', 'Number of children has no significant effect on womenâ€™s BMI (p = 0.716).']],
    gallery: [im('stat-scatter', 745, 526, 'Medical charges against age', 'Charges by age'), im('stat-heatmap', 845, 696, 'Correlation heatmap of wine attributes', 'Wine attribute correlations')],
    links: [{ label: 'Analysis on Google Sites', href: SITE + 'analytics/statistical-analytics' }],
  },
  {
    slug: 'supervised-learning',
    title: 'Fuel Economy & Diabetes Prediction',
    category: 'ml', featured: false,
    context: 'MS coursework Â· supervised learning',
    date: '2023 â€“ 2024',
    summary: 'Linear regression for car fuel economy and logistic regression for diabetes, from data cleaning to evaluation.',
    cover: im('mpg-heatmap', 983, 586, 'Correlation heatmap of auto-mpg variables'),
    tools: ['Python', 'scikit-learn', 'pandas', 'Seaborn'],
    problem: 'Predict miles per gallon from car attributes, and classify patients as diabetic or not from clinical measures.',
    process: ['auto-mpg: replaced â€œ?â€ horsepower values with the median and one-hot encoded origin.', '70/30 split; linear regression with coefficient inspection and a user-input predictor.', 'Diabetes: histograms, correlation and KDE pair plots, 80/20 split, liblinear logistic regression.', 'Evaluated with a confusion-matrix heatmap.'],
    findingsLabel: 'Results',
    findings: [['RÂ² 84%', 'Linear regression on the auto-mpg test set, MAE 2.35 mpg.'], ['77% accuracy', 'Logistic regression classifying diabetic patients.']],
    gallery: [im('mpg-heatmap', 983, 586, 'Correlation heatmap of auto-mpg variables', 'auto-mpg correlations'), im('mpg-pairplot', 943, 770, 'Pair plot of auto-mpg variables', 'auto-mpg pair plot'), im('diabetes-cm', 849, 572, 'Confusion matrix for the diabetes model', 'Diabetes confusion matrix')],
    links: [{ label: 'Notebooks on Google Sites', href: SITE + 'machine-learning/supervised-learning' }],
  },
  {
    slug: 'vehicle-pca-svm',
    title: 'Bus, Van or Car? PCA + SVM',
    category: 'ml', featured: false,
    context: 'MS coursework Â· unsupervised learning',
    date: '2023 â€“ 2024',
    summary: 'Classifying vehicle silhouettes from 18 shape features, with and without principal component analysis.',
    cover: im('pca-boxplot', 1280, 797, 'Box plots of the 18 vehicle shape features'),
    tools: ['Python', 'scikit-learn', 'SciPy', 'Seaborn'],
    problem: 'Eighteen correlated shape features: can PCA compress them without losing classification accuracy?',
    process: ['Median imputation, z-score scaling, IQR outlier removal and label encoding.', 'PCA with cumulative explained-variance analysis.', 'Support vector classifier trained on the original and PCA-transformed data.', 'Compared confusion matrices and classification reports.'],
    findingsLabel: 'Findings',
    findings: [['95% weighted precision', 'SVM on the original features.'], ['A real trade-off', 'PCA improved van precision but classified fewer vehicles correctly overall (237 vs 243).']],
    gallery: [im('pca-boxplot', 1280, 797, 'Box plots of vehicle features', 'Feature distributions'), im('pca-variance', 374, 257, 'Cumulative explained variance step plot', 'Cumulative explained variance'), im('pca-cm', 355, 254, 'Confusion matrix of the SVM on PCA components', 'Confusion matrix (PCA)')],
    links: [{ label: 'Notebook on Google Sites', href: SITE + 'machine-learning/unsupervised-learning' }],
  },
  {
    slug: 'power-bi-dashboards',
    coverCarousel: true,
    title: 'Power BI Dashboard Collection',
    category: 'bi', featured: true,
    context: 'Independent Â· practice dashboards',
    date: '2023 â€“ 2024',
    summary: 'Six dashboards across healthcare, HR, streaming, sales budgeting and real estate.',
    cover: im('pbi-adventure', 1280, 700, 'Adventure Works sales budget dashboard in Power BI'),
    tools: ['Power BI', 'DAX', 'Power Query'],
    problem: 'Turn very different datasets into dashboards a manager can read at a glance.',
    process: ['Modelled each dataset and built measures in Power BI.', 'Designed KPI summaries, filters and drill-downs per domain.'],
    findingsLabel: 'Dashboards',
    findings: [['Adventure Works', 'Sales versus budget.'], ['Hospital visits', 'Patient visit volumes and trends.'], ['IBM HR', 'Workforce and attrition metrics.'], ['Amazon Prime, Arizona housing, Buildout', 'Catalogue, property and demo dashboards.']],
    gallery: [im('pbi-adventure', 1280, 700, 'Adventure Works sales budget dashboard', 'Adventure Works sales & budget'), im('pbi-hospital', 1280, 703, 'Hospital visit dashboard', 'Hospital visits'), im('pbi-ibm-hr', 1280, 716, 'IBM human resources dashboard', 'IBM human resources'), im('pbi-prime', 1280, 713, 'Amazon Prime movies and series dashboard', 'Amazon Prime catalogue'), im('pbi-arizona', 1280, 700, 'Arizona housing dashboard', 'Arizona housing'), im('pbi-buildout', 1280, 715, 'Buildout demo dashboard', 'Buildout demo')],
    links: [{ label: 'Gallery on Google Sites', href: SITE + 'visualization/powerbi-dashboard' }],
  },
  {
    slug: 'tableau-dashboards',
    coverCarousel: true,
    title: 'Tableau Dashboard Collection',
    category: 'bi', featured: false,
    context: 'Independent Â· practice dashboards',
    date: '2023 â€“ 2024',
    summary: 'Four Tableau dashboards: Netflix, Adidas sales, Olympic history and Breaking Bad.',
    cover: im('tab-netflix', 1224, 717, 'Netflix dashboard in Tableau'),
    tools: ['Tableau'],
    problem: 'Practise Tableau layout, maps and storytelling on public datasets.',
    process: ['Built four dashboards with distinct layouts, maps and chart types.'],
    findingsLabel: 'Dashboards',
    findings: [['Netflix', 'Catalogue by type, country and year.'], ['Adidas', 'Sales by product, region and method.'], ['Olympics', 'Medal history.'], ['Breaking Bad', 'Episode and character analysis.']],
    gallery: [im('tab-netflix', 1224, 717, 'Netflix dashboard', 'Netflix'), im('tab-adidas', 1280, 661, 'Adidas sales dashboard', 'Adidas sales'), im('tab-olympic', 1280, 661, 'Olympic dashboard', 'Olympics'), im('tab-breakingbad', 1280, 717, 'Breaking Bad dashboard', 'Breaking Bad')],
    links: [{ label: 'Gallery on Google Sites', href: SITE + 'visualization/tableau-dashboard' }],
  },
  {
    slug: 'uber-trip-analytics',
    title: 'Uber Trip Analytics',
    category: 'ml', featured: false,
    context: 'Independent Â· Python exploratory analysis',
    date: '2023',
    summary: 'A year of Uber trips (2016) cleaned and explored to find when, why and where people ride.',
    cover: im('uber-hours', 758, 387, 'Bar chart of Uber trips by hour of day'),
    tools: ['Python', 'pandas', 'Matplotlib', 'Seaborn'],
    problem: 'What patterns hide in a year of personal ride data?',
    process: ['Loaded â€œUber Drives.csvâ€, profiled it and dropped rows with missing values.', 'Converted start and end dates; extracted hour, day, weekday and month.', 'Plotted trips by category, hour, purpose, weekday, day and month.'],
    findingsLabel: 'Findings',
    findings: [['Peak hour', '2 PM.'], ['Main purpose', 'Meetings.'], ['Busiest weekday', 'Friday.'], ['Busiest month', 'December.']],
    gallery: [im('uber-hours', 758, 387, 'Trips by hour of day', 'Trips by hour'), im('uber-purpose', 755, 547, 'Pie chart of trip purposes', 'Trip purposes'), im('uber-days', 805, 381, 'Trips by day of the month', 'Trips by day')],
    links: [{ label: 'Analysis on Google Sites', href: SITE + 'analytics/business-analytics' }],
  },
  {
    slug: 'python-visualization',
    title: 'Visualization with Python',
    category: 'ml', featured: false,
    context: 'Independent Â· library comparison',
    date: '2023',
    summary: 'One PokÃ©mon dataset drawn fourteen ways across Matplotlib, Seaborn, Bokeh and Plotly Express.',
    cover: im('py-polar', 1280, 888, 'Polar bar chart of totals by type'),
    tools: ['Python', 'Plotly Express', 'Seaborn', 'Matplotlib', 'Bokeh'],
    problem: 'Learn what each Python plotting library does best by charting one dataset many ways.',
    process: ['Plotly Express: 2D and 3D scatter, violin, sunburst and polar bar.', 'Seaborn: joint plots, pair plot, box plot, correlation heatmap and distribution plot.'],
    findingsLabel: 'Charts',
    findings: [['Interactive', 'Plotly Express for 3D scatter, sunburst and polar charts.'], ['Statistical', 'Seaborn for joint, pair, box and distribution plots.']],
    gallery: [im('py-polar', 1280, 888, 'Polar bar chart', 'Polar bar'), im('py-3d', 1280, 719, '3D scatter of HP, attack and defence', '3D scatter'), im('py-violin', 1280, 720, 'Violin chart of totals by generation', 'Violin'), im('py-sunburst', 846, 801, 'Sunburst of type and legendary status', 'Sunburst'), im('py-heatmap', 772, 831, 'Correlation heatmap', 'Correlation heatmap')],
    links: [{ label: 'Charts on Google Sites', href: SITE + 'visualization/viz-with-python' }],
  },
];

// â”€â”€ Section copy â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const copy = {
  workTitle: 'The work, case by case.',
  workSub: 'Client and employer projects, MS coursework and independent practice. Each label says which, and each one opens into a full case study.',
  allCardNote: 'Filter by ERP, BI, machine learning or banking.',
  indexLede: 'Professional projects from 3Value and Eastern Bank, MS coursework from the University of Arkansas, USA, and independent practice. The context line on each card says which.',
  searchPlaceholder: 'Search: Power BI, Acumatica, SQLâ€¦',
  contactLede: 'ERP upgrades, BI and reporting, forecasting, or a question about one of the projects. Email is the fastest way to reach me.',
  formPlaceholder: 'Role, project, questionâ€¦',
  resumeLede: 'Two pages: profile, experience, education, skills, selected projects and certifications.',
};
