import { CompilerProvider } from "~/providers/CompilerProvider";
import HomeContent from "~/routes/HomeContent";

import "nes.icons"

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

export default function Home() {
  return (
    <CompilerProvider initialSrc={example}>
        <HomeContent />
    </CompilerProvider>
  );
}