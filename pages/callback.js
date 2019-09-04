import React from "react";
import { withRouter } from "next/router";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import auth0Client from "../services/auth0";

class Callback extends React.Component {
  componentDidMount = async () => {
    await auth0Client.handleAuthentication();
    this.props.router.push("/");
  };

  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>Verifying logging data...</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Callback);
