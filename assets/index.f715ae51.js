import{R as M,r as E,j as l,F,u as j,a as k,A as T,b as v,c as A,Q as R,t as S,d as D,M as G,e as N}from"./index.b57d67a1.js";const W=r=>{const{isShownModal:c,toggleModal:u}=j(),[i,$]=E.exports.useState({path:"",dependencies:[]}),{odd:h,id:p,nameGrid:w,x:o,y:x,children:g,hover:a,refreshData:s,alignment:y}=r;let t=g,n=g;if(E.exports.useEffect(()=>{$({path:"",dependencies:[]})},[w]),t&&t.length&&t.indexOf("{")>=0&&t.indexOf("}")>=0){const e=JSON.parse(t);e.text?(t=l("div",{style:{backgroundColor:e.color},className:"divEval"}),n=e.text):(t="",n="")}return k(F,{children:[k("span",{id:`${w}-row-${o}-${x}`,"data-tip":!0,"data-for":`${w}-row-${o}-${x}`,"grid-area":`${w}-row-${o}-${x}`,tabIndex:-1,"data-id":p,className:`rowCell ${h?"rowOdd":"rowCell"} ${a?"rowCellHover":""}`,title:n,children:[t,a&&a.map(e=>e.type==="cancel"?l(T,{onClick:async()=>{const{data:d={}}=await v(`/safe/front/canExecute?module=${r.module}&screen=list&tool=result&toolOperation=cancel&ids=${r.idSampleLab}`);if(d.success){let f=e.path;e.dependencies.forEach(P=>{f=f.replace(`{${P.field}}`,r[P.field])});const m=await A(f,{});m.data&&m.data.success?(R.success(S("tracking.labels.success")),s&&s()):R.error(m.data&&m.data.message||"Error")}else R.error(d.message||"Error")},title:S("grid.hover.cancelAnalysis")},e.type):l(D,{onClick:async()=>{const{data:d={}}=await v(`/safe/front/canExecute?module=${r.module}&screen=list&tool=result&toolOperation=add&ids=${r.idSampleLab}`);d.success?(u(),$(e)):R.error(d.message||"Error")},title:S("grid.hover.resultAnalysis")},e.type))]}),l(G,{isShown:c,hide:u,headerText:"",modalContent:l(N,{title:"Insira o valor",items:[{name:"result",field:S("form.label.result"),type:"input",dependencies:[]}],initialData:{},onSave:async e=>{let d=i.path;i.dependencies.forEach(m=>{d=d.replace(`{${m.field}}`,r[m.field])});const f=await A(d,e);f.data&&f.data.success?(R.success(S("tracking.labels.success")),u(),s&&s()):R.error(f.data&&f.data.message||"Error")},onCancel:u})})]})},L=r=>{const{id:c,nameGrid:u,x:i,y:$,menuFixed:h,children:p,width:w,editRow:o,setEditRow:x,dataType:g,refreshData:a}=r,s=!!(i%2);return l(W,{odd:s,id:c,...r})},H=r=>{const{nameGrid:c,columns:u,indRow:i,menuFixed:$,editRow:h,setEditRow:p,select:w,setRowsSelected:o,refreshData:x,rowsSelected:g,verifyCheckbox:a,...s}=r,y=u.map((t,n)=>l(L,{nameGrid:c,x:i,y:n,menuFixed:$,minWidth:t.minWidth,width:t.width,maxWidth:t.maxWidth,editRow:h,setEditRow:p,dataType:t.dataType,refreshData:x,...t,...s,children:s[t.dataField]},n.toString()));return w&&y.unshift(l("div",{id:`${c}-row-check-${i}`,"data-tip":!0,"data-for":`${c}-row-check-${i}`,"grid-area":`${c}-row-check-${i}`,tabIndex:-1,className:`rowCell rowCheck ${i%2?"rowOdd":"rowCell"}`,children:l("input",{disabled:!!((a==null?void 0:a.dataField)&&s[a==null?void 0:a.dataField]!==(a==null?void 0:a.value)),id:`${c}-row-check-${i}`,type:"checkbox","data-id":s.id,onKeyUp:t=>{if(t.nativeEvent.key==="Shift"){const n=document.querySelectorAll('div > input[type="checkbox"]:checked')||[],e=n[0],d=n[n.length-1];if(e.offsetParent&&d.offsetParent){const f=e.offsetParent.id.substr(0,e.offsetParent.id.lastIndexOf("-")),m=e.offsetParent.id.substr(e.offsetParent.id.lastIndexOf("-")+1,e.offsetParent.id.length),P=d.offsetParent.id.substr(d.offsetParent.id.lastIndexOf("-")+1,d.offsetParent.id.length),I=[];for(let C=+m;C<+P;C++){const b=document.getElementById(`${f}-${C}`);if(b&&b.firstChild){const O=b.firstChild;O.checked=!0,O.dataset.id&&I.push(O.dataset.id)}}o(I)}}},onChange:t=>{const n=g.filter(e=>+e!=+s.id);t.currentTarget.checked?o([...n,s.id]):o(n)}})})),l(F,{children:y})},q=({refreshData:r,nameGrid:c,columns:u,data:i,menuFixed:$,select:h,getRowsSelected:p,clearSelected:w=!1,checkedTotal:o,verifyCheckbox:x})=>{const[g,a]=E.exports.useState(-1),[s,y]=E.exports.useState([]);E.exports.useEffect(()=>(h&&s.length&&p(s),()=>{}),[s]),E.exports.useEffect(()=>{h&&o.length&&(p(o),y(o))},[o]),E.exports.useEffect(()=>{h&&p([])},[w]);const t=i.map((n,e)=>l(H,{verifyCheckbox:x,select:h,nameGrid:c,columns:u,indRow:e,menuFixed:$,editRow:g,setEditRow:a,rowsSelected:s,setRowsSelected:y,refreshData:r,...n},e.toString()));return l(F,{children:t})},J=M.memo(q);export{J as default};
