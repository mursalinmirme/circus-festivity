<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>It will return an empty object. Because it avoids re declare a variable. But let variables value can update that's why I think it will print a empty object.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>It will return "12". Because in this function has call 1 which a number and "2" which is a string. Thats why javscrit type coercion relize both string. Thats why it will do concatinate "1" + "2" = when It will do concatinate the result will be string "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 1

<i>It will return ['🍕', '🍫', '🥑', '🍔'] because, there has a food array and the info object has favoriteFood attribue which value set from the food array first item. After info.favoriteFood attributes value change with "🍝". But it never replace the food array first items value with "🍝". Because the info.Favourite variables are separate in memory.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>It will return 'Hi there, undefined'. Because sayHi function expect an argument 'name'. but there has call the sayHi function without any parameter. Inside the sayHi function it will try to use the name parameter in the template literal, but name is undefined because no value was passed there when the function was called. That's way it will return option B: Hi there, undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>It will return 3. Because there has a variable named count which initial value is 0. And after run the forEach loop on nums array. There has a condition which check every truthy num. If the num is truthy then it increment the count varibles value with 1. And array has 4 items where has a falsy num and 3 truthy num. Thats why for 3 truthy num it increment 3 times which result will 3.</i>

</p>
</details>
