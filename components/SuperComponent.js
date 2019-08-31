import React from "react";
import BaseLayout from "./layouts/BaseLayout";

class SuperComponent extends React.Component {

  constructor(props) {
    super(props);
    this.someVariable = 'Just some variable';
  }

  alertTitle = title => {
    alert(title);
  }

  render() {
    return (
      <BaseLayout>
        <h1>I am Blog page.</h1>
      </BaseLayout>
    );
  }
}

export default SuperComponent;
