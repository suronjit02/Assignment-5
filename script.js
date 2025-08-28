
// heart icon count

const cardHeart = document.querySelectorAll(".card i.fa-heart");

let navHeart = 0;

for (const heart of cardHeart) {

    heart.addEventListener("click", function () {

        navHeart++;
        document.getElementById("nav-heart").innerText = navHeart;

    })

}


