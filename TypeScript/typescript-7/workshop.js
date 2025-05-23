"use strict";
class Pet {
    constructor(typeOfPet, name, needStreet) {
        this.typeOfPet = typeOfPet;
        this.name = name;
        this.needStreet = needStreet;
    }
}
class PetNew {
    constructor(typeOfPet, name, needStreet) {
        this.typeOfPet = typeOfPet;
        this.name = name;
        this.needStreet = needStreet;
    }
}
class People {
    constructor(peopleName, peopleFlat) {
        this.peopleName = peopleName;
        this.peopleFlat = peopleFlat;
    }
}
// Класс наследует от абстрактного класса
class Neighbour extends People {
    constructor(name, flat, petClass) {
        super(name, flat);
        this.petClass = petClass;
        this.neighbourPets = [];
    }
    addPet(typeOfPet, name, needStreet) {
        const pet = new this.petClass(typeOfPet, name, needStreet);
        this.neighbourPets.push(pet);
    }
    removePet(pet) {
        this.neighbourPets = this.neighbourPets.filter(item => item !== pet);
    }
    get pets() {
        return this.neighbourPets;
    }
    getPetsCount() {
        return this.pets.length;
    }
}
const peopleAlex = new Neighbour("Alex", 5, PetNew);
peopleAlex.addPet("dog", "Дружок", true);
const peopleJohn = new Neighbour("John", 2, PetNew);
peopleJohn.addPet("cat", "Барсик", false);
