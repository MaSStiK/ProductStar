class Pet2 {
    typeOfPet: string;
    constructor (typeOfPet: string) {
        this.typeOfPet = typeOfPet;
    }
}

// Абстракция класса, то есть он не будет использоваться так как он сейчас написан, то есть мы будем думать над его реализацией позже
abstract class People2 {
    name: string;
    flat: number;
    abstract pets: Pet2[];
    constructor(name: string, flat: number) {
        this.name = name
        this.flat = flat
    }

    abstract addPet(pet: Pet2): void
    abstract removePet(pet: Pet2): void
    abstract getPetsCount(): number
}