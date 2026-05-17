/* ══════════════════════════════════════════════════════
   200 CHALLENGES
   Sources:
   JS Fundamentals  — MDN Web Docs
   Python           — Python.org / MDN
   HTML & CSS       — MDN + W3Schools
   Algorithms       — LeetCode problem types + freeCodeCamp
   String Methods   — MDN String Reference + W3Schools
   Array Methods    — MDN Array Reference (map/filter/reduce)
   SQL              — W3Schools SQL Tutorial
   React & Async    — MDN Fetch API + React docs
══════════════════════════════════════════════════════ */
const CHS = [

/* ══ JS FUNDAMENTALS (1–30) — MDN Web Docs ══ */
{id:1,title:"typeof Operator",diff:"Easy",cat:"JS Fundamentals",
 desc:"What does <code>typeof null</code> return in JavaScript? This is a well-known quirk documented on MDN.",
 code:`typeof null`,
 options:['"object"','"null"','"undefined"','"boolean"'],ansIdx:0,
 hint:"typeof null returns 'object' — this is a historical bug in JavaScript preserved for compatibility. MDN documents this as a known quirk.",
 fn:"typeofNull",tests:[{a:[],e:"object"}]},

{id:2,title:"var vs let Scope",diff:"Easy",cat:"JS Fundamentals",
 desc:"What is the output? <code>var</code> is function-scoped; <code>let</code> is block-scoped.",
 code:`if (true) {
  var x = 1;
  let y = 2;
}
// What is accessible here?`,
 options:["x is accessible, y is not","Both x and y accessible","Neither accessible","y is accessible, x is not"],ansIdx:0,
 hint:"var is function-scoped — it leaks out of blocks. let is block-scoped — it stays inside {}.",
 fn:"varLet",tests:[{a:[],e:true}]},

{id:3,title:"Arrow Function this",diff:"Medium",cat:"JS Fundamentals",
 desc:"Choose the expression that correctly accesses the outer <code>this</code> inside a callback using an arrow function.",
 code:`const obj = {
  name: 'Dev Play',
  greet: function() {
    const inner = ___ => console.log(this.name);
    inner();
  }
};`,
 options:["() (arrow function)","function()","async function()","() => {} wrapped"],ansIdx:0,
 hint:"Arrow functions do not have their own 'this' — they inherit from the enclosing lexical scope. MDN: Arrow function expressions.",
 fn:"arrowThis",tests:[{a:[],e:true}]},

{id:4,title:"Hoisting",diff:"Easy",cat:"JS Fundamentals",
 desc:"What is logged? Function declarations are hoisted fully; var declarations are hoisted but not initialized.",
 code:`console.log(foo());
function foo() { return 42; }`,
 options:["42","ReferenceError","undefined","TypeError"],ansIdx:0,
 hint:"Function declarations are fully hoisted — the entire function body moves to the top. MDN: Hoisting.",
 fn:"hoist",tests:[{a:[],e:42}]},

{id:5,title:"Truthy & Falsy",diff:"Easy",cat:"JS Fundamentals",
 desc:"Which of the following is a <strong>falsy</strong> value in JavaScript? MDN lists exactly 8 falsy values.",
 code:`Boolean(___)`,
 options:["0","'false'","[]","{}"],ansIdx:0,
 hint:"The 8 falsy values: false, 0, -0, 0n, '', null, undefined, NaN. Non-empty strings, arrays, and objects are truthy. MDN: Falsy.",
 fn:"falsy",tests:[{a:[0],e:false},{a:[""],e:false},{a:["false"],e:true}]},

{id:6,title:"== vs ===",diff:"Easy",cat:"JS Fundamentals",
 desc:"What does <code>'5' == 5</code> return? And <code>'5' === 5</code>?",
 code:`'5' == 5   // ___
'5' === 5  // ___`,
 options:["true, false","false, false","true, true","false, true"],ansIdx:0,
 hint:"== performs type coercion (converts before comparing). === is strict — no coercion. MDN: Equality comparisons.",
 fn:"eqeq",tests:[{a:[],e:true}]},

{id:7,title:"Spread Operator",diff:"Easy",cat:"JS Fundamentals",
 desc:"What expression creates a shallow copy of array <code>arr</code> and adds 4 at the end?",
 code:`const arr = [1, 2, 3];
const newArr = ___;`,
 options:["[...arr, 4]","arr.push(4)","arr.concat","Object.assign(arr,4)"],ansIdx:0,
 hint:"The spread operator (...) expands an iterable into individual elements. MDN: Spread syntax.",
 fn:"spread",tests:[{a:[[1,2,3]],e:[1,2,3,4]}]},

{id:8,title:"Destructuring",diff:"Easy",cat:"JS Fundamentals",
 desc:"What is the value of <code>b</code> after this destructuring assignment?",
 code:`const [a, b, c] = [10, 20, 30];`,
 options:["20","10","30","undefined"],ansIdx:0,
 hint:"Array destructuring assigns values left-to-right by position. MDN: Destructuring assignment.",
 fn:"destruct",tests:[{a:[],e:20}]},

{id:9,title:"Template Literals",diff:"Easy",cat:"JS Fundamentals",
 desc:"What does this template literal expression produce?",
 code:`const name = 'World';
const result = \`Hello \${name}!\`;`,
 options:['"Hello World!"','"Hello ${name}!"','"Hello undefined!"',"SyntaxError"],ansIdx:0,
 hint:"Template literals use backticks and ${} for embedded expressions. MDN: Template literals.",
 fn:"templateLit",tests:[{a:["World"],e:"Hello World!"}]},

{id:10,title:"Default Parameters",diff:"Easy",cat:"JS Fundamentals",
 desc:"What is logged when <code>greet()</code> is called with no arguments?",
 code:`function greet(name = 'Stranger') {
  return \`Hello, \${name}!\`;
}`,
 options:['"Hello, Stranger!"','"Hello, undefined!"',"TypeError",'"Hello, !"'],ansIdx:0,
 hint:"Default parameters provide fallback values when an argument is undefined. MDN: Default parameters.",
 fn:"defaultParam",tests:[{a:[],e:"Hello, Stranger!"},{a:["Dev"],e:"Hello, Dev!"}]},

{id:11,title:"Promise.resolve",diff:"Medium",cat:"JS Fundamentals",
 desc:"What value does this Promise resolve with?",
 code:`Promise.resolve(42).then(val => console.log(val));`,
 options:["42","Promise {42}","undefined","NaN"],ansIdx:0,
 hint:"Promise.resolve(value) returns a Promise resolved with that value. The .then() callback receives the resolved value. MDN: Promise.resolve().",
 fn:"promiseResolve",tests:[{a:[42],e:42}]},

{id:12,title:"Short-circuit Evaluation",diff:"Easy",cat:"JS Fundamentals",
 desc:"What does this expression return?",
 code:`null ?? 'default'`,
 options:['"default"',"null","false","undefined"],ansIdx:0,
 hint:"The nullish coalescing operator (??) returns the right-hand value when the left is null or undefined. MDN: Nullish coalescing operator.",
 fn:"nullish",tests:[{a:[null],e:"default"},{a:[0],e:0}]},

{id:13,title:"Optional Chaining",diff:"Easy",cat:"JS Fundamentals",
 desc:"What does this return when <code>user</code> is <code>null</code>?",
 code:`const user = null;
const city = user?.address?.city;`,
 options:["undefined","null","TypeError","ReferenceError"],ansIdx:0,
 hint:"Optional chaining (?.) short-circuits and returns undefined rather than throwing. MDN: Optional chaining.",
 fn:"optChain",tests:[{a:[],e:undefined}]},

{id:14,title:"Object Shorthand",diff:"Easy",cat:"JS Fundamentals",
 desc:"Which is the ES6 shorthand for <code>{ name: name, age: age }</code>?",
 code:`const name = 'Dev', age = 5;
const obj = ___;`,
 options:["{ name, age }","{ name: name, age: age }","Object(name, age)","new Object(name, age)"],ansIdx:0,
 hint:"When a property name matches a variable name, you can use shorthand notation. MDN: Object initializer shorthand.",
 fn:"objShorthand",tests:[{a:["Dev",5],e:{name:"Dev",age:5}}]},

{id:15,title:"Closure Counter",diff:"Medium",cat:"JS Fundamentals",
 desc:"What does <code>counter()</code> return on the <strong>third</strong> call?",
 code:`function makeCounter() {
  let count = 0;
  return () => ++count;
}
const counter = makeCounter();
counter(); counter(); counter();`,
 options:["3","1","0","undefined"],ansIdx:0,
 hint:"Each call to counter() increments the count variable captured in the closure. MDN: Closures.",
 fn:"closureCounter",tests:[{a:[],e:3}]},

{id:16,title:"Array.from",diff:"Easy",cat:"JS Fundamentals",
 desc:"What does <code>Array.from('abc')</code> return?",
 code:`Array.from('abc')`,
 options:['["a","b","c"]','["abc"]',"['abc']","SyntaxError"],ansIdx:0,
 hint:"Array.from converts an iterable (like a string) into an array, one element per character. MDN: Array.from().",
 fn:"arrayFrom",tests:[{a:["abc"],e:["a","b","c"]}]},

{id:17,title:"Object.keys",diff:"Easy",cat:"JS Fundamentals",
 desc:"What does <code>Object.keys({ a:1, b:2, c:3 })</code> return?",
 code:`Object.keys({ a:1, b:2, c:3 })`,
 options:['["a","b","c"]','[1,2,3]','["a:1","b:2","c:3"]',"undefined"],ansIdx:0,
 hint:"Object.keys() returns an array of a given object's own enumerable string-keyed property names. MDN: Object.keys().",
 fn:"objKeys",tests:[{a:[{a:1,b:2,c:3}],e:["a","b","c"]}]},

{id:18,title:"Ternary Operator",diff:"Easy",cat:"JS Fundamentals",
 desc:"What is the result of this ternary expression?",
 code:`const x = 10;
const result = x > 5 ? 'big' : 'small';`,
 options:['"big"','"small"',"true","10"],ansIdx:0,
 hint:"The ternary operator: condition ? valueIfTrue : valueIfFalse. MDN: Conditional (ternary) operator.",
 fn:"ternary",tests:[{a:[10],e:"big"},{a:[3],e:"small"}]},

{id:19,title:"for...of vs for...in",diff:"Easy",cat:"JS Fundamentals",
 desc:"Which loop iterates over the <strong>values</strong> of an iterable like an array?",
 code:`const arr = [10, 20, 30];
for (___ of arr) { console.log(item); }`,
 options:["const item","const index","let key","var prop"],ansIdx:0,
 hint:"for...of iterates values of iterables. for...in iterates keys/indices. MDN: for...of statement.",
 fn:"forOf",tests:[{a:[],e:[10,20,30]}]},

{id:20,title:"JSON.parse",diff:"Easy",cat:"JS Fundamentals",
 desc:"What does <code>JSON.parse('{\"a\":1}')</code> return?",
 code:`JSON.parse('{"a":1}')`,
 options:["{a:1}",'"{\\"a\\":1}"',"SyntaxError","null"],ansIdx:0,
 hint:"JSON.parse converts a JSON string into a JavaScript object. MDN: JSON.parse().",
 fn:"jsonParse",tests:[{a:['{"a":1}'],e:{a:1}}]},

{id:21,title:"setTimeout Order",diff:"Medium",cat:"JS Fundamentals",
 desc:"What is the output order?",
 code:`console.log('A');
setTimeout(() => console.log('B'), 0);
console.log('C');`,
 options:["A, C, B","A, B, C","B, A, C","C, A, B"],ansIdx:0,
 hint:"setTimeout schedules to the task queue — runs after synchronous code finishes. MDN: setTimeout().",
 fn:"timeoutOrder",tests:[{a:[],e:["A","C","B"]}]},

{id:22,title:"Computed Property Names",diff:"Medium",cat:"JS Fundamentals",
 desc:"What is the value of <code>obj.hello</code>?",
 code:`const key = 'hello';
const obj = { [key]: 'world' };`,
 options:['"world"','"hello"',"undefined","SyntaxError"],ansIdx:0,
 hint:"Computed property names use [] to dynamically set a property name from a variable. MDN: Object initializer.",
 fn:"computedProp",tests:[{a:[],e:"world"}]},

{id:23,title:"Array Destructuring Swap",diff:"Medium",cat:"JS Fundamentals",
 desc:"What is the value of <code>a</code> after this swap?",
 code:`let a = 1, b = 2;
[a, b] = [b, a];`,
 options:["2","1","undefined","SyntaxError"],ansIdx:0,
 hint:"Array destructuring lets you swap variables without a temp variable. MDN: Destructuring assignment.",
 fn:"swapDestructure",tests:[{a:[],e:2}]},

{id:24,title:"String to Number",diff:"Easy",cat:"JS Fundamentals",
 desc:"Which correctly converts string <code>'42'</code> to the integer <code>42</code>?",
 code:`___ ('42')`,
 options:["parseInt","parseString","Number.toString","str.toNumber"],ansIdx:0,
 hint:"parseInt() parses a string and returns an integer. Number() also works for simple cases. MDN: parseInt().",
 fn:"strToNum",tests:[{a:["42"],e:42},{a:["3.14"],e:3}]},

{id:25,title:"Math.floor vs Math.round",diff:"Easy",cat:"JS Fundamentals",
 desc:"What does <code>Math.floor(4.9)</code> return?",
 code:`Math.floor(4.9)`,
 options:["4","5","4.9","undefined"],ansIdx:0,
 hint:"Math.floor() rounds DOWN to the nearest integer. Math.round() rounds to nearest. MDN: Math.floor().",
 fn:"mathFloor",tests:[{a:[4.9],e:4},{a:[4.1],e:4}]},

{id:26,title:"Immutable const",diff:"Easy",cat:"JS Fundamentals",
 desc:"What happens when you try to reassign a <code>const</code> variable?",
 code:`const x = 5;
x = 10; // ?`,
 options:["TypeError","x becomes 10","SyntaxError","Nothing happens"],ansIdx:0,
 hint:"const prevents reassignment of the binding. Note: for objects/arrays, the contents can still mutate. MDN: const.",
 fn:"constReassign",tests:[{a:[],e:true}]},

{id:27,title:"Object.freeze",diff:"Medium",cat:"JS Fundamentals",
 desc:"What happens to <code>obj.x</code> after <code>Object.freeze(obj)</code>?",
 code:`const obj = { x: 1 };
Object.freeze(obj);
obj.x = 99;
console.log(obj.x);`,
 options:["1","99","undefined","TypeError"],ansIdx:0,
 hint:"Object.freeze() prevents mutation of an object's properties. Assignments in strict mode throw; in non-strict they silently fail. MDN: Object.freeze().",
 fn:"freeze",tests:[{a:[],e:1}]},

{id:28,title:"Array.isArray",diff:"Easy",cat:"JS Fundamentals",
 desc:"What does <code>Array.isArray([])</code> return?",
 code:`Array.isArray([])`,
 options:["true","false",'"array"',"undefined"],ansIdx:0,
 hint:"Array.isArray() is the reliable way to check if a value is an Array. typeof [] returns 'object'. MDN: Array.isArray().",
 fn:"isArray",tests:[{a:[[1,2,3]],e:true},{a:[{a:1}],e:false}]},

{id:29,title:"Symbol",diff:"Hard",cat:"JS Fundamentals",
 desc:"What is unique about every Symbol created with <code>Symbol()</code>?",
 code:`Symbol('foo') === Symbol('foo')`,
 options:["false — every Symbol is unique","true — same description","TypeError","undefined"],ansIdx:0,
 hint:"Every call to Symbol() creates a unique primitive. Two Symbols with the same description are still !== each other. MDN: Symbol.",
 fn:"symbolUnique",tests:[{a:[],e:false}]},

{id:30,title:"WeakMap",diff:"Hard",cat:"JS Fundamentals",
 desc:"What is the key difference between <code>Map</code> and <code>WeakMap</code>?",
 code:`// Which statement is TRUE?`,
 options:["WeakMap keys must be objects","WeakMap allows primitive keys","WeakMap is iterable","WeakMap has a .size property"],ansIdx:0,
 hint:"WeakMap only accepts objects as keys and does not prevent garbage collection. It is not iterable and has no .size. MDN: WeakMap.",
 fn:"weakMap",tests:[{a:[],e:true}]},

/* ══ PYTHON (31–55) — Python.org docs ══ */
{id:31,title:"List Slicing",diff:"Easy",cat:"Python",
 desc:"What does <code>lst[1:4]</code> return for <code>lst = [0,1,2,3,4]</code>?",
 code:`lst = [0, 1, 2, 3, 4]
lst[1:4]`,
 options:["[1,2,3]","[1,2,3,4]","[0,1,2,3]","[2,3,4]"],ansIdx:0,
 hint:"Python slicing: [start:stop] — start is inclusive, stop is exclusive. Python docs: Sequence Types.",
 fn:"pySlice",tests:[{a:[[0,1,2,3,4],1,4],e:[1,2,3]}]},

{id:32,title:"List Comprehension",diff:"Easy",cat:"Python",
 desc:"What expression produces <code>[0, 1, 4, 9, 16]</code>?",
 code:`result = [___ for x in range(5)]`,
 options:["x**2","x*2","x+2","x^2"],ansIdx:0,
 hint:"** is the exponentiation operator in Python. x**2 = x squared. Python docs: List comprehensions.",
 fn:"pyListComp",tests:[{a:[5],e:[0,1,4,9,16]}]},

{id:33,title:"dict.get()",diff:"Easy",cat:"Python",
 desc:"What does <code>d.get('z', 0)</code> return if key 'z' doesn't exist?",
 code:`d = {'a': 1, 'b': 2}
d.get('z', 0)`,
 options:["0","None","KeyError","'z'"],ansIdx:0,
 hint:"dict.get(key, default) returns the default value if the key is not found. Python docs: dict.get().",
 fn:"pyDictGet",tests:[{a:[{"a":1},"z",0],e:0},{a:[{"a":1},"a",0],e:1}]},

{id:34,title:"*args",diff:"Medium",cat:"Python",
 desc:"What is the type of <code>args</code> inside the function?",
 code:`def foo(*args):
    print(type(args))`,
 options:["tuple","list","dict","set"],ansIdx:0,
 hint:"*args collects extra positional arguments into a tuple. Python docs: More on defining functions.",
 fn:"pyArgs",tests:[{a:[],e:"tuple"}]},

{id:35,title:"String Formatting",diff:"Easy",cat:"Python",
 desc:"Which produces <code>'Hello, World!'</code>?",
 code:`name = 'World'
result = ___`,
 options:["f'Hello, {name}!'","'Hello, ' + name + '!'","'Hello, %s!' % name","All of the above"],ansIdx:3,
 hint:"Python supports f-strings (3.6+), % formatting, and + concatenation. f-strings are the modern preferred approach. Python docs: f-strings.",
 fn:"pyStrFormat",tests:[{a:["World"],e:"Hello, World!"}]},

{id:36,title:"Lambda",diff:"Easy",cat:"Python",
 desc:"What does this lambda return when called with <code>3</code>?",
 code:`square = lambda x: x ** 2
square(3)`,
 options:["9","6","3","None"],ansIdx:0,
 hint:"Lambda creates an anonymous function. lambda x: x**2 is equivalent to def f(x): return x**2. Python docs: Lambda expressions.",
 fn:"pyLambda",tests:[{a:[3],e:9},{a:[5],e:25}]},

{id:37,title:"enumerate()",diff:"Easy",cat:"Python",
 desc:"What does <code>enumerate(['a','b','c'])</code> yield on first iteration?",
 code:`for i, v in enumerate(['a','b','c']):
    print(i, v)`,
 options:["0 a","1 a","a 0","'a' 0"],ansIdx:0,
 hint:"enumerate() returns (index, value) pairs starting at 0 by default. Python docs: enumerate().",
 fn:"pyEnumerate",tests:[{a:[["a","b","c"]],e:[[0,"a"],[1,"b"],[2,"c"]]}]},

{id:38,title:"zip()",diff:"Easy",cat:"Python",
 desc:"What does <code>list(zip([1,2,3], ['a','b','c']))</code> produce?",
 code:`list(zip([1,2,3], ['a','b','c']))`,
 options:["[(1,'a'),(2,'b'),(3,'c')]","[[1,'a'],[2,'b'],[3,'c']]","[1,'a',2,'b',3,'c']","{1:'a',2:'b',3:'c'}"],ansIdx:0,
 hint:"zip() pairs elements from multiple iterables into tuples. Python docs: zip().",
 fn:"pyZip",tests:[{a:[[1,2,3],["a","b","c"]],e:[[1,"a"],[2,"b"],[3,"c"]]}]},

{id:39,title:"set Operations",diff:"Easy",cat:"Python",
 desc:"What is <code>{1,2,3} & {2,3,4}</code>?",
 code:`{1,2,3} & {2,3,4}`,
 options:["{2,3}","{1,2,3,4}","{1,4}","{}"],ansIdx:0,
 hint:"& is the intersection operator for sets — returns elements in both sets. Python docs: Set types.",
 fn:"pySet",tests:[{a:[[1,2,3],[2,3,4]],e:[2,3]}]},

{id:40,title:"try/except/finally",diff:"Medium",cat:"Python",
 desc:"Which block always runs regardless of whether an exception occurred?",
 code:`try:
    risky()
except ValueError:
    handle()
___:
    cleanup()`,
 options:["finally","always","done","end"],ansIdx:0,
 hint:"The finally block always executes — whether or not an exception was raised. Python docs: The try statement.",
 fn:"pyFinally",tests:[{a:[],e:true}]},

{id:41,title:"Dictionary Comprehension",diff:"Easy",cat:"Python",
 desc:"What expression creates <code>{'a':1,'b':2,'c':3}</code>?",
 code:`keys = ['a','b','c']
vals = [1,2,3]
result = {___ for k,v in zip(keys,vals)}`,
 options:["k:v","v:k","k,v","(k,v)"],ansIdx:0,
 hint:"Dict comprehension: {key_expr: val_expr for ...}. Python docs: Dictionary comprehensions.",
 fn:"pyDictComp",tests:[{a:[["a","b","c"],[1,2,3]],e:{a:1,b:2,c:3}}]},

{id:42,title:"is vs ==",diff:"Medium",cat:"Python",
 desc:"What is the difference between <code>is</code> and <code>==</code> in Python?",
 code:`a = [1,2,3]
b = [1,2,3]
a == b   # ___
a is b   # ___`,
 options:["True, False","True, True","False, True","False, False"],ansIdx:0,
 hint:"== checks value equality. 'is' checks identity (same object in memory). Python docs: Comparisons.",
 fn:"pyIsVsEq",tests:[{a:[],e:true}]},

{id:43,title:"Global vs Local",diff:"Medium",cat:"Python",
 desc:"What is <code>x</code> after calling <code>modify()</code>?",
 code:`x = 10
def modify():
    x = 20
modify()
print(x)`,
 options:["10","20","None","UnboundLocalError"],ansIdx:0,
 hint:"Without the global keyword, assignment inside a function creates a local variable. Python docs: Scopes and namespaces.",
 fn:"pyScope",tests:[{a:[],e:10}]},

{id:44,title:"Generators",diff:"Hard",cat:"Python",
 desc:"What keyword turns a function into a generator?",
 code:`def count_up(n):
    for i in range(n):
        ___ i`,
 options:["yield","return","next","send"],ansIdx:0,
 hint:"yield produces values lazily one at a time. The function's state is preserved between calls. Python docs: Generator expressions.",
 fn:"pyGenerator",tests:[{a:[3],e:[0,1,2]}]},

{id:45,title:"sorted() vs .sort()",diff:"Easy",cat:"Python",
 desc:"What is the difference between <code>sorted(lst)</code> and <code>lst.sort()</code>?",
 code:`lst = [3,1,2]
new = sorted(lst)  # ___
lst.sort()         # ___`,
 options:["sorted returns new list; .sort() mutates in place","Both return new lists","Both mutate in place","sorted mutates; .sort() returns None"],ansIdx:0,
 hint:"sorted() is a built-in that returns a new sorted list. list.sort() sorts in place and returns None. Python docs: Sorting HOW TO.",
 fn:"pySorted",tests:[{a:[[3,1,2]],e:[1,2,3]}]},

{id:46,title:"String .split()",diff:"Easy",cat:"Python",
 desc:"What does <code>'a,b,c'.split(',')</code> return?",
 code:`'a,b,c'.split(',')`,
 options:["['a','b','c']","('a','b','c')","'a b c'","['a,b,c']"],ansIdx:0,
 hint:"str.split(sep) splits on the separator and returns a list. Python docs: str.split().",
 fn:"pySplit",tests:[{a:["a,b,c",","],e:["a","b","c"]}]},

{id:47,title:"*args and **kwargs",diff:"Medium",cat:"Python",
 desc:"What is printed by <code>foo(1, 2, x=3)</code>?",
 code:`def foo(*args, **kwargs):
    print(args, kwargs)`,
 options:["(1,2) {'x':3}","[1,2] {'x':3}","1 2 x=3","(1,2,3) {}"],ansIdx:0,
 hint:"*args collects positional args into a tuple. **kwargs collects keyword args into a dict. Python docs: More on defining functions.",
 fn:"pyArgsKwargs",tests:[{a:[],e:true}]},

{id:48,title:"List .append() vs .extend()",diff:"Easy",cat:"Python",
 desc:"What is <code>lst</code> after <code>lst.extend([4,5])</code>?",
 code:`lst = [1,2,3]
lst.extend([4,5])`,
 options:["[1,2,3,4,5]","[1,2,3,[4,5]]","[[1,2,3],[4,5]]","TypeError"],ansIdx:0,
 hint:"extend() adds each element of the iterable. append() would add the whole list as one element. Python docs: list.extend().",
 fn:"pyExtend",tests:[{a:[[1,2,3],[4,5]],e:[1,2,3,4,5]}]},

{id:49,title:"Class __init__",diff:"Easy",cat:"Python",
 desc:"What is <code>dog.name</code> after <code>dog = Dog('Rex')</code>?",
 code:`class Dog:
    def __init__(self, name):
        self.name = name`,
 options:['"Rex"',"None","'self'",'Dog'],ansIdx:0,
 hint:"__init__ is the constructor. self.name stores the instance attribute. Python docs: Classes.",
 fn:"pyClass",tests:[{a:["Rex"],e:"Rex"}]},

{id:50,title:"map() built-in",diff:"Easy",cat:"Python",
 desc:"What does <code>list(map(str, [1,2,3]))</code> return?",
 code:`list(map(str, [1,2,3]))`,
 options:['["1","2","3"]',"[1,2,3]","'123'","TypeError"],ansIdx:0,
 hint:"map(func, iterable) applies func to each element. Wrapping in list() materializes the lazy result. Python docs: map().",
 fn:"pyMap",tests:[{a:[[1,2,3]],e:["1","2","3"]}]},

{id:51,title:"filter() built-in",diff:"Easy",cat:"Python",
 desc:"What does <code>list(filter(None, [0,1,False,2,'',3]))</code> return?",
 code:`list(filter(None, [0, 1, False, 2, '', 3]))`,
 options:["[1,2,3]","[0,1,False,2]","[1,False,2,3]","[]"],ansIdx:0,
 hint:"filter(None, iterable) removes falsy values. 0, False, and '' are falsy. Python docs: filter().",
 fn:"pyFilter",tests:[{a:[[0,1,false,2,"",3]],e:[1,2,3]}]},

{id:52,title:"String .join()",diff:"Easy",cat:"Python",
 desc:"What does <code>'-'.join(['a','b','c'])</code> return?",
 code:`'-'.join(['a','b','c'])`,
 options:['"a-b-c"','"a b c"',"['a','b','c']","SyntaxError"],ansIdx:0,
 hint:"str.join(iterable) concatenates the iterable elements with str as the separator. Python docs: str.join().",
 fn:"pyJoin",tests:[{a:[["-","a","b","c"]],e:"a-b-c"}]},

{id:53,title:"Mutable Default Argument",diff:"Hard",cat:"Python",
 desc:"What is the bug in this code?",
 code:`def add_item(item, lst=[]):
    lst.append(item)
    return lst
add_item(1)  # [1]
add_item(2)  # ???`,
 options:["Returns [1,2] — default list is shared across calls","Returns [2]","Raises TypeError","Returns [1],[2] separately"],ansIdx:0,
 hint:"Mutable default arguments are evaluated once at function definition — not at each call. This is a classic Python pitfall. Python docs: Default Argument Values.",
 fn:"pyMutableDefault",tests:[{a:[],e:true}]},

{id:54,title:"with Statement",diff:"Medium",cat:"Python",
 desc:"What is the main benefit of using <code>with open(file)</code>?",
 code:`with open('data.txt') as f:
    content = f.read()`,
 options:["File is automatically closed after the block","File is opened faster","File is read in binary mode","File is locked for writing"],ansIdx:0,
 hint:"The with statement uses context managers to guarantee __exit__ is called — closing the file even if an error occurs. Python docs: The with statement.",
 fn:"pyWith",tests:[{a:[],e:true}]},

{id:55,title:"isinstance()",diff:"Easy",cat:"Python",
 desc:"What does <code>isinstance(True, int)</code> return in Python?",
 code:`isinstance(True, int)`,
 options:["True","False","TypeError","None"],ansIdx:0,
 hint:"In Python, bool is a subclass of int. isinstance() checks the type hierarchy. Python docs: isinstance().",
 fn:"pyIsinstance",tests:[{a:[],e:true}]},

/* ══ HTML & CSS (56–80) — MDN + W3Schools ══ */
{id:56,title:"Box Model",diff:"Easy",cat:"HTML & CSS",
 desc:"In the CSS box model, from inside to outside, what is the correct order?",
 code:`/* content → ___ → ___ → ___ */`,
 options:["content → padding → border → margin","content → margin → padding → border","content → border → padding → margin","margin → border → padding → content"],ansIdx:0,
 hint:"The box model layers from inside out: content, padding, border, margin. MDN: Introduction to the CSS basic box model.",
 fn:"boxModel",tests:[{a:[],e:true}]},

{id:57,title:"Flexbox Main Axis",diff:"Easy",cat:"HTML & CSS",
 desc:"What CSS property aligns flex items along the <strong>main axis</strong>?",
 code:`.container {
  display: flex;
  ___: center;
}`,
 options:["justify-content","align-items","align-content","flex-direction"],ansIdx:0,
 hint:"justify-content aligns items along the main axis. align-items aligns along the cross axis. MDN: justify-content.",
 fn:"flexMain",tests:[{a:[],e:true}]},

{id:58,title:"CSS Specificity",diff:"Medium",cat:"HTML & CSS",
 desc:"Which selector has the highest specificity?",
 code:`/* A: .btn
   B: #submit
   C: button
   D: button.btn */`,
 options:["B: #submit","A: .btn","C: button","D: button.btn"],ansIdx:0,
 hint:"ID selectors (#) have higher specificity than class (.) or element selectors. MDN: Specificity.",
 fn:"cssSpecificity",tests:[{a:[],e:true}]},

{id:59,title:"Semantic HTML",diff:"Easy",cat:"HTML & CSS",
 desc:"Which HTML element is the most semantically correct for the main navigation links?",
 code:`<___>
  <a href='/home'>Home</a>
  <a href='/about'>About</a>
</___>`,
 options:["<nav>","<div>","<ul>","<section>"],ansIdx:0,
 hint:"<nav> is the semantic HTML5 element for navigation links. MDN: <nav>: The Navigation Section element.",
 fn:"semanticNav",tests:[{a:[],e:true}]},

{id:60,title:"CSS Position",diff:"Medium",cat:"HTML & CSS",
 desc:"What CSS <code>position</code> value places an element relative to the viewport and stays fixed during scroll?",
 code:`.header {
  position: ___;
  top: 0;
}`,
 options:["fixed","absolute","relative","sticky"],ansIdx:0,
 hint:"position:fixed is relative to the viewport and does not scroll. position:sticky switches between relative and fixed. MDN: position.",
 fn:"cssFixed",tests:[{a:[],e:true}]},

{id:61,title:"CSS Grid Columns",diff:"Easy",cat:"HTML & CSS",
 desc:"What does <code>grid-template-columns: repeat(3, 1fr)</code> create?",
 code:`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`,
 options:["3 equal-width columns","3 fixed 1px columns","3 rows","1 column repeated 3 times"],ansIdx:0,
 hint:"1fr means one fraction of available space. repeat(3, 1fr) creates 3 equal columns. MDN: CSS Grid Layout.",
 fn:"cssGrid",tests:[{a:[],e:true}]},

{id:62,title:"HTML data- Attributes",diff:"Easy",cat:"HTML & CSS",
 desc:"How do you access a <code>data-user-id='42'</code> attribute in JavaScript?",
 code:`<div id='box' data-user-id='42'></div>
const el = document.getElementById('box');
el.___`,
 options:["dataset.userId","getAttribute('data-user-id')","data.userId","Both A and B"],ansIdx:3,
 hint:"dataset converts hyphenated data attributes to camelCase. getAttribute also works. MDN: Using data attributes.",
 fn:"dataAttr",tests:[{a:[],e:true}]},

{id:63,title:"CSS :hover",diff:"Easy",cat:"HTML & CSS",
 desc:"What does the <code>:hover</code> pseudo-class select?",
 code:`a:hover { color: red; }`,
 options:["Link when mouse is over it","Link that was visited","Link that is active","First link on page"],ansIdx:0,
 hint:":hover matches when the user's pointer is over the element. MDN: :hover.",
 fn:"cssHover",tests:[{a:[],e:true}]},

{id:64,title:"z-index",diff:"Medium",cat:"HTML & CSS",
 desc:"For <code>z-index</code> to work, what must be true about the element?",
 code:`.modal {
  z-index: 100;
  /* What else is required? */
}`,
 options:["position must not be static","display must be block","float must be set","overflow must be hidden"],ansIdx:0,
 hint:"z-index only works on positioned elements (position: relative, absolute, fixed, or sticky). MDN: z-index.",
 fn:"zIndex",tests:[{a:[],e:true}]},

{id:65,title:"CSS Variables",diff:"Easy",cat:"HTML & CSS",
 desc:"How do you declare and use a CSS custom property (variable)?",
 code:`:root { ___ : #4285F4; }
.btn { color: var(___); }`,
 options:["--primary-color, --primary-color","$primary-color, $primary","@primary, @primary","primary-color, primary"],ansIdx:0,
 hint:"CSS custom properties start with --. Access them with var(). MDN: Using CSS custom properties.",
 fn:"cssVar",tests:[{a:[],e:true}]},

{id:66,title:"HTML Form Method",diff:"Easy",cat:"HTML & CSS",
 desc:"What is the default HTTP method for an HTML form?",
 code:`<form action='/submit'>
  <input type='submit' value='Send'>
</form>`,
 options:["GET","POST","PUT","DELETE"],ansIdx:0,
 hint:"Without a method attribute, forms default to GET. POST is used to send data in the request body. MDN: <form>.",
 fn:"formMethod",tests:[{a:[],e:"GET"}]},

{id:67,title:"CSS media query",diff:"Easy",cat:"HTML & CSS",
 desc:"What does this media query target?",
 code:`@media (max-width: 768px) {
  .sidebar { display: none; }
}`,
 options:["Screens 768px wide or narrower","Screens wider than 768px","Print media","Screens exactly 768px"],ansIdx:0,
 hint:"max-width means the styles apply when the viewport is AT MOST that width — mobile-first uses min-width. MDN: Using media queries.",
 fn:"mediaQuery",tests:[{a:[],e:true}]},

{id:68,title:"CSS transition",diff:"Easy",cat:"HTML & CSS",
 desc:"What does <code>transition: all 0.3s ease</code> do?",
 code:`.btn {
  background: blue;
  transition: all 0.3s ease;
}
.btn:hover { background: red; }`,
 options:["Animates all property changes over 0.3s","Sets background immediately","Delays the element loading by 0.3s","Applies a CSS animation"],ansIdx:0,
 hint:"CSS transitions animate changes from one state to another smoothly. MDN: CSS transitions.",
 fn:"cssTransition",tests:[{a:[],e:true}]},

{id:69,title:"alt attribute",diff:"Easy",cat:"HTML & CSS",
 desc:"What is the purpose of the <code>alt</code> attribute on an <code>&lt;img&gt;</code>?",
 code:`<img src='logo.png' alt='Company logo'>`,
 options:["Provides text alternative for screen readers and when image fails to load","Sets image title on hover","Makes the image clickable","Sets the image size"],ansIdx:0,
 hint:"The alt attribute provides alternative text for accessibility and when the image cannot be displayed. MDN: <img>.",
 fn:"altAttr",tests:[{a:[],e:true}]},

{id:70,title:"CSS Flexbox — align-items",diff:"Easy",cat:"HTML & CSS",
 desc:"What does <code>align-items: center</code> do in a flex container?",
 code:`.container {
  display: flex;
  align-items: center;
}`,
 options:["Centers items on the cross axis","Centers items on the main axis","Centers text inside items","Adds equal spacing between items"],ansIdx:0,
 hint:"align-items applies to the cross axis (perpendicular to flex-direction). MDN: align-items.",
 fn:"alignItems",tests:[{a:[],e:true}]},

{id:71,title:"input type=email",diff:"Easy",cat:"HTML & CSS",
 desc:"What built-in validation does <code>type='email'</code> provide?",
 code:`<input type='email' name='email'>`,
 options:["Requires @ and domain format before form submit","Sends an email automatically","Encrypts the input","Blocks non-English characters"],ansIdx:0,
 hint:"type='email' provides browser-native format validation. MDN: <input type=email>.",
 fn:"inputEmail",tests:[{a:[],e:true}]},

{id:72,title:"CSS :nth-child",diff:"Medium",cat:"HTML & CSS",
 desc:"Which selector targets every <strong>even-numbered</strong> list item?",
 code:`li:___ { background: lightblue; }`,
 options:["nth-child(even)","nth-child(2)","nth-child(odd)","nth-of-type(2)"],ansIdx:0,
 hint:":nth-child(even) matches elements at even positions (2, 4, 6...). MDN: :nth-child.",
 fn:"nthChild",tests:[{a:[],e:true}]},

{id:73,title:"CSS overflow",diff:"Easy",cat:"HTML & CSS",
 desc:"What value of <code>overflow</code> hides content that exceeds the container without showing a scrollbar?",
 code:`.box {
  width: 100px;
  overflow: ___;
}`,
 options:["hidden","scroll","auto","clip"],ansIdx:0,
 hint:"overflow:hidden clips overflowing content. scroll always shows scrollbars. auto shows them only when needed. MDN: overflow.",
 fn:"cssOverflow",tests:[{a:[],e:true}]},

{id:74,title:"HTML5 Canvas",diff:"Medium",cat:"HTML & CSS",
 desc:"What JavaScript method is required to begin drawing on a Canvas element?",
 code:`const ctx = canvas.getContext('___');`,
 options:["2d","canvas","draw","render"],ansIdx:0,
 hint:"getContext('2d') returns a 2D drawing context. getContext('webgl') returns a WebGL context. MDN: Canvas API.",
 fn:"canvas",tests:[{a:[],e:true}]},

{id:75,title:"CSS display values",diff:"Easy",cat:"HTML & CSS",
 desc:"Which <code>display</code> value makes an element take full width and start on a new line?",
 code:`.el { display: ___; }`,
 options:["block","inline","inline-block","flex"],ansIdx:0,
 hint:"block elements take up full width and start on new lines. inline elements flow with text. MDN: display.",
 fn:"cssDisplay",tests:[{a:[],e:true}]},

{id:76,title:"iframe",diff:"Easy",cat:"HTML & CSS",
 desc:"What does an HTML <code>&lt;iframe&gt;</code> element do?",
 code:`<iframe src='https://example.com'></iframe>`,
 options:["Embeds another HTML page inside the current one","Creates a form field","Displays an image","Links to an external page"],ansIdx:0,
 hint:"<iframe> (inline frame) embeds another document within the current HTML document. MDN: <iframe>.",
 fn:"iframe",tests:[{a:[],e:true}]},

{id:77,title:"CSS Calc()",diff:"Medium",cat:"HTML & CSS",
 desc:"What does <code>width: calc(100% - 40px)</code> compute?",
 code:`.box { width: calc(100% - 40px); }`,
 options:["Full parent width minus 40px","100 percent","40px","Syntax error"],ansIdx:0,
 hint:"calc() allows mixing units in CSS expressions. MDN: calc().",
 fn:"cssCalc",tests:[{a:[],e:true}]},

{id:78,title:"HTML5 Doctype",diff:"Easy",cat:"HTML & CSS",
 desc:"What is the correct HTML5 doctype declaration?",
 code:`___ html`,
 options:["<!DOCTYPE","<!doctype HTML5","<html doctype>","<?html>"],ansIdx:0,
 hint:"<!DOCTYPE html> is the HTML5 doctype. It tells browsers to use standards mode. MDN: Doctype.",
 fn:"doctype",tests:[{a:[],e:true}]},

{id:79,title:"CSS inherit keyword",diff:"Medium",cat:"HTML & CSS",
 desc:"What does <code>color: inherit</code> do?",
 code:`.child { color: inherit; }`,
 options:["Uses the parent element's color value","Resets color to browser default","Sets color to transparent","Makes text invisible"],ansIdx:0,
 hint:"inherit explicitly uses the computed value from the parent element. MDN: inherit.",
 fn:"cssInherit",tests:[{a:[],e:true}]},

{id:80,title:"CSS Grid vs Flexbox",diff:"Easy",cat:"HTML & CSS",
 desc:"Which layout system is best suited for a <strong>two-dimensional</strong> layout (rows AND columns)?",
 code:`/* Rows and columns simultaneously? */`,
 options:["CSS Grid","Flexbox","Float","Table"],ansIdx:0,
 hint:"CSS Grid is two-dimensional (rows and columns). Flexbox is one-dimensional (one axis at a time). MDN: CSS Grid Layout.",
 fn:"gridVsFlex",tests:[{a:[],e:true}]},

/* ══ ALGORITHMS & DSA (81–115) — LeetCode types + freeCodeCamp ══ */
{id:81,title:"Two Pointers — Valid Palindrome",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>isPalindrome(s)</code> that returns true if s is a palindrome after removing non-alphanumeric chars and lowercasing. (LeetCode #125 type)",
 hint:"Clean string: s.toLowerCase().replace(/[^a-z0-9]/g,'') then compare to its reverse.",
 start:"function isPalindrome(s) {\n  const clean = s.toLowerCase().replace(/[^a-z0-9]/g,'');\n  // Compare clean to its reverse\n\n}",
 fn:"isPalindrome",tests:[{a:["A man a plan a canal Panama"],e:true},{a:["race a car"],e:false},{a:[""],e:true}]},

{id:82,title:"Sliding Window — Max Subarray Sum",diff:"Medium",cat:"Algorithms",
 desc:"Write <code>maxSubarraySum(arr, k)</code> returning the maximum sum of any <strong>k consecutive elements</strong>. (Sliding window pattern from freeCodeCamp DSA)",
 hint:"Compute the first window sum, then slide: add arr[i] and subtract arr[i-k] each step.",
 start:"function maxSubarraySum(arr, k) {\n  // Sliding window — O(n)\n\n}",
 fn:"maxSubarraySum",tests:[{a:[[1,2,5,2,8,1,5],2],e:10},{a:[[1,2,5,2,8,1,5],4],e:17},{a:[[4,2,1,6],1],e:6}]},

{id:83,title:"Hash Map — First Unique Character",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>firstUniqChar(s)</code> returning the index of the first non-repeating character, or -1 if none. (LeetCode #387 type)",
 hint:"Build a frequency map first, then scan the string for the first char with count 1.",
 start:"function firstUniqChar(s) {\n  // Build frequency map then scan\n\n}",
 fn:"firstUniqChar",tests:[{a:["leetcode"],e:0},{a:["loveleetcode"],e:2},{a:["aabb"],e:-1}]},

{id:84,title:"Stack — Valid Parentheses",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>isValid(s)</code> that returns true if brackets in s are correctly paired. (LeetCode #20 type)",
 hint:"Use a stack. Push openers. On closer, check if stack top is matching opener.",
 start:"function isValid(s) {\n  const stack = [];\n  const map = {')':'(', ']':'[', '}':'{'};\n  // Your code here\n\n}",
 fn:"isValid",tests:[{a:["()[]{}"],e:true},{a:["(]"],e:false},{a:["([)]"],e:false},{a:["{[]}"],e:true}]},

{id:85,title:"Linked List — Reverse",diff:"Medium",cat:"Algorithms",
 desc:"Write <code>reverseArray(arr)</code> reversing in-place using two pointers (simulates linked list reversal). (LeetCode #206 concept)",
 hint:"Two pointers: left=0, right=arr.length-1. Swap and move inward until they meet.",
 start:"function reverseArray(arr) {\n  const a = [...arr];\n  // Two pointer swap\n\n  return a;\n}",
 fn:"reverseArray",tests:[{a:[[1,2,3,4,5]],e:[5,4,3,2,1]},{a:[[1,2]],e:[2,1]},{a:[[1]],e:[1]}]},

{id:86,title:"Dynamic Programming — Climbing Stairs",diff:"Medium",cat:"Algorithms",
 desc:"Write <code>climbStairs(n)</code>: you can climb 1 or 2 steps. How many distinct ways to reach step n? (LeetCode #70)",
 hint:"This is Fibonacci! dp[i] = dp[i-1] + dp[i-2]. Base: dp[1]=1, dp[2]=2.",
 start:"function climbStairs(n) {\n  // DP — same as Fibonacci\n\n}",
 fn:"climbStairs",tests:[{a:[1],e:1},{a:[2],e:2},{a:[3],e:3},{a:[5],e:8}]},

{id:87,title:"Binary — Count Set Bits",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>hammingWeight(n)</code> that returns the number of 1 bits in the binary representation of n. (LeetCode #191 type)",
 hint:"Loop: count (n & 1), then n >>= 1. Or use n.toString(2).split('0').join('').length.",
 start:"function hammingWeight(n) {\n  // Count 1 bits in binary\n\n}",
 fn:"hammingWeight",tests:[{a:[11],e:3},{a:[128],e:1},{a:[4294967293],e:31}]},

{id:88,title:"Two Sum — Hash Map",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>twoSum(nums, target)</code> returning indices of two numbers that add to target. Exactly one solution exists. (LeetCode #1)",
 hint:"Hash map: for each num, check if (target - num) is already in map. If yes, return both indices.",
 start:"function twoSum(nums, target) {\n  const map = {};\n  // Your code here\n\n}",
 fn:"twoSum",tests:[{a:[[2,7,11,15],9],e:[0,1]},{a:[[3,2,4],6],e:[1,2]},{a:[[3,3],6],e:[0,1]}]},

{id:89,title:"Merge Sort",diff:"Hard",cat:"Algorithms",
 desc:"Write <code>mergeSort(arr)</code> implementing the merge sort algorithm recursively. Return the sorted array.",
 hint:"Divide into halves. Recursively sort each half. Merge sorted halves by comparing front elements.",
 start:"function mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  const mid = Math.floor(arr.length / 2);\n  // Split, sort each half, merge\n\n}",
 fn:"mergeSort",tests:[{a:[[5,3,8,1,2]],e:[1,2,3,5,8]},{a:[[9,1]],e:[1,9]},{a:[[1]],e:[1]}]},

{id:90,title:"Depth-First Search",diff:"Hard",cat:"Algorithms",
 desc:"Write <code>dfs(graph, start)</code> returning an array of node values visited in DFS order from start.",
 hint:"Use a stack (or recursion). Track visited nodes. Push neighbors and visit if not already visited.",
 start:"function dfs(graph, start) {\n  const visited = new Set();\n  const result = [];\n  // Iterative DFS using stack\n\n  return result;\n}",
 fn:"dfs",tests:[{a:[{A:['B','C'],B:['D'],C:['D'],D:[]},'A'],e:['A','C','D','B']}]},

{id:91,title:"String Anagram Groups",diff:"Medium",cat:"Algorithms",
 desc:"Write <code>groupAnagrams(strs)</code> that groups words that are anagrams of each other. (LeetCode #49 type)",
 hint:"Use a Map. For each word, sort its letters as the key. Group words with the same sorted key.",
 start:"function groupAnagrams(strs) {\n  const map = new Map();\n  // Sort each word's letters as key\n\n}",
 fn:"groupAnagrams",tests:[{a:[["eat","tea","tan","ate","nat","bat"]],e:[["eat","tea","ate"],["tan","nat"],["bat"]]}]},

{id:92,title:"Longest Increasing Subsequence",diff:"Hard",cat:"Algorithms",
 desc:"Write <code>lengthOfLIS(nums)</code> returning the length of the longest strictly increasing subsequence. (LeetCode #300 type)",
 hint:"DP: dp[i] = length of LIS ending at index i. For each i, check all j<i where nums[j]<nums[i].",
 start:"function lengthOfLIS(nums) {\n  if (!nums.length) return 0;\n  const dp = new Array(nums.length).fill(1);\n  // Your DP code here\n\n}",
 fn:"lengthOfLIS",tests:[{a:[[10,9,2,5,3,7,101,18]],e:4},{a:[[0,1,0,3,2,3]],e:4},{a:[[7,7,7,7,7]],e:1}]},

{id:93,title:"Product of Array Except Self",diff:"Medium",cat:"Algorithms",
 desc:"Write <code>productExceptSelf(nums)</code> returning array where each element is the product of all others. No division. (LeetCode #238 type)",
 hint:"Two passes: prefix products left-to-right, suffix products right-to-left. Multiply together.",
 start:"function productExceptSelf(nums) {\n  const n = nums.length;\n  const result = new Array(n).fill(1);\n  // Left pass, then right pass\n\n  return result;\n}",
 fn:"productExceptSelf",tests:[{a:[[1,2,3,4]],e:[24,12,8,6]},{a:[[-1,1,0,-3,3]],e:[0,0,9,0,0]}]},

{id:94,title:"Valid Sudoku Row Check",diff:"Medium",cat:"Algorithms",
 desc:"Write <code>hasNoDuplicates(arr)</code> that returns true if a 9-element array (a Sudoku row) has no duplicate digits 1–9 (ignoring '.'). (LeetCode #36 component)",
 hint:"Filter out '.', then check if Set size equals the filtered length.",
 start:"function hasNoDuplicates(arr) {\n  const nums = arr.filter(x => x !== '.');\n  // Check for duplicates\n\n}",
 fn:"hasNoDuplicates",tests:[{a:[["5","3",".",".","7",".",".",".","."]],e:true},{a:[["8","3",".",".","7",".",".",".","8"]],e:false}]},

{id:95,title:"Power of Two",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>isPowerOfTwo(n)</code> returning true if n is a power of 2. (LeetCode #231 type)",
 hint:"A power of 2 has exactly one bit set. n & (n-1) === 0 checks this. Also n must be > 0.",
 start:"function isPowerOfTwo(n) {\n  // Bit trick: n & (n-1)\n\n}",
 fn:"isPowerOfTwo",tests:[{a:[1],e:true},{a:[16],e:true},{a:[3],e:false},{a:[0],e:false}]},

{id:96,title:"Rotate Array",diff:"Medium",cat:"Algorithms",
 desc:"Write <code>rotate(nums, k)</code> rotating array to the right by k steps. (LeetCode #189 type)",
 hint:"Use slice: [...nums.slice(-k % nums.length), ...nums.slice(0, -k % nums.length)]",
 start:"function rotate(nums, k) {\n  // Rotate right by k steps\n\n}",
 fn:"rotate",tests:[{a:[[1,2,3,4,5,6,7],3],e:[5,6,7,1,2,3,4]},{a:[[-1,-100,3,99],2],e:[3,99,-1,-100]}]},

{id:97,title:"Contains Duplicate",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>containsDuplicate(nums)</code> returning true if any value appears at least twice. (LeetCode #217 type)",
 hint:"Compare Set size to array length. If different, there are duplicates.",
 start:"function containsDuplicate(nums) {\n  // One-liner using Set\n\n}",
 fn:"containsDuplicate",tests:[{a:[[1,2,3,1]],e:true},{a:[[1,2,3,4]],e:false},{a:[[1,1,1,3,3,4,3,2,4,2]],e:true}]},

{id:98,title:"Max Profit — Stock",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>maxProfit(prices)</code> to find the max profit from one buy-sell. (LeetCode #121 type)",
 hint:"Track minPrice as you go. At each step, check if (price - minPrice) > maxProfit.",
 start:"function maxProfit(prices) {\n  let minPrice = Infinity;\n  let maxProfit = 0;\n  // Single pass\n\n  return maxProfit;\n}",
 fn:"maxProfit",tests:[{a:[[7,1,5,3,6,4]],e:5},{a:[[7,6,4,3,1]],e:0}]},

{id:99,title:"Intersection of Arrays",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>intersection(nums1, nums2)</code> returning the intersection (unique values in both). (LeetCode #349 type)",
 hint:"Convert both to Sets, then filter set1 for values that exist in set2.",
 start:"function intersection(nums1, nums2) {\n  const set1 = new Set(nums1);\n  const set2 = new Set(nums2);\n  // Filter set1 by set2 membership\n\n}",
 fn:"intersection",tests:[{a:[[1,2,2,1],[2,2]],e:[2]},{a:[[4,9,5],[9,4,9,8,4]],e:[9,4]}]},

{id:100,title:"Pascal's Triangle Row",diff:"Medium",cat:"Algorithms",
 desc:"Write <code>getRow(rowIndex)</code> returning the rowIndex-th row of Pascal's Triangle. (LeetCode #119 type)",
 hint:"Start with [1]. Each row: new element = prev[j-1] + prev[j]. Build iteratively.",
 start:"function getRow(rowIndex) {\n  let row = [1];\n  for (let i = 1; i <= rowIndex; i++) {\n    // Build next row from current row\n\n  }\n  return row;\n}",
 fn:"getRow",tests:[{a:[0],e:[1]},{a:[1],e:[1,1]},{a:[3],e:[1,3,3,1]},{a:[4],e:[1,4,6,4,1]}]},

{id:101,title:"Majority Element",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>majorityElement(nums)</code> returning the element that appears more than n/2 times. (LeetCode #169 — Boyer-Moore voting)",
 hint:"Boyer-Moore: maintain candidate and count. If count=0, set candidate=current. Increment if match, decrement otherwise.",
 start:"function majorityElement(nums) {\n  let candidate, count = 0;\n  // Boyer-Moore voting\n\n  return candidate;\n}",
 fn:"majorityElement",tests:[{a:[[3,2,3]],e:3},{a:[[2,2,1,1,1,2,2]],e:2}]},

{id:102,title:"Move Zeroes",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>moveZeroes(nums)</code> moving all 0s to the end while maintaining order of non-zeros. (LeetCode #283 type)",
 hint:"Two pointer: write pointer tracks position for next non-zero. Fill rest with zeros.",
 start:"function moveZeroes(nums) {\n  const a = [...nums];\n  let write = 0;\n  // Place non-zeros first\n\n  return a;\n}",
 fn:"moveZeroes",tests:[{a:[[0,1,0,3,12]],e:[1,3,12,0,0]},{a:[[0]],e:[0]}]},

{id:103,title:"Single Number",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>singleNumber(nums)</code> where every element appears twice except one. Find it. (LeetCode #136 — XOR trick)",
 hint:"XOR all numbers. Pairs cancel out (a ^ a = 0). The lone number remains.",
 start:"function singleNumber(nums) {\n  // XOR all elements\n  return nums.reduce(___)\n}",
 fn:"singleNumber",tests:[{a:[[2,2,1]],e:1},{a:[[4,1,2,1,2]],e:4}]},

{id:104,title:"Valid Mountain Array",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>validMountain(arr)</code> returning true if the array strictly increases then strictly decreases. (LeetCode #941 type)",
 hint:"Find peak index. Verify peak is not at edges. Left of peak must increase, right must decrease.",
 start:"function validMountain(arr) {\n  const n = arr.length;\n  if (n < 3) return false;\n  // Find peak, verify slopes\n\n}",
 fn:"validMountain",tests:[{a:[[0,3,2,1]],e:true},{a:[[3,5,5]],e:false},{a:[[0,1,2,3]],e:false}]},

{id:105,title:"Search Insert Position",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>searchInsert(nums, target)</code> returning the index where target is or would be inserted. (LeetCode #35 — Binary search)",
 hint:"Classic binary search. When loop ends, low is the insert position.",
 start:"function searchInsert(nums, target) {\n  let low = 0, high = nums.length - 1;\n  while (low <= high) {\n    const mid = Math.floor((low + high) / 2);\n    // Binary search\n\n  }\n  return low;\n}",
 fn:"searchInsert",tests:[{a:[[1,3,5,6],5],e:2},{a:[[1,3,5,6],2],e:1},{a:[[1,3,5,6],7],e:4}]},

{id:106,title:"Roman to Integer",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>romanToInt(s)</code> converting a Roman numeral string to an integer. (LeetCode #13 type)",
 hint:"Map values. If current value < next value, subtract. Otherwise add.",
 start:"function romanToInt(s) {\n  const val = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};\n  let total = 0;\n  // Scan left to right, subtract if current < next\n\n  return total;\n}",
 fn:"romanToInt",tests:[{a:["III"],e:3},{a:["LVIII"],e:58},{a:["MCMXCIV"],e:1994}]},

{id:107,title:"Count Bits",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>countBits(n)</code> returning an array of length n+1 where each element is the number of 1s in that index's binary form. (LeetCode #338 type)",
 hint:"dp[i] = dp[i >> 1] + (i & 1). Right-shift gives the same number without last bit.",
 start:"function countBits(n) {\n  const dp = new Array(n + 1).fill(0);\n  for (let i = 1; i <= n; i++) {\n    dp[i] = dp[i >> 1] + (i & 1);\n  }\n  return dp;\n}",
 fn:"countBits",tests:[{a:[2],e:[0,1,1]},{a:[5],e:[0,1,1,2,1,2]}]},

{id:108,title:"Fizz Buzz Variants",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>fizzBuzz(n)</code> for 1 to n: divisible by 3 → 'Fizz', 5 → 'Buzz', both → 'FizzBuzz', else the number as string. (LeetCode #412 type)",
 hint:"Check % 15 first (both), then % 3, then % 5. Return strings not numbers.",
 start:"function fizzBuzz(n) {\n  const result = [];\n  for (let i = 1; i <= n; i++) {\n    // Build result string\n\n  }\n  return result;\n}",
 fn:"fizzBuzz",tests:[{a:[3],e:["1","2","Fizz"]},{a:[5],e:["1","2","Fizz","4","Buzz"]}]},

{id:109,title:"Palindrome Number",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>isPalindromeNum(x)</code> returning true if integer x reads the same forwards and backwards. (LeetCode #9 type)",
 hint:"Negative numbers and numbers ending in 0 (except 0) are not palindromes. Convert to string and reverse.",
 start:"function isPalindromeNum(x) {\n  if (x < 0) return false;\n  const s = String(x);\n  // Compare to reversed\n\n}",
 fn:"isPalindromeNum",tests:[{a:[121],e:true},{a:[-121],e:false},{a:[10],e:false}]},

{id:110,title:"Squares of Sorted Array",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>sortedSquares(nums)</code> returning the squares of a sorted array, also sorted. (LeetCode #977 — Two pointers)",
 hint:"Two pointers from both ends. Largest absolute value is at one end. Fill result array from the back.",
 start:"function sortedSquares(nums) {\n  const n = nums.length;\n  const result = new Array(n);\n  let left = 0, right = n - 1, pos = n - 1;\n  // Two pointers\n\n  return result;\n}",
 fn:"sortedSquares",tests:[{a:[[-4,-1,0,3,10]],e:[0,1,9,16,100]},{a:[[-7,-3,2,3,11]],e:[4,9,9,49,121]}]},

{id:111,title:"Isomorphic Strings",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>isIsomorphic(s,t)</code> returning true if characters in s can be replaced to get t. (LeetCode #205 type)",
 hint:"Use two maps: s→t and t→s. Each char must map consistently in both directions.",
 start:"function isIsomorphic(s, t) {\n  const mapST = {}, mapTS = {};\n  for (let i = 0; i < s.length; i++) {\n    // Check both direction mappings\n\n  }\n  return true;\n}",
 fn:"isIsomorphic",tests:[{a:["egg","add"],e:true},{a:["foo","bar"],e:false},{a:["paper","title"],e:true}]},

{id:112,title:"Missing Ranges",diff:"Medium",cat:"Algorithms",
 desc:"Write <code>summaryRanges(nums)</code> returning consecutive ranges as strings like '0→2' or '4'. (LeetCode #228 type)",
 hint:"Walk through the array. When a gap in sequence occurs, save the current range and start a new one.",
 start:"function summaryRanges(nums) {\n  const result = [];\n  let i = 0;\n  while (i < nums.length) {\n    let start = nums[i];\n    while (i + 1 < nums.length && nums[i+1] === nums[i] + 1) i++;\n    result.push(start === nums[i] ? String(start) : `${start}->${nums[i]}`);\n    i++;\n  }\n  return result;\n}",
 fn:"summaryRanges",tests:[{a:[[0,1,2,4,5,7]],e:["0->2","4->5","7"]},{a:[[0,2,3,4,6,8,9]],e:["0","2->4","6","8->9"]}]},

{id:113,title:"Number to Words — Digit",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>digitWord(n)</code> converting single digit 0–9 to its English word.",
 hint:"Use an array as a lookup table: const words = ['zero','one','two',...,'nine']",
 start:"function digitWord(n) {\n  const words = ['zero','one','two','three','four','five','six','seven','eight','nine'];\n  return words[n];\n}",
 fn:"digitWord",tests:[{a:[0],e:"zero"},{a:[5],e:"five"},{a:[9],e:"nine"}]},

{id:114,title:"Reverse Vowels",diff:"Easy",cat:"Algorithms",
 desc:"Write <code>reverseVowels(s)</code> that reverses only the vowels in the string. (LeetCode #345 type)",
 hint:"Two pointers. Move inward until both point at vowels. Swap those vowels. Continue.",
 start:"function reverseVowels(s) {\n  const vowels = new Set('aeiouAEIOU');\n  const a = s.split('');\n  let l = 0, r = a.length - 1;\n  while (l < r) {\n    while (l < r && !vowels.has(a[l])) l++;\n    while (l < r && !vowels.has(a[r])) r--;\n    [a[l], a[r]] = [a[r], a[l]];\n    l++; r--;\n  }\n  return a.join('');\n}",
 fn:"reverseVowels",tests:[{a:["hello"],e:"holle"},{a:["leetcode"],e:"leotcede"}]},

{id:115,title:"Path Sum Check",diff:"Medium",cat:"Algorithms",
 desc:"Write <code>pathSum(path, target)</code> returning true if the sum of numbers in the path array equals target (simulates tree path sum check). (LeetCode #112 concept)",
 hint:"Sum the array with reduce. Compare to target.",
 start:"function pathSum(path, target) {\n  return path.reduce((a, b) => a + b, 0) === target;\n}",
 fn:"pathSum",tests:[{a:[[5,4,8,11,2],30],e:true},{a:[[1,2,3],5],e:false},{a:[[1,7,2],10],e:true}]},

/* ══ STRING METHODS (116–140) — MDN String Reference + W3Schools ══ */
{id:116,title:"String .length",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'Hello World'.length</code> return?",
 code:`'Hello World'.length`,
 options:["11","10","12","undefined"],ansIdx:0,
 hint:"The length property returns the number of UTF-16 code units. Spaces count. MDN: String.prototype.length.",
 fn:"strLength",tests:[{a:["Hello World"],e:11},{a:[""],e:0}]},

{id:117,title:"String .toUpperCase()",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'hello'.toUpperCase()</code> return?",
 code:`'hello'.toUpperCase()`,
 options:['"HELLO"','"Hello"','"hello"',"TypeError"],ansIdx:0,
 hint:"toUpperCase() returns a new string in uppercase. Does not mutate original. MDN: String.prototype.toUpperCase().",
 fn:"toUpper",tests:[{a:["hello"],e:"HELLO"}]},

{id:118,title:"String .includes()",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'JavaScript'.includes('Script')</code> return?",
 code:`'JavaScript'.includes('Script')`,
 options:["true","false","1","undefined"],ansIdx:0,
 hint:"includes() is case-sensitive. Returns true if string contains the substring. MDN: String.prototype.includes().",
 fn:"strIncludes",tests:[{a:["JavaScript","Script"],e:true},{a:["JavaScript","script"],e:false}]},

{id:119,title:"String .startsWith()",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'Hello World'.startsWith('Hello')</code> return?",
 code:`'Hello World'.startsWith('Hello')`,
 options:["true","false",'"Hello"',"undefined"],ansIdx:0,
 hint:"startsWith() checks if string begins with the given prefix. Case-sensitive. MDN: String.prototype.startsWith().",
 fn:"startsWith",tests:[{a:["Hello World","Hello"],e:true},{a:["Hello World","World"],e:false}]},

{id:120,title:"String .endsWith()",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'image.png'.endsWith('.png')</code> return?",
 code:`'image.png'.endsWith('.png')`,
 options:["true","false",".png","SyntaxError"],ansIdx:0,
 hint:"endsWith() checks if string ends with the given suffix. MDN: String.prototype.endsWith().",
 fn:"endsWith",tests:[{a:["image.png",".png"],e:true},{a:["image.jpg",".png"],e:false}]},

{id:121,title:"String .indexOf()",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'hello'.indexOf('l')</code> return?",
 code:`'hello'.indexOf('l')`,
 options:["2","3","-1","1"],ansIdx:0,
 hint:"indexOf returns the FIRST index of the substring, or -1 if not found. MDN: String.prototype.indexOf().",
 fn:"indexOf",tests:[{a:["hello","l"],e:2},{a:["hello","z"],e:-1}]},

{id:122,title:"String .slice()",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'hello world'.slice(6)</code> return?",
 code:`'hello world'.slice(6)`,
 options:['"world"','"hello"','"hello world"','"ello world"'],ansIdx:0,
 hint:"slice(start) extracts from start to end. slice(start, end) extracts up to (not including) end. MDN: String.prototype.slice().",
 fn:"strSlice",tests:[{a:["hello world",6],e:"world"},{a:["hello world",0,5],e:"hello"}]},

{id:123,title:"String .replace()",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'cat cat cat'.replace('cat','dog')</code> return?",
 code:`'cat cat cat'.replace('cat', 'dog')`,
 options:['"dog cat cat"','"dog dog dog"','"cat dog cat"',"TypeError"],ansIdx:0,
 hint:".replace() with a string pattern only replaces the FIRST match. Use a regex /cat/g for all. MDN: String.prototype.replace().",
 fn:"strReplace",tests:[{a:["cat cat cat","cat","dog"],e:"dog cat cat"}]},

{id:124,title:"String .replaceAll()",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'cat cat cat'.replaceAll('cat','dog')</code> return?",
 code:`'cat cat cat'.replaceAll('cat','dog')`,
 options:['"dog dog dog"','"dog cat cat"','"cat cat dog"',"TypeError"],ansIdx:0,
 hint:".replaceAll() replaces ALL occurrences. MDN: String.prototype.replaceAll().",
 fn:"strReplaceAll",tests:[{a:["cat cat cat","cat","dog"],e:"dog dog dog"}]},

{id:125,title:"String .trim()",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'  hello  '.trim()</code> return?",
 code:`'  hello  '.trim()`,
 options:['"hello"','"  hello  "','"hello  "','"  hello"'],ansIdx:0,
 hint:".trim() removes whitespace from both ends. .trimStart() and .trimEnd() target one side. MDN: String.prototype.trim().",
 fn:"strTrim",tests:[{a:["  hello  "],e:"hello"}]},

{id:126,title:"String .padStart()",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'5'.padStart(3, '0')</code> return?",
 code:`'5'.padStart(3, '0')`,
 options:['"005"','"500"','"555"','"5"'],ansIdx:0,
 hint:"padStart(length, fill) pads the beginning of a string to a target length. MDN: String.prototype.padStart().",
 fn:"padStart",tests:[{a:["5",3,"0"],e:"005"},{a:["42",5,"0"],e:"00042"}]},

{id:127,title:"String .split()",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'a-b-c'.split('-')</code> return?",
 code:`'a-b-c'.split('-')`,
 options:['["a","b","c"]','["a-b-c"]',"'a b c'","SyntaxError"],ansIdx:0,
 hint:"split(separator) divides a string into array elements. MDN: String.prototype.split().",
 fn:"strSplit",tests:[{a:["a-b-c","-"],e:["a","b","c"]}]},

{id:128,title:"String .charAt()",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'hello'.charAt(1)</code> return?",
 code:`'hello'.charAt(1)`,
 options:['"e"','"h"','"l"',"1"],ansIdx:0,
 hint:".charAt(index) returns the character at that position. Also works: 'hello'[1]. MDN: String.prototype.charAt().",
 fn:"charAt",tests:[{a:["hello",1],e:"e"}]},

{id:129,title:"String .charCodeAt()",diff:"Medium",cat:"String Methods",
 desc:"What does <code>'A'.charCodeAt(0)</code> return?",
 code:`'A'.charCodeAt(0)`,
 options:["65","97","41","64"],ansIdx:0,
 hint:"'A' has ASCII code 65. 'a' has code 97. MDN: String.prototype.charCodeAt().",
 fn:"charCodeAt",tests:[{a:["A",0],e:65},{a:["a",0],e:97}]},

{id:130,title:"String .match()",diff:"Medium",cat:"String Methods",
 desc:"What does <code>'test123'.match(/\\d+/)</code> return?",
 code:`'test123'.match(/\\d+/)`,
 options:['["123"]',"null","123","true"],ansIdx:0,
 hint:".match() returns an array of matches. With /g flag it returns all matches. Without g, returns first match details. MDN: String.prototype.match().",
 fn:"strMatch",tests:[{a:["test123"],e:["123"]}]},

{id:131,title:"String .repeat()",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'ab'.repeat(3)</code> return?",
 code:`'ab'.repeat(3)`,
 options:['"ababab"','"ab3"','"aabbab"',"TypeError"],ansIdx:0,
 hint:".repeat(count) returns a new string with count copies concatenated. MDN: String.prototype.repeat().",
 fn:"strRepeat",tests:[{a:["ab",3],e:"ababab"}]},

{id:132,title:"String .at()",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'hello'.at(-1)</code> return?",
 code:`'hello'.at(-1)`,
 options:['"o"','"h"','"e"',"undefined"],ansIdx:0,
 hint:".at() supports negative indices — -1 is the last character. MDN: String.prototype.at().",
 fn:"strAt",tests:[{a:["hello",-1],e:"o"},{a:["hello",0],e:"h"}]},

{id:133,title:"String Template Literal — Multiline",diff:"Easy",cat:"String Methods",
 desc:"What feature of template literals allows multi-line strings without <code>\\n</code>?",
 code:"const poem = `\nRoses are red\nViolets are blue\n`;",
 options:["Backticks allow literal newlines","You must still use \\n","Single quotes allow newlines","Double quotes allow newlines"],ansIdx:0,
 hint:"Template literals (backtick strings) preserve literal newlines and whitespace. MDN: Template literals.",
 fn:"templateMultiline",tests:[{a:[],e:true}]},

{id:134,title:"String .normalize()",diff:"Hard",cat:"String Methods",
 desc:"What is the purpose of <code>String.prototype.normalize()</code>?",
 code:`'\\u00e9'.normalize('NFD')`,
 options:["Converts Unicode to a canonical form","Converts to uppercase","Removes special characters","Converts to ASCII"],ansIdx:0,
 hint:".normalize() converts Unicode strings to a canonical form (e.g. NFD, NFC). Important for correct string comparison. MDN: String.prototype.normalize().",
 fn:"strNormalize",tests:[{a:[],e:true}]},

{id:135,title:"String Comparison",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'banana' > 'apple'</code> return?",
 code:`'banana' > 'apple'`,
 options:["true","false","1","undefined"],ansIdx:0,
 hint:"Strings are compared character by character using Unicode code points. 'b' (98) > 'a' (97). MDN: Comparison operators.",
 fn:"strCompare",tests:[{a:[],e:true}]},

{id:136,title:"String.fromCharCode()",diff:"Medium",cat:"String Methods",
 desc:"What does <code>String.fromCharCode(72, 101, 108, 108, 111)</code> return?",
 code:`String.fromCharCode(72,101,108,108,111)`,
 options:['"Hello"','"72101108108111"','"HELLO"',"TypeError"],ansIdx:0,
 hint:"String.fromCharCode() converts Unicode code points to characters. 72=H, 101=e, 108=l, 111=o. MDN: String.fromCharCode().",
 fn:"fromCharCode",tests:[{a:[[72,101,108,108,111]],e:"Hello"}]},

{id:137,title:"String .substring()",diff:"Easy",cat:"String Methods",
 desc:"What does <code>'Hello World'.substring(0, 5)</code> return?",
 code:`'Hello World'.substring(0, 5)`,
 options:['"Hello"','"World"','"Hello World"','"ello "'],ansIdx:0,
 hint:"substring(start, end) extracts from start up to (not including) end. MDN: String.prototype.substring().",
 fn:"strSubstring",tests:[{a:["Hello World",0,5],e:"Hello"},{a:["Hello World",6],e:"World"}]},

{id:138,title:"Regex test()",diff:"Medium",cat:"String Methods",
 desc:"What does <code>/^\\d{3}-\\d{4}$/.test('555-1234')</code> return?",
 code:`/^\\d{3}-\\d{4}$/.test('555-1234')`,
 options:["true","false","null","['555-1234']"],ansIdx:0,
 hint:".test() returns true/false. ^ anchors start, $ anchors end. \\d matches digits, {n} matches exactly n. MDN: RegExp.prototype.test().",
 fn:"regexTest",tests:[{a:["555-1234"],e:true},{a:["55-1234"],e:false}]},

{id:139,title:"String .search()",diff:"Medium",cat:"String Methods",
 desc:"What does <code>'hello world'.search(/world/)</code> return?",
 code:`'hello world'.search(/world/)`,
 options:["6","0","-1","true"],ansIdx:0,
 hint:".search() returns the index of the first regex match, or -1 if not found. MDN: String.prototype.search().",
 fn:"strSearch",tests:[{a:["hello world",/world/],e:6},{a:["hello world",/xyz/],e:-1}]},

{id:140,title:"String Immutability",diff:"Easy",cat:"String Methods",
 desc:"What happens when you try to change a character in a string directly?",
 code:`let s = 'hello';
s[0] = 'H';
console.log(s);`,
 options:['"hello" — strings are immutable','"Hello" — assignment worked',"TypeError","SyntaxError"],ansIdx:0,
 hint:"Strings in JavaScript are immutable primitives. Bracket assignment silently fails. MDN: String.",
 fn:"strImmutable",tests:[{a:[],e:true}]},

/* ══ ARRAY METHODS (141–165) — MDN Array Reference ══ */
{id:141,title:"Array .map()",diff:"Easy",cat:"Array Methods",
 desc:"What does <code>[1,2,3].map(x => x * 2)</code> return?",
 code:`[1,2,3].map(x => x * 2)`,
 options:["[2,4,6]","[1,2,3]","6","undefined"],ansIdx:0,
 hint:".map() creates a NEW array with the results of calling a function on every element. MDN: Array.prototype.map().",
 fn:"arrMap",tests:[{a:[[1,2,3]],e:[2,4,6]}]},

{id:142,title:"Array .filter()",diff:"Easy",cat:"Array Methods",
 desc:"What does <code>[1,2,3,4,5].filter(x => x > 3)</code> return?",
 code:`[1,2,3,4,5].filter(x => x > 3)`,
 options:["[4,5]","[1,2,3]","[3,4,5]","true"],ansIdx:0,
 hint:".filter() creates a new array with elements that pass the test. MDN: Array.prototype.filter().",
 fn:"arrFilter",tests:[{a:[[1,2,3,4,5]],e:[4,5]}]},

{id:143,title:"Array .reduce()",diff:"Easy",cat:"Array Methods",
 desc:"What does <code>[1,2,3,4].reduce((acc, x) => acc + x, 0)</code> return?",
 code:`[1,2,3,4].reduce((acc, x) => acc + x, 0)`,
 options:["10","[1,2,3,4]","0","undefined"],ansIdx:0,
 hint:".reduce() runs a reducer on each element to produce a single value. Initial value 0 prevents issues with empty arrays. MDN: Array.prototype.reduce().",
 fn:"arrReduce",tests:[{a:[[1,2,3,4]],e:10}]},

{id:144,title:"Array .find()",diff:"Easy",cat:"Array Methods",
 desc:"What does <code>[5,12,8,130,44].find(x => x > 10)</code> return?",
 code:`[5,12,8,130,44].find(x => x > 10)`,
 options:["12","130","[12,130,44]","undefined"],ansIdx:0,
 hint:".find() returns the FIRST element satisfying the condition, not all of them. MDN: Array.prototype.find().",
 fn:"arrFind",tests:[{a:[[5,12,8,130,44]],e:12}]},

{id:145,title:"Array .findIndex()",diff:"Easy",cat:"Array Methods",
 desc:"What does <code>[5,12,8,130].findIndex(x => x > 10)</code> return?",
 code:`[5,12,8,130].findIndex(x => x > 10)`,
 options:["1","0","12","-1"],ansIdx:0,
 hint:".findIndex() returns the index of the first matching element, or -1. MDN: Array.prototype.findIndex().",
 fn:"arrFindIndex",tests:[{a:[[5,12,8,130]],e:1}]},

{id:146,title:"Array .some()",diff:"Easy",cat:"Array Methods",
 desc:"What does <code>[1,2,3,4,5].some(x => x > 4)</code> return?",
 code:`[1,2,3,4,5].some(x => x > 4)`,
 options:["true","false","[5]","1"],ansIdx:0,
 hint:".some() returns true if AT LEAST ONE element passes the test. MDN: Array.prototype.some().",
 fn:"arrSome",tests:[{a:[[1,2,3,4,5]],e:true},{a:[[1,2,3]],e:false}]},

{id:147,title:"Array .every()",diff:"Easy",cat:"Array Methods",
 desc:"What does <code>[1,2,3,4,5].every(x => x > 0)</code> return?",
 code:`[1,2,3,4,5].every(x => x > 0)`,
 options:["true","false","5","undefined"],ansIdx:0,
 hint:".every() returns true only if ALL elements pass. Stops early on first failure. MDN: Array.prototype.every().",
 fn:"arrEvery",tests:[{a:[[1,2,3,4,5]],e:true},{a:[[1,-2,3]],e:false}]},

{id:148,title:"Array .includes()",diff:"Easy",cat:"Array Methods",
 desc:"What does <code>[1,2,3].includes(2)</code> return?",
 code:`[1,2,3].includes(2)`,
 options:["true","false","1","undefined"],ansIdx:0,
 hint:".includes() checks whether an element is in the array. Uses strict equality. MDN: Array.prototype.includes().",
 fn:"arrIncludes",tests:[{a:[[1,2,3],2],e:true},{a:[[1,2,3],4],e:false}]},

{id:149,title:"Array .flat()",diff:"Easy",cat:"Array Methods",
 desc:"What does <code>[1,[2,3],[4,[5]]].flat()</code> return?",
 code:`[1,[2,3],[4,[5]]].flat()`,
 options:["[1,2,3,4,[5]]","[1,2,3,4,5]","[[1,2,3],[4,5]]","TypeError"],ansIdx:0,
 hint:".flat() flattens ONE level by default. .flat(Infinity) flattens all. MDN: Array.prototype.flat().",
 fn:"arrFlat",tests:[{a:[[1,[2,3],[4,[5]]]],e:[1,2,3,4,[5]]}]},

{id:150,title:"Array .flatMap()",diff:"Medium",cat:"Array Methods",
 desc:"What does <code>[1,2,3].flatMap(x => [x, x*2])</code> return?",
 code:`[1,2,3].flatMap(x => [x, x*2])`,
 options:["[1,2,2,4,3,6]","[[1,2],[2,4],[3,6]]","[1,4,9]","[2,4,6]"],ansIdx:0,
 hint:".flatMap() maps then flattens one level. Equivalent to .map(...).flat(). MDN: Array.prototype.flatMap().",
 fn:"arrFlatMap",tests:[{a:[[1,2,3]],e:[1,2,2,4,3,6]}]},

{id:151,title:"Array .sort() — Numbers",diff:"Medium",cat:"Array Methods",
 desc:"Why does <code>[10,9,2,100].sort()</code> not sort numerically?",
 code:`[10,9,2,100].sort() // returns [10,100,2,9]`,
 options:["Default sort converts to strings and sorts lexicographically","sort() only works on letters","sort() is not available","Array is empty"],ansIdx:0,
 hint:"Without a comparator, .sort() converts to strings ('100' < '2'). Use .sort((a,b) => a-b) for numbers. MDN: Array.prototype.sort().",
 fn:"arrSortNum",tests:[{a:[[10,9,2,100]],e:[2,9,10,100]}]},

{id:152,title:"Array .splice()",diff:"Medium",cat:"Array Methods",
 desc:"What does <code>[1,2,3,4,5].splice(1,2)</code> return and what does the array become?",
 code:`const arr = [1,2,3,4,5];
const removed = arr.splice(1,2);`,
 options:["removed=[2,3], arr=[1,4,5]","removed=[1,2], arr=[3,4,5]","removed=[2,3,4], arr=[1,5]","arr unchanged"],ansIdx:0,
 hint:".splice(start, deleteCount) removes elements and returns them. MUTATES the original array. MDN: Array.prototype.splice().",
 fn:"arrSplice",tests:[{a:[[1,2,3,4,5],1,2],e:[2,3]}]},

{id:153,title:"Array .concat()",diff:"Easy",cat:"Array Methods",
 desc:"What does <code>[1,2].concat([3,4],[5])</code> return?",
 code:`[1,2].concat([3,4],[5])`,
 options:["[1,2,3,4,5]","[[1,2],[3,4],[5]]","[1,2,[3,4],[5]]","TypeError"],ansIdx:0,
 hint:".concat() merges arrays into a new array without mutation. MDN: Array.prototype.concat().",
 fn:"arrConcat",tests:[{a:[[1,2],[3,4],[5]],e:[1,2,3,4,5]}]},

{id:154,title:"Array .indexOf()",diff:"Easy",cat:"Array Methods",
 desc:"What does <code>[1,2,3,2,1].indexOf(2)</code> return?",
 code:`[1,2,3,2,1].indexOf(2)`,
 options:["1","3","-1","2"],ansIdx:0,
 hint:".indexOf() returns the FIRST index of the value, or -1. Use .lastIndexOf() for the last. MDN: Array.prototype.indexOf().",
 fn:"arrIndexOf",tests:[{a:[[1,2,3,2,1],2],e:1}]},

{id:155,title:"Array .join()",diff:"Easy",cat:"Array Methods",
 desc:"What does <code>['a','b','c'].join('-')</code> return?",
 code:`['a','b','c'].join('-')`,
 options:['"a-b-c"','"abc"','["a","b","c"]',"SyntaxError"],ansIdx:0,
 hint:".join() concatenates array elements into a string. Default separator is comma. MDN: Array.prototype.join().",
 fn:"arrJoin",tests:[{a:[["a","b","c"],"-"],e:"a-b-c"}]},

{id:156,title:"Array .reverse()",diff:"Easy",cat:"Array Methods",
 desc:"Is <code>[1,2,3].reverse()</code> a mutating method?",
 code:`const arr = [1,2,3];
arr.reverse();
console.log(arr); // ?`,
 options:["Yes — [3,2,1], original is mutated","No — returns [3,2,1], original unchanged","Returns undefined","TypeError"],ansIdx:0,
 hint:".reverse() mutates the original array in place AND returns it. MDN: Array.prototype.reverse().",
 fn:"arrReverse",tests:[{a:[[1,2,3]],e:[3,2,1]}]},

{id:157,title:"Array .fill()",diff:"Easy",cat:"Array Methods",
 desc:"What does <code>new Array(3).fill(0)</code> return?",
 code:`new Array(3).fill(0)`,
 options:["[0,0,0]","[undefined,undefined,undefined]","[3]","[0,1,2]"],ansIdx:0,
 hint:".fill() fills all elements with a static value. MDN: Array.prototype.fill().",
 fn:"arrFill",tests:[{a:[3,0],e:[0,0,0]}]},

{id:158,title:"Array .at()",diff:"Easy",cat:"Array Methods",
 desc:"What does <code>[1,2,3,4,5].at(-1)</code> return?",
 code:`[1,2,3,4,5].at(-1)`,
 options:["5","1","undefined","-1"],ansIdx:0,
 hint:".at() supports negative indices. -1 is the last element. MDN: Array.prototype.at().",
 fn:"arrAt",tests:[{a:[[1,2,3,4,5],-1],e:5}]},

{id:159,title:"Array Spread Copy",diff:"Easy",cat:"Array Methods",
 desc:"What is the difference between <code>const b = a</code> and <code>const b = [...a]</code>?",
 code:`const a = [1,2,3];
const b = [...a]; // vs const b = a`,
 options:["[...a] creates a shallow copy; = a references same array","Both create copies","[...a] does a deep clone","There is no difference"],ansIdx:0,
 hint:"= assigns a reference (same array). Spread creates a new array (shallow copy). MDN: Spread syntax.",
 fn:"arrSpreadCopy",tests:[{a:[[1,2,3]],e:true}]},

{id:160,title:"Array .keys()",diff:"Medium",cat:"Array Methods",
 desc:"What does <code>[...['a','b','c'].keys()]</code> return?",
 code:`[...['a','b','c'].keys()]`,
 options:["[0,1,2]","['a','b','c']","[['a',0],['b',1],['c',2]]","{}"],ansIdx:0,
 hint:".keys() returns an iterator of array indices. MDN: Array.prototype.keys().",
 fn:"arrKeys",tests:[{a:[["a","b","c"]],e:[0,1,2]}]},

{id:161,title:"Array .entries()",diff:"Medium",cat:"Array Methods",
 desc:"What pairs does <code>['a','b'].entries()</code> yield?",
 code:`for (const [i,v] of ['a','b'].entries()) { /* ? */ }`,
 options:["[0,'a'] then [1,'b']","['a',0] then ['b',1]","[0,1] then ['a','b']","['a'] then ['b']"],ansIdx:0,
 hint:".entries() returns [index, value] pairs as an iterator. MDN: Array.prototype.entries().",
 fn:"arrEntries",tests:[{a:[["a","b"]],e:[[0,"a"],[1,"b"]]}]},

{id:162,title:"Array from Set",diff:"Easy",cat:"Array Methods",
 desc:"Which is the most concise way to remove duplicates from an array?",
 code:`const arr = [1,1,2,2,3];
const unique = ___;`,
 options:["[...new Set(arr)]","arr.filter((v,i)=>arr.indexOf(v)===i)","arr.reduce(...)","arr.unique()"],ansIdx:0,
 hint:"Spreading a Set is the most concise deduplication. MDN: Set, Spread syntax.",
 fn:"arrFromSet",tests:[{a:[[1,1,2,2,3]],e:[1,2,3]}]},

{id:163,title:"Array .reduceRight()",diff:"Medium",cat:"Array Methods",
 desc:"What does <code>[[1,2],[3,4],[5,6]].reduceRight((acc,v)=>[...acc,...v],[])</code> return?",
 code:`[[1,2],[3,4],[5,6]].reduceRight((acc,v)=>[...acc,...v],[])`,
 options:["[5,6,3,4,1,2]","[1,2,3,4,5,6]","[6,5,4,3,2,1]","[]"],ansIdx:0,
 hint:".reduceRight() works right to left. MDN: Array.prototype.reduceRight().",
 fn:"arrReduceRight",tests:[{a:[[[1,2],[3,4],[5,6]]],e:[5,6,3,4,1,2]}]},

{id:164,title:"Array Chaining",diff:"Medium",cat:"Array Methods",
 desc:"What does this chain return?",
 code:`[1,2,3,4,5]
  .filter(x => x % 2 !== 0)
  .map(x => x * x)`,
 options:["[1,9,25]","[1,4,9,16,25]","[2,4]","[1,3,5]"],ansIdx:0,
 hint:"filter keeps odds [1,3,5], then map squares them. MDN: Array methods chaining.",
 fn:"arrChain",tests:[{a:[[1,2,3,4,5]],e:[1,9,25]}]},

{id:165,title:"Array .copyWithin()",diff:"Hard",cat:"Array Methods",
 desc:"What does <code>[1,2,3,4,5].copyWithin(0,3)</code> return?",
 code:`[1,2,3,4,5].copyWithin(0,3)`,
 options:["[4,5,3,4,5]","[1,2,3,1,2]","[3,4,5,4,5]","[4,5,1,2,3]"],ansIdx:0,
 hint:".copyWithin(target, start) copies elements from start to target position. MUTATES array. MDN: Array.prototype.copyWithin().",
 fn:"arrCopyWithin",tests:[{a:[[1,2,3,4,5],0,3],e:[4,5,3,4,5]}]},

/* ══ SQL (166–185) — W3Schools SQL Tutorial (166–174) + SQLite Official Docs (175–185) ══ */
{id:166,title:"SELECT Statement",diff:"Easy",cat:"SQL",
 desc:"Which SQL statement retrieves all columns from a table named <code>Customers</code>?",
 code:`___ * FROM Customers;`,
 options:["SELECT","GET","FETCH","RETRIEVE"],ansIdx:0,
 hint:"SELECT is the SQL command to query data. * means all columns. W3Schools: SQL SELECT Statement.",
 fn:"sqlSelect",tests:[{a:[],e:"SELECT"}]},

{id:167,title:"WHERE Clause",diff:"Easy",cat:"SQL",
 desc:"Which clause filters rows based on a condition?",
 code:`SELECT * FROM Customers
___ Country = 'Mexico';`,
 options:["WHERE","HAVING","FILTER","IF"],ansIdx:0,
 hint:"WHERE filters rows before grouping. HAVING filters after GROUP BY. W3Schools: SQL WHERE Clause.",
 fn:"sqlWhere",tests:[{a:[],e:"WHERE"}]},

{id:168,title:"ORDER BY",diff:"Easy",cat:"SQL",
 desc:"How do you sort results in descending order by <code>Price</code>?",
 code:`SELECT * FROM Products
ORDER BY Price ___;`,
 options:["DESC","DESCEND","DOWN","REVERSE"],ansIdx:0,
 hint:"ORDER BY col DESC sorts highest to lowest. ASC (default) sorts lowest to highest. W3Schools: SQL ORDER BY.",
 fn:"sqlOrderBy",tests:[{a:[],e:"DESC"}]},

{id:169,title:"INSERT INTO",diff:"Easy",cat:"SQL",
 desc:"Which statement inserts a new row?",
 code:`___ INTO Customers (Name, City)
VALUES ('Ana', 'London');`,
 options:["INSERT","ADD","PUT","CREATE"],ansIdx:0,
 hint:"INSERT INTO table (columns) VALUES (values) adds a new row. W3Schools: SQL INSERT INTO.",
 fn:"sqlInsert",tests:[{a:[],e:"INSERT"}]},

{id:170,title:"UPDATE Statement",diff:"Easy",cat:"SQL",
 desc:"What clause is required to prevent updating ALL rows when using UPDATE?",
 code:`UPDATE Customers
SET City = 'Oslo'
___ CustomerID = 1;`,
 options:["WHERE","LIMIT","HAVING","FILTER"],ansIdx:0,
 hint:"Without WHERE, UPDATE modifies every row. Always use WHERE to target specific rows. W3Schools: SQL UPDATE.",
 fn:"sqlUpdate",tests:[{a:[],e:"WHERE"}]},

{id:171,title:"DELETE Statement",diff:"Easy",cat:"SQL",
 desc:"What SQL statement removes rows from a table?",
 code:`___ FROM Customers
WHERE CustomerID = 1;`,
 options:["DELETE","REMOVE","DROP","ERASE"],ansIdx:0,
 hint:"DELETE FROM removes rows. DROP TABLE removes the entire table. W3Schools: SQL DELETE.",
 fn:"sqlDelete",tests:[{a:[],e:"DELETE"}]},

{id:172,title:"COUNT()",diff:"Easy",cat:"SQL",
 desc:"Which function counts the number of rows?",
 code:`SELECT ___(CustomerID)
FROM Customers;`,
 options:["COUNT","SUM","TOTAL","NUM"],ansIdx:0,
 hint:"COUNT(*) counts all rows. COUNT(col) counts non-NULL values in a column. W3Schools: SQL COUNT().",
 fn:"sqlCount",tests:[{a:[],e:"COUNT"}]},

{id:173,title:"GROUP BY",diff:"Medium",cat:"SQL",
 desc:"What clause groups rows with the same value in a column?",
 code:`SELECT Country, COUNT(CustomerID)
FROM Customers
___ Country;`,
 options:["GROUP BY","SORT BY","CLUSTER BY","ARRANGE BY"],ansIdx:0,
 hint:"GROUP BY groups rows to aggregate (COUNT, SUM, AVG). W3Schools: SQL GROUP BY.",
 fn:"sqlGroupBy",tests:[{a:[],e:"GROUP BY"}]},

{id:174,title:"HAVING Clause",diff:"Medium",cat:"SQL",
 desc:"Which clause filters groups created by GROUP BY?",
 code:`SELECT Country, COUNT(ID)
FROM Customers
GROUP BY Country
___ COUNT(ID) > 5;`,
 options:["HAVING","WHERE","FILTER","LIMIT"],ansIdx:0,
 hint:"HAVING filters aggregated groups. WHERE filters individual rows before grouping. W3Schools: SQL HAVING.",
 fn:"sqlHaving",tests:[{a:[],e:"HAVING"}]},

{id:175,title:"INNER JOIN",diff:"Medium",cat:"SQL",
 desc:"What does an INNER JOIN return?",
 code:`SELECT * FROM Orders
INNER JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;`,
 options:["Only matching rows from both tables","All rows from both tables","All rows from left table","All rows from right table"],ansIdx:0,
 hint:"INNER JOIN returns only rows with matching values in BOTH tables — unmatched rows are excluded. SQLite docs: sqlite.org/lang_select.html",
 fn:"sqlInnerJoin",tests:[{a:[],e:true}]},

{id:176,title:"LEFT JOIN",diff:"Medium",cat:"SQL",
 desc:"What does a LEFT JOIN return?",
 code:`SELECT * FROM Customers
LEFT JOIN Orders
ON Customers.ID = Orders.CustomerID;`,
 options:["All customers, with orders if they exist","Only customers with orders","Only orders with customers","All orders"],ansIdx:0,
 hint:"LEFT JOIN returns ALL rows from the left table plus matched rows from the right — unmatched right rows produce NULL. SQLite docs: sqlite.org/lang_select.html",
 fn:"sqlLeftJoin",tests:[{a:[],e:true}]},

{id:177,title:"DISTINCT",diff:"Easy",cat:"SQL",
 desc:"Which keyword removes duplicate values from a result?",
 code:`SELECT ___ Country FROM Customers;`,
 options:["DISTINCT","UNIQUE","DIFFERENT","NODUPS"],ansIdx:0,
 hint:"SELECT DISTINCT eliminates duplicate rows from the result set before returning results. SQLite docs: sqlite.org/lang_select.html",
 fn:"sqlDistinct",tests:[{a:[],e:"DISTINCT"}]},

{id:178,title:"LIKE Operator",diff:"Easy",cat:"SQL",
 desc:"Which pattern matches any customer whose name starts with 'A'?",
 code:`SELECT * FROM Customers
WHERE Name LIKE '___;`,
 options:["'A%'","'%A'","'_A'","'A_'"],ansIdx:0,
 hint:"% matches any sequence of zero or more characters; _ matches exactly one character. SQLite docs: sqlite.org/lang_expr.html",
 fn:"sqlLike",tests:[{a:[],e:"A%"}]},

{id:179,title:"IN Operator",diff:"Easy",cat:"SQL",
 desc:"Which is equivalent to <code>WHERE Country = 'UK' OR Country = 'US'</code>?",
 code:`WHERE Country ___ ('UK','US')`,
 options:["IN","ANY","CONTAINS","WITHIN"],ansIdx:0,
 hint:"IN tests whether a value matches any value in a list — equivalent to chained OR on the same column. SQLite docs: sqlite.org/lang_expr.html",
 fn:"sqlIn",tests:[{a:[],e:"IN"}]},

{id:180,title:"NULL Values",diff:"Easy",cat:"SQL",
 desc:"How do you check for NULL values in SQL?",
 code:`SELECT * FROM Customers
WHERE Address ___ NULL;`,
 options:["IS","= ","== ","EQUALS"],ansIdx:0,
 hint:"NULL represents missing data — it cannot be compared with = or !=. Use IS NULL or IS NOT NULL. SQLite docs: sqlite.org/nulls.html",
 fn:"sqlNull",tests:[{a:[],e:"IS"}]},

{id:181,title:"BETWEEN Operator",diff:"Easy",cat:"SQL",
 desc:"What does BETWEEN include?",
 code:`SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;`,
 options:["Values 10 through 20 inclusive","Values between 10 and 20 exclusive","Only values greater than 10","Only values less than 20"],ansIdx:0,
 hint:"BETWEEN x AND y is inclusive on both ends — equivalent to >= x AND <= y. SQLite docs: sqlite.org/lang_expr.html",
 fn:"sqlBetween",tests:[{a:[],e:true}]},

{id:182,title:"AVG() Function",diff:"Easy",cat:"SQL",
 desc:"Which function calculates the average of a numeric column?",
 code:`SELECT ___(Price) FROM Products;`,
 options:["AVG","MEAN","AVERAGE","MID"],ansIdx:0,
 hint:"AVG() is an aggregate function that computes the mean of non-NULL values in a column. SQLite docs: sqlite.org/lang_aggfunc.html",
 fn:"sqlAvg",tests:[{a:[],e:"AVG"}]},

{id:183,title:"PRIMARY KEY",diff:"Medium",cat:"SQL",
 desc:"What is the main rule for a PRIMARY KEY column?",
 code:`CREATE TABLE Persons (
  ID INT NOT NULL PRIMARY KEY,
  Name VARCHAR(255)
);`,
 options:["Must be unique and NOT NULL","Must be NULL","Can have duplicates","Must be a string"],ansIdx:0,
 hint:"PRIMARY KEY is a column constraint that enforces uniqueness and NOT NULL — it is an implicit UNIQUE index. SQLite docs: sqlite.org/lang_createtable.html",
 fn:"sqlPK",tests:[{a:[],e:true}]},

{id:184,title:"FOREIGN KEY",diff:"Medium",cat:"SQL",
 desc:"What does a FOREIGN KEY do?",
 code:`CREATE TABLE Orders (
  OrderID INT PRIMARY KEY,
  CustomerID INT,
  FOREIGN KEY (CustomerID) REFERENCES Customers(ID)
);`,
 options:["Links to the PRIMARY KEY of another table","Creates a unique constraint","Prevents NULL values","Creates an index"],ansIdx:0,
 hint:"FOREIGN KEY enforces referential integrity — the value must match an existing PRIMARY KEY in the referenced table. SQLite docs: sqlite.org/foreignkeys.html",
 fn:"sqlFK",tests:[{a:[],e:true}]},

{id:185,title:"SQL Aliases",diff:"Easy",cat:"SQL",
 desc:"What keyword creates an alias for a column or table?",
 code:`SELECT CustomerName AS Name
FROM Customers AS C;`,
 options:["AS","ALIAS","NAMED","CALL"],ansIdx:0,
 hint:"AS creates aliases for columns or tables in a query — they exist only for the duration of that query. SQLite docs: sqlite.org/lang_select.html",
 fn:"sqlAlias",tests:[{a:[],e:"AS"}]},

/* ══ REACT & ASYNC (186–200) — MDN Fetch API + React docs ══ */
{id:186,title:"fetch() Basics",diff:"Easy",cat:"React & Async",
 desc:"What does <code>fetch(url)</code> return?",
 code:`const data = fetch('https://api.example.com/data');`,
 options:["A Promise","The JSON data directly","A Response object","undefined"],ansIdx:0,
 hint:"fetch() returns a Promise that resolves to a Response object. You must call .json() to parse. MDN: Fetch API.",
 fn:"fetchBasics",tests:[{a:[],e:true}]},

{id:187,title:"async/await",diff:"Easy",cat:"React & Async",
 desc:"What is the correct way to use async/await to fetch and parse JSON?",
 code:`async function getData(url) {
  const res = ___;
  const data = await res.json();
  return data;
}`,
 options:["await fetch(url)","fetch(url)","sync fetch(url)","Promise.fetch(url)"],ansIdx:0,
 hint:"await pauses until the Promise resolves. Use it inside an async function. MDN: async function.",
 fn:"asyncAwait",tests:[{a:[],e:true}]},

{id:188,title:"Promise.all",diff:"Medium",cat:"React & Async",
 desc:"What does <code>Promise.all([p1, p2, p3])</code> do?",
 code:`const results = await Promise.all([fetch(url1), fetch(url2)]);`,
 options:["Resolves when ALL promises resolve; rejects if any reject","Resolves when the first promise resolves","Waits for each promise sequentially","Ignores rejected promises"],ansIdx:0,
 hint:"Promise.all runs promises in parallel and fails fast — if any reject, all reject. MDN: Promise.all().",
 fn:"promiseAll",tests:[{a:[],e:true}]},

{id:189,title:"React useState",diff:"Easy",cat:"React & Async",
 desc:"What does the <code>useState</code> hook return?",
 code:`const [count, setCount] = useState(0);`,
 options:["[currentValue, setterFunction]","The state value only","A ref object","An array of all states"],ansIdx:0,
 hint:"useState returns a tuple: [state, setState]. Calling setState triggers a re-render. React docs: useState.",
 fn:"useState",tests:[{a:[],e:true}]},

{id:190,title:"React useEffect",diff:"Medium",cat:"React & Async",
 desc:"When does <code>useEffect(() => {}, [])</code> run?",
 code:`useEffect(() => {
  fetchData();
}, []);`,
 options:["Once after initial render (empty dependency array)","On every render","Never","When fetchData changes"],ansIdx:0,
 hint:"Empty [] dependency array means the effect runs only once after the first render. React docs: useEffect.",
 fn:"useEffect",tests:[{a:[],e:true}]},

{id:191,title:"Fetch Error Handling",diff:"Medium",cat:"React & Async",
 desc:"Why does <code>fetch()</code> NOT reject on HTTP 404 or 500 errors?",
 code:`const res = await fetch(url);
// res.ok is false for 4xx/5xx
if (!res.ok) throw new Error('HTTP Error');`,
 options:["fetch only rejects on network failure — not HTTP error status codes","fetch always rejects on errors","fetch throws for any non-200 status","fetch auto-parses error responses"],ansIdx:0,
 hint:"fetch only rejects on network failure (no connection). Always check res.ok for HTTP errors. MDN: Fetch API.",
 fn:"fetchError",tests:[{a:[],e:true}]},

{id:192,title:"React Props",diff:"Easy",cat:"React & Async",
 desc:"How do you pass data from a parent to a child component?",
 code:`function Child({ name }) {
  return <p>Hello {name}</p>;
}
<Child ___ />`,
 options:["name='World'","props.name='World'","state.name='World'","name={state}"],ansIdx:0,
 hint:"Props are passed as JSX attributes from parent to child. The child receives them as an object. React docs: Passing Props.",
 fn:"reactProps",tests:[{a:[],e:true}]},

{id:193,title:"React key prop",diff:"Easy",cat:"React & Async",
 desc:"Why is the <code>key</code> prop required when rendering lists in React?",
 code:`items.map(item => <li key={item.id}>{item.name}</li>)`,
 options:["Helps React identify which items changed, were added, or removed","Improves CSS styling","Makes items sortable","Prevents re-rendering all items"],ansIdx:0,
 hint:"Keys help React's reconciliation algorithm track which list items changed. React docs: Lists and Keys.",
 fn:"reactKey",tests:[{a:[],e:true}]},

{id:194,title:"Promise.race",diff:"Medium",cat:"React & Async",
 desc:"What does <code>Promise.race([p1, p2])</code> return?",
 code:`const result = await Promise.race([p1, p2]);`,
 options:["The result of whichever promise settles first","All results","The slowest result","An array of all results"],ansIdx:0,
 hint:"Promise.race resolves or rejects with the first promise that settles. MDN: Promise.race().",
 fn:"promiseRace",tests:[{a:[],e:true}]},

{id:195,title:"React Conditional Rendering",diff:"Easy",cat:"React & Async",
 desc:"What is the most concise way to conditionally render a component?",
 code:`{isLoggedIn ___ <Dashboard />}`,
 options:["&&","||","?","if"],ansIdx:0,
 hint:"Short-circuit with && renders the component only when isLoggedIn is true. React docs: Conditional Rendering.",
 fn:"reactConditional",tests:[{a:[],e:true}]},

{id:196,title:"AbortController",diff:"Hard",cat:"React & Async",
 desc:"What is AbortController used for with fetch?",
 code:`const controller = new AbortController();
fetch(url, { signal: controller.signal });
controller.abort();`,
 options:["Cancels an ongoing fetch request","Adds authentication","Retries failed requests","Caches responses"],ansIdx:0,
 hint:"AbortController lets you cancel fetch requests. Useful for cleanup in useEffect. MDN: AbortController.",
 fn:"abortController",tests:[{a:[],e:true}]},

{id:197,title:"React Event Handlers",diff:"Easy",cat:"React & Async",
 desc:"What is the correct way to handle a button click in React?",
 code:`<button ___={handleClick}>Click me</button>`,
 options:["onClick","onclick","on-click","@click"],ansIdx:0,
 hint:"React uses camelCase event names. onClick, onChange, onSubmit. React docs: Handling Events.",
 fn:"reactEvent",tests:[{a:[],e:true}]},

{id:198,title:"JSON.stringify",diff:"Easy",cat:"React & Async",
 desc:"What does <code>JSON.stringify({a:1, b:'hello'})</code> return?",
 code:`JSON.stringify({a:1, b:'hello'})`,
 options:['\'{"a":1,"b":"hello"}\'',"{a:1,b:'hello'}","[object Object]","SyntaxError"],ansIdx:0,
 hint:"JSON.stringify converts a JavaScript value to a JSON string. MDN: JSON.stringify().",
 fn:"jsonStringify",tests:[{a:[{a:1,b:"hello"}],e:'{"a":1,"b":"hello"}'}]},

{id:199,title:"React Fragment",diff:"Easy",cat:"React & Async",
 desc:"What is the purpose of <code>React.Fragment</code> (or the shorthand <code><></code>)?",
 code:`return (
  <>
    <h1>Title</h1>
    <p>Text</p>
  </>
);`,
 options:["Groups elements without adding an extra DOM node","Creates a portal","Wraps children in a div","Enables lazy loading"],ansIdx:0,
 hint:"Fragments let you return multiple elements without a wrapper div in the DOM. React docs: Fragments.",
 fn:"reactFragment",tests:[{a:[],e:true}]},

{id:200,title:"async Error Handling",diff:"Medium",cat:"React & Async",
 desc:"What is the correct pattern for handling errors in an async function?",
 code:`async function fetchData(url) {
  ___
    const res = await fetch(url);
    return await res.json();
  ___ (err) {
    console.error(err);
  }
}`,
 options:["try / catch","if / else","async / await","then / catch"],ansIdx:0,
 hint:"try/catch wraps await calls to handle both network errors and HTTP errors (if you throw for !res.ok). MDN: async function.",
 fn:"asyncErrorHandling",tests:[{a:[],e:true}]},

/* ══ TYPESCRIPT (201–225) — TypeScript Official Docs (typescriptlang.org) ══ */
{id:201,title:"Type Annotation",diff:"Easy",cat:"TypeScript",
 desc:"What is the correct TypeScript syntax to annotate a variable as a string?",
 code:`let name___ = 'Dev Play';`,
 options:[": string",":: string","as string","<string>"],ansIdx:0,
 hint:"TypeScript uses a colon after the variable name for type annotations. TypeScript docs: Everyday Types.",
 fn:"tsAnnotation",tests:[{a:[],e:true}]},

{id:202,title:"Interface",diff:"Easy",cat:"TypeScript",
 desc:"Which keyword defines a TypeScript interface?",
 code:`___ User { name: string; age: number; }`,
 options:["interface","type","class","struct"],ansIdx:0,
 hint:"interface defines the shape of an object. TypeScript docs: Object Types.",
 fn:"tsInterface",tests:[{a:[],e:true}]},

{id:203,title:"Type vs Interface",diff:"Medium",cat:"TypeScript",
 desc:"What is the key difference between type and interface in TypeScript?",
 code:`type A = { x: number };\ninterface B { x: number; }`,
 options:["Interfaces can be reopened/extended; type aliases cannot","Types are faster","Interfaces only work with classes","Types support generics; interfaces do not"],ansIdx:0,
 hint:"A type alias cannot be reopened to add new properties, whereas an interface is always extendable. TypeScript docs: Everyday Types.",
 fn:"tsTypeVsInterface",tests:[{a:[],e:true}]},

{id:204,title:"Union Types",diff:"Easy",cat:"TypeScript",
 desc:"Which syntax declares a parameter that can be either a string OR a number?",
 code:`function display(value: ___) { console.log(value); }`,
 options:["string | number","string & number","string or number","string, number"],ansIdx:0,
 hint:"The | operator creates union types. TypeScript docs: Everyday Types.",
 fn:"tsUnion",tests:[{a:[],e:true}]},

{id:205,title:"Generics",diff:"Medium",cat:"TypeScript",
 desc:"What does the <T> in this function signature mean?",
 code:`function identity<T>(arg: T): T { return arg; }`,
 options:["T is a type parameter — the function works with any type","T means it returns a string","T is an optional argument","T means the function is async"],ansIdx:0,
 hint:"Generics provide variables to types. TypeScript docs: Generics.",
 fn:"tsGenerics",tests:[{a:[],e:true}]},

{id:206,title:"Optional Properties",diff:"Easy",cat:"TypeScript",
 desc:"How do you mark a property as optional in a TypeScript interface?",
 code:`interface Config { host: string; port___: number; }`,
 options:["port?: number","port?? number","port!: number","port: number | undefined"],ansIdx:0,
 hint:"Add ? after the property name to make it optional. TypeScript docs: Object Types.",
 fn:"tsOptional",tests:[{a:[],e:true}]},

{id:207,title:"Readonly",diff:"Easy",cat:"TypeScript",
 desc:"Which modifier prevents a property from being changed after creation?",
 code:`interface Point { ___ x: number; ___ y: number; }`,
 options:["readonly","const","immutable","fixed"],ansIdx:0,
 hint:"readonly prevents reassignment after initialization. TypeScript docs: Object Types.",
 fn:"tsReadonly",tests:[{a:[],e:true}]},

{id:208,title:"Type Assertion",diff:"Medium",cat:"TypeScript",
 desc:"Which syntax asserts that a value is of a specific type?",
 code:`const el = document.getElementById('app') ___ HTMLCanvasElement;`,
 options:["as","instanceof","is","::"],ansIdx:0,
 hint:"The 'as' keyword asserts a more specific type. TypeScript docs: Everyday Types.",
 fn:"tsAssertion",tests:[{a:[],e:true}]},

{id:209,title:"Enum",diff:"Easy",cat:"TypeScript",
 desc:"What does TypeScript's enum compile to at runtime?",
 code:`enum Direction { Up, Down, Left, Right }`,
 options:["A JavaScript object with numeric values","A class","An array","It is erased at runtime"],ansIdx:0,
 hint:"Enums compile to plain JavaScript objects. Direction.Up === 0. TypeScript docs: Enums.",
 fn:"tsEnum",tests:[{a:[],e:true}]},

{id:210,title:"Utility Type — Partial",diff:"Medium",cat:"TypeScript",
 desc:"What does Partial<User> do?",
 code:`interface User { name: string; age: number; }\ntype PartialUser = Partial<User>;`,
 options:["Makes all properties optional","Makes all properties required","Makes all properties readonly","Removes all properties"],ansIdx:0,
 hint:"Partial<T> constructs a type with all properties set to optional. TypeScript docs: Utility Types.",
 fn:"tsPartial",tests:[{a:[],e:true}]},

{id:211,title:"Utility Type — Required",diff:"Medium",cat:"TypeScript",
 desc:"What does Required<T> do?",
 code:`type Required<T> = { [P in keyof T]-?: T[P]; }`,
 options:["Makes all optional properties required","Removes optional properties","Makes all properties readonly","Adds new properties"],ansIdx:0,
 hint:"Required<T> is the opposite of Partial<T>. TypeScript docs: Utility Types.",
 fn:"tsRequired",tests:[{a:[],e:true}]},

{id:212,title:"Utility Type — Pick",diff:"Medium",cat:"TypeScript",
 desc:"What does Pick<User, 'name'> return?",
 code:`interface User { name: string; age: number; email: string; }\ntype NameOnly = Pick<User, 'name'>;`,
 options:["{ name: string }","{ age: number; email: string }","User","never"],ansIdx:0,
 hint:"Pick<T, K> constructs a type by picking only specified keys from T. TypeScript docs: Utility Types.",
 fn:"tsPick",tests:[{a:[],e:true}]},

{id:213,title:"Utility Type — Omit",diff:"Medium",cat:"TypeScript",
 desc:"What does Omit<User, 'password'> produce?",
 code:`interface User { name: string; email: string; password: string; }`,
 options:["User without the password field","Only the password field","An empty type","User with password as optional"],ansIdx:0,
 hint:"Omit<T, K> removes specified keys from a type. TypeScript docs: Utility Types.",
 fn:"tsOmit",tests:[{a:[],e:true}]},

{id:214,title:"never Type",diff:"Hard",cat:"TypeScript",
 desc:"When does a function return type never?",
 code:`function throwError(msg: string): never { throw new Error(msg); }`,
 options:["When it never returns (throws or infinite loops)","When it returns undefined","When it returns null","When it is async"],ansIdx:0,
 hint:"never is the return type for functions that never complete normally. TypeScript docs: Everyday Types.",
 fn:"tsNever",tests:[{a:[],e:true}]},

{id:215,title:"unknown vs any",diff:"Medium",cat:"TypeScript",
 desc:"What is the key difference between unknown and any?",
 code:`let a: any = 'hello'; a.toUpperCase(); // OK\nlet b: unknown = 'hello'; b.toUpperCase(); // Error`,
 options:["unknown requires type narrowing before use; any does not","They are identical","any is stricter","unknown only works with objects"],ansIdx:0,
 hint:"unknown is type-safe — you must check the type before using it. TypeScript docs: Everyday Types.",
 fn:"tsUnknown",tests:[{a:[],e:true}]},

{id:216,title:"Type Narrowing",diff:"Medium",cat:"TypeScript",
 desc:"Which pattern narrows a union type inside a conditional?",
 code:`function process(val: string | number) { if (___ val === 'string') { return val.toUpperCase(); } }`,
 options:["typeof","instanceof","keyof","valueof"],ansIdx:0,
 hint:"typeof checks the runtime type and narrows it within the if block. TypeScript docs: Narrowing.",
 fn:"tsNarrowing",tests:[{a:[],e:true}]},

{id:217,title:"Intersection Types",diff:"Medium",cat:"TypeScript",
 desc:"What does the & operator create?",
 code:`type Admin = User & { adminLevel: number };`,
 options:["A type with ALL properties of both types","Only shared properties","A union","An empty type"],ansIdx:0,
 hint:"& creates intersection types. TypeScript docs: Advanced Types.",
 fn:"tsIntersection",tests:[{a:[],e:true}]},

{id:218,title:"Generic Constraints",diff:"Hard",cat:"TypeScript",
 desc:"What does extends do in a generic constraint?",
 code:`function getLength<T extends { length: number }>(arg: T): number { return arg.length; }`,
 options:["Restricts T to types that have a length property","Makes T extend a class","Creates a subtype","Inherits from a base"],ansIdx:0,
 hint:"extends in generics constrains what types can be passed. TypeScript docs: Generic Constraints.",
 fn:"tsConstraint",tests:[{a:[],e:true}]},

{id:219,title:"Tuple Types",diff:"Medium",cat:"TypeScript",
 desc:"What does this tuple type enforce?",
 code:`const pair: [string, number] = ['Alice', 30];`,
 options:["First element string, second number","Both elements same type","Array of any two elements","Optional pair"],ansIdx:0,
 hint:"Tuples are fixed-length arrays with known types at each position. TypeScript docs: Everyday Types.",
 fn:"tsTuple",tests:[{a:[],e:true}]},

{id:220,title:"Type Guards",diff:"Hard",cat:"TypeScript",
 desc:"What does a user-defined type guard return?",
 code:`function isString(val: unknown): val is string { return typeof val === 'string'; }`,
 options:["A boolean that also narrows the type","A string","The value cast to string","undefined"],ansIdx:0,
 hint:"'val is string' is a type predicate. TypeScript docs: Narrowing.",
 fn:"tsTypeGuard",tests:[{a:[],e:true}]},

{id:221,title:"Mapped Types",diff:"Hard",cat:"TypeScript",
 desc:"What does this mapped type create?",
 code:`type Readonly<T> = { readonly [P in keyof T]: T[P]; };`,
 options:["A version of T where every property is readonly","An empty type","Optional properties","A partial version"],ansIdx:0,
 hint:"Mapped types iterate over keys and transform them. TypeScript docs: Mapped Types.",
 fn:"tsMapped",tests:[{a:[],e:true}]},

{id:222,title:"Declaration Files",diff:"Medium",cat:"TypeScript",
 desc:"What is the purpose of a .d.ts file?",
 code:`// myLib.d.ts\ndeclare function greet(name: string): void;`,
 options:["Provides type declarations for JS libraries without rewriting them in TS","Compiles TypeScript","Runs TS in the browser","Defines database schemas"],ansIdx:0,
 hint:".d.ts files add type information to existing JavaScript code. TypeScript docs: Declaration Files.",
 fn:"tsDTS",tests:[{a:[],e:true}]},

{id:223,title:"tsconfig strict",diff:"Medium",cat:"TypeScript",
 desc:"What does enabling strict: true in tsconfig.json do?",
 code:`{ "compilerOptions": { "strict": true } }`,
 options:["Enables all strict type-checking options including strictNullChecks","Only checks null","Makes TypeScript slower","Disables type inference"],ansIdx:0,
 hint:"strict enables strictNullChecks, noImplicitAny, and more. TypeScript docs: tsconfig.",
 fn:"tsStrict",tests:[{a:[],e:true}]},

{id:224,title:"Conditional Types",diff:"Hard",cat:"TypeScript",
 desc:"What does this conditional type evaluate to when T is string?",
 code:`type IsString<T> = T extends string ? 'yes' : 'no';\ntype Result = IsString<string>;`,
 options:['"yes"','"no"',"string","never"],ansIdx:0,
 hint:"Conditional types use the ternary pattern: T extends U ? X : Y. TypeScript docs: Conditional Types.",
 fn:"tsConditional",tests:[{a:[],e:true}]},

{id:225,title:"Utility Type — Record",diff:"Medium",cat:"TypeScript",
 desc:"What does Record<string, number> describe?",
 code:`const scores: Record<string, number> = { Alice: 95, Bob: 87 };`,
 options:["An object with string keys and number values","An array of strings","A Map","A tuple"],ansIdx:0,
 hint:"Record<K, V> constructs an object type with keys of type K and values of type V. TypeScript docs: Utility Types.",
 fn:"tsRecord",tests:[{a:[],e:true}]},

/* ══ GIT & CLI (226–245) — Atlassian Git Tutorial + GitHub Docs ══ */
{id:226,title:"git init",diff:"Easy",cat:"Git & CLI",
 desc:"What does git init do?",
 code:`$ git init`,
 options:["Initializes a new local Git repository","Clones a remote repo","Creates a new branch","Downloads latest commits"],ansIdx:0,
 hint:"git init creates a new .git directory and sets up an empty repository. Atlassian Git Tutorial.",
 fn:"gitInit",tests:[{a:[],e:true}]},

{id:227,title:"git clone",diff:"Easy",cat:"Git & CLI",
 desc:"Which command copies a remote repository to your local machine?",
 code:`$ git ___ https://github.com/user/repo.git`,
 options:["clone","pull","fetch","copy"],ansIdx:0,
 hint:"git clone creates a local copy of a remote repository. Atlassian Git Tutorial.",
 fn:"gitClone",tests:[{a:[],e:true}]},

{id:228,title:"git add",diff:"Easy",cat:"Git & CLI",
 desc:"What does git add . do?",
 code:`$ git add .`,
 options:["Stages all changes in the current directory","Commits all changes","Pushes to remote","Creates a new branch"],ansIdx:0,
 hint:"git add stages changes for the next commit. Atlassian Git Tutorial.",
 fn:"gitAdd",tests:[{a:[],e:true}]},

{id:229,title:"git commit",diff:"Easy",cat:"Git & CLI",
 desc:"What does -m do in git commit -m 'message'?",
 code:`$ git commit -m "Initial commit"`,
 options:["Sets the commit message inline","Merges branches","Moves to main","Marks as merge commit"],ansIdx:0,
 hint:"-m lets you write the commit message directly in the command. Atlassian Git Tutorial.",
 fn:"gitCommit",tests:[{a:[],e:true}]},

{id:230,title:"git status",diff:"Easy",cat:"Git & CLI",
 desc:"What does git status show?",
 code:`$ git status`,
 options:["Which files are staged, unstaged, or untracked","Full commit history","Remote branch differences","Network connection status"],ansIdx:0,
 hint:"git status shows the state of the working directory and staging area. Atlassian Git Tutorial.",
 fn:"gitStatus",tests:[{a:[],e:true}]},

{id:231,title:"git push -u origin main",diff:"Easy",cat:"Git & CLI",
 desc:"What does the -u flag do in git push -u origin main?",
 code:`$ git push -u origin main`,
 options:["Sets origin/main as the upstream tracking branch","Forces the push","Creates a new remote","Undoes the last push"],ansIdx:0,
 hint:"-u links your local branch to the remote so future pushes just need git push. GitHub Docs.",
 fn:"gitPushU",tests:[{a:[],e:true}]},

{id:232,title:"git pull",diff:"Easy",cat:"Git & CLI",
 desc:"What does git pull do?",
 code:`$ git pull origin main`,
 options:["Fetches remote changes and merges into the current branch","Only downloads without merging","Pushes local changes","Resets to last commit"],ansIdx:0,
 hint:"git pull = git fetch + git merge. Atlassian Git Tutorial.",
 fn:"gitPull",tests:[{a:[],e:true}]},

{id:233,title:"git branch -b",diff:"Easy",cat:"Git & CLI",
 desc:"Which command creates AND switches to a new branch in one step?",
 code:`$ git checkout ___ feature-login`,
 options:["-b","-n","--new","--branch"],ansIdx:0,
 hint:"git checkout -b creates and switches to a new branch. Atlassian Git Tutorial.",
 fn:"gitBranch",tests:[{a:[],e:true}]},

{id:234,title:"git merge --no-ff",diff:"Medium",cat:"Git & CLI",
 desc:"What type of merge does --no-ff force even when fast-forward is possible?",
 code:`$ git merge --no-ff feature-branch`,
 options:["3-way merge (explicit merge commit)","Fast-forward merge","Squash merge","Rebase merge"],ansIdx:0,
 hint:"--no-ff forces a merge commit. Atlassian: Git Merge.",
 fn:"gitMerge",tests:[{a:[],e:true}]},

{id:235,title:"git rebase",diff:"Hard",cat:"Git & CLI",
 desc:"What is the main benefit of git rebase over git merge?",
 code:`$ git rebase main`,
 options:["Creates a linear commit history without extra merge commits","It is faster","Keeps both branch histories","Works offline only"],ansIdx:0,
 hint:"Rebase replays commits on top of another branch, producing a clean linear history. Atlassian: Merging vs Rebasing.",
 fn:"gitRebase",tests:[{a:[],e:true}]},

{id:236,title:"git log --oneline",diff:"Easy",cat:"Git & CLI",
 desc:"Which flag shows a compact one-line summary per commit?",
 code:`$ git log ___`,
 options:["--oneline","--short","--compact","--summary"],ansIdx:0,
 hint:"--oneline shows each commit as one line. Atlassian Git Tutorial.",
 fn:"gitLog",tests:[{a:[],e:true}]},

{id:237,title:"git diff",diff:"Easy",cat:"Git & CLI",
 desc:"What does git diff show by default?",
 code:`$ git diff`,
 options:["Unstaged changes in the working directory","All commits","Staged changes only","Remote vs local"],ansIdx:0,
 hint:"git diff without arguments shows unstaged changes. git diff --staged shows staged. Atlassian Git Tutorial.",
 fn:"gitDiff",tests:[{a:[],e:true}]},

{id:238,title:"git stash",diff:"Medium",cat:"Git & CLI",
 desc:"What does git stash do?",
 code:`$ git stash\n$ git stash pop`,
 options:["Temporarily saves uncommitted changes so you can switch branches","Deletes uncommitted changes","Commits with a temp message","Syncs with remote"],ansIdx:0,
 hint:"stash stores dirty working directory changes. stash pop restores them. Atlassian Git Tutorial.",
 fn:"gitStash",tests:[{a:[],e:true}]},

{id:239,title:"git reset vs git revert",diff:"Hard",cat:"Git & CLI",
 desc:"What is the safe difference between git reset and git revert?",
 code:`git reset HEAD~1  // moves branch pointer back\ngit revert HEAD   // creates a new undo commit`,
 options:["revert is safe for shared branches; reset rewrites history","They are identical","reset is safer","revert deletes commits"],ansIdx:0,
 hint:"git revert creates a new commit that undoes changes — safe for public branches. Atlassian Git Tutorial.",
 fn:"gitResetRevert",tests:[{a:[],e:true}]},

{id:240,title:".gitignore",diff:"Easy",cat:"Git & CLI",
 desc:"What is the purpose of a .gitignore file?",
 code:`node_modules/\n.env\n*.log`,
 options:["Tells Git which files to not track","Stores commit messages","Configures remote URLs","Lists collaborators"],ansIdx:0,
 hint:".gitignore patterns exclude files from being tracked. GitHub Docs.",
 fn:"gitIgnore",tests:[{a:[],e:true}]},

{id:241,title:"git fetch vs git pull",diff:"Medium",cat:"Git & CLI",
 desc:"What is the difference between git fetch and git pull?",
 code:`git fetch origin  // downloads but doesn't merge\ngit pull origin   // downloads AND merges`,
 options:["fetch downloads without merging; pull downloads and merges","They are identical","fetch is faster","pull only works on main"],ansIdx:0,
 hint:"fetch lets you review remote changes before integrating. Atlassian Git Tutorial.",
 fn:"gitFetch",tests:[{a:[],e:true}]},

{id:242,title:"git remote -v",diff:"Easy",cat:"Git & CLI",
 desc:"What does git remote -v display?",
 code:`$ git remote -v\norigin  https://github.com/user/repo.git (fetch)\norigin  https://github.com/user/repo.git (push)`,
 options:["All configured remote connections with their URLs","All branches","Commit history","File changes"],ansIdx:0,
 hint:"git remote -v lists all remote connections and their URLs. Atlassian Git Tutorial.",
 fn:"gitRemoteV",tests:[{a:[],e:true}]},

{id:243,title:"git cherry-pick",diff:"Hard",cat:"Git & CLI",
 desc:"What does git cherry-pick do?",
 code:`$ git cherry-pick a1b2c3d`,
 options:["Applies a specific commit from another branch to the current branch","Merges entire branches","Picks a file from another branch","Selects which files to commit"],ansIdx:0,
 hint:"cherry-pick applies a single specific commit onto the current branch. Atlassian Git Tutorial.",
 fn:"gitCherryPick",tests:[{a:[],e:true}]},

{id:244,title:"git tag",diff:"Medium",cat:"Git & CLI",
 desc:"What is the purpose of git tag v1.0.0?",
 code:`$ git tag v1.0.0\n$ git push origin v1.0.0`,
 options:["Marks a specific commit as a release version","Creates a new branch","Renames the current branch","Resets to that commit"],ansIdx:0,
 hint:"Tags mark specific commits as significant points (releases). GitHub Docs.",
 fn:"gitTag",tests:[{a:[],e:true}]},

{id:245,title:"Pull Request",diff:"Easy",cat:"Git & CLI",
 desc:"What is the purpose of a Pull Request (PR) on GitHub?",
 code:`# Feature branch -> main\n# PR lets teammates review before merging`,
 options:["Requests that changes be reviewed and merged into another branch","Pulls the latest code","Requests a clone","Sends a notification"],ansIdx:0,
 hint:"A PR is a proposal to merge changes with a code review step. GitHub Docs.",
 fn:"gitPR",tests:[{a:[],e:true}]},

/* ══ WEB SECURITY (246–265) — OWASP Top 10 2021 + OWASP Cheat Sheets ══ */
{id:246,title:"SQL Injection",diff:"Medium",cat:"Web Security",
 desc:"Which is the safe way to prevent SQL injection? (OWASP A03:2021)",
 code:`// Vulnerable:\ndb.query("SELECT * FROM users WHERE id = " + userId);\n// Safe:\ndb.query(___, [userId]);`,
 options:["'SELECT * FROM users WHERE id = ?'","String concat","escape(userId)","encodeURI(userId)"],ansIdx:0,
 hint:"Use parameterized queries — never concatenate user input into SQL. OWASP: SQL Injection Prevention Cheat Sheet.",
 fn:"sqlInjection",tests:[{a:[],e:true}]},

{id:247,title:"XSS — Cross-Site Scripting",diff:"Medium",cat:"Web Security",
 desc:"What attack does this vulnerable code enable? (OWASP A03:2021)",
 code:`document.innerHTML = userInput;\n// User input: <script>document.cookie</script>`,
 options:["Cross-Site Scripting (XSS) — attacker injects malicious scripts","SQL Injection","CSRF","Broken Authentication"],ansIdx:0,
 hint:"XSS occurs when user input is rendered as HTML/JS without sanitization. OWASP: XSS Prevention Cheat Sheet.",
 fn:"xss",tests:[{a:[],e:true}]},

{id:248,title:"CSRF",diff:"Medium",cat:"Web Security",
 desc:"What does CSRF stand for and how is it mitigated? (OWASP A01:2021)",
 code:`// Mitigation: include a CSRF token\n<input type='hidden' name='csrf_token' value='...'>`,
 options:["Cross-Site Request Forgery — mitigated with CSRF tokens","Cross-Site Resource Fetching — HTTPS","Client-Side Request Fraud — cookies","Content Security Response — headers"],ansIdx:0,
 hint:"CSRF tricks authenticated users into unintended requests. Tokens verify the request origin. OWASP Cheat Sheet.",
 fn:"csrf",tests:[{a:[],e:true}]},

{id:249,title:"Broken Access Control",diff:"Medium",cat:"Web Security",
 desc:"Which is an example of Broken Access Control? (OWASP #1 2021)",
 code:`// User A accesses User B's data:\nGET /api/users/456/profile\n// No authorization check performed`,
 options:["Accessing another user's data without authorization","Using an old library","A slow database query","Missing HTTPS"],ansIdx:0,
 hint:"Broken Access Control is OWASP's #1 risk — enforce authorization on every protected resource.",
 fn:"brokenAccess",tests:[{a:[],e:true}]},

{id:250,title:"HTTPS & TLS",diff:"Easy",cat:"Web Security",
 desc:"What does HTTPS protect against compared to HTTP?",
 code:`http://  --> plaintext -- interceptable\nhttps:// --> encrypted with TLS`,
 options:["Man-in-the-middle attacks — data is encrypted in transit","SQL injection","XSS attacks","Server-side vulnerabilities"],ansIdx:0,
 hint:"TLS encrypts data in transit. Without it, network attackers can read and modify traffic. OWASP: TLS Cheat Sheet.",
 fn:"https",tests:[{a:[],e:true}]},

{id:251,title:"Password Hashing",diff:"Medium",cat:"Web Security",
 desc:"Which is the correct way to store passwords? (OWASP Authentication Cheat Sheet)",
 code:`const hash = await bcrypt.hash(password, ___);`,
 options:["10 (salt rounds)","password","0","true"],ansIdx:0,
 hint:"Use bcrypt, scrypt, or Argon2 — never store plaintext or MD5. OWASP: Password Storage Cheat Sheet.",
 fn:"passwordHash",tests:[{a:[],e:true}]},

{id:252,title:"Content Security Policy",diff:"Hard",cat:"Web Security",
 desc:"What does a Content Security Policy (CSP) header do?",
 code:`Content-Security-Policy: default-src 'self'`,
 options:["Restricts which sources browsers can load scripts from","Sets the page encoding","Enables HTTPS","Prevents SQL injection"],ansIdx:0,
 hint:"CSP limits what resources a browser loads, significantly reducing XSS impact. OWASP: CSP Cheat Sheet.",
 fn:"csp",tests:[{a:[],e:true}]},

{id:253,title:"Sensitive Data Exposure",diff:"Easy",cat:"Web Security",
 desc:"Which practice exposes sensitive data? (OWASP A02:2021)",
 code:`A: Store API keys in .env (gitignored)\nB: Hardcode API keys in source code\nC: Use environment variables in CI/CD`,
 options:["B — hardcoding keys in source code","A — using .env files","C — CI/CD secrets","None of these"],ansIdx:0,
 hint:"Never commit secrets to source code — they persist in git history. OWASP: A02 Cryptographic Failures.",
 fn:"dataExposure",tests:[{a:[],e:true}]},

{id:254,title:"Rate Limiting",diff:"Medium",cat:"Web Security",
 desc:"What attack does rate limiting primarily defend against?",
 code:`app.use(rateLimit({ windowMs: 15*60*1000, max: 100 }));`,
 options:["Brute force and credential stuffing","SQL injection","XSS","CSRF"],ansIdx:0,
 hint:"Rate limiting caps requests per time window, making brute-force attacks impractical. OWASP.",
 fn:"rateLimit",tests:[{a:[],e:true}]},

{id:255,title:"CORS Security",diff:"Medium",cat:"Web Security",
 desc:"What security risk does a permissive CORS policy create?",
 code:`Access-Control-Allow-Origin: *\nAccess-Control-Allow-Credentials: true`,
 options:["Allows any website to make credentialed API requests on behalf of users","Slows the server","Prevents caching","Breaks HTTPS"],ansIdx:0,
 hint:"Combining wildcard origin with credentials is dangerous. OWASP: CORS Cheat Sheet.",
 fn:"corsSecurity",tests:[{a:[],e:true}]},

{id:256,title:"JWT Security",diff:"Hard",cat:"Web Security",
 desc:"What is a critical JWT security mistake?",
 code:`jwt.verify(token, secret, { algorithms: ['none'] })`,
 options:["Accepting 'none' algorithm allows unsigned tokens","Using RS256 instead of HS256","Setting expiration","Using HTTPS"],ansIdx:0,
 hint:"The 'none' algorithm attack lets attackers forge tokens. OWASP: JWT Cheat Sheet.",
 fn:"jwtSecurity",tests:[{a:[],e:true}]},

{id:257,title:"Directory Traversal",diff:"Medium",cat:"Web Security",
 desc:"What attack does this payload attempt?",
 code:`GET /files?name=../../../../etc/passwd`,
 options:["Directory traversal — reads files outside the intended directory","SQL injection","XSS","CSRF"],ansIdx:0,
 hint:"../sequences traverse up the directory tree. Validate and sanitize file paths. OWASP: Path Traversal.",
 fn:"dirTraversal",tests:[{a:[],e:true}]},

{id:258,title:"Root Cause of Injection",diff:"Easy",cat:"Web Security",
 desc:"What is the root cause of injection vulnerabilities? (OWASP A03:2021)",
 code:`// Root cause: untrusted data interpreted as commands`,
 options:["Untrusted data interpreted as commands rather than data","Using old libraries","Missing HTTPS","Slow queries"],ansIdx:0,
 hint:"Injection flaws occur when user input is not separated from the query structure. OWASP Top 10 2021.",
 fn:"injection",tests:[{a:[],e:true}]},

{id:259,title:"X-Frame-Options",diff:"Medium",cat:"Web Security",
 desc:"What does the X-Frame-Options: DENY header prevent?",
 code:`X-Frame-Options: DENY`,
 options:["Clickjacking — embedding your page in an iframe on another site","XSS attacks","SQL injection","CSRF attacks"],ansIdx:0,
 hint:"X-Frame-Options prevents your page from being embedded in iframes. OWASP: Clickjacking Defense.",
 fn:"xFrameOptions",tests:[{a:[],e:true}]},

{id:260,title:"npm audit",diff:"Easy",cat:"Web Security",
 desc:"Which command checks your npm packages for known vulnerabilities?",
 code:`$ npm ___`,
 options:["audit","check","scan","verify"],ansIdx:0,
 hint:"npm audit checks installed packages against a vulnerability database. OWASP: A06:2021 — Vulnerable Components.",
 fn:"npmAudit",tests:[{a:[],e:true}]},

{id:261,title:"HttpOnly Cookie",diff:"Medium",cat:"Web Security",
 desc:"What does the HttpOnly cookie flag do?",
 code:`Set-Cookie: session=abc123; HttpOnly; Secure`,
 options:["Prevents JavaScript from accessing the cookie — reduces XSS cookie theft","Encrypts the cookie","Makes the cookie session-only","Prevents CSRF"],ansIdx:0,
 hint:"HttpOnly prevents document.cookie from reading the value. OWASP: Session Management Cheat Sheet.",
 fn:"httpOnly",tests:[{a:[],e:true}]},

{id:262,title:"Principle of Least Privilege",diff:"Easy",cat:"Web Security",
 desc:"What does the Principle of Least Privilege mean in application security?",
 code:`// DB user should only have SELECT, INSERT, UPDATE\n// NOT DROP, CREATE on all tables`,
 options:["Grant only the minimum permissions needed","Use the most restrictive password","Disable all external APIs","Encrypt all data"],ansIdx:0,
 hint:"Least privilege limits the blast radius of a breach. OWASP: Access Control Cheat Sheet.",
 fn:"leastPrivilege",tests:[{a:[],e:true}]},

{id:263,title:"Open Redirect",diff:"Medium",cat:"Web Security",
 desc:"What is an open redirect vulnerability?",
 code:`res.redirect(req.query.next);\n// Payload: ?next=https://evil.com`,
 options:["Unvalidated redirect to attacker-controlled URL — used in phishing","SQL injection via URL","XSS via URL","CSRF via redirect"],ansIdx:0,
 hint:"Open redirects trick users into following legitimate-looking links to malicious sites. OWASP.",
 fn:"openRedirect",tests:[{a:[],e:true}]},

{id:264,title:"SSRF",diff:"Hard",cat:"Web Security",
 desc:"What is Server-Side Request Forgery (SSRF)?",
 code:`GET /fetch?url=http://169.254.169.254/metadata`,
 options:["Attacker makes the server issue requests to internal/unintended services","Client makes requests to server","SQL injection via HTTP","Forged HTTPS certificate"],ansIdx:0,
 hint:"SSRF lets attackers reach internal services through the server. OWASP: SSRF Prevention Cheat Sheet.",
 fn:"ssrf",tests:[{a:[],e:true}]},

{id:265,title:"Input Validation",diff:"Easy",cat:"Web Security",
 desc:"Where should input validation occur for maximum security?",
 code:`// Client-side only? Server-side only? Both?`,
 options:["Both client AND server — client for UX, server for security","Client-side only","Server-side only","Neither"],ansIdx:0,
 hint:"Client-side can be bypassed. Server-side is mandatory. OWASP: Input Validation Cheat Sheet.",
 fn:"inputValidation",tests:[{a:[],e:true}]},

/* ══ NODE.JS & EXPRESS (266–290) — Node.js Official Docs + Express.js Docs ══ */
{id:266,title:"Node.js Event Loop",diff:"Medium",cat:"Node.js",
 desc:"What makes Node.js able to handle many concurrent requests with a single thread?",
 code:`// Single thread + non-blocking I/O\n// Callbacks handle results when ready`,
 options:["Non-blocking I/O and the event loop — I/O doesn't block the thread","Multiple threads per request","C++ extensions","WebAssembly"],ansIdx:0,
 hint:"Node.js uses libuv's event loop. I/O is delegated to the OS. Node.js Docs: About Node.js.",
 fn:"nodeEventLoop",tests:[{a:[],e:true}]},

{id:267,title:"require vs import",diff:"Easy",cat:"Node.js",
 desc:"What is the difference between CommonJS require() and ES Module import?",
 code:`const fs = require('fs');  // CommonJS\nimport fs from 'fs';       // ES Module`,
 options:["require is synchronous and CommonJS; import is async and ES Module standard","They are identical","import is CommonJS","require is only for browsers"],ansIdx:0,
 hint:"require() is Node's original module system. import/export is the ECMAScript standard. Node.js Docs: Modules.",
 fn:"requireImport",tests:[{a:[],e:true}]},

{id:268,title:"fs.readFile",diff:"Easy",cat:"Node.js",
 desc:"What is the correct way to read a file asynchronously in Node.js?",
 code:`fs.___(path, 'utf8', (err, data) => { if (err) throw err; });`,
 options:["readFile","readFileSync","open","read"],ansIdx:0,
 hint:"fs.readFile is async with a callback. fs.readFileSync blocks the event loop. Node.js Docs: File System.",
 fn:"fsReadFile",tests:[{a:[],e:true}]},

{id:269,title:"process.env",diff:"Easy",cat:"Node.js",
 desc:"How do you access environment variables in Node.js?",
 code:`const port = ___PORT || 3000;`,
 options:["process.env.","env.","global.","system.env."],ansIdx:0,
 hint:"process.env contains all environment variables. Node.js Docs: process.env.",
 fn:"processEnv",tests:[{a:[],e:true}]},

{id:270,title:"Express Route",diff:"Easy",cat:"Node.js",
 desc:"Which Express method handles HTTP GET requests to '/users'?",
 code:`app.___('/users', (req, res) => { res.json(users); });`,
 options:["get","route","handle","fetch"],ansIdx:0,
 hint:"app.get(), app.post(), app.put(), app.delete() match HTTP methods. Express.js Docs: Routing.",
 fn:"expressRoute",tests:[{a:[],e:true}]},

{id:271,title:"Express Middleware",diff:"Medium",cat:"Node.js",
 desc:"What is Express middleware?",
 code:`app.use((req, res, next) => { console.log(req.method); next(); });`,
 options:["Functions with access to req, res, and next — used for logging, auth, parsing","Route handlers only","Database connection functions","Error pages"],ansIdx:0,
 hint:"Middleware runs between request and response. Call next() to continue the chain. Express.js Docs.",
 fn:"expressMiddleware",tests:[{a:[],e:true}]},

{id:272,title:"Express Error Handler",diff:"Medium",cat:"Node.js",
 desc:"What makes an Express function an error-handling middleware?",
 code:`app.use((___, req, res, next) => { res.status(500).json({ error: err.message }); });`,
 options:["Four parameters — (err, req, res, next)","Three parameters only","Using try/catch","Calling res.error()"],ansIdx:0,
 hint:"Express recognizes error middleware by the 4-parameter signature. Express.js Docs: Error handling.",
 fn:"expressError",tests:[{a:[],e:true}]},

{id:273,title:"npm scripts",diff:"Easy",cat:"Node.js",
 desc:"How do you run a script named 'start' defined in package.json?",
 code:`{ "scripts": { "start": "node index.js" } }`,
 options:["npm run start (or npm start)","node run start","npm execute start","run start"],ansIdx:0,
 hint:"npm run <script> executes scripts from package.json. npm Docs.",
 fn:"npmScripts",tests:[{a:[],e:true}]},

{id:274,title:"Express req.params",diff:"Easy",cat:"Node.js",
 desc:"How do you access the :id parameter in an Express route?",
 code:`app.get('/users/:id', (req, res) => { const id = req.___; });`,
 options:["params.id","query.id","body.id","path.id"],ansIdx:0,
 hint:"req.params contains URL parameters. Express.js Docs.",
 fn:"expressParams",tests:[{a:[],e:true}]},

{id:275,title:"Express res.json",diff:"Easy",cat:"Node.js",
 desc:"What does res.json(data) do in Express?",
 code:`app.get('/api/data', (req, res) => { res.json({ message: 'ok' }); });`,
 options:["Sends a JSON response with Content-Type: application/json","Returns a string","Renders HTML","Redirects"],ansIdx:0,
 hint:"res.json() serializes the object and sets the correct Content-Type header. Express.js Docs.",
 fn:"resJson",tests:[{a:[],e:true}]},

{id:276,title:"Node.js Streams",diff:"Hard",cat:"Node.js",
 desc:"What is the main advantage of Node.js Streams for large files?",
 code:`fs.createReadStream('bigfile.csv').pipe(process.stdout);`,
 options:["Processes data in chunks — avoids loading entire file into memory","Faster than readFile","Enables parallel processing","Allows binary reading only"],ansIdx:0,
 hint:"Streams process data chunk by chunk. Essential for large files. Node.js Docs: Stream.",
 fn:"nodeStreams",tests:[{a:[],e:true}]},

{id:277,title:"dependencies vs devDependencies",diff:"Easy",cat:"Node.js",
 desc:"What is the difference between dependencies and devDependencies?",
 code:`npm install express          // dependencies\nnpm install jest --save-dev  // devDependencies`,
 options:["dependencies needed in production; devDependencies for development only","devDependencies run first","dependencies are optional","No difference"],ansIdx:0,
 hint:"devDependencies are not installed in production. npm Docs: package.json.",
 fn:"depsVsDevDeps",tests:[{a:[],e:true}]},

{id:278,title:"Express Router",diff:"Medium",cat:"Node.js",
 desc:"What is the purpose of express.Router()?",
 code:`const router = express.Router();\nrouter.get('/profile', handler);\napp.use('/users', router);`,
 options:["Creates a modular mini-app to group related routes","Replaces express()","Handles only POST","Creates a new server"],ansIdx:0,
 hint:"Router lets you group routes into separate files for cleaner organization. Express.js Docs: express.Router.",
 fn:"expressRouter",tests:[{a:[],e:true}]},

{id:279,title:"path.join",diff:"Easy",cat:"Node.js",
 desc:"Which method safely joins directory paths across operating systems?",
 code:`const filePath = path.___(__dirname, 'data', 'file.json');`,
 options:["join","concat","combine","add"],ansIdx:0,
 hint:"path.join() handles separators correctly on Windows and Unix. Node.js Docs: Path.",
 fn:"pathJoin",tests:[{a:[],e:true}]},

{id:280,title:"express.json()",diff:"Easy",cat:"Node.js",
 desc:"What middleware parses JSON request bodies in Express?",
 code:`app.use(express.___());`,
 options:["json()","bodyParser()","parse()","decode()"],ansIdx:0,
 hint:"express.json() is built-in since Express 4.16. It parses JSON bodies into req.body. Express.js Docs.",
 fn:"expressJson",tests:[{a:[],e:true}]},

{id:281,title:"Async/Await in Express",diff:"Medium",cat:"Node.js",
 desc:"Why do async route handlers need error handling in Express?",
 code:`app.get('/data', async (req, res, next) => {\n  try { const data = await fetchData(); res.json(data); }\n  catch (err) { next(err); }\n});`,
 options:["Express doesn't automatically catch async errors — pass them to next(err)","Express handles async automatically","try/catch not needed","next() only for middleware"],ansIdx:0,
 hint:"Express 4 doesn't catch rejected promises. Call next(err) or use an async wrapper. Express.js Docs.",
 fn:"asyncExpress",tests:[{a:[],e:true}]},

{id:282,title:"HTTP Status 201",diff:"Easy",cat:"Node.js",
 desc:"Which HTTP status code means a resource was successfully created?",
 code:`res.status(___).json({ id: newUser.id });`,
 options:["201","200","204","301"],ansIdx:0,
 hint:"201 Created is the correct response for POST requests that create a resource. MDN: HTTP Status Codes.",
 fn:"httpStatus201",tests:[{a:[],e:true}]},

{id:283,title:"CORS in Express",diff:"Medium",cat:"Node.js",
 desc:"How do you enable CORS for all routes in an Express app?",
 code:`const cors = require('cors');\napp.___(cors());`,
 options:["use","get","enable","set"],ansIdx:0,
 hint:"app.use(cors()) applies CORS middleware to all routes. npm: cors package.",
 fn:"expressCors",tests:[{a:[],e:true}]},

{id:284,title:"NODE_ENV production",diff:"Easy",cat:"Node.js",
 desc:"What is the conventional value of NODE_ENV in production?",
 code:`if (process.env.NODE_ENV === '___') { /* optimizations */ }`,
 options:["production","prod","live","deploy"],ansIdx:0,
 hint:"NODE_ENV='production' is the universal convention. Node.js Docs.",
 fn:"nodeEnv",tests:[{a:[],e:true}]},

{id:285,title:"EventEmitter",diff:"Hard",cat:"Node.js",
 desc:"What pattern does Node.js EventEmitter implement?",
 code:`emitter.on('data', chunk => console.log(chunk));\nemitter.emit('data', 'hello');`,
 options:["Observer/Pub-Sub pattern — listeners subscribe to named events","Factory pattern","Singleton pattern","Strategy pattern"],ansIdx:0,
 hint:"EventEmitter is Node's implementation of the Observer pattern. Node.js Docs: Events.",
 fn:"eventEmitter",tests:[{a:[],e:true}]},

{id:286,title:"Cluster Module",diff:"Hard",cat:"Node.js",
 desc:"What problem does the Node.js cluster module solve?",
 code:`const numCPUs = require('os').cpus().length;\nif (cluster.isMaster) { for (let i=0; i<numCPUs; i++) cluster.fork(); }`,
 options:["Creates multiple worker processes to use all CPU cores","Manages DB connections","Handles file uploads","Compresses responses"],ansIdx:0,
 hint:"Node is single-threaded. Cluster spawns one worker per CPU. Node.js Docs: Cluster.",
 fn:"nodeCluster",tests:[{a:[],e:true}]},

{id:287,title:"express.static",diff:"Easy",cat:"Node.js",
 desc:"How do you serve static files in Express?",
 code:`app.use(express.static('___'));`,
 options:["public","static","assets","files"],ansIdx:0,
 hint:"express.static(dir) serves all files in the directory. 'public' is the conventional folder. Express.js Docs.",
 fn:"expressStatic",tests:[{a:[],e:true}]},

{id:288,title:"Promise vs Callback",diff:"Medium",cat:"Node.js",
 desc:"What problem do Promises solve that callbacks don't?",
 code:`// Callback hell: nested callbacks\n// Promise chain: .then().then().catch()`,
 options:["Avoids deeply nested callbacks (callback hell) and enables chaining","Promises are faster","Callbacks can't handle errors","Promises are synchronous"],ansIdx:0,
 hint:"Promises chain cleanly and centralize error handling. Node.js Docs: Working with Promises.",
 fn:"promiseVsCallback",tests:[{a:[],e:true}]},

{id:289,title:"__dirname",diff:"Easy",cat:"Node.js",
 desc:"What does __dirname contain in a Node.js module?",
 code:`console.log(__dirname); // '/Users/jack/projects/app'`,
 options:["The absolute path of the current module's directory","The project root","Filename only","OS home directory"],ansIdx:0,
 hint:"__dirname is the absolute directory of the current file. Node.js Docs.",
 fn:"dirname",tests:[{a:[],e:true}]},

{id:290,title:"Express 404 Handler",diff:"Medium",cat:"Node.js",
 desc:"Where should a catch-all 404 handler be placed in an Express app?",
 code:`app.use('/api', apiRouter);\n// 404 handler goes ___\napp.use((req, res) => res.status(404).json({ error: 'Not found' }));`,
 options:["After all other routes — Express matches in order","Before all routes","In the middle","In a separate file only"],ansIdx:0,
 hint:"Routes are matched in order. A catch-all at the end handles any unmatched request. Express.js Docs.",
 fn:"express404",tests:[{a:[],e:true}]},

/* ══ DATA STRUCTURES (291–320) — CS50 Harvard + freeCodeCamp DSA ══ */
{id:291,title:"Stack — LIFO",diff:"Easy",cat:"Data Structures",
 desc:"What does stack.pop() return after pushing 1, 2, 3?",
 code:`const stack = [];\nstack.push(1); stack.push(2); stack.push(3);\nstack.pop(); // returns ___`,
 options:["3 — Last In First Out (LIFO)","1 — FIFO","2 — random","undefined"],ansIdx:0,
 hint:"Stacks are LIFO — the last element pushed is the first popped. CS50: Data Structures.",
 fn:"stackPop",tests:[{a:[],e:true}]},

{id:292,title:"Queue — FIFO",diff:"Easy",cat:"Data Structures",
 desc:"What does queue.shift() return from [1,2,3]?",
 code:`const queue = [1, 2, 3];\nqueue.shift(); // dequeue returns ___`,
 options:["1 — First In First Out (FIFO)","3 — LIFO","2 — random","undefined"],ansIdx:0,
 hint:"Queues are FIFO — the first element in is the first out. CS50: Data Structures.",
 fn:"queueShift",tests:[{a:[],e:true}]},

{id:293,title:"Linked List Node",diff:"Medium",cat:"Data Structures",
 desc:"Write createNode(val) that creates a linked list node with value and next pointer.",
 hint:"A linked list node has two properties: value and next (initially null).",
 start:"function createNode(val) {\n  return { value: val, next: null };\n}",
 fn:"createNode",tests:[{a:[5],e:{value:5,next:null}},{a:[1],e:{value:1,next:null}}]},

{id:294,title:"Stack Peek",diff:"Medium",cat:"Data Structures",
 desc:"Write stackPeek(arr) returning the top element without removing it, or null if empty.",
 hint:"The top of a stack is the last element. arr[arr.length - 1]. Return null for empty.",
 start:"function stackPeek(arr) {\n  if (arr.length === 0) return null;\n  return arr[arr.length - 1];\n}",
 fn:"stackPeek",tests:[{a:[[1,2,3]],e:3},{a:[[]],e:null}]},

{id:295,title:"Hash Table O(1)",diff:"Easy",cat:"Data Structures",
 desc:"What is the average time complexity for lookup in a hash table?",
 code:`const map = new Map();\nmap.set('key', 'value');\nmap.get('key'); // Time: ___`,
 options:["O(1) — constant time","O(n) — linear","O(log n) — logarithmic","O(n²) — quadratic"],ansIdx:0,
 hint:"Hash tables use a hash function to compute an index — average O(1) lookup. CS50: Data Structures.",
 fn:"hashTableO1",tests:[{a:[],e:true}]},

{id:296,title:"Binary Tree Height",diff:"Medium",cat:"Data Structures",
 desc:"Write treeHeight(root) returning the height of a binary tree. Empty = 0, leaf = 1.",
 hint:"Height = 1 + max(height(left), height(right)). Base case: null returns 0.",
 start:"function treeHeight(root) {\n  if (!root) return 0;\n  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));\n}",
 fn:"treeHeight",tests:[{a:[{val:1,left:{val:2,left:null,right:null},right:{val:3,left:null,right:null}}],e:2},{a:[null],e:0}]},

{id:297,title:"BST Search",diff:"Medium",cat:"Data Structures",
 desc:"Write bstSearch(root, target) returning true if target exists in a Binary Search Tree.",
 hint:"In a BST, left < root < right. Go left if target < root.val, right if greater.",
 start:"function bstSearch(root, target) {\n  if (!root) return false;\n  if (root.val === target) return true;\n  if (target < root.val) return bstSearch(root.left, target);\n  return bstSearch(root.right, target);\n}",
 fn:"bstSearch",tests:[{a:[{val:5,left:{val:3,left:null,right:null},right:{val:7,left:null,right:null}},3],e:true},{a:[{val:5,left:{val:3,left:null,right:null},right:{val:7,left:null,right:null}},4],e:false}]},

{id:298,title:"Graph — Add Edge",diff:"Medium",cat:"Data Structures",
 desc:"Write addEdge(graph, a, b) adding an undirected edge between nodes a and b.",
 hint:"Push b to graph[a] and a to graph[b]. Create arrays if they don't exist.",
 start:"function addEdge(graph, a, b) {\n  if (!graph[a]) graph[a] = [];\n  if (!graph[b]) graph[b] = [];\n  graph[a].push(b);\n  graph[b].push(a);\n  return graph;\n}",
 fn:"addEdge",tests:[{a:[{},0,1],e:{0:[1],1:[0]}}]},

{id:299,title:"Array Access O(1)",diff:"Easy",cat:"Data Structures",
 desc:"What is the time complexity of accessing an element by index in an array?",
 code:`arr[42]; // Time complexity: ___`,
 options:["O(1) — constant","O(n) — linear","O(log n) — logarithmic","O(n²) — quadratic"],ansIdx:0,
 hint:"Arrays store elements contiguously in memory — index access is always O(1). CS50: Arrays.",
 fn:"arrayAccessO1",tests:[{a:[],e:true}]},

{id:300,title:"Linear Search O(n)",diff:"Easy",cat:"Data Structures",
 desc:"What is the worst-case time complexity of linear search?",
 code:`for (let i = 0; i < arr.length; i++) { if (arr[i] === target) return i; }`,
 options:["O(n) — must check every element in worst case","O(1)","O(log n)","O(n²)"],ansIdx:0,
 hint:"Linear search checks each element one by one. freeCodeCamp DSA.",
 fn:"linearSearchO",tests:[{a:[],e:true}]},

{id:301,title:"Binary Search O(log n)",diff:"Easy",cat:"Data Structures",
 desc:"What is the time complexity of binary search on a sorted array?",
 code:`// Halves the search space each step\n// n -> n/2 -> n/4 -> ... -> 1`,
 options:["O(log n) — halves the problem each step","O(n)","O(1)","O(n log n)"],ansIdx:0,
 hint:"Each comparison eliminates half the remaining elements. CS50: Search.",
 fn:"binarySearchO",tests:[{a:[],e:true}]},

{id:302,title:"Queue with Two Stacks",diff:"Hard",cat:"Data Structures",
 desc:"Write queuePeek(inbox, outbox) returning the front of a queue built from two stacks.",
 hint:"If outbox is empty, pour all of inbox into outbox (reversing order). Then peek outbox top.",
 start:"function queuePeek(inbox, outbox) {\n  if (outbox.length === 0) {\n    while (inbox.length > 0) outbox.push(inbox.pop());\n  }\n  return outbox[outbox.length - 1] ?? null;\n}",
 fn:"queuePeek",tests:[{a:[[1,2,3],[]],e:1},{a:[[],[3,2,1]],e:1}]},

{id:303,title:"Fibonacci Memoization",diff:"Medium",cat:"Data Structures",
 desc:"Write fibMemo(n, memo={}) using memoization to compute the nth Fibonacci efficiently.",
 hint:"Store computed results in memo. Check memo before recursing. Base cases: n<=1.",
 start:"function fibMemo(n, memo={}) {\n  if (n <= 1) return n;\n  if (memo[n]) return memo[n];\n  memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);\n  return memo[n];\n}",
 fn:"fibMemo",tests:[{a:[0],e:0},{a:[10],e:55},{a:[20],e:6765}]},

{id:304,title:"Max-Heap Property",diff:"Hard",cat:"Data Structures",
 desc:"What property does a Max-Heap maintain?",
 code:`//      10\n//     /  \\\n//    7    8\n//   / \\\n//  4   5`,
 options:["Every parent node >= its children (root is maximum)","Root is smallest","All leaves at same level","Always sorted left to right"],ansIdx:0,
 hint:"In a Max-Heap, the root is always the maximum. Used in priority queues. CS50: Data Structures.",
 fn:"maxHeap",tests:[{a:[],e:true}]},

{id:305,title:"Trie Use Case",diff:"Hard",cat:"Data Structures",
 desc:"What is a Trie (prefix tree) most commonly used for?",
 code:`// Trie stores: 'cat', 'car', 'card', 'care'\n// Efficient prefix search`,
 options:["Autocomplete and prefix search","Sorting numbers","Graph traversal","Binary search"],ansIdx:0,
 hint:"Tries store strings character by character, enabling O(m) prefix lookup. CS50: Tries.",
 fn:"trieUsage",tests:[{a:[],e:true}]},

{id:306,title:"Merge Sort Complexity",diff:"Medium",cat:"Data Structures",
 desc:"What is the time complexity of Merge Sort in all cases?",
 code:`// Divide: log n levels\n// Merge: O(n) work per level`,
 options:["O(n log n) in all cases","O(n²) worst case","O(n) best case","O(log n)"],ansIdx:0,
 hint:"Merge sort is O(n log n) in all cases — it always divides and merges. CS50: Sort.",
 fn:"mergeSortO",tests:[{a:[],e:true}]},

{id:307,title:"Quick Sort Worst Case",diff:"Medium",cat:"Data Structures",
 desc:"What is the worst-case time complexity of Quick Sort?",
 code:`// Worst case: pivot is always smallest/largest`,
 options:["O(n²) — when pivot is always the smallest or largest","O(n log n)","O(n)","O(log n)"],ansIdx:0,
 hint:"Quick sort degrades to O(n²) with a bad pivot choice. Average case is O(n log n). CS50: Sort.",
 fn:"quickSortO",tests:[{a:[],e:true}]},

{id:308,title:"Recursive Space Complexity",diff:"Medium",cat:"Data Structures",
 desc:"What is the space complexity of this recursive function?",
 code:`function sum(n) { if (n <= 0) return 0; return n + sum(n - 1); }`,
 options:["O(n) — n stack frames are created","O(1)","O(n²)","O(log n)"],ansIdx:0,
 hint:"Each recursive call adds a frame to the call stack. n calls = O(n) space. freeCodeCamp DSA.",
 fn:"spaceComplexity",tests:[{a:[],e:true}]},

{id:309,title:"Circular Queue",diff:"Hard",cat:"Data Structures",
 desc:"What is the main advantage of a circular queue over a simple queue?",
 code:`// Circular queue wraps the rear pointer around`,
 options:["Avoids wasted space — reuses freed positions at the front","Faster enqueue","Supports random access","Automatically sorts"],ansIdx:0,
 hint:"Simple queues waste dequeued positions. Circular queues wrap the rear pointer. CS50.",
 fn:"circularQueue",tests:[{a:[],e:true}]},

{id:310,title:"Graph BFS",diff:"Medium",cat:"Data Structures",
 desc:"Write bfs(graph, start) returning nodes visited in Breadth-First Search order.",
 hint:"Use a queue. Enqueue start. While queue not empty: dequeue, visit, enqueue unvisited neighbors.",
 start:"function bfs(graph, start) {\n  const visited = new Set();\n  const queue = [start];\n  const result = [];\n  visited.add(start);\n  while (queue.length) {\n    const node = queue.shift();\n    result.push(node);\n    for (const neighbor of (graph[node] || [])) {\n      if (!visited.has(neighbor)) { visited.add(neighbor); queue.push(neighbor); }\n    }\n  }\n  return result;\n}",
 fn:"bfs",tests:[{a:[{A:['B','C'],B:['D'],C:['D'],D:[]},'A'],e:['A','B','C','D']}]},

{id:311,title:"Palindrome — Stack",diff:"Easy",cat:"Data Structures",
 desc:"Write isPalindromeStack(s) using a stack to check if s is a palindrome.",
 hint:"Push all chars onto a stack. Then pop each and compare to original chars left to right.",
 start:"function isPalindromeStack(s) {\n  const stack = s.split('');\n  for (const char of s) { if (char !== stack.pop()) return false; }\n  return true;\n}",
 fn:"isPalindromeStack",tests:[{a:["racecar"],e:true},{a:["hello"],e:false}]},

{id:312,title:"Balanced Brackets",diff:"Medium",cat:"Data Structures",
 desc:"Write isBalanced(s) using a stack to check if brackets are properly balanced.",
 hint:"Push openers. On closer, pop and check if it matches. Stack should be empty at end.",
 start:"function isBalanced(s) {\n  const stack = [];\n  const pairs = {')':'(',']':'[','}':'{'};\n  for (const ch of s) {\n    if ('([{'.includes(ch)) stack.push(ch);\n    else if (pairs[ch]) { if (stack.pop() !== pairs[ch]) return false; }\n  }\n  return stack.length === 0;\n}",
 fn:"isBalanced",tests:[{a:["({[]})"],e:true},{a:["([)]"],e:false},{a:[""],e:true}]},

{id:313,title:"Min Stack",diff:"Hard",cat:"Data Structures",
 desc:"Write getMin(stack, minStack) returning the current minimum in O(1).",
 hint:"minStack tracks the minimum at each level.",
 start:"function getMin(stack, minStack) {\n  return minStack.length ? minStack[minStack.length - 1] : null;\n}",
 fn:"getMin",tests:[{a:[[3,1,2],[1,1]],e:1},{a:[[5],[5]],e:5}]},

{id:314,title:"Floyd's Cycle Detection",diff:"Hard",cat:"Data Structures",
 desc:"What does Floyd's Cycle Detection algorithm use?",
 code:`// slow pointer moves 1 step\n// fast pointer moves 2 steps\n// If they meet, there is a cycle`,
 options:["Two pointers at different speeds — they meet if a cycle exists","A hash set to track visited nodes","Stack-based DFS","Sorting to detect duplicates"],ansIdx:0,
 hint:"Floyd's tortoise-and-hare algorithm uses O(1) space to detect cycles. freeCodeCamp DSA.",
 fn:"floydCycle",tests:[{a:[],e:true}]},

{id:315,title:"Array vs Linked List Insert",diff:"Easy",cat:"Data Structures",
 desc:"Which data structure has O(1) insertion at the head?",
 code:`// Array: shift everything right -- O(n)\n// Linked List: update one pointer -- O(1)`,
 options:["Linked List","Array","Both","Neither"],ansIdx:0,
 hint:"Linked list head insertion just updates the head pointer. CS50: Data Structures.",
 fn:"linkedListInsert",tests:[{a:[],e:true}]},

{id:316,title:"Priority Queue Implementation",diff:"Medium",cat:"Data Structures",
 desc:"What data structure is typically used to implement a Priority Queue efficiently?",
 code:`// O(log n) insert and extract-min/max`,
 options:["Heap (Min-Heap or Max-Heap)","Linked List","Array","Stack"],ansIdx:0,
 hint:"Heaps provide O(log n) insertion and O(1) peek. CS50: Priority Queues.",
 fn:"priorityQueue",tests:[{a:[],e:true}]},

{id:317,title:"Recursion Base Case",diff:"Easy",cat:"Data Structures",
 desc:"What happens if a recursive function has no base case?",
 code:`function count(n) { console.log(n); count(n + 1); }`,
 options:["Stack overflow — call stack fills up and program crashes","It runs forever without crashing","Returns undefined","Loops 1000 times"],ansIdx:0,
 hint:"Without a base case, recursive calls accumulate until the call stack limit is exceeded. CS50: Recursion.",
 fn:"noBaseCase",tests:[{a:[],e:true}]},

{id:318,title:"Stable Sort",diff:"Medium",cat:"Data Structures",
 desc:"What does it mean for a sorting algorithm to be stable?",
 code:`// Equal elements maintain their original relative order`,
 options:["Equal elements maintain their original relative order","Always O(n log n)","Doesn't mutate input","Works on any data type"],ansIdx:0,
 hint:"Stable sorts preserve the original order of equal elements. Merge sort is stable; quick sort is not. CS50.",
 fn:"stableSort",tests:[{a:[],e:true}]},

{id:319,title:"Two Pointer Sum Closest",diff:"Medium",cat:"Data Structures",
 desc:"Write sumClosest(arr, target) finding two numbers with sum closest to target. Array is sorted.",
 hint:"Two pointers from both ends. If sum < target move left right. If sum > target move right left.",
 start:"function sumClosest(arr, target) {\n  let l = 0, r = arr.length - 1;\n  let closest = arr[l] + arr[r];\n  while (l < r) {\n    const sum = arr[l] + arr[r];\n    if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;\n    if (sum < target) l++; else r--;\n  }\n  return closest;\n}",
 fn:"sumClosest",tests:[{a:[[-1,2,1,-4],1],e:2},{a:[[1,2,4,8,16,32,64,128],82],e:80}]},

{id:320,title:"Kadane's Algorithm",diff:"Medium",cat:"Data Structures",
 desc:"Write maxSubArray(nums) finding the maximum sum of a contiguous subarray.",
 hint:"Track current sum and global max. If currentSum < 0, reset to current element.",
 start:"function maxSubArray(nums) {\n  let maxSum = nums[0];\n  let current = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    current = Math.max(nums[i], current + nums[i]);\n    maxSum = Math.max(maxSum, current);\n  }\n  return maxSum;\n}",
 fn:"maxSubArray",tests:[{a:[[-2,1,-3,4,-1,2,1,-5,4]],e:6},{a:[[1]],e:1},{a:[[-1,-2,-3]],e:-1}]},

/* ══ PYTHON ADVANCED (321–340) — Python.org Docs ══ */
{id:321,title:"Decorators",diff:"Hard",cat:"Python Advanced",
 desc:"What does a Python decorator do?",
 code:`@log\ndef greet(name):\n    return f'Hello {name}'`,
 options:["Wraps a function to modify its behavior without changing its source code","Creates a new class","Inherits from a base class","Adds type hints"],ansIdx:0,
 hint:"A decorator is a function that takes a function and returns a modified version. Python docs: Decorators.",
 fn:"pyDecorators",tests:[{a:[],e:true}]},

{id:322,title:"Context Managers",diff:"Medium",cat:"Python Advanced",
 desc:"What methods must a class implement to work as a context manager with with?",
 code:`class MyResource:\n    def ___(self): ...\n    def ___(self, *args): ...`,
 options:["__enter__ and __exit__","__init__ and __del__","__open__ and __close__","__start__ and __stop__"],ansIdx:0,
 hint:"__enter__ sets up the context; __exit__ tears it down. Python docs: Context Managers.",
 fn:"pyContextManager",tests:[{a:[],e:true}]},

{id:323,title:"Generator vs List Comprehension",diff:"Medium",cat:"Python Advanced",
 desc:"What is the difference between a list comprehension and a generator expression?",
 code:`squares_list = [x**2 for x in range(1000)]  # list\nsquares_gen  = (x**2 for x in range(1000))  # generator`,
 options:["Generator is lazy — one value at a time; list stores all in memory","Generator faster always","List always preferred","They are identical"],ansIdx:0,
 hint:"Generators use () and produce values lazily. Python docs: Generators.",
 fn:"pyGenExpr",tests:[{a:[],e:true}]},

{id:324,title:"@dataclass",diff:"Medium",cat:"Python Advanced",
 desc:"What does the @dataclass decorator automatically generate?",
 code:`from dataclasses import dataclass\n@dataclass\nclass Point:\n    x: float\n    y: float`,
 options:["__init__, __repr__, and __eq__ automatically","Only __init__","Only __repr__","Nothing — just documentation"],ansIdx:0,
 hint:"@dataclass auto-generates __init__, __repr__, and __eq__ from class annotations. Python docs.",
 fn:"pyDataclass",tests:[{a:[],e:true}]},

{id:325,title:"@property decorator",diff:"Medium",cat:"Python Advanced",
 desc:"What does the @property decorator do?",
 code:`class Circle:\n    @property\n    def area(self):\n        return 3.14 * self.radius ** 2\nc.area  # no parentheses needed`,
 options:["Makes a method accessible as an attribute without ()","Makes the attribute private","Caches the result","Makes the class iterable"],ansIdx:0,
 hint:"@property lets you define computed attributes accessed like fields. Python docs: property().",
 fn:"pyProperty",tests:[{a:[],e:true}]},

{id:326,title:"__slots__",diff:"Hard",cat:"Python Advanced",
 desc:"What is the purpose of __slots__ in a Python class?",
 code:`class Point:\n    __slots__ = ['x', 'y']`,
 options:["Reduces memory by preventing __dict__ creation per instance","Prevents inheritance","Makes attributes readonly","Enables pickling"],ansIdx:0,
 hint:"__slots__ replaces per-instance __dict__ with fixed-size arrays, saving memory. Python docs.",
 fn:"pySlots",tests:[{a:[],e:true}]},

{id:327,title:"Abstract Base Class",diff:"Hard",cat:"Python Advanced",
 desc:"What does marking a method with @abstractmethod enforce?",
 code:`from abc import ABC, abstractmethod\nclass Animal(ABC):\n    @abstractmethod\n    def speak(self): pass`,
 options:["Subclasses must implement the method or they cannot be instantiated","The method is private","The method is a class method","The method cannot be overridden"],ansIdx:0,
 hint:"@abstractmethod forces subclasses to implement the method. Python docs: abc.",
 fn:"pyABC",tests:[{a:[],e:true}]},

{id:328,title:"collections.Counter",diff:"Easy",cat:"Python Advanced",
 desc:"What does Counter('banana') return?",
 code:`from collections import Counter\nCounter('banana')`,
 options:["Counter({'a':3,'n':2,'b':1})","{'b':1,'a':3,'n':2}","[('a',3),('n',2)]","3"],ansIdx:0,
 hint:"Counter counts occurrences of each element. Python docs: collections.Counter.",
 fn:"pyCounter",tests:[{a:["banana"],e:{"a":3,"n":2,"b":1}}]},

{id:329,title:"functools.lru_cache",diff:"Medium",cat:"Python Advanced",
 desc:"What does @lru_cache do to a function?",
 code:`from functools import lru_cache\n@lru_cache(maxsize=128)\ndef fib(n): ...`,
 options:["Caches return values so repeated calls with same args skip computation","Limits call count","Makes thread-safe","Logs all calls"],ansIdx:0,
 hint:"lru_cache memoizes function results using a Least Recently Used cache. Python docs: functools.",
 fn:"pyLRUCache",tests:[{a:[],e:true}]},

{id:330,title:"Walrus Operator :=",diff:"Medium",cat:"Python Advanced",
 desc:"What does the walrus operator := do?",
 code:`while chunk := file.read(8192):\n    process(chunk)`,
 options:["Assigns a value and returns it in the same expression","Checks equality","Creates a tuple","Is a comparison operator"],ansIdx:0,
 hint:"The walrus operator (assignment expression) assigns and returns in one step. Python 3.8+. Python docs.",
 fn:"pyWalrus",tests:[{a:[],e:true}]},

{id:331,title:"Type Hints — list[str]",diff:"Easy",cat:"Python Advanced",
 desc:"What is the correct type hint for a function returning a list of strings?",
 code:`def get_names() -> ___:\n    return ['Alice', 'Bob']`,
 options:["list[str]","List<str>","Array[str]","[str]"],ansIdx:0,
 hint:"Python 3.9+ supports built-in generics like list[str]. Python docs: Type Hints.",
 fn:"pyTypeHints",tests:[{a:[],e:true}]},

{id:332,title:"itertools.chain",diff:"Medium",cat:"Python Advanced",
 desc:"What does itertools.chain([1,2],[3,4],[5]) produce?",
 code:`import itertools\nlist(itertools.chain([1,2],[3,4],[5]))`,
 options:["[1,2,3,4,5]","[[1,2],[3,4],[5]]","[1,2],[3,4],[5]","TypeError"],ansIdx:0,
 hint:"chain() concatenates multiple iterables into one continuous iterator. Python docs: itertools.chain.",
 fn:"pyChain",tests:[{a:[[[1,2],[3,4],[5]]],e:[1,2,3,4,5]}]},

{id:333,title:"namedtuple",diff:"Easy",cat:"Python Advanced",
 desc:"What is the main benefit of collections.namedtuple?",
 code:`Point = namedtuple('Point', ['x', 'y'])\np = Point(1, 2)\np.x  # 1`,
 options:["Tuple with named fields — more readable than index access","Mutable alternative to tuple","Faster than dict","Enables JSON serialization"],ansIdx:0,
 hint:"namedtuple adds attribute access to tuples without full class overhead. Python docs.",
 fn:"pyNamedTuple",tests:[{a:[],e:true}]},

{id:334,title:"defaultdict",diff:"Medium",cat:"Python Advanced",
 desc:"What does defaultdict(list) do differently from a regular dict?",
 code:`from collections import defaultdict\nd = defaultdict(list)\nd['key'].append(1)  # no KeyError`,
 options:["Returns the default factory's value for missing keys instead of raising KeyError","Works only with lists","Is faster than dict","Sorts keys automatically"],ansIdx:0,
 hint:"defaultdict automatically creates a default value for missing keys. Python docs.",
 fn:"pyDefaultDict",tests:[{a:[],e:true}]},

{id:335,title:"Extended Unpacking",diff:"Medium",cat:"Python Advanced",
 desc:"What does *b capture in: a, *b, c = [1,2,3,4,5]?",
 code:`a, *b, c = [1, 2, 3, 4, 5]`,
 options:["[2,3,4]","[1,2,3,4,5]","2","[2,3,4,5]"],ansIdx:0,
 hint:"*b captures all middle elements. Extended unpacking with * was added in Python 3. Python docs.",
 fn:"pyUnpacking",tests:[{a:[],e:[2,3,4]}]},

{id:336,title:"classmethod vs staticmethod",diff:"Medium",cat:"Python Advanced",
 desc:"What is the difference between @classmethod and @staticmethod?",
 code:`class Dog:\n    @classmethod\n    def from_dict(cls, data): ...  # cls = the class\n    @staticmethod\n    def bark_sound(): ...         # no implicit arg`,
 options:["classmethod receives cls as first arg; staticmethod receives nothing","They are identical","staticmethod can create instances","classmethod is faster"],ansIdx:0,
 hint:"@classmethod gets cls; useful for alternative constructors. @staticmethod is a namespace function. Python docs.",
 fn:"pyClassStatic",tests:[{a:[],e:true}]},

{id:337,title:"Exception Chaining",diff:"Hard",cat:"Python Advanced",
 desc:"What does 'raise ValueError() from original_error' do?",
 code:`try:\n    int('abc')\nexcept ValueError as e:\n    raise RuntimeError('parse failed') from e`,
 options:["Chains the new exception to the original, preserving traceback context","Replaces the original exception","Suppresses the original","Creates a new traceback"],ansIdx:0,
 hint:"'raise X from Y' sets __cause__ and preserves the full exception chain. Python docs.",
 fn:"pyExceptionChain",tests:[{a:[],e:true}]},

{id:338,title:"async def return type",diff:"Hard",cat:"Python Advanced",
 desc:"What does async def return when called without await?",
 code:`async def fetch():\n    return 'data'\nresult = fetch()  # What is result?`,
 options:["A coroutine object — must be awaited or run with asyncio.run()","The string 'data'","A Future","A thread"],ansIdx:0,
 hint:"async functions return coroutines. Use await or asyncio.run() to execute them. Python docs: asyncio.",
 fn:"pyAsync",tests:[{a:[],e:true}]},

{id:339,title:"pathlib",diff:"Easy",cat:"Python Advanced",
 desc:"What is the modern Pythonic way to work with file paths?",
 code:`from pathlib import Path\npath = Path('data') / 'file.txt'\npath.read_text()`,
 options:["pathlib.Path — object-oriented path manipulation","os.path.join()","string concatenation","open() directly"],ansIdx:0,
 hint:"pathlib provides an OO interface to filesystem paths with / operator for joining. Python docs.",
 fn:"pyPathlib",tests:[{a:[],e:true}]},

{id:340,title:"match statement",diff:"Medium",cat:"Python Advanced",
 desc:"What Python version introduced the match statement (structural pattern matching)?",
 code:`match command:\n    case 'quit': quit()\n    case _: print('unknown')`,
 options:["Python 3.10","Python 3.8","Python 3.6","Python 2.7"],ansIdx:0,
 hint:"Structural pattern matching (PEP 634) was introduced in Python 3.10. Python docs.",
 fn:"pyMatch",tests:[{a:[],e:true}]},

/* ══ JS ADVANCED (341–365) — MDN Web Docs ══ */
{id:341,title:"Promise Chaining",diff:"Medium",cat:"JS Advanced",
 desc:"What does each .then() in a chain receive?",
 code:`fetch(url).then(res => res.json()).then(data => console.log(data));`,
 options:["The return value of the previous .then()","The original Promise","The fetch Response always","undefined"],ansIdx:0,
 hint:"Each .then() receives the resolved value of the previous .then(). MDN: Promise.prototype.then().",
 fn:"promiseChain",tests:[{a:[],e:true}]},

{id:342,title:"for await...of",diff:"Hard",cat:"JS Advanced",
 desc:"What keyword is needed to iterate over an async iterable?",
 code:`___ (const item of asyncIterable) { console.log(item); }`,
 options:["for await...of","for...of","for...in","await for"],ansIdx:0,
 hint:"for await...of handles async iterables that yield Promises. MDN: for await...of.",
 fn:"asyncIterator",tests:[{a:[],e:true}]},

{id:343,title:"Proxy",diff:"Hard",cat:"JS Advanced",
 desc:"What does the JavaScript Proxy object allow?",
 code:`const p = new Proxy({name:'Dev'}, { get: (obj, prop) => prop in obj ? obj[prop] : 'N/A' });\np.age; // 'N/A'`,
 options:["Intercepts and customizes operations on objects (get, set, delete)","Creates a copy","Freezes an object","Makes an object iterable"],ansIdx:0,
 hint:"Proxy wraps an object and intercepts fundamental operations. MDN: Proxy.",
 fn:"jsProxy",tests:[{a:[],e:true}]},

{id:344,title:"Reflect API",diff:"Hard",cat:"JS Advanced",
 desc:"What is the Reflect API's primary purpose?",
 code:`Reflect.set(obj, 'name', 'Dev');\nReflect.get(obj, 'name');`,
 options:["Provides methods for interceptable JS operations — mirrors Proxy traps","Reflects light in 3D","Creates object mirrors","Handles async reflection"],ansIdx:0,
 hint:"Reflect provides the default implementations for Proxy traps. MDN: Reflect.",
 fn:"jsReflect",tests:[{a:[],e:true}]},

{id:345,title:"Named Export",diff:"Easy",cat:"JS Advanced",
 desc:"Which is the correct named export syntax?",
 code:`___ function add(a, b) { return a + b; }`,
 options:["export","module.export","exports =","export default"],ansIdx:0,
 hint:"Named exports use 'export' keyword. Default exports use 'export default'. MDN: export.",
 fn:"esExport",tests:[{a:[],e:true}]},

{id:346,title:"Dynamic Import",diff:"Medium",cat:"JS Advanced",
 desc:"What does import() (dynamic import) return?",
 code:`const module = await import('./utils.js');`,
 options:["A Promise that resolves to the module","The module directly","undefined","A string path"],ansIdx:0,
 hint:"Dynamic import() returns a Promise — useful for code splitting and lazy loading. MDN: import().",
 fn:"dynamicImport",tests:[{a:[],e:true}]},

{id:347,title:"WeakRef",diff:"Hard",cat:"JS Advanced",
 desc:"What is the purpose of WeakRef?",
 code:`const ref = new WeakRef(targetObject);\nref.deref(); // returns object or undefined`,
 options:["Holds a weak reference — doesn't prevent garbage collection","Prevents GC","Creates a deep copy","Observes mutations"],ansIdx:0,
 hint:"WeakRef holds a reference without preventing GC. deref() may return undefined if GC'd. MDN: WeakRef.",
 fn:"weakRef",tests:[{a:[],e:true}]},

{id:348,title:"yield*",diff:"Hard",cat:"JS Advanced",
 desc:"What does yield* do inside a generator?",
 code:`function* gen() { yield* [1, 2, 3]; yield 4; }`,
 options:["Delegates to another iterable — yields each value from it","Yields a single array","Breaks the generator","Creates a new generator"],ansIdx:0,
 hint:"yield* delegates to another iterable, yielding each of its values. MDN: yield*.",
 fn:"yieldStar",tests:[{a:[],e:[1,2,3,4]}]},

{id:349,title:"Object.entries",diff:"Easy",cat:"JS Advanced",
 desc:"What does Object.entries({a:1,b:2}) return?",
 code:`Object.entries({a:1, b:2})`,
 options:['[["a",1],["b",2]]','["a","b"]','[1,2]','{a:1,b:2}'],ansIdx:0,
 hint:"Object.entries() returns [key, value] pairs as an array. MDN: Object.entries().",
 fn:"objEntries",tests:[{a:[{a:1,b:2}],e:[["a",1],["b",2]]}]},

{id:350,title:"Nullish Assignment ??=",diff:"Easy",cat:"JS Advanced",
 desc:"What does x ??= 'default' do when x is null?",
 code:`let x = null;\nx ??= 'default';\nconsole.log(x);`,
 options:['"default" — assigns only if x is null or undefined','Always assigns','Assigns if falsy','Throws if null'],ansIdx:0,
 hint:"??= assigns only when the left side is null or undefined. MDN: ??=.",
 fn:"nullishAssign",tests:[{a:[],e:"default"}]},

{id:351,title:"Array.at()",diff:"Easy",cat:"JS Advanced",
 desc:"What does [10,20,30].at(-2) return?",
 code:`[10,20,30].at(-2)`,
 options:["20","10","30","undefined"],ansIdx:0,
 hint:".at() supports negative indices. -1 is last, -2 is second-to-last. MDN: Array.prototype.at().",
 fn:"arrayAt",tests:[{a:[[10,20,30],-2],e:20}]},

{id:352,title:"Object.fromEntries",diff:"Medium",cat:"JS Advanced",
 desc:"What does Object.fromEntries([['a',1],['b',2]]) return?",
 code:`Object.fromEntries([['a',1],['b',2]])`,
 options:["{a:1,b:2}",'[["a",1],["b",2]]',"Map","SyntaxError"],ansIdx:0,
 hint:"Object.fromEntries() converts [key,value] pairs back into an object. MDN.",
 fn:"fromEntries",tests:[{a:[[["a",1],["b",2]]],e:{a:1,b:2}}]},

{id:353,title:"globalThis",diff:"Medium",cat:"JS Advanced",
 desc:"What problem does globalThis solve?",
 code:`// Works in browser, Node.js, Web Workers:\nglobalThis.setTimeout(...)`,
 options:["Provides a consistent reference to the global object across environments","Makes all variables global","Prevents global variable access","Creates a new global scope"],ansIdx:0,
 hint:"globalThis is window in browsers, global in Node.js. MDN: globalThis.",
 fn:"globalThisQ",tests:[{a:[],e:true}]},

{id:354,title:"structuredClone",diff:"Medium",cat:"JS Advanced",
 desc:"What does structuredClone(obj) do?",
 code:`const clone = structuredClone({ a: { b: 1 } });`,
 options:["Creates a deep clone — nested objects are copied not referenced","Creates a shallow clone","Freezes the object","Serializes to JSON"],ansIdx:0,
 hint:"structuredClone performs a deep clone of most JS values. MDN: structuredClone().",
 fn:"structuredCloneQ",tests:[{a:[{a:{b:1}}],e:{a:{b:1}}}]},

{id:355,title:"Promise.allSettled",diff:"Medium",cat:"JS Advanced",
 desc:"How does Promise.allSettled differ from Promise.all?",
 code:`Promise.allSettled([p1, p2, p3])`,
 options:["Waits for ALL promises regardless of rejection — returns status+value for each","Rejects immediately on first failure","Returns only resolved values","Works only with async functions"],ansIdx:0,
 hint:"allSettled never short-circuits — always returns results for all promises. MDN: Promise.allSettled().",
 fn:"promiseAllSettled",tests:[{a:[],e:true}]},

{id:356,title:"Tagged Template Literals",diff:"Hard",cat:"JS Advanced",
 desc:"What does a tagged template literal enable?",
 code:"const result = tag`Hello World`;",
 options:["Custom processing of template literals — access raw strings and interpolated values","Only adds CSS class names","Prevents code injection","Translates strings"],ansIdx:0,
 hint:"Tagged templates call a function with the string parts and interpolated values. MDN: Template literals.",
 fn:"taggedTemplate",tests:[{a:[],e:true}]},

{id:357,title:"Intl.NumberFormat",diff:"Medium",cat:"JS Advanced",
 desc:"What does new Intl.NumberFormat('en-US').format(1234567.89) return?",
 code:`new Intl.NumberFormat('en-US').format(1234567.89)`,
 options:['"1,234,567.89"','"1234567.89"','"$1,234,567.89"',"1234567"],ansIdx:0,
 hint:"Intl.NumberFormat formats numbers with locale-appropriate separators. MDN: Intl.NumberFormat.",
 fn:"intlNumber",tests:[{a:[1234567.89],e:"1,234,567.89"}]},

{id:358,title:"Symbol.iterator",diff:"Hard",cat:"JS Advanced",
 desc:"What does implementing Symbol.iterator enable?",
 code:`class Range { [Symbol.iterator]() { /* ... */ } }\nfor (const n of new Range(1, 5)) { }`,
 options:["Makes a custom object usable in for...of loops and spread","Makes the object callable","Enables JSON.stringify","Adds array methods"],ansIdx:0,
 hint:"Symbol.iterator is the protocol for making objects iterable. MDN: Iteration protocols.",
 fn:"symbolIterator",tests:[{a:[],e:true}]},

{id:359,title:"Object.assign — shallow",diff:"Medium",cat:"JS Advanced",
 desc:"What limitation does Object.assign have with nested objects?",
 code:`const source = { a: { b: 1 } };\nObject.assign({}, source).a === source.a; // ?`,
 options:["true — nested objects are copied by reference (shallow)","false — deep copy","TypeError","undefined"],ansIdx:0,
 hint:"Object.assign only copies the top level. Nested objects still share references. MDN: Object.assign().",
 fn:"objAssignShallow",tests:[{a:[],e:true}]},

{id:360,title:"Microtask Queue",diff:"Hard",cat:"JS Advanced",
 desc:"Which runs first — resolved Promise callbacks or setTimeout callbacks?",
 code:`setTimeout(() => console.log('A'), 0);\nPromise.resolve().then(() => console.log('B'));\nconsole.log('C');`,
 options:["C, B, A — Promises go to microtask queue (higher priority)","C, A, B","A, B, C","B, C, A"],ansIdx:0,
 hint:"Microtasks (Promises) run before the next task (setTimeout). MDN: Event loop and microtasks.",
 fn:"microtaskQueue",tests:[{a:[],e:["C","B","A"]}]},

{id:361,title:"Logical OR Assignment ||=",diff:"Easy",cat:"JS Advanced",
 desc:"What does x ||= 'fallback' do when x is empty string?",
 code:`let x = '';\nx ||= 'fallback';\nconsole.log(x);`,
 options:['"fallback" — assigns if x is falsy','"" — never assigns','Throws TypeError','Assigns only if null'],ansIdx:0,
 hint:"||= assigns the right side when the left side is falsy. MDN: ||=.",
 fn:"orAssign",tests:[{a:[],e:"fallback"}]},

{id:362,title:"Array.from with map",diff:"Easy",cat:"JS Advanced",
 desc:"What does Array.from({length:3}, (_,i) => i+1) return?",
 code:`Array.from({length:3}, (_, i) => i + 1)`,
 options:["[1,2,3]","[0,1,2]","[undefined,undefined,undefined]","[3]"],ansIdx:0,
 hint:"Array.from accepts a length and a map function. MDN: Array.from().",
 fn:"arrayFromMap",tests:[{a:[3],e:[1,2,3]}]},

{id:363,title:"AbortController fetch",diff:"Medium",cat:"JS Advanced",
 desc:"How do you cancel a fetch request after 5 seconds?",
 code:`const controller = new AbortController();\nsetTimeout(() => controller.___, 5000);\nfetch(url, { signal: controller.signal });`,
 options:["abort()","cancel()","stop()","reject()"],ansIdx:0,
 hint:"controller.abort() cancels the fetch. MDN: AbortController.",
 fn:"abortFetch",tests:[{a:[],e:true}]},

{id:364,title:"Object.groupBy",diff:"Medium",cat:"JS Advanced",
 desc:"What does Object.groupBy(arr, fn) do?",
 code:`Object.groupBy([1,2,3,4,5], n => n%2===0 ? 'even' : 'odd');`,
 options:["Groups array elements by the key returned by fn","Sorts the array","Filters by key","Returns a Map"],ansIdx:0,
 hint:"Object.groupBy (ES2024) groups elements into an object by a computed key. MDN: Object.groupBy().",
 fn:"objGroupBy",tests:[{a:[],e:true}]},

{id:365,title:"CSS-in-JS tagged templates",diff:"Easy",cat:"JS Advanced",
 desc:"What feature makes CSS-in-JS libraries like styled-components possible?",
 code:"const Button = styled.button`background: blue;`;",
 options:["Tagged template literals — process the CSS string with JS logic","Regular template literals","Object spread","CSS modules"],ansIdx:0,
 hint:"styled-components uses tagged templates to intercept the CSS string. MDN: Template literals.",
 fn:"cssInJS",tests:[{a:[],e:true}]},

/* ══ CSS ADVANCED (366–385) — MDN CSS Reference ══ */
{id:366,title:"CSS @keyframes",diff:"Medium",cat:"CSS Advanced",
 desc:"What does this CSS animation do?",
 code:`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }\n.box { animation: fadeIn 1s ease; }`,
 options:["Fades element from invisible to visible over 1 second","Slides from left","Scales from 0","Rotates"],ansIdx:0,
 hint:"@keyframes defines animation steps. from/to are aliases for 0%/100%. MDN: @keyframes.",
 fn:"cssKeyframes",tests:[{a:[],e:true}]},

{id:367,title:"CSS translate",diff:"Easy",cat:"CSS Advanced",
 desc:"What does transform: translate(50px, 100px) do?",
 code:`.box { transform: translate(50px, 100px); }`,
 options:["Moves element 50px right and 100px down without affecting layout","Changes width/height","Rotates the element","Scales the element"],ansIdx:0,
 hint:"translate() moves an element visually without affecting other elements' layout. MDN: transform.",
 fn:"cssTranslate",tests:[{a:[],e:true}]},

{id:368,title:"CSS setProperty",diff:"Medium",cat:"CSS Advanced",
 desc:"How do you update a CSS custom property with JavaScript?",
 code:`document.documentElement.style.___('--primary-color', '#ff0000');`,
 options:["setProperty","setAttribute","style","cssVar"],ansIdx:0,
 hint:"setProperty() updates CSS custom properties on any element. MDN: CSSStyleDeclaration.setProperty().",
 fn:"cssSetProperty",tests:[{a:[],e:true}]},

{id:369,title:"auto-fill vs auto-fit",diff:"Hard",cat:"CSS Advanced",
 desc:"What is the difference between auto-fill and auto-fit in grid-template-columns?",
 code:`grid-template-columns: repeat(auto-fill, minmax(200px,1fr));\ngrid-template-columns: repeat(auto-fit,  minmax(200px,1fr));`,
 options:["auto-fit collapses empty tracks; auto-fill preserves empty column space","They are identical","auto-fill for rows only","auto-fit ignores minmax"],ansIdx:0,
 hint:"auto-fit collapses empty tracks so filled tracks expand. auto-fill preserves them. MDN: CSS Grid.",
 fn:"cssAutoFit",tests:[{a:[],e:true}]},

{id:370,title:"!important danger",diff:"Easy",cat:"CSS Advanced",
 desc:"What is the danger of overusing !important in CSS?",
 code:`.btn { color: blue !important; }`,
 options:["It overrides all other styles, making future overrides require more !important — escalation","Makes CSS faster","Only works in Chrome","Prevents inheritance"],ansIdx:0,
 hint:"!important breaks the natural cascade and creates specificity wars. Use sparingly. MDN: Specificity.",
 fn:"cssImportant",tests:[{a:[],e:true}]},

{id:371,title:"CSS :is() selector",diff:"Medium",cat:"CSS Advanced",
 desc:"What does :is(h1, h2, h3) a select?",
 code:`:is(h1, h2, h3) a { color: red; }`,
 options:["Links inside any h1, h2, or h3 element","All h1, h2, h3 elements","All anchor tags","h1 elements only"],ansIdx:0,
 hint:":is() matches any selector in its list — more concise than repeating selectors. MDN: :is().",
 fn:"cssIs",tests:[{a:[],e:true}]},

{id:372,title:"CSS Logical Properties",diff:"Medium",cat:"CSS Advanced",
 desc:"What is the logical property equivalent of margin-left for RTL-safe layouts?",
 code:`.el { margin-inline-___: 16px; }`,
 options:["start","left","begin","origin"],ansIdx:0,
 hint:"margin-inline-start = margin-left in LTR, margin-right in RTL. MDN: CSS Logical Properties.",
 fn:"cssLogical",tests:[{a:[],e:true}]},

{id:373,title:"Container Queries",diff:"Hard",cat:"CSS Advanced",
 desc:"What do CSS Container Queries allow that Media Queries cannot?",
 code:`@container sidebar (min-width: 300px) { .card { flex-direction: row; } }`,
 options:["Style elements based on their parent container's size, not the viewport","Style based on screen size","Style based on device type","Style based on user preference"],ansIdx:0,
 hint:"Container queries respond to the container element's size. MDN: CSS Container Queries.",
 fn:"cssContainer",tests:[{a:[],e:true}]},

{id:374,title:"CSS subgrid",diff:"Hard",cat:"CSS Advanced",
 desc:"What problem does CSS subgrid solve?",
 code:`.child { grid-template-columns: subgrid; }`,
 options:["Lets a child element participate in its parent's grid tracks — aligning across nested grids","Creates new tracks inside a grid","Copies the parent grid","Makes child ignore parent grid"],ansIdx:0,
 hint:"subgrid lets children inherit the parent grid's track definitions. MDN: CSS Subgrid.",
 fn:"cssSubgrid",tests:[{a:[],e:true}]},

{id:375,title:"scroll-behavior smooth",diff:"Easy",cat:"CSS Advanced",
 desc:"What does scroll-behavior: smooth on the html element do?",
 code:`html { scroll-behavior: smooth; }`,
 options:["Makes anchor link navigation and programmatic scrolling animate smoothly","Enables infinite scroll","Prevents scrolling","Adds scroll snapping"],ansIdx:0,
 hint:"scroll-behavior: smooth animates scrolling for anchor links and scrollIntoView(). MDN.",
 fn:"scrollBehavior",tests:[{a:[],e:true}]},

{id:376,title:"aspect-ratio",diff:"Easy",cat:"CSS Advanced",
 desc:"What does aspect-ratio: 16/9 maintain?",
 code:`.video { width: 100%; aspect-ratio: 16/9; }`,
 options:["The element's width-to-height ratio — height auto-adjusts as width changes","Font size ratio","Image resolution","Grid column ratio"],ansIdx:0,
 hint:"aspect-ratio maintains the proportional relationship. Height auto-calculates from width. MDN.",
 fn:"cssAspectRatio",tests:[{a:[],e:true}]},

{id:377,title:"CSS gap",diff:"Easy",cat:"CSS Advanced",
 desc:"Which layout systems support the gap property?",
 code:`.container { display: flex; gap: 16px; }`,
 options:["Both Flexbox and Grid","Grid only","Flexbox only","Block layout only"],ansIdx:0,
 hint:"gap (formerly grid-gap) now works in both Grid and Flexbox. MDN: gap.",
 fn:"cssGap",tests:[{a:[],e:true}]},

{id:378,title:"prefers-color-scheme",diff:"Medium",cat:"CSS Advanced",
 desc:"What does this media query detect?",
 code:`@media (prefers-color-scheme: dark) { body { background: #000; } }`,
 options:["The user's OS dark/light mode preference","Screen brightness","A CSS class named dark","Whether JavaScript is enabled"],ansIdx:0,
 hint:"prefers-color-scheme detects the system dark/light preference. MDN: prefers-color-scheme.",
 fn:"prefersColorScheme",tests:[{a:[],e:true}]},

{id:379,title:"will-change",diff:"Hard",cat:"CSS Advanced",
 desc:"What is the purpose of will-change: transform?",
 code:`.animated { will-change: transform; }`,
 options:["Hints the browser to promote the element to its own compositor layer for smoother animation","Forces a transform","Prevents layout shifts","Disables transitions"],ansIdx:0,
 hint:"will-change lets the browser optimize before animation. Use sparingly — it consumes memory. MDN.",
 fn:"cssWillChange",tests:[{a:[],e:true}]},

{id:380,title:"CSS clamp()",diff:"Medium",cat:"CSS Advanced",
 desc:"What does font-size: clamp(1rem, 2.5vw, 2rem) do?",
 code:`font-size: clamp(1rem, 2.5vw, 2rem);`,
 options:["Sets font size to 2.5vw, never smaller than 1rem or larger than 2rem","Always sets 2.5vw","Clamps to exactly 1rem","Adds 2.5vw to 1rem"],ansIdx:0,
 hint:"clamp(min, preferred, max) constrains a value between a minimum and maximum. MDN: clamp().",
 fn:"cssClamp",tests:[{a:[],e:true}]},

{id:381,title:"backdrop-filter",diff:"Medium",cat:"CSS Advanced",
 desc:"What does backdrop-filter: blur(10px) blur?",
 code:`.modal { backdrop-filter: blur(10px); }`,
 options:["Content behind the element (the background)","The element itself","The element's children","Adjacent elements"],ansIdx:0,
 hint:"backdrop-filter applies effects to the area behind an element. MDN: backdrop-filter.",
 fn:"backdropFilter",tests:[{a:[],e:true}]},

{id:382,title:"writing-mode vertical",diff:"Medium",cat:"CSS Advanced",
 desc:"What does writing-mode: vertical-rl do?",
 code:`.text { writing-mode: vertical-rl; }`,
 options:["Text flows vertically top-to-bottom, columns right-to-left","Rotates the element 90 degrees","Makes text right-aligned","Changes font direction"],ansIdx:0,
 hint:"writing-mode controls the direction of text flow. MDN: writing-mode.",
 fn:"writingMode",tests:[{a:[],e:true}]},

{id:383,title:":where() vs :is()",diff:"Medium",cat:"CSS Advanced",
 desc:"What is the key difference between :is() and :where()?",
 code:":is(h1, h2) a { }    /* high specificity */\n:where(h1, h2) a { } /* zero specificity */",
 options:[":where() has zero specificity — easier to override; :is() takes highest specificity of its args","They are identical","only :where() works with pseudo-elements",":is() only works in Chrome"],ansIdx:0,
 hint:":where() is like :is() but contributes 0 to specificity. MDN: :where().",
 fn:"cssWhere",tests:[{a:[],e:true}]},

{id:384,title:"CSS hsl()",diff:"Easy",cat:"CSS Advanced",
 desc:"In hsl(120, 100%, 50%), what do the three values represent?",
 code:`color: hsl(120, 100%, 50%);`,
 options:["Hue (0-360deg), Saturation (%), Lightness (%)","Height, Size, Line","Hex, Shade, Light","Horizontal, Shift, Level"],ansIdx:0,
 hint:"HSL: Hue is the color wheel angle, Saturation is intensity, Lightness is brightness. MDN: hsl().",
 fn:"cssHSL",tests:[{a:[],e:true}]},

{id:385,title:"position sticky vs fixed",diff:"Medium",cat:"CSS Advanced",
 desc:"What is the difference between position: sticky and position: fixed?",
 code:`.header { position: sticky; top: 0; }`,
 options:["sticky stays relative until scroll threshold, then sticks within its container; fixed is always viewport-relative","They are identical","sticky doesn't need top","fixed scrolls with content"],ansIdx:0,
 hint:"sticky is in the flow until it hits the threshold. Fixed is always viewport-relative. MDN: position.",
 fn:"cssSticky",tests:[{a:[],e:true}]},

/* ══ HTTP & APIs (386–400) — MDN HTTP Docs + REST conventions ══ */
{id:386,title:"HTTP GET",diff:"Easy",cat:"HTTP & APIs",
 desc:"Which HTTP method is idempotent AND safe (read-only)?",
 code:`GET /users/1    -> safe + idempotent\nPOST /users     -> neither\nPUT /users/1    -> idempotent, not safe`,
 options:["GET","POST","PUT","PATCH"],ansIdx:0,
 hint:"GET is safe (no side effects) and idempotent (same result every time). MDN: HTTP request methods.",
 fn:"httpGet",tests:[{a:[],e:true}]},

{id:387,title:"401 vs 403",diff:"Medium",cat:"HTTP & APIs",
 desc:"What is the difference between HTTP 401 and 403?",
 code:`401 Unauthorized\n403 Forbidden`,
 options:["401 = not authenticated; 403 = authenticated but not authorized","401 = server error; 403 = bad request","They mean the same","401 = rate limited; 403 = blocked"],ansIdx:0,
 hint:"401 means no valid credentials. 403 means credentials are valid but insufficient. MDN: HTTP status codes.",
 fn:"http401vs403",tests:[{a:[],e:true}]},

{id:388,title:"REST Stateless",diff:"Easy",cat:"HTTP & APIs",
 desc:"What does stateless mean in a REST API?",
 code:`// Each request must contain all info needed\n// Server stores no client context between requests`,
 options:["Each request is self-contained — server doesn't store session state","No state means no database","Server memory never used","REST doesn't support cookies"],ansIdx:0,
 hint:"REST statelessness means servers don't store client state between requests. MDN: HTTP overview.",
 fn:"restStateless",tests:[{a:[],e:true}]},

{id:389,title:"Cache-Control max-age",diff:"Medium",cat:"HTTP & APIs",
 desc:"What does Cache-Control: max-age=3600 instruct?",
 code:`Cache-Control: max-age=3600`,
 options:["Browser can cache the response for 3600 seconds (1 hour)","Server caches for 1 hour","Response must not be cached","Cache is 3600 MB"],ansIdx:0,
 hint:"max-age specifies how long (seconds) the response can be cached. MDN: Cache-Control.",
 fn:"httpCache",tests:[{a:[],e:true}]},

{id:390,title:"HTTP/2 Multiplexing",diff:"Medium",cat:"HTTP & APIs",
 desc:"What is the main performance improvement of HTTP/2 over HTTP/1.1?",
 code:`HTTP/1.1: one request per connection (queue)\nHTTP/2:   multiplexing -- many requests over one connection`,
 options:["Multiplexing — multiple requests in parallel over one TCP connection","Faster DNS","Smaller headers","HTTPS only"],ansIdx:0,
 hint:"HTTP/2 multiplexing eliminates head-of-line blocking. MDN: HTTP/2.",
 fn:"http2",tests:[{a:[],e:true}]},

{id:391,title:"REST Resource Naming",diff:"Easy",cat:"HTTP & APIs",
 desc:"Which URL follows REST naming conventions for a collection of users?",
 code:`A: /getUsers\nB: /users\nC: /UsersList`,
 options:["/users — plural nouns, lowercase","/getUsers","/UsersList","/fetch-users"],ansIdx:0,
 hint:"REST uses nouns (not verbs) for resources, plural for collections, lowercase. MDN: REST overview.",
 fn:"restNaming",tests:[{a:[],e:true}]},

{id:392,title:"PATCH vs PUT",diff:"Medium",cat:"HTTP & APIs",
 desc:"What is the difference between PATCH and PUT?",
 code:`PUT /users/1   -> replace entire resource\nPATCH /users/1 -> partial update only`,
 options:["PUT replaces the entire resource; PATCH applies partial updates","They are identical","PATCH is for DELETE","PUT only works with JSON"],ansIdx:0,
 hint:"PUT sends a complete replacement. PATCH sends only the fields to update. MDN: HTTP request methods.",
 fn:"patchVsPut",tests:[{a:[],e:true}]},

{id:393,title:"Content-Type JSON",diff:"Easy",cat:"HTTP & APIs",
 desc:"What Content-Type header should a JSON API response include?",
 code:`Content-Type: ___`,
 options:["application/json","text/json","json/application","application/text"],ansIdx:0,
 hint:"application/json is the MIME type for JSON data. MDN: Content-Type.",
 fn:"contentType",tests:[{a:[],e:"application/json"}]},

{id:394,title:"ETag Header",diff:"Hard",cat:"HTTP & APIs",
 desc:"What is the purpose of the ETag HTTP response header?",
 code:`ETag: "abc123"\n// Client: If-None-Match: "abc123"\n// Server: 304 Not Modified if unchanged`,
 options:["A version identifier — enables conditional requests to avoid re-downloading unchanged data","Encrypts the response","Tags for logging","Sets timeout"],ansIdx:0,
 hint:"ETags enable conditional GET — clients skip downloading if the resource hasn't changed. MDN: ETag.",
 fn:"etag",tests:[{a:[],e:true}]},

{id:395,title:"API Versioning",diff:"Medium",cat:"HTTP & APIs",
 desc:"Which is the most common REST API versioning strategy?",
 code:`/api/v1/users\n/api/v2/users`,
 options:["URL path versioning — /api/v1/","Header versioning only","Query param — ?v=1","Date-based"],ansIdx:0,
 hint:"URL path versioning is the most visible and cache-friendly. REST conventions.",
 fn:"apiVersioning",tests:[{a:[],e:true}]},

{id:396,title:"WebSocket vs HTTP",diff:"Medium",cat:"HTTP & APIs",
 desc:"Which characteristic makes WebSockets better than HTTP for live chat?",
 code:`HTTP: client must poll server\nWS:   server can push instantly`,
 options:["Persistent bidirectional connection — server can push without client polling","WebSockets are encrypted","Faster for large files","WebSockets support cookies"],ansIdx:0,
 hint:"WebSockets maintain an open connection — no polling needed. MDN: WebSockets API.",
 fn:"wsVsHttp",tests:[{a:[],e:true}]},

{id:397,title:"OAuth2 Auth Code Flow",diff:"Hard",cat:"HTTP & APIs",
 desc:"What is the purpose of the Authorization Code flow in OAuth2?",
 code:`1. User redirected to provider\n2. Provider returns code\n3. Server exchanges code for access token`,
 options:["Allows apps to get an access token without exposing credentials — server-to-server exchange","Stores passwords in the browser","Replaces HTTPS","Handles database auth"],ansIdx:0,
 hint:"Auth code flow keeps tokens on the server, never exposed to the browser. MDN: HTTP authorization.",
 fn:"oauth2",tests:[{a:[],e:true}]},

{id:398,title:"GraphQL over-fetching",diff:"Medium",cat:"HTTP & APIs",
 desc:"What is the key advantage of a GraphQL query?",
 code:`# REST: GET /users/1 -> returns ALL user fields\n# GraphQL:\nquery { user(id:1) { name email } }`,
 options:["Client specifies exactly what fields it needs — avoids over-fetching","GraphQL is always faster","GraphQL requires no server","GraphQL is a database"],ansIdx:0,
 hint:"GraphQL's single endpoint with typed queries eliminates over-fetching.",
 fn:"graphqlQuery",tests:[{a:[],e:true}]},

{id:399,title:"Rate Limit Headers",diff:"Medium",cat:"HTTP & APIs",
 desc:"What information do X-RateLimit-* headers convey?",
 code:`X-RateLimit-Limit: 100\nX-RateLimit-Remaining: 45\nX-RateLimit-Reset: 1716300000`,
 options:["How many requests are allowed, how many remain, and when the limit resets","Server memory usage","Request body size limits","API version"],ansIdx:0,
 hint:"Rate limit headers help clients self-throttle. 429 Too Many Requests when exceeded. MDN: HTTP headers.",
 fn:"rateLimitHeaders",tests:[{a:[],e:true}]},

{id:400,title:"HATEOAS",diff:"Hard",cat:"HTTP & APIs",
 desc:"What does HATEOAS mean in REST APIs?",
 code:`{ "user": { "id": 1 }, "_links": { "self": "/users/1", "orders": "/users/1/orders" } }`,
 options:["Hypermedia As The Engine Of Application State — responses include links to related actions","A security protocol","An HTTP method","A caching strategy"],ansIdx:0,
 hint:"HATEOAS embeds navigation links in responses — clients discover actions dynamically. REST constraint.",
 fn:"hateoas",tests:[{a:[],e:true}]},

/* ══ TESTING (401–420) — Jest Docs + freeCodeCamp Testing Curriculum ══ */
{id:401,title:"Unit Test Purpose",diff:"Easy",cat:"Testing",
 desc:"What does a unit test verify?",
 code:`test('adds two numbers', () => { expect(add(2, 3)).toBe(5); });`,
 options:["One function or module in isolation — dependencies are mocked","The entire application end-to-end","Integration between services","UI rendering"],ansIdx:0,
 hint:"Unit tests isolate and test a single unit of code. Jest docs: Getting Started.",
 fn:"unitTest",tests:[{a:[],e:true}]},

{id:402,title:"toBe vs toEqual",diff:"Easy",cat:"Testing",
 desc:"When should you use toEqual instead of toBe?",
 code:`expect({a:1}).toBe({a:1});    // fails -- different references\nexpect({a:1}).toEqual({a:1}); // passes -- deep equality`,
 options:["toEqual for objects/arrays (deep equality); toBe for primitives (reference equality)","They are identical","toBe is for async tests","toEqual only works with arrays"],ansIdx:0,
 hint:"toBe uses Object.is (strict). toEqual recursively checks values. Jest docs: expect.",
 fn:"toBeVsEqual",tests:[{a:[],e:true}]},

{id:403,title:"jest.fn()",diff:"Medium",cat:"Testing",
 desc:"What does jest.fn() create?",
 code:`const mockFn = jest.fn();\nmockFn(1, 2);\nexpect(mockFn).toHaveBeenCalledWith(1, 2);`,
 options:["A mock function that records calls and can have custom return values","A real implementation","A snapshot","A spy that cannot return values"],ansIdx:0,
 hint:"jest.fn() creates a mock — tracks calls, arguments, and can return values. Jest docs: Mock Functions.",
 fn:"jestMock",tests:[{a:[],e:true}]},

{id:404,title:"Code Coverage",diff:"Medium",cat:"Testing",
 desc:"What does 100% code coverage guarantee?",
 code:`jest --coverage`,
 options:["Every line was executed during tests — NOT that the code is bug-free","The app has no bugs","All edge cases tested","The app is production-ready"],ansIdx:0,
 hint:"Coverage measures execution, not correctness. You can have 100% coverage with wrong assertions. freeCodeCamp.",
 fn:"testCoverage",tests:[{a:[],e:true}]},

{id:405,title:"Integration Test",diff:"Easy",cat:"Testing",
 desc:"What does an integration test verify?",
 code:`test('POST /users creates a user', async () => {\n  const res = await request(app).post('/users').send({name:'Alice'});\n  expect(res.status).toBe(201);\n});`,
 options:["Multiple units working together (route + controller + database)","A single isolated function","UI rendering","External API calls only"],ansIdx:0,
 hint:"Integration tests verify that components work together correctly. freeCodeCamp Testing Curriculum.",
 fn:"integrationTest",tests:[{a:[],e:true}]},

{id:406,title:"beforeEach",diff:"Easy",cat:"Testing",
 desc:"What does beforeEach do in Jest?",
 code:`beforeEach(() => { db.clear(); });`,
 options:["Runs setup code before EACH test in the describe block","Runs once before all tests","Runs after each test","Mocks database calls"],ansIdx:0,
 hint:"beforeEach runs setup before every test — ensures a clean state. Jest docs: Setup and Teardown.",
 fn:"beforeEach",tests:[{a:[],e:true}]},

{id:407,title:"Snapshot Testing",diff:"Medium",cat:"Testing",
 desc:"What does snapshot testing in Jest do?",
 code:`expect(component).toMatchSnapshot();`,
 options:["Saves a snapshot of output and fails if it changes unexpectedly — for detecting regressions","Takes a screenshot","Tests only CSS","Compares two components"],ansIdx:0,
 hint:"Snapshot tests catch unexpected changes in rendered output. Jest docs.",
 fn:"snapshotTest",tests:[{a:[],e:true}]},

{id:408,title:"Red-Green-Refactor",diff:"Easy",cat:"Testing",
 desc:"What is the Red-Green-Refactor cycle in TDD?",
 code:`Red:     Write a failing test\nGreen:   Write minimal code to pass\nRefactor: Clean up`,
 options:["Write failing test first, then make it pass, then improve the code","Write code first, then tests","Only refactor existing code","Test in production"],ansIdx:0,
 hint:"TDD's cycle ensures tests drive design. Red=fail, Green=pass, Refactor=improve. freeCodeCamp.",
 fn:"tddCycle",tests:[{a:[],e:true}]},

{id:409,title:"Jest async test",diff:"Medium",cat:"Testing",
 desc:"What is the correct way to test an async function in Jest?",
 code:`test('fetches data', async () => { const data = ___ fetchData(); expect(data).toBeDefined(); });`,
 options:["await","return","resolve","then"],ansIdx:0,
 hint:"Use async/await in Jest tests just like regular JS. Jest docs: Testing Async Code.",
 fn:"asyncTest",tests:[{a:[],e:true}]},

{id:410,title:"jest.mock()",diff:"Medium",cat:"Testing",
 desc:"What does jest.mock('./database') do?",
 code:`jest.mock('./database');`,
 options:["Replaces the module with an auto-mocked version — isolates tests from real database","Runs the real database","Creates a copy","Disables the module"],ansIdx:0,
 hint:"jest.mock() replaces a module's exports with mock functions. Jest docs: Mock Modules.",
 fn:"jestMockModule",tests:[{a:[],e:true}]},

{id:411,title:"E2E Testing",diff:"Easy",cat:"Testing",
 desc:"What does an E2E (end-to-end) test simulate?",
 code:`await page.click('button#submit');\nawait expect(page.locator('.success')).toBeVisible();`,
 options:["A real user interacting with the full application through the browser","A unit test","A mock API call","A database migration"],ansIdx:0,
 hint:"E2E tests simulate real user flows through a browser. Tools: Playwright, Cypress. freeCodeCamp.",
 fn:"e2eTest",tests:[{a:[],e:true}]},

{id:412,title:"Mock vs Stub",diff:"Medium",cat:"Testing",
 desc:"What is the difference between a mock and a stub?",
 code:`// Stub: returns preset data\n// Mock: also verifies it was called correctly`,
 options:["Stubs provide canned answers; mocks also verify interactions (calls, arguments)","They are identical","Mocks are faster","Stubs only work with databases"],ansIdx:0,
 hint:"Stubs return fake data. Mocks additionally assert how they were called. freeCodeCamp.",
 fn:"mockVsStub",tests:[{a:[],e:true}]},

{id:413,title:"toThrow",diff:"Easy",cat:"Testing",
 desc:"How do you test that a function throws an error in Jest?",
 code:`expect(() => { divide(1, 0); }).___('Cannot divide by zero');`,
 options:["toThrow","toError","toFail","toReject"],ansIdx:0,
 hint:"toThrow checks that the function throws. Wrap in an arrow function so Jest can catch it. Jest docs.",
 fn:"toThrow",tests:[{a:[],e:true}]},

{id:414,title:"Slowest CI Tests",diff:"Easy",cat:"Testing",
 desc:"Which test type is most likely to slow down a CI pipeline?",
 code:`// Fast:   Unit tests (ms)\n// Medium: Integration tests (s)\n// Slow:   E2E tests (minutes)`,
 options:["End-to-end (E2E) tests — require browser, full app, and external services","Unit tests","Snapshot tests","Linting"],ansIdx:0,
 hint:"E2E tests are the slowest — run unit tests first, integration second, E2E last. freeCodeCamp.",
 fn:"ciTesting",tests:[{a:[],e:true}]},

{id:415,title:"Test Isolation",diff:"Medium",cat:"Testing",
 desc:"Why is test isolation important?",
 code:`// Bad: tests share state -- order matters\n// Good: each test sets up its own state`,
 options:["Tests should not affect each other — shared state causes flaky tests","Isolation makes tests slower","Tests should share a database","Isolation prevents parallel testing"],ansIdx:0,
 hint:"Non-isolated tests are flaky — they pass or fail depending on test order. Jest docs.",
 fn:"testIsolation",tests:[{a:[],e:true}]},

{id:416,title:"jest.spyOn",diff:"Medium",cat:"Testing",
 desc:"What does jest.spyOn(obj, 'method') do?",
 code:`const spy = jest.spyOn(console, 'log');\nconsole.log('hello');\nexpect(spy).toHaveBeenCalledWith('hello');`,
 options:["Watches an existing method and tracks calls without fully replacing it","Replaces the method with a mock","Only works with console","Prevents the method from running"],ansIdx:0,
 hint:"spyOn wraps an existing method to track calls. Jest docs.",
 fn:"spyOn",tests:[{a:[],e:true}]},

{id:417,title:"Regression Testing",diff:"Easy",cat:"Testing",
 desc:"What is regression testing?",
 code:`// After fixing a bug:\n// 1. Write a test that would have caught the bug\n// 2. Ensure nothing previously working now breaks`,
 options:["Re-running tests after changes to ensure previously working features still work","Testing a new feature","Performance testing","Testing on mobile"],ansIdx:0,
 hint:"Regression tests guard against bugs re-appearing. Add a test for every bug you fix. freeCodeCamp.",
 fn:"regressionTest",tests:[{a:[],e:true}]},

{id:418,title:"Arrange-Act-Assert",diff:"Easy",cat:"Testing",
 desc:"What is the AAA pattern in unit testing?",
 code:`// Arrange: set up test data\n// Act: call the function\n// Assert: verify result`,
 options:["Arrange setup, Act on the system, Assert the outcome — a clear test structure","Async, Await, Assert","Add, Apply, Assert","Abstract, Apply, Analyze"],ansIdx:0,
 hint:"AAA (Arrange-Act-Assert) is the most common unit test structure. Jest docs.",
 fn:"aaaPattern",tests:[{a:[],e:true}]},

{id:419,title:"TDD benefit",diff:"Easy",cat:"Testing",
 desc:"What is the main benefit of writing tests BEFORE writing code (TDD)?",
 code:`// Test first -> forces you to think about API design\n// before implementation details`,
 options:["Forces you to design the API/interface before implementation — leads to cleaner code","Tests run faster","No need for documentation","Prevents all bugs"],ansIdx:0,
 hint:"TDD's test-first approach makes you design from the caller's perspective. freeCodeCamp.",
 fn:"tddBenefit",tests:[{a:[],e:true}]},

{id:420,title:"Jest timer mocks",diff:"Hard",cat:"Testing",
 desc:"How do you test code that uses setTimeout without actually waiting?",
 code:`jest.useFakeTimers();\ncallFunctionWithTimeout();\njest.runAllTimers();\nexpect(callback).toHaveBeenCalled();`,
 options:["jest.useFakeTimers() replaces timer functions — jest.runAllTimers() fires them immediately","You must use real timers","Use await new Promise(resolve => setTimeout(resolve, ms))","Use jest.fn() on setTimeout"],ansIdx:0,
 hint:"Fake timers let you control time in tests. Jest docs: Timer Mocks.",
 fn:"timerMocks",tests:[{a:[],e:true}]},

/* ══ EXTRA ALGORITHMS (421–500) — LeetCode + freeCodeCamp ══ */
{id:421,title:"Valid Anagram",diff:"Easy",cat:"Algorithms",
 desc:"Write isAnagram(s, t) returning true if t is an anagram of s. (LeetCode #242)",
 hint:"Sort both strings and compare, or use a frequency map.",
 start:"function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  return s.split('').sort().join('') === t.split('').sort().join('');\n}",
 fn:"isAnagram",tests:[{a:["anagram","nagaram"],e:true},{a:["rat","car"],e:false}]},

{id:422,title:"Longest Substring No Repeat",diff:"Medium",cat:"Algorithms",
 desc:"Write lengthOfLongestSubstring(s). (LeetCode #3 — Sliding window)",
 hint:"Use a Set and two pointers. When a repeat is found, shrink the window from the left.",
 start:"function lengthOfLongestSubstring(s) {\n  const set = new Set();\n  let left = 0, max = 0;\n  for (let right = 0; right < s.length; right++) {\n    while (set.has(s[right])) { set.delete(s[left]); left++; }\n    set.add(s[right]);\n    max = Math.max(max, right - left + 1);\n  }\n  return max;\n}",
 fn:"lengthOfLongestSubstring",tests:[{a:["abcabcbb"],e:3},{a:["bbbbb"],e:1},{a:["pwwkew"],e:3}]},

{id:423,title:"House Robber",diff:"Medium",cat:"Algorithms",
 desc:"Write rob(nums): max money from houses without robbing adjacent ones. (LeetCode #198 — DP)",
 hint:"DP: at each house, max = Math.max(prev, prev2 + current). Track two previous values.",
 start:"function rob(nums) {\n  let prev2 = 0, prev1 = 0;\n  for (const n of nums) {\n    const curr = Math.max(prev1, prev2 + n);\n    prev2 = prev1;\n    prev1 = curr;\n  }\n  return prev1;\n}",
 fn:"rob",tests:[{a:[[1,2,3,1]],e:4},{a:[[2,7,9,3,1]],e:12}]},

{id:424,title:"Coin Change",diff:"Medium",cat:"Algorithms",
 desc:"Write coinChange(coins, amount): fewest coins to make amount, or -1. (LeetCode #322 — DP)",
 hint:"Bottom-up DP: dp[i] = min coins for amount i. dp[0]=0. For each amount try each coin.",
 start:"function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let i = 1; i <= amount; i++) {\n    for (const c of coins) {\n      if (c <= i) dp[i] = Math.min(dp[i], dp[i - c] + 1);\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}",
 fn:"coinChange",tests:[{a:[[1,5,11],11],e:1},{a:[[1,2,5],11],e:3},{a:[[2],3],e:-1}]},

{id:425,title:"Reverse Array (Linked List sim)",diff:"Easy",cat:"Algorithms",
 desc:"Write reverseList(arr) reversing an array (simulates reversing a linked list).",
 hint:"Use .reverse() or two-pointer swap.",
 start:"function reverseList(arr) {\n  return [...arr].reverse();\n}",
 fn:"reverseList",tests:[{a:[[1,2,3,4,5]],e:[5,4,3,2,1]},{a:[[1,2]],e:[2,1]},{a:[[1]],e:[1]}]},

{id:426,title:"Number of Islands",diff:"Medium",cat:"Algorithms",
 desc:"Write numIslands(grid) counting islands of '1's surrounded by '0's. (LeetCode #200 — DFS)",
 hint:"For each '1', run DFS marking visited cells as '0'. Count DFS invocations.",
 start:"function numIslands(grid) {\n  let count = 0;\n  function dfs(i, j) {\n    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return;\n    grid[i][j] = '0';\n    dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1);\n  }\n  for (let i = 0; i < grid.length; i++)\n    for (let j = 0; j < grid[0].length; j++)\n      if (grid[i][j] === '1') { dfs(i, j); count++; }\n  return count;\n}",
 fn:"numIslands",tests:[{a:[[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]],e:1},{a:[[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]],e:3}]},

{id:427,title:"Maximum Depth Binary Tree",diff:"Easy",cat:"Algorithms",
 desc:"Write maxDepth(root) for a binary tree. (LeetCode #104)",
 hint:"Recursively return 1 + max(left depth, right depth). Base case: null returns 0.",
 start:"function maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}",
 fn:"maxDepth",tests:[{a:[{val:3,left:{val:9,left:null,right:null},right:{val:20,left:{val:15,left:null,right:null},right:{val:7,left:null,right:null}}}],e:3},{a:[null],e:0}]},

{id:428,title:"Unique Paths",diff:"Medium",cat:"Algorithms",
 desc:"Write uniquePaths(m, n): count paths in m x n grid moving only right or down. (LeetCode #62 — DP)",
 hint:"dp[i][j] = dp[i-1][j] + dp[i][j-1]. First row and column are all 1s.",
 start:"function uniquePaths(m, n) {\n  const dp = Array.from({length:m}, () => new Array(n).fill(1));\n  for (let i = 1; i < m; i++)\n    for (let j = 1; j < n; j++)\n      dp[i][j] = dp[i-1][j] + dp[i][j-1];\n  return dp[m-1][n-1];\n}",
 fn:"uniquePaths",tests:[{a:[3,7],e:28},{a:[3,2],e:3},{a:[7,3],e:28}]},

{id:429,title:"Jump Game",diff:"Medium",cat:"Algorithms",
 desc:"Write canJump(nums): can you reach the last index? (LeetCode #55 — Greedy)",
 hint:"Track the maximum index reachable. If current index > maxReach, return false.",
 start:"function canJump(nums) {\n  let maxReach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > maxReach) return false;\n    maxReach = Math.max(maxReach, i + nums[i]);\n  }\n  return true;\n}",
 fn:"canJump",tests:[{a:[[2,3,1,1,4]],e:true},{a:[[3,2,1,0,4]],e:false}]},

{id:430,title:"Top K Frequent Elements",diff:"Medium",cat:"Algorithms",
 desc:"Write topKFrequent(nums, k) returning the k most frequent elements. (LeetCode #347)",
 hint:"Build frequency map. Sort by frequency descending. Return first k keys.",
 start:"function topKFrequent(nums, k) {\n  const freq = {};\n  for (const n of nums) freq[n] = (freq[n] || 0) + 1;\n  return Object.keys(freq)\n    .sort((a, b) => freq[b] - freq[a])\n    .slice(0, k)\n    .map(Number);\n}",
 fn:"topKFrequent",tests:[{a:[[1,1,1,2,2,3],2],e:[1,2]},{a:[[1],1],e:[1]}]},

{id:431,title:"Decode String",diff:"Medium",cat:"Algorithms",
 desc:"Write decodeString(s): decode '3[a2[c]]' to 'accaccacc'. (LeetCode #394 — Stack)",
 hint:"Use two stacks: one for counts, one for strings. On '[' push; on ']' pop and repeat.",
 start:"function decodeString(s) {\n  const countStack = [], strStack = [];\n  let curr = '', k = 0;\n  for (const ch of s) {\n    if (ch >= '0' && ch <= '9') { k = k * 10 + parseInt(ch); }\n    else if (ch === '[') { countStack.push(k); strStack.push(curr); k = 0; curr = ''; }\n    else if (ch === ']') { const times = countStack.pop(); const prev = strStack.pop(); curr = prev + curr.repeat(times); }\n    else curr += ch;\n  }\n  return curr;\n}",
 fn:"decodeString",tests:[{a:["3[a]2[bc]"],e:"aaabcbc"},{a:["3[a2[c]]"],e:"accaccacc"}]},

{id:432,title:"Find Peak Element",diff:"Medium",cat:"Algorithms",
 desc:"Write findPeakElement(nums): index of a peak (greater than neighbors). (LeetCode #162 — Binary search)",
 hint:"Binary search: if mid > mid+1, peak is on the left. Otherwise on the right.",
 start:"function findPeakElement(nums) {\n  let l = 0, r = nums.length - 1;\n  while (l < r) {\n    const mid = Math.floor((l + r) / 2);\n    if (nums[mid] > nums[mid + 1]) r = mid;\n    else l = mid + 1;\n  }\n  return l;\n}",
 fn:"findPeakElement",tests:[{a:[[1,2,3,1]],e:2},{a:[[1,2,1,3,5,6,4]],e:5}]},

{id:433,title:"Subsets",diff:"Medium",cat:"Algorithms",
 desc:"Write subsets(nums) returning all possible subsets (power set). (LeetCode #78)",
 hint:"Start with [[]], then for each number, add it to all existing subsets.",
 start:"function subsets(nums) {\n  const res = [[]];\n  for (const n of nums) {\n    const len = res.length;\n    for (let i = 0; i < len; i++) res.push([...res[i], n]);\n  }\n  return res;\n}",
 fn:"subsets",tests:[{a:[[1,2,3]],e:[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]},{a:[[0]],e:[[],[0]]}]},

{id:434,title:"Letter Combinations",diff:"Medium",cat:"Algorithms",
 desc:"Write letterCombinations(digits): all letter combos for phone digits. (LeetCode #17)",
 hint:"Map each digit to its letters. BFS or backtracking to build all combinations.",
 start:"function letterCombinations(digits) {\n  if (!digits.length) return [];\n  const map = {2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'};\n  let res = [''];\n  for (const d of digits) {\n    const letters = map[d];\n    res = res.flatMap(combo => letters.split('').map(l => combo + l));\n  }\n  return res;\n}",
 fn:"letterCombinations",tests:[{a:["23"],e:["ad","ae","af","bd","be","bf","cd","ce","cf"]},{a:[""],e:[]}]},

{id:435,title:"Gas Station",diff:"Medium",cat:"Algorithms",
 desc:"Write canCompleteCircuit(gas, cost): starting index to complete the circuit, or -1. (LeetCode #134)",
 hint:"If total gas < total cost, return -1. Otherwise track tank and reset start when tank < 0.",
 start:"function canCompleteCircuit(gas, cost) {\n  let total = 0, tank = 0, start = 0;\n  for (let i = 0; i < gas.length; i++) {\n    const diff = gas[i] - cost[i];\n    total += diff; tank += diff;\n    if (tank < 0) { start = i + 1; tank = 0; }\n  }\n  return total >= 0 ? start : -1;\n}",
 fn:"canCompleteCircuit",tests:[{a:[[1,2,3,4,5],[3,4,5,1,2]],e:3},{a:[[2,3,4],[3,4,3]],e:-1}]},

{id:436,title:"Trapping Rain Water",diff:"Hard",cat:"Algorithms",
 desc:"Write trap(height): amount of water that can be trapped. (LeetCode #42 — Two pointers)",
 hint:"Two pointers. Track leftMax and rightMax. Water = min(leftMax,rightMax) - height[i].",
 start:"function trap(height) {\n  let l = 0, r = height.length - 1, leftMax = 0, rightMax = 0, water = 0;\n  while (l < r) {\n    if (height[l] < height[r]) {\n      height[l] >= leftMax ? leftMax = height[l] : water += leftMax - height[l];\n      l++;\n    } else {\n      height[r] >= rightMax ? rightMax = height[r] : water += rightMax - height[r];\n      r--;\n    }\n  }\n  return water;\n}",
 fn:"trap",tests:[{a:[[0,1,0,2,1,0,1,3,2,1,2,1]],e:6},{a:[[4,2,0,3,2,5]],e:9}]},

{id:437,title:"Spiral Matrix",diff:"Medium",cat:"Algorithms",
 desc:"Write spiralOrder(matrix) returning all elements in spiral order. (LeetCode #54)",
 hint:"Track top/bottom/left/right bounds. Move right, down, left, up, shrinking bounds each pass.",
 start:"function spiralOrder(matrix) {\n  const res = [];\n  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;\n  while (top <= bottom && left <= right) {\n    for (let i = left; i <= right; i++) res.push(matrix[top][i]); top++;\n    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]); right--;\n    if (top <= bottom) { for (let i = right; i >= left; i--) res.push(matrix[bottom][i]); bottom--; }\n    if (left <= right) { for (let i = bottom; i >= top; i--) res.push(matrix[i][left]); left++; }\n  }\n  return res;\n}",
 fn:"spiralOrder",tests:[{a:[[[1,2,3],[4,5,6],[7,8,9]]],e:[1,2,3,6,9,8,7,4,5]},{a:[[[1,2,3,4],[5,6,7,8],[9,10,11,12]]],e:[1,2,3,4,8,12,11,10,9,5,6,7]}]},

{id:438,title:"Merge Intervals",diff:"Medium",cat:"Algorithms",
 desc:"Write merge(intervals) merging all overlapping intervals. (LeetCode #56)",
 hint:"Sort by start. If interval overlaps the last in result, extend the end. Otherwise push.",
 start:"function merge(intervals) {\n  intervals.sort((a, b) => a[0] - b[0]);\n  const res = [intervals[0]];\n  for (let i = 1; i < intervals.length; i++) {\n    const last = res[res.length - 1];\n    if (intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1]);\n    else res.push(intervals[i]);\n  }\n  return res;\n}",
 fn:"merge",tests:[{a:[[[1,3],[2,6],[8,10],[15,18]]],e:[[1,6],[8,10],[15,18]]},{a:[[[1,4],[4,5]]],e:[[1,5]]}]},

{id:439,title:"Kth Largest Element",diff:"Medium",cat:"Algorithms",
 desc:"Write findKthLargest(nums, k). (LeetCode #215)",
 hint:"Sort descending and return index k-1.",
 start:"function findKthLargest(nums, k) {\n  return nums.sort((a, b) => b - a)[k - 1];\n}",
 fn:"findKthLargest",tests:[{a:[[3,2,1,5,6,4],2],e:5},{a:[[3,2,3,1,2,4,5,5,6],4],e:4}]},

{id:440,title:"Longest Palindromic Substring",diff:"Medium",cat:"Algorithms",
 desc:"Write longestPalindrome(s). (LeetCode #5 — Expand around center)",
 hint:"For each index, expand outward checking both odd and even length palindromes.",
 start:"function longestPalindrome(s) {\n  let start = 0, maxLen = 1;\n  function expand(l, r) {\n    while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; }\n    if (r - l - 1 > maxLen) { maxLen = r - l - 1; start = l + 1; }\n  }\n  for (let i = 0; i < s.length; i++) { expand(i, i); expand(i, i + 1); }\n  return s.slice(start, start + maxLen);\n}",
 fn:"longestPalindrome",tests:[{a:["babad"],e:"bab"},{a:["cbbd"],e:"bb"}]},

{id:441,title:"Rotate Image",diff:"Medium",cat:"Algorithms",
 desc:"Write rotate(matrix) rotating an n x n matrix 90 degrees clockwise in-place. (LeetCode #48)",
 hint:"Transpose (swap i,j), then reverse each row.",
 start:"function rotate(matrix) {\n  const n = matrix.length;\n  for (let i = 0; i < n; i++)\n    for (let j = i + 1; j < n; j++)\n      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];\n  for (let i = 0; i < n; i++) matrix[i].reverse();\n  return matrix;\n}",
 fn:"rotate",tests:[{a:[[[1,2,3],[4,5,6],[7,8,9]]],e:[[7,4,1],[8,5,2],[9,6,3]]}]},

{id:442,title:"Word Break",diff:"Medium",cat:"Algorithms",
 desc:"Write wordBreak(s, wordDict): can s be segmented using words from dictionary? (LeetCode #139 — DP)",
 hint:"dp[i] = true if s[0..i] can be formed. For each i, check all j where dp[j] && dict has s[j..i].",
 start:"function wordBreak(s, wordDict) {\n  const set = new Set(wordDict);\n  const dp = new Array(s.length + 1).fill(false);\n  dp[0] = true;\n  for (let i = 1; i <= s.length; i++)\n    for (let j = 0; j < i; j++)\n      if (dp[j] && set.has(s.slice(j, i))) { dp[i] = true; break; }\n  return dp[s.length];\n}",
 fn:"wordBreak",tests:[{a:["leetcode",["leet","code"]],e:true},{a:["applepenapple",["apple","pen"]],e:true},{a:["catsandog",["cats","dog","sand","and","cat"]],e:false}]},

{id:443,title:"Longest Common Subsequence",diff:"Medium",cat:"Algorithms",
 desc:"Write lcs(s1, s2) returning the LCS length. (LeetCode #1143 — DP)",
 hint:"dp[i][j] = LCS of s1[0..i-1] and s2[0..j-1]. If chars match, +1. Else max(up,left).",
 start:"function lcs(s1, s2) {\n  const m = s1.length, n = s2.length;\n  const dp = Array.from({length:m+1}, () => new Array(n+1).fill(0));\n  for (let i = 1; i <= m; i++)\n    for (let j = 1; j <= n; j++)\n      dp[i][j] = s1[i-1] === s2[j-1] ? dp[i-1][j-1] + 1 : Math.max(dp[i-1][j], dp[i][j-1]);\n  return dp[m][n];\n}",
 fn:"lcs",tests:[{a:["abcde","ace"],e:3},{a:["abc","abc"],e:3},{a:["abc","def"],e:0}]},

{id:444,title:"Course Schedule",diff:"Medium",cat:"Algorithms",
 desc:"Write canFinish(n, prerequisites): can all courses be finished? (LeetCode #207 — Cycle detection)",
 hint:"Build adjacency list. DFS with 3 states: 0=unvisited, 1=visiting, 2=done. Cycle if we revisit state 1.",
 start:"function canFinish(n, prerequisites) {\n  const graph = Array.from({length:n}, () => []);\n  for (const [a, b] of prerequisites) graph[b].push(a);\n  const state = new Array(n).fill(0);\n  function dfs(node) {\n    if (state[node] === 1) return false;\n    if (state[node] === 2) return true;\n    state[node] = 1;\n    for (const nei of graph[node]) if (!dfs(nei)) return false;\n    state[node] = 2;\n    return true;\n  }\n  for (let i = 0; i < n; i++) if (!dfs(i)) return false;\n  return true;\n}",
 fn:"canFinish",tests:[{a:[2,[[1,0]]],e:true},{a:[2,[[1,0],[0,1]]],e:false}]},

{id:445,title:"Combination Sum",diff:"Hard",cat:"Algorithms",
 desc:"Write combinationSum(candidates, target): all combos summing to target (reuse allowed). (LeetCode #39)",
 hint:"Backtracking: for each candidate, recurse with reduced target. Start from current index to avoid duplicates.",
 start:"function combinationSum(candidates, target) {\n  const res = [];\n  function bt(start, curr, rem) {\n    if (rem === 0) { res.push([...curr]); return; }\n    for (let i = start; i < candidates.length; i++) {\n      if (candidates[i] <= rem) { curr.push(candidates[i]); bt(i, curr, rem - candidates[i]); curr.pop(); }\n    }\n  }\n  bt(0, [], target);\n  return res;\n}",
 fn:"combinationSum",tests:[{a:[[2,3,6,7],7],e:[[2,2,3],[7]]},{a:[[2,3,5],8],e:[[2,2,2,2],[2,3,3],[3,5]]}]},

{id:446,title:"Missing Number",diff:"Easy",cat:"Algorithms",
 desc:"Write missingNumber(nums): find missing in range 0..n. (LeetCode #268)",
 hint:"Expected sum = n*(n+1)/2. Missing = expected - actual sum.",
 start:"function missingNumber(nums) {\n  const n = nums.length;\n  return n * (n + 1) / 2 - nums.reduce((a, b) => a + b, 0);\n}",
 fn:"missingNumber",tests:[{a:[[3,0,1]],e:2},{a:[[0,1]],e:2},{a:[[9,6,4,2,3,5,7,0,1]],e:8}]},

{id:447,title:"Majority Element",diff:"Easy",cat:"Algorithms",
 desc:"Write majorityElement(nums) using Boyer-Moore voting. (LeetCode #169)",
 hint:"Maintain candidate and count. If count=0 pick new candidate. Increment on match, decrement on mismatch.",
 start:"function majorityElement(nums) {\n  let candidate = null, count = 0;\n  for (const n of nums) {\n    if (count === 0) candidate = n;\n    count += n === candidate ? 1 : -1;\n  }\n  return candidate;\n}",
 fn:"majorityElement",tests:[{a:[[3,2,3]],e:3},{a:[[2,2,1,1,1,2,2]],e:2}]},

{id:448,title:"Counting Bits",diff:"Easy",cat:"Algorithms",
 desc:"Write countBits(n): array where output[i] = number of 1s in binary of i. (LeetCode #338)",
 hint:"dp[i] = dp[i>>1] + (i&1). Shifting right halves the number.",
 start:"function countBits(n) {\n  const dp = new Array(n + 1).fill(0);\n  for (let i = 1; i <= n; i++) dp[i] = dp[i >> 1] + (i & 1);\n  return dp;\n}",
 fn:"countBits",tests:[{a:[2],e:[0,1,1]},{a:[5],e:[0,1,1,2,1,2]}]},

{id:449,title:"Search in Rotated Array",diff:"Medium",cat:"Algorithms",
 desc:"Write search(nums, target) in a rotated sorted array. (LeetCode #33 — Binary search)",
 hint:"Check which half is sorted. If target falls in sorted half, search there. Otherwise search the other.",
 start:"function search(nums, target) {\n  let l = 0, r = nums.length - 1;\n  while (l <= r) {\n    const mid = Math.floor((l + r) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[l] <= nums[mid]) {\n      if (target >= nums[l] && target < nums[mid]) r = mid - 1;\n      else l = mid + 1;\n    } else {\n      if (target > nums[mid] && target <= nums[r]) l = mid + 1;\n      else r = mid - 1;\n    }\n  }\n  return -1;\n}",
 fn:"search",tests:[{a:[[4,5,6,7,0,1,2],0],e:4},{a:[[4,5,6,7,0,1,2],3],e:-1},{a:[[1],0],e:-1}]},

{id:450,title:"Partition Equal Subset Sum",diff:"Hard",cat:"Algorithms",
 desc:"Write canPartition(nums): can array be split into two equal-sum subsets? (LeetCode #416 — DP)",
 hint:"Find total sum. If odd, false. DP: can we reach sum/2 using elements?",
 start:"function canPartition(nums) {\n  const total = nums.reduce((a, b) => a + b, 0);\n  if (total % 2) return false;\n  const target = total / 2;\n  const dp = new Array(target + 1).fill(false);\n  dp[0] = true;\n  for (const n of nums)\n    for (let j = target; j >= n; j--)\n      dp[j] = dp[j] || dp[j - n];\n  return dp[target];\n}",
 fn:"canPartition",tests:[{a:[[1,5,11,5]],e:true},{a:[[1,2,3,5]],e:false}]},

{id:451,title:"Reverse Words in String",diff:"Medium",cat:"Algorithms",
 desc:"Write reverseWords(s): reverse word order, trimming extra spaces. (LeetCode #151)",
 hint:"Trim, split on whitespace, reverse word array, rejoin with single spaces.",
 start:"function reverseWords(s) {\n  return s.trim().split(/\\s+/).reverse().join(' ');\n}",
 fn:"reverseWords",tests:[{a:["the sky is blue"],e:"blue is sky the"},{a:["  hello world  "],e:"world hello"},{a:["a good   example"],e:"example good a"}]},

{id:452,title:"Implement strStr()",diff:"Easy",cat:"Algorithms",
 desc:"Write strStr(haystack, needle): index of first occurrence. (LeetCode #28)",
 hint:"Use indexOf or implement manually. Return -1 if not found. Empty needle returns 0.",
 start:"function strStr(haystack, needle) {\n  if (!needle) return 0;\n  return haystack.indexOf(needle);\n}",
 fn:"strStr",tests:[{a:["sadbutsad","sad"],e:0},{a:["leetcode","leeto"],e:-1},{a:["hello","ll"],e:2}]},

{id:453,title:"Count Primes",diff:"Medium",cat:"Algorithms",
 desc:"Write countPrimes(n): count primes less than n. (LeetCode #204 — Sieve of Eratosthenes)",
 hint:"Create boolean array, mark composites starting at p*p. Count unmarked positions.",
 start:"function countPrimes(n) {\n  if (n < 2) return 0;\n  const sieve = new Array(n).fill(true);\n  sieve[0] = sieve[1] = false;\n  for (let i = 2; i * i < n; i++)\n    if (sieve[i])\n      for (let j = i * i; j < n; j += i) sieve[j] = false;\n  return sieve.filter(Boolean).length;\n}",
 fn:"countPrimes",tests:[{a:[10],e:4},{a:[0],e:0},{a:[1],e:0}]},

{id:454,title:"Longest Consecutive Sequence",diff:"Medium",cat:"Algorithms",
 desc:"Write longestConsecutive(nums). (LeetCode #128 — O(n) with Set)",
 hint:"Use a Set. For each num, only start counting if num-1 is NOT in Set (start of sequence).",
 start:"function longestConsecutive(nums) {\n  const set = new Set(nums);\n  let longest = 0;\n  for (const n of set) {\n    if (!set.has(n - 1)) {\n      let curr = n, streak = 1;\n      while (set.has(curr + 1)) { curr++; streak++; }\n      longest = Math.max(longest, streak);\n    }\n  }\n  return longest;\n}",
 fn:"longestConsecutive",tests:[{a:[[100,4,200,1,3,2]],e:4},{a:[[0,3,7,2,5,8,4,6,0,1]],e:9}]},

{id:455,title:"Implement Trie Search",diff:"Medium",cat:"Algorithms",
 desc:"Write trieSearch(words, query) returning true if query exists in the Trie built from words.",
 hint:"Build a trie using nested objects. Each node has children and an isEnd flag (#).",
 start:"function trieSearch(words, query) {\n  const root = {};\n  for (const w of words) {\n    let node = root;\n    for (const c of w) { node[c] = node[c] || {}; node = node[c]; }\n    node['#'] = true;\n  }\n  let node = root;\n  for (const c of query) {\n    if (!node[c]) return false;\n    node = node[c];\n  }\n  return node['#'] === true;\n}",
 fn:"trieSearch",tests:[{a:[["apple","app"],"apple"],e:true},{a:[["apple","app"],"ap"],e:false},{a:[["apple"],"app"],e:false}]},

{id:456,title:"Number of Connected Components",diff:"Medium",cat:"Algorithms",
 desc:"Write countComponents(n, edges): number of connected components. (LeetCode #323)",
 hint:"Build adjacency list. DFS/BFS from each unvisited node. Count how many times you start.",
 start:"function countComponents(n, edges) {\n  const adj = Array.from({length:n}, () => []);\n  for (const [a, b] of edges) { adj[a].push(b); adj[b].push(a); }\n  const visited = new Set();\n  let count = 0;\n  function dfs(node) {\n    visited.add(node);\n    for (const nei of adj[node]) if (!visited.has(nei)) dfs(nei);\n  }\n  for (let i = 0; i < n; i++) if (!visited.has(i)) { dfs(i); count++; }\n  return count;\n}",
 fn:"countComponents",tests:[{a:[5,[[0,1],[1,2],[3,4]]],e:2},{a:[5,[[0,1],[1,2],[2,3],[3,4]]],e:1}]},

{id:457,title:"Find Median",diff:"Hard",cat:"Algorithms",
 desc:"Write findMedian(nums) finding the median of the array.",
 hint:"Sort and return middle element(s). Even length: average of two middle values.",
 start:"function findMedian(nums) {\n  const sorted = [...nums].sort((a, b) => a - b);\n  const mid = Math.floor(sorted.length / 2);\n  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];\n}",
 fn:"findMedian",tests:[{a:[[1,2]],e:1.5},{a:[[1,2,3]],e:2},{a:[[1]],e:1}]},

{id:458,title:"Sliding Window Maximum",diff:"Hard",cat:"Algorithms",
 desc:"Write maxSlidingWindow(nums, k): max in each sliding window of size k. (LeetCode #239)",
 hint:"Use a deque (index-based). Maintain decreasing order. Front is always the window max.",
 start:"function maxSlidingWindow(nums, k) {\n  const deq = [], res = [];\n  for (let i = 0; i < nums.length; i++) {\n    if (deq.length && deq[0] < i - k + 1) deq.shift();\n    while (deq.length && nums[deq[deq.length - 1]] < nums[i]) deq.pop();\n    deq.push(i);\n    if (i >= k - 1) res.push(nums[deq[0]]);\n  }\n  return res;\n}",
 fn:"maxSlidingWindow",tests:[{a:[[1,3,-1,-3,5,3,6,7],3],e:[3,3,5,5,6,7]},{a:[[1],1],e:[1]}]},

{id:459,title:"Permutations",diff:"Medium",cat:"Algorithms",
 desc:"Write permute(nums) returning all permutations. (LeetCode #46 — Backtracking)",
 hint:"Backtracking: swap current index with each remaining index, recurse, swap back.",
 start:"function permute(nums) {\n  const res = [];\n  function bt(start) {\n    if (start === nums.length) { res.push([...nums]); return; }\n    for (let i = start; i < nums.length; i++) {\n      [nums[start], nums[i]] = [nums[i], nums[start]];\n      bt(start + 1);\n      [nums[start], nums[i]] = [nums[i], nums[start]];\n    }\n  }\n  bt(0);\n  return res;\n}",
 fn:"permute",tests:[{a:[[1,2,3]],e:[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]},{a:[[0,1]],e:[[0,1],[1,0]]}]},

{id:460,title:"Task Scheduler",diff:"Medium",cat:"Algorithms",
 desc:"Write leastInterval(tasks, n): minimum intervals to finish all tasks with cooldown n. (LeetCode #621)",
 hint:"Count frequencies. Formula: (maxFreq-1)*(n+1)+count of tasks with maxFreq.",
 start:"function leastInterval(tasks, n) {\n  const freq = {};\n  for (const t of tasks) freq[t] = (freq[t] || 0) + 1;\n  const maxFreq = Math.max(...Object.values(freq));\n  const maxCount = Object.values(freq).filter(f => f === maxFreq).length;\n  return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount);\n}",
 fn:"leastInterval",tests:[{a:[["A","A","A","B","B","B"],2],e:8},{a:[["A","A","A","B","B","B"],0],e:6}]},

{id:461,title:"Minimum Path Sum",diff:"Medium",cat:"Algorithms",
 desc:"Write minPathSum(grid): minimum sum path from top-left to bottom-right. (LeetCode #64 — DP)",
 hint:"dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]). Handle edge rows/cols separately.",
 start:"function minPathSum(grid) {\n  const m = grid.length, n = grid[0].length;\n  for (let i = 0; i < m; i++)\n    for (let j = 0; j < n; j++) {\n      if (i === 0 && j === 0) continue;\n      const up = i > 0 ? grid[i-1][j] : Infinity;\n      const left = j > 0 ? grid[i][j-1] : Infinity;\n      grid[i][j] += Math.min(up, left);\n    }\n  return grid[m-1][n-1];\n}",
 fn:"minPathSum",tests:[{a:[[[1,3,1],[1,5,1],[4,2,1]]],e:7},{a:[[[1,2,3],[4,5,6]]],e:12}]},

{id:462,title:"Is Palindrome",diff:"Easy",cat:"Algorithms",
 desc:"Write isPalin(s) checking if a string is a palindrome (two-pointer).",
 hint:"Compare characters from both ends moving inward.",
 start:"function isPalin(s) {\n  let l = 0, r = s.length - 1;\n  while (l < r) {\n    if (s[l] !== s[r]) return false;\n    l++; r--;\n  }\n  return true;\n}",
 fn:"isPalin",tests:[{a:["racecar"],e:true},{a:["hello"],e:false},{a:["a"],e:true},{a:["abba"],e:true}]},

{id:463,title:"Validate BST",diff:"Medium",cat:"Algorithms",
 desc:"Write isValidBST(root, min, max) validating a Binary Search Tree. (LeetCode #98)",
 hint:"Pass min/max bounds. Each node must be > min and < max. Update bounds as you recurse.",
 start:"function isValidBST(root, min=-Infinity, max=Infinity) {\n  if (!root) return true;\n  if (root.val <= min || root.val >= max) return false;\n  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);\n}",
 fn:"isValidBST",tests:[{a:[{val:2,left:{val:1,left:null,right:null},right:{val:3,left:null,right:null}},-Infinity,Infinity],e:true},{a:[{val:5,left:{val:1,left:null,right:null},right:{val:4,left:{val:3,left:null,right:null},right:{val:6,left:null,right:null}}},-Infinity,Infinity],e:false}]},

{id:464,title:"Invert Binary Tree",diff:"Easy",cat:"Algorithms",
 desc:"Write invertTree(root) inverting a binary tree. (LeetCode #226)",
 hint:"Swap left and right children, then recursively invert each subtree.",
 start:"function invertTree(root) {\n  if (!root) return null;\n  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];\n  return root;\n}",
 fn:"invertTree",tests:[{a:[{val:4,left:{val:2,left:{val:1,left:null,right:null},right:{val:3,left:null,right:null}},right:{val:7,left:{val:6,left:null,right:null},right:{val:9,left:null,right:null}}}],e:{val:4,left:{val:7,left:{val:9,left:null,right:null},right:{val:6,left:null,right:null}},right:{val:2,left:{val:3,left:null,right:null},right:{val:1,left:null,right:null}}}}]},

{id:465,title:"Level Order Traversal",diff:"Medium",cat:"Algorithms",
 desc:"Write levelOrder(root) returning nodes level by level. (LeetCode #102 — BFS)",
 hint:"Use a queue. Process one full level at a time by tracking queue size at start of each level.",
 start:"function levelOrder(root) {\n  if (!root) return [];\n  const res = [], queue = [root];\n  while (queue.length) {\n    const level = [];\n    const size = queue.length;\n    for (let i = 0; i < size; i++) {\n      const node = queue.shift();\n      level.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    res.push(level);\n  }\n  return res;\n}",
 fn:"levelOrder",tests:[{a:[{val:3,left:{val:9,left:null,right:null},right:{val:20,left:{val:15,left:null,right:null},right:{val:7,left:null,right:null}}}],e:[[3],[9,20],[15,7]]}]},

{id:466,title:"Number of 1 Bits",diff:"Easy",cat:"Algorithms",
 desc:"Write hammingWeight(n) counting set bits. (LeetCode #191)",
 hint:"n & 1 checks last bit. n >>>= 1 shifts right.",
 start:"function hammingWeight(n) {\n  let count = 0;\n  while (n) { count += n & 1; n >>>= 1; }\n  return count;\n}",
 fn:"hammingWeight",tests:[{a:[11],e:3},{a:[128],e:1},{a:[2147483645],e:30}]},

{id:467,title:"Happy Number",diff:"Easy",cat:"Algorithms",
 desc:"Write isHappy(n): a happy number eventually reaches 1. (LeetCode #202)",
 hint:"Use a Set to detect cycles. If n reaches 1, happy. If it cycles, not happy.",
 start:"function isHappy(n) {\n  const seen = new Set();\n  while (n !== 1) {\n    if (seen.has(n)) return false;\n    seen.add(n);\n    n = String(n).split('').reduce((sum, d) => sum + d * d, 0);\n  }\n  return true;\n}",
 fn:"isHappy",tests:[{a:[19],e:true},{a:[2],e:false}]},

{id:468,title:"Redundant Connection",diff:"Medium",cat:"Algorithms",
 desc:"Write findRedundantConnection(edges): edge that creates a cycle. (LeetCode #684 — Union Find)",
 hint:"Union-Find: if both nodes already connected, this edge is redundant. Otherwise union.",
 start:"function findRedundantConnection(edges) {\n  const parent = Array.from({length: edges.length + 1}, (_, i) => i);\n  function find(x) { return parent[x] === x ? x : parent[x] = find(parent[x]); }\n  function union(x, y) { const [px, py] = [find(x), find(y)]; if (px === py) return false; parent[px] = py; return true; }\n  for (const [a, b] of edges) if (!union(a, b)) return [a, b];\n}",
 fn:"findRedundantConnection",tests:[{a:[[[1,2],[1,3],[2,3]]],e:[2,3]},{a:[[[1,2],[2,3],[3,4],[1,4],[1,5]]],e:[1,4]}]},

{id:469,title:"Edit Distance",diff:"Hard",cat:"Algorithms",
 desc:"Write minDistance(word1, word2): minimum edit operations. (LeetCode #72 — DP)",
 hint:"dp[i][j] = min edits for word1[0..i-1] to word2[0..j-1]. If chars match, no edit. Else min of 3 ops + 1.",
 start:"function minDistance(word1, word2) {\n  const m = word1.length, n = word2.length;\n  const dp = Array.from({length:m+1}, (_, i) => Array.from({length:n+1}, (_, j) => i || j));\n  for (let i = 1; i <= m; i++)\n    for (let j = 1; j <= n; j++)\n      dp[i][j] = word1[i-1] === word2[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);\n  return dp[m][n];\n}",
 fn:"minDistance",tests:[{a:["horse","ros"],e:3},{a:["intention","execution"],e:5}]},

{id:470,title:"Basic Calculator",diff:"Hard",cat:"Algorithms",
 desc:"Write calculate(s): evaluate basic math expression with +, -, and parentheses. (LeetCode #224)",
 hint:"Stack-based. Push current result and sign on '('. Pop and combine on ')'.",
 start:"function calculate(s) {\n  let result = 0, sign = 1, stack = [];\n  for (let i = 0; i < s.length; i++) {\n    const c = s[i];\n    if (c >= '0' && c <= '9') {\n      let num = 0;\n      while (i < s.length && s[i] >= '0' && s[i] <= '9') num = num * 10 + parseInt(s[i++]);\n      result += sign * num; i--;\n    } else if (c === '+') sign = 1;\n    else if (c === '-') sign = -1;\n    else if (c === '(') { stack.push(result); stack.push(sign); result = 0; sign = 1; }\n    else if (c === ')') { result = stack.pop() * result + stack.pop(); }\n  }\n  return result;\n}",
 fn:"calculate",tests:[{a:["1 + 1"],e:2},{a:[" 2-1 + 2 "],e:3},{a:["(1+(4+5+2)-3)+(6+8)"],e:23}]},

{id:471,title:"Path Sum",diff:"Easy",cat:"Algorithms",
 desc:"Write hasPathSum(root, target): does any root-to-leaf path sum to target? (LeetCode #112)",
 hint:"At each leaf, check if remaining equals 0. Recurse with remaining - node.val.",
 start:"function hasPathSum(root, target) {\n  if (!root) return false;\n  if (!root.left && !root.right) return root.val === target;\n  return hasPathSum(root.left, target - root.val) || hasPathSum(root.right, target - root.val);\n}",
 fn:"hasPathSum",tests:[{a:[{val:5,left:{val:4,left:{val:11,left:{val:7,left:null,right:null},right:{val:2,left:null,right:null}},right:null},right:{val:8,left:{val:13,left:null,right:null},right:{val:4,left:null,right:{val:1,left:null,right:null}}}},22],e:true},{a:[null,0],e:false}]},

{id:472,title:"Palindrome Linked List",diff:"Easy",cat:"Algorithms",
 desc:"Write isPalindromeList(arr) checking if the array (simulating linked list values) is a palindrome.",
 hint:"Compare the array with its reverse.",
 start:"function isPalindromeList(arr) {\n  return arr.join('') === arr.slice().reverse().join('');\n}",
 fn:"isPalindromeList",tests:[{a:[[1,2,2,1]],e:true},{a:[[1,2]],e:false}]},

{id:473,title:"Find All Duplicates",diff:"Medium",cat:"Algorithms",
 desc:"Write findDuplicates(nums): numbers appearing twice in 1..n array. (LeetCode #442 — Index trick)",
 hint:"Use index as hash: negate nums[abs(num)-1]. If already negative, it's a duplicate.",
 start:"function findDuplicates(nums) {\n  const res = [];\n  for (const n of nums) {\n    const idx = Math.abs(n) - 1;\n    if (nums[idx] < 0) res.push(Math.abs(n));\n    else nums[idx] = -nums[idx];\n  }\n  return res;\n}",
 fn:"findDuplicates",tests:[{a:[[4,3,2,7,8,2,3,1]],e:[2,3]},{a:[[1,1,2]],e:[1]}]},

{id:474,title:"Next Permutation",diff:"Medium",cat:"Algorithms",
 desc:"Write nextPermutation(nums): rearrange into next lexicographically greater permutation. (LeetCode #31)",
 hint:"Find rightmost ascending pair. Swap with smallest number > nums[i] to its right. Reverse suffix.",
 start:"function nextPermutation(nums) {\n  let i = nums.length - 2;\n  while (i >= 0 && nums[i] >= nums[i + 1]) i--;\n  if (i >= 0) {\n    let j = nums.length - 1;\n    while (nums[j] <= nums[i]) j--;\n    [nums[i], nums[j]] = [nums[j], nums[i]];\n  }\n  let l = i + 1, r = nums.length - 1;\n  while (l < r) { [nums[l], nums[r]] = [nums[r], nums[l]]; l++; r--; }\n  return nums;\n}",
 fn:"nextPermutation",tests:[{a:[[1,2,3]],e:[1,3,2]},{a:[[3,2,1]],e:[1,2,3]},{a:[[1,1,5]],e:[1,5,1]}]},

{id:475,title:"Minimum Stack Ops",diff:"Easy",cat:"Algorithms",
 desc:"Write minStack(ops) simulating a stack that retrieves min in O(1). ops=['push:x','pop','min'].",
 hint:"Maintain an auxiliary min stack. On push, push to minStack the new minimum.",
 start:"function minStack(ops) {\n  const stack = [], minS = [], res = [];\n  for (const op of ops) {\n    if (op.startsWith('push')) {\n      const v = parseInt(op.split(':')[1]);\n      stack.push(v);\n      minS.push(minS.length ? Math.min(v, minS[minS.length - 1]) : v);\n    } else if (op === 'pop') { stack.pop(); minS.pop(); }\n    else if (op === 'min') res.push(minS[minS.length - 1]);\n  }\n  return res;\n}",
 fn:"minStack",tests:[{a:[["push:5","push:3","push:7","min","pop","min"]],e:[3,3]}]},

{id:476,title:"Sqrt Binary Search",diff:"Easy",cat:"Algorithms",
 desc:"Write mySqrt(x) returning floor of square root. (LeetCode #69 — Binary search)",
 hint:"Binary search between 0 and x. Find largest mid where mid*mid <= x.",
 start:"function mySqrt(x) {\n  if (x < 2) return x;\n  let l = 1, r = Math.floor(x / 2);\n  while (l <= r) {\n    const mid = Math.floor((l + r) / 2);\n    if (mid * mid === x) return mid;\n    if (mid * mid < x) l = mid + 1;\n    else r = mid - 1;\n  }\n  return r;\n}",
 fn:"mySqrt",tests:[{a:[4],e:2},{a:[8],e:2},{a:[0],e:0}]},

{id:477,title:"Reverse Bits",diff:"Easy",cat:"Algorithms",
 desc:"Write reverseBits(n) reversing bits of a 32-bit integer. (LeetCode #190)",
 hint:"Build result bit by bit. Extract last bit, shift result left, add bit. Repeat 32 times.",
 start:"function reverseBits(n) {\n  let result = 0;\n  for (let i = 0; i < 32; i++) {\n    result = (result * 2) + (n & 1);\n    n >>>= 1;\n  }\n  return result >>> 0;\n}",
 fn:"reverseBits",tests:[{a:[43261596],e:964176192},{a:[4294967293],e:3221225471}]},

{id:478,title:"Excel Column Title",diff:"Easy",cat:"Algorithms",
 desc:"Write convertToTitle(n): convert column number to Excel title. 1->A, 26->Z, 27->AA. (LeetCode #168)",
 hint:"Work backwards. n-- then n%26 gives the column char. Prepend char and floor divide.",
 start:"function convertToTitle(n) {\n  let res = '';\n  while (n > 0) {\n    n--;\n    res = String.fromCharCode(65 + (n % 26)) + res;\n    n = Math.floor(n / 26);\n  }\n  return res;\n}",
 fn:"convertToTitle",tests:[{a:[1],e:"A"},{a:[28],e:"AB"},{a:[701],e:"ZY"}]},

{id:479,title:"First Bad Version",diff:"Easy",cat:"Algorithms",
 desc:"Write firstBadVersion(n, bad): find first bad version using binary search. (LeetCode #278)",
 hint:"Binary search: if mid is bad, search left (r=mid). If good, search right (l=mid+1).",
 start:"function firstBadVersion(n, bad) {\n  const isBad = v => v >= bad;\n  let l = 1, r = n;\n  while (l < r) {\n    const mid = Math.floor((l + r) / 2);\n    if (isBad(mid)) r = mid;\n    else l = mid + 1;\n  }\n  return l;\n}",
 fn:"firstBadVersion",tests:[{a:[5,4],e:4},{a:[1,1],e:1}]},

{id:480,title:"Sum of Two Integers",diff:"Medium",cat:"Algorithms",
 desc:"Write getSum(a, b) computing a+b without using + or - operator. (LeetCode #371 — Bit manipulation)",
 hint:"XOR gives sum without carry. AND<<1 gives carry. Repeat until no carry.",
 start:"function getSum(a, b) {\n  while (b !== 0) {\n    const carry = (a & b) << 1;\n    a = a ^ b;\n    b = carry;\n  }\n  return a;\n}",
 fn:"getSum",tests:[{a:[1,2],e:3},{a:[2,3],e:5}]},

{id:481,title:"Largest Rectangle Histogram",diff:"Hard",cat:"Algorithms",
 desc:"Write largestRectangleArea(heights). (LeetCode #84 — Monotonic stack)",
 hint:"Use a stack of indices. Pop when current bar is shorter. Area = height * (right-left-1).",
 start:"function largestRectangleArea(heights) {\n  const stack = [], h = [...heights, 0];\n  let max = 0;\n  for (let i = 0; i < h.length; i++) {\n    while (stack.length && h[stack[stack.length - 1]] > h[i]) {\n      const height = h[stack.pop()];\n      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;\n      max = Math.max(max, height * width);\n    }\n    stack.push(i);\n  }\n  return max;\n}",
 fn:"largestRectangleArea",tests:[{a:[[2,1,5,6,2,3]],e:10},{a:[[2,4]],e:4}]},

{id:482,title:"Diameter of Binary Tree",diff:"Easy",cat:"Algorithms",
 desc:"Write diameterOfBinaryTree(root): longest path between any two nodes. (LeetCode #543)",
 hint:"For each node, diameter = leftHeight + rightHeight. Track max globally during DFS.",
 start:"function diameterOfBinaryTree(root) {\n  let max = 0;\n  function height(node) {\n    if (!node) return 0;\n    const l = height(node.left), r = height(node.right);\n    max = Math.max(max, l + r);\n    return 1 + Math.max(l, r);\n  }\n  height(root);\n  return max;\n}",
 fn:"diameterOfBinaryTree",tests:[{a:[{val:1,left:{val:2,left:{val:4,left:null,right:null},right:{val:5,left:null,right:null}},right:{val:3,left:null,right:null}}],e:3},{a:[{val:1,left:{val:2,left:null,right:null},right:null}],e:1}]},

{id:483,title:"Balanced Binary Tree",diff:"Easy",cat:"Algorithms",
 desc:"Write isBalanced(root): is tree height-balanced? (LeetCode #110)",
 hint:"Return height from recursive function. Return -1 to signal imbalance.",
 start:"function isBalanced(root) {\n  function height(node) {\n    if (!node) return 0;\n    const l = height(node.left);\n    if (l === -1) return -1;\n    const r = height(node.right);\n    if (r === -1) return -1;\n    if (Math.abs(l - r) > 1) return -1;\n    return 1 + Math.max(l, r);\n  }\n  return height(root) !== -1;\n}",
 fn:"isBalanced",tests:[{a:[{val:3,left:{val:9,left:null,right:null},right:{val:20,left:{val:15,left:null,right:null},right:{val:7,left:null,right:null}}}],e:true},{a:[{val:1,left:{val:2,left:{val:3,left:{val:4,left:null,right:null},right:null},right:null},right:null}],e:false}]},

{id:484,title:"Palindrome Partitioning",diff:"Hard",cat:"Algorithms",
 desc:"Write allPalinPartitions(s): all ways to partition s so that every substring is a palindrome. (LeetCode #131 — Backtracking)",
 hint:"Backtracking: for each starting position, try all ending positions. If substring is palindrome, recurse on the rest.",
 start:"function allPalinPartitions(s) {\n  const res = [];\n  function isPalin(str) { return str === str.split('').reverse().join(''); }\n  function bt(start, path) {\n    if (start === s.length) { res.push([...path]); return; }\n    for (let end = start + 1; end <= s.length; end++) {\n      const sub = s.slice(start, end);\n      if (isPalin(sub)) { path.push(sub); bt(end, path); path.pop(); }\n    }\n  }\n  bt(0, []);\n  return res;\n}",
 fn:"allPalinPartitions",tests:[{a:["aab"],e:[["a","a","b"],["aa","b"]]},{a:["a"],e:[["a"]]}]},

{id:485,title:"Minimum Window Substring",diff:"Hard",cat:"Algorithms",
 desc:"Write minWindow(s, t): smallest substring of s containing all chars of t. (LeetCode #76)",
 hint:"Sliding window with two frequency maps. Expand right until valid, shrink left to minimize.",
 start:"function minWindow(s, t) {\n  const need = {}, have = {};\n  for (const c of t) need[c] = (need[c] || 0) + 1;\n  let formed = 0, required = Object.keys(need).length;\n  let l = 0, min = Infinity, ans = '';\n  for (let r = 0; r < s.length; r++) {\n    const c = s[r]; have[c] = (have[c] || 0) + 1;\n    if (need[c] && have[c] === need[c]) formed++;\n    while (formed === required) {\n      if (r - l + 1 < min) { min = r - l + 1; ans = s.slice(l, r + 1); }\n      have[s[l]]--;\n      if (need[s[l]] && have[s[l]] < need[s[l]]) formed--;\n      l++;\n    }\n  }\n  return ans;\n}",
 fn:"minWindow",tests:[{a:["ADOBECODEBANC","ABC"],e:"BANC"},{a:["a","a"],e:"a"},{a:["a","aa"],e:""}]},

{id:486,title:"Minimum Stack Peep",diff:"Easy",cat:"Algorithms",
 desc:"Write getMinFromStack(arr): return the minimum element in the array in O(n).",
 hint:"Scan all elements and return the minimum using Math.min.",
 start:"function getMinFromStack(arr) {\n  return arr.length === 0 ? null : Math.min(...arr);\n}",
 fn:"getMinFromStack",tests:[{a:[[3,1,2,5]],e:1},{a:[[7,4,9,2,6]],e:2},{a:[[]],e:null}]},

{id:487,title:"Construct BST from Preorder",diff:"Medium",cat:"Algorithms",
 desc:"Write bstFromPreorder(preorder) constructing a BST from preorder traversal. (LeetCode #1008)",
 hint:"First element is root. Elements < root go left, >= go right. Recurse on each partition.",
 start:"function bstFromPreorder(preorder) {\n  if (!preorder.length) return null;\n  const root = {val: preorder[0], left: null, right: null};\n  const idx = preorder.findIndex(v => v > preorder[0]);\n  const right = idx === -1 ? [] : preorder.slice(idx);\n  const left = idx === -1 ? preorder.slice(1) : preorder.slice(1, idx);\n  root.left = bstFromPreorder(left);\n  root.right = bstFromPreorder(right);\n  return root;\n}",
 fn:"bstFromPreorder",tests:[{a:[[8,5,1,7,10,12]],e:{val:8,left:{val:5,left:{val:1,left:null,right:null},right:{val:7,left:null,right:null}},right:{val:10,left:null,right:{val:12,left:null,right:null}}}}]},

{id:488,title:"Walls and Gates",diff:"Medium",cat:"Algorithms",
 desc:"Write wallsAndGates(rooms): fill each empty room with distance to nearest gate. Multi-source BFS.",
 hint:"Start BFS from all gates (0) simultaneously. Each step increases distance by 1.",
 start:"function wallsAndGates(rooms) {\n  const m = rooms.length, n = rooms[0].length;\n  const queue = [];\n  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) if (rooms[i][j] === 0) queue.push([i, j]);\n  while (queue.length) {\n    const [r, c] = queue.shift();\n    for (const [dr, dc] of [[1,0],[-1,0],[0,1],[0,-1]]) {\n      const [nr, nc] = [r + dr, c + dc];\n      if (nr >= 0 && nr < m && nc >= 0 && nc < n && rooms[nr][nc] === 2147483647) {\n        rooms[nr][nc] = rooms[r][c] + 1;\n        queue.push([nr, nc]);\n      }\n    }\n  }\n  return rooms;\n}",
 fn:"wallsAndGates",tests:[{a:[[[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]],e:[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]}]},

{id:489,title:"Longest Palindrome (length)",diff:"Easy",cat:"Algorithms",
 desc:"Write longestPalindromeLen(s): length of longest palindrome buildable from chars. (LeetCode #409)",
 hint:"Count chars. Every pair contributes 2. If any odd count exists, add 1 for center.",
 start:"function longestPalindromeLen(s) {\n  const freq = {};\n  for (const c of s) freq[c] = (freq[c] || 0) + 1;\n  let len = 0, hasOdd = false;\n  for (const f of Object.values(freq)) {\n    len += Math.floor(f / 2) * 2;\n    if (f % 2) hasOdd = true;\n  }\n  return len + (hasOdd ? 1 : 0);\n}",
 fn:"longestPalindromeLen",tests:[{a:["abccccdd"],e:7},{a:["a"],e:1}]},

{id:490,title:"Find First and Last Position",diff:"Medium",cat:"Algorithms",
 desc:"Write searchRange(nums, target): first and last positions. (LeetCode #34 — Binary search)",
 hint:"Two binary searches: one for leftmost position, one for rightmost.",
 start:"function searchRange(nums, target) {\n  function find(left) {\n    let lo = 0, hi = nums.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = Math.floor((lo + hi) / 2);\n      if (nums[mid] === target) { res = mid; if (left) hi = mid - 1; else lo = mid + 1; }\n      else if (nums[mid] < target) lo = mid + 1;\n      else hi = mid - 1;\n    }\n    return res;\n  }\n  return [find(true), find(false)];\n}",
 fn:"searchRange",tests:[{a:[[5,7,7,8,8,10],8],e:[3,4]},{a:[[5,7,7,8,8,10],6],e:[-1,-1]}]},

{id:491,title:"Pacific Atlantic Water Flow",diff:"Medium",cat:"Algorithms",
 desc:"Write pacificAtlantic(heights): cells that can flow to both oceans. (LeetCode #417 — Multi-source BFS)",
 hint:"BFS from Pacific borders AND Atlantic borders separately. Return intersection.",
 start:"function pacificAtlantic(heights) {\n  const m = heights.length, n = heights[0].length;\n  function bfs(starts) {\n    const visited = new Set(starts.map(([r,c]) => r+','+c));\n    const queue = [...starts];\n    while (queue.length) {\n      const [r,c] = queue.shift();\n      for (const [dr,dc] of [[1,0],[-1,0],[0,1],[0,-1]]) {\n        const [nr,nc] = [r+dr,c+dc];\n        if (nr>=0&&nr<m&&nc>=0&&nc<n&&!visited.has(nr+','+nc)&&heights[nr][nc]>=heights[r][c]) {\n          visited.add(nr+','+nc); queue.push([nr,nc]);\n        }\n      }\n    }\n    return visited;\n  }\n  const pac = [], atl = [];\n  for (let i=0;i<m;i++) { pac.push([i,0]); atl.push([i,n-1]); }\n  for (let j=0;j<n;j++) { pac.push([0,j]); atl.push([m-1,j]); }\n  const pSet = bfs(pac), aSet = bfs(atl);\n  const res = [];\n  for (let i=0;i<m;i++) for (let j=0;j<n;j++) if (pSet.has(i+','+j)&&aSet.has(i+','+j)) res.push([i,j]);\n  return res;\n}",
 fn:"pacificAtlantic",tests:[{a:[[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]],e:[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]}]},

{id:492,title:"Regular Expression Matching",diff:"Hard",cat:"Algorithms",
 desc:"Write isMatch(s, p): true if s matches pattern p with '.' and '*'. (LeetCode #10 — DP)",
 hint:"dp[i][j] = does s[0..i-1] match p[0..j-1]. Handle '*' by looking at dp[i][j-2] or dp[i-1][j] if char matches.",
 start:"function isMatch(s, p) {\n  const m = s.length, n = p.length;\n  const dp = Array.from({length:m+1}, () => new Array(n+1).fill(false));\n  dp[0][0] = true;\n  for (let j = 2; j <= n; j++) if (p[j-1] === '*') dp[0][j] = dp[0][j-2];\n  for (let i = 1; i <= m; i++)\n    for (let j = 1; j <= n; j++) {\n      if (p[j-1] === '*') {\n        dp[i][j] = dp[i][j-2] || (dp[i-1][j] && (p[j-2] === '.' || p[j-2] === s[i-1]));\n      } else {\n        dp[i][j] = dp[i-1][j-1] && (p[j-1] === '.' || p[j-1] === s[i-1]);\n      }\n    }\n  return dp[m][n];\n}",
 fn:"isMatch",tests:[{a:["aa","a"],e:false},{a:["aa","a*"],e:true},{a:["ab",".*"],e:true}]},

{id:493,title:"Implement LRU Cache",diff:"Hard",cat:"Algorithms",
 desc:"Write lruGet(cache, cap, ops) simulating an LRU Cache. ops=[['get',k],['put',k,v],...]. Return get results.",
 hint:"Use Map — insertion order is maintained. On access/put, delete and re-insert to move to end. Evict first when over cap.",
 start:"function lruGet(cache, cap, ops) {\n  const map = new Map(cache.map(([k,v]) => [k,v]));\n  const results = [];\n  for (const op of ops) {\n    if (op[0] === 'get') {\n      if (map.has(op[1])) { const v = map.get(op[1]); map.delete(op[1]); map.set(op[1],v); results.push(v); }\n      else results.push(-1);\n    } else {\n      if (map.has(op[1])) map.delete(op[1]);\n      map.set(op[1], op[2]);\n      if (map.size > cap) map.delete(map.keys().next().value);\n    }\n  }\n  return results;\n}",
 fn:"lruGet",tests:[{a:[[[1,1],[2,2]],2,[['get',1],['put',3,3],['get',2],['get',3]]],e:[1,-1,3]}]},

{id:494,title:"Word Search",diff:"Hard",cat:"Algorithms",
 desc:"Write exist(board, word): does word exist in board via adjacent cells? (LeetCode #79 — Backtracking)",
 hint:"DFS from each cell. Mark visited with a temp char. Restore on backtrack.",
 start:"function exist(board, word) {\n  const rows = board.length, cols = board[0].length;\n  function dfs(i, j, k) {\n    if (k === word.length) return true;\n    if (i < 0||i>=rows||j<0||j>=cols||board[i][j]!==word[k]) return false;\n    const tmp = board[i][j]; board[i][j] = '#';\n    const found = dfs(i+1,j,k+1)||dfs(i-1,j,k+1)||dfs(i,j+1,k+1)||dfs(i,j-1,k+1);\n    board[i][j] = tmp;\n    return found;\n  }\n  for (let i=0;i<rows;i++) for (let j=0;j<cols;j++) if (dfs(i,j,0)) return true;\n  return false;\n}",
 fn:"exist",tests:[{a:[[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"],e:true},{a:[[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB"],e:false}]},

{id:495,title:"Number of Islands Count",diff:"Medium",cat:"Algorithms",
 desc:"Write islandCount(grid) counting distinct islands. Different approach: use '1'/'0' chars.",
 hint:"DFS from each unvisited '1'. Mark it '0' as you go. Each DFS call = one island.",
 start:"function islandCount(grid) {\n  const g = grid.map(r => [...r]);\n  let count = 0;\n  function dfs(i, j) {\n    if (i < 0 || i >= g.length || j < 0 || j >= g[0].length || g[i][j] === '0') return;\n    g[i][j] = '0';\n    dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1);\n  }\n  for (let i = 0; i < g.length; i++)\n    for (let j = 0; j < g[0].length; j++)\n      if (g[i][j] === '1') { dfs(i,j); count++; }\n  return count;\n}",
 fn:"islandCount",tests:[{a:[[["1","1","0"],["0","1","0"],["0","0","1"]]],e:2},{a:[[["1","0"],["0","1"]]],e:2}]},

{id:496,title:"3Sum Zero",diff:"Hard",cat:"Algorithms",
 desc:"Write threeSum(nums) finding all unique triplets that sum to zero. (LeetCode #15)",
 hint:"Sort array. For each element, use two pointers for the remaining pair. Skip duplicates.",
 start:"function threeSum(nums) {\n  nums.sort((a,b) => a-b);\n  const res = [];\n  for (let i = 0; i < nums.length - 2; i++) {\n    if (i > 0 && nums[i] === nums[i-1]) continue;\n    let l = i + 1, r = nums.length - 1;\n    while (l < r) {\n      const sum = nums[i] + nums[l] + nums[r];\n      if (sum === 0) { res.push([nums[i],nums[l],nums[r]]); while(l<r&&nums[l]===nums[l+1])l++; while(l<r&&nums[r]===nums[r-1])r--; l++; r--; }\n      else if (sum < 0) l++; else r--;\n    }\n  }\n  return res;\n}",
 fn:"threeSum",tests:[{a:[[-1,0,1,2,-1,-4]],e:[[-1,-1,2],[-1,0,1]]},{a:[[0,1,1]],e:[]},{a:[[0,0,0]],e:[[0,0,0]]}]},

{id:497,title:"Maximum Subarray Sum",diff:"Easy",cat:"Algorithms",
 desc:"Write maxSubarraySum(nums): maximum contiguous subarray sum. (LeetCode #53 — Kadane's)",
 hint:"Track current sum and global max. If current < 0 reset to current element.",
 start:"function maxSubarraySum(nums) {\n  let max = nums[0], curr = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    curr = Math.max(nums[i], curr + nums[i]);\n    max = Math.max(max, curr);\n  }\n  return max;\n}",
 fn:"maxSubarraySum",tests:[{a:[[-2,1,-3,4,-1,2,1,-5,4]],e:6},{a:[[1]],e:1},{a:[[-1,-2,-3]],e:-1}]},

{id:498,title:"Contains Duplicate",diff:"Easy",cat:"Algorithms",
 desc:"Write containsDuplicate(nums): true if any value appears at least twice. (LeetCode #217)",
 hint:"Use a Set. If the Set size is less than nums.length, there's a duplicate.",
 start:"function containsDuplicate(nums) {\n  return new Set(nums).size < nums.length;\n}",
 fn:"containsDuplicate",tests:[{a:[[1,2,3,1]],e:true},{a:[[1,2,3,4]],e:false},{a:[[1,1,1,3,3,4,3,2,4,2]],e:true}]},

{id:499,title:"Product Except Self",diff:"Medium",cat:"Algorithms",
 desc:"Write productExceptSelf(nums): output[i] = product of all except nums[i], no division. (LeetCode #238)",
 hint:"Two passes: left products (prefix) and right products (suffix). Multiply them.",
 start:"function productExceptSelf(nums) {\n  const n = nums.length;\n  const res = new Array(n).fill(1);\n  let left = 1;\n  for (let i = 0; i < n; i++) { res[i] = left; left *= nums[i]; }\n  let right = 1;\n  for (let i = n - 1; i >= 0; i--) { res[i] *= right; right *= nums[i]; }\n  return res;\n}",
 fn:"productExceptSelf",tests:[{a:[[1,2,3,4]],e:[24,12,8,6]},{a:[[-1,1,0,-3,3]],e:[0,0,9,0,0]}]},

{id:500,title:"Two Sum",diff:"Easy",cat:"Algorithms",
 desc:"Write twoSum(nums, target): indices of two numbers that add up to target. (LeetCode #1)",
 hint:"Use a hash map. For each num, check if target - num exists in the map.",
 start:"function twoSum(nums, target) {\n  const map = {};\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map[complement] !== undefined) return [map[complement], i];\n    map[nums[i]] = i;\n  }\n}",
 fn:"twoSum",tests:[{a:[[2,7,11,15],9],e:[0,1]},{a:[[3,2,4],6],e:[1,2]},{a:[[3,3],6],e:[0,1]}]},

/* ══ BEGINNER LESSONS — HTML FUNDAMENTALS (501–535) — MDN + web.dev + W3Schools ══ */
// Run-and-observe format for first-time coders. No multiple choice.
// Lessons added May 16, 2026.

{id:501,title:"Your First HTML Page",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Every web page is built with HTML. An HTML <strong>tag</strong> looks like <code>&lt;h1&gt;</code> and it tells the browser what kind of content is inside. Click <strong>Run</strong> below to see your first page, then change the text and click Run again.",
 start:`<h1>Hello, world!</h1>
<p>This is my first web page.</p>`,
 goal:"Change 'Hello, world!' to your name, then click Run.",
 source:"MDN — Getting started with HTML",
 hint:"Whatever you put between the opening tag <h1> and the closing tag </h1> appears as a big heading on the page."},

{id:502,title:"Headings: h1 to h6",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"HTML has six heading sizes — <code>&lt;h1&gt;</code> is the largest, <code>&lt;h6&gt;</code> is the smallest. Use h1 for the main title of a page, then h2 for sections, h3 for subsections.",
 start:`<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>`,
 goal:"Add an h5 and h6 to the list. Click Run to see all six sizes.",
 source:"MDN — Heading elements",
 hint:"Just copy the pattern: open with <h5>, write your text, close with </h5>."},

{id:503,title:"Paragraphs",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"The <code>&lt;p&gt;</code> tag is for paragraphs of text. The browser automatically adds space above and below each paragraph so your writing is easy to read.",
 start:`<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>`,
 goal:"Add a third paragraph that says something about you.",
 source:"MDN — <p>: The Paragraph element",
 hint:"Paragraphs are wrapped with <p> at the start and </p> at the end."},

{id:504,title:"Bold and Italic",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Use <code>&lt;strong&gt;</code> to make text bold for emphasis, and <code>&lt;em&gt;</code> to make text italic. Use them sparingly — when everything is emphasized, nothing is.",
 start:`<p>This is <strong>important</strong> and this is <em>emphasized</em>.</p>`,
 goal:"Write a sentence about your favorite food with one word in bold and one in italic.",
 source:"MDN — <strong> and <em>",
 hint:"You can use both inside the same paragraph. Just wrap individual words like <strong>word</strong>."},

{id:505,title:"Links",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Links use the <code>&lt;a&gt;</code> tag with an <code>href</code> attribute. The href tells the browser where to go. Adding <code>target=\"_blank\"</code> opens the link in a new tab.<br><br><strong>Note about this practice playground:</strong> in real webpages, clicking a link redirects you to that page. Here, the link is rendered but the click is sandboxed (you stay in Code Ranger). To see where a link points, <strong>hover over it</strong> — the URL appears in the lower-left corner of your browser. On a real website, clicking would actually take you there.",
 start:`<p>Check out my website:</p>
<a href="https://jdbostonbu-ops.github.io/Dev-Play/" target="_blank">Visit my site</a>`,
 goal:"Change the URL to any website you like. Hover over the link — see the URL in the lower-left? In a real page, clicking would take you there.",
 source:"MDN — <a>: The Anchor element",
 hint:"Replace the URL inside href=\"...\" with any website address. The text between <a> and </a> is what users click."},

{id:506,title:"Images",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"The <code>&lt;img&gt;</code> tag shows an image. It needs <code>src</code> (the image address) and <code>alt</code> (a text description for screen readers and when the image fails to load). Alt text is required for accessibility.",
 start:`<img src="https://picsum.photos/200" alt="A random placeholder image" width="200">`,
 goal:"Change the size from 200 to 300 in both places. Click Run.",
 source:"MDN — <img>: The Image element",
 hint:"There are two places with 200 — in the URL and in the width attribute. Change both."},

{id:507,title:"Lists",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Use <code>&lt;ul&gt;</code> for an unordered list (bullets) or <code>&lt;ol&gt;</code> for an ordered list (numbers). Each item inside goes in a <code>&lt;li&gt;</code> tag.",
 start:`<h3>My favorite fruits</h3>
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Cherries</li>
</ul>`,
 goal:"Change <ul> to <ol> (and the closing tag too) to switch to numbers.",
 source:"MDN — <ul>, <ol>, and <li>",
 hint:"Don't forget to change both the opening <ul> AND the closing </ul>."},

{id:508,title:"Comments",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"HTML comments are notes for yourself. They start with <code>&lt;!--</code> and end with <code>--&gt;</code>. The browser ignores them. Use comments to explain tricky code or to temporarily hide things.",
 start:`<!-- This is a comment. The browser does not show it. -->
<h1>You can see this heading</h1>
<!-- <p>This paragraph is hidden because it's commented out.</p> -->`,
 goal:"Remove the comment markers around the second paragraph so it becomes visible.",
 source:"MDN — HTML comments",
 hint:"Delete the <!-- at the start and the --> at the end of the paragraph line."},

{id:509,title:"Line Breaks",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"The <code>&lt;br&gt;</code> tag forces a line break without starting a new paragraph. It's a self-closing tag — no closing tag needed. Use sparingly — for poetry or addresses, not as a way to add spacing.",
 start:`<p>Roses are red<br>
Violets are blue<br>
HTML is fun<br>
And so are you!</p>`,
 goal:"Add one more line of your own to the poem.",
 source:"MDN — <br>: The Line Break element",
 hint:"Just put <br> at the end of the line where you want a break."},

{id:510,title:"Horizontal Rule",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"The <code>&lt;hr&gt;</code> tag draws a horizontal line. Like &lt;br&gt;, it's self-closing. Use it to visually separate sections of content.",
 start:`<h2>Chapter One</h2>
<p>This is the first chapter.</p>
<hr>
<h2>Chapter Two</h2>
<p>This is the second chapter.</p>`,
 goal:"Add a third chapter with its own <hr> separator above it.",
 source:"MDN — <hr>: The Thematic Break element",
 hint:"Copy the pattern: <hr> on its own line, then your <h2> and <p>."},

{id:511,title:"Div Containers",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"A <code>&lt;div&gt;</code> is a generic container that groups other elements together. Divs have no built-in meaning — they're for layout. You'll style them with CSS later.",
 start:`<div style="background:#fef3c7;padding:16px;border-radius:8px">
  <h3>Welcome!</h3>
  <p>This whole box is inside one div.</p>
</div>`,
 goal:"Change the background color from #fef3c7 to #dbeafe and click Run.",
 source:"MDN — <div>: The Content Division element",
 hint:"Find #fef3c7 in the style attribute and replace it with #dbeafe."},

{id:512,title:"Span Inline",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"A <code>&lt;span&gt;</code> is like a div but for inline text — it stays on the same line. Use it to style just part of a sentence.",
 start:`<p>The word <span style="color:#ef4444;font-weight:bold">red</span> appears in red, but the rest of the sentence is normal.</p>`,
 goal:"Add a span around another word and color it blue (#3b82f6).",
 source:"MDN — <span>: The Content Span element",
 hint:"Wrap a word: <span style=\"color:#3b82f6\">word</span>."},

{id:513,title:"Quotes",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Use <code>&lt;blockquote&gt;</code> for a long quoted passage (it indents). Use <code>&lt;q&gt;</code> for a short inline quote (it adds quotation marks automatically).",
 start:`<p>The sign read <q>No entry after 5 PM</q>.</p>
<blockquote>
  The only way to do great work is to love what you do.
  — Steve Jobs
</blockquote>`,
 goal:"Add your own short inline quote using <q> in a new paragraph.",
 source:"MDN — <q> and <blockquote>",
 hint:"<p>She said <q>hello</q> to me.</p>"},

{id:514,title:"Tables",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Tables organize data into rows and columns. Use <code>&lt;table&gt;</code> for the table, <code>&lt;tr&gt;</code> for each row, <code>&lt;th&gt;</code> for header cells, and <code>&lt;td&gt;</code> for data cells.",
 start:`<table border="1" cellpadding="8">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Maria</td>
    <td>28</td>
  </tr>
</table>`,
 goal:"Add a second person to the table (a new <tr> row with two <td> cells).",
 source:"MDN — <table>: The Table element",
 hint:"Copy the Maria row and change the name and age."},

{id:515,title:"Buttons",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"The <code>&lt;button&gt;</code> tag creates a clickable button. Clicking won't do anything yet (that needs JavaScript) but visually it works. Buttons should have clear text describing what they do.",
 start:`<button>Click Me!</button>
<button>Save</button>
<button>Cancel</button>`,
 goal:"Add a fourth button labeled 'Delete'.",
 source:"MDN — <button>: The Button element",
 hint:"<button>Delete</button> on a new line."},

{id:516,title:"Text Input",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"The <code>&lt;input&gt;</code> tag with <code>type=\"text\"</code> creates a text box. The <code>&lt;label&gt;</code> tag describes what the input is for. The label's <code>for</code> attribute must match the input's <code>id</code> — this is required for accessibility.",
 start:`<label for="username">Your name:</label>
<input type="text" id="username" placeholder="Type your name here">`,
 goal:"Add a second label + input pair for an email field. Use id=\"email\" and type=\"email\".",
 source:"MDN — <input> and <label>",
 hint:"<label for=\"email\">Email:</label> followed by <input type=\"email\" id=\"email\">"},

{id:517,title:"Checkboxes",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Checkboxes let users select multiple options. Each checkbox needs a unique <code>id</code>, and each label's <code>for</code> matches that id.",
 start:`<label for="pizza">Pizza</label>
<input type="checkbox" id="pizza">
<br>
<label for="sushi">Sushi</label>
<input type="checkbox" id="sushi">`,
 goal:"Add a third checkbox for 'Tacos' with id=\"tacos\".",
 source:"MDN — <input type=\"checkbox\">",
 hint:"Don't forget the <br> between items and the matching for/id pair."},

{id:518,title:"Radio Buttons",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Radio buttons let users pick exactly ONE option from a group. The trick: all buttons in the group share the same <code>name</code> attribute — that's what groups them.",
 start:`<p>Pick one:</p>
<label for="small">Small</label>
<input type="radio" id="small" name="size">
<br>
<label for="medium">Medium</label>
<input type="radio" id="medium" name="size">`,
 goal:"Add a 'Large' option. Make sure name=\"size\" so it's part of the same group.",
 source:"MDN — <input type=\"radio\">",
 hint:"Same pattern, with id=\"large\" and name=\"size\" — name must match for grouping."},

{id:519,title:"Dropdowns",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"A dropdown is <code>&lt;select&gt;</code> with <code>&lt;option&gt;</code> tags inside. Use it when there are too many options for radio buttons.",
 start:`<label for="country">Country:</label>
<select id="country">
  <option>USA</option>
  <option>Mexico</option>
  <option>Canada</option>
</select>`,
 goal:"Add at least two more countries to the dropdown.",
 source:"MDN — <select>",
 hint:"Just add more <option>Country Name</option> lines inside the <select>."},

{id:520,title:"Forms",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"A <code>&lt;form&gt;</code> groups inputs together. When the user clicks submit, the form would send the data to a server (but for now we'll just see the layout).",
 start:`<form>
  <label for="name">Name:</label>
  <input type="text" id="name">
  <br><br>
  <label for="msg">Message:</label>
  <textarea id="msg" rows="3"></textarea>
  <br><br>
  <button type="submit">Send</button>
</form>`,
 goal:"Add an email field between the name and message. Use id=\"em\" with type=\"email\".",
 source:"MDN — <form>",
 hint:"Copy the name pattern — <label for=\"em\"> then <input type=\"email\" id=\"em\">."},

{id:521,title:"Page Title and Head",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Every full HTML page has a <code>&lt;head&gt;</code> section with metadata. The <code>&lt;title&gt;</code> shows in the browser tab. The body is what's visible.",
 start:`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to my page</h1>
    <p>The title above shows in the browser tab.</p>
  </body>
</html>`,
 goal:"Change the title text to something with your name.",
 source:"MDN — <title>",
 hint:"Find <title>My First Page</title> and replace 'My First Page' with your text."},

{id:522,title:"Semantic Tags: header",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;header&gt;</code> is a semantic tag — it tells assistive tools that this is the top section of a page. Screen readers announce it. Use one header per page for the main site header.",
 start:`<header style="background:#1f2937;color:white;padding:16px">
  <h1>My Website</h1>
  <p>The best little website on the internet</p>
</header>
<main style="padding:16px">
  <p>This is the main content.</p>
</main>`,
 goal:"Change the header background color from #1f2937 to #4338ca.",
 source:"MDN — <header>",
 hint:"Find #1f2937 in the header's style attribute and replace it."},

{id:523,title:"Semantic Tags: nav",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;nav&gt;</code> marks the navigation menu of a page. Screen readers can jump straight to it. Wrap your main menu links inside a nav.",
 start:`<nav style="background:#f3f4f6;padding:12px">
  <a href="#home">Home</a> |
  <a href="#about">About</a> |
  <a href="#contact">Contact</a>
</nav>`,
 goal:"Add a fourth link called 'Blog' to the navigation.",
 source:"MDN — <nav>",
 hint:"Add <a href=\"#blog\">Blog</a> with a separator (the | character) before it."},

{id:524,title:"Semantic Tags: footer",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;footer&gt;</code> goes at the bottom of a page. It usually has copyright text, contact info, or links to legal pages.",
 start:`<main style="padding:16px">
  <h1>Welcome</h1>
  <p>Main content goes here.</p>
</main>
<footer style="background:#1f2937;color:white;padding:16px;text-align:center">
  <p>&copy; 2026 My Name. All rights reserved.</p>
</footer>`,
 goal:"Add a second paragraph inside the footer with a link to your favorite site.",
 source:"MDN — <footer>",
 hint:"Inside the <footer>, add <p><a href=\"URL\">Site name</a></p>."},

{id:525,title:"Semantic Tags: article",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;article&gt;</code> wraps a piece of content that makes sense on its own — like a blog post, news story, or product card. Each article should be self-contained.",
 start:`<article style="border:1px solid #e5e7eb;padding:16px;border-radius:8px;margin:8px">
  <h2>How to Make Pancakes</h2>
  <p>Mix flour, eggs, milk, and a pinch of salt.</p>
</article>`,
 goal:"Copy the article block and add a second article about another recipe.",
 source:"MDN — <article>",
 hint:"Select the whole <article>...</article> block, copy it, paste below, change the content."},

{id:526,title:"Semantic Tags: section",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;section&gt;</code> groups related content under a heading. A page might have multiple sections (Introduction, Features, Pricing, Contact).",
 start:`<section>
  <h2>About Me</h2>
  <p>I'm learning to code.</p>
</section>
<section>
  <h2>My Projects</h2>
  <p>I built Code Ranger.</p>
</section>`,
 goal:"Add a third section called 'Contact' with a paragraph inviting people to reach out.",
 source:"MDN — <section>",
 hint:"Copy the pattern: <section> <h2>Contact</h2> <p>Your text</p> </section>."},

{id:527,title:"Symbols and Entities",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Some characters are special in HTML. Use entities to show them: <code>&amp;lt;</code> for &lt;, <code>&amp;gt;</code> for &gt;, <code>&amp;amp;</code> for &amp;, <code>&amp;copy;</code> for ©.",
 start:`<p>To write a less-than sign, type &amp;lt; like this: &lt;</p>
<p>To write an ampersand, type &amp;amp; like this: &amp;</p>
<p>Copyright symbol: &amp;copy; shows as &copy;</p>`,
 goal:"Add a paragraph that displays a greater-than symbol using &amp;gt;.",
 source:"MDN — Character entity references",
 hint:"<p>Greater than: &amp;gt; shows as ></p>"},

{id:528,title:"Emojis in HTML",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"You can put emoji characters directly into HTML — modern browsers handle them automatically. They work just like any other text.",
 start:`<h1>Welcome 👋</h1>
<p>I love coding 💻 and coffee ☕</p>
<p>Try changing or adding your own!</p>`,
 goal:"Add a paragraph with three emojis that describe your hobbies.",
 source:"web.dev — Emoji and accessibility",
 hint:"<p>I enjoy 🎨 painting and 📚 reading</p> — you can copy emojis from anywhere."},

{id:529,title:"Title Attribute (Tooltips)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"The <code>title</code> attribute creates a tooltip — text that appears when the user hovers over the element. Useful for extra info, but don't rely on it for critical content (mobile users can't hover).",
 start:`<p>Hover over <span title="This is a tooltip!" style="text-decoration:underline;cursor:help">this word</span> to see a tooltip.</p>
<button title="Click to submit your answer">Submit</button>`,
 goal:"Change the button's tooltip text to something more specific.",
 source:"MDN — title attribute",
 hint:"Find title=\"Click to submit your answer\" and change the text inside the quotes."},

{id:530,title:"Class Attribute",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"The <code>class</code> attribute labels elements so CSS can style them in groups. Multiple elements can share the same class. We'll use CSS to color them.",
 start:`<style>
  .highlight { background: #fef08a; padding: 4px; }
</style>
<p>This paragraph has a <span class="highlight">highlighted word</span>.</p>
<p>This paragraph has <span class="highlight">two</span> <span class="highlight">highlights</span>.</p>`,
 goal:"Add a third paragraph with at least one highlighted word using class=\"highlight\".",
 source:"MDN — class attribute",
 hint:"<p>Some text with <span class=\"highlight\">highlight</span>.</p>"},

{id:531,title:"ID Attribute",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"The <code>id</code> attribute is a unique name for a single element. Only ONE element on a page can have a given id. We used ids earlier for label/input pairs.",
 start:`<style>
  #main-title { color: #4338ca; }
</style>
<h1 id="main-title">My Special Title</h1>
<p>The CSS targeted that heading by id.</p>`,
 goal:"Add a paragraph with id=\"intro\" and add a CSS rule #intro { font-style: italic; } inside the <style> tag.",
 source:"MDN — id attribute",
 hint:"Inside <style>, add: #intro { font-style: italic; } — then add <p id=\"intro\">Your text</p>."},

{id:532,title:"Inline Styles",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"The <code>style</code> attribute lets you write CSS directly on an element. It's quick but messy — for one-offs only. Normally CSS lives in a stylesheet (next lesson section).",
 start:`<p style="color:#ef4444">This is red.</p>
<p style="color:#3b82f6">This is blue.</p>
<p style="color:#10b981;font-size:24px">This is big and green.</p>`,
 goal:"Add a fourth paragraph that's purple (#a855f7) and bold using font-weight:bold.",
 source:"MDN — Using inline CSS",
 hint:"<p style=\"color:#a855f7;font-weight:bold\">Your text</p> — separate properties with semicolons."},

{id:533,title:"Audio Player",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"The <code>&lt;audio&gt;</code> tag embeds a sound player. Add <code>controls</code> to show play/pause buttons. The browser handles everything — playback, volume, scrubbing.",
 start:`<audio controls>
  <source src="audio/latin-guitar.mp3" type="audio/mpeg">
  Your browser doesn't support audio.
</audio>
<p>Press play above — a 30-second latin guitar clip will start.</p>`,
 goal:"Add the loop attribute to the audio tag so the clip repeats automatically.",
 source:"MDN — <audio>",
 hint:"Change <audio controls> to <audio controls loop>."},

{id:534,title:"Video Player",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"The <code>&lt;video&gt;</code> tag embeds video. Like audio, add <code>controls</code> for play buttons. You can also set width and height.",
 start:`<video controls width="320">
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Your browser doesn't support video.
</video>`,
 goal:"Add a poster image that shows before the video plays. Use poster=\"https://picsum.photos/320/180\".",
 source:"MDN — <video>",
 hint:"Add the attribute inside the <video> tag: <video controls width=\"320\" poster=\"...\">."},

{id:535,title:"Put It All Together",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"You've learned the basics! Now build a small profile page using everything: a header, paragraphs, a list, an image, and a link. This is the same pattern real websites use.",
 start:`<header style="background:#4338ca;color:white;padding:20px;text-align:center">
  <h1>Hi, I'm [Your Name]</h1>
  <p>Learning to code at Code Ranger</p>
</header>

<main style="padding:20px;max-width:600px;margin:auto">
  <h2>About Me</h2>
  <p>Write a sentence or two about yourself here.</p>

  <h2>Things I Like</h2>
  <ul>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
  </ul>

  <h2>Find Me</h2>
  <p><a href="https://jdbostonbu-ops.github.io/Dev-Play/" target="_blank">My website</a></p>
</main>

<footer style="background:#1f2937;color:white;padding:12px;text-align:center;font-size:14px">
  <p>&copy; 2026 — Built with Code Ranger</p>
</footer>`,
 goal:"Replace every placeholder with your real info. Click Run to see YOUR personal page!",
 source:"MDN — HTML basics + web.dev — Learn HTML",
 hint:"Replace [Your Name], the About text, the three list items, and the link URL. Everything else can stay."},

/* ══ BEGINNER LESSONS — CSS FUNDAMENTALS (536–560) — MDN + web.dev + W3Schools ══ */
// Live CSS preview in iframe (preview:"css") wraps your CSS around a minimal HTML scaffold.
// The preview shows: a heading, a paragraph, a list, and a button. Style those elements!

{id:536,title:"CSS Syntax: selector and property",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"CSS rules have three parts: a <strong>selector</strong> (what to style), a <strong>property</strong> (what aspect), and a <strong>value</strong> (how). The format is <code>selector { property: value; }</code>. Don't forget the semicolon after each value.",
 start:`h1 {
  color: blue;
}`,
 goal:"Add another rule that makes p (paragraph) text red.",
 source:"MDN — CSS syntax",
 hint:"Just add: p { color: red; } on a new line below the existing rule."},

{id:537,title:"Color values",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"CSS accepts colors three ways: by name (<code>red</code>, <code>blue</code>), by hex code (<code>#ef4444</code>), or by RGB (<code>rgb(239, 68, 68)</code>). Hex is most common in real code.",
 start:`h1 { color: tomato; }
p  { color: #4338ca; }
ul { color: rgb(16, 185, 129); }`,
 goal:"Change the h1 color from 'tomato' to the hex value #f59e0b (amber).",
 source:"MDN — CSS color values",
 hint:"Replace 'tomato' with #f59e0b in the h1 rule."},

{id:538,title:"Background color",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>background-color</code> sets the area behind an element. You can also use the shorthand <code>background</code> which handles colors, images, and gradients in one declaration.",
 start:`body {
  background-color: #fef3c7;
}
h1 {
  background-color: #4338ca;
  color: white;
  padding: 10px;
}`,
 goal:"Change the body background to #dbeafe (pale blue).",
 source:"MDN — background-color",
 hint:"Replace #fef3c7 with #dbeafe in the body rule."},

{id:539,title:"Font size",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>font-size</code> controls text size. Common units: <code>px</code> (pixels, fixed), <code>em</code> (relative to parent), <code>rem</code> (relative to root). Beginners can stick with px.",
 start:`h1 { font-size: 48px; }
p  { font-size: 18px; }
ul { font-size: 14px; }`,
 goal:"Make the paragraph (p) text bigger — try 24px instead of 18px.",
 source:"MDN — font-size",
 hint:"Change p font-size from 18px to 24px."},

{id:540,title:"Font family",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>font-family</code> picks the typeface. Always provide a fallback — if the first font isn't available, the browser tries the next one. End with a generic family (serif, sans-serif, monospace).",
 start:`body {
  font-family: 'Georgia', serif;
}
h1 {
  font-family: 'Helvetica', 'Arial', sans-serif;
}`,
 goal:"Change the body font to 'Courier New', monospace.",
 source:"MDN — font-family",
 hint:"Replace 'Georgia', serif with 'Courier New', monospace in the body rule."},

{id:541,title:"Font weight",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>font-weight</code> controls boldness. Common values: <code>normal</code> (400), <code>bold</code> (700), or numbers from 100 (thin) to 900 (heavy).",
 start:`h1 { font-weight: 900; }
p  { font-weight: normal; }
button { font-weight: bold; }`,
 goal:"Make the paragraph text bold instead of normal.",
 source:"MDN — font-weight",
 hint:"Change p font-weight from normal to bold (or 700)."},

{id:542,title:"Text alignment",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>text-align</code> positions text horizontally: <code>left</code> (default), <code>center</code>, <code>right</code>, or <code>justify</code> (stretches both edges).",
 start:`h1 { text-align: center; }
p  { text-align: left; }`,
 goal:"Center the paragraph too — change text-align from left to center.",
 source:"MDN — text-align",
 hint:"In the p rule, change left to center."},

{id:543,title:"Borders",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>border</code> draws a line around an element. Shorthand: <code>border: width style color;</code>. Common styles: <code>solid</code>, <code>dashed</code>, <code>dotted</code>.",
 start:`h1 { border: 2px solid #4338ca; padding: 10px; }
button { border: 3px dashed #f59e0b; }`,
 goal:"Add a dotted border to the paragraph: 1px dotted #10b981.",
 source:"MDN — border",
 hint:"Add a new rule: p { border: 1px dotted #10b981; padding: 8px; }"},

{id:544,title:"Border radius (rounded corners)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>border-radius</code> rounds corners. Use a number with units (e.g., <code>8px</code>) for slight rounding, or <code>50%</code> to make a square element a circle.",
 start:`button {
  border-radius: 8px;
  padding: 10px 20px;
  background: #4338ca;
  color: white;
  border: 0;
}
h1 {
  border-radius: 16px;
  background: #fef3c7;
  padding: 16px;
}`,
 goal:"Change the button's border-radius from 8px to 999px (fully rounded pill shape).",
 source:"MDN — border-radius",
 hint:"In the button rule, change 8px to 999px."},

{id:545,title:"Padding",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>padding</code> adds space INSIDE an element (between content and border). One value applies to all sides. Four values go top, right, bottom, left (clockwise).",
 start:`button {
  padding: 20px;
  background: #4338ca;
  color: white;
  border: 0;
}
h1 {
  padding: 10px 30px;
  background: #fef3c7;
}`,
 goal:"Add padding to the paragraph — 16px on all sides.",
 source:"MDN — padding",
 hint:"Add a new rule: p { padding: 16px; background: #dbeafe; } so you can see it."},

{id:546,title:"Margin",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>margin</code> adds space OUTSIDE an element (pushes other elements away). Same syntax as padding. <code>margin: auto</code> with a fixed width centers horizontally.",
 start:`h1 {
  margin: 40px 0;
  background: #fef3c7;
  padding: 16px;
}
button {
  margin: 10px;
  padding: 10px 20px;
}`,
 goal:"Center the h1 by giving it width:300px and margin:0 auto.",
 source:"MDN — margin",
 hint:"In the h1 rule, add: width: 300px; margin: 0 auto;"},

{id:547,title:"Width and height",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>width</code> and <code>height</code> size an element. Use units like <code>px</code>, <code>%</code> (of parent), or <code>vh</code>/<code>vw</code> (% of viewport).",
 start:`h1 {
  width: 200px;
  height: 80px;
  background: #4338ca;
  color: white;
  padding: 10px;
}`,
 goal:"Make the h1 take up half the screen width — change width from 200px to 50%.",
 source:"MDN — width and height",
 hint:"Replace width: 200px with width: 50%."},

{id:548,title:"Box model",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"Every element is a box with 4 layers: content, padding (inside), border, margin (outside). <code>box-sizing: border-box</code> makes width INCLUDE padding+border (more intuitive).",
 start:`* { box-sizing: border-box; }

h1 {
  width: 300px;
  padding: 20px;
  border: 4px solid #4338ca;
  background: #fef3c7;
}`,
 goal:"Add a margin of 20px to the h1 to push it away from the page edge.",
 source:"MDN — box-sizing + The box model",
 hint:"In the h1 rule, add: margin: 20px;"},

{id:549,title:"Display: block vs inline",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>display: block</code> takes a full line (like h1, p, div). <code>display: inline</code> sits in a line with other content (like span, a). <code>inline-block</code> is the best of both.",
 start:`button {
  display: block;
  margin: 10px 0;
  padding: 10px;
  background: #4338ca;
  color: white;
  border: 0;
}`,
 goal:"Change display from block to inline-block — buttons will sit side by side instead of stacked.",
 source:"MDN — display",
 hint:"Replace display: block with display: inline-block."},

{id:550,title:"Hiding elements",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>display: none</code> removes an element completely (no space). <code>visibility: hidden</code> hides but keeps the space. Different uses!",
 start:`h1 { display: none; }
p  { visibility: hidden; }
button { display: inline-block; padding: 10px; }`,
 goal:"Make the h1 visible again by removing or commenting out the h1 rule.",
 source:"MDN — display: none",
 hint:"Delete the line h1 { display: none; } or change to display: block."},

{id:551,title:"Flexbox basics",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"Flexbox arranges children in a row or column. Set <code>display: flex</code> on the parent. Children automatically lay out side by side. Use <code>gap</code> for spacing.",
 start:`body {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #fef3c7;
}`,
 goal:"Add flex-direction: column to body to stack children vertically instead of side by side.",
 source:"MDN — Flexbox + web.dev — Flexbox",
 hint:"In the body rule, add: flex-direction: column;"},

{id:552,title:"Flexbox: justify and align",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>justify-content</code> aligns along the main axis (horizontal for row). <code>align-items</code> aligns the cross axis (vertical for row). <code>center</code> is the most common value for both.",
 start:`body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: #dbeafe;
  gap: 20px;
}`,
 goal:"Change justify-content from center to space-between — items spread to opposite ends.",
 source:"MDN — justify-content",
 hint:"Replace justify-content: center with justify-content: space-between."},

{id:553,title:"CSS Grid basics",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"Grid creates two-dimensional layouts. <code>grid-template-columns</code> defines column tracks. Use <code>fr</code> units for fractional widths or <code>repeat()</code> for evenly-sized columns.",
 start:`body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 20px;
  background: #fef3c7;
}`,
 goal:"Change grid-template-columns to 3 equal columns: repeat(3, 1fr).",
 source:"MDN — CSS Grid + web.dev — Grid",
 hint:"Replace 1fr 1fr with repeat(3, 1fr)."},

{id:554,title:"Hover effect",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"The <code>:hover</code> pseudo-class targets an element when the mouse is over it. Use it to make buttons and links feel interactive. Doesn't work on touch devices — provide a tap state too.",
 start:`button {
  background: #4338ca;
  color: white;
  padding: 10px 20px;
  border: 0;
  cursor: pointer;
}
button:hover {
  background: #6366f1;
}`,
 goal:"Add a hover style for the h1 — make it turn orange (#f59e0b) when hovered.",
 source:"MDN — :hover",
 hint:"Add a new rule: h1:hover { color: #f59e0b; }"},

{id:555,title:"Transitions (smooth changes)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>transition</code> animates a CSS change over time. Format: <code>transition: property duration timing;</code>. Hover over the button to see it grow smoothly.",
 start:`button {
  background: #4338ca;
  color: white;
  padding: 10px 20px;
  border: 0;
  cursor: pointer;
  transition: transform 0.3s ease;
}
button:hover {
  transform: scale(1.1);
}`,
 goal:"Change transition duration from 0.3s to 1s for a slower effect.",
 source:"MDN — transition",
 hint:"In the button rule, change transform 0.3s to transform 1s."},

{id:556,title:"Box shadow",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>box-shadow</code> adds depth. Format: <code>box-shadow: x-offset y-offset blur color;</code>. Use it sparingly — too many shadows feel cluttered.",
 start:`h1 {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}`,
 goal:"Make the shadow more dramatic — change the y-offset to 12px and blur to 30px.",
 source:"MDN — box-shadow",
 hint:"Change 0 4px 12px to 0 12px 30px in the box-shadow value."},

{id:557,title:"CSS variables",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"Define reusable values with custom properties. Declare in <code>:root</code>, use with <code>var()</code>. Change one variable, update everywhere — like a theme switcher.",
 start:`:root {
  --brand: #4338ca;
  --accent: #f59e0b;
}
h1 { color: var(--brand); }
button {
  background: var(--accent);
  color: white;
  padding: 10px;
  border: 0;
}`,
 goal:"Change --brand from #4338ca to #10b981 — every element using var(--brand) updates automatically.",
 source:"MDN — CSS Custom Properties",
 hint:"In :root, replace #4338ca with #10b981."},

{id:558,title:"Pseudo-classes: first-child, last-child",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>:first-child</code> and <code>:last-child</code> target the first or last child of a parent. Useful for list styling without adding extra classes.",
 start:`li {
  padding: 8px;
  background: #dbeafe;
  margin: 4px 0;
}
li:first-child {
  background: #fef3c7;
  font-weight: bold;
}
li:last-child {
  background: #fee2e2;
}`,
 goal:"Add a rule for li:nth-child(2) that makes the second item green (#d1fae5).",
 source:"MDN — :first-child, :nth-child",
 hint:"Add: li:nth-child(2) { background: #d1fae5; }"},

{id:559,title:"Position absolute",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>position: absolute</code> takes an element out of normal flow and positions it relative to its closest positioned ancestor. Use <code>top</code>/<code>right</code>/<code>bottom</code>/<code>left</code> to place it.",
 start:`body { position: relative; min-height: 300px; }
h1 {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #4338ca;
  color: white;
  padding: 10px;
}`,
 goal:"Move the h1 to the bottom-left — change top to bottom and right to left.",
 source:"MDN — position",
 hint:"Replace 'top: 20px' with 'bottom: 20px' and 'right: 20px' with 'left: 20px'."},

{id:560,title:"Put CSS together: a card",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"You've learned the essentials! Now combine them to style a simple card. Try changing values and see how each property affects the design.",
 start:`body {
  background: #f3f4f6;
  font-family: 'Helvetica', sans-serif;
  padding: 40px;
}
h1 {
  background: white;
  color: #4338ca;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  border-left: 6px solid #f59e0b;
}
p {
  background: white;
  padding: 16px 24px;
  border-radius: 8px;
  color: #4b5563;
  margin-top: 16px;
}
button {
  background: #4338ca;
  color: white;
  border: 0;
  padding: 12px 24px;
  border-radius: 999px;
  margin-top: 16px;
  cursor: pointer;
  transition: transform 0.2s ease;
}
button:hover { transform: scale(1.05); }`,
 goal:"Make it yours — change the accent color (#4338ca) to your favorite hex code and the border-left color (#f59e0b) to a contrasting one.",
 source:"MDN — CSS basics + web.dev — Learn CSS",
 hint:"Find every #4338ca and replace with your color. Find #f59e0b and replace with a contrasting one."},

/* ══ BEGINNER LESSONS — JS FUNDAMENTALS (561–585) — MDN + web.dev ══ */
// Live JS preview: console.log output appears in the iframe's #output div.
// All starter code uses let/const (no var) per founder code-quality standards.

{id:561,title:"console.log: your first JS",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>console.log()</code> prints things. It's how programmers check their work and debug. Whatever you put inside the parentheses shows up in the output below.",
 start:`console.log("Hello, world!");
console.log("My first JavaScript program.");`,
 goal:"Add a third console.log line that prints your name.",
 source:"MDN — console.log",
 hint:"Add: console.log(\"Your Name Here\"); on a new line."},

{id:562,title:"Variables: let",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>let</code> creates a variable — a named box that holds a value. The value CAN change later. Use let when the value will need to update.",
 start:`let greeting = "Hello";
console.log(greeting);

greeting = "Goodbye";
console.log(greeting);`,
 goal:"Add a let variable called 'name' set to your name, then console.log it.",
 source:"MDN — let",
 hint:"let name = \"Maria\"; then console.log(name);"},

{id:563,title:"Variables: const",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>const</code> creates a constant — a variable that CAN'T be reassigned. Use const for values that never change. Most variables should be const. (We never use <code>var</code> in this course — let and const are safer.)",
 start:`const PI = 3.14159;
const greeting = "Hello!";

console.log(PI);
console.log(greeting);`,
 goal:"Add a const called 'year' set to 2026 and log it.",
 source:"MDN — const",
 hint:"const year = 2026; then console.log(year);"},

{id:564,title:"Strings",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Strings are text wrapped in quotes — either <code>'single'</code> or <code>\"double\"</code>. Use the + operator to join (concatenate) them.",
 start:`const first = "Code";
const second = "Ranger";
const full = first + " " + second;
console.log(full);`,
 goal:"Change the strings to your first and last name, then log the full name.",
 source:"MDN — String",
 hint:"Replace \"Code\" with your first name and \"Ranger\" with your last name."},

{id:565,title:"Template literals",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Template literals use backticks (<code>\`</code>) instead of quotes. They let you embed variables with <code>${}</code>. Cleaner than +.",
 start:`const name = "Jacqueline";
const age = 28;
const message = \`Hi, I'm \${name} and I'm \${age}.\`;
console.log(message);`,
 goal:"Change the name and age, then add a second template literal sentence using both variables.",
 source:"MDN — Template literals",
 hint:"Add: console.log(\`Next year, \${name} will be \${age + 1}.\`);"},

{id:566,title:"Numbers and math",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"JavaScript handles numbers with the usual operators: <code>+</code> add, <code>-</code> subtract, <code>*</code> multiply, <code>/</code> divide, <code>%</code> remainder.",
 start:`const a = 10;
const b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);`,
 goal:"Add a line that calculates and logs a squared (a times itself).",
 source:"MDN — Arithmetic operators",
 hint:"console.log(a * a);"},

{id:567,title:"Booleans and comparisons",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"A boolean is <code>true</code> or <code>false</code>. Comparisons return booleans. Use <code>===</code> (strict equal) — never <code>==</code> (loose equal) — to compare values.",
 start:`const age = 18;
console.log(age === 18);
console.log(age > 21);
console.log(age >= 18);
console.log(age !== 16);`,
 goal:"Add a line that checks if age is less than 100, log the result.",
 source:"MDN — Comparison operators",
 hint:"console.log(age < 100);"},

{id:568,title:"typeof",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>typeof</code> tells you what kind of value something is — \"string\", \"number\", \"boolean\", etc.",
 start:`console.log(typeof "hello");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);`,
 goal:"Add a const called 'list' set to an empty array [] and log typeof list. (Quirk: arrays log as 'object'.)",
 source:"MDN — typeof",
 hint:"const list = []; then console.log(typeof list);"},

{id:569,title:"If statements",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>if</code> runs code only when a condition is true. Add <code>else</code> for a fallback. Conditions go in parentheses, code goes in braces.",
 start:`const age = 18;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("Not yet — keep waiting.");
}`,
 goal:"Change age to 15, run again, and see the other branch run.",
 source:"MDN — if...else",
 hint:"Change 18 to 15 in const age = 18."},

{id:570,title:"Else if",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>else if</code> chains multiple conditions. The first one that's true wins. Use it instead of nested ifs.",
 start:`const grade = 85;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("Try again");
}`,
 goal:"Change grade to 65 and run again to see the \"Try again\" branch.",
 source:"MDN — if...else if",
 hint:"Change const grade = 85 to const grade = 65."},

{id:571,title:"For loop",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"A <code>for</code> loop repeats code. Three parts in the parentheses: start, condition (when to stop), and step (what changes each time).",
 start:`for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}`,
 goal:"Change the loop to count from 1 to 10 instead of 1 to 5.",
 source:"MDN — for loop",
 hint:"Change i <= 5 to i <= 10."},

{id:572,title:"While loop",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"A <code>while</code> loop repeats AS LONG AS the condition is true. Make sure something inside the loop eventually makes the condition false — or it loops forever!",
 start:`let count = 0;
while (count < 3) {
  console.log("count is " + count);
  count = count + 1;
}`,
 goal:"Change the condition from count < 3 to count < 7.",
 source:"MDN — while loop",
 hint:"Change count < 3 to count < 7."},

{id:573,title:"Arrays",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"An array is an ordered list of values, wrapped in <code>[]</code>. Access items by index, starting at 0.",
 start:`const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log("Total: " + fruits.length);`,
 goal:"Add a fourth fruit to the array. The length should now be 4.",
 source:"MDN — Array",
 hint:"Add a comma and a new string inside the brackets, like: \"apple\", \"banana\", \"cherry\", \"date\"."},

{id:574,title:"Array push and pop",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>.push()</code> adds an item to the end. <code>.pop()</code> removes the last item and returns it. Both modify the original array.",
 start:`const colors = ["red", "green"];
console.log(colors);

colors.push("blue");
console.log(colors);

const removed = colors.pop();
console.log("Removed: " + removed);
console.log(colors);`,
 goal:"Add a colors.push(\"yellow\") line after the pop, then log colors.",
 source:"MDN — Array.push and Array.pop",
 hint:"After the existing pop, add: colors.push(\"yellow\"); console.log(colors);"},

{id:575,title:"Array forEach",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>.forEach()</code> runs a function for each item in an array. Cleaner than a for loop when you just need to do something with each item.",
 start:`const names = ["Maria", "Olga", "Rosita"];

names.forEach((name) => {
  console.log("Hello, " + name + "!");
});`,
 goal:"Add your own name to the array and run again.",
 source:"MDN — Array.forEach",
 hint:"Add a comma and your name in quotes inside the brackets."},

{id:576,title:"Array map",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>.map()</code> creates a NEW array by transforming each item. Use it when you want to convert one list into another (e.g., numbers to strings).",
 start:`const nums = [1, 2, 3, 4, 5];
const doubled = nums.map((n) => n * 2);
console.log("Original:", nums);
console.log("Doubled:", doubled);`,
 goal:"Change map to triple each number (n * 3) instead of doubling.",
 source:"MDN — Array.map",
 hint:"Change n * 2 to n * 3."},

{id:577,title:"Objects",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Objects group related values with named keys. Access with <code>.property</code> or <code>[\"property\"]</code>.",
 start:`const person = {
  name: "Maria",
  age: 30,
  city: "New London"
};

console.log(person.name);
console.log(person.age);
console.log(person.city);`,
 goal:"Add a fourth property — favoriteColor — and log it.",
 source:"MDN — Object",
 hint:"Inside the braces, add a comma after \"New London\" and then: favoriteColor: \"blue\". Then console.log(person.favoriteColor);"},

{id:578,title:"Functions: declaration",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"A function is reusable code with a name. Call it by name + parentheses. <code>return</code> sends a value back to where the function was called.",
 start:`function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
console.log(add(10, 25));
console.log(add(100, -50));`,
 goal:"Add a new function called 'multiply' that returns a * b. Test it with multiply(4, 5).",
 source:"MDN — Functions",
 hint:"function multiply(a, b) { return a * b; } then console.log(multiply(4, 5));"},

{id:579,title:"Arrow functions",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Arrow functions are a shorter syntax. <code>const fn = (a, b) =&gt; a + b;</code> is the same as a regular function that returns a + b. Common in modern JS.",
 start:`const greet = (name) => "Hello, " + name + "!";
const square = (n) => n * n;

console.log(greet("Maria"));
console.log(square(7));`,
 goal:"Add a new arrow function called 'cube' that returns n * n * n. Test with cube(3).",
 source:"MDN — Arrow functions",
 hint:"const cube = (n) => n * n * n; then console.log(cube(3));"},

{id:580,title:"Closures",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"A <strong>closure</strong> is a function that REMEMBERS variables from where it was created — even after that outer function returns. This is one of JS's most powerful features. Try clicking Run multiple times to see the counter keep going up — it remembers its count between calls.",
 start:`function makeCounter() {
  let count = 0;
  return () => {
    count = count + 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());`,
 goal:"Make a second counter from the same makeCounter — it starts at 0 separately. Log it twice.",
 source:"MDN — Closures",
 hint:"After the existing code: const counter2 = makeCounter(); console.log(counter2()); console.log(counter2());"},

{id:581,title:"Closure-based private state",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Closures can hide variables from outside code — a way to make \"private\" state. The outer function returns an object with methods that have access to the variable. Nothing else does.",
 start:`function makeWallet() {
  let balance = 0;
  return {
    deposit: (amount) => { balance = balance + amount; return balance; },
    withdraw: (amount) => { balance = balance - amount; return balance; },
    check: () => balance
  };
}

const wallet = makeWallet();
console.log(wallet.deposit(100));
console.log(wallet.deposit(50));
console.log(wallet.withdraw(30));
console.log("Balance:", wallet.check());`,
 goal:"Try to access wallet.balance directly with console.log(wallet.balance) — see how it returns undefined (the variable is hidden by the closure).",
 source:"MDN — Closures + web.dev — JavaScript",
 hint:"Add: console.log(\"Direct access:\", wallet.balance); — you'll see 'undefined' because balance is private."},

{id:582,title:"DOM: textContent (safe text)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>document.querySelector</code> finds an element. <code>.textContent</code> sets its text safely. Always use textContent (never innerHTML) when inserting user input — it prevents XSS attacks.",
 start:`document.body.innerHTML = '<h1 id="title">Click Run to change me</h1>';

const title = document.querySelector("#title");
title.textContent = "Updated by JavaScript!";`,
 goal:"Change the textContent to your own message.",
 source:"MDN — Node.textContent + web.dev — Trusted Types",
 hint:"Change \"Updated by JavaScript!\" to any text you like."},

{id:583,title:"DOM: addEventListener (click)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>addEventListener</code> runs a function when something happens — like a click. Use a closure-based function so each event has its own state if needed.",
 start:`document.body.innerHTML = '<button id="btn">Click me</button><p id="msg">Waiting...</p>';

const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");
let clicks = 0;

btn.addEventListener("click", () => {
  clicks = clicks + 1;
  msg.textContent = "Clicked " + clicks + " times";
});`,
 goal:"After clicking the button a few times, change the initial message from \"Waiting...\" to a custom welcome.",
 source:"MDN — EventTarget.addEventListener",
 hint:"Find msg.textContent = ... no wait — find the innerHTML line and change \"Waiting...\" to your welcome."},

{id:584,title:"DOM: form input with label",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Read input values with <code>.value</code>. Every <code>&lt;label&gt;</code> uses <code>for</code> matching the input's <code>id</code> — required for accessibility. Use textContent when displaying the user's input to stay safe.",
 start:`document.body.innerHTML = \`
  <label for="nameField">Your name:</label>
  <input type="text" id="nameField" placeholder="Type something">
  <button id="greetBtn">Greet me</button>
  <p id="greeting"></p>
\`;

const nameField = document.querySelector("#nameField");
const greetBtn = document.querySelector("#greetBtn");
const greeting = document.querySelector("#greeting");

greetBtn.addEventListener("click", () => {
  const userName = nameField.value;
  greeting.textContent = "Hello, " + userName + "!";
});`,
 goal:"Type your name, click Greet me, and watch the greeting appear. Try changing the greeting text in the code.",
 source:"MDN — HTMLInputElement.value",
 hint:"Change \"Hello, \" + userName + \"!\" to a different greeting like \"Welcome, \" + userName + \"!\""},

{id:585,title:"Put JS together: a counter app",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"You've learned the essentials! Now combine them: a counter with three buttons. Uses closures to encapsulate state, textContent to display safely, and addEventListener for clicks.",
 start:`document.body.innerHTML = \`
  <h2 id="display" style="font-size:48px;text-align:center;color:#4338ca">0</h2>
  <div style="text-align:center">
    <button id="dec">−</button>
    <button id="reset">Reset</button>
    <button id="inc">+</button>
  </div>
\`;

const makeCounter = () => {
  let count = 0;
  return {
    inc: () => { count = count + 1; return count; },
    dec: () => { count = count - 1; return count; },
    reset: () => { count = 0; return count; }
  };
};

const counter = makeCounter();
const display = document.querySelector("#display");

document.querySelector("#inc").addEventListener("click", () => {
  display.textContent = counter.inc();
});
document.querySelector("#dec").addEventListener("click", () => {
  display.textContent = counter.dec();
});
document.querySelector("#reset").addEventListener("click", () => {
  display.textContent = counter.reset();
});`,
 goal:"Make it yours — change the display color from #4338ca to a different hex code. Try clicking the buttons.",
 source:"MDN — DOM events + Closures + web.dev",
 hint:"Find color:#4338ca and change it to color:#10b981 or any hex you like."},

/* ══ JS SYNTAX LESSONS (586–610) — w3schools JS Syntax curriculum ══ */
// Deeper syntax coverage: literals, statements, comments, keywords, operators, identifiers.
// All examples use let/const (NEVER var) per founder code quality standards.

{id:586,title:"JS Syntax: literals (numbers)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"A <strong>literal</strong> is a fixed value you write directly in code. Number literals can have decimals or not. Both <code>10.50</code> and <code>1001</code> are valid number literals.",
 start:`console.log(10.50);
console.log(1001);
console.log(3.14159);`,
 goal:"Add a fourth console.log with your favorite number — try one with decimals and one without.",
 source:"w3schools — JS Syntax · Numbers",
 hint:"console.log(42); or console.log(99.99);"},

{id:587,title:"JS Syntax: literals (strings)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"A string literal is text wrapped in quotes. You can use double quotes <code>\"John Doe\"</code> OR single quotes <code>'John Doe'</code>. Just be consistent — pick one style and stick with it.",
 start:`console.log("John Doe");
console.log('Jane Smith');
console.log("Both work the same!");`,
 goal:"Add two more string literals — one with double quotes, one with single quotes. Try your own name.",
 source:"w3schools — JS Syntax · Strings",
 hint:"console.log(\"Your Name\"); and console.log('Your City');"},

{id:588,title:"JS Syntax: statements end with semicolons",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"A <strong>statement</strong> is a complete instruction. Each statement ends with a semicolon <code>;</code>. JavaScript can sometimes guess where statements end, but using semicolons makes your code clearer and safer.",
 start:`const a = 5;
const b = 10;
const sum = a + b;
console.log(sum);`,
 goal:"Add two more statements — declare a const called 'difference' equal to a - b, then log it.",
 source:"w3schools — JS Statements",
 hint:"const difference = a - b; then console.log(difference);"},

{id:589,title:"JS Syntax: line comments",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Comments are notes for humans — JavaScript ignores them. A <strong>line comment</strong> starts with <code>//</code> and goes to the end of the line. Use comments to explain WHY, not WHAT (the code already shows what).",
 start:`// This is a single-line comment
const price = 19.99; // The price in dollars

// The next line calculates tax (6% in CT)
const tax = price * 0.06;
console.log("Tax: " + tax);`,
 goal:"Add a line comment above the console.log explaining what it does.",
 source:"w3schools — JS Comments",
 hint:"Add a new line above console.log starting with // — like: // Print the tax amount"},

{id:590,title:"JS Syntax: block comments",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"A <strong>block comment</strong> spans multiple lines. It starts with <code>/*</code> and ends with <code>*/</code>. Use block comments for longer explanations at the top of files or functions.",
 start:`/*
  This program calculates the total cost
  including a 6% tax (Connecticut sales tax).
  Author: Your Name
  Date: 2026
*/

const subtotal = 50;
const total = subtotal * 1.06;
console.log("Total: $" + total.toFixed(2));`,
 goal:"Change the block comment to describe a different calculation, then update the math accordingly.",
 source:"w3schools — JS Comments",
 hint:"Edit the text between /* and */ — the code below doesn't have to match exactly, just update the math if you change the description."},

{id:591,title:"JS Syntax: case sensitivity",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"JavaScript is <strong>case-sensitive</strong>. <code>myName</code>, <code>MyName</code>, and <code>MYNAME</code> are three DIFFERENT variables. The convention is camelCase — lowercase first word, capital first letter of each later word.",
 start:`const myName = "Maria";
const MyName = "Olga";
const MYNAME = "Rosita";

console.log(myName);
console.log(MyName);
console.log(MYNAME);`,
 goal:"Add a fourth variable using camelCase: 'firstName' set to your name, and log it.",
 source:"w3schools — JS Syntax",
 hint:"const firstName = \"YourName\"; then console.log(firstName);"},

{id:592,title:"JS Syntax: identifiers",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"An <strong>identifier</strong> is a name for a variable, function, or other thing. Rules: must start with a letter, $, or _. Can include letters, numbers, $, or _. Cannot start with a digit. Use descriptive names.",
 start:`const score = 100;
const _privateValue = "hidden";
const $dollarPrefix = "valid too";
const userAge2 = 25;

console.log(score, _privateValue, $dollarPrefix, userAge2);`,
 goal:"Add a const called 'firstName' (a valid identifier) set to your name, log it.",
 source:"w3schools — JS Syntax · Identifiers",
 hint:"const firstName = \"Maria\"; then console.log(firstName);"},

{id:593,title:"JS Syntax: assignment operator",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"The <code>=</code> sign is the <strong>assignment operator</strong> — it puts a value into a variable. It is NOT equality (that's <code>===</code>). Read <code>x = 5</code> as 'put 5 into x'.",
 start:`let x = 5;
console.log(x);

x = 10;
console.log(x);

x = x + 1;
console.log(x);`,
 goal:"Add a line that reassigns x to 100, then log it.",
 source:"w3schools — JS Operators",
 hint:"x = 100; then console.log(x);"},

{id:594,title:"JS Syntax: arithmetic operators",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"JavaScript uses standard math: <code>+</code> add, <code>-</code> subtract, <code>*</code> multiply, <code>/</code> divide, <code>%</code> remainder (modulo), <code>**</code> power.",
 start:`console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(10 ** 2);`,
 goal:"Add a line that calculates 2 to the power of 10 (2**10).",
 source:"w3schools — JS Arithmetic",
 hint:"console.log(2 ** 10);"},

{id:595,title:"JS Syntax: shorthand assignment",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Shorthand operators combine math and assignment: <code>x += 5</code> means <code>x = x + 5</code>. Works with <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code>.",
 start:`let counter = 0;
counter += 10;
console.log(counter);

counter -= 3;
console.log(counter);

counter *= 2;
console.log(counter);`,
 goal:"Add a line that divides counter in half (counter /= 2), then log it.",
 source:"w3schools — JS Assignment",
 hint:"counter /= 2; then console.log(counter);"},

{id:596,title:"JS Syntax: comparison operators",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Comparison operators return true or false: <code>===</code> strict equal, <code>!==</code> strict not equal, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>. <strong>Always use <code>===</code></strong>, never <code>==</code> — strict comparison is safer.",
 start:`console.log(5 === 5);
console.log(5 === "5");
console.log(5 !== 10);
console.log(5 > 3);
console.log(5 <= 5);`,
 goal:"Add a comparison: is 100 strictly equal to 100? Log the result.",
 source:"w3schools — JS Comparisons",
 hint:"console.log(100 === 100);"},

{id:597,title:"JS Syntax: logical operators",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Combine booleans with: <code>&amp;&amp;</code> AND (both must be true), <code>||</code> OR (at least one true), <code>!</code> NOT (flip the value).",
 start:`const age = 25;
const hasLicense = true;

console.log(age >= 18 && hasLicense);
console.log(age > 100 || hasLicense);
console.log(!hasLicense);`,
 goal:"Add a check: is age between 18 and 65 (inclusive)? Use && with two conditions.",
 source:"w3schools — JS Logical Operators",
 hint:"console.log(age >= 18 && age <= 65);"},

{id:598,title:"JS Syntax: string concatenation with +",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"The <code>+</code> operator joins (concatenates) strings. When + is used with at least one string, JavaScript treats everything as a string.",
 start:`const first = "Code";
const second = "Ranger";

console.log(first + " " + second);
console.log("Score: " + 100);
console.log("1" + 1);
console.log(1 + "1");`,
 goal:"Add a line that joins three strings: \"Hello\", a space, and your name.",
 source:"w3schools — JS String Operators",
 hint:"console.log(\"Hello\" + \" \" + \"Maria\");"},

{id:599,title:"JS Syntax: typeof operator",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>typeof</code> tells you what kind of value something is. Returns a string. The six basic types are: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>undefined</code>, <code>object</code>, <code>function</code>.",
 start:`console.log(typeof "hello");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);`,
 goal:"Add a line: typeof a function. Define const fn = () => {} and log typeof fn.",
 source:"w3schools — JS typeof",
 hint:"const fn = () => {}; then console.log(typeof fn);"},

{id:600,title:"JS Syntax: declaring with let",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>let</code> declares a variable whose value CAN change. The value lives in the block where you declare it. Use let when the variable will be reassigned.",
 start:`let count = 0;
console.log(count);

count = count + 1;
console.log(count);

count = 100;
console.log(count);`,
 goal:"Declare a new let variable called 'name', log it, change its value, log again.",
 source:"w3schools — JS Let",
 hint:"let name = \"Maria\"; console.log(name); name = \"Olga\"; console.log(name);"},

{id:601,title:"JS Syntax: declaring with const",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>const</code> declares a variable that CANNOT be reassigned. Default to const — only use let when you need to change the value. <strong>Never use <code>var</code></strong> — it's the old way and has confusing rules.",
 start:`const PI = 3.14159;
const APP_NAME = "Code Ranger";
const MAX_SCORE = 100;

console.log(PI);
console.log(APP_NAME);
console.log(MAX_SCORE);`,
 goal:"Add a const for your favorite color, then log it.",
 source:"w3schools — JS Const",
 hint:"const favoriteColor = \"indigo\"; then console.log(favoriteColor);"},

{id:602,title:"JS Syntax: const can't be reassigned",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Try to reassign a const and you'll get an error. This is GOOD — it catches bugs where you accidentally changed something you didn't mean to.",
 start:`const greeting = "Hello";
console.log(greeting);

// Uncomment this line to see the error:
// greeting = "Goodbye";

// This works fine:
let mood = "happy";
mood = "excited";
console.log(mood);`,
 goal:"Uncomment the // greeting = \"Goodbye\" line and run. You'll see a TypeError. Re-comment it to fix.",
 source:"w3schools — JS Const",
 hint:"Delete the // in front of greeting = \"Goodbye\"; — then run. After seeing the error, add the // back."},

{id:603,title:"JS Syntax: types overview",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"JavaScript has primitives (string, number, boolean, undefined, null, bigint, symbol) and objects (object, array, function). Each value has a type — sometimes obvious, sometimes surprising.",
 start:`console.log(typeof "hello");
console.log(typeof 42);
console.log(typeof 3.14);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof [1, 2, 3]);`,
 goal:"Notice: typeof null returns 'object' (a famous JS quirk!). Add typeof of an empty string \"\" and see what it returns.",
 source:"w3schools — JS Data Types",
 hint:"console.log(typeof \"\"); — the answer is 'string' even though the string is empty."},

{id:604,title:"JS Syntax: number operations",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Numbers in JavaScript are all the same type (no separate int/float). Special values: <code>Infinity</code>, <code>-Infinity</code>, and <code>NaN</code> (Not a Number — from invalid math).",
 start:`console.log(10 / 0);
console.log(-10 / 0);
console.log("hello" * 2);

const x = 3;
console.log(Number.isNaN(x));
console.log(Number.isNaN("text" * 1));`,
 goal:"Add a line that computes 0/0 and logs it. You'll see NaN.",
 source:"w3schools — JS Numbers",
 hint:"console.log(0 / 0);"},

{id:605,title:"JS Syntax: keywords are reserved",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<strong>Keywords</strong> are words with special meaning in JS — like <code>let</code>, <code>const</code>, <code>if</code>, <code>function</code>, <code>return</code>. You can't use them as variable names — JS will throw an error.",
 start:`// These all work as variable names:
const score = 100;
const userName = "Maria";
const isReady = true;

// These would NOT work (commented out so the file runs):
// const let = 5;     // ❌ 'let' is reserved
// const if = "yes";  // ❌ 'if' is reserved
// const return = 1;  // ❌ 'return' is reserved

console.log(score, userName, isReady);`,
 goal:"Uncomment one of the bad lines (delete the //), run, and see the error. Then put the // back.",
 source:"w3schools — JS Reserved Words",
 hint:"Try deleting the // in front of const let = 5; — run and see SyntaxError. Then restore the //."},

{id:606,title:"JS Syntax: identifiers can't start with numbers",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Identifiers must start with a letter, <code>$</code>, or <code>_</code>. They CAN contain numbers, just not at the start. <code>userAge2</code> is valid; <code>2userAge</code> is not.",
 start:`// Valid identifiers:
const age2 = 25;
const _private = "hidden";
const $element = "valid";
const firstName = "Maria";

console.log(age2, _private, $element, firstName);

// Invalid (would error if uncommented):
// const 2age = 25;       // ❌ starts with number
// const my-name = "x";   // ❌ hyphens not allowed
// const my name = "x";   // ❌ spaces not allowed`,
 goal:"Try declaring a variable with a hyphen (uncomment the my-name line), see the error, then re-comment it.",
 source:"w3schools — JS Identifiers",
 hint:"Delete the // in front of const my-name. Run, see SyntaxError, restore the //."},

{id:607,title:"JS Syntax: whitespace doesn't matter (mostly)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"JavaScript ignores extra spaces, tabs, and blank lines. Both versions below produce the same result. Use whitespace generously to make code readable.",
 start:`// Compact (still valid):
const x=5;const y=10;console.log(x+y);

// Readable (preferred):
const a = 5;
const b = 10;
const total = a + b;

console.log(total);`,
 goal:"Reformat the compact line into three readable lines like the preferred version.",
 source:"w3schools — JS Syntax",
 hint:"Split const x=5;const y=10;console.log(x+y); into three lines, with spaces around =."},

{id:608,title:"JS Syntax: dot notation for object properties",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Access an object's properties with dot notation: <code>object.property</code>. The dot is the operator that says 'look inside this object for this key'.",
 start:`const user = {
  name: "Maria",
  age: 30,
  city: "New London"
};

console.log(user.name);
console.log(user.age);
console.log(user.city);`,
 goal:"Add a new property to the user object — a string called 'role' — then log user.role.",
 source:"w3schools — JS Object Properties",
 hint:"Inside the braces add: , role: \"Developer\" — then console.log(user.role);"},

{id:609,title:"JS Syntax: bracket notation",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"You can also access object properties with bracket notation: <code>object[\"property\"]</code>. Bracket notation lets you use a variable as the key — useful when the property name is dynamic.",
 start:`const colors = {
  primary: "#4338ca",
  accent: "#f59e0b",
  danger: "#ef4444"
};

console.log(colors["primary"]);
console.log(colors["accent"]);

const which = "danger";
console.log(colors[which]);`,
 goal:"Use bracket notation to access the 'accent' color via a variable. Set a const called 'pick' to \"accent\" and log colors[pick].",
 source:"w3schools — JS Object Properties",
 hint:"const pick = \"accent\"; then console.log(colors[pick]);"},

{id:610,title:"JS Syntax: putting it all together",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"You've covered the core syntax! Here's a small program that uses literals, comments, variables (let and const), operators, comparisons, and string concatenation.",
 start:`/*
  Simple grade calculator
  Uses everything we learned in this section
*/

// Score literals (numbers)
const score1 = 92;
const score2 = 85;
const score3 = 78;

// Calculate average
const average = (score1 + score2 + score3) / 3;

// Assign a letter grade using comparisons
let grade;
if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else {
  grade = "Needs work";
}

// Use string concatenation in the output
console.log("Average: " + average.toFixed(1));
console.log("Grade: " + grade);`,
 goal:"Change the three scores to your own numbers and see the grade update.",
 source:"w3schools — JS Syntax (all sections combined)",
 hint:"Change 92, 85, and 78 to your own test scores. Try low values to see the \"Needs work\" branch."},

/* ══ BEGINNER LESSONS — HTML EXTENDED (611–630) — MDN + W3Schools + web.dev ══ */
// Run-and-observe lessons. No multiple choice. Continues from 501-535 series.
// Lessons added May 17, 2026. All constraints honored: labels use for=, let not var, textContent for user input.

{id:611,title:"HTML: Favicon (site icon)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"A <strong>favicon</strong> is the small icon that appears in browser tabs. Link one with <code>&lt;link rel=\"icon\"&gt;</code> inside the <code>&lt;head&gt;</code>. Modern sites use SVG or PNG.",
 start:`<!DOCTYPE html>
<html>
<head>
  <title>My Site</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><circle cx='8' cy='8' r='7' fill='%23a855f7'/></svg>">
</head>
<body>
  <h1>Check the browser tab!</h1>
  <p>The purple circle is the favicon.</p>
</body>
</html>`,
 goal:"Change the favicon color from %23a855f7 (purple) to %2310b981 (green) or %23ef4444 (red).",
 source:"W3Schools — HTML Favicon + MDN — link element",
 hint:"Find fill='%23a855f7' and replace the hex code. The %23 is just URL-encoded #."},

{id:612,title:"HTML: Page Title best practices",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"The <code>&lt;title&gt;</code> tag shows in browser tabs, bookmarks, and search results. Keep it under 60 characters, put the most important words first, and make every page unique.",
 start:`<!DOCTYPE html>
<html>
<head>
  <title>Dragon Memory Match · Code Ranger Games</title>
</head>
<body>
  <h1>Look at the browser tab</h1>
  <p>The title appears there. Good titles are descriptive and unique.</p>
</body>
</html>`,
 goal:"Change the title to describe your own project. Keep it short and put keywords first.",
 source:"W3Schools — HTML Page Title + web.dev — Document titles",
 hint:"Replace the text between <title> and </title> with your project name."},

{id:613,title:"HTML: File Paths (relative vs absolute)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Paths tell the browser where to find files. <strong>Relative</strong> paths like <code>images/cat.jpg</code> are based on the current file's location. <strong>Absolute</strong> paths like <code>https://example.com/cat.jpg</code> include the full URL. Use <code>../</code> to go up one folder.",
 start:`<!DOCTYPE html>
<html>
<body>
  <h2>File Path Examples</h2>
  <p>Same folder: <code>logo.png</code></p>
  <p>Subfolder: <code>images/logo.png</code></p>
  <p>Parent folder: <code>../logo.png</code></p>
  <p>Absolute URL: <code>https://example.com/logo.png</code></p>
  <img src="https://placehold.co/100x100/a855f7/white?text=ABS" alt="absolute path example">
</body>
</html>`,
 goal:"Change the image text from ABS to your initials by editing the placeholder URL.",
 source:"W3Schools — HTML File Paths",
 hint:"Find text=ABS in the img src and change ABS to your initials (e.g. text=JD)."},

{id:614,title:"HTML: Page Layout structure",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"A well-structured page uses semantic layout tags: <code>&lt;header&gt;</code> for top, <code>&lt;nav&gt;</code> for links, <code>&lt;main&gt;</code> for primary content, <code>&lt;aside&gt;</code> for side content, <code>&lt;footer&gt;</code> for bottom.",
 start:`<!DOCTYPE html>
<html>
<head><style>
  header, footer { background: #a855f7; color: white; padding: 12px; }
  nav { background: #f3e8ff; padding: 8px; }
  main { padding: 20px; }
  aside { background: #e9d5ff; padding: 12px; margin-top: 12px; }
</style></head>
<body>
  <header><h2>My Site</h2></header>
  <nav>Home · About · Contact</nav>
  <main>
    <h3>Main content here</h3>
    <p>This is the primary content area.</p>
    <aside>Related links sidebar</aside>
  </main>
  <footer>© 2026 Code Ranger</footer>
</body>
</html>`,
 goal:"Change the header text from \"My Site\" to your name, and the nav links to your own.",
 source:"W3Schools — HTML Layout + MDN — Document and website structure",
 hint:"Edit the text inside <header><h2>...</h2></header> and inside <nav>...</nav>."},

{id:615,title:"HTML: Iframes (embedding pages)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"An <code>&lt;iframe&gt;</code> embeds another page inside yours. Use <code>sandbox</code> for security when embedding untrusted content. Common uses: maps, videos, widgets.",
 start:`<!DOCTYPE html>
<html>
<body>
  <h2>Embedded page below</h2>
  <iframe srcdoc="<h3 style='color:#a855f7;font-family:sans-serif'>Hello from inside the iframe!</h3><p>This is a separate document.</p>" width="400" height="150" style="border:2px solid #a855f7;border-radius:8px"></iframe>
</body>
</html>`,
 goal:"Change the iframe text or styles. Try changing the border color or the heading message.",
 source:"W3Schools — HTML Iframes + MDN — iframe element",
 hint:"Edit the srcdoc attribute — it's the mini-HTML inside the iframe."},

{id:616,title:"HTML: Computer code tags",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"HTML has special tags for code: <code>&lt;code&gt;</code> for inline code, <code>&lt;pre&gt;</code> for preformatted blocks, <code>&lt;kbd&gt;</code> for keyboard input, <code>&lt;samp&gt;</code> for sample output, <code>&lt;var&gt;</code> for variables.",
 start:`<!DOCTYPE html>
<html>
<body>
  <h3>Showing Code in HTML</h3>
  <p>Use <code>const</code> to declare a constant.</p>
  <p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
  <p>Output: <samp>Hello, World!</samp></p>
  <p>The variable <var>x</var> stores your age.</p>
  <pre>
function greet() {
  console.log("Hi!");
}
  </pre>
</body>
</html>`,
 goal:"Add another &lt;kbd&gt; line showing a shortcut you use often, like Cmd+C or Ctrl+Z.",
 source:"W3Schools — HTML Computercode + MDN — kbd, samp, var, code",
 hint:"Copy a <p>Press <kbd>...</kbd></p> line and change the keys."},

{id:617,title:"HTML: Charset declaration",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;meta charset=\"UTF-8\"&gt;</code> tells the browser which character encoding to use. UTF-8 supports nearly every language and symbol. Always include this in the &lt;head&gt;.",
 start:`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>UTF-8 demo</title>
</head>
<body>
  <h2>UTF-8 supports everything:</h2>
  <p>English: Hello!</p>
  <p>Spanish: ¡Hola!</p>
  <p>Japanese: こんにちは</p>
  <p>Math: ∑ π ∞ ≠</p>
  <p>Emoji: 🐉 🌟 🔥</p>
</body>
</html>`,
 goal:"Add a new <p> with a greeting in another language or with symbols you like.",
 source:"W3Schools — HTML Charsets + MDN — meta element",
 hint:"Copy a <p> line and write text in any language or symbol set."},

{id:618,title:"HTML: Block vs inline elements",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<strong>Block</strong> elements (div, p, h1, section) take full width and stack vertically. <strong>Inline</strong> elements (span, a, strong, em) flow within text. Knowing the difference is essential for layout.",
 start:`<!DOCTYPE html>
<html>
<head><style>
  div { background: #f3e8ff; padding: 8px; margin: 4px 0; }
  span { background: #fde68a; padding: 4px; }
</style></head>
<body>
  <h3>Block elements stack:</h3>
  <div>Block 1</div>
  <div>Block 2</div>
  <div>Block 3</div>
  <h3>Inline elements flow:</h3>
  <p>This is <span>inline 1</span> and <span>inline 2</span> in a sentence.</p>
</body>
</html>`,
 goal:"Add a third <span> inside the paragraph with your own text.",
 source:"W3Schools — HTML Block & Inline + MDN — Block-level / Inline elements",
 hint:"Find the <p> with the spans and add one more like <span>your text</span>."},

{id:619,title:"HTML: Form attributes (action, method)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Forms send data with two key attributes: <code>action</code> (where data goes) and <code>method</code> (how it's sent — usually <code>POST</code> for submissions, <code>GET</code> for searches).",
 start:`<!DOCTYPE html>
<html>
<body>
  <h3>Form Example (preview only — won't actually submit)</h3>
  <form action="/submit" method="POST" style="max-width:300px">
    <label for="emailInput">Email:</label><br>
    <input type="email" id="emailInput" name="email" required><br><br>
    <button type="submit">Sign Up</button>
  </form>
  <p style="color:#888;font-size:12px">In real use, action would point to your backend endpoint.</p>
</body>
</html>`,
 goal:"Change the action URL to \"/newsletter\" and the button text to \"Subscribe\".",
 source:"W3Schools — HTML Form Attributes + MDN — form element",
 hint:"Find action=\"/submit\" and change it. Find <button type=\"submit\">Sign Up</button> and change the text."},

{id:620,title:"HTML: Input types overview",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"HTML has many input types beyond text. <code>email</code>, <code>tel</code>, <code>url</code>, <code>date</code>, <code>color</code>, <code>range</code>, <code>number</code>. Each gives browsers built-in validation and on mobile, the right keyboard.",
 start:`<!DOCTYPE html>
<html>
<body>
  <h3>Different Input Types</h3>
  <form style="display:grid;gap:8px;max-width:300px">
    <label for="emailF">Email:</label>
    <input type="email" id="emailF">
    <label for="telF">Phone:</label>
    <input type="tel" id="telF">
    <label for="dateF">Date:</label>
    <input type="date" id="dateF">
    <label for="colorF">Color:</label>
    <input type="color" id="colorF">
    <label for="rangeF">Volume:</label>
    <input type="range" id="rangeF" min="0" max="100">
  </form>
</body>
</html>`,
 goal:"Add a <code>number</code> input for age with a label. Use a unique id and the for attribute.",
 source:"W3Schools — HTML Input Types + MDN — input element",
 hint:"Add: <label for=\"ageF\">Age:</label><input type=\"number\" id=\"ageF\">"},

{id:621,title:"HTML: Input attributes (validation)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Inputs accept attributes that validate user data: <code>required</code> (must fill), <code>placeholder</code> (hint text), <code>min/max</code> (number range), <code>maxlength</code> (text length), <code>pattern</code> (regex).",
 start:`<!DOCTYPE html>
<html>
<body>
  <h3>Validated Inputs</h3>
  <form style="max-width:300px">
    <label for="nameIn">Name (required, max 20):</label><br>
    <input type="text" id="nameIn" required maxlength="20" placeholder="Enter your name"><br><br>
    <label for="ageIn">Age (18-120):</label><br>
    <input type="number" id="ageIn" min="18" max="120" placeholder="18 or older"><br><br>
    <button type="submit">Submit</button>
  </form>
</body>
</html>`,
 goal:"Try submitting empty — see the browser block it. Then change maxlength to 10 and try a long name.",
 source:"W3Schools — HTML Input Attributes + MDN — Client-side form validation",
 hint:"Find maxlength=\"20\" and change to maxlength=\"10\". Press Run to see the change."},

{id:622,title:"HTML: Label \"for\" attribute deep dive",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Every <code>&lt;label&gt;</code> should use <code>for=\"inputId\"</code> matching the input's <code>id</code>. This lets screen readers announce labels correctly AND lets users click the label to focus the input. This is a Code Ranger code-quality requirement.",
 start:`<!DOCTYPE html>
<html>
<body>
  <h3>Try clicking the labels themselves:</h3>
  <p>
    <label for="agreeBox">I agree to the terms</label>
    <input type="checkbox" id="agreeBox">
  </p>
  <p>
    <label for="newsletterBox">Subscribe to newsletter</label>
    <input type="checkbox" id="newsletterBox">
  </p>
  <p style="color:#666;font-size:12px">Clicking the text toggles the checkbox because of the for attribute.</p>
</body>
</html>`,
 goal:"Add a third checkbox with a label using for and a unique id, like \"remindMe\".",
 source:"W3Schools — HTML Forms + MDN — label element + WCAG",
 hint:"Copy a <p>...<label>...<input>...</p> block and use for=\"remindMe\" with id=\"remindMe\"."},

{id:623,title:"HTML: Fieldset and legend",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;fieldset&gt;</code> groups related form fields. <code>&lt;legend&gt;</code> gives the group a title. Screen readers announce the legend when entering the group — great for accessibility.",
 start:`<!DOCTYPE html>
<html>
<body>
  <form style="max-width:320px">
    <fieldset style="border:2px solid #a855f7;border-radius:8px;padding:12px">
      <legend style="color:#a855f7;font-weight:bold">Contact Info</legend>
      <label for="fnameF">First name:</label>
      <input type="text" id="fnameF"><br><br>
      <label for="lnameF">Last name:</label>
      <input type="text" id="lnameF">
    </fieldset>
  </form>
</body>
</html>`,
 goal:"Add a second fieldset titled \"Address\" with one input for street.",
 source:"W3Schools — HTML Form Elements + MDN — fieldset, legend",
 hint:"Copy the entire <fieldset>...</fieldset> block and change the legend + inputs."},

{id:624,title:"HTML: Datalist (autocomplete suggestions)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;datalist&gt;</code> provides autocomplete suggestions for an input. Link them with the input's <code>list</code> attribute. Users can pick from the list OR type something else.",
 start:`<!DOCTYPE html>
<html>
<body>
  <label for="langInput">Favorite programming language:</label><br>
  <input type="text" id="langInput" list="languages" placeholder="Start typing...">
  <datalist id="languages">
    <option value="JavaScript">
    <option value="Python">
    <option value="Rust">
    <option value="Go">
    <option value="TypeScript">
  </datalist>
  <p style="color:#666;font-size:12px">Click the input to see suggestions, or type to filter.</p>
</body>
</html>`,
 goal:"Add three more languages to the datalist (e.g. Ruby, Swift, Kotlin).",
 source:"W3Schools — HTML Input Attributes + MDN — datalist element",
 hint:"Inside <datalist>, add lines like <option value=\"Ruby\">"},

{id:625,title:"HTML: Textarea (multi-line input)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;textarea&gt;</code> is for multi-line text. Use <code>rows</code> and <code>cols</code> to size it, or CSS for full control. Always pair with a label using <code>for</code>.",
 start:`<!DOCTYPE html>
<html>
<body>
  <label for="msgArea">Your message:</label><br>
  <textarea id="msgArea" rows="5" cols="40" placeholder="Type your message here..." maxlength="200"></textarea>
  <p style="color:#666;font-size:12px">200 character limit. Try typing a long message.</p>
</body>
</html>`,
 goal:"Change rows to 8 and maxlength to 500. Add a default message between the textarea tags.",
 source:"W3Schools — HTML Form Elements + MDN — textarea element",
 hint:"Edit rows=\"5\" to rows=\"8\" and maxlength=\"200\" to maxlength=\"500\". Put default text between <textarea ...> and </textarea>."},
{id:626,title:"HTML: Canvas basics (draw a rectangle)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;canvas&gt;</code> is a drawing surface controlled by JavaScript. Get a 2D context, then call methods like <code>fillRect</code>. Canvas powers games, charts, image editors.",
 start:`<!DOCTYPE html>
<html>
<body>
  <canvas id="myCanvas" width="300" height="150" style="border:2px solid #a855f7;border-radius:8px"></canvas>
  <script>
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#a855f7";
    ctx.fillRect(20, 20, 100, 80);
    ctx.fillStyle = "#10b981";
    ctx.fillRect(150, 40, 100, 60);
  </script>
</body>
</html>`,
 goal:"Add a third rectangle at position (50, 110) with size 200×30 in any color.",
 source:"W3Schools — HTML Canvas + MDN — Canvas API tutorial",
 hint:"Add: ctx.fillStyle = \"#f59e0b\"; ctx.fillRect(50, 110, 200, 30);"},

{id:627,title:"HTML: SVG basics (draw a circle)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;svg&gt;</code> is vector graphics — scales perfectly at any size. Use shapes like <code>&lt;circle&gt;</code>, <code>&lt;rect&gt;</code>, <code>&lt;line&gt;</code>. SVG is great for icons, logos, charts.",
 start:`<!DOCTYPE html>
<html>
<body>
  <svg width="300" height="150" style="border:2px solid #a855f7;border-radius:8px">
    <circle cx="60" cy="75" r="40" fill="#a855f7" />
    <rect x="120" y="40" width="70" height="70" fill="#10b981" />
    <line x1="210" y1="40" x2="280" y2="110" stroke="#f59e0b" stroke-width="6" />
  </svg>
</body>
</html>`,
 goal:"Change the circle's radius (r) from 40 to 60, and pick a new fill color.",
 source:"W3Schools — HTML SVG + MDN — SVG tutorial",
 hint:"Find r=\"40\" and change to r=\"60\". Find fill=\"#a855f7\" and try fill=\"#ef4444\"."},

{id:628,title:"HTML: YouTube embed",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Embed YouTube videos with an iframe pointing to <code>youtube.com/embed/VIDEO_ID</code>. Use <code>allow</code> for permissions and <code>allowfullscreen</code> so users can go full screen.",
 start:`<!DOCTYPE html>
<html>
<body>
  <h3>Embedded Video Example (placeholder)</h3>
  <iframe width="320" height="180"
    srcdoc="<div style='background:linear-gradient(135deg,#a855f7,#6366f1);width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:white;font-family:sans-serif;font-size:18px'>▶ Video Placeholder</div>"
    style="border:0;border-radius:8px">
  </iframe>
  <p style="color:#666;font-size:12px">Real syntax: src=\"https://www.youtube.com/embed/VIDEO_ID\"</p>
</body>
</html>`,
 goal:"Change the placeholder gradient colors. Try #ef4444 to #f59e0b for a red-orange gradient.",
 source:"W3Schools — HTML YouTube + MDN — Embedding content",
 hint:"Find linear-gradient(135deg,#a855f7,#6366f1) and replace the two hex colors."},

{id:629,title:"HTML: Accessibility — aria-label",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>aria-label</code> gives screen readers a description when there's no visible text — like icon-only buttons. Always add aria-label to icon buttons, or screen-reader users won't know what they do.",
 start:`<!DOCTYPE html>
<html>
<body>
  <h3>Icon Buttons with aria-label:</h3>
  <button aria-label="Close dialog" style="font-size:20px;padding:6px 12px">✕</button>
  <button aria-label="Open menu" style="font-size:20px;padding:6px 12px">☰</button>
  <button aria-label="Search" style="font-size:20px;padding:6px 12px">🔍</button>
  <p style="color:#666;font-size:12px">Visually you see icons. Screen readers announce \"Close dialog\", \"Open menu\", \"Search\".</p>
</body>
</html>`,
 goal:"Add a fourth icon button (try ❤️ for \"Like\" or ⭐ for \"Favorite\") with the right aria-label.",
 source:"W3Schools — HTML Accessibility + MDN — ARIA: aria-label + WCAG",
 hint:"Copy a <button>...</button> and change the icon + aria-label text."},

{id:630,title:"HTML: Style Guide — clean HTML",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Good HTML style: lowercase tag names, always close tags, quote attribute values, indent nested elements, one element per line for complex structures. Consistency makes code readable.",
 start:`<!DOCTYPE html>
<html>
<body>
  <!-- Bad: messy, mixed case, missing quotes -->
  <!-- <DIV class=card><P>Hello</P></DIV> -->

  <!-- Good: lowercase, quoted, indented -->
  <div class="card" style="padding:12px;border:1px solid #a855f7;border-radius:8px">
    <h3>Clean HTML</h3>
    <p>This is properly formatted.</p>
    <ul>
      <li>Lowercase tags</li>
      <li>Quoted attributes</li>
      <li>Closed elements</li>
    </ul>
  </div>
</body>
</html>`,
 goal:"Add a fourth <li> with another good practice (like \"Indent nested elements\").",
 source:"W3Schools — HTML Style Guide",
 hint:"Add: <li>Indent nested elements</li> inside the <ul>."},

/* ══ BEGINNER LESSONS — CSS EXTENDED (631–650) — MDN + W3Schools + web.dev ══ */
// Continues yesterday's CSS Fundamentals (536-560). Focuses on layout, selectors, and modern CSS.

{id:631,title:"CSS: Outline vs Border",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>outline</code> draws OUTSIDE the border without affecting layout (doesn't push other elements). Great for focus rings. <code>border</code> takes up space and shifts surrounding content.",
 start:`button {
  padding: 10px 20px;
  margin: 8px;
  border: 2px solid #a855f7;
  border-radius: 6px;
  background: white;
  cursor: pointer;
}
button:focus {
  outline: 3px solid #f59e0b;
  outline-offset: 2px;
}`,
 goal:"Change the outline color to your favorite color and the offset to 4px.",
 source:"W3Schools — CSS Outline + MDN — outline property",
 hint:"Find outline: 3px solid #f59e0b and change the hex. Find outline-offset: 2px and change to 4px."},

{id:632,title:"CSS: Max-width for responsive design",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>max-width</code> limits how wide an element can grow, but lets it shrink on small screens. The classic responsive pattern: <code>max-width: 800px; margin: 0 auto;</code> for a centered, capped container.",
 start:`.container {
  max-width: 600px;
  margin: 20px auto;
  padding: 24px;
  background: #f3e8ff;
  border-radius: 12px;
}
.container h2 { color: #6b21a8; }`,
 goal:"Change max-width from 600px to 400px and watch the container shrink.",
 source:"W3Schools — CSS Max-width + web.dev — Responsive design",
 hint:"Find max-width: 600px and change to max-width: 400px."},

{id:633,title:"CSS: Z-index stacking",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>z-index</code> controls which element appears on top when elements overlap. Higher numbers = higher up. Only works on positioned elements (position: relative, absolute, fixed, or sticky).",
 start:`.box { position: absolute; width: 100px; height: 100px; }
.box1 { background: #ef4444; top: 20px; left: 20px; z-index: 1; }
.box2 { background: #f59e0b; top: 50px; left: 50px; z-index: 3; }
.box3 { background: #10b981; top: 80px; left: 80px; z-index: 2; }`,
 goal:"Swap z-index values so the red box (.box1) is on top.",
 source:"W3Schools — CSS Z-index + MDN — z-index",
 hint:"Change .box1's z-index from 1 to 5 (any number higher than 3)."},

{id:634,title:"CSS: Overflow (hidden, scroll, auto)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>overflow</code> controls what happens when content exceeds its container. <code>hidden</code> clips it, <code>scroll</code> always shows scrollbars, <code>auto</code> shows scrollbars only when needed.",
 start:`.scroll-box {
  width: 200px;
  height: 100px;
  border: 2px solid #a855f7;
  padding: 8px;
  overflow: auto;
  margin: 10px;
}`,
 goal:"Change overflow from auto to hidden — watch the content get clipped instead of scrolling.",
 source:"W3Schools — CSS Overflow + MDN — overflow",
 hint:"Find overflow: auto; and change to overflow: hidden;"},

{id:635,title:"CSS: Inline-block",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>display: inline-block</code> elements sit side-by-side like inline elements BUT accept width/height like block elements. Used to be the main layout tool before flexbox/grid.",
 start:`.box {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 8px;
  border-radius: 8px;
  text-align: center;
  line-height: 80px;
  color: white;
  font-weight: bold;
}
.b1 { background: #a855f7; }
.b2 { background: #10b981; }
.b3 { background: #f59e0b; }`,
 goal:"Change .box's display from inline-block to block — watch boxes stack vertically.",
 source:"W3Schools — CSS Inline-block + MDN — display",
 hint:"Find display: inline-block; and change to display: block;"},

{id:636,title:"CSS: Combinators (descendant, child, adjacent)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"Combinators target relationships: <code>div p</code> = any p inside div (descendant). <code>div &gt; p</code> = direct child only. <code>h2 + p</code> = p directly after h2 (adjacent).",
 start:`/* Descendant: any p inside .card */
.card p { color: #6b21a8; }

/* Direct child only */
.card > h3 { background: #f3e8ff; padding: 6px; }

/* Adjacent: p right after h3 */
h3 + p { font-weight: bold; }`,
 goal:"Add a rule using a descendant combinator: <code>.card span { color: red; }</code>",
 source:"W3Schools — CSS Combinators + MDN — Combinators",
 hint:"Add a new rule at the bottom: .card span { color: red; }"},

{id:637,title:"CSS: Pseudo-elements ::before and ::after",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>::before</code> and <code>::after</code> insert content before/after an element using only CSS. Set <code>content: \"...\"</code>. Great for decorative quotes, badges, or icons.",
 start:`.quote {
  font-style: italic;
  font-size: 18px;
  color: #a855f7;
  padding: 12px;
}
.quote::before {
  content: "❝ ";
  font-size: 28px;
}
.quote::after {
  content: " ❞";
  font-size: 28px;
}`,
 goal:"Change the ::before content from \"❝ \" to a different symbol, like \"→ \" or \"★ \".",
 source:"W3Schools — CSS Pseudo-elements + MDN — ::before, ::after",
 hint:"Find content: \"❝ \"; and change the string inside the quotes."},

{id:638,title:"CSS: Opacity vs RGBA",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>opacity</code> makes the WHOLE element (including text and children) transparent. <code>rgba(r,g,b,a)</code> makes only the background semi-transparent. Use rgba for overlays where you want readable text.",
 start:`.opacity-box {
  background: #a855f7;
  opacity: 0.5;
  padding: 12px;
  color: white;
  margin: 8px;
}
.rgba-box {
  background: rgba(168, 85, 247, 0.5);
  padding: 12px;
  color: white;
  margin: 8px;
}`,
 goal:"Change the opacity from 0.5 to 0.2 — see how the text also fades. The rgba box keeps the text crisp.",
 source:"W3Schools — CSS Opacity + MDN — opacity, rgba()",
 hint:"Find opacity: 0.5; and change to opacity: 0.2;"},

{id:639,title:"CSS: Attribute selectors",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"Target elements by their attributes: <code>[type=\"text\"]</code> selects inputs with type text. <code>[href^=\"https\"]</code> selects links starting with https. Powerful for forms and links.",
 start:`input[type="text"] {
  border: 2px solid #a855f7;
  border-radius: 6px;
  padding: 8px;
}
input[type="email"] {
  border: 2px solid #10b981;
  border-radius: 6px;
  padding: 8px;
}
input[required] {
  background: #fef3c7;
}`,
 goal:"Add a rule for input[type=\"password\"] with a red border.",
 source:"W3Schools — CSS Attribute Selectors + MDN — Attribute selectors",
 hint:"Add: input[type=\"password\"] { border: 2px solid red; padding: 8px; }"},

{id:640,title:"CSS: Units — em, rem, %, vh, vw",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"CSS has many units: <code>px</code> (fixed), <code>em</code> (relative to parent font), <code>rem</code> (relative to root font), <code>%</code> (parent size), <code>vh/vw</code> (viewport height/width). Use rem for accessibility — respects user font preferences.",
 start:`.parent {
  font-size: 16px;
  padding: 1rem;
  background: #f3e8ff;
}
.child-em { font-size: 1.5em; color: #a855f7; }
.child-rem { font-size: 1.5rem; color: #10b981; }
.full-width { width: 100%; background: #fde68a; padding: 8px; }`,
 goal:"Change .parent font-size to 20px — em scales with it, rem stays the same.",
 source:"W3Schools — CSS Units + web.dev — Sizes and units",
 hint:"Find font-size: 16px; in .parent and change to 20px."},
{id:641,title:"CSS: Specificity (which rule wins)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"When multiple rules match, the more <strong>specific</strong> one wins. Specificity: inline styles (1000) &gt; IDs (100) &gt; classes/attributes (10) &gt; tags (1). When tied, the later rule wins.",
 start:`p { color: black; }              /* specificity: 1 */
.note { color: blue; }            /* specificity: 10 */
#special { color: green; }        /* specificity: 100 */

/* HTML:
   <p>Plain (black)</p>
   <p class="note">Class note (blue)</p>
   <p class="note" id="special">Class AND id (green wins)</p>
*/`,
 goal:"Add a rule <code>p.note { color: red; }</code> at the end — it's more specific than .note alone (11 vs 10), so the blue class note becomes red.",
 source:"W3Schools — CSS Specificity + MDN — Specificity",
 hint:"Add a new line at the bottom: p.note { color: red; }"},

{id:642,title:"CSS: !important (and when NOT to use it)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>!important</code> overrides ALL other rules, regardless of specificity. It's a last resort — overuse makes CSS unmaintainable. Prefer fixing specificity instead.",
 start:`p { color: red !important; }
#special { color: green; }
.note { color: blue; }

/* HTML:
   <p id="special" class="note">This stays red because !important wins.</p>
*/`,
 goal:"Remove the !important from the p rule and re-Run — now the green ID wins like normal.",
 source:"W3Schools — CSS !important + MDN — Specificity",
 hint:"Delete \" !important\" from the first rule, leaving: p { color: red; }"},

{id:643,title:"CSS: calc(), min(), max()",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"Math functions let CSS calculate values: <code>calc(100% - 40px)</code> mixes units. <code>min(50vw, 600px)</code> picks the smaller. <code>max(40px, 5vw)</code> picks the larger. Great for responsive sizing.",
 start:`.calc-box {
  width: calc(100% - 40px);
  margin: 20px;
  padding: 12px;
  background: #a855f7;
  color: white;
  border-radius: 8px;
}
.min-box {
  width: min(80%, 400px);
  margin: 12px;
  padding: 12px;
  background: #10b981;
  color: white;
  border-radius: 8px;
}`,
 goal:"Change <code>calc(100% - 40px)</code> to <code>calc(100% - 80px)</code> — watch the box get narrower.",
 source:"W3Schools — CSS Math Functions + MDN — calc(), min(), max()",
 hint:"Find calc(100% - 40px) and change the 40px to 80px."},

{id:644,title:"CSS: Linear gradients",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>linear-gradient(direction, color1, color2)</code> creates a smooth color blend. Direction can be an angle (<code>135deg</code>) or keyword (<code>to right</code>, <code>to bottom</code>).",
 start:`.gradient-box {
  width: 100%;
  height: 120px;
  margin: 12px 0;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
.g1 { background: linear-gradient(to right, #a855f7, #6366f1); }
.g2 { background: linear-gradient(135deg, #f59e0b, #ef4444); }
.g3 { background: linear-gradient(to bottom, #10b981, #0891b2, #6366f1); }`,
 goal:"Add a 4th gradient direction <code>to top right</code> with two of your favorite colors.",
 source:"W3Schools — CSS Gradients + MDN — linear-gradient()",
 hint:"Copy a .g rule and write: background: linear-gradient(to top right, #fde047, #f97316);"},

{id:645,title:"CSS: Text shadows",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>text-shadow: x y blur color</code> adds shadow behind text. Subtle shadows add depth; bold shadows create retro/neon effects. Stack multiple shadows with commas.",
 start:`h1 {
  font-size: 36px;
  color: white;
  background: #0f172a;
  padding: 24px;
  text-align: center;
  margin: 0;
  text-shadow: 0 0 8px #a855f7, 0 0 16px #a855f7;
}
h2 {
  color: #6b21a8;
  text-shadow: 2px 2px 0 #fde047;
}`,
 goal:"Change the h1's glow color from #a855f7 to #10b981 in both text-shadow positions.",
 source:"W3Schools — CSS Text Effects + MDN — text-shadow",
 hint:"Find text-shadow: 0 0 8px #a855f7, 0 0 16px #a855f7; and change both hex codes."},

{id:646,title:"CSS: 2D Transforms (rotate, scale)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>transform</code> moves, rotates, or scales elements WITHOUT affecting layout. Common: <code>rotate(45deg)</code>, <code>scale(1.2)</code>, <code>translate(10px, 20px)</code>. Combine with transitions for smooth effects.",
 start:`.box {
  width: 80px;
  height: 80px;
  margin: 30px;
  background: #a855f7;
  border-radius: 8px;
  display: inline-block;
  color: white;
  text-align: center;
  line-height: 80px;
}
.rotate { transform: rotate(15deg); }
.scale { transform: scale(1.3); }
.translate { transform: translate(20px, -10px); }
.combo { transform: rotate(45deg) scale(0.8); background: #10b981; }`,
 goal:"Change .rotate from 15deg to 90deg. Add a new <code>.flip</code> rule using <code>scaleX(-1)</code>.",
 source:"W3Schools — CSS 2D Transforms + MDN — transform",
 hint:"Find transform: rotate(15deg); and change to 90deg. Add: .flip { transform: scaleX(-1); }"},

{id:647,title:"CSS: Animations with @keyframes",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>@keyframes</code> defines animation steps. Apply with <code>animation: name duration timing iteration</code>. Use for loading spinners, attention pulses, micro-interactions.",
 start:`@keyframes pulse {
  0%   { transform: scale(1);   opacity: 1; }
  50%  { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1);   opacity: 1; }
}
.pulse-dot {
  width: 60px;
  height: 60px;
  background: #a855f7;
  border-radius: 50%;
  margin: 40px auto;
  animation: pulse 1.5s ease-in-out infinite;
}`,
 goal:"Change duration from 1.5s to 0.5s — pulse speeds up. Then try 3s for slow motion.",
 source:"W3Schools — CSS Animations + MDN — @keyframes",
 hint:"Find animation: pulse 1.5s ease-in-out infinite; and change 1.5s."},

{id:648,title:"CSS: Tooltips with ::after",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"Build a simple tooltip using <code>::after</code> + <code>data-tip</code> attribute. Show on hover, hide otherwise. No JavaScript needed.",
 start:`.tooltip {
  position: relative;
  display: inline-block;
  padding: 8px 16px;
  background: #a855f7;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
.tooltip::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: #0f172a;
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
}
.tooltip:hover::after { opacity: 1; }

/* HTML:
   <span class="tooltip" data-tip="Hello from tooltip!">Hover me</span>
*/`,
 goal:"Change the tooltip background from #0f172a to #10b981 to make it green.",
 source:"W3Schools — CSS Tooltips + MDN — ::after",
 hint:"Find background: #0f172a; inside .tooltip::after and change the color."},

{id:649,title:"CSS: Media queries (responsive)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>@media</code> applies CSS only when conditions match — screen width, dark mode, print, etc. Build mobile-first: write base styles, then add breakpoints for larger screens.",
 start:`.card {
  background: #a855f7;
  color: white;
  padding: 16px;
  border-radius: 8px;
  margin: 12px;
  font-size: 14px;
}

@media (min-width: 600px) {
  .card { background: #10b981; font-size: 18px; }
}

@media (min-width: 1000px) {
  .card { background: #f59e0b; font-size: 24px; }
}

/* Resize the preview window to see the card change colors! */`,
 goal:"Add a 4th breakpoint at min-width: 1400px that changes the card to red (#ef4444).",
 source:"W3Schools — CSS Media Queries + web.dev — Responsive design",
 hint:"Add: @media (min-width: 1400px) { .card { background: #ef4444; } }"},

{id:650,title:"CSS: box-sizing border-box",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"By default, padding and border ADD to an element's width. <code>box-sizing: border-box</code> includes them IN the width, making layouts predictable. Most modern sites set this globally.",
 start:`* { box-sizing: border-box; }

.box {
  width: 200px;
  padding: 20px;
  border: 4px solid #a855f7;
  background: #f3e8ff;
  margin: 8px 0;
}

/* With border-box, the box stays exactly 200px wide.
   Without it, the box would be 200 + 40 + 8 = 248px wide. */`,
 goal:"Try changing the * rule to <code>* { box-sizing: content-box; }</code> — the box becomes wider.",
 source:"W3Schools — CSS Box Sizing + MDN — box-sizing",
 hint:"Find box-sizing: border-box; and change to box-sizing: content-box;"},

/* ══ BEGINNER LESSONS — JS EXTENDED (651–670) — MDN + web.dev + W3Schools ══ */
// Continues yesterday's JS Fundamentals + JS Syntax. Focuses on string/number/array methods and core APIs.
// All examples use let (not var), closure-based functions where stateful, and textContent for user input.

{id:651,title:"JS Strings: length and toUpperCase",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Every string has properties and methods. <code>.length</code> returns character count. <code>.toUpperCase()</code> and <code>.toLowerCase()</code> change case (return NEW strings — originals don't change).",
 start:`const name = "Code Ranger";
console.log("Length:", name.length);
console.log("Upper:", name.toUpperCase());
console.log("Lower:", name.toLowerCase());
console.log("Original unchanged:", name);`,
 goal:"Add a new const for your name and log its length and uppercase version.",
 source:"MDN — String.prototype.length + .toUpperCase()",
 hint:"const myName = \"Your Name\"; console.log(myName.length); console.log(myName.toUpperCase());"},

{id:652,title:"JS Strings: slice and substring",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>.slice(start, end)</code> extracts part of a string. End is exclusive. Negative numbers count from the end. <code>.substring(start, end)</code> is similar but doesn't accept negatives.",
 start:`const s = "Hello, World!";
console.log(s.slice(0, 5));    // "Hello"
console.log(s.slice(7, 12));   // "World"
console.log(s.slice(-6, -1));  // "World"
console.log(s.slice(7));       // "World!" — no end means to the end`,
 goal:"Use .slice() to extract just \"World\" from the string in a new way. Try .slice(7, -1).",
 source:"MDN — String.prototype.slice()",
 hint:"console.log(s.slice(7, -1)); — start at index 7, end one before the end."},

{id:653,title:"JS Strings: split and join",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>.split(sep)</code> turns a string into an array. <code>arr.join(sep)</code> turns an array back into a string. Together they're great for parsing CSV, reversing words, etc.",
 start:`const sentence = "The quick brown fox";
const words = sentence.split(" ");
console.log("Words:", words);
console.log("Count:", words.length);

const joined = words.join("-");
console.log("Joined with dash:", joined);

const csv = "apple,banana,cherry";
const fruits = csv.split(",");
console.log("Fruits:", fruits);`,
 goal:"Reverse the order of words: use .split, .reverse(), and .join to make \"fox brown quick The\".",
 source:"MDN — String.split() + Array.join()",
 hint:"console.log(sentence.split(\" \").reverse().join(\" \"));"},

{id:654,title:"JS Strings: replace and trim",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>.replace(find, replace)</code> swaps text (first match only — use <code>.replaceAll</code> for all). <code>.trim()</code> removes whitespace from both ends. Both return new strings.",
 start:`const msg = "  Hello, World!  ";
console.log("Trimmed:", msg.trim());

const original = "I like cats. Cats are great.";
console.log(original.replace("cats", "dogs"));
console.log(original.replaceAll("cats", "dogs"));
console.log(original.replaceAll(/cats/gi, "dogs")); // case-insensitive`,
 goal:"Use .replaceAll to change every \"a\" to \"@\" in the string \"banana\".",
 source:"MDN — String.replace() + .trim()",
 hint:"console.log(\"banana\".replaceAll(\"a\", \"@\"));"},

{id:655,title:"JS Numbers: parseInt and parseFloat",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>parseInt(str)</code> converts a string to a whole number. <code>parseFloat(str)</code> keeps decimals. Both ignore trailing letters. Use them when reading numbers from inputs.",
 start:`console.log(parseInt("42"));        // 42
console.log(parseInt("42.99"));     // 42 (drops decimal)
console.log(parseFloat("42.99"));   // 42.99
console.log(parseInt("100px"));     // 100 (stops at letters)
console.log(parseInt("abc"));       // NaN (Not a Number)

const userInput = "  25 years old  ";
const age = parseInt(userInput);
console.log("Age:", age);`,
 goal:"Use parseFloat to convert the string \"3.14159\" and log it.",
 source:"MDN — parseInt() + parseFloat()",
 hint:"console.log(parseFloat(\"3.14159\"));"},
{id:656,title:"JS Numbers: toFixed and Number()",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>.toFixed(n)</code> rounds a number to n decimals — returns a STRING (great for display). <code>Number(str)</code> converts strict (no trailing letters, fails on bad data).",
 start:`const price = 19.999;
console.log(price.toFixed(2));      // "20.00" (string)
console.log(price.toFixed(0));      // "20"

console.log(Number("42"));          // 42
console.log(Number("3.14"));        // 3.14
console.log(Number("42px"));        // NaN (strict — won't ignore letters)
console.log(Number(""));            // 0 (gotcha!)

const subtotal = 12.5;
const tax = 1.25;
const total = (subtotal + tax).toFixed(2);
console.log("Total: $" + total);`,
 goal:"Calculate the tax on $50 at 6% and use .toFixed(2) to display it.",
 source:"MDN — Number.prototype.toFixed() + Number()",
 hint:"const tax = (50 * 0.06).toFixed(2); console.log(\"Tax: $\" + tax);"},

{id:657,title:"JS Math: random and floor",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>Math.random()</code> returns a decimal between 0 (inclusive) and 1 (exclusive). <code>Math.floor()</code> rounds DOWN. Together they generate random whole numbers — the basis of dice, card draws, and games.",
 start:`// Random decimal 0–1
console.log(Math.random());

// Random integer 0–9
console.log(Math.floor(Math.random() * 10));

// Random integer 1–6 (a dice roll)
const dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice:", dice);

// Run multiple times — different result each time
for (let i = 0; i < 5; i++) {
  console.log("Roll", i + 1, ":", Math.floor(Math.random() * 6) + 1);
}`,
 goal:"Make a random number between 1 and 100. Formula: Math.floor(Math.random() * 100) + 1.",
 source:"MDN — Math.random() + Math.floor()",
 hint:"console.log(Math.floor(Math.random() * 100) + 1);"},

{id:658,title:"JS Math: max, min, abs",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>Math.max(a, b, ...)</code> returns largest. <code>Math.min(a, b, ...)</code> returns smallest. <code>Math.abs(n)</code> returns absolute value (drops the minus sign).",
 start:`console.log(Math.max(5, 12, 8, 3));      // 12
console.log(Math.min(5, 12, 8, 3));      // 3
console.log(Math.abs(-7));               // 7
console.log(Math.abs(7));                // 7 (unchanged)

const scores = [85, 92, 78, 95, 88];
console.log("Highest:", Math.max(...scores)); // spread operator
console.log("Lowest:", Math.min(...scores));`,
 goal:"Calculate the absolute difference between -15 and 8 using Math.abs.",
 source:"MDN — Math.max(), Math.min(), Math.abs()",
 hint:"console.log(Math.abs(-15 - 8)); — that's the distance between two numbers."},

{id:659,title:"JS Arrays: includes and indexOf",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>arr.includes(value)</code> returns true/false — clean way to check if something exists. <code>arr.indexOf(value)</code> returns position (or -1 if not found).",
 start:`const fruits = ["apple", "banana", "cherry", "date"];

console.log(fruits.includes("banana"));    // true
console.log(fruits.includes("mango"));     // false

console.log(fruits.indexOf("cherry"));     // 2
console.log(fruits.indexOf("grape"));      // -1

// Common pattern: check before adding
const newFruit = "kiwi";
if (!fruits.includes(newFruit)) {
  fruits.push(newFruit);
}
console.log(fruits);`,
 goal:"Add a check: if \"apple\" is in the array, log \"already have apple\".",
 source:"MDN — Array.includes() + Array.indexOf()",
 hint:"if (fruits.includes(\"apple\")) { console.log(\"already have apple\"); }"},

{id:660,title:"JS Arrays: filter",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>arr.filter(fn)</code> returns a NEW array with only items where the function returns true. Powerful for searches, filtering UI lists, removing items.",
 start:`const numbers = [1, 5, 8, 12, 3, 19, 7, 25];

const big = numbers.filter(n => n > 10);
console.log("Bigger than 10:", big);

const evens = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);

const users = [
  { name: "Ada", age: 30 },
  { name: "Bo",  age: 12 },
  { name: "Cy",  age: 45 }
];
const adults = users.filter(u => u.age >= 18);
console.log("Adults:", adults);`,
 goal:"Filter the numbers array to keep only values less than 10.",
 source:"MDN — Array.prototype.filter()",
 hint:"const small = numbers.filter(n => n < 10); console.log(small);"},

{id:661,title:"JS Arrays: reduce",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>arr.reduce(fn, initial)</code> boils an array down to a single value. Most common use: summing numbers. Function receives accumulator + current item.",
 start:`const prices = [10, 25, 8, 42, 15];

const total = prices.reduce((sum, price) => sum + price, 0);
console.log("Total: $" + total);

// Find the longest word
const words = ["hi", "hello", "hey", "greetings"];
const longest = words.reduce((best, current) =>
  current.length > best.length ? current : best, "");
console.log("Longest:", longest);`,
 goal:"Use reduce to multiply all numbers in [2, 3, 4] together (start at 1, not 0).",
 source:"MDN — Array.prototype.reduce()",
 hint:"const product = [2, 3, 4].reduce((p, n) => p * n, 1); console.log(product);"},

{id:662,title:"JS Arrays: find and findIndex",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>arr.find(fn)</code> returns the FIRST matching item (or undefined). <code>arr.findIndex(fn)</code> returns its position. Like .filter but stops at the first match.",
 start:`const users = [
  { id: 1, name: "Ada" },
  { id: 2, name: "Bo"  },
  { id: 3, name: "Cy"  }
];

const found = users.find(u => u.name === "Bo");
console.log(found); // { id: 2, name: "Bo" }

const idx = users.findIndex(u => u.id === 3);
console.log("Index:", idx); // 2

const missing = users.find(u => u.name === "Z");
console.log("Missing:", missing); // undefined`,
 goal:"Find the user with id === 1 and log their name.",
 source:"MDN — Array.find() + Array.findIndex()",
 hint:"const u = users.find(u => u.id === 1); console.log(u.name);"},

{id:663,title:"JS Arrays: spread operator",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"The spread operator <code>...</code> expands arrays. Use it to copy arrays, combine arrays, or pass arrays as function arguments without mutation.",
 start:`const a = [1, 2, 3];
const b = [4, 5, 6];

const combined = [...a, ...b];
console.log("Combined:", combined);

const copy = [...a];
copy.push(99);
console.log("Original a:", a);    // unchanged: [1, 2, 3]
console.log("Copy:", copy);       // [1, 2, 3, 99]

const numbers = [5, 12, 8, 19, 3];
console.log("Max:", Math.max(...numbers)); // spreads as arguments`,
 goal:"Use spread to insert the value 0 at the beginning of array a.",
 source:"MDN — Spread syntax (...)",
 hint:"const withZero = [0, ...a]; console.log(withZero);"},

{id:664,title:"JS Date: basics",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>new Date()</code> creates a date. Methods like <code>.getFullYear()</code>, <code>.getMonth()</code>, <code>.getDate()</code>, <code>.getHours()</code> extract parts. Month is 0-indexed (January = 0).",
 start:`const now = new Date();
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());
console.log("Day:", now.getDate());
console.log("Hours:", now.getHours());

// Format as YYYY-MM-DD
const yyyy = now.getFullYear();
const mm = String(now.getMonth() + 1).padStart(2, "0");
const dd = String(now.getDate()).padStart(2, "0");
console.log("Today:", yyyy + "-" + mm + "-" + dd);`,
 goal:"Log the current minute using new Date().getMinutes().",
 source:"MDN — Date object",
 hint:"console.log(\"Minute:\", new Date().getMinutes());"},

{id:665,title:"JS Sets: unique values",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"A <code>Set</code> stores unique values — duplicates are ignored. Common use: removing duplicates from an array. Methods: <code>.add()</code>, <code>.has()</code>, <code>.delete()</code>, <code>.size</code>.",
 start:`const tags = new Set();
tags.add("javascript");
tags.add("html");
tags.add("css");
tags.add("javascript"); // duplicate — ignored

console.log("Size:", tags.size);          // 3
console.log("Has CSS?", tags.has("css")); // true

// Remove duplicates from an array
const messy = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(messy)];
console.log("Unique:", unique); // [1, 2, 3, 4]`,
 goal:"Create a Set with the days of the week and log its size.",
 source:"MDN — Set object",
 hint:"const days = new Set([\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\", \"Sun\"]); console.log(days.size);"},

{id:666,title:"JS Functions: parameters and defaults",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Functions accept inputs called <strong>parameters</strong>. Set defaults with <code>=</code> for when the caller doesn't pass a value. Defaults make functions safer and easier to call.",
 start:`function greet(name = "friend", greeting = "Hello") {
  return greeting + ", " + name + "!";
}

console.log(greet());                       // "Hello, friend!"
console.log(greet("Ada"));                  // "Hello, Ada!"
console.log(greet("Bo", "Hey"));            // "Hey, Bo!"
console.log(greet(undefined, "Welcome"));   // "Welcome, friend!"`,
 goal:"Add a third parameter <code>punct = \"!\"</code> and use it instead of the hardcoded \"!\".",
 source:"MDN — Default parameters",
 hint:"function greet(name = \"friend\", greeting = \"Hello\", punct = \"!\") { return greeting + \", \" + name + punct; }"},

{id:667,title:"JS Functions: return values",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>return</code> sends a value back from a function. If you don't return, the function returns <code>undefined</code>. Always return when the function computes something the caller needs.",
 start:`function add(a, b) {
  return a + b;
}

function logOnly(msg) {
  console.log(msg);
  // no return — implicitly returns undefined
}

const sum = add(3, 4);
console.log("Sum:", sum);

const result = logOnly("hi");
console.log("Result:", result); // undefined`,
 goal:"Write a function <code>square(n)</code> that returns n*n. Call it with 5 and log the result.",
 source:"MDN — return statement",
 hint:"function square(n) { return n * n; } console.log(square(5));"},

{id:668,title:"JS Scope: block vs function",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>let</code> and <code>const</code> are <strong>block-scoped</strong> — only exist inside the nearest <code>{ }</code>. This is why we use let/const (NEVER var, which is function-scoped and confusing).",
 start:`function example() {
  if (true) {
    let inner = "I'm inside the if block";
    console.log(inner); // works
  }
  // console.log(inner); // would error — inner doesn't exist here

  for (let i = 0; i < 3; i++) {
    // i only exists inside the loop
  }
  // console.log(i); // would error

  let outside = "function-level";
  if (true) {
    console.log(outside); // works — inner blocks can see outer
  }
}

example();`,
 goal:"Add a new block <code>{ let secret = \"hidden\"; console.log(secret); }</code> and try to log secret outside it (will fail).",
 source:"MDN — Block scoping with let",
 hint:"Add: { let secret = \"hidden\"; console.log(secret); } — note: console.log(secret) outside the braces would throw."},

{id:669,title:"JS Error Handling: try/catch",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>try/catch</code> handles errors gracefully. Code in <code>try</code> runs; if it throws, control jumps to <code>catch</code> with the error object. Keeps your app from crashing.",
 start:`function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  } catch (err) {
    console.log("Caught:", err.message);
    return null;
  }
}

console.log(safeDivide(10, 2));    // 5
console.log(safeDivide(10, 0));    // logs error, returns null
console.log(safeDivide(20, 4));    // 5`,
 goal:"Add a third call with safeDivide(100, 0) — see how it handles the error.",
 source:"MDN — try...catch",
 hint:"console.log(safeDivide(100, 0));"},

{id:670,title:"JS JSON: parse and stringify",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>JSON.stringify(obj)</code> turns objects into strings (for sending or saving). <code>JSON.parse(str)</code> turns strings back into objects. This is how localStorage, APIs, and config files work.",
 start:`const user = {
  name: "Ada",
  age: 30,
  hobbies: ["coding", "reading"]
};

// Object → string
const jsonString = JSON.stringify(user);
console.log("As string:", jsonString);

// String → object
const back = JSON.parse(jsonString);
console.log("Back to object:", back);
console.log("Name from parsed:", back.name);

// Pretty-print with indentation
console.log(JSON.stringify(user, null, 2));`,
 goal:"Create your own object with name and favorite color, then stringify and log it.",
 source:"MDN — JSON.stringify() + JSON.parse()",
 hint:"const me = { name: \"Your Name\", color: \"purple\" }; console.log(JSON.stringify(me));"},

/* ══ BEGINNER LESSONS — HTML DEEP DIVE (671–703) — MDN Web Docs ══ */
// Continues 611-630. Covers Web APIs, semantic elements, and modern HTML attributes.
// All examples follow Code Ranger constraints: label for=, let not var, textContent for input.

{id:671,title:"HTML: Drag and Drop API",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"Make any element draggable with <code>draggable=\"true\"</code>. JavaScript handles drag events: <code>dragstart</code>, <code>dragover</code>, <code>drop</code>. The drop target needs <code>preventDefault()</code> on dragover to accept the drop.",
 start:`<!DOCTYPE html>
<html>
<head><style>
  .item { padding: 10px; background: #a855f7; color: white; border-radius: 6px; cursor: move; margin: 4px; display: inline-block; }
  .drop-zone { border: 2px dashed #a855f7; padding: 30px; margin-top: 10px; min-height: 60px; border-radius: 8px; }
</style></head>
<body>
  <div class="item" draggable="true" id="dragItem">Drag me!</div>
  <div class="drop-zone" id="dropZone">Drop here</div>
  <script>
    const item = document.getElementById("dragItem");
    const zone = document.getElementById("dropZone");
    item.addEventListener("dragstart", (e) => { e.dataTransfer.setData("text", "dragItem"); });
    zone.addEventListener("dragover", (e) => { e.preventDefault(); zone.style.background = "#f3e8ff"; });
    zone.addEventListener("dragleave", () => { zone.style.background = ""; });
    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.textContent = "Dropped!";
      zone.style.background = "#10b981";
    });
  </script>
</body>
</html>`,
 goal:"Change the drop zone's text from \"Dropped!\" to your own success message.",
 source:"MDN — HTML Drag and Drop API",
 hint:"Find zone.textContent = \"Dropped!\"; and change the string."},

{id:672,title:"HTML: Geolocation API",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>navigator.geolocation.getCurrentPosition</code> gets the user's location (with permission). Browsers ask for consent first — never silent. Useful for weather, store locators, maps.",
 start:`<!DOCTYPE html>
<html>
<body>
  <label for="locBtn">Get my location:</label><br><br>
  <button id="locBtn">Find Me</button>
  <p id="locResult" style="margin-top:12px;color:#a855f7;font-weight:bold"></p>
  <script>
    const btn = document.getElementById("locBtn");
    const out = document.getElementById("locResult");
    btn.addEventListener("click", () => {
      if (!navigator.geolocation) {
        out.textContent = "Geolocation not supported";
        return;
      }
      out.textContent = "Asking for permission...";
      navigator.geolocation.getCurrentPosition(
        (pos) => { out.textContent = "Lat: " + pos.coords.latitude.toFixed(2) + ", Lng: " + pos.coords.longitude.toFixed(2); },
        (err) => { out.textContent = "Error: " + err.message; }
      );
    });
  </script>
</body>
</html>`,
 goal:"Change the button text from \"Find Me\" to \"Show My Coordinates\".",
 source:"MDN — Geolocation API",
 hint:"Find <button id=\"locBtn\">Find Me</button> and change the inner text."},

{id:673,title:"HTML: localStorage (save data)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>localStorage</code> stores strings in the browser permanently — survives page reloads. Use <code>.setItem(key, val)</code> and <code>.getItem(key)</code>. Common for theme preferences, draft saves, settings.",
 start:`<!DOCTYPE html>
<html>
<body>
  <label for="noteField">Your note:</label><br>
  <textarea id="noteField" rows="4" cols="40" placeholder="Type something — it saves automatically"></textarea>
  <p id="status" style="color:#10b981"></p>
  <script>
    const field = document.getElementById("noteField");
    const status = document.getElementById("status");
    // Load saved note on page open
    field.value = localStorage.getItem("myNote") || "";
    // Save as user types
    field.addEventListener("input", () => {
      localStorage.setItem("myNote", field.value);
      status.textContent = "Saved!";
    });
  </script>
</body>
</html>`,
 goal:"Change the localStorage key from \"myNote\" to \"draft\" in both places (setItem and getItem).",
 source:"MDN — Window.localStorage",
 hint:"Find both occurrences of \"myNote\" and replace with \"draft\"."},

{id:674,title:"HTML: sessionStorage (temporary save)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>sessionStorage</code> works exactly like localStorage but clears when the tab closes. Useful for: form drafts within one session, multi-step wizards, temporary cart state.",
 start:`<!DOCTYPE html>
<html>
<body>
  <label for="tempInput">Temporary note (clears on tab close):</label><br>
  <input type="text" id="tempInput" style="width:300px;padding:6px">
  <p style="color:#666;font-size:12px">Try refreshing — value stays. Close the tab — value disappears.</p>
  <script>
    const input = document.getElementById("tempInput");
    input.value = sessionStorage.getItem("tempNote") || "";
    input.addEventListener("input", () => {
      sessionStorage.setItem("tempNote", input.value);
    });
  </script>
</body>
</html>`,
 goal:"Change the placeholder by adding placeholder=\"Type here\" to the input tag.",
 source:"MDN — Window.sessionStorage",
 hint:"Modify the <input> tag: <input type=\"text\" id=\"tempInput\" placeholder=\"Type here\" style=...>"},

{id:675,title:"HTML: History API",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>history.pushState</code> changes the URL without reloading the page. <code>history.back()</code> and <code>.forward()</code> navigate. Powers single-page apps and smooth back-button behavior.",
 start:`<!DOCTYPE html>
<html>
<body>
  <h3>Fake Single-Page App</h3>
  <button id="page1Btn">Go to /page1</button>
  <button id="page2Btn">Go to /page2</button>
  <button id="backBtn">Back</button>
  <p id="pathDisplay" style="margin-top:12px"></p>
  <script>
    const display = document.getElementById("pathDisplay");
    function updateDisplay(){ display.textContent = "Current path: " + window.location.pathname; }
    document.getElementById("page1Btn").addEventListener("click", () => { history.pushState({}, "", "/page1"); updateDisplay(); });
    document.getElementById("page2Btn").addEventListener("click", () => { history.pushState({}, "", "/page2"); updateDisplay(); });
    document.getElementById("backBtn").addEventListener("click", () => { history.back(); });
    window.addEventListener("popstate", updateDisplay);
    updateDisplay();
  </script>
</body>
</html>`,
 goal:"Add a third button that pushes \"/about\" to the URL.",
 source:"MDN — History API",
 hint:"Copy a button + listener pair and change the path string to \"/about\"."},

{id:676,title:"HTML: Fullscreen API",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>element.requestFullscreen()</code> makes any element fill the screen. <code>document.exitFullscreen()</code> brings it back. Great for image viewers, videos, presentations.",
 start:`<!DOCTYPE html>
<html>
<body>
  <div id="fsBox" style="width:300px;height:150px;background:linear-gradient(135deg,#a855f7,#6366f1);color:white;display:flex;align-items:center;justify-content:center;border-radius:12px;font-size:18px">
    Full-screen me!
  </div>
  <br>
  <button id="fsBtn">Go Fullscreen</button>
  <button id="exitBtn">Exit Fullscreen</button>
  <script>
    const box = document.getElementById("fsBox");
    document.getElementById("fsBtn").addEventListener("click", () => {
      if (box.requestFullscreen) box.requestFullscreen();
    });
    document.getElementById("exitBtn").addEventListener("click", () => {
      if (document.exitFullscreen) document.exitFullscreen();
    });
  </script>
</body>
</html>`,
 goal:"Change the gradient colors in the box. Try linear-gradient(135deg, #10b981, #f59e0b).",
 source:"MDN — Fullscreen API",
 hint:"Find background:linear-gradient(135deg,#a855f7,#6366f1) and change both hex codes."},

{id:677,title:"HTML: Clipboard API (copy text)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>navigator.clipboard.writeText(str)</code> copies text to the clipboard. Returns a Promise. Use it for \"copy code\" buttons, share links, color codes.",
 start:`<!DOCTYPE html>
<html>
<body>
  <label for="textToCopy">Text to copy:</label><br>
  <input type="text" id="textToCopy" value="Hello from Code Ranger!" style="width:300px;padding:6px">
  <button id="copyBtn" style="padding:6px 12px">Copy</button>
  <p id="copyStatus" style="color:#10b981;margin-top:8px"></p>
  <script>
    const input = document.getElementById("textToCopy");
    const status = document.getElementById("copyStatus");
    document.getElementById("copyBtn").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(input.value);
        status.textContent = "✓ Copied!";
        setTimeout(() => { status.textContent = ""; }, 2000);
      } catch (err) {
        status.textContent = "Could not copy";
      }
    });
  </script>
</body>
</html>`,
 goal:"Change the copy confirmation from \"✓ Copied!\" to your own message.",
 source:"MDN — Clipboard API",
 hint:"Find status.textContent = \"✓ Copied!\"; and change the string."},

{id:678,title:"HTML: Notification API",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>new Notification(title, options)</code> shows a system notification — even when the tab isn't active. Always request permission first. Used for chat apps, calendar reminders, build completions.",
 start:`<!DOCTYPE html>
<html>
<body>
  <button id="notifBtn" style="padding:8px 16px">Show Notification</button>
  <p id="notifStatus" style="margin-top:12px"></p>
  <script>
    const status = document.getElementById("notifStatus");
    document.getElementById("notifBtn").addEventListener("click", async () => {
      if (!("Notification" in window)) { status.textContent = "Not supported"; return; }
      let permission = Notification.permission;
      if (permission === "default") permission = await Notification.requestPermission();
      if (permission === "granted") {
        new Notification("Code Ranger", { body: "You clicked the button!" });
        status.textContent = "Notification sent";
      } else {
        status.textContent = "Permission: " + permission;
      }
    });
  </script>
</body>
</html>`,
 goal:"Change the notification body text from \"You clicked the button!\" to your own.",
 source:"MDN — Notification API",
 hint:"Find body: \"You clicked the button!\" and change the string."},

{id:679,title:"HTML: IntersectionObserver intro",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>IntersectionObserver</code> tells you when an element enters or leaves the viewport. Powers lazy loading, scroll animations, infinite scroll. More efficient than scroll event listeners.",
 start:`<!DOCTYPE html>
<html>
<body>
  <p>Scroll down inside the preview...</p>
  <div style="height:200px"></div>
  <div id="watchMe" style="background:#a855f7;color:white;padding:30px;text-align:center;border-radius:12px;transition:all 0.5s">Watch me</div>
  <div style="height:200px"></div>
  <script>
    const target = document.getElementById("watchMe");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.style.background = "#10b981";
          target.textContent = "Visible!";
        } else {
          target.style.background = "#a855f7";
          target.textContent = "Watch me";
        }
      });
    });
    observer.observe(target);
  </script>
</body>
</html>`,
 goal:"Change the visible color from #10b981 (green) to #f59e0b (orange).",
 source:"MDN — IntersectionObserver",
 hint:"Find target.style.background = \"#10b981\"; and change the hex."},

{id:680,title:"HTML: details and summary",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;details&gt;</code> creates a native collapsible section. <code>&lt;summary&gt;</code> is the always-visible header. Browser handles the toggle — no JavaScript needed.",
 start:`<!DOCTYPE html>
<html>
<body>
  <details style="border:2px solid #a855f7;padding:12px;border-radius:8px;margin:8px 0">
    <summary style="cursor:pointer;font-weight:bold;color:#a855f7">What is Code Ranger?</summary>
    <p>A learning platform with 770 coding challenges, an Interview Lab, and a Build Lab.</p>
  </details>

  <details style="border:2px solid #10b981;padding:12px;border-radius:8px;margin:8px 0" open>
    <summary style="cursor:pointer;font-weight:bold;color:#10b981">FAQ (open by default)</summary>
    <p>The <code>open</code> attribute makes the details start expanded.</p>
  </details>
</body>
</html>`,
 goal:"Add a third details/summary block about a topic you like, with your own question and answer.",
 source:"MDN — details / summary elements",
 hint:"Copy a <details>...</details> block and change the summary text and paragraph."},

{id:681,title:"HTML: dialog element (native modal)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;dialog&gt;</code> is a native modal popup. Open with <code>.showModal()</code> (blocks the page) or <code>.show()</code> (non-blocking). Browser handles focus trap and Esc key.",
 start:`<!DOCTYPE html>
<html>
<body>
  <button id="openBtn" style="padding:8px 16px">Open Dialog</button>

  <dialog id="myDialog" style="padding:24px;border:2px solid #a855f7;border-radius:12px;max-width:300px">
    <h3>Hello from a native dialog!</h3>
    <p>The browser dims the background automatically.</p>
    <button id="closeBtn">Close</button>
  </dialog>

  <script>
    const dialog = document.getElementById("myDialog");
    document.getElementById("openBtn").addEventListener("click", () => dialog.showModal());
    document.getElementById("closeBtn").addEventListener("click", () => dialog.close());
  </script>
</body>
</html>`,
 goal:"Change the dialog's heading from \"Hello from a native dialog!\" to your own.",
 source:"MDN — dialog element",
 hint:"Find <h3>Hello from a native dialog!</h3> and change the text."},

{id:682,title:"HTML: progress bar",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;progress value max&gt;</code> shows task completion. Browsers style it natively. Use for file uploads, downloads, multi-step forms.",
 start:`<!DOCTYPE html>
<html>
<body>
  <label for="dlProgress">Download progress:</label><br>
  <progress id="dlProgress" value="30" max="100" style="width:100%;height:20px"></progress>
  <p id="pctText">30%</p>
  <button id="speedBtn">Add 10%</button>
  <script>
    const bar = document.getElementById("dlProgress");
    const txt = document.getElementById("pctText");
    document.getElementById("speedBtn").addEventListener("click", () => {
      let next = bar.value + 10;
      if (next > 100) next = 100;
      bar.value = next;
      txt.textContent = next + "%";
    });
  </script>
</body>
</html>`,
 goal:"Change the starting value from 30 to 50 (in both the progress tag and the <p>).",
 source:"MDN — progress element",
 hint:"Find value=\"30\" in the progress tag and 30% in the <p>. Change both."},

{id:683,title:"HTML: meter element",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;meter&gt;</code> shows a value within a known range — like disk usage or password strength. Unlike progress (a task in motion), meter shows a fixed measurement.",
 start:`<!DOCTYPE html>
<html>
<body>
  <p>Disk usage: <meter value="0.7" min="0" max="1">70%</meter></p>
  <p>Battery: <meter value="35" min="0" max="100" low="20" high="80" optimum="100">35%</meter></p>
  <p>Score: <meter value="92" min="0" max="100" low="40" high="80" optimum="100">92</meter></p>
  <p style="color:#666;font-size:12px">Notice: meter changes color based on low/high/optimum zones.</p>
</body>
</html>`,
 goal:"Add a fourth meter showing fuel at 12 out of 60 with low=15.",
 source:"MDN — meter element",
 hint:"Add: <p>Fuel: <meter value=\"12\" min=\"0\" max=\"60\" low=\"15\">12</meter></p>"},

{id:684,title:"HTML: time element",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;time datetime=\"...\"&gt;</code> marks up dates and times semantically. The <code>datetime</code> attribute uses machine-readable format (ISO 8601). Helps search engines and assistive tech.",
 start:`<!DOCTYPE html>
<html>
<body>
  <p>Published on <time datetime="2026-05-17">May 17, 2026</time></p>
  <p>The show starts at <time datetime="20:00">8:00 PM</time></p>
  <p>I was born in <time datetime="1995-04-15">April 1995</time></p>
  <article style="border:1px solid #a855f7;padding:12px;border-radius:8px;margin-top:12px">
    <h3>Blog Post Title</h3>
    <p>By Author · <time datetime="2026-05-17T09:30">May 17 at 9:30 AM</time></p>
  </article>
</body>
</html>`,
 goal:"Add a new <p> with today's date in a <time> tag.",
 source:"MDN — time element",
 hint:"Add: <p>Today is <time datetime=\"2026-05-17\">May 17, 2026</time></p>"},

{id:685,title:"HTML: picture and srcset (responsive images)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;picture&gt;</code> with <code>&lt;source&gt;</code> tags lets the browser pick the best image for the screen size or format. Modern responsive images.",
 start:`<!DOCTYPE html>
<html>
<body>
  <h3>Responsive Image</h3>
  <picture>
    <source media="(min-width: 800px)" srcset="https://placehold.co/600x300/a855f7/white?text=Big+Screen">
    <source media="(min-width: 400px)" srcset="https://placehold.co/400x200/10b981/white?text=Medium">
    <img src="https://placehold.co/200x100/f59e0b/white?text=Small" alt="Responsive demo" style="border-radius:8px">
  </picture>
  <p style="color:#666;font-size:12px">Resize the preview window — the image source changes.</p>
</body>
</html>`,
 goal:"Change the \"Big+Screen\" text in the first source to your own label.",
 source:"MDN — picture element",
 hint:"Find text=Big+Screen and change to text=Your+Label (use + for spaces)."},

{id:686,title:"HTML: viewport meta tag",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;meta name=\"viewport\"&gt;</code> tells mobile browsers how to size the page. Without it, mobile shows a tiny zoomed-out desktop view. <code>width=device-width</code> + <code>initial-scale=1</code> is the standard.",
 start:`<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mobile-friendly page</title>
</head>
<body style="font-family:sans-serif;padding:12px">
  <h2 style="color:#a855f7">Mobile-Ready Page</h2>
  <p>This page scales properly on phones because of the viewport meta tag.</p>
  <p>Without it, mobile devices would render at 980px width and zoom out.</p>
</body>
</html>`,
 goal:"Try changing initial-scale=1 to initial-scale=0.5 — text will look smaller.",
 source:"MDN — Viewport meta tag",
 hint:"Find initial-scale=1 and change to initial-scale=0.5."},

{id:687,title:"HTML: input type search",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;input type=\"search\"&gt;</code> looks like a text input but browsers add a built-in clear (×) button. Mobile keyboards show a search-optimized layout.",
 start:`<!DOCTYPE html>
<html>
<body>
  <label for="searchBox">Search:</label><br>
  <input type="search" id="searchBox" placeholder="Type to search..." style="width:300px;padding:8px;font-size:14px;border:2px solid #a855f7;border-radius:6px">
  <p id="searchOut" style="margin-top:12px"></p>
  <script>
    const box = document.getElementById("searchBox");
    const out = document.getElementById("searchOut");
    box.addEventListener("input", () => {
      out.textContent = box.value ? "Searching for: " + box.value : "";
    });
  </script>
</body>
</html>`,
 goal:"Change the placeholder to something specific, like \"Search dragons...\".",
 source:"MDN — input type=search",
 hint:"Find placeholder=\"Type to search...\" and change the string."},

{id:688,title:"HTML: input type hidden",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;input type=\"hidden\"&gt;</code> stores values invisible to users but sent with forms. Used for user IDs, CSRF tokens, form state.",
 start:`<!DOCTYPE html>
<html>
<body>
  <form id="orderForm">
    <input type="hidden" id="userIdField" value="user_12345">
    <input type="hidden" id="cartIdField" value="cart_abc">

    <label for="qtyField">Quantity:</label>
    <input type="number" id="qtyField" value="1" min="1" max="10">

    <button type="button" id="submitBtn">Place Order</button>
  </form>
  <p id="orderOut" style="margin-top:12px;color:#a855f7"></p>
  <script>
    document.getElementById("submitBtn").addEventListener("click", () => {
      const userId = document.getElementById("userIdField").value;
      const cartId = document.getElementById("cartIdField").value;
      const qty = document.getElementById("qtyField").value;
      document.getElementById("orderOut").textContent = "Order: " + qty + " items for " + userId + " (" + cartId + ")";
    });
  </script>
</body>
</html>`,
 goal:"Change the hidden userIdField value from \"user_12345\" to a different ID, then place an order.",
 source:"MDN — input type=hidden",
 hint:"Find value=\"user_12345\" in the hidden input and change it."},

{id:689,title:"HTML: input type file",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;input type=\"file\"&gt;</code> opens a file picker. Use <code>accept=\"...\"</code> to filter file types. <code>multiple</code> allows several files. Read details from the <code>files</code> property.",
 start:`<!DOCTYPE html>
<html>
<body>
  <label for="fileInput">Pick an image:</label><br>
  <input type="file" id="fileInput" accept="image/*">
  <ul id="fileList" style="margin-top:12px;padding-left:20px"></ul>
  <script>
    const input = document.getElementById("fileInput");
    const list = document.getElementById("fileList");
    input.addEventListener("change", () => {
      list.textContent = "";
      for (const file of input.files) {
        const li = document.createElement("li");
        li.textContent = file.name + " — " + (file.size / 1024).toFixed(1) + " KB";
        list.appendChild(li);
      }
    });
  </script>
</body>
</html>`,
 goal:"Add the <code>multiple</code> attribute to the file input to allow picking several files at once.",
 source:"MDN — input type=file",
 hint:"Change <input type=\"file\" id=\"fileInput\" accept=\"image/*\"> to add multiple: <input type=\"file\" id=\"fileInput\" accept=\"image/*\" multiple>"},

{id:690,title:"HTML: output element",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;output&gt;</code> displays the result of a calculation. Screen readers announce updates automatically. Pair with the <code>for</code> attribute pointing to input IDs.",
 start:`<!DOCTYPE html>
<html>
<body>
  <form id="addForm" style="display:flex;gap:8px;align-items:center">
    <label for="numA">A:</label>
    <input type="number" id="numA" value="5" style="width:60px">
    <span>+</span>
    <label for="numB">B:</label>
    <input type="number" id="numB" value="3" style="width:60px">
    <span>=</span>
    <output for="numA numB" id="sumOut" style="font-weight:bold;color:#a855f7;font-size:18px">8</output>
  </form>
  <script>
    const a = document.getElementById("numA");
    const b = document.getElementById("numB");
    const out = document.getElementById("sumOut");
    function recalc(){ out.textContent = parseFloat(a.value || 0) + parseFloat(b.value || 0); }
    a.addEventListener("input", recalc);
    b.addEventListener("input", recalc);
  </script>
</body>
</html>`,
 goal:"Change the + to × and update recalc to multiply (* instead of +).",
 source:"MDN — output element",
 hint:"Change <span>+</span> to <span>×</span>. In recalc, change a.value + b.value to a.value * b.value."},
{id:691,title:"HTML: autocomplete attribute",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>autocomplete=\"...\"</code> tells browsers what kind of data an input expects (email, given-name, postal-code, etc). Helps password managers and autofill work properly.",
 start:`<!DOCTYPE html>
<html>
<body>
  <form style="display:grid;gap:8px;max-width:300px">
    <label for="emailFld">Email:</label>
    <input type="email" id="emailFld" autocomplete="email" placeholder="Browser may autofill">

    <label for="nameFld">Full name:</label>
    <input type="text" id="nameFld" autocomplete="name">

    <label for="phoneFld">Phone:</label>
    <input type="tel" id="phoneFld" autocomplete="tel">

    <label for="zipFld">ZIP code:</label>
    <input type="text" id="zipFld" autocomplete="postal-code">
  </form>
  <p style="color:#666;font-size:12px;margin-top:12px">If you've saved info in your browser, click a field to see suggestions.</p>
</body>
</html>`,
 goal:"Add a field for street address using autocomplete=\"street-address\" with a proper label.",
 source:"MDN — Autocomplete attribute",
 hint:"Add: <label for=\"streetFld\">Street:</label><input type=\"text\" id=\"streetFld\" autocomplete=\"street-address\">"},

{id:692,title:"HTML: lang attribute",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>lang=\"en\"</code> on the <code>&lt;html&gt;</code> tag declares the page's language. Screen readers use it for pronunciation. Browsers offer translation. Use ISO codes (en, es, ja, fr).",
 start:`<!DOCTYPE html>
<html lang="en">
<body>
  <p>This English text is read with an English accent.</p>
  <p lang="es">Hola, soy un párrafo en español.</p>
  <p lang="ja">こんにちは、私は日本語の段落です。</p>
  <p lang="fr">Bonjour, je suis un paragraphe en français.</p>
  <p style="color:#666;font-size:12px">Each &lt;p&gt; declares its own language so screen readers switch voices.</p>
</body>
</html>`,
 goal:"Add a fifth paragraph in another language with the right lang code (try lang=\"de\" for German).",
 source:"MDN — Global lang attribute",
 hint:"Add: <p lang=\"de\">Hallo, ich bin ein deutscher Absatz.</p>"},

{id:693,title:"HTML: dir attribute (rtl/ltr)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>dir=\"rtl\"</code> reverses text direction for right-to-left languages (Arabic, Hebrew, Persian). Browsers flip the layout including padding, margins, and lists.",
 start:`<!DOCTYPE html>
<html>
<body>
  <h3>Left-to-right (default):</h3>
  <div dir="ltr" style="border:1px solid #a855f7;padding:8px">
    Hello, this reads left to right.
  </div>

  <h3>Right-to-left:</h3>
  <div dir="rtl" style="border:1px solid #10b981;padding:8px">
    مرحبا، يقرأ هذا من اليمين إلى اليسار.
  </div>

  <h3>RTL list:</h3>
  <ul dir="rtl" style="border:1px solid #f59e0b;padding:12px">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</body>
</html>`,
 goal:"Change the second div's dir to \"ltr\" and watch the Arabic text re-align.",
 source:"MDN — Global dir attribute",
 hint:"Find dir=\"rtl\" on the second div and change to dir=\"ltr\"."},

{id:694,title:"HTML: download attribute",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>download</code> on a link makes it download the file instead of navigating. Optional value sets the filename. Works only for same-origin URLs.",
 start:`<!DOCTYPE html>
<html>
<body>
  <h3>Download Examples</h3>
  <p><a href="data:text/plain;charset=utf-8,Hello%20Code%20Ranger!" download="greeting.txt">Download greeting.txt</a></p>
  <p><a href="data:text/csv;charset=utf-8,Name,Score%0AAda,95%0ABo,82" download="scores.csv">Download scores.csv</a></p>
  <p style="color:#666;font-size:12px">Click a link — it downloads instead of opening.</p>
</body>
</html>`,
 goal:"Add a third download link for a file called \"notes.txt\" with content \"My first note\".",
 source:"MDN — download attribute",
 hint:"Add: <p><a href=\"data:text/plain;charset=utf-8,My%20first%20note\" download=\"notes.txt\">Download notes.txt</a></p>"},

{id:695,title:"HTML: target=_blank with rel=noopener",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>target=\"_blank\"</code> opens a link in a new tab. But it gives the new page access to <code>window.opener</code> — a security risk. Always add <code>rel=\"noopener noreferrer\"</code> with it.",
 start:`<!DOCTYPE html>
<html>
<body>
  <h3>External Links — Safe Pattern</h3>
  <p><a href="https://example.com" target="_blank" rel="noopener noreferrer">Example.com (safe)</a></p>
  <p><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN docs (safe)</a></p>

  <h3>External Link — Unsafe (don't do this)</h3>
  <p><a href="https://example.com" target="_blank">Example.com (no rel — security risk)</a></p>

  <p style="color:#666;font-size:12px">Always pair target=\"_blank\" with rel=\"noopener noreferrer\".</p>
</body>
</html>`,
 goal:"Add the missing rel=\"noopener noreferrer\" to the unsafe link.",
 source:"MDN — rel=noopener + web.dev — External anchors and rel=noopener",
 hint:"Find the third link and add rel=\"noopener noreferrer\" before its closing >."},

{id:696,title:"HTML: template element",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>&lt;template&gt;</code> holds HTML that isn't rendered. Clone its content with JavaScript to build dynamic lists efficiently. Cleaner than building HTML as strings.",
 start:`<!DOCTYPE html>
<html>
<body>
  <button id="addBtn">Add Card</button>
  <div id="cardList" style="margin-top:12px;display:grid;gap:8px"></div>

  <template id="cardTpl">
    <div style="padding:12px;background:#a855f7;color:white;border-radius:8px">
      <strong>Card</strong>
      <p>Cloned from a template</p>
    </div>
  </template>

  <script>
    const tpl = document.getElementById("cardTpl");
    const list = document.getElementById("cardList");
    document.getElementById("addBtn").addEventListener("click", () => {
      const clone = tpl.content.cloneNode(true);
      list.appendChild(clone);
    });
  </script>
</body>
</html>`,
 goal:"Change the card background from #a855f7 to #10b981, then click Add Card to see new green cards.",
 source:"MDN — template element",
 hint:"Find background:#a855f7 inside the <template> and change to #10b981."},

{id:697,title:"HTML: contenteditable",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>contenteditable=\"true\"</code> turns any element into an editable area — like a built-in mini text editor. Get the value via <code>.textContent</code> or <code>.innerHTML</code>.",
 start:`<!DOCTYPE html>
<html>
<body>
  <h3>Click the boxes and type:</h3>
  <div contenteditable="true" style="border:2px solid #a855f7;padding:12px;border-radius:8px;min-height:40px;margin-bottom:8px">
    Edit this text directly in the browser!
  </div>
  <div contenteditable="true" style="border:2px solid #10b981;padding:12px;border-radius:8px;min-height:40px">
    Another editable box. Click and type.
  </div>
  <button id="readBtn" style="margin-top:8px">Read first box</button>
  <p id="readOut" style="margin-top:8px"></p>
  <script>
    document.getElementById("readBtn").addEventListener("click", () => {
      const first = document.querySelector("[contenteditable]");
      document.getElementById("readOut").textContent = "Content: " + first.textContent;
    });
  </script>
</body>
</html>`,
 goal:"Change one of the divs from contenteditable=\"true\" to contenteditable=\"false\" and see how it locks.",
 source:"MDN — contenteditable global attribute",
 hint:"Change contenteditable=\"true\" to contenteditable=\"false\" on either div."},

{id:698,title:"HTML: draggable attribute",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>draggable=\"true\"</code> makes any element draggable (combined with drag events from lesson 671). By default, only images and links are draggable.",
 start:`<!DOCTYPE html>
<html>
<body>
  <h3>Try dragging the items:</h3>
  <div style="display:flex;gap:8px;flex-wrap:wrap">
    <div draggable="true" style="background:#a855f7;color:white;padding:12px;border-radius:8px;cursor:move">Draggable</div>
    <div style="background:#ddd;padding:12px;border-radius:8px">Not draggable</div>
    <div draggable="true" style="background:#10b981;color:white;padding:12px;border-radius:8px;cursor:move">Also draggable</div>
  </div>
  <p style="color:#666;font-size:12px">The cursor:move style hints the element is draggable.</p>
</body>
</html>`,
 goal:"Make the middle (gray) box draggable by adding draggable=\"true\" and cursor:move.",
 source:"MDN — draggable global attribute",
 hint:"Change the middle div: <div draggable=\"true\" style=\"background:#ddd;padding:12px;border-radius:8px;cursor:move\">."},

{id:699,title:"HTML: spellcheck attribute",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>spellcheck=\"true\"</code> or <code>\"false\"</code> turns the browser spell-checker on or off. Useful: disable on usernames, passwords, code fields where misspellings are expected.",
 start:`<!DOCTYPE html>
<html>
<body>
  <h3>Spellcheck Demos</h3>
  <label for="emailField">Email (no spellcheck):</label><br>
  <input type="text" id="emailField" spellcheck="false" value="myuser123" style="width:300px;padding:6px"><br><br>

  <label for="msgField">Message (spellcheck on):</label><br>
  <textarea id="msgField" spellcheck="true" rows="3" cols="40">Try misspeling somthing on purpose.</textarea>
</body>
</html>`,
 goal:"Toggle the textarea's spellcheck from \"true\" to \"false\" — red underlines should disappear.",
 source:"MDN — spellcheck global attribute",
 hint:"Find spellcheck=\"true\" on the textarea and change to spellcheck=\"false\"."},

{id:700,title:"HTML: hidden attribute",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"The <code>hidden</code> boolean attribute hides an element entirely (like <code>display: none</code>). Cleaner than CSS for true \"this content isn't here\" semantics.",
 start:`<!DOCTYPE html>
<html>
<body>
  <p>Visible paragraph</p>
  <p hidden>Hidden paragraph (you can't see this)</p>
  <p>Another visible paragraph</p>

  <button id="toggleBtn">Toggle the secret</button>
  <p id="secret" hidden style="color:#a855f7;font-weight:bold">🐉 Secret revealed!</p>

  <script>
    const secret = document.getElementById("secret");
    document.getElementById("toggleBtn").addEventListener("click", () => {
      secret.hidden = !secret.hidden;
    });
  </script>
</body>
</html>`,
 goal:"Change the secret message text from \"🐉 Secret revealed!\" to your own.",
 source:"MDN — hidden global attribute",
 hint:"Find <p id=\"secret\" hidden ...>🐉 Secret revealed!</p> and change the text."},

{id:701,title:"HTML: translate attribute",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>translate=\"no\"</code> tells translation services (like Google Translate) to leave the content alone. Use on brand names, code snippets, untranslatable terms.",
 start:`<!DOCTYPE html>
<html lang="en">
<body>
  <p>Welcome to <strong translate="no">Code Ranger</strong>!</p>
  <p>Your favorite framework is <span translate="no">React</span>.</p>

  <pre translate="no" style="background:#0f172a;color:#10b981;padding:12px;border-radius:6px;font-family:monospace">
const greeting = "Hello, World!";
console.log(greeting);
  </pre>

  <p style="color:#666;font-size:12px">When this page is translated, the brand names and code stay in English.</p>
</body>
</html>`,
 goal:"Add another <strong translate=\"no\"> for a brand name of your choice.",
 source:"MDN — translate global attribute",
 hint:"Add a <p>My favorite editor is <strong translate=\"no\">VS Code</strong>.</p>"},

{id:702,title:"HTML: tabindex attribute",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>tabindex=\"0\"</code> makes any element focusable via Tab. <code>-1</code> = focusable by script only. Positive numbers create a specific tab order (avoid — confusing).",
 start:`<!DOCTYPE html>
<html>
<body>
  <p>Press Tab repeatedly to move through the focusable items:</p>
  <button>Normal button (auto-focusable)</button><br><br>
  <div tabindex="0" style="display:inline-block;padding:8px 16px;background:#a855f7;color:white;border-radius:6px;cursor:pointer">
    Custom focusable div (tabindex=0)
  </div><br><br>
  <span tabindex="0" style="display:inline-block;padding:8px 16px;background:#10b981;color:white;border-radius:6px;cursor:pointer">
    Focusable span (tabindex=0)
  </span>
  <p style="color:#666;font-size:12px;margin-top:12px">Without tabindex, divs and spans can't be reached by keyboard.</p>
</body>
</html>`,
 goal:"Remove tabindex=\"0\" from the span and Tab through — span will be skipped.",
 source:"MDN — tabindex global attribute",
 hint:"Delete tabindex=\"0\" from the <span> element."},

{id:703,title:"HTML: title attribute (native tooltip)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"html",
 desc:"<code>title=\"...\"</code> shows a browser tooltip on hover. Free and accessible — but mobile users can't see it. For critical info, use visible text instead.",
 start:`<!DOCTYPE html>
<html>
<body>
  <p>Hover the underlined words:</p>
  <p>
    The <abbr title="HyperText Markup Language">HTML</abbr> spec is maintained by the
    <abbr title="World Wide Web Consortium">W3C</abbr> and <abbr title="Web Hypertext Application Technology Working Group">WHATWG</abbr>.
  </p>
  <button title="Saves your work to local storage">💾 Save</button>
  <button title="Permanently deletes the current document">🗑️ Delete</button>
  <p>
    <a href="#" title="Opens in a new tab">External link</a>
  </p>
</body>
</html>`,
 goal:"Add a new <abbr> for \"CSS\" with the title \"Cascading Style Sheets\".",
 source:"MDN — title global attribute",
 hint:"Add somewhere in a <p>: <abbr title=\"Cascading Style Sheets\">CSS</abbr>"},
/* ══ BEGINNER LESSONS — CSS DEEP DIVE (704–736) — MDN Web Docs ══ */
// Continues 631-650. Covers modern CSS: Grid/Flexbox deep dive, container queries, modern selectors.

{id:704,title:"CSS Grid: template-areas",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>grid-template-areas</code> lets you draw your layout as text. Name each area, then assign elements with <code>grid-area: name</code>. Wildly readable.",
 start:`.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "side   main"
    "footer footer";
  grid-template-columns: 100px 1fr;
  gap: 8px;
  height: 240px;
}
.layout > * { padding: 12px; border-radius: 6px; color: white; font-weight: bold; }
.h { grid-area: header; background: #a855f7; }
.s { grid-area: side;   background: #10b981; }
.m { grid-area: main;   background: #f59e0b; }
.f { grid-area: footer; background: #6366f1; }`,
 goal:"Swap \"side\" and \"main\" in the template-areas string so the sidebar appears on the right.",
 source:"MDN — grid-template-areas",
 hint:"Change \"side   main\" to \"main   side\" in the grid-template-areas string."},

{id:705,title:"CSS Grid: auto-fit with minmax",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>repeat(auto-fit, minmax(180px, 1fr))</code> creates as many columns as fit, each at least 180px wide. Responsive without media queries — the killer feature of CSS Grid.",
 start:`.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 8px;
}
.card {
  background: linear-gradient(135deg, #a855f7, #6366f1);
  color: white;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
}`,
 goal:"Change minmax(120px, 1fr) to minmax(200px, 1fr) — cards get wider, fewer per row.",
 source:"MDN — auto-fit / auto-fill + CSS Grid",
 hint:"Find minmax(120px, 1fr) and change 120px to 200px."},

{id:706,title:"CSS Grid: auto-fill vs auto-fit",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>auto-fill</code> keeps empty columns for the maximum count. <code>auto-fit</code> collapses empty columns so items stretch. Subtle but important difference.",
 start:`.row { display: grid; gap: 8px; margin-bottom: 12px; }
.fit  { grid-template-columns: repeat(auto-fit,  minmax(80px, 1fr)); }
.fill { grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); }

.cell {
  background: #a855f7;
  color: white;
  padding: 16px;
  border-radius: 6px;
  text-align: center;
}`,
 goal:"Change auto-fit to auto-fill in .fit and watch the difference disappear if you have many cells.",
 source:"MDN — repeat() with auto-fit and auto-fill",
 hint:"Find .fit { grid-template-columns: repeat(auto-fit, ...); } and change auto-fit to auto-fill."},

{id:707,title:"CSS Grid: gap (rows and columns)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>gap: 16px</code> sets equal row+column gaps. <code>gap: 8px 24px</code> sets row-gap and column-gap separately. Works in Grid AND Flexbox.",
 start:`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 24px;
}
.cell {
  background: #a855f7;
  color: white;
  padding: 16px;
  border-radius: 6px;
  text-align: center;
}`,
 goal:"Change gap to 32px (single value — equal gaps).",
 source:"MDN — gap property",
 hint:"Find gap: 8px 24px; and change to gap: 32px;"},

{id:708,title:"CSS Flexbox: flex-grow",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>flex-grow: 1</code> on a flex item lets it expand to fill extra space. Use different growth ratios (1 vs 2) to make some items larger.",
 start:`.flex {
  display: flex;
  gap: 8px;
}
.box {
  background: #a855f7;
  color: white;
  padding: 16px;
  border-radius: 6px;
  text-align: center;
}
.b1 { flex-grow: 1; }
.b2 { flex-grow: 2; background: #10b981; }
.b3 { flex-grow: 1; }`,
 goal:"Change .b2's flex-grow from 2 to 3 — it gets even bigger relative to siblings.",
 source:"MDN — flex-grow property",
 hint:"Find .b2 { flex-grow: 2; ... } and change 2 to 3."},

{id:709,title:"CSS Flexbox: flex-shrink",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>flex-shrink: 0</code> prevents an item from shrinking when there's not enough room. Useful for icons or logos that should keep their size.",
 start:`.flex {
  display: flex;
  gap: 8px;
  max-width: 250px;
  border: 2px dashed #ccc;
  padding: 8px;
}
.box {
  background: #a855f7;
  color: white;
  padding: 16px;
  border-radius: 6px;
  width: 100px;
}
.fixed { flex-shrink: 0; background: #10b981; }`,
 goal:"Add flex-shrink: 0 to .box too — both boxes will overflow instead of shrinking.",
 source:"MDN — flex-shrink property",
 hint:"Add flex-shrink: 0; inside .box { ... }."},

{id:710,title:"CSS Flexbox: flex-basis",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>flex-basis</code> sets the initial size of a flex item before grow/shrink calculations. Use it instead of width when working with flexbox.",
 start:`.flex {
  display: flex;
  gap: 8px;
}
.box {
  background: #a855f7;
  color: white;
  padding: 16px;
  border-radius: 6px;
  text-align: center;
}
.b1 { flex-basis: 100px; }
.b2 { flex-basis: 200px; }
.b3 { flex-basis: 50px; }`,
 goal:"Change .b3's flex-basis from 50px to 150px.",
 source:"MDN — flex-basis property",
 hint:"Find .b3 { flex-basis: 50px; } and change to 150px."},

{id:711,title:"CSS Flexbox: order",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>order</code> changes a flex item's position WITHOUT touching HTML. Lower numbers come first. Great for responsive reordering with media queries.",
 start:`.flex {
  display: flex;
  gap: 8px;
}
.box {
  background: #a855f7;
  color: white;
  padding: 16px;
  border-radius: 6px;
  font-weight: bold;
  flex: 1;
  text-align: center;
}
.first  { order: -1; background: #10b981; }
.middle { order: 0; }
.last   { order: 1; background: #f59e0b; }`,
 goal:"Change .middle's order from 0 to 2 — it now appears last.",
 source:"MDN — order property",
 hint:"Find .middle { order: 0; } and change to order: 2."},

{id:712,title:"CSS Logical Properties",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"Use <code>margin-inline-start</code> instead of <code>margin-left</code>. Logical properties flip automatically in RTL languages. Future-proof your CSS.",
 start:`.box {
  background: #a855f7;
  color: white;
  padding: 12px;
  margin-block-end: 12px;
  border-inline-start: 4px solid #f59e0b;
  border-radius: 8px;
}
.rtl-box {
  background: #10b981;
  color: white;
  padding: 12px;
  border-inline-start: 4px solid #f59e0b;
  border-radius: 8px;
  direction: rtl;
}`,
 goal:"Change border-inline-start to border-inline-end on .box and watch the orange bar move.",
 source:"MDN — CSS Logical Properties",
 hint:"Find border-inline-start in .box and change to border-inline-end."},

{id:713,title:"CSS Container Queries (intro)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>@container</code> queries respond to a PARENT'S size, not the whole viewport. Components adapt to wherever they're placed. Modern alternative to media queries for components.",
 start:`.card-wrap {
  container-type: inline-size;
  resize: horizontal;
  overflow: auto;
  border: 2px dashed #ccc;
  padding: 8px;
  max-width: 100%;
}

.card {
  background: #a855f7;
  color: white;
  padding: 12px;
  border-radius: 8px;
}

@container (min-width: 300px) {
  .card { background: #10b981; }
}
@container (min-width: 500px) {
  .card { background: #f59e0b; font-size: 18px; }
}`,
 goal:"Add a third @container breakpoint at min-width: 700px changing the card to red (#ef4444).",
 source:"MDN — CSS container queries",
 hint:"Add: @container (min-width: 700px) { .card { background: #ef4444; } }"},

{id:714,title:"CSS :has() selector",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>:has()</code> is the \"parent selector\" — style an element based on what it contains. Game-changer for things like \"highlight any card that has an image\".",
 start:`.card {
  padding: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin-bottom: 12px;
  background: white;
}

/* Style cards that contain an image */
.card:has(img) {
  border-color: #a855f7;
  background: #f3e8ff;
}

/* Style cards that have a button labeled "Buy" */
.card:has(button.buy) {
  background: #d1fae5;
  border-color: #10b981;
}

img { max-width: 60px; border-radius: 4px; }`,
 goal:"Add a new rule: .card:has(h3) { font-style: italic; } — italicizes any card with a heading.",
 source:"MDN — :has() pseudo-class",
 hint:"Add at the bottom: .card:has(h3) { font-style: italic; }"},

{id:715,title:"CSS :is() and :where()",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>:is(h1, h2, h3)</code> groups selectors compactly. <code>:where()</code> is identical BUT has zero specificity — great for resets and defaults.",
 start:`/* Without :is() — repetitive */
/* article h1, article h2, article h3 { color: #a855f7; } */

/* With :is() — concise */
article :is(h1, h2, h3) {
  color: #a855f7;
  font-family: sans-serif;
}

/* :where() — same effect but specificity zero, easy to override */
article :where(p, li) {
  line-height: 1.6;
}`,
 goal:"Add another :is() rule grouping <strong> and <em>: article :is(strong, em) { color: #10b981; }",
 source:"MDN — :is() and :where()",
 hint:"Add at the bottom: article :is(strong, em) { color: #10b981; }"},

{id:716,title:"CSS scroll-snap",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>scroll-snap-type</code> on a scroller plus <code>scroll-snap-align</code> on items creates snap-to-position scrolling. Used for carousels, image galleries, full-page scrolling.",
 start:`.carousel {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 12px 0;
  scroll-behavior: smooth;
}
.slide {
  scroll-snap-align: start;
  flex: 0 0 200px;
  height: 100px;
  background: linear-gradient(135deg, #a855f7, #6366f1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}`,
 goal:"Change scroll-snap-type from \"x mandatory\" to \"x proximity\" — snapping becomes optional.",
 source:"MDN — CSS scroll snap",
 hint:"Find scroll-snap-type: x mandatory; and change to scroll-snap-type: x proximity;"},

{id:717,title:"CSS position: sticky",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>position: sticky</code> is part-relative, part-fixed. Element scrolls normally until it hits the offset (e.g., top: 0), then it stays. Perfect for sticky headers and section labels.",
 start:`.container {
  height: 300px;
  overflow-y: auto;
  border: 2px solid #ccc;
}
.sticky-header {
  position: sticky;
  top: 0;
  background: #a855f7;
  color: white;
  padding: 12px;
  font-weight: bold;
  z-index: 1;
}
.content { padding: 12px; }
.content p { margin-bottom: 20px; }`,
 goal:"Change top: 0 to top: 20px — the sticky header will stop 20px from the top.",
 source:"MDN — position: sticky",
 hint:"Find top: 0; in .sticky-header and change to top: 20px;"},

{id:718,title:"CSS aspect-ratio",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>aspect-ratio: 16 / 9</code> keeps an element's width:height ratio fixed. Set just the width, height calculates automatically. Perfect for video embeds, image cards.",
 start:`.video {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #a855f7, #6366f1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  margin-bottom: 12px;
}
.square {
  width: 150px;
  aspect-ratio: 1 / 1;
  background: #10b981;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}`,
 goal:"Change .video's aspect-ratio from 16 / 9 to 4 / 3 — the box becomes more square.",
 source:"MDN — aspect-ratio property",
 hint:"Find aspect-ratio: 16 / 9; and change to aspect-ratio: 4 / 3;"},

{id:719,title:"CSS clamp() — fluid sizing",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>clamp(min, preferred, max)</code> picks the middle value, never going below min or above max. Perfect for fluid typography: scales with screen but stays readable.",
 start:`h1 {
  font-size: clamp(24px, 5vw, 48px);
  color: #a855f7;
}

.container {
  width: clamp(200px, 80%, 600px);
  background: #f3e8ff;
  padding: 16px;
  margin: 12px 0;
  border-radius: 8px;
}

p { color: #6b21a8; }`,
 goal:"Change h1's clamp to clamp(18px, 8vw, 64px) — bigger range, more dramatic scaling.",
 source:"MDN — clamp() function",
 hint:"Find font-size: clamp(24px, 5vw, 48px); and change to clamp(18px, 8vw, 64px)."},

{id:720,title:"CSS counters (auto-numbering)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"CSS can auto-number elements using <code>counter-reset</code>, <code>counter-increment</code>, and <code>content: counter(name)</code>. Used for sectioned docs, custom lists, step indicators.",
 start:`ol.steps {
  counter-reset: step;
  list-style: none;
  padding: 0;
}
ol.steps li {
  counter-increment: step;
  padding: 12px;
  margin-bottom: 8px;
  background: #f3e8ff;
  border-radius: 8px;
}
ol.steps li::before {
  content: "Step " counter(step) ": ";
  color: #a855f7;
  font-weight: bold;
}`,
 goal:"Change \"Step \" to your own prefix, like \"Phase \" or \"Move \".",
 source:"MDN — CSS Counters",
 hint:"Find content: \"Step \" counter(step) \": \"; and change \"Step \" to your prefix."},
{id:721,title:"CSS multi-column layout",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>column-count</code> or <code>column-width</code> flow text across multiple columns — like a newspaper. Browser handles all the splitting.",
 start:`.article {
  column-count: 3;
  column-gap: 24px;
  column-rule: 1px solid #a855f7;
  padding: 12px;
  font-size: 13px;
  line-height: 1.6;
}`,
 goal:"Change column-count from 3 to 2 — fewer, wider columns.",
 source:"MDN — Multi-column layout",
 hint:"Find column-count: 3; and change to column-count: 2;"},

{id:722,title:"CSS mask-image",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>mask-image</code> hides parts of an element. Use a gradient as a mask to create fade effects. Replaces complicated SVG tricks.",
 start:`.fade-img {
  width: 100%;
  max-width: 300px;
  height: 200px;
  background: linear-gradient(135deg, #a855f7, #6366f1, #10b981);
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  border-radius: 8px;
}`,
 goal:"Change \"to bottom\" to \"to right\" in both mask-image lines for a left-to-right fade.",
 source:"MDN — mask-image property",
 hint:"Find both \"linear-gradient(to bottom, ...\" lines and change to \"to right\"."},

{id:723,title:"CSS clip-path (shapes)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>clip-path</code> clips an element to a shape — circle, polygon, ellipse. The rest of the box is hidden. Used for avatars, decorative cuts, hero sections.",
 start:`.shape {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #a855f7, #6366f1);
  display: inline-block;
  margin: 8px;
}
.circle  { clip-path: circle(50%); }
.diamond { clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); }
.cut     { clip-path: polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%); }`,
 goal:"Change the diamond's clip-path to a triangle: polygon(50% 0, 100% 100%, 0 100%).",
 source:"MDN — clip-path property",
 hint:"Find .diamond { clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); } and change the polygon."},

{id:724,title:"CSS filter (effects)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>filter</code> applies visual effects: <code>blur()</code>, <code>grayscale()</code>, <code>brightness()</code>, <code>contrast()</code>, <code>hue-rotate()</code>, etc. Stack them with spaces.",
 start:`.demo {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #a855f7, #6366f1);
  display: inline-block;
  margin: 8px;
  border-radius: 8px;
}
.blur       { filter: blur(4px); }
.gray       { filter: grayscale(1); }
.bright     { filter: brightness(1.5); }
.hue        { filter: hue-rotate(180deg); }
.combo      { filter: contrast(1.5) saturate(2); }`,
 goal:"Change .blur from blur(4px) to blur(12px) — much more blur.",
 source:"MDN — filter property",
 hint:"Find .blur { filter: blur(4px); } and change to blur(12px)."},

{id:725,title:"CSS backdrop-filter (frosted glass)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>backdrop-filter</code> applies filters to whatever's BEHIND the element. Combined with translucent background, creates the iOS \"frosted glass\" effect.",
 start:`.scene {
  height: 200px;
  background: linear-gradient(135deg, #a855f7, #6366f1, #10b981, #f59e0b);
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}
.glass {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  padding: 20px 32px;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.3);
}`,
 goal:"Change the blur amount from 10px to 20px in both backdrop-filter lines.",
 source:"MDN — backdrop-filter property",
 hint:"Find both blur(10px) lines and change to blur(20px)."},

{id:726,title:"CSS mix-blend-mode",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>mix-blend-mode</code> controls how an element's colors blend with what's below — like Photoshop layer modes. <code>multiply</code>, <code>screen</code>, <code>overlay</code>, <code>difference</code>.",
 start:`.scene {
  height: 200px;
  background: linear-gradient(135deg, #a855f7 0%, #f59e0b 100%);
  position: relative;
  border-radius: 12px;
}
.text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-weight: 900;
  color: white;
  mix-blend-mode: difference;
}`,
 goal:"Change mix-blend-mode from \"difference\" to \"multiply\" and see the text change.",
 source:"MDN — mix-blend-mode property",
 hint:"Find mix-blend-mode: difference; and change to mix-blend-mode: multiply;"},

{id:727,title:"CSS accent-color",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>accent-color</code> recolors native form controls (checkboxes, radios, range inputs) without custom CSS hacks. Modern, browser-handled, accessible.",
 start:`:root { accent-color: #a855f7; }

.form-area {
  display: grid;
  gap: 12px;
  padding: 12px;
}
.form-area label { display: flex; gap: 8px; align-items: center; }`,
 goal:"Change :root's accent-color from #a855f7 to #10b981 — checkboxes and radios go green.",
 source:"MDN — accent-color property",
 hint:"Find :root { accent-color: #a855f7; } and change to #10b981."},

{id:728,title:"CSS color-mix()",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>color-mix()</code> blends two colors at a given ratio. Great for hover states, themes, opacity-without-rgba.",
 start:`:root {
  --brand: #a855f7;
}

.box {
  padding: 16px;
  margin: 8px 0;
  color: white;
  border-radius: 6px;
}

.b1 { background: var(--brand); }
.b2 { background: color-mix(in srgb, var(--brand) 60%, white); color: #333; }
.b3 { background: color-mix(in srgb, var(--brand) 30%, white); color: #333; }
.b4 { background: color-mix(in srgb, var(--brand), black 30%); }`,
 goal:"Change --brand from #a855f7 to your favorite color and watch all the mixed versions update.",
 source:"MDN — color-mix() function",
 hint:"Find --brand: #a855f7; and change to your preferred hex (e.g. #10b981)."},

{id:729,title:"CSS nesting",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"Modern CSS supports nesting — write selectors inside other selectors. Reduces repetition and groups related styles. Use <code>&amp;</code> to reference the parent.",
 start:`.card {
  background: white;
  border: 2px solid #a855f7;
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;

  & h3 {
    color: #a855f7;
    margin: 0 0 8px;
  }

  & p {
    color: #6b21a8;
    line-height: 1.5;
  }

  &:hover {
    background: #f3e8ff;
  }
}`,
 goal:"Add nested styles for & button { background: #a855f7; color: white; padding: 6px 12px; }",
 source:"MDN — CSS nesting",
 hint:"Inside .card { ... }, before the closing brace, add: & button { background: #a855f7; color: white; padding: 6px 12px; }"},

{id:730,title:"CSS ::placeholder",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>::placeholder</code> styles the placeholder text inside inputs and textareas. Color, opacity, font — all controllable.",
 start:`input {
  width: 100%;
  padding: 12px;
  border: 2px solid #a855f7;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 8px;
}
input::placeholder {
  color: #c084fc;
  font-style: italic;
  opacity: 1;
}
input:focus::placeholder {
  color: #ddd;
}`,
 goal:"Change the placeholder color from #c084fc to #f59e0b (orange).",
 source:"MDN — ::placeholder pseudo-element",
 hint:"Find color: #c084fc; in input::placeholder and change to #f59e0b."},

{id:731,title:"CSS ::selection",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>::selection</code> styles text the user has highlighted with their cursor. Only color and background-color work (and a few others).",
 start:`body {
  font-size: 16px;
  padding: 12px;
  line-height: 1.6;
}

::selection {
  background: #a855f7;
  color: white;
}

p.special::selection {
  background: #f59e0b;
  color: #1a1a1a;
}`,
 goal:"Change the global ::selection background from #a855f7 to #10b981.",
 source:"MDN — ::selection pseudo-element",
 hint:"Find ::selection { background: #a855f7; ... } and change the hex."},

{id:732,title:"CSS ::marker (list bullets)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>::marker</code> styles the bullet or number of a list item — without removing the bullet entirely.",
 start:`ul.custom {
  font-size: 16px;
  padding: 12px 0 12px 24px;
}
ul.custom li::marker {
  color: #a855f7;
  font-size: 1.5em;
}
ol.numbered li::marker {
  color: #f59e0b;
  font-weight: 900;
  content: "⚡ " counter(list-item) ". ";
}`,
 goal:"Change the bullet color in ul.custom from #a855f7 to #ef4444 (red).",
 source:"MDN — ::marker pseudo-element",
 hint:"Find color: #a855f7; in ul.custom li::marker and change to #ef4444."},

{id:733,title:"CSS :focus-visible",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>:focus-visible</code> applies focus styling ONLY when the browser thinks the user needs it (keyboard navigation, not mouse clicks). Keeps mouse clicks clean, keyboard users supported.",
 start:`button {
  padding: 10px 20px;
  background: #a855f7;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  margin: 8px;
}
button:focus { outline: none; }
button:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 3px;
}`,
 goal:"Change :focus-visible outline color from #f59e0b to #10b981 (green).",
 source:"MDN — :focus-visible + web.dev — focus-visible",
 hint:"Find outline: 3px solid #f59e0b; in :focus-visible and change to #10b981."},

{id:734,title:"CSS :focus-within",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>:focus-within</code> matches an element when any of its DESCENDANTS has focus. Perfect for highlighting form fieldsets, dropdowns, search containers.",
 start:`.search-box {
  display: flex;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 4px 12px;
  background: white;
  max-width: 320px;
  transition: all 0.2s;
}
.search-box:focus-within {
  border-color: #a855f7;
  box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.2);
}
.search-box input {
  border: none;
  outline: none;
  flex: 1;
  padding: 6px;
}`,
 goal:"Change the :focus-within border-color from #a855f7 to #10b981 (green).",
 source:"MDN — :focus-within",
 hint:"Find border-color: #a855f7; in .search-box:focus-within and change to #10b981."},

{id:735,title:"CSS currentColor keyword",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>currentColor</code> is the element's current text color — usable in any color-accepting property. Perfect for SVG icons that inherit color from their parent.",
 start:`.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 2px solid currentColor;
  border-radius: 6px;
  background: transparent;
  font-weight: bold;
  cursor: pointer;
  margin: 4px;
}
.btn-purple { color: #a855f7; }
.btn-green  { color: #10b981; }
.btn-red    { color: #ef4444; }

.icon {
  width: 16px;
  height: 16px;
  background: currentColor;
  border-radius: 50%;
}`,
 goal:"Add a new button class .btn-orange with color: #f59e0b.",
 source:"MDN — color keywords + currentColor",
 hint:"Add: .btn-orange { color: #f59e0b; }"},

{id:736,title:"CSS @property (custom property types)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"css",
 desc:"<code>@property</code> declares a CSS variable with a TYPE — enabling animations on it. Without @property, you can't animate custom properties.",
 start:`@property --gradient-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@keyframes spinGradient {
  to { --gradient-angle: 360deg; }
}

.spin {
  width: 200px;
  height: 200px;
  background: linear-gradient(var(--gradient-angle), #a855f7, #10b981, #f59e0b, #a855f7);
  animation: spinGradient 4s linear infinite;
  border-radius: 12px;
}`,
 goal:"Change the animation duration from 4s to 1s for a faster spin.",
 source:"MDN — @property at-rule",
 hint:"Find animation: spinGradient 4s linear infinite; and change 4s to 1s."},
/* ══ BEGINNER LESSONS — JS DEEP DIVE (737–770) — MDN Web Docs ══ */
// Continues 651-670. Covers Promises/async, modern syntax, DOM events, classes, and Object/Array advanced methods.

{id:737,title:"JS Promises: the basics",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"A <strong>Promise</strong> represents a value that will arrive later. It has three states: pending, fulfilled, or rejected. Used for anything async — fetching data, reading files, timers.",
 start:`const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done after 1 second!");
  }, 1000);
});

console.log("Created the promise");
promise.then((result) => {
  console.log("Promise resolved:", result);
});`,
 goal:"Change the timeout from 1000ms to 500ms — promise resolves faster.",
 source:"MDN — Using promises",
 hint:"Find }, 1000); and change 1000 to 500."},

{id:738,title:"JS Promises: .then() chaining",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>.then()</code> runs when a promise resolves. Each .then() returns a NEW promise, so you can chain them — pass values down the chain, transform along the way.",
 start:`Promise.resolve(5)
  .then(n => {
    console.log("Got:", n);
    return n * 2;
  })
  .then(n => {
    console.log("Doubled:", n);
    return n + 10;
  })
  .then(n => {
    console.log("Plus ten:", n);
  });`,
 goal:"Add a fourth .then that subtracts 3 from the value and logs it.",
 source:"MDN — Promise.prototype.then()",
 hint:"After the third .then, add: .then(n => { console.log(\"Minus three:\", n - 3); });"},

{id:739,title:"JS Promises: .catch() for errors",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>.catch()</code> handles promise rejections. Place at the end of a chain to catch errors from ANY step in the chain — much cleaner than try/catch for async code.",
 start:`function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) reject(new Error("Cannot divide by zero!"));
    else resolve(a / b);
  });
}

divide(10, 2)
  .then(result => console.log("Result:", result))
  .catch(err => console.log("Error:", err.message));

divide(10, 0)
  .then(result => console.log("Result:", result))
  .catch(err => console.log("Error:", err.message));`,
 goal:"Add a third call: divide(20, 4) — verify the .then path runs and .catch is skipped.",
 source:"MDN — Promise.prototype.catch()",
 hint:"Add: divide(20, 4).then(r => console.log(\"Result:\", r)).catch(e => console.log(\"Error:\", e.message));"},

{id:740,title:"JS async function",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>async function</code> automatically returns a Promise. Inside, you can use <code>await</code> to pause until a promise resolves. Code reads top-to-bottom instead of nested callbacks.",
 start:`async function greet() {
  return "Hello from async!";
}

// async functions ALWAYS return promises
const result = greet();
console.log(result);            // Promise { 'Hello from async!' }

result.then(msg => console.log(msg));  // "Hello from async!"

// Can also use await in another async function
async function show() {
  const message = await greet();
  console.log("Awaited:", message);
}
show();`,
 goal:"Change greet() to return a different string and watch all the logs update.",
 source:"MDN — async function",
 hint:"Find return \"Hello from async!\"; and change the string."},

{id:741,title:"JS await keyword",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>await</code> pauses an async function until a promise resolves. The result of the await IS the resolved value. Only works inside async functions.",
 start:`function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function countdown() {
  console.log("3...");
  await wait(500);
  console.log("2...");
  await wait(500);
  console.log("1...");
  await wait(500);
  console.log("🚀 Go!");
}

countdown();`,
 goal:"Change wait time from 500ms to 200ms — countdown speeds up.",
 source:"MDN — await operator",
 hint:"Find all three await wait(500); and change to await wait(200);"},

{id:742,title:"JS fetch: GET request (intro)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>fetch(url)</code> sends an HTTP request. Returns a Promise that resolves to a Response. Call <code>.json()</code> on the response to parse JSON data.",
 start:`async function loadData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("Title:", data.title);
    console.log("Completed:", data.completed);
    console.log("Full:", data);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

loadData();`,
 goal:"Change the URL's /todos/1 to /todos/5 — fetches a different todo.",
 source:"MDN — fetch() global function",
 hint:"Find /todos/1 and change to /todos/5."},

{id:743,title:"JS fetch: response handling",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Fetch's promise resolves even on 404 or 500 errors — only network failures reject. Always check <code>response.ok</code> or <code>response.status</code> before parsing.",
 start:`async function safeFetch(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("Server responded with:", response.status);
      return;
    }
    const data = await response.json();
    console.log("Success:", data.title);
  } catch (err) {
    console.log("Network error:", err.message);
  }
}

safeFetch("https://jsonplaceholder.typicode.com/todos/1");  // success
safeFetch("https://jsonplaceholder.typicode.com/missing");   // 404`,
 goal:"Add a third safeFetch call with /todos/999 to see another 404 path.",
 source:"MDN — Response.ok property",
 hint:"Add: safeFetch(\"https://jsonplaceholder.typicode.com/todos/999\");"},

{id:744,title:"JS destructuring: objects",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Object destructuring pulls properties into variables in one line: <code>const { name, age } = user;</code> — same as <code>const name = user.name; const age = user.age;</code>.",
 start:`const user = {
  name: "Ada",
  age: 30,
  email: "ada@example.com",
  city: "London"
};

// Old way
const oldName = user.name;
const oldAge = user.age;

// New way — destructuring
const { name, age } = user;
console.log(name, age);

// Rename while destructuring
const { city: location } = user;
console.log("Lives in:", location);

// Default values
const { phone = "not provided" } = user;
console.log("Phone:", phone);`,
 goal:"Add a destructuring line to extract email and log it.",
 source:"MDN — Destructuring assignment",
 hint:"Add: const { email } = user; console.log(\"Email:\", email);"},

{id:745,title:"JS destructuring: arrays",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Array destructuring uses brackets and ORDER (not names): <code>const [first, second] = arr;</code>. Use commas to skip items. The rest pattern <code>...rest</code> captures remaining.",
 start:`const colors = ["red", "green", "blue", "yellow", "purple"];

const [first, second] = colors;
console.log(first, second);            // red green

// Skip with commas
const [, , third] = colors;
console.log("Third:", third);           // blue

// Rest pattern
const [head, ...tail] = colors;
console.log("Head:", head);             // red
console.log("Tail:", tail);             // [green, blue, yellow, purple]

// Default values
const [a, b, c, d, e, f = "missing"] = colors;
console.log("Sixth:", f);               // missing`,
 goal:"Add a destructuring line that pulls the LAST color into a variable named \"last\".",
 source:"MDN — Array destructuring",
 hint:"const [, , , , last] = colors; console.log(\"Last:\", last);"},

{id:746,title:"JS optional chaining (?.)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>?.</code> safely accesses nested properties. If anything in the chain is null/undefined, the expression returns undefined instead of throwing. Lifesaver for API responses.",
 start:`const user1 = {
  name: "Ada",
  address: { city: "London", zip: "EC1" }
};
const user2 = { name: "Bo" };  // no address

// Without ?.
// console.log(user2.address.city); // ERROR — can't read city of undefined

// With ?.
console.log(user1?.address?.city);      // "London"
console.log(user2?.address?.city);      // undefined (no error)
console.log(user2?.address?.zip);       // undefined

// Works on function calls too
const obj = { greet: () => "Hi!" };
console.log(obj.greet?.());              // "Hi!"
console.log(obj.farewell?.());           // undefined`,
 goal:"Add a fourth user const with name only, and log user4?.address?.city — should be undefined.",
 source:"MDN — Optional chaining (?.)",
 hint:"Add: const user4 = { name: \"Cy\" }; console.log(user4?.address?.city);"},

{id:747,title:"JS nullish coalescing (??)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>??</code> returns the right side ONLY if the left is null or undefined. Unlike <code>||</code>, it doesn't treat 0 or empty string as fallback-worthy.",
 start:`const count = 0;
const name = "";
const missing = undefined;

// || treats 0, "", false as falsy — often wrong
console.log("|| count:", count || 10);    // 10 (probably wrong!)
console.log("|| name:", name || "Anon");  // "Anon" (maybe wrong)

// ?? only triggers on null/undefined
console.log("?? count:", count ?? 10);    // 0 (correct!)
console.log("?? name:", name ?? "Anon");  // "" (preserves empty)
console.log("?? missing:", missing ?? "Default"); // "Default"`,
 goal:"Add: const score = null; console.log(\"?? score:\", score ?? 0); — should print 0.",
 source:"MDN — Nullish coalescing operator (??)",
 hint:"Add: const score = null; console.log(\"?? score:\", score ?? 0);"},

{id:748,title:"JS Object.keys()",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>Object.keys(obj)</code> returns an array of an object's keys. Combined with .forEach, .map, etc. to iterate over object properties.",
 start:`const scores = {
  Ada: 95,
  Bo: 82,
  Cy: 78,
  Dan: 91
};

const names = Object.keys(scores);
console.log("Names:", names);
console.log("Count:", names.length);

// Iterate
names.forEach(name => {
  console.log(name + ": " + scores[name]);
});`,
 goal:"Use Object.keys to log only the names whose score is >= 90.",
 source:"MDN — Object.keys()",
 hint:"Object.keys(scores).filter(n => scores[n] >= 90).forEach(n => console.log(n));"},

{id:749,title:"JS Object.values()",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>Object.values(obj)</code> returns an array of the values. Perfect for summing, averaging, or finding max in an object's numeric fields.",
 start:`const sales = {
  jan: 4500,
  feb: 5200,
  mar: 4800,
  apr: 6100
};

const values = Object.values(sales);
console.log("All values:", values);

const total = values.reduce((sum, v) => sum + v, 0);
console.log("Total:", total);

const avg = total / values.length;
console.log("Average:", avg);

const max = Math.max(...values);
console.log("Max:", max);`,
 goal:"Log the minimum value using Math.min(...values).",
 source:"MDN — Object.values()",
 hint:"console.log(\"Min:\", Math.min(...values));"},

{id:750,title:"JS Object.entries()",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>Object.entries(obj)</code> returns [key, value] pairs. Great with destructuring: <code>for (const [key, val] of Object.entries(obj))</code>.",
 start:`const inventory = {
  apples: 30,
  bread: 5,
  cheese: 12,
  donuts: 0
};

for (const [item, count] of Object.entries(inventory)) {
  console.log(item + ": " + count);
}

// Filter to only stocked items
const stocked = Object.entries(inventory)
  .filter(([, count]) => count > 0)
  .map(([item]) => item);

console.log("In stock:", stocked);`,
 goal:"Find items with count less than 10 and log just their names.",
 source:"MDN — Object.entries()",
 hint:"Object.entries(inventory).filter(([, c]) => c < 10).forEach(([name]) => console.log(name));"},

{id:751,title:"JS Object.assign()",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>Object.assign(target, ...sources)</code> copies properties from source objects into the target. Returns the target. Used to merge objects or clone shallowly.",
 start:`const defaults = { theme: "light", fontSize: 14, autoSave: true };
const userPrefs = { theme: "dark", fontSize: 16 };

// Merge — user prefs override defaults
const final = Object.assign({}, defaults, userPrefs);
console.log("Final:", final);

// Spread syntax does the same thing
const altFinal = { ...defaults, ...userPrefs };
console.log("Same with spread:", altFinal);

// Cloning
const clone = Object.assign({}, final);
clone.theme = "purple";
console.log("Original:", final.theme); // still "dark"
console.log("Clone:", clone.theme);    // "purple"`,
 goal:"Add a third source object { notifications: true } to the Object.assign call.",
 source:"MDN — Object.assign()",
 hint:"Change Object.assign({}, defaults, userPrefs) to Object.assign({}, defaults, userPrefs, { notifications: true })."},

{id:752,title:"JS Array.from()",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>Array.from()</code> turns array-like values into real arrays. Also accepts a mapper function — generating arrays of N items in one line.",
 start:`// Turn a string into a character array
const chars = Array.from("hello");
console.log("Chars:", chars);   // ["h","e","l","l","o"]

// Generate an array of 5 numbers
const fives = Array.from({ length: 5 }, (_, i) => i * 5);
console.log("Fives:", fives);   // [0, 5, 10, 15, 20]

// Random dice roll x10
const rolls = Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1);
console.log("Rolls:", rolls);`,
 goal:"Create an array of 7 squares (1, 4, 9, 16, 25, 36, 49) using Array.from.",
 source:"MDN — Array.from()",
 hint:"const squares = Array.from({ length: 7 }, (_, i) => (i + 1) ** 2); console.log(squares);"},

{id:753,title:"JS Classes: intro",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"A <code>class</code> is a blueprint for objects. Use <code>new ClassName()</code> to create instances. <code>this</code> refers to the instance being created.",
 start:`class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.flames = 0;
  }

  roar() {
    return this.name + " says ROAR!";
  }

  breathe() {
    this.flames++;
    return this.name + " breathed fire. Flame count: " + this.flames;
  }
}

const sparky = new Dragon("Sparky", "purple");
console.log(sparky.roar());
console.log(sparky.breathe());
console.log(sparky.breathe());`,
 goal:"Create a second dragon called \"Ember\" in color \"red\" and call its roar method.",
 source:"MDN — Classes",
 hint:"const ember = new Dragon(\"Ember\", \"red\"); console.log(ember.roar());"},
{id:754,title:"JS Classes: constructor and methods",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"The <code>constructor</code> runs when you call <code>new ClassName()</code>. Other methods can use <code>this</code> to access properties. Each instance has its own state.",
 start:`class Counter {
  constructor(startValue = 0) {
    this.count = startValue;
  }

  increment(step = 1) {
    this.count += step;
    return this.count;
  }

  decrement(step = 1) {
    this.count -= step;
    return this.count;
  }

  reset() {
    this.count = 0;
    return this.count;
  }
}

let myCounter = new Counter(10);
console.log("Start:", myCounter.count);
console.log("After +1:", myCounter.increment());
console.log("After +5:", myCounter.increment(5));
console.log("After reset:", myCounter.reset());`,
 goal:"Create another counter starting at 100 and call decrement(25) twice.",
 source:"MDN — Class constructor + methods",
 hint:"let big = new Counter(100); console.log(big.decrement(25)); console.log(big.decrement(25));"},

{id:755,title:"JS Classes: inheritance (extends)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>extends</code> creates a subclass that inherits methods. <code>super()</code> calls the parent's constructor. Subclasses can add new methods or override inherited ones.",
 start:`class Animal {
  constructor(name) { this.name = name; }
  speak() { return this.name + " makes a sound"; }
}

class Dragon extends Animal {
  constructor(name, color) {
    super(name);          // call Animal's constructor
    this.color = color;
  }
  speak() {               // override parent's method
    return this.name + " roars in " + this.color + "!";
  }
  fly() {
    return this.name + " takes flight!";
  }
}

const generic = new Animal("Cat");
console.log(generic.speak());

const sparky = new Dragon("Sparky", "purple");
console.log(sparky.speak());
console.log(sparky.fly());`,
 goal:"Create a third class Phoenix extends Animal with its own speak() method.",
 source:"MDN — Class inheritance (extends)",
 hint:"class Phoenix extends Animal { speak() { return this.name + \" rises from ashes!\"; } } const p = new Phoenix(\"Blaze\"); console.log(p.speak());"},

{id:756,title:"JS Classes: getters and setters",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>get propName()</code> defines a computed property. <code>set propName(value)</code> validates assignment. Looks like a normal property to the user.",
 start:`class Person {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1] || "";
  }
}

const p = new Person("Ada", "Lovelace");
console.log(p.fullName);      // getter — "Ada Lovelace"

p.fullName = "Grace Hopper";  // setter
console.log(p.firstName);     // "Grace"
console.log(p.lastName);      // "Hopper"`,
 goal:"Set p.fullName to a new name (your name) and log the firstName and lastName.",
 source:"MDN — get + set in classes",
 hint:"p.fullName = \"Your Name\"; console.log(p.firstName, p.lastName);"},

{id:757,title:"JS Map data structure",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"A <code>Map</code> stores key-value pairs. Unlike objects, keys can be ANY type (numbers, objects, even functions). Order is preserved. Has <code>.size</code> (not .length).",
 start:`const userScores = new Map();

userScores.set("Ada", 95);
userScores.set("Bo", 82);
userScores.set("Cy", 78);

console.log("Size:", userScores.size);
console.log("Ada's score:", userScores.get("Ada"));
console.log("Has Cy?", userScores.has("Cy"));

// Iterate
for (const [name, score] of userScores) {
  console.log(name + " -> " + score);
}

// Delete
userScores.delete("Bo");
console.log("After delete:", userScores.size);`,
 goal:"Add a new entry: userScores.set(\"Dan\", 100); then log Dan's score.",
 source:"MDN — Map",
 hint:"userScores.set(\"Dan\", 100); console.log(userScores.get(\"Dan\"));"},

{id:758,title:"JS Symbol basics",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>Symbol()</code> creates a unique value — even two Symbols with the same description aren't equal. Used for: unique object keys, well-known constants, hidden properties.",
 start:`const id1 = Symbol("user");
const id2 = Symbol("user");

console.log(id1 === id2);     // false — always unique
console.log(typeof id1);       // "symbol"

// Use as object keys (truly unique, never collide)
const obj = {};
const KEY = Symbol("private");
obj[KEY] = "secret value";

console.log(obj[KEY]);                       // "secret value"
console.log(Object.keys(obj));                // [] — symbols hidden from .keys()
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(private)]`,
 goal:"Create a third Symbol with description \"id\" and verify it's not equal to id1 or id2.",
 source:"MDN — Symbol",
 hint:"const id3 = Symbol(\"id\"); console.log(id3 === id1, id3 === id2);"},

{id:759,title:"JS Regex: test and match",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>/pattern/.test(str)</code> returns true/false. <code>str.match(/pattern/)</code> returns the match details. Regex powers search, validation, replace.",
 start:`const emailRegex = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;

console.log(emailRegex.test("hello@example.com"));   // true
console.log(emailRegex.test("not-an-email"));         // false
console.log(emailRegex.test("user@code.ranger.io")); // true

const phoneRegex = /\\d{3}-\\d{3}-\\d{4}/;
const text = "Call me at 555-867-5309 today.";

const match = text.match(phoneRegex);
console.log("Matched:", match[0]);  // "555-867-5309"
console.log("At index:", match.index);`,
 goal:"Use phoneRegex.test() to check if the string \"my number is 123-456-7890\" matches.",
 source:"MDN — RegExp.test() + String.match()",
 hint:"console.log(phoneRegex.test(\"my number is 123-456-7890\"));"},

{id:760,title:"JS Regex: replace",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>str.replace(/pattern/g, replacement)</code> swaps matches. The <code>g</code> flag means \"global\" (all matches, not just first). <code>i</code> means case-insensitive.",
 start:`const text = "I love cats. Cats are amazing!";

console.log(text.replace(/cats/, "dogs"));        // first only
console.log(text.replace(/cats/g, "dogs"));       // all
console.log(text.replace(/cats/gi, "dogs"));      // all, ignore case

// Mask emails
const message = "Email me at ada@example.com or bo@code.io";
const masked = message.replace(/[\\w.-]+@[\\w.-]+\\.\\w+/g, "***@***");
console.log(masked);`,
 goal:"Use .replace with /\\d+/g to replace all numbers in \"3 cats and 5 dogs\" with \"X\".",
 source:"MDN — String.replace() with RegExp",
 hint:"console.log(\"3 cats and 5 dogs\".replace(/\\\\d+/g, \"X\"));"},

{id:761,title:"JS DOM: querySelector",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>document.querySelector(selector)</code> finds the FIRST element matching a CSS selector. <code>querySelectorAll</code> finds all of them (returns NodeList).",
 start:`document.body.innerHTML = \`
  <h2 id="title">My List</h2>
  <ul>
    <li class="item">Apple</li>
    <li class="item">Banana</li>
    <li class="item">Cherry</li>
  </ul>
\`;

// First match
const title = document.querySelector("#title");
console.log("Title:", title.textContent);

const firstItem = document.querySelector(".item");
console.log("First item:", firstItem.textContent);

// All matches
const allItems = document.querySelectorAll(".item");
console.log("Item count:", allItems.length);

allItems.forEach(item => {
  console.log("Item:", item.textContent);
});`,
 goal:"Add a query to find the <ul> element and log how many children it has using .children.length.",
 source:"MDN — document.querySelector",
 hint:"const ul = document.querySelector(\"ul\"); console.log(\"UL children:\", ul.children.length);"},

{id:762,title:"JS DOM: dataset (data-* attributes)",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>data-*</code> attributes store custom data on elements. Access via <code>element.dataset</code>. <code>data-user-id</code> becomes <code>dataset.userId</code> (camelCase).",
 start:`document.body.innerHTML = \`
  <button class="action" data-user-id="42" data-role="admin">Click me</button>
\`;

const btn = document.querySelector(".action");
console.log("User ID:", btn.dataset.userId);
console.log("Role:", btn.dataset.role);

// Set via dataset too
btn.dataset.lastClicked = Date.now();
console.log("Last clicked stamp:", btn.dataset.lastClicked);

// View all data attributes
console.log("All data:", Object.assign({}, btn.dataset));`,
 goal:"Add a data-color attribute to the button HTML and read it via btn.dataset.color.",
 source:"MDN — HTMLElement.dataset",
 hint:"Change <button class=\"action\" data-user-id=\"42\" data-role=\"admin\"> to add data-color=\"purple\", then console.log(btn.dataset.color);"},

{id:763,title:"JS DOM: classList methods",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>element.classList</code> manages classes cleanly. <code>.add()</code>, <code>.remove()</code>, <code>.toggle()</code>, <code>.contains()</code>. Way cleaner than manipulating className strings.",
 start:`document.body.innerHTML = \`
  <style>
    .active { background: #a855f7; color: white; }
    .big { font-size: 24px; }
  </style>
  <p id="target" class="message">Hello!</p>
  <button id="btn">Toggle Active</button>
\`;

const target = document.querySelector("#target");
const btn = document.querySelector("#btn");

target.classList.add("big");                 // add
console.log("Has 'big'?", target.classList.contains("big"));

btn.addEventListener("click", () => {
  target.classList.toggle("active");          // toggle on/off
});

// Programmatically click 3 times to see
btn.click();
btn.click();
btn.click();`,
 goal:"After the existing code, add: target.classList.remove(\"big\"); — removes the big class.",
 source:"MDN — Element.classList",
 hint:"At the bottom add: target.classList.remove(\"big\"); console.log(\"Has 'big' now?\", target.classList.contains(\"big\"));"},

{id:764,title:"JS DOM: event.target",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>event.target</code> is the element that triggered the event. Combined with event delegation (one listener for many elements), it's a powerful pattern.",
 start:`document.body.innerHTML = \`
  <ul id="list">
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
    <li>Date</li>
  </ul>
  <p id="output"></p>
\`;

const list = document.querySelector("#list");
const out = document.querySelector("#output");

// One listener on the parent — catches all child clicks
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    out.textContent = "You clicked: " + event.target.textContent;
  }
});

// Simulate clicks
list.children[0].click();
list.children[2].click();`,
 goal:"Add two more <li> items (\"Elderberry\", \"Fig\") and simulate a click on Fig.",
 source:"MDN — Event.target",
 hint:"Add <li>Elderberry</li><li>Fig</li> to the innerHTML, then list.children[5].click();"},

{id:765,title:"JS DOM: event.preventDefault()",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>event.preventDefault()</code> stops the browser's default action. Use on form submits to handle them in JS, or on links to prevent navigation.",
 start:`document.body.innerHTML = \`
  <form id="testForm">
    <label for="qInput">Question:</label>
    <input type="text" id="qInput" value="Why use preventDefault?">
    <button type="submit">Submit</button>
  </form>
  <p id="result"></p>
\`;

const form = document.querySelector("#testForm");
const input = document.querySelector("#qInput");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();  // stops page reload
  result.textContent = "Captured: " + input.value;
});

// Simulate a submit
form.requestSubmit();`,
 goal:"Change the input's initial value to your own question and re-run.",
 source:"MDN — Event.preventDefault()",
 hint:"Find value=\"Why use preventDefault?\" and change to your own question."},

{id:766,title:"JS DOM: event bubbling",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Events bubble UP the DOM tree — click an inner element, every ancestor's listener fires too. Use <code>event.stopPropagation()</code> to stop the bubble.",
 start:`document.body.innerHTML = \`
  <div id="outer" style="padding:20px;background:#f3e8ff;border-radius:8px">
    OUTER
    <div id="middle" style="padding:20px;background:#ddd6fe;border-radius:8px;margin-top:8px">
      MIDDLE
      <button id="inner" style="padding:10px;background:#a855f7;color:white">INNER</button>
    </div>
  </div>
  <p id="log"></p>
\`;

const log = document.querySelector("#log");
const lines = [];

document.querySelector("#outer").addEventListener("click", () => lines.push("outer"));
document.querySelector("#middle").addEventListener("click", () => lines.push("middle"));
document.querySelector("#inner").addEventListener("click", () => lines.push("inner"));

document.querySelector("#inner").click();

log.textContent = "Fired (in order): " + lines.join(" -> ");`,
 goal:"Add event.stopPropagation() inside the middle div's listener — then outer's listener won't fire.",
 source:"MDN — Event bubbling + stopPropagation",
 hint:"Change addEventListener(\"click\", () => lines.push(\"middle\")) to addEventListener(\"click\", (e) => { e.stopPropagation(); lines.push(\"middle\"); })"},

{id:767,title:"JS requestAnimationFrame",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"<code>requestAnimationFrame(callback)</code> runs your function right before the next repaint. Smoother and more efficient than setInterval for animations.",
 start:`document.body.innerHTML = \`
  <div id="ball" style="width:40px;height:40px;background:#a855f7;border-radius:50%;position:relative"></div>
\`;

const ball = document.querySelector("#ball");
let position = 0;
let direction = 2;

function animate() {
  position += direction;
  if (position > 200 || position < 0) direction = -direction;
  ball.style.left = position + "px";
  requestAnimationFrame(animate);
}

animate();`,
 goal:"Change direction's speed from 2 to 5 for faster bouncing.",
 source:"MDN — requestAnimationFrame",
 hint:"Find let direction = 2; and change to let direction = 5;"},

{id:768,title:"JS Closures: counter with private state",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"A <strong>closure</strong> lets an inner function remember variables from its outer function — even after the outer function has returned. Perfect for private state.",
 start:`function makeCounter() {
  let count = 0;  // private — only the inner functions can see this

  return {
    increment: () => { count++; return count; },
    decrement: () => { count--; return count; },
    value: () => count
  };
}

const counter = makeCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.decrement());  // 1
console.log(counter.value());      // 1

// Try to access directly — fails (closure protects it)
console.log(counter.count);        // undefined`,
 goal:"Add a third counter method: reset: () => { count = 0; return count; }. Then call counter.reset().",
 source:"MDN — Closures",
 hint:"Inside the return object, add: reset: () => { count = 0; return count; }, — then console.log(counter.reset());"},

{id:769,title:"JS DOM: build a tiny todo list",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Combine closure-based state, textContent for safe rendering, and label+for accessibility. This is what an interview-ready DOM mini-app looks like.",
 start:`document.body.innerHTML = \`
  <h3>My Todos</h3>
  <label for="todoField">New task:</label>
  <input type="text" id="todoField" placeholder="What needs doing?">
  <button id="addBtn">Add</button>
  <ul id="todoList"></ul>
\`;

const makeTodoStore = () => {
  let items = [];
  return {
    add: (text) => { items.push(text); },
    all: () => [...items]
  };
};

const store = makeTodoStore();
const field = document.querySelector("#todoField");
const list = document.querySelector("#todoList");

const render = () => {
  list.textContent = ""; // clear safely
  store.all().forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;  // textContent — safe from XSS
    list.appendChild(li);
  });
};

document.querySelector("#addBtn").addEventListener("click", () => {
  if (field.value.trim()) {
    store.add(field.value.trim());
    field.value = "";
    render();
  }
});

// Seed a couple
store.add("Learn closures");
store.add("Use textContent");
render();`,
 goal:"Add a third seeded todo using store.add (something you want to learn this week).",
 source:"MDN — Closures + textContent + label for=",
 hint:"Add: store.add(\"Your goal here\"); before the final render(); call."},

{id:770,title:"JS Putting it together: a typeahead search",diff:"Easy",cat:"Web Basics",mode:"lesson",preview:"js",
 desc:"Capstone lesson: combines querySelector, textContent, closures, label for, .filter(), and event handling. Type to filter a list. The kind of feature shipped in real apps.",
 start:`document.body.innerHTML = \`
  <h3>Type-ahead Search</h3>
  <label for="searchField">Search dragons:</label>
  <input type="search" id="searchField" placeholder="Type a name...">
  <ul id="resultList" style="margin-top:8px;list-style:none;padding:0"></ul>
\`;

const dragons = ["Sparky", "Ember", "Frostbite", "Stormwing", "Coral", "Mint", "Sand", "Sky"];

// Closure preserves the dataset privately
const createSearchEngine = (items) => {
  const data = [...items];
  return {
    find: (query) => data.filter(d => d.toLowerCase().includes(query.toLowerCase()))
  };
};

const engine = createSearchEngine(dragons);
const field = document.querySelector("#searchField");
const list = document.querySelector("#resultList");

const render = (matches) => {
  list.textContent = "";  // safe clear
  matches.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;  // textContent — safe insert
    li.style.padding = "6px 10px";
    li.style.background = "#f3e8ff";
    li.style.marginBottom = "4px";
    li.style.borderRadius = "4px";
    list.appendChild(li);
  });
};

field.addEventListener("input", () => {
  render(engine.find(field.value));
});

// Initial render — show all
render(dragons);`,
 goal:"Add three more dragon names to the dragons array and re-run.",
 source:"MDN — putting it all together (closures, DOM, events)",
 hint:"Find const dragons = [...] and add three more names like \"Inferno\", \"Tempest\", \"Glacier\"."},

];

/* ══════════════════════════════════
   TROPHIES — updated for 770
══════════════════════════════════ */
const TOTAL = 770;
const CATS = ['All','Web Basics','JS Fundamentals','Python','HTML & CSS','Algorithms','String Methods','Array Methods','SQL','React & Async','TypeScript','Git & CLI','Web Security','Node.js','Data Structures','Python Advanced','JS Advanced','CSS Advanced','HTTP & APIs','Testing'];
const CAT_ICONS = {'All':'🎮','Web Basics':'🌱','JS Fundamentals':'⚡','Python':'🐍','HTML & CSS':'🎨','Algorithms':'🧩','String Methods':'🔤','Array Methods':'📦','SQL':'🗄️','React & Async':'⚛️','TypeScript':'🔷','Git & CLI':'🌿','Web Security':'🔒','Node.js':'🟢','Data Structures':'🏗️','Python Advanced':'🐍✨','JS Advanced':'⚡✨','CSS Advanced':'🎨✨','HTTP & APIs':'🌐','Testing':'🧪'};

const WIN_TROPHIES=[
  // Beginner lesson dragons — pale shades, awarded for completing Web Basics lessons
  {id:"l1",e:"🐉",n:"Mint Dragon",d:"Complete your first beginner lesson",t:1,c:"#A7F3D0",hue:30,sat:1.4},
  {id:"l10",e:"🐉",n:"Sky Dragon",d:"Complete 10 beginner lessons",t:10,c:"#7DD3FC",hue:140,sat:1.5},
  {id:"l20",e:"🐉",n:"Coral Dragon",d:"Complete 20 beginner lessons",t:20,c:"#FCA5A5",hue:250,sat:1.2},
  {id:"l35",e:"🐉",n:"Sand Dragon",d:"Complete all 35 HTML lessons",t:35,c:"#FDE68A",hue:320,sat:0.6,bright:1.2},
  // Hatchlings — awarded for ATTEMPTING (clicking Run on a lesson)
  {id:"h1",e:"🥚",n:"Mint Hatchling",d:"Try your first lesson",t:1,c:"#D1FAE5",hue:30,sat:1.4},
  {id:"h5",e:"🥚",n:"Sky Hatchling",d:"Try 5 lessons",t:5,c:"#E0F2FE",hue:140,sat:1.5},
  {id:"h10",e:"🥚",n:"Coral Hatchling",d:"Try 10 lessons",t:10,c:"#FEE2E2",hue:250,sat:1.2},
  {id:"h20",e:"🥚",n:"Sand Hatchling",d:"Try 20 lessons",t:20,c:"#FEF3C7",hue:320,sat:0.6,bright:1.2},
  // Hatched chicks — awarded for COMPLETING lessons (next tier above hatchling)
  {id:"c1",e:"🐣",n:"Mint Hatched",d:"Complete your first lesson",t:1,c:"#A7F3D0",hue:30,sat:1.4},
  {id:"c5",e:"🐣",n:"Sky Hatched",d:"Complete 5 lessons",t:5,c:"#7DD3FC",hue:140,sat:1.5},
  {id:"c15",e:"🐣",n:"Coral Hatched",d:"Complete 15 lessons",t:15,c:"#FCA5A5",hue:250,sat:1.2},
  {id:"c30",e:"🐣",n:"Sand Hatched",d:"Complete 30 lessons",t:30,c:"#FDE68A",hue:320,sat:0.6,bright:1.2},
  {id:"c50",e:"🐣",n:"Rainbow Hatched",d:"Complete 50 lessons (all beginner content!)",t:50,c:"#a78bfa",hue:330,sat:1.8},
  // Original dragons + medals
  {id:"w3",e:"🐉",n:"Green Dragon",d:"Solve 3 challenges",t:3,c:"#34A853"},
  {id:"w5",e:"🐉",n:"Blue Dragon",d:"Solve 5 challenges",t:5,c:"#4285F4",hue:120,sat:1.6},
  {id:"w25",e:"🐉",n:"Red Dragon",d:"Solve 25 challenges",t:25,c:"#EA4335",hue:280,sat:2.5,bright:0.95},
  {id:"w50",e:"🐉",n:"Gold Dragon",d:"Solve 50 challenges",t:50,c:"#FBBC04",hue:300,sat:1.8,bright:1.2},
  {id:"w100",e:"🥉",n:"Bronze Medal",d:"Solve 100 challenges",t:100,c:"#CD7F32"},
  {id:"w150",e:"🥈",n:"Silver Medal",d:"Solve 150 challenges",t:150,c:"#C0C0C0"},
  {id:"w200",e:"🥇",n:"Gold Medal",d:"Solve 200 challenges",t:200,c:"#FFD700"},
  {id:"w300",e:"🏆",n:"Large Trophy",d:"Solve 300 challenges",t:300,c:"#f59e0b"},
  {id:"w400",e:"💎",n:"Diamond",d:"Solve 400 challenges",t:400,c:"#67e8f9"},
  {id:"w610",e:"👑",n:"Champion",d:"Solve ALL 770!",t:770,c:"#FBBC04"},

  // ══════════════════════════════════════════════════════════════════
  // NEW TROPHIES — 16 dragon-themed additions across 4 thematic groups.
  // These use the `cond` function pattern (handled by extended
  // checkAllTrophies) instead of the legacy `t` threshold pattern.
  // ══════════════════════════════════════════════════════════════════

  // ──── DIRECTION 1: ELEMENTAL DRAGONS ────
  {id:"e_flame",e:"🔥",n:"Flame Dragon",d:"Complete 5 lessons in a single day",
   c:"#dc2626",hue:340,sat:1.8,bright:1.1,
   cond:()=>dailyLessonCount>=5},

  {id:"e_tide",e:"🌊",n:"Tide Dragon",d:"Solve 75 challenges",
   c:"#06b6d4",hue:170,sat:1.5,
   cond:()=>solved.size>=75},

  {id:"e_storm",e:"⚡",n:"Storm Dragon",d:"Get a 3-solve streak (3 correct in a row)",
   c:"#8b5cf6",hue:260,sat:1.6,
   cond:()=>bestSolveStreak>=3},

  {id:"e_frost",e:"❄️",n:"Frost Dragon",d:"Solve 10 challenges without using a hint",
   c:"#64748b",hue:0,sat:0.5,bright:0.95,
   cond:()=>noHintSolves>=10},

  // ──── DIRECTION 2: DRAGON LIFE CYCLE (EXTENDED) ────
  {id:"l_wyrm",e:"🦎",n:"Mint Wyrmling",d:"Complete 75 lessons",
   c:"#10b981",hue:80,sat:1.4,
   cond:()=>CHS.filter(c=>c.mode==='lesson'&&solved.has(c.id)).length>=75},

  {id:"l_adolescent",e:"🦖",n:"Adolescent Dragon",d:"Complete 100 lessons",
   c:"#f59e0b",hue:30,sat:1.8,bright:1.2,
   cond:()=>CHS.filter(c=>c.mode==='lesson'&&solved.has(c.id)).length>=100},

  {id:"l_ancient",e:"🐲",n:"Ancient Dragon",d:"Solve 500 challenges",
   c:"#8b5cf6",hue:260,sat:1.6,
   cond:()=>solved.size>=500},

  {id:"l_elder",e:"🏯",n:"Elder Dragon's Keep",d:"Master every category",
   c:"#f59e0b",hue:30,sat:1.8,bright:1.2,
   cond:()=>countMasteredCategories()>=CATS.filter(c=>c!=='All').length},

  // ──── DIRECTION 3: DRAGON'S HOARD ────
  {id:"h_scroll",e:"📜",n:"Dragon Scroll",d:"Read every lesson description",
   c:"#f59e0b",hue:30,sat:1.5,bright:1.1,
   cond:()=>hasReadAllLessons()},

  {id:"h_ring",e:"💍",n:"Ruby Ring",d:"Practice 7 days in a row",
   c:"#f43f5e",hue:330,sat:1.5,
   cond:()=>dayStreak>=7},

  {id:"h_key",e:"🗝️",n:"Lair Key",d:"Unlock the Interview Lab (5 wins)",
   c:"#6366f1",hue:220,sat:1.6,
   cond:()=>solved.size>=5},

  {id:"h_shield",e:"🛡️",n:"Dragon Scale Shield",d:"Solve 50 challenges errorlessly (passed first try)",
   c:"#10b981",hue:80,sat:1.4,
   cond:()=>errorlessSolves>=50},

  // ──── DIRECTION 4: DRAGON RIDER RANKS ────
  {id:"r_initiate",e:"🎓",n:"Dragon Initiate",d:"Complete every Web Basics lesson",
   c:"#10b981",hue:80,sat:1.4,
   cond:()=>{
     const wb=CHS.filter(c=>c.cat==='Web Basics').map(c=>c.id);
     return wb.length>0 && wb.every(id=>solved.has(id));
   }},

  {id:"r_squire",e:"⚔️",n:"Dragon Squire",d:"Solve 50 challenges in any single category",
   c:"#06b6d4",hue:170,sat:1.5,
   cond:()=>{
     return CATS.filter(c=>c!=='All').some(cat=>{
       return CHS.filter(c=>c.cat===cat && solved.has(c.id)).length>=50;
     });
   }},

  {id:"r_knight",e:"🪶",n:"Dragon Knight",d:"Master 3 categories",
   c:"#8b5cf6",hue:260,sat:1.6,
   cond:()=>countMasteredCategories()>=3},

  {id:"r_lord",e:"👑",n:"Dragon Lord",d:"Master 10 categories",
   c:"#f59e0b",hue:30,sat:1.8,bright:1.2,
   cond:()=>countMasteredCategories()>=10},
];
const CAT_TROPHIES=[
  {id:"cweb",e:"🌱🏆",n:"Web Basics Master",d:"Complete all Web Basics lessons",cat:"Web Basics",c:"#10b981"},
  {id:"cjs",e:"⚡🏆",n:"JS Master",d:"Complete all JS Fundamentals",cat:"JS Fundamentals",c:"#FBBC04"},
  {id:"cpy",e:"🐍🏆",n:"Python Master",d:"Complete all Python",cat:"Python",c:"#4285F4"},
  {id:"css2",e:"🎨🏆",n:"CSS Master",d:"Complete all HTML & CSS",cat:"HTML & CSS",c:"#f97316"},
  {id:"calg",e:"🧩🏆",n:"Algorithm Master",d:"Complete all Algorithms",cat:"Algorithms",c:"#EA4335"},
  {id:"cstr",e:"🔤🏆",n:"String Master",d:"Complete all String Methods",cat:"String Methods",c:"#34A853"},
  {id:"carr",e:"📦🏆",n:"Array Master",d:"Complete all Array Methods",cat:"Array Methods",c:"#14b8a6"},
  {id:"csql",e:"🗄️🏆",n:"SQL Master",d:"Complete all SQL",cat:"SQL",c:"#a855f7"},
  {id:"crea",e:"⚛️🏆",n:"React Master",d:"Complete all React & Async",cat:"React & Async",c:"#ec4899"},
  {id:"cts",e:"🔷🏆",n:"TypeScript Master",d:"Complete all TypeScript",cat:"TypeScript",c:"#3178c6"},
  {id:"cgit",e:"🌿🏆",n:"Git Master",d:"Complete all Git & CLI",cat:"Git & CLI",c:"#f05032"},
  {id:"csec",e:"🔒🏆",n:"Security Master",d:"Complete all Web Security",cat:"Web Security",c:"#EA4335"},
  {id:"cnode",e:"🟢🏆",n:"Node Master",d:"Complete all Node.js",cat:"Node.js",c:"#34A853"},
  {id:"cds",e:"🏗️🏆",n:"DSA Master",d:"Complete all Data Structures",cat:"Data Structures",c:"#FBBC04"},
  {id:"cpya",e:"🐍✨🏆",n:"Python Advanced Master",d:"Complete all Python Advanced",cat:"Python Advanced",c:"#4285F4"},
  {id:"cjsa",e:"⚡✨🏆",n:"JS Advanced Master",d:"Complete all JS Advanced",cat:"JS Advanced",c:"#FBBC04"},
  {id:"ccssa",e:"🎨✨🏆",n:"CSS Advanced Master",d:"Complete all CSS Advanced",cat:"CSS Advanced",c:"#f97316"},
  {id:"chttp",e:"🌐🏆",n:"HTTP Master",d:"Complete all HTTP & APIs",cat:"HTTP & APIs",c:"#14b8a6"},
  {id:"ctest",e:"🧪🏆",n:"Testing Master",d:"Complete all Testing",cat:"Testing",c:"#a855f7"},
];
const LEADERS=[
  {n:"DragonCoder99",sc:50000,sv:500},{n:"AlgoQueen",sc:35000,sv:350},
  {n:"ByteMaster",sc:20000,sv:200},{n:"CodeNinja",sc:10000,sv:100},
  {n:"JSWizard",sc:5000,sv:50},{n:"DevLearner",sc:2500,sv:25},{n:"NewbieNate",sc:1000,sv:10},
];
const LEVELS=[
  {min:0,lbl:"🌱 Seedling"},{min:500,lbl:"💻 Coder"},{min:2000,lbl:"⚡ Developer"},
  {min:5000,lbl:"🔥 Engineer"},{min:10000,lbl:"🚀 Senior Dev"},{min:20000,lbl:"🧙 Wizard"},{min:35000,lbl:"👑 Legend"},
];


/* ══ STATE ══ */
let idx=0,score=0,filterCat='All';
let solved=new Set(),hintUsed=new Set(),earned=new Set();
let hintOpen=false,codeCache={},completedLog=[],optionShuffles={};
let lang='js';
let filteredCHS=[];

/* ══ NEW TROPHY-TRACKING STATE ══
   Persisted via save()/load() — supports the 16 new dragon trophies. */
let solveStreak=0;              // current consecutive correct-submit streak
let bestSolveStreak=0;          // best streak ever achieved
let dayStreak=0;                // current consecutive days active
let lastActiveDate='';          // YYYY-MM-DD of last activity
let dailyLessonCount=0;         // lessons completed today
let dailyLessonDate='';         // YYYY-MM-DD this counter belongs to
let noHintSolves=0;             // challenges solved without hints
let errorlessSolves=0;          // challenges solved on first submit (all passing)
let lessonsRead=new Set();      // lesson IDs whose description was opened
let firstSubmitMap={};          // {chId: bool} tracks first-submit eligibility for errorless

/* Expose state on window so other modules in this file (resume builder,
   build lab) can read it. `let` declarations do NOT auto-attach to window,
   unlike `var`, so we expose them explicitly. We re-expose after any
   reassignment in load() and resetProgress(). */
window.solved = solved;
window.earned = earned;
window.CHS    = CHS;

function load(){
  score=parseInt(localStorage.getItem('dp4_sc')||'0');
  solved=new Set(JSON.parse(localStorage.getItem('dp4_sv')||'[]'));
  hintUsed=new Set(JSON.parse(localStorage.getItem('dp4_hu')||'[]'));
  earned=new Set(JSON.parse(localStorage.getItem('dp4_ea')||'[]'));
  completedLog=JSON.parse(localStorage.getItem('dp4_log')||'[]');
  // ──── NEW: behavior-tracking state ────
  solveStreak=parseInt(localStorage.getItem('dp4_ss')||'0');
  bestSolveStreak=parseInt(localStorage.getItem('dp4_bss')||'0');
  dayStreak=parseInt(localStorage.getItem('dp4_ds')||'0');
  lastActiveDate=localStorage.getItem('dp4_lad')||'';
  dailyLessonCount=parseInt(localStorage.getItem('dp4_dlc')||'0');
  dailyLessonDate=localStorage.getItem('dp4_dld')||'';
  noHintSolves=parseInt(localStorage.getItem('dp4_nhs')||'0');
  errorlessSolves=parseInt(localStorage.getItem('dp4_es')||'0');
  lessonsRead=new Set(JSON.parse(localStorage.getItem('dp4_lr')||'[]'));
  firstSubmitMap=JSON.parse(localStorage.getItem('dp4_fsm')||'{}');
  // ──────────────────────────────────────
  // Re-sync window references after `solved` and `earned` are reassigned
  window.solved = solved;
  window.earned = earned;
}
function save(){
  localStorage.setItem('dp4_sc',score);
  localStorage.setItem('dp4_sv',JSON.stringify([...solved]));
  localStorage.setItem('dp4_hu',JSON.stringify([...hintUsed]));
  localStorage.setItem('dp4_ea',JSON.stringify([...earned]));
  localStorage.setItem('dp4_log',JSON.stringify(completedLog));
  // ──── NEW: persist behavior tracking ────
  localStorage.setItem('dp4_ss',solveStreak);
  localStorage.setItem('dp4_bss',bestSolveStreak);
  localStorage.setItem('dp4_ds',dayStreak);
  localStorage.setItem('dp4_lad',lastActiveDate);
  localStorage.setItem('dp4_dlc',dailyLessonCount);
  localStorage.setItem('dp4_dld',dailyLessonDate);
  localStorage.setItem('dp4_nhs',noHintSolves);
  localStorage.setItem('dp4_es',errorlessSolves);
  localStorage.setItem('dp4_lr',JSON.stringify([...lessonsRead]));
  localStorage.setItem('dp4_fsm',JSON.stringify(firstSubmitMap));
  // ────────────────────────────────────────
}
function resetProgress(){
  if(!confirm('Reset all progress? This clears your score, solved challenges, and trophies. This cannot be undone.')) return;
  ['dp4_sc','dp4_sv','dp4_hu','dp4_ea','dp4_log',
   'dp4_ss','dp4_bss','dp4_ds','dp4_lad','dp4_dlc',
   'dp4_dld','dp4_nhs','dp4_es','dp4_lr','dp4_fsm'].forEach(k=>localStorage.removeItem(k));
  score=0; solved=new Set(); hintUsed=new Set(); earned=new Set();
  completedLog=[]; codeCache={}; optionShuffles={}; idx=0;
  // ──── NEW: reset behavior tracking ────
  solveStreak=0; bestSolveStreak=0; dayStreak=0; lastActiveDate='';
  dailyLessonCount=0; dailyLessonDate=''; noHintSolves=0;
  errorlessSolves=0; lessonsRead=new Set(); firstSubmitMap={};
  // ──────────────────────────────────────
  // Re-sync window references after `solved` and `earned` are reassigned
  window.solved = solved;
  window.earned = earned;
  updateHUD(); updateScoreWindow(); buildNav(); render();
  showMsg('🔄 Progress reset — starting fresh!','ok');
}

/* ══ HELPERS ══ */
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function getLevel(){for(let i=LEVELS.length-1;i>=0;i--)if(score>=LEVELS[i].min)return LEVELS[i].lbl;return LEVELS[0].lbl;}
function diffCls(d){return d==='Easy'?'de':d==='Medium'?'dm':'dh';}
function escHtml(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function escOpt(s){return String(s).replace(/'/g,"\\'");}
function escAttr(s){return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function getFiltered(){return filterCat==='All'?CHS:CHS.filter(c=>c.cat===filterCat);}

/* ══ TROPHY-TRACKING HELPERS ══
   Date math + behavior counters used by the new 16-trophy system. */

// Returns today's date as YYYY-MM-DD (local time)
function getToday(){
  const d=new Date();
  const yyyy=d.getFullYear();
  const mm=String(d.getMonth()+1).padStart(2,'0');
  const dd=String(d.getDate()).padStart(2,'0');
  return yyyy+'-'+mm+'-'+dd;
}

// Returns yesterday's date as YYYY-MM-DD (local time)
function getYesterday(){
  const d=new Date();
  d.setDate(d.getDate()-1);
  const yyyy=d.getFullYear();
  const mm=String(d.getMonth()+1).padStart(2,'0');
  const dd=String(d.getDate()).padStart(2,'0');
  return yyyy+'-'+mm+'-'+dd;
}

// Call when user does a trophy-eligible action. Maintains dayStreak (consecutive
// active days) and dailyLessonCount (today's lesson completions).
function recordDailyActivity(isLessonCompletion){
  const today=getToday();
  // Day streak logic
  if(lastActiveDate!==today){
    if(lastActiveDate===getYesterday()) dayStreak++;
    else if(lastActiveDate==='') dayStreak=1;
    else dayStreak=1; // gap reset
    lastActiveDate=today;
  }
  // Daily lesson counter — resets each new day
  if(isLessonCompletion){
    if(dailyLessonDate!==today){
      dailyLessonDate=today;
      dailyLessonCount=1;
    } else {
      dailyLessonCount++;
    }
  }
}

// Updates solve streak. true on correct submit, false on wrong answer.
function recordSolveResult(isCorrect){
  if(isCorrect){
    solveStreak++;
    if(solveStreak>bestSolveStreak) bestSolveStreak=solveStreak;
  } else {
    solveStreak=0; // any wrong answer resets streak
  }
}

// Count categories the user has fully mastered (every challenge solved).
function countMasteredCategories(){
  let count=0;
  CATS.filter(c=>c!=='All').forEach(cat=>{
    const catChs=CHS.filter(c=>c.cat===cat).map(c=>c.id);
    if(catChs.length>0 && catChs.every(id=>solved.has(id))) count++;
  });
  return count;
}

// Has the user opened every lesson description? (Used for Dragon Scroll trophy)
function hasReadAllLessons(){
  const allLessonIds=CHS.filter(c=>c.mode==='lesson').map(c=>c.id);
  return allLessonIds.length>0 && allLessonIds.every(id=>lessonsRead.has(id));
}

/* ══ HUD ══ */
function updateHUD(){
  document.getElementById('scoreDisp').textContent=score;
  document.getElementById('lvlLbl').textContent=getLevel();
  document.getElementById('swSolved').textContent=solved.size;
  document.getElementById('swScore').textContent=score;
  document.getElementById('swTrophies').textContent=earned.size;
  const fc=getFiltered();
  const fSolved=fc.filter(c=>solved.has(c.id)).length;
  document.getElementById('progLbl').textContent=`${fSolved}/${fc.length}`;
  document.getElementById('progFill').style.width=`${fc.length?((fSolved/fc.length)*100):0}%`;
  updateBanner();
}
function updateBanner(){
  const b=document.getElementById('interviewBanner');
  const sub=document.getElementById('bannerSub');
  const lab=document.getElementById('interviewLab');
  if(!b||!sub||!lab)return;
  const wins=solved.size;
  if(wins>=5){
    b.classList.add('unlocked');
    sub.textContent='Interview Lab unlocked! Decode · Voice · Concept · Stack · AI Prompt Lab ↓';
    lab.style.display='block';
  } else {
    const r=5-wins;
    sub.textContent=`${r} more win${r!==1?'s':''} to unlock Interview Lab`;
  }
}
function scrollToLab(){
  if(solved.size<5){flashSolvedNotif(`🔒 ${5-solved.size} more wins needed`);return;}
  document.getElementById('interviewLab').scrollIntoView({behavior:'smooth'});
}

/* ══ CATEGORY FILTER ══ */
function buildCatFilter(){
  const bar=document.getElementById('catFilter');
  bar.innerHTML=CATS.map(c=>`
    <button class="cf-btn ${filterCat===c?'active':''}" data-cat="${c}" onclick="setCat('${c}')">
      ${CAT_ICONS[c]||''} ${c} ${c!=='All'?`(${CHS.filter(ch=>ch.cat===c).length})`:''}
    </button>`).join('');
}
function setCat(cat){
  filterCat=cat;idx=0;
  buildCatFilter();buildNav();render();updateHUD();
}

/* ══ NAV ══ */
function buildNav(){
  const fc=getFiltered();
  document.getElementById('chNav').innerHTML=fc.map((c,i)=>
    `<button class="cn ${solved.has(c.id)?'solved':''} ${i===idx?'active':''}"
     onclick="go(${i})" title="${c.title}">${c.id}</button>`).join('');
}
function updateScoreWindow(){
  const list=document.getElementById('swList');
  if(!completedLog.length){list.innerHTML='<div class="sw-empty">Solve a challenge to see progress!</div>';return;}
  list.innerHTML=[...completedLog].reverse().slice(0,30).map(e=>`
    <div class="sw-item">
      <span class="sw-item-num">#${e.id}</span>
      <span class="sw-item-name">${e.title}</span>
      <span class="diff-badge ${diffCls(e.diff)}" style="font-size:8px;padding:2px 5px">${e.diff}</span>
      <span class="sw-item-pts">+${e.pts}</span>
    </div>`).join('');
}

/* ══ RENDER ══ */
function render(){
  const fc=getFiltered();
  if(!fc.length){document.getElementById('mainContent').innerHTML='<p style="padding:20px;color:var(--dim)">No challenges in this category.</p>';return;}
  if(idx>=fc.length)idx=fc.length-1;
  const ch=fc[idx];
  const wrap=document.getElementById('mainContent');
  const isSolved=solved.has(ch.id);
  const isLesson=ch.mode==='lesson';
  // ──── NEW: mark lesson description as read on first view ────
  if(isLesson && !lessonsRead.has(ch.id)){
    lessonsRead.add(ch.id);
    save();
  }
  // ────────────────────────────────────────────────────────────
  const isEasy=ch.options!==undefined && !isLesson;
  const ext=ch.cat==='Python'?'py':'js';

  const chCard=`
    <div class="ch-card">
      <div class="ch-meta">
        <span class="ch-num-lbl">// #${ch.id} · ${filterCat==='All'?ch.cat:filterCat}</span>
        <div style="display:flex;gap:5px;align-items:center">
          <span class="cat-badge">${ch.cat}</span>
          <span class="diff-badge ${diffCls(ch.diff)}">${ch.diff}</span>
        </div>
      </div>
      <h2 class="ch-title">${ch.title}</h2>
      ${isSolved?'<div class="solved-badge">✅ Already Solved!</div>':''}
      <p class="ch-desc">${ch.desc}</p>
      ${hintUsed.has(ch.id)?`<div style="background:rgba(66,133,244,0.08);border:1px solid rgba(66,133,244,0.2);
        border-radius:8px;padding:10px 12px;font-size:12px;color:#b8c8e8;line-height:1.6">
        <strong style="color:var(--blue)">💡</strong> ${escHtml(ch.hint)}</div>`:''}
    </div>`;

  let codePanel='';
  if(isEasy){
    const key=`${ch.id}`;
    if(!optionShuffles[key]){
      const correct=ch.options[ch.ansIdx];
      optionShuffles[key]={shuffled:shuffle(ch.options),correct};
    }
    const{shuffled,correct}=optionShuffles[key];
    const displayCode=ch.code?escHtml(ch.code).replace(/___/g,'<span class="blank">___ ← choose</span>'):'';    
    const keys=['A','B','C','D'];
    codePanel=`
      <div class="code-display-card">
        <div class="code-header">
          <div class="cd" style="background:#ff5f57"></div>
          <div class="cd" style="background:#febc2e"></div>
          <div class="cd" style="background:#28c840"></div>
          <span class="code-filename">challenge_${ch.id}.${ext}</span>
          <span style="margin-left:auto;font-size:9px;color:var(--blue);font-weight:700">MULTIPLE CHOICE</span>
        </div>
        ${displayCode?`<div class="code-body"><pre class="code-text">${displayCode}</pre></div>`:''}
        <div class="options-area">
          <div class="opt-lbl">Choose the correct answer:</div>
          ${shuffled.map((opt,i)=>`
            <div class="option" id="opt${i}" data-opt="${i}" data-val="${escAttr(opt)}" data-correct="${escAttr(correct)}">
              <div class="opt-key">${keys[i]}</div>
              <div style="font-size:11px">${escHtml(opt)}</div>
            </div>`).join('')}
        </div>
      </div>`;
  } else if(isLesson){
    // BEGINNER LESSON — Run-and-observe with live iframe preview
    const code=codeCache[ch.id]!==undefined?codeCache[ch.id]:ch.start;
    const previewType=ch.preview||'html';
    codePanel=`
      <div class="code-display-card lesson-card">
        <div class="code-header">
          <div class="cd" style="background:#ff5f57"></div>
          <div class="cd" style="background:#febc2e"></div>
          <div class="cd" style="background:#28c840"></div>
          <span class="code-filename">lesson_${ch.id}.${previewType}</span>
          <span style="margin-left:auto;font-size:9px;color:#10b981;font-weight:700">LESSON · RUN-AND-OBSERVE</span>
        </div>
        <textarea class="code-editor lesson-editor" id="lessonCode" spellcheck="false" onkeydown="handleTab(event)">${escHtml(code)}</textarea>
        <div class="lesson-goal" style="padding:10px 12px;background:rgba(16,185,129,0.08);border-top:1px solid rgba(16,185,129,0.2);font-size:12px;color:#a7f3d0;line-height:1.6">
          <strong style="color:#10b981">🎯 Try this:</strong> ${escHtml(ch.goal||'')}
        </div>
        <div class="ed-actions" style="border-top:1px solid rgba(255,255,255,0.06)">
          <button class="btn-run" onclick="runLessonPreview(${ch.id},'${previewType}')">▶ Run</button>
          <button class="btn-sub" onclick="markLessonComplete(${ch.id})">✓ I Tried · 🥚</button>
          <button class="btn-sub" style="background:#10b981" onclick="markLessonSolved(${ch.id})">🎉 I Got It · 🐉</button>
          <button class="btn-rst" onclick="resetCode()">↺</button>
        </div>
        <div class="lesson-preview-wrap" style="border-top:1px solid rgba(255,255,255,0.08);background:white;min-height:200px">
          <iframe id="lessonPreview" sandbox="allow-scripts" style="width:100%;height:300px;border:0;background:white"></iframe>
        </div>
        ${ch.source?`<div style="padding:8px 12px;font-size:10px;color:var(--dim);border-top:1px solid rgba(255,255,255,0.06)">Source: ${escHtml(ch.source)}</div>`:''}
      </div>`;
  } else {
    const code=codeCache[ch.id]!==undefined?codeCache[ch.id]:ch.start;
    codePanel=`
      <div class="code-display-card">
        <div class="code-header">
          <div class="cd" style="background:#ff5f57"></div>
          <div class="cd" style="background:#febc2e"></div>
          <div class="cd" style="background:#28c840"></div>
          <span class="code-filename">challenge_${ch.id}.${ext}</span>
          <span style="margin-left:auto;font-size:9px;color:var(--dim);font-weight:600">${ch.diff.toUpperCase()}</span>
        </div>
        <textarea class="code-editor" id="codeArea" spellcheck="false" onkeydown="handleTab(event)">${code}</textarea>
        <div class="out-panel" id="outPanel">
          <div class="out-lbl">▶ Output</div>
          <div style="color:var(--dim);font-size:11px;font-style:italic">Run to see results…</div>
        </div>
        <div class="ed-actions">
          <button class="btn-run" onclick="runCode()">▶ Run</button>
          <button class="btn-sub" onclick="submitCode()">✓ Submit</button>
          <button class="btn-rst" onclick="resetCode()">↺</button>
        </div>
      </div>`;
  }

  wrap.innerHTML=chCard+codePanel;
  if(isLesson){
    document.getElementById('lessonCode').addEventListener('input',e=>{codeCache[ch.id]=e.target.value;});
  } else if(!isEasy) {
    document.getElementById('codeArea').addEventListener('input',e=>{codeCache[ch.id]=e.target.value;});
  } else {
    wrap.querySelectorAll('.option').forEach(el=>{
      el.addEventListener('click',()=>{
        const chosen=el.dataset.val;
        const correct=el.dataset.correct;
        const i=parseInt(el.dataset.opt);
        pickOption(chosen,correct,i);
      });
    });
  }
  document.getElementById('chResultMsg').innerHTML='';
  buildNav();updateHUD();
}

/* ══ GAME LOGIC ══ */
function pickOption(chosen,correct,clickedIdx){
  const fc=getFiltered();const ch=fc[idx];
  if(solved.has(ch.id))return;
  const opts=document.querySelectorAll('.option');
  opts.forEach(el=>{el.style.pointerEvents='none';});
  if(chosen===correct){
    opts[clickedIdx].classList.add('correct');
    markSolved(100);
    showMsg('✅ Correct! +100','ok');
  } else {
    opts[clickedIdx].classList.add('wrong');
    opts.forEach(el=>{
      if(el.dataset.val===correct) el.classList.add('correct');
    });
    showMsg('❌ Not quite — correct answer highlighted above','no');
    recordSolveResult(false); // ──── NEW: wrong answer breaks streak ────
    save();
  }
}
function showMsg(msg,type){document.getElementById('chResultMsg').innerHTML=`<span class="ch-result-msg ${type}">${msg}</span>`;}
function runTests(code,ch){
  const res=[];let passed=0;
  for(const t of ch.tests){
    try{
      const fn=new Function(`"use strict";${code};return ${ch.fn}(${t.a.map(x=>JSON.stringify(x)).join(',')});`);
      const got=fn();const ok=JSON.stringify(got)===JSON.stringify(t.e);
      if(ok)passed++;res.push({ok,a:t.a,e:t.e,got});
    }catch(err){res.push({ok:false,a:t.a,e:t.e,got:`Error: ${err.message}`});}
  }
  return{passed,total:ch.tests.length,res};
}
function showOutput(res,passed,total,isSubmit){
  const all=passed===total;
  document.getElementById('outPanel').innerHTML=`
    <div class="out-lbl">▶ ${isSubmit?'Submit':'Run'}</div>
    <div class="res-sum ${all?'ap':passed?'pt':'af'}">${all?`✅ All ${total} passed!`:`${passed}/${total} passed`}</div>
    ${res.map((r,i)=>`<div class="test-row"><span>${r.ok?'✅':'❌'}</span>
      <div class="tr-txt">Test ${i+1}: <span style="color:#c084fc">${JSON.stringify(r.a)}</span>
      → <span class="tp">${JSON.stringify(r.e)}</span>
      ${!r.ok?`<br>Got: <span class="tf">${JSON.stringify(r.got)}</span>`:''}</div>
    </div>`).join('')}`;
}
function runCode(){
  const fc=getFiltered();const ch=fc[idx];
  if(!document.getElementById('codeArea'))return;
  const{passed,total,res}=runTests(document.getElementById('codeArea').value,ch);
  showOutput(res,passed,total,false);
}

/* ══ LESSON MODE — Run-and-observe preview ══ */
function runLessonPreview(chId, previewType){
  const editor = document.getElementById('lessonCode');
  const iframe = document.getElementById('lessonPreview');
  if (!editor || !iframe) return;
  const code = editor.value;
  codeCache[chId] = code;

  // Auto-award the hatchling on first Run for this lesson
  if (!window.triedLessons) window.triedLessons = new Set();
  if (!window.triedLessons.has(chId)) {
    window.triedLessons.add(chId);
    saveTriedLessons();
    checkAllTrophies();
  }

  let html;
  if (previewType === 'html') {
    html = code;
  } else if (previewType === 'css') {
    html = '<!DOCTYPE html><html><head><style>' + code + '</style></head>'
         + '<body><h1>Heading</h1><p>Paragraph</p>'
         + '<ul><li>Item 1</li><li>Item 2</li></ul>'
         + '<button>Button</button></body></html>';
  } else if (previewType === 'js') {
    html = '<!DOCTYPE html><html><body>'
         + '<div id="output" style="font-family:monospace;padding:8px;font-size:13px"></div>'
         + '<script>'
         + 'const out = document.getElementById("output");'
         + 'const origLog = console.log;'
         + 'console.log = (...args) => {'
         + '  const line = document.createElement("div");'
         + '  line.textContent = args.map(a => typeof a === "object" ? JSON.stringify(a) : String(a)).join(" ");'
         + '  out.appendChild(line);'
         + '  origLog(...args);'
         + '};'
         + 'try {' + code + '} catch (err) {'
         + '  const errLine = document.createElement("div");'
         + '  errLine.style.color = "#ef4444";'
         + '  errLine.textContent = "Error: " + err.message;'
         + '  out.appendChild(errLine);'
         + '}'
         + '<\/script></body></html>';
  } else {
    html = code;
  }
  iframe.srcdoc = html;
}

function markLessonComplete(chId){
  // Awards the hatchling — just for trying
  if (!window.triedLessons) window.triedLessons = new Set();
  window.triedLessons.add(chId);
  saveTriedLessons();
  checkAllTrophies();
  flashNotif('🥚 Hatchling awarded! Keep going!');
}

function markLessonSolved(chId){
  // Awards the dragon — learner self-reports they got it
  if (!solved.has(chId)) {
    solved.add(chId);
    score += 50; // beginner lessons worth 50 pts
    wins += 1;
    // ──── NEW: behavior tracking for lesson dragons ────
    recordSolveResult(true);
    recordDailyActivity(true);
    // ──────────────────────────────────────────────────
    save();
    updateHUD();
    flashNotif('🐉 +50 · Dragon earned!');
    checkAllTrophies();
    buildNav();
  } else {
    flashNotif('Already complete!');
  }
}

function saveTriedLessons(){
  try {
    localStorage.setItem('triedLessons', JSON.stringify([...(window.triedLessons || new Set())]));
  } catch(e){}
}

function loadTriedLessons(){
  try {
    const raw = localStorage.getItem('triedLessons');
    window.triedLessons = new Set(raw ? JSON.parse(raw) : []);
  } catch(e){
    window.triedLessons = new Set();
  }
}
function submitCode(){
  const fc=getFiltered();const ch=fc[idx];
  if(!document.getElementById('codeArea'))return;
  const{passed,total,res}=runTests(document.getElementById('codeArea').value,ch);
  showOutput(res,passed,total,true);
  // ──── NEW: lock out errorless eligibility on first failed submit ────
  // If they fail at least once, firstSubmitMap[id]=false prevents the
  // errorlessSolves++ from happening in markSolved when they eventually pass.
  if(firstSubmitMap[ch.id]===undefined && passed!==total){
    firstSubmitMap[ch.id]=false;
  }
  // ──────────────────────────────────────────────────────────────────
  if(passed===total&&!solved.has(ch.id)){
    const pts=hintUsed.has(ch.id)?60:100;markSolved(pts);showMsg(`✅ +${pts} pts`,'ok');
  } else if(passed!==total){
    recordSolveResult(false); // ──── NEW: wrong answer breaks streak ────
    save();
    showMsg(`❌ ${passed}/${total} — keep trying!`,'no');
  }
}
function markSolved(pts){
  const fc=getFiltered();const ch=fc[idx];
  score+=pts;solved.add(ch.id);
  completedLog.push({id:ch.id,title:ch.title,diff:ch.diff,cat:ch.cat,pts,time:Date.now()});
  // ──── NEW: behavior tracking ────
  recordSolveResult(true);
  recordDailyActivity(ch.mode==='lesson');
  if(!hintUsed.has(ch.id)) noHintSolves++;
  // Errorless: passed on the very first submit attempt for this challenge.
  // submitCode() flips firstSubmitMap[id] to false on any failed attempt.
  if(firstSubmitMap[ch.id]===undefined){
    errorlessSolves++;
    firstSubmitMap[ch.id]=true;
  }
  // ────────────────────────────────
  save();updateHUD();updateScoreWindow();flashNotif(`✅ +${pts}`);checkAllTrophies();buildNav();
}
function resetCode(){
  const fc=getFiltered();const ch=fc[idx];
  const lessonEl=document.getElementById('lessonCode');
  const challEl=document.getElementById('codeArea');
  if(lessonEl){
    lessonEl.value=ch.start;
    codeCache[ch.id]=ch.start;
  } else if(challEl){
    challEl.value=ch.start;
    codeCache[ch.id]=ch.start;
    document.getElementById('outPanel').innerHTML='<div class="out-lbl">▶ Output</div><div style="color:var(--dim);font-size:11px;font-style:italic">Run to see results…</div>';
  }
}
function handleTab(e){
  if(e.key==='Tab'){e.preventDefault();const t=e.target,s=t.selectionStart;
    t.value=t.value.substring(0,s)+'  '+t.value.substring(t.selectionEnd);
    t.selectionStart=t.selectionEnd=s+2;}
}
function toggleHint(){
  const fc=getFiltered();const ch=fc[idx];
  const drawer=document.getElementById('hintDrawer');
  if(!hintOpen){document.getElementById('hintTxt').textContent=ch.hint;drawer.classList.add('open');hintOpen=true;hintUsed.add(ch.id);save();}
  else{drawer.classList.remove('open');hintOpen=false;}
}
function closeHint(){if(hintOpen){document.getElementById('hintDrawer').classList.remove('open');hintOpen=false;}}
function go(i){closeHint();idx=i;render();window.scrollTo({top:0,behavior:'smooth'});}
function nextCh(){const fc=getFiltered();if(idx<fc.length-1){closeHint();idx++;render();window.scrollTo({top:0,behavior:'smooth'});}}
function prevCh(){if(idx>0){closeHint();idx--;render();window.scrollTo({top:0,behavior:'smooth'});}}
function flashNotif(msg){
  const el=document.getElementById('solvedNotif');
  el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),3000);
}
function goHome(){
  document.getElementById('gameScreen').style.display='none';
  document.getElementById('interviewLab').style.display='none';
  document.getElementById('startScreen').style.display='flex';
}

/* ══ TROPHIES ══ */
function checkAllTrophies(){
  const wins=solved.size;
  const tries=(window.triedLessons||new Set()).size;
  // Count lessons specifically that have been completed (solved with mode=lesson)
  const completedLessons=CHS.filter(c=>c.mode==='lesson'&&solved.has(c.id)).length;
  WIN_TROPHIES.forEach(t=>{
    if(earned.has(t.id))return;

    // ──── NEW: cond-based trophies (function pattern) ────
    // Used by the 16 new dragon-themed trophies. If `cond` exists,
    // call it and award when it returns true. Skips the legacy
    // threshold branch entirely so there's no collision.
    if(typeof t.cond === 'function'){
      if(t.cond()){
        earned.add(t.id);
        save();
        showTrophyToast(t);
      }
      return;
    }
    // ─────────────────────────────────────────────────────

    // LEGACY behavior — unchanged for backward compatibility.
    // Only runs when trophy has `t` (threshold), not `cond`.
    // Hatchling trophies (id starts with 'h') fire on "tried" count
    // Chick trophies (id starts with 'c') fire on "completed lessons" count
    // All others fire on total solved count
    const isHatchling=t.id.startsWith('h') && t.t!==undefined;
    const isChick=t.id.startsWith('c') && t.t!==undefined;
    let count;
    if(isHatchling)count=tries;
    else if(isChick)count=completedLessons;
    else count=wins;
    if(count>=t.t){earned.add(t.id);save();showTrophyToast(t);}
  });
  CAT_TROPHIES.forEach(t=>{
    const catChs=CHS.filter(c=>c.cat===t.cat).map(c=>c.id);
    if(!earned.has(t.id)&&catChs.length>0&&catChs.every(id=>solved.has(id))){earned.add(t.id);save();showTrophyToast(t);}
  });
  updateHUD();
}
function showTrophyToast(t){
  const tuE=document.getElementById('tuE');
  tuE.textContent=t.e;
  const isToastHatchling=t.id&&t.id.startsWith('h');
  const isToastChick=t.id&&t.id.startsWith('c')&&t.id!=='cweb';
  const tSat=t.sat!==undefined?t.sat:1.6;
  const tBright=t.bright!==undefined?t.bright:1;
  if(isToastHatchling||isToastChick){
    tuE.style.filter=`sepia(1) hue-rotate(${t.hue||0}deg) saturate(${tSat*2}) brightness(${tBright*1.1})`;
  } else if(t.hue!==undefined){
    tuE.style.filter=`hue-rotate(${t.hue}deg) saturate(${tSat}) brightness(${tBright})`;
  } else {
    tuE.style.filter='';
  }
  document.getElementById('tuN').textContent=t.n;
  document.getElementById('tuD').textContent=t.d;
  const el=document.getElementById('tuToast');
  el.style.borderColor=t.c;el.style.boxShadow=`0 8px 26px ${t.c}40`;
  el.classList.add('show');setTimeout(()=>el.classList.remove('show'),5000);
}
function openTrophies(){
  const build=(title,list)=>`<div class="tr-section">
    <div class="tr-section-title">${title}</div>
    <div class="tr-grid">${list.map(t=>{const e=earned.has(t.id);
      const isHatchling=t.id&&t.id.startsWith('h');
      const isChick=t.id&&t.id.startsWith('c')&&t.id!=='cweb';
      // Hatchlings and chicks get a colored background tint and stronger emoji filter
      const needsTint=isHatchling||isChick;
      const cardBgStyle=needsTint?`background:linear-gradient(135deg, ${t.c}30, ${t.c}10);`:'';
      // Build filter using per-trophy sat and bright values (defaults: sat=1.6, bright=1)
      const sat=t.sat!==undefined?t.sat:1.6;
      const bright=t.bright!==undefined?t.bright:1;
      let emojiFilter='';
      if(needsTint){
        emojiFilter=`style="filter:sepia(1) hue-rotate(${t.hue||0}deg) saturate(${sat*2}) brightness(${bright*1.1})"`;
      } else if(t.hue!==undefined){
        emojiFilter=`style="filter:hue-rotate(${t.hue}deg) saturate(${sat}) brightness(${bright})"`;
      }
      return`<div class="tr-item ${e?'earned':'locked'}" style="${e?`border-color:${t.c};box-shadow:0 0 10px ${t.c}25;${cardBgStyle}`:cardBgStyle}">
        ${e?'<span class="earned-tag">EARNED</span>':''}
        <div class="tr-e" ${emojiFilter}>${t.e}</div><div class="tr-n">${t.n}</div><div class="tr-r">${t.d}</div>
      </div>`;}).join('')}</div></div>`;
  document.getElementById('trContent').innerHTML=
    build('🏆 Win Milestones',WIN_TROPHIES)+build('🎯 Category Masters',CAT_TROPHIES);
  document.getElementById('trModal').classList.add('open');
}
function closeTr(ev){if(!ev||ev.target===document.getElementById('trModal'))document.getElementById('trModal').classList.remove('open');}
function openLB(){
  const me={n:"You ⭐",sc:score,sv:solved.size,you:true};
  const all=[...LEADERS,me].sort((a,b)=>b.sc-a.sc);
  const medals=['🥇','🥈','🥉'];
  document.getElementById('lbList').innerHTML=all.map((p,i)=>`
    <div class="lb-row ${p.you?'you':''}">
      <span class="lb-rank">${medals[i]||`#${i+1}`}</span>
      <span class="lb-name">${p.n}</span>
      <span class="lb-slvd">${p.sv} solved</span>
      <span class="lb-sc" style="color:${p.you?'var(--blue)':'var(--yellow)'}">${p.sc} pts</span>
    </div>`).join('');
  document.getElementById('lbModal').classList.add('open');
}
function closeLB(ev){if(!ev||ev.target===document.getElementById('lbModal'))document.getElementById('lbModal').classList.remove('open');}

function openCatModal(){
  document.getElementById('catGridModal').innerHTML=CATS.filter(c=>c!=='All').map(c=>{
    const count=CHS.filter(ch=>ch.cat===c).length;
    const solvedCount=CHS.filter(ch=>ch.cat===c&&solved.has(ch.id)).length;
    const firstIdx=CHS.findIndex(ch=>ch.cat===c);
    return`<div class="cat-card" onclick="jumpToCat('${c}')" style="border-color:rgba(255,255,255,0.1)">
      <div class="cat-card-icon">${CAT_ICONS[c]||'📚'}</div>
      <div class="cat-card-name">${c}</div>
      <div class="cat-card-count">${solvedCount}/${count} solved</div>
    </div>`;
  }).join('');
  document.getElementById('catModal').classList.add('open');
}
function closeCatModal(ev){if(!ev||ev.target===document.getElementById('catModal'))document.getElementById('catModal').classList.remove('open');}
function jumpToCat(cat){
  closeCatModal();setCat(cat);
  document.getElementById('gameScreen').scrollIntoView({behavior:'smooth'});
}

/* ══ START ══ */

/* ══════════════════════════════════
   INTERVIEW LAB — STATE & DATA
══════════════════════════════════ */
let labLang='js',currentIntType='decode';
let intDecodeIdx=0,intVoiceIdx=0,intConceptIdx=0,stackSub='frontend',stackQIdx=0,aiIdx=0;
let recognition=null,isListening=false;
let aiSelections=new Set();

const DECODE_JS=[
  {id:"d1",title:"Coordinate Grid Decoder",
   desc:"Parse a table of (x, character, y) data points. Plot each char at grid[y][x], then print rows from maxY down to 0 to reveal a hidden message.",
   notes:"<strong>📋 Before coding:</strong> What structure holds the grid? How do you find dimensions without hardcoding? Why reverse Y when printing?",
   start:`// window.GRID_POINTS = [{x,y,char},...] is pre-loaded
function decodeGrid(points) {
  // 1. Find maxX and maxY
  // 2. Build 2D array filled with spaces
  // 3. Place each char at grid[y][x]
  // 4. Print rows from maxY down to 0
}
decodeGrid(window.GRID_POINTS);`,
   samplePoints:[{x:0,y:2,char:'█'},{x:1,y:2,char:'█'},{x:2,y:2,char:'░'},{x:0,y:1,char:'░'},{x:1,y:1,char:'█'},{x:2,y:1,char:'░'},{x:0,y:0,char:'█'},{x:1,y:0,char:'█'},{x:2,y:0,char:'█'}],
   hint:"Array.from({length:maxY+1},()=>Array(maxX+1).fill(' ')). Loop rows maxY→0 when printing.",
   keywords:["grid","maxY","maxX","Array","fill","forEach","join","row","column","reverse"]},
  {id:"d2",title:"URL Message Decoder",
   desc:"A secret message lives in a Google Doc as an HTML table: x-coordinate | character | y-coordinate. Fetch, parse, build grid, print.",
   notes:"<strong>📋 Ask before coding:</strong> fetch vs axios? CORS? What if a row has NaN?",
   start:`async function decodeSecretMessage(url) {
  // 1. fetch(url) and get HTML text
  // 2. Parse with DOMParser — find table rows, skip header
  // 3. Extract x, char, y — guard NaN
  // 4. Find maxX, maxY
  // 5. Build grid[y][x] = char
  // 6. Print maxY → 0
}
// Test URL (describe your solution — CORS blocks browser direct fetch):
const URL='https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub';`,
   hint:"Node.js: axios.get(url) + cheerio.load(data). Browser: fetch + DOMParser. Guard with isNaN(x).",
   keywords:["fetch","axios","cheerio","DOMParser","parseInt","NaN","grid","forEach","isNaN","reverse"]}
];
const DECODE_PY=[
  {id:"dp1",title:"Coordinate Grid Decoder",
   desc:"Parse a list of (x, char, y) tuples. Plot characters onto a 2D grid and print rows top to bottom.",
   notes:"<strong>📋 Before coding:</strong> Use a dict or nested list for the grid? How do you find max dimensions?",
   start:`# GRID_POINTS = [(x, char, y), ...]
GRID_POINTS = [(0,'█',2),(1,'█',2),(2,'░',2),(0,'░',1),(1,'█',1),(2,'░',1),(0,'█',0),(1,'█',0),(2,'█',0)]

def decode_grid(points):
    # 1. Find max_x and max_y
    # 2. Build 2D list filled with spaces
    # 3. Place char at grid[y][x]
    # 4. Print rows from max_y down to 0

decode_grid(GRID_POINTS)`,
   hint:"Use a dict: grid={(x,y):char}. Then for y in range(max_y,-1,-1): print rows.",
   keywords:["max","dict","range","print","join","enumerate","row","column","reverse","append"]},
  {id:"dp2",title:"URL Message Decoder (Python)",
   desc:"Use requests + BeautifulSoup to fetch a Google Doc, parse the HTML table, build a grid, and reveal the hidden message.",
   notes:"<strong>📋 Ask first:</strong> requests vs urllib? What if BeautifulSoup isn't installed? Handle missing cells.",
   start:`import requests
from bs4 import BeautifulSoup

def decode_secret_message(url):
    # 1. requests.get(url) — get HTML
    # 2. BeautifulSoup parse — find all <tr> rows, skip header
    # 3. Extract x, char, y from <td> cells — guard ValueError
    # 4. Find max_x, max_y
    # 5. Build grid[y][x] = char
    # 6. Print from max_y down to 0

URL='https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub'`,
   hint:"soup.find_all('tr')[1:] skips header. int(cols[0].text.strip()) gets x. guard with try/except ValueError.",
   keywords:["requests","BeautifulSoup","find_all","tr","td","int","strip","grid","range","print"]}
];

// ── VOICE EXPLAINERS ──
const VOICE_JS=[
  {id:"v1",title:"Explain Two Sum",question:"Look at this code and explain what it does, why it works, and the time complexity.",
   code:`function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) return [map[complement], i];
    map[nums[i]] = i;
  }
}`,keywords:["hash","map","complement","linear","O(n)","lookup","index","subtract","store","single pass"],minKeywords:3,
   expectedAnswer:"Uses a hash map to store seen values. For each number checks if its complement (target minus current) was already seen. Returns both indices. O(n) time."},
  {id:"v2",title:"Explain Recursion",question:"Explain recursion, when you'd use it, and one risk to watch for.",code:null,
   keywords:["base case","stack","call","itself","overflow","termination","depth","factorial","fibonacci","tree"],minKeywords:3,
   expectedAnswer:"A function that calls itself. Needs a base case to terminate. Risk is stack overflow with deep recursion. Used for trees, factorial, fibonacci."},
  {id:"v3",title:"What is a Closure?",question:"Explain JavaScript closures and give a use case.",
   code:`function makeCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}`,
   keywords:["scope","inner","outer","variable","persist","lexical","access","private","retain","encapsulate"],minKeywords:3,
   expectedAnswer:"Inner function retaining access to outer scope variables after the outer function returns. Used for private state, factories, event handlers."},
];
const VOICE_PY=[
  {id:"vp1",title:"Explain List Comprehension",question:"Explain Python list comprehensions, when to use them, and their trade-offs vs for loops.",
   code:`squares = [x**2 for x in range(10) if x % 2 == 0]`,
   keywords:["concise","readable","filter","expression","iterable","memory","generator","loop","pythonic","performance"],minKeywords:3,
   expectedAnswer:"A concise way to create lists from iterables with optional filtering. More readable for simple transformations. For large data prefer generators to save memory."},
  {id:"vp2",title:"Explain Decorators",question:"Explain Python decorators — what they are, how they work, and a real use case.",
   code:`def log(func):\n    def wrapper(*args, **kwargs):\n        print(f'Calling {func.__name__}')\n        return func(*args, **kwargs)\n    return wrapper\n\n@log\ndef greet(name):\n    return f'Hello {name}'`,
   keywords:["wrapper","higher order","closure","function","@","modify","behavior","logging","authentication","flask"],minKeywords:3,
   expectedAnswer:"A function that wraps another function to modify its behavior. Uses closure. Common for logging, authentication, Flask routes, caching."},
  {id:"vp3",title:"Explain *args and **kwargs",question:"What are *args and **kwargs in Python, and when would you use each?",code:null,
   keywords:["positional","keyword","unpack","flexible","tuple","dictionary","variable","arguments","arbitrary","spread"],minKeywords:3,
   expectedAnswer:"*args collects extra positional arguments into a tuple. **kwargs collects extra keyword arguments into a dict. Used when you don't know how many arguments a function will receive."},
];

// ── CONCEPT Q&A ──
const CONCEPT_JS=[
  {id:"c1",title:"Big O Notation",question:"What is Big O notation and why does it matter?",
   keywords:["time","space","complexity","scale","worst","O(n)","O(1)","O(n²)","efficient","grow"],minKeywords:3,
   expectedAnswer:"Describes how algorithm time/space grows with input size. O(1) constant, O(n) linear, O(n²) quadratic. Matters for scalability."},
  {id:"c2",title:"REST vs GraphQL",question:"Difference between REST and GraphQL APIs? When would you choose each?",
   keywords:["endpoint","query","over-fetch","under-fetch","schema","flexible","single","multiple","request","type"],minKeywords:3,
   expectedAnswer:"REST uses fixed endpoints per resource. GraphQL uses one endpoint with flexible queries avoiding over-fetching. REST simpler for CRUD; GraphQL better for complex data needs."},
  {id:"c3",title:"Event Loop",question:"Explain the JavaScript event loop and what 'asynchronous' means in that context.",
   keywords:["call stack","queue","callback","async","await","non-blocking","single thread","microtask","promise","setTimeout"],minKeywords:3,
   expectedAnswer:"JS is single-threaded. Event loop processes call stack then picks tasks from queue. Async code defers execution so the stack isn't blocked."},
  {id:"c4",title:"SQL vs NoSQL",question:"Compare SQL and NoSQL databases. What factors guide your choice?",
   keywords:["relational","schema","flexible","document","table","ACID","transaction","MongoDB","structured","scale"],minKeywords:3,
   expectedAnswer:"SQL is relational with strict schema, great for transactions. NoSQL is flexible, document-based, scales horizontally. SQL for complex relations; NoSQL for large-scale flexible data."},
];
const CONCEPT_PY=[
  {id:"cp1",title:"GIL in Python",question:"What is the Python GIL and how does it affect multi-threaded programs?",
   keywords:["Global Interpreter Lock","thread","concurrent","CPU","I/O","multiprocessing","CPython","performance","parallel","mutex"],minKeywords:3,
   expectedAnswer:"The GIL prevents multiple threads from executing Python bytecode simultaneously. Limits CPU-bound threading; I/O-bound threads still benefit. Use multiprocessing for true parallelism."},
  {id:"cp2",title:"Generators vs Lists",question:"Explain Python generators vs lists. When would you use a generator?",
   keywords:["yield","lazy","memory","iterator","next","large","stream","infinite","list","performance"],minKeywords:3,
   expectedAnswer:"Generators use yield and produce values lazily — one at a time — saving memory. Use for large datasets, infinite sequences, or streaming data."},
  {id:"cp3",title:"Mutable vs Immutable",question:"What is the difference between mutable and immutable types in Python? Why does it matter?",
   keywords:["list","tuple","dict","string","frozen","hash","key","side effect","copy","reference"],minKeywords:3,
   expectedAnswer:"Mutable objects (list, dict) can be changed in place. Immutable (tuple, string) cannot. Immutables can be dict keys and are safer across functions — no unexpected mutation."},
];

/* ── STACK INTERVIEW QUESTIONS (sourced from CoderPad, Terminal.io, GeeksforGeeks, daily.dev) ── */
const STACK_QUESTIONS={
  frontend:[
    {q:"What are the key differences between client-side rendering (CSR) and server-side rendering (SSR)? When would you choose one over the other?",
     keywords:["browser","server","SEO","initial load","hydration","React","Next.js","DOM","performance","TTFB"],minKeywords:3,
     source:"daily.dev",
     expected:"CSR builds the DOM in the browser — fast after initial load but poor SEO. SSR renders HTML on the server — better SEO and initial paint. Use SSR for content-heavy or SEO-critical pages; CSR for app-like dashboards."},
    {q:"Explain CSS specificity. How do you resolve a specificity conflict?",
     keywords:["inline","ID","class","element","!important","specificity","weight","cascade","selector","override"],minKeywords:3,
     source:"InterviewBit",
     expected:"Specificity is calculated by selector type: inline > ID > class/attribute > element. To resolve conflicts: refactor to lower specificity selectors or use a more specific selector. Avoid !important except as last resort."},
    {q:"What is the Virtual DOM in React and why does it improve performance?",
     keywords:["reconciliation","diff","real DOM","fiber","re-render","state","props","update","batch","React"],minKeywords:3,
     source:"GeeksforGeeks",
     expected:"React keeps a lightweight virtual copy of the DOM. On state change, it diffs old vs new virtual DOM (reconciliation) and applies only changed parts to the real DOM — minimizing expensive browser repaints."},
    {q:"Explain the CSS box model. What is the difference between content-box and border-box?",
     keywords:["margin","border","padding","content","width","box-sizing","layout","block","inline","total"],minKeywords:3,
     source:"InterviewBit",
     expected:"The box model = content + padding + border + margin. content-box: width = content only. border-box: width includes padding and border — easier for layouts. Set box-sizing:border-box globally."},
    {q:"What is event delegation in JavaScript and why is it useful?",
     keywords:["bubbling","parent","listener","dynamic","performance","target","propagation","child","attach","DOM"],minKeywords:3,
     source:"GeeksforGeeks",
     expected:"Attaching one event listener to a parent instead of many children. Events bubble up so the parent catches them via e.target. Useful for dynamically added elements and reducing memory usage."},
    {q:"How does JavaScript prototypal inheritance work?",
     keywords:["prototype","chain","__proto__","Object.create","inherit","property","method","class","constructor","lookup"],minKeywords:3,
     source:"GeeksforGeeks",
     expected:"Objects inherit from other objects via the prototype chain. When a property isn't found on an object, JS looks up the chain. ES6 classes are syntactic sugar over this mechanism."},
    {q:"What is CORS and how do you fix a CORS error?",
     keywords:["cross-origin","header","Access-Control","preflight","OPTIONS","server","origin","request","browser","policy"],minKeywords:3,
     source:"Turing.com",
     expected:"CORS is a browser security policy blocking requests to different origins. Fix: add Access-Control-Allow-Origin header on the server. For preflight OPTIONS requests, respond with appropriate CORS headers."},
    {q:"Explain the difference between null, undefined, and NaN in JavaScript.",
     keywords:["null","undefined","NaN","type","coercion","assignment","typeof","===","intentional","isNaN"],minKeywords:3,
     source:"GeeksforGeeks",
     expected:"undefined: variable declared but not assigned. null: intentional absence of value. NaN: result of invalid numeric operation. typeof NaN is 'number'. Use Number.isNaN() to check NaN safely."},
    {q:"What are CSS Flexbox and Grid, and when would you use each?",
     keywords:["one-dimensional","two-dimensional","axis","align","justify","row","column","track","gap","responsive"],minKeywords:3,
     source:"daily.dev",
     expected:"Flexbox is one-dimensional — great for nav bars and centering. Grid is two-dimensional — great for full page layouts. Use Flexbox for component internals; Grid for page structure."},
    {q:"How do you optimize a web application's performance?",
     keywords:["lazy load","minify","CDN","cache","bundle","code split","image","compress","render","defer"],minKeywords:3,
     source:"CoderPad",
     expected:"Minify and bundle assets, lazy-load images and components, use CDN, enable caching headers, reduce render-blocking scripts with defer/async, use code splitting for JS bundles."},
  ],
  backend:[
    {q:"Explain the differences between REST and GraphQL APIs and when to use each.",
     keywords:["endpoint","query","over-fetch","under-fetch","schema","single","multiple","mutation","resolver","type"],minKeywords:3,
     source:"daily.dev",
     expected:"REST uses multiple fixed endpoints. GraphQL uses one endpoint where clients specify exactly what data they need. REST for simple CRUD; GraphQL for flexible data fetching across complex relationships."},
    {q:"How do you implement authentication and authorization in a Node.js application?",
     keywords:["JWT","token","OAuth","session","cookie","middleware","role","permission","bcrypt","passport"],minKeywords:3,
     source:"Terminal.io",
     expected:"Use JWT for stateless auth — server issues a signed token, client sends it in headers. Middleware validates the token. Use bcrypt to hash passwords. Role-based access control handles authorization."},
    {q:"What is the difference between SQL and NoSQL databases? What factors guide your choice?",
     keywords:["relational","schema","ACID","transaction","document","scale","MongoDB","MySQL","flexible","normalize"],minKeywords:3,
     source:"CoderPad",
     expected:"SQL: relational, strict schema, ACID transactions. NoSQL: flexible schema, horizontal scaling. Choose SQL for financial data or complex joins; NoSQL for large-scale or rapidly changing data structures."},
    {q:"Explain microservices architecture vs monolithic architecture.",
     keywords:["service","independent","deploy","scale","communication","API","coupling","database","Docker","Kubernetes"],minKeywords:3,
     source:"DistantJob",
     expected:"Monolith: one codebase, simple to start, harder to scale. Microservices: independently deployed services communicating via APIs. Microservices enable per-service scaling but add operational complexity."},
    {q:"How do you handle errors in a Node.js Express application?",
     keywords:["try","catch","middleware","next","status","async","promise","500","error handler","log"],minKeywords:3,
     source:"Turing.com",
     expected:"Wrap async routes in try/catch and pass errors to next(err). Create a centralized error-handling middleware (4 params). Return descriptive status codes. Log errors for monitoring."},
    {q:"What is database indexing and when should you use it?",
     keywords:["index","query","performance","B-tree","primary key","foreign","slow","lookup","write","trade-off"],minKeywords:3,
     source:"GeeksforGeeks",
     expected:"An index is a data structure that speeds up lookups at the cost of slower writes and storage. Use on frequently queried columns, foreign keys, and search fields. Avoid over-indexing."},
    {q:"Explain how Docker containerization works and why it matters for backend development.",
     keywords:["image","container","environment","consistent","Dockerfile","compose","port","volume","deploy","isolation"],minKeywords:3,
     source:"Terminal.io",
     expected:"Docker packages an app with its dependencies into an image that runs identically anywhere. Eliminates 'works on my machine' issues. Docker Compose manages multi-container setups (API + DB + cache)."},
    {q:"What are WebSockets and when would you use them instead of HTTP?",
     keywords:["full-duplex","bidirectional","real-time","chat","socket.io","persistent","connection","event","HTTP","push"],minKeywords:3,
     source:"Turing.com",
     expected:"WebSockets provide a persistent bidirectional connection. HTTP is request-response only. Use WebSockets for real-time features: chat, live notifications, collaborative editing, live dashboards."},
    {q:"How do you prevent SQL injection in a backend application?",
     keywords:["parameterized","prepared statement","ORM","sanitize","input","escape","query","placeholder","bind","validate"],minKeywords:3,
     source:"GeeksforGeeks",
     expected:"Use parameterized queries or prepared statements — never concatenate user input into SQL. ORMs like Sequelize handle this. Always validate and sanitize inputs. Use least-privilege DB users."},
    {q:"What is caching and what are common caching strategies?",
     keywords:["Redis","cache-aside","write-through","TTL","invalidate","memory","CDN","stale","hit","miss"],minKeywords:3,
     source:"daily.dev",
     expected:"Caching stores computed results to avoid repeated expensive operations. Strategies: cache-aside (check cache first), write-through (write to cache and DB), set TTL to expire stale data. Redis is common for session/query caching."},
  ],
  fullstack:[
    {q:"Walk me through how you would set up a full-stack application from scratch — front end, back end, and database.",
     keywords:["React","Node","Express","database","API","folder","client","server","npm","environment"],minKeywords:3,
     source:"Terminal.io",
     expected:"Create /client (React) and /server (Node/Express) folders. Set up Express routes and connect to a database. Build React components that call API endpoints via fetch or axios. Use .env for secrets."},
    {q:"How do the front end and back end communicate in a modern web application?",
     keywords:["HTTP","REST","fetch","axios","JSON","API","request","response","CORS","header"],minKeywords:3,
     source:"Turing.com",
     expected:"Front end sends HTTP requests (fetch/axios) to backend API endpoints. Backend returns JSON responses. CORS headers allow cross-origin requests. Auth tokens passed in Authorization header."},
    {q:"Explain the MVC pattern and how it applies to full-stack development.",
     keywords:["Model","View","Controller","separation","concern","route","data","render","Express","React"],minKeywords:3,
     source:"Terminal.io",
     expected:"Model = data layer (DB schemas). View = UI (React components). Controller = logic layer (Express route handlers). Separates concerns so each part can change independently."},
    {q:"How would you design a search feature that works across both front end and back end?",
     keywords:["input","debounce","API","query","database","index","pagination","results","cache","endpoint"],minKeywords:3,
     source:"Turing.com",
     expected:"Front end: debounced input calls API endpoint. Backend: query DB with indexed search columns, paginate results. Return JSON. Optionally cache frequent queries in Redis."},
    {q:"What is CI/CD and why is it important for full-stack projects?",
     keywords:["continuous","integration","deployment","pipeline","test","build","GitHub Actions","automate","stage","production"],minKeywords:3,
     source:"DistantJob",
     expected:"CI automatically tests and builds code on each commit. CD deploys passing builds to staging or production. Reduces manual errors, enables frequent safe releases. GitHub Actions is a common tool."},
    {q:"How do you handle environment variables and secrets in a full-stack app?",
     keywords:[".env","process.env","dotenv","secret","API key","gitignore","inject","production","secure","vault"],minKeywords:3,
     source:"DistantJob",
     expected:"Store secrets in .env files, never commit them. Use dotenv for local dev. Inject via platform environment variables (Heroku Config Vars, GitHub Secrets) in production. Never hardcode keys."},
    {q:"Explain how you would implement user authentication across a full-stack app.",
     keywords:["JWT","bcrypt","login","token","session","cookie","middleware","React","Express","secure"],minKeywords:3,
     source:"Terminal.io",
     expected:"Backend: hash passwords with bcrypt, issue JWT on login. Frontend: store token in memory or httpOnly cookie. Include token in API request headers. Backend middleware validates token on protected routes."},
    {q:"What is the MERN stack and what problem does it solve?",
     keywords:["MongoDB","Express","React","Node","JavaScript","full-stack","JSON","single language","API","SPA"],minKeywords:3,
     source:"GeeksforGeeks",
     expected:"MongoDB, Express, React, Node.js — a JavaScript-only full-stack. Solves the context-switching problem between languages. Data flows as JSON across all layers. Good for SPAs with dynamic data."},
    {q:"How would you optimize API performance in a full-stack application?",
     keywords:["cache","pagination","index","compress","CDN","minimize","query","N+1","pool","rate limit"],minKeywords:3,
     source:"CoderPad",
     expected:"Paginate large responses, index DB queries, cache frequent results, use connection pooling, avoid N+1 queries with joins or batch fetching, compress responses with gzip, rate-limit endpoints."},
    {q:"How do you debug an issue that spans both front end and back end?",
     keywords:["network","console","DevTools","log","request","response","status","CORS","breakpoint","trace"],minKeywords:3,
     source:"x0pa.com",
     expected:"Check browser Network tab for request/response details. Log on both ends. Check status codes and error messages. Isolate: test API directly with Postman. Check CORS headers if blocked."},
  ]
};

/* ── AI PROMPT LAB ── */
const AI_CHALLENGES=[
  {id:"ai1",
   type:"1wrong1correct",
   title:"Filter Even Numbers",
   scenario:"A developer asked an AI: 'Write a JavaScript function that returns only even numbers from an array.' The AI returned two versions. Select the CORRECT implementation.",
   lang:"js",
   options:[
     {label:"Version A",code:`function filterEvens(arr) {
  return arr.filter(n => n % 2 === 1);
}`,correct:false,explanation:"❌ n % 2 === 1 filters ODD numbers, not even. This is a logic inversion bug common in AI output."},
     {label:"Version B",code:`function filterEvens(arr) {
  return arr.filter(n => n % 2 === 0);
}`,correct:true,explanation:"✅ Correct. n % 2 === 0 is true for even numbers."},
   ]},
  {id:"ai2",
   type:"2wrong1correct",
   title:"Reverse a Linked List",
   scenario:"Prompt given to AI: 'Write a Python function to reverse a singly linked list.' Three outputs were returned. Select the CORRECT implementation.",
   lang:"py",
   options:[
     {label:"Version A",code:`def reverse_list(head):
  prev = None
  current = head
  while current:
    next_node = current.next
    current.next = prev
    prev = current
    current = next_node
  return prev`,correct:true,explanation:"✅ Correct iterative reversal. Properly tracks prev, current, and next_node."},
     {label:"Version B",code:`def reverse_list(head):
  current = head
  while current:
    current.next = current  # Bug: points to itself
    current = current.next
  return current`,correct:false,explanation:"❌ Sets next to itself — creates an infinite loop. Classic AI hallucination."},
     {label:"Version C",code:`def reverse_list(head):
  prev = head
  current = head.next  # Bug: skips head, crashes if head is None
  while current:
    current.next = prev
    prev = current
    current = current.next
  return prev`,correct:false,explanation:"❌ Skips head and crashes on empty list. Incorrect initialization."},
   ]},
  {id:"ai3",
   type:"allcorrect",
   title:"Calculate Factorial",
   scenario:"A junior dev asked three different AI tools to write a factorial function in JavaScript. All three outputs are shown. ALL are correct — but they use different approaches. Select ALL THAT APPLY.",
   lang:"js",
   options:[
     {label:"Version A — Recursive",code:`function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}`,correct:true,explanation:"✅ Classic recursion. Clean and readable. Risk: stack overflow for large n."},
     {label:"Version B — Iterative",code:`function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}`,correct:true,explanation:"✅ Iterative. No recursion risk. Slightly more performant for large n."},
     {label:"Version C — Reduce",code:`function factorial(n) {
  return Array.from({length: n}, (_, i) => i + 1)
    .reduce((acc, val) => acc * val, 1);
}`,correct:true,explanation:"✅ Functional approach using reduce. More expressive but creates an array in memory."},
   ],
   allCorrectNote:"🧠 All three versions are valid! AI can produce multiple correct implementations for the same prompt. Understanding the trade-offs is what matters."},
  {id:"ai4",
   type:"2wrong1correct",
   title:"Async Fetch with Error Handling",
   scenario:"Prompt: 'Write a JavaScript async function that fetches data from a URL and handles errors.' One is correct. Two have subtle bugs AI commonly introduces.",
   lang:"js",
   options:[
     {label:"Version A",code:`async function fetchData(url) {
  const res = await fetch(url);
  return res.json();  // Bug: no error check
}`,correct:false,explanation:"❌ No check for res.ok — a 404 or 500 still resolves the promise. res.json() on an error page throws unexpectedly."},
     {label:"Version B",code:`async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } catch (err) {
    console.error('Fetch failed:', err.message);
    return null;
  }
}`,correct:true,explanation:"✅ Correct. Checks res.ok, throws on bad status, catches all errors gracefully."},
     {label:"Version C",code:`async function fetchData(url) {
  const res = fetch(url);  // Bug: missing await
  const data = await res.json();
  return data;
}`,correct:false,explanation:"❌ Missing await on fetch(). res is a Promise, not a Response — calling .json() on a Promise throws."},
   ]},
  {id:"ai5",
   type:"1wrong1correct",
   title:"Python List Flattening",
   scenario:"Prompt to AI: 'Write a Python function to flatten a nested list one level deep.' Select the correct output.",
   lang:"py",
   options:[
     {label:"Version A",code:`def flatten(lst):
  result = []
  for sublist in lst:
    result.extend(sublist)  # correct
  return result`,correct:true,explanation:"✅ extend() unpacks each sublist into result. Correct one-level flatten."},
     {label:"Version B",code:`def flatten(lst):
  result = []
  for sublist in lst:
    result.append(sublist)  # Bug: appends sublist as-is
  return result`,correct:false,explanation:"❌ append() adds the whole sublist as a single element — not a flatten at all. AI commonly confuses append vs extend."},
   ]},
];

function setLabLang(l){
  labLang=l;
  const sel=document.getElementById('labLangSelect');
  if(sel)sel.value=l;
  renderIntChallenge();
}

function flashSolvedNotif(msg){
  const el=document.getElementById('solvedNotif');
  el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),3000);
}

/* ══════════════════════════════════
   HEARTS
══════════════════════════════════ */
function ratingLabel(n){return['','Needs Work 🔴','Getting There 🟡','Good 🟢','Strong 💙','Excellent 💜'][n]||'';}
function buildHearts(cid,rating=0,autoScore=false){
  const container=document.getElementById(cid);if(!container)return;
  let r=rating;
  const render=()=>{
    container.innerHTML=`<span class="hearts-lbl">Rating</span>
    ${[1,2,3,4,5].map(n=>`<span class="heart ${n<=r?'lit':''}" id="h-${cid}-${n}"
      onclick="setHeart('${cid}',${n})">💗</span>`).join('')}
    <span class="hearts-score-lbl">${r?ratingLabel(r):''}</span>`;
  };
  window.setHeart=(id,n)=>{
    if(id!==cid)return;
    r=n;render();
    for(let i=1;i<=n;i++)setTimeout(()=>{
      const el=document.getElementById(`h-${cid}-${i}`);
      if(el){el.classList.add('scoring');setTimeout(()=>el.classList.remove('scoring'),700);}
    },(i-1)*80);
  };
  render();
  if(autoScore&&r>0){
    for(let i=1;i<=r;i++)setTimeout(()=>{
      const el=document.getElementById(`h-${cid}-${i}`);
      if(el){el.classList.add('scoring');setTimeout(()=>el.classList.remove('scoring'),700);}
    },i*150+300);
  }
}

/* ══════════════════════════════════
   INTERVIEW LAB — TYPE SWITCH
══════════════════════════════════ */
function setIntType(type){
  currentIntType=type;
  document.querySelectorAll('.int-type-btn').forEach((b,i)=>{
    b.classList.toggle('active',['decode','voice','concept','stack','ai'][i]===type);
  });
  renderIntChallenge();
}
function renderIntChallenge(){
  const panel=document.getElementById('intPanel');
  if(currentIntType==='decode')renderDecode(panel);
  else if(currentIntType==='voice')renderVoice(panel);
  else if(currentIntType==='concept')renderConcept(panel);
  else if(currentIntType==='stack')renderStack(panel);
  else renderAI(panel);
}

/* ── DECODE ── */
function getDecodes(){return labLang==='py'?DECODE_PY:DECODE_JS;}
function renderDecode(panel){
  const ch=getDecodes()[intDecodeIdx%getDecodes().length];
  window.GRID_POINTS=ch.samplePoints||[];
  panel.innerHTML=`
    <div class="int-panel-header">
      <div><div class="int-panel-title">🧩 ${ch.title}</div>
        <div class="int-panel-meta">Decode · ${labLang==='py'?'Python':'JavaScript'} · ${intDecodeIdx+1}/${getDecodes().length}</div></div>
      <div class="hearts-row" id="decodeHearts"></div>
    </div>
    <p class="int-desc">${ch.desc}</p>
    <div class="int-note">${ch.notes}</div>
    <textarea class="int-editor" id="decodeEditor" spellcheck="false" onkeydown="handleTab(event)">${ch.start}</textarea>
    <div class="int-actions">
      <button class="btn-prev-q" onclick="intDecodeIdx=Math.max(0,intDecodeIdx-1);renderDecode(document.getElementById('intPanel'))">← Prev</button>
      <button class="btn-int-run" onclick="runDecode()">▶ Run & Evaluate</button>
      <button class="btn-int-rst" onclick="renderDecode(document.getElementById('intPanel'))">↺ Reset</button>
      <button class="btn-next-q" onclick="intDecodeIdx++;renderDecode(document.getElementById('intPanel'))">Next →</button>
    </div>
    <div class="int-output" id="decodeOutput"></div>
    <div style="margin-top:12px;font-size:11px;color:var(--dim)">💡 ${ch.hint}</div>`;
  buildHearts('decodeHearts',0,false);
}
function runDecode(){
  const ch=getDecodes()[intDecodeIdx%getDecodes().length];
  const code=document.getElementById('decodeEditor').value;
  const output=document.getElementById('decodeOutput');
  output.style.display='block';
  const logs=[];const orig=console.log;
  console.log=(...a)=>{logs.push(a.map(x=>typeof x==='object'?JSON.stringify(x):String(x)).join(' '));orig(...a);};
  let err='';
  try{new Function('window',`"use strict";${code}`)(window);}catch(e){err=`❌ ${e.message}`;}
  console.log=orig;
  output.textContent=logs.length?logs.join('\n'):(err||'(no output — call your function)');
  const cLC=code.toLowerCase();
  const matched=ch.keywords.filter(k=>cLC.includes(k.toLowerCase()));
  const auto=err?1:Math.max(1,Math.min(5,Math.round((matched.length/ch.keywords.length)*5)));
  buildHearts('decodeHearts',auto,true);
}

/* ── VOICE ── */
function getVoices(){return labLang==='py'?VOICE_PY:VOICE_JS;}
function renderVoice(panel){
  const ch=getVoices()[intVoiceIdx%getVoices().length];
  panel.innerHTML=`
    <div class="int-panel-header">
      <div><div class="int-panel-title">🎙️ ${ch.title}</div>
        <div class="int-panel-meta">Voice Explainer · ${labLang==='py'?'Python':'JavaScript'} · ${intVoiceIdx+1}/${getVoices().length}</div></div>
      <div class="hearts-row" id="voiceHearts"></div>
    </div>
    ${ch.code?`<div style="background:#05040d;border:1px solid rgba(168,85,247,0.15);border-radius:11px;padding:14px;margin-bottom:16px;overflow-x:auto">
      <pre style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#e0e8ff;line-height:1.75">${escHtml(ch.code)}</pre></div>`:''}
    <div class="concept-q">${ch.question}</div>
    <div class="voice-zone">
      <button class="voice-btn" id="voiceBtn" onclick="toggleVoice()">🎤 <span id="voiceBtnTxt">Start Speaking</span></button>
      <div class="voice-status" id="voiceStatus">Press the button and explain your answer.</div>
      <div class="voice-transcript" id="voiceTranscript"></div>
      <div class="voice-feedback" id="voiceFeedback"></div>
    </div>
    <div class="int-actions">
      <button class="btn-prev-q" onclick="stopRecognition();intVoiceIdx=Math.max(0,intVoiceIdx-1);renderVoice(document.getElementById('intPanel'))">← Prev</button>
      <button class="btn-int-rst" onclick="stopRecognition();renderVoice(document.getElementById('intPanel'))">↺ Try Again</button>
      <button class="btn-next-q" onclick="stopRecognition();intVoiceIdx++;renderVoice(document.getElementById('intPanel'))">Next →</button>
    </div>
    <div class="concept-expected" id="expectedAnswer" style="display:none">
      <strong>Expected keywords:</strong> ${ch.keywords.join(', ')}<br>
      <strong>Model answer:</strong> ${ch.expectedAnswer}</div>`;
  buildHearts('voiceHearts',0,false);
  setupRecognition(ch,'voice');
}

/* ── CONCEPT ── */
function getConcepts(){return labLang==='py'?CONCEPT_PY:CONCEPT_JS;}
function renderConcept(panel){
  const ch=getConcepts()[intConceptIdx%getConcepts().length];
  panel.innerHTML=`
    <div class="int-panel-header">
      <div><div class="int-panel-title">🧠 ${ch.title}</div>
        <div class="int-panel-meta">Concept Q&A · ${labLang==='py'?'Python':'JavaScript'} · ${intConceptIdx+1}/${getConcepts().length}</div></div>
      <div class="hearts-row" id="conceptHearts"></div>
    </div>
    <div class="concept-q">${ch.question}</div>
    <div class="voice-zone">
      <button class="voice-btn" id="voiceBtn" onclick="toggleVoice()">🎤 <span id="voiceBtnTxt">Answer Out Loud</span></button>
      <div class="voice-status" id="voiceStatus">Press and answer out loud.</div>
      <div class="voice-transcript" id="voiceTranscript"></div>
      <div class="voice-feedback" id="voiceFeedback"></div>
    </div>
    <div class="int-actions">
      <button class="btn-prev-q" onclick="stopRecognition();intConceptIdx=Math.max(0,intConceptIdx-1);renderConcept(document.getElementById('intPanel'))">← Prev</button>
      <button class="btn-int-rst" onclick="stopRecognition();renderConcept(document.getElementById('intPanel'))">↺ Try Again</button>
      <button class="btn-next-q" onclick="stopRecognition();intConceptIdx++;renderConcept(document.getElementById('intPanel'))">Next →</button>
    </div>
    <div class="concept-expected" id="expectedAnswer" style="display:none">
      <strong>Expected keywords:</strong> ${ch.keywords.join(', ')}<br>
      <strong>Model answer:</strong> ${ch.expectedAnswer}</div>`;
  buildHearts('conceptHearts',0,false);
  setupRecognition(ch,'concept');
}

/* ── STACK INTERVIEW ── */
function renderStack(panel){
  const questions=STACK_QUESTIONS[stackSub];
  const ch=questions[stackQIdx%questions.length];
  const subLabels={frontend:'🖥️ Frontend',backend:'⚙️ Backend',fullstack:'🏗️ Full-Stack'};
  panel.innerHTML=`
    <div class="stack-tabs">
      <button class="stack-tab fe ${stackSub==='frontend'?'active':''}" onclick="setStackSub('frontend')">🖥️ Frontend</button>
      <button class="stack-tab be ${stackSub==='backend'?'active':''}" onclick="setStackSub('backend')">⚙️ Backend</button>
      <button class="stack-tab fs ${stackSub==='fullstack'?'active':''}" onclick="setStackSub('fullstack')">🏗️ Full-Stack</button>
    </div>
    <div class="int-panel-header">
      <div><div class="int-panel-title">${subLabels[stackSub]} Interview</div>
        <div class="int-panel-meta">Q${stackQIdx%questions.length+1} of ${questions.length} · Source: ${ch.source}</div></div>
      <div class="hearts-row" id="stackHearts"></div>
    </div>
    <div class="concept-q">${ch.q}</div>
    <div class="voice-zone">
      <button class="voice-btn" id="voiceBtn" onclick="toggleVoice()">🎤 <span id="voiceBtnTxt">Answer Out Loud</span></button>
      <div class="voice-status" id="voiceStatus">Press and give your answer.</div>
      <div class="voice-transcript" id="voiceTranscript"></div>
      <div class="voice-feedback" id="voiceFeedback"></div>
    </div>
    <div class="int-actions">
      <button class="btn-prev-q" onclick="stopRecognition();stackQIdx=Math.max(0,stackQIdx-1);renderStack(document.getElementById('intPanel'))">← Prev</button>
      <button class="btn-int-rst" onclick="stopRecognition();renderStack(document.getElementById('intPanel'))">↺ Try Again</button>
      <button class="btn-next-q" onclick="stopRecognition();stackQIdx++;renderStack(document.getElementById('intPanel'))">Next →</button>
    </div>
    <div class="concept-expected" id="expectedAnswer" style="display:none">
      <strong>Expected keywords:</strong> ${ch.keywords.join(', ')}<br>
      <strong>Model answer:</strong> ${ch.expected}</div>`;
  buildHearts('stackHearts',0,false);
  setupRecognition({keywords:ch.keywords,minKeywords:ch.minKeywords,expectedAnswer:ch.expected},'stack');
}
function setStackSub(sub){stackSub=sub;stackQIdx=0;renderStack(document.getElementById('intPanel'));}

/* ── AI PROMPT LAB ── */
function renderAI(panel){
  const ch=AI_CHALLENGES[aiIdx%AI_CHALLENGES.length];
  aiSelections=new Set();
  const isAllCorrect=ch.type==='allcorrect';
  const keys=['A','B','C'];
  panel.innerHTML=`
    <div class="int-panel-header">
      <div>
        <div class="ai-badge">🤖 AI Prompt Lab</div>
        <div class="int-panel-title">${ch.title}</div>
        <div class="int-panel-meta">${ch.type==='1wrong1correct'?'1 correct · 1 incorrect':ch.type==='2wrong1correct'?'1 correct · 2 incorrect':'All 3 correct — select ALL'} · ${ch.lang==='py'?'Python':'JavaScript'} · Q${aiIdx%AI_CHALLENGES.length+1}/${AI_CHALLENGES.length}</div>
      </div>
    </div>
    <div class="ai-scenario">${ch.scenario}</div>
    ${isAllCorrect?`<div class="int-note">🧠 <strong>All of the above:</strong> All versions are correct. Select all that apply — understand the trade-offs between them.</div>`:''}
    <div class="ai-option-label">AI-Generated Code — ${isAllCorrect?'Select ALL correct versions:':'Select the CORRECT version:'}</div>
    ${ch.options.map((opt,i)=>`
      <div style="margin-bottom:12px">
        <div style="font-size:11px;font-weight:700;color:var(--dim);margin-bottom:5px;text-transform:uppercase;letter-spacing:0.08em">${opt.label}</div>
        <div style="background:#05040d;border:1px solid rgba(168,85,247,0.15);border-radius:11px;padding:14px;margin-bottom:7px;overflow-x:auto">
          <pre style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#e0e8ff;line-height:1.75">${escHtml(opt.code)}</pre>
        </div>
        <div class="option" id="ai-opt-${i}" onclick="selectAIOption(${i})">
          <div class="opt-key">${keys[i]}</div>
          <div style="font-size:12px">${isAllCorrect?'Include this version':'Select this version'}</div>
        </div>
      </div>`).join('')}
    ${isAllCorrect?`<button class="btn-int-run" style="margin-top:4px" onclick="submitAllCorrect()">✓ Submit All Selections</button>`:''}
    <div id="aiResultArea" style="margin-top:14px"></div>
    <div class="int-actions" style="margin-top:12px">
      <button class="btn-prev-q" onclick="aiIdx=Math.max(0,aiIdx-1);renderAI(document.getElementById('intPanel'))">← Prev</button>
      <button class="btn-next-q" onclick="aiIdx++;renderAI(document.getElementById('intPanel'))">Next Challenge →</button>
    </div>`;
}

function selectAIOption(i){
  const ch=AI_CHALLENGES[aiIdx%AI_CHALLENGES.length];
  const isAllCorrect=ch.type==='allcorrect';
  const opt=ch.options[i];

  if(isAllCorrect){
    // toggle selection
    if(aiSelections.has(i))aiSelections.delete(i);
    else aiSelections.add(i);
    document.querySelectorAll('[id^="ai-opt-"]').forEach((el,j)=>{
      el.style.borderColor=aiSelections.has(j)?'var(--purple)':'';
      el.style.background=aiSelections.has(j)?'rgba(168,85,247,0.1)':'';
    });
    return;
  }

  // single select — lock all
  document.querySelectorAll('[id^="ai-opt-"]').forEach(el=>{el.style.pointerEvents='none';});
  const el=document.getElementById(`ai-opt-${i}`);
  if(opt.correct){el.classList.add('correct');}else{
    el.classList.add('wrong');
    ch.options.forEach((_,j)=>{if(ch.options[j].correct)document.getElementById(`ai-opt-${j}`).classList.add('correct');});
  }
  document.getElementById('aiResultArea').innerHTML=`
    <div class="voice-feedback ${opt.correct?'good':'retry'}" style="display:block">${opt.explanation}</div>`;
}

function submitAllCorrect(){
  const ch=AI_CHALLENGES[aiIdx%AI_CHALLENGES.length];
  const allCorrectIndices=ch.options.map((_,i)=>i).filter(i=>ch.options[i].correct);
  const gotAll=allCorrectIndices.every(i=>aiSelections.has(i))&&aiSelections.size===allCorrectIndices.size;
  document.querySelectorAll('[id^="ai-opt-"]').forEach(el=>{el.style.pointerEvents='none';});
  ch.options.forEach((opt,i)=>{
    const el=document.getElementById(`ai-opt-${i}`);
    if(opt.correct)el.classList.add('correct');
  });
  const feedback=gotAll
    ?'✅ Perfect! You identified all correct implementations and understand the trade-offs.'
    :`You selected ${aiSelections.size} of ${allCorrectIndices.length} correct versions. Review the explanations above.`;
  document.getElementById('aiResultArea').innerHTML=`
    <div class="voice-feedback ${gotAll?'good':'partial'}" style="display:block">${feedback}</div>
    ${ch.allCorrectNote?`<div class="int-note" style="margin-top:10px">${ch.allCorrectNote}</div>`:''}
    ${ch.options.map(o=>`<div style="margin-top:8px;font-size:12px;color:var(--dim)">${o.explanation}</div>`).join('')}`;
}

/* ══════════════════════════════════
   VOICE ENGINE
══════════════════════════════════ */
function setupRecognition(ch,mode){
  stopRecognition();
  if(!('webkitSpeechRecognition' in window)&&!('SpeechRecognition' in window)){
    const s=document.getElementById('voiceStatus');
    if(s)s.textContent='⚠️ Voice recognition requires Chrome. Try Chrome browser.';
    const b=document.getElementById('voiceBtn');if(b)b.disabled=true;return;
  }
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  recognition=new SR();recognition.continuous=true;recognition.interimResults=true;recognition.lang='en-US';
  recognition.onresult=(e)=>{
    let interim='',final='';
    for(let i=e.resultIndex;i<e.results.length;i++){
      const t=e.results[i][0].transcript;
      if(e.results[i].isFinal)final+=t;else interim+=t;
    }
    const trans=document.getElementById('voiceTranscript');
    if(trans){
      trans.style.display='block';
      if(final)trans.dataset.final=(trans.dataset.final||'')+final;
      let display=(trans.dataset.final||'')+interim;
      ch.keywords.forEach(kw=>{
        const re=new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}\\b`,'gi');
        display=display.replace(re,`<span class="keyword-match">${kw}</span>`);
      });
      trans.innerHTML=display;
    }
  };
  recognition.onend=()=>{
    isListening=false;
    const btn=document.getElementById('voiceBtn');const btnT=document.getElementById('voiceBtnTxt');
    if(btn)btn.classList.remove('listening');if(btnT)btnT.textContent='Start Speaking';
    const s=document.getElementById('voiceStatus');if(s)s.textContent='Done. See results below.';
    const trans=document.getElementById('voiceTranscript');
    if(trans&&trans.dataset.final)scoreVoice(trans.dataset.final,ch,mode);
  };
  recognition.onerror=(e)=>{isListening=false;const s=document.getElementById('voiceStatus');if(s)s.textContent=`Error: ${e.error}. Try again.`;};
}
function toggleVoice(){
  if(!recognition)return;
  if(isListening){recognition.stop();}
  else{
    isListening=true;
    const btn=document.getElementById('voiceBtn');const btnT=document.getElementById('voiceBtnTxt');
    const s=document.getElementById('voiceStatus');const trans=document.getElementById('voiceTranscript');
    if(btn)btn.classList.add('listening');if(btnT)btnT.textContent='🔴 Stop';
    if(s)s.textContent='Listening…';if(trans){trans.dataset.final='';trans.innerHTML='';}
    try{recognition.start();}catch(e){isListening=false;}
  }
}
function stopRecognition(){if(recognition&&isListening){recognition.stop();isListening=false;}}
function scoreVoice(transcript,ch,mode){
  const tLC=transcript.toLowerCase();
  const matched=ch.keywords.filter(k=>tLC.includes(k.toLowerCase()));
  const ratio=matched.length/(ch.minKeywords||3);
  let rating,fClass,fText;
  if(ratio>=1){rating=5;fClass='good';fText=`🌟 Excellent! Covered: ${matched.join(', ')}`;}
  else if(ratio>=0.6){rating=3;fClass='partial';fText=`👍 Good start: ${matched.join(', ')}. Also try: ${ch.keywords.filter(k=>!matched.includes(k)).slice(0,3).join(', ')}`;}
  else{rating=1;fClass='retry';fText=`🔁 Keep going! Key terms: ${ch.keywords.slice(0,5).join(', ')}`;}
  const heartId=mode==='concept'?'conceptHearts':mode==='stack'?'stackHearts':'voiceHearts';
  buildHearts(heartId,rating,true);
  const fb=document.getElementById('voiceFeedback');
  if(fb){fb.style.display='block';fb.className=`voice-feedback ${fClass}`;fb.textContent=fText;}
  const exp=document.getElementById('expectedAnswer');if(exp)exp.style.display='block';
}

/* ══════════════════════════════════
   START
══════════════════════════════════ */
function startGame(){
  const sel=document.getElementById('startCatSelect');
  if(sel)filterCat=sel.value;
  document.getElementById('startScreen').style.display='none';
  const gs=document.getElementById('gameScreen');
  gs.style.display='flex';gs.style.flexDirection='column';
  buildCatFilter();buildNav();updateHUD();updateScoreWindow();render();
}
function init(){load();loadTriedLessons();checkAllTrophies();}
init();

/* ═══════════════════════════════════════════════════════
   CAPSTONE FEATURES — Dev|Play
   Features:
     1. Streak Tracker
     2. Daily Challenge
     3. Performance Dashboard
     4. Interview Mode Timer (90s)
     5. Solution Reveal (after 3 wrong picks)
     6. Confetti burst on solve
     7. Developer Certificate (printable)
     8. Share Card (copy to clipboard)
═══════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────────
   1. STREAK TRACKER
────────────────────────────────────────────────────── */
let streak = 0;
let bestStreak = 0;

function loadStreak() {
  streak     = parseInt(localStorage.getItem('dp4_streak')     || '0');
  bestStreak = parseInt(localStorage.getItem('dp4_bestStreak') || '0');
  updateStreakDisplay();
}

function updateStreakOnSolve() {
  const lastDay   = localStorage.getItem('dp4_lastday') || '';
  const today     = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  if (lastDay === today) {
    // already counted today — no change
  } else if (!lastDay || lastDay === yesterday) {
    streak++;
    if (streak > bestStreak) bestStreak = streak;
  } else {
    // gap of more than one day — reset
    streak = 1;
  }
  localStorage.setItem('dp4_lastday',     today);
  localStorage.setItem('dp4_streak',      streak);
  localStorage.setItem('dp4_bestStreak',  bestStreak);
  updateStreakDisplay();
}

function updateStreakDisplay() {
  const el = document.getElementById('streakPill');
  if (el) {
    el.textContent = `🔥 ${streak}`;
    el.title = `Current streak: ${streak} day${streak!==1?'s':''}`;
  }
}

/* ──────────────────────────────────────────────────────
   2. DAILY CHALLENGE
────────────────────────────────────────────────────── */
function getDailyChallenge() {
  const dateStr = new Date().toDateString();
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = ((hash << 5) - hash + dateStr.charCodeAt(i)) | 0;
  }
  return CHS[Math.abs(hash) % CHS.length];
}

function renderDailyBanner() {
  const el = document.getElementById('dailyBanner');
  if (!el) return;
  const ch     = getDailyChallenge();
  const isDone = solved.has(ch.id);
  el.innerHTML = `
    <div class="daily-inner${isDone ? ' done' : ''}">
      <div class="daily-left">
        <div class="daily-tag">📅 Daily Challenge</div>
        <div class="daily-title">#${ch.id} — ${ch.title}</div>
        <div class="daily-meta">${ch.cat} · <span class="diff-badge ${diffCls(ch.diff)}" style="font-size:9px;padding:2px 6px">${ch.diff}</span></div>
      </div>
      <div class="daily-right">
        ${isDone
          ? '<div class="daily-done">✅ Done!</div>'
          : `<button class="daily-go-btn" onclick="jumpToDaily()">Go →</button>`}
      </div>
    </div>`;
}

function jumpToDaily() {
  const ch = getDailyChallenge();
  const i  = CHS.findIndex(c => c.id === ch.id);
  if (i === -1) return;

  const alreadyHere = (filterCat === 'All' && idx === i);

  filterCat = 'All';
  idx = i;

  const startEl = document.getElementById('startScreen');
  if (startEl && startEl.style.display !== 'none') {
    startGame();
  } else {
    render();
    buildCatFilter();
    buildNav();
    updateHUD();
  }

  setTimeout(() => {
    const mc = document.getElementById('mainContent');
    if (mc) {
      mc.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (alreadyHere) {
        flashNotif('📅 You are already on today\'s challenge!');
      } else {
        flashNotif('📅 Jumped to today\'s daily challenge!');
        const card = mc.querySelector('.ch-card');
        if (card) {
          card.style.transition = 'box-shadow 0.2s';
          card.style.boxShadow = '0 0 0 3px rgba(66,133,244,0.7)';
          setTimeout(() => { card.style.boxShadow = ''; }, 1200);
        }
      }
    }
  }, 80);
}

/* ──────────────────────────────────────────────────────
   3. PERFORMANCE DASHBOARD
────────────────────────────────────────────────────── */
function openDashboard() {
  const solvedCount = solved.size;

  const byDiff = { Easy: {solved:0,total:0}, Medium: {solved:0,total:0}, Hard: {solved:0,total:0} };
  CHS.forEach(c => {
    if (byDiff[c.diff]) {
      byDiff[c.diff].total++;
      if (solved.has(c.id)) byDiff[c.diff].solved++;
    }
  });

  const catList = [...new Set(CHS.map(c => c.cat))];
  const byCat = catList.map(cat => {
    const all  = CHS.filter(c => c.cat === cat);
    const done = all.filter(c => solved.has(c.id)).length;
    return { cat, solved: done, total: all.length, pct: all.length ? done / all.length : 0 };
  }).sort((a, b) => b.pct - a.pct);

  const diffColors = { Easy:'var(--green)', Medium:'var(--yellow)', Hard:'var(--red)' };

  document.getElementById('dashContent').innerHTML = `
    <div class="dash-summary">
      <div class="dash-stat-big"><div class="dash-num" style="color:var(--green)">${solvedCount}</div><div class="dash-lbl">Solved</div></div>
      <div class="dash-stat-big"><div class="dash-num" style="color:var(--blue)">${score}</div><div class="dash-lbl">Points</div></div>
      <div class="dash-stat-big"><div class="dash-num" style="color:var(--yellow)">🔥 ${streak}</div><div class="dash-lbl">Streak</div></div>
      <div class="dash-stat-big"><div class="dash-num" style="color:var(--purple)">${bestStreak}</div><div class="dash-lbl">Best Streak</div></div>
      <div class="dash-stat-big"><div class="dash-num" style="color:var(--orange)">${earned.size}</div><div class="dash-lbl">Trophies</div></div>
    </div>

    <div class="dash-section-title">By Difficulty</div>
    <div class="dash-diff-row">
      ${Object.entries(byDiff).map(([d, v]) => `
        <div class="dash-diff-card">
          <div class="dash-diff-name" style="color:${diffColors[d]}">${d}</div>
          <div class="dash-diff-nums">${v.solved}/${v.total}</div>
          <div class="dash-mini-bar"><div class="dash-mini-fill" style="width:${v.total?((v.solved/v.total)*100):0}%;background:${diffColors[d]}"></div></div>
        </div>`).join('')}
    </div>

    <div class="dash-section-title">Categories</div>
    <div class="dash-cats">
      ${byCat.map(c => `
        <div class="dash-cat-row">
          <div class="dash-cat-name">${c.cat}</div>
          <div class="dash-cat-bar-wrap"><div class="dash-cat-bar-fill" style="width:${(c.pct*100).toFixed(1)}%"></div></div>
          <div class="dash-cat-frac">${c.solved}/${c.total}</div>
        </div>`).join('')}
    </div>

    <div style="display:flex;gap:10px;justify-content:center;margin-top:20px;flex-wrap:wrap">
      <button class="cap-action-btn purple" onclick="closeDash();openCertificate()">📜 Certificate</button>
      <button class="cap-action-btn blue"   onclick="closeDash();openShareCard()">📤 Share</button>
    </div>`;

  document.getElementById('dashModal').classList.add('open');
}
function closeDash(ev) {
  if (!ev || ev.target === document.getElementById('dashModal'))
    document.getElementById('dashModal').classList.remove('open');
}

/* ──────────────────────────────────────────────────────
   4. INTERVIEW TIMER (90 seconds)
────────────────────────────────────────────────────── */
let timerSecs     = 90;
let timerActive   = false;
let timerInterval = null;

function startTimer() {
  if (timerActive) return;
  timerSecs   = 90;
  timerActive = true;
  const wrap = document.getElementById('interviewTimer');
  if (wrap) { wrap.classList.add('active'); wrap.classList.remove('warning','danger','expired'); }
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timerSecs--;
    updateTimerDisplay();
    const wrap = document.getElementById('interviewTimer');
    if (wrap) {
      wrap.classList.toggle('warning', timerSecs <= 30 && timerSecs > 10);
      wrap.classList.toggle('danger',  timerSecs <= 10 && timerSecs > 0);
    }
    if (timerSecs <= 0) {
      clearInterval(timerInterval);
      timerActive = false;
      if (wrap) wrap.classList.add('expired');
      const disp = document.getElementById('timerDisp');
      if (disp) disp.textContent = '⏰ Time!';
      flashNotif("⏰ Time's up!");
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerActive = false;
  const wrap = document.getElementById('interviewTimer');
  if (wrap) wrap.classList.remove('active','warning','danger','expired');
  timerSecs = 90;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const el = document.getElementById('timerDisp');
  if (!el) return;
  const m = Math.floor(timerSecs / 60);
  const s = timerSecs % 60;
  el.textContent = `${m}:${s.toString().padStart(2,'0')}`;
}

function toggleTimer() {
  if (timerActive) stopTimer(); else startTimer();
}

/* ──────────────────────────────────────────────────────
   5. SOLUTION REVEAL (after 3 wrong answers)
────────────────────────────────────────────────────── */
const wrongCounts = {};

function trackWrong(chId) {
  wrongCounts[chId] = (wrongCounts[chId] || 0) + 1;
  if (wrongCounts[chId] >= 3) showRevealButton(chId);
}

function showRevealButton(chId) {
  if (document.getElementById('revealSolBtn')) return;
  const actionRow = document.querySelector('.action-row');
  if (!actionRow) return;
  const btn = document.createElement('button');
  btn.id        = 'revealSolBtn';
  btn.className = 'btn-reveal-sol';
  btn.innerHTML = '💡 Reveal Solution';
  btn.onclick   = () => revealSolution(chId);
  actionRow.appendChild(btn);
}

function revealSolution(chId) {
  const ch = CHS.find(c => c.id === chId);
  if (!ch || !ch.options) return;
  const correct = ch.options[ch.ansIdx];
  document.querySelectorAll('.option').forEach(el => {
    el.style.pointerEvents = 'none';
    if (el.dataset.val === correct) el.classList.add('correct');
  });
  const btn = document.getElementById('revealSolBtn');
  if (btn) btn.remove();
  showMsg(`💡 Answer revealed: ${correct}`, 'ok');
}

/* ──────────────────────────────────────────────────────
   6. CONFETTI
────────────────────────────────────────────────────── */
let confettiCanvas = null;
let confettiCtx    = null;
let confettiPieces = [];
let confettiRaf    = null;

function initConfettiCanvas() {
  if (confettiCanvas) return;
  confettiCanvas = document.createElement('canvas');
  confettiCanvas.id = 'confettiCanvas';
  confettiCanvas.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9998;';
  document.body.appendChild(confettiCanvas);
  confettiCtx = confettiCanvas.getContext('2d');
  window.addEventListener('resize', () => {
    confettiCanvas.width  = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  });
}

function launchConfetti() {
  initConfettiCanvas();
  confettiCanvas.width  = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  const colors = ['#4285F4','#EA4335','#FBBC04','#34A853','#a855f7','#ec4899','#14b8a6','#f97316'];
  confettiPieces = [];
  for (let i = 0; i < 140; i++) {
    confettiPieces.push({
      x:    Math.random() * window.innerWidth,
      y:    -20 - Math.random() * 120,
      vx:   (Math.random() - 0.5) * 5,
      vy:   2 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      w:    6 + Math.random() * 9,
      h:    3 + Math.random() * 5,
      rot:  Math.random() * Math.PI * 2,
      rotV: (Math.random() - 0.5) * 0.18,
      alpha: 1,
    });
  }
  if (confettiRaf) cancelAnimationFrame(confettiRaf);
  animateConfetti();
}

function animateConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces = confettiPieces.filter(p => p.alpha > 0.02);
  if (!confettiPieces.length) return;
  confettiPieces.forEach(p => {
    p.x   += p.vx;
    p.y   += p.vy;
    p.vy  += 0.06;
    p.rot += p.rotV;
    if (p.y > confettiCanvas.height * 0.75) p.alpha -= 0.02;
    confettiCtx.save();
    confettiCtx.globalAlpha = p.alpha;
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate(p.rot);
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    confettiCtx.restore();
  });
  confettiRaf = requestAnimationFrame(animateConfetti);
}

/* ──────────────────────────────────────────────────────
   7. DEVELOPER CERTIFICATE
────────────────────────────────────────────────────── */
function openCertificate() {
  const modal = document.getElementById('certModal');
  if (!modal) return;
  const level = getLevel();
  const today = new Date().toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric'});
  const name  = localStorage.getItem('dp4_certName') || '';

  document.getElementById('certBody').innerHTML = `
    <div class="cert-frame" id="certPrintArea">
      <div class="cert-watermark">CODE RANGER</div>
      <div class="cert-top-row">
        <div class="cert-logo-text">Code Ranger</div>
        <div class="cert-badge-label">Certificate of Achievement</div>
      </div>
      <div class="cert-presented">This is to certify that</div>
      <input id="certNameInput" class="cert-name-input" type="text"
        placeholder="Enter your name here"
        value="${name}"
        oninput="localStorage.setItem('dp4_certName',this.value)">
      <div class="cert-body-text">
        has demonstrated exceptional dedication and coding skill<br>
        by completing <span class="cert-hl">${solved.size} of 500 challenges</span> on Code Ranger<br>
        achieving the rank of <span class="cert-hl">${level}</span>
      </div>
      <div class="cert-stats-row">
        <div class="cert-stat"><div class="cert-stat-n">${solved.size}</div><div class="cert-stat-l">Solved</div></div>
        <div class="cert-stat"><div class="cert-stat-n">${score.toLocaleString()}</div><div class="cert-stat-l">Points</div></div>
        <div class="cert-stat"><div class="cert-stat-n">🔥${streak}</div><div class="cert-stat-l">Streak</div></div>
        <div class="cert-stat"><div class="cert-stat-n">${earned.size}</div><div class="cert-stat-l">Trophies</div></div>
      </div>
      <div class="cert-footer-row">
        <div class="cert-date">${today}</div>
        <div class="cert-sig">Code Ranger · 500 Sourced Challenges</div>
      </div>
    </div>
    <div class="cert-actions">
      <button class="cap-action-btn green" onclick="capPrintCert()">🖨️ Print / Save PDF</button>
      <button class="cap-action-btn blue"  onclick="closeCert();openShareCard()">📤 Share</button>
    </div>`;

  modal.classList.add('open');
}

function closeCert(ev) {
  if (!ev || ev.target === document.getElementById('certModal'))
    document.getElementById('certModal').classList.remove('open');
}

/* Print the certificate using scoped @media print CSS */
function capPrintCert() {
  document.documentElement.classList.add('printing-cert');
  const cleanup = () => {
    document.documentElement.classList.remove('printing-cert');
    window.removeEventListener('afterprint', cleanup);
  };
  window.addEventListener('afterprint', cleanup);
  setTimeout(() => window.print(), 100);
}

/* ──────────────────────────────────────────────────────
   8. SHARE CARD
────────────────────────────────────────────────────── */
function openShareCard() {
  const modal = document.getElementById('shareModal');
  if (!modal) return;
  const name  = localStorage.getItem('dp4_certName') || 'A developer';
  const level = getLevel();
  const text  =
`🚀 ${name} just crushed ${solved.size} coding challenges on Code Ranger!
⚡ Score: ${score.toLocaleString()} pts  ·  ${level}
🔥 Streak: ${streak} day${streak!==1?'s':''}  ·  🏆 ${earned.size} Trophies
📊 ${solved.size}/500 challenges complete

#CodeRanger #100DaysOfCode #CodingChallenge #JavaScript #Python`;

  document.getElementById('shareText').textContent = text;
  modal.classList.add('open');
}

function closeShare(ev) {
  if (!ev || ev.target === document.getElementById('shareModal'))
    document.getElementById('shareModal').classList.remove('open');
}

function copyShareText() {
  const text = document.getElementById('shareText').textContent;
  const btn  = document.getElementById('copyBtn');
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✅ Copied!';
    btn.style.background = 'rgba(52,168,83,0.25)';
    setTimeout(() => { btn.textContent = '📋 Copy'; btn.style.background = ''; }, 2200);
  }).catch(() => {
    const r = document.createRange();
    r.selectNode(document.getElementById('shareText'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    btn.textContent = '✅ Copied!';
    setTimeout(() => { btn.textContent = '📋 Copy'; }, 2200);
  });
}

/* ──────────────────────────────────────────────────────
   MILESTONE TOAST
────────────────────────────────────────────────────── */
const MILESTONES = [10, 25, 50, 100, 200, 500];

function checkMilestone() {
  const n = solved.size;
  if (!MILESTONES.includes(n)) return;
  const toast = document.getElementById('milestoneToast');
  if (!toast) return;
  toast.innerHTML = `🎉 <strong>${n} challenges</strong> solved! Claim your <button class="toast-cert-link" onclick="document.getElementById('milestoneToast').classList.remove('show');openCertificate()">certificate →</button>`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 7000);
}

/* ──────────────────────────────────────────────────────
   PATCH CORE FUNCTIONS
────────────────────────────────────────────────────── */
(function patchGame() {
  /* --- markSolved --- */
  const _markSolved = window.markSolved;
  window.markSolved = function(pts) {
    _markSolved(pts);
    updateStreakOnSolve();
    launchConfetti();
    renderDailyBanner();
    checkMilestone();
    stopTimer();
    const rb = document.getElementById('revealSolBtn');
    if (rb) rb.remove();
  };

  /* --- pickOption — track wrong answers --- */
  const _pickOption = window.pickOption;
  window.pickOption = function(chosen, correct, clickedIdx) {
    const fc = getFiltered();
    const ch = fc[idx];
    if (ch && !solved.has(ch.id) && chosen !== correct) {
      trackWrong(ch.id);
    }
    _pickOption(chosen, correct, clickedIdx);
  };

  /* --- render — reset timer & clear reveal btn on navigation --- */
  const _render = window.render;
  window.render = function() {
    _render();
    stopTimer();
    const rb = document.getElementById('revealSolBtn');
    if (rb) rb.remove();
    renderDailyBanner();
  };

  /* --- runCode / submitCode — scroll output panel into view --- */
  function scrollToOutput() {
    setTimeout(() => {
      const op = document.getElementById('outPanel');
      if (op) op.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 30);
  }

  const _runCode = window.runCode;
  window.runCode = function() {
    _runCode();
    scrollToOutput();
  };

  const _submitCode = window.submitCode;
  window.submitCode = function() {
    _submitCode();
    scrollToOutput();
  };
})();

/* ──────────────────────────────────────────────────────
   CAPSTONE INIT — runs after DOM is ready (defer script)
────────────────────────────────────────────────────── */
setTimeout(() => {
  loadStreak();
  renderDailyBanner();
  updateStreakDisplay();
  updateTimerDisplay();
}, 80);

/* ════════════════════════════════════════════════════════════════
   CODE RANGER · RESUME BUILDER MODULE
   Sits below the Interview Lab.
   Reads from game.js global state to compute earned skills dynamically.

   • All functions and DOM IDs are prefixed `rb` to avoid colliding
     with game.js (which uses no prefix).
   • Loads AFTER game.js (script order in index.html), so it can
     safely read window.solved, window.CHS, etc.
   • If the user resets progress in the game, we re-read state.
   ════════════════════════════════════════════════════════════════ */

let rbCurrentTier = 'junior';

const rbState = {
    name: 'Your Name',
    email: '',
    phone: '',
    github: '',
    summary: 'Career-changer applying years of professional experience to software engineering, currently training as an AI Software Engineer apprentice.',
    projects: [
        { tools: 'JavaScript', url: '', bullets: '' }
    ],
    experience: [
        { title: '', org: '', date: '', bullets: '' }
    ],
    education: [
        { name: '', date: '' }
    ]
};


/* ════════════════════════════════════════════════════════════════
   DYNAMIC SKILLS — earned by demonstrating 80% mastery in-game
   ════════════════════════════════════════════════════════════════ */

/* Map a game category to the resume "Languages/Web Technologies/Frameworks/..."
   group it should appear in, and the keyword to add.

   Groups are designed to match real resume conventions:
     • Languages              → things you write code/logic in
     • Web Technologies       → HTML/CSS (markup + styling, not languages)
     • Frameworks & Libraries → pre-built code you build on top of (React, Node)
     • Concepts               → theoretical knowledge (algorithms, APIs)
     • Security               → security-specific knowledge
     • Tools                  → developer tooling (Git, testing) */
const RB_CATEGORY_MAP = {
    'JS Fundamentals':  { group: 'Languages',              keyword: 'JavaScript' },
    'JS Advanced':      { group: 'Languages',              keyword: 'JavaScript (ES6+)' },
    'Python':           { group: 'Languages',              keyword: 'Python' },
    'Python Advanced':  { group: 'Languages',              keyword: 'Python (advanced)' },
    'TypeScript':       { group: 'Languages',              keyword: 'TypeScript' },
    'SQL':              { group: 'Languages',              keyword: 'SQL' },
    'HTML & CSS':       { group: 'Web Technologies',       keyword: 'HTML5, CSS3' },
    'CSS Advanced':     { group: 'Web Technologies',       keyword: 'Advanced CSS / Layouts' },
    'React & Async':    { group: 'Frameworks & Libraries', keyword: 'React' },
    'Node.js':          { group: 'Frameworks & Libraries', keyword: 'Node.js / Express' },
    'HTTP & APIs':      { group: 'Concepts',               keyword: 'REST APIs, HTTP' },
    'Algorithms':       { group: 'Concepts',               keyword: 'Algorithms' },
    'Data Structures':  { group: 'Concepts',               keyword: 'Data structures' },
    'String Methods':   { group: 'Concepts',               keyword: 'String manipulation' },
    'Array Methods':    { group: 'Concepts',               keyword: 'Array methods (map / filter / reduce)' },
    'Web Security':     { group: 'Security',               keyword: 'OWASP Top 10, secure coding' },
    'Git & CLI':        { group: 'Tools',                  keyword: 'Git, GitHub, Linux CLI' },
    'Testing':          { group: 'Tools',                  keyword: 'Jest, unit / integration testing' }
};

/* THRESHOLD: 80% of category questions must be solved
   to earn the skill keyword. */
const RB_SKILL_THRESHOLD = 0.80;

/* Read game state (from game.js) and compute which categories
   the user has demonstrated >=80% mastery in. */
function rbComputeEarnedSkills() {
    // Defensive: game.js may not have loaded yet
    const solved = (typeof window.solved !== 'undefined' && window.solved) ? window.solved : new Set();
    const CHS    = (typeof window.CHS !== 'undefined' && window.CHS) ? window.CHS : [];

    if (!CHS.length) return { groups: {}, anyEarned: false };

    // For every game category, compute solved/total
    const catStats = {};
    CHS.forEach(ch => {
        if (!catStats[ch.cat]) catStats[ch.cat] = { solved: 0, total: 0 };
        catStats[ch.cat].total++;
        if (solved.has(ch.id)) catStats[ch.cat].solved++;
    });

    // Group earned skills by resume row
    const groups = {};
    let anyEarned = false;

    Object.entries(catStats).forEach(([cat, stats]) => {
        if (stats.total === 0) return;
        const ratio = stats.solved / stats.total;
        if (ratio < RB_SKILL_THRESHOLD) return;

        const map = RB_CATEGORY_MAP[cat];
        if (!map) return;

        if (!groups[map.group]) groups[map.group] = [];
        if (!groups[map.group].includes(map.keyword)) {
            groups[map.group].push(map.keyword);
            anyEarned = true;
        }
    });

    return { groups, anyEarned };
}


/* ════════════════════════════════════════════════════════════════
   HELPERS
   ════════════════════════════════════════════════════════════════ */

function rbEscapeHtml(str) {
    if (str == null) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function rbEscapeAttr(str) {
    if (str == null) return '';
    return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function rbEscapeText(str) {
    if (str == null) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function rbBulletsFromText(text) {
    if (!text || !text.trim()) return '';
    return text.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .map(line => `<li>${rbEscapeHtml(line)}</li>`)
        .join('');
}


/* ════════════════════════════════════════════════════════════════
   PROJECTS — repeatable input rows
   ════════════════════════════════════════════════════════════════ */

function rbRenderProjects() {
    const container = document.getElementById('rbProjects');
    if (!container) return;
    container.innerHTML = rbState.projects.map((p, i) => `
        <div class="rb-repeat-item">
            <button class="rb-remove-btn" onclick="rbRemoveProject(${i})" title="Remove">×</button>
            <div class="rb-repeat-item-label">Project ${i + 1}</div>
            <div class="rb-form-row">
                <label for="rbProjTools${i}">Tools / tech</label>
                <input id="rbProjTools${i}" type="text" data-field="tools" value="${rbEscapeAttr(p.tools)}" oninput="rbUpdate()">
            </div>
            <div class="rb-form-row">
                <label for="rbProjUrl${i}">Repository / live URL</label>
                <input id="rbProjUrl${i}" type="text" data-field="url" value="${rbEscapeAttr(p.url)}" oninput="rbUpdate()">
            </div>
            <div class="rb-form-row">
                <label for="rbProjBullets${i}">Description (one bullet per line)</label>
                <textarea id="rbProjBullets${i}" data-field="bullets" oninput="rbUpdate()">${rbEscapeText(p.bullets)}</textarea>
            </div>
        </div>
    `).join('');
}

function rbAddProject() {
    rbState.projects.push({ tools: '', url: '', bullets: '' });
    rbRenderProjects();
    rbRenderResume();
}

function rbRemoveProject(i) {
    rbState.projects.splice(i, 1);
    rbRenderProjects();
    rbRenderResume();
}


/* ════════════════════════════════════════════════════════════════
   EXPERIENCE
   ════════════════════════════════════════════════════════════════ */

function rbRenderExperience() {
    const container = document.getElementById('rbExperience');
    if (!container) return;
    container.innerHTML = rbState.experience.map((e, i) => `
        <div class="rb-repeat-item">
            <button class="rb-remove-btn" onclick="rbRemoveExperience(${i})" title="Remove">×</button>
            <div class="rb-repeat-item-label">Position ${i + 1}</div>
            <div class="rb-form-row">
                <label for="rbExpTitle${i}">Job title</label>
                <input id="rbExpTitle${i}" type="text" data-field="title" value="${rbEscapeAttr(e.title)}" oninput="rbUpdate()">
            </div>
            <div class="rb-form-row">
                <label for="rbExpOrg${i}">Organization</label>
                <input id="rbExpOrg${i}" type="text" data-field="org" value="${rbEscapeAttr(e.org)}" oninput="rbUpdate()">
            </div>
            <div class="rb-form-row">
                <label for="rbExpDate${i}">Dates</label>
                <input id="rbExpDate${i}" type="text" data-field="date" value="${rbEscapeAttr(e.date)}" oninput="rbUpdate()">
            </div>
            <div class="rb-form-row">
                <label for="rbExpBullets${i}">Description (one bullet per line)</label>
                <textarea id="rbExpBullets${i}" data-field="bullets" oninput="rbUpdate()">${rbEscapeText(e.bullets)}</textarea>
            </div>
        </div>
    `).join('');
}

function rbAddExperience() {
    rbState.experience.push({ title: '', org: '', date: '', bullets: '' });
    rbRenderExperience();
    rbRenderResume();
}

function rbRemoveExperience(i) {
    rbState.experience.splice(i, 1);
    rbRenderExperience();
    rbRenderResume();
}


/* ════════════════════════════════════════════════════════════════
   EDUCATION
   ════════════════════════════════════════════════════════════════ */

function rbRenderEducation() {
    const container = document.getElementById('rbEducation');
    if (!container) return;
    container.innerHTML = rbState.education.map((e, i) => `
        <div class="rb-repeat-item">
            <button class="rb-remove-btn" onclick="rbRemoveEducation(${i})" title="Remove">×</button>
            <div class="rb-repeat-item-label">Item ${i + 1}</div>
            <div class="rb-form-row">
                <label for="rbEduName${i}">Credential / school</label>
                <input id="rbEduName${i}" type="text" data-field="name" value="${rbEscapeAttr(e.name)}" oninput="rbUpdate()">
            </div>
            <div class="rb-form-row">
                <label for="rbEduDate${i}">Date / year (optional)</label>
                <input id="rbEduDate${i}" type="text" data-field="date" value="${rbEscapeAttr(e.date)}" oninput="rbUpdate()">
            </div>
        </div>
    `).join('');
}

function rbAddEducation() {
    rbState.education.push({ name: '', date: '' });
    rbRenderEducation();
    rbRenderResume();
}

function rbRemoveEducation(i) {
    rbState.education.splice(i, 1);
    rbRenderEducation();
    rbRenderResume();
}


/* ════════════════════════════════════════════════════════════════
   PULL FORM VALUES INTO STATE, THEN RE-RENDER RESUME
   ════════════════════════════════════════════════════════════════ */

function rbUpdate() {
    const nameEl = document.getElementById('rbName');
    if (nameEl) rbState.name = nameEl.value;

    const emailEl = document.getElementById('rbEmail');
    if (emailEl) rbState.email = emailEl.value;

    const phoneEl = document.getElementById('rbPhone');
    if (phoneEl) rbState.phone = phoneEl.value;

    const githubEl = document.getElementById('rbGithub');
    if (githubEl) rbState.github = githubEl.value;

    const summaryEl = document.getElementById('rbSummary');
    if (summaryEl) rbState.summary = summaryEl.value;

    rbState.projects = Array.from(document.querySelectorAll('#rbProjects .rb-repeat-item')).map(item => ({
        tools: item.querySelector('[data-field="tools"]').value,
        url: item.querySelector('[data-field="url"]').value,
        bullets: item.querySelector('[data-field="bullets"]').value
    }));

    rbState.experience = Array.from(document.querySelectorAll('#rbExperience .rb-repeat-item')).map(item => ({
        title: item.querySelector('[data-field="title"]').value,
        org: item.querySelector('[data-field="org"]').value,
        date: item.querySelector('[data-field="date"]').value,
        bullets: item.querySelector('[data-field="bullets"]').value
    }));

    rbState.education = Array.from(document.querySelectorAll('#rbEducation .rb-repeat-item')).map(item => ({
        name: item.querySelector('[data-field="name"]').value,
        date: item.querySelector('[data-field="date"]').value
    }));

    rbRenderResume();
}


/* ════════════════════════════════════════════════════════════════
   RENDER THE RESUME
   ════════════════════════════════════════════════════════════════ */

function rbRenderResume() {
    const out = document.getElementById('rbResumeOutput');
    if (!out) return;

    // Contact line — show only filled fields
    const contactBits = [rbState.email, rbState.phone, rbState.github].filter(Boolean);
    const contactHTML = contactBits.map((bit, i) =>
        `<span>${rbEscapeHtml(bit)}</span>${i < contactBits.length - 1 ? '<span>·</span>' : ''}`
    ).join('');

    // Skills — DYNAMICALLY computed from game state
    const { groups, anyEarned } = rbComputeEarnedSkills();
    let skillsHTML;
    if (!anyEarned) {
        skillsHTML = '<div class="rb-skills-empty">You haven\'t unlocked any skills yet. Solve at least 80% of a category in the game to earn that skill on your resume.</div>';
    } else {
        // Display in this canonical order
        const groupOrder = ['Languages', 'Web Technologies', 'Frameworks & Libraries', 'Tools', 'Security', 'Concepts'];
        skillsHTML = groupOrder
            .filter(g => groups[g] && groups[g].length)
            .map(g => `
                <div class="rb-skill-row">
                    <span class="rb-skill-cat">${g}</span>
                    <span class="rb-skill-list">${groups[g].join(', ')}</span>
                </div>
            `).join('');
    }

    // Projects
    const projectsHTML = rbState.projects.length && rbState.projects.some(p => p.tools || p.url || p.bullets)
        ? rbState.projects.map(p => `
            <div class="rb-experience-item">
                <div class="rb-exp-header">
                    <span class="rb-exp-title">${rbEscapeHtml(p.url) || 'Project'}</span>
                    <span class="rb-exp-date">${rbEscapeHtml(p.tools)}</span>
                </div>
                <ul class="rb-exp-bullets">
                    ${rbBulletsFromText(p.bullets)}
                </ul>
            </div>
        `).join('')
        : '<div class="rb-empty-hint">Add a project to fill this section.</div>';

    // Experience
    const experienceHTML = rbState.experience.length && rbState.experience.some(e => e.title || e.org || e.bullets)
        ? rbState.experience.map(e => `
            <div class="rb-experience-item">
                <div class="rb-exp-header">
                    <span class="rb-exp-title">${rbEscapeHtml(e.title)}</span>
                    <span class="rb-exp-date">${rbEscapeHtml(e.date)}</span>
                </div>
                ${e.org ? `<div class="rb-exp-org">${rbEscapeHtml(e.org)}</div>` : ''}
                <ul class="rb-exp-bullets">
                    ${rbBulletsFromText(e.bullets)}
                </ul>
            </div>
        `).join('')
        : '<div class="rb-empty-hint">Add an experience to fill this section.</div>';

    // Education
    const educationHTML = rbState.education.length && rbState.education.some(e => e.name)
        ? rbState.education.map(e => `
            <div class="rb-edu-item">
                <span class="rb-edu-name"><strong>${rbEscapeHtml(e.name)}</strong></span>
                <span class="rb-edu-date">${rbEscapeHtml(e.date)}</span>
            </div>
        `).join('')
        : '<div class="rb-empty-hint">Add education or certifications to fill this section.</div>';

    out.innerHTML = `
        <header class="rb-resume-header">
            <div class="rb-resume-name">${rbEscapeHtml(rbState.name) || 'Your Name'}</div>
            <div class="rb-resume-contact">${contactHTML}</div>
        </header>

        <section class="rb-resume-section">
            <div class="rb-resume-section-label">Summary</div>
            <p class="rb-resume-summary">${rbEscapeHtml(rbState.summary)}</p>
        </section>

        <section class="rb-resume-section">
            <div class="rb-resume-section-label">Technical Skills</div>
            <div class="rb-skills-table">${skillsHTML}</div>
        </section>

        <section class="rb-resume-section">
            <div class="rb-resume-section-label">Projects</div>
            ${projectsHTML}
        </section>

        <section class="rb-resume-section">
            <div class="rb-resume-section-label">Experience</div>
            ${experienceHTML}
        </section>

        <section class="rb-resume-section">
            <div class="rb-resume-section-label">Education &amp; Certifications</div>
            ${educationHTML}
        </section>
    `;
}


/* ════════════════════════════════════════════════════════════════
   TIER SWITCHING
   Note: tiers no longer change skills (skills are now dynamic).
   The toggle just changes the displayed tier label on the resume.
   ════════════════════════════════════════════════════════════════ */

function rbSwitchTier(tier) {
    rbCurrentTier = tier;
    document.querySelectorAll('.rb-tier-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tier === tier);
    });
    const revLabel = document.getElementById('rbRevLabel');
    if (revLabel) revLabel.textContent = `REV · ${tier.toUpperCase()}`;
    rbRenderResume();
}


/* ════════════════════════════════════════════════════════════════
   AUTO-REFRESH WHEN GAME STATE CHANGES
   The game has no event bus, so we poll game state lightly.
   When `solved.size` changes, we re-render the resume.
   ════════════════════════════════════════════════════════════════ */

let rbLastSolvedSize = -1;

function rbWatchGameState() {
    try {
        // Read from window.solved (same source rbComputeEarnedSkills uses)
        // so the watcher and the computation always agree.
        const gameSolved = window.solved;
        const currentSize = (gameSolved && gameSolved.size) || 0;
        if (currentSize !== rbLastSolvedSize) {
            rbLastSolvedSize = currentSize;
            rbRenderResume();
        }
    } catch (e) {
        // game.js not ready yet — try again later
    }
}


/* ════════════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════════════ */

function rbInit() {
    rbRenderProjects();
    rbRenderExperience();
    rbRenderEducation();
    rbRenderResume();

    // Poll every 1.5s for game state changes (cheap, harmless)
    setInterval(rbWatchGameState, 1500);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', rbInit);
} else {
    rbInit();
}

/* ════════════════════════════════════════════════════════════════
   CODE RANGER · BUILD LAB MODULE
   Sits between Interview Lab and Resume Builder.
   Unlocks at 75 solved challenges.

   • All functions and DOM IDs are prefixed `bl` to avoid collision
     with game.js and resume-builder.js
   • Reads window.solved from game.js
   • API keys are user-supplied; stored only in browser
     (sessionStorage by default, localStorage if user opts in)
   ════════════════════════════════════════════════════════════════ */

const BL_UNLOCK_THRESHOLD = 5;  // 🚧 TESTING ONLY — change back to 75 before demo/deploy

/* ════════════════════════════════════════════════════════════════
   STARTER FILES — also used as default workspace content
   ════════════════════════════════════════════════════════════════ */

const BL_DEFAULT_FILES = {
    html: `<!-- Welcome to your Build Lab workspace! -->
<!-- Click an example above to load starter code -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Project</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is your Build Lab workspace. Edit me, then click Run Preview.</p>
  <script src="script.js"></script>
</body>
</html>`,
    css: `/* Your styles go here */

body {
  font-family: -apple-system, sans-serif;
  background: #f8f8f8;
  padding: 40px;
  color: #1a1a1a;
}

h1 {
  font-size: 32px;
  background: linear-gradient(135deg, #a855f7, #4285F4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
}`,
    js: `// Your JavaScript goes here
// This file runs after the HTML loads

console.log('Hello from script.js!');

// Try uncommenting this to add interactivity:
// document.querySelector('h1').addEventListener('click', () => {
//   alert('You clicked the heading!');
// });`,
    py: `# main.py
# Note: Python doesn't run in the browser — download this file
# and run it in VS Code with: python main.py

def greet(name):
    return f'Hello, {name}!'

if __name__ == '__main__':
    print(greet('Code Ranger'))
`
};


/* ════════════════════════════════════════════════════════════════
   EXAMPLE PROJECTS
   ════════════════════════════════════════════════════════════════ */

const BL_EXAMPLES = {
    gradient: {
        name: 'Animated Gradient Background',
        files: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Animated Gradient</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <h1>Code <span>Ranger</span></h1>
    <p>A flowing background built with pure CSS.</p>
  </main>
</body>
</html>`,
            css: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, sans-serif;
  /* The animated gradient */
  background: linear-gradient(125deg, #a855f7, #4285F4, #ec4899, #a855f7);
  background-size: 400% 400%;
  animation: flow 8s ease infinite;
}

@keyframes flow {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

main {
  text-align: center;
  color: white;
  padding: 40px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
}

h1 {
  font-size: clamp(48px, 8vw, 88px);
  font-weight: 900;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
}

h1 span { color: #ffd700; }

p {
  font-size: 18px;
  opacity: 0.9;
}`,
            js: `// No JavaScript needed — this is pure CSS!
// Try changing the colors in style.css to make it your own.
console.log('Pure CSS animation — no JS required.');`,
            py: BL_DEFAULT_FILES.py
        }
    },

    rotating: {
        name: 'Rotating CSS Logo',
        files: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Rotating Logo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="logo">
    <div class="logo-shape"></div>
    <div class="logo-text">CR</div>
  </div>
</body>
</html>`,
            css: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0c0a18;
  font-family: -apple-system, sans-serif;
}

.logo {
  position: relative;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-shape {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #a855f7, #4285F4);
  border-radius: 24px;
  animation: spin 4s linear infinite;
  box-shadow: 0 10px 40px rgba(168, 85, 247, 0.4);
}

.logo-text {
  position: relative;
  z-index: 1;
  font-size: 48px;
  font-weight: 900;
  color: white;
  letter-spacing: -0.05em;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`,
            js: `// Try this: stop or speed up the animation on click
const shape = document.querySelector('.logo-shape');
let speed = 4; // seconds

shape.addEventListener('click', () => {
  speed = speed === 4 ? 1 : 4;
  shape.style.animationDuration = speed + 's';
});`,
            py: BL_DEFAULT_FILES.py
        }
    },

    landing: {
        name: 'Minimalist Landing Page',
        files: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <div class="logo">YOUR.NAME</div>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero">
      <h1>Software engineer<br>building <span>useful things.</span></h1>
      <p>I build apps, solve problems, and learn fast. Currently looking for my next role.</p>
      <a href="#contact" class="cta">Get in touch →</a>
    </section>
  </main>
</body>
</html>`,
            css: `* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --ink: #1a1a1a;
  --paper: #fafafa;
  --accent: #a855f7;
  --dim: #666;
}

body {
  font-family: -apple-system, sans-serif;
  background: var(--paper);
  color: var(--ink);
  line-height: 1.5;
}

header {
  padding: 24px 5vw;
  border-bottom: 1px solid #eee;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
}

.logo {
  font-weight: 800;
  letter-spacing: -0.03em;
  font-size: 18px;
}

.nav-links {
  display: flex;
  gap: 28px;
}

.nav-links a {
  color: var(--ink);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover { color: var(--accent); }

main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 5vw;
}

.hero h1 {
  font-size: clamp(40px, 7vw, 72px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: 24px;
}

.hero h1 span { color: var(--accent); }

.hero p {
  font-size: 20px;
  color: var(--dim);
  max-width: 540px;
  margin-bottom: 32px;
}

.cta {
  display: inline-block;
  padding: 14px 28px;
  background: var(--ink);
  color: var(--paper);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.2s;
}

.cta:hover { transform: translateY(-2px); }`,
            js: `// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});`,
            py: BL_DEFAULT_FILES.py
        }
    },

    counter: {
        name: 'Interactive Counter Widget',
        files: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Counter</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="counter">
    <h1>Counter</h1>
    <div class="display" id="count">0</div>
    <div class="buttons">
      <button id="dec">−</button>
      <button id="reset">Reset</button>
      <button id="inc">+</button>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
            css: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0c0a18;
  font-family: -apple-system, sans-serif;
}

.counter {
  background: white;
  padding: 40px 50px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(168, 85, 247, 0.3);
}

h1 {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #999;
  margin-bottom: 16px;
}

.display {
  font-size: 80px;
  font-weight: 900;
  color: #a855f7;
  margin-bottom: 24px;
  font-family: 'JetBrains Mono', monospace;
  min-width: 200px;
}

.buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
}

button {
  padding: 12px 20px;
  border: 2px solid #a855f7;
  background: white;
  color: #a855f7;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.18s;
  min-width: 60px;
}

button:hover {
  background: #a855f7;
  color: white;
  transform: translateY(-1px);
}

button:active { transform: translateY(0); }`,
            js: `// Connect the buttons to the counter
let count = 0;
const display = document.getElementById('count');

document.getElementById('inc').addEventListener('click', () => {
  count++;
  display.textContent = count;
});

document.getElementById('dec').addEventListener('click', () => {
  count--;
  display.textContent = count;
});

document.getElementById('reset').addEventListener('click', () => {
  count = 0;
  display.textContent = count;
});`,
            py: BL_DEFAULT_FILES.py
        }
    },

    /* ════════════════════════════════════════════════════════════════
       NEW EXAMPLES — Added today's session
       ════════════════════════════════════════════════════════════════ */

    dogwalking: {
        name: 'Dog Walking Business Site',
        files: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Happy Tails — Dog Walking & Pet Care</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Header / Hero -->
  <header class="hero">
    <nav class="nav">
      <div class="logo">🐾 Happy Tails</div>
      <ul class="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div class="hero-content">
      <h1>Tail-wagging walks. Every single day.</h1>
      <p>Trusted dog walking and pet care in the neighborhood since 2019.</p>
      <a href="#contact" class="cta">Book a Walk</a>
    </div>
  </header>

  <!-- Services -->
  <section id="services" class="services">
    <h2>Services</h2>
    <div class="service-grid">
      <article class="service-card">
        <div class="service-icon">🚶</div>
        <h3>30-min Walk</h3>
        <p>A brisk neighborhood loop. Perfect for high-energy pups.</p>
        <div class="price">$22</div>
      </article>
      <article class="service-card">
        <div class="service-icon">🐕</div>
        <h3>60-min Adventure</h3>
        <p>An extended walk with park time and sniff breaks.</p>
        <div class="price">$38</div>
      </article>
      <article class="service-card">
        <div class="service-icon">🏠</div>
        <h3>Drop-in Visit</h3>
        <p>Feeding, fresh water, and 20 minutes of play.</p>
        <div class="price">$28</div>
      </article>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="about">
    <div class="about-img">🐶</div>
    <div class="about-text">
      <h2>Hi, I'm Sam</h2>
      <p>Licensed, bonded, and insured. I've cared for 200+ dogs across our neighborhood. Every walk includes photo updates and a written report so you know exactly how your pup's day went.</p>
      <ul class="badges">
        <li>✓ Pet First Aid Certified</li>
        <li>✓ Background Checked</li>
        <li>✓ 5-star reviews on Google</li>
      </ul>
    </div>
  </section>

  <!-- Contact form -->
  <section id="contact" class="contact">
    <h2>Book a Walk</h2>
    <p class="contact-sub">Fill out the form and I'll get back to you within 2 hours.</p>
    <form class="contact-form" id="bookingForm">

      <label for="ownerName">Your name</label>
      <input type="text" id="ownerName" name="ownerName" required>

      <label for="dogName">Your dog's name</label>
      <input type="text" id="dogName" name="dogName" required>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>

      <label for="serviceType">Service</label>
      <select id="serviceType" name="serviceType">
        <option value="30min">30-min Walk ($22)</option>
        <option value="60min">60-min Adventure ($38)</option>
        <option value="dropin">Drop-in Visit ($28)</option>
      </select>

      <label for="notes">Anything I should know? (treats, leash quirks, fears)</label>
      <textarea id="notes" name="notes" rows="3"></textarea>

      <button type="button" id="submitBtn">Send Booking Request</button>
      <p id="confirmMsg" class="confirm"></p>
    </form>
  </section>

  <footer class="footer">
    <p>🐾 Happy Tails Pet Care · Licensed & Insured</p>
    <p class="footer-sub">© 2026 · hello@happytails.example</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>`,
            css: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #2a1f3d;
  background: #faf7ff;
  line-height: 1.6;
}

/* ─── HERO ─── */
.hero {
  background: linear-gradient(135deg, #fef3c7 0%, #fbcfe8 100%);
  padding-bottom: 80px;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  max-width: 1100px;
  margin: 0 auto;
}
.logo { font-size: 22px; font-weight: 800; color: #6b21a8; }
.nav-links { display: flex; gap: 24px; list-style: none; }
.nav-links a {
  color: #6b21a8;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
}
.nav-links a:hover { color: #db2777; }

.hero-content {
  max-width: 700px;
  margin: 60px auto 0;
  text-align: center;
  padding: 0 24px;
}
.hero-content h1 {
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 800;
  color: #581c87;
  margin-bottom: 16px;
}
.hero-content p {
  font-size: 18px;
  color: #6b21a8;
  margin-bottom: 28px;
}
.cta {
  display: inline-block;
  background: #db2777;
  color: white;
  padding: 14px 32px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s;
}
.cta:hover { transform: translateY(-2px); }

/* ─── SERVICES ─── */
.services {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 24px;
}
.services h2 {
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #581c87;
}
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}
.service-card {
  background: white;
  padding: 28px;
  border-radius: 16px;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.25s;
  box-shadow: 0 2px 12px rgba(168, 85, 247, 0.08);
}
.service-card:hover {
  border-color: #db2777;
  transform: translateY(-4px);
}
.service-icon { font-size: 48px; margin-bottom: 12px; }
.service-card h3 { color: #581c87; margin-bottom: 8px; }
.price {
  font-size: 28px;
  font-weight: 800;
  color: #db2777;
  margin-top: 12px;
}

/* ─── ABOUT ─── */
.about {
  background: white;
  padding: 80px 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto 40px;
  border-radius: 24px;
}
.about-img {
  font-size: 140px;
  background: linear-gradient(135deg, #fef3c7, #fbcfe8);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-text { max-width: 500px; }
.about-text h2 { color: #581c87; margin-bottom: 16px; font-size: 32px; }
.about-text p { margin-bottom: 20px; }
.badges { list-style: none; }
.badges li { padding: 4px 0; color: #6b21a8; font-weight: 600; }

/* ─── CONTACT ─── */
.contact {
  max-width: 600px;
  margin: 0 auto;
  padding: 60px 24px;
  text-align: center;
}
.contact h2 { color: #581c87; margin-bottom: 8px; }
.contact-sub { color: #6b21a8; margin-bottom: 32px; }
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
}
.contact-form label {
  font-weight: 600;
  color: #581c87;
  margin-top: 12px;
  font-size: 14px;
}
.contact-form input,
.contact-form select,
.contact-form textarea {
  padding: 12px;
  border: 2px solid #e9d5ff;
  border-radius: 10px;
  font-family: inherit;
  font-size: 14px;
}
.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #db2777;
}
#submitBtn {
  margin-top: 16px;
  background: #db2777;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 999px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
}
#submitBtn:hover { background: #be185d; }
.confirm {
  margin-top: 12px;
  color: #059669;
  font-weight: 600;
  text-align: center;
}

/* ─── FOOTER ─── */
.footer {
  text-align: center;
  padding: 32px 24px;
  color: #6b21a8;
  font-size: 14px;
}
.footer-sub { color: #a78bfa; margin-top: 4px; font-size: 12px; }`,
            js: `// ═══════════════════════════════════════════════════════════════════════
// Happy Tails Booking Form
// ═══════════════════════════════════════════════════════════════════════
// Demonstrates: label[for], textContent for safe user-input rendering,
// let (not var), closure-based form-state management.
// ═══════════════════════════════════════════════════════════════════════

// Closure-based booking state — keeps the form's data private
const createBookingStore = () => {
  let bookings = [];

  return {
    add: (booking) => {
      bookings.push({ ...booking, id: Date.now() });
      return bookings[bookings.length - 1];
    },
    count: () => bookings.length,
    latest: () => bookings[bookings.length - 1] || null
  };
};

const store = createBookingStore();

// Get form references (cached for efficiency)
const form = document.getElementById('bookingForm');
const submitBtn = document.getElementById('submitBtn');
const confirmMsg = document.getElementById('confirmMsg');

submitBtn.addEventListener('click', () => {
  // Read values
  const ownerName = document.getElementById('ownerName').value.trim();
  const dogName = document.getElementById('dogName').value.trim();
  const email = document.getElementById('email').value.trim();
  const serviceType = document.getElementById('serviceType').value;
  const notes = document.getElementById('notes').value.trim();

  // Basic validation
  if (!ownerName || !dogName || !email) {
    confirmMsg.textContent = '⚠ Please fill in name, dog name, and email.';
    confirmMsg.style.color = '#dc2626';
    return;
  }

  // Save booking
  const booking = store.add({ ownerName, dogName, email, serviceType, notes });

  // Confirm using textContent — safe from any HTML injection in user input
  confirmMsg.textContent = '✓ Thanks ' + ownerName + '! I will reply about ' + dogName + ' within 2 hours.';
  confirmMsg.style.color = '#059669';

  // Clear form
  form.reset();

  console.log('Booking saved:', booking);
  console.log('Total bookings:', store.count());
});`,
            py: BL_DEFAULT_FILES.py
        }
    },

    memorymatch: {
        name: 'Memory Match: Dragon Cards',
        files: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dragon Memory Match</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>🐉 Dragon Memory Match</h1>
  <p class="subtitle">Flip two cards. Match the pairs. Win the game.</p>

  <div class="stats">
    <div class="stat">Moves<strong id="moveCount">0</strong></div>
    <div class="stat">Matches<strong id="matchCount">0</strong></div>
    <div class="stat">Time<strong id="timer">0s</strong></div>
  </div>

  <div class="controls">
    <label for="difficulty">Difficulty:</label>
    <select id="difficulty" name="difficulty">
      <option value="easy">Easy (6 cards)</option>
      <option value="medium" selected>Medium (12 cards)</option>
      <option value="hard">Hard (24 cards)</option>
    </select>
    <button id="restartBtn" type="button">Restart Game</button>
  </div>

  <div class="board medium" id="board"></div>

  <div class="win-message" id="winMessage">
    <h2>🏆 You Won!</h2>
    <p id="winStats">Stats appear here</p>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
            css: `* { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg-dark: #0a0612;
  --bg-card: #1a0d2e;
  --purple: #a78bfa;
  --purple-deep: #7c3aed;
  --indigo: #6366f1;
  --text: #e9e4f5;
  --text-dim: #9b8bb8;
  --success: #34d399;
}

body {
  font-family: 'Inter', -apple-system, sans-serif;
  background: var(--bg-dark);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  background-image:
    radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.2) 0%, transparent 60%);
}

h1 {
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(90deg, var(--purple), var(--indigo));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

.subtitle {
  color: var(--text-dim);
  margin-bottom: 24px;
  font-size: 14px;
}

.stats {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  font-size: 14px;
}

.stat {
  background: var(--bg-card);
  padding: 10px 18px;
  border-radius: 10px;
  border: 1px solid rgba(139, 92, 246, 0.25);
}

.stat strong { color: var(--purple); margin-left: 6px; }

.controls {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  justify-content: center;
}

.controls label { color: var(--text-dim); font-size: 14px; cursor: pointer; }

.controls select {
  background: var(--bg-card);
  color: var(--text);
  border: 1px solid rgba(139, 92, 246, 0.3);
  padding: 8px 12px;
  border-radius: 8px;
  font-family: inherit;
  cursor: pointer;
}

.controls button {
  background: linear-gradient(135deg, var(--purple-deep), var(--indigo));
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: transform 0.15s ease;
}

.controls button:hover { transform: translateY(-1px); }

.board { display: grid; gap: 12px; perspective: 1000px; }
.board.easy   { grid-template-columns: repeat(3, 90px); }
.board.medium { grid-template-columns: repeat(4, 90px); }
.board.hard   { grid-template-columns: repeat(6, 80px); }

.card { aspect-ratio: 3 / 4; cursor: pointer; background: transparent; }
.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}
.card.flipped .card-inner { transform: rotateY(180deg); }
.card.matched .card-inner {
  transform: rotateY(180deg);
  box-shadow: 0 0 24px rgba(52, 211, 153, 0.4);
  border-radius: 12px;
}

.card-face {
  position: absolute;
  inset: 0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  font-size: 38px;
  border: 2px solid rgba(139, 92, 246, 0.3);
}
.card-back {
  background: linear-gradient(135deg, var(--purple-deep), var(--indigo));
  color: white;
  font-weight: 800;
}
.card-front {
  background: var(--bg-card);
  transform: rotateY(180deg);
}

.win-message {
  margin-top: 24px;
  padding: 20px 32px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(99, 102, 241, 0.2));
  border: 1px solid var(--purple);
  border-radius: 12px;
  text-align: center;
  display: none;
}
.win-message.show { display: block; }
.win-message h2 { color: var(--purple); margin-bottom: 8px; }`,
            js: `// ═══════════════════════════════════════════════════════════════════════
// Memory Match — closure-based game state
// ═══════════════════════════════════════════════════════════════════════
// Demonstrates: IIFE module pattern, label[for=], let (not var),
// textContent for safe rendering, event delegation, Fisher–Yates shuffle.
// ═══════════════════════════════════════════════════════════════════════

const Game = (function() {
  // PRIVATE STATE (only accessible inside the closure)
  let moves = 0;
  let matches = 0;
  let firstCard = null;
  let secondCard = null;
  let isLocked = false;
  let startTime = null;
  let timerInterval = null;

  const dragonEmojis = ['🐉', '🔥', '🐲', '⚔️', '🛡️', '🗡️',
                        '👑', '💎', '⚡', '🌙', '⭐', '🏰'];

  const board = document.getElementById('board');
  const moveCountEl = document.getElementById('moveCount');
  const matchCountEl = document.getElementById('matchCount');
  const timerEl = document.getElementById('timer');
  const winMessage = document.getElementById('winMessage');
  const winStats = document.getElementById('winStats');
  const difficultySelect = document.getElementById('difficulty');
  const restartBtn = document.getElementById('restartBtn');

  // Fisher–Yates shuffle (truly random)
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function buildDeck(difficulty) {
    const pairCounts = { easy: 3, medium: 6, hard: 12 };
    const pairCount = pairCounts[difficulty];
    const chosen = dragonEmojis.slice(0, pairCount);
    return shuffle([...chosen, ...chosen]);
  }

  function createCard(emoji, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.emoji = emoji;
    card.dataset.index = index;

    const inner = document.createElement('div');
    inner.className = 'card-inner';

    const back = document.createElement('div');
    back.className = 'card-face card-back';
    back.textContent = '?';  // textContent — safe

    const front = document.createElement('div');
    front.className = 'card-face card-front';
    front.textContent = emoji;  // textContent — safe

    inner.appendChild(back);
    inner.appendChild(front);
    card.appendChild(inner);
    return card;
  }

  function handleCardClick(event) {
    const card = event.target.closest('.card');
    if (!card) return;
    if (isLocked) return;
    if (card.classList.contains('flipped')) return;
    if (card.classList.contains('matched')) return;

    card.classList.add('flipped');

    if (startTime === null) {
      startTime = Date.now();
      timerInterval = setInterval(updateTimer, 1000);
    }

    if (firstCard === null) {
      firstCard = card;
    } else {
      secondCard = card;
      moves++;
      moveCountEl.textContent = moves;
      checkForMatch();
    }
  }

  function checkForMatch() {
    const isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;
    if (isMatch) {
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      matches++;
      matchCountEl.textContent = matches;
      resetPairTracking();
      const totalPairs = board.children.length / 2;
      if (matches === totalPairs) endGame();
    } else {
      isLocked = true;
      setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetPairTracking();
        isLocked = false;
      }, 900);
    }
  }

  function resetPairTracking() { firstCard = null; secondCard = null; }

  function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    timerEl.textContent = elapsed + 's';
  }

  function endGame() {
    clearInterval(timerInterval);
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    winStats.textContent = 'Completed in ' + moves + ' moves and ' + elapsed + ' seconds!';
    winMessage.classList.add('show');
  }

  function startGame() {
    moves = 0; matches = 0;
    firstCard = null; secondCard = null;
    isLocked = false; startTime = null;
    if (timerInterval) clearInterval(timerInterval);

    moveCountEl.textContent = '0';
    matchCountEl.textContent = '0';
    timerEl.textContent = '0s';
    winMessage.classList.remove('show');

    const difficulty = difficultySelect.value;
    board.className = 'board ' + difficulty;
    board.textContent = ''; // safe clear

    const deck = buildDeck(difficulty);
    deck.forEach((emoji, index) => {
      board.appendChild(createCard(emoji, index));
    });
  }

  // Event delegation — one listener handles all card clicks
  board.addEventListener('click', handleCardClick);
  restartBtn.addEventListener('click', startGame);
  difficultySelect.addEventListener('change', startGame);

  // Only \`start\` is exposed — everything else is private
  return { start: startGame };
})();

Game.start();`,
            py: BL_DEFAULT_FILES.py
        }
    },

    magazine: {
        name: 'Magazine / Lifestyle Landing',
        files: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Atelier — Slow Living Magazine</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="mag-header">
    <div class="mag-meta">Issue 47 · Spring 2026</div>
    <h1 class="mag-title">ATELIER</h1>
    <div class="mag-tag">A quarterly journal of slow living, craft, and considered design</div>
    <nav class="mag-nav">
      <a href="#features">Features</a>
      <a href="#interviews">Interviews</a>
      <a href="#essays">Essays</a>
      <a href="#shop">Shop</a>
    </nav>
  </header>

  <!-- Hero feature -->
  <section class="hero-feature">
    <div class="hero-img" style="background-image:url('https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=900')"></div>
    <div class="hero-text">
      <div class="kicker">— Cover Story</div>
      <h2>The quiet revolution in pottery studios</h2>
      <p class="hero-deck">A new generation of ceramicists is rejecting Instagram in favor of slower, more deliberate work. We spent three months in their studios.</p>
      <div class="byline">By Elena Marchetti · 18 min read</div>
    </div>
  </section>

  <!-- Three-column features -->
  <section id="features" class="features">
    <div class="section-head">
      <div class="kicker">— This Issue</div>
      <h2>Three perspectives on making</h2>
    </div>
    <div class="feature-grid">
      <article class="feature">
        <div class="feature-img" style="background-image:url('https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600')"></div>
        <div class="cat-label">Craft</div>
        <h3>The bookbinders of Lyon</h3>
        <p>Inside the workshops where books are still sewn by hand, one signature at a time.</p>
      </article>
      <article class="feature">
        <div class="feature-img" style="background-image:url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600')"></div>
        <div class="cat-label">Style</div>
        <h3>Capsule wardrobes, ten years on</h3>
        <p>Six women share what they actually wear after a decade of practicing intentional dressing.</p>
      </article>
      <article class="feature">
        <div class="feature-img" style="background-image:url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=600')"></div>
        <div class="cat-label">Design</div>
        <h3>The case against minimalism</h3>
        <p>An essay on why less isn't always more — and what we lose in the pursuit of empty rooms.</p>
      </article>
    </div>
  </section>

  <!-- Editor's pick -->
  <section class="editors-pick">
    <div class="ep-text">
      <div class="kicker">— Editor's Pick</div>
      <h2>"I quit my job to make sourdough."</h2>
      <p>For fifteen years, Marin Tate ran ad campaigns for a Fortune 500. Then she discovered fermentation. Read her essay on starting over at 47, and what bread taught her about ambition.</p>
      <a href="#" class="ep-link">Read the essay →</a>
    </div>
    <div class="ep-img" style="background-image:url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800')"></div>
  </section>

  <!-- Newsletter signup -->
  <section class="newsletter">
    <div class="kicker centered">— Stay in Touch</div>
    <h2>A letter every Sunday morning</h2>
    <p>Essays, recommendations, and behind-the-scenes from the issue. No ads, ever.</p>
    <form class="news-form" id="newsForm">
      <label for="newsEmail" class="sr-only">Email address</label>
      <input type="email" id="newsEmail" name="newsEmail" placeholder="your@email.com" required>
      <button type="button" id="newsBtn">Subscribe</button>
    </form>
    <p id="newsMsg" class="news-msg"></p>
  </section>

  <footer class="mag-footer">
    <div class="footer-title">ATELIER</div>
    <div class="footer-meta">Issue 47 · Printed quarterly · Published in Brooklyn</div>
    <div class="footer-meta">© 2026 Atelier Press</div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Inter:wght@400;500;600&display=swap');

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', -apple-system, sans-serif;
  color: #1a1a1a;
  background: #faf8f4;
  line-height: 1.7;
}

/* ─── HEADER ─── */
.mag-header {
  text-align: center;
  padding: 48px 24px 32px;
  border-bottom: 1px solid #1a1a1a;
}
.mag-meta {
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #666;
  margin-bottom: 16px;
}
.mag-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(64px, 12vw, 120px);
  font-weight: 900;
  letter-spacing: 0.05em;
  line-height: 1;
  margin-bottom: 12px;
}
.mag-tag {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 18px;
  color: #444;
  margin-bottom: 32px;
}
.mag-nav {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}
.mag-nav a {
  color: #1a1a1a;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 500;
  padding: 6px 0;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}
.mag-nav a:hover { border-bottom-color: #1a1a1a; }

/* ─── KICKER (shared label) ─── */
.kicker {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 14px;
  color: #888;
  margin-bottom: 12px;
}
.kicker.centered { text-align: center; }

/* ─── HERO FEATURE ─── */
.hero-feature {
  max-width: 1100px;
  margin: 64px auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: center;
}
.hero-img {
  height: 480px;
  background-size: cover;
  background-position: center;
  background-color: #d4c8b4;
}
.hero-text h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 20px;
}
.hero-deck {
  font-size: 18px;
  color: #444;
  margin-bottom: 20px;
}
.byline {
  font-size: 13px;
  color: #888;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* ─── FEATURES GRID ─── */
.features {
  max-width: 1100px;
  margin: 96px auto;
  padding: 0 24px;
}
.section-head { text-align: center; margin-bottom: 48px; }
.section-head h2 {
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  font-weight: 700;
}
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 40px;
}
.feature-img {
  height: 280px;
  background-size: cover;
  background-position: center;
  background-color: #d4c8b4;
  margin-bottom: 16px;
}
.cat-label {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 8px;
}
.feature h3 {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.3;
}
.feature p { color: #444; font-size: 15px; }

/* ─── EDITOR'S PICK ─── */
.editors-pick {
  background: #f3ede2;
  max-width: 1100px;
  margin: 0 auto 96px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 64px;
  gap: 48px;
}
.ep-text h2 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;
}
.ep-text p { color: #444; margin-bottom: 20px; }
.ep-link {
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid #1a1a1a;
  padding-bottom: 2px;
}
.ep-img {
  height: 420px;
  background-size: cover;
  background-position: center;
  background-color: #d4c8b4;
}

/* ─── NEWSLETTER ─── */
.newsletter {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 96px;
  padding: 0 24px;
}
.newsletter h2 {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  margin-bottom: 12px;
}
.newsletter p { color: #444; margin-bottom: 28px; }
.news-form {
  display: flex;
  gap: 8px;
  margin: 0 auto;
  max-width: 420px;
}
.news-form input {
  flex: 1;
  padding: 14px 18px;
  border: 1px solid #1a1a1a;
  font-family: inherit;
  font-size: 15px;
  background: transparent;
}
.news-form input:focus { outline: 2px solid #1a1a1a; outline-offset: -2px; }
.news-form button {
  padding: 14px 24px;
  background: #1a1a1a;
  color: white;
  border: 1px solid #1a1a1a;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.news-form button:hover { background: transparent; color: #1a1a1a; }
.news-msg {
  margin-top: 16px;
  color: #059669;
  font-family: 'Playfair Display', serif;
  font-style: italic;
}
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0);
}

/* ─── FOOTER ─── */
.mag-footer {
  border-top: 1px solid #1a1a1a;
  text-align: center;
  padding: 48px 24px;
}
.footer-title {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 28px;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}
.footer-meta { color: #666; font-size: 13px; }

/* ─── RESPONSIVE ─── */
@media (max-width: 768px) {
  .hero-feature, .editors-pick { grid-template-columns: 1fr; gap: 24px; }
  .editors-pick { padding: 32px; }
  .hero-img, .ep-img { height: 280px; }
}`,
            js: `// ═══════════════════════════════════════════════════════════════════════
// Atelier — Newsletter signup
// ═══════════════════════════════════════════════════════════════════════
// Demonstrates: label[for=] (sr-only for visual minimalism), let,
// closure-based subscriber state, textContent for safe rendering.
// ═══════════════════════════════════════════════════════════════════════

// Closure keeps subscriber data private and de-duped
const createSubscriberList = () => {
  const emails = new Set();
  return {
    add: (email) => {
      if (emails.has(email)) return { ok: false, reason: 'duplicate' };
      emails.add(email);
      return { ok: true, count: emails.size };
    },
    size: () => emails.size
  };
};

const list = createSubscriberList();
const form = document.getElementById('newsForm');
const input = document.getElementById('newsEmail');
const btn = document.getElementById('newsBtn');
const msg = document.getElementById('newsMsg');

btn.addEventListener('click', () => {
  const email = input.value.trim().toLowerCase();

  if (!email || !email.includes('@')) {
    msg.textContent = 'Please enter a valid email.';
    msg.style.color = '#dc2626';
    return;
  }

  const result = list.add(email);

  if (!result.ok) {
    msg.textContent = "You're already on the list — thanks again.";
    msg.style.color = '#888';
  } else {
    // textContent — safe even if user pastes HTML in the email field
    msg.textContent = '✓ Thank you. Sunday letters will arrive soon.';
    msg.style.color = '#059669';
    input.value = '';
  }

  console.log('Subscriber count:', list.size());
});`,
            py: BL_DEFAULT_FILES.py
        }
    },

    pacman: {
        name: 'Mini Pac-Man',
        files: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mini Pac-Man</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>👻 Mini Pac-Man</h1>
  <div class="game-info">
    <div class="info-box">Score<strong id="score">0</strong></div>
    <div class="info-box">Lives<strong id="lives">3</strong></div>
  </div>

  <canvas id="board" width="380" height="420"></canvas>

  <div class="controls-help">
    <label for="restartBtn" class="control-label">Use arrow keys to move</label>
    <button id="restartBtn" type="button">New Game</button>
  </div>

  <p id="status" class="status"></p>

  <script src="script.js"></script>
</body>
</html>`,
            css: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', -apple-system, sans-serif;
  background: #000;
  color: #fde047;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
}

h1 {
  font-size: 28px;
  margin-bottom: 16px;
  color: #fde047;
  text-shadow: 0 0 20px rgba(253, 224, 71, 0.5);
}

.game-info {
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
  font-size: 14px;
  font-family: 'Courier New', monospace;
}

.info-box {
  background: rgba(253, 224, 71, 0.08);
  padding: 8px 18px;
  border: 1px solid rgba(253, 224, 71, 0.3);
  border-radius: 8px;
  letter-spacing: 0.05em;
}

.info-box strong { margin-left: 8px; color: white; }

#board {
  background: #000;
  border: 2px solid #1e40af;
  border-radius: 6px;
  box-shadow: 0 0 24px rgba(30, 64, 175, 0.4);
}

.controls-help {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.control-label {
  color: #fde047;
  font-size: 13px;
  opacity: 0.85;
}

#restartBtn {
  background: #fde047;
  color: #000;
  border: none;
  padding: 8px 24px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
}

#restartBtn:hover { background: #fbbf24; }

.status {
  margin-top: 16px;
  font-size: 18px;
  font-weight: 700;
  min-height: 24px;
}`,
            js: `// ═══════════════════════════════════════════════════════════════════════
// Mini Pac-Man — simplified, readable
// ═══════════════════════════════════════════════════════════════════════
// Demonstrates: label[for=], let (not var), closure-based game state,
// textContent for safe DOM updates, canvas 2D rendering, requestAnimationFrame.
//
// SIMPLIFIED FROM ARCADE PAC-MAN:
//   • 1 ghost instead of 4 (simple "chase player" AI)
//   • Smaller maze (19 cols x 21 rows)
//   • No power pellets / fruit
//   • No level progression — single endless level
// ═══════════════════════════════════════════════════════════════════════

const Game = (function() {
  const canvas = document.getElementById('board');
  const ctx = canvas.getContext('2d');
  const scoreEl = document.getElementById('score');
  const livesEl = document.getElementById('lives');
  const statusEl = document.getElementById('status');
  const restartBtn = document.getElementById('restartBtn');

  // ─── MAZE LAYOUT (1 = wall, 0 = dot, 2 = empty) ───
  // Classic Pac-Man-inspired shape, simplified to fit our canvas
  const MAZE_TEMPLATE = [
    "1111111111111111111",
    "1000000000000000001",
    "1011110111110111101",
    "1000000000000000001",
    "1011011111111101101",
    "1000010000000100001",
    "1110111110111110111",
    "0000010000000100000",
    "1110010111110100111",
    "0000000100010000000",
    "1110010111110100111",
    "0000010000000100000",
    "1110010111110100111",
    "1000000000000000001",
    "1011110111110111101",
    "1000100000000010001",
    "1110101111111010111",
    "1000000010000000001",
    "1011110101011110101",
    "1000000000000000001",
    "1111111111111111111"
  ];

  const CELL = 20;     // pixels per maze cell
  const ROWS = MAZE_TEMPLATE.length;
  const COLS = MAZE_TEMPLATE[0].length;

  // PRIVATE STATE
  let maze = [];
  let score = 0;
  let lives = 3;
  let pacman = { col: 9, row: 13, dir: 'right', nextDir: 'right' };
  // Ghost starts at a true 3-way junction (col 9, row 5) directly above
  // Pac-Man. From here the ghost can immediately chase down — much more
  // dynamic than spawning it in a dead-end corridor.
  let ghost = { col: 9, row: 5, dir: 'down' };
  let dotsRemaining = 0;
  let gameOver = false;
  let won = false;
  let animFrame = null;
  let lastMove = 0;
  const MOVE_INTERVAL = 180; // ms between moves (controls game speed)

  function resetMaze() {
    maze = MAZE_TEMPLATE.map(row => row.split('').map(c => parseInt(c, 10)));
    dotsRemaining = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (maze[r][c] === 0) dotsRemaining++;
      }
    }
  }

  function isWall(col, row) {
    if (col < 0 || col >= COLS || row < 0 || row >= ROWS) return true;
    return maze[row][col] === 1;
  }

  function tryMove(entity, dir) {
    let dc = 0, dr = 0;
    if (dir === 'left')  dc = -1;
    if (dir === 'right') dc = 1;
    if (dir === 'up')    dr = -1;
    if (dir === 'down')  dr = 1;
    const newCol = entity.col + dc;
    const newRow = entity.row + dr;
    if (!isWall(newCol, newRow)) {
      entity.col = newCol;
      entity.row = newRow;
      entity.dir = dir;
      return true;
    }
    return false;
  }

  // Simple ghost AI: try to move toward Pac-Man, avoid reversing
  function moveGhost() {
    const options = ['up', 'down', 'left', 'right'].filter(d => {
      // Don't reverse direction unless trapped
      const opposite = { left: 'right', right: 'left', up: 'down', down: 'up' };
      if (d === opposite[ghost.dir]) return false;
      let dc = 0, dr = 0;
      if (d === 'left')  dc = -1;
      if (d === 'right') dc = 1;
      if (d === 'up')    dr = -1;
      if (d === 'down')  dr = 1;
      return !isWall(ghost.col + dc, ghost.row + dr);
    });

    if (options.length === 0) {
      // Trapped — allow reverse
      ['up', 'down', 'left', 'right'].some(d => tryMove(ghost, d));
      return;
    }

    // Pick the option that moves toward Pac-Man.
    // When multiple options tie (same distance), pick one randomly —
    // this prevents the ghost from feeling like it always picks the same
    // direction at junctions, making the chase feel alive.
    let bestDist = Infinity;
    const bestOptions = [];
    options.forEach(d => {
      let dc = 0, dr = 0;
      if (d === 'left')  dc = -1;
      if (d === 'right') dc = 1;
      if (d === 'up')    dr = -1;
      if (d === 'down')  dr = 1;
      const dist = Math.abs((ghost.col + dc) - pacman.col) +
                   Math.abs((ghost.row + dr) - pacman.row);
      if (dist < bestDist) {
        bestDist = dist;
        bestOptions.length = 0;
        bestOptions.push(d);
      } else if (dist === bestDist) {
        bestOptions.push(d);
      }
    });
    const choice = bestOptions[Math.floor(Math.random() * bestOptions.length)];
    tryMove(ghost, choice);
  }

  function checkCollision() {
    if (pacman.col === ghost.col && pacman.row === ghost.row) {
      lives--;
      livesEl.textContent = lives;
      if (lives <= 0) {
        gameOver = true;
        statusEl.textContent = '💀 Game Over — Press New Game';
        statusEl.style.color = '#ef4444';
      } else {
        // Respawn — same junctions as initial spawn
        pacman.col = 9; pacman.row = 13;
        ghost.col = 9; ghost.row = 5; ghost.dir = 'down';
      }
    }
  }

  function eatDot() {
    if (maze[pacman.row][pacman.col] === 0) {
      maze[pacman.row][pacman.col] = 2;
      score += 10;
      scoreEl.textContent = score;
      dotsRemaining--;
      if (dotsRemaining === 0) {
        won = true;
        gameOver = true;
        statusEl.textContent = '🏆 You Won! Score: ' + score;
        statusEl.style.color = '#10b981';
      }
    }
  }

  function step() {
    // Try queued direction first
    if (pacman.nextDir !== pacman.dir) {
      if (tryMove(pacman, pacman.nextDir)) {
        eatDot();
        moveGhost();
        checkCollision();
        return;
      }
    }
    if (tryMove(pacman, pacman.dir)) eatDot();
    moveGhost();
    checkCollision();
  }

  function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Maze
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = c * CELL;
        const y = r * CELL;
        if (maze[r][c] === 1) {
          ctx.fillStyle = '#1e40af';
          ctx.fillRect(x + 2, y + 2, CELL - 4, CELL - 4);
        } else if (maze[r][c] === 0) {
          ctx.fillStyle = '#fde047';
          ctx.beginPath();
          ctx.arc(x + CELL / 2, y + CELL / 2, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Pac-Man
    const px = pacman.col * CELL + CELL / 2;
    const py = pacman.row * CELL + CELL / 2;
    ctx.fillStyle = '#fde047';
    ctx.beginPath();
    let mouthStart = 0.2, mouthEnd = 1.8;
    if (pacman.dir === 'left')  { mouthStart += Math.PI; mouthEnd += Math.PI; }
    if (pacman.dir === 'up')    { mouthStart += -Math.PI/2; mouthEnd += -Math.PI/2; }
    if (pacman.dir === 'down')  { mouthStart += Math.PI/2; mouthEnd += Math.PI/2; }
    ctx.arc(px, py, CELL / 2 - 2, mouthStart * Math.PI, mouthEnd * Math.PI);
    ctx.lineTo(px, py);
    ctx.fill();

    // Ghost
    const gx = ghost.col * CELL + CELL / 2;
    const gy = ghost.row * CELL + CELL / 2;
    ctx.fillStyle = '#ec4899';
    ctx.beginPath();
    ctx.arc(gx, gy, CELL / 2 - 2, Math.PI, 0);
    ctx.lineTo(gx + CELL / 2 - 2, gy + CELL / 2 - 2);
    ctx.lineTo(gx + 3, gy + CELL / 2 - 4);
    ctx.lineTo(gx, gy + CELL / 2 - 2);
    ctx.lineTo(gx - 3, gy + CELL / 2 - 4);
    ctx.lineTo(gx - CELL / 2 + 2, gy + CELL / 2 - 2);
    ctx.closePath();
    ctx.fill();
    // Ghost eyes
    ctx.fillStyle = 'white';
    ctx.beginPath(); ctx.arc(gx - 4, gy - 2, 2.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(gx + 4, gy - 2, 2.5, 0, Math.PI * 2); ctx.fill();
  }

  function loop(timestamp) {
    if (gameOver) { draw(); return; }
    if (timestamp - lastMove >= MOVE_INTERVAL) {
      step();
      lastMove = timestamp;
    }
    draw();
    animFrame = requestAnimationFrame(loop);
  }

  function startGame() {
    resetMaze();
    score = 0;
    lives = 3;
    pacman = { col: 9, row: 13, dir: 'right', nextDir: 'right' };
    ghost = { col: 9, row: 5, dir: 'down' };
    gameOver = false;
    won = false;
    lastMove = 0;
    scoreEl.textContent = '0';
    livesEl.textContent = '3';
    statusEl.textContent = '';
    if (animFrame) cancelAnimationFrame(animFrame);
    animFrame = requestAnimationFrame(loop);
  }

  // Keyboard input
  document.addEventListener('keydown', (e) => {
    const map = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down' };
    if (map[e.key]) {
      pacman.nextDir = map[e.key];
      e.preventDefault();
    }
  });

  restartBtn.addEventListener('click', startGame);

  return { start: startGame };
})();

Game.start();`,
            py: BL_DEFAULT_FILES.py
        }
    }
};


/* ════════════════════════════════════════════════════════════════
   STATE
   ════════════════════════════════════════════════════════════════ */

let blCurrentFile = 'html';
let blFiles = { ...BL_DEFAULT_FILES };


/* ════════════════════════════════════════════════════════════════
   UNLOCK CHECK — runs on load and polls game state
   ════════════════════════════════════════════════════════════════ */

function blCheckUnlock() {
    const lockedEl   = document.getElementById('blLocked');
    const unlockedEl = document.getElementById('blUnlocked');
    if (!lockedEl || !unlockedEl) return;

    const solvedCount = (typeof solved !== 'undefined' && solved.size) || 0;
    const isUnlocked = solvedCount >= BL_UNLOCK_THRESHOLD;

    if (isUnlocked) {
        lockedEl.style.display = 'none';
        unlockedEl.style.display = 'block';
    } else {
        lockedEl.style.display = 'block';
        unlockedEl.style.display = 'none';
        // Update progress on locked banner
        const remaining = BL_UNLOCK_THRESHOLD - solvedCount;
        const pct = Math.min(100, (solvedCount / BL_UNLOCK_THRESHOLD) * 100);
        const solvedSpan    = document.getElementById('blLockedSolved');
        const remainingSpan = document.getElementById('blLockedRemaining');
        const fill          = document.getElementById('blLockedFill');
        if (solvedSpan)    solvedSpan.textContent    = solvedCount;
        if (remainingSpan) remainingSpan.textContent = remaining;
        if (fill)          fill.style.width          = pct + '%';
    }
}


/* ════════════════════════════════════════════════════════════════
   FILE / TAB SWITCHING
   ════════════════════════════════════════════════════════════════ */

function blSwitchFile(fileType) {
    // Save current editor content into state
    blSaveCurrentFile();
    blCurrentFile = fileType;

    // Update tabs
    document.querySelectorAll('.bl-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.file === fileType);
    });

    // Load file content into editor
    const editor = document.getElementById('blEditor');
    if (editor) editor.value = blFiles[fileType];
}

function blSaveCurrentFile() {
    const editor = document.getElementById('blEditor');
    if (editor) blFiles[blCurrentFile] = editor.value;
}

function blOnEditorInput() {
    blSaveCurrentFile();
}

function blHandleTab(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        const t = e.target;
        const s = t.selectionStart;
        t.value = t.value.substring(0, s) + '  ' + t.value.substring(t.selectionEnd);
        t.selectionStart = t.selectionEnd = s + 2;
    }
}


/* ════════════════════════════════════════════════════════════════
   LIVE PREVIEW
   ════════════════════════════════════════════════════════════════ */

function blRunPreview() {
    blSaveCurrentFile();
    const iframe = document.getElementById('blPreview');
    if (!iframe) return;

    // Compose a single document combining HTML + inline CSS + inline JS
    let html = blFiles.html || '';

    // Inject CSS (replace external stylesheet link or append to head)
    const cssTag = `<style>${blFiles.css}</style>`;
    if (html.match(/<link[^>]*href="style\.css"[^>]*>/i)) {
        html = html.replace(/<link[^>]*href="style\.css"[^>]*>/i, cssTag);
    } else if (html.includes('</head>')) {
        html = html.replace('</head>', cssTag + '</head>');
    } else {
        html = cssTag + html;
    }

    // Inject JS (replace external script tag or append before body close)
    const jsTag = `<script>${blFiles.js}<\/script>`;
    if (html.match(/<script[^>]*src="script\.js"[^>]*><\/script>/i)) {
        html = html.replace(/<script[^>]*src="script\.js"[^>]*><\/script>/i, jsTag);
    } else if (html.includes('</body>')) {
        html = html.replace('</body>', jsTag + '</body>');
    } else {
        html = html + jsTag;
    }

    // Write to iframe via srcdoc (sandbox-safe)
    iframe.srcdoc = html;
}


/* ════════════════════════════════════════════════════════════════
   EXAMPLE LOADING
   ════════════════════════════════════════════════════════════════ */

function blLoadExample(key) {
    const ex = BL_EXAMPLES[key];
    if (!ex) return;
    if (!confirm(`Load "${ex.name}" starter code? This will replace your current workspace files.`)) return;

    blFiles = { ...ex.files };
    blCurrentFile = 'html';

    document.querySelectorAll('.bl-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.file === 'html');
    });

    const editor = document.getElementById('blEditor');
    if (editor) editor.value = blFiles.html;

    blRunPreview();

    // Smooth-scroll to workspace
    setTimeout(() => {
        const ws = document.querySelector('.bl-workspace');
        if (ws) ws.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}


/* ════════════════════════════════════════════════════════════════
   DOWNLOADS
   ════════════════════════════════════════════════════════════════ */

const BL_FILE_NAMES = {
    html: 'index.html',
    css:  'style.css',
    js:   'script.js',
    py:   'main.py'
};

function blDownloadFile(fileType) {
    blSaveCurrentFile();
    const content = blFiles[fileType];
    const filename = BL_FILE_NAMES[fileType];
    const mime = fileType === 'html' ? 'text/html'
              : fileType === 'css'  ? 'text/css'
              : fileType === 'js'   ? 'text/javascript'
              : 'text/x-python';

    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function blDownloadCurrent() {
    blDownloadFile(blCurrentFile);
}

function blDownloadAll() {
    blSaveCurrentFile();
    // No native zip support without a library — download each file sequentially
    // with a small delay so the browser doesn't block multiple downloads
    const files = ['html', 'css', 'js', 'py'];
    files.forEach((f, i) => {
        setTimeout(() => blDownloadFile(f), i * 250);
    });
}

function blResetWorkspace() {
    if (!confirm('Reset your workspace to the default starter files? This cannot be undone.')) return;
    blFiles = { ...BL_DEFAULT_FILES };
    blCurrentFile = 'html';
    document.querySelectorAll('.bl-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.file === 'html');
    });
    const editor = document.getElementById('blEditor');
    if (editor) editor.value = blFiles.html;
    blRunPreview();
}


/* ════════════════════════════════════════════════════════════════
   AI COLLABORATOR — Backend proxy + optional BYOK
   ════════════════════════════════════════════════════════════════
   Calls go through OUR backend at API_BASE. The backend holds the
   demo key (rate-limited per IP) and can also forward the user's
   own key if they paste one. Keys are NEVER stored on our server.

   For local dev: API_BASE points to the local FastAPI server.
   For deployment: change this single line to your deployed URL,
   e.g. 'https://code-ranger-api.onrender.com'
   ════════════════════════════════════════════════════════════════ */

// API_BASE is empty so requests go to the same domain that's serving the page.
// On Vercel, this means the frontend at https://yourapp.vercel.app calls
// the backend at https://yourapp.vercel.app/api/chat — no CORS needed.
// For local dev, run frontend AND backend on Vercel CLI, OR set this to
// 'http://localhost:3001' temporarily.
const API_BASE = '';

function blGetStorage() {
    // Session-only storage by design — your API key is erased when you close the tab.
    // This is the most private option and prevents leaving keys on shared computers.
    return sessionStorage;
}

function blPurgeLegacyKeyStorage() {
    // One-time cleanup: if a returning user had a key saved in localStorage from
    // an earlier version of this app, remove it. We're session-only now and any
    // leftover localStorage entry would just be unused privacy debt.
    try {
        if (localStorage.getItem('cr_ai_key') !== null) {
            localStorage.removeItem('cr_ai_key');
        }
        if (localStorage.getItem('cr_ai_provider') !== null) {
            localStorage.removeItem('cr_ai_provider');
        }
    } catch (e) {
        // localStorage can throw in some private browsing modes — ignore silently
    }
}

function blSaveProvider() {
    const provEl = document.getElementById('blAiProvider');
    if (provEl) blGetStorage().setItem('cr_ai_provider', provEl.value);
}

function blLoadKeyConfig() {
    // Run one-time cleanup of any leftover localStorage keys from older versions
    blPurgeLegacyKeyStorage();

    // Read existing key from sessionStorage (the only place we now store it)
    const existingKey = sessionStorage.getItem('cr_ai_key');
    const existingProvider = sessionStorage.getItem('cr_ai_provider');

    // Pre-fill the field if a key is already present in this session
    const keyEl  = document.getElementById('blAiKey');
    const provEl = document.getElementById('blAiProvider');
    if (keyEl  && existingKey)      keyEl.value      = existingKey;
    if (provEl && existingProvider) provEl.value     = existingProvider;
}

function blClearKey() {
    sessionStorage.removeItem('cr_ai_key');
    sessionStorage.removeItem('cr_ai_provider');
    // Belt-and-suspenders: also clear any legacy localStorage entries
    try {
        localStorage.removeItem('cr_ai_key');
        localStorage.removeItem('cr_ai_provider');
    } catch (e) { /* ignore private-browsing errors */ }
    const keyEl = document.getElementById('blAiKey');
    if (keyEl) keyEl.value = '';
    blSetStatus('API key cleared.', 'success');
}

function blSetStatus(msg, type = '') {
    const el = document.getElementById('blAiStatus');
    if (!el) return;
    el.textContent = msg;
    el.className = 'bl-ai-status' + (type ? ' ' + type : '');
}

function blShowResponse(text) {
    const el = document.getElementById('blAiResponse');
    if (!el) return;
    // Light markdown rendering: code blocks, inline code, bold, headings
    let html = blEscapeHtml(text)
        .replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) =>
            `<pre><code>${code}</code></pre>`)
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/^### (.+)$/gm, '<h4>$1</h4>')
        .replace(/^## (.+)$/gm, '<h3>$1</h3>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>[\s\S]*?<\/li>\s*)+/g, m => `<ul>${m}</ul>`)
        .replace(/\n\n/g, '</p><p>')
        .replace(/^([^<].+)$/gm, '<p>$1</p>')
        .replace(/<p><(h[34]|ul|pre)/g, '<$1')
        .replace(/<\/(h[34]|ul|pre)><\/p>/g, '</$1>');
    el.innerHTML = html;
    el.classList.add('show');
}

function blEscapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function blReviewCode() {
    blSaveCurrentFile();

    // The user's own key is now OPTIONAL. If they provide one, we forward it
    // to the backend so it uses theirs (no rate limit). If they don't, the
    // backend uses our demo key (5 free calls per IP per day).
    const keyEl  = document.getElementById('blAiKey');
    const apiKey = keyEl ? keyEl.value.trim() : '';

    // Persist the user's key (still client-side only — never sent anywhere
    // except to our backend per-request, which doesn't store it).
    if (apiKey) {
        blGetStorage().setItem('cr_ai_key', apiKey);
    }

    blSetStatus(apiKey
        ? 'Sending your code for review (using your key)...'
        : 'Sending your code for review (using demo allowance)...', 'loading');

    const responseEl = document.getElementById('blAiResponse');
    if (responseEl) { responseEl.classList.remove('show'); responseEl.innerHTML = ''; }

    const prompt = blBuildPrompt();

    try {
        const result = await blCallBackend(prompt, apiKey);
        let footer = '';
        if (result.used_demo_key && result.demo_calls_remaining >= 0) {
            footer = ` (${result.demo_calls_remaining} demo call${result.demo_calls_remaining === 1 ? '' : 's'} left today)`;
        }
        blSetStatus('✓ Review complete.' + footer, 'success');
        blShowResponse(result.response);
    } catch (err) {
        blSetStatus('✗ ' + err.message, 'error');
    }
}

function blBuildPrompt() {
    const html = blFiles.html || '';
    const css  = blFiles.css  || '';
    const js   = blFiles.js   || '';
    const py   = blFiles.py   || '';

    return `You are a friendly mentor reviewing code from a software-engineering apprentice. They are early-career and learning. Be encouraging but honest. Point out 2-3 specific things they did well, then 2-3 specific suggestions for improvement. Use markdown formatting with ## headings and code examples. Do not rewrite the whole thing — they should keep ownership of the code.

Here is their workspace:

## index.html
\`\`\`html
${html}
\`\`\`

## style.css
\`\`\`css
${css}
\`\`\`

## script.js
\`\`\`javascript
${js}
\`\`\`

## main.py
\`\`\`python
${py}
\`\`\`

Please review this code and provide constructive feedback in this format:

### What's working well
(2-3 specific things they did right)

### Suggestions for improvement
(2-3 specific, actionable suggestions with brief code examples where helpful)

### One thing to learn next
(One concept, technique, or pattern that would level up this code)`;
}

/* ──────────────────────────────────────────────────────────────
   blCallBackend — sends prompt to OUR backend, not directly to AI.
   The backend holds the protected demo key. If the user supplied
   their own key, we pass it along per-request (never stored).

   Returns: { response, used_demo_key, demo_calls_remaining }
   ────────────────────────────────────────────────────────────── */
async function blCallBackend(prompt, userApiKey) {
    let res;
    try {
        res = await fetch(`${API_BASE}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: prompt,
                user_api_key: userApiKey || null
            })
        });
    } catch (networkErr) {
        // The backend isn't reachable — most common cause during dev
        throw new Error(
            'Cannot reach the backend. Is it running? ' +
            `Start it with: cd backend && uvicorn main:app --reload --port 3001`
        );
    }

    if (!res.ok) {
        let detail = `HTTP ${res.status}`;
        try {
            const errJson = await res.json();
            detail = errJson.detail || detail;
        } catch { /* response wasn't JSON, keep generic detail */ }

        if (res.status === 429) {
            throw new Error(detail);  // already user-friendly from backend
        }
        if (res.status === 503) {
            throw new Error('AI service unavailable. ' + detail);
        }
        throw new Error(`Backend error: ${detail}`);
    }

    const data = await res.json();
    return {
        response: data.response || 'No response received.',
        used_demo_key: !!data.used_demo_key,
        demo_calls_remaining: typeof data.demo_calls_remaining === 'number'
            ? data.demo_calls_remaining : -1
    };
}


/* ════════════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════════════ */

function blInit() {
    // Set up editor with default file
    const editor = document.getElementById('blEditor');
    if (editor) editor.value = blFiles[blCurrentFile];

    // Run preview once on load
    blRunPreview();

    // Load saved API key config
    blLoadKeyConfig();

    // Initial unlock check
    blCheckUnlock();

    // Poll for unlock state changes
    setInterval(blCheckUnlock, 1500);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', blInit);
} else {
    blInit();
}


/* ════════════════════════════════════════════════════════════════
   RESUME DOWNLOAD — PDF (html2pdf.js) + DOCX (docx library)

   • PDF: Renders the on-screen resume preview to PDF, looks identical
     to what the user sees. Includes proper page sizing for letter-size.
   • DOCX: Builds a real Word document from rbState. Editable in Word,
     Google Docs, or LibreOffice. Won't pixel-match the preview because
     Word's formatting model differs from CSS.
   ════════════════════════════════════════════════════════════════ */

function rbGetFilenameBase() {
    const name = (rbState.name || 'Resume').trim();
    const cleaned = name.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');
    return cleaned + '-Resume';
}

function rbDownloadPDF() {
    /* ═══════════════════════════════════════════════════════════════════
       PDF generation via NEW WINDOW (the "Next Chapter" pattern)

       Why this approach (after html2pdf.js failed twice with blank output):
         • Opens a fresh window with its own document — no CSS conflicts,
           no @media print collisions, no html2canvas rasterization issues
         • The new window loads resume-print.css (separate file) which
           defines a clean letter-paper layout
         • User clicks "Print / Save as PDF" in the new window's toolbar →
           browser's native print dialog handles the actual PDF generation
         • Browser's print engine is the most reliable HTML→PDF path that
           exists; it produces selectable text-based PDFs (good for ATS)

       Architecture:
         1. Grab the already-rendered resume HTML from #rbResumeOutput
         2. window.open() a blank tab — MUST happen synchronously inside
            the click handler or popup blockers will eat it
         3. document.write() the new window's HTML: links resume-print.css,
            includes the toolbar, embeds the resume HTML
         4. The new window's toolbar buttons handle print + close + copy
       ═══════════════════════════════════════════════════════════════════ */

    const resumeEl = document.getElementById('rbResumeOutput');
    if (!resumeEl) return;

    // Refresh content from rbState into the DOM, then snapshot the HTML
    rbUpdate();
    const resumeHTML = resumeEl.innerHTML;
    const filename = rbGetFilenameBase();

    // Open the new window SYNCHRONOUSLY (critical for popup blockers)
    const printWin = window.open('', '_blank', 'width=900,height=1000');

    if (!printWin) {
        alert('Pop-up blocked. Please allow pop-ups for this site, then try again.');
        return;
    }

    // Plain-text version of the resume — used by the "Copy as Text" button
    const plainText = rbBuildPlainTextResume();

    // Build the full HTML document for the new window
    // Note: we link to resume-print.css (separate file) rather than inline
    // styles. The toolbar buttons use addEventListener (no inline onclick).
    const html = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '  <meta charset="UTF-8">\n' +
        '  <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
        '  <title>' + rbEscapeHtml(filename) + '</title>\n' +
        '  <link rel="stylesheet" href="resume-print.css">\n' +
        '</head>\n' +
        '<body>\n' +
        '  <div class="print-toolbar">\n' +
        '    <h1>📄 ' + rbEscapeHtml(filename) + '</h1>\n' +
        '    <button type="button" id="printBtn" class="print-btn print-btn-primary">🖨️ Print / Save as PDF</button>\n' +
        '    <button type="button" id="copyBtn" class="print-btn print-btn-secondary">📋 Copy as Text</button>\n' +
        '    <button type="button" id="closeBtn" class="print-btn print-btn-secondary">✕ Close</button>\n' +
        '    <span class="print-hint">Tip: choose "Save as PDF" in the print dialog\'s destination dropdown</span>\n' +
        '  </div>\n' +
        '  <article class="rb-resume">' + resumeHTML + '</article>\n' +
        '  <div id="toast" class="print-toast">Copied to clipboard</div>\n' +
        '  <script>\n' +
        '    // Plain-text resume payload, escaped for safe insertion into a JS string\n' +
        '    const plainText = ' + JSON.stringify(plainText) + ';\n' +
        '    document.getElementById("printBtn").addEventListener("click", () => window.print());\n' +
        '    document.getElementById("closeBtn").addEventListener("click", () => window.close());\n' +
        '    document.getElementById("copyBtn").addEventListener("click", async () => {\n' +
        '      const toast = document.getElementById("toast");\n' +
        '      try {\n' +
        '        await navigator.clipboard.writeText(plainText);\n' +
        '        toast.textContent = "✓ Copied to clipboard";\n' +
        '      } catch (err) {\n' +
        '        toast.textContent = "Could not copy — try selecting and pressing Cmd+C";\n' +
        '      }\n' +
        '      toast.classList.add("show");\n' +
        '      setTimeout(() => toast.classList.remove("show"), 2200);\n' +
        '    });\n' +
        '  </script>\n' +
        '</body>\n' +
        '</html>';

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
}

/* ═══════════════════════════════════════════════════════════════════
   rbEditInNewWindow()
   Opens the resume in a new browser window with contenteditable="true"
   on every editable section. User can tweak text in-browser, then:
     • Print/Save as PDF from the toolbar
     • Copy as Text (clean ASCII version, rebuilt from edited DOM)
     • Manually select + copy to paste into Word with formatting

   Honest UX trade-off documented in the banner: edits made in the
   new window do NOT sync back to the Code Ranger resume builder.
   For permanent changes, the user must edit in Code Ranger's form.
   ═══════════════════════════════════════════════════════════════════ */
function rbEditInNewWindow() {
    const resumeEl = document.getElementById('rbResumeOutput');
    if (!resumeEl) return;

    rbUpdate();
    const resumeHTML = resumeEl.innerHTML;
    const filename = rbGetFilenameBase();

    // Open synchronously inside the click handler to dodge popup blockers
    const editWin = window.open('', '_blank', 'width=900,height=1000');
    if (!editWin) {
        alert('Pop-up blocked. Please allow pop-ups for this site, then try again.');
        return;
    }

    // Build the editable HTML — same structure as rbRenderResume produces,
    // but with contenteditable="true" attributes on each editable region.
    // We do this by post-processing the snapshot HTML: add contenteditable
    // to the section classes we know are user content.
    const editableHTML = resumeHTML
        .replace(/<div class="rb-resume-name"/g, '<div contenteditable="true" class="rb-resume-name"')
        .replace(/<div class="rb-resume-contact"/g, '<div contenteditable="true" class="rb-resume-contact"')
        .replace(/<p class="rb-resume-summary"/g, '<p contenteditable="true" class="rb-resume-summary"')
        .replace(/<span class="rb-skill-list"/g, '<span contenteditable="true" class="rb-skill-list"')
        .replace(/<div class="rb-resume-item-title"/g, '<div contenteditable="true" class="rb-resume-item-title"')
        .replace(/<div class="rb-resume-item-meta"/g, '<div contenteditable="true" class="rb-resume-item-meta"')
        .replace(/<div class="rb-resume-item-org"/g, '<div contenteditable="true" class="rb-resume-item-org"')
        .replace(/<ul class="rb-resume-bullets"/g, '<ul contenteditable="true" class="rb-resume-bullets"');

    const html = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '  <meta charset="UTF-8">\n' +
        '  <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
        '  <title>Editing — ' + rbEscapeHtml(filename) + '</title>\n' +
        '  <link rel="stylesheet" href="resume-print.css">\n' +
        '</head>\n' +
        '<body class="edit-mode">\n' +
        '  <div class="print-toolbar">\n' +
        '    <h1>✏️ Editing — ' + rbEscapeHtml(filename) + '</h1>\n' +
        '    <button type="button" id="printBtn" class="print-btn print-btn-primary">🖨️ Print / Save as PDF</button>\n' +
        '    <button type="button" id="copyBtn" class="print-btn print-btn-secondary">📋 Copy as Text</button>\n' +
        '    <button type="button" id="selectBtn" class="print-btn print-btn-secondary">📑 Select All</button>\n' +
        '    <button type="button" id="closeBtn" class="print-btn print-btn-secondary">✕ Close</button>\n' +
        '  </div>\n' +
        '  <div class="edit-banner">\n' +
        '    <strong>📝 You\'re editing a copy.</strong> Click any underlined area to edit it. Changes here do NOT sync back to Code Ranger \u2014 for permanent edits, update the form on the main page. From here you can: Print to PDF, Copy as Text, or Select All \u2192 copy \u2192 paste into Word (formatting mostly preserved).\n' +
        '  </div>\n' +
        '  <article class="rb-resume">' + editableHTML + '</article>\n' +
        '  <div id="toast" class="print-toast">Done</div>\n' +
        '  <script>\n' +
        '    document.getElementById("printBtn").addEventListener("click", () => window.print());\n' +
        '    document.getElementById("closeBtn").addEventListener("click", () => window.close());\n' +
        '\n' +
        '    // Select All — selects the entire resume so user can Cmd+C to copy\n' +
        '    document.getElementById("selectBtn").addEventListener("click", () => {\n' +
        '      const resume = document.querySelector(".rb-resume");\n' +
        '      if (!resume) return;\n' +
        '      const range = document.createRange();\n' +
        '      range.selectNodeContents(resume);\n' +
        '      const sel = window.getSelection();\n' +
        '      sel.removeAllRanges();\n' +
        '      sel.addRange(range);\n' +
        '      showToast("Selected \u2014 press " + (navigator.platform.includes("Mac") ? "Cmd+C" : "Ctrl+C") + " to copy with formatting");\n' +
        '    });\n' +
        '\n' +
        '    // Copy as Text \u2014 rebuilds plain-text version from the EDITED DOM\n' +
        '    // (not from rbState, so it reflects user\'s edits)\n' +
        '    document.getElementById("copyBtn").addEventListener("click", async () => {\n' +
        '      const text = buildPlainTextFromDOM();\n' +
        '      try {\n' +
        '        await navigator.clipboard.writeText(text);\n' +
        '        showToast("\u2713 Copied to clipboard");\n' +
        '      } catch (err) {\n' +
        '        showToast("Could not copy \u2014 try Select All instead");\n' +
        '      }\n' +
        '    });\n' +
        '\n' +
        '    function showToast(msg) {\n' +
        '      const toast = document.getElementById("toast");\n' +
        '      toast.textContent = msg;\n' +
        '      toast.classList.add("show");\n' +
        '      setTimeout(() => toast.classList.remove("show"), 2400);\n' +
        '    }\n' +
        '\n' +
        '    // Walk the resume DOM and turn it into clean ASCII text\n' +
        '    function buildPlainTextFromDOM() {\n' +
        '      const lines = [];\n' +
        '      const name = document.querySelector(".rb-resume-name");\n' +
        '      const contact = document.querySelector(".rb-resume-contact");\n' +
        '      if (name) lines.push(name.textContent.trim().toUpperCase());\n' +
        '      if (contact) lines.push(contact.textContent.trim().replace(/\\s+/g, " "));\n' +
        '      lines.push("");\n' +
        '\n' +
        '      const sections = document.querySelectorAll(".rb-resume-section");\n' +
        '      sections.forEach(sec => {\n' +
        '        const label = sec.querySelector(".rb-resume-section-label");\n' +
        '        if (label) {\n' +
        '          const labelText = label.textContent.trim().toUpperCase();\n' +
        '          lines.push(labelText);\n' +
        '          lines.push("-".repeat(labelText.length));\n' +
        '        }\n' +
        '\n' +
        '        // Summary paragraph\n' +
        '        const summary = sec.querySelector(".rb-resume-summary");\n' +
        '        if (summary) lines.push(summary.textContent.trim());\n' +
        '\n' +
        '        // Skill rows\n' +
        '        sec.querySelectorAll(".rb-skill-row").forEach(row => {\n' +
        '          const cat = row.querySelector(".rb-skill-cat");\n' +
        '          const list = row.querySelector(".rb-skill-list");\n' +
        '          if (cat && list) lines.push(cat.textContent.trim() + ": " + list.textContent.trim());\n' +
        '        });\n' +
        '\n' +
        '        // Experience / project / education items\n' +
        '        sec.querySelectorAll(".rb-resume-item").forEach(item => {\n' +
        '          const title = item.querySelector(".rb-resume-item-title");\n' +
        '          const meta = item.querySelector(".rb-resume-item-meta");\n' +
        '          const org = item.querySelector(".rb-resume-item-org");\n' +
        '          const head = [title ? title.textContent.trim() : "", meta ? meta.textContent.trim() : ""]\n' +
        '            .filter(Boolean).join("  \u2014  ");\n' +
        '          if (head) lines.push(head);\n' +
        '          if (org) lines.push(org.textContent.trim());\n' +
        '          item.querySelectorAll(".rb-resume-bullets li").forEach(li => {\n' +
        '            lines.push("  \u2022 " + li.textContent.trim());\n' +
        '          });\n' +
        '          lines.push("");\n' +
        '        });\n' +
        '\n' +
        '        lines.push("");\n' +
        '      });\n' +
        '\n' +
        '      return lines.join("\\n").replace(/\\n{3,}/g, "\\n\\n").trim();\n' +
        '    }\n' +
        '  </script>\n' +
        '</body>\n' +
        '</html>';

    editWin.document.open();
    editWin.document.write(html);
    editWin.document.close();
}

/* ═══════════════════════════════════════════════════════════════════
   rbBuildPlainTextResume()
   Returns the resume as clean ASCII for pasting into LinkedIn, email,
   application forms, etc. Used by the "Copy as Text" button.
   ═══════════════════════════════════════════════════════════════════ */
function rbBuildPlainTextResume() {
    const lines = [];

    // Header
    lines.push((rbState.name || 'Your Name').toUpperCase());
    const contactBits = [rbState.email, rbState.phone, rbState.github].filter(Boolean);
    if (contactBits.length) lines.push(contactBits.join(' · '));
    lines.push('');

    // Summary
    if (rbState.summary) {
        lines.push('SUMMARY');
        lines.push('-------');
        lines.push(rbState.summary);
        lines.push('');
    }

    // Technical Skills (filtered by 80% mastery)
    const { groups, anyEarned } = rbComputeEarnedSkills();
    if (anyEarned) {
        lines.push('TECHNICAL SKILLS');
        lines.push('----------------');
        const groupOrder = ['Languages', 'Web Technologies', 'Frameworks & Libraries', 'Tools', 'Security', 'Concepts'];
        groupOrder.forEach(g => {
            if (groups[g] && groups[g].length) {
                lines.push(g + ': ' + groups[g].join(', '));
            }
        });
        lines.push('');
    }

    // Projects
    const realProjects = rbState.projects.filter(p => p.tools || p.url || p.bullets);
    if (realProjects.length) {
        lines.push('PROJECTS');
        lines.push('--------');
        realProjects.forEach(p => {
            const head = (p.url || 'Project') + (p.tools ? '  —  ' + p.tools : '');
            lines.push(head);
            (p.bullets || '').split('\n').filter(line => line.trim()).forEach(line => {
                lines.push('  • ' + line.trim());
            });
            lines.push('');
        });
    }

    // Experience
    const realExperience = rbState.experience.filter(e => e.title || e.org || e.bullets);
    if (realExperience.length) {
        lines.push('EXPERIENCE');
        lines.push('----------');
        realExperience.forEach(e => {
            const head = (e.title || '') + (e.date ? '  —  ' + e.date : '');
            lines.push(head);
            if (e.org) lines.push(e.org);
            (e.bullets || '').split('\n').filter(line => line.trim()).forEach(line => {
                lines.push('  • ' + line.trim());
            });
            lines.push('');
        });
    }

    // Education
    const realEducation = rbState.education.filter(e => e.name);
    if (realEducation.length) {
        lines.push('EDUCATION & CERTIFICATIONS');
        lines.push('--------------------------');
        realEducation.forEach(e => {
            lines.push((e.name || '') + (e.date ? '  —  ' + e.date : ''));
        });
        lines.push('');
    }

    return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

/* ═══════════════════════════════════════════════════════════════════
   rbCopyAsText()
   Copies the plain-text resume to the clipboard from the MAIN window
   (separate from the print window's copy button). Wired to the
   "📋 Copy as Text" button in the resume builder toolbar.
   ═══════════════════════════════════════════════════════════════════ */
function rbCopyAsText() {
    rbUpdate();
    const text = rbBuildPlainTextResume();
    const btns = document.querySelectorAll('.rb-dl-btn');
    const targetBtn = Array.from(btns).find(b => b.textContent.includes('Copy'));

    const showStatus = (msg) => {
        if (targetBtn) {
            const original = targetBtn.textContent;
            targetBtn.textContent = msg;
            setTimeout(() => { targetBtn.textContent = original; }, 1800);
        }
    };

    navigator.clipboard.writeText(text)
        .then(() => showStatus('✓ Copied!'))
        .catch(() => showStatus('⚠ Copy failed'));
}
