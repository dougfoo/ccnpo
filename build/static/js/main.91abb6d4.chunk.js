(window["webpackJsonpfoostack-site"]=window["webpackJsonpfoostack-site"]||[]).push([[0],{110:function(e,a,t){e.exports=t(526)},115:function(e,a,t){},526:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),o=t.n(l),c=(t(115),t(46)),i=t(575),m=t(583),s=t(102),d=t.n(s),u=t(574),p=t(576),E=t(67),g=t(582),h=t(573),b=t(563),y=t(577),f=t(581),v=t(579),w=t(580),C=t(578),x=t(101),k=t(10),A=t(565),N=t(567),S=t(569),I=t(571),P=t(572),R=t(568),_=t(570),B=t(96),O=t.n(B),j=t(97),L=t.n(j),U=t(99),T=t.n(U),F=t(100),D=t.n(F),K=t(98),G=t.n(K),M=t(104),V=Object(b.a)((function(e){return{paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main}}}));function W(){var e=V();return r.a.createElement(A.a,{align:"alternate"},r.a.createElement(N.a,null,r.a.createElement(R.a,null,r.a.createElement(E.a,{variant:"body2",color:"textSecondary"},"Today")),r.a.createElement(S.a,null,r.a.createElement(_.a,null,r.a.createElement(O.a,null)),r.a.createElement(I.a,null)),r.a.createElement(P.a,null,r.a.createElement(M.a,{elevation:3,className:e.paper},r.a.createElement(E.a,{variant:"h6",component:"h1"},"Upload Resume"),r.a.createElement(E.a,null,"Show us what you have (send what you have immediately)")))),r.a.createElement(N.a,null,r.a.createElement(R.a,null,r.a.createElement(E.a,{variant:"body2",color:"textSecondary"},"Instantly")),r.a.createElement(S.a,null,r.a.createElement(_.a,{color:"primary"},r.a.createElement(L.a,null)),r.a.createElement(I.a,null)),r.a.createElement(P.a,null,r.a.createElement(M.a,{elevation:3,className:e.paper},r.a.createElement(E.a,{variant:"h6",component:"h1"},"AI Analysis"),r.a.createElement(E.a,null,"Machine Learning and Advanced Natural Language Processing (NLP)")))),r.a.createElement(N.a,null,r.a.createElement(R.a,null,r.a.createElement(E.a,{variant:"body2",color:"textSecondary"},"Also Instant")),r.a.createElement(S.a,null,r.a.createElement(_.a,{color:"primary",variant:"outlined"},r.a.createElement(G.a,null)),r.a.createElement(I.a,null)),r.a.createElement(P.a,null,r.a.createElement(M.a,{elevation:3,className:e.paper},r.a.createElement(E.a,{variant:"h6",component:"h1"},"Recommendations"),r.a.createElement(E.a,null,"AI Expert recommendations based on 12 dimensions of your resume")))),r.a.createElement(N.a,null,r.a.createElement(R.a,null,r.a.createElement(E.a,{variant:"body2",color:"textSecondary"},"Schedule via Zoom with a human")),r.a.createElement(S.a,null,r.a.createElement(_.a,{color:"primary"},r.a.createElement(T.a,null)),r.a.createElement(I.a,{className:e.secondaryTail})),r.a.createElement(P.a,null,r.a.createElement(M.a,{elevation:3,className:e.paper},r.a.createElement(E.a,{variant:"h6",component:"h1"},"Human Expert"),r.a.createElement(E.a,null,"Real world human expert combines knowledge + AI for best possible recommendations")))),r.a.createElement(N.a,null,r.a.createElement(R.a,null,r.a.createElement(E.a,{variant:"body2",color:"textSecondary"},"Before you know it..")),r.a.createElement(S.a,null,r.a.createElement(_.a,{color:"secondary",variant:"outlined"},r.a.createElement(D.a,null))),r.a.createElement(P.a,null,r.a.createElement(M.a,{elevation:3,className:e.paper},r.a.createElement(E.a,{variant:"h6",component:"h1"},"New Job"),r.a.createElement(E.a,null,"Start a new job, career, better work life balance, salary, and enjoy!")))))}var J=t(64),Y=t.n(J),H=t(529),z=t(527),Z=t(105);var $=function(){var e=Object(n.useState)(0),a=Object(c.a)(e,2),t=a[0],l=a[1],o=r.a.useState(!1),i=Object(c.a)(o,2),s=i[0],d=i[1],u=Object(b.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}))(),p={bucketName:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BUCKET_NAME,dirName:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_DIR_NAME,region:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_REGION,accessKeyId:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_ACCESS_ID,secretAccessKey:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_ACCESS_KEY};Y.a.config.update({accessKeyId:p.accessKeyId,secretAccessKey:p.secretAccessKey});var E=new Y.a.S3({params:{Bucket:p.bucketName},region:p.region}),g=function(e){var a={ACL:"public-read",Key:p.dirName+"/"+e.name,ContentType:e.type,Body:e};E.putObject(a).on("httpUploadProgress",(function(e){l(!0),console.log("putted in S3"),console.log("triggering next step")})).send((function(e){e&&(console.log("error blah"),console.log(e))})),console.log("done !")},h=function(e){e.preventDefault();var a=e.target.files[0];console.log("upload: "+a),g(a),y()},y=function(){d(!0)};return r.a.createElement("div",{className:u.root},r.a.createElement("center",null,r.a.createElement("form",{className:"upload-steps",onSubmit:h},r.a.createElement("input",{id:"uploadFormId",multiple:!0,className:u.input,type:"file",onChange:h}),r.a.createElement("label",{htmlFor:"uploadFormId"},r.a.createElement(m.a,{variant:"contained",color:"primary",component:"span"},"Upload Resume"))),t?r.a.createElement("b",null," \xa0 Upload Complete!"):r.a.createElement("i",null," \xa0 "),r.a.createElement("div",null,r.a.createElement(H.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:u.modal,open:s,onClose:function(){d(!1)},closeAfterTransition:!0,BackdropComponent:z.a,BackdropProps:{timeout:500}},r.a.createElement(Z.a,{in:s},r.a.createElement("div",{className:u.paper},r.a.createElement("h2",{id:"transition-modal-title"},"Resume Processing"),r.a.createElement("p",{id:"transition-modal-description"},"Your file is being processed...")))))))};function q(){return r.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(h.a,{color:"inherit",href:"/about/"},"foostack.ai")," ",(new Date).getFullYear(),". Built with ",r.a.createElement(h.a,{color:"inherit",href:"https://material-ui.com/"},"React and Material-UI."))}var Q=Object(b.a)((function(e){return{root:{flexGrow:1},content:{flex:"1 0 auto"},details:{display:"flex",flexDirection:"column"},title:{flexGrow:1},icon:{marginRight:e.spacing(2),cursor:"pointer"},menuButton:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},card2:{display:"flex"},cardAction:{display:"block",textAlign:"initial"},cardMedia:{paddingTop:"56.25%"},media:{height:140},media2:{height:140,width:140,paddingLeft:"25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function X(){var e=Q(),a=r.a.useState(!1),t=Object(c.a)(a,2),n=t[0],l=t[1],o=function(){l(!1)};return r.a.createElement(x.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(i.a,{position:"relative"},r.a.createElement(p.a,null,r.a.createElement(d.a,{className:e.icon,onClick:function(){document.location.href="/"}}),r.a.createElement(h.a,{variant:"h6",className:e.title,color:"inherit",href:"/"},"Foostack.Ai"),r.a.createElement(m.a,{color:"inherit",onClick:function(){l(!0)}},"Contact"))),r.a.createElement(y.a,{open:n,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",maxWidth:"md",fullWidth:!0,PaperProps:{style:{backgroundColor:"#d4d7dd",boxShadow:"3"}}},r.a.createElement(C.a,{id:"alert-dialog-title"},"Contact Placeholder"),r.a.createElement(v.a,null,r.a.createElement(w.a,{id:"alert-dialog-description"},"Placeholder for Contact Form w/ Captcha")),r.a.createElement(f.a,null,r.a.createElement(m.a,{onClick:o,color:"primary"},"Send"),r.a.createElement(m.a,{onClick:o,color:"primary",autoFocus:!0},"Cancel"))),r.a.createElement(k.a,{exact:!0,path:"/",render:function(){return r.a.createElement("main",null,r.a.createElement("div",{className:e.heroContent},r.a.createElement(g.a,{maxWidth:"md"},r.a.createElement(E.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"FooStack R\xe9sum\xe9 AI Service"),r.a.createElement(E.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"Resume-AI.foostack is a non profit that helps people optimize their career and job search. Our cutting edge AI/NLP based system confidentially reviews resumes and offers AI expert + human expert advice.  Additional human assistance for targeting companies and roles, providing interview strategy, prep and negotiation tips also available."),r.a.createElement(E.a,{variant:"h4",align:"center",gutterBottom:!0},"How it works"),r.a.createElement(W,null))),r.a.createElement("div",null,r.a.createElement(E.a,{variant:"h4",align:"center",gutterBottom:!0},"Get Started !"),r.a.createElement($,null)))}}),r.a.createElement("footer",{className:e.footer},r.a.createElement(E.a,{variant:"h6",align:"center",gutterBottom:!0},"FooStack"),r.a.createElement(E.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"FooStack AI, architecture and design"),r.a.createElement(q,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(523),t(524).polyfill(),t(525).polyfill(),window.navigator.userAgent.indexOf("MSIE")>0?alert("IE 10 or older does not very well with React, please use a modern browser (Chrome, Firefox, Edge, etc)"):navigator.userAgent.match(/Trident\/7\./)&&alert("IE 11 does not work very well with React, please use a modern browser (Chrome, Firefox, Edge, etc)"),o.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},62:function(e,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.91abb6d4.chunk.js.map