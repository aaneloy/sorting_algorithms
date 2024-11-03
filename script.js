// Left Canvas - Bubble Sort Preview
const leftCanvas = document.getElementById('leftCanvas');
const leftCtx = leftCanvas.getContext('2d');
let leftArray = Array.from({ length: 30 }, () => Math.floor(Math.random() * leftCanvas.height));

function drawLeftArray() {
    leftCtx.clearRect(0, 0, leftCanvas.width, leftCanvas.height);
    const barWidth = leftCanvas.width / leftArray.length;
    leftArray.forEach((value, index) => {
        leftCtx.fillStyle = "#ff6b6b";
        leftCtx.fillRect(index * barWidth, leftCanvas.height - value, barWidth, value);
    });
}

async function bubbleSortLeft() {
    for (let i = 0; i < leftArray.length - 1; i++) {
        for (let j = 0; j < leftArray.length - i - 1; j++) {
            if (leftArray[j] > leftArray[j + 1]) {
                [leftArray[j], leftArray[j + 1]] = [leftArray[j + 1], leftArray[j]];
                drawLeftArray();
                await new Promise(resolve => setTimeout(resolve, 30));
            }
        }
    }
    leftArray = Array.from({ length: 30 }, () => Math.floor(Math.random() * leftCanvas.height));
    bubbleSortLeft();
}

drawLeftArray();
bubbleSortLeft();

// Right Canvas - Quick Sort Preview
const rightCanvas = document.getElementById('rightCanvas');
const rightCtx = rightCanvas.getContext('2d');
let rightArray = Array.from({ length: 30 }, () => Math.floor(Math.random() * rightCanvas.height));

function drawRightArray() {
    rightCtx.clearRect(0, 0, rightCanvas.width, rightCanvas.height);
    const barWidth = rightCanvas.width / rightArray.length;
    rightArray.forEach((value, index) => {
        rightCtx.fillStyle = "#4CAF50";
        rightCtx.fillRect(index * barWidth, rightCanvas.height - value, barWidth, value);
    });
}

async function quickSortRight(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return;

    const pivotIndex = await partition(arr, start, end);
    drawRightArray();
    await Promise.all([
        quickSortRight(arr, start, pivotIndex - 1),
        quickSortRight(arr, pivotIndex + 1, end),
    ]);
}

async function partition(arr, start, end) {
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
            drawRightArray();
            await new Promise(resolve => setTimeout(resolve, 50));
        }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    drawRightArray();
    return pivotIndex;
}

drawRightArray();
quickSortRight(rightArray);

// Button Click - Placeholder function for actual algorithm selection
function selectAlgorithm(algorithm) {
    console.log(`Selected Algorithm: ${algorithm}`);
}
