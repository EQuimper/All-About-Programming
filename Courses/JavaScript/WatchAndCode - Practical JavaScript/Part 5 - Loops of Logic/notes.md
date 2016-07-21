### What we do in this part
- .displayTodos should show .todoText
- .displayTodos should tell you if .todos is empty
- .displayTodos should show .completed

#### Little example in plain english

    i = 0 // Initialization
    Say "hey" if i < 3 // Condition
    Increase i by 1 // Final-Expression
    
    0 "hey" => because 0 is minus than 3
    1 "hey" => because 1 is minus than 3
    2 "hey" => because 2 is minus than 3
    
    ```
    for (initialization; condition; final-expressiong {
        console.log("hey");
    }
    ```
That give in JavaCript code
``` javascript
for (var i = 0; i < 3; i++) { // i++ => the same as i = i + 1
    console.log("hey");
}
```

#### Statement
    if (condition) {
        code that runs if condition is true
    } else {
        code that runs if condition is false
    }