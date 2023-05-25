import React from 'react'
import ContactUs from '../components/Home/ContactUs'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchUser,fetchUserById} from '../redux/reducer/userReducer'
function ContactUsPage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
 const id=1;
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);
  console.log(users);

  return (
    <div>
        <ContactUs />
      {
        <div>
          {status === 'loading' && <h1>Loading...</h1>}
          {status === 'failed' && <h1>{error}</h1>}
          {status === 'success' && (
            <div>
              {users.map((user) => (
                <div key={user.id}>
                  <h1>{user.name}</h1>
                  <h1>{user.email}</h1>
                  <h1>{user.phone}</h1>
                  <h1>{user.website}</h1>
                </div>
              ))}
            </div>
          )}
        </div>
      }
      
    </div>
  )
}

export default ContactUsPage
