import { ConnectionsProvider } from "@/providers/connections-provider";
import EditorProvider from "@/providers/editor-provider";
import React from "react";
import EditorCanvas from "../_components/editor-canvas";

function PageEditorId() {
  return (
    <div>
      <EditorProvider>
        <ConnectionsProvider>
          <div>
            <EditorCanvas />
          </div>
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
}

export default PageEditorId;
