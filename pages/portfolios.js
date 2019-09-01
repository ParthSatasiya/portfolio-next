import React from "react";
import axios from "axios";
import { Link } from "../routes";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class Portfolios extends React.Component {
  static getInitialProps = async () => {
    let posts = [];
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = response.data;
    } catch (error) {
      console.error(error);
    }
    return { posts: posts.splice(0, 10) };
  };

  renderPosts = posts => {
    return posts.map(({ id, title }) => {
      return (
        <li key={id}>
          <Link route={`/portfolio/${id}`}>
            <a>{title}</a>
          </Link>
        </li>
      );
    });
  };

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <BasePage>
          <h1>I am Portfolios page.</h1>
          <ul>{this.renderPosts(posts)}</ul>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolios;
