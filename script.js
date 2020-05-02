$(document).ready(function () {
    $("#btn_test").on("click", function(event){
      event.preventDefault();
      $.post({
        url: "https://limitless-tor-79246.herokuapp.com/cors/fpp/detect",
        data: {
          key: "11e2d980d599766aa84847ae504d0f8257e7afacc76a285b05979fb7e17974e5",
          api_key: "iAkzJ9qQO4_kAbHayFcsVof5lMfA26ko",
          secret_key: "QciSc6-QLGy3AxZdnIEUnFgz_Jml88LY",
          image_url: $("#inp_test").val(),
          return_attributes: "emotion",
        },
        method: "POST",
      }).then(function (response) {
        // Get reference to existing tbody element, create a new table row element
        console.log(response);
       $("#image-display").attr("src", $("#inp_test").val());
         var emotions = response.faces[0].attributes.emotion;
         console.log(emotions);
        var emotionDisplay = JSON.stringify(emotions);
        // $("#emotion-dis").html(emotionDisplay);
        // for loop that runs object emotions. that compares values with 75%. if else statement.
        
        $.each(emotions, function(key, value){
          $("#emotion-dis").append(key +": " + value + '%'+ '<br>');
        });
        //if (value )
    });
     });
    });