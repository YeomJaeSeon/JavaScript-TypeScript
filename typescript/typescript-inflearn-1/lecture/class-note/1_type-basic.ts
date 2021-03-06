{
//JS 문자열선언
var str = '안녕'

//TS 문자열 선언
var str: string = 'hello'

//TS 숫자
let num: number = 10 // 변수의 타입 선언하는건 이렇게! 쉽다

//TS 배열
let arr: Array<number> = [1, 2 ,3]
let heroes: Array<string> = ['슈퍼맨', '백터맨', '아이언맨']
let items: number[] = [1, 2, 3] //배열 리터럴로 변수 타입선언가능

// TS 튜플
// 배열의 각각 인덱스의 타입도 지정할수있음 
let address: [string, number, number] = ['gangnam', 1, 3]

// TS 객체
let obj: object = {}
let person: object= {
    name: 'capt',
    age: 100
}

// 객체의 프로퍼티의 타입도 지정해줄수있음(튜플과 같이)
let improvedPerson: { name: string, age: number} = {
    name: '염재선',
    age: 5
}

// TS 진위값(boolean)
let show: boolean = true
}