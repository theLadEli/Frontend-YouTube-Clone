var descriptionCollapsed = true;

function toggleDescription() {

    if (descriptionCollapsed == true){
        document.getElementById("video-description").style.maxHeight = "none"
        descriptionCollapsed = false;

        document.getElementById("show-more").innerText = "Show less"
    } else {
        document.getElementById("video-description").style.maxHeight = "60px"
        descriptionCollapsed = true;

        document.getElementById("show-more").innerText = "Show more"
    }

}