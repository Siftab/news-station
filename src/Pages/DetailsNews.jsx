
import RightNavBar from '../Components/RightNavBar';
import NavBar from '../Components/NavBar';

const DetailsNews = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='grid grid-cols-4'>
                <div className='col-span-3 border'>main</div>
                <div><RightNavBar></RightNavBar></div>
            </div>
        </div>
    );
};

export default DetailsNews;