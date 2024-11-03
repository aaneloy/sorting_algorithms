const canvas = document.getElementById('bubbleSortCanvas');
const ctx = canvas.getContext('2d');
let array = [];
let sorting = false;

function generateArray(size = 30) {
    array = Array.from({ length: size }, () => Math.floor(Math.random() * canvas.height));
    drawArray();
}

function drawArray() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = canvas.width / array.length;
    array.forEach((value, index) => {
        ctx.fillStyle = "#4CAF50";
        ctx.fillRect(index * barWidth, canvas.height - value, barWidth, value);
    });
}

async function bubbleSort() {
    sorting = true;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                drawArray();
                await new Promise(resolve => setTimeout(resolve, 50));
            }
        }
    }
    sorting = false;
}

function startBubbleSort() {
    if (!sorting) bubbleSort();
}

function resetBubbleSort() {
    if (!sorting) generateArray();
}

// Initialize array
generateArray();
