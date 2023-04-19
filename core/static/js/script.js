/* --------------------------------------------- 
# SCRIPTS 
--------------------------------------------- */

// 1) Script to auto close the alert after 3s
window.setTimeout(function() {
    $(".alert").fadeTo(500, 0).slideUp(500, function() {
        $(this).remove();
    });
}, 3000);

// 2) Function to active navbar links
// Note; It will be replaced by django template tag soon
var active = '.links';
$(active).on('click', function() {
    $(active).removeClass('active');
    $(this).addClass('active');
});