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
    const task = await Task.find();
    projects.forEach((project) => {
      const randomId = Math.floor(Math.random() * task.length);
      project.task = task[randomId]._id;
    });
    const createdProject = await Project.create(projects);
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
}
seed();
