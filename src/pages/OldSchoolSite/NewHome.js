import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { Link } from "react-router-dom";
import "./OldSchoolIndex.css";
//Users/rosanne/Programing/OldSchool_Portfolio/src/pages/OldSchoolSite
import About from "../../components/NewTabs/About";
import Skills from "../../components/NewTabs/Skills";
import Resume from "../../components/NewTabs/Resume";
import Projects from "../../components/NewTabs/About";
import Contact from "../../components/NewTabs/Contact";
import Footer from "../../components/Footer";

function MyTabs() {
  return (
    <div className="OldSchoolApp">
      <body className="CharacterStats">
        <div className="profPic">
      <div className="PixPic">
        <img className="Pix" src={require("../../Assets/ProfilePix.jpg")}></img>
        <Footer/>
        </div>
      </div>
      <Tabs className="OldSchoolTabs">
        <TabList>
          <Tab>Backstory</Tab>
          <Tab>Skills</Tab>
          <Tab>Past Campaigns</Tab>
          {/* <Tab>Character Sheet</Tab> */}
          <Tab>Contact</Tab>
        </TabList>
        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <Skills />
        </TabPanel>
        <TabPanel>
          <Projects />
        </TabPanel>
        {/* <TabPanel>
          <Resume />
        </TabPanel> */}
        <TabPanel>
          <Contact />
        </TabPanel>
      </Tabs>
      </body>
    </div>
  );
}

export default MyTabs;
