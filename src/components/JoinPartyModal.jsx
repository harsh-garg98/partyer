import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const JoinPartyModal = ({ handleClick }) => {
  const [examplePartyData, setExamplePartyData] = useState();

  const fetchExamplePartyData = async () => {
    const response = await axios.get("http://localhost:3000/example_party");
    setExamplePartyData(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchExamplePartyData();
  }, []);

  return (
    <div className="join-party-modal">
      <div className="main-join-modal">
        <h2>Welcome to the party!</h2>
        <label>
          What should we call you?
          <br />
          <input></input>
        </label>
        <br />
        <label>
          Are you a boy? Or are you a girl?
          <br />
          <input></input>
        </label>
        <br />
        <label>
          The code you entered, '{examplePartyData?.code}' corresponds to a
          party hosted by {examplePartyData?.host}. The theme for the party is{" "}
          {examplePartyData?.theme}. Please select your role: <br />
          <select name="role">
            Role
            <option value="gm">The Seeker</option>
            <option value="host">Wise-ard</option>
            <option value="memory">Hagrid</option>
            <option value="storyteller">Headmaster</option>
            {/* <option value="none">Create your own</option> */}
          </select>
        </label>
        <br />
        <button onClick={handleClick} style={{marginRight: "5px"}}>Submit</button>
        <button onClick={handleClick} style={{marginLeft: "5px"}}>Close</button>
      </div>

      {/* connect with login
      check if user has image, name, phone, wa, ig, fb, snapchat */}
    </div>
  );
};
