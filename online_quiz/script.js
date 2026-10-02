let next = document.getElementById("next")
let options = document.getElementById("options")
let h2 = document.getElementById("h2")
let pre = document.getElementById("pre")
let scorename = document.getElementById("score")
let restart = document.getElementById("restart")
let catagory = document.getElementById("catagory")

let number = 0
let score = 0

options.addEventListener("change", function(){
    next.disabled = false
})

next.addEventListener("click", function(){
    number++
    let selected = document.querySelector('input[name="answer"]:checked');

    if (number === 1){
        if(selected.value === ".py"){
            score++
        }
        console.log(score);
        
        h2.textContent = "2.Which one is mutuble?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="list">List</li>
            <li><input type="radio" name="answer" value="int">Int</li>
            <li><input type="radio" name="answer" value="string">String</li>
            <li><input type="radio" name="answer" value="tuple">Tuple</li>
        `
        pre.hidden = false
        next.disabled = true
    }
    if (number === 2){
        if(selected.value === "list"){
            score++
        }
        console.log(score);
        
        h2.textContent = "3.Which one is immutuble?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="list">List</li>
            <li><input type="radio" name="answer" value="set">Set</li>
            <li><input type="radio" name="answer" value="dict">Dict</li>
            <li><input type="radio" name="answer" value="tuple">Tuple</li>
        `
        next.disabled = true
    }
    if (number === 3){
        if(selected.value === "tuple"){
            score++
        }
        console.log(score);
        
        h2.textContent = "4.Tuple is mutuble or immutuble?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="mutuble">Mutuble</li>
            <li><input type="radio" name="answer" value="immutuble">Imutuble</li>
        `
        next.disabled = true
    }

    if (number === 4){
        if(selected.value === "immutuble"){
            score++
        }
        console.log(score);
        
        h2.textContent = "5. Which keyword is used to define a function in Python?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="function">function</li>
            <li><input type="radio" name="answer" value="define">define</li>
            <li><input type="radio" name="answer" value="def">def</li>
            <li><input type="radio" name="answer" value="fun">fun</li>
        `
        next.disabled = true
    }

    if (number === 5){
        if(selected.value === "def"){
            score++
        }
        console.log(score);
        
        h2.textContent = "6. Which symbol is used for a single-line comment in Python?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="//">//</li>
            <li><input type="radio" name="answer" value="/#">/*</li>
            <li><input type="radio" name="answer" value="#">#</li>
            <li><input type="radio" name="answer" value="--">--</li>
        `
        next.disabled = true
    }

    if (number === 6){
        if(selected.value === "#"){
            score++
        }
        console.log(score);
        
        h2.textContent = "7. What does **kwargs allow a function to accept?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="Multiple positional arguments">Multiple positional arguments</li>
            <li><input type="radio" name="answer" value="Multiple keyword arguments">Multiple keyword arguments</li>
            <li><input type="radio" name="answer" value="Only integers">Only integers</li>
            <li><input type="radio" name="answer" value="Only strings">Only strings</li>
        `
        next.disabled = true
    }

    if (number === 7){
        if(selected.value === "Multiple keyword arguments"){
            score++
        }
        console.log(score);
        
        h2.textContent = "8. Which OOP concept allows a child class to acquire properties and methods from a parent class?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="Encapsulation">Encapsulation</li>
            <li><input type="radio" name="answer" value="Polymorphism">Polymorphism</li>
            <li><input type="radio" name="answer" value="Inheritance">Inheritance</li>
            <li><input type="radio" name="answer" value="Abstraction">Abstraction</li>
        `
        next.disabled = true
    }

    if (number === 8){
        if(selected.value === "Inheritance"){
            score++
        }
        console.log(score);
        
        h2.textContent = "9.Which operator is used for floor division in Python?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="/">/</li>
            <li><input type="radio" name="answer" value="//">//</li>
            <li><input type="radio" name="answer" value="%">%</li>
            <li><input type="radio" name="answer" value="**">**</li>
        `
        next.disabled = true
    }

    if (number === 9){
        if(selected.value === "//"){
            score++
        }
        console.log(score);
        
        h2.textContent = "10.Which statement is used to handle exceptions?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="if-else">if-else</li>
            <li><input type="radio" name="answer" value="try-except">try-except</li>
            <li><input type="radio" name="answer" value="for-while">for-while</li>
            <li><input type="radio" name="answer" value="check-catch">check-catch</li>
        `
        next.textContent= "Submit"
        
    }

    

    if (number === 10){
        if(selected.value === "try-except"){
            score++
        }
        console.log(score);
        next.hidden = true
        h2.textContent = "Congralation, You Completed The Quiz🎉"
        scorename.textContent = "Your Score:" + score
        options.hidden = true
        pre.hidden = true
        restart.hidden = false
        catagory.hidden = false
        saveQuizResult("Python", score, 10);
    }

})

pre.addEventListener("click", function(){
    number--
    if (score > 0){
        score--
    }
    
    let selected = document.querySelector('input[name="answer"]:checked');

    if (number === 0){
        console.log(score);
        
        h2.textContent = "1.what is file extention for python file"
        options.innerHTML = `
            <li><input type="radio" name="answer" value=".py">.py</li>
            <li><input type="radio" name="answer" value=".jsx">.jsx</li>
            <li><input type="radio" name="answer" value=".html">.html</li>
            <li><input type="radio" name="answer" value=".css">.css</li>
        `
        pre.hidden = true
        next.disabled = true
    }

    if (number === 1){

        console.log(score);
        console.log(number);
        
        h2.textContent = "2.Which one is mutuble?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="list">List</li>
            <li><input type="radio" name="answer" value="int">Int</li>
            <li><input type="radio" name="answer" value="string">String</li>
            <li><input type="radio" name="answer" value="tuple">Tuple</li>
        `
        pre.hidden = false
        next.disabled = true
    }
    if (number === 2){
        
        console.log(score);
        
        h2.textContent = "3.Which one is immutuble?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="list">List</li>
            <li><input type="radio" name="answer" value="set">Set</li>
            <li><input type="radio" name="answer" value="dict">Dict</li>
            <li><input type="radio" name="answer" value="tuple">Tuple</li>
        `
        next.disabled = true
    }
    if (number === 3){
        
        console.log(score);
        
        h2.textContent = "4.Tuple is mutuble or immutuble?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="mutuble">Mutuble</li>
            <li><input type="radio" name="answer" value="immutuble">Imutuble</li>
        `
        next.disabled = true
    }

    if (number === 4){
       
        console.log(score);
        
        h2.textContent = "5. Which keyword is used to define a function in Python?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="function">function</li>
            <li><input type="radio" name="answer" value="define">define</li>
            <li><input type="radio" name="answer" value="def">def</li>
            <li><input type="radio" name="answer" value="fun">fun</li>
        `
        next.disabled = true
    }

    if (number === 5){
        
        console.log(score);
        
        h2.textContent = "6. Which symbol is used for a single-line comment in Python?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="//">//</li>
            <li><input type="radio" name="answer" value="/#">/*</li>
            <li><input type="radio" name="answer" value="#">#</li>
            <li><input type="radio" name="answer" value="--">--</li>
        `
        next.disabled = true
    }

    if (number === 6){
        
        console.log(score);
        
        h2.textContent = "7. What does **kwargs allow a function to accept?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="Multiple positional arguments">Multiple positional arguments</li>
            <li><input type="radio" name="answer" value="Multiple keyword arguments">Multiple keyword arguments</li>
            <li><input type="radio" name="answer" value="Only integers">Only integers</li>
            <li><input type="radio" name="answer" value="Only strings">Only strings</li>
        `
        next.disabled = true
    }

    if (number === 7){
        
        console.log(score);
        
        h2.textContent = "8. Which OOP concept allows a child class to acquire properties and methods from a parent class?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="Encapsulation">Encapsulation</li>
            <li><input type="radio" name="answer" value="Polymorphism">Polymorphism</li>
            <li><input type="radio" name="answer" value="Inheritance">Inheritance</li>
            <li><input type="radio" name="answer" value="Abstraction">Abstraction</li>
        `
        next.disabled = true
    }

    if (number === 8){
        
        console.log(score);
        
        h2.textContent = "9.Which operator is used for floor division in Python?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="/">/</li>
            <li><input type="radio" name="answer" value="//">//</li>
            <li><input type="radio" name="answer" value="%">%</li>
            <li><input type="radio" name="answer" value="**">**</li>
        `
        next.disabled = true
        next.textContent = "Next"
    }

    if (number === 9){
        
        console.log(score);
        
        h2.textContent = "10.Which statement is used to handle exceptions?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="if-else">if-else</li>
            <li><input type="radio" name="answer" value="try-except">try-except</li>
            <li><input type="radio" name="answer" value="for-while">for-while</li>
            <li><input type="radio" name="answer" value="check-catch">check-catch</li>
        `
        next.textContent= "Submit"
        
    }
})

function saveQuizResult(category, score, total) {

    let loggedUser = JSON.parse(
        localStorage.getItem("loggedInUser")
    );

    let username = loggedUser.username;

    let allHistory = JSON.parse(
        localStorage.getItem("quizHistory")
    ) || {};

    if (!allHistory[username]) {
        allHistory[username] = {};
    }

    if (!allHistory[username][category]) {
        allHistory[username][category] = [];
    }

    allHistory[username][category].push({
        score: score,
        total: total
    });

    localStorage.setItem(
        "quizHistory",
        JSON.stringify(allHistory)
    );

    console.log("Saved history:", allHistory);
}
