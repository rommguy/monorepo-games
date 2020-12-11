import { Person } from "./types"

const person: Person = {
  age: 45,
  yearOfBirth: 1990,
}

console.log(`micro services loaded. Current year: ${person.yearOfBirth + person.age}`)
