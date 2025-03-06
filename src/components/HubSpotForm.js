import React, { useEffect } from "react";

const HubSpotForm = () => {
  useEffect(() => {
    // Load the HubSpot forms script dynamically
    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/242172868.js";
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* HubSpot Form Container */}
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="c0fad413-1366-484e-b522-d7c85137206e"
        data-portal-id="242172868"
      ></div>
    </div>
  );
};

export default HubSpotForm;