const reviewsData = [
    { title: "Data Structures", platform: "Coursera", rating: 5, text: "Great course!", name: "Sarah J." },
    { title: "Web Dev BootCamp", platform: "Udemy", rating: 4, text: "Very comprehensive.", name: "Mike C." },
    { title: "AI Intro", platform: "edX", rating: 5, text: "Eye opening.", name: "Dr. Raj" }
];

const gridContainer = document.querySelector(".reviews-grid");
gridContainer.innerHTML = "";

for (let i = 0; i < reviewsData.length; i++) {
    let review = reviewsData[i];
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
        <h3>${review.title}</h3>
        <span>on ${review.platform}</span>
        <p>"${review.text}"</p>
        <br>
        <strong>- ${review.name}</strong>
    `;
    gridContainer.appendChild(card);
}