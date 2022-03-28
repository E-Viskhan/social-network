import profileReducer, {addPost, deletePost} from "./profile-reducer";

const initialState = {
    posts: [
        {id: 1, postText: 'Hi, how are you?', likesCount: 14},
        {id: 2, postText: "it's my first post", likesCount: 15}
    ]
};

test('length of posts should be incremented', () => {
    // testing data
    const action = addPost('My new post text...')
    // doing action
    const newState = profileReducer(initialState, action);
    // check expectations
    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    const action = addPost('My new post text...')
    const newState = profileReducer(initialState, action);

    expect(newState.posts[2].postText).toBe('My new post text...');
});

test('after deleting post, length of posts should be decrement', () => {
    const action = deletePost(1);
    const newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(1);
});

test('after deleting post, length of posts should not be changed if id is incorrect', () => {
    const action = deletePost(1000);
    const newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(2);
});

