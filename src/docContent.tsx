const docContent = {
    title: "Epoxy",
    version: "version 0.1.16",
    sections: [
        {
            id: "introduction",
            title: "Introduction",
            content: (
                <>
                    <p className="mb-4 leading-loose">
                        Epoxy is a modern hybrid programming language designed to make programming
                        more intuitive and expressive. It bridges the gap between human-readable,
                        non-programmer-friendly syntax and the JavaScript ecosystem.
                    </p>
                    <p className="mb-4 leading-loose">
                        Epoxy is readable, concise, clean and powerful. Its human friendly syntax makes
                        code read almost like natural language. While you may write slightly more verbose code compared to
                        traditional languages, this verbosity dramatically improves code comprehension, making it ideal for
                        beginners learning to program and for teams conducting code reviews.
                    </p>
                    <p className="mb-4 leading-loose">
                        The <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5] ml-1 mr-1">@js</code> hybrid
                        feature enables seamless JavaScript interoperability, allowing you to easily embed raw JavaScript code
                        anywhere when needed. Codes writen in Epoxy compiles efficiently to JavaScript
                        and runs on Node.js.
                    </p>
                    <div className="mt-2 items-center flex inline-flex bg-green-50 border-l-4 border-green-400 p-4 space-x-4">
                        <img className="w-1/8" src="/kjgk.png" />
                        <p className="text-base font-medium text-gray-700 tracking-wide">
                            <strong>Philosophy:</strong> Epoxy prioritizes clarity over brevity. Code is read far more
                            often than it is written, so Epoxy's explicit syntax ensures that anyone, from beginners to
                            experienced developers, can understand your code at a glance.
                        </p>
                    </div>

                </>
            )
        },
        {
            id: "installation",
            title: "Getting Started",
            content: (
                <>
                    <h3 className="text-xl italic font-medium mb-4">Installation</h3>
                    <p className="mb-4">Install Epoxy globally via npm:</p>
                    <pre><code className="language-properties bg-[#f4f1ea] border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 overflow-x-auto">
                        npm install -g epoxylang
                    </code></pre>

                    <h3 className="text-xl italic font-medium mb-4 mt-8">Your First Program</h3>
                    <p className="mb-4">Create a file named <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">hello.epx</code>:</p>
                    <pre><code className="language-epoxy bg-[#f4f1ea] border border-[#e5e0d5] rounded px-4 py-3 mb-4 font-mono text-sm text-gray-700 whitespace-pre">
                        {`assign name = "World";
show "Hello, " + name + "!";`}
                    </code></pre>
                    <p className="mb-4">Run it with:</p>
                    <pre><code className="language-properties bg-[#f4f1ea] border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 overflow-x-auto">
                        epoxy hello.epx
                    </code></pre>
                </>
            )
        },
        {
            id: "variables",
            title: "Variables & Types",
            content: (
                <>
                    <h3 className="text-xl italic font-medium mb-4">Variable Declaration</h3>
                    <p className="mb-4">
                        Epoxy uses descriptive keywords for variable declarations that clearly express scope and mutability.
                        Each keyword combination tells you exactly how a variable behaves:
                    </p>

                    <p className="mb-1"><strong>- Scope:</strong> <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">assign</code> = local (function/block level), <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">all assign</code> = global (entire program)</p>
                    <p className="mb-4"><strong>- Mutability:</strong> <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">assign</code> = mutable - value can be changed using <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">update</code> , <br /> ‎ ‎  <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">fix assign</code> = immutable (constant)</p>

                    {/* <p className="mb-4"><strong>- String Interpolation:</strong> <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">store</code> = supports <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">[variable]</code> syntax inside backticks</p> */}


                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`$ Basic Variables (local, mutable)
assign name = "Satya";
assign age = 18;
update age = 19;   $ Allowed: mutable variable

$ Global Variables (accessible everywhere, mutable)
all assign counter = 0;
all assign appName = "MyApp";
update counter = counter + 1;   $ Allowed: global mutable variable

$ Constants (local, immutable)
fix assign PI = 3.14159;
fix assign MAX_USERS = 100;

$ update PI = 3.14;   ✗ Error: cannot update immutable variable
`}
                    </code></pre>

                    <p className="mb-4">
                        The explicit keywords make code self-documenting. When you see <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">fix assign</code> , you immediately
                        know it's a constant. When you see <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">all assign</code> ,
                        you know it's global. No guessing, no confusion during code reviews!
                    </p>

                    <h3 className="text-xl italic font-medium mb-4 mt-8">String Interpolation</h3>

                    <p className="mb-4">
                        Epoxy features powerful string interpolation using backticks and square brackets. String interpolation variables must be declared using the <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">store</code> keyword.

                    </p>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`assign name = "Alice";
assign age = 25;
assign score = 95.5;

$ Use backticks and [variable] for interpolation
store message = \`Hello, [name]! You are [age] years old.\`;
show message;

$ Interpolation with expressions
store result = \`Your score is [score] out of 100.\`;
show result;

$ Multiple variables
assign x = 10;
assign y = 20;
store sum = \`The sum of [x] and [y] is [x + y].\`;
show sum;  $ "The sum of 10 and 20 is 30."`}
                    </code></pre>

                    <h3 className="text-xl italic font-medium mb-4 mt-8">Data Types</h3>
                    <p className="mb-4">All variables in Epoxy can be explicitly typed using the <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">as</code> keyword.</p>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`$ int - Integer numbers
assign count as int = 42;

$ double - Floating-point numbers
assign price as double = 19.99;

$ string - Text
assign greeting as string = "Hello";

$ bool - Boolean
assign isActive as bool = true;

$ array - Collections
assign numbers as array = {1, 2, 3, 4, 5};
assign names as array = {"Alice", "Bob", "Charlie"};
`}
                    </code></pre>
                </>
            )
        },
        {
            id: "operators",
            title: "Operators",
            content: (
                <>
                    <h3 className="text-xl italic font-medium mb-4">Arithmetic Operators</h3>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`assign sum = 10 + 5;        $ Addition
assign diff = 10 - 5;       $ Subtraction
assign product = 10 * 5;    $ Multiplication
assign quotient = 10 / 5;   $ Division
assign remainder = 17 % 5;  $ Modulo (returns 2)`}
                    </code></pre>

                    <h3 className="text-xl italic font-medium mb-4 mt-8">Comparison Operators</h3>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`assign isEqual = 5 == 5;        $ Equal to
assign isStrictEqual = 5 === 5; $ Strict equal
assign isNotEqual = 5 != 3;     $ Not equal
assign isGreater = 10 > 5;      $ Greater than
assign isLess = 5 < 10;         $ Less than
assign isGTE = 10 >= 10;        $ Greater than or equal
assign isLTE = 5 <= 10;         $ Less than or equal`}
                    </code></pre>

                    <h3 className="text-xl italic font-medium mb-4 mt-8">Logical Operators</h3>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`assign bothTrue = true && true;   $ AND
assign eitherTrue = true || false; $ OR`}
                    </code></pre>
                </>
            )
        },
        {
            id: "control-flow",
            title: "Control Flow",
            content: (
                <>
                    <h3 className="text-xl italic font-medium mb-4">Conditional Statements</h3>
                    <p className="mb-4">
                        Use <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">check</code> for if statements
                        and <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5] ml-1">alt</code> for else:
                    </p>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`assign age = 18;

check[age >= 18]{
    show "You are an adult";
}
alt {
    show "You are a minor";
}

$ Nested conditions
assign score = 85;
check[score >= 90]{
    show "Grade: A";
}
alt {
    check[score >= 80]{
        show "Grade: B";
    }
    alt {
        show "Grade: C or below";
    }
}`}
                    </code></pre>
                </>
            )
        },
        {
            id: "loops",
            title: "Loops",
            content: (
                <>
                    <h3 className="text-xl italic font-medium mb-4">Repeat Loop (For Loop)</h3>
                    <p className="mb-4">
                        The <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">repeat</code> keyword
                        creates loops with various patterns:
                    </p>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`$ Range loop: from 0 to 9 with step 1
repeat[i in 0 to 9, 1]{
    show i;
}

$ Iterate over array
assign fruits = {"apple", "banana", "orange"};
repeat[fruit in fruits]{
    show fruit;
}

$ Iterate with index
assign numbers = {10, 20, 30};
repeat[i in numbers]{
    assign num = numbers{i};
    show \`Index [i]: [num]\`;
}`}
                    </code></pre>

                    <h3 className="text-xl italic font-medium mb-4 mt-8">While Loop</h3>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`assign count = 0;
repeat until[count >= 5]{
    show count;
    update count = count + 1;
}`}
                    </code></pre>

                    <h3 className="text-xl italic font-medium mb-4 mt-8">Loop Control</h3>
                    <p className="mb-4">
                        Use <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">skip</code> (continue)
                        and <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5] ml-1">halt</code> (break):
                    </p>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`$ Skip even numbers
repeat[i in 0 to 10, 1]{
    check[i % 2 == 0]{
        skip;  $ Continue to next iteration
    }
    show \`Odd number: [i]\`;
}

$ Stop at 7
repeat[i in 0 to 100, 1]{
    check[i == 7]{
        halt;  $ Break out of loop
    }
    show i;
}`}
                    </code></pre>
                </>
            )
        },
        {
            id: "functions",
            title: "Functions",
            content: (
                <>
                    <h3 className="text-xl italic font-medium mb-4">Function Definition</h3>
                    <p className="mb-4">
                        Define functions using the <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">make</code> keyword:
                    </p>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`$ Basic function
make greet[name]{
    show "Hello, " + name + "!";
}

$ Function with return value
make add[a, b]{
    give a + b;  $ 'give' returns a value
}

$ Using functions
call greet["Alice"];
assign result as int = call add[5, 3];
show result;  $ Outputs: 8`}
                    </code></pre>
                </>
            )
        },
        {
            id: "methods",
            title: "Built-in Methods",
            content: (
                <>
                    <h3 className="text-xl italic font-medium mb-4">Array Methods</h3>
                    <p className="mb-4">
                        Epoxy provides powerful built-in methods for arrays using the
                        <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5] ml-1">method:array</code> syntax:
                    </p>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`assign numbers = {1, 2, 3, 4, 5};

$ append - Add element to end
method:array numbers.append[6];

$ includes - Check if element exists
assign hasThree = method:array numbers.includes[3];

$ filter - Filter elements
assign evens = method:array numbers.filter[call [x] -> x % 2 == 0];

$ map - Transform elements
assign squared = method:array numbers.map[call [x] -> x * x];

$ join - Convert to string
assign str = method:array numbers.join[", "];

$ slice - Get subset (Python-style)
assign reversed = method:array numbers.slice["::-1"];
assign everySecond = method:array numbers.slice["::2"];
assign range = method:array numbers.slice["2:5"];`}
                    </code></pre>

                    <h3 className="text-xl italic font-medium mb-4 mt-8">String Methods</h3>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`assign text = "Hello World";

$ upper - Convert to uppercase
assign upper = method:string text.upper[];

$ lower - Convert to lowercase
assign lower = method:string text.lower[];

$ size - Get length
assign length = method:string text.size[];

$ replace - Replace substring
assign replaced = method:string text.replace["World", "Epoxy"];

show replaced;  $ "Hello Epoxy"`}
                    </code></pre>
                </>
            )
        },
        {
            id: "hybrid",
            title: "Hybrid JavaScript",
            content: (
                <>
                    <p className="mb-4">
                        One of Epoxy's most powerful features is the ability to embed raw JavaScript code
                        using the <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">@js</code> directive:
                    </p>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`$ Embed JavaScript code between :~ and ~:
@js :~
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", randomNum);
~:

$ Use JavaScript alongside Epoxy
assign numbers = {2, 4, 6, 8, 10};
repeat[i in numbers]{
    assign n = numbers{i};
    @js :~
    if(n % 2 == 0){
        console.log(n + " is even");
    }
    ~:
}`}
                    </code></pre>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                        <p className="text-sm text-gray-700 tracking-wide">
                            <strong>Pro Tip:</strong> The hybrid feature allows you to leverage the entire
                            JS ecosystem while writing in Epoxy's clean syntax. Use it for complex
                            operations, library integrations, or when you need JS specific features.
                        </p>
                    </div>
                </>
            )
        },
        {
            id: "io",
            title: "Input & Output",
            content: (
                <>
                    <h3 className="text-xl italic font-medium mb-4">Output</h3>
                    <p className="mb-4">
                        Use <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">show</code> to
                        display output:
                    </p>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`show "Hello, World!";
show 42;
show true;

assign name = "Alice";
show "Welcome, " + name;`}
                    </code></pre>

                    <h3 className="text-xl italic font-medium mb-4 mt-8">Input</h3>
                    <p className="mb-4">
                        Use <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">:input</code> to
                        read user input:
                    </p>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`show "What is your name?";
assign name = :input;
show "Hello, " + name + "!";

$ Input in loops
assign numbers as array = {};
repeat[i in 0 to 4, 1]{
    show "Enter a number: ";
    assign num = :input;
    method:array numbers.append[num];
}
show "You entered: " + numbers;`}
                    </code></pre>
                </>
            )
        },
        {
            id: "errors",
            title: "Error Handling",
            content: (
                <>
                    <p className="mb-4">
                        Epoxy provides two keywords for error handling:
                    </p>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre">
                        {`$ error - Display error and exit
assign age = -5;
check[age < 0]{
    error "Age cannot be negative!";
}

$ snafu - Display warning (continues execution)
assign guess = 150;
check[guess > 100]{
    snafu "Warning: Number is too high!";
}

$ Practical example
assign attempts = 0;
assign maxAttempts = 3;
repeat until[attempts >= maxAttempts]{
    assign password = :input;
    check[password == "secret123"]{
        show "Access granted!";
        halt;
    }
    alt {
        update attempts = attempts + 1;
        snafu "Incorrect password. Try again.";
    }
}
check[attempts >= maxAttempts]{
    error "Too many failed attempts!";
}`}
                    </code></pre>
                </>
            )
        },
        {
            id: "examples",
            title: "Complete Examples",
            content: (
                <>
                    <h3 className="text-xl italic font-medium mb-4">Number Guessing Game</h3>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-8 font-mono text-sm text-gray-700 whitespace-pre overflow-x-auto">
                        {`all assign guessed as int;
all assign guessed_num as array = {};
@js :~
let randnum = Math.floor(Math.random() * 99) + 1;
~:
all assign tries = 0;
all assign numberoftries = 5;
all assign guessed_right = false;

repeat until[tries >= numberoftries]{
    update guessed = :input;
    check[method:array guessed_num.includes[guessed]]{
        snafu "You already guessed this number";
        skip;
    }
    method:array guessed_num.append[guessed];
    update tries = tries + 1;
    
    check[guessed != randnum]{
        check[guessed > randnum]{
            snafu "You guessed high";
            show "Tries left: " + (numberoftries - tries);
        }
        alt {
            snafu "You guessed low";
            show "Tries left: " + (numberoftries - tries);
        }
    }
    alt {
        update guessed_right = true;
        store msg = \`You guessed it right in [tries] moves!\`;
        assign upmsg = method:string msg.upper[];
        show upmsg;
        halt;
    }
}

check[guessed_right == false]{
    show "Game Over!";
    show "The correct number was: " + randnum;
}`}
                    </code></pre>

                    <h3 className="text-xl italic font-medium mb-4">Array Processing</h3>
                    <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 mb-6 font-mono text-sm text-gray-700 whitespace-pre overflow-x-auto">
                        {`assign numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

$ Filter even numbers
assign evens = method:array numbers.filter[call [x] -> x % 2 == 0];
show "Even numbers: " + evens;

$ Double all numbers
assign doubled = method:array numbers.map[call [x] -> x * 2];
show "Doubled: " + doubled;

$ Reverse array
assign reversed = method:array numbers.slice["::-1"];
show "Reversed: " + reversed;`}
                    </code></pre>
                </>
            )
        },
        {
            id: "best-practices",
            title: "Best Practices",
            content: (
                <>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl italic font-medium mb-3">1. Use Descriptive Variable Names</h3>
                            <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 font-mono text-sm text-gray-700 whitespace-pre">
                                {`$ Good
assign userName = "Alice";
assign totalScore = 100;

$ Avoid
assign x = "Alice";
assign t = 100;`}
                            </code></pre>
                        </div>

                        <div>
                            <h3 className="text-xl italic font-medium mb-3">2. Add Comments</h3>
                            <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 font-mono text-sm text-gray-700 whitespace-pre">
                                {`$ Use $ for single-line comments
$ This calculates the user's final score
assign finalScore = baseScore + bonus;`}
                            </code></pre>
                        </div>

                        <div>
                            <h3 className="text-xl italic font-medium mb-3">3. Choose the Right Variable Declaration</h3>
                            <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 font-mono text-sm text-gray-700 whitespace-pre">
                                {`$ Use 'assign' for local mutable variables
assign counter = 0;

$ Use 'fix assign' for constants
fix assign MAX_ATTEMPTS = 5;

$ Use 'all assign' sparingly for globals
all assign gameState = "playing";

$ Use 'store' for string interpolation
store message = \`Score: [counter]\`;`}
                            </code></pre>
                        </div>

                        <div>
                            <h3 className="text-xl italic font-medium mb-3">4. Leverage Built-in Methods</h3>
                            <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 font-mono text-sm text-gray-700 whitespace-pre">
                                {`$ Instead of manual loops, use array methods
assign numbers = {1, 2, 3, 4, 5};
assign evens = method:array numbers.filter[call [x] -> x % 2 == 0];`}
                            </code></pre>
                        </div>

                        <div>
                            <h3 className="text-xl italic font-medium mb-3">5. Use Hybrid JavaScript Wisely</h3>
                            <pre><code className="language-epoxy border border-[#e5e0d5] rounded px-4 py-3 font-mono text-sm text-gray-700 whitespace-pre">
                                {`$ Use @js for complex operations or library integrations
@js :~
const complexResult = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
~:

$ Keep most logic in Epoxy for readability`}
                            </code></pre>
                        </div>
                    </div>
                </>
            )
        }
    ]
};

export default docContent;