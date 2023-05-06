const express = require('express');
const app = express();
const port = 5000;

const data = {


  [
    {
      "id": 1,
      "picture": "https://i.ibb.co/M8Fqz5h/image.png",
      "name": "John Smith",
      "experience": 12,
      "recipes": 78,
      "likes": 420,
      "featured_recipe": [
        {
          "image": "https://i.ibb.co/dDnGzTg/image.png",
          "id": 1,
          "name": "Vegetable Stir-Fry",
          "ingredients": [
            "1 cup broccoli florets",
            "1 cup sliced carrots",
            "1 cup sliced bell peppers",
            "1 cup snow peas",
            "1/4 cup soy sauce",
            "2 tbsp vegetable oil",
            "1 tbsp cornstarch",
            "1 tsp garlic powder"
          ],
          "cooking_method": "Heat oil in a wok or large skillet over high heat. Add vegetables and stir-fry for 3-4 minutes, or until crisp-tender. In a small bowl, whisk together soy sauce, cornstarch, and garlic powder. Add soy sauce mixture to the skillet and stir-fry for 1-2 minutes, or until sauce has thickened.",
          "rating": 4.0,
          "favorite": true
        },
        {
          "image": "https://i.ibb.co/NTJ158W/image.png",
          "id": 2,
          "name": "Roasted Salmon with Lemon-Herb Butter",
          "ingredients": [
            "4 6-oz salmon fillets",
            "1/4 cup unsalted butter, softened",
            "1 lemon, zested and juiced",
            "1 tbsp chopped fresh parsley",
            "1 tbsp chopped fresh dill",
            "Salt and pepper, to taste"
          ],
          "cooking_method": "Preheat the oven to 400°F. Line a baking sheet with parchment paper. In a small bowl, mix together the butter, lemon zest, lemon juice, parsley, and dill. Season the salmon fillets with salt and pepper, then place them on the prepared baking sheet. Spread the lemon-herb butter over the salmon fillets. Roast for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork. Serve hot with additional lemon wedges and herbs, if desired.",
          "rating": 4.5,
          "favorite": false
        },
        {
          "image": "https://i.ibb.co/yQXZ3g4/image.png",
          "id": 3,
          "name": "Mushroom Risotto",
          "ingredients": [
            "1 cup arborio rice",
            "4 cups chicken or vegetable broth",
            "1/4 cup butter",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "8 ounces mushrooms, sliced",
            "1/2 cup grated parmesan cheese",
            "1/4 cup chopped parsley",
            "1/2 teaspoon salt",
            "1/4 teaspoon black pepper"
          ],
          "cooking_method": "In a medium saucepan, bring the broth to a simmer. In a separate large saucepan, melt the butter over medium heat. Add the onion and garlic to the saucepan and cook for 2-3 minutes, until softened. Add the mushrooms to the saucepan and cook for another 5-7 minutes, until the mushrooms are tender. Add the arborio rice to the saucepan and stir to coat with the butter. Add a ladleful of the hot broth to the saucepan and stir until absorbed. Continue adding the broth, one ladleful at a time, stirring constantly, until the rice is tender and the risotto is creamy. Stir in the parmesan cheese and parsley. Season with salt and black pepper to taste. Serve hot.",
          "rating": 4.8,
          "favorite": false
        }
      ],
      "specialty": "Italian Cuisine"
    },
    {
      "id": 2,
      "picture": "https://i.ibb.co/7QNQ50g/image.png",
      "name": "Sarah Johnson",
      "experience": 8,
      "recipes": 52,
      "likes": 312,
      "featured_recipe": [
        {
          "image": "https://i.ibb.co/dDnGzTg/image.png",
          "id": 1,
          "name": "Vegetable Stir-Fry",
          "ingredients": [
            "1 cup broccoli florets",
            "1 cup sliced carrots",
            "1 cup sliced bell peppers",
            "1 cup snow peas",
            "1/4 cup soy sauce",
            "2 tbsp vegetable oil",
            "1 tbsp cornstarch",
            "1 tsp garlic powder"
          ],
          "cooking_method": "Heat oil in a wok or large skillet over high heat. Add vegetables and stir-fry for 3-4 minutes, or until crisp-tender. In a small bowl, whisk together soy sauce, cornstarch, and garlic powder. Add soy sauce mixture to the skillet and stir-fry for 1-2 minutes, or until sauce has thickened.",
          "rating": 4.0,
          "favorite": true
        },
        {
          "image": "https://i.ibb.co/NTJ158W/image.png",
          "id": 2,
          "name": "Roasted Salmon with Lemon-Herb Butter",
          "ingredients": [
            "4 6-oz salmon fillets",
            "1/4 cup unsalted butter, softened",
            "1 lemon, zested and juiced",
            "1 tbsp chopped fresh parsley",
            "1 tbsp chopped fresh dill",
            "Salt and pepper, to taste"
          ],
          "cooking_method": "Preheat the oven to 400°F. Line a baking sheet with parchment paper. In a small bowl, mix together the butter, lemon zest, lemon juice, parsley, and dill. Season the salmon fillets with salt and pepper, then place them on the prepared baking sheet. Spread the lemon-herb butter over the salmon fillets. Roast for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork. Serve hot with additional lemon wedges and herbs, if desired.",
          "rating": 4.5,
          "favorite": false
        },
        {
          "image": "https://i.ibb.co/yQXZ3g4/image.png",
          "id": 3,
          "name": "Mushroom Risotto",
          "ingredients": [
            "1 cup arborio rice",
            "4 cups chicken or vegetable broth",
            "1/4 cup butter",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "8 ounces mushrooms, sliced",
            "1/2 cup grated parmesan cheese",
            "1/4 cup chopped parsley",
            "1/2 teaspoon salt",
            "1/4 teaspoon black pepper"
          ],
          "cooking_method": "In a medium saucepan, bring the broth to a simmer. In a separate large saucepan, melt the butter over medium heat. Add the onion and garlic to the saucepan and cook for 2-3 minutes, until softened. Add the mushrooms to the saucepan and cook for another 5-7 minutes, until the mushrooms are tender. Add the arborio rice to the saucepan and stir to coat with the butter. Add a ladleful of the hot broth to the saucepan and stir until absorbed. Continue adding the broth, one ladleful at a time, stirring constantly, until the rice is tender and the risotto is creamy. Stir in the parmesan cheese and parsley. Season with salt and black pepper to taste. Serve hot.",
          "rating": 4.8,
          "favorite": false
        }
      ],
      "specialty": "Comfort Food"
    },
    {
      "id": 3,
      "picture": "https://i.ibb.co/qy5pcQs/image.png",
      "name": "David Lee",
      "experience": 15,
      "recipes": 92,
      "likes": 654,
      "featured_recipe": [
        {
          "image": "https://i.ibb.co/dDnGzTg/image.png",
          "id": 1,
          "name": "Vegetable Stir-Fry",
          "ingredients": [
            "1 cup broccoli florets",
            "1 cup sliced carrots",
            "1 cup sliced bell peppers",
            "1 cup snow peas",
            "1/4 cup soy sauce",
            "2 tbsp vegetable oil",
            "1 tbsp cornstarch",
            "1 tsp garlic powder"
          ],
          "cooking_method": "Heat oil in a wok or large skillet over high heat. Add vegetables and stir-fry for 3-4 minutes, or until crisp-tender. In a small bowl, whisk together soy sauce, cornstarch, and garlic powder. Add soy sauce mixture to the skillet and stir-fry for 1-2 minutes, or until sauce has thickened.",
          "rating": 4.0,
          "favorite": true
        },
        {
          "image": "https://i.ibb.co/NTJ158W/image.png",
          "id": 2,
          "name": "Roasted Salmon with Lemon-Herb Butter",
          "ingredients": [
            "4 6-oz salmon fillets",
            "1/4 cup unsalted butter, softened",
            "1 lemon, zested and juiced",
            "1 tbsp chopped fresh parsley",
            "1 tbsp chopped fresh dill",
            "Salt and pepper, to taste"
          ],
          "cooking_method": "Preheat the oven to 400°F. Line a baking sheet with parchment paper. In a small bowl, mix together the butter, lemon zest, lemon juice, parsley, and dill. Season the salmon fillets with salt and pepper, then place them on the prepared baking sheet. Spread the lemon-herb butter over the salmon fillets. Roast for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork. Serve hot with additional lemon wedges and herbs, if desired.",
          "rating": 4.5,
          "favorite": false
        },
        {
          "image": "https://i.ibb.co/yQXZ3g4/image.png",
          "id": 3,
          "name": "Mushroom Risotto",
          "ingredients": [
            "1 cup arborio rice",
            "4 cups chicken or vegetable broth",
            "1/4 cup butter",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "8 ounces mushrooms, sliced",
            "1/2 cup grated parmesan cheese",
            "1/4 cup chopped parsley",
            "1/2 teaspoon salt",
            "1/4 teaspoon black pepper"
          ],
          "cooking_method": "In a medium saucepan, bring the broth to a simmer. In a separate large saucepan, melt the butter over medium heat. Add the onion and garlic to the saucepan and cook for 2-3 minutes, until softened. Add the mushrooms to the saucepan and cook for another 5-7 minutes, until the mushrooms are tender. Add the arborio rice to the saucepan and stir to coat with the butter. Add a ladleful of the hot broth to the saucepan and stir until absorbed. Continue adding the broth, one ladleful at a time, stirring constantly, until the rice is tender and the risotto is creamy. Stir in the parmesan cheese and parsley. Season with salt and black pepper to taste. Serve hot.",
          "rating": 4.8,
          "favorite": false
        }
      ],
      "specialty": "Comfort Food"
    },
    {
      "id": 4,
      "picture": "https://i.ibb.co/Cz0HX3H/image.png",
      "name": "Amy Chen",
      "experience": 10,
      "recipes": 68,
      "likes": 234,
      "featured_recipe": [
        {
          "image": "https://i.ibb.co/dDnGzTg/image.png",
          "id": 1,
          "name": "Vegetable Stir-Fry",
          "ingredients": [
            "1 cup broccoli florets",
            "1 cup sliced carrots",
            "1 cup sliced bell peppers",
            "1 cup snow peas",
            "1/4 cup soy sauce",
            "2 tbsp vegetable oil",
            "1 tbsp cornstarch",
            "1 tsp garlic powder"
          ],
          "cooking_method": "Heat oil in a wok or large skillet over high heat. Add vegetables and stir-fry for 3-4 minutes, or until crisp-tender. In a small bowl, whisk together soy sauce, cornstarch, and garlic powder. Add soy sauce mixture to the skillet and stir-fry for 1-2 minutes, or until sauce has thickened.",
          "rating": 4.0,
          "favorite": true
        },
        {
          "image": "https://i.ibb.co/NTJ158W/image.png",
          "id": 2,
          "name": "Roasted Salmon with Lemon-Herb Butter",
          "ingredients": [
            "4 6-oz salmon fillets",
            "1/4 cup unsalted butter, softened",
            "1 lemon, zested and juiced",
            "1 tbsp chopped fresh parsley",
            "1 tbsp chopped fresh dill",
            "Salt and pepper, to taste"
          ],
          "cooking_method": "Preheat the oven to 400°F. Line a baking sheet with parchment paper. In a small bowl, mix together the butter, lemon zest, lemon juice, parsley, and dill. Season the salmon fillets with salt and pepper, then place them on the prepared baking sheet. Spread the lemon-herb butter over the salmon fillets. Roast for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork. Serve hot with additional lemon wedges and herbs, if desired.",
          "rating": 4.5,
          "favorite": false
        },
        {
          "image": "https://i.ibb.co/yQXZ3g4/image.png",
          "id": 3,
          "name": "Mushroom Risotto",
          "ingredients": [
            "1 cup arborio rice",
            "4 cups chicken or vegetable broth",
            "1/4 cup butter",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "8 ounces mushrooms, sliced",
            "1/2 cup grated parmesan cheese",
            "1/4 cup chopped parsley",
            "1/2 teaspoon salt",
            "1/4 teaspoon black pepper"
          ],
          "cooking_method": "In a medium saucepan, bring the broth to a simmer. In a separate large saucepan, melt the butter over medium heat. Add the onion and garlic to the saucepan and cook for 2-3 minutes, until softened. Add the mushrooms to the saucepan and cook for another 5-7 minutes, until the mushrooms are tender. Add the arborio rice to the saucepan and stir to coat with the butter. Add a ladleful of the hot broth to the saucepan and stir until absorbed. Continue adding the broth, one ladleful at a time, stirring constantly, until the rice is tender and the risotto is creamy. Stir in the parmesan cheese and parsley. Season with salt and black pepper to taste. Serve hot.",
          "rating": 4.8,
          "favorite": false
        }
      ],
      "specialty": "Comfort Food"
    },
    {
      "id": 5,
      "picture": "https://i.ibb.co/JQsqkkv/image.png",
      "name": "Michael Kim",
      "experience": 18,
      "recipes": 106,
      "likes": 789,
      "featured_recipe": [
        {
          "image": "https://i.ibb.co/dDnGzTg/image.png",
          "id": 1,
          "name": "Vegetable Stir-Fry",
          "ingredients": [
            "1 cup broccoli florets",
            "1 cup sliced carrots",
            "1 cup sliced bell peppers",
            "1 cup snow peas",
            "1/4 cup soy sauce",
            "2 tbsp vegetable oil",
            "1 tbsp cornstarch",
            "1 tsp garlic powder"
          ],
          "cooking_method": "Heat oil in a wok or large skillet over high heat. Add vegetables and stir-fry for 3-4 minutes, or until crisp-tender. In a small bowl, whisk together soy sauce, cornstarch, and garlic powder. Add soy sauce mixture to the skillet and stir-fry for 1-2 minutes, or until sauce has thickened.",
          "rating": 4.0,
          "favorite": true
        },
        {
          "image": "https://i.ibb.co/NTJ158W/image.png",
          "id": 2,
          "name": "Roasted Salmon with Lemon-Herb Butter",
          "ingredients": [
            "4 6-oz salmon fillets",
            "1/4 cup unsalted butter, softened",
            "1 lemon, zested and juiced",
            "1 tbsp chopped fresh parsley",
            "1 tbsp chopped fresh dill",
            "Salt and pepper, to taste"
          ],
          "cooking_method": "Preheat the oven to 400°F. Line a baking sheet with parchment paper. In a small bowl, mix together the butter, lemon zest, lemon juice, parsley, and dill. Season the salmon fillets with salt and pepper, then place them on the prepared baking sheet. Spread the lemon-herb butter over the salmon fillets. Roast for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork. Serve hot with additional lemon wedges and herbs, if desired.",
          "rating": 4.5,
          "favorite": false
        },
        {
          "image": "https://i.ibb.co/yQXZ3g4/image.png",
          "id": 3,
          "name": "Mushroom Risotto",
          "ingredients": [
            "1 cup arborio rice",
            "4 cups chicken or vegetable broth",
            "1/4 cup butter",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "8 ounces mushrooms, sliced",
            "1/2 cup grated parmesan cheese",
            "1/4 cup chopped parsley",
            "1/2 teaspoon salt",
            "1/4 teaspoon black pepper"
          ],
          "cooking_method": "In a medium saucepan, bring the broth to a simmer. In a separate large saucepan, melt the butter over medium heat. Add the onion and garlic to the saucepan and cook for 2-3 minutes, until softened. Add the mushrooms to the saucepan and cook for another 5-7 minutes, until the mushrooms are tender. Add the arborio rice to the saucepan and stir to coat with the butter. Add a ladleful of the hot broth to the saucepan and stir until absorbed. Continue adding the broth, one ladleful at a time, stirring constantly, until the rice is tender and the risotto is creamy. Stir in the parmesan cheese and parsley. Season with salt and black pepper to taste. Serve hot.",
          "rating": 4.8,
          "favorite": false
        }
      ],
      "specialty": "Comfort Food"
    },
    {
      "id": 6,
      "picture": "https://i.ibb.co/h7DtZ2f/image.png",
      "name": "Emily Davis",
      "experience": 7,
      "recipes": 43,
      "likes": 178,
      "featured_recipe": [
        {
          "image": "https://i.ibb.co/dDnGzTg/image.png",
          "id": 1,
          "name": "Vegetable Stir-Fry",
          "ingredients": [
            "1 cup broccoli florets",
            "1 cup sliced carrots",
            "1 cup sliced bell peppers",
            "1 cup snow peas",
            "1/4 cup soy sauce",
            "2 tbsp vegetable oil",
            "1 tbsp cornstarch",
            "1 tsp garlic powder"
          ],
          "cooking_method": "Heat oil in a wok or large skillet over high heat. Add vegetables and stir-fry for 3-4 minutes, or until crisp-tender. In a small bowl, whisk together soy sauce, cornstarch, and garlic powder. Add soy sauce mixture to the skillet and stir-fry for 1-2 minutes, or until sauce has thickened.",
          "rating": 4.0,
          "favorite": true
        },
        {
          "image": "https://i.ibb.co/NTJ158W/image.png",
          "id": 2,
          "name": "Roasted Salmon with Lemon-Herb Butter",
          "ingredients": [
            "4 6-oz salmon fillets",
            "1/4 cup unsalted butter, softened",
            "1 lemon, zested and juiced",
            "1 tbsp chopped fresh parsley",
            "1 tbsp chopped fresh dill",
            "Salt and pepper, to taste"
          ],
          "cooking_method": "Preheat the oven to 400°F. Line a baking sheet with parchment paper. In a small bowl, mix together the butter, lemon zest, lemon juice, parsley, and dill. Season the salmon fillets with salt and pepper, then place them on the prepared baking sheet. Spread the lemon-herb butter over the salmon fillets. Roast for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork. Serve hot with additional lemon wedges and herbs, if desired.",
          "rating": 4.5,
          "favorite": false
        },
        {
          "image": "https://i.ibb.co/yQXZ3g4/image.png",
          "id": 3,
          "name": "Mushroom Risotto",
          "ingredients": [
            "1 cup arborio rice",
            "4 cups chicken or vegetable broth",
            "1/4 cup butter",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "8 ounces mushrooms, sliced",
            "1/2 cup grated parmesan cheese",
            "1/4 cup chopped parsley",
            "1/2 teaspoon salt",
            "1/4 teaspoon black pepper"
          ],
          "cooking_method": "In a medium saucepan, bring the broth to a simmer. In a separate large saucepan, melt the butter over medium heat. Add the onion and garlic to the saucepan and cook for 2-3 minutes, until softened. Add the mushrooms to the saucepan and cook for another 5-7 minutes, until the mushrooms are tender. Add the arborio rice to the saucepan and stir to coat with the butter. Add a ladleful of the hot broth to the saucepan and stir until absorbed. Continue adding the broth, one ladleful at a time, stirring constantly, until the rice is tender and the risotto is creamy. Stir in the parmesan cheese and parsley. Season with salt and black pepper to taste. Serve hot.",
          "rating": 4.8,
          "favorite": false
        }
      ],
      "specialty": "Comfort Food"
    },
    {
      "id": 7,
      "picture": "https://i.ibb.co/tY7jm6m/image.png",
      "name": "James Nguyen",
      "experience": 13,
      "recipes": 81,
      "likes": 532,
      "featured_recipe": [
        {
          "image": "https://i.ibb.co/dDnGzTg/image.png",
          "id": 1,
          "name": "Vegetable Stir-Fry",
          "ingredients": [
            "1 cup broccoli florets",
            "1 cup sliced carrots",
            "1 cup sliced bell peppers",
            "1 cup snow peas",
            "1/4 cup soy sauce",
            "2 tbsp vegetable oil",
            "1 tbsp cornstarch",
            "1 tsp garlic powder"
          ],
          "cooking_method": "Heat oil in a wok or large skillet over high heat. Add vegetables and stir-fry for 3-4 minutes, or until crisp-tender. In a small bowl, whisk together soy sauce, cornstarch, and garlic powder. Add soy sauce mixture to the skillet and stir-fry for 1-2 minutes, or until sauce has thickened.",
          "rating": 4.0,
          "favorite": true
        },
        {
          "image": "https://i.ibb.co/NTJ158W/image.png",
          "id": 2,
          "name": "Roasted Salmon with Lemon-Herb Butter",
          "ingredients": [
            "4 6-oz salmon fillets",
            "1/4 cup unsalted butter, softened",
            "1 lemon, zested and juiced",
            "1 tbsp chopped fresh parsley",
            "1 tbsp chopped fresh dill",
            "Salt and pepper, to taste"
          ],
          "cooking_method": "Preheat the oven to 400°F. Line a baking sheet with parchment paper. In a small bowl, mix together the butter, lemon zest, lemon juice, parsley, and dill. Season the salmon fillets with salt and pepper, then place them on the prepared baking sheet. Spread the lemon-herb butter over the salmon fillets. Roast for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork. Serve hot with additional lemon wedges and herbs, if desired.",
          "rating": 4.5,
          "favorite": false
        },
        {
          "image": "https://i.ibb.co/yQXZ3g4/image.png",
          "id": 3,
          "name": "Mushroom Risotto",
          "ingredients": [
            "1 cup arborio rice",
            "4 cups chicken or vegetable broth",
            "1/4 cup butter",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "8 ounces mushrooms, sliced",
            "1/2 cup grated parmesan cheese",
            "1/4 cup chopped parsley",
            "1/2 teaspoon salt",
            "1/4 teaspoon black pepper"
          ],
          "cooking_method": "In a medium saucepan, bring the broth to a simmer. In a separate large saucepan, melt the butter over medium heat. Add the onion and garlic to the saucepan and cook for 2-3 minutes, until softened. Add the mushrooms to the saucepan and cook for another 5-7 minutes, until the mushrooms are tender. Add the arborio rice to the saucepan and stir to coat with the butter. Add a ladleful of the hot broth to the saucepan and stir until absorbed. Continue adding the broth, one ladleful at a time, stirring constantly, until the rice is tender and the risotto is creamy. Stir in the parmesan cheese and parsley. Season with salt and black pepper to taste. Serve hot.",
          "rating": 4.8,
          "favorite": false
        }
      ],
      "specialty": "Comfort Food"
    },
    {
      "id": 8,
      "picture": "https://i.ibb.co/hLVxy5C/image.png",
      "name": "Jessica Wilson",
      "experience": 9,
      "recipes": 57,
      "likes": 289,
      "featured_recipe": [
        {
          "image": "https://i.ibb.co/dDnGzTg/image.png",
          "id": 1,
          "name": "Vegetable Stir-Fry",
          "ingredients": [
            "1 cup broccoli florets",
            "1 cup sliced carrots",
            "1 cup sliced bell peppers",
            "1 cup snow peas",
            "1/4 cup soy sauce",
            "2 tbsp vegetable oil",
            "1 tbsp cornstarch",
            "1 tsp garlic powder"
          ],
          "cooking_method": "Heat oil in a wok or large skillet over high heat. Add vegetables and stir-fry for 3-4 minutes, or until crisp-tender. In a small bowl, whisk together soy sauce, cornstarch, and garlic powder. Add soy sauce mixture to the skillet and stir-fry for 1-2 minutes, or until sauce has thickened.",
          "rating": 4.0,
          "favorite": true
        },
        {
          "image": "https://i.ibb.co/NTJ158W/image.png",
          "id": 2,
          "name": "Roasted Salmon with Lemon-Herb Butter",
          "ingredients": [
            "4 6-oz salmon fillets",
            "1/4 cup unsalted butter, softened",
            "1 lemon, zested and juiced",
            "1 tbsp chopped fresh parsley",
            "1 tbsp chopped fresh dill",
            "Salt and pepper, to taste"
          ],
          "cooking_method": "Preheat the oven to 400°F. Line a baking sheet with parchment paper. In a small bowl, mix together the butter, lemon zest, lemon juice, parsley, and dill. Season the salmon fillets with salt and pepper, then place them on the prepared baking sheet. Spread the lemon-herb butter over the salmon fillets. Roast for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork. Serve hot with additional lemon wedges and herbs, if desired.",
          "rating": 4.5,
          "favorite": false
        },
        {
          "image": "https://i.ibb.co/yQXZ3g4/image.png",
          "id": 3,
          "name": "Mushroom Risotto",
          "ingredients": [
            "1 cup arborio rice",
            "4 cups chicken or vegetable broth",
            "1/4 cup butter",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "8 ounces mushrooms, sliced",
            "1/2 cup grated parmesan cheese",
            "1/4 cup chopped parsley",
            "1/2 teaspoon salt",
            "1/4 teaspoon black pepper"
          ],
          "cooking_method": "In a medium saucepan, bring the broth to a simmer. In a separate large saucepan, melt the butter over medium heat. Add the onion and garlic to the saucepan and cook for 2-3 minutes, until softened. Add the mushrooms to the saucepan and cook for another 5-7 minutes, until the mushrooms are tender. Add the arborio rice to the saucepan and stir to coat with the butter. Add a ladleful of the hot broth to the saucepan and stir until absorbed. Continue adding the broth, one ladleful at a time, stirring constantly, until the rice is tender and the risotto is creamy. Stir in the parmesan cheese and parsley. Season with salt and black pepper to taste. Serve hot.",
          "rating": 4.8,
          "favorite": false
        }
      ],
      "specialty": "Comfort Food"
    },
    {
      "id": 9,
      "picture": "https://i.ibb.co/18xT4Sp/image.png",
      "name": "William Brown",
      "experience": 11,
      "recipes": 72,
      "likes": 398,
      "featured_recipe": [
        {
          "image": "https://i.ibb.co/dDnGzTg/image.png",
          "id": 1,
          "name": "Vegetable Stir-Fry",
          "ingredients": [
            "1 cup broccoli florets",
            "1 cup sliced carrots",
            "1 cup sliced bell peppers",
            "1 cup snow peas",
            "1/4 cup soy sauce",
            "2 tbsp vegetable oil",
            "1 tbsp cornstarch",
            "1 tsp garlic powder"
          ],
          "cooking_method": "Heat oil in a wok or large skillet over high heat. Add vegetables and stir-fry for 3-4 minutes, or until crisp-tender. In a small bowl, whisk together soy sauce, cornstarch, and garlic powder. Add soy sauce mixture to the skillet and stir-fry for 1-2 minutes, or until sauce has thickened.",
          "rating": 4.0,
          "favorite": true
        },
        {
          "image": "https://i.ibb.co/NTJ158W/image.png",
          "id": 2,
          "name": "Roasted Salmon with Lemon-Herb Butter",
          "ingredients": [
            "4 6-oz salmon fillets",
            "1/4 cup unsalted butter, softened",
            "1 lemon, zested and juiced",
            "1 tbsp chopped fresh parsley",
            "1 tbsp chopped fresh dill",
            "Salt and pepper, to taste"
          ],
          "cooking_method": "Preheat the oven to 400°F. Line a baking sheet with parchment paper. In a small bowl, mix together the butter, lemon zest, lemon juice, parsley, and dill. Season the salmon fillets with salt and pepper, then place them on the prepared baking sheet. Spread the lemon-herb butter over the salmon fillets. Roast for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork. Serve hot with additional lemon wedges and herbs, if desired.",
          "rating": 4.5,
          "favorite": false
        },
        {
          "image": "https://i.ibb.co/yQXZ3g4/image.png",
          "id": 3,
          "name": "Mushroom Risotto",
          "ingredients": [
            "1 cup arborio rice",
            "4 cups chicken or vegetable broth",
            "1/4 cup butter",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "8 ounces mushrooms, sliced",
            "1/2 cup grated parmesan cheese",
            "1/4 cup chopped parsley",
            "1/2 teaspoon salt",
            "1/4 teaspoon black pepper"
          ],
          "cooking_method": "In a medium saucepan, bring the broth to a simmer. In a separate large saucepan, melt the butter over medium heat. Add the onion and garlic to the saucepan and cook for 2-3 minutes, until softened. Add the mushrooms to the saucepan and cook for another 5-7 minutes, until the mushrooms are tender. Add the arborio rice to the saucepan and stir to coat with the butter. Add a ladleful of the hot broth to the saucepan and stir until absorbed. Continue adding the broth, one ladleful at a time, stirring constantly, until the rice is tender and the risotto is creamy. Stir in the parmesan cheese and parsley. Season with salt and black pepper to taste. Serve hot.",
          "rating": 4.8,
          "favorite": false
        }
      ],
      "specialty": "Comfort Food"
    },
    {
      "id": 10,
      "picture": "https://i.ibb.co/z6KCd78/image.png",
      "name": "Olivia Jones",
      "experience": 6,
      "recipes": 38,
      "likes": 142,
      "featured_recipe": [
        {
          "image": "https://i.ibb.co/dDnGzTg/image.png",
          "id": 1,
          "name": "Vegetable Stir-Fry",
          "ingredients": [
            "1 cup broccoli florets",
            "1 cup sliced carrots",
            "1 cup sliced bell peppers",
            "1 cup snow peas",
            "1/4 cup soy sauce",
            "2 tbsp vegetable oil",
            "1 tbsp cornstarch",
            "1 tsp garlic powder"
          ],
          "cooking_method": "Heat oil in a wok or large skillet over high heat. Add vegetables and stir-fry for 3-4 minutes, or until crisp-tender. In a small bowl, whisk together soy sauce, cornstarch, and garlic powder. Add soy sauce mixture to the skillet and stir-fry for 1-2 minutes, or until sauce has thickened.",
          "rating": 4.0,
          "favorite": true
        },
        {
          "image": "https://i.ibb.co/NTJ158W/image.png",
          "id": 2,
          "name": "Roasted Salmon with Lemon-Herb Butter",
          "ingredients": [
            "4 6-oz salmon fillets",
            "1/4 cup unsalted butter, softened",
            "1 lemon, zested and juiced",
            "1 tbsp chopped fresh parsley",
            "1 tbsp chopped fresh dill",
            "Salt and pepper, to taste"
          ],
          "cooking_method": "Preheat the oven to 400°F. Line a baking sheet with parchment paper. In a small bowl, mix together the butter, lemon zest, lemon juice, parsley, and dill. Season the salmon fillets with salt and pepper, then place them on the prepared baking sheet. Spread the lemon-herb butter over the salmon fillets. Roast for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork. Serve hot with additional lemon wedges and herbs, if desired.",
          "rating": 4.5,
          "favorite": false
        },
        {
          "image": "https://i.ibb.co/yQXZ3g4/image.png",
          "id": 3,
          "name": "Mushroom Risotto",
          "ingredients": [
            "1 cup arborio rice",
            "4 cups chicken or vegetable broth",
            "1/4 cup butter",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "8 ounces mushrooms, sliced",
            "1/2 cup grated parmesan cheese",
            "1/4 cup chopped parsley",
            "1/2 teaspoon salt",
            "1/4 teaspoon black pepper"
          ],
          "cooking_method": "In a medium saucepan, bring the broth to a simmer. In a separate large saucepan, melt the butter over medium heat. Add the onion and garlic to the saucepan and cook for 2-3 minutes, until softened. Add the mushrooms to the saucepan and cook for another 5-7 minutes, until the mushrooms are tender. Add the arborio rice to the saucepan and stir to coat with the butter. Add a ladleful of the hot broth to the saucepan and stir until absorbed. Continue adding the broth, one ladleful at a time, stirring constantly, until the rice is tender and the risotto is creamy. Stir in the parmesan cheese and parsley. Season with salt and black pepper to taste. Serve hot.",
          "rating": 4.8,
          "favorite": false
        }
      ],
      "specialty": "Comfort Food"
    },

    app.get('/', (req, res) => {
      res.json(data);
    }),
    
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
}