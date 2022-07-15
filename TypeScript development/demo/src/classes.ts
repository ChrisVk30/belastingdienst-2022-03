

class Productje {
    id!: number;
    description!: string;
    price!: number;

    constructor() {
        // this.id = 143;
        this.fillId();
    }

    fillId() {
        this.id = 4565;
    }
}

let product = new Product();
console.log(product);