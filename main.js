const navbars = document.querySelectorAll(".head li");

const texts = document.querySelectorAll(".texts div");

navbars.forEach(tab => {

    tab.addEventListener("click", function () {

        document.querySelector(".nav-item.active").classList.remove("active");

        tab.classList.add("active")

        texts.forEach(text => {

            if (text.getAttribute("data-content") == tab.getAttribute("data-target")) {

                text.classList.remove("d-none");

            } else {

                text.classList.add("d-none")

            }

        });

    })

});