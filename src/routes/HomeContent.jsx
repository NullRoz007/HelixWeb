import { Show, For } from "solid-js";
import Header from '~/components/Header';
import Editor from "~/components/Editor";
import Reference from "~/components/Reference";
import Modal from '~/components/Modal';
import { useCompiler } from "~/providers/CompilerProvider";

export default function HomeContent() {
  const {
    ui, setUI,
    modal, setModal,
    report
  } = useCompiler();

  return (
    <div>
      <Header />
      <div class="content-wrapper">
        <div class="window" id="main-window">
          <div class="title-bar">
            <button aria-label="Close" class="close"></button>
            <h1 class="title">Editor</h1>
            <button aria-label="Resize" class="resize" onClick={() => setUI('editorOpen', v => !v)}></button>
          </div>
          <Show when={ui.editorOpen}>
            <div class="window-pane" id="editor-window-pane">
              <Editor />
            </div>
          </Show>
        </div>

        <div class="window" id="ref-window">
          <div class="title-bar">
            <button aria-label="Close" class="close"></button>
            <h1 class="title">Language Reference</h1>
            <button aria-label="Resize" class="resize" onClick={() => setUI("referenceOpen", v => !v)}></button>
          </div>
          <Show when={ui.referenceOpen}>
            <div class="window-pane">
              <Reference />
            </div>
          </Show>
        </div>
      </div>

      <Show when={modal.error}>
        <Modal
          title="Error during build!"
          onClose={() => { setModal({ error: false }) }}
        >
          <p>{modal.errorText}</p>
        </Modal>
      </Show>

      <Show when={modal.parse}>
        <Modal
          title="Parse Results"
          onClose={() => { setModal({ parse: false }) }}
        >
          <details>
            <summary>Tokens</summary>
            <ol>
              <For each={report.tokens}>{(token, i) =>
                <li><p>{token.type + ' ' + (token.value || '')}</p></li>
              }</For>
            </ol>
          </details>

          <details>
            <summary>Instructions</summary>
            <ol>
              <For each={report.instructions}>{(inst, i) =>
                <li><p>{inst.toString()}</p></li>
              }</For>
            </ol>
          </details>

          <details>
            <summary>Expressions</summary>
            <ol>
              <For each={report.expressions}>{(expr, i) =>
                <li><p>{expr.expr + ' = ' + (expr.value || '??')}</p></li>
              }</For>
            </ol>
          </details>

          <details>
            <summary>Labels</summary>
            <ol>
              <For each={report.labels}>{(label, i) =>
                <li><p>{label.name + ' = ' + (label.pos)}</p></li>
              }</For>
            </ol>
          </details>
        </Modal>
      </Show>
    </div>
  );
}

