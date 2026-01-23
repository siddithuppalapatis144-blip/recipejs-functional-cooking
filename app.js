// Recipe data - Foundation for all 4 parts
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta",
        ingredients: ["400g spaghetti", "200g pancetta", "4 eggs", "100g Parmesan cheese", "Black pepper", "Salt"],
        steps: [
            "Bring a large pot of salted water to a boil and cook spaghetti until al dente",
            "While pasta cooks, cut pancetta into small cubes and fry until crispy",
            {
                text: "Prepare the egg mixture",
                substeps: [
                    "Whisk together eggs and grated Parmesan",
                    "Add black pepper to taste",
                    "Set aside until pasta is ready"
                ]
            },
            "Drain pasta, reserving 1 cup pasta water",
            "Remove pancetta from heat and quickly add hot pasta",
            "Pour egg mixture over pasta while tossing constantly",
            "Add pasta water gradually to achieve creamy consistency"
        ]
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry",
        ingredients: ["800g chicken breast", "Yogurt", "Ginger-garlic paste", "Tomato sauce", "Heavy cream", "Garam masala", "Cumin", "Coriander"],
        steps: [
            "Marinate chicken in yogurt, ginger-garlic paste, and spices for 30 minutes",
            "Heat oil in a pan and cook marinated chicken until golden",
            "Remove chicken and set aside",
            {
                text: "Prepare the sauce",
                substeps: [
                    "In the same pan, sauté onions until golden",
                    "Add ginger-garlic paste and cook for 1 minute",
                    {
                        text: "Add spices and tomato sauce",
                        substeps: [
                            "Add garam masala and cumin",
                            "Pour in tomato sauce and simmer for 10 minutes",
                            "Stir occasionally"
                        ]
                    }
                ]
            },
            "Add cooked chicken back to the sauce",
            "Stir in heavy cream and simmer for 5-10 minutes",
            "Garnish with cilantro and serve with rice"
        ]
    },
    {
        id: 3,
        title: "Homemade Croissants",
        time: 180,
        difficulty: "hard",
        description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
        category: "baking",
        ingredients: ["500g all-purpose flour", "300g butter", "10g salt", "50g sugar", "250ml milk", "7g yeast"],
        steps: [
            "Mix flour, salt, sugar, and yeast with milk to form dough",
            "Knead for 10 minutes and let rise for 1 hour",
            "Pound butter between plastic sheets to make a square",
            "Enclose butter in dough and perform 3 sets of folds",
            "Chill between folds for 30 minutes each",
            "Roll out dough, cut into triangles, and shape into crescents",
            "Let rise for 2 hours until puffy",
            "Brush with egg wash and bake at 200°C for 20 minutes until golden"
        ]
    },
    {
        id: 4,
        title: "Greek Salad",
        time: 15,
        difficulty: "easy",
        description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
        category: "salad",
        ingredients: ["4 tomatoes", "1 cucumber", "1 red onion", "200g feta cheese", "100g Kalamata olives", "Olive oil", "Oregano"],
        steps: [
            "Chop tomatoes into chunks",
            "Peel and slice cucumber",
            "Thinly slice red onion",
            "Combine all vegetables in a large bowl",
            "Add Kalamata olives and crumbled feta cheese",
            "Drizzle with olive oil and sprinkle oregano",
            "Toss gently and serve immediately"
        ]
    },
    {
        id: 5,
        title: "Beef Wellington",
        time: 120,
        difficulty: "hard",
        description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
        category: "meat",
        ingredients: ["1kg beef fillet", "500g mushrooms", "2 sheets puff pastry", "2 eggs", "Dijon mustard", "Prosciutto", "Thyme"],
        steps: [
            "Sear beef fillet on all sides until browned, then brush with mustard",
            "Prepare mushroom duxelles by finely chopping mushrooms and cooking until dry",
            "Wrap beef with prosciutto layer",
            "Cover with mushroom duxelles",
            "Wrap entire package in puff pastry",
            "Brush with beaten egg",
            "Bake at 190°C for 25-30 minutes until pastry is golden",
            "Rest for 10 minutes before slicing"
        ]
    },
    {
        id: 6,
        title: "Vegetable Stir Fry",
        time: 20,
        difficulty: "easy",
        description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
        category: "vegetarian",
        ingredients: ["2 cups mixed vegetables", "3 cloves garlic", "2 tbsp soy sauce", "1 tbsp sesame oil", "1 tsp ginger", "Rice for serving"],
        steps: [
            "Chop all vegetables into uniform size",
            "Heat oil in a wok or large pan over high heat",
            "Add garlic and ginger, stir for 30 seconds",
            "Add harder vegetables first (carrots, broccoli)",
            "After 3 minutes, add softer vegetables (peppers, snow peas)",
            "Pour soy sauce and toss everything together",
            "Cook for another 2-3 minutes until vegetables are tender-crisp",
            "Serve immediately over rice"
        ]
    },
    {
        id: 7,
        title: "Pad Thai",
        time: 30,
        difficulty: "medium",
        description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
        category: "noodles",
        ingredients: ["400g rice noodles", "300g shrimp", "3 cloves garlic", "2 tbsp tamarind paste", "3 tbsp fish sauce", "2 tbsp palm sugar", "Peanuts", "Lime"],
        steps: [
            "Soak rice noodles in warm water for 30 minutes until soft",
            "Heat oil in a wok and stir-fry garlic until fragrant",
            "Add shrimp and cook until pink",
            "Push ingredients to the side and add drained noodles",
            "Mix tamarind paste, fish sauce, and palm sugar in a bowl",
            "Pour sauce over noodles and toss everything together",
            "Cook for 2-3 minutes until well combined",
            "Top with crushed peanuts and fresh lime juice before serving"
        ]
    },
    {
        id: 8,
        title: "Margherita Pizza",
        time: 60,
        difficulty: "medium",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
        category: "pizza",
        ingredients: ["500g pizza dough", "200ml tomato sauce", "300g fresh mozzarella", "3 tomatoes", "Fresh basil", "Olive oil", "Salt"],
        steps: [
            "Let pizza dough come to room temperature for 30 minutes",
            "Preheat oven to 250°C or use pizza stone",
            "Stretch dough into a thin, even circle",
            "Spread tomato sauce evenly, leaving a border for crust",
            "Tear fresh mozzarella and distribute over sauce",
            "Slice tomatoes and arrange on top",
            "Drizzle with olive oil and sprinkle salt",
            "Bake for 12-15 minutes until crust is golden and cheese bubbles",
            "Top with fresh basil and serve immediately"
        ]
    },
];

