

function changeStateCardOnClick(selector, defaultText) {
    
  $(selector).click(function (e) {
    e.preventDefault();

    let card = $(this).closest(".card");
    let subTtitle = card.find(".card__sub_title").text();

    if (card.hasClass("card_theme-default")) {
      card.removeClass("card_theme-default");
      card.removeClass("card_theme-default_hover");
      card.addClass("card_theme-selected");
    } else if (card.hasClass("card_theme-selected")) {
      card.addClass("card_theme-default");
      card.removeClass("card_theme-selected");
      card.removeClass("card_theme-selected_hover");
    }

    if (subTtitle == "с фуа-гра" && card.hasClass("card_theme-selected")) {
      card.find(".card__action").text("Печень утки разварная с артишоками.");
    } else if (subTtitle == "с рыбой" && card.hasClass("card_theme-selected")){
      card.find(".card__action").text("Головы щучьи с чесноком да свежайшая сёмгушка.");
    } else if (subTtitle == "с курой" && card.hasClass("card_theme-selected")){
      card.find(".card__action").text("Филе из цыплят с трюфелями в бульоне.");
    } else if (card.hasClass("card_theme-default")) {
      card.find(".card__action").html(defaultText);
    }
    
    changeStateCardOnClick(".card__action__link",defaultText);

  });
}


$(document).ready(function () {

  const defaultText = 'Чего сидишь? Порадуй котэ, <span><a href="#" class="card__action__link">купи</a>.</span>'

  changeStateCardOnClick(".card__body", defaultText);
  changeStateCardOnClick(".card__action__link", defaultText);

  let disabledCard = $(".card");

  disabledCard.each(function(){
    let subTtitle = $(this).find(".card__sub_title").text();

    if ($(this).hasClass("card_theme-default")) {
      $(this).find(".card__action").html(defaultText);
      changeStateCardOnClick(".card__action__link",defaultText);
    } else if ($(this).hasClass("card_theme-disabled")){
      $(this).find(".card__action").text("Печалька, " + subTtitle + " закончился.");
    $(this).find(".card__body__inner").addClass("card_halfvision");
    }

    if (subTtitle == "с фуа-гра" && $(this).hasClass("card_theme-selected")) {
      $(this).find(".card__action").text("Печень утки разварная с артишоками.");
    } else if (subTtitle == "с рыбой" && $(this).hasClass("card_theme-selected")){
      $(this).find(".card__action").text("Головы щучьи с чесноком да свежайшая сёмгушка.");
    } else if (subTtitle == "с курой" && $(this).hasClass("card_theme-selected")){
      $(this).find(".card__action").text("Филе из цыплят с трюфелями в бульоне.");
    } else if ($(this).hasClass("card_theme-default")) {
      $(this).find(".card__action").html(defaultText);
    }

  })


  $(".card__body").mouseleave(function () {

    let card = $(this).parent();

    if (card.hasClass("card_theme-default")) {
      card.toggleClass("card_theme-default_hover");
    } else if (card.hasClass("card_theme-selected")) {
      card.toggleClass("card_theme-selected_hover");
    }

  });

});