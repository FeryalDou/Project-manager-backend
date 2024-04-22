require("../db/index.js");
const Task = require("../models/Task.model.js");

//create data to seed

const tasks = [
  {
    user: new user(),
    title: "make the Exceltable of the project budget",
    description: " make the profit calculation of the year",
    status: "todo",
    startDate: new Date(),
  },
  {
    user: new user(),
    title: "Prepare presentation for stakeholders meeting",
    description: "Create slides and gather necessary data",
    status: "in progress",
    startDate: new Date(),
  },
  {
    user: new user(),
    title: "Review and finalize project proposal",
    description: "Review proposal document and make necessary revisions",
    status: "done",
    startDate: new Date(),
  },
  {
    user: new user(),
    title: "Schedule project kick-off meeting",
    description:
      "Coordinate with team members and stakeholders to set meeting date and agenda",
    status: "in progress",
    startDate: new Date(),
  },
  {
    user: new user(),
    title: "Conduct market research",
    description: "Gather data on market trends and competitors",
    status: "done",
    startDate: new Date(),
  },
  {
    user: new user(),
    title: "Implement user authentication system",
    description: "Develop login and registration functionality",
    status: "in progress",
    startDate: new Date(),
  },
  {
    user: new user(),
    title: "Write API documentation",
    description: "Document the endpoints and usage of the API",
    status: "todo",
    startDate: new Date(),
  },
  {
    user: new user(),
    title: "Test application on multiple devices",
    description:
      "Perform compatibility testing on various devices and browsers",
    status: "done",
    startDate: new Date(),
  },
  {
    user: new user(),
    title: "Optimize database queries",
    description: "Improve the performance of database queries",
    status: "in progress",
    startDate: new Date(),
  },
  {
    user: new user(),
    title: "Deploy application to production server",
    description: "Deploy the application to the live server environment",
    status: "todo",
    startDate: new Date(),
  },
];

//insert data into collection

async function seed() {
  try {
    await Task.deleteMany();
    const createdTask = await Task.create(tasks);
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
}
seed();
