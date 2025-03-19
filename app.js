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
