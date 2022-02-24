
function open_thanks_modal() {
    var modal = document.getElementById("thanks-modal");
    modal.style.display = "block"
}

function close_thanks_modal() {
    var modal = document.getElementById("thanks-modal");
    modal.style.display = "none"
    window.location.reload(true)


}
window.onload = function (){
    // listner for sidebar-button
    var sidebar_button = document.getElementById("sidebar-button")
    sidebar_button.addEventListener("click" ,e =>{
        var sidebar_content = document.getElementById("sidebar-content")
        sidebar_content.style.visibility = "visible"
        sidebar_content.style.transform = "translateX(0%)"
    })
    // listner for more_details_button
    var read_more_button  = document.getElementById('more-details-button')
    if(read_more_button != null){
    read_more_button.addEventListener("click",btn =>{
        // toggling open class 
        var more_details = document.getElementById("more-details")
        more_details.classList.toggle("read_more_open")
        if(read_more_button.innerHTML === "Read More"){
            read_more_button.innerHTML = "Collapse"
        }else{
            read_more_button.innerHTML = "Read More"
        }

    })
}

    
    
    document.addEventListener("click" ,e =>{
        // this is for sidebar close
        var sidebar = document.getElementById("side-bar")
        var sidebar_content = document.getElementById("sidebar-content")
        var isclickonSidebar = sidebar.contains(e.target);
        var isclickonSidebarContent = sidebar_content.contains(e.target);
        if(!isclickonSidebar && !isclickonSidebarContent){
            sidebar_content.style.transform = "translate(100%)"
        }
    // services dropdown mobile
    const is_services_dropdown_menu_mobile = e.target.matches("[data-dropdown-button-mobile]")
    if(!is_services_dropdown_menu_mobile ) return
    if(is_services_dropdown_menu_mobile){
        let that_dropdown = e.target.closest("[data-dropdown-mobile]")
        that_dropdown.classList.toggle("active-mobile")
    }
    // dropdown desktop
    const is_services_dropdown_menu = e.target.matches("[data-dropdown-button]")
    if(!is_services_dropdown_menu && e.target.closest('[data-dropdown]') != null) return
    let currentDropdown
    if(is_services_dropdown_menu){
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle('active1')
        
    }
    document.querySelectorAll("[data-dropdown].active1").forEach(dropdown =>{
        if(dropdown === currentDropdown) return
        dropdown.classList.remove("active1")
    })
})
}

