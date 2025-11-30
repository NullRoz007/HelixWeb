const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/parser-DNFUkeM0.js","assets/lexer-ZeEIXq-y.js"])))=>i.map(i=>d[i]);
import{q as ae,b as r,H as Ee,t,w as d,F as M,A as e,j as s,S as T,z as E,I as D,m as Me,d as Te,J as je}from"./web-CH6RNnj1.js";import{_ as X}from"./preload-helper-CHk8NVP2.js";var Oe=d('<div class=modal-overlay><div class="standard-dialog center scale-down"id=error-modal><div class=modal-contents><h1 class=modal-text>Error during build!</h1><p></p><section class=field-row style=justify-content:flex-end><button class=btn>OK'),Ie=d('<div class=modal-overlay><div class="standard-dialog center scale-down"id=parse-modal><div class=modal-contents><h1 class=modal-text>Parse Results</h1><details><summary>Tokens</summary><ol></ol></details><details><summary>Instructions</summary><ol></ol></details><details><summary>Expressions</summary><ol></ol></details><details><summary>Labels</summary><ol></ol></details><section class=field-row style=justify-content:flex-end><button class=btn>OK'),ze=d(`<div id=editor><ul role=menu-bar><li role=menu-item tabindex=0 aria-haspopup=true>File<ul role=menu><li role=menu-item><button>Save Source</button></li><li role=menu-item><button>Save Build</button></li><li role=menu-item><button>Load</button></li></ul></li><li role=menu-item tabindex=1 aria-haspopup=true>Test<ul role=menu><li role=menu-item><button>Parse</button></li></ul></li><li role=menu-item tabindex=2 aria-haspopup=true>Build<ul role=menu><li role=menu-item><button>Json</button></li><li role=menu-item><button>Binary</button></li></ul></li></ul><div style=display:flex;width:100%><textarea>@label start;
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
</textarea><div class=buildOutput><pre></pre></div></div><!$><!/><!$><!/>`),P=d("<li><p>");const ne=`@label start;
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
`;function Je(){const[_,g]=r(ne),[c,f]=r(""),[m,j]=r(null),[b,x]=r(null),[v,O]=r(null),[I,z]=r([]),[J,A]=r([]),[V,w]=r([]),[C,F]=r([]),[H,y]=r(!1),[G,h]=r(!1),[B,p]=r(!1);g(ne);const oe=()=>{if(!m()||!b()){console.warn("Parser/Lexer not loaded yet");return}try{const l=new(m())(_()),a=l.tokenize(),i=new(b())(a);i.tokens=a,i.parse(),z(a),A(i.instructions),w(l.expressions),F(i.labels),y(!0)}catch(l){p(l.message),h(!0)}},de=async()=>{if(!m()||!b()||!v()){console.warn("Parser/Lexer/CodeGen not loaded yet");return}try{const a=new(m())(_()).tokenize(),i=new(b())(a);i.tokens=a,i.parse();const k=i.instructions,K=await new(v())(k).build();f(K)}catch(l){p(l.message),h(!0)}};return Ee(async()=>{const l=await X(()=>import("./lexer-ZeEIXq-y.js"),[]),a=await X(()=>import("./parser-DNFUkeM0.js"),__vite__mapDeps([0,1])),i=await X(()=>import("./gen-ji6VN-HE.js"),[]);j(()=>l.Lexer),x(()=>a.Parser),O(()=>i.CodeGen),console.log("Modules loaded")}),(()=>{var l=t(ze),a=l.firstChild,i=a.firstChild,k=i.nextSibling,Z=k.firstChild,K=Z.nextSibling,ce=K.firstChild,ue=ce.firstChild,me=k.nextSibling,pe=me.firstChild,_e=pe.nextSibling,ee=_e.firstChild,be=ee.nextSibling,te=a.nextSibling,N=te.firstChild,$e=N.nextSibling,ge=$e.firstChild,he=te.nextSibling,[le,fe]=M(he.nextSibling),xe=le.nextSibling,[ve,ye]=M(xe.nextSibling);return ue.$$click=()=>{oe()},ee.$$click=de,be.$$click=()=>{},N.$$input=u=>{g(u.currentTarget.value)},e(ge,c),e(l,s(T,{get when(){return G()},get children(){var u=t(Oe),S=u.firstChild,U=S.firstChild,W=U.firstChild,L=W.nextSibling,q=L.nextSibling,Y=q.firstChild;return u.$$click=()=>h(!1),S.$$click=R=>R.stopPropagation(),e(L,B),Y.$$click=()=>h(!1),E(),u}}),le,fe),e(l,s(T,{get when(){return Me(()=>!!(H()&&m()))()&&b()},get children(){var u=t(Ie),S=u.firstChild,U=S.firstChild,W=U.firstChild,L=W.nextSibling,q=L.firstChild,Y=q.nextSibling,R=L.nextSibling,Se=R.firstChild,Le=Se.nextSibling,re=R.nextSibling,De=re.firstChild,we=De.nextSibling,ie=re.nextSibling,Ce=ie.firstChild,ke=Ce.nextSibling,Re=ie.nextSibling,Pe=Re.firstChild;return u.$$click=()=>y(!1),S.$$click=n=>n.stopPropagation(),e(Y,s(D,{get each(){return I()},children:(n,Q)=>(()=>{var o=t(P),$=o.firstChild;return e($,()=>n.type+" "+(n.value||"")),o})()})),e(Le,s(D,{get each(){return J()},children:(n,Q)=>(()=>{var o=t(P),$=o.firstChild;return e($,()=>n.toString()),o})()})),e(we,s(D,{get each(){return V()},children:(n,Q)=>(()=>{var o=t(P),$=o.firstChild;return e($,()=>n.expr+" = "+(n.value||"??")),o})()})),e(ke,s(D,{get each(){return C()},children:(n,Q)=>(()=>{var o=t(P),$=o.firstChild;return e($,()=>n.name+" = "+n.pos),o})()})),Pe.$$click=()=>y(!1),E(),u}}),ve,ye),Te(()=>je(N,"value",_())),E(),l})()}ae(["click","input"]);var Ae=d("<details><summary>Instruction Format</summary><section><p>Every instruction has the form:</p><pre><code>KEYWORD target value</code></pre><h3>Target</h3><p>The destination written by the instruction:</p><table class=table-striped><thead><tr><th>Syntax</th><th>Meaning</th></tr></thead><tbody><tr><td>:n</td><td>Register n</td></tr><tr><td>#n</td><td>Memory cell n</td></tr></tbody></table><h3>Value</h3><p>The data written into the target:</p><table class=table-striped><thead><tr><th>Syntax</th><th>Meaning</th></tr></thead><tbody><tr><td>:n</td><td>Value from register n</td></tr><tr><td>#n</td><td>Value from memory cell n</td></tr><tr><td>n</td><td>Immediate literal</td></tr><tr><td>@expr &lt;expr&gt;</td><td>Expression evaluated at assembly time; result used as an immediate value</td></tr></tbody></table><p>Values without <code>:</code>, <code>#</code>, or <code>@expr</code> are treated as immediate integers.");function Ve(){return t(Ae)}const Fe=Object.freeze(Object.defineProperty({__proto__:null,default:Ve},Symbol.toStringTag,{value:"Module"}));var He=d(`<details><summary>LD — Load</summary><section><pre><code>LD target value</code></pre><p>Writes the given value into the target register or memory cell.</p><p><strong>Examples:</strong></p><pre><code>
LD :1 10            ; Immediate 10 → R1
LD #3 :1            ; R1 → Memory 3
LD :0 #7            ; Memory 7 → R0
LD :4 @expr 12 + 8  ; Immediate 20 → R4`);function Ge(){return t(He)}const Be=Object.freeze(Object.defineProperty({__proto__:null,default:Ge},Symbol.toStringTag,{value:"Module"}));var Ke=d("<details><summary>JP — Jump</summary><section><pre><code>JP @label name;</code></pre><p>Unconditional jump to the instruction at a label.</p><p>Labels are declared using:</p><pre><code>@label name;</code></pre><p>Labels refer to instruction addresses.");function Ne(){return t(Ke)}const Ue=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"}));var We=d(`<details><summary>Example Program Explained</summary><section><h3>start</h3><pre><code>
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
JP @label blink;     ; Jump back to blink</code></pre><p>This section blinks a pixel by repeatedly storing values in memory.</p><p>Except for the expression-based load, all values written to <code>:1</code> are immediates or copied to memory as shown.`);function qe(){return t(We)}const Ye=Object.freeze(Object.defineProperty({__proto__:null,default:qe},Symbol.toStringTag,{value:"Module"}));var Qe=d("<div>");function Xe(){const g=Object.values(Object.assign({"./references/0Format.jsx":Fe,"./references/1Load.jsx":Be,"./references/2Jump.jsx":Ue,"./references/3ExampleProg.jsx":Ye})).map(c=>c.default);return(()=>{var c=t(Qe);return e(c,s(D,{each:g,children:f=>s(f,{})})),c})()}var se=d("<div class=window-pane>"),Ze=d('<div><div style=display:flex;align-items:center;gap:0.5rem><p class=hlx-header>HelixAsm</p><a href=https://github.com/NullRoz007/HelixAsm/tree/main><i class="nes-icon github"></i></a></div><p class=hlx-desc>The Helix Assembly Language is an assembly language designed to make producing code for my custom 8bit Minecraft CPU easier. </p><div class=window id=main-window><div class=title-bar><button aria-label=Close class=close></button><h1 class=title>Editor</h1><button aria-label=Resize class=resize></button></div><!$><!/></div><div class=window id=ref-window><div class=title-bar><button aria-label=Close class=close></button><h1 class=title>Language Reference</h1><button aria-label=Resize class=resize></button></div><!$><!/>');function lt(){const[_,g]=r(!1),[c,f]=r(!1);return(()=>{var m=t(Ze),j=m.firstChild,b=j.nextSibling,x=b.nextSibling,v=x.firstChild,O=v.firstChild,I=O.nextSibling,z=I.nextSibling,J=v.nextSibling,[A,V]=M(J.nextSibling),w=x.nextSibling,C=w.firstChild,F=C.firstChild,H=F.nextSibling,y=H.nextSibling,G=C.nextSibling,[h,B]=M(G.nextSibling);return z.$$click=()=>g(!_()),e(x,s(T,{get when(){return _()},get children(){var p=t(se);return e(p,s(Je,{})),p}}),A,V),y.$$click=()=>f(!c()),e(w,s(T,{get when(){return c()},get children(){var p=t(se);return e(p,s(Xe,{})),p}}),h,B),E(),m})()}ae(["click"]);export{lt as default};
