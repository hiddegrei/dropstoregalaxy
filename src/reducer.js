export const initialState={
    user:null,profile:[],basket:[],address:[]
    
    
}


const reducer=(state,action)=>{
    // console.log(action)
    switch(action.type){
        
            case 'SET_PROFILE':
             return{
                ...state,profile:action.profile
                 }
                 case 'SET_USER':
             return{
                ...state,user:action.user
                 }
                  case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item],
            };
             case 'SET_ADDRESS':
            return{
                ...state,
               address:action.address
            };
            case 'REMOVE_FROM_BASKET':
                const index=state.basket.findIndex(
                    (basketItem)=>basketItem.id===action.id)
                    let newBasket=[...state.basket]
                    if(index>=0){
                    newBasket.splice(index,1)
                    }else{
                        console.warn(`cant remove product (id:${action.id}) as its not in basket`)
                    }
               return{...state,basket:newBasket};

                case 'PLUS_BASKET':
                const index2=state.basket.findIndex(
                    (basketItem)=>basketItem.id===action.id)
                    let newBasket2=[...state.basket]
                    if(index2>=0){
                        console.log(action.plus)
                    newBasket2[index2].amount=action.plus
                    }else{
                        console.warn(`cant add product (id:${action.id})`)
                    }
               return{...state,basket:newBasket2};
               
                   
                   
                   
                    default:return state;     
                
    }
}
export default reducer