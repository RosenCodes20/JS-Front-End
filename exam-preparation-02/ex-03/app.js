function solve() {
    let addWorkout = document.getElementById('add-workout');
    let workout = document.getElementById('workout'); 
    let location = document.getElementById('location');
    let date = document.getElementById('date');
    let url = 'http://localhost:3030/jsonstore/workout';
    let loadWorkout = document.getElementById('load-workout');
    let list = document.getElementById('list');
    let editWorkoutBtn = document.getElementById('edit-workout');
    loadWorkout.addEventListener('click', handleClickingLoadWorkout);
    addWorkout.addEventListener('click', handleClickingAddWorkoutBtn);
    list.innerHTML = '';
    async function handleClickingLoadWorkout() {
        list.replaceChildren();
        let res = await fetch(url);
        let data = await res.json();
        let values = Object.values(data);

        for (let value of values) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('container');
            
            let newH2 = document.createElement('h2');
            
            newH2.textContent = value.workout;
            
            let newH3 = document.createElement('h3');
            newH3.textContent = value.date;
            
            let newH4 = document.createElement('h4');
            newH4.textContent = value.location;
            newH4.id = 'location';
            
            newDiv.appendChild(newH2);
            newDiv.appendChild(newH3);
            newDiv.appendChild(newH4);
            
            let buttonsDiv = document.createElement('div');
            buttonsDiv.id = 'buttons-container';
            
            let btn1 = document.createElement('button');
            btn1.classList.add('change-btn');
            btn1.textContent = 'Change';
            
            let btn2 = document.createElement('button');
            btn2.classList.add('delete-btn');
            btn2.textContent = 'Done';
            
            buttonsDiv.appendChild(btn1);
            buttonsDiv.appendChild(btn2);
            
            newDiv.appendChild(buttonsDiv);
            list.appendChild(newDiv);
            
            btn1.addEventListener('click', handleClickingChangeBtn);
            btn2.addEventListener('click', handleClickingDoneBtn)
            
            async function handleClickingChangeBtn(e) {
                let workoutValue = e.target.parentElement.parentElement.children[0].textContent;
                let locationValue = e.target.parentElement.parentElement.children[2].textContent;
                let dateValue = e.target.parentElement.parentElement.children[1].textContent;

                workout.value = workoutValue;
                location.value = locationValue;
                date.value = dateValue;

                e.target.parentElement.parentElement.remove();
                addWorkout.disabled = true;
                editWorkoutBtn.disabled = false;
                editWorkoutBtn.addEventListener('click', handleClickingEditBtn);
                async function handleClickingEditBtn() {
                    console.log(workout.value)
                    let object = {
                        'workout': workout.value,
                        'location': location.value,
                        'date': date.value
                    }
                    
                    let options = {
                        method: 'PUT',
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(object)
                    };

                    let res = await fetch('http://localhost:3030/jsonstore/workout/' + value._id, options);
                    handleClickingLoadWorkout();
                    addWorkout.disabled = false;
                    editWorkoutBtn.disabled = true;
                    
                    workout.value = '';
                    location.value = '';
                    date.value = '';
                }
            }
            
            async function handleClickingDoneBtn(e) {
                let options = {
                    'method': 'delete',
                }
                let res = await fetch('http://localhost:3030/jsonstore/workout/' + value._id, options);
                e.target.parentElement.parentElement.remove();
            }
        }
    }
    
    async function handleClickingAddWorkoutBtn() {
        let object = {
            'workout': workout.value,
            'location': location.value,
            'date': date.value,
        }
        
        let options = {
            method: 'post',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(object)
        };
        
        let res = await fetch(url, options);
        
        handleClickingLoadWorkout();
        
        workout.value = '';
        location.value = '';
        date.value = '';
    }
}

solve();