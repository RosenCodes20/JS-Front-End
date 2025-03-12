function movies(arrOfStrings) {
    
    function getMovieName(splittedString) {
        let keywordIndex = splittedString.includes('directedBy') ? splittedString.indexOf('directedBy') : splittedString.indexOf('onDate');
        return splittedString.slice(0, keywordIndex).join(' ');
    }
    
    object = {};
    for (let string of arrOfStrings) {
        
        let splittedString = string.split(' ');
        let slicedString = splittedString.slice(1);
        
        if (splittedString.includes('addMovie')) {
            let movieName = slicedString.join(' ');
            if (!movies[movieName]) {
                object[movieName] = {name: movieName}
            }
            
        } else if (splittedString.includes('directedBy')) {
            
            let movieName = getMovieName(splittedString);
            
            if (Object.hasOwn(object, movieName)) {
                let directorName = string.split(' ').slice(string.split(' ').indexOf('directedBy') + 1).join(' ');
                object[movieName]['director'] = directorName;
            }
            
        } else if (splittedString.includes('onDate')) {
            
            let movieName = getMovieName(splittedString);
            if (Object.hasOwn(object, movieName)) {
                let date = string.split(' ').slice(string.split(' ').indexOf('onDate') + 1).join(' ');
                object[movieName]['date'] = date
            }
        }
    }
    let values = Object.values(object);
    
    for (let value of values) {
        if (value.name && value.director && value.date) {
            console.log(JSON.stringify(value));
        }
    }
}

movies([
    
    'addMovie Fast and Furious',
    
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
]);