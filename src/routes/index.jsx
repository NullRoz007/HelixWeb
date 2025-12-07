import { createSignal, For, onMount, Show } from 'solid-js'

import Editor from "~/components/Editor";
import Reference from "~/components/Reference";
import Header from '~/components/Header';

import { Lexer } from 'helixasm/src/lib/lexer.mjs';
import { Parser } from 'helixasm/src/lib/parser.mjs';
import { CodeGen } from 'helixasm/src/lib/gen.mjs';

import "nes.icons"
import Modal from '~/components/Modal';

const example = `@label start;
LD :1 0
LD #110 :1
LD #97 :1
LD #108 :1

@label blink;
LD :1 @expr 30 + 1;
LD #110 :1
LD :1 1
LD #108 :1
LD :1 0
LD #108 :1
JP @label blink;
`;

export default function Home() {
  const [editorState, setEditorState]               = createSignal(false);
  const [referenceState, setReferenceState]         = createSignal(false);
  const [parseModalState, setParseModalState]       = createSignal(false);
  const [errorModalState, setErrorModalState]       = createSignal(false);
  const [errorText, setErrorText]                   = createSignal(false);
  const [source, setSource]                         = createSignal(example);
  const [buildOutput, setBuildOutput]               = createSignal('');


  const [reportTokens, setReportTokens]             = createSignal([]);
  const [reportInstructions, setReportInstructions] = createSignal([]);
  const [reportExpressions, setReportExpressions]   = createSignal([]);
  const [reportLabels, setReportLabels]             = createSignal([]);

  const testProgram = () => {
    try {
      const lx = new Lexer(source());
      const tokens = lx.tokenize();
      const subroutines = lx.subroutines;
      
      let parsedSubroutines = {};
      for(let sr of Object.keys(subroutines)) {
          let subTokens = subroutines[sr]; 
          let subParser = new Parser(subTokens);
          subParser.parse();

          parsedSubroutines[sr] = subParser.instructions;
      }

      const ps = new Parser(tokens, parsedSubroutines);
      ps.parse();
      ps.mapSubroutines();

      setReportTokens(tokens);
      setReportInstructions(ps.instructions);
      setReportExpressions(lx.expressions);
      setReportLabels(ps.labels)
      setParseModalState(true);
    } catch (ex) {
      setErrorText(ex.message);
      setErrorModalState(true);
    }
  }

  const buildProgram = async () => {
    try {
      const lx = new Lexer(source());
      const lxResult = lx.tokenize();
      const tokens = lxResult.tokens;
      const subroutines = lxResult.subroutines;
      console.log(subroutines);
      
      let parsedSubroutines = {};
      for(let sr of Object.keys(subroutines)) {
          let subTokens = subroutines[sr]; 
          let subParser = new Parser(subTokens);
          subParser.parse();

          parsedSubroutines[sr] = subParser.instructions;
      }

      const ps = new Parser(tokens, parsedSubroutines);
      ps.parse();
      ps.mapSubroutines();

      const instructions = ps.instructions;
      const cg = new CodeGen(instructions);
      const json = await cg.build();

      setBuildOutput(json);
    } catch (ex) {
      setErrorText(ex.message);
      setErrorModalState(true);
    }
  }

  const editorHandler = {
    'buildOutput': buildOutput,
    'source': source,

    'setSource': setSource,
    'setBuildOutput': setBuildOutput,

    'setParseModalState': setParseModalState,
    'setErrorModalState': setErrorModalState,
    'setErrorText': setErrorText,
    'setReportTokens': setReportTokens,
    'setReportInstructions': setReportInstructions,
    'setReportExpressions': setReportExpressions,
    'setReportLabels': setReportLabels,

    'testProgram': testProgram,
    'buildProgram': buildProgram,

    'example': example
  };

  setSource(example);
  
  return (
    <div>
      <Header/>
      <div class="content-wrapper"> 
        <div class="window" id="main-window">
          <div class="title-bar">
            <button aria-label="Close" class="close"></button>
            <h1 class="title">Editor</h1>
            <button aria-label="Resize" class="resize" onClick={() => setEditorState(!editorState())}></button>
          </div>
          <Show when={editorState()}>
            <div class="window-pane" id="editor-window-pane">
              <Editor 
                editorWrapper={editorHandler}
              />
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

      <Show when={errorModalState()}>
          <Modal
            title="Error during build!"
            onClose={() => {setErrorModalState(false)}}
          >
            <p>{errorText()}</p>
          </Modal>
        </Show>

        <Show when={parseModalState()}>
          <Modal 
            title="Parse Results"
            onClose={() => {setParseModalState(false)}}
          >
            <details>
              <summary>Tokens</summary>
              <ol>
                <For each={reportTokens()}>{(token, i) =>
                  <li><p>{token.type + ' ' + (token.value || '')}</p></li>
                }</For>
              </ol>
            </details>

            <details>
              <summary>Instructions</summary>
              <ol>
                <For each={reportInstructions()}>{(inst, i) =>
                  <li><p>{inst.toString()}</p></li>
                }</For>
              </ol>
            </details>

            <details>
              <summary>Expressions</summary>
              <ol>
                <For each={reportExpressions()}>{(expr, i) =>
                  <li><p>{expr.expr + ' = ' + (expr.value || '??')}</p></li>
                }</For>
              </ol>
            </details>

            <details>
              <summary>Labels</summary>
              <ol>
                <For each={reportLabels()}>{(label, i) =>
                  <li><p>{label.name + ' = ' + (label.pos)}</p></li>
                }</For>
              </ol>
            </details>
          </Modal>
        </Show>
    </div>
  );
}