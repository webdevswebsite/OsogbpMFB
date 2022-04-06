(function (window, document) {

  function handleSidebarToggling() {
    function openSidebar(e) {
      var sidebarContainer = e.currentTarget.closest('.sidebar-container');
      sidebarContainer.classList.toggle('sidebar-opened');
      var sidebarPusher = sidebarContainer.querySelector('.sidebar-pusher');
      sidebarPusher.addEventListener('click', closeSidebar);
    }
    function closeSidebar(e) {
      e.currentTarget.closest('.sidebar-container').classList.remove('sidebar-opened');
      e.currentTarget.removeEventListener('click', closeSidebar);
    }

    var sidebarToggles = document.querySelectorAll('.sidebar-toggle');
    Array.prototype.forEach.call(sidebarToggles, function (sidebarToggle) {
      sidebarToggle.addEventListener('click', openSidebar);
    });
  }
  
  handleSidebarToggling();

})(window, document);