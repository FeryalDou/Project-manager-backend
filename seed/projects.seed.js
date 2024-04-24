require("../db/index.js");

const Project = require("../models/Project.model.js");
const User = require("../models/User.model.js");
const Task = require("../models/Task.model.js");

// const Task=require("../seed/"
const projects = [
  {
    name: "Project Management Software",
    description: "Developing software to plan, organize, and execute projects",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Team Collaboration Platform",
    description:
      "Building a platform to facilitate collaboration and communication among team members",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Productivity Enhancement Tool",
    description:
      "Creating a tool to enhance productivity and efficiency in the workplace",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Workflow Automation System",
    description:
      "Developing a system to automate repetitive tasks and streamline workflows",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Task Tracking Application",
    description:
      "Building an application to track and manage tasks across projects",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Knowledge Management Platform",
    description:
      "Creating a platform to centralize and organize knowledge within an organization",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Resource Allocation Software",
    description:
      "Developing software to allocate resources efficiently across projects",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Customer Support Ticketing System",
    description:
      "Building a system to manage customer support tickets and inquiries",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Sales Pipeline Management Tool",
    description:
      "Creating a tool to manage and track sales opportunities through the pipeline",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Training and Development Platform",
    description:
      "Developing a platform for employee training and professional development",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Bug Tracking System",
    description:
      "Building a system to track and manage software bugs and issues",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Feedback Collection App",
    description:
      "Creating an application to collect and analyze feedback from customers and stakeholders",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Quality Assurance Software",
    description:
      "Developing software to ensure the quality and reliability of products or services",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Data Analytics Dashboard",
    description:
      "Building a dashboard to visualize and analyze data for informed decision-making",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Marketing Campaign Management Tool",
    description:
      "Creating a tool to plan, execute, and analyze marketing campaigns",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Inventory Optimization System",
    description:
      "Developing a system to optimize inventory levels and reduce carrying costs",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Customer Relationship Portal",
    description:
      "Building a portal for customers to access account information, support, and resources",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Task Prioritization App",
    description:
      "Creating an application to help users prioritize tasks based on importance and urgency",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Document Collaboration Platform",
    description:
      "Developing a platform for real-time collaboration on documents and projects",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "planning work",
    description: "Creating a new platform for work organization",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Research and Development",
    description: "Conducting research and development for new features",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Marketing Campaign",
    description: "Launching a marketing campaign to promote the product",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Product Launch",
    description: "Preparing for the launch of a new product line",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Client Onboarding",
    description: "Onboarding new clients and setting up their accounts",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Website Redesign",
    description: "Redesigning the company website for better user experience",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Website Redesign",
    description: "Redesigning the company website for better user experience",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Product Launch",
    description: "Launching a new product line in the market",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Market Analysis",
    description: "Conducting analysis of market trends and competitors",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Client Onboarding System",
    description: "Developing a system to streamline client onboarding process",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Social Media Campaign",
    description: "Planning and executing a social media marketing campaign",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Online Booking System",
    description:
      "Developing an intuitive system for booking appointments and services online",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "HR Recruitment Portal",
    description:
      "Creating a portal to streamline the recruitment and hiring process",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "E-commerce Website",
    description:
      "Building a scalable e-commerce platform to sell products online",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "Real-time Analytics Dashboard",
    description:
      "Developing a dashboard for real-time monitoring of business KPIs",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "Mobile Payment Gateway",
    description: "Creating a secure and user-friendly mobile payment gateway",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Event Management System",
    description: "Building a comprehensive system to manage and promote events",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "Healthcare Patient Portal",
    description:
      "Developing a portal for patients to manage their medical information and appointments",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Education Learning Management System",
    description:
      "Creating an LMS to support online learning and content delivery",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "Supply Chain Management Software",
    description:
      "Building software to optimize supply chain operations and logistics",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "Cyber Security Monitoring Tool",
    description:
      "Developing a tool to monitor and alert on cybersecurity threats",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "Green Energy Management System",
    description: "Creating a system to manage and report on green energy usage",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "Smart City Infrastructure Platform",
    description:
      "Building a platform to manage smart city technologies and infrastructure",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "Retail Inventory Optimization Tool",
    description:
      "Developing a tool to optimize inventory levels and reduce waste in retail",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "Automated Reporting System",
    description:
      "Creating a system to automate financial and operational reporting",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "IoT Home Automation System",
    description:
      "Building a system to control and monitor home devices using IoT technology",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "AI-Powered Chatbot System",
    description: "Developing a smart chatbot for customer service and support",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "Augmented Reality Shopping App",
    description:
      "Creating an app to enhance online shopping experience using AR technology",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "Corporate Social Responsibility Tracker",
    description: "Building a system to track and report on CSR activities",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "Fitness Tracking Application",
    description:
      "Developing an application to track fitness activities and health metrics",
    startDate: new Date(),
    endDate: new Date(),
  },

  {
    name: "Virtual Reality Training Simulator",
    description:
      "Creating a VR simulator for training professionals in various industries",
    startDate: new Date(),
    endDate: new Date(),
  },
];
//insert data into collection

async function seed() {
  try {
    await Project.deleteMany();
    const user = await User.find();
    projects.forEach((project) => {
      const randomId = Math.floor(Math.random() * user.length);
      project.user = user[randomId]._id;
    });
    // const task = await Task.find();
    // projects.forEach((project) => {
    //   const randomId = Math.floor(Math.random() * task.length);
    //   project.task = task[randomId]._id;
    // });
    const createdProject = await Project.create(projects);
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
}
seed();
