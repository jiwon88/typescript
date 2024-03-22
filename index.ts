let 이름 :string | number = 'kim';

type 내타입 = string | number;

let 이름1 : 내타입 = 123;

function 함수(x :number) : number{
    return x * 2
}

type Member = [number, boolean];
let join:Member = [123, true]

type Member1 = {
    name : string
}
let john : Member1 = {name: 'kim'}

type Member2 = {
    [key : string] : string, 
}
let john1 : Member2 = {name : 'kim'}

class User {
    name :string;
    constructor(name :string){
        this.name = name;
    }
}