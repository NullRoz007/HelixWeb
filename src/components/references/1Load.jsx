import '../Reference.css'
export default function Load() {
    const ldInstruction = `LD target value`;

    const ldExamples = `
LD :1 10            ; Immediate 10 → R1
LD #3 :1            ; R1 → Memory 3
LD :0 #7            ; Memory 7 → R0
LD :4 @expr 12 + 8  ; Immediate 20 → R4`;

    return (
        <details>
            <summary>LD — Load</summary>
            <section>
                <pre><code>{ldInstruction}</code></pre>
                <p>Writes the given value into the target register or memory cell.</p>
                <p><strong>Examples:</strong></p>
                <pre><code>{ldExamples}</code></pre>
            </section>
        </details>
    )
}