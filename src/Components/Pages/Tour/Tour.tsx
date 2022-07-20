import React from "react";
import { Carousel } from "react-bootstrap";
import { Button } from "../../Core";
import Header from "../../header/Hearder";
import wallmac from "../../../Assets/Images/wallmac.jpg";
import nature from "../../../Assets/Images/nature.jpg";
import wallpic from "../../../Assets/Images/wallpic.jpg";
import Footer from "../../Footer/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Tour() {
  let location = window.location.href;

  const { id } = useParams();
  console.log("location", id);
  let countryData = useSelector(
    (state: any) => state.TripReducer?.countryResponse
  );
  const desitination = [
    {
      name: "Netherland",
      Type: "Relax",
      duration: "10/15 days",
      price: "45k",
      id: "1",
      description:
        "It is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands. It is the sixth-largest island country by area, covering 268,021 square kilometres.",
    },
    {
      tour: "Destination",
      name: "Australia",
      Type: "Relax",
      duration: "10/15 days",
      price: "45k",
      id: "2",
      description:
        " It is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands. It is the sixth-largest island country by area, covering 268,021 square kilometres.",
    },
    {
      tour: "Destination",
      name: "Uk",
      Type: "Relax",
      duration: "10/15 days",
      price: "45k",
      id: "3",
      description:
        "It is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands. It is the sixth-largest island country by area, covering 268,021 square kilometres.",
    },
    {
      tour: "Destination",
      name: "italy",
      Type: "Relax",
      duration: "10/15 days",
      price: "45k",
      id: "4",
      description:
        " It is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands. It is the sixth-largest island country by area, covering 268,021 square kilometres.",
    },
  ];
  const filter = countryData.filter((countryData: any) => countryData.id == id);
  console.log("first", filter);
  return (
    <>
      <Header />
      <div className="container-fluid banners">
        <div className="container">
          <div className="row align-items-center txt-left">
            <div className="col-12 justify-content-center d-flex">
              {filter.map((itemns: any) => (
                <div>
                  <div className="h1 text-white me-5">
                    About Your Dream Place
                  </div>
                  <div className="h1 text-orange ms-5 mt-5 ">
                    {" "}
                    {itemns.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={nature} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={wallmac} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={wallpic} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container">
        <div className="row ">
          {filter.map((items: any) => (
            <div className="col-4 bg-blue mt-6">
              <div className="mt-3">
                <div className="h5 mt-5 text-dark">Destination</div>
                <h6>{items.name}</h6>
              </div>

              <div className="mt-2">
                <div className="h5 mt-5 text-dark">Type</div>
                <h6>{items.Type}</h6>
              </div>
              <div className="mt-3">
                <div className="h5 mt-5 text-dark">Duration</div>
                <h6>{items.duration}</h6>
              </div>
              <div className="mt-3">
                <div className="h5 mt-5 text-dark">Price</div>
                <h6>{items.price}</h6>
              </div>
            </div>
          ))}
          <div className="col-8  d-flex justify-content-center txt-left flex-column ps-5">
            <div className="">
              <div className="text-primary ">About this place</div>
              <div className="text-dark h4">Explore world with us</div>
              {filter.map((data: any) => (
                <div>
                  <div className="text-brandcolor3 mt-2">
                    {data.description}
                    {console.log("datawhy", data.Why)}
                  </div>
                  <div className="text-brandcolor3 mt-5">{data.Why}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="text-dark h1 mt-4">Galery</div>
          <div className="col p-5">
            <div className="d-flex flex-wrap w-100 justify-content-between">
              <div className=" w-33 trp-img"></div>
              <div className="w-33 trp-img"></div>
              <div className="w-33 trp-img "></div>
              <div className=" w-33 trp-img mt-4"></div>
              <div className=" w-33 trp-img mt-4"></div>

              <div className=" w-33 trp-img mt-4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer container-fluid">
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

export default Tour;
