var filter = document.getElementById('maskButton');

filter.onclick = function (element) {
    alert('mask button clicked');

    chrome.tabs.executeScript({
        code: '(' + fn + ')();'
    });

    function fn() {
        alert('fuck');
        console.log('bitch');
        search(document.body);

        function search(htmlElem) {
            var subElem;
            var next;

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
            var v = textNode.nodeValue;
            alert(v);
            v = v.replace(/\bfuck\b/g, "duck");
            textNode.nodeValue = v;
        }
    }
};