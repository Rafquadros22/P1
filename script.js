$(document).ready(function () {
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

      // for loop that runs object emotions. that compares values with 75%. if else statement.

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


      console.log("this is sortable", sortable);

      function keyword() {
        //loop through all emotions

        var emotionsArray = [];

        for (var i = 0; i < emotions.length; i++) {
          emotionsArray.push({ key: key, value: value });
        }


      }

      keyword();
    });


  });



  function search() {
    var q = $("#query").val();
    var request = gapi.client.youtube.search.list({
      q: q,
      part: "snippet",
    });
  }



  $("#btn_test2").on("click", function () {
    search();

    //array of random search terms (made them code related)
    var searchTerms = [
      "factory%20functions",
      "data%20structures",
      "array%20functions%20javascript",
      "composition%20over%20inheritance",
      "lambda%20functions",
      "streams%20java",
      "higher%20order%functions%javascript",
      "functional%20programming",
      "c++%20lambda%20functions",
      "sorting%20algorithms",
    ];

    //a function to get a random search term

    var getSearchTerm = () =>
      searchTerms[Math.floor(Math.random() * (searchTerms.length - 1))];

    //variable for your API_KEY

    var YOUTUBE_API_KEY = "AIzaSyAYnfySKAuvwl898jg6aLT4quFJky9eXiw";

    //url from YouTube docs modified for my random term and API key,

    var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${getSearchTerm()}&key=${YOUTUBE_API_KEY}`;

    //fetch function following the aforementioned process

    fetch(url)
      .then((response) => response.json())

      .then((data) => {
        console.log(data);

        console.log(data.items[0].id.videoId);

        //console.log above is to help access proper data in the JSON

        //object .

        //set iframe source to proper URL (notice same dynamic strings

        //used above)

        $("#video").attr(
          `src`,
          `https://www.youtube.com/embed/${data.items[0].id.videoId}`
        );
      });
  });
});
