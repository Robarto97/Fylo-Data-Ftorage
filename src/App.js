import "./styles.scss";
import logo from "./images/logo.svg";
import document from "./images/icon-document.svg";
import folder from "./images/icon-folder.svg";
import upload from "./images/icon-upload.svg";
import { useState } from "react";
function App() {
  const [usedStorage, setUsedStorage] = useState(815);

  const handleChange = (e) => {
    setUsedStorage(e.target.value);
  };
  return (
    <main>
      <div className="info-container">
        <img src={logo} alt="" className="logo" />
        <ul className="icons">
          <li className="icon">
            <img src={document} alt="" />
          </li>
          <li className="icon">
            <img src={folder} alt="" />
          </li>
          <li className="icon">
            <img src={upload} alt="" />
          </li>
        </ul>
      </div>
      <div className="storage-container">
        <p>
          You've used <span>{usedStorage} GB</span> of your storage
        </p>
        <div className="wrap">
          <input
            id="slider"
            onChange={handleChange}
            type="range"
            min={0}
            max={1000}
            value={usedStorage}
          />
          <div className="track">
            <div
              className="innerTrack"
              style={{ width: `${usedStorage / 10}%` }}
            ></div>
          </div>
          <div
            className="thumb"
            style={{
              left: `${
                usedStorage / 10 >= 50
                  ? usedStorage / 10 - 2.5
                  : usedStorage / 10 + 2.5
              }%`,
              transform: `translate(-${usedStorage / 10}%, -50%)`,
            }}
          ></div>
        </div>
        <div className="range">
          <span>0 GB</span>
          <span>1000 GB</span>
        </div>
        <div className="remaining">
          <p>
            <span>{1000 - usedStorage}</span> GB left
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
