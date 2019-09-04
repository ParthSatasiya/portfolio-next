import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import withAuth from "../components/hoc/withAuth";
import { getSecretData } from "../actions";

class Secret extends React.Component {
  static getInitialProps = async ({ req }) => {
    const anotherSecretData = await getSecretData(req);
    return { anotherSecretData };
  };

  state = {
    secretData: []
  };

  componentDidMount = async () => {
    const secretData = await getSecretData();
    this.setState({ secretData });
  };

  displaySecretData = () => {
    const { secretData } = this.state;
    if (secretData && secretData.length > 0) {
      return secretData.map(({ title, description }, index) => (
        <div key={index}>
          <p>{title}</p>
          <p>{description}</p>
        </div>
      ));
    }
  };

  render() {
    const { superSecretValue } = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>I am Secret page.</h1>
          <p>Secret Content Here</p>
          <h2>{superSecretValue}</h2>
          {this.displaySecretData()}
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth()(Secret);
