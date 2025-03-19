const handleCommands = (command) => {
  const params = command.split(" ");
  switch (params[0]) {
    case "add":
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
    case "help":
      break;
    default:
      console.log(`"${params[0]}" is not a command, type "help" for support`);
      break;
  }
};

const taskStatus = {
  0: "To Do",
  1: "In progress",
  2: "Done",
};

const addTask = (description) => {
  const lastId = tasks[tasks.length].id;
  const task = {
    id: lastId + 1,
    description: description,
    status: taskStatus[0],
    createdAt: `${new Date().getDate()} - ${new Date().getTime()}`,
    updatedAt: this.createdAt,
  };
};

const initLoad = () => {
  return [];
};

let tasks = initLoad();

function main() {
  while (true) {
    let command = "";
    // Read command
    if (command.split(" ")[0] === "exit") return;
    // Handle Command
    handleCommands(command);
  }
}

main();
