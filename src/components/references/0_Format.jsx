import '../styles/Reference.css'
export default function Format() {
  const formatInstruction = `KEYWORD target value`;

  return (
    <details>
      <summary>Instruction Format</summary>
      <section>
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
    </details>
  );
}