require("../db/index.js");
const Task = require("../models/Task.model.js");
const User = require("../models/User.model.js");
const Project = require("../models/Project.model.js");
//create data to seed

const tasks = [
  {
    title: "make the Exceltable of the project budget",
    description: " make the profit calculation of the year",
    status: "todo",
    startDate: new Date(),
  },
  {
    title: "Prepare presentation for stakeholders meeting",
    description: "Create slides and gather necessary data",
    status: "in progress",
    startDate: new Date(),
  },
  {
    title: "Review and finalize project proposal",
    description: "Review proposal document and make necessary revisions",
    status: "done",
    startDate: new Date(),
  },
  {
    title: "Schedule project kick-off meeting",
    description:
      "Coordinate with team members and stakeholders to set meeting date and agenda",
    status: "in progress",
    startDate: new Date(),
  },
  {
    title: "Conduct market research",
    description: "Gather data on market trends and competitors",
    status: "done",
    startDate: new Date(),
  },
  {
    title: "Implement user authentication system",
    description: "Develop login and registration functionality",
    status: "in progress",
    startDate: new Date(),
  },
  {
    title: "Write API documentation",
    description: "Document the endpoints and usage of the API",
    status: "todo",
    startDate: new Date(),
  },
  {
    title: "Test application on multiple devices",
    description:
      "Perform compatibility testing on various devices and browsers",
    status: "done",
    startDate: new Date(),
  },
  {
    title: "Optimize database queries",
    description: "Improve the performance of database queries",
    status: "in progress",
    startDate: new Date(),
  },
  {
    title: "Deploy application to production server",
    description: "Deploy the application to the live server environment",
    status: "todo",
    startDate: new Date(),
  },
  {
    title: "Set Up Database Backup Procedures",
    description:
      "Implement regular backup procedures for the database to ensure data integrity and availability",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Implement SSL Certificate",
    description:
      "Install and configure SSL certificate to enhance website security",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Configure Email Notifications",
    description:
      "Set up email notification system for user actions such as registration and password reset",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Optimize Landing Page Speed",
    description:
      "Optimize the load speed of the landing page to improve user experience and SEO rankings",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Develop User Authentication System",
    description:
      "Create a secure user authentication system that supports multi-factor authentication",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Create Content Management System",
    description:
      "Develop a custom content management system for easier content updates and management",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Upgrade Server Hardware",
    description:
      "Upgrade the server hardware to handle increased traffic and improve performance",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Integrate Third-party APIs",
    description:
      "Integrate external APIs to add functionality such as maps and payment services",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Perform Security Audit",
    description:
      "Conduct a comprehensive security audit to identify and rectify vulnerabilities",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Establish Disaster Recovery Plan",
    description:
      "Develop and document a disaster recovery strategy to minimize downtime in emergency situations",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Launch Marketing Campaign",
    description:
      "Prepare and launch a digital marketing campaign to promote the new application features",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Implement Data Encryption",
    description:
      "Encrypt sensitive data at rest and in transit to protect user information",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Setup Continuous Integration",
    description:
      "Set up a continuous integration pipeline to automate the testing and deployment of code changes",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Optimize Database Queries",
    description:
      "Review and optimize database queries to improve application performance",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Conduct User Acceptance Testing",
    description:
      "Carry out user acceptance testing to ensure the application meets business requirements and user expectations",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Update Privacy Policy",
    description:
      "Revise the privacy policy to comply with new regulations and ensure transparency",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Design Mobile Application",
    description:
      "Create a mobile version of the application to enhance accessibility and increase user engagement",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Refactor Legacy Code",
    description:
      "Refactor old, inefficient code to improve maintainability and performance",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Expand Product Catalogue",
    description:
      "Update and expand the online product catalogue with new items and categories",
    status: "todo",
    startDate: new Date(),
  },

  {
    title: "Integrate Machine Learning Models",
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
