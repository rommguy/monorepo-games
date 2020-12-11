const waitFor = (time: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, time)
  })
}

const REASON = "something"

export class SomeService {
  doSomethingCool = async (): Promise<string> => {
    try {
      await waitFor(1000)
      return "done"
    } catch (e) {
      return "failed" + REASON
    }
  }

  returnAny = (): any => {
    return 5
  }
}
