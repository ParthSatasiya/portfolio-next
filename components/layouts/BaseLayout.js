import Header from "../shared/Header";

const BaseLayout = ({ children, className, isAuthenticated }) => {
  return (
    <div className="layout-container">
      <Header isAuthenticated={isAuthenticated} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
