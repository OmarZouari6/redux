import { INCREMENT } from "./action-type"

const initialState ={ 
    counter : 0 ,
    timer : 10
 }

export const counterReducer=(state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT : return {
            ...state , counter:state.counter+1
        }
            
        
    
        default: return state

    

}}