class MyTag extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "";
    const description = this.getAttribute("description") || "";

    this.outerHTML = `
      <h2 class="text-blue-600 text-2xl">${title}</h2>
      <p class="text-green-500 italic">${description}</p>
    `;
  }
}
customElements.define("my-tag", MyTag);