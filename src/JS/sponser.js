const sponsors = [
  {
    tier: "Platinum",
    part: "Sponsor",
    images: ["/src/image/Sponsor/SharpEconomy.png"],
  },
  {
    tier: "Hiring",
    part: "Partner",
    images: ["/src/image/SongGPT.png"],
  },
  {
    tier: "In Kind",
    part: "Sponsor",
    images: [
      "/src/image/Kind/buddy.png",
      "/src/image/Kind/xyz-logo.png",
      "/src/image/Kind/cake.png",
      "/src/image/Kind/balsamiq.png",
      "/src/image/Kind/AoPS.png",
      "/src/image/Kind/aptos.webp",
      "/src/image/Kind/TPF(1).png",
    ],
  },
  {
    tier: "Platform",
    part: "Partner",
    images: ["/src/image/Sponsor/dorahacks.webp"],
  },
];

const sponsorList = document.getElementById("sponsor-list");

sponsors.forEach(({ tier, images, part }) => {
  if (images.length > 0) {
    const section = document.createElement("div");
    section.classList.add("mb-12");

    const title = document.createElement("h2");
    title.classList.add(
      "text-6xl",
      "font-bold",
      "text-center",
      "mb-8",
      "uppercase",
      "mt-8",
      "md:mt-4"
    );

    // Corrected innerHTML to dynamically display the part (Sponsor/Partner)
    title.innerHTML = `${tier} <span class="text-[#db0c26]">${part}</span>`;

    section.appendChild(title);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add(
      "mt-8",
      "mb-8",
      "flex",
      "flex-wrap",
      "justify-center",
      "gap-8"
    );

    images.forEach((src) => {
      const imgWrapper = document.createElement("div");
      imgWrapper.classList.add(
        "p-4",
        "bg-white",
        "rounded-lg",
        "shadow-lg",
        "border-2",
        "border-white",
        "hover:border-pink-600",
        "transition",
        "duration-300"
      );

      const img = document.createElement("img");
      img.src = src;
      img.alt = `${tier} ${part}`;
      img.classList.add(
        "w-24",
        "h-24",
        "object-contain",
        "transition-transform",
        "duration-300",
        "ease-in-out",
        "transform",
        "hover:scale-110"
      );

      imgWrapper.appendChild(img);
      imageContainer.appendChild(imgWrapper);
    });

    section.appendChild(imageContainer);
    sponsorList.appendChild(section);
  }
});
