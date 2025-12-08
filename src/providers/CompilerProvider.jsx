import { createSignal, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

import { Lexer } from 'helixasm/src/lib/lexer.mjs';
import { Parser } from 'helixasm/src/lib/parser.mjs';
import { CodeGen } from 'helixasm/src/lib/gen.mjs';

export const CompilerContext = createContext();
export const useCompiler = () => useContext(CompilerContext);

export function CompilerProvider(props) {
  const [source, setSource] = createSignal(props.initialSource ?? '');
  const [buildOutput, setBuildOutput] = createSignal('');

  const [ui, setUI] = createStore({
    editorOpen: false,
    referenceOpen: false
  });

  const [modal, setModal] = createStore({
    parse: false,
    error: false,
    errorText: ''
  });

  const [report, setReport] = createStore({
    tokens: [],
    instructions: [],
    expressions: [],
    labels: []
  });

  const compileProgram = () => {
    const lx = new Lexer(source());
    const tokens = lx.tokenize();
    const subroutines = lx.subroutines;

    let parsedSubroutines = {};

    for (let sr of Object.keys(subroutines)) {
      let subTokens = subroutines[sr];
      let subParser = new Parser(subTokens, parsedSubroutines);
      subParser.parse();

      parsedSubroutines[sr] = subParser.instructions;
    }

    const ps = new Parser(tokens, parsedSubroutines);
    ps.parse();
    ps.mapSubroutines();

    return { 'parserResult': ps, 'lexerResult': lx };
  }

  const testProgram = () => {
    try {
      let { parserResult, lexerResult } = compileProgram();
      
      setReport({
        tokens: lexerResult.tokens,
        instructions: parserResult.instructions,
        labels: parserResult.labels,
        expressions: lexerResult.expressions
      });

      setModal({parse: true});

    } catch (ex) {
      setModal({
        error: true, errorText: ex.message
      });
    }
  }

  const buildProgram = async () => {
    try {
      let { parserResult } = compileProgram();

      let cg = new CodeGen(parserResult.instructions);
      let json = await cg.build();

      setBuildOutput(json);
    } catch (ex) {
      setModal({
        error: true,
        errorText: ex.message
      });
    }
  }

  const compilerState = {
    source, setSource,
    buildOutput, setBuildOutput,
    ui, setUI,
    modal, setModal,
    report, setReport,
    testProgram,
    buildProgram
  };

  setSource(props.initialSrc);

  return (
    <CompilerContext.Provider value={compilerState}>
      {props.children}
    </CompilerContext.Provider>
  )
};