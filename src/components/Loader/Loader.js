import "./Loader.sass";

export const Loader = () => {
  return (
    <div className="Loader-container">
      <div className="Loader">
        <strong class="Loader-bar"></strong>
      </div>
      <div className="Loader-description">Loading 70%</div>
    </div>
  );
};
