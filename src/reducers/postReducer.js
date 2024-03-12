import { ADD_POST } from "../Action/type";

const initialState ={
    posts:[],
    post: null,
    loading: true,
    error:{},
}

export default function (state = initialState, action){
    const {type, payload} = action;
    
    switch(type){
        case ADD_POST:
            return{
                ...state,
                posts: [payload, ...state.posts],
                loading: false,
            }
         
        default:  
        return state;   
    }
}