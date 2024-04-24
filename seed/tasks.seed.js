require("../db/index.js");
const Task = require("../models/Task.model.js");
const User = require("../models/User.model.js");
const Project = require("../models/Project.model.js");
//create data to seed

const tasks = [
  {
    name: "Make the Exceltable of the project budget",
    description: "Make the profit calculation of the year",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Review Marketing Expenses",
    description: "Analyze and categorize marketing expenses for the quarter",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Prepare Quarterly Financial Report",
    description:
      "Compile financial data and create a report for the last quarter",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Conduct Cost-Benefit Analysis",
    description: "Evaluate the costs and benefits of a potential investment",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Audit Expense Reports",
    description:
      "Review and verify employee expense reports for accuracy and compliance",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Forecast Revenue for Next Quarter",
    description:
      "Use historical data to predict revenue for the upcoming quarter",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Update Project Budget Spreadsheet",
    description:
      "Incorporate new expenses and adjust budget projections accordingly",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Track Accounts Payable",
    description: "Monitor and manage payments owed to vendors and suppliers",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Prepare Profit and Loss Statement",
    description:
      "Generate a statement summarizing the company's revenues, costs, and expenses",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Implement Financial Dashboard",
    description:
      "Develop a dashboard for monitoring key financial metrics in real-time",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Conduct Cash Flow Analysis",
    description:
      "Examine the movement of cash in and out of the business over a specific period",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Optimize Budget Allocation",
    description:
      "Adjust budget allocations to maximize efficiency and achieve strategic goals",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Review Profit Margins",
    description:
      "Evaluate the profitability of products or services by analyzing profit margins",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Implement Expense Tracking System",
    description:
      "Set up a system to track and categorize all business expenses for better control",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Conduct Financial Risk Assessment",
    description:
      "Identify and assess potential financial risks that may impact the company",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Update Financial Policies",
    description:
      "Revise and update company policies related to financial management and control",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Optimize Accounts Receivable Process",
    description:
      "Streamline the process of managing and collecting outstanding customer payments",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Implement Internal Controls",
    description:
      "Establish internal controls to safeguard assets, ensure accuracy of financial records, and prevent fraud",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Conduct Financial Performance Analysis",
    description:
      "Analyze financial performance metrics to assess the company's overall financial health",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Review Tax Compliance",
    description:
      "Ensure compliance with tax laws and regulations by reviewing tax returns and documentation",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "make the Exceltable of the project budget",
    description: " make the profit calculation of the year",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Prepare presentation for stakeholders meeting",
    description: "Create slides and gather necessary data",
    status: "in progress",
    startDate: new Date(),
  },
  {
    name: "Review and finalize project proposal",
    description: "Review proposal document and make necessary revisions",
    status: "done",
    startDate: new Date(),
  },
  {
    name: "Schedule project kick-off meeting",
    description:
      "Coordinate with team members and stakeholders to set meeting date and agenda",
    status: "in progress",
    startDate: new Date(),
  },
  {
    name: "Conduct market research",
    description: "Gather data on market trends and competitors",
    status: "done",
    startDate: new Date(),
  },
  {
    name: "Implement user authentication system",
    description: "Develop login and registration functionality",
    status: "in progress",
    startDate: new Date(),
  },
  {
    name: "Write API documentation",
    description: "Document the endpoints and usage of the API",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Test application on multiple devices",
    description:
      "Perform compatibility testing on various devices and browsers",
    status: "done",
    startDate: new Date(),
  },
  {
    name: "Optimize database queries",
    description: "Improve the performance of database queries",
    status: "in progress",
    startDate: new Date(),
  },
  {
    name: "Deploy application to production server",
    description: "Deploy the application to the live server environment",
    status: "todo",
    startDate: new Date(),
  },
  {
    name: "Set Up Database Backup Procedures",
    description:
      "Implement regular backup procedures for the database to ensure data integrity and availability",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Implement SSL Certificate",
    description:
      "Install and configure SSL certificate to enhance website security",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Configure Email Notifications",
    description:
      "Set up email notification system for user actions such as registration and password reset",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Optimize Landing Page Speed",
    description:
      "Optimize the load speed of the landing page to improve user experience and SEO rankings",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Develop User Authentication System",
    description:
      "Create a secure user authentication system that supports multi-factor authentication",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Create Content Management System",
    description:
      "Develop a custom content management system for easier content updates and management",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Upgrade Server Hardware",
    description:
      "Upgrade the server hardware to handle increased traffic and improve performance",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Integrate Third-party APIs",
    description:
      "Integrate external APIs to add functionality such as maps and payment services",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Perform Security Audit",
    description:
      "Conduct a comprehensive security audit to identify and rectify vulnerabilities",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Establish Disaster Recovery Plan",
    description:
      "Develop and document a disaster recovery strategy to minimize downtime in emergency situations",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Launch Marketing Campaign",
    description:
      "Prepare and launch a digital marketing campaign to promote the new application features",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Implement Data Encryption",
    description:
      "Encrypt sensitive data at rest and in transit to protect user information",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Setup Continuous Integration",
    description:
      "Set up a continuous integration pipeline to automate the testing and deployment of code changes",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Optimize Database Queries",
    description:
      "Review and optimize database queries to improve application performance",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Conduct User Acceptance Testing",
    description:
      "Carry out user acceptance testing to ensure the application meets business requirements and user expectations",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Update Privacy Policy",
    description:
      "Revise the privacy policy to comply with new regulations and ensure transparency",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Design Mobile Application",
    description:
      "Create a mobile version of the application to enhance accessibility and increase user engagement",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Refactor Legacy Code",
    description:
      "Refactor old, inefficient code to improve maintainability and performance",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Expand Product Catalogue",
    description:
      "Update and expand the online product catalogue with new items and categories",
    status: "todo",
    startDate: new Date(),
  },

  {
    name: "Integrate Machine Learning Models",
    description:
      "Incorporate machine learning models to provide personalized recommendations and insights",
    status: "todo",
    startDate: new Date(),
  },
];

//insert data into collection

async function seed() {
  try {
    await Task.deleteMany();
    const user = await User.find();
    tasks.forEach((task) => {
      const randomId = Math.floor(Math.random() * user.length);
      task.user = user[randomId]._id;
    });
    const projects = await Project.find();
    tasks.forEach((task) => {
      const randomId = Math.floor(Math.random() * projects.length);
      task.project = projects[randomId]._id;
    });

    const createdTask = await Task.create(tasks);
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
}
seed();
