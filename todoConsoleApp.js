const prompt = require("prompt-sync")({ sigint: true });

class TodoApp {
  constructor() {
    this.data = [];
  }

  currentDate() {
    const weekDayMonth = { weekday: "short", day: "numeric", month: "long" };
    const printDate = new Date().toLocaleDateString("en-uk", weekDayMonth);
    return printDate;
  }

  try() {
    console.log("------------------------------");
    console.log(`welcome to Learnable'22 todo app \n
        Select 1 to create a new task \n
        Select 2 to update a task \n
        Select 3 to delete a task \n
        Select 0 to exit from a task \n
                        `);
    console.log("---------------------------------------");
    const select = parseInt(prompt(" Kindly select a given option thanks...."));
    switch (select) {
      case 1:
          this.display()
          break;
      case 1:
        this.add();
        break;
      case 2:
        this.update(this.storage());
        break;
      case 3:
        this.delete(this.storage());
        break;
      case 4:
        this.exist(choice);
        break;
      default:
        this.try();
        break;
    }
  }

  add() {
    console.log("please enter your task.....");
    let input = prompt();
    this.data.push(input);
    this.try();
  }

  update(index) {
    var len = this.data.length - 1;
    if (len == 0) {
      console.log("No task to update");
    } else {
      console.log(this.data[index]);
      let input = prompt("Update your task..: ");
      this.data[index] = input;
    }
    this.try();
  }

  delete(index) {
    var len = this.data.length - 1;
    if (len == 0) {
      console.log("No task to delete");
    } else if (len < index || index < 0) {
      console.log("Wrong index");
    } else {
      this.data.splice(index, 1);
    }
    this.try();
  }

  display(){
      console.log(this.currentDate());
      console.log("--------------------");
      if(this.data.length < 1){
          console.log("You have no activity!.. Add One");
      }
      this.data.forEach((element,index) => {
          console.log(` ${index} ||| ${element}`);
      });
      console.log("--------------------");
      this.try()
  }

  exist(input) {
    if (input == 4) return;
  }

  storage() {
    if (this.data.length < 1) return -1;
    this.data.forEach((element, index) => {
      console.log(` ${index} ||| ${element}`);
    });
    let userInput = parseInt(prompt("Select an index:..: "));
    return userInput;
  }
}

todo = new TodoApp();
todo.try();
