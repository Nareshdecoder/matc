import React, { useEffect, useState } from "react";
import { Button } from "../../Core";
import Footer from "../../Footer/Footer";
import trip from "../../../Assets/Images/trip.png";
import Header from "../../header/Hearder";
import { MdFlight, MdOutlineNordicWalking } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPackagesAction } from "../../Redux/Action/tripAction";

function Trips() {
  let navigate = useNavigate();
  const dispatch: any = useDispatch();
  let packageData = useSelector(
    (state: any) => state.TripReducer?.pakagesResponse
  );
  console.log("packageData", packageData);
  const country = [
    {
      id: "1",
      name: "Roma, Italia",
      price: "24500",
      days: "5days",
      flight: "2",
      hotel: "1",
      activities: "2",
      transfer: "1",
      day: "3",
      night: "4",

      description:
        "is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands. It is the sixth-largest island country by area, covering 268,021 square kilometres.",
    },
    {
      id: "2",
      name: "Jakarta, Indonesia",
      price: "15899",
      days: "4days",
      flight: "1",
      hotel: "2",
      activities: "1",
      transfer: "1",
      day: "2",
      night: "3",
      description:
        "is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands. It is the sixth-largest island country by area, covering 268,021 square kilometres.",
    },
    {
      name: "Bangkok, Thailand",
      price: "34999",
      days: "7days",
      id: "3",
      flight: "3",
      hotel: "1",
      activities: "1",
      transfer: "2",
      day: "6",
      night: "5",
      description:
        "is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands. It is the sixth-largest island country by area, covering 268,021 square kilometres.",
    },
    {
      id: "4",
      name: "uk",
      price: "67777",
      days: "10days",
      flight: "1",
      hotel: "3",
      activities: "3",
      transfer: "2",
      day: "9",
      night: "10",
      description:
        "is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands. It is the sixth-largest island country by area, covering 268,021 square kilometres.",
    },
    {
      id: "5",
      name: "paris",
      price: "33333",
      days: "10days",
      flight: "2",
      hotel: "1",
      activities: "2",
      transfer: "1",
      day: "3",
      night: "4",
      description:
        "is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands. It is the sixth-largest island country by area, covering 268,021 square kilometres.",
    },
    {
      id: "6",
      name: "Germany",
      price: "22222",
      days: "6days",
      flight: "2",
      hotel: "1",
      activities: "2",
      transfer: "1",
      day: "3",
      night: "4",
      description:
        "is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands. It is the sixth-largest island country by area, covering 268,021 square kilometres.",
    },
    {
      id: "7",
      name: "Brazil",
      price: "55555",
      days: "11days",
      flight: "2",
      hotel: "1",
      activities: "2",
      transfer: "1",
      day: "3",
      night: "4",
      description:
        "is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands. It is the sixth-largest island country by area, covering 268,021 square kilometres.",
    },

    {
      id: "8",
      name: "Singapore",
      price: "17777",
      days: "3days",
      flight: "2",
      hotel: "1",
      activities: "2",
      transfer: "1",
      day: "3",
      night: "4",
      description:
        "is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands. It is the sixth-largest island country by area, covering 268,021 square kilometres.",
    },
    {
      id: "9",
      name: "Malaysia",
      price: "18999",
      days: "4days",
      flight: "2",
      hotel: "1",
      activities: "2",
      transfer: "1",
      day: "3",
      night: "4",
      description:
        "is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands. It is the sixth-largest island country by area, covering 268,021 square kilometres.",
    },
  ];
  const [checked, setChecked] = useState(false);
  const [filter, setFilter] = useState<any>([]);
  useEffect(() => {
    dispatch(getPackagesAction());
    console.log("packageData", packageData);
  }, []);
  const handleCheckbox = (e: any) => {
    const values = e.target.value;
    setChecked(e.target.checked);
    const valuess = values.split("/");

    filterPrice(valuess);
  };

  const filterPrice = (valuess: number[]) => {
    let data = packageData.filter((item: any) => {
      console.log(
        "=-=-==-=-=-=-=-data=-=-=-=-=-=-=-=-=-filter",
        item.price,
        valuess[0],
        valuess[1],
        parseInt(item.price),
        parseInt(item.price) > valuess[0],
        parseInt(item.price) < valuess[1]
      );
      if (
        parseInt(item.price) > valuess[0] &&
        parseInt(item.price) < valuess[1]
      ) {
        return item;
      }
    });
    setFilter(data);
  };
  return (
    <>
      <Header />
      <div className="container-fluid banner">
        <div className="container">
          <div className="row align-items-center txt-left">
            <div className="col-lg-6">
              <div>
                <div className="h1 text-white ">
                  Understand your <br />
                  customers better
                </div>
                <div className="h5 text-white mt-5 ">
                  Voyaging was founded in 1996 and has grown into an industry
                  leader that stands out for being one of the most comprehensive
                  trip planning platforms out there.
                  <br />
                  flights (including one-way and multi-city flights), tour
                  activities, and
                  <br /> even airport taxis.
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 mt-8 ">
            <div className="h4 text-primary">Destination</div>
            <div className="h6 text-danger ">Price</div>
            <div className="me-4">
              <input
                type="checkbox"
                value="10000/20000"
                onChange={handleCheckbox}
              />
              <label className="ms-2"> 10000 to 20000</label>
            </div>
            <div className="mt-2 me-4">
              <input
                type="checkbox"
                value="30000/40000"
                onChange={handleCheckbox}
              />
              <label className="ms-2"> 30000 to 40000</label>
            </div>
            <div className="mt-2 me-4">
              <input
                type="checkbox"
                value="50000/80000"
                onChange={handleCheckbox}
              />
              <label className="ms-2"> 50000 to 80000</label>
            </div>
          </div>
          <div className="col-10  d-flex  flex-wrap gap-5">
            {console.log("=-=-==-=-=-=-=-data=-=-=-=-=-=-=-=-=-", filter)}
            {checked && filter.length
              ? filter.map((items: any) => (
                  <div className=" mt-5 card">
                    <div className="h6 text-start">visa+flexi-package</div>
                    <div className="h4 text-start">Discover {items.name}</div>
                    <div className="position-relative">
                      <img
                        src={trip}
                        className="book_img d-flex justify-content-between"
                      />
                      <div className="bg-dark text-white card_days">
                        {items.days}
                      </div>
                    </div>

                    <div className="d-flex mt-4">
                      <div>
                        <MdFlight />
                        <div className="mt-2 ms-2">{items.flight} Flights</div>
                      </div>

                      <div>
                        <RiHotelFill />
                        <div className="mt-2 ms-2">{items.hotel} Hotels</div>
                      </div>
                      <div>
                        <MdOutlineNordicWalking />
                        <div className="mt-2 ms-2">
                          {items.activities} Activities
                        </div>
                      </div>
                      <div>
                        <AiFillCar />
                        <div className="mt-2 ms-2">
                          {items.transfer} Transfer
                        </div>
                      </div>
                    </div>
                    <div className="d-flex ms-4 gap-2 mt-3">
                      <div>
                        <span className="text-danger">{items.day}D</span>
                        <span className="ms-2">Days</span>
                      </div>
                      <div>|</div>
                      <div>
                        <span className="text-danger">{items.night}D</span>
                        <span className="ms-2">Night</span>
                      </div>
                    </div>
                    <div className="mt-2 me-5">
                      <li>Full day sightseeing Tour</li>
                    </div>
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                      <span className="text-dark h4 mb-0">₹ {items.price}</span>
                      <span>{items.name}</span>
                      <Button
                        title="Book now"
                        onClick={() => navigate(`/view/${items.id}`)}
                      />
                    </div>
                  </div>
                ))
              : packageData.map((items: any) => (
                  <div className=" mt-5 card">
                    <div className="h6 text-start">visa+flexi-package</div>
                    <div className="h4 text-start">Discover {items.name}</div>
                    <div className="position-relative">
                      <img
                        src={trip}
                        className="book_img d-flex justify-content-between"
                      />
                      <div className="bg-dark text-white card_days">
                        {items.days}
                      </div>
                    </div>

                    <div className="d-flex mt-4">
                      <div>
                        <MdFlight />
                        <div className="mt-2 ms-2">{items.flight} Flights</div>
                      </div>

                      <div>
                        <RiHotelFill />
                        <div className="mt-2 ms-2">{items.hotel} Hotels</div>
                      </div>
                      <div>
                        <MdOutlineNordicWalking />
                        <div className="mt-2 ms-2">
                          {items.activities} Activities
                        </div>
                      </div>
                      <div>
                        <AiFillCar />
                        <div className="mt-2 ms-2">
                          {items.transfer} Transfer
                        </div>
                      </div>
                    </div>
                    <div className="d-flex ms-4 gap-2 mt-3">
                      <div>
                        <span className="text-danger">{items.day}D</span>
                        <span className="ms-2">Days</span>
                      </div>
                      <div>|</div>
                      <div>
                        <span className="text-danger">{items.night}D</span>
                        <span className="ms-2">Night</span>
                      </div>
                    </div>
                    <div className="mt-2 me-5">
                      <li>Full day sightseeing Tour</li>
                    </div>
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                      <span className="text-dark h4 mb-0">₹ {items.price}</span>
                      <Button
                        title="Book now"
                        onClick={() => navigate(`/view/${items.id}`)}
                      />
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <div className="footer container-fluid mt-4">
        <div className="text-white mt-2">About Us</div>
        <div className="text-white h4 mt-2">Explore world with us</div>
        <div className="text-white mt-2">
          MakeMyTrip.com, India's leading online travel company, has a profound
          understanding of Indian consumers travel needs and preferences. It
          offers a wide range of holiday packages in India and across the world,
          catering to various segments of travellers. While the dynamic or
          customized tour and travel packages give consumers an option to create
          and design their own holiday, the fixed departure holiday packages
          have a pre-designed itinerary; thus ensuring there is something to
          meet the holiday needs of every kind of travelle
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Trips;
