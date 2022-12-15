import axios from "axios";

const API = 'http://127.0.0.1:5000/profile';
var intialState = [];
    axios.get(API)
    .then((response) => {
        intialState.push(response.data)
    }).catch((error) => console.log("error", error))

// console.log(intialState);

const reducer = (state = intialState, action) => {
    switch(action.type){
        default: 
            return state;
    }
};

export default reducer;