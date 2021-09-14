(function(){
    window.addEventListener("scroll", function () {
        if (this.scrollY > 20){
            document.querySelector('.navbar').classList.add("sticky");
      }else{
                document.querySelector('.navbar').classList.remove("sticky");
      }
    }, false);

    document.querySelector(".menu-btn")
    .addEventListener("click", (event) => {
        document.querySelector('.navbar .menu').classList.toggle("active");
        document.querySelector('.menu-btn i').classList.toggle("active");
});



})();