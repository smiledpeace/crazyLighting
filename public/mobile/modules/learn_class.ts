class Animal {
    protected name: string; // 可继承
    private age: number; // 可继承

    constructor(theName: string, theAge: number) {
        this.name = theName;
        this.age = theAge;
    }
}

class Dog extends Animal {

    public move () {
        console.log(this.name);
        console.log(111111);
    }
}

var myDog = new Dog('WangWang', 12);

myDog.move()