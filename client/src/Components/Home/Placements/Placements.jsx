import React, { useEffect } from "react";

import PGraph from "./PGraph";
import PList from "./PList";
import { yearwiseSummary } from "./PData";

// import Graph from "../Graph";
import Recruiters from "../Recruiters";

const PTable = () => {
  return (
    <div className="p-table">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>BTech on roll</th>
            <th>BTech placed</th>
            <th>Average Package (LPA)</th>
            <th>Package Range (LPA)</th>
          </tr>
        </thead>
        <tbody>

          {yearwiseSummary.map((i) => {
            return (
              <tr key={i["Year"]}>
                <td>{i["Year"]}</td>
                <td>{i["BTech on roll"]}</td>
                <td>{i["BTech placed"]}</td>
                <td>{i["Average Package (LPA)"]}</td>
                <td>{i["Package Range (LPA)"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default function Placements() {
  useEffect(() => {
    document.title = "Placements | SGGS Training & Placement";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="homepage-headings">Placement Records</h1>
      <PGraph />
      <PTable />
      <PList />
      {/* <Graph /> */}
      <Recruiters />
    </>
  );
}
