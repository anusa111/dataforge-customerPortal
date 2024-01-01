import { FaAngleDoubleRight } from "react-icons/fa";
import ContactDetail from "./ContactDetail";
const CustomerForm = () => {
  const inputArray = [
    {
      label: "Name",
      name: "username",
    },
    {
      label: "Address",
      name: "address",
    },
    {
      label: "Number",
      name: "number",
    },
    {
      label: "Watch Model",
      name: "watch model",
    },
    {
      label: "Date",
      name: "date",
    },
  ];

  const watchDetail = [
    {
      desc: "Company claims warranty inside the dial only.",
    },
    {
      desc: "Glass Strap/Chain,Button are not included.",
    },
  ];
  return (
    <div className="form-container component-padding">
      <div className="layout">
        <div className="form-inner  ">
          <div className="">
            {inputArray.map((data, index) => {
              return (
                <div key={index} className="input-section flex-layout">
                  <label
                    htmlFor="username"
                    className="input-title"
                    style={{ transform: "translate(0px,4px)" }}
                  >
                    {data.label}
                  </label>
                  <input type="text" name={data.name} />
                </div>
              );
            })}
          </div>
          <div className="textarea-section ">
            <div>Verified By</div>
            <textarea rows={8} cols={30} />
          </div>
        </div>
        <div className="description-container">
          <div>
            This watch comes with 1 years warranty on Battery and 6 month
            maintainence warranty
          </div>
          <div>
            {watchDetail.map((data, index) => {
              return (
                <div key={index}>
                  <div
                    className="flex-layout"
                    style={{ margin: "8px 0px", gap: "8px" }}
                  >
                    <div style={{ transform: "translate(0px,3px)" }}>
                      <FaAngleDoubleRight />
                    </div>
                    <div>{data.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <ContactDetail />
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
