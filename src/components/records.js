import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeletePost, getEditablePostData } from '../store/actions';

const Records = () => {

  const data = useSelector(state => {
    console.log(state);
    return state?.records || [];
  })

  const dispatch = useDispatch();

  const deletePost = async (record) => {
    try {
      const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${record.id}`);
      console.log(record);
      dispatch(DeletePost(record));
    } catch (error) {
      console.log(error);
    }
  }

  const bindEditPostToStore = (record) => {
    dispatch(getEditablePostData(record));
  }
  
    return (
        <div>
             <table className="table table-light">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
              {
                data.map((record) => (
                  <tr>
                <td>{record.userId}</td>
                <td>{record.title}</td>
                <td>{record.body}</td>
                <td className="d-flex">
                    <button className="btn btn-danger me-3" onClick={() => deletePost(record)}>Delete</button>
                    <button className="btn btn-success" onClick={() => bindEditPostToStore(record)}>Edit</button>
                     </td>
                </tr>
                ))
              }
          </tbody>
        </table>
        </div>
    )
}

export default Records
