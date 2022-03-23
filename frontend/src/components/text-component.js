import {createElement} from "@/utils/render";

const getTemplate = () => {
  return `
  <div class="text-center">
    <p class="fw-bold">Experience a Rolex</p>
    <h1 class="text-uppercase">Rolex watches</h1>
    <p class="text-center">Rolex watches are crafted from the fines rw materials and assembled with scrupulous attention to detail. Every component is designed, developed and produced to the most exacting standartsd.</p>
</div>
  `;
}

export default function () {
  return createElement(getTemplate());
}
