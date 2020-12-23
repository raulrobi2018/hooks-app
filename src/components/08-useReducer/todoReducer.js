export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "add":
            // Retorna el state con el objeto agregado que viene en el payload
            return [...state, action.payload];
        case "delete":
            // Filtra el array de elementos del state y le borra el que pasamos en el payload
            return state.filter((todo) => todo.id !== action.payload);

        default:
            return state;
    }
};
