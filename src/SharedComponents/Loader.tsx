import loaderImage from "../Assests/Png/loader.gif";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        zIndex: 9999,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <img
        src={loaderImage}
        alt="Loader"
        style={{ width: "600px", height: "auto" }}
      />
    </div>
  );
};

export default Loader;
