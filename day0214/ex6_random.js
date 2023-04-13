var arr=new Array();
arr.push("안녕하세요");
arr.push("오늘은 화요일");
arr.push("랜덤함수 공부중");
arr.push("점심시간");
arr.push("화이팅");

//setInterval 을 0.5초마다 위의 문자열중 한개씩 돌아가며
//출력되도록 프로그램을 작성해주세요

setInterval(()=>{
    let idx=parseInt(Math.random()*5);
    console.log(arr[idx]);
},1000);