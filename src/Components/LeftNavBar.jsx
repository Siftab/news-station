import { useEffect, useState } from 'react';
import Card from '../Components/Card'
const LeftNavBar = () => {
    const [categories,setCategories]=useState([]);
    const [news,setNews]=useState([]);
    // useEffect(()=>{
    //     fetch('/categories.json')
    //     .then(res => res.json())
    //     .then(data => setCategories(data))
    // },[]);
    useEffect(()=>{
        fetch('/categories.json')
        .then(res=> res.json())
        .then(data=>setCategories(data))
    },[])
    useEffect(()=>{
        fetch('/news.json')
        .then(res=>res.json())
        .then(data=> setNews(data))
    },[])
    return (
        <div>
            <div className='space-y-4'>
                <h1>All Caregory {categories.length}</h1>
                {
                categories.map(category=><div key={category.id} ><p className='text-[#9F9F9F] ml-12'>{category.name}</p></div>)

                }
            </div>

            <div className='space-y-11'>
                {
                    news.length>3? news.slice(0,3).map(aNews=> <Card key={aNews._id} props={aNews}></Card>): news.map(aNews=><Card key={aNews._id} props={aNews}></Card>)
                }
            </div>
            
        </div>
    );
};

<div>
    <h1 className='text-xl font-semibold'>All Caregory</h1>
</div>
export default LeftNavBar;