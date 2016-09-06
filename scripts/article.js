// write code here

var articles = [];

function Article (selects) {    
    this.title = selects.title;
    this.category = selects.category;
    this.body = selects.body;
    this.publishedOn = selects.publishedOn;
}

// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
    // e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "LI") {
        // List item found!  Output the ID!
        console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
	}
});

$("nav-list").on('click', function(e) {

});
