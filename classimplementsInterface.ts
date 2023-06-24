import { IhasPrint } from "./interfaceForClass";
export class Invoice implements IhasPrint {
    constructor(
        readonly client:string,
        private work: string,
        public amount:number,
    ){}

    print(): string {
        return `${this.client} owes ${this.amount} dollar(s) for this work ${this.work}`;
    }
}

export class Payment implements IhasPrint{
    constructor(
        readonly recipient:string,
        private job:string,
        public amt:number,
    ){};

    print(): string {
        return `I owes ${this.recipient} ${this.amt} dollar(s) for this job ${this.job}`
    }
}