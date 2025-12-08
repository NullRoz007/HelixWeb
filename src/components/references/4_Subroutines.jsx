import '../styles/Reference.css'
const subrouteExample = `@label start;
LD :0 1

@start sub2;
LD :0 3
RT
@end;

@start sub1;
LD :0 2
CL @route sub2;
RT
@end;

CL @route sub1;
JP @label start;`;

export default function SubroutineReference() {
  return (
    <details>
      <summary>Using Subroutines</summary>
      <section>
        <p>

          Subroutines are declared with the <code>@start name;</code> macro and
          closed using the <code>@end;</code> macro. They are invoked using the
          <code>CL</code> instrunction + the <code>@route name;</code> macro.
        </p>

        <p>
          Subroutine instructions are removed from the main program flow and appended to the
          <strong> SR_TABLE</strong>. Subroutines must end with an <code>RT</code> instruction
          to return execution to the caller.
        </p>

        <h3>Example</h3>
        <pre><code>{subrouteExample}</code></pre>

        <p>
          After execution, register <code>R0</code> will contain <strong>1</strong>.
        </p>

        <p>
          The following table shows the final memory layout after subroutines are extracted into
          the SR_TABLE. Line <strong>3</strong> marks the automatically inserted table boundary.
        </p>

        <h3>Final Program Structure in Memory</h3>

        <table className="table-striped" style="font-size: 10px;">
          <thead>
            <tr>
              <th>Addr</th>
              <th>Line</th>
              <th>Instruction Fields</th>
              <th>Raw</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>

            {/* 0 */}
            <tr>
              <td>0</td>
              <td>LD: REG(0) ← INT(1)</td>
              <td>
                Imm(0b0000001), AluCtrl(0b111), RegAddr(0b000),<br />
                Flags(imm=1, wr=1, cl=0)
              </td>
              <td>[0b00000011, 0b11100010]</td>
              <td></td>
            </tr>

            {/* 1 */}
            <tr>
              <td>1</td>
              <td>CL: ROUTE(sub1) - S</td>
              <td>
                MemAddr(0b0000110), AluCtrl(0b111), RegAddr(0b000),<br />
                Flags(imm=0, wr=1, cl=1)
              </td>
              <td>[0b00000110, 0b11100011]</td>
              <td></td>
            </tr>

            {/* 2 */}
            <tr>
              <td>2</td>
              <td>JP: LBL(start) - S</td>
              <td>
                MemAddr(0b0000000), AluCtrl(0b111), RegAddr(0b111),<br />
                Flags(imm=0, wr=1, cl=1)
              </td>
              <td>[0b00000000, 0b11111111]</td>
              <td></td>
            </tr>

            {/* 3 */}
            <tr>
              <td>3</td>
              <td>=== START SR_TABLE ===</td>
              <td>
                MemAddr(0b0001001), AluCtrl(0b111), RegAddr(0b111),<br />
                Flags(imm=0, wr=1, cl=1)
              </td>
              <td>[0b00001001, 0b11111111]</td>
              <td>(a JP is used to avoid executing SR_TABLE automatically)</td>
            </tr>

            {/* sub2 */}
            <tr><td colSpan="5"><strong>(sub2 @ line 4)</strong></td></tr>

            {/* 4 */}
            <tr>
              <td>4</td>
              <td>LD: REG(0) ← INT(3)</td>
              <td>
                Imm(0b0000011), AluCtrl(0b111), RegAddr(0b000),<br />
                Flags(imm=1, wr=1, cl=0)
              </td>
              <td>[0b00000111, 0b11100010]</td>
              <td></td>
            </tr>

            {/* 5 */}
            <tr>
              <td>5</td>
              <td>RT: PC ← CALLSTACK.pop()</td>
              <td>
                MemAddr(0b0000000), AluCtrl(0b110), RegAddr(0b111),<br />
                Flags(imm=0, wr=1, cl=1)
              </td>
              <td>[0b00000000, 0b11011111]</td>
              <td>(return to sub1 @ line 8)</td>
            </tr>

            {/* sub1 */}
            <tr><td colSpan="5"><strong>(sub1 @ line 6)</strong></td></tr>

            {/* 6 */}
            <tr>
              <td>6</td>
              <td>LD: REG(0) ← INT(2)</td>
              <td>
                Imm(0b0000010), AluCtrl(0b111), RegAddr(0b000),<br />
                Flags(imm=1, wr=1, cl=0)
              </td>
              <td>[0b00000101, 0b11100010]</td>
              <td></td>
            </tr>

            {/* 7 */}
            <tr>
              <td>7</td>
              <td>CL: ROUTE(sub2) - S</td>
              <td>
                MemAddr(0b0000100), AluCtrl(0b111), RegAddr(0b000),<br />
                Flags(imm=0, wr=1, cl=1)
              </td>
              <td>[0b00000100, 0b11100011]</td>
              <td></td>
            </tr>

            {/* 8 */}
            <tr>
              <td>8</td>
              <td>RT: PC ← CALLSTACK.pop()</td>
              <td>
                MemAddr(0b0000000), AluCtrl(0b110), RegAddr(0b111),<br />
                Flags(imm=0, wr=1, cl=1)
              </td>
              <td>[0b00000000, 0b11011111]</td>
              <td></td>
            </tr>

          </tbody>
        </table>
      </section>
    </details>
  );
}
