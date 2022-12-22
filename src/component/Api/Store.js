import { createContext, useState } from "react";
import { PortfolioData } from "./Data";
export const Project = createContext();

const ProjectStore = (props) => {
  const [pData, setPData] = useState(PortfolioData);

  return (
    <>
      <Project.Provider value={[pData, setPData]}>
        {props.children}
      </Project.Provider>
    </>
  );
};

export default ProjectStore;
