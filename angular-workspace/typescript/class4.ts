class Sample {

  //if u use access modifiers in construct parameters
  //then no need declaration & no need initialization
    constructor(public name: string, public age: number) {
    };

    showName(): string {
        return this.name;
    }
}

let sm = new Sample("john", 29);
console.log(sm.showName());
