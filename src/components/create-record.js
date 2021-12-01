import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddPost, bindData, EditPost } from '../store/actions';

const CreateRecord = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    body: '',
    userId: ''
  });

  const disaptch = useDispatch();

  // Call backend endpoint on mounting - initializing component
  useEffect(() => {
    getData();
  }, []);

  const editPostdata = useSelector((state) => {
    return state?.editPostData
  });

  useEffect(() => {
    if (editPostdata) {
      setFormValues(editPostdata)
    }
  }, [editPostdata])


  async function getData() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(res);
      disaptch(bindData(res.data));
    } catch (error) {
    }
  }

  async function createPost(e) {
    e.preventDefault();
    console.log(formValues);
    if (formValues.id) {
      try {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${formValues.id}`, formValues);
        disaptch(EditPost(formValues));
        setFormValues({

          title: '',
          body: '',
          userId: ''

        })
      } catch (error) {
        console.log(error);

      }
      setFormValues({

        title: '',
        body: '',
        userId: ''

      })
      // setToShowForm(false);
    } else {
      try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', formValues);
        console.log(res);
        disaptch(AddPost(res.data))
        setFormValues({

          title: '',
          body: '',
          userId: ''

        })
      } catch (error) {

      }
    }
  }

  function deleteRecord(record) {
    //   setRecords(records.filter(a => a.id !== record.id));
  }

  function triggerEdit(record) {
    console.log(record);
    setFormValues(record);
  }


  return (
    <div className="App">
      <div className="container">
        {/* <button className="btn btn-primary m-4" >+ Add Post</button> */}
        <form className="m-4 w-50" onSubmit={(e) => createPost(e)}>
          <div className="form-group">
            <label>Title</label>
            <input className="form-control" value={formValues.title} onChange={e => setFormValues({
              ...formValues,
              title: e.target.value
            })} />
          </div>
          <div className="form-group">
            <label>Body</label>
            <input className="form-control" value={formValues.body} onChange={e => setFormValues({
              ...formValues,
              body: e.target.value
            })} />
          </div>
          <div className="form-group">
            <label>User Id</label>
            <input className="form-control" value={formValues.userId} onChange={e => setFormValues({
              ...formValues,
              userId: e.target.value
            })} />
          </div>
          <div className="mt-3">
            <button className="btn btn-success">{formValues.id ? 'Edit' : 'Create'}</button>
            <button className="btn btn-secondary ms-2" onClick={() => { }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateRecord
