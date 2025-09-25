import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import Selectors from "./Selectors";
import BootstrapGrids from "./BootstrapGrids";
import { Container } from "react-bootstrap";
import ScreenSizeLabel from "./ScreenSizeLabel";
import ReactIconsSampler from "./ReactIcons";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForm from "./BootstrapForm";
import BootstrapNavigation from "./BootstrapNavigation";


export default function Lab2() {
  return (
    <Container fluid>
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <br />
      <p style={{ backgroundColor: "blue",
                  color: "white" }}>
        Style attribute allows configuring look and feel
        right on the element. Although it&apos;s very convenient
        it is considered bad practice and you should avoid
        using the style attribute
      </p>
      <Selectors />
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <Corners />
      <Dimensions />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <ReactIconsSampler />
      <BootstrapGrids />
      <ScreenSizeLabel />
      <BootstrapTables />
      <BootstrapLists />
      <BootstrapForm />
      <BootstrapNavigation />
    </Container>
);}
