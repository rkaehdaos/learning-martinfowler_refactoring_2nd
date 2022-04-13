export class Employee {

    constructor(name, type) {
        this.validateType(type);
        this._name = name;
        this._type = type;
    }

    validateType(arg) {
        if (!["engineer", "manager", "salesman"].includes(arg))
            throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
    get type()      {return this._type;}
    set type(arg)   {this._type=arg;}

    get capitalizedType() {
        return this._type.charAt(0).toUpperCase() + this._type.substr(1).toLowerCase();
    }

    toString() {
        return `${this._name} (${this.capitalizedType})`;
    }
}

// 이미 서브클래스 존재
// 직접 상속 방식으로는 타입문제를 대처할 수 없다
class Arbeit extends Employee {}
class Fulltime extends Employee {}
