import React from "react";
import { connect } from "react-redux";
import Form from "./ReservationForm";

class ReservationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client:'',
      phone:'',
      party_size:0,
      reserve_date:'',
      reserved_time:''
    };
  }

  render() {
    const { client, phone, party_size, reserve_date, reserved_time } = this.state;
    const { dispatch } = this.props;

    let postReservation = async (state) => {
      await fetch("http://localhost:5000/api/reservations/reserve", {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(state)
      })
        .then(result => console.log(result))
        .catch(err => console.log(err));
    };

    let handleChange = (e, updated) => {
      let newState = {};
      newState[updated] = e.target.value;
      this.setState(newState);
    };
  
    let submitForm = e => {
      e.preventDefault();
      postReservation(this.state)
      dispatch({
        type: "RESERVE_TABLE",
        reserve: this.state,
      });
    };

    return (
      <Form
        client={client}
        phone={phone}
        party_size={party_size}
        reserve_date={reserve_date}
        reserved_time={reserved_time}
        submitForm={submitForm}
        handleChange={handleChange}
      />
    );
  }
}

const ConnectReservationPage = connect(state => ({
  reservations: state.reservations
}));
export default ConnectReservationPage(ReservationPage);

// client: "",
//       phone: "",
//       partySize: 0

// const URL = 'http://localhost:5000/api/reservations/reserve';
//     const response = await fetch(URL, {
//       method:'POST'
//     }).then(result => await response.json());
//     this.setState({reservations:result});

// client={client}
//         phone={phone}
//         partySize={partySize}