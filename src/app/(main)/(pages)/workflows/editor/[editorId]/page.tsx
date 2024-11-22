import { ConnectionsProvider } from "@/providers/connections-provider";
import EditorProvider from "@/providers/editor-provider";
import React from "react";

function PageEditorId() {
  return (
    <div>
      <EditorProvider>
        <ConnectionsProvider>
            <div>
                
            </div>
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
}

export default PageEditorId;
