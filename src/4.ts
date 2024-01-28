class Key {
  public signature: number;

  constructor() {
    this.signature = Math.random();
  }
  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}

abstract class House {

  constructor(
    public door: boolean,
    public key: Key,
    public tenants: Person[] = []
  ) {
      this.door = door;
      this.key = key;
      this.tenants = tenants;
  }

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
    }
    
  public abstract openDoor(openKey: Key):void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }
    public openDoor(openKey: Key) {
        if (openKey === this.key) {
            this.door = true;
      }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
