"use strict";
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
var client2 = /** @class */ (function () {
    function client2(userId, name, isAdmin, surname, date) {
        this._userId = userId;
        this.name = name;
        this.surname = surname ? surname : '';
        this.date = date ? date : new Date();
        this._isAdmin = isAdmin ? isAdmin : false;
    }
    client2.prototype.printData = function () {
        return "Holla, soy " + this.name + " " + this.surname + " (id:" + this.userId + ")";
    };
    Object.defineProperty(client2.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (id) {
            this._userId = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(client2.prototype, "isAdmin", {
        get: function () {
            return this._isAdmin;
        },
        set: function (admin) {
            this._isAdmin = admin;
        },
        enumerable: true,
        configurable: true
    });
    return client2;
}());
function setUserId() {
}
var diana = new client2(100, 'Diana', false, 'Nogueira');
console.log(diana.printData());
