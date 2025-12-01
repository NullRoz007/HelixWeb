import '../styles/Reference.css'
export default function ExampleProgRef() {
    const startProgram = `
@label start;
LD :1 0
LD #110 :1
LD #97 :1
LD #108 :1`;
    
    const blinkProgram = `
@label blink;
LD :1 @expr 30 + 1  ; Immediate 31 → R1
LD #110 :1           ; R1 → Memory 110
LD :1 1              ; Immediate 1 → R1
LD #108 :1           ; R1 → Memory 108
LD :1 0              ; Immediate 0 → R1
LD #108 :1           ; R1 → Memory 108
JP @label blink;     ; Jump back to blink`;

    return (
        <details>
            <summary>Example Program Explained</summary>
            <section>
                <h3>start</h3>
                <pre><code>{startProgram}</code></pre>
                <p>This example loads:</p>
                <ul>
                    <li>Immediate 0 → R1</li>
                    <li>R1 → Memory 110</li>
                    <li>R1 → Memory 97</li>
                    <li>R1 → Memory 108</li>
                </ul>

                <h3>blink</h3>
                <pre><code>{blinkProgram}</code></pre>
                <p>This section blinks a pixel by repeatedly storing values in memory.</p>
                <p>Except for the expression-based load, all values written to <code>:1</code> are immediates or copied to memory as shown.</p>
            </section>
        </details>
    );
}