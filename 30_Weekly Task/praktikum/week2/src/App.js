import Header from "./component/Header.js";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Sidebar } from "./component/Sidebar.js";
import { Main } from "./component/Main.js";

function App() {
  return (
    <>
      <Header />
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#git">
        <Row>
          <Sidebar />
          <Main />
        </Row>
      </Tab.Container>
    </>
  );
}

export default App;
