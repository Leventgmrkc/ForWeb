
$( function() {
    $( "#birth" ).datepicker()
} );







$(function(){
    var availableTags = [
         "Python",
        "C",
        "C++",
        "C#",
        "Java",
        "JavaScript",
        "Ruby",
        "Lisp",
        "Fortran",
        "Ada",
        "Kotlin",
        "Flutter",
      ];
      $( "#dil" ).autocomplete({
        source: availableTags
      });

});
