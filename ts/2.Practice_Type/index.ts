// number, string, boolean
const number1: number = 5;
const number2: number = 2.7;
const phrase: string = "duoclora";
const permit: boolean = true;

const result: number = number1 + number2;
if (permit) {
  console.log(phrase + result);
} else {
  console.log("Not show result");
}

// Type inference
function add(x: number = 5) {
  let phrase: string = "Result is";
  phrase = 10;
  x = "5.6";

  return phrase + x;
}

let sum: number = add(1);

// Object
var person: {
  name: string;
  age: number;
};
person = {
  name: "Duoclora",
  age: 18,
};

// Array, tuple, any, enum
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const student: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
  rollup: [number, string];
} = {
  name: "duoclora",
  age: 19,
  hobbies: ["sleep"],
  role: Role.ADMIN,
  rollup: [19, "sleep"],
};
let favoriteActivities: any[];
favoriteActivities = [5, "sleep", true];

if (student.role === Role.ADMIN) {
  console.log("is ADMIN");
}
student.rollup.push("ADMIN");
student.rollup[1] = 10;
student.rollup = [0, "admin", "user"];

// Literal type & custom type
type Combinable = number | string;
function combine(
  input1: Combinable,
  input2: number | string,
  resultConversation: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversation === "as-number"
  ) {
    result = parseFloat(input1) + input2.toString();
  } else {
    result = toString() + input2.toString();
  }
  return result;
}

const combineNumber = combine(30, 25, "as-text");
console.log(combineNumber);

const combineString = combine("30", "30", "as-number");
console.log(combineString);
const combineText = combine("Ts", "Ts", "as-text");
console.log(combineText);

// Unknown & any
let user: unknown;
let pass: string;

user = 5;
user = "TS";
pass = user;
pass = <string>user;
if (typeof user === "string") {
  pass = user;
}
