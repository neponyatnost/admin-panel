export function getData(daysState: string[]) {
  let data: number[] = []
  for (let index = 0; index < daysState.length; index++) {
    data.push(Math.floor((Math.random() + 1) * 10))
  }
  const res = data.reduce((acc, current) => acc + current)
  return { data, res }
}
