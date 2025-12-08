import '../styles/Reference.css'
export default function JumpRef() {
  const jpInstruction = `JZ @label name;`;

  return (
    <details>
      <summary>JZ — Jump if Zero</summary>
      <section>
        <pre><code>{jpInstruction}</code></pre>
        <p>Conditional jump to the instruction at a label. If <code>R0 == 0</code></p>
        <p>The Helix CPU stores the result of ALU operations in R0.</p>
      </section>
    </details>
  );
}