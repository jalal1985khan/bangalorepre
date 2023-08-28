"use client"
import React, { useEffect } from 'react';

const TableauDashboard = ({ dashboardUrl }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/tableau-2.min.js';
    script.async = true;
    script.onload = initializeTableau;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeTableau = () => {
    const containerDiv = document.getElementById('tableauContainer');
    const options = {
      hideTabs: true,
      width: '100%', // Set the width to 100% for full width
      height: '600px', // Set the height as desired
    };
    //const viz = new window.tableau.Viz(containerDiv, dashboardUrl, options);
  };

  return (
    <div id="tableauContainer" style={{ width: '100%' }}>
      {/* Set width to 100% for full width */}
    </div>
  );
};

export default TableauDashboard;