import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class About extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth} >
        <BasePage className="about">
          <h1>I am About page.</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
