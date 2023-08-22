class car{
    constructor(company,model,year){
        this.company=company
        this.model = model
        this.year=year
    }
    
    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`
    }
}

let mycar = new car("Mercedes","S-Class","2023");
console.log(mycar.getDescription());