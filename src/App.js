import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Records from './components/records';

function App() {
  // axios
  // 4 methods (REST Protocal)
  // GET, POST, PUT & DELETE
  // GET - Retreieve the records
  // POST - CREATE a record/data
  // PUT - UPDATE a record/data
  // DELETE - REMOVE a record/data

  const [records, setRecords] = useState([]);
  const [showForm, setToShowForm] = useState(false);
  const [formValues, setFormValues] = useState({
    title: '',
    body: '',
    userId: ''
  });

  // Call backend endpoint on mounting - initializing component
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(res);
      setRecords(res.data);
    } catch (error) {
    }
  }

  // Props - communication b/w parent to child or child to parent

  // async function postData() {
  //   try {
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     console.log(res);
  //     setRecords(res.data);
  //   } catch (error) { 
  //   }
  // }

  // // Spread Operator
  // const obj1 = {
  //   name: 'react',
  //   year: 2015
  // }
  // const obj2 = {
  //   language: 'js',
  //   type: 'frameworl'
  // }
  // const ob3 = {
  //   ...obj1,
  //   ...obj2,
  //   tool: 'VSCOde'
  // }

  // const arr1 = [1,2,3];
  // const arr2 = [4,5,6];
  // const arr3 = [...arr1, ...arr2, 8,9,10];

  function createPost(e) {
    e.preventDefault();
    console.log(formValues);
    if (formValues.id) {
      setRecords(records.map(a => {
        if (a.id === formValues.id) {
          a = formValues;
        }
        return a;
      }))
      setFormValues({

        title: '',
        body: '',
        userId: ''

      })
      setToShowForm(false);
    } else {
      setRecords([...records, formValues])
    }
  }

  function deleteRecord(record) {
    setRecords(records.filter(a => a.id !== record.id));
  }

  function triggerEdit(record) {
    console.log(record);
    setFormValues(record);
    setToShowForm(true)
  }


  return (
    <div className="App">
      <div className="container">
        <button className="btn btn-primary m-4" onClick={() => setToShowForm(true)}>+ Add Post</button>
        {
          showForm === true && (
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
                <button className="btn btn-secondary ms-2" onClick={() => setToShowForm(false)}>Cancel</button>
              </div>
            </form>
          )
        }
        <Records data={records} handleDelete={(value) => deleteRecord(value)} handleEdit={triggerEdit} />
      </div>
    </div>
  );
}

export default App;
