// polymorphism
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

/* 
The Penguin and Eagle sub-classes both inherit from the Bird 
super-class. The Eagle sub-class inherits the useWings() method 
from the Bird class, but extends it with an additional console log. 
The Penguin sub-class doesn't inherit the useWings() class - instead, 
it has its own implementation, although the Penguin class itself does 
extend the Bird class.  
*/
