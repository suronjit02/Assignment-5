
// heart icon count

const cardHeart = document.querySelectorAll(".card i.fa-heart");

let navHeart = 0;

for (const heart of cardHeart) {

    heart.addEventListener("click", function () {

        navHeart++;
        document.getElementById("nav-heart").innerText = navHeart;

    })

}


// call button functionality

const callButtons = document.querySelectorAll(".call-button");

for (let button of callButtons) {

    button.addEventListener("click", function () {

        const card = this.closest(".card");

        const title = card.querySelector("p").innerText;
        const number = card.querySelector("h3").innerText;

        const navCoin = document.getElementById("nav-coin").innerText;

        if (navCoin >= 20) {

            alert("📞 Calling " + title + " " + number);


            //coin calculation
            const currentCoin = navCoin - 20;
            document.getElementById("nav-coin").innerText = currentCoin;

            // call history create
            const callHistoryItem = document.createElement("div");

            callHistoryItem.classList.add("call-history-item", "flex", "justify-between", "items-center", "bg-slate-100", "p-3", "rounded-md", "shadow", "mb-2");

            const time = new Date().toLocaleTimeString();

            callHistoryItem.innerHTML = `
            
             <div>
                  <h3 class="font-bold">${title}</h3>
                  <p class="text-[#5C5C5C]">${number}</p>
            </div>
            <p class="text-[14px] text-[#5C5C5C] font-semibold">${time}</p>

            `;


            const callHistoryDiv = document.getElementById("call-history");

            callHistoryDiv.prepend(callHistoryItem);


        }
        else alert("⚠️ Insufficient coins. 20 coins are required to place this call.");



    })

}


// clear button functionality

const currentCallHistory = document.getElementById("call-history");

const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", function () {
    

    currentCallHistory.remove();

})

// copy functionality

const copyButtons = document.querySelectorAll(".copy-btn");

let currentCopyTotal = 0;

for (let button of copyButtons) {

    button.addEventListener("click", function () {

        const clickedCard = this.closest(".card");

        const copiedText = clickedCard.querySelector(".main-section-left-div .card h3").innerText;

        navigator.clipboard.writeText(copiedText);

        alert("Copied This Hotline Number: " + copiedText);


        navigator.clipboard.writeText(copiedText);


        currentCopyTotal++;
        document.getElementById("nav-copy-count").innerText = currentCopyTotal;

    })



}