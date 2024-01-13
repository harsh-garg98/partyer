export const JoinOrCreatePartyTray = ({
  partyCodeTray,
  partyCodeParagraph,
  handleClick,
}) => {
  return (
    <div className={`create-party-code ${partyCodeTray ? "open" : ""}`}>
      <span style={{ marginRight: "5px", fontSize: "1.25em" }}>
        {partyCodeParagraph}
      </span>
      <textarea
        style={{ marginLeft: "5px", marginRight: "5px" }}
        defaultValue="partyy"
      ></textarea>
      <button style={{ marginLeft: "5px" }} onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};
