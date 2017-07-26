class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = 'Open';
        this._isOverdue = false;
    }

    get status() {
        return this._status;
    }

    get isOverdue() {
        let now = new Date();
        if (this.status !== 'Complete' && (this.deadline.getTime() < now.getTime())) {
            return true;
        }

        return false;
    }

    set status(newStatus) {
        this._status = newStatus;
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        let dateNow = new Date();
        if (value.getTime() < dateNow.getTime()) {
            throw new Error();
        }

        this._deadline = value;
    }

    static comparator(firstTask, secondTask) {
        if (firstTask.isOverdue === true && secondTask.isOverdue === false)
            return -1;
        else if (secondTask.isOverdue === true && firstTask.isOverdue === false)
            return 1;
        else if (firstTask.isOverdue && secondTask.isOverdue)
            return firstTask.deadline > secondTask.deadline;

        if ((firstTask.status === 'In Progress') && (secondTask.status !== 'In Progress'))
            return -1;
        else if ((firstTask.status !== 'In Progress') && (secondTask.status === 'In Progress'))
            return 1;
        else if ((firstTask.status === 'In Progress') && (secondTask.status === 'In Progress'))
            return firstTask.deadline > secondTask.deadline;

        if ((firstTask.status === 'Open') && (secondTask.status !== 'Open'))
            return -1;
        else if ((firstTask.status !== 'Open') && (secondTask.status === 'Open'))
            return 1;
        else if ((firstTask.status === 'Open') && (secondTask.status === 'Open'))
            return firstTask.deadline > secondTask.deadline;

        if ((firstTask.status === 'Complete') && (secondTask.status !== 'Complete'))
            return -1;
        else if ((firstTask.status !== 'Complete') && (secondTask.status === 'Complete'))
            return 1;
        else if ((firstTask.status === 'Complete') && (secondTask.status === 'Complete'))
            return firstTask.deadline > secondTask.deadline;
    }

    toString() {
        let statusObj = {
            'Open': "\u2731",
            'In Progress': "\u219D",
            'Complete' : "\u2714",
            'Overdue': "\u26A0"
        };

        if (this.isOverdue)
            return `[${statusObj['Overdue']}] ${this.title} (overdue)`;

        return `[${statusObj[this.status]}] ${this.title} (deadline: ${this.deadline} )`;
    }
}

let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later

// should throw an Error
//let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
// should throw an Error
//task1.deadline = new Date(2005, '4', '20');
