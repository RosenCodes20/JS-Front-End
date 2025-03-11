function cats(arrOfStrings) {
    let cats = [];
    class Cat {
        name;
        age;

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    for (let string of arrOfStrings) {
        let [catName, catAge] = string.split(' ');

        let catClass = new Cat(catName, catAge);
        cats.push(catClass);
    }

    for (let cat of cats) {
        console.log(cat.meow());
    }
}

cats(['Mellow 2', 'Tom 5']);