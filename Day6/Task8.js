// 8. Create a small Employee Manager CLI app using Node.js
/**
Accepts input from the terminal (readline or prompt-sync)

Add employee (name, age, role)

List all employees

Delete an employee by name 
 */
const readline = require('readline'); // help read input from terminal

const rl = readline.createInterface({
    input:process.stdin,  // read from input 
    output:process.stdout // write in terminal
});

let employees = [];

function showMenu(){
    console.log(`____ Employee Manager ____
        1. Add Employee
        2. List Employee
        3. Delete Employee
        4. Exit
        `);
        rl.question('Choose an option (1-4): ', handleMenu);
}

function handleMenu(choice){
    switch(choice.trim()){
        case '1':
            addEmployee();
            break;
        case '2' :
            listEmployee();
            break;
        case '3' :
            deleteEmployee();
            break;
        case '4' :
            console.log('Goodbye!');
            rl.close();
            break;
        default :
        console.log('Invalid choice. Try again.')
        showMenu();
    }
}

function addEmployee(){
    rl.question('Enter name: ', (name) => {
        rl.question('Enter age: ', (age) =>{
            rl.question('Enter role: ', (role) => {
                employees.push({name,age,role})
                console.log(`Added ${name} successfully`);
                showMenu();
            });
        });
    });
}

function listEmployee(){
    if(employees.length === 0){
        console.log('No employees found.');
    }else{
        console.log('\n---Employee List---');
        employees.forEach((emp,i) => {
            console.log(`${i+1}.${emp.name} | Age: ${emp.age} | ${emp.role}`);
        });
    }
    showMenu();
}

function deleteEmployee(){
    rl.question('Enter employee name to delete: ' ,(name) => {
      const index = employees.findIndex((e) => e.name.toLowerCase() === name.toLowerCase())
      if(index !== -1){
        employees.splice(index,1);
        console.log('Employee not found.')
      }
      showMenu();
    })
}
showMenu()