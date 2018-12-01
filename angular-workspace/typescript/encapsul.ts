export function dataFun(): string {
    return "hi data";
}

export let obj = {
    fname : "john";
}

//Encapsulation is OOP concept to set private propert
export class Sample {
    private name: string;
    private age: number;

    constructor(name?: string, age?: number) {
        this.name = name;
        this.age = age;
    };
    //this is old way
    //getters 
    public getName(): string {
        return this.name;
    }

    //setters for name
    public setName(name) {
        this.name = name;
    }

    //NEW WAY TO USE SET AND GET KEWORDS
    public get Age(): number {
        return this.age;
    }

    //setters for age
    public set Age(age) {
        this.age = age;
    }

    public showName(): string {
        return this.name + "Your Age" + this.age;
    }
}