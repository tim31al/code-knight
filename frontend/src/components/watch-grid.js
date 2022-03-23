import {imgDir} from "@/const";
import {createElement} from "@/utils/render";


const getTemplate = (items) => {
  const tmpl = items.map(({id, model_number, small_title}) => {
    const titles = small_title.split(' ');
    titles.pop();
    const title = titles.join(' ');
    const imgName = `${model_number}.png`;

    return `<div class="col-6 col-md-4 mb-4 hoverable" data-id="${id}">
<img class="img-fluid" src="${imgDir}${imgName}" alt="title">
<p class="text-center mt-3 mb-0">Rolex</p>
<p class="text-center text-uppercase">${title}</p>
</div>
`;
  }).join('');

  return `<div id="watch-grid" class="container-md mt-5"><div class="row">${tmpl}</div></div>`;
};

export default  {
  getElement(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const template = getTemplate(data);
          const element = createElement(template);

          resolve(element);
        })
        .catch(err => reject(err));
    })
  },
  setHandler(handler) {
    const watchLinks = document.querySelectorAll('#watch-grid div.hoverable');
    watchLinks.forEach((link) => {
      link.addEventListener('click', handler);
    })
  }


}
