class Animal {
    constructor(sound) {
        this.sound = sound;
    }

    speak(phrase) {
        return phrase
            .split(" ")
            .map(p => p.concat(` ${this.sound}`))
            .join(" ");
    }
}

class Lion extends Animal {
    constructor() {
        super("roar");
    }
}

class Tiger extends Animal {
    constructor() {
        super("grrr");
    }
}

//

const lion = new Lion();
const tiger = new Tiger();

lion.speak("I'm a lion");
tiger.speak("Lions suck");