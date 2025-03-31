function solve(arr) {
    let nToIterate = Number(arr[0]);

    arr = arr.slice(1);

    let farmers = {};
    for (let i = 0; i < nToIterate; i++) {
        let [farmerName, workArea, tasks] = arr.shift().split(' ');
        farmers[farmerName] = {'workArea': [workArea], 'tasks': tasks.split(',')};
    }

    let j = 0;
    while (arr[j] != 'End') {
        if (arr[j].split(' / ')[0] == 'Execute') {
            let [command, farmerName, workArea, task] = arr[j].split(' / ');
            
            if (farmerName in farmers) {
                if (farmers[farmerName]['workArea'].includes(workArea) && farmers[farmerName]['tasks'].includes(task)) {
                    console.log(`${farmerName} has executed the task: ${task}!`);
                } else {
                    console.log(`${farmerName} cannot execute the task: ${task}.`);
                }
            }
        } else if (arr[j].split(' / ')[0] == 'Change Area') {
            let [command, farmerName, newWorkArea] = arr[j].split(' / ');

            if (farmerName in farmers) {
                farmers[farmerName]['workArea'].shift();
                farmers[farmerName]['workArea'].push(newWorkArea);
                console.log(`${farmerName} has changed their work area to: ${newWorkArea}`);
            }

        } else {
            let [command, farmerName, newTask] = arr[j].split(' / ');

            if (farmerName in farmers) {
                if (farmers[farmerName]['tasks'].includes(newTask)) {
                    console.log(`${farmerName} already knows how to perform ${newTask}.`);
                } else {
                    farmers[farmerName]['tasks'].push(newTask);
                    console.log(`${farmerName} has learned a new task: ${newTask}.`);
                }
            }
        }

        j++;
    }

    let entries = Object.entries(farmers);

    for (let [name, areaWorkGarden] of entries) {
        let sortedTasks = areaWorkGarden['tasks'].sort((a, b) => a.localeCompare(b)).join(', ');
        console.log(`Farmer: ${name}, Area: ${areaWorkGarden['workArea']}, Tasks: ${sortedTasks}`);
    }
}

solve([ 

    "2", 
  
    "John garden watering,weeding", 
  
    "Mary barn feeding,cleaning", 
  
    "Execute / John / garden / watering", 
  
    "Execute / Mary / garden / feeding", 
  
    "Learn Task / John / planting", 
  
    "Execute / John / garden / planting", 
  
    "Change Area / Mary / garden", 
  
    "Execute / Mary / garden / cleaning", 
  
    "End" 
  
  ])