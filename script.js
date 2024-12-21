let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click", news);
function news (){
list.innerHTML = list.innerHTML + `
<div class="news">
<h2>${title.value}</h2>
<p>${content.value}</p><hr>
</div>
`;
}
let i=0, imgArr=new Array(); 
imgArr[0] = "https://im.marieclaire.com.tw/s1200c675h100b0/assets/mc/202404/6620D9976C8EF1713428887.png";
imgArr[1] = "https://new-reporter.com/wp-content/uploads/2024/04/2024-04-17-578597-01.SullyoonLilyJiwooHaewonKyujinBaeNMIXX-1024x768.jpg";
imgArr[2] = "https://media.interaksyon.com/wp-content/uploads/2024/07/nmixx-kpop.jpg";

function showImg () {
document.getElementById('ico').src = imgArr[i]; 
i= (i+1) % 3;
}
function show( ) {
  setInterval(showImg, 2000); 
}