(this["webpackJsonpusers-list"]=this["webpackJsonpusers-list"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),s=a.n(i),c=a(25),o=(a(91),a(15)),l=(a(92),a(2)),u=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"You can go to:"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:"/users",children:"Users List"})}),Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:"/users/create",children:"Add new user"})}),Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:"/login",children:"Quit"})})]})]})},j=a(11),b=a(6),d=a(152),O=a(157),m=a(155),h=a(153),p=a(154),x=a(156),f=a(73),g=a.n(f),v=a(74),w=a.n(v),C=a(106),N=a(59),y=a.n(N),T=a(58),P=a.n(T),k=a(9),L=a(5),E={users:{333333:{id:333333,firstName:"Semen",lastName:"Semenov",position:"trainee"},222222:{id:222222,firstName:"Petro",lastName:"Petrov",position:"worker on zavod"},444444:{id:444444,firstName:"Kiril",lastName:"Kirilov",position:"designer"},111111:{id:111111,firstName:"Ivan",lastName:"Ivanov",position:"worker"}}},S={context:E,setContext:function(){throw new Error("Please add the UsersContextxProvider to your page!")}},B=r.a.createContext(S),U=function(e){var t=e.children,a=Object(n.useState)(E),r=Object(j.a)(a,2),i=r[0],s=r[1];return Object(l.jsx)(B.Provider,{value:{context:i,setContext:s},children:t})},z=function(){var e=Object(n.useContext)(B),t=e.context,a=e.setContext,r=Object(n.useCallback)((function(e){a((function(t){return Object(L.a)(Object(L.a)({},t),{},{users:Object(L.a)(Object(L.a)({},t.users),{},Object(k.a)({},e.id,e))})}))}),[a]),i=Object(n.useCallback)((function(e){a((function(t){var a=Object(L.a)({},t.users);return delete a[e],Object(L.a)(Object(L.a)({},t),{},{users:a})}))}),[a]);return Object(L.a)(Object(L.a)({},t),{},{addNewUser:r,deleteUser:i})},A=Object(b.a)((function(e){return{root:{width:"100%",marginTop:e.spacing.unit,overflowX:"auto",backgroundColor:"transparent"},table:{minWidth:700},head:{fontSize:20},body:{fontSize:16}}}))((function(e){var t=e.classes,a=Object(o.g)(),i="sort-by-first-name-up",s="sort-by-first-name-down",c="sort-by-last-name-up",u="sort-by-last-name-down",b="sort-by-position-up",f="sort-by-position-down",v={sortByFirstNameUp:"primary",sortByFirstNameDown:"default",sortByLastNameUp:"default",sortByLastNameDown:"default",sortByPositionUp:"default",sortByPositionDown:"default"},N=z(),T=N.users,k=N.deleteUser,L=Object(n.useState)(i),E=Object(j.a)(L,2),S=E[0],B=E[1],U=Object(n.useState)(Object.values(T)),A=Object(j.a)(U,2),I=A[0],R=A[1],F=function(e,t,a){return e.sort((function(e,n){return"up"===t?e[a].toLowerCase()>n[a].toLowerCase()?1:e[a].toLowerCase()<n[a].toLowerCase()?-1:0:e[a].toLowerCase()<n[a].toLowerCase()?1:e[a].toLowerCase()>n[a].toLowerCase()?-1:0})),e},D=Object(n.useMemo)((function(){switch(function(e){for(var t in e)e.hasOwnProperty(t)&&(e[t]="default")}(v),S){case i:return v.sortByFirstNameUp="primary",F(I,"up","firstName");case s:return v.sortByFirstNameDown="primary",F(I,"down","firstName");case c:return v.sortByLastNameUp="primary",F(I,"up","lastName");case u:return v.sortByLastNameDown="primary",F(I,"down","lastName");case b:return v.sortByPositionUp="primary",F(I,"up","position");case f:return v.sortByPositionDown="primary",F(I,"down","position");default:return I}}),[S,I]),q=function(e){k(e.currentTarget.value)},G=function(e){a.push("/users/".concat(e.currentTarget.value))};return r.a.useEffect((function(){T.search?R(Object.values(T).filter((function(e){return!!e.firstName&&(e.firstName.toLowerCase().includes(T.search.name.toLowerCase())||e.lastName.toLowerCase().includes(T.search.name.toLowerCase()))}))):R(Object.values(T))}),[T]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(C.a,{className:t.root,children:Object(l.jsxs)(d.a,{className:t.table,children:[Object(l.jsx)(h.a,{children:Object(l.jsxs)(p.a,{children:[Object(l.jsxs)(m.a,{className:t.head,align:"center",children:[Object(l.jsx)("span",{children:"First Name"}),Object(l.jsx)(x.a,{"aria-label":"sort",value:i,className:t.margin,size:"small",color:v.sortByFirstNameUp,onClick:function(){return B(i)},children:Object(l.jsx)(P.a,{fontSize:"inherit"})}),Object(l.jsx)(x.a,{"aria-label":"sort",value:s,className:t.margin,size:"small",color:v.sortByFirstNameDown,onClick:function(){return B(s)},children:Object(l.jsx)(y.a,{fontSize:"inherit"})})]}),Object(l.jsxs)(m.a,{className:t.head,align:"center",children:[Object(l.jsx)("span",{children:"Last Name"}),Object(l.jsx)(x.a,{"aria-label":"sort",value:c,className:t.margin,size:"small",color:v.sortByLastNameUp,onClick:function(){return B(c)},children:Object(l.jsx)(P.a,{fontSize:"inherit"})}),Object(l.jsx)(x.a,{"aria-label":"sort",value:u,className:t.margin,size:"small",color:v.sortByLastNameDown,onClick:function(){return B(u)},children:Object(l.jsx)(y.a,{fontSize:"inherit"})})]}),Object(l.jsxs)(m.a,{className:t.head,align:"center",children:[Object(l.jsx)("span",{children:"Position"}),Object(l.jsx)(x.a,{"aria-label":"sort",value:b,className:t.margin,size:"small",color:v.sortByPositionUp,onClick:function(){return B(b)},children:Object(l.jsx)(P.a,{fontSize:"inherit"})}),Object(l.jsx)(x.a,{"aria-label":"sort",value:f,className:t.margin,size:"small",color:v.sortByPositionDown,onClick:function(){return B(f)},children:Object(l.jsx)(y.a,{fontSize:"inherit"})})]}),Object(l.jsx)(m.a,{align:"center"})]})}),Object(l.jsx)(O.a,{children:D.map((function(e){return Object(l.jsxs)(p.a,{children:[Object(l.jsx)(m.a,{className:t.body,align:"center",children:e.firstName}),Object(l.jsx)(m.a,{className:t.body,align:"center",children:e.lastName}),Object(l.jsx)(m.a,{className:t.body,align:"center",children:e.position}),Object(l.jsxs)(m.a,{align:"right",children:[Object(l.jsx)(x.a,{"aria-label":"edit",value:e.id,onClick:G,children:Object(l.jsx)(g.a,{})}),Object(l.jsx)(x.a,{"aria-label":"delete",value:e.id,onClick:q,children:Object(l.jsx)(w.a,{})})]})]},e.id)}))})]})})})})),I=a(158),R=a(166),F=function(e){var t=e.onTextChange,a=e.label,n=e.inputRef;return Object(l.jsx)(R.a,{id:"outlined-with-placeholder-".concat(a),label:a,margin:"normal",variant:"outlined",inputRef:n,onChange:t})};function D(){var e=Object(n.useState)({firstName:"",lastName:"",position:""}),t=Object(j.a)(e,2),a=t[0],r=t[1],i=[1,2,3],s=function(e,t){i[t]=e},c=z().addNewUser,o=Object(n.useState)(!0),u=Object(j.a)(o,2),b=u[0],d=u[1],O=function(e,t){r((function(a){return Object(L.a)(Object(L.a)({},a),{},Object(k.a)({},t,e.target.value))}))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Add new user"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(F,{label:"First name",inputRef:function(e){return s(e,0)},onTextChange:function(e){return O(e,"firstName")}}),Object(l.jsx)(F,{label:"Last name",inputRef:function(e){return s(e,1)},onTextChange:function(e){return O(e,"lastName")}}),Object(l.jsx)(F,{label:"Position",inputRef:function(e){return s(e,2)},onTextChange:function(e){return O(e,"position")}})]}),b?Object(l.jsx)(l.Fragment,{}):Object(l.jsx)("p",{children:"Enter valid User's Data"}),Object(l.jsx)("div",{children:Object(l.jsx)(I.a,{variant:"contained",onClick:function(){a&&a.firstName&&a.lastName&&a.position?(c(Object(L.a)({id:Date.now()},a)),i.forEach((function(e){e.value=""})),d(!0)):d(!1)},children:"Confirm!"})})]})}var q=function(){var e=Object(o.g)(),t=Object(o.h)(),a=z(),n=a.users,i=a.deleteUser,s=a.addNewUser,c=t.pathname.split("/"),u=c[c.length-1],b=r.a.useState(n[u]),d=Object(j.a)(b,2),O=d[0],m=d[1],h=function(e,t){m((function(a){return Object(L.a)(Object(L.a)({},a),{},Object(k.a)({},t,e.target.value))}))};return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{children:["Edit ",O.firstName,"'s data"]}),Object(l.jsx)(R.a,{id:"outlined-helperText-firstName",label:"First Name",defaultValue:O.firstName,variant:"outlined",onChange:function(e){return h(e,"firstName")}}),Object(l.jsx)(R.a,{id:"outlined-helperText-lastName",label:"Larst Name",defaultValue:O.lastName,variant:"outlined",onChange:function(e){return h(e,"lastName")}}),Object(l.jsx)(R.a,{id:"outlined-helperText-position",label:"Position",defaultValue:O.position,variant:"outlined",onChange:function(e){return h(e,"position")}}),Object(l.jsx)(I.a,{style:{height:"55px"},variant:"contained",onClick:function(){i(O.id),s(Object(L.a)({id:O},O)),e.push("/users")},children:"Save"})]})},G=a(159),M=a(167),V=a(160),W=a(161),H=a(168),J={admins:{11:{id:11,email:"11@i.ua",pass:"1234"},22:{id:22,email:"22@i.ua",pass:"1234"},33:{id:33,email:"33@i.ua",pass:"1234"}}},K={context:J,setContext:function(){throw new Error("Please add the AdminsContextProvider to your page")}},Q=r.a.createContext(K),X=function(e){var t=e.children,a=Object(n.useState)(J),r=Object(j.a)(a,2),i=r[0],s=r[1];return Object(l.jsx)(Q.Provider,{value:{context:i,setContext:s},children:t})},Y=function(){var e=Object(n.useContext)(Q),t=e.context,a=e.setContext,r=Object(n.useCallback)((function(e){a((function(t){return Object(L.a)(Object(L.a)({},t),{},{admins:Object(L.a)(Object(L.a)({},t.admins),{},Object(k.a)({},e.id,e))})}))}),[a]),i=Object(n.useCallback)((function(e){a((function(t){var a=Object(L.a)({},t.admins);return delete a[e],Object(L.a)(Object(L.a)({},t),{},{admins:a})}))}),[a]);return Object(L.a)(Object(L.a)({},t),{},{addNewAdmin:r,deleteAdmin:i})},$=Object(G.a)({paperRoot:{margin:"10% auto",boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)",background:"transparent"},button:{margin:"10px 0px 20px 0px",width:"30%"},input:{width:"60%"}}),Z=function(){var e=Object(o.g)(),t=Y(),a=t.admins,i=t.addNewAdmin,s=t.deleteAdmin;a.CurrentAdmin&&s("CurrentAdmin");var c=$(),u=r.a.useState(0),b=Object(j.a)(u,2),d=b[0],O=b[1],m=Object(n.useState)({helperTextEmail:"",helperTextPass:"",helperTextPassConfirm:""}),h=Object(j.a)(m,2),p=h[0],x=h[1],f=function(e){var t;e.target.value?(t=e.target.value,/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(t)?(q((function(t){return Object(L.a)(Object(L.a)({},t),{},{email:e.target.value})})),x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextEmail:""})}))):x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextEmail:"Enter a valid email"})}))):x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextEmail:"Enter an email"})}))},g=Object(n.useState)(),v=Object(j.a)(g,2),w=v[0],N=void 0===w?{}:w,y=v[1],T=function(e,t){y((function(a){return Object(L.a)(Object(L.a)({},a),{},Object(k.a)({},t,e.target.value))}))},P=z().addNewUser,E=Object(n.useState)({firstName:"",lastName:"",position:""}),S=Object(j.a)(E,2),B=S[0],U=S[1],A=Object(n.useState)({email:"",pass:"",passConfirmed:!1}),F=Object(j.a)(A,2),D=F[0],q=F[1],G=Object(n.useState)(!0),J=Object(j.a)(G,2),K=J[0],Q=J[1],X=Date.now(),Z=function(e,t){U((function(a){return Object(L.a)(Object(L.a)({},a),{},Object(k.a)({},t,e.target.value))}))};return Object(l.jsx)("section",{style:{textAlign:"center"},children:Object(l.jsx)("div",{style:{margin:"0 auto",display:"table",width:"40%"},children:Object(l.jsxs)(C.a,{className:c.paperRoot,children:[Object(l.jsxs)(M.a,{value:d,onChange:function(e,t){O(t)},indicatorColor:"primary",textColor:"primary",centered:!0,variant:"fullWidth",children:[Object(l.jsx)(V.a,{label:"LOGIN"}),Object(l.jsx)(V.a,{label:"REGISTER"})]}),d?Object(l.jsx)(l.Fragment,{}):Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)(R.a,{className:c.input,required:!0,id:"outlined-required-email",error:!!p.helperTextEmail,helperText:p.helperTextEmail,label:"Email",type:"email",variant:"outlined",margin:"normal",onBlur:function(e){return f(e)},onChange:function(e){return T(e,"email")}})}),Object(l.jsx)("div",{children:Object(l.jsx)(R.a,{className:c.input,id:"outlined-password-input-pass",error:!!p.helperTextPass,helperText:p.helperTextPass,label:"Password",type:"password",autoComplete:"current-password",variant:"outlined",margin:"normal",onBlur:function(e){e.target.value?x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextPass:""})})):x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextPass:"Enter password"})}))},onChange:function(e){return T(e,"pass")}})}),Object(l.jsx)("div",{children:Object(l.jsx)(I.a,{className:c.button,variant:"contained",onClick:function(){if(N.email&&N.pass){var t=Object.values(a).find((function(e){return e.email===N.email&&e.pass===N.pass}));t?(i(Object(L.a)(Object(L.a)({},t),{},{id:"CurrentAdmin",currentId:t.id})),e.push("/")):x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextEmail:"We don't know you!"})}))}},children:"Enter"})})]}),d?Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(R.a,{required:!0,error:!!p.helperTextEmail,helperText:p.helperTextEmail,id:"outlined-required-email",label:"Email",variant:"outlined",margin:"normal",onBlur:function(e){return f(e)}}),Object(l.jsx)(R.a,{id:"outlined-password-input-pass",label:"Password",type:"password",autoComplete:"new-password",variant:"outlined",margin:"normal",error:!!p.helperTextPass,helperText:p.helperTextPass,onChange:function(e){return t=e,a="pass",q((function(e){return Object(L.a)(Object(L.a)({},e),{},Object(k.a)({},a,t.target.value))})),void("pass"===a&&x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextPass:""})})));var t,a}}),Object(l.jsx)(R.a,{id:"outlined-password-input-pass-confirm",label:"Confirm password",type:"password",autoComplete:"new-password",variant:"outlined",margin:"normal",error:!!p.helperTextPassConfirm,helperText:p.helperTextPassConfirm,onBlur:function(e){return t=e,void(D.pass?t.target.value?D.pass===t.target.value?(x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextPass:"",helperTextPassConfirm:""})})),q((function(e){return Object(L.a)(Object(L.a)({},e),{},{passConfirmed:!0})}))):(x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextPassConfirm:"Passwords are not the same"})})),q((function(e){return Object(L.a)(Object(L.a)({},e),{},{passConfirmed:!1})}))):x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextPassConfirm:"Enter confirm password"})})):x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextPass:"Enter password"})})));var t}})]}),Object(l.jsx)("div",{children:Object(l.jsx)(W.a,{control:Object(l.jsx)(H.a,{checked:K,onChange:function(){Q(!K)},name:"checkedB",color:"primary"}),label:"Add me to the users list"})}),Object(l.jsxs)("div",{style:{visibility:K?"visible":"hidden"},children:[Object(l.jsx)(R.a,{id:"outlined-required-first-name",label:"First Name",variant:"outlined",margin:"normal",onChange:function(e){return Z(e,"firstName")}}),Object(l.jsx)(R.a,{id:"outlined-required-last-name",label:"Last Name",variant:"outlined",margin:"normal",error:!!p.helperTextLastName,helperText:p.helperTextLastName,onChange:function(e){return Z(e,"lastName")}}),Object(l.jsx)(R.a,{id:"outlined-required-position",label:"Position",variant:"outlined",margin:"normal",error:!!p.helperTextPosition,helperText:p.helperTextPosition,onChange:function(e){return Z(e,"position")}})]}),Object(l.jsx)("div",{children:Object(l.jsx)(I.a,{className:c.button,variant:"contained",onClick:function(){D.email?D.pass?(x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextPass:""})})),D.passConfirmed?K?B.firstName&&(B.lastName?B.position?(x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextLastName:"",helperTextPosition:""})})),P(Object(L.a)({id:X},B)),i({id:X,email:D.email,pass:D.pass}),i({id:"CurrentAdmin",email:D.email,pass:D.pass,currentId:X}),e.push("/")):x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextPosition:"Enter your Position"})})):x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextLastName:"Enter your Last Name"})}))):(i({id:X,email:D.email,pass:D.pass}),e.push("/")):x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextPassConfirm:"Enter confirm password"})}))):x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextPass:"Enter password"})})):x((function(e){return Object(L.a)(Object(L.a)({},e),{},{helperTextEmail:"Enter email"})}))},children:"Register"})})]}):Object(l.jsx)(l.Fragment,{})]})})})},_=a(13),ee=a(162),te=a(163),ae=a(49),ne=a(80),re=a(170),ie=a(75),se=a.n(ie),ce=a(164),oe=a(165),le=a(76),ue=a.n(le),je=a(78),be=a.n(je),de=a(77),Oe=a.n(de),me=a(79),he=a.n(me),pe=a(169),xe=Object(G.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.success.light},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},search:Object(k.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(_.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(_.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(k.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),fe=Object(b.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(l.jsx)(ne.a,Object(L.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),ge=Object(b.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.success.light,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(re.a),ve=function(){var e=r.a.useState(null),t=Object(j.a)(e,2),a=t[0],i=t[1],s=function(e){e&&(i(null),O.push(e))},c=z(),u=c.addNewUser,b=c.deleteUser,d=xe(),O=Object(o.g)(),m=Object(o.h)(),h=Y().admins,p=Object(n.useState)("true"===localStorage.getItem("isLoggedIn")?"logout":"login"),f=Object(j.a)(p,2),g=f[0],v=f[1],w=Object(n.useState)(),C=Object(j.a)(w,2),N=C[0],y=C[1];return Object(n.useEffect)((function(){v((function(){return h.CurrentAdmin?"logout":"login"}))}),[h]),Object(n.useEffect)((function(){var e;if(-1!==m.pathname.search("/users/")&&"/users/create"!==m.pathname)e="Editing User data";else switch(m.pathname){case"/":e="Home Page";break;case"/login":e="LogIn";break;case"/register":e="Register";break;case"/users":e="Users List";break;case"/users/create":e="Add New User";break;default:e=m.pathname}y((function(){return e}))}),[m]),Object(l.jsx)("div",{children:Object(l.jsx)(ee.a,{position:"static",className:d.root,children:Object(l.jsxs)(te.a,{children:[Object(l.jsx)(x.a,{edge:"start",className:d.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){i(e.currentTarget)},children:Object(l.jsx)(se.a,{})}),Object(l.jsxs)(fe,{id:"customized-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:function(){i(null)},children:[Object(l.jsxs)(ge,{onClick:function(){return s("/")},children:[Object(l.jsx)(ce.a,{children:Object(l.jsx)(ue.a,{fontSize:"small"})}),Object(l.jsx)(oe.a,{primary:"Home"})]}),Object(l.jsxs)(ge,{onClick:function(){return s("/users")},children:[Object(l.jsx)(ce.a,{children:Object(l.jsx)(Oe.a,{fontSize:"small"})}),Object(l.jsx)(oe.a,{primary:"Users List"})]}),Object(l.jsxs)(ge,{onClick:function(){return s("/users/create")},children:[Object(l.jsx)(ce.a,{children:Object(l.jsx)(be.a,{fontSize:"small"})}),Object(l.jsx)(oe.a,{primary:"Add new user"})]})]}),Object(l.jsx)(ae.a,{variant:"h6",className:d.title,children:"Users List App: ".concat(N)}),"Users List"===N?Object(l.jsxs)("div",{className:d.search,children:[Object(l.jsx)("div",{className:d.searchIcon,children:Object(l.jsx)(he.a,{})}),Object(l.jsx)(pe.a,{placeholder:"Search\u2026",classes:{root:d.inputRoot,input:d.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){var t;(t=e).target.value?u({id:"search",name:t.target.value}):b("search")}})]}):Object(l.jsx)(l.Fragment,{}),Object(l.jsx)(I.a,{color:"inherit",onClick:function(){"logout"===g&&O.push("/login")},children:g})]})})})},we=a(3),Ce=["children"],Ne=function(e){var t=e.children,a=Object(we.a)(e,Ce),n=!!Y().admins.CurrentAdmin;return Object(l.jsx)(o.b,Object(L.a)(Object(L.a)({},a),{},{render:function(){return n?t:Object(l.jsx)(o.a,{to:"/login"})}}))},ye=function(){return Object(l.jsx)(X,{children:Object(l.jsxs)(U,{children:[Object(l.jsx)(ve,{}),Object(l.jsxs)(o.d,{children:[Object(l.jsx)(Ne,{exact:!0,path:"/",children:Object(l.jsx)(u,{})}),Object(l.jsx)(Ne,{exact:!0,path:"/users",children:Object(l.jsx)(A,{})}),Object(l.jsx)(Ne,{exact:!0,path:"/users/create",children:Object(l.jsx)(D,{})}),Object(l.jsx)(Ne,{exact:!0,path:"/users/:id",children:Object(l.jsx)(q,{})}),Object(l.jsx)(o.b,{path:"/login",component:Z})]})]})})};s.a.render(Object(l.jsx)(c.a,{basename:"/",children:Object(l.jsx)(ye,{})}),document.getElementById("root"))},91:function(e,t,a){},92:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.d60392d7.chunk.js.map