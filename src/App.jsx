import { useState, useEffect } from "react";
import "./App.css";
import { FilledCardExample } from "./components/FilledCardExample";
import axios from "axios";
import { JoinPartyModal } from "./components/JoinPartyModal";
import { JoinOrCreatePartyTray } from "./components/JoinOrCreatePartyTray";
import { CreatePartyModal } from "./components/CreatePartyModal";
import { SideNavBar } from "./components/SideNavBar";

function App() {
  // ideas
  // add example party page (you can see and review everyone's cards and roles)

  const [trayOpen, setTrayOpen] = useState(false);
  const [partyCodeTray, setPartyCodeTray] = useState(false);
  const [examplesData, setExamplesData] = useState();
  const [exampleParagraph, setExampleParagraph] = useState("");
  const [partyCodeParagraph, setPartyCodeParagraph] = useState("");
  const [themedExamples, setThemedExamples] = useState();
  const [currentTheme, setCurrentTheme] = useState();
  const [showJoinPartyModal, setShowJoinPartyModal] = useState(false);
  const [showCreatePartyModal, setShowCreatePartyModal] = useState(false);
  const [createOrJoin, setCreateOrJoin] = useState();
  const [showSideNav, setShowSideNav] = useState(false);

  const fetch_examples_data = async () => {
    const response = await axios.get("http://localhost:3000/roles_examples");

    setExamplesData(response.data);
    console.log(response.data);
  };
  const fetch_themes_data = async () => {
    const response = await axios.get("http://localhost:3000/themes_examples");

    setThemedExamples(response.data);
    setCurrentTheme(response.data.find((example) => example.id === 0));
  };

  const handleSideNav = () => {
    console.log("Click!");
    console.log(showSideNav);
    setShowSideNav(!showSideNav);
    console.log(showSideNav);

    const sideNav = document.getElementsByClassName("side-nav");
    console.log(sideNav[0]);
    console.log("Event");
  };

  const open_close_tray = (id) => {
    if (trayOpen === false) {
      setTrayOpen(!trayOpen);
      let paragraph = examplesData?.find((example) => example.id === id);
      setExampleParagraph(paragraph.description);
    } else {
      setTrayOpen(!trayOpen);
    }
  };

  const open_close_code_tray = (id) => {
    if (partyCodeTray === false) {
      const paragraph =
        id === 1 ? "Create a 6-digit party code" : "Enter a 6-digit party code";
      setPartyCodeParagraph(paragraph);
      setPartyCodeTray(!partyCodeTray);
      setCreateOrJoin(id);
    } else {
      setPartyCodeTray(!partyCodeTray);
    }
  };

  const handleJoinParty = () => {
    setShowJoinPartyModal(!showJoinPartyModal);
  };

  const handleCreateParty = () => {
    setShowCreatePartyModal(!showCreatePartyModal);
  };

  const getSelectedTheme = (id) => {
    const divs = Array.from(document.getElementsByClassName("flip-card-inner"));
    const theme = themedExamples.find((example) => example.id === id);
    setCurrentTheme(theme);

    divs.forEach((element) => {
      element.style.backgroundColor = theme.color;
    });
  };

  useEffect(() => {
    fetch_examples_data();
    fetch_themes_data();
  }, []);

  return (
    <>
      <nav>
        <span className="material-symbols-outlined" onClick={handleSideNav}>
          menu
        </span>
        <h1 className="title">Hello partyers!</h1>
      </nav>

      <main>
        <SideNavBar showSideNav={showSideNav} />

        <div className="instructions">
          <h2>Host a party or attend a friend's!</h2>
          <div className="instructions-examples-list party-code-list">
            <span
              className="instructions-example party-code"
              onClick={() => open_close_code_tray(1)}
            >
              Create and share a party code
            </span>
            <span
              className="instructions-example party-code"
              onClick={() => open_close_code_tray(2)}
            >
              Enter a party code to join a party
            </span>
          </div>
        </div>
        <JoinOrCreatePartyTray
          partyCodeTray={partyCodeTray}
          partyCodeParagraph={partyCodeParagraph}
          handleClick={createOrJoin === 1 ? handleCreateParty : handleJoinParty}
        />
        <div className="instructions">
          <h2>Pick a role (Or create your own!)</h2>
          <div className="instructions-examples-list roles-list">
            {examplesData?.map((example) => (
              <span
                className="instructions-example roles"
                key={example.id}
                onClick={() => open_close_tray(example.id)}
              >
                {example.id + 1 != 6
                  ? currentTheme?.theme != "Or create your own!"
                    ? currentTheme[Object.keys(currentTheme)[example.id + 1]]
                    : themedExamples?.find((example) => example.id === 0)[
                        Object.keys(
                          themedExamples?.find((example) => example.id === 0)
                        )[example.id + 1]
                      ]
                  : "And many more..."}
              </span>
            ))}
          </div>
        </div>
        <div className={`role-details ${trayOpen ? "open" : ""}`}>
          <p>{exampleParagraph}</p>
        </div>

        <div className="instructions">
          <h2>Create themed roles! Check out our themes</h2>
          <div className="instructions-examples-list roles-list">
            {themedExamples?.map((example) => (
              <span
                className="instructions-example roles"
                key={example.id}
                onClick={() => getSelectedTheme(example.id)}
              >
                {example.theme}
              </span>
            ))}
          </div>
        </div>

        <div className="card-example-container">
          <FilledCardExample
            role={currentTheme?.gm}
            image={"../public/party1.jpeg"}
            name="Diego Jose"
          />
          <FilledCardExample
            role={currentTheme?.host}
            image={"../public/party2.jpeg"}
            name="Karen"
          />
          <FilledCardExample
            role={currentTheme?.memory}
            image={"../public/party3.jpeg"}
            name="Mohammed Ali Qazi"
          />
          <FilledCardExample
            role={currentTheme?.story}
            image={"../public/party4.jpeg"}
            name="Yan Naing Lee"
          />
        </div>
        {showJoinPartyModal && <JoinPartyModal handleClick={handleJoinParty} />}
        {showCreatePartyModal && (
          <CreatePartyModal handleClick={handleCreateParty} />
        )}
      </main>
    </>
  );
}

export default App;
