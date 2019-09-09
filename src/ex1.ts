/*var userId : number = 1;
var firstname : string = 'Diana';
var surname : string = 'Nogueira';
var date : Date= new Date();
var isAdmin: boolean = false;

const client: any ={
    userId : userId,
    firstname : firstname,
    surname : surname,
    date: date,
    isAdmin : isAdmin
}*/

//ex1
//console.dir(client);
//firstname = 'Antonio';

//ex2
//console.log(client.date.toDateString());
//client.date.setFullYear(2019,9,27);
//console.log(client.date.toDateString())

/* ex3
function sayHello(param1 ?: string): string{
    var greet: string = 'Holla';
    if (param1) {
        greet += ' ' + param1;
    } 
    return greet;
}
var withoutParam= sayHello();
var withParam = sayHello('Diana');*/

//console.log(withoutParam);
//console.log(withParam);

interface iClient {
    userId: number;
    name : string;
    surname ?: string;
    date ?: Date;
    isAdmin : boolean;
    printData() : string;
}

class Client implements iClient {
    private _userId: number;
    private _isAdmin: boolean;
    public name: string;
    public surname: string;
    public date: Date;
    constructor(userId : number, name: string, surname?:string, isAdmin?: boolean, date?:Date ){
        this._userId = userId;
        this.name=name;
        this.surname=surname? surname: '';
        this.date = date? date: new Date();
        this._isAdmin = isAdmin? isAdmin : false;
    }

    printData(): string{
        return `Holla, soy ${this.name} ${this.surname} (id:${this.userId})`;
    }



    get userId(): number {
        return this._userId;
    }
    set userId(id: number) {
        this._userId = id;
    }
    get isAdmin(): boolean {
        return this._isAdmin;
    }
    set isAdmin(admin: boolean) {
        this._isAdmin = admin;
    }
}


class IsAdmin extends Client{

    private idAdmin: number;
    constructor(userId : number, name: string, idAdmin: number, surname?:string, date?:Date){
        super(userId, name, surname, true, date)
        this.isAdmin=true;
        this.idAdmin=idAdmin;
    }
    printData(): string{
        return `Holla, soy ${this.name} ${this.surname} (id:${this.userId}). Tengo el idAdmin ${this.idAdmin}`
    }
}

function setUserId(){

}

let diana = new Client(100, 'Diana','Nogueira');
let filipa = new IsAdmin(104, 'Filipa', 1234, 'Nogueira');

console.log(diana.printData());
console.log(filipa.printData());

