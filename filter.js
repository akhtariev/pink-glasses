 var filter = document.getElementById('maskButton');

 filter.onclick = function(element) {
    // console.log("s");
    search(document.body);
  };



  function search(htmlElem) {

    var subElem;
    var next;

    

    switch(htmlElem.nodeType) {
        case 1:  // Element
		case 9:  // Document
        case 11: // Document fragment
			subElem = htmlElem.firstChild;
			while (subElem) 
			{
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


function handleText(textNode) 
{

  var v = textNode.nodeValue;
  
  alert(v);
  


	v = v.replace(/\bfuck\b/g, "duck");
	
	textNode.nodeValue = v;
}