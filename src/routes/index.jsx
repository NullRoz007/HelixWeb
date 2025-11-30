import { createSignal } from "solid-js";

import Editor from "~/components/Editor";
import Reference from "~/components/Reference";
import "nes.icons"

export default function Home() {
  const [editorState, setEditorState] = createSignal(false);
  const [referenceState, setReferenceState] = createSignal(false);

  return (
    <div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <p class="hlx-header">HelixAsm</p>
        <a
          href="https://github.com/NullRoz007/HelixAsm/tree/main">
            <i class="nes-icon github"></i>
        </a>
        
      </div>
      <p class="hlx-desc">
        The Helix Assembly Language is an assembly language designed to make producing code for my custom 8bit Minecraft CPU easier. 
      </p>

      <div class="window" id="main-window">
        <div class="title-bar">
          <button aria-label="Close" class="close"></button>
          <h1 class="title">Editor</h1>
          <button aria-label="Resize" class="resize" onClick={() => setEditorState(!editorState())}></button>
        </div>
        <Show when={editorState()}>
          <div class="window-pane">
            <Editor />
          </div>
        </Show>
      </div>

      <div class="window" id="ref-window">
        <div class="title-bar">
          <button aria-label="Close" class="close"></button>
          <h1 class="title">Language Reference</h1>
          <button aria-label="Resize" class="resize" onClick={() => setReferenceState(!referenceState())}></button>
        </div>
        <Show when={referenceState()}>
          <div class="window-pane">
            <Reference />
          </div>
        </Show>
      </div>
    </div>
  );
}
