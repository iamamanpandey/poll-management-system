import React from 'react';
import {useSelector} from'react-redux';

const Home = ()=>{
const user = useSelector(state => state.user)
 
console.log(user.token)
 return(
     <h2>homep  page</h2>
 )
    
}
export default Home;