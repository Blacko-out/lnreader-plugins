var e=this&&this.__awaiter||function(e,a,t,l){return new(t||(t=Promise))((function(i,r){function s(e){try{n(l.next(e))}catch(e){r(e)}}function o(e){try{n(l.throw(e))}catch(e){r(e)}}function n(e){var a;e.done?i(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(s,o)}n((l=l.apply(e,a||[])).next())}))},a=this&&this.__generator||function(e,a){var t,l,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(o){return function(n){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;r&&(r=0,o[0]&&(s=0)),s;)try{if(t=1,l&&(i=2&o[0]?l.return:o[0]?l.throw||((i=l.return)&&i.call(l),0):l.next)&&!(i=i.call(l,o[1])).done)return i;switch(l=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,l=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=a.call(e,s)}catch(e){o=[6,e],l=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,n])}}};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("cheerio"),l=require("htmlparser2"),i=require("@libs/fetch"),r=require("@libs/novelStatus"),s=require("@libs/defaultCover");function o(e,a){var t=e.match(/(\d+)$/);t&&t[0]&&(a.chapterNumber=parseInt(t[0]))}var n=new(function(){function n(e){var a,t;this.id=e.id,this.name=e.sourceName,this.icon="multisrc/lightnovelwp/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var l=(null===(a=e.options)||void 0===a?void 0:a.versionIncrements)||0;this.version="1.1.".concat(2+l),this.options=null!==(t=e.options)&&void 0!==t?t:{},this.filters=e.filters}return n.prototype.getHostname=function(e){var a=(e=e.split("/")[2]).split(".");return a.pop(),a.join(".")},n.prototype.safeFecth=function(t,l){return e(this,void 0,void 0,(function(){var e,r,s,o,n;return a(this,(function(a){switch(a.label){case 0:return[4,(0,i.fetchApi)(t)];case 1:if(!(e=a.sent()).ok&&1!=l)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return[4,e.text()];case 2:if(r=a.sent(),s=null===(n=null===(o=r.match(/<title>(.*?)<\/title>/))||void 0===o?void 0:o[1])||void 0===n?void 0:n.trim(),this.getHostname(t)!=this.getHostname(e.url)||s&&("Bot Verification"==s||"You are being redirected..."==s||"Un instant..."==s||"Just a moment..."==s||"Redirecting..."==s))throw new Error("Captcha error, please open in webview");return[2,r]}}))}))},n.prototype.parseNovels=function(e){var a=this,t=[];return(e.match(/<article([\s\S]*?)<\/article>/g)||[]).forEach((function(e){var l=e.match(/<a href="(.*?)".*title="(.*?)"/)||[],i=l[1],r=l[2];if(r&&i){var o=e.match(/<img.*src="(.*?)"(?:\sdata-src="(.*?)")?.*\/>/)||[];t.push({name:r,cover:o[2]||o[1]||s.defaultCover,path:i.replace(a.site,"")})}})),t},n.prototype.popularNovels=function(t,l){return e(this,arguments,void 0,(function(e,t){var l,i,r,s,o,n,u,c,v,h=t.filters,p=t.showLatestNovels;return a(this,(function(a){switch(a.label){case 0:for(r in l=null!==(v=null===(c=this.options)||void 0===c?void 0:c.seriesPath)&&void 0!==v?v:"series/",i=this.site+l+"?page="+e,h||(h=this.filters||{}),p&&(i+="&order=latest"),h)if("object"==typeof h[r].value)for(s=0,o=h[r].value;s<o.length;s++)n=o[s],i+="&".concat(r,"=").concat(n);else h[r].value&&(i+="&".concat(r,"=").concat(h[r].value));return[4,this.safeFecth(i,!1)];case 1:return u=a.sent(),[2,this.parseNovels(u)]}}))}))},n.prototype.parseNovel=function(t){return e(this,void 0,void 0,(function(){var e,i,n,u,c,v,h,p,f,b,d,m,g,w,y,k,N,S,x;return a(this,(function(a){switch(a.label){case 0:return e=this.site,[4,this.safeFecth(e+t,!1)];case 1:return i=a.sent(),n={path:t,name:"",genres:"",summary:"",author:"",artist:"",status:"",chapters:[]},u=!1,c=!1,v=!1,h=!1,p=!1,f=!1,b=!1,d=!1,m=!1,g=!1,w=0,y=!1,k=[],N={},S=new l.Parser({onopentag:function(a,t){var l;!n.cover&&(null===(l=t.class)||void 0===l?void 0:l.includes("ts-post-image"))?(n.name=t.title,n.cover=t["data-src"]||t.src||s.defaultCover):"genxed"===t.class||"sertogenre"===t.class?u=!0:u&&"a"===a?c=!0:"div"!==a||"entry-content"!==t.class&&"description"!==t.itemprop?"spe"===t.class||"serl"===t.class?h=!0:h&&"span"===a?p=!0:"div"===a&&"sertostat"===t.class?(h=!0,p=!0,d=!0):"eplister eplisterfull"===t.class?m=!0:m&&"li"===a?g=!0:g&&("a"===a?N.path=t.href.replace(e,"").trim():"epl-num"===t.class?w=1:"epl-title"===t.class?w=2:"epl-date"===t.class?w=3:"epl-price"===t.class&&(w=4)):v=!0},ontext:function(e){var a,t;if(u)c&&(n.genres+=e+", ");else if(v)n.summary+=e.trim();else if(h){if(p){var l=e.toLowerCase().replace(":","").trim();if(f)n.author+=e||"Unknown";else if(b)n.artist+=e||"Unknown";else if(d)switch(l){case"مكتملة":case"completed":case"complété":case"completo":case"completado":case"tamamlandı":n.status=r.NovelStatus.Completed;break;case"مستمرة":case"ongoing":case"en cours":case"em andamento":case"en progreso":case"devam ediyor":n.status=r.NovelStatus.Ongoing;break;case"متوقفة":case"hiatus":case"en pause":case"hiato":case"pausa":case"pausado":case"duraklatıldı":n.status=r.NovelStatus.OnHiatus;break;default:n.status=r.NovelStatus.Unknown}switch(l){case"الكاتب":case"author":case"auteur":case"autor":case"yazar":f=!0;break;case"الحالة":case"status":case"statut":case"estado":case"durum":d=!0;break;case"الفنان":case"artist":case"artiste":case"artista":case"çizer":b=!0}}}else if(m&&g)if(1===w)o(e,N);else if(2===w)N.name=(null===(t=null===(a=e.match(RegExp("^".concat(n.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s*(.+)"))))||void 0===a?void 0:a[1])||void 0===t?void 0:t.trim())||e.trim(),N.chapterNumber||o(e,N);else if(3===w)N.releaseTime=e;else if(4===w){switch(l=e.toLowerCase().trim()){case"free":case"gratuit":case"مجاني":case"livre":case"":y=!1;break;default:y=!0}}},onclosetag:function(e){var a,t,l;u?c?c=!1:(u=!1,n.genres=null===(a=n.genres)||void 0===a?void 0:a.slice(0,-2)):v?"br"===e?n.summary+="\n":"div"===e&&(v=!1):h?p?"span"===e&&(p=!1,f&&n.author?f=!1:b&&n.artist?b=!1:d&&""!==n.status&&(d=!1)):"div"===e&&(h=!1,n.author=null===(t=n.author)||void 0===t?void 0:t.trim(),n.artist=null===(l=n.artist)||void 0===l?void 0:l.trim()):m&&(g?1===w||2===w||3===w||4===w?w=0:"li"===e&&(g=!1,N.chapterNumber||(N.chapterNumber=0),y||k.push(N),N={}):"ul"===e&&(m=!1))}}),S.write(i),S.end(),k.length&&((null===(x=this.options)||void 0===x?void 0:x.reverseChapters)&&k.reverse(),n.chapters=k),[2,n]}}))}))},n.prototype.parseChapter=function(l){return e(this,void 0,void 0,(function(){var e,i,r,s,o;return a(this,(function(a){switch(a.label){case 0:return[4,this.safeFecth(this.site+l,!1)];case 1:if(e=a.sent(),null===(r=this.options)||void 0===r?void 0:r.customJs)try{i=(0,t.load)(e),e=i.html()}catch(e){throw console.error("Error executing customJs:",e),e}return[2,(null===(o=null===(s=e.match(/<div.*class="epcontent ([\s\S]*?)<div.*class="bottomnav"/g))||void 0===s?void 0:s[0].match(/<p.*>([\s\S]*?)<\/p>/g))||void 0===o?void 0:o.join("\n"))||""]}}))}))},n.prototype.searchNovels=function(t,l){return e(this,void 0,void 0,(function(){var e,i;return a(this,(function(a){switch(a.label){case 0:return e=this.site+"page/"+l+"/?s="+t,[4,this.safeFecth(e,!0)];case 1:return i=a.sent(),[2,this.parseNovels(i)]}}))}))},n}())({id:"lightnovelbrasil",sourceSite:"https://lightnovelbrasil.com/",sourceName:"Light Novel Brasil",options:{lang:"Portuguese",reverseChapters:!0},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"+18",value:"18"},{label:"Ação",value:"acao"},{label:"Artes Marciais",value:"artes-marciais"},{label:"Aventura",value:"aventura"},{label:"Comédia",value:"comedia"},{label:"Cultivo",value:"cultivo"},{label:"Cyberpunk",value:"cyberpunk"},{label:"Drama",value:"drama"},{label:"Ecchi",value:"ecchi"},{label:"Esportes",value:"esportes"},{label:"Fanfiction",value:"fanfiction"},{label:"Fantasia",value:"fantasia"},{label:"Ficção Científica",value:"ficcao-cientifica"},{label:"Games",value:"games"},{label:"Harem",value:"harem"},{label:"Horror",value:"horror"},{label:"Isekai",value:"isekai"},{label:"Magia",value:"magia"},{label:"Mecha",value:"mecha"},{label:"Militar",value:"militar"},{label:"Mistério",value:"misterio"},{label:"Novel Nacional",value:"novel-nacional"},{label:"Psicológico",value:"psicologico"},{label:"Romance",value:"romance"},{label:"Sci-fi",value:"sci-fi"},{label:"Seinen",value:"seinen"},{label:"Shoujo",value:"shoujo"},{label:"Shounen",value:"shounen"},{label:"Shounen BL",value:"shounen-bl"},{label:"Slice of Life",value:"slice-of-life"},{label:"Sobrenatural",value:"sobrenatural"},{label:"Terror",value:"terror"},{label:"Tragédia",value:"tragedia"},{label:"Vida Escolar",value:"vida-escolar"},{label:"Wuxia",value:"wuxia"},{label:"Xianxia",value:"xianxia"},{label:"Xuanhuan",value:"xuanhuan"},{label:"Yaoi",value:"yaoi"},{label:"Yuri",value:"yuri"}]},"type[]":{type:"Checkbox",label:"Tipo",value:[],options:[{label:"Light Novel",value:"light-novel"},{label:"Livro",value:"livro"},{label:"One-Shot",value:"one-shot"},{label:"Web Novel",value:"web-novel"}]},status:{type:"Picker",label:"Status",value:"",options:[{label:"Tudo",value:""},{label:"Ongoing",value:"ongoing"},{label:"Hiatus",value:"hiatus"},{label:"Completed",value:"completed"}]},order:{type:"Picker",label:"Ordenar por",value:"",options:[{label:"Padrão",value:""},{label:"A-Z",value:"title"},{label:"Z-A",value:"titlereverse"},{label:"Últimos Lançamentos",value:"update"},{label:"Última Adição",value:"latest"},{label:"Popular",value:"popular"}]}}});exports.default=n;