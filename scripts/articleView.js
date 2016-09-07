

// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};


articleView.handleMainNav = function() {
    // Hide all the .tab-content sections, and then reveal
    // the single .tab-content section that is associated with
    // the clicked .tab element.
    $('.main-nav .tab').on('click', function() {
        var tab_id = $(this).attr('data-content');
        var selectedTab = $('#' + tab_id);
        $('section.tab-content').hide();
        selectedTab.show();
    });
    $('.main-nav .tab:first').click(); // Fake a click on the first .tab element to set up the page.
};

// Call the function on document load
$(document).ready(function() {
    articleView.handleMainNav();
});
