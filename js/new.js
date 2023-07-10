function formData() {
    var inputEmail3 = document.forms["userform"]["Email"]
    var inputPassword3 = document.forms["userform"]["Password"]
    if (inputEmail3.value == "") {
        window.alert("Email");
        inputEmail3.focus();
        return false;
}

if (inputPassword3.value == "") {
    window.alert("Password");
    inputPassword3.focus();
    return false;
}
return true;
}

//swiper//
var swiper = new Swiper(".new-arrival", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  