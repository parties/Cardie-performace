import {compose, createStore} from "redux";
import myReducer from "../reducers";

const persistStore = _createStore => (reducer, initialState) => {
    const store = _createStore(reducer, initialState);
    store.subscribe(() => {
    // get current state
        const currentState = store.getState();
        // log to console
        console.log("saving the current state to localStorage", currentState);
        // save to local storage
        localStorage.setItem("@@PersistedState", JSON.stringify(currentState));
    });

    return store;
};

const myStoreEnhancer = function(_createStore) {
    return function(reducer, initialState) {
        const store = _createStore(reducer, initialState);
        const speakingStore = () => {
            console.log("I am a speaking store");
        };
        return {
            ...store,
            speak: speakingStore
        };
    };
};

const initialState = {
    name: "Alex Bakery",
    description: "Software Engineer, Speaker, and Occasional Model",
    likes: "Cats, Wine, and Black dresses",
    location: "localhost"
};

const store = createStore(
    myReducer,
    initialState,
    compose(
        myStoreEnhancer,
        persistStore
    )
);

/**
 * uncomment the code below to see store used as an observable. As seen at the end of chapter 7
 */
// const observable = store[Symbol.observable]();
// const observer = {
//   next: state => {
//     console.log("This is the new state received by the observer", state);
//   }
// };
// observable.subscribe(observer);

export default store;
