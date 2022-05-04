// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Tim',
//   age: 35,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }

// person.role[1] = 10;

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Tim',
  age: 35,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
  console.log('is author')
}