// recipe api routes
export const createRecipe = (recipeData) => {
    return fetch('/api/recipes/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
    });
};
export const deleteRecipe = (recipeId) => {
    return fetch(`/api/recipes/${recipeId}`, {
        method: 'DELETE',
    });
};
export const updateRecipe = (recipeId, recipeData) => {
    return fetch(`/api/recipes/${recipeId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
    });
};
export const getRecipe = (recipeId) => {
    return fetch(`/api/recipes/${recipeId}`);
};
export const getAllRecipes = () => {
    return fetch('/api/recipes');
};
// user routes
export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};
export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};
// food routes 
export const addFood = (foodData) => {
    return fetch('/api/food', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(foodData),
    });
};
export const deleteFood = (foodId) => {
    return fetch(`/api/food/${foodId}`, {
        method: 'DELETE',
    });
};
export const updateFood = (foodId, foodData) => {
    return fetch(`/api/food/${foodId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(foodData),
    });
};