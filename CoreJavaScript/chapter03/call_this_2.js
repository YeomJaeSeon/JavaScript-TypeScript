var func = function(a, b, c){
    console.log(this, a, b, c);
}

func(1, 2, 3);

func.call({x : 1}, 4, 5, 6); //call 메서드를 이요하면(메서드인 이유는 점표현식으로 해당 함수를 호출했기때문!)
/**
 * 자스에서의 함수와 메서드 차이는 어떻게 호출되느냐로 구분한다(단순히 객체의 프로퍼티에 함수를 할당했다해서 그건 메서드가 아니다.)
 * . (점포현식) 이나 [''] (대괄호 표현식)으로 함수를 호출해야 메서드를 호출한 것이다.
 */

//암튼 call메서드를 이용해서 함수를 호출하면 명시적으로 this를 바인딩할수있다. 5번재줄의 this는 함수를 호출하였고 후출 주체가 지정이안되었기에 자연스레 this binding되는 객체는 전역객체(node이므로 global)
//인데, 7번째 줄은 call메서드를 이용하였기에 첫번째 파라미터가 this bindnig 된다.

