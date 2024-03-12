import { ADD_POST } from "./type";
import axios from "axios";

export const addPost = (formData) => async (dispatch) => {
    try{
        const res = await axios.post("http://localhost:5000/api/posts", formData);
        console.log(res);
        dispatch({
            type : ADD_POST,
            payload : res.data, 
        });
    }catch(err){
        // dispatch({
            console.log(err);
        // })
    }
};
