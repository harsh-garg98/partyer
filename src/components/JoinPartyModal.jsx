import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const JoinPartyModal = () => {
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
      <h2>Welcome to the party!</h2>
      <p>
        The code you entered, '{examplePartyData?.code}' corresponds to a party
        hosted by {examplePartyData?.host}. The theme for the party is{" "}
        {examplePartyData?.theme}. Please select your role:{" "}
        <select>
          Role
          <option>The Seeker</option>
          <option>Wise-ard</option>
          <option>Hagrid</option>
        </select>
      </p>

      {/* connect with login
      check if user has image, name, phone, wa, ig, fb, snapchat */}
    </div>
  );
};
