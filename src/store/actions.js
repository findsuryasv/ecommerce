export const AddPost = (payload) => {
    return {
        type: 'Add Post',
        payload
    }
}

export const EditPost = (payload) => {
    return {
        type: 'Edit Post',
        payload
    }
}

export const DeletePost = (payload) => {
    return {
        type: 'Delete Post',
        payload
    }
}

export const bindData = (payload) => {
    return {
        type: 'Bind Initial Data',
        payload
    }
}