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
        if(selected.value === "HyperText Markup Language"){
            score++
        }

        console.log(score);

        h2.textContent = "2. Which language is used to style a web page?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="HTML">HTML</li>
            <li><input type="radio" name="answer" value="CSS">CSS</li>
            <li><input type="radio" name="answer" value="Python">Python</li>
            <li><input type="radio" name="answer" value="SQL">SQL</li>
        `

        pre.hidden = false
        next.disabled = true
    }

    if (number === 2){
        if(selected.value === "CSS"){
            score++
        }

        console.log(score);

        h2.textContent = "3. Which HTML tag is used to create a hyperlink?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="&lt;p&gt;">&lt;p&gt;</li>
            <li><input type="radio" name="answer" value="&lt;a&gt;">&lt;a&gt;</li>
            <li><input type="radio" name="answer" value="&lt;h1&gt;">&lt;h1&gt;</li>
            <li><input type="radio" name="answer" value="&lt;img&gt;">&lt;img&gt;</li>
        `

        next.disabled = true
    }

    if (number === 3){
        if(selected.value === "<a>"){
            score++
        }

        console.log(score);

        h2.textContent = "4. Which CSS property is used to change text color?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="background-color">background-color</li>
            <li><input type="radio" name="answer" value="font-size">font-size</li>
            <li><input type="radio" name="answer" value="color">color</li>
            <li><input type="radio" name="answer" value="text-style">text-style</li>
        `

        next.disabled = true
    }

    if (number === 4){
        if(selected.value === "color"){
            score++
        }

        console.log(score);

        h2.textContent = "5. Which HTML tag is used to create an image?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="&lt;image&gt;">&lt;image&gt;</li>
            <li><input type="radio" name="answer" value="&lt;img&gt;">&lt;img&gt;</li>
            <li><input type="radio" name="answer" value="&lt;pic&gt;">&lt;pic&gt;</li>
            <li><input type="radio" name="answer" value="&lt;src&gt;">&lt;src&gt;</li>
        `

        next.disabled = true
    }

    if (number === 5){
        if(selected.value === "<img>"){
            score++
        }

        console.log(score);

        h2.textContent = "6. Which CSS property is used to change the background color?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="color">color</li>
            <li><input type="radio" name="answer" value="background-color">background-color</li>
            <li><input type="radio" name="answer" value="bg-color">bg-color</li>
            <li><input type="radio" name="answer" value="background">background</li>
        `

        next.disabled = true
    }

    if (number === 6){
        if(selected.value === "background-color"){
            score++
        }

        console.log(score);

        h2.textContent = "7. Which HTML tag is used to create a paragraph?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="&lt;p&gt;">&lt;p&gt;</li>
            <li><input type="radio" name="answer" value="&lt;para&gt;">&lt;para&gt;</li>
            <li><input type="radio" name="answer" value="&lt;text&gt;">&lt;text&gt;</li>
            <li><input type="radio" name="answer" value="&lt;paragraph&gt;">&lt;paragraph&gt;</li>
        `

        next.disabled = true
    }

    if (number === 7){
        if(selected.value === "<p>"){
            score++
        }

        console.log(score);

        h2.textContent = "8. Which CSS property is used to change the font size?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="text-size">text-size</li>
            <li><input type="radio" name="answer" value="font-size">font-size</li>
            <li><input type="radio" name="answer" value="font-style">font-style</li>
            <li><input type="radio" name="answer" value="size">size</li>
        `

        next.disabled = true
    }

    if (number === 8){
        if(selected.value === "font-size"){
            score++
        }

        console.log(score);

        h2.textContent = "9. Which language is used to add interactivity to a web page?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="HTML">HTML</li>
            <li><input type="radio" name="answer" value="CSS">CSS</li>
            <li><input type="radio" name="answer" value="JavaScript">JavaScript</li>
            <li><input type="radio" name="answer" value="SQL">SQL</li>
        `

        next.disabled = true
    }

    if (number === 9){
        if(selected.value === "JavaScript"){
            score++
        }

        console.log(score);

        h2.textContent = "10. Which HTML tag is used to create an unordered list?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="&lt;ol&gt;">&lt;ol&gt;</li>
            <li><input type="radio" name="answer" value="&lt;ul&gt;">&lt;ul&gt;</li>
            <li><input type="radio" name="answer" value="&lt;li&gt;">&lt;li&gt;</li>
            <li><input type="radio" name="answer" value="&lt;list&gt;">&lt;list&gt;</li>
        `

        next.textContent = "Submit"
    }

    if (number === 10){
        if(selected.value === "<ul>"){
            score++
        }

        console.log(score);

        next.hidden = true
        h2.textContent = "You Completed The Quiz🎉"
        scorename.textContent = "Your Score:" + score
        options.hidden = true
        pre.hidden = true

        restart.hidden = false
        catagory.hidden = false

        saveQuizResult("Frontend", score, 10);
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

        h2.textContent = "1. What does HTML stand for?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="HyperText Markup Language">HyperText Markup Language</li>
            <li><input type="radio" name="answer" value="HighText Machine Language">HighText Machine Language</li>
            <li><input type="radio" name="answer" value="HyperText Machine Language">HyperText Machine Language</li>
            <li><input type="radio" name="answer" value="Hyper Tool Markup Language">Hyper Tool Markup Language</li>
        `

        pre.hidden = true
        next.disabled = true
    }

    if (number === 1){

        console.log(score);
        console.log(number);

        h2.textContent = "2. Which language is used to style a web page?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="HTML">HTML</li>
            <li><input type="radio" name="answer" value="CSS">CSS</li>
            <li><input type="radio" name="answer" value="Python">Python</li>
            <li><input type="radio" name="answer" value="SQL">SQL</li>
        `

        pre.hidden = false
        next.disabled = true
    }

    if (number === 2){

        console.log(score);

        h2.textContent = "3. Which HTML tag is used to create a hyperlink?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="&lt;p&gt;">&lt;p&gt;</li>
            <li><input type="radio" name="answer" value="&lt;a&gt;">&lt;a&gt;</li>
            <li><input type="radio" name="answer" value="&lt;h1&gt;">&lt;h1&gt;</li>
            <li><input type="radio" name="answer" value="&lt;img&gt;">&lt;img&gt;</li>
        `

        next.disabled = true
    }

    if (number === 3){

        console.log(score);

        h2.textContent = "4. Which CSS property is used to change text color?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="background-color">background-color</li>
            <li><input type="radio" name="answer" value="font-size">font-size</li>
            <li><input type="radio" name="answer" value="color">color</li>
            <li><input type="radio" name="answer" value="text-style">text-style</li>
        `

        next.disabled = true
    }

    if (number === 4){

        console.log(score);

        h2.textContent = "5. Which HTML tag is used to create an image?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="&lt;image&gt;">&lt;image&gt;</li>
            <li><input type="radio" name="answer" value="&lt;img&gt;">&lt;img&gt;</li>
            <li><input type="radio" name="answer" value="&lt;pic&gt;">&lt;pic&gt;</li>
            <li><input type="radio" name="answer" value="&lt;src&gt;">&lt;src&gt;</li>
        `

        next.disabled = true
    }

    if (number === 5){

        console.log(score);

        h2.textContent = "6. Which CSS property is used to change the background color?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="color">color</li>
            <li><input type="radio" name="answer" value="background-color">background-color</li>
            <li><input type="radio" name="answer" value="bg-color">bg-color</li>
            <li><input type="radio" name="answer" value="background">background</li>
        `

        next.disabled = true
    }

    if (number === 6){

        console.log(score);

        h2.textContent = "7. Which HTML tag is used to create a paragraph?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="&lt;p&gt;">&lt;p&gt;</li>
            <li><input type="radio" name="answer" value="&lt;para&gt;">&lt;para&gt;</li>
            <li><input type="radio" name="answer" value="&lt;text&gt;">&lt;text&gt;</li>
            <li><input type="radio" name="answer" value="&lt;paragraph&gt;">&lt;paragraph&gt;</li>
        `

        next.disabled = true
    }

    if (number === 7){

        console.log(score);

        h2.textContent = "8. Which CSS property is used to change the font size?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="text-size">text-size</li>
            <li><input type="radio" name="answer" value="font-size">font-size</li>
            <li><input type="radio" name="answer" value="font-style">font-style</li>
            <li><input type="radio" name="answer" value="size">size</li>
        `

        next.disabled = true
    }

    if (number === 8){

        console.log(score);

        h2.textContent = "9. Which language is used to add interactivity to a web page?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="HTML">HTML</li>
            <li><input type="radio" name="answer" value="CSS">CSS</li>
            <li><input type="radio" name="answer" value="JavaScript">JavaScript</li>
            <li><input type="radio" name="answer" value="SQL">SQL</li>
        `

        next.disabled = true
    }

    if (number === 9){

        console.log(score);

        h2.textContent = "10. Which HTML tag is used to create an unordered list?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="&lt;ol&gt;">&lt;ol&gt;</li>
            <li><input type="radio" name="answer" value="&lt;ul&gt;">&lt;ul&gt;</li>
            <li><input type="radio" name="answer" value="&lt;li&gt;">&lt;li&gt;</li>
            <li><input type="radio" name="answer" value="&lt;list&gt;">&lt;list&gt;</li>
        `

        next.textContent = "Submit"
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
