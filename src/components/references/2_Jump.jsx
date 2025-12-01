import '../styles/Reference.css'
export default function JumpRef() {
    const jpInstruction = `JP @label name;`;

    const labelExample = `@label name;`;
    return (
        <details>
            <summary>JP — Jump</summary>
            <section>
                <pre><code>{jpInstruction}</code></pre>
                <p>Unconditional jump to the instruction at a label.</p>
                <p>Labels are declared using:</p>
                <pre><code>{labelExample}</code></pre>
                <p>Labels refer to instruction addresses.</p>
            </section>
        </details>
    );
}