function editElement(element, replacer, replaceWith) {
    element.textContent = element.textContent.replaceAll(replacer, replaceWith);
}