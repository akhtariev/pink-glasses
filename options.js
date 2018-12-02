let form = document.getElementById("sel");


let options = form.querySelectorAll("input");

    for (let option of options) {

        option.addEventListener("click", function () {
            option.defaultChecked = !option.defaultChecked;
            if (option.defaultChecked) {
    
                chrome.storage.sync.set({version: option.name}, function() {
                    console.log('version is ' + option.name);
                })
            }            
        });
    }
