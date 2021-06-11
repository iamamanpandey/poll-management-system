import React from 'react';
import {useSelector} from'react-redux';

const Home = ()=>{
const user = useSelector(state => state.user)
 
 return(
     <h2>homep  page</h2>
 )
    
}
export default Home;