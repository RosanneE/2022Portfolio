import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hues from "./HuesCard";
import Pour from "./PourCard";
import RandD from "./RandDCard";

function MyTabs() {
  return (
    <div className="App">
      <Tabs className="tabs">
        <TabList>
          <Tab>Pour Choices</Tab>
          <Tab>Hues Adventure</Tab>
          <Tab>R&D Books</Tab>
        </TabList>
        <TabPanel>
          <Pour />
        </TabPanel>
        <TabPanel>
          <Hues />
        </TabPanel>
        <TabPanel>
          <RandD />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default MyTabs;
