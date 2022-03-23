import {RenderPosition} from "@/const";

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

export const replace = (container, element) => {
  const oldElement = container.firstChild;
  if (!oldElement) {
    render(container, element, RenderPosition.AFTERBEGIN);
    return;
  }

  container.replaceChild(element, container.firstChild);
}

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTER:
      container.after(element);
      break;
    case RenderPosition.BEFORE:
      container.before(element);
      break;
  }
};


