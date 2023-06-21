import React from "react";
import { useState } from "react";

function MedicalBill() {
  const [reviewBill, setReviewBill] = useState(true);
  const [medicalForm, setMedicalForm] = useState({
    firstname: "",
    lastname: "",
    address: "",
    state: "",
    city: "",
    zipcode: "",
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
          <div className="form-header">
            <h2>Truffle Health Bill Reduction</h2>
            <br />
            <p>
              Medical bills can be confusing and overwhelming to deal with.
              We're here to help.
            </p>
          </div>
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

          <div className="address-field">
            <div className="address">
              <label>
                State <span className="asterisk">*</span>
              </label>
              <br />
              <select name="state" id="state" onChange={handleChange}>
                <option value="" selected disabled hidden>
                  Choose State
                </option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="District Of Columbia">
                  District Of Columbia
                </option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="LLouisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
            </div>

            <div className="address">
              <label>
                City <span className="asterisk">*</span>
              </label>
              <br />
              <input
                type="text"
                id="city"
                name="city"
                value={medicalForm.city}
                required
                onChange={handleChange}
              />
            </div>

            <div className="address">
              <label>
                Zip Code <span className="asterisk">*</span>
              </label>
              <br />
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                value={medicalForm.zipcode}
                required
                onChange={handleChange}
              />
            </div>
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
        <div className="review-header">
          <h2>Review</h2>
        </div>
        <div className="previewInfo">
          <div className="preview-field">
            First Name: {medicalForm.firstname}
          </div>
          <div className="preview-field">Last Name: {medicalForm.lastname}</div>
          <div className="preview-field">Address: {medicalForm.address}</div>
          <div className="preview-field">State: {medicalForm.state}</div>
          <div className="preview-field">City: {medicalForm.city}</div>
          <div className="preview-field">Zip Code: {medicalForm.zipcode}</div>
          <div className="preview-field">Hospital: {medicalForm.hospital}</div>
          <div className="preview-field">
            Date of Service: {medicalForm.servicedate}
          </div>
          <div className="preview-field">
            Bill Amount: ${medicalForm.billamount}
          </div>
        </div>
        <div className="previewImage">
          <img src={medicalForm.image} alt="none" />
        </div>
        <div className="submit-btn">
          <button
            onClick={() => {
              setReviewBill(true);
            }}
          >
            &#8592; Go Back
          </button>
          <button>Submit</button>
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
