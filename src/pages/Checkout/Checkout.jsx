import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
  const services = useLoaderData();
  const { _id, title, price, img } = services;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const booking = {
      displayName: name,
      email,
      date,
      img,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(booking);

    // data fetching post api
    fetch(
      "https://car-doctor-server-dlftyu7fx-naimuralltime.vercel.app/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Booking service added!");
          form.reset();
        }
      });
  };

  return (
    <div className="my-14">
      <h2 className="text-center text-3xl font-bold py-3">
        Book Services: {title}{" "}
      </h2>

      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              name="name"
              id="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              id="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="amount"
              id="amount"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control w-full mt-6">
          <input
            className="bg-[#FF3811] text-white text-xl rounded-md py-3 font-bold"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
