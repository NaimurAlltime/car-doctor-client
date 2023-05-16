import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-[208.01px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-lg text-orange-600 font-bold">Price: ${price} </p>
          <Link to={`/checkout/${_id}`}>
            <button className="btn border-0 bg-[#FF3811] mr-4">
              Book Now
              <FaArrowRight className="text-xl ml-2 font-bold" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
