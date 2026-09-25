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
        if(selected.value === "Web Framework"){
            score++
        }

        console.log(score);

        h2.textContent = "2. Which programming language is used with Django?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="Java">Java</li>
            <li><input type="radio" name="answer" value="Python">Python</li>
            <li><input type="radio" name="answer" value="C++">C++</li>
            <li><input type="radio" name="answer" value="PHP">PHP</li>
        `

        pre.hidden = false
        next.disabled = true
    }

    if (number === 2){
        if(selected.value === "Python"){
            score++
        }

        console.log(score);

        h2.textContent = "3. Which file is used to create models in Django?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="views.py">views.py</li>
            <li><input type="radio" name="answer" value="urls.py">urls.py</li>
            <li><input type="radio" name="answer" value="models.py">models.py</li>
            <li><input type="radio" name="answer" value="admin.py">admin.py</li>
        `

        next.disabled = true
    }

    if (number === 3){
        if(selected.value === "models.py"){
            score++
        }

        console.log(score);

        h2.textContent = "4. Which file is used to define URL patterns in Django?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="models.py">models.py</li>
            <li><input type="radio" name="answer" value="urls.py">urls.py</li>
            <li><input type="radio" name="answer" value="views.py">views.py</li>
            <li><input type="radio" name="answer" value="forms.py">forms.py</li>
        `

        next.disabled = true
    }

    if (number === 4){
        if(selected.value === "urls.py"){
            score++
        }

        console.log(score);

        h2.textContent = "5. Which command is used to create a Django project?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="django-admin startproject">django-admin startproject</li>
            <li><input type="radio" name="answer" value="django createproject">django createproject</li>
            <li><input type="radio" name="answer" value="python createproject">python createproject</li>
            <li><input type="radio" name="answer" value="django-admin project">django-admin project</li>
        `

        next.disabled = true
    }

    if (number === 5){
        if(selected.value === "django-admin startproject"){
            score++
        }

        console.log(score);

        h2.textContent = "6. Which command is used to create a Django app?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="python manage.py startapp">python manage.py startapp</li>
            <li><input type="radio" name="answer" value="python manage.py createapp">python manage.py createapp</li>
            <li><input type="radio" name="answer" value="django startapp">django startapp</li>
            <li><input type="radio" name="answer" value="django createapp">django createapp</li>
        `

        next.disabled = true
    }

    if (number === 6){
        if(selected.value === "python manage.py startapp"){
            score++
        }

        console.log(score);

        h2.textContent = "7. Which command is used to create migrations?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="python manage.py migrate">python manage.py migrate</li>
            <li><input type="radio" name="answer" value="python manage.py makemigrations">python manage.py makemigrations</li>
            <li><input type="radio" name="answer" value="python manage.py migration">python manage.py migration</li>
            <li><input type="radio" name="answer" value="django makemigrations">django makemigrations</li>
        `

        next.disabled = true
    }

    if (number === 7){
        if(selected.value === "python manage.py makemigrations"){
            score++
        }

        console.log(score);

        h2.textContent = "8. Which command is used to apply migrations?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="python manage.py migrate">python manage.py migrate</li>
            <li><input type="radio" name="answer" value="python manage.py makemigrations">python manage.py makemigrations</li>
            <li><input type="radio" name="answer" value="python manage.py migration">python manage.py migration</li>
            <li><input type="radio" name="answer" value="django migrate">django migrate</li>
        `

        next.disabled = true
    }

    if (number === 8){
        if(selected.value === "python manage.py migrate"){
            score++
        }

        console.log(score);

        h2.textContent = "9. What is Django ORM?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="Object Relational Mapping">Object Relational Mapping</li>
            <li><input type="radio" name="answer" value="Online Resource Manager">Online Resource Manager</li>
            <li><input type="radio" name="answer" value="Object Resource Model">Object Resource Model</li>
            <li><input type="radio" name="answer" value="Online Relational Model">Online Relational Model</li>
        `

        next.disabled = true
    }

    if (number === 9){
        if(selected.value === "Object Relational Mapping"){
            score++
        }

        console.log(score);

        h2.textContent = "10. Which file contains Django project settings?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="views.py">views.py</li>
            <li><input type="radio" name="answer" value="models.py">models.py</li>
            <li><input type="radio" name="answer" value="settings.py">settings.py</li>
            <li><input type="radio" name="answer" value="urls.py">urls.py</li>
        `

        next.textContent = "Submit"
    }

    if (number === 10){
        if(selected.value === "settings.py"){
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

        saveQuizResult("Django", score, 10);
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

        h2.textContent = "1. What is Django?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="Programming Language">Programming Language</li>
            <li><input type="radio" name="answer" value="Web Framework">Web Framework</li>
            <li><input type="radio" name="answer" value="Database">Database</li>
            <li><input type="radio" name="answer" value="Operating System">Operating System</li>
        `

        pre.hidden = true
        next.disabled = true
    }

    if (number === 1){

        console.log(score);
        console.log(number);

        h2.textContent = "2. Which programming language is used with Django?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="Java">Java</li>
            <li><input type="radio" name="answer" value="Python">Python</li>
            <li><input type="radio" name="answer" value="C++">C++</li>
            <li><input type="radio" name="answer" value="PHP">PHP</li>
        `

        pre.hidden = false
        next.disabled = true
    }

    if (number === 2){

        console.log(score);

        h2.textContent = "3. Which file is used to create models in Django?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="views.py">views.py</li>
            <li><input type="radio" name="answer" value="urls.py">urls.py</li>
            <li><input type="radio" name="answer" value="models.py">models.py</li>
            <li><input type="radio" name="answer" value="admin.py">admin.py</li>
        `

        next.disabled = true
    }

    if (number === 3){

        console.log(score);

        h2.textContent = "4. Which file is used to define URL patterns in Django?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="models.py">models.py</li>
            <li><input type="radio" name="answer" value="urls.py">urls.py</li>
            <li><input type="radio" name="answer" value="views.py">views.py</li>
            <li><input type="radio" name="answer" value="forms.py">forms.py</li>
        `

        next.disabled = true
    }

    if (number === 4){

        console.log(score);

        h2.textContent = "5. Which command is used to create a Django project?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="django-admin startproject">django-admin startproject</li>
            <li><input type="radio" name="answer" value="django createproject">django createproject</li>
            <li><input type="radio" name="answer" value="python createproject">python createproject</li>
            <li><input type="radio" name="answer" value="django-admin project">django-admin project</li>
        `

        next.disabled = true
    }

    if (number === 5){

        console.log(score);

        h2.textContent = "6. Which command is used to create a Django app?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="python manage.py startapp">python manage.py startapp</li>
            <li><input type="radio" name="answer" value="python manage.py createapp">python manage.py createapp</li>
            <li><input type="radio" name="answer" value="django startapp">django startapp</li>
            <li><input type="radio" name="answer" value="django createapp">django createapp</li>
        `

        next.disabled = true
    }

    if (number === 6){

        console.log(score);

        h2.textContent = "7. Which command is used to create migrations?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="python manage.py migrate">python manage.py migrate</li>
            <li><input type="radio" name="answer" value="python manage.py makemigrations">python manage.py makemigrations</li>
            <li><input type="radio" name="answer" value="python manage.py migration">python manage.py migration</li>
            <li><input type="radio" name="answer" value="django makemigrations">django makemigrations</li>
        `

        next.disabled = true
    }

    if (number === 7){

        console.log(score);

        h2.textContent = "8. Which command is used to apply migrations?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="python manage.py migrate">python manage.py migrate</li>
            <li><input type="radio" name="answer" value="python manage.py makemigrations">python manage.py makemigrations</li>
            <li><input type="radio" name="answer" value="python manage.py migration">python manage.py migration</li>
            <li><input type="radio" name="answer" value="django migrate">django migrate</li>
        `

        next.disabled = true
    }

    if (number === 8){

        console.log(score);

        h2.textContent = "9. What is Django ORM?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="Object Relational Mapping">Object Relational Mapping</li>
            <li><input type="radio" name="answer" value="Online Resource Manager">Online Resource Manager</li>
            <li><input type="radio" name="answer" value="Object Resource Model">Object Resource Model</li>
            <li><input type="radio" name="answer" value="Online Relational Model">Online Relational Model</li>
        `

        next.disabled = true
    }

    if (number === 9){

        console.log(score);

        h2.textContent = "10. Which file contains Django project settings?"
        options.innerHTML = `
            <li><input type="radio" name="answer" value="views.py">views.py</li>
            <li><input type="radio" name="answer" value="models.py">models.py</li>
            <li><input type="radio" name="answer" value="settings.py">settings.py</li>
            <li><input type="radio" name="answer" value="urls.py">urls.py</li>
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
