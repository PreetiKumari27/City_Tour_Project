import React, { Component } from "react";
import "./Tour.scss";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import CancelIcon from "@material-ui/icons/Cancel";
export default class Tour extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="City tour" />
          <CancelIcon onClick={() => removeTour(id)} className="close-btn" />
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <ArrowDropDownCircleIcon
              onClick={this.handleInfo}
              className="dropDown"
            />
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
