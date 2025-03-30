function solve(array) {
    let numberAstronauts = array[0];
    let object = {}
    for (let i = 1; i <= numberAstronauts; i++) {
        let [astronautName, spacecraftSection, skills] = array[i].split(' ');
        object[astronautName] = {'sections': spacecraftSection, 'skills': skills.split(',')}
    }

    let j = Number(numberAstronauts) + 1;

    while (array[j] != 'End') {
        if (array[j].split(' / ')[0] == 'Perform') {
            let [perform, currAstronautName, section, skill] = array[j].split(' / ');

            if (currAstronautName in object) {
                if (object[currAstronautName]['sections'].includes(section) && object[currAstronautName]['skills'].includes(skill)) {
                    console.log(`${currAstronautName} has successfully performed the skill: ${skill}!`);
                } else {
                    console.log(`${currAstronautName} cannot perform the skill: ${skill}.`);
                }
            }

        } else if (array[j].split(' / ')[0] == 'Transfer') {
            let [transfer, currAstronautName, newSection] = array[j].split(' / ');
            if (currAstronautName in object) {
                object[currAstronautName]['sections'] = newSection;
                console.log(`${currAstronautName} has been transferred to: ${newSection}`);
            }

        } else {
            let [learnSkill, currAstronautName, newSkill] = array[j].split(' / ');

            if (currAstronautName in object) {
                if (object[currAstronautName]['skills'].includes(newSkill)) {
                    console.log(`${currAstronautName} already knows the skill: ${newSkill}.`);
                } else {
                    object[currAstronautName]['skills'].push(newSkill);
                    console.log(`${currAstronautName} has learned a new skill: ${newSkill}.`);
                }
            }
        }
        j++;
    }

    let entries = Object.entries(object);

    for (let [name, value] of entries) {
        let sortedSkills = value['skills'].sort((a, b) => a.localeCompare(b)).join(', ');

        console.log(`Astronaut: ${name}, Section: ${value['sections']}, Skills: ${sortedSkills}`);
    }
}

solve([ 

    "2", 
  
    "Alice command_module piloting,communications", 
  
    "Bob engineering_bay repair,maintenance", 
  
    "Perform / Alice / command_module / piloting", 
  
    "Perform / Bob / command_module / repair", 
  
    "Learn Skill / Alice / navigation", 
  
    "Perform / Alice / command_module / navigation", 
  
    "Transfer / Bob / command_module", 
  
    "Perform / Bob / command_module / maintenance", 
  
    "End" 
  
  ] );