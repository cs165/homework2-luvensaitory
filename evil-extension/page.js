const MATCH_LIST = {
    'there': 'their',
    'their': 'there',
    'they\'re': 'there',
    'There': 'Their',
    'Their': 'There',
    'They\'re': 'There',
    'THERE': 'THEIR',
    'THEIR': 'THERE',
    'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
    // TODO(you): Implement this function! See HW spec for details.
    if (node.nodeType == Node.TEXT_NODE) {
        let seg = node.textContent.trim().split(" ");
        let newString = "";
        for (let i = 0; i < seg.length; i++) {
            if (MATCH_LIST[seg[i]]) {
                newString += MATCH_LIST[seg[i]] + " ";
            } else
                newString += seg[i] + " ";
        }
        node.textContent = newString;
    } else if (node.nodeType == Node.ELEMENT_NODE) {
        const childs = node.childNodes;
        for (const child of childs) {
            transformTextNodes(child);
        }
    } else { return; }
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Evil update...');