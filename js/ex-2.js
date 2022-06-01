document.addEventListener("DOMContentLoaded", () => {
    const accordion = document.querySelectorAll(".accordion");
    accordion.forEach(el => {
        el.addEventListener("click", (e) => {
            const self = e.currentTarget;
            const control = self.querySelector(".accordion__control");
            const content = self.querySelector(".accordion__content");
            self.classList.toggle("open");
            if (self.classList.contains("open")) {
                control.setAttribute("aria-expanded", true);
                content.setAttribute("aria-hidden", false);
            } else {
                control.setAttribute("aria-expanded", false);
                content.setAttribute("aria-hidden", true);
            }
        });
    });
});