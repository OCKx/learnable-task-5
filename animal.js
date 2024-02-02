// Question
// You have been invited and hired by your school's biological and life sciences faculty to use JavaScript to model a simple Classification for Kingdom Animalia.

// without backbone
    // Arthropoda - cold blooded

// with backbone
    // Fish - cold blooded
    // Amphobia - cold blooded
    // Reptiles - cold blooded
    // AVES - warm blooded
    // Mammals - warm blooded


class Animal {
    constructor(coldBlooded, withBackbone) {
        this._coldBlooded = coldBlooded;
        this._withBackbone = withBackbone;
    }

    get coldBlooded() {
        return this._coldBlooded;
    }

    get withBackbone() {
        return this._withBackbone;
    }

    // Abstraction
    sound() {
        throw new Error("Abstract method 'sound' must be implemented");
    }

    // Polymorphism
    move() {
        console.log("Animal is moving.");
    }
}

class Arthropoda extends Animal {
    constructor() {
        // Arthropoda are cold-blooded and have no backbone
        super(true, false);
    }

    // Polymorphism
    move() {
        console.log("Arthropoda is crawling.");
    }

    // Abstraction
    sound() {
        console.log("Arthropoda makes clicking sounds.");
    }
}

class Fish extends Animal {
    constructor() {
        // Fish are cold-blooded and have a backbone
        super(true, true);
    }

    // Polymorphism
    move() {
        console.log("Fish is swimming.");
    }

    // Abstraction
    sound() {
        console.log("Fish makes bubbling sounds.");
    }
}

class Amphibia extends Animal {
    constructor() {
        // Amphibia are cold-blooded and have a backbone
        super(true, true);
    }

    // Polymorphism
    move() {
        console.log("Amphibia is hopping or swimming.");
    }

    // Abstraction
    sound() {
        console.log("Amphibia makes croaking sounds.");
    }
}

class Reptiles extends Animal {
    constructor() {
        // Reptiles are cold-blooded and have a backbone
        super(true, true);
    }

    // Polymorphism
    move() {
        console.log("Reptile is crawling or slithering.");
    }

    // Abstraction
    sound() {
        console.log("Reptile hisses or growls.");
    }
}

class Aves extends Animal {
    constructor() {
        // Aves are warm-blooded and have a backbone
        super(false, true);
    }

    // Polymorphism
    move() {
        console.log("Bird is flying.");
    }

    // Abstraction
    sound() {
        console.log("Bird sings or chirps.");
    }
}

class Mammals extends Animal {
    constructor() {
        // Mammals are warm-blooded and have a backbone
        super(false, true);
    }

    // Polymorphism
    move() {
        console.log("Mammal is walking or running.");
    }

    // Abstraction
    sound() {
        console.log("Mammal makes various sounds.");
    }
}

// Example usage
const arthropoda = new Arthropoda();
const fish = new Fish();
const amphibian = new Amphibia();
const reptile = new Reptiles();
const bird = new Aves();
const mammal = new Mammals();

console.log(arthropoda.coldBlooded, arthropoda.withBackbone); 
console.log(fish.coldBlooded, fish.withBackbone);             
console.log(amphibian.coldBlooded, amphibian.withBackbone);   
console.log(reptile.coldBlooded, reptile.withBackbone);       
console.log(bird.coldBlooded, bird.withBackbone);             
console.log(mammal.coldBlooded, mammal.withBackbone);         

arthropoda.move();
fish.move();
amphibian.move();
reptile.move();
bird.move();
mammal.move();

arthropoda.sound();
fish.sound();
amphibian.sound();
reptile.sound();
bird.sound();
mammal.sound();
    