(function (window, document) {

  function handleLoanBookmarkToggle() {
    var loanBookmarkToggles = document.querySelectorAll('.loan-grid-card .bookmark-toggle, .loan-modal .bookmark-toggle');
    Array.prototype.forEach.call(loanBookmarkToggles, function (bookmarkToggle) {
      bookmarkToggle.addEventListener('click', function (e) {
        e.currentTarget.closest('.loan-grid-card, .loan-modal').classList.toggle('bookmark');
      });
    });
  }

  function handleMarketPlaceBookmarksFilter() {
    var bookmarksToggleInput = document.querySelector('#bookmarks-toggle-input');
    bookmarksToggleInput.addEventListener('change', function () {
      var nonBookmarks = document.querySelectorAll('.marketplace .loan-grid-card:not(.bookmark)');
      Array.prototype.forEach.call(nonBookmarks, function (nonBookmark) {
        nonBookmark.closest('.grid-item').classList.toggle('hidden');
      });
    });
  }

  function setupMarketplaceTabBannerSync() {
    var bannerContentHolder = document.querySelector('.banner-content-holder');
    if (!bannerContentHolder) return;
    var radios = document.getElementsByName('marketplace-tabs');
    var bannerContent = {
      'marketplace-requests-tab': '<h2 class="title header-md text-heavy">Manage your loans<br>from anywhere.</h2><p class="description text-small text-bold">Lendgap makes it easy to organize and monitor all your loans.</p><div class="cta"><a class="btn btn-green btn-caps btn-chrome btn-shadow" href="lend-0.html">Offer Loan</a></div>',
      'marketplace-offers-tab': '<h2 class="title header-md text-heavy">Get a quick loan<br>whenever you need it.</h2><p class="description text-small text-bold">Lendgap gives you access to quick and personalized loan facilities.</p><div class="cta"><a class="btn btn-green btn-caps btn-chrome btn-shadow" href="borrow-0.html">Request Loan</a></div>'
    }
    for (var i = 0; i < radios.length; i++) {
      radios[i].addEventListener('change', function(e){
        if (e.currentTarget.checked) bannerContentHolder.innerHTML = bannerContent[e.currentTarget.id];
      });
      if (radios[i].checked) bannerContentHolder.innerHTML = bannerContent[radios[i].id];
    }
  }
  
  handleMarketPlaceBookmarksFilter();
  handleLoanBookmarkToggle();
  setupMarketplaceTabBannerSync();

})(window, document);