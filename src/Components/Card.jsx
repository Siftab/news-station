
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';

const Card = ({props}) => {
    const {title,image_url,details,_id}=props;
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure><img src={image_url}alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                 {details.length>160?<p>{details.slice(0,160)} <Link to={`/news/${_id}`} className="text-blue-600 font-bold">read more....</Link> </p>  : <p>{details}</p>}
            </div>
        </div>
    );
};

export default Card;
Card.propTypes={
    props:PropTypes.object,

}