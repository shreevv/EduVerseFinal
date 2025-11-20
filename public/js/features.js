fetch("data/features.json")
    .then(response => response.json())
    .then(loadedData => {
        const gridContainer = document.querySelector(".features-grid");
        gridContainer.innerHTML = "";
        for (let i = 0; i < loadedData.length; i++) {
            let feature = loadedData[i];
            const card = document.createElement("div");
            card.className = "feature-card";
            card.innerHTML = `
                <span class="material-symbols-outlined feature-icon" style="font-size: 3em; color: #0a2351;">${feature.icon}</span>
                <h3>${feature.title}</h3>
                <p>${feature.desc}</p>
            `;
            gridContainer.appendChild(card);
        }
    });