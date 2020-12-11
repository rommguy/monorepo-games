import { Person } from "./types"
import { SomeService } from "./services/someService"

const person: Person = {
  age: 45,
  yearOfBirth: 1990,
}

const someService = new SomeService()

const init = async () => {
  console.log(`micro services loaded. Current year: ${person.yearOfBirth + person.age}`)
  console.log(await someService.doSomethingCool())
}

init()
