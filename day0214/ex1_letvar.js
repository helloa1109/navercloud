//var : 함수형 변수 
//let : 영역형 변수 

var a=1; // 새로 생성
let b=2; // 새로 생성 

function test1()
{
    var a=3; //새로 생성,외부의 a와 전혀 다른 변수로 생성
    let b=4; //새로 생성

    if(true){
        var a=5; //10번 라인의 a변수에 덮어쓴다
        let b=6; //새로 생성
        console.log(`a=${a},b=${b}`);// a=5, b=6
    }
    console.log(`a=${a},b=${b}`); // a=5, b=4
}

//함수호출
test1();
console.log(`a=${a},b=${b}`);// a=1, b=2 