const initialState = {
    tasks: ["salom"],
}


const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "add":
            state.tasks.push(action.payload);
            return state;
    }
    return state;
}


export default reducer;