$(document).ready(function(){
var flickerAPI = "https://jsonplaceholder.typicode.com/posts";
  $.getJSON( flickerAPI)
    .done(function( data ) {
      $.each( data , function( index, value ) {
        console.log(data);
        // $(".content").append('<p>' + value.userId + '</p>');
        // $(".content").append('<p>' + value.id + '</p>');
        $(".content").append('<p>' + 'Title: ' + value.title + '</p>');
        $(".content").append('<p>' + '<p>Body:</p>'+ value.body + '</p>');
        $(".content").append('<hr>');
      });
    });
    
});

