import { createSignal, For, onMount, Show } from 'solid-js'
import "./Editor.css"

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

export default function Editor() {
    const [source, setSource] = createSignal(example);
    const [buildOutput, setBuildOutput] = createSignal('');

    const [lexer, setLexer] = createSignal(null);
    const [parser, setParser] = createSignal(null);
    const [codeGen, setCodeGen] = createSignal(null);

    const [reportTokens, setReportTokens] = createSignal([]);
    const [reportInstructions, setReportInstructions] = createSignal([]);
    const [reportExpressions, setReportExpressions] = createSignal([]);
    const [reportLabels, setReportLabels] = createSignal([]);

    const [parseModalState, setParseModalState] = createSignal(false);
    const [errorModalState, setErrorModalState] = createSignal(false);
    const [errorText, setErrorText] = createSignal(false);

    setSource(example);

    const testProgram = () => {
        if (!lexer() || !parser()) {
            console.warn("Parser/Lexer not loaded yet");
            return;
        }

        try {
            const lx = new (lexer())(source());
            const tokens = lx.tokenize();
            const ps = new (parser())(tokens);

            ps.tokens = tokens;
            ps.parse();

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
        if (!lexer() || !parser() || !codeGen()) {
            console.warn("Parser/Lexer/CodeGen not loaded yet");
            return;
        }
        try {
            const lx = new (lexer())(source());
            const tokens = lx.tokenize();
            const ps = new (parser())(tokens);

            ps.tokens = tokens;
            ps.parse();

            const instructions = ps.instructions;
            const cg = new (codeGen())(instructions);
            const json = await cg.build();

            setBuildOutput(json);
        } catch (ex) {
            setErrorText(ex.message);
            setErrorModalState(true);
        }
    }

    onMount(async () => {
        const lexerModule = await import('../helixasm/src/lib/lexer.mjs');
        const parserModule = await import('../helixasm/src/lib/parser.mjs');
        const codeGenModule = await import('../helixasm/src/lib/gen.mjs');

        setLexer(() => lexerModule.Lexer);
        setParser(() => parserModule.Parser);
        setCodeGen(() => codeGenModule.CodeGen);

        console.log("Modules loaded");
    });

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
                        <li role="menu-item" onClick={() => {}}><button>Binary</button></li>
                    </ul>
                </li>
            </ul>

            <div style="display: flex; width: 100%;">
                <textarea
                    value={source()}
                    onInput={e => {
                        setSource(e.currentTarget.value);
                    }}
                >{example}</textarea>

                <div class="buildOutput">
                    <pre>{buildOutput()}</pre>
                </div>
            </div>
            
            <Show when={errorModalState()}>
                <div class="standard-dialog center scale-down" id="parse-modal">
                    <div class="modal-contents">
                        <h1 class="modal-text">Error during build!</h1>
                        <p>{errorText()}</p>

                        <section class="field-row" style="justify-content: flex-end">
                            <button class="btn" onClick={() => setErrorModalState(false)}>OK</button>
                        </section>
                    </div>
                </div>
            </Show>

            <Show when={parseModalState() && lexer() && parser()}>
                <div class="standard-dialog center scale-down" id="parse-modal">
                    <div class="modal-contents">
                        <h1 class="modal-text">Parse Results</h1>
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

                        <section class="field-row" style="justify-content: flex-end">
                            <button class="btn" onClick={() => setParseModalState(false)}>OK</button>
                        </section>
                    </div>
                </div>
            </Show>
        </div>
    );
}