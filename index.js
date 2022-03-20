//Задача 1

let user = "Anna";
let admin;
admin = user;

alert(admin);

//Задача 2: В уроке вы ознакомились с встроенными методами строки которые позволяют получить срез строки или перевести строку в заглавный регистр. Используя эти методы преобразуйте строку чтобы первая буква была заглавной.

let user2 = "ivan";
// let newUser2 = user2.toUpperCase();
let newUser2 = user2.charAt(0).toUpperCase() + user2.slice(1);

console.log(newUser2);


//Задача 3: Тип данных String имеет и другие встроенные методы, используя поиск в гугл найдите их и приведите примеры их использования

//concat()
let str1 = 'Hello';
let str2 = 'The Netherlads';

console.log(str1.concat(' ', str2));
console.log(str2.concat(', ', str1));

//endsWith()

const str3 = 'Hello The Netherlads';

console.log(str3.endsWith('cat'));

//includes()

let sentence = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

let word = 'dolor';

console.log(sentence.includes('dolor'));

// repeat()

let sentence1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

console.log(sentence1.repeat(4))


// replace()

let text = 'Hello The Netherlads';

console.log(text.replace('The Netherlads', 'Ukraine'));

//slice()

let text1 = 'Hello The Netherlads';

console.log(text1.slice(5));

//trim()

let text2 = ' Hello The Netherlads ';

console.log(text2);
console.log(text2.trim());



//Задача 4. Что выведется в следующем примере?:

let a = '';

let b = 'bbb';

let c = false;

let test1 = !b.length === c; // true

let test2 = a.length > b.length; // false

let test3 = !a.length && !b.length; // false

let test4 = a === c; // false
