import React from 'react'

const Records = (props) => {
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
                props.data.map((record) => (
                  <tr>
                <td>{record.userId}</td>
                <td>{record.title}</td>
                <td>{record.body}</td>
                <td className="d-flex">
                    <button className="btn btn-danger me-3" onClick={() => props.handleDelete(record)}>Delete</button>
                    <button className="btn btn-success" onClick={() => props.handleEdit(record)}>Edit</button>
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
