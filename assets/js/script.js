$(document).ready(function(){
  var url = "https://jsonplaceholder.typicode.com/posts/";
  var userInfoUrl = "https://jsonplaceholder.typicode.com/users/";
  var apiData = {};
  $.ajax(url)
  .done(function( data ) {
    apiData = data;
    $.each( data , function( index, value ) {
      $(".content-body").append('Title:' + '<p class="title" data-post="'+value.id+'" data-user="'+ value.userId +'" id="'+ index +'">'  + value.title + '</p>');
      $(".content-body").append('<p>' + '<p>Body:</p>'+ value.body + '</p>');
      $(".content-body").append('<hr>');
    });
  });

  $(document).on('click','.title',function(e){
    var postId = $(this).data('post');
    getPostDetail(postId);
    var userId = $(this).data('user');
    $(".content-body").hide();
    $(".content-details").show();
    $(".content-details-v1").show();

    $.get(userInfoUrl + userId, function(data){
      console.log(data);

      var template = "<div>" + "<b>" +"USER INFO" + "</b>" +"</div>" +
                     "<div>" + "ID : " + data.id + "</div>" +
                     "<div>" + "Name : " + data.name + "</div>" +
                     "<div>" + "Username : " + data.username + "</div>" +
                     "<div>" + "Email : " + data.email + "</div>" +
                     "<div>" + "Address : " + "{" + "</div>" +
                     "<div>" + "Street : " + data.address.street + "</div>" +
                     "<div>" + "Suite : " + data.address.suite + "</div>" +
                     "<div>" + "City : " + data.address.city + "</div>" +
                     "<div>" + "Zipcode : " + data.address.zipcode + "</div>" +
                     "<div>" + "Geo : " + "{" + "</div>" +
                     "<div>" + "Lat. : " + data.address.geo.lat + "</div>" +
                     "<div>" + "Lang. : " + data.address.geo.lng + "</div>" +
                     "<div>" + "Phone : " + data.phone + "</div>" +
                     "<div>" + "Website : " + data.website + "</div>" +
                     "<div>" + "Company : " + "{" + "</div>" +
                     "<div>" + "Name : " + data.company.name + "</div>" +
                     "<div>" + "CatchPhrase : " + data.company.catchPhrase + "</div>" +
                     "<div>" + "bs : " + data.company.bs + "</div>" +
                     "<div>" + "<button class='goback'>" + "Go Back" + "</button>" + "</div>";
      $(".content-details").html(template);
    });   
  });

  $(document).on('click', '.goback', function(){
    $(".content-body").show();
    $(".content-details").hide();
    $(".content-details-v1").hide();
  }); 

  function getPostDetail(postId) {
    $.get(url + postId).done(function(data){


      var template = "<div>" + "<b>" + "POST DETAILS" + "</b>" + "</div>" +
                     "<div>" + "User ID : " + data.userId + "</div>" +
                     "<div>" + "ID : " + data.id + "</div>" +
                     "<div>" + "Title : " + data.title + "</div>" +
                     "<div>" + "Body : " + data.body + "</div>";
      $(".content-details-v1").html(template);
    });
  }
});

