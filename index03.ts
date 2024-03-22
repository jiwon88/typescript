function sayHi(x? :string){
    if (x) {
        console.log('안녕하세요' + x)
    } else {
        console.log('왜입력안함')
    }
}

function 자릿수세기(x : number | string) :number {
    return x.toString().length
}

function 결혼가능하냐(money :number, house: boolean, charm:string) :string|void{
    let score :number = 0;
    score += money;
    if (house === true){
        score += 500
    }
    if (charm === '상'){
        score += 100
    }
    if (score >= 600){
        return '결혼가능'
    }
}
console.log(결혼가능하냐(100, true, '상'))