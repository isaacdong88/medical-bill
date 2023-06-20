import React from "react";
import { useState } from "react";

function MedicalBill() {
  const [medicalForm, setMedicalForm] = useState({
    firstname: "",
    lastname: "",
    address: "",
    hospital: "",
    servicedate: "",
    billamount: "",
    image: "",
  });
  return (
    <div>
      <div className="header">
        <h1>
          Reduce your medical bill with{" "}
          <span className="colorPurple">Truffle Health</span> within a week
        </h1>
      </div>
      <div>
        <form className="bill-form">
          <div className="input-field">
            <label>
              First Name <span className="asterisk">*</span>
            </label>
            <br />
            <input type="text" id="firstname" name="firstname" required />
          </div>

          <div className="input-field">
            <label>
              Last Name <span className="asterisk">*</span>
            </label>
            <br />
            <input type="text" id="lastname" name="lastname" required />
          </div>

          <div className="input-field">
            <label>
              Address <span className="asterisk">*</span>
            </label>
            <br />
            <input type="text" id="address" name="address" required />
          </div>

          <div className="input-field">
            <label>
              Hospital Name <span className="asterisk">*</span>
            </label>
            <br />
            <input type="text" id="hospital" name="hospital" required />
          </div>

          <div className="input-field">
            <label>
              Date of Service <span className="asterisk">*</span>
            </label>
            <br />
            <input type="date" id="servicedate" name="servicedate" required />
          </div>

          <div className="input-field">
            <label>
              Bill Amount <span className="asterisk">*</span>
            </label>
            <br />
            <input type="text" id="amount" name="amount" required />
          </div>

          <div className="input-field">
            <label>
              Image of Bill <span className="asterisk">*</span>
            </label>
            <br />
            <input type="file" required />
          </div>

          <div className="review-btn">
            <button>Review &#8594;</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MedicalBill;
