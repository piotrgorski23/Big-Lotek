const placeNumbers = document.querySelector(".drawn-numbers");
const btn = document.querySelector(".btn");
const text = document.querySelector(".drawn-numbers");

const drawnNumbers = () => {
    const arr = [];
    let number;
    for (let i = 0; i < 6; i++) {
        number = Math.round(Math.random() * 48) + 1;

        while (arr.includes(number)) {
            number = Math.round(Math.random() * 48) + 1;
            // console.log(`The number that was repeated ${number}`);
        }

        arr.push(number);
    }

    arr.sort(function (a, b) {
        return a - b;
    });

    return arr.join(", ");
}

btn.addEventListener("click", function () {
    text.textContent = drawnNumbers();
});