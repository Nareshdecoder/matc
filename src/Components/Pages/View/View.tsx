import React, { useContext, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import wallmac from "../../../Assets/Images/wallmac.jpg";
import nature from "../../../Assets/Images/nature.jpg";
import wallpic from "../../../Assets/Images/wallpic.jpg";
import waterfalls from "../../../Assets/Images/waterfalls.jpg";
import sightseeing from "../../../Assets/Images/sightseeing.jpg";
import { Button } from "../../Core";
import { AiFillCar } from "react-icons/ai";
import { MdFlight } from "react-icons/md";
import { Context } from "../../../context";
import { useNavigate, useParams } from "react-router-dom";
function View() {
  let navigate = useNavigate();
  const [value1, setValue1] = useState([]);
  let example: any = useContext(Context);
  useEffect(() => {
    let responce: any = example
      ?.api1()
      .then((result: any) => {
        setValue1(result);

        console.log("result", result);
      })
      .catch((err: any) => {
        console.log("result", err);
      });
  }, []);
  const { id } = useParams();
  console.log("locationview", id);
  console.log("value", value1);
  const filter: any = value1.filter((value1: any) => value1.id == id) || [];

  console.log("valuefilter", filter);
  const days = [
    "Check in Hotel 5 Star Includes Foods for Three Time with Snacks and compliment drinks",
    "Sight seeings includes best view in the country",
    "Trucking includes Transportation and Trucking Suits",
    "Sight seeings includes best view in the country",
    "Shoping Will includes some complementry and gift card and surprises",
    "Sight seeings  includes best view in the country",
    "Sight seeings  includes best view in the country",
    "Sight seeings  includes best view in the country",
    "Sight seeings  includes best view in the country",
    "Check out Hotel",
  ];
  let dayschedule =
    filter.length > 0
      ? days.slice(0, parseInt(filter[0].day))
      : days.slice(0, 5);
  console.log(dayschedule, "dayschedule");
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex mt-3 h2 ms-4"></div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 p-1">
            <Carousel>
              <Carousel.Item className="Caraoosal">
                <img className="d-block w-100" src={nature} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item className="Caraoosal">
                <img
                  className="d-block w-100"
                  src={nature}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item className="Caraoosal">
                <img className="d-block w-100" src={nature} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-4 p-1">
            <img
              src={sightseeing}
              alt="side1"
              className="img-fluid Caraoosal"
            />
          </div>
          <div className="col-2 p-1">
            <img
              src={sightseeing}
              alt="side1"
              className="img-fluid Caraoosal_fit"
            />
            <img
              src={sightseeing}
              alt="side1"
              className="img-fluid Caraoosal_fit mt-2"
            />
          </div>
        </div>
      </div>
      {filter.length > 0 &&
        filter.map((items: any) => (
          <div className="container-fluid  bg-grey2 d-flex gap-2">
            <div className="mt-4 card col-9 ">
              <li className="justify-content-start text-start ">
                <MdFlight /> Arrival in {items.name} by 22 aug 2022 | Includes
                Check In Baggage
              </li>
              <li className="text-start">
                {" "}
                <AiFillCar /> Airport to hotel in {items.name}
              </li>
              <div className=" flex-wrap  justify-content-start col-11 ">
                <div className=" bg-red1  border table-col text-start d-flex align-items-center">
                  <span className="mt-2"> {items.night} Nights Stay</span>
                </div>

                {dayschedule.map((data: any, key) => (
                  <div className="d-flex gap-5 align-items-center  col-10  border border-primary  table-col">
                    <div>
                      {"Day"}
                      {key + 1}-{data}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <li className="justify-content-start text-start ">
                  <MdFlight /> Departure from {items.name} by 27 aug 2022 |
                  Includes Check In Baggage
                </li>
                <li className="text-start">
                  {" "}
                  <AiFillCar /> Airport to Chennai
                </li>
              </div>
            </div>
            <div className="mt-4 card_prize col-3 ">
              <span className="text-start prizeout d-flex">62,000</span>
              <div className="mt-3 d-flex gap-2 ">
                <span className="text-dark h4 mb-0">{items.price}</span>
                <p> per person*</p>
              </div>
              <p className="text-start">*Excluding applicable taxes</p>
              <Button
                title="Proceed to Pay Online"
                className={"mt-3"}
                onClick={() => navigate(`/payment/${items.id}`)}
              />
            </div>
          </div>
        ))}
    </>
  );
}

export default View;
