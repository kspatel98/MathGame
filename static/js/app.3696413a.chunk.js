(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{49:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(11),s=n.n(a),r=n(17),l=n(5),d=n(9),i=n(18),c=n(7),o=n(1),u=n(41),j=n(2);function b(){var e=Object(o.useState)(""),t=s()(e,2),n=t[0],a=t[1],l=Object(o.useState)(""),b=s()(l,2),g=b[0],h=b[1],p=Object(o.useState)(""),x=s()(p,2),O=x[0],m=x[1],y=Object(o.useState)("Login"),S=s()(y,2),L=S[0],k=S[1],w=Object(o.useState)(""),C=s()(w,2),P=C[0],T=C[1],I=Object(o.useState)(""),U=s()(I,2),R=U[0],A=U[1],M=Object(o.useState)(!1),W=s()(M,2),q=W[0],v=W[1],E=Object(o.useState)(""),J=s()(E,2),z=J[0],B=J[1],D=Object(o.useState)(0),F=s()(D,2),G=F[0],H=F[1],K=Object(o.useState)(0),N=s()(K,2),Q=N[0],V=N[1],X=Object(o.useState)(""),Y=s()(X,2),Z=Y[0],$=Y[1],_=Object(o.useState)(0),ee=s()(_,2),te=ee[0],ne=ee[1],ae=0,se=0;return 0==q?"Login"==L?Object(j.jsx)(c.default,{style:f.container,children:Object(j.jsxs)(c.default,{style:f.login,children:[Object(j.jsx)(d.default,{style:f.heading,children:"Log-In"}),Object(j.jsxs)(c.default,{style:{display:"inline",padding:10},children:[Object(j.jsx)("label",{children:"Username:"}),Object(j.jsx)(i.default,{placeholder:"Username",onChangeText:function(e){return a(e)},style:{border:"2px solid black",borderRadius:15,paddingLeft:5,marginLeft:5}})]}),Object(j.jsxs)(c.default,{style:{display:"inline",padding:10},children:[Object(j.jsx)("label",{children:"Password:"}),Object(j.jsx)(i.default,{secureTextEntry:"true",onChangeText:function(e){return h(e)},placeholder:"Password",style:{border:"2px solid black",borderRadius:15,paddingLeft:5,marginLeft:5}})]}),Object(j.jsx)(d.default,{style:{color:R},children:P}),Object(j.jsx)(r.default,{title:"Log-In",onPress:function(){u.default.post("https://mathgame-pjp3.onrender.com/login",{username:n,password:g}).then((function(e){console.log(e.data[0]),"Incorrect username and/or password!"==e.data[0]?(T(e.data[0]),A("red")):"null input"==e.data?(T("Input fields can not be null. All fields are required.."),A("red")):(T("User has been logged in successfully."),A("green"),v(!0),ne(e.data[1]))}))},style:{padding:5}}),Object(j.jsx)(d.default,{style:{textAlign:"center"},children:"OR"}),Object(j.jsx)(r.default,{title:"Sign-Up",onPress:function(){T(""),a(""),h(""),k("Signup")},style:{padding:5}})]})}):Object(j.jsx)(c.default,{style:f.container,children:Object(j.jsxs)(c.default,{style:f.login,children:[Object(j.jsx)(d.default,{style:f.heading,children:"Sign-Up"}),Object(j.jsxs)(c.default,{style:{display:"inline",padding:10},children:[Object(j.jsx)("label",{children:"Username:"}),Object(j.jsx)(i.default,{placeholder:"Username",onChangeText:function(e){return a(e)},style:{border:"2px solid black",borderRadius:15,paddingLeft:5,marginLeft:5}})]}),Object(j.jsxs)(c.default,{style:{display:"inline",padding:10},children:[Object(j.jsx)("label",{children:"Password:"}),Object(j.jsx)(i.default,{secureTextEntry:"true",onChangeText:function(e){return h(e)},placeholder:"Password",style:{border:"2px solid black",borderRadius:15,paddingLeft:5,marginLeft:5}})]}),Object(j.jsxs)(c.default,{style:{display:"inline",padding:10},children:[Object(j.jsx)("label",{children:"Confirm Password:"}),Object(j.jsx)(i.default,{secureTextEntry:"true",onChangeText:function(e){return m(e)},placeholder:"Confirm Password",style:{border:"2px solid black",borderRadius:15,paddingLeft:5,marginLeft:5}})]}),Object(j.jsx)(d.default,{style:{color:R},children:P}),Object(j.jsx)(r.default,{title:"Sign-Up",onPress:function(){u.default.post("https://mathgame-pjp3.onrender.com/register",{username:n,password:g,cpassword:O}).then((function(e){console.log(e),"error:null"==e.data?(T("User has been registered successfully."),A("green")):"registered"==e.data?(T("This account has already been registered!"),A("red")):"username taken"==e.data?(T("This username is already taken! Try other username"),A("red")):"does not match"==e.data?(T("Password and Confirm Password does not match.."),A("red")):"null input"==e.data?(T("Input fields can not be null. All fields are required.."),A("red")):(T(e),A("red"))}))},style:{padding:5}}),Object(j.jsx)(d.default,{style:{textAlign:"center"},children:"OR"}),Object(j.jsx)(r.default,{title:"Log-In",onPress:function(){T(""),a(""),h(""),k("Login")},style:{padding:5}})]})}):Object(j.jsxs)(c.default,{style:[f.container,{border:"2px solid black",margin:50}],children:[Object(j.jsxs)(d.default,{style:f.heading,children:["Welcome ",n]}),Object(j.jsx)(d.default,{style:f.heading,children:te}),Object(j.jsxs)(c.default,{children:[Object(j.jsx)(r.default,{title:"Start the game",onPress:function(){ae=Math.floor(100*Math.random())+1,se=Math.floor(100*Math.random())+1,B(ae+" + "+se),$(""),H(ae+se)}}),Object(j.jsx)(d.default,{children:z}),Object(j.jsx)(i.default,{style:{border:"2px solid black",margin:5},onChangeText:function(e){return V(parseInt(e))}}),Object(j.jsx)(d.default,{children:Z}),Object(j.jsx)(r.default,{title:"Check the answer",onPress:function(){Q==G?""!=Z&&"Wrong!"!=Z||($("Correct"),u.default.post("https://mathgame-pjp3.onrender.com/score",{score:10}).then((function(e){console.log(e.data.num),ne(parseInt(e.data.num))}))):$("Wrong!")}}),Object(j.jsx)(d.default,{children:"Press Start the game button for next question or start the game."})]})]})}var f=l.default.create({container:{flex:1,backgroundColor:"lightblue",alignItems:"center",justifyContent:"center"},login:{backgroundColor:"lightgreen",alignItems:"left",justifyContent:"center",border:"2px solid black",padding:100},heading:{fontSize:"40px",fontWeight:"bold",marginBottom:40,textAlign:"center"}})},65:function(e,t,n){e.exports=n(92)}},[[65,1,2]]]);
//# sourceMappingURL=app.3696413a.chunk.js.map