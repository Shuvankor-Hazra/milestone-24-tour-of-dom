const sections = document.querySelectorAll("section");
for(const section of sections){
    section.style.border = "2px solid steelBlue"
    section.style.marginTop = "10px";
    section.style.borderRadius = "15px";
    section.style.paddingLeft = "15px";
    section.style.backgroundColor = "lightGray";
}

// const placesContainer = document.getElementById("places-container");
// placesContainer.style.backgroundColor = "yellow"


const placesContainer = document.getElementById("places-container");
placesContainer.classList.add("text-center");
placesContainer.classList.remove("large-text");


