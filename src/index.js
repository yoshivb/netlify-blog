import "./css/main.scss";

let first_carousel_slide = document.querySelector(".carousel-slide");
if(first_carousel_slide)
{
    document.querySelectorAll(".carousel-radio").forEach((item, index) =>
    {
        item.addEventListener("change", () =>
        {
            first_carousel_slide.style.marginLeft = `${index * -100}%`;
        });
    });
}