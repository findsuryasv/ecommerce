import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { bindData } from '../store/actions';

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
    
    async function getData() {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(res);
        disaptch(bindData(res.data));
      } catch (error) {
      }
    }
  
    function createPost(e) {
      e.preventDefault();
      console.log(formValues);
      if (formValues.id) {
        // setRecords(records.map(a => {
        //   if (a.id === formValues.id) {
        //     a = formValues;
        //   }
        //   return a;
        // }))
        setFormValues({
  
          title: '',
          body: '',
          userId: ''
  
        })
        // setToShowForm(false);
      } else {
        // setRecords([...records, formValues])
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
                  <button className="btn btn-success">Create</button>
                  <button className="btn btn-secondary ms-2" onClick={() => {}}>Cancel</button>
                </div>
              </form>
        </div>
      </div>
    )
}

export default CreateRecord
