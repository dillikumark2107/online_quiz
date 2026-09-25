
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

        if(selected.value === "class"){
            score++
        }

        console.log(score)

        h2.textContent = "2. Which method is the entry point of a standard Java application?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="start">start()</li>
            <li><input type="radio" name="answer" value="main">main()</li>
            <li><input type="radio" name="answer" value="run">run()</li>
            <li><input type="radio" name="answer" value="execute">execute()</li>
        `

        pre.hidden = false
        next.disabled = true
    }

    if (number === 2){

        if(selected.value === "main"){
            score++
        }

        console.log(score)

        h2.textContent = "3. Which keyword is used to create an object in Java?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="object">object</li>
            <li><input type="radio" name="answer" value="create">create</li>
            <li><input type="radio" name="answer" value="new">new</li>
            <li><input type="radio" name="answer" value="this">this</li>
        `

        next.disabled = true
    }

    if (number === 3){

        if(selected.value === "new"){
            score++
        }

        console.log(score)

        h2.textContent = "4. Which of these is a primitive data type in Java?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="String">String</li>
            <li><input type="radio" name="answer" value="Integer">Integer</li>
            <li><input type="radio" name="answer" value="int">int</li>
            <li><input type="radio" name="answer" value="Array">Array</li>
        `

        next.disabled = true
    }

    if (number === 4){

        if(selected.value === "int"){
            score++
        }

        console.log(score)

        h2.textContent = "5. Which symbol is used to end a statement in Java?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value=":">:</li>
            <li><input type="radio" name="answer" value=";">;</li>
            <li><input type="radio" name="answer" value=".">.</li>
            <li><input type="radio" name="answer" value=",">,</li>
        `

        next.disabled = true
    }

    if (number === 5){

        if(selected.value === ";"){
            score++
        }

        console.log(score)

        h2.textContent = "6. Which OOP concept allows a child class to acquire properties and methods from a parent class?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="Encapsulation">Encapsulation</li>
            <li><input type="radio" name="answer" value="Inheritance">Inheritance</li>
            <li><input type="radio" name="answer" value="Polymorphism">Polymorphism</li>
            <li><input type="radio" name="answer" value="Abstraction">Abstraction</li>
        `

        next.disabled = true
    }

    if (number === 6){

        if(selected.value === "Inheritance"){
            score++
        }

        console.log(score)

        h2.textContent = "7. What is the output of this code? int x = 10; System.out.println(x);"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="10">10</li>
            <li><input type="radio" name="answer" value="x">x</li>
            <li><input type="radio" name="answer" value="0">0</li>
            <li><input type="radio" name="answer" value="Error">Error</li>
        `

        next.disabled = true
    }

    if (number === 7){

        if(selected.value === "10"){
            score++
        }

        console.log(score)

        h2.textContent = "8. Which keyword is used to inherit a class in Java?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="inherits">inherits</li>
            <li><input type="radio" name="answer" value="extends">extends</li>
            <li><input type="radio" name="answer" value="implements">implements</li>
            <li><input type="radio" name="answer" value="super">super</li>
        `

        next.disabled = true
    }

    if (number === 8){

        if(selected.value === "extends"){
            score++
        }

        console.log(score)

        h2.textContent = "9. Which keyword is used to handle an exception in Java?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="catch">catch</li>
            <li><input type="radio" name="answer" value="error">error</li>
            <li><input type="radio" name="answer" value="handle">handle</li>
            <li><input type="radio" name="answer" value="except">except</li>
        `

        next.disabled = true
    }

    if (number === 9){

        if(selected.value === "catch"){
            score++
        }

        console.log(score)

        h2.textContent = "10. Which method is used to compare the contents of two Java strings?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="compare">compare()</li>
            <li><input type="radio" name="answer" value="equals">equals()</li>
            <li><input type="radio" name="answer" value="same">same()</li>
            <li><input type="radio" name="answer" value="==">==</li>
        `

        next.textContent = "Submit"
        next.disabled = true
    }

    if (number === 10){

        if(selected.value === "equals"){
            score++
        }

        console.log(score)

        next.hidden = true

        h2.textContent = "You Completed The Quiz🎉"

        scorename.textContent = "Your Score:" + score

        options.hidden = true
        pre.hidden = true

        restart.hidden = false
        catagory.hidden = false

        saveQuizResult("Java", score, 10);
    }

})


pre.addEventListener("click", function(){

    number--
    if (score > 0){
        score--
    }

    let selected = document.querySelector('input[name="answer"]:checked');

    if (number === 0){

        console.log(score)

        h2.textContent = "1. Which keyword is used to create a class in Java?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="class">class</li>
            <li><input type="radio" name="answer" value="Class">Class</li>
            <li><input type="radio" name="answer" value="define">define</li>
            <li><input type="radio" name="answer" value="new">new</li>
        `

        pre.hidden = true
        next.disabled = true
    }

    if (number === 1){

        console.log(score)

        h2.textContent = "2. Which method is the entry point of a standard Java application?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="start">start()</li>
            <li><input type="radio" name="answer" value="main">main()</li>
            <li><input type="radio" name="answer" value="run">run()</li>
            <li><input type="radio" name="answer" value="execute">execute()</li>
        `

        next.disabled = true
    }

    if (number === 2){

        console.log(score)

        h2.textContent = "3. Which keyword is used to create an object in Java?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="object">object</li>
            <li><input type="radio" name="answer" value="create">create</li>
            <li><input type="radio" name="answer" value="new">new</li>
            <li><input type="radio" name="answer" value="this">this</li>
        `

        next.disabled = true
    }

    if (number === 3){

        console.log(score)

        h2.textContent = "4. Which of these is a primitive data type in Java?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="String">String</li>
            <li><input type="radio" name="answer" value="Integer">Integer</li>
            <li><input type="radio" name="answer" value="int">int</li>
            <li><input type="radio" name="answer" value="Array">Array</li>
        `

        next.disabled = true
    }

    if (number === 4){

        console.log(score)

        h2.textContent = "5. Which symbol is used to end a statement in Java?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value=":">:</li>
            <li><input type="radio" name="answer" value=";">;</li>
            <li><input type="radio" name="answer" value=".">.</li>
            <li><input type="radio" name="answer" value=",">,</li>
        `

        next.disabled = true
    }

    if (number === 5){

        console.log(score)

        h2.textContent = "6. Which OOP concept allows a child class to acquire properties and methods from a parent class?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="Encapsulation">Encapsulation</li>
            <li><input type="radio" name="answer" value="Inheritance">Inheritance</li>
            <li><input type="radio" name="answer" value="Polymorphism">Polymorphism</li>
            <li><input type="radio" name="answer" value="Abstraction">Abstraction</li>
        `

        next.disabled = true
    }

    if (number === 6){

        console.log(score)

        h2.textContent = "7. What is the output of this code? int x = 10; System.out.println(x);"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="10">10</li>
            <li><input type="radio" name="answer" value="x">x</li>
            <li><input type="radio" name="answer" value="0">0</li>
            <li><input type="radio" name="answer" value="Error">Error</li>
        `

        next.disabled = true
    }

    if (number === 7){

        console.log(score)

        h2.textContent = "8. Which keyword is used to inherit a class in Java?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="inherits">inherits</li>
            <li><input type="radio" name="answer" value="extends">extends</li>
            <li><input type="radio" name="answer" value="implements">implements</li>
            <li><input type="radio" name="answer" value="super">super</li>
        `

        next.disabled = true
    }

    if (number === 8){

        console.log(score)

        h2.textContent = "9. Which keyword is used to handle an exception in Java?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="catch">catch</li>
            <li><input type="radio" name="answer" value="error">error</li>
            <li><input type="radio" name="answer" value="handle">handle</li>
            <li><input type="radio" name="answer" value="except">except</li>
        `

        next.disabled = true
    }

    if (number === 9){

        console.log(score)

        h2.textContent = "10. Which method is used to compare the contents of two Java strings?"

        options.innerHTML = `
            <li><input type="radio" name="answer" value="compare">compare()</li>
            <li><input type="radio" name="answer" value="equals">equals()</li>
            <li><input type="radio" name="answer" value="same">same()</li>
            <li><input type="radio" name="answer" value="==">==</li>
        `

        next.textContent = "Submit"
        next.disabled = true
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

