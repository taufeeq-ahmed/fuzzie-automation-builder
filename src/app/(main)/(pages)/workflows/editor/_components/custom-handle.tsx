import { useEditor } from "@/providers/editor-provider";
import React, { CSSProperties } from "react";
import { Handle, HandleProps } from "@xyflow/react";

type Props = HandleProps & { style?: CSSProperties };

const CustomHandle = (props: Props) => {
  const { state } = useEditor();

  const validateConnection = (e: { source: string; target: string }) => {
    const sourcesFromHandleInState = state.editor.edges.filter(
      (edge) => edge.source === e.source
    ).length;
    const sourceNode = state.editor.elements.find(
      (node) => node.id === e.source
    );
    //target
    const targetFromHandleInState = state.editor.edges.filter(
      (edge) => edge.target === e.target
    ).length;

    if (targetFromHandleInState === 1) return false;
    if (sourceNode?.type === "Condition") return true;
    if (sourcesFromHandleInState < 1) return true;
    return false;
  };

  return (
    <Handle
      {...props}
      isValidConnection={validateConnection}
      className="!-bottom-2 !h-4 !w-4 dark:bg-neutral-800"
    />
  );
};

export default CustomHandle;
