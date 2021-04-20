function add(x1: number, x2: number): number;
function add(x1: string, x2: string): string;

function add(
  x1: number | string,
  x2: number | string
): number | string | undefined {
  if (typeof x1 == "number" && typeof x2 == "number") {
    return x1 + x2;
  } else if (typeof x1 == "string" && typeof x2 == "string") {
    return x1 + x2;
  }
}
let result = add(1, 2);
console.log(result);
