const videoAccordions = document.getElementsByClassName("video_accordion");

for (let i = 0; i < videoAccordions.length; i++) {
    videoAccordions[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        panel.style.display = (panel.style.display === "block") ? "none" : "block";
        
    });
}
