function setCurrentTab(currentTab){
    var tabs = document.getElementsByClassName("tabs");
    for (var tab of tabs) {
        tab.classList.remove("active-tab");
    }
    currentTab.classList.add("active-tab");

    var pages = document.getElementsByClassName("pages");
    for (var page of pages) {
        page.style.display = 'none';
    }
    var currentPage = currentTab.id + "-page";
    document.getElementById(currentPage).style.display = 'block';
}