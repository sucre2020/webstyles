
//js for toggle menu

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px"
function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "700px";
    }
    else
    {
        MenuItems.style.maxHeight = "0px";
    }
}