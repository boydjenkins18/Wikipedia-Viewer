$("button").on("click", () => {
  let keyWords = $("input").val();
  let api =
      "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&limit=6&search=" +
      keyWords +
      "&callback=?";

  $.getJSON(api, data => {
    $("#lists").html("");

    for (let i = 1; i < data[1].length; i++) {
      $("ol")
        .prepend(
        '<div class="jumbotron"><h2><a href="' +
        data[3][i] +
        '">' +
        data[1][i] +
        "</a></h2></li><p>" +
        data[2][i] +
        "</p>"
      )
        .slideDown();
    }
    $(".keyWords").val("");
  });
});

$(".keyWords").keypress(e => {
  if (e.keyCode === 13) {
    $("button").click();
  }
});
