import { ConnectionProviderProps } from "@/providers/connections-provider";
import { EditorState } from "@/providers/editor-provider";
import { useFuzzieStore } from "@/store";
import React from "react";
import ContentTitle from "./content-title";

type Props = {
  state: EditorState;
  nodeConnection: ConnectionProviderProps;
};

const RenderOutputAccordion = ({ state, nodeConnection }: Props) => {
  const {
    googleFile,
    setGoogleFile,
    selectedSlackChannels,
    setSelectedSlackChannels,
  } = useFuzzieStore();
  return (
    <ContentTitle
      nodeConnection={nodeConnection}
      newState={state}
      file={googleFile}
      setFile={setGoogleFile}
      selectedSlackChannels={selectedSlackChannels}
      setSelectedSlackChannels={setSelectedSlackChannels}
    />
  );
};

export default RenderOutputAccordion;
