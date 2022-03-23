import {createElement} from "@/utils/render";

export default {
  getElement() {
    const template = `
<header>
    <div class="container-md">
        <nav class="navbar navbar-expand-md navbar-light ">
            <div class="container-fluid">
        <a id="home-brand" class="navbar-brand" href="#">
          <img src="/assets/landscape/official-retailer-plaque-en.png" width="100" height="50" class="d-inline-block align-top" alt="" loading="lazy">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
          <ul class="navbar-nav mr-auto mb-2 mb-md-0">
            <li class="nav-item active">
              <a id="home-link" class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Day-date</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Date Just Pearl</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Date Just</a>
            </li>
          </ul>
        </div>
      </div>
        </nav>
    </div>
</header>`;

    return createElement(template);
  },

  setHomeListener(handler) {
    const homeLink = document.getElementById('home-link');
    const homeBrand = document.getElementById('home-brand');
    if (!homeLink || !homeBrand) {
      throw new Error('Elements not found')
    }
    homeLink.addEventListener('click',handler);
    homeBrand.addEventListener('click', handler);
  },

  setListeners(handler) {
    const links = document.querySelectorAll('a:not(#home-link).nav-link');
    links.forEach((link) => {
      link.addEventListener('click', handler);
    })
  }
};
