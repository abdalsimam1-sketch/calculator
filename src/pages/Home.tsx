export const Home = () => {
  return (
    <main
      className=" d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container card my-auto p-3 d-flex flex-column gap-4">
        <section className="heading-section d-flex justify-content-between align-items-center">
          <h3>calc</h3>
          <div className="d-flex gap-2 align-items-center">
            <span className="fw-bold" style={{ fontSize: "10px" }}>
              THEMES
            </span>
            <span>
              <i className="btn bi bi-1-square-fill fs-3 p-0"></i>
              <i className="btn bi bi-2-square-fill fs-3 p-0"></i>
              <i className="btn bi bi-3-square-fill fs-3 p-0"></i>
            </span>
          </div>
        </section>
        <section className="input-section card p-3 d-flex">
          <h1 className="align-self-end">399,983.90</h1>
        </section>
        <section></section>
      </div>
    </main>
  );
};
