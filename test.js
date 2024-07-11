// const a = (test) => {
//   console.log(test.keys)
//   console.log(test.values)
// }

// a({a:1, b:2, c:3})

const a = (test) => {
  const keys = Object.keys(test);   // 객체의 키 배열
  const values = Object.values(test); // 객체의 값 배열

  console.log(keys);   // ["a", "b", "c"]
  console.log(values); // [1, 2, 3]
}

a({a: 1, b: 2, c: 3});