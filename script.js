const messages = [
    "Wait... are you absolutely, 100%, no-take-backs sure?",
    "Think carefully... this is a once-in-a-lifetime offer! 😳",
    "Are you really about to break my heart like this?",
    "C'mon, even my grandma would say yes!",
    "Bruh, even Google says you should reconsider.",
    "If you say no, I might just cry... 🥺",
    "Fine... but just know, my pet goldfish would have said yes. 🐠",
    "Wow. Even Thanos had more mercy than you. 💀",
    "Okay okay, last chance... think about the consequences! 😭",
    "PLOT TWIST: You were meant to say yes all along! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}