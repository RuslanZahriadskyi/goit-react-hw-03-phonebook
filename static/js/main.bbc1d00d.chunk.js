(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(12),r=n.n(o),s=(n(17),n(11)),i=n(4),l=n(5),u=n(6),m=n(8),_=n(7),b=n(9),j=n.n(b),d=n(21),f=n(2),h=n.n(f),p=n(0),O=function(t){Object(m.a)(n,t);var e=Object(_.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).contactInfo=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.handelSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,o={id:Object(d.a)(),name:a,number:c};t.reset(),t.props.onSubmit(o)},t.reset=function(){t.setState({name:"",number:""})},t.state={name:"",number:""},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsx)("div",{className:h.a.container,children:Object(p.jsxs)("form",{onSubmit:this.handelSubmit,className:h.a.form,children:[Object(p.jsxs)("label",{className:h.a.label__name,children:["Name",Object(p.jsx)("input",{type:"text",name:"name",className:h.a.label__input,pattern:"[A-Za-z]{1,}\\s[A-Za-z]{1,}",placeholder:"Format: Tomy Brait",required:!0,value:e,onChange:this.contactInfo})]}),Object(p.jsxs)("label",{className:h.a.label__number,children:["Number",Object(p.jsx)("input",{type:"tel",name:"number",className:h.a.label__input,pattern:"[+][0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}",placeholder:" Format number: +38-050-12-34-567",required:!0,value:n,onChange:this.contactInfo})]}),Object(p.jsx)("button",{type:"submit",className:h.a.button__submitForm,children:"Add contact"})]})})}}]),n}(a.Component);var x=function(t){var e=t.handlerFilter,n=t.filterValue;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:"Find contacts by name"}),Object(p.jsx)("input",{type:"text",name:"filter",value:n,onChange:e})]})},v=n(3),C=n.n(v);var S=function(t){var e=t.contacts,n=t.filterValue,a=t.deleteContact;return Object(p.jsx)("ul",{className:C.a.contacts__list,children:e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(n.toLowerCase())})).map((function(t){var e=t.name,n=t.number,c=t.id;return Object(p.jsxs)("li",{className:C.a.contact__info,children:[Object(p.jsxs)("p",{className:C.a.contact,children:[Object(p.jsxs)("span",{className:C.a.contact__name,children:[e,":"]}),Object(p.jsx)("span",{className:C.a.contact__number,children:n})]}),Object(p.jsx)("button",{className:C.a.contact__button,type:"button",onClick:function(){return a(c)},children:"Delete"})]},c)}))})},N=function(t){Object(m.a)(n,t);var e=Object(_.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).handlerFilter=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.formSubmit=function(e){var n=t.state.contacts;if(n.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return alert("".concat(e.name," is already in contacts"));if(n.some((function(t){return t.number.toLowerCase()===e.number.toLowerCase()})))return alert("".concat(e.number," is already in contacts"));var a=n.concat(e);t.setState((function(t){return Object(s.a)(Object(s.a)({},t),{},{contacts:a})}))},t.state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"+38-099-12-15-567"},{id:"id-2",name:"Hermione Kline",number:"+48-050-04-98-001"},{id:"id-3",name:"Eden Clements",number:"+42-078-79-58-520"},{id:"id-4",name:"Annie Copeland",number:"+72-098-07-27-637"}],filter:""},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;e.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:j.a.title,children:"Phonebook"}),Object(p.jsx)(O,{onSubmit:this.formSubmit}),Object(p.jsxs)("div",{className:j.a.container,children:[Object(p.jsx)("h2",{className:j.a.contacts__title,children:"Contacts"}),Object(p.jsx)(x,{handlerFilter:this.handlerFilter,filterValue:n}),Object(p.jsx)(S,{contacts:e,filterValue:n,deleteContact:this.onDeleteContact})]})]})}}]),n}(a.Component);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={container:"ContactForm_container__3f6gM",label__name:"ContactForm_label__name__3YU1U",label__number:"ContactForm_label__number__sbHSd",label__input:"ContactForm_label__input__sZPhm",form:"ContactForm_form__2nLPH",button__submitForm:"ContactForm_button__submitForm__1t6r_"}},3:function(t,e,n){t.exports={contact__info:"ContactList_contact__info__tDSgj",contacts__list:"ContactList_contacts__list__26dkt",contact:"ContactList_contact__2raux",contact__name:"ContactList_contact__name__39DtU",contact__number:"ContactList_contact__number__2YgXg",contact__button:"ContactList_contact__button__2Qmr-"}},9:function(t,e,n){t.exports={App:"App_App__11YzP",container:"App_container__1X_Vh",title:"App_title__21SnT",contacts__title:"App_contacts__title__JxG2H"}}},[[19,1,2]]]);
//# sourceMappingURL=main.bbc1d00d.chunk.js.map