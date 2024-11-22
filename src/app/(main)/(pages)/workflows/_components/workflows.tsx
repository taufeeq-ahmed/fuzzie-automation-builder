import React from "react";
import Workflow from "./workflow";
// import { onGetWorkflows } from "../_actions/workflow-connections";
// import MoreCredits from "./more-creadits";

const Workflows = async () => {
  // const workflows = await onGetWorkflows();
  const workflows = [
    {
      name: "Automation Testing",
      description: "string",
      id: "string",
      publish: true,
    },
  ];

  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2 p-4">
        {/* <MoreCredits /> */}
        {workflows?.length ? (
          workflows.map((flow) => <Workflow key={flow.id} {...flow} />)
        ) : (
          <div className="mt-28 flex text-muted-foreground items-center justify-center">
            No Workflows
          </div>
        )}
      </section>
    </div>
  );
};

export default Workflows;