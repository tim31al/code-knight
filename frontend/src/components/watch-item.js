import {apiUrl, imgDir, RenderPosition} from "@/const";
import {createElement, render} from "@/utils/render";

const getTemplate = ({model_number, model_case, water_resistance, large_title, movement, caliber, description, price}) => {
  const imgName = `${model_number}.png`;
  return `<div class="row">
<div class="col-sm-1 col-md-6 order-md-last">
 <img class="img-fluid" src="${imgDir}/${imgName}" alt="image">
</div>
<div class="col-sm-1 col-md-6">
 <p><span class="text-uppercase fw-bold">Model case</span><br/>${model_case}</p>
 <p><span class="text-uppercase fw-bold">Water resistance</span><br/>${water_resistance}</p>
 <p><span class="text-uppercase fw-bold">Movement</span><br/>${movement}</p>
 <p><span class="text-uppercase fw-bold">Caliber</span><br/>${caliber}</p>
 <p><span class="text-uppercase fw-bold">Title</span><br/>${large_title}</p>
 <p><span class="text-uppercase fw-bold">Description</span><br/>${description}</p>
 <p><span class="text-uppercase fw-bold">Price</span><br/>${price}</p>
</div>

</div>`;
}

export default function (container, id) {
  return new Promise(((resolve, reject) => {
    const url = `${apiUrl}?id=${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const template = getTemplate(data);
        const element = createElement(template);

        container.innerHTML = '';
        render(container, element, RenderPosition.AFTERBEGIN);
        resolve(true);
      })
      .catch(reject)
  }))
}
