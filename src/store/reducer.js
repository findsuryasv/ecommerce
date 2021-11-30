const initialState = [];


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'Add Post':
            return [...state, action.payload]
            break;

        case 'Edit Post':
            return [...state, action.payload]
            break;

        case 'Delete Post':
            return [...state, action.payload]
            break;

        case 'Bind Initial Data':
            return action.payload
            return;

        default:
            break;
    }
}