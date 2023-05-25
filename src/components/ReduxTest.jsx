import React from 'react';
import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserById,login} from '../redux/reducer/userReducer';

function ReduxTest() {
  const dispatch = useDispatch();
  const id = 1;
  const user = useSelector((state) => state.user.users);
  console.log(user);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const [id1,setId]=useState('');
    const [name,setName]=useState('');
    const [fname,setFname]=useState('');
    const [sname,setSname]=useState('');

const idHandler=(e)=>{
    setId(e.target.value);
}
const nameHandler=(e)=>{
    setName(e.target.value);
}
const fnameHandler=(e)=>{
    setFname(e.target.value);
}
const snameHandler=(e)=>{
    setSname(e.target.value);
}
 const loginData={
        id:id1,
        name:name,
        fname:fname,
        sname:sname
    }
useEffect(() => {
    console.log(id1);
    }, [id1]);
  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

dispatch(login(loginData));

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div>
      <form action="">
        <input type="text" name="" id=" 
        " value={id1} onChange={idHandler} placeholder='id'/>
        <input type="text" name=""  id="" placeholder='name' />
        <input type="text" fname="" id="" placeholder='fname'/>
        <input type="text" sname="" id="" placeholder='sname'/>
      </form>
      {user && (
        <div>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
            <h1>{user.phone}</h1>
            <h1>{user.website}</h1>

        </div>
      )}
    </div>
  );
}

export default ReduxTest;
