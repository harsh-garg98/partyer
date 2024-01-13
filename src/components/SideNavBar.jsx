export const SideNavBar = ({ showSideNav }) => {
  console.log("hello");
  return (
    <div className={`${showSideNav ? "side-nav-container" : "no-side-nav"}`}>
      <div className={`side-nav ${showSideNav ? "show-nav" : ""}`}></div>
    </div>
  );
};
