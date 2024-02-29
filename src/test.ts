export function someFn(arg: number): string {
  console.log("Some FN");
  return 'HMR is working now';
}

document.body.innerHTML = `<h1>Hi</h1>`
