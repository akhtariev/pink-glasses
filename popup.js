let maskButton = document.getElementById("maskButton");
let unmaskButton = document.getElementById("unmaskButton");

maskButton.onclick = () => {
    // alert('Mask button clicked');

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
            
            var emojis = ['\u{1F4A9}', '\u{1F601}','\u{1F602}','\u{1F603}','\u{1F604}','\u{1F605}','\u{1F60D}','\u{1F430}','\u{1F431}','\u{1F437}'];

            chrome.storage.sync.get('version', function(data) {
                

                if (data.version === "generic") {

                    var url = "https://neutrinoapi.com/bad-word-filter?api-key=5VYXBGEqqlAfMpoJyIIbzHCUQ5YTtidiBbfuUlY6NkKIDXk9&user-id=roman1&content=" + encodeURI(text);

                    var xhr = new XMLHttpRequest();
                
                    xhr.open("POST", url, true);
                
                    xhr.onload = function() {
                        var result = xhr.response;
                
                        if (this.status === 200) {
                            // console.log(result);
                            result = JSON.parse(result);
                            if (result["is-bad"]) {
                                let badWords = result["bad-words-list"];
                                let final = textNode.nodeValue;
                                for (let badWord of badWords) {
                                    let toReplace = emojis[Math.floor(Math.random() * emojis.length)];
                                    final = final.replace(badWord, toReplace);
                                    final = final.replace(badWord.charAt(0).toUpperCase() + badWord.substr(1), toReplace);
                                    final = final.replace(badWord.toUpperCase(), toReplace);
                                }
        
                                textNode.nodeValue = final;
        
                            }
                            
                        } else if (this.status === 400) {
                            //
                        }
                    }
                
                    xhr.send(null);

                } else if (data.version === "school") {
                    let words = text.split(" ");
                    var schoolVocab = ["Fuck", "bitch", "ass", "bitching", "fag", "shit", "fuck", "fag.", "shit.", "punks", "hell.", "loser"];
            
                    for(let word of words) {
                         if (schoolVocab.includes(word)) {
                            textNode.nodeValue = textNode.nodeValue.replace(word, emojis[Math.floor(Math.random() * emojis.length)]);
                         }
                    }  

                }
              });

                    
        }


        
    }
};

unmaskButton.onclick = () => {
    console.log("Unmask button clicked.");
    // alert("Unmask button clicked.");
};