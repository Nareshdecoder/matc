import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { iteratorSymbol } from "immer/dist/internal";
function Payment() {
  let navigate = useNavigate();
  interface Window {
    example: any;
  }
  const { id } = useParams();
  console.log("locationssss", id);
  const [values, setValues] = useState({});
  const [amount, setAmount] = useState<any>("");
  const [pay, setPay] = useState(false);
  const [minAmount, setMinAmount] = useState<any>("");
  let packageData = useSelector(
    (state: any) => state.TripReducer?.pakagesResponse
  );
  console.log("packageDatadata", packageData);
  const handleForm = () => {
    setPay(true);
  };
  const validate = (values: any) => {
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      adhar: "",
    };

    if (!values.firstName) {
      errors.firstName = "Required*";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required*";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required*";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.adhar) {
      errors.adhar = "Required*";
    } else if (!/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/.test(values.adhar)) {
      errors.adhar = "Invalid adhar number";
    }
    if (formik) {
      let PayValid = Object.values(formik.values).filter(
        (value: any) => value == ""
      );
      if (PayValid.length == 0) {
        setPay(true);
      }
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      adhar: "",
    },
    validate,
    onSubmit: (values) => {},
  });
  const notify = () => toast("Please enter the Amount!");
  const notifySuccess = () => toast("Payment done successfully");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (amount === "") {
      notify();
    } else {
      var options = {
        key: "rzp_test_ZdBIDuUp3Zwkv8",
        key_secret: "xJ0uQSscsn7jcSTBCj9v77Ju",
        amount: amount * 100,
        currency: "INR",
        name: "Travell Agency",
        description: "for testing purpose",
        handler: function () {
          notifySuccess();
          navigate("/success");
        },
        prefill: {
          name: "Travel Agency",
          email: "tavel@gmail.com",
          contact: "6369063574",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };
  const handleChange = (event: any) => {
    setValues((prevValues) => ({
      ...prevValues,
      // we use the name to tell Formik which key of `values` to update
      [event.target.name]: event.target.value,
    }));
  };
  const { name } = useParams();
  console.log("namess", name);

  useEffect(() => {
    if (packageData.length > 0) {
      const filter = packageData.find((packages: any) => {
        if (packages.id == id) {
          setMinAmount(packages);
          setAmount(packages.price);
          console.log("setMinAmount", packages);
          return packages;
        }
      });
    }
  }, [packageData]);

  return (
    <div>
      <div className="container-fluid p-0">
        <div className="bg-brandcolor3 text-white mt-2 p-5 h3">
          <div> Payment Page</div>
          <div className=" mt-3">Destination :{minAmount.name}</div>
        </div>

        <div className="mt-5 ">
          <form
            onSubmit={formik.handleSubmit}
            className="justify-content-center "
          >
            <div className="d-flex justify-content-center position-relative gap-5">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter FirstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
              />
              {formik.errors.firstName ? (
                <span className="text-danger formik">
                  {formik.errors.firstName}
                </span>
              ) : null}
            </div>
            <div className="d-flex justify-content-center position-relative gap-5 mt-4">
              {" "}
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter LastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.errors.lastName ? (
                <div className="text-danger formik">
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>

            <div className="d-flex justify-content-center position-relative gap-4 mt-4">
              {" "}
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className="text-danger formik">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="d-flex justify-content-center position-relative gap-4 mt-4">
              {" "}
              <label htmlFor="email">Adhar Number</label>
              <input
                id="adhar"
                name="adhar"
                type="text"
                placeholder="Exnter Number as Aadhar Format"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.adhar}
              />
              {formik.errors.adhar ? (
                <div className="text-danger formik">{formik.errors.adhar}</div>
              ) : null}
            </div>
            <div className="d-flex justify-content-center ml-8 mt-4">
              <Button type="submit" onClick={validate}>
                Submit
              </Button>

              <Button
                type="submit"
                className="  ms-5 bg-danger"
                onClick={() => navigate("/trips")}
              >
                cancel
              </Button>
            </div>
          </form>
        </div>
        {pay && (
          <div className="bg-brandcolor3 mt-5 container-fluid p-0 h-100">
            <div className="h4 p-3">Bill desk</div>
            <label className="me-1">Amount to be Paid:</label>
            <input
              type="text"
              className="mt-3"
              placeholder="Enter amount "
              value={amount}
              readOnly={true}
              onChange={(e: any) => setAmount(e.target.value)}
            />
            <br />
            <br />
            <Button onClick={handleSubmit} className="mb-5">
              Procced to pay
            </Button>
            <ToastContainer />
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
