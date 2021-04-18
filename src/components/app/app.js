import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list'; 
import PostAddForm from '../post-add-form';
import './app.css';


const App = ()=>{

    const data = [
        {label: 'Going to learn react.js', important: true, id: 'asd'},
        {label: 'That is so coool', important: false, id: 'dsf'},
        {label: 'i want a job', important: false, id: 'asdadq'}
    ];


    return(
    <div className='app'>
        <AppHeader/>
        <div className='search-panel d-flex'>
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList posts={data}/>
        <PostAddForm/>
    </div>
    )
}
export default App;