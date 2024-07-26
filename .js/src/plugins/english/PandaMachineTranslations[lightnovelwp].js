var e=this&&this.__awaiter||function(e,t,a,s){return new(a||(a=Promise))((function(r,l){function i(e){try{n(s.next(e))}catch(e){l(e)}}function o(e){try{n(s.throw(e))}catch(e){l(e)}}function n(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,o)}n((s=s.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,s,r,l,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(o){return function(n){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;l&&(l=0,o[0]&&(i=0)),i;)try{if(a=1,s&&(r=2&o[0]?s.return:o[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,o[1])).done)return r;switch(s=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,s=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],s=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,n])}}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("cheerio"),s=require("htmlparser2"),r=require("@libs/fetch"),l=require("@libs/novelStatus"),i=require("@libs/defaultCover");function o(e,t){var a=e.match(/(\d+)$/);a&&a[0]&&(t.chapterNumber=parseInt(a[0]))}var n=new(function(){function n(e){var t,a;this.id=e.id,this.name=e.sourceName,this.icon="multisrc/lightnovelwp/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var s=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.1.".concat(2+s),this.options=null!==(a=e.options)&&void 0!==a?a:{},this.filters=e.filters}return n.prototype.getHostname=function(e){var t=(e=e.split("/")[2]).split(".");return t.pop(),t.join(".")},n.prototype.safeFecth=function(a,s){return e(this,void 0,void 0,(function(){var e,l,i,o,n;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(a)];case 1:if(!(e=t.sent()).ok&&1!=s)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return[4,e.text()];case 2:if(l=t.sent(),i=null===(n=null===(o=l.match(/<title>(.*?)<\/title>/))||void 0===o?void 0:o[1])||void 0===n?void 0:n.trim(),this.getHostname(a)!=this.getHostname(e.url)||i&&("Bot Verification"==i||"You are being redirected..."==i||"Un instant..."==i||"Just a moment..."==i||"Redirecting..."==i))throw new Error("Captcha error, please open in webview");return[2,l]}}))}))},n.prototype.parseNovels=function(e){var t=this,a=[];return(e.match(/<article([\s\S]*?)<\/article>/g)||[]).forEach((function(e){var s=e.match(/<a href="(.*?)".*title="(.*?)"/)||[],r=s[1],l=s[2];if(l&&r){var o=e.match(/<img.*src="(.*?)"(?:\sdata-src="(.*?)")?.*\/>/)||[];a.push({name:l,cover:o[2]||o[1]||i.defaultCover,path:r.replace(t.site,"")})}})),a},n.prototype.popularNovels=function(a,s){return e(this,arguments,void 0,(function(e,a){var s,r,l,i,o,n,c,u,v,p=a.filters,h=a.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:for(l in s=null!==(v=null===(u=this.options)||void 0===u?void 0:u.seriesPath)&&void 0!==v?v:"series/",r=this.site+s+"?page="+e,p||(p=this.filters||{}),h&&(r+="&order=latest"),p)if("object"==typeof p[l].value)for(i=0,o=p[l].value;i<o.length;i++)n=o[i],r+="&".concat(l,"=").concat(n);else p[l].value&&(r+="&".concat(l,"=").concat(p[l].value));return[4,this.safeFecth(r,!1)];case 1:return c=t.sent(),[2,this.parseNovels(c)]}}))}))},n.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,r,n,c,u,v,p,h,d,f,m,b,g,y,w,k,S,N,C;return t(this,(function(t){switch(t.label){case 0:return e=this.site,[4,this.safeFecth(e+a,!1)];case 1:return r=t.sent(),n={path:a,name:"",genres:"",summary:"",author:"",artist:"",status:"",chapters:[]},c=!1,u=!1,v=!1,p=!1,h=!1,d=!1,f=!1,m=!1,b=!1,g=!1,y=0,w=!1,k=[],S={},N=new s.Parser({onopentag:function(t,a){var s;!n.cover&&(null===(s=a.class)||void 0===s?void 0:s.includes("ts-post-image"))?(n.name=a.title,n.cover=a["data-src"]||a.src||i.defaultCover):"genxed"===a.class||"sertogenre"===a.class?c=!0:c&&"a"===t?u=!0:"div"!==t||"entry-content"!==a.class&&"description"!==a.itemprop?"spe"===a.class||"serl"===a.class?p=!0:p&&"span"===t?h=!0:"div"===t&&"sertostat"===a.class?(p=!0,h=!0,m=!0):"eplister eplisterfull"===a.class?b=!0:b&&"li"===t?g=!0:g&&("a"===t?S.path=a.href.replace(e,"").trim():"epl-num"===a.class?y=1:"epl-title"===a.class?y=2:"epl-date"===a.class?y=3:"epl-price"===a.class&&(y=4)):v=!0},ontext:function(e){var t,a;if(c)u&&(n.genres+=e+", ");else if(v)n.summary+=e.trim();else if(p){if(h){var s=e.toLowerCase().replace(":","").trim();if(d)n.author+=e||"Unknown";else if(f)n.artist+=e||"Unknown";else if(m)switch(s){case"مكتملة":case"completed":case"complété":case"completo":case"completado":case"tamamlandı":n.status=l.NovelStatus.Completed;break;case"مستمرة":case"ongoing":case"en cours":case"em andamento":case"en progreso":case"devam ediyor":n.status=l.NovelStatus.Ongoing;break;case"متوقفة":case"hiatus":case"en pause":case"hiato":case"pausa":case"pausado":case"duraklatıldı":n.status=l.NovelStatus.OnHiatus;break;default:n.status=l.NovelStatus.Unknown}switch(s){case"الكاتب":case"author":case"auteur":case"autor":case"yazar":d=!0;break;case"الحالة":case"status":case"statut":case"estado":case"durum":m=!0;break;case"الفنان":case"artist":case"artiste":case"artista":case"çizer":f=!0}}}else if(b&&g)if(1===y)o(e,S);else if(2===y)S.name=(null===(a=null===(t=e.match(RegExp("^".concat(n.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s*(.+)"))))||void 0===t?void 0:t[1])||void 0===a?void 0:a.trim())||e.trim(),S.chapterNumber||o(e,S);else if(3===y)S.releaseTime=e;else if(4===y){switch(s=e.toLowerCase().trim()){case"free":case"gratuit":case"مجاني":case"livre":case"":w=!1;break;default:w=!0}}},onclosetag:function(e){var t,a,s;c?u?u=!1:(c=!1,n.genres=null===(t=n.genres)||void 0===t?void 0:t.slice(0,-2)):v?"br"===e?n.summary+="\n":"div"===e&&(v=!1):p?h?"span"===e&&(h=!1,d&&n.author?d=!1:f&&n.artist?f=!1:m&&""!==n.status&&(m=!1)):"div"===e&&(p=!1,n.author=null===(a=n.author)||void 0===a?void 0:a.trim(),n.artist=null===(s=n.artist)||void 0===s?void 0:s.trim()):b&&(g?1===y||2===y||3===y||4===y?y=0:"li"===e&&(g=!1,S.chapterNumber||(S.chapterNumber=0),w||k.push(S),S={}):"ul"===e&&(b=!1))}}),N.write(r),N.end(),k.length&&((null===(C=this.options)||void 0===C?void 0:C.reverseChapters)&&k.reverse(),n.chapters=k),[2,n]}}))}))},n.prototype.parseChapter=function(s){return e(this,void 0,void 0,(function(){var e,r,l,i,o;return t(this,(function(t){switch(t.label){case 0:return[4,this.safeFecth(this.site+s,!1)];case 1:if(e=t.sent(),null===(l=this.options)||void 0===l?void 0:l.customJs)try{r=(0,a.load)(e),e=r.html()}catch(e){throw console.error("Error executing customJs:",e),e}return[2,(null===(o=null===(i=e.match(/<div.*class="epcontent ([\s\S]*?)<div.*class="bottomnav"/g))||void 0===i?void 0:i[0].match(/<p.*>([\s\S]*?)<\/p>/g))||void 0===o?void 0:o.join("\n"))||""]}}))}))},n.prototype.searchNovels=function(a,s){return e(this,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"page/"+s+"/?s="+a,[4,this.safeFecth(e,!0)];case 1:return r=t.sent(),[2,this.parseNovels(r)]}}))}))},n}())({id:"pandamtl",sourceSite:"https://pandamtl.com/",sourceName:"Panda Machine Translations",options:{lang:"English",reverseChapters:!0},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Action",value:"action"},{label:"Adult",value:"adult"},{label:"Adventure",value:"adventure"},{label:"Comedy",value:"comedy"},{label:"Ecchi",value:"ecchi"},{label:"Fantasy",value:"fantasy"},{label:"Harem",value:"harem"},{label:"Josei",value:"josei"},{label:"Martial Arts",value:"martial-arts"},{label:"Mature",value:"mature"},{label:"Romance",value:"romance"},{label:"School Life",value:"school-life"},{label:"Sci-fi",value:"sci-fi"},{label:"Seinen",value:"seinen"},{label:"Slice of Life",value:"slice-of-life"},{label:"Smut",value:"smut"},{label:"Sports",value:"sports"},{label:"Supernatural",value:"supernatural"},{label:"Tragedy",value:"tragedy"}]},"type[]":{type:"Checkbox",label:"Type",value:[],options:[{label:"Light Novel (KR)",value:"light-novel-kr"},{label:"Web Novel",value:"web-novel"}]},status:{type:"Picker",label:"Status",value:"",options:[{label:"All",value:""},{label:"Ongoing",value:"ongoing"},{label:"Hiatus",value:"hiatus"},{label:"Completed",value:"completed"}]},order:{type:"Picker",label:"Order by",value:"",options:[{label:"Default",value:""},{label:"A-Z",value:"title"},{label:"Z-A",value:"titlereverse"},{label:"Latest Update",value:"update"},{label:"Latest Added",value:"latest"},{label:"Popular",value:"popular"}]}}});exports.default=n;