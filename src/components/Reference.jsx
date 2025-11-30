import './Reference.css'

export default function Reference() {
    const formatInstruction = `
KEYWORD target value
`;

    const ldInstruction = `
LD target value
`;

    const ldExamples = `
LD :1 10            ; Immediate 10 → R1
LD #3 :1            ; Memory 3 → R1
LD :0 #7            ; Memory 7 → R0
LD :4 @expr 12 + 8  ; Immediate 20 → R4
`;

    const jpInstruction = `
JP @label name;
`;

    const labelExample = `
@label name;
`;

    const startProgram = `
@label start;
LD :1 0
LD #110 :1
LD #97 :1
LD #108 :1
`;

    const blinkProgram = `
@label blink;
LD :1 @expr 30 + 1  ; Immediate 31 → R1
LD #110 :1           ; Memory 110 → R1
LD :1 1              ; Immediate 1 → R1
LD #108 :1           ; Memory 108 → R1
LD :1 0              ; Immediate 0 → R1
LD #108 :1           ; Memory 108 → R1
JP @label blink;     ; Jump back to blink
`;

    return (
        <div>
            <details>
                <summary>Reference</summary>
                <section>
                    <h2>1. Instruction Format</h2>
                    <p>Every instruction has the form:</p>
                    <pre><code>{formatInstruction}</code></pre>

                    <h3>Target</h3>
                    <p>The destination written by the instruction:</p>
                    <table className="table-striped">
                        <thead>
                            <tr><th>Syntax</th><th>Meaning</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>:n</td><td>Register n</td></tr>
                            <tr><td>#n</td><td>Memory cell n</td></tr>
                        </tbody>
                    </table>

                    <h3>Value</h3>
                    <p>The data written into the target:</p>
                    <table className="table-striped">
                        <thead>
                            <tr><th>Syntax</th><th>Meaning</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>:n</td><td>Value from register n</td></tr>
                            <tr><td>#n</td><td>Value from memory cell n</td></tr>
                            <tr><td>n</td><td>Immediate literal</td></tr>
                            <tr><td>@expr &lt;expr&gt;</td><td>Expression evaluated at assembly time; result used as an immediate value</td></tr>
                        </tbody>
                    </table>

                    <p>Values without <code>:</code>, <code>#</code>, or <code>@expr</code> are treated as immediate integers.</p>
                </section>

                <section>
                    <h2>2. LD — Load</h2>
                    <pre><code>{ldInstruction}</code></pre>
                    <p>Writes the given value into the target register or memory cell.</p>
                    <p><strong>Examples:</strong></p>
                    <pre><code>{ldExamples}</code></pre>
                </section>

                <section>
                    <h2>3. JP — Jump</h2>
                    <pre><code>{jpInstruction}</code></pre>
                    <p>Unconditional jump to the instruction at a label.</p>
                    <p>Labels are declared using:</p>
                    <pre><code>{labelExample}</code></pre>
                    <p>Labels refer to instruction addresses.</p>
                </section>

                <section>
                    <h2>4. Example Program Explained</h2>

                    <h3>start</h3>
                    <pre><code>{startProgram}</code></pre>
                    <p>This example loads:</p>
                    <ul>
                        <li>Immediate 0 → R1</li>
                        <li>Memory 110 → R1</li>
                        <li>Memory 97 → R1</li>
                        <li>Memory 108 → R1</li>
                    </ul>

                    <h3>blink</h3>
                    <pre><code>{blinkProgram}</code></pre>
                    <p>This section blinks the pixel at <code>(x: 32, y: 0)</code> on and off.</p>
                    <p>Except for the expression-based load, all values written to <code>:1</code> are immediates or memory values as shown.</p>
                </section>
            </details>
        </div>
    );
}
