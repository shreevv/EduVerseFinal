# ✨ EduVerse: Your Universe of Course Reviews

EduVerse is a professional, modern web platform designed to help Computer Science students and lifelong learners make informed decisions about online courses by providing authentic, detailed, and data-driven reviews.

## 🚀 Project Mission & Overview

The platform serves as the central hub for exploring course reviews in Computer Science and related fields.

Our mission is to empower the community to: **"Discover, review, and share your learning journey. Explore thousands of online courses in Computer Science from various platforms. See what others have to say and share your own experiences to help future learners make the right choice."**

The project features a clean, responsive, multi-page layout that demonstrates strong proficiency in modern web development standards (HTML5, CSS3, Vanilla JavaScript).

---

## 💡 Core Features

The `Features` page dynamically loads a list of key selling points from `data/features.json`:

* **Personalized Learning:** Our platform offers critical mentorship and suggestions powered by intelligent algorithms to guide your learning path.
* **Analytics and Insights:** We keep track of student reviews and course ratings to provide data-driven insights on course quality and trends.
* **Innovative Technology:** Using cutting-edge AI and machine learning, we provide insights that foster significant learning growth.
* **Industry Partnerships:** We partner with various tech companies to provide you with placement opportunities after course completion.
* **Affordability:** We believe in accessible education. Get premium quality content and insights at a price that doesn't break the bank.
* **Responsive Support:** Addressing every student's query is our top priority.

---

## ⚙️ Technologies & Advanced Concepts

### Key Technologies
* **HTML5:** Semantic structure for all pages (`index.html`, `reviews.html`, `pricing.html`, `features.html`, and forms).
* **CSS3:** Custom, detailed styling using Flexbox for layouts, Google Fonts (`Poppins`, `Lato`), and micro-interactions.
* **JavaScript (Vanilla):** Powers all dynamic content and data handling across the site.

### JavaScript Concepts Demonstrated

| File | Concept | Description |
| :--- | :--- | :--- |
| `js/reviews.js` | **Array of Objects (OOP)** | Review data is stored as a structured array of objects. The script iterates through the data and dynamically generates HTML cards for the `reviews.html` page, including logic for rendering star ratings based on the `rating` value. |
| `js/features.js` | **`fetch()` API & JSON Consumption** | Uses the `fetch` API to asynchronously load features from the `data/features.json` file. It then parses the JSON and injects the content into the `features.html` DOM. |
| `js/pricing.js` | **Dynamic DOM Manipulation with JSON** | Uses the `fetch` API to load and render pricing plans from `data/pricing.json`. It includes conditional logic to add the visually distinct `popular` class and "Most Popular" badge to the Pro plan. |

---

## 🛠️ Getting Started

This is a static front-end project. To view the pages:

1.  **Clone the repository:**
    ```bash
    git clone [your-repo-url]
    cd EduVerseFinal
    ```
2.  **Run Locally:**
    * Open `index.html` directly in your web browser.
    * *Recommended:* Use a local web server (e.g., VS Code's Live Server or Python's `http.server`) to ensure the JavaScript `fetch` calls in `features.js` and `pricing.js` work correctly without browser security restrictions.
