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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Client = /** @class */ (function () {
    function Client(userId, name, surname, isAdmin, date) {
        this._userId = userId;
        this.name = name;
        this.surname = surname ? surname : '';
        this.date = date ? date : new Date();
        this._isAdmin = isAdmin ? isAdmin : false;
    }
    Client.prototype.printData = function () {
        return "Holla, soy " + this.name + " " + this.surname + " (id:" + this.userId + ")";
    };
    Object.defineProperty(Client.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (id) {
            this._userId = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "isAdmin", {
        get: function () {
            return this._isAdmin;
        },
        set: function (admin) {
            this._isAdmin = admin;
        },
        enumerable: true,
        configurable: true
    });
    return Client;
}());
var IsAdmin = /** @class */ (function (_super) {
    __extends(IsAdmin, _super);
    function IsAdmin(userId, name, idAdmin, surname, date) {
        var _this = _super.call(this, userId, name, surname, true, date) || this;
        _this.isAdmin = true;
        _this.idAdmin = idAdmin;
        return _this;
    }
    IsAdmin.prototype.printData = function () {
        return "Holla, soy " + this.name + " " + this.surname + " (id:" + this.userId + "). Tengo el idAdmin " + this.idAdmin;
    };
    return IsAdmin;
}(Client));
function setUserId() {
}
var diana = new Client(100, 'Diana', 'Nogueira');
var filipa = new IsAdmin(104, 'Filipa', 1234, 'Nogueira');
console.log(diana.printData());
console.log(filipa.printData());
