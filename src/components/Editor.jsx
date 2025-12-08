
import { useCompiler } from "~/providers/CompilerProvider";
import "./styles/Editor.css"

export default function Editor() {
  const { source, setSource, testProgram, buildProgram, buildOutput } = useCompiler();

  return (
    <div id="editor">
      <ul role="menu-bar">
        <li role="menu-item" tabindex="0" aria-haspopup="true">
          File
          <ul role="menu">
            <li role="menu-item"><button>Save Source</button></li>
            <li role="menu-item"><button>Save Build</button></li>
            <li role="menu-item"><button>Load</button></li>
          </ul>
        </li>

        <li role="menu-item" tabindex="1" aria-haspopup="true">
          Test
          <ul role="menu">
            <li role="menu-item">
              <button onClick={() => {
                testProgram()
              }}>
                Parse
              </button>
            </li>
          </ul>
        </li>

        <li role="menu-item" tabindex="2" aria-haspopup="true">
          Build
          <ul role="menu">
            <li role="menu-item" onClick={buildProgram}><button>Json</button></li>
            <li role="menu-item" onClick={() => { }}><button>Binary</button></li>
          </ul>
        </li>
      </ul>

      <div style="display: flex; width: 100%;">
        <textarea
          value={source()}
          onInput={e => {
            setSource(e.currentTarget.value);
          }}
        ></textarea>

        <div class="buildOutput">
          <pre>{buildOutput()}</pre>
        </div>
      </div>
    </div>
  );
}