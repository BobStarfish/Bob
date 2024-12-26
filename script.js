let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
let themeToggle = document.getElementById("themeToggle");
let search = document.getElementById("search");

let i = 0, imgArr = [
    "https://im.marieclaire.com.tw/s1200c675h100b0/assets/mc/202404/6620D9976C8EF1713428887.png",
    "https://new-reporter.com/wp-content/uploads/2024/04/2024-04-17-578597-01.SullyoonLilyJiwooHaewonKyujinBaeNMIXX-1024x768.jpg",
    "https://media.interaksyon.com/wp-content/uploads/2024/07/nmixx-kpop.jpg"
];

function showImg() {
    document.getElementById('ico').src = imgArr[i];
    i = (i + 1) % imgArr.length;
}

function show() {
    setInterval(showImg, 2000);
}

function saveNews() {
    let newsItem = { title: title.value, content: content.value };
    let newsList = JSON.parse(localStorage.getItem("newsList")) || [];
    newsList.push(newsItem);
    localStorage.setItem("newsList", JSON.stringify(newsList));
    loadNews();
}

function loadNews() {
    list.innerHTML = "";
    let newsList = JSON.parse(localStorage.getItem("newsList")) || [];
    newsList.forEach(news => {
        let newsDiv = document.createElement("div");
        newsDiv.classList.add("news", "show");
        newsDiv.innerHTML = `<h2>${news.title}</h2><p>${news.content}</p>`;
        list.appendChild(newsDiv);
    });
}

btn.addEventListener("click", saveNews);

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

search.addEventListener("input", () => {
    let filter = search.value.toLowerCase();
    document.querySelectorAll('.news').forEach(news => {
        let title = news.querySelector('h2').innerText.toLowerCase();
        let content = news.querySelector('p').innerText.toLowerCase();
        news.style.display = (title.includes(filter) || content.includes(filter)) ? "block" : "none";
    });
});
function ncyu() {
  let a1 = document.getElementById("gg");
  a1.innerHTML = "哈哈搶不到!";
}