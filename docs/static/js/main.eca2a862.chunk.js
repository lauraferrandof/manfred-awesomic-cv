(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.443bc79a.svg"},,,function(e){e.exports={author:{profile:[{name:"Mary Jane",image:"",birthday:"1980-04-02",publicLinks:["https://github.com/emma-martin"],roles:["Project manager"],yearsOfExperience:5}],intro:"Let's make some happy little clouds in our world.  Work on one thing at a time. Don't get carried away - we have plenty of time. Everyone is going to see things differently - and that's the way it should be. Don't hurry. Take your time and enjoy. In your world you can create anything you desire.",professionalGoals:["World Domitation Manager"],transportableSkills:["Krusty's Burguer team lead"],significantExperience:["Let's have a nice tree right here. Just let go - and fall like a little waterfall. We'll put all the little clouds in and let them dance around and have fun."],significantRelationships:[{name:"Darwin Watterson",comment:"General Darwin Raglan Caspian Ahab Poseidon Nicodemius Watterson III is the deuteragonist in The Amazing World of Gumball.",role:"General Darwin Raglan Caspian Ahab Poseidon Nicodemius Watterson III is the deuteragonist in The Amazing World of Gumball.",contact:"darwin@gumball.com",company:"Watterson SL"}]},experience:[{company:[{name:"Happy Bear Co.",roles:[{role:" Founder",from:"june 2018",until:"present",challenges:[{summary:"La- da- da- da- dah. Just be happy. We'll throw some happy little limbs on this tree.",actions:[{summary:"By now you should be quite happy about what's happening here. Get tough with it, get strong.",tools:"Git, GitHub"},{summary:"By now you should be quite happy about what's happening here. Get tough with it, get strong."}]}]}],references:[{name:"Sarah Connor",role:"CEO of Skynet",contact:"sarah@skynet.com"}]}]}],education:[{institution:"Miskatonic University",study:"Computer Science",from:"2002",until:"2004"},{institution:"Night Vale Community College",study:"Technology With Finger Quotes",from:"2000",until:"2001",achievements:["Blabla","Blibli"]}],languages:[{language:"Spanish",proficiency:["Native or bilingual"]},{language:"French Gibbering",proficiency:["Full professional"]}],miscEducation:["Scrum Master"],questionnaire:[{question:"What's your favorite color?",answer:"Black"},{question:"What's your zodiac?",answer:"Aries"}]}},function(e,t,a){e.exports=a.p+"static/media/user.cec17b86.svg"},function(e,t,a){e.exports=a(28)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),s=(a(18),a(1)),l=a(2),o=a(4),m=a(3),u=a(5),p=a(6),h=(a(20),a(10)),f=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleProfileRoles;return r.a.createElement("ul",{className:"profile__roles-list"},e.map(function(e,t){return r.a.createElement("li",{key:t,className:"author__role"},e)}))}}]),t}(n.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.profileLinks;return r.a.createElement("div",{className:"publicLinks__wrapper"},r.a.createElement("ul",{className:"publicLinks__list"},e.map(function(e,t){return r.a.createElement("li",{className:"publicLinks__list-item",key:t},r.a.createElement("a",{className:"publicLinks__list-anchor",href:e},e))})))}}]),t}(n.Component),_=a(11),E=a.n(_),O=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleProfile;return r.a.createElement(n.Fragment,null,e.map(function(e,t){var a=e.image,c=e.name,i=e.roles,s=e.birthday,l=e.yearsOfExperience,o=e.publicLinks;return r.a.createElement(n.Fragment,{key:t},r.a.createElement("div",{className:"author__basic-data"},a?r.a.createElement("div",{className:"author__image",style:{backgroundImage:"url(".concat(a,")")}}):r.a.createElement("div",{className:"author__image",style:{backgroundImage:"url(".concat(E.a,")")}}),r.a.createElement("h2",{className:"author__name"},c)),r.a.createElement(f,{sampleProfileRoles:i}),r.a.createElement("p",{className:"author__birthday"},s),r.a.createElement("p",{className:"author__yearsOfExperience"},l," years of experience"),o&&o.length&&r.a.createElement(b,{profileLinks:o}))}))}}]),t}(n.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleTransSkills;return r.a.createElement("div",{className:"transSkills__wrapper"},r.a.createElement("ul",{className:"transSkills__list"},e.map(function(e,t){return r.a.createElement("li",{key:t,className:"transSkills__item"},r.a.createElement("p",{className:"transSkills__text"},e))})))}}]),t}(n.Component),d=function(e){var t=e.sampleIntro;return r.a.createElement("div",{className:"intro__wrapper"},r.a.createElement("h3",{className:"intro__title"},"Intro"),r.a.createElement("p",{className:"intro__paragraph"},t))},y=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.relation,t=e.name,a=e.comment,n=e.role,c=e.contact,i=e.company;return r.a.createElement("li",{className:"sig-relations__item"},r.a.createElement("p",{className:"sig-relations__name-comment"},"".concat(t,", ").concat(a)),r.a.createElement("p",{className:"sig-relations__role"},n),r.a.createElement("p",{className:"sig-relations__contact-company"},c&&r.a.createElement("span",null,r.a.createElement("a",{href:"mailto: ".concat(c)},c)),i&&r.a.createElement("span",null,i)))}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleSigRelations;return r.a.createElement("div",{className:"sig-relations__wrapper"},r.a.createElement("h3",{className:"sig-relations__title"},"Significant Relationships"),r.a.createElement("ul",{className:"sig-relations__list"},e.map(function(e,t){return r.a.createElement(y,{key:t,relation:e})})))}}]),t}(n.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleSigExperience;return r.a.createElement("div",{className:"significant-exp__wrapper"},r.a.createElement("h3",{className:"significant-exp__title"},"Significant Experience"),r.a.createElement("ul",{className:"significant-exp__list"},e.map(function(e,t){return r.a.createElement("li",{className:"significant-exp__item",key:t},e)})))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleProfessionalGoals;return r.a.createElement("div",{className:"professional-goals__wrapper"},r.a.createElement("h2",{className:"professional-goals__title"},"Professional goals"),r.a.createElement("ul",{className:"professional-goals__list"},e.map(function(e,t){return r.a.createElement("li",{key:t,className:"professional-goals__item"},e)})))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleAuthor,t=e.profile,a=e.intro,c=e.professionalGoals,i=e.transportableSkills,s=e.significantExperience,l=e.significantRelationships;return r.a.createElement(n.Fragment,null,r.a.createElement(O,{sampleProfile:t}),a&&r.a.createElement(d,{sampleIntro:a}),c&&c.length&&r.a.createElement(N,{sampleProfessionalGoals:c}),i&&i.length&&r.a.createElement(j,{sampleTransSkills:i}),s&&s.length&&r.a.createElement(v,{sampleSigExperience:s}),l&&l.length&&r.a.createElement(g,{sampleSigRelations:l}))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.challengesActions;return r.a.createElement("ul",{className:"challengesActions__list"},e.map(function(e,t){return r.a.createElement("li",{key:t,className:"challengesActions__item"},r.a.createElement("p",{className:"challengesActions__item-summary"},e.summary),e.tools&&r.a.createElement("p",{className:"challengesActions__item-tools"},e.tools))}))}}]),t}(n.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.challenges;return r.a.createElement("ul",{className:"challenges__list"},e.map(function(e,t){return r.a.createElement("li",{key:t,className:"challenges__item"},r.a.createElement("p",{className:"challenges__item-summary"},e.summary),r.a.createElement(w,{challengesActions:e.actions}))}))}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleRoleItem,t=e.role,a=e.from,n=e.until,c=e.challenges;return r.a.createElement("li",{className:"role-list__item"},r.a.createElement("div",{className:"role-list__wrapper"},r.a.createElement("h3",{className:"role-list__role-name"},t),r.a.createElement("span",{className:"role-list__date"},a," \u2014 ",n)),r.a.createElement(C,{challenges:c}))}}]),t}(n.Component),I=(a(22),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.roles;return r.a.createElement("ul",{className:"role-list__list"},e.map(function(e,t){return r.a.createElement(x,{sampleRoleItem:e,key:t})}))}}]),t}(n.Component)),S=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleReferenceItem,t=e.name,a=e.role,n=e.contact;return r.a.createElement("li",{className:"reference-list__item"},r.a.createElement("div",{className:"reference-list__name"},t),r.a.createElement("div",{className:"reference-list__role"},a),r.a.createElement("a",{className:"reference-list__contact",href:"mailto: ".concat(n)},n))}}]),t}(n.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.references;return r.a.createElement("div",{className:"reference-list__wrapper"},r.a.createElement("h4",{className:"reference-list__title"},"References"),r.a.createElement("ul",{className:"reference-list__list"},e.map(function(e,t){return r.a.createElement(S,{key:t,sampleReferenceItem:e})})))}}]),t}(n.Component),P=(a(24),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.experience.company;return r.a.createElement("li",{className:"company__item"},e.map(function(e,t){var a=e.name,c=e.roles,i=e.references;return r.a.createElement(n.Fragment,{key:t},r.a.createElement("h4",{className:"company__name"},a),r.a.createElement(I,{roles:c}),i&&i.length&&r.a.createElement(L,{references:i}))}))}}]),t}(n.Component)),A=(a(26),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleExperience;return r.a.createElement("div",{className:"experience__wrapper"},r.a.createElement("h2",{className:"experience__title"},"Experience"),r.a.createElement("ul",{className:"experience__list"},e.map(function(e,t){return r.a.createElement(P,{key:t,experience:e})})))}}]),t}(n.Component)),B=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleAchievements;return r.a.createElement("ul",{className:"achievements__list"},e.map(function(e,t){return r.a.createElement("li",{key:t,className:"achievements__list-item"},e)}))}}]),t}(n.Component),q=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleEducationItem,t=e.institution,a=e.study,n=e.from,c=e.until,i=e.achievements;return r.a.createElement("li",{className:"education__list-item"},r.a.createElement("h3",{className:"education__item-institution"},t),r.a.createElement("h4",{className:"education__item-institution"},a),r.a.createElement("p",{className:"education__item-date"},n," - ",c),i&&r.a.createElement(B,{sampleAchievements:i}))}}]),t}(n.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleEducation;return r.a.createElement("div",{className:"education__wrapper"},r.a.createElement("h2",{className:"education__title"},"Education"),r.a.createElement("ul",{className:"education__list"},e.map(function(e,t){return r.a.createElement(q,{key:t,sampleEducationItem:e})})))}}]),t}(n.Component),G=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleQuestionnaire;return r.a.createElement("div",{className:"questionnaire__wrapper"},r.a.createElement("h2",{className:"questionnaire__title"},"Questionnaire"),r.a.createElement("ul",{className:"questionnaire__list"},e.map(function(e,t){return r.a.createElement("li",{key:t,className:"questionnaire__item"},r.a.createElement("p",{className:"questionnaire__item-question"},e.question),r.a.createElement("p",{className:"questionnaire__item-answer"},e.answer))})))}}]),t}(n.Component),W=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleMiscEducation;return r.a.createElement("div",{className:"miscEducation__wrapper"},r.a.createElement("h2",{className:"miscEducation__title"},"Miscellany"),r.a.createElement("ul",{className:"miscEducation__list"},e.map(function(e,t){return r.a.createElement("li",{key:t,className:"miscEducation__item"},e)})))}}]),t}(n.Component),F=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleLanguageItem,t=e.language,a=e.proficiency;return r.a.createElement("li",{className:"languages__list-item"},r.a.createElement("h3",{className:"languages__item-language"},t),r.a.createElement("p",{className:"languages__item-level"},a))}}]),t}(n.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sampleLanguages;return r.a.createElement("div",{className:"languages__wrapper"},r.a.createElement("h2",{className:"languages__title"},"Languages"),r.a.createElement("ul",{className:"languages__list"},e.map(function(e,t){return r.a.createElement(F,{key:t,sampleLanguageItem:e})})))}}]),t}(n.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sample,t=e.author,a=e.experience,n=e.education,c=e.languages,i=e.miscEducation,s=e.questionnaire;return r.a.createElement("div",{className:"cv__wrapper"},r.a.createElement(k,{sampleAuthor:t}),r.a.createElement(A,{sampleExperience:a}),r.a.createElement(R,{sampleEducation:n}),c&&c.length&&r.a.createElement(T,{sampleLanguages:c}),i&&i.length&&r.a.createElement(W,{sampleMiscEducation:i}),s&&s.length&&r.a.createElement(G,{sampleQuestionnaire:s}))}}]),t}(n.Component),D=function(e){var t=e.buttonType,a=e.styles,n=e.handleButtonClick,c=e.children;return r.a.createElement("button",{type:t,className:a,onClick:n},c)},J=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sample,a=e.handlePrintBtn;return r.a.createElement("div",{className:"preview__wrapper"},r.a.createElement(D,{buttonType:"button",styles:"preview__print-btn",handleButtonClick:a},"Print"),r.a.createElement(M,{sample:t}))}}]),t}(n.Component),Q=a(7),z=a.n(Q),H=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__container"},r.a.createElement("a",{href:"https://www.getmanfred.com"},r.a.createElement("div",{className:"logo",style:{backgroundImage:"url(".concat(z.a,")")}}))))}}]),t}(n.Component),K=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__container"},r.a.createElement("a",{href:"https://www.getmanfred.com"},r.a.createElement("div",{className:"logo",style:{backgroundImage:"url(".concat(z.a,")")}}))))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={sample:h},a.handlePrintBtn=a.handlePrintBtn.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handlePrintBtn",value:function(){window.print()}},{key:"render",value:function(){var e=this.state.sample;return r.a.createElement("div",{className:"App"},r.a.createElement(H,null),r.a.createElement("main",{className:"main"},r.a.createElement(J,{sample:e,handlePrintBtn:this.handlePrintBtn})),r.a.createElement(K,null))}}]),t}(n.Component);i.a.render(r.a.createElement(U,null),document.getElementById("root"))}],[[12,2,1]]]);
//# sourceMappingURL=main.eca2a862.chunk.js.map