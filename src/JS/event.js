const events = [
  {
    title: "Bharat Shiksha Expo Hackathon",
    images: [
      { src: "/src/image/bharat1.jpg", description: "" },
      { src: "src/image/bharat2.jpg", description: "Judging Session" },
    ],
    description:
      "GDG On Campus MIET successfully hosted a 3-day hackathon at the India Expo Centre and Mart.  The event saw enthusiastic participation from students, with an impressive average of over 1500+ registrations.",
  },
  {
    title: "Maadhyam",
    images: [
      {
        src: "src/image/m1.jpg",
        description: "Exciting start of Maadhyam!",
      },
      { src: "src/image/m2.jpg", description: "Swag Delivery" },
      {
        src: "src/image/m3.jpg",
        description: "Team Picture",
      },
    ],
    description:
      "GDG ON CAMPUS MIET hosted a speaker session on May 4, 2024, with ~250+ attendees.  Sponsored by Orkes, SquareBoat, and MIET, the event featured four speakers from Google and BluSmart, covering iOS development, Google Cloud migration, web solutions, and patent research.  Attendees gained valuable tech insights, and the event concluded with swag giveaways.",
  },
  {
    title: "Fetchathon 1.0",
    images: [
      { src: "src/image/FETCH1.jpg" },
      { src: "src/image/FETCH2.jpg" },
      {
        src: "src/image/FETCH3.jpg",
        description: "Pitching innovative ideas",
      },
    ],
    description:
      "🚀 Fetch-A-Thon, Fetch.ai’s first All-India hackathon, was a thrilling 24-hour coding marathon. Hosted at MIET Meerut, the event witnessed enthusiastic participation, with developers innovating in decentralized AI, smart contracts, and autonomous agents. 🤖✨",
  },
];

const eventsContainer = document.getElementById("events-container");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImages = document.getElementById("modal-images");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.getElementById("close-modal");

events.forEach((event) => {
  const eventCard = document.createElement("div");
  eventCard.className =
    "relative overflow-hidden rounded-lg shadow-lg cursor-pointer group transition transform hover:scale-105 duration-1000";
  eventCard.innerHTML = `
    <img src="${event.images[0].src}" alt="${event.title}" class="font-[Barlow Condensed] w-full h-64 object-fit object-center group-hover:opacity-50 transition">
    <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out">
      <span class="text-white text-xl font-bold">${event.title}</span>
      <span class="text-white text-lg font-semibold bg-[#db0c26] px-4 py-2 rounded-lg mt-2">Explore</span>
    </div>
  `;
  eventCard.addEventListener("click", () => openModal(event));
  eventsContainer.appendChild(eventCard);
});

function openModal(event) {
  modalTitle.innerText = event.title;
  modalDescription.innerText = event.description;
  modalImages.innerHTML = event.images
    .slice(1)
    .map(
      (img) => `
    <div class="flex flex-col items-center">
      <img src="${img.src}" class="w-full h-64 object-cover rounded-lg">
    </div>
  `
    )
    .join("");

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

closeModal.addEventListener("click", () => {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
});
