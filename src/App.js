import React, { useState, useEffect } from 'react';
import ApiCalendar from 'react-google-calendar-api';

const App = () => {
  const [event, setEvent] = useState([])
  const [login, setlogin] = useState(false)

  const handleItemClick = (e, name) => {
    if (name === 'sign-in') {
      ApiCalendar.handleAuthClick();
      console.log("status true", ApiCalendar)
      setlogin(true)
    } else if (name === 'sign-out') {
      ApiCalendar.handleSignoutClick();
      setlogin(false)
      console.log("status", ApiCalendar.sign)
    }
  }


  useEffect(() => {
    if (ApiCalendar.sign)
      ApiCalendar.listUpcomingEvents().then(({ result }) => {
        setEvent(result.items)

        console.log(event)
      });
  }, [])

  return (
    <div>
      {login === false ?

        <button
          onClick={(e) => handleItemClick(e, 'sign-in')}
        >
          sign-in
              </button>
        :
        <div>
          {event &&
            event.map((item) => {
              return (
                <div className="w-50  mx-auto">
                  <div className="card my-2" >
                    <div className="card-header d-flex justify-content-between">
                      <p>{item.created}</p>
                      <p>{item.end.dateTime}</p>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.summary}</h5>
                      <p className="card-text">
                        {item.description}
                      </p>
                      <p className="card-text">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          <button
            onClick={(e) => handleItemClick(e, 'sign-out')}
          >
            sign-out
          </button>
        </div>
      }
    </div>
  )
}

export default App;