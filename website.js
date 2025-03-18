function showSidebar(){
    var sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    
}
function hideSidebar(){
    var sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    
}
window.addEventListener("scroll",function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})