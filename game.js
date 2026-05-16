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

];

/* ══════════════════════════════════
   TROPHIES — updated for 500
══════════════════════════════════ */
const TOTAL = 500;
const CATS = ['All','JS Fundamentals','Python','HTML & CSS','Algorithms','String Methods','Array Methods','SQL','React & Async','TypeScript','Git & CLI','Web Security','Node.js','Data Structures','Python Advanced','JS Advanced','CSS Advanced','HTTP & APIs','Testing'];
const CAT_ICONS = {'All':'🎮','JS Fundamentals':'⚡','Python':'🐍','HTML & CSS':'🎨','Algorithms':'🧩','String Methods':'🔤','Array Methods':'📦','SQL':'🗄️','React & Async':'⚛️','TypeScript':'🔷','Git & CLI':'🌿','Web Security':'🔒','Node.js':'🟢','Data Structures':'🏗️','Python Advanced':'🐍✨','JS Advanced':'⚡✨','CSS Advanced':'🎨✨','HTTP & APIs':'🌐','Testing':'🧪'};

const WIN_TROPHIES=[
  {id:"w3",e:"🐉",n:"Green Dragon",d:"Solve 3 challenges",t:3,c:"#34A853"},
  {id:"w5",e:"🐉",n:"Blue Dragon",d:"Solve 5 challenges",t:5,c:"#4285F4",hue:120},
  {id:"w25",e:"🐉",n:"Red Dragon",d:"Solve 25 challenges",t:25,c:"#EA4335",hue:240},
  {id:"w50",e:"🐉",n:"Gold Dragon",d:"Solve 50 challenges",t:50,c:"#FBBC04",hue:300},
  {id:"w100",e:"🥉",n:"Bronze Medal",d:"Solve 100 challenges",t:100,c:"#CD7F32"},
  {id:"w150",e:"🥈",n:"Silver Medal",d:"Solve 150 challenges",t:150,c:"#C0C0C0"},
  {id:"w200",e:"🥇",n:"Gold Medal",d:"Solve 200 challenges",t:200,c:"#FFD700"},
  {id:"w300",e:"🏆",n:"Large Trophy",d:"Solve 300 challenges",t:300,c:"#f59e0b"},
  {id:"w400",e:"💎",n:"Diamond",d:"Solve 400 challenges",t:400,c:"#67e8f9"},
  {id:"w500",e:"👑",n:"Champion",d:"Solve ALL 500!",t:500,c:"#FBBC04"},
];
const CAT_TROPHIES=[
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
}
function resetProgress(){
  if(!confirm('Reset all progress? This clears your score, solved challenges, and trophies. This cannot be undone.')) return;
  ['dp4_sc','dp4_sv','dp4_hu','dp4_ea','dp4_log'].forEach(k=>localStorage.removeItem(k));
  score=0; solved=new Set(); hintUsed=new Set(); earned=new Set();
  completedLog=[]; codeCache={}; optionShuffles={}; idx=0;
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
  const isEasy=ch.options!==undefined;
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
  if(!isEasy) document.getElementById('codeArea').addEventListener('input',e=>{codeCache[ch.id]=e.target.value;});
  else {
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
function submitCode(){
  const fc=getFiltered();const ch=fc[idx];
  if(!document.getElementById('codeArea'))return;
  const{passed,total,res}=runTests(document.getElementById('codeArea').value,ch);
  showOutput(res,passed,total,true);
  if(passed===total&&!solved.has(ch.id)){
    const pts=hintUsed.has(ch.id)?60:100;markSolved(pts);showMsg(`✅ +${pts} pts`,'ok');
  } else if(passed!==total){showMsg(`❌ ${passed}/${total} — keep trying!`,'no');}
}
function markSolved(pts){
  const fc=getFiltered();const ch=fc[idx];
  score+=pts;solved.add(ch.id);
  completedLog.push({id:ch.id,title:ch.title,diff:ch.diff,cat:ch.cat,pts,time:Date.now()});
  save();updateHUD();updateScoreWindow();flashNotif(`✅ +${pts}`);checkAllTrophies();buildNav();
}
function resetCode(){
  const fc=getFiltered();const ch=fc[idx];
  document.getElementById('codeArea').value=ch.start;
  codeCache[ch.id]=ch.start;
  document.getElementById('outPanel').innerHTML='<div class="out-lbl">▶ Output</div><div style="color:var(--dim);font-size:11px;font-style:italic">Run to see results…</div>';
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
  WIN_TROPHIES.forEach(t=>{if(!earned.has(t.id)&&wins>=t.t){earned.add(t.id);save();showTrophyToast(t);}});
  CAT_TROPHIES.forEach(t=>{
    const catChs=CHS.filter(c=>c.cat===t.cat).map(c=>c.id);
    if(!earned.has(t.id)&&catChs.every(id=>solved.has(id))){earned.add(t.id);save();showTrophyToast(t);}
  });
  updateHUD();
}
function showTrophyToast(t){
  const tuE=document.getElementById('tuE');
  tuE.textContent=t.e;
  tuE.style.filter=t.hue!==undefined?`hue-rotate(${t.hue}deg) saturate(1.6)`:'';
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
      return`<div class="tr-item ${e?'earned':'locked'}" style="${e?`border-color:${t.c};box-shadow:0 0 10px ${t.c}25`:''}">
        ${e?'<span class="earned-tag">EARNED</span>':''}
        <div class="tr-e" ${t.hue!==undefined?`style="filter:hue-rotate(${t.hue}deg) saturate(1.6)"`:''}>${t.e}</div><div class="tr-n">${t.n}</div><div class="tr-r">${t.d}</div>
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
function init(){load();checkAllTrophies();}
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
      <button class="cap-action-btn green" onclick="window.print()">🖨️ Print / Save PDF</button>
      <button class="cap-action-btn blue"  onclick="closeCert();openShareCard()">📤 Share</button>
    </div>`;

  modal.classList.add('open');
}

function closeCert(ev) {
  if (!ev || ev.target === document.getElementById('certModal'))
    document.getElementById('certModal').classList.remove('open');
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
    title: 'Junior Software Engineer',
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

/* Map a game category to the resume "Languages/Frameworks/etc."
   group it should appear in, and the keyword to add. */
const RB_CATEGORY_MAP = {
    'JS Fundamentals':  { group: 'Languages',    keyword: 'JavaScript' },
    'JS Advanced':      { group: 'Languages',    keyword: 'JavaScript (ES6+)' },
    'Python':           { group: 'Languages',    keyword: 'Python' },
    'Python Advanced':  { group: 'Languages',    keyword: 'Python (advanced)' },
    'TypeScript':       { group: 'Languages',    keyword: 'TypeScript' },
    'SQL':              { group: 'Languages',    keyword: 'SQL' },
    'HTML & CSS':       { group: 'Frameworks',   keyword: 'HTML5 / CSS3' },
    'CSS Advanced':     { group: 'Frameworks',   keyword: 'Advanced CSS / Layouts' },
    'React & Async':    { group: 'Frameworks',   keyword: 'React' },
    'Node.js':          { group: 'Frameworks',   keyword: 'Node.js / Express' },
    'HTTP & APIs':      { group: 'Concepts',     keyword: 'REST APIs, HTTP' },
    'Algorithms':       { group: 'Concepts',     keyword: 'Algorithms' },
    'Data Structures':  { group: 'Concepts',     keyword: 'Data structures' },
    'String Methods':   { group: 'Concepts',     keyword: 'String manipulation' },
    'Array Methods':    { group: 'Concepts',     keyword: 'Array methods (map / filter / reduce)' },
    'Web Security':     { group: 'Security',     keyword: 'OWASP Top 10, secure coding' },
    'Git & CLI':        { group: 'Tools',        keyword: 'Git, GitHub, Linux CLI' },
    'Testing':          { group: 'Tools',        keyword: 'Jest, unit / integration testing' }
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

    const titleEl = document.getElementById('rbTitle');
    if (titleEl) rbState.title = titleEl.value;

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
        const groupOrder = ['Languages', 'Frameworks', 'Tools', 'Security', 'Concepts'];
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
            <div class="rb-resume-title">${rbEscapeHtml(rbState.title) || 'Software Engineer'}</div>
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
    if (typeof html2pdf === 'undefined') {
        alert('PDF library still loading. Wait a moment and try again.');
        return;
    }

    const resumeEl = document.getElementById('rbResumeOutput');
    if (!resumeEl) return;

    rbUpdate();

    const filename = rbGetFilenameBase() + '.pdf';

    const options = {
        margin:       [0.5, 0.5, 0.5, 0.5],
        filename:     filename,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            logging: false
        },
        jsPDF:        {
            unit: 'in',
            format: 'letter',
            orientation: 'portrait'
        },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
    };

    const btns = document.querySelectorAll('.rb-dl-btn');
    btns.forEach(b => b.disabled = true);
    const originalText = btns[0] ? btns[0].textContent : '';
    if (btns[0]) btns[0].textContent = '⏳ Generating PDF...';

    html2pdf()
        .set(options)
        .from(resumeEl)
        .save()
        .then(() => {
            btns.forEach(b => b.disabled = false);
            if (btns[0]) btns[0].textContent = originalText;
        })
        .catch(err => {
            console.error('PDF generation failed:', err);
            alert('Sorry, PDF generation failed. Try refreshing the page.');
            btns.forEach(b => b.disabled = false);
            if (btns[0]) btns[0].textContent = originalText;
        });
}

function rbDownloadDOCX() {
    if (typeof docx === 'undefined') {
        alert('Word library still loading. Wait a moment and try again.');
        return;
    }

    rbUpdate();

    const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle,
            TabStopType, TabStopPosition } = docx;

    const heading = (text) => new Paragraph({
        children: [new TextRun({
            text: text.toUpperCase(),
            bold: true,
            size: 22,
            font: 'Calibri'
        })],
        spacing: { before: 240, after: 80 },
        border: {
            bottom: { color: '1A1A1A', space: 1, style: BorderStyle.SINGLE, size: 8 }
        }
    });

    const body = (text, opts = {}) => new Paragraph({
        children: [new TextRun({
            text: text,
            size: 22,
            font: 'Calibri',
            bold: opts.bold || false,
            italics: opts.italic || false,
            color: opts.color || '1A1A1A'
        })],
        spacing: { after: opts.after != null ? opts.after : 80 },
        alignment: opts.align || AlignmentType.LEFT
    });

    const bullet = (text) => new Paragraph({
        children: [new TextRun({ text: text, size: 22, font: 'Calibri' })],
        bullet: { level: 0 },
        spacing: { after: 40 }
    });

    const children = [];

    // Header — name centered, large
    children.push(new Paragraph({
        children: [new TextRun({
            text: rbState.name || 'Your Name',
            bold: true,
            size: 44,
            font: 'Calibri'
        })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 60 }
    }));

    if (rbState.title) {
        children.push(new Paragraph({
            children: [new TextRun({
                text: rbState.title,
                size: 22,
                font: 'Calibri',
                color: '555555'
            })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 80 }
        }));
    }

    const contactBits = [rbState.email, rbState.phone, rbState.github].filter(Boolean);
    if (contactBits.length) {
        children.push(new Paragraph({
            children: [new TextRun({
                text: contactBits.join('  ·  '),
                size: 20,
                font: 'Calibri',
                color: '555555'
            })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            border: {
                bottom: { color: '1A1A1A', space: 8, style: BorderStyle.SINGLE, size: 12 }
            }
        }));
    }

    if (rbState.summary) {
        children.push(heading('Summary'));
        children.push(body(rbState.summary, { after: 160 }));
    }

    children.push(heading('Technical Skills'));
    const { groups, anyEarned } = rbComputeEarnedSkills();
    if (anyEarned) {
        const groupOrder = ['Languages', 'Frameworks', 'Tools', 'Security', 'Concepts'];
        groupOrder.forEach(g => {
            if (groups[g] && groups[g].length) {
                children.push(new Paragraph({
                    children: [
                        new TextRun({ text: g + ': ', bold: true, size: 22, font: 'Calibri' }),
                        new TextRun({ text: groups[g].join(', '), size: 22, font: 'Calibri' })
                    ],
                    spacing: { after: 60 }
                }));
            }
        });
    } else {
        children.push(body('Skills will appear here as you reach 80% mastery in each category in the Code Ranger game.',
            { italic: true, color: '888888', after: 160 }));
    }

    const realProjects = rbState.projects.filter(p => p.tools || p.url || p.bullets);
    if (realProjects.length) {
        children.push(heading('Projects'));
        realProjects.forEach(p => {
            children.push(new Paragraph({
                children: [
                    new TextRun({ text: p.url || 'Project', bold: true, size: 22, font: 'Calibri' }),
                    new TextRun({ text: '  ' + (p.tools || ''), italics: true, size: 22, font: 'Calibri', color: '555555' })
                ],
                spacing: { after: 40 }
            }));
            (p.bullets || '').split('\n').filter(line => line.trim()).forEach(line => {
                children.push(bullet(line.trim()));
            });
        });
    }

    const realExperience = rbState.experience.filter(e => e.title || e.org || e.bullets);
    if (realExperience.length) {
        children.push(heading('Experience'));
        realExperience.forEach(e => {
            children.push(new Paragraph({
                children: [
                    new TextRun({ text: e.title || '', bold: true, size: 22, font: 'Calibri' }),
                    new TextRun({ text: '\t', size: 22, font: 'Calibri' }),
                    new TextRun({ text: e.date || '', italics: true, size: 22, font: 'Calibri', color: '555555' })
                ],
                tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
                spacing: { after: 20 }
            }));
            if (e.org) {
                children.push(body(e.org, { italic: true, after: 60 }));
            }
            (e.bullets || '').split('\n').filter(line => line.trim()).forEach(line => {
                children.push(bullet(line.trim()));
            });
        });
    }

    const realEducation = rbState.education.filter(e => e.name);
    if (realEducation.length) {
        children.push(heading('Education & Certifications'));
        realEducation.forEach(e => {
            children.push(new Paragraph({
                children: [
                    new TextRun({ text: e.name, bold: true, size: 22, font: 'Calibri' }),
                    new TextRun({ text: '\t', size: 22, font: 'Calibri' }),
                    new TextRun({ text: e.date || '', italics: true, size: 22, font: 'Calibri', color: '555555' })
                ],
                tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
                spacing: { after: 60 }
            }));
        });
    }

    const doc = new Document({
        creator: 'Code Ranger',
        title: rbGetFilenameBase(),
        description: 'Resume generated by Code Ranger',
        sections: [{
            properties: {
                page: { margin: { top: 720, right: 720, bottom: 720, left: 720 } }
            },
            children: children
        }]
    });

    const btns = document.querySelectorAll('.rb-dl-btn');
    btns.forEach(b => b.disabled = true);
    const originalText = btns[1] ? btns[1].textContent : '';
    if (btns[1]) btns[1].textContent = '⏳ Generating Word doc...';

    Packer.toBlob(doc).then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = rbGetFilenameBase() + '.docx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        btns.forEach(b => b.disabled = false);
        if (btns[1]) btns[1].textContent = originalText;
    }).catch(err => {
        console.error('DOCX generation failed:', err);
        alert('Sorry, Word document generation failed. Try refreshing the page.');
        btns.forEach(b => b.disabled = false);
        if (btns[1]) btns[1].textContent = originalText;
    });
}
