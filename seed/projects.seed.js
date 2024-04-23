require("../db/index.js");

const Project = require("../models/Project.model.js");
const User = require("../models/User.model.js");
const Task = require("../models/Task.model.js");

// const Task=require("../seed/"
const projects = [
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
