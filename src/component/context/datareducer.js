const datareducer = (state,action) =>{

    switch (action.type) {
        case 'CHFRAME':

            return {
                ...state,currentimeFrame:action.payload
            }
            
    
        default:
            return state;
    }
}

export default datareducer