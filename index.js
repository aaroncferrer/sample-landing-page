let url_string = window.location;
let url = new URL(url_string);

let fullname = url.searchParams.get("fullname");
let email = url.searchParams.get("email");
let number = url.searchParams.get("number");
let color = url.searchParams.get("color");
let message = url.searchParams.get("message");

/* // SHORTHAND
params = Object.fromEntries(new URLSearchParams(location.search))
console.log(params)
// document.writeln(params.fullname) ---> Print

// 2. Create Element
let firstNameElement = document.createElement('div')
// 3. Add param value to element
firstNameElement.textContent = params.fullname
console.log(firstNameElement)
// 4. Get entrypoint from the html
let entryPoint = document.body
// 5. Append element to the entry point
entryPoint.appendChild(firstNameElement) */

const mainDiv = document.createElement('div')
mainDiv.className = 'main-div'
mainDiv.innerHTML = `
    <nav>
        <a href="#"><img src="./assets/ps5-logo.png" class="logo" /></a>
        <ul>
            <li><a href="#">PLAY HAS NO LIMITS</a></li>
        </ul>
        <div class="sign-up">SIGN UP</div>
        
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
            <i class="fa-solid fa-bars"></i>
        </label>
    </nav>

    <div class="input-container">
        <h2>Input Data</h2>

        <div class="input-table">

            <div class="label">
                <h4 id="fullname">Full Name:</h4>
            </div>

            <div class="input">
                ${fullname}
            </div>

            <div class="label">
                <h4>Email:</h4>
            </div>

            <div class="input">
                ${email}
            </div>

            <div class="label">
                <h4>Number:</h4>
            </div>
            
            <div class="input">
                ${number}
            </div>

            <div class="label">
                <h4>Color:</h4>
            </div>

            <div class="input color">
                ${color}
            </div>

            <div class="label">
                <h4>Message:</h4>
            </div>

            <div class="input message">
                ${message}
            </div>

        </div>

        <div class="btn-div">
            <a href="./index.html" class="primary-btn">RETURN TO HOME</a>
        </div>

    </div>
`

const footer = document.createElement('footer')
footer.id = 'footer'
footer.innerHTML = `
    <p id="footer-text">
        © Copyright 2022 Powered by HTML & CSS
    </p>
`

document.body.append(mainDiv)
document.body.append(footer)

/* document.writeln(
    `
    <main class="main-div">
        <nav>
            <a href="#"><img src="./assets/ps5-logo.png" class="logo" /></a>
            <ul>
                <li><a href="#">PLAY HAS NO LIMITS</a></li>
            </ul>
            <div class="sign-up">SIGN UP</div>
            
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <i class="fa-solid fa-bars"></i>
            </label>
        </nav>

            <div class="input-container">
                <h2>Input Data</h2>
    
                <div class="input-table">
    
                    <div class="label">
                        <h4 id="fullname">Full Name:</h4>
                    </div>
    
                    <div class="input">
                        ${fullname}
                    </div>
    
                    <div class="label">
                        <h4>Email:</h4>
                    </div>
    
                    <div class="input">
                        ${email}
                    </div>
    
                    <div class="label">
                        <h4>Number:</h4>
                    </div>
                    
                    <div class="input">
                        ${number}
                    </div>
    
                    <div class="label">
                        <h4>Color:</h4>
                    </div>
    
                    <div class="input color">
                        ${color}
                    </div>
    
                    <div class="label">
                        <h4>Message:</h4>
                    </div>
    
                    <div class="input message">
                        ${message}
                    </div>
    
                </div>
    
                <div class="btn-div">
                    <a href="./index.html" class="primary-btn">RETURN TO HOME</a>
                </div>
    
            </div>
        
    </main>

    <footer id="footer">
        <p id="footer-text">
            © Copyright 2022 Powered by HTML & CSS
        </p>
    </footer>
    `
) */
