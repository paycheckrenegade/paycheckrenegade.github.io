(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1Jpo":function(e,t,a){"use strict";var r=a("q1tI"),o=a.n(r),n=a("Wbzz"),s=a("wd/R"),p=a.n(s);a("/3mp");var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,r=e.category,s=e.description,c=this.props.data.node.fields,i=c.slug,l=c.categorySlug;return o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post__meta"},o.a.createElement("time",{className:"post__meta-time",dateTime:p()(a).format("MMMM D, YYYY")},p()(a).format("MMMM YYYY")),o.a.createElement("span",{className:"post__meta-divider"}),o.a.createElement("span",{className:"post__meta-category",key:l},o.a.createElement(n.Link,{to:l,className:"post__meta-category-link"},r))),o.a.createElement("h2",{className:"post__title"},o.a.createElement(n.Link,{className:"post__title-link",to:i},t)),o.a.createElement("p",{className:"post__description"},s),o.a.createElement(n.Link,{className:"post__readmore",to:i},"Read"))},r}(o.a.Component);t.a=c},Uvt8:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),o=a.n(r),n=a("TJpk"),s=a.n(n),p=a("ntAx"),c=a("kfNp"),i=a("1Jpo");var l=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=[],t=this.props.pageContext.tag;return this.props.data.allMarkdownRemark.edges.forEach((function(t){e.push(o.a.createElement(i.a,{data:t,key:t.node.fields.slug}))})),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"content__inner"},o.a.createElement("div",{className:"page"},o.a.createElement("h1",{className:"page__title"},'All Posts tagged as "',t,'"'),o.a.createElement("div",{className:"page__body"},e))))},r}(o.a.Component);a.d(t,"pageQuery",(function(){return d}));var m=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.tag;return o.a.createElement(p.a,null,o.a.createElement("div",null,o.a.createElement(s.a,{title:'All Posts tagged as "'+t+'" - '+e}),o.a.createElement(c.a,this.props),o.a.createElement(l,this.props)))},r}(o.a.Component),d=(t.default=m,"1727312767")}}]);
//# sourceMappingURL=component---src-templates-tag-template-jsx-ed77214fad8cbe388448.js.map