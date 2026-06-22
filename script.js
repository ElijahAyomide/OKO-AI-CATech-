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

const track = document.querySelector(".story-track");
const slides = document.querySelectorAll(".stories");

const nextBtn = document.getElementById("front-arrow");
const prevBtn = document.getElementById("back-arrow");

let currentIndex = 0;

function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    const gap = 32; // 2rem

    track.style.transform =
        `translateX(-${currentIndex * (slideWidth + gap)}px)`;
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < slides.length - 2) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
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

const viewButtons = document.querySelectorAll(".viewBtn");
const modal = document.getElementById("courseModal");
const closeBtn = document.getElementById("closeModal");

viewButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});