var readline = require("readline");

const initLoad = () => {
  return [];
};

const taskStatus = {
  0: "To Do",
  1: "In progress",
  2: "Done",
};

let tasks = initLoad();
let currentId = 0;

const handleCommands = (command) => {
  const params = command.split(" ");
  switch (params[0]) {
    case "add":
      // Title - Description - Due - Status
      tasks.push(addTask(params[1], params[2], params[3], 0));
      break;
    case "update":
      break;
    case "delete":
      break;
    case "progress":
      break;
    case "done":
      break;
    case "list":
      break;
    case "show":
      for (let task of tasks) {
        console.log(
          `\n${taskStatus[task.status]} - ${task.title} \n ${task.description} \n Due: ${
            task.dueDate
          }\n\n`
        );
      }
      break;
    case "help":
      console.log(
        "Available commands: add, update, delete, progress, done, list, show, help, exit"
      );
      break;
    default:
      console.log(`"${params[0]}" is not a command, type "help" for support`);
      break;
  }
};

const addTask = (title, description, dueDate, status) => {
  return {
    id: currentId++,
    title: title,
    description: description.split("-").join(" "),
    dueDate: dueDate,
    status: status,
  };
};

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const askQuestion = () => {
    rl.question(`>_ `, (commandInput) => {
      const command = commandInput;
      if (command.split(" ")[0] === "exit") {
        rl.close();
        return;
      }

      handleCommands(command);
      askQuestion();
    });
  };

  askQuestion();
}

main();
