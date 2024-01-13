import { useState } from "react";

export const CreatePartyModal = ({ handleClick }) => {
  const [code, setCode] = useState("");

  return (
    <div className="create-party-modal">
      <div className="main-create-modal">
        <h2>You're amazing for hosting a party!</h2>
        <label>
          Please create and enter a 6-digit code for the party
          <br />
          <input onChange={(e) => setCode(e.target.value)}></input>
          <br />
        </label>
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
        <p>
          Please share the code, {code}, with your friends! They'll be able to
          join the party and select a role by using the code at the 'Enter a
          party code to join a party' button.{" "}
        </p>
        <label>
          Please select a theme for the party:
          <br />
          <select name="theme">
            <option>Default</option>
            <option>Magic</option>
            <option>Anime</option>
            <option>Sherlock</option>
            <option>Pokemon</option>
            {/* <option>Create a new theme!</option> */}
          </select>
        </label>
        <br />
        <p>By default your role is 'The Host'!</p>
        <button onClick={handleClick} style={{ marginLeft: "5px" }}>
          Submit
        </button>
        <button onClick={handleClick} style={{ marginRight: "5px" }}>
          Close
        </button>
      </div>

      {/* connect with login
      check if user has image, name, phone, wa, ig, fb, snapchat */}
    </div>
  );
};
