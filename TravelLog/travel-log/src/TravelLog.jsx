import React, { useState } from "react";

export default function TravelLog() {
  const [activities, setActivities] = useState([])
  const [inputData, setInputData] = useState({
    destination: "",
    dates: "",
    groupSize: 0,
    travelPreferences: ""
  });

  function handleActivitiesChange(e) {
    const selectedActivities = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    );
    setActivities(selectedActivities);
  }

  function handleInputDataChange(e){
    setInputData({...inputData, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault
    setInputData({destination: "", dates: "", groupSize: 0, travelPreferences: ""});
  }

  return (
    <div>
      <h2>Adventure Travel Booking</h2>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor ="Destination">Destination:</label>
        <select placeholder ="Enter your Destination" 
               name="destination" 
              onChange={handleActivitiesChange}
               value ={inputData.destination}>
        <option>--Select Option--</option>
        <option>Boracay</option>
        <option>Butuan</option>
        <option>Surigao</option>
        <option>Manila</option>
        </select>
        
        <label htmlFor ="dates">Dates:</label>
        <input type ="date"
              name="dates"
              value={inputData.dates}
              onChange={handleInputDataChange}/>
        
        <label htmlFor ="NumberOfPeople">Number of People</label>
        <input id="groupSize" 
               type="number" 
               placeholder="Enter the number of people"
               name="groupSize"
              onChange={handleInputDataChange}
               value={inputData.groupSize}/>
        
        <h1 className="reflection" >Reflection Tab</h1>
        <textarea placeholder ="Reflection" 
          name="travelPreferences" 
          onChange={handleInputDataChange}
          value ={inputData.travelPreferences}>
        </textarea>
        
        <button type= "submit">Submit</button>
        
      </form>
    </div>
  );
}
