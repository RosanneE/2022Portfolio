import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import Hues from "./HuesTab";
import Pour from "./PourTab";
import RandD from "./RandDTab";

function MyTabs() {
  return (
    <div className="App">
      <Tabs className="Tabs">
        <TabList>
          <Tab>Pour Choices</Tab>
          <Tab>Hues Adventure</Tab>
          <Tab>R&D Books</Tab>
        </TabList>
        <TabPanel>
          <Pour/>
        </TabPanel>
        <TabPanel>
          <Hues/>
        </TabPanel>
        <TabPanel>
          <RandD/>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default MyTabs;
