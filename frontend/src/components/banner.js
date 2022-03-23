import {createElement} from "@/utils/render";

const getTemplate = () => {
  return `<div class="text-center mb-5">
<img src="/assets/landscape/banner-xs_datejust-36_portrait.jpg" class="img-fluid" alt="banner">
 </div>`;
}

export default function () {
  const template = getTemplate();
  return createElement(template);
}
