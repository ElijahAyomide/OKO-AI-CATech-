const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
        const detail = button.closest(".detail");
        const bottomDetail = detail.querySelector(".bottom-detail");

        if (bottomDetail.style.display === "block") {
            bottomDetail.style.display = "none";

            button.classList.remove("ph-minus");
            button.classList.add("ph-plus");
        } else {
            bottomDetail.style.display = "block";

            button.classList.remove("ph-plus");
            button.classList.add("ph-minus");
        }
    });
});

const faqIcons = document.querySelectorAll(".detail-header i");

faqIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        const currentQuestion = icon.closest(".question-details");
        const currentAnswer = currentQuestion.querySelector("p");

        document.querySelectorAll(".question-details").forEach(question => {
            const answer = question.querySelector("p");
            const questionIcon = question.querySelector(".detail-header i");

            if (question !== currentQuestion) {
                answer.classList.remove("active");
                questionIcon.classList.replace("ph-minus", "ph-plus");
                questionIcon.classList.remove("active-icon");
            }
        });

        currentAnswer.classList.toggle("active");

        if (currentAnswer.classList.contains("active")) {
            icon.classList.replace("ph-plus", "ph-minus");
            icon.classList.add("active-icon");
        } else {
            icon.classList.replace("ph-minus", "ph-plus");
            icon.classList.remove("active-icon");
        }
    });
});

const header = document.querySelector("header");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {

    header.classList.toggle("active");

    if(header.classList.contains("active")){
        menuIcon.classList.replace("ph-list","ph-x");
    }else{
        menuIcon.classList.replace("ph-x","ph-list");
    }

});