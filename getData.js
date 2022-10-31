const data = fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const sectionElement = document.getElementById("articles--section");
    data?.articles?.forEach((a) => {
      const articleElement = document.createElement("article");
      sectionElement.appendChild(articleElement);

      const loremDescriptionElement = document.createElement("div");
      loremDescriptionElement.classList.add("lorem-description");
      articleElement.appendChild(loremDescriptionElement);

      const headerElement = document.createElement("header");
      loremDescriptionElement.appendChild(headerElement);

      const categoryElement = document.createElement("div");
      categoryElement.classList.add("category-label");
      categoryElement.textContent = a.category;
      headerElement.appendChild(categoryElement);

      const headlineElement = document.createElement("h2");
      headerElement.appendChild(headlineElement);

      const headlineAnchorElement = document.createElement("a");
      headlineAnchorElement.href = a.link;
      headlineAnchorElement.textContent = a.headline;
      headlineAnchorElement.style.color = "#000000";
      headlineAnchorElement.style.textDecorationLine = "none";
      headlineElement.appendChild(headlineAnchorElement);

      const descriptionTextElement = document.createElement("div");
      descriptionTextElement.classList.add("lorem-description--text");
      descriptionTextElement.textContent = a.description;
      loremDescriptionElement.appendChild(descriptionTextElement);

      const figureElement = document.createElement("figure");
      figureElement.style.height = a.thumbnail.height;
      figureElement.style.width = a.thumbnail.width;
      articleElement.appendChild(figureElement);

      const anchorElement = document.createElement("a");
      anchorElement.href = a.link;
      figureElement.appendChild(anchorElement);

      const imgElement = document.createElement("img");
      imgElement.src = a.thumbnail.src;
      anchorElement.appendChild(imgElement);

      const separatorElement = document.createElement("div");
      separatorElement.classList.add("separator");
      sectionElement.appendChild(separatorElement);
    });
  })
  .catch((error) => console.log(error));
