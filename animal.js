// Question
// You have been invited and hired by your school's biological and life sciences faculty to use JavaScript
// to model a simple Classification for Kingdom Animalia.

// without backbone
    // Arthropoda - cold blooded

// with backbone
    // Fish - cold blooded
    // Amphobia - cold blooded
    // Reptiles - cold blooded
    // AVES - warm blooded
    // Mammals - warm blooded


// ANIMAL KINGDOM CLASS

class Animal {
    constructor(coldBlooded, withBackbone, animalClass) {
        // Abstraction:
        if (new.target === Animal) {
            throw new Error("Abstract class cannot be instantiated");
        }
        // Encapsulation (private properties):
        this._coldBlooded = coldBlooded;
        this._withBackbone = withBackbone;
        this._animalClass = animalClass;
    }

    // Abstraction
    getColdBlooded() {
        throw new Error("Abstract method 'sound' must be implemented");
    }
    getWithBackbone() {
        throw new Error("Abstract method 'sound' must be implemented");
    }
    sound() {
        throw new Error("Abstract method 'sound' must be implemented");
    }

    // Polymorphism
    move() {
        console.log("Animal is moving.");
    }
}


// Below are child classes using Inheritance

class Arthropoda extends Animal {
    constructor() {
        super("Cold blooded animals", "Have no backbone");
        this.animalClass = "Arthropoda";
    }
    
    // Abstraction
    getColdBlooded() {
        return this._coldBlooded;
    }
    getWithBackbone() {
        return this._withBackbone;
    }
    sound() {
        console.log("Arthropoda makes clicking sounds.");
    }
    
    // Polymorphism
    move() {
        console.log("Arthropoda is crawling.");
    }
}


class Fish extends Animal {
    constructor() {
        super("Cold blooded animals", "Have backbone");
        this.animalClass = "Fish";
    }
    
    // Abstraction
    getColdBlooded() {
        return this._coldBlooded;
    }
    getWithBackbone() {
        return this._withBackbone;
    }
    sound() {
        console.log("Fish makes bubbling sounds.");
    }

    // Polymorphism
    move() {
        console.log("Fish is swimming.");
    }
}


class Amphibia extends Animal {
    constructor() {
        super("Cold blooded animals", "Have backbone");
        this.animalClass = "Amphibia";
    }
    
    // Abstraction
    getColdBlooded() {
        return this._coldBlooded;
    }
    getWithBackbone() {
        return this._withBackbone;
    }
    sound() {
        console.log("Amphibia makes croaking sounds.");
    }

    // Polymorphism
    move() {
        console.log("Amphibia is hopping or swimming.");
    }
}


class Reptiles extends Animal {
    constructor() {
        super("Cold blooded animals", "Have backbone");
        this.animalClass = "Reptiles";
    }
    
    // Abstraction
    getColdBlooded() {
        return this._coldBlooded;
    }
    getWithBackbone() {
        return this._withBackbone;
    }
    sound() {
        console.log("Reptile hisses or growls.");
    }

    // Polymorphism
    move() {
        console.log("Reptile is crawling or slithering.");
    }
}


class Aves extends Animal {
    constructor() {
        super("Warm blooded animals", "Have backbone");
        this.animalClass = "Aves";
    }
    
    // Abstraction
    getColdBlooded() {
        return this._coldBlooded;
    }
    getWithBackbone() {
        return this._withBackbone;
    }
    sound() {
        console.log("Bird sings or chirps.");
    }

    // Polymorphism
    move() {
        console.log("Bird is flying.");
    }
}


class Mammals extends Animal {
    constructor() {
        super("Warm blooded animals", "Have backbone");
        this.animalClass = "Mammals";
    }
    
    // Abstraction
    getColdBlooded() {
        return this._coldBlooded;
    }
    getWithBackbone() {
        return this._withBackbone;
    }
    sound() {
        console.log("Mammal makes various sounds.");
    }

    // Polymorphism
    move() {
        console.log("Mammal is walking or running.");
    }
}


// Example usage
const spiders = new Arthropoda();
const salmons = new Fish();
const frogs = new Amphibia();
const turtles = new Reptiles();
const eagles = new Aves();
const elephants = new Mammals();
   

console.log(`Spiders (${spiders.animalClass}): ${spiders.getColdBlooded()} and ${spiders.getWithBackbone()}`);
console.log(`Salmons (${salmons.animalClass}): ${salmons.getColdBlooded()} and ${salmons.getWithBackbone()}`);
console.log(`Frogs (${frogs.animalClass}): ${frogs.getColdBlooded()} and ${frogs.getWithBackbone()}`);
console.log(`Turtles (${turtles.animalClass}): ${turtles.getColdBlooded()} and ${turtles.getWithBackbone()}`);
console.log(`Eagles (${eagles.animalClass}): ${eagles.getColdBlooded()} and ${eagles.getWithBackbone()}`);
console.log(`Elephants (${elephants.animalClass}): ${elephants.getColdBlooded()} and ${elephants.getWithBackbone()}`);


// Calling move and sound methods:
spiders.move();
spiders.sound();

salmons.move();
salmons.sound();

frogs.move();
frogs.sound();

turtles.move();
turtles.sound();

eagles.move();
eagles.sound();

elephants.move();
elephants.sound();
