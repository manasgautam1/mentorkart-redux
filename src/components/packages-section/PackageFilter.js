import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Button } from 'react-bootstrap'

const PackageFilter = (props) => {
  const dispatch = useDispatch()
  const [check, setCheck] = useState([])

  const handleCheck = (e) => {
    let arr = [...check]
    let clicked = e.target.value
    let checkfinish = arr.indexOf(clicked)

    if (checkfinish === -1) {
      arr.push(clicked)
    } else {
      arr.splice(checkfinish, 1)
    }
    setCheck(arr)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(check)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Duration</h4>
      <ul>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            listStyle: 'none',
          }}
        >
          <li>
            <input
              type="checkbox"
              onChange={handleCheck}
              value="3 months"
              checked={check.includes('3 months')}
            />
            <label className="m-3">
              <h4>3 Months</h4>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="6 months"
              onChange={handleCheck}
              checked={check.includes('6 months')}
            />
            <label className="m-3">
              <h4>6 Months</h4>
            </label>
          </li>
        </div>
      </ul>
      <h4>Gaurenteed</h4>
      <ul>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            listStyle: 'none',
          }}
        >
          <li>
            <input
              type="checkbox"
              onChange={handleCheck}
              value="interview"
              checked={check.includes('interview')}
            />
            <label className="m-3">
              <h4>Interview</h4>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="internship"
              onChange={handleCheck}
              checked={check.includes('internship')}
            />
            <label className="m-3">
              <h4>Internship</h4>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="job"
              onChange={handleCheck}
              checked={check.includes('job')}
            />
            <label className="m-3">
              <h4>Job</h4>
            </label>
          </li>
        </div>
      </ul>
      <label htmlFor="">Select Your Industry</label>
      <select
        name="industry"
        onChange={handleCheck}
        required
        className="form-select"
      >
        <option value="">---</option>
        <option value="Advertising">Advertising</option>
        <option value="Aeronnautics Aerospace &amp; Defense">
          Aeronnautics Aerospace &amp; Defense
        </option>
        <option value="Agriculture &amp; Allied Industries">
          Agriculture &amp; Allied Industries
        </option>
        <option value="AI">AI</option>
        <option value="Airport Operations">Airport Operations</option>
        <option value="Analytics">Analytics</option>
        <option value="Animation">Animation</option>
        <option value="Apparel and Textiles">Apparel and Textiles</option>
        <option value="AR VR (Augmented + Virtual Reality)">
          AR VR (Augmented + Virtual Reality)
        </option>
        <option value="Architecture Interior Design">
          Architecture Interior Design
        </option>
        <option value="Art &amp; Photography">Art &amp; Photography</option>
        <option value="Automotive">Automotive</option>
        <option value="Banking">Banking</option>
        <option value="Biotechnology">Biotechnology</option>
        <option value="BPM">BPM</option>
        <option value="Cement">Cement</option>
        <option value="Chemicals">Chemicals</option>
        <option value="Computer vision">Computer vision</option>
        <option value="Construction">Construction</option>
        <option value="Consumer Durables">Consumer Durables</option>
        <option value="Dating matrimonial">Dating matrimonial</option>
        <option value="Design">Design</option>
        <option value="Edtech">Edtech</option>
        <option value="Education">Education</option>
        <option value="Electronics system design &amp; Manufacturing">
          Electronics system design &amp; Manufacturing
        </option>
        <option value="Enterprise software">Enterprise software</option>
        <option value="Engineering &amp; Capital Goods">
          Engineering &amp; Capital Goods
        </option>
        <option value="Events">Events</option>
        <option value="Fashion">Fashion</option>
        <option value="Finance">Finance</option>
        <option value="Fintech">Fintech</option>
        <option value="FMCG">FMCG</option>
        <option value="Food and beverages">Food and beverages</option>
        <option value="Government">Government</option>
        <option value="Gems &amp; Jewellery">Gems &amp; Jewellery</option>
        <option value="Green Technology">Green Technology</option>
        <option value="Healthcare &amp; lifesciences">
          Healthcare &amp; lifesciences
        </option>
        <option value="House-Hold services">House-Hold services</option>
        <option value="Horticulture">Horticulture</option>
        <option value="Human resources">Human resources</option>
        <option value="Indic languages startups">
          Indic languages startups
        </option>
        <option value="Internet of things">Internet of things</option>
        <option value="Insurance">Insurance</option>
        <option value="IT Services">IT Services</option>
        <option value="Logistics">Logistics</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Marketing">Marketing</option>
        <option value="Media and entertainment">Media and entertainment</option>
        <option value="Metals &amp; Mining">Metals &amp; Mining</option>
        <option value="Nanotechnology">Nanotechnology</option>
        <option value="Natural Sciences">Natural Sciences</option>
        <option value="Non-Renewable energy">Non-Renewable energy</option>
        <option value="NGO">NGO</option>
        <option value="NPO">NPO</option>
        <option value="Other speciality retailers">
          Other speciality retailers
        </option>
        <option value="Passenger experience">Passenger experience</option>
        <option value="Pets &amp; animals">Pets &amp; animals</option>
        <option value="Pharmaceuticals">Pharmaceuticals</option>
        <option value="Professional &amp; Commercial services">
          Professional &amp; Commercial services
        </option>
        <option value="Real estate">Real estate</option>
        <option value="Renewable energy">Renewable energy</option>
        <option value="Retail">Retail</option>
        <option value="Robotics">Robotics</option>
        <option value="Rural development">Rural development</option>
        <option value="Safety">Safety</option>
        <option value="Security solutions">Security solutions</option>
        <option value="Social impact">Social impact</option>
        <option value="Social network">Social network</option>
        <option value="Sports">Sports</option>
        <option value="Technology hardware">Technology hardware</option>
        <option value="Telecommunications &amp; Networking">
          Telecommunications &amp; Networking
        </option>
        <option value="Toys and games">Toys and games</option>
        <option value="Transportation &amp; Storage">
          Transportation &amp; Storage
        </option>
        <option value="Travel and tourism">Travel and tourism</option>
        <option value="Waste management">Waste management</option>
        <option value="Others">Others</option>
      </select>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          listStyle: 'none',
        }}
      >
        <Button variant="success" type="submit">
          Submit
        </Button>
        <Button variant="danger">Clear</Button>
      </div>
    </form>
  )
}

export default PackageFilter
