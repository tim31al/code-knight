import '@/assets/css/style.css';
import {render} from "@/utils/render";
import {apiUrl, RenderPosition} from "@/const";
import navbar from "@/components/navbar";
import home from "@/components/home";
import watchItem from "@/components/watch-item";
import watchGrid from "@/components/watch-grid";


const [body] = document.getElementsByTagName('body');
const container = document.getElementById('app');

function watchClickHandler(evt) {
  evt.preventDefault();
  const target = evt.target.closest('div');
  watchItem(container, target.dataset.id)
}

function homeClickListener() {
  home(container, watchClickHandler);
}

function catalogClickListener(evt) {
  const el = evt.target;
  const catalogName = el.innerText;

  container.innerHTML = '';
  const url = `${apiUrl}?catalog=${catalogName}`;
  watchGrid.getElement(url)
    .then(element => {
      render(container, element, RenderPosition.AFTERBEGIN);
    })
    .then(() => watchGrid.setHandler(watchClickHandler))
    .catch(console.error);

}

// render navbar
render(body, navbar.getElement(), RenderPosition.AFTERBEGIN);
navbar.setHomeListener(homeClickListener);
navbar.setListeners(catalogClickListener);

// render home
home(container, watchClickHandler);
