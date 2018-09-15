let initialState = {
    username: '',
    id: '',
    profile_pic: ''
}

const UPDATE_STATE = "UPDATE_STATE"

 function reducer (state = initialState, action){
     console.log('Reducer State',state)
    switch(action.type){
        case UPDATE_STATE:
        let {username, id, profile_pic} = action.payload
            return Object.assign({}, state,
                {
                 username: username,
                 id: id,
                 profile_pic: profile_pic
                })

    default: return state;
}
}


export function updateStateValues (info){
console.log('updateStateValues', info)
    return{
        type: UPDATE_STATE,
        payload: info
    }
}

export default reducer