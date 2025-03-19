const communityPartners = [
  {
    images: [
      "/src/image/Cp/CSHARP.png",
      "/src/image/Cp/GDGDTU.png",
      "/src/image/Cp/wow.jpg",
      "/src/image/Cp/WebForge.png",
      "/src/image/Cp/theDevArmy.png",
      "/src/image/Cp/Tech4Hack.jpg",
      "/src/image/Cp/GrowthSquare.png",
      "/src/image/Cp/AssetMerkle.png",
      "/src/image/Cp/techsavvy.jpg",
    ],
  },
];

const communityList = document.getElementById("community-list");

communityPartners.forEach(({ images }) => {
  if (images.length > 0) {
    const section = document.createElement("div");
    section.classList.add("mb-12");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add(
      "mt-8",
      "mb-8",
      "flex",
      "flex-wrap",
      "justify-center",
      "gap-12"
    );

    images.forEach((src) => {
      const imgWrapper = document.createElement("div");
      imgWrapper.classList.add(
        "p-6", // Increased padding
        "bg-white",
        "rounded-lg",
        "shadow-lg",
        "border-2",
        "border-white",
        "hover:border-blue-600",
        "transition",
        "duration-300"
      );

      const img = document.createElement("img");
      img.src = src;
      img.alt = "Community Partner";
      img.classList.add(
        "w-32", // Increased width
        "h-32", // Increased height
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
    communityList.appendChild(section);
  }
});
