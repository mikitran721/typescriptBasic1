import { Invoice, Payment } from "./classimplementsInterface";
import { IhasPrint } from "./interfaceForClass";

const documentOne: IhasPrint = new Invoice('vinamilk','drink milk',5000000);
const documentTwo: IhasPrint = new Payment('vietnam airlines','fly',25000000)

const allDocuments: IhasPrint[] =[];
allDocuments.push(documentOne);
allDocuments.push(documentTwo);
console.log(allDocuments);