import { Title } from "@solidjs/meta";

import Editor from "~/components/Editor";
import Reference from "~/components/Reference";
import "nes.icons"

export default function Home() {
  return (
    <div class="window" id="main-window">
      <div class="title-bar">
        <button aria-label="Close" class="close"></button>
        <h1 class="title">Helix Asm - Web</h1>
        <button class="github">
          <a class="nes-btn" 
            href="https://github.com/NullRoz007/HelixAsm/tree/main">
            <i class="nes-icon github"></i>
          </a>
          </button>
      </div>
      <div class="separator"></div>
      <div class="window-pane">
        <Editor />
        <Reference />
      </div>
    </div>
  );
}
