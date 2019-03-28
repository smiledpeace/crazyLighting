class Animal {
    protected name: string;

    constructor(theName: string) {
        this.name = theName;
    }
}

class Dog extends Animal {

    public move () {
        console.log(this.name);
    }
}

var myDog = new Dog('WangWang');

console.log(myDog.move());