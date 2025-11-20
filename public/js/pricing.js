fetch("data/pricing.json")
    .then(response => response.json())
    .then(loadedData => {
        const container = document.querySelector(".pricing-container");
        container.innerHTML = "";
        for (let i = 0; i < loadedData.length; i++) {
            let plan = loadedData[i];
            const card = document.createElement("div");
            card.className = "pricing-card";
            if (plan.isPopular === true) card.classList.add("popular");

            let featuresHtml = "";
            for (let j = 0; j < plan.features.length; j++) {
                featuresHtml += `<li><span class="material-symbols-outlined list-icon" style="color:green; margin-right:5px;">check_circle</span>${plan.features[j]}</li>`;
            }

            let popularBadge = plan.isPopular ? '<span class="popular-badge" style="background:#0a2351; color:white; padding:5px 10px; border-radius:20px; font-size:0.8em;">Most Popular</span>' : '';

            card.innerHTML = `
                ${popularBadge}
                <h3>${plan.planName}</h3>
                <p class="plan-description">${plan.description}</p>
                <div class="price" style="font-size:2.5em; font-weight:bold;">${plan.price} <span style="font-size:0.5em;">${plan.priceSpan}</span></div>
                <ul style="list-style:none; margin:20px 0;">${featuresHtml}</ul>
                <a href="#" class="${plan.buttonClass}">${plan.buttonText}</a>
            `;
            container.appendChild(card);
        }
    });