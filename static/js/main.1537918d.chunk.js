(this["webpackJsonpcustom-fit"]=this["webpackJsonpcustom-fit"]||[]).push([[0],{102:function(e,a,t){e.exports=t(125)},125:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),i=t.n(l),c=t(20),o=t(156),u=t(48),m=t(159),s=t(160),E=t(191),v=t(161),g=t(192),d=t(164),p=t(128),h=t(165),f=t(166),b=t(163),C=t(83),x=t.n(C),w=t(38),S=t(31),k=t(7),T=t.n(k);t(107);T.a.initializeApp({apiKey:"AIzaSyBSsGGNtbJKdWhAJ-x8PCZpN5JIZii8x7M",authDomain:"custom-fit-885d7.firebaseapp.com",databaseURL:"https://custom-fit-885d7.firebaseio.com",projectId:"custom-fit-885d7",storageBucket:"custom-fit-885d7.appspot.com",messagingSenderId:"504159396672",appId:"1:504159396672:web:b995f81e096087eb"});var y,O=T.a,V=Object(o.a)((function(e){return{grow:{flexGrow:1},sideNavMenu:{width:250},sideMenuImage:{width:"40%",margin:"auto"}}})),j=["overview","routines","exercises","stats","settings"],F=function(e){var a=e.split("/");return a[a.length-1]},R=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},I=function(e){var a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{position:"fixed"},r.a.createElement(s.a,null,a)),r.a.createElement(s.a,null))},A=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],l=a[1],i=V(),o=function(){l(!t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{lgUp:!0},r.a.createElement(v.a,{color:"inherit","aria-label":"menu",onClick:o},r.a.createElement(b.a,null))),r.a.createElement(g.a,{anchor:"left",open:t,onClose:function(){return l(!1)},onOpen:function(){return l(!0)},className:i.sideNavMenu},r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement("img",{className:i.sideMenuImage,src:x.a,alt:"Custom Fit logo"})),j.map((function(e){return r.a.createElement(p.a,{key:e,button:!0,component:S.b,to:"/custom-fit/"+e,onClick:o},r.a.createElement(h.a,{primary:R(e)}))})),r.a.createElement(p.a,{button:!0,component:S.b,to:"/custom-fit/",onClick:function(){o(),O.auth().signOut()}},r.a.createElement(h.a,{primary:"Sign Out"})))))},B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{mdDown:!0},j.map((function(e){return r.a.createElement(f.a,{key:e,color:"inherit",component:S.b,to:"/custom-fit/"+e},R(e))})),r.a.createElement(f.a,{color:"inherit",onClick:function(){O.auth().signOut()},component:S.b,to:"/custom-fit/"},"Sign Out")))},M=function(){var e=V(),a=Object(w.g)(),t=F(a.pathname),n="";return j.includes(t)&&(n=R(t)),r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null,r.a.createElement(A,null),r.a.createElement(u.a,{variant:"h5"},n),r.a.createElement("div",{className:e.grow}),r.a.createElement(B,null)))},N=function(){return r.a.createElement(r.a.Fragment,null,"0 This is an overview ",r.a.createElement("br",null),"1 This is an overview ",r.a.createElement("br",null),"2 This is an overview ",r.a.createElement("br",null),"3 This is an overview ",r.a.createElement("br",null),"4 This is an overview ",r.a.createElement("br",null),"5 This is an overview ",r.a.createElement("br",null),"6 This is an overview ",r.a.createElement("br",null),"7 This is an overview ",r.a.createElement("br",null),"8 This is an overview ",r.a.createElement("br",null),"9 This is an overview ",r.a.createElement("br",null),"10 This is an overview ",r.a.createElement("br",null),"11 This is an overview ",r.a.createElement("br",null),"12 This is an overview ",r.a.createElement("br",null),"13 This is an overview ",r.a.createElement("br",null),"14 This is an overview ",r.a.createElement("br",null),"15 This is an overview ",r.a.createElement("br",null),"16 This is an overview ",r.a.createElement("br",null),"17 This is an overview ",r.a.createElement("br",null),"18 This is an overview ",r.a.createElement("br",null),"19 This is an overview ",r.a.createElement("br",null),"20 This is an overview ",r.a.createElement("br",null),"21 This is an overview ",r.a.createElement("br",null),"22 This is an overview ",r.a.createElement("br",null),"23 This is an overview ",r.a.createElement("br",null),"24 This is an overview ",r.a.createElement("br",null),"25 This is an overview ",r.a.createElement("br",null),"26 This is an overview ",r.a.createElement("br",null),"27 This is an overview ",r.a.createElement("br",null),"28 This is an overview ",r.a.createElement("br",null),"29 This is an overview ",r.a.createElement("br",null),"30 This is an overview ",r.a.createElement("br",null),"31 This is an overview ",r.a.createElement("br",null),"32 This is an overview ",r.a.createElement("br",null),"33 This is an overview ",r.a.createElement("br",null),"34 This is an overview ",r.a.createElement("br",null),"35 This is an overview ",r.a.createElement("br",null),"36 This is an overview ",r.a.createElement("br",null),"37 This is an overview ",r.a.createElement("br",null),"38 This is an overview ",r.a.createElement("br",null),"39 This is an overview ",r.a.createElement("br",null))},P=t(189),U=t(175),D=t(184),z=t(176),W=t(177),Y=t(185),J=t(167),L=Object(o.a)({bigButton:{fontSize:"3rem"}}),_=function(e){var a=e.onClick,t=L();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{onClick:a},r.a.createElement(J.a,{color:"primary",fontSize:"large",className:t.bigButton})))},G=Object(o.a)({centerContent:{display:"flex",alignItems:"center",justifyContent:"center"}}),q=function(e){var a=e.children,t=G();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.centerContent},a))},K=t(179),Z=t(180),H=t(181),$=t(182),Q=t(183),X=t(55),ee=t(47);!function(e){e.PRIMARY="primary",e.ERROR="error",e.SUCCESS="success"}(y||(y={}));var ae=function(e){return{state:e}},te=function(e,a){return function(t){return a[t[e]]}},ne=Object(o.a)((function(e){return{validation:{"& label.Mui-focused":{color:te("state",{primary:e.palette.primary.main,error:e.palette.error.main,success:e.palette.success.main})},"& .MuiInput-underline:after":{borderBottomColor:te("state",{primary:e.palette.primary.main,error:e.palette.error.main,success:e.palette.success.main})},"& .MuiInput-underline:before":{borderColor:te("state",{primary:"",error:e.palette.error.main,success:e.palette.success.main})},"& .MuiInput-underline:hover:before":{borderColor:te("state",{primary:"",error:e.palette.error.main,success:e.palette.success.main})},"& label":{color:te("state",{primary:"",error:e.palette.error.main,success:e.palette.success.main})},"& .MuiFormHelperText-root":{color:e.palette.error.main}}}})),re=t(168),le=Object(o.a)({bigButton:{fontSize:"3rem"}}),ie=function(e){var a=e.onClick,t=le();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{onClick:a},r.a.createElement(re.a,{color:"primary",fontSize:"large",className:t.bigButton})))},ce=t(169),oe=Object(o.a)({bigButton:{fontSize:"3rem"}}),ue=function(e){var a=e.onClick,t=oe();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{onClick:a},r.a.createElement(ce.a,{color:"primary",fontSize:"large",className:t.bigButton})))},me=t(170),se=Object(o.a)({bigButton:{fontSize:"3rem"}}),Ee=function(e){var a=e.onClick,t=se();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{onClick:a},r.a.createElement(me.a,{color:"secondary",fontSize:"large",className:t.bigButton})))},ve=t(171),ge=t(194),de=t(172),pe=t(173),he=function(e){var a=e.label,t=e.errorText,n=e.state,l=e.inputType,i=e.value,c=e.onValueChange,o=e.min,u=e.max,m=e.step,s=function(e){var a=ae(e);return ne(a)}(n),E=void 0===c?void 0:function(e){var a=e.target.value;c(a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.a,{required:!0,className:s.validation,fullWidth:!0},void 0!==a&&r.a.createElement(ge.a,null,a),r.a.createElement(de.a,{type:l,value:void 0===i?"":i,onChange:E,inputProps:{min:o,max:u,step:m}}),r.a.createElement(pe.a,null,void 0!==n&&n===y.ERROR&&t)))},fe=function(e){var a=e.label,t=e.errorText,n=e.state,l=e.value,i=e.onValueChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(he,{label:a,errorText:t,state:n,inputType:"text",value:l,onValueChange:i}))},be=function(e){var a=e.label,t=e.errorText,n=e.state,l=e.value,i=e.onValueChange,c=e.onValidationChange,o=e.minLength,u=e.maxLength,m=function(e){return void 0===e||e.length<o||e.length>u?y.ERROR:y.SUCCESS},s=m(l);return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,{label:a,errorText:t,state:n,value:l,onValueChange:function(e){var a=m(e);a!==s&&c(a),i(e)}}))},Ce=function(e){var a=e.label,t=e.errorText,n=e.state,l=e.value,i=e.onValueChange,c=e.min,o=e.max,u=e.step;return r.a.createElement(r.a.Fragment,null,r.a.createElement(he,{label:a,errorText:t,state:n,inputType:"number",value:l,onValueChange:i,min:c,max:o,step:u}))},xe=function(e){var a=e.label,t=e.errorText,n=e.state,l=e.value,i=e.onValueChange,c=e.onValidityChange,o=e.min,u=e.max,m=(e.step,function(e){return""===e?y.ERROR:function(e){return void 0===e||e<o||e>u?y.ERROR:y.SUCCESS}(+e)}),s=n;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,{label:a,errorText:t,state:n,value:l,onValueChange:function(e){var a=m(e);a!==s&&c(a),i(e)}}))},we=t(190),Se=t(174),ke=function(e){var a=e.label,t=e.possibleValues,n=e.value,l=e.onValueChange,i=void 0===l?void 0:function(e){var a=e.target.value;l(a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.a,{required:!0,fullWidth:!0},void 0!==a&&r.a.createElement(ge.a,null,a),r.a.createElement(we.a,{value:void 0===n?t[0]:n,onChange:i},t.map((function(e){return r.a.createElement(Se.a,{value:e,key:e},e)})))))},Te=function(e){var a=e.label,t=e.possibleValues,n=e.value,l=e.onValueChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,{label:a,possibleValues:t,value:n,onValueChange:l}))},ye=function(e,a,t){for(var n=[],r=(a-e)/t+((a-e)%t===0?1:0),l=0;l<r;l++)n.push(e+l*t);return n},Oe=function(e){var a=e.exercise,t=e.combinedStatus,n=e.combinedValidityParams,l=e.onValueChange,i=e.onValidityChange,c=e.onClickBack,o=e.onClickSave,m=e.onClickDelete,s=Math.floor(a.pause/60),E=a.pause%60;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,null,r.a.createElement(z.a,null,r.a.createElement(u.a,{variant:"h5"},"Plan an exercise"),r.a.createElement(W.a,{container:!0,spacing:2},r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(be,{label:"Name",errorText:"Name must have length between 1 and 99",state:t.name,value:a.name,onValueChange:l("name"),onValidationChange:i("name"),minLength:n.name.min,maxLength:n.name.max})),r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(xe,{label:"Reps",errorText:"Should be an integer between 1 and 99",state:t.reps,value:a.reps,onValueChange:l("reps"),onValidityChange:i("reps"),min:n.reps.min,max:n.reps.max,step:n.reps.step})),r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(xe,{label:"Sets",errorText:"Should be an integer between 1 and 12",state:t.sets,value:a.sets,onValueChange:l("sets"),onValidityChange:i("sets"),min:n.sets.min,max:n.sets.max,step:n.sets.step})),r.a.createElement(W.a,{item:!0,xs:6},r.a.createElement(Te,{label:"Pause minutes",possibleValues:ye(n.pauseMinutes.min,n.pauseMinutes.max,n.pauseMinutes.step),onValueChange:function(e){var a=60*+e+E;l("pause")(a.toString())},value:s})),r.a.createElement(W.a,{item:!0,xs:6},r.a.createElement(Te,{label:"Pause seconds",possibleValues:ye(n.pauseSeconds.min,n.pauseSeconds.max,n.pauseSeconds.step),onValueChange:function(e){var a=60*s+ +e;l("pause")(a.toString())},value:E})),r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(xe,{label:"Increment",errorText:"Should be between 0 and 10 with steps of 0.25",state:t.increment,value:a.increment,onValueChange:l("increment"),onValidityChange:i("increment"),min:n.increment.min,max:n.increment.max,step:n.increment.step})),r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(xe,{label:"Weight",errorText:"Should be between 1 and 999 with steps of 0.25",state:t.weight,value:a.weight,onValueChange:l("weight"),onValidityChange:i("weight"),min:n.weight.min,max:n.weight.max,step:n.weight.step})),r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(q,null,r.a.createElement(ue,{onClick:c}),r.a.createElement(ie,{onClick:o}),void 0!==m&&r.a.createElement(Ee,{onClick:m})))))))},Ve={name:{min:1,max:99,step:1},reps:{min:1,max:99,step:1},sets:{min:1,max:12,step:1},pauseMinutes:{min:0,max:6,step:1},pauseSeconds:{min:0,max:45,step:15},increment:{min:0,max:10,step:.25},weight:{min:1,max:999,step:.25}},je=function(e){var a,t,l=e.exercise,i=e.onClickBack,o=e.onClickSaveValidated,u=e.onClickDeleteValidated;void 0===l?(a={name:"",reps:void 0,sets:void 0,pause:0,increment:void 0,weight:void 0},t={name:y.PRIMARY,reps:y.PRIMARY,sets:y.PRIMARY,pause:y.SUCCESS,increment:y.PRIMARY,weight:y.PRIMARY}):(a=l,t={name:y.SUCCESS,reps:y.SUCCESS,sets:y.SUCCESS,pause:y.SUCCESS,increment:y.SUCCESS,weight:y.SUCCESS});var m=Object(n.useState)(a),s=Object(c.a)(m,2),E=s[0],v=s[1],g=Object(n.useState)(t),d=Object(c.a)(g,2),p=d[0],h=d[1],f=function(e){return p[e]===y.SUCCESS},b=function(){return f("name")&&f("reps")&&f("sets")&&f("increment")&&f("weight")},C=void 0===u?void 0:function(){b()&&u()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe,{exercise:E,combinedStatus:p,combinedValidityParams:Ve,onValueChange:function(e){return function(a){v(Object(ee.a)({},E,Object(X.a)({},e,a)))}},onValidityChange:function(e){return function(a){h(Object(ee.a)({},p,Object(X.a)({},e,a)))}},onClickBack:i,onClickSave:function(){b()&&o(E)},onClickDelete:C}))},Fe=t(178),Re=Object(o.a)({bigButton:{fontSize:"3rem"}}),Ie=function(e){var a=e.onClick,t=Re();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{onClick:a},r.a.createElement(Fe.a,{color:"primary",fontSize:"large",className:t.bigButton})))},Ae=function(e){var a=e.exercise,t=e.onClickBack,l=e.onClickAdd,i=e.onClickEdit,o=e.onClickDelete,u=void 0!==i,m=Object(n.useState)(!1),s=Object(c.a)(m,2),E=s[0],v=s[1],g=function(){v(!1)},d=Object(n.useState)(void 0),p=Object(c.a)(d,2),h=p[0],b=p[1],C=void 0!==h;return r.a.createElement(r.a.Fragment,null,r.a.createElement(je,{exercise:a,onClickBack:t,onClickSaveValidated:function(e){u?b(e):(l(e),t())},onClickDeleteValidated:function(){v(!0)}}),r.a.createElement(K.a,{open:E,onClose:g},r.a.createElement(Z.a,null,"Are you sure you want to delete this exercise?"),r.a.createElement(H.a,null,r.a.createElement(f.a,{onClick:function(){void 0!==o&&(o(),t())},variant:"contained",color:"primary"},"Yes"),r.a.createElement(f.a,{onClick:g,variant:"contained"},"No"))),u&&r.a.createElement(K.a,{open:C,onClose:function(){b(void 0)}},r.a.createElement(Z.a,null,"Create new or edit?"),r.a.createElement($.a,null,r.a.createElement(Q.a,null,"You can choose between creating a new exercise or editing the exercise you clicked.")),r.a.createElement(H.a,null,r.a.createElement(_,{onClick:function(){void 0!==h&&(l(h),t())}}),r.a.createElement(Ie,{onClick:function(){void 0!==h&&void 0!==i&&(i(h),t())}}))))},Be=function(e){var a=e.name,t=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{component:"span"},r.a.createElement(P.a,{fontWeight:"fontWeightBold",display:"inline"},a+": ")),r.a.createElement(u.a,{component:"span"},t))},Me=function(e){var a=e.storedExercise,t=e.onClick,n=a.exercise;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,null,r.a.createElement(D.a,{onClick:function(){t(a)}},r.a.createElement(z.a,null,r.a.createElement(W.a,{container:!0},r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(u.a,{gutterBottom:!0,variant:"h5"},n.name)),r.a.createElement(W.a,{item:!0,xs:6},r.a.createElement(Be,{name:"Reps",value:n.reps.toString()})),r.a.createElement(W.a,{item:!0,xs:6},r.a.createElement(Be,{name:"Sets",value:n.sets.toString()})),r.a.createElement(W.a,{item:!0,xs:6},r.a.createElement(Be,{name:"Pause",value:n.pause.toString()+"s"})),r.a.createElement(W.a,{item:!0,xs:6},r.a.createElement(Be,{name:"Increment",value:n.increment.toString()+"kg"})),r.a.createElement(W.a,{item:!0,xs:6},r.a.createElement(Be,{name:"Weight",value:n.weight.toString()+"kg"})))))))},Ne=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],l=a[1],i=Object(n.useState)(void 0),o=Object(c.a)(i,2),u=o[0],m=o[1],s=function(){var e=Object(n.useState)(void 0),a=Object(c.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){var e=O.auth().currentUser;if(null!==e){var a=O.firestore().collection("exercises").where("uid","==",e.uid).onSnapshot((function(e){var a=e.docs.map((function(e){return{id:e.id,exercise:e.data()}}));r(a)}));return function(){return a()}}}),[]),t}(),E=function(e){m(e),l(!0)},v=function(){l(!1)},g=function(e){console.log("Adding exercise: "),console.log(e),function(e){var a=O.auth().currentUser;if(null!==a){var t=Object(ee.a)({},e,{uid:a.uid});O.firestore().collection("exercises").add(t)}}(e)};return t?void 0===u?r.a.createElement(Ae,{onClickBack:v,onClickAdd:g}):r.a.createElement(Ae,{exercise:u.exercise,onClickBack:v,onClickAdd:g,onClickEdit:function(e){console.log("Editing exercise: "),console.log(e),function(e){var a=O.auth().currentUser;if(null!==a){var t=Object(ee.a)({},e.exercise,{uid:a.uid});O.firestore().collection("exercises").doc(e.id).update(t)}}({id:u.id,exercise:e})},onClickDelete:function(){console.log("Deleting exercise: "),console.log(u),function(e){if(null!==O.auth().currentUser)O.firestore().collection("exercises").doc(e.id).delete()}(u)}}):r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{mt:1},r.a.createElement(W.a,{container:!0,spacing:3},s&&s.map((function(e){return r.a.createElement(W.a,{item:!0,key:e.id,xs:12,sm:6,md:4,lg:4,xl:3},r.a.createElement(Me,{storedExercise:e,onClick:E}))})),r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(q,null,!s&&r.a.createElement(Y.a,null),s&&r.a.createElement(_,{onClick:function(){m(void 0),l(!0)}}))))))},Pe=t(186),Ue=Object(o.a)({container:{textAlign:"center"}}),De=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{variant:"h5"},"No content found"),r.a.createElement(u.a,{paragraph:!0},"This page does not seem to have any content. Consider returning to an other page."),r.a.createElement(f.a,{color:"primary",variant:"contained",component:S.b,to:"/custom-fit/overview"},"Overview"))},ze=function(){var e=Ue();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe.a,{className:e.container},r.a.createElement(De,null)))},We=function(e){var a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{mt:2},r.a.createElement(Pe.a,null,a)))},Ye=t(88),Je=(t(82),t(58)),Le=Object(o.a)({container:{textAlign:"center"}}),_e=function(){var e=Le();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe.a,{className:e.container},r.a.createElement(u.a,{paragraph:!0},"Please wait while you are being logged in..."),r.a.createElement(Y.a,null)))},Ge=function(){var e=Le(),a={autoUpgradeAnonymousUsers:!0,signInFlow:"popup",signInOptions:[O.auth.GoogleAuthProvider.PROVIDER_ID,Je.auth.AnonymousAuthProvider.PROVIDER_ID],callbacks:{signInFailure:function(e){if("firebaseui/anonymous-upgrade-merge-conflict"===e.code){console.log("Encountered anonymous upgrade merge conflict. ");var a=e.credential;return O.auth().signInWithCredential(a).then()}return Promise.resolve()}}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe.a,{className:e.container},r.a.createElement(u.a,{variant:"h5"},"Please sign-in:"),r.a.createElement(Ye.StyledFirebaseAuth,{uiConfig:a,firebaseAuth:O.auth()})))},qe=function(e){var a=e.children,t=Object(n.useState)(void 0),l=Object(c.a)(t,2),i=l[0],o=l[1];return Object(n.useEffect)((function(){O.auth().onAuthStateChanged((function(e){o(e),console.log("User: ",e)}))}),[]),void 0===i?r.a.createElement(r.a.Fragment,null,r.a.createElement(_e,null)):null===i?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ge,null)):r.a.createElement(r.a.Fragment,null,a)},Ke=t(187),Ze=t(188),He=t(90),$e=t(67),Qe=t(66),Xe=Object(He.a)({palette:{primary:{main:$e.a[500],dark:$e.a[800]},background:{default:$e.a[50]},text:{primary:Qe.a[600]}}});t(124);var ea=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.d,null,r.a.createElement(w.b,{exact:!0,path:"/custom-fit"},r.a.createElement(w.a,{to:"/custom-fit/overview"})),r.a.createElement(w.b,{exact:!0,path:"/custom-fit/overview"},r.a.createElement(N,null)),r.a.createElement(w.b,{exact:!0,path:"/custom-fit/exercises"},r.a.createElement(Ne,null)),r.a.createElement(w.b,null,r.a.createElement(ze,null))))},aa=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ke.a,{theme:Xe},r.a.createElement(Ze.a,null),r.a.createElement(qe,null,r.a.createElement(S.a,null,r.a.createElement(M,null),r.a.createElement(We,null,r.a.createElement(ea,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(aa,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,a,t){e.exports=t.p+"static/media/logo_gears_drawing_192.817771b7.png"}},[[102,1,2]]]);
//# sourceMappingURL=main.1537918d.chunk.js.map