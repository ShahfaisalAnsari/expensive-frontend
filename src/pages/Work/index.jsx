import { fetchUsers } from '@/store/slices/userSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'

const Work = () => {
  const users = useSelector((state)=> state?.users);
  const navigate = useNavigate();
   console.log(users?.data)
  const dispatch = useDispatch();
   useEffect(()=>{
    dispatch(fetchUsers());
  },[]);
  console.log(users)
  return (
    <>
    <div>Work</div>
    <button onClick={()=>navigate('dashboard')}>show dashboard down</button>
    <Outlet/>
    </>
  )
}

export default React.memo(Work);