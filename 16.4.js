const person = {
    name: 'Lee'
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 취득한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

/*
Object.getOwnPropertyDescriptor 메서드가 반환한 프로퍼티 디스크립터 객체를 살펴보면 value 프로퍼티의 값은 'Lee' 다.
이것은 프로퍼티 어트리뷰트 [[Value]]의 값이 'Lee'인 것을 의미한다.
그리고 writable, enumerable, configurable 프로퍼티의 값은 모두 true다.
이것은 프로퍼티 어트리뷰트 [[Writable]], [[Enumerable]], [[Configurable]]의 값이 모두 true인 것을 의미한다.

이처럼 프로퍼티가 생성될 때 [[Value]]의 값은 프로퍼티 값으로 초기화되며 [[Writable]], [[Enumerable]], [[Configurable]]의 값은 
true로 초기화된다. 이것은 프로퍼티를 동적 추가해도 마찬가지다.
*/