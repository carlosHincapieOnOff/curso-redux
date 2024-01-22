
interface Action {
    type: string;
    payload?: any;
}

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
}

const multiplicadorAction: Action = {
    type: 'MULTIPLICAR',
    payload: 5
}

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
}


// el reducer es una acción pura que se tiene que resolver aca mismo, nada de peticiones http
function reducer(state = 10, action: Action){
    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        default:
            return state;
    }
    
}



// Usar reducer 
console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(5, multiplicadorAction));
console.log(reducer(10, dividirAction));