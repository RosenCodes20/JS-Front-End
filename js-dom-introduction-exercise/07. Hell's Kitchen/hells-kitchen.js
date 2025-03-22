function solve() {
    let textArea = document.querySelector('#inputs textarea').value;
    let bestRestaurantP = document.querySelector('#bestRestaurant p');
    let bestRestaurantWorkers = document.querySelector('#workers p');
    
    textArea = JSON.parse(textArea);
    let object = {};
    let highestAverageSalary = Number.MIN_VALUE;
    
    let bestRestaurant = '';
    let bestRestaurantName = '';
    let bestSalary = 0;
    
    if (!textArea) {
        return;
    }
    
    for (let text of textArea) {
        let [name, employees] = text.split(' - ');
        
        let splittedEmployees = employees.split(', ');
        
        if (!(name in object)) {
            object[name] = {'employees': [], 'salaries': []};
        }
        
        for (let employee of splittedEmployees) {
            let [employeeName, salary] = employee.split(' ');
            salary = Number(salary);
            
            object[name]['employees'].push(employeeName);
            object[name]['salaries'].push(salary);
        }
        
        let sum = 0;
        
        for (let i = 0; i < object[name]['salaries'].length; i++) {
            sum += Number(object[name]['salaries'][i]);
        }
        
        let averageSalary = sum / object[name]['salaries'].length;
        
        if (averageSalary > highestAverageSalary) {
            highestAverageSalary = averageSalary;
            bestRestaurant = object[name];
            bestRestaurantName = name;
            
            bestSalary = Math.max(...object[name]['salaries']);

        } else if (bestRestaurant == object[name]) {
            highestAverageSalary = averageSalary;
        }
    }
    
    let employeesWithSalaries = bestRestaurant['employees'].map((employee, index) => {
        return { name: employee, salary: bestRestaurant['salaries'][index] };
    });
    
    employeesWithSalaries.sort((a, b) => b.salary - a.salary);
    let helpArr = [];
    bestRestaurantP.textContent = `Name: ${bestRestaurantName} Average Salary: ${highestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
    
    for (let i = 0; i < employeesWithSalaries.length; i++) {
        helpArr.push(`Name: ${employeesWithSalaries[i].name} With Salary: ${employeesWithSalaries[i].salary}`);
    }
    
    bestRestaurantWorkers.textContent = helpArr.join(' ');
}