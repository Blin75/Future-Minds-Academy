document.addEventListener("DOMContentLoaded", () => {
    const containerWrapper = document.createElement("div");
    containerWrapper.classList.add("wrapper");
    document.body.appendChild(containerWrapper);

    const columns = Math.floor(window.innerWidth / 200) * 2; // Double the columns
    const rows = Math.floor(window.innerHeight / 300) * 2; // Double the rows
    const containerCount = columns * rows; // Ensure even distribution horizontally and vertically

    containerWrapper.style.display = "grid";
    containerWrapper.style.gridTemplateColumns = `repeat(${columns}, 200px)`;
    containerWrapper.style.gridGap = "10px";

    for (let i = 0; i < containerCount; i++) {
        const container = document.createElement("div");
        container.classList.add("container", "noselect");

        const canvas = document.createElement("div");
        canvas.classList.add("canvas");
        
        for (let j = 1; j <= 25; j++) {
            const tracker = document.createElement("div");
            tracker.classList.add("tracker", `tr-${j}`);
            canvas.appendChild(tracker);
        }

        const card = document.createElement("div");
        card.id = "card";
        card.innerHTML = `
            <p id="prompt">HOVER OVER :D</p>
            <div class="title">JS Hover Effect</div>
            <div class="subtitle">Mouse hover tracker</div>
        `;

        canvas.appendChild(card);
        container.appendChild(canvas);
        containerWrapper.appendChild(container);
    }
});