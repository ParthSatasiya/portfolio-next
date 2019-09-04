import React from "react";
import { withRouter } from "next/router";
import axios from "axios";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class Portfolio extends React.Component {
  static getInitialProps = async ({ query }) => {
    const portfolioId = query.id;
    let portfolio = {};
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${portfolioId}`
      );
      portfolio = response.data;
    } catch (err) {
      console.error(err);
    }
    return { portfolio };
  };

  render() {
    const { id, title, body } = this.props.portfolio;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>{title}</h1>
          <p>BODY: {body}</p>
          <p>ID: {id}</p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
