function songs(arrOfStrings) {
    let songs = [];
    class Song {
        typeList;
        name;
        time;
        
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    
    let timesToIterate = arrOfStrings.shift();
    let typeList = arrOfStrings.pop();
    
    for (let string of arrOfStrings) {
        let [typeList, name, time] = string.split('_');
        
        let song = new Song(typeList, name, time);
        
        songs.push(song);
    }
    
    for (let song of songs) {
        if (typeList !== 'all') {
            if (song.typeList == typeList) {
                console.log(song.name);
            }
        } else {
            console.log(song.name);
        }
    }
}

songs([2,

    'like_Replay_3:15',
    
    'ban_Photoshop_3:48',
    
    'all'])