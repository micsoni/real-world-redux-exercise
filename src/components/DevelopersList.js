import React from "react";
import { connect } from "react-redux";

class DevelopersList extends React.Component {
  componentDidMount() {
    fetch(
      "https://codaisseur-coders-network.herokuapp.com/developers?offset=10&limit=20"
    )
      .then(res => res.json())
      .then(data => {
        this.props.dispatch({
          type: "FETCH_DEVELOPERS",
          payload: data.rows // array of developers
        });
      });
  }

  render() {
    if (!this.props.developers) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <p>
          We have nourished {this.props.developers.length} developers by now!
        </p>
        <ul>
          {this.props.developers.map(dev => {
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
    developers: reduxState.developers
  };
}

export default connect(mapStateToProps)(DevelopersList);
