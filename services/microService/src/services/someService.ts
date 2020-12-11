const waitFor = (time: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, time)
  })
}

class SomeService {
  doSomethingCool = async () => {
    try {
      await waitFor(1000)
      return "done"
    } catch (e) {
      return "failed"
    }
  }
}
