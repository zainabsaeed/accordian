var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) 
{
    acc[i].addEventListener("click", function() 
    {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "flex") 
        {
            content.style.display = "none";
        } 
        else 
        {
            content.style.display = "flex";
        }
    });
}