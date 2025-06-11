
function calculate() {
    // get the elements
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);
    let result = document.getElementById("result");
    let condition1 = document.getElementById("condition1");
    // main logic
    let ans = weight / (height * height);
    // print the result
    if (height <= 0 || weight <= 0) {
        result.textContent = `Please enter valid value.`;
    }
    else {
        result.textContent = `Your BMI value is : ${ans.toFixed(2)}.`;
    }

    if (ans < 18.5) {
        condition1.textContent = `You need to improve your Health 💪.`;
    }
    else if (ans >= 18.5 && ans <= 24.9) {
        let condition2 = document.getElementById("condition2");
        condition2.textContent = `You are in Good condition 😊.`;
    }
    else if (ans >= 25 && ans <= 29.9) {
        let condition3 = document.getElementById("condition3");
        condition3.textContent = `You are in Over Weight condition 😯.`;
    }
    else if (ans >= 30 && ans <= 100) {
        let condition4 = document.getElementById("condition4");
        condition4.textContent = `You need to reduce your fat 🙆‍♂️.`;
    }
}
