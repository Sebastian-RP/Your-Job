import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { report } from "../../Redux/Actions/Actions";
import style from "../../Pages/Home/home.module.css";
import swal from "sweetalert";

export default function ReportForm({ props }) {
  const dispatch = useDispatch();
  const [reportInput, setReportInput] = useState({
    Illegal_Content: false,
    Toxic_Content: false,
    Fake_Company: false,
    Fake_User: false,
    User_Minor: false,
    Other: false,
  });

  const handleReportReason = (e, value) => {
    setReportInput({
      ...reportInput,
      [e.target.name]: value,
    });
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    console.log(props[2]);
    dispatch(report(props[2], props[1], reportInput));
    setReportInput({
      Illegal_Content: false,
      Toxic_Content: false,
      Fake_Company: false,
      Fake_User: false,
      User_Minor: false,
      Other: false,
    });
    swal({
      title: "Content Reported!",
      text: "Thankyou for helping us keep this community safe!",
      icon: "success",
    }).then((data) => {
      return props[0](false);
    });
  };

  return (
    <div className={style.confirmBan}>
      Why do you want to report this content?
      <ul style={{ listStyleType: "none" }}>
        <li>
          <input
            type="checkbox"
            name="Illegal_Content"
            id=""
            onChange={(e) => {
              if (e.target.checked) {
                handleReportReason(e, true);
              } else {
                handleReportReason(e, false);
              }
              console.log(reportInput);
            }}
          />
          Illegal Content
        </li>
        <li>
          <input
            type="checkbox"
            name="Toxic_Content"
            id=""
            onChange={(e) => {
              if (e.target.checked) {
                handleReportReason(e, true);
              } else {
                handleReportReason(e, false);
              }
            }}
          />
          Toxic Content
        </li>
        <li>
          <input
            type="checkbox"
            name="Fake_Company"
            id=""
            onChange={(e) => {
              if (e.target.checked) {
                handleReportReason(e, true);
              } else {
                handleReportReason(e, false);
              }
            }}
          />
          Fake Company
        </li>
        <li>
          <input
            type="checkbox"
            name="Fake_User"
            id=""
            onChange={(e) => {
              if (e.target.checked) {
                handleReportReason(e, true);
              } else {
                handleReportReason(e, false);
              }
            }}
          />
          Fake User
        </li>
        <li>
          <input
            type="checkbox"
            name="User_minor"
            id=""
            onChange={(e) => {
              if (e.target.checked) {
                handleReportReason(e, true);
              } else {
                handleReportReason(e, false);
              }
            }}
          />
          User is a minor
        </li>
        <li>
          <input
            type="checkbox"
            name="Other"
            id=""
            onChange={(e) => {
              if (e.target.checked) {
                handleReportReason(e, true);
              } else {
                handleReportReason(e, false);
              }
            }}
          />
          Other
        </li>
      </ul>
      <div className={style.confirmButtons}>
        <Button
          onClick={() => {
            setReportInput({
              Illegal_Content: false,
              Toxic_Content: false,
              Fake_Company: false,
              Fake_User: false,
              User_Minor: false,
              Other: false,
            });
            props[0](false);
          }}
          variant="danger"
        >
          Cancel
        </Button>
        <Button
          onClick={(e) => {
            handleReportSubmit(e);
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
