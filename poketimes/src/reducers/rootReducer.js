const initState = {
    posts: [
        {id: 1, title:"Squirtle Laid an Egg",body: 'Lorem ipsum, dolor sit amet consoe to que to the great thing that have happened between the awesome warriors of the night, the inhancement of the boo, that the body can not control the effect made by the innocent face they make'},
        {id: 2, title:"Charmander laid an Egg", body: 'Lorem ipsum, dolor sit amet consoe to que to the great thing that have happened between the awesome warriors of the night, the inhancement of the boo, that the body can not control the effect made by the innocent face they make'},
        {id: 3, title:"A helix fossil was founded", body: 'Lorem ipsum, dolor sit amet consoe to que to the great thing that have happened between the awesome warriors of the night, the inhancement of the boo, that the body can not control the effect made by the innocent face they make'}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type ==="DELETE_POST"){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return{
            ...state,
            posts: newPosts
        }
    }
    return state;

}

export default rootReducer;