import React from "react";
import "./DisplayWeather.css";

function DisplayWeatherInfo(props) {
  console.log("props", props);
  const { data } = props;
  console.log("Id ", data.id);

  function removeElement(id) {}
  return (
    <div className="weather-info">
      <div className="card bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <div className="card-header">
          <p className="city-title">
            {data.name}, {data.sys.country}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="delete-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>

          {/* <button className="delete-btn">Delete</button> */}
        </div>

        <hr />

        <div className="desc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="sun-icon"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>

          <p>{data.weather[0].description}</p>
        </div>
        <div className="card-body">
          <h1 className="temp">{data.main.temp}c</h1>
          <p>Feels Like : {data.main.feels_like}c </p>
        </div>

        <div className="rise-set">
          <div className="sunrise">
            <img className="rise-set-img" src="sunrise.png" alt="sunrise-img" />
            <p>
              Sunrise {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
            </p>
          </div>
          <div className="sunset">
            <img className="rise-set-img" src="sunset.png" alt="sunset-img" />
            <p>
              Sunset {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayWeatherInfo;
