interface IPet {
    readonly typeOfPet: string;
    readonly name: string;
}

class Pet implements IPet {
    constructor (readonly typeOfPet: string, readonly name: string, readonly needStreet: boolean) {}
}

class PetNew implements IPet {
    constructor (readonly typeOfPet: string, readonly name: string, readonly needStreet: boolean) {}
}

interface IPeople {
    pets: IPet[];
    addPet(typeOfPet: string, name: string, needStreet: boolean): void;
    removePet(pet: Pet): void;
    getPetsCount(): number;
}

abstract class People {
    abstract pets: IPet[];
    constructor(protected peopleName: string, protected peopleFlat: number) {}

    abstract addPet(typeOfPet: string, name: string, needStreet: boolean): void
    abstract removePet(pet: IPet): void
    abstract getPetsCount(): number
}

interface IPetConstructor {
    new(typeOfPet: string, name: string, needStreet: boolean): IPet;
}

// Класс наследует от абстрактного класса
class Neighbour extends People implements IPeople {
    protected neighbourPets: IPet[] = []
    constructor(name: string, flat: number, protected petClass: IPetConstructor) {
        super(name, flat)
    }
    
    addPet(typeOfPet: string, name: string, needStreet: boolean) {
        const pet = new this.petClass(typeOfPet, name, needStreet)
        this.neighbourPets.push(pet)
    }

    removePet(pet: IPet) {
        this.neighbourPets = this.neighbourPets.filter(item => item !== pet)
    }

    get pets() {
        return this.neighbourPets
    }

    getPetsCount() {
        return this.pets.length
    }
}

const peopleAlex = new Neighbour("Alex", 5, PetNew)
peopleAlex.addPet("dog", "Дружок", true)

const peopleJohn = new Neighbour("John", 2, PetNew)
peopleJohn.addPet("cat", "Барсик", false)