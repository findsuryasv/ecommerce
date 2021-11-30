import React from 'react'
import { useSelector } from 'react-redux'

const Records = () => {

  const data = useSelector(state => {
    console.log(state);
    return state || [];
  })
  
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
                    <button className="btn btn-danger me-3" onClick={() => {}}>Delete</button>
                    <button className="btn btn-success" onClick={() => {}}>Edit</button>
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
