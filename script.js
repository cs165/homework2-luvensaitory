// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

function onClick(event) {
    if (isDone(bihai))
        return;
    const aim = event.currentTarget;
    const quesId = aim.dataset.questionId;
    const chId = aim.dataset.choiceId;
    const chs = document.querySelectorAll(".choice-grid div[data-question-id=" + quesId + "]");
    bihai[quesId] = chId;
    for (const ch of chs) {
        const img = ch.querySelector(".checkbox");
        if (ch === aim) {
            ch.style.backgroundColor = "#cfe3ff";
            ch.style.opacity = "1";
            img.src = "images/checked.png";
        } else {
            ch.style.backgroundColor = "#f4f4f4";
            ch.style.opacity = "0.6";
            img.src = "images/unchecked.png";
        }
    }
    if (isDone(bihai)) {
        const form = document.querySelector('article');
        const new_div = document.createElement('div');
        new_div.id = "new-div";
        new_div.style.marginTop = "20px";
        new_div.style.marginBottom = "20px";
        new_div.style.padding = "20px";
        ans = chooseParagraph(bihai);
        const title = document.createElement('h1');
        title.textContent = "You got: " + ans[0];
        const paragraph = document.createElement('p');
        paragraph.textContent = ans[1];
        paragraph.style.marginTop = "18px";
        paragraph.style.marginBottom = "18px";
        const button = document.createElement('div');
        button.textContent = "Restart quiz";
        button.style.backgroundColor = "#cecece";
        button.style.height = "50px";
        button.style.textAlign = "center";
        button.style.lineHeight = "50px";
        button.addEventListener('mouseover', hover);
        button.addEventListener('mouseleave', hoverback)
        button.addEventListener('click', clickButton);
        new_div.appendChild(title);
        new_div.appendChild(paragraph);
        new_div.appendChild(button);
        form.appendChild(new_div);
    }
}

function isDone(biiii) {
    if (biiii['one'] && biiii['two'] && biiii['three'])
        return true;
    return false;
}

function chooseParagraph(biii) {
    const first = biii['two'] === biii['three'] ? biii['two'] : biii['one'];
    const ans = []
    ans.push(RESULTS_MAP[first].title);
    ans.push(RESULTS_MAP[first].contents);
    return ans;
}

function clickButton(event) {
    const choices = document.querySelectorAll(".choice-grid div");
    for (const ch of choices) {
        const img = ch.querySelector(".checkbox");
        ch.style.backgroundColor = "#f4f4f4";
        ch.style.opacity = "1";
        img.src = "images/unchecked.png";
    }
    const temp = event.currentTarget;
    temp.removeEventListener('click', clickButton);
    bihai['one'] = '';
    bihai['two'] = '';
    bihai['three'] = '';
    const rem = document.querySelector('#new-div');
    rem.remove();
    window.scrollTo(0, 0);
}

function hover(event) {
    const temp = event.currentTarget;
    temp.style.backgroundColor = "#e0e0e0";
}

function hoverback(event) {
    const temp = event.currentTarget;
    temp.style.backgroundColor = "#cecece";
}

let num = 0;
let bihai = { 'one': '', 'two': '', 'three': '' };
const choices = document.querySelectorAll(".choice-grid div");
for (const choice of choices) {
    choice.addEventListener('click', onClick);
}