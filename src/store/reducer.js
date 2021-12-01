const initialState = {
    records: [],
    editPostData: null
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'Add Post':
            return {
                ...state,
                records: [action.payload, ...state.records]
            }
            break;

        case 'Edit Post':
            return {
                ...state,
                records: state.records.map(record => {
                    if (record.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return record;
                    }
                }),
                editPostData: null
            }
            break;

        case 'Delete Post':
            return {
                ...state,
                records: state.records.filter(record => record.id !== action.payload.id)
            }

            break;

        case 'Bind Initial Data':
            return {
                ...state,
                records: action.payload
            }
            break;
        case 'Get Editable Post Data Post':
            return {
                ...state,
                editPostData: action.payload
            }
            break;

        default:
            return state;
            break;
    }
}