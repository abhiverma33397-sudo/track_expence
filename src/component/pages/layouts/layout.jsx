import Bottombar from "../../bottombar";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen  pb-20">
      {children}
      <Bottombar />
    </div>
  );
};

export default AppLayout;
