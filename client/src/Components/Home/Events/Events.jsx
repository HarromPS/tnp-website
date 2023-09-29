import React, { useState, useEffect } from "react";
import Loading from "../../Utilities/Loading";
import EUpcoming from "./EUpcoming";
import EPast from "./EPast";
import axios from "axios";
// import ipavimg from "../../../img/events/ipev.jpg";

// const ipavdesc = `The Indian Air Force, New Delhi, is organizing induction road drive on “Induction publicity exhibition vehicle” (IPEV) and guidance related to career, life and training in the IAF.
// There will be IPEV drive on 19th March and 20th March.
// IAF, DISHA has developed an Induction Publicity Exhibition Vehicle (IPEV) with a Flight simulator and other gadgets aimed at motivating the target group towards opting for IAF as a career.
// The drive is an effort by the IAF to benefit large cross section of capable and interested students to be part of the IAF.
// This is great opportunity for everyone as you will get to know the work experience of IAF. Also there will be one to one interaction with the IAF officers.`

function Events() {
  const [eventsList, setEventsList] = useState([
    { uid: "-", recipent: "-", issued: 0, created: 0 },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Events | SGGS Training & Placement";
    window.scrollTo(0, 0);

    const fetchEventList = async () => {
      setIsLoading(true);
      try {
        let res = await axios.get(
          `${process.env.REACT_APP_REQURL}/admin/events/getall/`
        );
        let templist = res.data;
        templist.sort((a, b) => b.eventDate.localeCompare(a.eventDate));
        setEventsList(templist);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetchEventList();
    // console.log(eventsList);
  }, []);

  return (
    <>
      <h1 className="homepage-headings">Events</h1>
      <h3
        className="homepage-headings"
        style={{ color: "var(--primary-blue)" }}
      >
        Upcoming Events
      </h3>
      {isLoading ? (
        <Loading size="80" width="10" speed="0.5" />
      ) : (
        <div style={{ textAlign: "center" }}>Look forward to new updates!</div>
      )}
      {/* <EUpcoming name="Indian Air Force IPEV Exhibition" img={ipavimg} type="Event" link="https://google.com" desc={ipavdesc} date="19th - 20th March 2023"/> */}
      <h3
        className="homepage-headings"
        style={{ color: "var(--primary-blue)" }}
      >
        Past Events
      </h3>
      {isLoading ? (
        <Loading size="80" width="10" speed="0.5" />
      ) : (
        <div>

          {eventsList.map((i) => {
            console.log(i.eventDate);
            return (

                <EPast
                  key = {i.eventDate}
                  name={i.eventName}
                  org={i.eventOrg}
                  desc={i.eventDesc}
                  type={i.eventType}
                  date={
                    i.eventDate
                      ? new Date(i.eventDate).toLocaleDateString("en-gb", {
                          weekday: "long",
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })
                      : "-"
                  }
                >
                  <img src="../../img/bg.png" alt="" />
                </EPast>

            );
          })}
        </div>
      )}
    </>
  );
}

export default Events;
