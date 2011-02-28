jQuery(document).ready(function() {
    $('a.annotation').each(function(index) {
        $(this).linkAnnotator();
    });
});