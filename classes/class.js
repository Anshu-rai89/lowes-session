
class Rectangle {
    constructor(height, width ){
        this._length = height;
        this._breath = width;
    }

    // A computed value 
    get area () {
        console.log("Length", this._length, this._breath);
        return this._length * this._breath;
    }

    set length(length) {
        this._length = length;
    }

    info(){
        console.log("I am rectangle with length", this._length, "And breadth ", this._breath);
    }

    static isEqual(rec1, rec2) {
        if (rec1._length === rec2._length && rec1._breath === rec2._breath) {
          console.log("Equal", rec1, rec2);
          return;
        }

       console.log("Unequal", rec1, rec2);
       return;
    }

}

const rec1 = new Rectangle(10,20);
const rec2 = new Rectangle(12,14);
console.log(rec1);
console.log("Length", rec1._length);

console.log("Area", rec1.area);

rec1.length = 30;
console.log("Updated Length", rec1._length);
Rectangle.isEqual(rec1, rec2);
rec1.info();