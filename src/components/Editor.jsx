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
    const [source, setSource] = createSignal('');

    const [lexer, setLexer] = createSignal(null);
    const [parser, setParser] = createSignal(null);

    const [reportTokens, setReportTokens] = createSignal([]);
    const [reportInstructions, setReportInstructions] = createSignal([]);
    const [reportExpressions, setReportExpressions] = createSignal([]);
    const [reportLabels, setReportLabels] = createSignal([]);
    
    const [parseModalState, setParseModalState] = createSignal(false);

    setSource(example);

    const testProgram = () => {
        if (!lexer() || !parser()) {
            console.warn("Parser/Lexer not loaded yet");
            return;
        }

        const lx = new (lexer())(source());
        const tokens = lx.tokenize();
        const ps = new (parser())(tokens);

        ps.tokens = tokens;
        ps.parse();

        console.log(ps.labels);
        setReportTokens(tokens);
        setReportInstructions(ps.instructions);
        setReportExpressions(lx.expressions);
        setReportLabels(ps.labels)
        setParseModalState(true);
    }

    onMount(async () => {
        const lexerModule = await import('./helixasm/src/lib/lexer.mjs');
        const parserModule = await import('./helixasm/src/lib/parser.mjs');
        setLexer(() => lexerModule.Lexer);
        setParser(() => parserModule.Parser);
        console.log("Modules loaded");
    });

    return (
        <div id="editor">
            <ul role="menu-bar">
                <li role="menu-item" tabindex="0" aria-haspopup="true">
                    File
                    <ul role="menu">
                        <li role="menu-item"><button>Save</button></li>
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
                        <li role="menu-item"><button>Json</button></li>
                        <li role="menu-item"><button>Binary</button></li>
                    </ul>
                </li>
            </ul>

            <textarea
                value={source()}
                onInput={e => {
                    setSource(e.currentTarget.value);
                }}
            />

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