import React, { useState, useRef, useEffect } from "react";
import "./Settings.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import { CloseOutlined } from "@ant-design/icons";
import "../../userform/userform.css";
import gokul from "../../assets/gir.png";


function Settings() {
  const collaborators = [1, 2, 3, 4];
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const formRef = useRef(null); // Reference for scrolling

  // Scroll to the form when the popup is opened
  useEffect(() => {
    if (isPopupVisible && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isPopupVisible]);

  return (
    <div className="settingsContainer">
      <Sidebar />
      <div className="settings-content">
        <Header />
        <h1 className="settings-mainHeading">Settings</h1>

        <div className="settings-buttonDiv">
          <button
            className="settings-button"
            onClick={() => setIsPopupVisible(true)}
          >
            Add Collaborators
          </button>
        </div>

        <div className="settings-collaboratorList">
          {collaborators.map((item) => (
            <div className="settings-singleCollaborator" key={item}>
              <h6 className="settings-listHeading">Lorem</h6>
              <div className="settings-collaboratorButtons">
                <button
                  className="settings-collaboratorEdit"
                  onClick={() => setIsPopupVisible(true)}
                >
                  Edit
                </button>
                <button className="settings-collaboratorDelete">Delete</button>
              </div>
            </div>
          ))}
        </div>

        {/* Form below collaborator list */}
        {isPopupVisible && (
          <div className="settings-bottomForm" ref={formRef}>
            <div className="settingsModalDiv-content">
             <div className="outer-box" style={{ position: "relative" }}>
             <div className="close-icon-wrapper">
                  <CloseOutlined onClick={() => setIsPopupVisible(false)} />
                </div>
                     <div className="form-container">
                     <div class="profile-container">
               <div class="profile-left">
                 <div class="image-upload">
                   <label for="profileImage">
                     <img src={gokul} alt="Profile Picture" id="profilePreview" />
                   </label>
                   <input type="file" id="profileImage" accept="image/*" onchange="previewImage(event)" />
                 </div>
                 <div class="profile-details">
                   <h2>John Doe</h2>
                   <p>johndoe@example.com</p>
                 </div>
               </div>
               <div class="profile-right">
                 <button class="edit-btn">Edit</button>
               </div>
             </div>
             
             
                       <form className="form-grid">
                         <label>
                           First name :
                           <input type="text" placeholder="Your First Name" />
                         </label>
                         <label>
                           Last name :
                           <input type="text" placeholder="Last name" />
                         </label>
                         <label>
                           Gender:
                           <select>
                             <option>Male</option>
                             <option>Female</option>
                             <option>Others</option>
                           </select>
                         </label>
                         <label>
                           Country:
                           <select>
                             <option>India</option>
               <option value="Afghanistan">Afghanistan</option>
               <option value="Albania">Albania</option>
               <option value="Algeria">Algeria</option>
               <option value="Andorra">Andorra</option>
               <option value="Angola">Angola</option>
               <option value="Antigua and Barbuda">Antigua and Barbuda</option>
               <option value="Argentina">Argentina</option>
               <option value="Armenia">Armenia</option>
               <option value="Australia">Australia</option>
               <option value="Austria">Austria</option>
               <option value="Azerbaijan">Azerbaijan</option>
               <option value="Bahamas">Bahamas</option>
               <option value="Bahrain">Bahrain</option>
               <option value="Bangladesh">Bangladesh</option>
               <option value="Barbados">Barbados</option>
               <option value="Belarus">Belarus</option>
               <option value="Belgium">Belgium</option>
               <option value="Belize">Belize</option>
               <option value="Benin">Benin</option>
               <option value="Bhutan">Bhutan</option>
               <option value="Bolivia">Bolivia</option>
               <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
               <option value="Botswana">Botswana</option>
               <option value="Brazil">Brazil</option>
               <option value="Brunei">Brunei</option>
               <option value="Bulgaria">Bulgaria</option>
               <option value="Burkina Faso">Burkina Faso</option>
               <option value="Burundi">Burundi</option>
               <option value="Cabo Verde">Cabo Verde</option>
               <option value="Cambodia">Cambodia</option>
               <option value="Cameroon">Cameroon</option>
               <option value="Canada">Canada</option>
               <option value="Central African Republic">Central African Republic</option>
               <option value="Chad">Chad</option>
               <option value="Chile">Chile</option>
               <option value="China">China</option>
               <option value="Colombia">Colombia</option>
               <option value="Comoros">Comoros</option>
               <option value="Congo">Congo</option>
               <option value="Costa Rica">Costa Rica</option>
               <option value="Croatia">Croatia</option>
               <option value="Cuba">Cuba</option>
               <option value="Cyprus">Cyprus</option>
               <option value="Czech Republic">Czech Republic</option>
               <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
               <option value="Denmark">Denmark</option>
               <option value="Djibouti">Djibouti</option>
               <option value="Dominica">Dominica</option>
               <option value="Dominican Republic">Dominican Republic</option>
               <option value="Ecuador">Ecuador</option>
               <option value="Egypt">Egypt</option>
               <option value="El Salvador">El Salvador</option>
               <option value="Equatorial Guinea">Equatorial Guinea</option>
               <option value="Eritrea">Eritrea</option>
               <option value="Estonia">Estonia</option>
               <option value="Eswatini">Eswatini</option>
               <option value="Ethiopia">Ethiopia</option>
               <option value="Fiji">Fiji</option>
               <option value="Finland">Finland</option>
               <option value="France">France</option>
               <option value="Gabon">Gabon</option>
               <option value="Gambia">Gambia</option>
               <option value="Georgia">Georgia</option>
               <option value="Germany">Germany</option>
               <option value="Ghana">Ghana</option>
               <option value="Greece">Greece</option>
               <option value="Grenada">Grenada</option>
               <option value="Guatemala">Guatemala</option>
               <option value="Guinea">Guinea</option>
               <option value="Guinea-Bissau">Guinea-Bissau</option>
               <option value="Guyana">Guyana</option>
               <option value="Haiti">Haiti</option>
               <option value="Honduras">Honduras</option>
               <option value="Hungary">Hungary</option>
               <option value="Iceland">Iceland</option>
               <option value="Indonesia">Indonesia</option>
               <option value="Iran">Iran</option>
               <option value="Iraq">Iraq</option>
               <option value="Ireland">Ireland</option>
               <option value="Israel">Israel</option>
               <option value="Italy">Italy</option>
               <option value="Jamaica">Jamaica</option>
               <option value="Japan">Japan</option>
               <option value="Jordan">Jordan</option>
               <option value="Kazakhstan">Kazakhstan</option>
               <option value="Kenya">Kenya</option>
               <option value="Kiribati">Kiribati</option>
               <option value="Korea (North)">Korea (North)</option>
               <option value="Korea (South)">Korea (South)</option>
               <option value="Kosovo">Kosovo</option>
               <option value="Kuwait">Kuwait</option>
               <option value="Kyrgyzstan">Kyrgyzstan</option>
               <option value="Laos">Laos</option>
               <option value="Latvia">Latvia</option>
               <option value="Lebanon">Lebanon</option>
               <option value="Lesotho">Lesotho</option>
               <option value="Liberia">Liberia</option>
               <option value="Libya">Libya</option>
               <option value="Liechtenstein">Liechtenstein</option>
               <option value="Lithuania">Lithuania</option>
               <option value="Luxembourg">Luxembourg</option>
               <option value="Madagascar">Madagascar</option>
               <option value="Malawi">Malawi</option>
               <option value="Malaysia">Malaysia</option>
               <option value="Maldives">Maldives</option>
               <option value="Mali">Mali</option>
               <option value="Malta">Malta</option>
               <option value="Marshall Islands">Marshall Islands</option>
               <option value="Mauritania">Mauritania</option>
               <option value="Mauritius">Mauritius</option>
               <option value="Mexico">Mexico</option>
               <option value="Micronesia">Micronesia</option>
               <option value="Moldova">Moldova</option>
               <option value="Monaco">Monaco</option>
               <option value="Mongolia">Mongolia</option>
               <option value="Montenegro">Montenegro</option>
               <option value="Morocco">Morocco</option>
               <option value="Mozambique">Mozambique</option>
               <option value="Myanmar">Myanmar</option>
               <option value="Namibia">Namibia</option>
               <option value="Nauru">Nauru</option>
               <option value="Nepal">Nepal</option>
               <option value="Netherlands">Netherlands</option>
               <option value="New Zealand">New Zealand</option>
               <option value="Nicaragua">Nicaragua</option>
               <option value="Niger">Niger</option>
               <option value="Nigeria">Nigeria</option>
               <option value="North Macedonia">North Macedonia</option>
               <option value="Norway">Norway</option>
               <option value="Oman">Oman</option>
               <option value="Pakistan">Pakistan</option>
               <option value="Palau">Palau</option>
               <option value="Palestine State">Palestine State</option>
               <option value="Panama">Panama</option>
               <option value="Papua New Guinea">Papua New Guinea</option>
               <option value="Paraguay">Paraguay</option>
               <option value="Peru">Peru</option>
               <option value="Philippines">Philippines</option>
               <option value="Poland">Poland</option>
               <option value="Portugal">Portugal</option>
               <option value="Qatar">Qatar</option>
               <option value="Romania">Romania</option>
               <option value="Russia">Russia</option>
               <option value="Rwanda">Rwanda</option>
               <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
               <option value="Saint Lucia">Saint Lucia</option>
               <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
               <option value="Samoa">Samoa</option>
               <option value="San Marino">San Marino</option>
               <option value="Sao Tome and Principe">Sao Tome and Principe</option>
               <option value="Saudi Arabia">Saudi Arabia</option>
               <option value="Senegal">Senegal</option>
               <option value="Serbia">Serbia</option>
               <option value="Seychelles">Seychelles</option>
               <option value="Sierra Leone">Sierra Leone</option>
               <option value="Singapore">Singapore</option>
               <option value="Slovakia">Slovakia</option>
               <option value="Slovenia">Slovenia</option>
               <option value="Solomon Islands">Solomon Islands</option>
               <option value="Somalia">Somalia</option>
               <option value="South Africa">South Africa</option>
               <option value="South Sudan">South Sudan</option>
               <option value="Spain">Spain</option>
               <option value="Sri Lanka">Sri Lanka</option>
               <option value="Sudan">Sudan</option>
               <option value="Suriname">Suriname</option>
               <option value="Sweden">Sweden</option>
               <option value="Switzerland">Switzerland</option>
               <option value="Syria">Syria</option>
               <option value="Taiwan">Taiwan</option>
               <option value="Tajikistan">Tajikistan</option>
               <option value="Tanzania">Tanzania</option>
               <option value="Thailand">Thailand</option>
               <option value="Timor-Leste">Timor-Leste</option>
               <option value="Togo">Togo</option>
               <option value="Tonga">Tonga</option>
               <option value="Trinidad and Tobago">Trinidad and Tobago</option>
               <option value="Tunisia">Tunisia</option>
               <option value="Turkey">Turkey</option>
               <option value="Turkmenistan">Turkmenistan</option>
               <option value="Tuvalu">Tuvalu</option>
               <option value="Uganda">Uganda</option>
               <option value="Ukraine">Ukraine</option>
               <option value="United Arab Emirates">United Arab Emirates</option>
               <option value="United Kingdom">United Kingdom</option>
               <option value="United States">United States</option>
               <option value="Uruguay">Uruguay</option>
               <option value="Uzbekistan">Uzbekistan</option>
               <option value="Vanuatu">Vanuatu</option>
               <option value="Vatican City">Vatican City</option>
               <option value="Venezuela">Venezuela</option>
               <option value="Vietnam">Vietnam</option>
               <option value="Yemen">Yemen</option>
               <option value="Zambia">Zambia</option>
               <option value="Zimbabwe">Zimbabwe</option>
             
                           </select>
                         </label>
                         <label>
                           Language:
                           <select>
                 <option value="en">English</option>
                 <option value="es">Spanish</option>
                 <option value="fr">French</option>
                 <option value="de">German</option>
                 <option value="it">Italian</option>
                 <option value="pt">Portuguese</option>
                 <option value="ru">Russian</option>
                 <option value="zh">Chinese</option>
                 <option value="ja">Japanese</option>
                 <option value="ko">Korean</option>
                 <option value="hi">Hindi</option>
                 <option value="ar">Arabic</option>
                 <option value="bn">Bengali</option>
                 <option value="pa">Punjabi</option>
                 <option value="sw">Swahili</option>
                 <option value="tr">Turkish</option>
                 <option value="vi">Vietnamese</option>
                 <option value="pl">Polish</option>
                 <option value="ro">Romanian</option>
                 <option value="ur">Urdu</option>
                 <option value="th">Thai</option>
               </select>
                         </label>
                         <label>
                           Time Zone:
                           <select>
                 <option value="UTC-12:00">UTC-12:00</option>
                 <option value="UTC-11:00">UTC-11:00</option>
                 <option value="UTC-10:00">UTC-10:00</option>
                 <option value="UTC-09:00">UTC-09:00</option>
                 <option value="UTC-08:00">UTC-08:00</option>
                 <option value="UTC-07:00">UTC-07:00</option>
                 <option value="UTC-06:00">UTC-06:00</option>
                 <option value="UTC-05:00">UTC-05:00</option>
                 <option value="UTC-04:00">UTC-04:00</option>
                 <option value="UTC-03:00">UTC-03:00</option>
                 <option value="UTC-02:00">UTC-02:00</option>
                 <option value="UTC-01:00">UTC-01:00</option>
                 <option value="UTC+00:00">UTC+00:00</option>
                 <option value="UTC+01:00">UTC+01:00</option>
                 <option value="UTC+02:00">UTC+02:00</option>
                 <option value="UTC+03:00">UTC+03:00</option>
                 <option value="UTC+04:00">UTC+04:00</option>
                 <option value="UTC+05:00">UTC+05:00</option>
                 <option value="UTC+06:00">UTC+06:00</option>
                 <option value="UTC+07:00">UTC+07:00</option>
                 <option value="UTC+08:00">UTC+08:00</option>
                 <option value="UTC+09:00">UTC+09:00</option>
                 <option value="UTC+10:00">UTC+10:00</option>
                 <option value="UTC+11:00">UTC+11:00</option>
                 <option value="UTC+12:00">UTC+12:00</option>
                           </select>
                         </label>
                       </form>
                       <div className="email-section1">
                         <h4>MY EMAIL ADDRESS</h4>
                         <button className="save-button">Save</button>
                       </div>
                       <div class="email-item1">
                         <i class="mail-icon"></i>
                         <div class="email-text">
                           <p>alexarawles@gmail.com</p>
                           <span>1 month ago</span>
                         </div>
                       </div>
             
                       <button className="add-email-button1">+ Add Email Address</button>
                     </div>
                   </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;
