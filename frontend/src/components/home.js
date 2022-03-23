import textComponent from "@/components/text-component";
import {render} from "@/utils/render";
import {apiUrl, RenderPosition} from "@/const";
import watchGrid from "@/components/watch-grid";
import getBanner from "@/components/banner";

export default function (container, watchClickHandler) {
  container.innerHTML = '';

  const bannerContent = getBanner();
  render(container, bannerContent, RenderPosition.AFTERBEGIN);

  const textContent = textComponent();
  render(container, textContent, RenderPosition.BEFOREEND);

  watchGrid.getElement(apiUrl)
    .then(content => {
      render(container, content, RenderPosition.BEFOREEND);
    })
    .then(() => watchGrid.setHandler(watchClickHandler))
    .catch(console.error);
};
