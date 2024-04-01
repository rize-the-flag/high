export const asyncDelay = async (ms: number) => {
  await new Promise<void>(resolve => {
    setTimeout(() => { resolve() }, ms)
  })
}
