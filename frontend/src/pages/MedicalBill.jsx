import React from "react";
import { useState } from "react";

function MedicalBill() {
  const [reviewBill, setReviewBill] = useState(true);
  const [medicalForm, setMedicalForm] = useState({
    firstname: "",
    lastname: "",
    address: "",
    hospital: "",
    servicedate: "",
    billamount: "",
    image: "",
  });

  const handleChange = async (event) => {
    setMedicalForm({
      ...medicalForm,
      [event.target.name]: event.target.value,
    });
    console.log(medicalForm);
  };

  const handleImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await converToBase64(file);
    //use the event object to detect key and value to update
    setMedicalForm({
      ...medicalForm,
      image: base64,
    });
    console.log(medicalForm);
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
  };

  return reviewBill ? (
    <div>
      <div className="header">
        <h1>
          Reduce your medical bill with{" "}
          <span className="colorPurple">Truffle Health</span> within a week
        </h1>
      </div>
      <div>
        <form className="bill-form" onSubmit={handleSubmit}>
          <div className="input-field">
            <label>
              First Name <span className="asterisk">*</span>
            </label>
            <br />
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={medicalForm.firstname}
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-field">
            <label>
              Last Name <span className="asterisk">*</span>
            </label>
            <br />
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={medicalForm.lastname}
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-field">
            <label>
              Address <span className="asterisk">*</span>
            </label>
            <br />
            <input
              type="text"
              id="address"
              name="address"
              value={medicalForm.address}
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-field">
            <label>
              Hospital Name <span className="asterisk">*</span>
            </label>
            <br />
            <input
              type="text"
              id="hospital"
              name="hospital"
              value={medicalForm.hospital}
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-field">
            <label>
              Date of Service <span className="asterisk">*</span>
            </label>
            <br />
            <input
              type="date"
              id="servicedate"
              name="servicedate"
              value={medicalForm.servicedate}
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-field">
            <label>
              Bill Amount <span className="asterisk">*</span>
            </label>
            <br />
            <input
              type="text"
              id="billamount"
              name="billamount"
              value={medicalForm.billamount}
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-field">
            <label>
              Image of Bill <span className="asterisk">*</span>
            </label>
            <br />
            <input
              type="file"
              name="image"
              accept=".jpeg, .png, .jpg"
              required
              onChange={handleImage}
            />
          </div>

          <div className="review-btn">
            <button
              onClick={() => {
                setReviewBill(false);
              }}
            >
              Review &#8594;
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div>
      <div className="header">
        <h1>
          Reduce your medical bill with{" "}
          <span className="colorPurple">Truffle Health</span> within a week
        </h1>
      </div>
      <div className="previewPage">
        <div className="previewInfo">
          <div className="input-field">First Name {medicalForm.firstname}</div>
          <div className="input-field">Last Name {medicalForm.lastname}</div>
        </div>
        <div className="previewImage">
          <img src={medicalForm.image} alt="none" />
        </div>
        <div className="back-btn">
          <button
            onClick={() => {
              setReviewBill(true);
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default MedicalBill;

const converToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
