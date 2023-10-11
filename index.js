const informatiom = [
  {
    parag: [
      "we have a plenty of models for you to test ride and purschase on site",

      "Grab your dream bike and join the fun",
      "Grab you dream bike both in Elmonte showroom & Florida Showroom",
    ],
  },
];

const websiteConten = () => {
  const spanHolder = document.querySelector(".paragraph-container");
  informatiom[0].parag.forEach((element) => {
    const paragHolder = document.createElement("p");
    paragHolder.innerText = `" ${element}"`;
    spanHolder.appendChild(paragHolder);
  });
};

websiteConten();
