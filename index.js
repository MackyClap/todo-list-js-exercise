function newTask (title, description) {
  const task = {
  title: title,
  description: description,
  complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  }; 
return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the shit out of the litter box");
const task2 = newTask("Do Laundry", "damn");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

// for now let's just make sure we see our tasks
console.log(tasks);
