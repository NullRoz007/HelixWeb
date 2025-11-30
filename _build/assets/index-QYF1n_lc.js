const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/parser-DNFUkeM0.js","assets/lexer-ZeEIXq-y.js"])))=>i.map(i=>d[i]);
import{q as se,b as r,H as Ee,t,w as o,F as E,A as e,j as n,S as M,z as k,I as S,m as Me,d as Pe,J as Te}from"./web-CH6RNnj1.js";import{_ as Y}from"./preload-helper-ug3pwPZ1.js";var je=o('<div class="standard-dialog center scale-down"id=parse-modal><div class=modal-contents><h1 class=modal-text>Error during build!</h1><p></p><section class=field-row style=justify-content:flex-end><button class=btn>OK'),Oe=o('<div class="standard-dialog center scale-down"id=parse-modal><div class=modal-contents><h1 class=modal-text>Parse Results</h1><details><summary>Tokens</summary><ol></ol></details><details><summary>Instructions</summary><ol></ol></details><details><summary>Expressions</summary><ol></ol></details><details><summary>Labels</summary><ol></ol></details><section class=field-row style=justify-content:flex-end><button class=btn>OK'),Ie=o(`<div id=editor><ul role=menu-bar><li role=menu-item tabindex=0 aria-haspopup=true>File<ul role=menu><li role=menu-item><button>Save Source</button></li><li role=menu-item><button>Save Build</button></li><li role=menu-item><button>Load</button></li></ul></li><li role=menu-item tabindex=1 aria-haspopup=true>Test<ul role=menu><li role=menu-item><button>Parse</button></li></ul></li><li role=menu-item tabindex=2 aria-haspopup=true>Build<ul role=menu><li role=menu-item><button>Json</button></li><li role=menu-item><button>Binary</button></li></ul></li></ul><div style=display:flex;width:100%><textarea>@label start;
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
</textarea><div class=buildOutput><pre></pre></div></div><!$><!/><!$><!/>`),R=o("<li><p>");const ie=`@label start;
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
`;function ze(){const[p,g]=r(ie),[c,h]=r(""),[u,P]=r(null),[_,x]=r(null),[f,T]=r(null),[j,O]=r([]),[I,z]=r([]),[J,L]=r([]),[D,A]=r([]),[V,w]=r(!1),[F,v]=r(!1),[H,m]=r(!1);g(ie);const ae=()=>{if(!u()||!_()){console.warn("Parser/Lexer not loaded yet");return}try{const l=new(u())(p()),s=l.tokenize(),i=new(_())(s);i.tokens=s,i.parse(),O(s),z(i.instructions),L(l.expressions),A(i.labels),w(!0)}catch(l){m(l.message),v(!0)}},oe=async()=>{if(!u()||!_()||!f()){console.warn("Parser/Lexer/CodeGen not loaded yet");return}try{const s=new(u())(p()).tokenize(),i=new(_())(s);i.tokens=s,i.parse();const C=i.instructions,G=await new(f())(C).build();h(G)}catch(l){m(l.message),v(!0)}};return Ee(async()=>{const l=await Y(()=>import("./lexer-ZeEIXq-y.js"),[]),s=await Y(()=>import("./parser-DNFUkeM0.js"),__vite__mapDeps([0,1])),i=await Y(()=>import("./gen-ji6VN-HE.js"),[]);P(()=>l.Lexer),x(()=>s.Parser),T(()=>i.CodeGen),console.log("Modules loaded")}),(()=>{var l=t(Ie),s=l.firstChild,i=s.firstChild,C=i.nextSibling,Q=C.firstChild,G=Q.nextSibling,de=G.firstChild,ce=de.firstChild,ue=C.nextSibling,me=ue.firstChild,pe=me.nextSibling,X=pe.firstChild,_e=X.nextSibling,Z=s.nextSibling,B=Z.firstChild,be=B.nextSibling,$e=be.firstChild,ge=Z.nextSibling,[ee,he]=E(ge.nextSibling),xe=ee.nextSibling,[fe,ve]=E(xe.nextSibling);return ce.$$click=()=>{ae()},X.$$click=oe,_e.$$click=()=>{},B.$$input=b=>{g(b.currentTarget.value)},e($e,c),e(l,n(M,{get when(){return F()},get children(){var b=t(je),K=b.firstChild,N=K.firstChild,y=N.nextSibling,U=y.nextSibling,W=U.firstChild;return e(y,H),W.$$click=()=>v(!1),k(),b}}),ee,he),e(l,n(M,{get when(){return Me(()=>!!(V()&&u()))()&&_()},get children(){var b=t(Oe),K=b.firstChild,N=K.firstChild,y=N.nextSibling,U=y.firstChild,W=U.nextSibling,te=y.nextSibling,ye=te.firstChild,Se=ye.nextSibling,le=te.nextSibling,Le=le.firstChild,De=Le.nextSibling,re=le.nextSibling,we=re.firstChild,Ce=we.nextSibling,Re=re.nextSibling,ke=Re.firstChild;return e(W,n(S,{get each(){return j()},children:(d,q)=>(()=>{var a=t(R),$=a.firstChild;return e($,()=>d.type+" "+(d.value||"")),a})()})),e(Se,n(S,{get each(){return I()},children:(d,q)=>(()=>{var a=t(R),$=a.firstChild;return e($,()=>d.toString()),a})()})),e(De,n(S,{get each(){return J()},children:(d,q)=>(()=>{var a=t(R),$=a.firstChild;return e($,()=>d.expr+" = "+(d.value||"??")),a})()})),e(Ce,n(S,{get each(){return D()},children:(d,q)=>(()=>{var a=t(R),$=a.firstChild;return e($,()=>d.name+" = "+d.pos),a})()})),ke.$$click=()=>w(!1),k(),b}}),fe,ve),Pe(()=>Te(B,"value",p())),k(),l})()}se(["click","input"]);var Je=o("<details><summary>Instruction Format</summary><section><p>Every instruction has the form:</p><pre><code>KEYWORD target value</code></pre><h3>Target</h3><p>The destination written by the instruction:</p><table class=table-striped><thead><tr><th>Syntax</th><th>Meaning</th></tr></thead><tbody><tr><td>:n</td><td>Register n</td></tr><tr><td>#n</td><td>Memory cell n</td></tr></tbody></table><h3>Value</h3><p>The data written into the target:</p><table class=table-striped><thead><tr><th>Syntax</th><th>Meaning</th></tr></thead><tbody><tr><td>:n</td><td>Value from register n</td></tr><tr><td>#n</td><td>Value from memory cell n</td></tr><tr><td>n</td><td>Immediate literal</td></tr><tr><td>@expr &lt;expr&gt;</td><td>Expression evaluated at assembly time; result used as an immediate value</td></tr></tbody></table><p>Values without <code>:</code>, <code>#</code>, or <code>@expr</code> are treated as immediate integers.");function Ae(){return t(Je)}const Ve=Object.freeze(Object.defineProperty({__proto__:null,default:Ae},Symbol.toStringTag,{value:"Module"}));var Fe=o(`<details><summary>LD — Load</summary><section><pre><code>LD target value</code></pre><p>Writes the given value into the target register or memory cell.</p><p><strong>Examples:</strong></p><pre><code>
LD :1 10            ; Immediate 10 → R1
LD #3 :1            ; R1 → Memory 3
LD :0 #7            ; Memory 7 → R0
LD :4 @expr 12 + 8  ; Immediate 20 → R4`);function He(){return t(Fe)}const Ge=Object.freeze(Object.defineProperty({__proto__:null,default:He},Symbol.toStringTag,{value:"Module"}));var Be=o("<details><summary>JP — Jump</summary><section><pre><code>JP @label name;</code></pre><p>Unconditional jump to the instruction at a label.</p><p>Labels are declared using:</p><pre><code>@label name;</code></pre><p>Labels refer to instruction addresses.");function Ke(){return t(Be)}const Ne=Object.freeze(Object.defineProperty({__proto__:null,default:Ke},Symbol.toStringTag,{value:"Module"}));var Ue=o(`<details><summary>Example Program Explained</summary><section><h3>start</h3><pre><code>
@label start;
LD :1 0
LD #110 :1
LD #97 :1
LD #108 :1</code></pre><p>This example loads:</p><ul><li>Immediate 0 → R1</li><li>R1 → Memory 110</li><li>R1 → Memory 97</li><li>R1 → Memory 108</li></ul><h3>blink</h3><pre><code>
@label blink;
LD :1 @expr 30 + 1  ; Immediate 31 → R1
LD #110 :1           ; R1 → Memory 110
LD :1 1              ; Immediate 1 → R1
LD #108 :1           ; R1 → Memory 108
LD :1 0              ; Immediate 0 → R1
LD #108 :1           ; R1 → Memory 108
JP @label blink;     ; Jump back to blink</code></pre><p>This section blinks a pixel by repeatedly storing values in memory.</p><p>Except for the expression-based load, all values written to <code>:1</code> are immediates or copied to memory as shown.`);function We(){return t(Ue)}const qe=Object.freeze(Object.defineProperty({__proto__:null,default:We},Symbol.toStringTag,{value:"Module"}));var Ye=o("<div>");function Qe(){const g=Object.values(Object.assign({"./references/0Format.jsx":Ve,"./references/1Load.jsx":Ge,"./references/2Jump.jsx":Ne,"./references/3ExampleProg.jsx":qe})).map(c=>c.default);return(()=>{var c=t(Ye);return e(c,n(S,{each:g,children:h=>n(h,{})})),c})()}var ne=o("<div class=window-pane>"),Xe=o('<div><div style=display:flex;align-items:center;gap:0.5rem><p class=hlx-header>HelixAsm</p><a href=https://github.com/NullRoz007/HelixAsm/tree/main><i class="nes-icon github"></i></a></div><p class=hlx-desc>The Helix Assembly Language is an assembly language designed to make producing code for my custom 8bit Minecraft CPU easier. </p><div class=window id=main-window><div class=title-bar><button aria-label=Close class=close></button><h1 class=title>Editor</h1><button aria-label=Resize class=resize></button></div><!$><!/></div><div class=window id=ref-window><div class=title-bar><button aria-label=Close class=close></button><h1 class=title>Language Reference</h1><button aria-label=Resize class=resize></button></div><!$><!/>');function tt(){const[p,g]=r(!1),[c,h]=r(!1);return(()=>{var u=t(Xe),P=u.firstChild,_=P.nextSibling,x=_.nextSibling,f=x.firstChild,T=f.firstChild,j=T.nextSibling,O=j.nextSibling,I=f.nextSibling,[z,J]=E(I.nextSibling),L=x.nextSibling,D=L.firstChild,A=D.firstChild,V=A.nextSibling,w=V.nextSibling,F=D.nextSibling,[v,H]=E(F.nextSibling);return O.$$click=()=>g(!p()),e(x,n(M,{get when(){return p()},get children(){var m=t(ne);return e(m,n(ze,{})),m}}),z,J),w.$$click=()=>h(!c()),e(L,n(M,{get when(){return c()},get children(){var m=t(ne);return e(m,n(Qe,{})),m}}),v,H),k(),u})()}se(["click"]);export{tt as default};
