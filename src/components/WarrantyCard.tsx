import watch from "../../public/indexImages/watch.png";
import watchLogo from "../../public/indexImages/watchLogo.png";
const WarrantyCard = () => {
  return (
    <div
      className="warranty-card-container"
      style={{ backgroundColor: "#efefef" }}
    >
      <div className="warranty-card-title">
        <b>Warranty Card</b>
      </div>
      <div className="layout">
        <div className="">
          <div className="warranty-card-inner ">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div
                className="flex-layout small-watch"
                style={{ marginTop: "40%" }}
              >
                <div>
                  <img src={watchLogo} alt="" height={160} />
                </div>
                <div>
                  <div style={{ marginBottom: "4px" }}>
                    <span
                      className="watch-font"
                      style={{
                        color: "var(--primary-color)",
                      }}
                    >
                      Watches
                    </span>
                    <br />
                    <span style={{ fontSize: "20px" }}>Nepal</span>
                  </div>
                  <div>Loading watch shop in Nepal</div>
                </div>
              </div>
              <div>
                <div className="location-title">Baneshwor, Kathmandu</div>
                <a href="tel:9849937143">+977 9849937143</a>
              </div>
            </div>
            <div className="big-watch">
              <img src={watch} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarrantyCard;
