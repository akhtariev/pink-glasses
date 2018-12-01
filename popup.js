let maskButton = document.getElementById("maskButton");
let unmaskButton = document.getElementById("unmaskButton");

maskButton.onclick = () => {
    alert('Mask button clicked');

    chrome.tabs.executeScript({
        code: '(' + fn + ')();'
    });

    function fn() {
        search(document.body);

        function search(htmlElem) {
            let subElem;
            let next;

            switch (htmlElem.nodeType) {
                case 1:  // Element
                case 9:  // Document
                case 11: // Document fragment
                    subElem = htmlElem.firstChild;
                    while (subElem) {
                        next = subElem.nextSibling;
                        search(subElem);
                        subElem = next;
                    }
                    break;
                case 3: // Text node
                    handleText(htmlElem);
                    break;
            }
        }

        function handleText(textNode) {
            let v = textNode.nodeValue;
            if (v.includes("the")) {
                v = v.replace("the", "FUCK");
            } else if (v.includes("The")) {
                v = v.replace("The", "FUCK");
            }
            textNode.nodeValue = v;
        }
    }
};

unmaskButton.onclick = () => {
    console.log("Unmask button clicked.");
    alert("Unmask button clicked.");
};