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
            let v = textNode.nodeValue.trim();

    
            if (v.length > 0) {
                result = getCurseWordsAndUpdate(v, textNode);
            }
        }

        function getCurseWordsAndUpdate(text, textNode) {

            var url = "https://neutrinoapi.com/bad-word-filter?api-key=5VYXBGEqqlAfMpoJyIIbzHCUQ5YTtidiBbfuUlY6NkKIDXk9&user-id=roman1&content=" + encodeURI(text);

            var xhr = new XMLHttpRequest();
        
            xhr.open("POST", url, true);
        
            xhr.onload = function() {
                var result = xhr.responseText;
        
                if (this.status === 200) {
                    alert(result);
                    console.log(text + "!!!" + result);
                    textNode.nodeValue = "hi";
                } else if (this.status === 400) {
                    console.log("failed call");
                }
            }
        
            xhr.send(null);
        }


        
    }
};

unmaskButton.onclick = () => {
    console.log("Unmask button clicked.");
    alert("Unmask button clicked.");
};