// IIFE (Immediately Invoked Function Expression) - Module Pattern
// This wraps all code to avoid global variables
const RecipeApp = (() => {
    // Private variables
    const recipeContainer = document.querySelector('#recipe-container');
    let allRecipes = recipes;
    let currentRecipes = recipes;

    // Recursive function to render steps with nested substeps
    // This function calls itself for nested steps
    const renderStepsRecursive = (steps, level = 0) => {
        return steps.map(step => {
            if (typeof step === 'string') {
                // Base case: simple string step
                return `<li class="step" style="margin-left: ${level * 20}px;">${step}</li>`;
            } else if (step.substeps) {
                // Recursive case: step with substeps
                const substepsHTML = renderStepsRecursive(step.substeps, level + 1);
                return `
                    <li class="step-group" style="margin-left: ${level * 20}px;">
                        <strong>${step.text}</strong>
                        <ul class="substeps">
                            ${substepsHTML}
                        </ul>
                    </li>
                `;
            }
            return '';
        }).join('');
    };

    // Private function to create HTML for a single recipe card
    const createRecipeCard = (recipe) => {
        const stepsHTML = renderStepsRecursive(recipe.steps);
        const ingredientsHTML = recipe.ingredients
            .map(ing => `<li>${ing}</li>`)
            .join('');

        return `
            <div class="recipe-card" data-id="${recipe.id}">
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time} min</span>
                    <span class="difficulty ${recipe.difficulty}">
                        ${recipe.difficulty}
                    </span>
                </div>
                <p>${recipe.description}</p>
                
                <div class="recipe-actions">
                    <button class="btn-toggle" data-section="ingredients" data-recipe-id="${recipe.id}">
                        📋 Show Ingredients
                    </button>
                    <button class="btn-toggle" data-section="steps" data-recipe-id="${recipe.id}">
                        👨‍🍳 Show Steps
                    </button>
                </div>

                <div class="recipe-details">
                    <div class="section ingredients-section hidden" data-recipe-id="${recipe.id}">
                        <h4>Ingredients:</h4>
                        <ul class="ingredients-list">
                            ${ingredientsHTML}
                        </ul>
                    </div>

                    <div class="section steps-section hidden" data-recipe-id="${recipe.id}">
                        <h4>Cooking Steps:</h4>
                        <ol class="steps-list">
                            ${stepsHTML}
                        </ol>
                    </div>
                </div>
            </div>
        `;
    };

    // Private function to render recipes to the DOM
    const renderRecipes = (recipesToRender) => {
        const recipeCardsHTML = recipesToRender
            .map(createRecipeCard)
            .join('');
        recipeContainer.innerHTML = recipeCardsHTML;
    };

    // Private function to handle button clicks (event delegation)
    const handleToggleClick = (e) => {
        if (!e.target.classList.contains('btn-toggle')) return;

        const section = e.target.dataset.section;
        const recipeId = e.target.dataset.recipeId;
        const card = e.target.closest('.recipe-card');
        const sectionElement = card.querySelector(
            section === 'ingredients' ? '.ingredients-section' : '.steps-section'
        );

        // Toggle visibility
        sectionElement.classList.toggle('hidden');

        // Update button text
        const isHidden = sectionElement.classList.contains('hidden');
        if (section === 'ingredients') {
            e.target.textContent = isHidden ? '📋 Show Ingredients' : '📋 Hide Ingredients';
        } else {
            e.target.textContent = isHidden ? '👨‍🍳 Show Steps' : '👨‍🍳 Hide Steps';
        }
    };

    // Public init method - the only method exposed to global scope
    const init = () => {
        renderRecipes(allRecipes);
        // Event delegation: attach single listener to container
        recipeContainer.addEventListener('click', handleToggleClick);
    };

    // Return only public methods
    return {
        init: init
    };
})();

// Initialize the app
RecipeApp.init();