$(document).ready(function () {
  //global variables
  var globalKey = [];

  var globalValue;

  $("#image-display").hide();
  $("#btn_test").on("click", function (event) {
    function clearArray() {
      return (globalKey = []);
    }

    clearArray();

    $("#image-display").show();

    event.preventDefault();

    $("#emotion-dis").empty();

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

      // console.log(response);

      $("#image-display").attr("src", $("#inp_test").val());

      var emotions = response.faces[0].attributes.emotion;

      // console.log(emotions);

      var emotionDisplay = JSON.stringify(emotions);

      // $("#emotion-dis").html(emotionDisplay);


      $.each(emotions, function (key, value) {
        globalKey.push(emotions);

        $("#emotion-dis").append(
          key + " : " + Math.round(value * 1) + " % " + "<br>"
        );
      });

      var key = Object.keys(globalKey);
      var value = Object.values(globalKey);
      var listEmotion = value[0];

      console.log("this is key", key);
      console.log("this is value", value[0]);

      var sortable = [];
      for (var emo in listEmotion) {
        sortable.push([emo, listEmotion[emo]]);
      }

      sortable.sort(function (b, a) {
        return b[1] - a[1];
      });

      console.log("this is sortable", sortable[6][0]);

      var finalEmotion =  sortable[6][0];

      console.log(finalEmotion)

      var angryMusic = [
        'https://www.youtube.com/embed/watch?v=SBjQ9tuuTJQ&list=PL_MH8gOS_ETiNT1NF8B46JYHZe6fXWfVW',
        'https://www.youtube.com/embed/watch?v=_4VCpTZye10&list=PL_MH8gOS_ETiNT1NF8B46JYHZe6fXWfVW&index=2'
      ]
      var happyMusic = [
        'https://www.youtube.com/embed/watch?v=SBjQ9tuuTJQ&list=PL_MH8gOS_ETiNT1NF8B46JYHZe6fXWfVW',
        'https://www.youtube.com/embed/watch?v=_4VCpTZye10&list=PL_MH8gOS_ETiNT1NF8B46JYHZe6fXWfVW&index=2'
      ]
      var angryMusic = [
        'https://www.youtube.com/embed/watch?v=SBjQ9tuuTJQ&list=PL_MH8gOS_ETiNT1NF8B46JYHZe6fXWfVW',
        'https://www.youtube.com/embed/watch?v=_4VCpTZye10&list=PL_MH8gOS_ETiNT1NF8B46JYHZe6fXWfVW&index=2'
      ]
      var angryMusic = [
        'https://www.youtube.com/embed/watch?v=SBjQ9tuuTJQ&list=PL_MH8gOS_ETiNT1NF8B46JYHZe6fXWfVW',
        'https://www.youtube.com/embed/watch?v=_4VCpTZye10&list=PL_MH8gOS_ETiNT1NF8B46JYHZe6fXWfVW&index=2'
      ]
      var angryMusic = [
        'https://www.youtube.com/embed/watch?v=SBjQ9tuuTJQ&list=PL_MH8gOS_ETiNT1NF8B46JYHZe6fXWfVW',
        'https://www.youtube.com/embed/watch?v=_4VCpTZye10&list=PL_MH8gOS_ETiNT1NF8B46JYHZe6fXWfVW&index=2'
      ]
      var angryMusic = [
        'https://www.youtube.com/embed/watch?v=SBjQ9tuuTJQ&list=PL_MH8gOS_ETiNT1NF8B46JYHZe6fXWfVW',
        'https://www.youtube.com/embed/watch?v=_4VCpTZye10&list=PL_MH8gOS_ETiNT1NF8B46JYHZe6fXWfVW&index=2'
      ]
      var angryMusic = [
        'https://www.youtube.com/embed/watch?v=SBjQ9tuuTJQ&list=PL_MH8gOS_ETiNT1NF8B46JYHZe6fXWfVW',
        'https://www.youtube.com/embed/watch?v=_4VCpTZye10&list=PL_MH8gOS_ETiNT1NF8B46JYHZe6fXWfVW&index=2'
      ]

      if(finalEmotion == "anger") {
        var index = Math.floor(Math.random() * angryMusic.length)
        var url = angryMusic[index]
        $("#video").attr(
          `src`,
          `${url}`
        )
      }
      if(finalEmotion == "happiness") {
        var index = Math.floor(Math.random() * angryMusic.length)
        var url = happyMusic[index]
        $("#video").attr(
          `src`,
          `${url}`
        )
      }if(finalEmotion == "anger") {
        var index = Math.floor(Math.random() * angryMusic.length)
        var url = angryMusic[index]
        $("#video").attr(
          `src`,
          `${url}`
        )
      }if(finalEmotion == "anger") {
        var index = Math.floor(Math.random() * angryMusic.length)
        var url = angryMusic[index]
        $("#video").attr(
          `src`,
          `${url}`
        )
      }if(finalEmotion == "anger") {
        var index = Math.floor(Math.random() * angryMusic.length)
        var url = angryMusic[index]
        $("#video").attr(
          `src`,
          `${url}`
        )
      }if(finalEmotion == "anger") {
        var index = Math.floor(Math.random() * angryMusic.length)
        var url = angryMusic[index]
        $("#video").attr(
          `src`,
          `${url}`
        )
      }if(finalEmotion == "anger") {
        var index = Math.floor(Math.random() * angryMusic.length)
        var url = angryMusic[index]
        $("#video").attr(
          `src`,
          `${url}`
        )
      }
    
      function keyword() {
        //loop through all emotions

        var emotionsArray = [];

        for (var i = 0; i < emotions.length; i++) {
          emotionsArray.push({
            key: key,
            value: value,
          });
        }
      }

      keyword();
    });
  });

  // function search() {
  //   var q = $("#query").val();
  //   var request = gapi.client.youtube.search.list({
  //     q: q,
  //     part: "snippet",
  //   });
  // }
  //  search();

  $("#btn_test2").on("click", function () {
 
    //array of random search terms (made them code related)
 
    
    var searchTerms = [
      "angry%20music",
      "happy%20music",
    ];

    //a function to get a random search term

     
    searchTerms[Math.floor(Math.random() * (searchTerms.length - 1))];

    //variable for your API_KEY
    // var YOUTUBE_API_KEY = "AIzaSyARhin8yRhObPjOSwmc2Ez89sVT_ZcBE_o";

    //url from YouTube docs modified for my random term and API key,

    // var queryUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=angry%20music&key=AIzaSyARhin8yRhObPjOSwmc2Ez89sVT_ZcBE_o&key=&type=video`;

      function videoRender(){
    $.ajax({
      type: "GET",
      url :`https://www.googleapis.com/youtube/v3/search`,
      data:{
        key:"AIzaSyAgsj626_JWEqcXg_HB2ulaO9ZfWOK0A00",
        q: "angry-music",
        part:"snippet",
        maxResults:5,
        type: "video",
        videoEmbeddable: true,
      },
      //success will calll a fucntion with data we receive back from our get request
      success:function(data){
        embedVideo(data);
      },
      // error will console log request failed
      error: function(response){
        console.log("request failed")
        console.log(response);
      }
        })
     
       
       function embedVideo(data){
        $('#video').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
        
        $('h3').text(data.items[0].snippet.title)
        
        $('.description').text(data.items[0].snippet.description)

       }
        
     
     
       };
       videoRender();
        });
});

 
  
  
 

