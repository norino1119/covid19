(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{568:function(e,t,r){"use strict";r.r(t);var o=r(388),n=r(406),c=r(389),d=r(397),m=r(398),l=r(405),f=r(395),C=r(399),k=r(394),v=r(392),h=r(404),y=r(396),w=r(391),$=r(400),N=r(390),A=r(393),D=r(403),R=r(402),M=r(387),T={components:{MonitoringConfirmedCasesNumberCard:f.a,SevereCaseCard:N.a,MonitoringConsultationDeskReportsNumberCard:C.a,PositiveRateCard:y.a,UntrackedRateCard:w.a,ConfirmedCasesDetailsCard:o.a,ConfirmedCasesNumberCard:n.a,ConfirmedCasesAttributesCard:c.a,ConfirmedCasesByMunicipalitiesCard:d.a,TestedNumberCard:m.a,TelephoneAdvisoryReportsNumberCard:l.a,MetroCard:k.a,AgencyCard:v.a,PositiveNumberByDiagnosedDateCard:h.a,ConfirmedCasesIncreaseRatioByWeekCard:$.a,HospitalizedNumberCard:A.a,ConsultationAboutFeverNumberCard:D.a,TokyoRulesApplicationNumberCard:R.a,MonitoringItemsOverviewCard:M.a},data:function(){var e;switch(this.$route.params.card){case"details-of-confirmed-cases":e="confirmed-cases-details-card";break;case"number-of-confirmed-cases":e="confirmed-cases-number-card";break;case"number-of-confirmed-cases-by-municipalities":e="confirmed-cases-by-municipalities-card";break;case"attributes-of-confirmed-cases":e="confirmed-cases-attributes-card";break;case"number-of-tested":e="tested-number-card";break;case"number-of-reports-to-covid19-telephone-advisory-center":e="telephone-advisory-reports-number-card";break;case"predicted-number-of-toei-subway-passengers":e="metro-card";break;case"agency":e="agency-card";break;case"positive-number-by-diagnosed-date":e="positive-number-by-diagnosed-date-card";break;case"positive-rate":e="positive-rate-card";break;case"monitoring-number-of-confirmed-cases":e="monitoring-confirmed-cases-number-card";break;case"untracked-rate":e="untracked-rate-card";break;case"increase-ratio-of-confirmed-cases-by-daily":e="confirmed-cases-increase-ratio-by-week-card";break;case"positive-status-severe-case":e="severe-case-card";break;case"number-of-hospitalized":e="hospitalized-number-card";break;case"monitoring-number-of-reports-to-covid19-consultation-desk":e="monitoring-consultation-desk-reports-number-card";break;case"monitoring-items-overview":e="monitoring-items-overview-card";break;case"number-of-reports-to-consultations-about-fever-in-7119":e="consultation-about-fever-number-card";break;case"number-of-tokyo-rules-applied":e="tokyo-rules-application-number-card"}return{cardComponent:e,title:void 0,updatedAt:void 0}},head:function(){var e=this,t="https://stopcovid19.metro.tokyo.lg.jp",r=(new Date).getTime(),o="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(r):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(r),n="".concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。")),c="".concat(this.$t("東京都")," ").concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"));return{titleTemplate:function(title){return"".concat(e.title||title," | ").concat(c)},meta:[{hid:"og:url",property:"og:url",content:"".concat(t).concat(this.$route.path,"/")},{hid:"og:title",property:"og:title",template:function(title){return"".concat(e.title||title," | ").concat(c)},content:""},{hid:"description",name:"description",template:function(t){return"".concat(e.updatedAt||t," | ").concat(n)},content:""},{hid:"og:description",property:"og:description",template:function(t){return"".concat(e.updatedAt||t," | ").concat(n)},content:""},{hid:"og:image",property:"og:image",content:o},{hid:"twitter:image",name:"twitter:image",content:o}]}}},j=r(6),component=Object(j.a)(T,(function(){var e=this.$createElement;return(this._self._c||e)(this.cardComponent,{tag:"component"})}),[],!1,null,null,null);t.default=component.exports}}]);