console.log("This is app.js");
// My API key is ce31c4bd342a433886f1760599f699a0

// Initialising news api parameters
const source = "bbc-news";
const apiKey = "ce31c4bd342a433886f1760599f699a0";

// Creating Ajax get Request
const xhr = new XMLHttpRequest();
const accordion = document.querySelector(".accordion");
console.log(accordion);
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apiKey}`, false);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let html = "";
        // console.log(articles);
        for (news in articles) {
            // console.log(articles[news].title)
            // console.log(articles[news].description)
            html += `<div class="item">
                        <div class="label">
                            <p><strong>Breaking News : </strong>${articles[news].title}</p>
                        </div>
                        <div class="content">
                            <p>${articles[news].description}</p >
                        </div >
                    </div > `;

        }
        accordion.innerHTML = html;
    }
    else {
        console.log("Some Error Occured");
    }
}

xhr.send();

const item = document.getElementsByClassName("item");

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        }
        else {
            for (let j = 0; j < item.length; j++) {
                const element = item[j];
                element.classList.remove('active');
            }
            this.classList.add('active');
        }

    })
}
