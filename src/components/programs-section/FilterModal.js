import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProgram } from '../../redux/actions/programActions'
import { Button } from 'react-bootstrap'

const FilterModal = (props) => {
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
    dispatch(filterProgram(check))
    props.showFilterModalBtn(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Course Categoy</h4>
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
              value="free"
              checked={check.includes('free')}
            />
            <label className="m-3">
              <h4>Free</h4>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="paid"
              onChange={handleCheck}
              checked={check.includes('paid')}
            />
            <label className="m-3">
              <h4>Paid</h4>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="subscription"
              onChange={handleCheck}
              checked={check.includes('subscription')}
            />
            <label className="m-3">
              <h4>Subscription</h4>
            </label>
          </li>
        </div>
      </ul>

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
            <input type="checkbox" />
            <label className="m-3">
              <h4>3 Months</h4>
            </label>
          </li>
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>6 Months</h4>
            </label>
          </li>
        </div>
      </ul>

      <h4>Level</h4>
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
            <input type="checkbox" />
            <label className="m-3">
              <h4>Beginner</h4>
            </label>
          </li>
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>Advanced</h4>
            </label>
          </li>
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>Master</h4>
            </label>
          </li>
        </div>
      </ul>
      {/* Guarenteed */}
      <h4>Guarenteed</h4>
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
            <input type="checkbox" />
            <label className="m-3">
              <h4>Interview</h4>
            </label>
          </li>
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>Internships</h4>
            </label>
          </li>
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>Jobs</h4>
            </label>
          </li>
        </div>
      </ul>
      <h5>Price</h5>
      <input
        type="range"
        min="1000"
        max="50000"
        step="500"
        style={{ width: '300px' }}
      ></input>
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

export default FilterModal
