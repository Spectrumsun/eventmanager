document.getElementById("add").onclick = function() {
	const node = document.createElement("li");
	node.className += 'list-group-item list-group-item-primary'
    const text = document.getElementById("addFacility").value;
    const textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}


