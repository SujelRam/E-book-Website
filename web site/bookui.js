$(document).ready(function(){
    $("#Search").on("keyup",function(){
        var value=$(this).val().toLowerCase();

        $(".container div").filter(function() {

             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        })
    });
});
