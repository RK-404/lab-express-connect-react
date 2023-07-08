import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function LogNewForm() {
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: 0,
    mistakesWereMadeToday: false
  });

  const addLog = (newLog) => {
    axios
      .post(`${API}/logs`, newLog)
      .then(() => navigate(`/logs`))
      .catch((c) => console.error("catch", c));
  };

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog(log);
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          type="text"
          value={log.captainName}
          onChange={handleTextChange}
          placeholder="Name of the captain"
          required
        />
        <br/>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={log.title}
          placeholder="What's the Title?"
          onChange={handleTextChange}
          required
        />
        <br/>
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          type="text"
          value={log.post}
          placeholder="What happend today?"
          onChange={handleTextChange}
        />
        <br/>
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
        <br/>
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <br/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default LogNewForm;
