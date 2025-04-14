function solve(arr) {
    let nToIterate = arr[0];
    
    arr = arr.slice(1);

    let object = {};

    for (let i = 0; i < nToIterate; i++) {
        let [memberName, role, skills] = arr.shift().split(' ');

        object[memberName] = {role, 'skills': skills.split(',')};
    }

    let j = 0;

    while (arr[j] != 'End') {

        if (arr[j].split(' / ')[0] == 'Perform') {
            let [command, memberName, role, skill] = arr[j].split(' / ');

            if (object[memberName]['role'] == role && object[memberName]['skills'].includes(skill)) {
                console.log(`${memberName} has successfully performed the skill: ${skill}!`);
            } else {
                console.log(`${memberName} cannot perform the skill: ${skill}.`);
            }

        } else if (arr[j].split(' / ')[0] == 'Reassign') {
            let [command, memberName, newRole] = arr[j].split(' / ');

            object[memberName]['role'] = newRole;

            console.log(`${memberName} has been reassigned to: ${newRole}`);

        } else if (arr[j].split(' / ')[0] == 'Learn Skill') {
            let [command, memberName, newSkill] = arr[j].split(' / ');

            if (object[memberName]['skills'].includes(newSkill)) {
                console.log(`${memberName} already knows the skill: ${newSkill}.`);
            } else {
                object[memberName]['skills'].push(newSkill);
                console.log(`${memberName} has learned a new skill: ${newSkill}.`);
            }
        }

        j++;
    }

    let entries = Object.entries(object);

    for (let [key, value] of entries) {

        let sortedSkills = value['skills'].sort((a, b) => a.localeCompare(b)).join(', ');

        console.log(`Guild Member: ${key}, Role: ${value['role']}, Skills: ${sortedSkills}`);
    }
}

solve([ 

    "3", 
  
    "Arthur warrior swordsmanship,shield", 
  
    "Merlin mage fireball,teleport", 
  
    "Gwen healer healing,alchemy", 
  
    "Perform / Arthur / warrior / swordsmanship", 
  
    "Perform / Merlin / warrior / fireball", 
  
    "Learn Skill / Gwen / purification", 
  
    "Perform / Gwen / healer / purification", 
  
    "Reassign / Merlin / healer", 
  
    "Perform / Merlin / healer / teleport", 
  
    "End" 
  
  ] );