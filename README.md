<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elegant Vibes Event Decoration</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="event-scene">
        <div class="characters">
            <div class="character graduate">👨‍🎓</div>
            <div class="character child-boy">👦</div>
            <div class="character child-girl">👧</div>
            <div class="character bride">👰</div>
        </div>
        <div class="background">
            <h1>Welcome to the Grand Event Hall</h1>
            <p>A luxurious ballroom filled with delicate decorations: flowers, shimmering silver and gold balloons, glowing lights, and crystals hanging elegantly from the ceiling. The hall is beautifully adorned with decorated tables, fine fabrics, and joyful colors blending silver, gold, soft pink, sky blue, and white.</p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
body {
    font-family: 'Arial', sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #333;
}

.event-scene {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background: linear-gradient(to bottom right, #f0f4ff, #e0e0e0);
}

.characters {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
}

.character {
    font-size: 3rem;
    transition: transform 0.5s ease;
}

.character:hover {
    transform: translateY(-10px);
}

.background {
    background: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    max-width: 800px;
}

.background h1 {
    color: #d4af37;
    margin-bottom: 1rem;
}

.background p {
    font-size: 1.2rem;
    line-height: 1.5;
    color: #555;
}
document.addEventListener('DOMContentLoaded', () => {
    const characters = document.querySelectorAll('.character');
    characters.forEach((char, index) => {
        setTimeout(() => {
            char.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                char.style.transform = 'translateY(0)';
            }, 500);
        }, index * 300);
    });
});
