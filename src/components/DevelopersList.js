import React from "react";
import { connect } from "react-redux";
import { developersFetched } from "../store/developersActions";

class DevelopersList extends React.Component {
  componentDidMount() {
    fetch(
      "https://codaisseur-coders-network.herokuapp.com/developers?offset=10&limit=20"
    )
      .then(res => res.json())
      .then(data => {
        this.props.dispatch(developersFetched(data.rows));
      });
  }

  render() {
    if (!this.props.developersArray) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <p>
          We have nourished {this.props.developersArray.length} developers by
          now!
        </p>
        <ul>
          {this.props.developersArray.map(dev => {
            return (
              <li key={dev.id}>
                {dev.name} ({dev.email})
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    developersArray: reduxState.developers
  };
}

export default connect(mapStateToProps)(DevelopersList);
