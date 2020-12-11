
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"567",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C=document.body.className.indexOf(\"signed-in\")\u0026\u0026-1==document.body.className.indexOf(\"admin-user\")})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",1],8,16],".parentElement.querySelector(\"h3\").innerText}catch(a){return\"\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href.replace(\/[\\?\u0026]i=......\/,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){localStorage.setItem(a,JSON.stringify(b))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,f,c,d){\"string\"===typeof a\u0026\u0026(a=[a]);c||(c=1E4);d||(d=100);c=Math.round(c\/d);var g=0,h=a.length,b,e,k=window.setInterval(function(){for(b=0;b\u003Ch\u0026\u0026!(e=0===a[b].indexOf(\"\/\/\")?document.evaluate(a[b],document,null,XPathResult.ANY_TYPE,null).iterateNext():document.querySelector(a[b]));b++);if(e||g++\u003Ec)window.clearInterval(k),e\u0026\u0026f()},d)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c,e){var a=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")};window.analytics\u0026\u0026\"string\"===typeof d\u0026\u0026-1\u003C[\"Success\",\"Viewed\"].indexOf(d)\u0026\u0026\"string\"===typeof b\u0026\u0026\"string\"===typeof c\u0026\u0026(\"object\"===typeof e?window.analytics.trackLink(e,\"Experiment \"+d,{experiment_id:a(b),experiment_name:b,variation_id:a(c),variation_name:a(c)}):window.analytics.track(\"Experiment \"+d,{experiment_id:a(b),\nexperiment_name:b,variation_id:a(c),variation_name:a(c)}))}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_anonymous_id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){try{var e=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")},l=function(a){return\"function\"===typeof a?a():\"all\"===a?!0:\"non-customers\"===a?null===window.analytics.user().id():\"customers\"===a?null!==window.analytics.user().id():!1},g=function(a){var d=0;if(0==a.length)return d;for(b=0;b\u003Ca.length;b++)c=a.charCodeAt(b),d=(d\u003C\u003C5)-d+c,d\u0026=d;return Math.abs(d)},m=function(a,d){return parseInt(a.substr(d%\n(a.length-1),2),16)\/255},h=function(){if(l(a.audience)||f){var b=m(a.anonymousid,a.seed);if(b\u003C=a.pct||f)variant=f||a.variants[Math.floor(b\/a.pct*a.variants.length)],variant.func(),window.analytics.track(\"Experiment Viewed\",{experiment_id:e(a.name),experiment_name:a.name,variation_id:e(variant.name),variation_name:e(variant.name)}),window.setTimeout(function(){var d=document.querySelectorAll('*[data-js\\x3d\"gtm_ab_success\"]'),b;for(b=0;b\u003Cd.length;b++)window.analytics.trackLink(d[b],\"Experiment Success\",\n{experiment_id:e(a.name),experiment_name:a.name,variation_id:e(variant.name),variation_name:e(variant.name),success_details:d[b].getAttribute(\"href\")||\"\"})},100)}};\"audience\"in a||(a.audience=\"all\");\"pct\"in a||(a.pct=1);if(\"string\"===typeof a.name\u0026\u0026\"variants\"in a\u0026\u0026a.variants instanceof Array){var f=null;if(0\u003C=window.location.search.indexOf(\"gtm_abtest_force\"))for(var b=0;b\u003Ca.variants.length;b++)\"Test\"===a.variants[b].name\u0026\u0026(f=a.variants[b]);if(!document.querySelector('*[data-gtm_ab\\x3d\"'+e(a.name)+\n'\"]'))if(\"seed\"in a||(a.seed=g(a.name)),(g=",["escape",["macro",7],8,16],")\u0026\u0026\"all\"===a.audience)a.anonymousid=g.replace(\/%22\/g,\"\").replace(\/-\/g,\"\"),h();else var n=0,p=window.setInterval(function(){if(window.analytics||40\u003Cn++)window.clearInterval(p),window.analytics\u0026\u0026window.analytics.ready(function(){a.anonymousid=window.analytics.user().anonymousId().replace(\/-\/g,\"\");h()})},50)}}catch(k){console.log(\"runtest err\",k.message)}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return(a=localStorage.getItem(a))\u0026\u0026JSON.parse(a)}})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",10],8,16],";return a=null==a||\"\"==a?\"undefined\":100\u003Ca.length?a.substring(0,100).toLowerCase()+\"...\":a.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",1],8,16],".getAttribute(\"data-js\")}catch(a){return\"\"}})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"recentlySignedUp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"staging",
      "vtp_name":"marketoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"production",
      "vtp_name":"conversionEnvironment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"userDropletCount"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"userOrOrgHasCreatedDroplets"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"window.google_tag_manager.dataLayer.gtmLoad"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"window.ub.page.variantId"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",32],
      "vtp_defaultValue":"_",
      "vtp_map":["list",["map","key","survey","value","Thanks for filling out our survey! We genuinely appreciate customer feedback."],["map","key","swag","value","Use promo code DOswag10 on Billing page for $10 credit. Valid for new users only."]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"signed_in"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_user_id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"refcode"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"last_logged_in_at"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"optimizelySegments"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_gtmab_ft"
    },{
      "function":"__j",
      "vtp_name":"window.navigator.userAgent"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"pcode",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pcode"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.droplet_count"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audience"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"model.user.email"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"sessionID"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","location","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_eventCategory":"Signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Registration",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",17],
      "vtp_eventLabel":["macro",18],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",123,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":16
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",16],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"m4TPCP2NtQIQy5v24QM",
      "vtp_url":["macro",21],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":18
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",121,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":24
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PageView\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":44
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",120,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":45
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=cpljCNe412UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":78
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=RNOTEOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":82
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",122,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":83
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",119,0]],
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqsf\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":84
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",124,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":88
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/googleads.g.doubleclick.net\/pagead\/viewthroughconversion\/1010666955\/?guid=ON\u0026amp;script=0\u0026amp;data.userengaged=true",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":89
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Product",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Create",
      "vtp_eventLabel":"Droplet",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":116
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":125
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=AddPaymentInfo\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":135
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=CompleteRegistration\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":136
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=EUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":137
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":138
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=Purchase\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":141
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=i4IrCJHK53UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":142
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":146
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":152
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2\u0026evt=custom\u0026ec=Conversion",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":153
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":155
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=241522\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":156
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=Generic",
      "tag_id":159
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":166
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",16],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"PiHFCPrC130QgP3WjgM",
      "vtp_url":["macro",21],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":167
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["template",["macro",28],"\u0026var=",["macro",29]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":171
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",30]],["map","key","u2","value",["macro",28]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdos",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",22],
      "vtp_url":["macro",21],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":173
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",30]],["map","key","u2","value",["macro",28]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdou",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",22],
      "vtp_url":["macro",21],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":174
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",30]],["map","key","u2","value",["macro",28]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochpu",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",22],
      "vtp_url":["macro",21],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":175
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",30]],["map","key","u2","value",["macro",28]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochps",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",22],
      "vtp_url":["macro",21],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":176
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"GaeYCJzr8H4QgP3WjgM",
      "vtp_url":["macro",21],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":182
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":183
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026conversionId=333506\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":184
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"A0tMCLK24n4QgP3WjgM",
      "vtp_url":["macro",21],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":185
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":187
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":189
    },{
      "function":"__paused",
      "vtp_originalTagType":"asp",
      "tag_id":194
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":195
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":197
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=ViewContent",
      "tag_id":201
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":207
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":208
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=532748\u0026conversionId=682001\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":209
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":213
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":216
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":218
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":223
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":227
    },{
      "function":"__cegg",
      "once_per_event":true,
      "vtp_usersNumericId":"00576104",
      "tag_id":229
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=9515217;type=conv;cat=digit0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[SessionID]?",
      "tag_id":232
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":233
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=9515217;type=landi0;cat=digit0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[SessionID]?",
      "tag_id":234
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":239
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/insight.adsrvr.org\/track\/conv\/?adv=4net0uk\u0026ct=0:ff77f96\u0026fmt=3",
      "tag_id":240
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"gYlbCMmhwKkBEMub9uED",
      "vtp_url":["macro",21],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":241
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=Lead\u0026noscript=1",
      "tag_id":242
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=9515217;type=conv;cat=digit00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[SessionID]?",
      "tag_id":247
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=CompleteRegistration\u0026noscript=1",
      "tag_id":249
    },{
      "function":"__qpx",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixel_id":"b38c184aa72c43ef8fb074e64602b64e",
      "vtp_pixel_event":"GenerateLead",
      "tag_id":250
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=1068602\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":251
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":252
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"9BqyCNmR1aIBEMub9uED",
      "vtp_url":["macro",21],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":253
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"qasFCOWR1aIBEID91o4D",
      "vtp_url":["macro",21],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":254
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-68219300-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":256
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=InitiateCheckout\u0026noscript=1",
      "tag_id":259
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"OQmmCM-Ki60BEMub9uED",
      "vtp_url":["macro",21],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":261
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=1417234\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":262
    },{
      "function":"__qpx",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixel_id":"b38c184aa72c43ef8fb074e64602b64e",
      "vtp_pixel_event":"Generic",
      "tag_id":263
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"ApqPCM2Bg60BEID91o4D",
      "vtp_url":["macro",21],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":264
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=AddToCart\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":266
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"K45VCPma7q4BEMub9uED",
      "vtp_url":["macro",21],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":268
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=1477010\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":269
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=AddToCart",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":270
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=1537593\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":273
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"BqJaCLrcgrMBEID91o4D",
      "vtp_url":["macro",21],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":274
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=CompleteRegistration",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":275
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"zb6qCJTXgrMBEMub9uED",
      "vtp_url":["macro",21],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":276
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=StartTrial\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":277
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Community",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"New Course Subscription",
      "vtp_eventLabel":"Subscribe",
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":279
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"hvIACOyY8LcBEID91o4D",
      "vtp_url":["macro",21],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":281
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":"1",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"q0xMCKb9m7kBEMub9uED",
      "vtp_url":["macro",21],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":283
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_goalValue":"1",
      "vtp_tagId":"5871022",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"webinar_registration",
      "tag_id":284
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=1689322\u0026fmt=gif\"",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":286
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=Webinar%20Registration\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":289
    },{
      "function":"__cl",
      "tag_id":290
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"300000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"758737_224",
      "tag_id":291
    },{
      "function":"__cl",
      "tag_id":292
    },{
      "function":"__cl",
      "tag_id":293
    },{
      "function":"__cl",
      "tag_id":294
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",7],8,16],"\u0026\u002665\u003EparseInt(",["escape",["macro",7],8,16],".substr(4,2),16)\u0026\u0026(window._fs_debug=!1,window._fs_host=\"www.fullstory.com\",window._fs_org=\"1XYq\",window._fs_namespace=\"FS\",function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,\nh),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=function(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})}(window,document,window._fs_namespace,\"script\",\"user\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar $alertElement=document.querySelector(\"p[data-home-announcement-message]\"),$alertContent=\"",["escape",["macro",33],7],"\";$alertElement\u0026\u002620\u003C$alertContent.length\u0026\u0026($alertElement.innerHTML=$alertContent);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!1;window._fs_host=\"www.fullstory.com\";window._fs_org=\"1XYq\";window._fs_namespace=\"FS\";\n(function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,h),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=\nfunction(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})})(window,document,window._fs_namespace,\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(0\u003C=document.cookie.indexOf(\"signed_in\\x3dtrue\")||0\u003C=document.cookie.indexOf(\"last_logged_in_at\\x3d\")){var links=document.querySelectorAll('a[href\\x3d\"https:\/\/cloud.digitalocean.com\/registrations\/new?onboarding_origin\\x3dspaces\"]'),linkslen=links.length,i;for(i=0;i\u003Clinkslen;i++)links[i].setAttribute(\"href\",\"https:\/\/cloud.digitalocean.com\/spaces\")};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{if(-1\u003Cwindow.location.search.indexOf(\"show_features\")){var f=document.querySelector('*[data-ab-test\\x3d\"featuresSection\"]');f\u0026\u0026(f.style.display=\"block\")}}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar sub=document.querySelector(\".subscribe\");0\u003Cwindow.location.search.indexOf(\"\\x26subscribe\")\u0026\u0026null!==sub.offsetParent\u0026\u0026sub.click();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{window.analytics\u0026\u0026analytics.ready(function(){var c=document.querySelectorAll(\".bui-Button\"),e=c.length,a,d={};for(a=0;a\u003Ce;a++){var b=c[a].value||c[a].innerText;b in d?d[b]++:d[b]=1;analytics.trackLink(c[a],\"Web Interaction\",{action:\"click\",category:\"button\",name:b+(1\u003Cd[b]?\" - \"+d[b]:\"\")})}})}catch(c){};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":205
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  ._gtm_announce-wrap {\n    background: none;\n    width: 100%;\n    z-index: 9;\n    position:relative;\n  }\n  ._gtm_announce-wrap a {\n    display:block;\n    position:relative;\n    top: -90px;\n    margin-bottom: -76px;\n    width:100%;\n    max-width:1168px;\n    background-color: #00b47b;\n    border: 1px solid #009969;\n    border-radius: 5px;\n    box-shadow:0 2px 4px rgba(0,0,0,0.06);\n    padding: 8px 16px;\n    color:#fff;\n    text-align:center;\n  }\n  ._gtm_announce-wrap a strong {\n    color:#fff;\n  }\n  .Home-hero .www-Container ._gtm_announce-wrap a {\n    top: 8px;\n    margin-bottom: -44px; \n  }\n  .GraphicalHero .www-Container ._gtm_announce-wrap a {\n    top: -112px;\n  }\n  @media (max-width: 768px) {\n    .GraphicalHero .www-Container ._gtm_announce-wrap a {\n      top: 0px;\n      margin-bottom:20px;\n    }\n  }\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(-1\u003C[\"\",\"products\",\"pricing\",\"customers\"].indexOf(window.location.pathname.split(\"\/\")[1])){var main=document.querySelector(\".BackgroundImageHero .www-Container\")||document.querySelector(\".Home-hero .www-Container\")||document.querySelector(\".GraphicalHero .www-Container\")||document.querySelector(\".UnifiedNav-transparentHeaderPush\"),announce=document.createElement(\"div\"),text=0\u003Cwindow.location.search.indexOf(\"Referral_Invite\")?\"\\ud83d\\udcb5 \\x3cstrong\\x3e Free credit active:\\x3c\/strong\\x3e You have a $100, 60-day credit from a friend. \\x3cstrong \\x3eComplete registration to get started.\\x3c\/strong\\x3e\":\n\"\\ud83d\\udcb5 \\x3cstrong\\x3e Free credit active:\\x3c\/strong\\x3e Get started on DigitalOcean with a $100, 60-day credit for new users.\";announce.classList.add(\"_gtm_announce-wrap\");announce.innerHTML='\\x3ca href\\x3d\"https:\/\/cloud.digitalocean.com\/registrations\/new?utm_source\\x3dinternal\\x26utm_campaign\\x3dwwwalertbanner\"\\x3e'+text+\"\\x3c\/a\\x3e\";main.insertBefore(announce,main.firstChild);window.analytics\u0026\u0026window.analytics.track(\"Experiment Viewed\",{experimentName:\"Referral Alert\"})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"cookieconsent_statuschange\",function(){window.dataLayer.push({event:\"cc_dismiss\"})});function getCookie(a){var b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");if(2==a.length)return a.pop().split(\";\").shift()}getCookie(\"cookieconsent_status\")\u0026\u0026window.dataLayer.push({event:\"cc_dismiss\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":219
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.querySelector('li[role\\x3d\"banner\"]').innerHTML='\\x3ca href\\x3d\"http:\/\/blog.digitalocean.com\/new-on-digitalocean-kubernetes\" data-pill\\x3d\"new\" title\\x3d\"Fresh features and 1-Click Apps for DigitalOcean Kubernetes\" target\\x3d\"_blank\" rel\\x3d\"noopener\"\\x3eFresh features and 1-Click Apps for DigitalOcean Kubernetes \\u276f\\x3c\/a\\x3e';\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_34hog0h9\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E\n\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":230
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_34hog0h9\");rdt(\"track\",\"SignUp\");\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCookie(d){d+=\"\\x3d\";var b=decodeURIComponent(document.cookie);b=b.split(\";\");for(var c=0;c\u003Cb.length;c++){for(var a=b[c];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(d))return a.substring(d.length,a.length)}return\"\"}function setCookie(d,b,c){var a=new Date;a.setTime(a.getTime()+6E4*c);document.cookie=d+\"\\x3d\"+escape(b)+(null==c?\"\":\";expires\\x3d\"+a.toGMTString())}\nif(\"\"==getCookie(\"sessionID\")){var randomNumberString=Math.floor(1E7*Math.random()+1).toString();setCookie(\"sessionID\",randomNumberString,30)}else{var sessionID=getCookie(\"sessionID\");setCookie(\"sessionID\",sessionID,30)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":238
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o2d65\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o2d65\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o2d65\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":243
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026amp;conversionId=1288866\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":244
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_34hog0h9\");rdt(\"track\",\"Lead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":245
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{",["escape",["macro",8],8,16],"({name:\"Sep 2019 Test\",pct:.75,audience:function(){return-1===document.cookie.indexOf(\"last_logged_in_at\")\u0026\u0026-1===document.cookie.indexOf(\"refcode\")\u0026\u0026-1===window.location.search.indexOf(\"refcode\")\u0026\u0026-1===window.location.search.indexOf(\"K8S_Dev_Signup_Event_KubeConNA2019New\")},variants:[{name:\"Control\",func:function(){}},{name:\"Received Promo\",func:function(){fetch(\"https:\/\/cloud.digitalocean.com\/referrals\/74a1c5d63dac\/register\",{method:\"GET\",mode:\"cors\",credentials:\"include\"});\ndataLayer.push({event:\"showReferralBanner\"})}}]})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":246
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"751f0436\"})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":248
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o20hg\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o20hg\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o20hg\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":255
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"nuyk8\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuyk8\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nuyk8\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":260
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o2k38\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":267
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o2og9\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o2og9\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":272
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(function(){$(\".sticky-wrap\").height()\u003E$(window).height()\u0026\u0026($(\".filters-box \\x3e .curriculum-filter-group, .filters-box \\x3e h3\").hide(),$(\".filters-box \\x3e h3:last\").show())});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":278
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _ubaq=_ubaq||[];_ubaq.push([\"trackGoal\",\"convert\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"d3pkntwtp2ukl5.cloudfront.net\/uba.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":280
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o2xzp\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o2xzp\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":288
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/t.co\/i\/adsct?p_id=Twitter\u0026p_user_id=0\u0026txn_id=nuqsf\u0026events=%5B%5B%22pageview%22%2Cnull%5D%5D\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":123
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":119
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":121
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":122
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":118
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":120
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":".digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"try.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"hacktoberfest.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"staging"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"cloud.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"pay-pal-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"credit-card-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"activated"
    },{
      "function":"_sw",
      "arg0":["macro",13],
      "arg1":"cloud."
    },{
      "function":"_sw",
      "arg0":["macro",13],
      "arg1":"hacktoberfest."
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"cc_dismiss"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"Create"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"Button Button--green Button--large Button--fullWidth"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"false"
    },{
      "function":"_gt",
      "arg0":["macro",19],
      "arg1":"50"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/console"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"ember_pageview"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"Create a Space"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/community"
    },{
      "function":"_sw",
      "arg0":["macro",13],
      "arg1":"developers"
    },{
      "function":"_sw",
      "arg0":["macro",13],
      "arg1":"hacktoberfest"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"blog.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/products\/"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"medium=rtg"
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorials"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"medium=paid_social"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"medium=display"
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorial"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"blog.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"medium="
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"rtg"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"kubernetes"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"containers"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"docker"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"K8S"
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"https:\/\/www.digitalocean.com\/community\/questions\/"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/community\/questions\/new"
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorials\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/welcome"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"registered"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/community"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"SPP Application Complete"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"https:\/\/sammydigitalocean.typeform.com\/to\/tcFM4F"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"TypeformSubmit"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"Hatch Application Complete"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"confirmed"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"initiate_curriculum_subscribe"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"Webinar Registration Complete"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"marketplace.digitalocean.com"
    },{
      "function":"_sw",
      "arg0":["macro",26],
      "arg1":"\/community"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"_"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"null"
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"https:\/\/www.digitalocean.com\/community"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"true"
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tools"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/products\/object-storage\/"
    },{
      "function":"_sw",
      "arg0":["macro",26],
      "arg1":"\/lp\/hosting"
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tags"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"community"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"?refcode="
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"showReferralBanner"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"undefined"
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"https:\/\/cloud."
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/pricing\/"
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"https:\/\/www.digitalocean.com\/community\/curriculums\/"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",1,4,6],["unless",5],["add",1]],
    [["if",7],["add",2,3,4,16,24,26,27,29,37,43,46,47,54,105,117]],
    [["if",8],["add",2,3,4,16,24,26,27,29,37,43,46,47,54,105,117]],
    [["if",0,1,9,10],["add",4,24,26,27,29,37,43,46,47,54,105,117]],
    [["if",13],["unless",11,12],["add",5,6,23,25,28,36,41,44,45,55,104]],
    [["if",6,14,15,16],["add",7,8,14,17]],
    [["if",1,6,17],["unless",5],["add",9,10]],
    [["if",1,6,18],["unless",5,19],["add",11,19]],
    [["if",1,6,20],["unless",5,19],["add",12,13,18]],
    [["if",21,22],["add",15]],
    [["if",6,15,16,23],["add",20,21]],
    [["if",1,24],["unless",25],["add",22,56,100]],
    [["if",13],["unless",26,27],["add",22]],
    [["if",1,2],["add",30],["block",0]],
    [["if",13,28],["add",31,32]],
    [["if",13,24,29],["add",33,34,38]],
    [["if",13,30,31],["add",35]],
    [["if",32,33,34],["add",39]],
    [["if",33,34,35],["add",39]],
    [["if",34,36,37],["add",39]],
    [["if",1,38,39,40],["add",39]],
    [["if",1,31],["unless",41,42,43,44],["add",39]],
    [["if",1,45],["unless",46],["add",40]],
    [["if",47,48],["add",42,49,50,52]],
    [["if",1,6,49,50],["add",48,69,70,71,72,73,113]],
    [["if",16],["add",51]],
    [["if",1,51],["add",53]],
    [["if",52],["add",57,58,59,60,61,84,107,108,109,111],["block",111]],
    [["if",53,54],["add",57,58,59,60,61,84,107,108,109]],
    [["if",55],["add",62,63,64,65,66,67,112]],
    [["if",1,3],["add",68],["block",0]],
    [["if",1,6,9,56],["add",74,75,76,77,114]],
    [["if",16,57],["add",78,79,80,81,82,83,115]],
    [["if",58],["add",85,86,87,88,118]],
    [["if",34],["add",89,91,92,93,106]],
    [["if",34,37],["add",90]],
    [["if",1,6],["unless",5],["add",94]],
    [["if",13,59],["add",94]],
    [["if",13,24],["unless",60],["add",94]],
    [["if",24,29,48],["unless",61],["add",95]],
    [["if",1,64,65],["add",96]],
    [["if",1,66],["add",96]],
    [["if",48,67],["add",97]],
    [["if",34,68],["add",98]],
    [["if",1,69],["add",99]],
    [["if",24,48],["unless",70,71],["add",101]],
    [["if",24,48,72],["unless",71],["add",101]],
    [["if",73],["add",101]],
    [["if",1],["unless",76],["add",102]],
    [["if",1,64],["add",103]],
    [["if",24,29,34],["add",110]],
    [["if",24,48,77],["add",110]],
    [["if",1,78],["add",116]],
    [["if",1,24,62],["block",95]],
    [["if",0,1],["unless",63],["block",95]],
    [["if",0,48],["unless",63,74],["block",101]],
    [["if",0,48],["unless",75],["block",101]]]
},
"runtime":[
[],[50,"__qpx",[46,"a"],[52,"b",["require","sendPixel"]],[52,"c",["require","setInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","getUrl"]],[52,"f",["require","encodeUriComponent"]],[52,"g",["f",[17,[15,"a"],"pixel_id"]]],[52,"h",[17,[15,"a"],"pixel_event"]],[52,"i",["d","qp"]],[52,"j",["e",[45]]],[52,"k",["f",[15,"j"]]],[22,[29,[15,"h"],"ViewContent"],[46,["b",[0,[0,[0,[0,[0,"https://q.quora.com/_/ad/",[15,"g"]],"/pixel?tag\u003d"],[15,"h"]],"\u0026i\u003dgtm\u0026u\u003d"],[15,"k"]]]]],[22,[28,[15,"i"]],[46,["b",[0,[0,[0,"https://q.quora.com/_/ad/",[15,"g"]],"/pixel?tag\u003dViewContent\u0026i\u003dgtm\u0026u\u003d"],[15,"k"]]]]],["c","qp","1",true],[2,[15,"a"],"gtmOnSuccess",[7]]],[]
]
,"permissions":{"__qpx":{"send_pixel":{"urls":["https:\/\/q.quora.com\/"]},"access_globals":{"keys":[{"key":"qp","read":true,"write":true,"execute":false}]},"get_url":{"urlParts":"any"}}
}


};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={Gg:!0},fa={};try{fa.__proto__=ea;da=fa.Gg;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ha=ca,ia=this||self,ja=/^[\w+/_-]+[=]{0,2}$/,na=null,oa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var pa=function(a,b){this.R=a;this.qh=b};pa.prototype.Fh=function(){return this.R};pa.prototype.getData=function(){return this.qh};pa.prototype.getData=pa.prototype.getData;pa.prototype.getType=pa.prototype.Fh;var qa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ra=function(){this.eb={};this.Jb=!1;this.Fd={}};ra.prototype.get=function(a){return this.eb["dust."+a]};ra.prototype.set=function(a,b){this.Jb||(a="dust."+a,this.Fd.hasOwnProperty(a)||(this.eb[a]=b))};ra.prototype.has=function(a){return this.eb.hasOwnProperty("dust."+a)};var sa=function(a){var b=[],c;for(c in a.eb)a.eb.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ra.prototype.remove=function(a){a="dust."+a;this.Jb||this.Fd.hasOwnProperty(a)||delete this.eb[a]};ra.prototype.U=function(){this.Jb=!0};var g=function(a){this.ib=new ra;this.m=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(qa(b)?this.m[Number(b)]=a[Number(b)]:this.ib.set(b,a[b]))};aa=g.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.m.length;c++){var d=this.m[c];null===d||void 0===d?b.push(""):d instanceof g?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!qa(b))throw Error("RangeError: Length property must be a valid integer.");this.m.length=Number(b)}else qa(a)?this.m[Number(a)]=b:this.ib.set(a,b)};aa.get=function(a){return"length"==a?this.length():qa(a)?this.m[Number(a)]:this.ib.get(a)};aa.length=function(){return this.m.length};aa.Ga=function(){for(var a=sa(this.ib),b=0;b<this.m.length;b++)a.push(b+"");return new g(a)};aa.remove=function(a){qa(a)?delete this.m[Number(a)]:this.ib.remove(a)};aa.pop=function(){return this.m.pop()};
aa.push=function(a){return this.m.push.apply(this.m,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.m.shift()};aa.splice=function(a,b,c){return new g(this.m.splice.apply(this.m,arguments))};aa.unshift=function(a){return this.m.unshift.apply(this.m,Array.prototype.slice.call(arguments))};aa.has=function(a){return qa(a)&&this.m.hasOwnProperty(a)||this.ib.has(a)};g.prototype.unshift=g.prototype.unshift;g.prototype.splice=g.prototype.splice;g.prototype.shift=g.prototype.shift;
g.prototype.push=g.prototype.push;g.prototype.pop=g.prototype.pop;g.prototype.remove=g.prototype.remove;g.prototype.getKeys=g.prototype.Ga;g.prototype.get=g.prototype.get;g.prototype.set=g.prototype.set;var ta=function(){function a(f,h){if(b[f]){if(b[f].vc+h>b[f].max)throw Error("Quota exceeded");b[f].vc+=h}}var b={},c=void 0,d=void 0,e={ii:function(f){c=f},Xe:function(){c&&a(c,1)},ki:function(f){d=f},Fa:function(f){d&&a(d,f)},Ji:function(f,h){b[f]=b[f]||{vc:0};b[f].max=h},Ch:function(f){return b[f]&&b[f].vc||0},reset:function(){b={}},ih:a};e.onFnConsume=e.ii;e.consumeFn=e.Xe;e.onStorageConsume=e.ki;e.consumeStorage=e.Fa;e.setMax=e.Ji;e.getConsumed=e.Ch;e.reset=e.reset;e.consume=e.ih;return e};var va=function(a,b){this.ia=a;this.Ic=function(c,d,e){return c.apply(d,e)};this.Ja=b;this.m=new ra;this.M=this.Cc=void 0};va.prototype.add=function(a,b){xa(this,a,b,!1)};va.prototype.td=function(a,b){xa(this,a,b,!0)};var xa=function(a,b,c,d){if(!a.m.Jb)if(a.ia.Fa(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.m;e.set(b,c);e.Fd["dust."+b]=!0}else a.m.set(b,c)};
va.prototype.set=function(a,b){this.m.Jb||(!this.m.has(a)&&this.Ja&&this.Ja.has(a)?this.Ja.set(a,b):(this.ia.Fa(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.m.set(a,b)))};va.prototype.get=function(a){return this.m.has(a)?this.m.get(a):this.Ja?this.Ja.get(a):void 0};va.prototype.has=function(a){return!!this.m.has(a)||!(!this.Ja||!this.Ja.has(a))};var ya=function(a){var b=new va(a.ia,a);a.Cc&&b.La(a.Cc);b.xa(a.Ic);b.M=a.M;return b};va.prototype.T=function(){return this.ia};
va.prototype.La=function(a){this.Cc=a};va.prototype.xa=function(a){this.Ic=a};va.prototype.U=function(){this.m.U()};va.prototype.has=va.prototype.has;va.prototype.get=va.prototype.get;va.prototype.set=va.prototype.set;va.prototype.addImmutable=va.prototype.td;va.prototype.add=va.prototype.add;var za=function(){},Aa=function(a){return"function"==typeof a},r=function(a){return"string"==typeof a},Da=function(a){return"number"==typeof a&&!isNaN(a)},Ea=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Fa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ga=function(a,b){if(a&&Ea(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ha=function(a,b){if(!Da(a)||
!Da(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ja=function(a,b){for(var c=new Ia,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ka=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},La=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Ma=function(a){return Math.round(Number(a))||0},Oa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Pa=function(a){var b=[];if(Ea(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Qa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ra=function(){return(new Date).getTime()},Ia=function(){this.prefix="gtm.";this.values={}};Ia.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ia.prototype.get=function(a){return this.values[this.prefix+a]};Ia.prototype.contains=function(a){return void 0!==this.get(a)};
var Sa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ua=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Va=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Wa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Xa=function(a){for(var b=B,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Ya=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var D=function(a,b){ra.call(this);this.vf=a;this.yh=b};oa(D,ra);var $a=function(a,b){for(var c,d=0;d<b.length&&!(c=Za(a,b[d]),c instanceof pa);d++);return c},Za=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof D))throw Error("Attempting to execute non-function "+b[0]+".");return c.C.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.Cc;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};D.prototype.toString=function(){return this.vf};D.prototype.getName=function(){return this.vf};
D.prototype.getName=D.prototype.getName;D.prototype.Ga=function(){return new g(sa(this))};D.prototype.getKeys=D.prototype.Ga;D.prototype.C=function(a,b){var c=this;a.T().Xe();return this.yh.apply({evaluate:function(d){var e=a;return Ea(d)?Za(e,d):d},zd:function(d){return $a(a,d)},getName:function(){return c.getName()},T:function(){return a.T()},h:function(){return a}},Array.prototype.slice.call(arguments,1))};D.prototype.invoke=D.prototype.C;
D.prototype.wa=function(a,b){try{return this.C.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};D.prototype.safeInvoke=D.prototype.wa;var ab=function(){ra.call(this)};oa(ab,ra);ab.prototype.Ga=function(){return new g(sa(this))};ab.prototype.getKeys=ab.prototype.Ga;var bb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,cb={Fn:"function",Map:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=bb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],h="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(h)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof D?n="Fn":l instanceof g?n="List":l instanceof ab&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(cb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var db=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,eb=function(a){if(null==a)return String(a);var b=db.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},fb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},gb=function(a){if(!a||"object"!=eb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!fb(a,"constructor")&&!fb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||fb(a,b)},G=function(a,b){var c=b||("array"==eb(a)?[]:{}),d;for(d in a)if(fb(a,d)){var e=a[d];"array"==eb(e)?("array"!=eb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):gb(e)?(gb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var ib=function(a,b){var c=[],d=[],e=function(h,k){for(var l=sa(h),m=0;m<l.length;m++)k[l[m]]=f(h.get(l[m]))},f=function(h){var k=Fa(c,h);if(-1<k)return d[k];if(h instanceof g){var l=[];c.push(h);d.push(l);for(var m=h.Ga(),n=0;n<m.length();n++)l[m.get(n)]=f(h.get(m.get(n)));return l}if(h instanceof ab){var p={};c.push(h);d.push(p);e(h,p);return p}if(h instanceof D){var u=function(){for(var q=Array.prototype.slice.call(arguments,0),t=0;t<q.length;t++)q[t]=hb(q[t],b);var v=b?b.T():ta(),w=new va(v);
b&&(w.M=b.M);return f(h.C.apply(h,[w].concat(q)))};c.push(h);d.push(u);e(h,u);return u}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return f(a)},hb=function(a,b){var c=[],d=[],e=function(h,k){for(var l in h)h.hasOwnProperty(l)&&k.set(l,f(h[l]))},f=function(h){var k=Fa(c,h);if(-1<k)return d[k];if(Ea(h)||La(h)){var l=new g([]);c.push(h);d.push(l);for(var m in h)h.hasOwnProperty(m)&&l.set(m,f(h[m]));return l}if(gb(h)){var n=
new ab;c.push(h);d.push(n);e(h,n);return n}if("function"===typeof h){var p=new D("",function(q){for(var t=Array.prototype.slice.call(arguments,0),v=0;v<t.length;v++)t[v]=ib(this.evaluate(t[v]),b);return f((0,this.h().Ic)(h,h,t))});c.push(h);d.push(p);e(h,p);return p}var u=typeof h;if(null===h||"string"===u||"number"===u||"boolean"===u)return h};return f(a)};var jb={control:function(a,b){return new pa(a,this.evaluate(b))},fn:function(a,b,c){var d=this.h(),e=this.evaluate(b);if(!(e instanceof g))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.T().Fa(a.length+f.length);return new D(a,function(){return function(h){var k=ya(d);void 0===k.M&&(k.M=this.h().M);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.evaluate(l[m]),l[m]instanceof pa)return l[m];for(var n=
e.get("length"),p=0;p<n;p++)p<l.length?k.set(e.get(p),l[p]):k.set(e.get(p),void 0);k.set("arguments",new g(l));var u=$a(k,f);if(u instanceof pa)return"return"===u.R?u.getData():u}}())},list:function(a){var b=this.T();b.Fa(arguments.length);for(var c=new g,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.Fa(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.T(),c=new ab,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=
this.evaluate(arguments[d+1]),h=e.length;h+="string"===typeof f?f.length:1;b.Fa(h);c.set(e,f)}return c},undefined:function(){}};function kb(a,b){var c=Za(a,b);if(c instanceof pa||c instanceof D||c instanceof g||c instanceof ab||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var lb=function(){this.ia=ta();this.Ha=new va(this.ia)};aa=lb.prototype;aa.Da=function(a,b){var c=new D(a,b);c.U();this.Ha.set(a,c)};aa.Te=function(a,b){jb.hasOwnProperty(a)&&this.Da(b||a,jb[a])};aa.T=function(){return this.ia};aa.Nc=function(){this.ia=ta();this.Ha.ia=this.ia};aa.La=function(a){this.Ha.La(a)};
aa.xa=function(a){this.Ha.xa(a)};aa.ab=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.Yd(c)};aa.Yd=function(a){for(var b,c=0;c<arguments.length;c++)b=kb(this.Ha,arguments[c]);return b};aa.Oc=function(a,b){var c=ya(this.Ha);c.M=a;for(var d,e=1;e<arguments.length;e++)d=kb(c,arguments[e]);return d};aa.U=function(){this.Ha.U()};lb.prototype.makeImmutable=lb.prototype.U;lb.prototype.run=lb.prototype.Yd;lb.prototype.execute=lb.prototype.ab;lb.prototype.setJavaScriptProxy=lb.prototype.xa;
lb.prototype.resetQuota=lb.prototype.Nc;lb.prototype.getQuota=lb.prototype.T;lb.prototype.addNativeInstruction=lb.prototype.Te;lb.prototype.addInstruction=lb.prototype.Da;var mb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var qb={Ni:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof g)for(var f=arguments[e],h=0;h<f.length();h++)c.push(f.get(h));else c.push(arguments[e]);return new g(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.C(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.C(a,this.get(e),e,this)&&d.push(this.get(e));return new g(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.C(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.C(a,this.get(e),e,this));return new g(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.C(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");for(var h=
1;h<=d;h++)if(this.has(d-h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.C(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=mb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+
c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new g(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.C(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=mb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.C(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var rb={ADD:0,AND:1,APPLY:2,ASSIGN:3,BITWISE_AND:56,BITWISE_LEFT_SHIFT:57,BITWISE_NOT:58,BITWISE_OR:59,BITWISE_RIGHT_SHIFT:60,BITWISE_UNSIGNED_RIGHT_SHIFT:61,BITWISE_XOR:62,BLOCK:53,BREAK:4,CASE:5,CONST:52,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,FOR_IN_CONST:54,FOR_IN_LET:55,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,
IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42},sb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),tb=new pa("break"),ub=new pa("continue"),
vb=function(a,b){return this.evaluate(a)+this.evaluate(b)},wb=function(a,b){return this.evaluate(a)&&this.evaluate(b)},xb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof g))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");
}if("string"==typeof a){if(0<=Fa(sb,b))return hb(a[b].apply(a,mb(c)),this.h());throw Error("TypeError: "+b+" is not a function");}if(a instanceof g){if(a.has(b)){var d=a.get(b);if(d instanceof D){var e=mb(c);e.unshift(this.h());return d.C.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Fa(qb.Ni,b)){var f=mb(c);f.unshift(this.h());return qb[b].apply(a,f)}}if(a instanceof D||a instanceof ab){if(a.has(b)){var h=a.get(b);if(h instanceof D){var k=mb(c);k.unshift(this.h());return h.C.apply(h,
k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof D?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,mb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},zb=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.h();if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.evaluate(b);c.set(a,d);return d},Ab=function(a){var b=ya(this.h()),
c=$a(b,Array.prototype.slice.apply(arguments));if(c instanceof pa)return c},Bb=function(){return tb},Cb=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof pa)return d}},Db=function(a){for(var b=this.h(),c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.evaluate(arguments[c+1]);b.td(d,e)}}},Eb=function(){return ub},Fb=function(a,b,c){var d=new g;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[rb.FN,
a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.h().set(a,this.evaluate(f))},Gb=function(a,b){return this.evaluate(a)/this.evaluate(b)},Hb=function(a,b){return this.evaluate(a)==this.evaluate(b)},Ib=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
function Jb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=$a(e,c);if(f instanceof pa){if("break"==f.R)break;if("return"==f.R)return f}}else if(b instanceof ab||b instanceof g||b instanceof D)for(var h=b.Ga(),k=h.length(),l=0;l<k;l++){var m=a(h.get(l)),n=$a(m,c);if(n instanceof pa){if("break"==n.R)break;if("return"==n.R)return n}}}
var Lb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.h();return Jb(function(e){d.set(a,e);return d},b,c)},Mb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.h();return Jb(function(e){var f=ya(d);f.td(a,e);return f},b,c)},Nb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.h();return Jb(function(e){var f=ya(d);f.add(a,e);return f},b,c)},Ob=function(a){return this.h().get(this.evaluate(a))},
Pb=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");a instanceof ab||a instanceof g||a instanceof D?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:qa(b)&&(c=a[b]));return c},Qb=function(a,b){return this.evaluate(a)>this.evaluate(b)},Rb=function(a,b){return this.evaluate(a)>=this.evaluate(b)},Sb=function(a,b){return this.evaluate(a)===this.evaluate(b)},Tb=function(a,b){return this.evaluate(a)!==this.evaluate(b)},
Ub=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.zd(d);if(e instanceof pa)return e},Wb=function(a,b){return this.evaluate(a)<this.evaluate(b)},Xb=function(a,b){return this.evaluate(a)<=this.evaluate(b)},Yb=function(a,b){return this.evaluate(a)%this.evaluate(b)},Zb=function(a,b){return this.evaluate(a)*this.evaluate(b)},$b=function(a){return-this.evaluate(a)},ac=function(a){return!this.evaluate(a)},bc=function(a,b){return this.evaluate(a)!=this.evaluate(b)},
cc=function(){return null},dc=function(a,b){return this.evaluate(a)||this.evaluate(b)},ec=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c},fc=function(a){return this.evaluate(a)},gc=function(a){return Array.prototype.slice.apply(arguments)},hc=function(a){return new pa("return",this.evaluate(a))},ic=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof D||a instanceof
g||a instanceof ab)&&a.set(b,c);return c},jc=function(a,b){return this.evaluate(a)-this.evaluate(b)},kc=function(a,b,c){a=this.evaluate(a);var d=this.evaluate(b),e=this.evaluate(c);if(!Ea(d)||!Ea(e))throw Error("Error: Malformed switch instruction.");for(var f,h=!1,k=0;k<d.length;k++)if(h||a===this.evaluate(d[k]))if(f=this.evaluate(e[k]),f instanceof pa){var l=f.R;if("break"==l)return;if("return"==l||"continue"==l)return f}else h=!0;if(e.length==d.length+1&&(f=this.evaluate(e[e.length-1]),f instanceof
pa&&("return"==f.R||"continue"==f.R)))return f},lc=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)},mc=function(a){a=this.evaluate(a);return a instanceof D?"function":typeof a},nc=function(a){for(var b=this.h(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},oc=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.zd(f),e instanceof pa)){if("break"==e.R)return;if("return"==e.R)return e}for(;this.evaluate(a);){e=this.zd(f);
if(e instanceof pa){if("break"==e.R)break;if("return"==e.R)return e}this.evaluate(b)}},pc=function(a){return~Number(this.evaluate(a))},qc=function(a,b){return Number(this.evaluate(a))<<Number(this.evaluate(b))},rc=function(a,b){return Number(this.evaluate(a))>>Number(this.evaluate(b))},sc=function(a,b){return Number(this.evaluate(a))>>>Number(this.evaluate(b))},tc=function(a,b){return Number(this.evaluate(a))&Number(this.evaluate(b))},uc=function(a,b){return Number(this.evaluate(a))^Number(this.evaluate(b))},
vc=function(a,b){return Number(this.evaluate(a))|Number(this.evaluate(b))};var xc=function(){this.kf=!1;this.fa=new lb;wc(this);this.kf=!0};xc.prototype.Wh=function(){return this.kf};xc.prototype.isInitialized=xc.prototype.Wh;xc.prototype.ab=function(a){return this.fa.Yd(a)};xc.prototype.execute=xc.prototype.ab;xc.prototype.Oc=function(a,b){return this.fa.Oc(a,b)};xc.prototype.runProgram=xc.prototype.Oc;xc.prototype.U=function(){this.fa.U()};xc.prototype.makeImmutable=xc.prototype.U;
var wc=function(a){function b(f,h){e.fa.Te(f,String(h))}function c(f,h){e.fa.Da(String(d[f]),h)}var d=rb,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",vb);c("AND",wb);c("APPLY",xb);c("ASSIGN",zb);c("BLOCK",Ab);c("BREAK",Bb);c("CASE",Cb);c("CONST",Db);c("CONTINUE",Eb);c("DEFAULT",Cb);c("DEFN",Fb);c("DIVIDE",Gb);c("EQUALS",Hb);c("EXPRESSION_LIST",Ib);c("FOR_IN",Lb);c("FOR_IN_CONST",Mb);c("FOR_IN_LET",Nb);c("GET",Ob);c("GET_INDEX",
Pb);c("GET_PROPERTY",Pb);c("GREATER_THAN",Qb);c("GREATER_THAN_EQUALS",Rb);c("IDENTITY_EQUALS",Sb);c("IDENTITY_NOT_EQUALS",Tb);c("IF",Ub);c("LESS_THAN",Wb);c("LESS_THAN_EQUALS",Xb);c("MODULUS",Yb);c("MULTIPLY",Zb);c("NEGATE",$b);c("NOT",ac);c("NOT_EQUALS",bc);c("NULL",cc);c("OR",dc);c("POST_DECREMENT",ec);c("POST_INCREMENT",ec);c("PRE_DECREMENT",fc);c("PRE_INCREMENT",fc);c("QUOTE",gc);c("RETURN",hc);c("SET_PROPERTY",ic);c("SUBTRACT",jc);c("SWITCH",kc);c("TERNARY",lc);c("TYPEOF",mc);c("VAR",nc);c("WHILE",
oc);c("BITWISE_NOT",pc);c("BITWISE_LEFT_SHIFT",qc);c("BITWISE_RIGHT_SHIFT",rc);c("BITWISE_UNSIGNED_RIGHT_SHIFT",sc);c("BITWISE_AND",tc);c("BITWISE_XOR",uc);c("BITWISE_OR",vc)};xc.prototype.Da=function(a,b){this.fa.Da(a,b)};xc.prototype.addInstruction=xc.prototype.Da;xc.prototype.T=function(){return this.fa.T()};xc.prototype.getQuota=xc.prototype.T;xc.prototype.Nc=function(){this.fa.Nc()};xc.prototype.resetQuota=xc.prototype.Nc;xc.prototype.La=function(a){this.fa.La(a)};xc.prototype.xa=function(a){this.fa.xa(a)};
xc.prototype.setJavaScriptProxy=xc.prototype.xa;
var yc=[],zc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ac=function(a){return zc[a]},Bc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Fc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Gc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Hc=function(a){return Gc[a]};yc[7]=function(a){return String(a).replace(Fc,Hc)};
yc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Fc,Hc)+"'"}};var Qc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Rc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Sc=function(a){return Rc[a]};yc[16]=function(a){return a};var Uc;
var Vc=[],Wc=[],Xc=[],Yc=[],Zc=[],$c={},ad,bd,cd,dd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},ed=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=$c[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):Uc(c,e,b)},gd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=fd(a[e],b,c));
return d},hd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=$c[b];return c?c.priorityOverride||0:0},fd=function(a,b,c){if(Ea(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(fd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Vc[f];if(!h||b.Hd(h))return;c[f]=!0;try{var k=gd(h,b,c);k.vtp_gtmEventId=b.id;d=ed(k,b);cd&&(d=cd.kh(d,k))}catch(y){b.sf&&b.sf(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[fd(a[l],b,c)]=fd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=fd(a[n],b,c);bd&&(m=m||p===bd.hc);d.push(p)}return bd&&m?bd.nh(d):d.join("");case "escape":d=fd(a[1],b,c);if(bd&&Ea(a[1])&&"macro"===a[1][0]&&bd.Xh(a))return bd.si(d);d=String(d);for(var u=2;u<a.length;u++)yc[a[u]]&&(d=yc[a[u]](d));return d;case "tag":var q=a[1];if(!Yc[q])throw Error("Unable to resolve tag reference "+q+".");return d={cf:a[2],
index:q};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=id(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},id=function(a,b,c){try{return ad(gd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var jd=function(){var a=function(b){return{toString:function(){return b}}};return{me:a("convert_case_to"),ne:a("convert_false_to"),oe:a("convert_null_to"),pe:a("convert_true_to"),qe:a("convert_undefined_to"),Zi:a("debug_mode_metadata"),Ca:a("function"),xg:a("instance_name"),yg:a("live_only"),zg:a("malware_disabled"),Ag:a("metadata"),fj:a("original_vendor_template_id"),Bg:a("once_per_event"),Me:a("once_per_load"),Ne:a("setup_tags"),Oe:a("tag_id"),Pe:a("teardown_tags")}}();var kd=function(a,b,c){this.Cf=a;this.mi=b;this.uf=c};oa(kd,Error);kd.prototype.getParameters=function(){return this.mi};function ld(a,b){if(Ea(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)ld(a[c],b[c])}};var md=function(a,b){this.yf=a;this.tf=b;this.$e=[]};oa(md,Error);var nd=function(a){var b=a.$e.slice();a.tf&&(b=a.tf(b));return b};var pd=function(){return function(a,b){a instanceof md||(a=new md(a,od));b&&a.$e.push(b);throw a;}};function od(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Da(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var qd=null,td=function(a){function b(p){for(var u=0;u<p.length;u++)d[p[u]]=!0}var c=[],d=[];qd=rd(a);for(var e=0;e<Wc.length;e++){var f=Wc[e],h=sd(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<Yc.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},sd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=qd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=qd(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},rd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=id(Xc[c],a));return b[c]}};var ud=function(){this.Ob={}};function vd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,h="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!f)throw new kd(c,d,h);}}function wd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.Ob[d],f=a.Ob.all;if(e||f){var h=c.apply(void 0,Array.prototype.slice.call(arguments,0));vd(e,b,d,h);vd(f,b,d,h)}}}};var Ad=function(a){var b=xd.s,c=this;this.Df=new ud;this.Ve={};var d={},e=wd(this.Df,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ka(a,function(f,h){var k={};Ka(h,function(l,m){var n=yd(l,m);k[l]=n.assert;d[l]||(d[l]=n.I)});c.Ve[f]=function(l,m){var n=k[l];if(!n)throw zd(l,{},"The requested permission "+l+" is not configured.");var p=Array.prototype.slice.call(arguments,0);n.apply(void 0,p);e.apply(void 0,p)}})},Dd=function(a){return Bd.Ve[a]||
function(){}};function yd(a,b){var c=dd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=zd;try{return ed(c)}catch(d){return{assert:function(e){throw new kd(e,{},"Permission "+e+" is unknown.");},I:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function zd(a,b,c){return new kd(a,b,c)};
var Ld=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Md=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Ld(b,"/*")&&(b=b.slice(0,-2));Ld(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var h=d[f];if(h){e=a.indexOf(h,e);if(-1===e||0===f&&0!==e)return!1;e+=h.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},Nd=/^[a-z0-9-]+$/i,Od=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Pd=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Nd.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var h=0;h<b.length;h++){var k;var l=a,m=b[h];if(!Od.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),p=n.slice(0,n.indexOf("/")),u;var q=l.hostname,t=p;if(0!==t.indexOf("*."))u=q.toLowerCase()===t.toLowerCase();else{t=t.slice(2);var v=q.toLowerCase().indexOf(t.toLowerCase());
u=-1===v?!1:q.length===t.length?!0:q.length!==t.length+v?!1:"."===q[v-1]}if(u){var w=n.slice(n.indexOf("/"));k=Md(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
function Sd(a){return""+a}
function Td(a,b){var c=[];return c};var Ud=function(a,b){var c=new D(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.evaluate(d[e]);return b.apply(this,d)});c.U();return c},Vd=function(a,b){var c=new ab,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Aa(e)?c.set(d,Ud(a+"_"+d,e)):(Da(e)||r(e)||"boolean"==typeof e)&&c.set(d,e)}c.U();return c};var Wd=function(a,b){F(this.getName(),["apiName:!string","message:?string"],arguments);var c={},d=new ab;return d=
Vd("AssertApiSubject",c)};var Xd=function(a,b){F(this.getName(),["actual:?*","message:?string"],arguments);var c={},d=new ab;return d=Vd("AssertThatSubject",c)};var Yd=function(a){var b;return b};var Zd=function(a){var b;return b};var $d=function(a){F(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var ae=function(a){F(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var be=function(a){F(this.getName(),["message:?string"],arguments);};var ce=function(a,b){F(this.getName(),["min:!number","max:!number"],arguments);return Ha(a,b)};var de=function(){return(new Date).getTime()};var ee=function(a,b,c){var d=a.h().M;if(!d)throw Error("Missing program state.");d.Ug.apply(null,Array.prototype.slice.call(arguments,1))};var fe=!1;var ge={Si:'',vh:''},he=function(){ee(this,"read_container_data");var a=new ab;a.set("containerId",'GTM-KHWBBT');a.set("version",'567');a.set("environmentName",'');a.set("debugMode",fe);a.set("previewMode",Oa(ge.Si));a.set("environmentMode",Oa(ge.vh));a.U();return a};var ie=function(a){return null===a?"null":a instanceof g?"array":a instanceof D?"function":typeof a};var je=function(a){return Ma(ib(a,this.h()))};var ke=function(a){return Number(ib(a,this.h()))};var le=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var me=function(a,b,c){var d=null,e=!1;return e?d:null};var ne="floor ceil round max min abs pow sqrt".split(" ");function oe(a){return function(){for(var b=[],c=this.h(),d=0;d<arguments.length;++d)b.push(ib(arguments[d],c));return a.apply(null,b)}}function pe(){for(var a=Math,b={},c=0;c<ne.length;c++){var d=ne[c];a.hasOwnProperty(d)&&(b[d]=oe(a[d].bind(a)))}return b};var qe=function(){var a={};return{Dh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Ki:function(b,c){a[b]=c},reset:function(){a={}}}},re=function(a,b){F(this.getName(),["apiName:!string","mock:?*"],arguments);};var se=function(){this.Qb={}};se.prototype.get=function(a,b){var c=this.Qb.hasOwnProperty(a)?this.Qb[a]:void 0;return c};se.prototype.add=function(a,b,c){if(this.Qb.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.Qb[a]=c?void 0:Aa(b)?Ud(a,b):Vd(a,b)};function te(){var a={};return a};var B=window,H=document,ue=navigator,ve=H.currentScript&&H.currentScript.src,we=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},xe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ye=function(a,b,c){var d=H.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;xe(d,b);c&&(d.onerror=c);var e;if(null===na)b:{var f=ia.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ja.test(k)){na=k;break b}}na=""}e=na;e&&d.setAttribute("nonce",e);var l=H.getElementsByTagName("script")[0]||H.body||H.head;l.parentNode.insertBefore(d,l);return d},ze=function(){if(ve){var a=ve.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ae=function(a,b){var c=H.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=H.body&&H.body.lastChild||
H.body||H.head;d.parentNode.insertBefore(c,d);xe(c,b);void 0!==a&&(c.src=a);return c},Be=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ce=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},De=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){B.setTimeout(a,0)},Ee=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Fe=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ge=function(a){var b=H.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},He=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},Ie=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Ke=function(a){return Je?H.querySelectorAll(a):null},Le=function(a,b){if(!Je)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Me=!1;if(H.querySelectorAll)try{var Ne=H.querySelectorAll(":root");Ne&&1==Ne.length&&Ne[0]==H.documentElement&&(Me=!0)}catch(a){}var Je=Me;var M={Ba:"_ee",dd:"event_callback",ob:"event_timeout",D:"gtag.config",W:"allow_ad_personalization_signals",ld:"restricted_data_processing",ca:"cookie_expires",nb:"cookie_update",Ua:"session_duration",da:"user_properties"};var cf=/[A-Z]+/,df=/\s/,ef=function(a){if(r(a)&&(a=Qa(a),!df.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(cf.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],i:d}}}}},gf=function(a){for(var b={},c=0;c<a.length;++c){var d=ef(a[c]);d&&(b[d.id]=d)}ff(b);var e=[];Ka(b,function(f,h){e.push(h)});return e};
function ff(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.i[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var xd={},N=null,hf=Math.random();xd.s="GTM-KHWBBT";xd.mc="121";var jf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},kf="www.googletagmanager.com/gtm.js";var lf=kf,mf=null,nf=null,of=null,pf="//www.googletagmanager.com/a?id="+xd.s+"&cv=567",qf={},rf={},sf=function(){var a=N.sequence||0;N.sequence=a+1;return a};var tf={},uf=function(a,b){tf[a]=tf[a]||[];tf[a][b]=!0},vf=function(a){for(var b=[],c=tf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var wf=function(){return"&tc="+Yc.filter(function(a){return a}).length},zf=function(){xf||(xf=B.setTimeout(yf,500))},yf=function(){xf&&(B.clearTimeout(xf),xf=void 0);void 0===Af||Bf[Af]&&!Cf&&!Df||(Ef[Af]||Ff.Zh()||0>=Gf--?(uf("GTM",1),Ef[Af]=!0):(Ff.Ci(),Be(Hf()),Bf[Af]=!0,If=Df=Cf=""))},Hf=function(){var a=Af;if(void 0===a)return"";var b=vf("GTM"),c=vf("TAGGING");return[Jf,Bf[a]?"":"&es=1",Kf[a],b?"&u="+b:"",c?"&ut="+c:"",wf(),Cf,Df,If,"&z=0"].join("")},Lf=function(){return[pf,"&v=3&t=t","&pid="+
Ha(),"&rv="+xd.mc].join("")},Mf="0.005000">Math.random(),Jf=Lf(),Nf=function(){Jf=Lf()},Bf={},Cf="",Df="",If="",Af=void 0,Kf={},Ef={},xf=void 0,Ff=function(a,b){var c=0,d=0;return{Zh:function(){if(c<a)return!1;Ra()-d>=b&&(c=0);return c>=a},Ci:function(){Ra()-d>=b&&(c=0);c++;d=Ra()}}}(2,1E3),Gf=1E3,Of=function(a,b){if(Mf&&!Ef[a]&&Af!==a){yf();Af=a;Cf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Kf[a]="&e="+c+"&eid="+a;zf()}},Pf=function(a,b,c){if(Mf&&!Ef[a]&&b){a!==Af&&
(yf(),Af=a);var d=String(b[jd.Ca]||"").replace(/_/g,"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Cf=Cf?Cf+"."+e:"&tr="+e;zf();2022<=Hf().length&&yf()}},Qf=function(a,b,c){if(Mf&&!Ef[a]){a!==Af&&(yf(),Af=a);var d=c+b;Df=Df?Df+"."+d:"&epr="+d;zf();2022<=Hf().length&&yf()}};var Rf={},Sf=new Ia,Tf={},Uf={},Xf={name:"dataLayer",set:function(a,b){G(Ya(a,b),Tf);Vf()},get:function(a){return Wf(a,2)},reset:function(){Sf=new Ia;Tf={};Vf()}},Wf=function(a,b){if(2!=b){var c=Sf.get(a);if(Mf){var d=Yf(a);c!==d&&uf("GTM",5)}return c}return Yf(a)},Yf=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:$f(d)},$f=function(a){for(var b=Tf,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var bg=function(a,b){Uf.hasOwnProperty(a)||(Sf.set(a,b),G(Ya(a,b),Tf),Vf())},Vf=function(a){Ka(Uf,function(b,c){Sf.set(b,c);G(Ya(b,void 0),Tf);G(Ya(b,c),Tf);a&&delete Uf[b]})},cg=function(a,b,c){Rf[a]=Rf[a]||{};var d=1!==c?Yf(b):Sf.get(b);"array"===eb(d)||"object"===eb(d)?Rf[a][b]=G(d):Rf[a][b]=d},dg=function(a,b){if(Rf[a])return Rf[a][b]};var eg=function(){var a=!1;return a};var R=function(a,b,c,d){return(2===fg()||d||"http:"!=B.location.protocol?a:b)+c},fg=function(){var a=ze(),b;if(1===a)a:{var c=lf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=H.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var ug=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),vg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},wg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},xg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var zg=function(a){rf.pntr=rf.pntr||["nonGoogleScripts"];rf.snppx=rf.snppx||["nonGoogleScripts"];rf.qpx=rf.qpx||["nonGooglePixels"];var b=Wf("gtm.whitelist");b&&uf("GTM",9);
var c=b&&Wa(Pa(b),vg),d=Wf("gtm.blacklist");d||(d=Wf("tagTypeBlacklist"))&&uf("GTM",3);d?uf("GTM",8):d=[];yg()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Fa(Pa(d),"google")&&uf("GTM",2);var e=d&&Wa(Pa(d),wg),f={};return function(h){var k=h&&h[jd.Ca];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];
var l=rf[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>Fa(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>Fa(c,l[p])){uf("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var q=0<=Fa(e,k);if(q)u=q;else{var t=Ja(e,l||[]);t&&uf("GTM",10);u=t}}var v=!m||u;v||!(0<=Fa(l,"sandboxedScripts"))||c&&-1!==Fa(c,"sandboxedScripts")||(v=Ja(e,xg));return f[k]=v}},yg=function(){return ug.test(B.location&&B.location.hostname)};var Ag={kh:function(a,b){b[jd.me]&&"string"===typeof a&&(a=1==b[jd.me]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(jd.oe)&&null===a&&(a=b[jd.oe]);b.hasOwnProperty(jd.qe)&&void 0===a&&(a=b[jd.qe]);b.hasOwnProperty(jd.pe)&&!0===a&&(a=b[jd.pe]);b.hasOwnProperty(jd.ne)&&!1===a&&(a=b[jd.ne]);return a}};var Bg={active:!0,isWhitelisted:function(){return!0}},Cg=function(a){var b=N.zones;!b&&a&&(b=N.zones=a());return b};var Dg=function(){};var Fg=!1,Gg=0,Hg=[];function Ig(a){if(!Fg){var b=H.createEventObject,c="complete"==H.readyState,d="interactive"==H.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Fg=!0;for(var e=0;e<Hg.length;e++)I(Hg[e])}Hg.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function Jg(){if(!Fg&&140>Gg){Gg++;try{H.documentElement.doScroll("left"),Ig()}catch(a){B.setTimeout(Jg,50)}}}var Kg=function(a){Fg?a():Hg.push(a)};var Lg={},Mg={},Ng=function(a,b,c,d){if(!Mg[a]||jf[b]||"__zone"===b)return-1;var e={};gb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return Mg[a].tags.push(e)-1},Og=function(a,b,c,d){if(Mg[a]){var e=Mg[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Pg(a){for(var b=Lg[a]||[],c=0;c<b.length;c++)b[c]();Lg[a]={push:function(d){d(xd.s,Mg[a])}}}
var Sg=function(a,b,c){Mg[a]={tags:[]};Aa(b)&&Qg(a,b);c&&B.setTimeout(function(){return Pg(a)},Number(c));return Rg(a)},Qg=function(a,b){Lg[a]=Lg[a]||[];Lg[a].push(Ta(function(){return I(function(){b(xd.s,Mg[a])})}))};function Rg(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ta(function(){b++;d&&b>=c&&Pg(a)})},Sg:function(){d=!0;b>=c&&Pg(a)}}};var Tg=function(){function a(d){return!Da(d)||0>d?0:d}if(!N._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=Da(Xf.get("gtm.start"))?Xf.get("gtm.start"):0;N._li={cst:a(c-b),cbt:a(nf-b)}}};var Xg=!1,Yg=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]},Zg=!1;
var $g=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(B[b])B.hasOwnProperty(b)||uf("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}Tg();return B[b]},ah=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Yg();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ch=function(){},bh=function(){return B.GoogleAnalyticsObject||"ga"};var eh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var fh=/:[0-9]+$/,gh=function(a,b,c,d){for(var e=[],f=a.split("&"),h=0;h<f.length;h++){var k=f[h].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},jh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=hh(a.protocol)||hh(B.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
B.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||B.location.hostname).replace(fh,"").toLowerCase());return ih(a,b,c,d,e)},ih=function(a,b,c,d,e){var f,h=hh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=kh(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(fh,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||uf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Fa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=gh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},hh=function(a){return a?a.replace(":",
"").toLowerCase():""},kh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},lh=function(a){var b=H.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||uf("TAGGING",1),c="/"+c);var d=b.hostname.replace(fh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var qh=function(){return!1},sh=function(a){},
th=function(){var a={};return function(b,c,d){}};function rh(a,b,c){b.containerId=xd.s;var d={type:a,value:b};c.length&&(d.trace=c);return d};function uh(a,b,c,d){var e=Yc[a],f=vh(a,b,c,d);if(!f)return null;var h=fd(e[jd.Ne],c,[]);if(h&&h.length){var k=h[0];f=uh(k.index,{B:f,w:1===k.cf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function vh(a,b,c,d){function e(){if(f[jd.zg])k();else{var w=gd(f,c,[]),y=Ng(c.id,String(f[jd.Ca]),Number(f[jd.Oe]),w[jd.Ag]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Ra()-C;Pf(c.id,Yc[a],"5");Og(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Ra()-C;Pf(c.id,Yc[a],"6");Og(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Pf(c.id,f,"1");var z=function(A){var E=Ra()-C;sh(A);Pf(c.id,f,"7");Og(c.id,y,"exception",E);x||(x=!0,k())};var C=Ra();try{ed(w,c)}catch(A){z(A)}}}var f=Yc[a],h=b.B,k=b.w,l=b.terminate;if(c.Hd(f))return null;var m=fd(f[jd.Pe],c,[]);if(m&&m.length){var n=m[0],p=uh(n.index,{B:h,w:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.cf?l:p}if(f[jd.Me]||f[jd.Bg]){var u=f[jd.Me]?Zc:c.Oi,q=h,t=k;if(!u[a]){e=Ta(e);var v=wh(a,u,e);h=v.B;k=v.w}return function(){u[a](q,t)}}return e}
function wh(a,b,c){var d=[],e=[];b[a]=xh(d,e,c);return{B:function(){b[a]=yh;for(var f=0;f<d.length;f++)d[f]()},w:function(){b[a]=zh;for(var f=0;f<e.length;f++)e[f]()}}}function xh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function yh(a){a()}function zh(a,b){b()};var Ch=function(a,b){for(var c=[],d=0;d<Yc.length;d++)if(a.Mb[d]){var e=Yc[d];var f=b.add();try{var h=uh(d,{B:f,w:f,terminate:f},a,d);h?c.push({Of:d,Ef:hd(e),ab:h}):(Ah(d,a),f())}catch(l){f()}}b.Sg();c.sort(Bh);for(var k=0;k<c.length;k++)c[k].ab();return 0<c.length};function Bh(a,b){var c,d=b.Ef,e=a.Ef;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Of,k=b.Of;f=h>k?1:h<k?-1:0}return f}
function Ah(a,b){if(!Mf)return;var c=function(d){var e=b.Hd(Yc[d])?"3":"4",f=fd(Yc[d][jd.Ne],b,[]);f&&f.length&&c(f[0].index);Pf(b.id,Yc[d],e);var h=fd(Yc[d][jd.Pe],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Dh=!1,Eh=function(a,b,c,d,e){if("gtm.js"==b){if(Dh)return!1;Dh=!0}Of(a,b);var f=Sg(a,d,e);cg(a,"event",1);cg(a,"ecommerce",1);cg(a,"gtm");var h={id:a,name:b,Hd:zg(c),Mb:[],Oi:[],sf:function(n){uf("GTM",6);sh(n)}};h.Mb=td(h);var k=Ch(h,f);
if(!k)return k;for(var l=0;l<h.Mb.length;l++)if(h.Mb[l]){var m=Yc[l];if(m&&!jf[String(m[jd.Ca])])return!0}return!1};var Gh=/^https?:\/\/www\.googletagmanager\.com/;function Hh(){var a;return a}function Jh(a,b){}
function Ih(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function Kh(){var a=!1;return a};var Lh=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.jb={};this.globalConfig={};this.B=function(){};this.w=function(){}},Mh=function(a){var b=new Lh;b.eventModel=a;return b},Nh=function(a,b){a.targetConfig=b;return a},Oh=function(a,b){a.containerConfig=b;return a},Ph=function(a,b){a.jb=b;return a},Qh=function(a,b){a.globalConfig=b;return a},Rh=function(a,b){a.B=b;return a},Sh=function(a,b){a.w=b;return a};
Lh.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.jb[a])return this.jb[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Th=function(a){function b(e){Ka(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ka(c,function(e){d.push(e)});return d};var Uh={},Vh=["G"];Uh.Qf="";var Wh=Uh.Qf.split(",");function Xh(){var a=N;return a.gcq=a.gcq||new Yh}
var Zh=function(a,b,c){Xh().register(a,b,c)},$h=function(a,b,c,d){Xh().push("event",[b,a],c,d)},ai=function(a,b){Xh().push("config",[a],b)},bi={},ci=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.jb={};this.Ff=null;this.jf=!1},di=function(a,b,c,d,e){this.type=a;this.Pf=b;this.P=c||"";this.sc=d;this.defer=e},Yh=function(){this.Ye={};this.hf={};this.Bb=[]},ei=function(a,b){var c=ef(b);return a.Ye[c.containerId]=a.Ye[c.containerId]||new ci},fi=function(a,b,c,d){if(d.P){var e=
ei(a,d.P),f=e.Ff;if(f){var h=G(c),k=G(e.targetConfig[d.P]),l=G(e.containerConfig),m=G(e.jb),n=G(a.hf),p=Wf("gtm.uniqueEventId"),u=ef(d.P).prefix,q=Sh(Rh(Qh(Ph(Oh(Nh(Mh(h),k),l),m),n),function(){Qf(p,u,"2");}),function(){Qf(p,u,"3");});try{Qf(p,u,"1");3===f.length?f(b,d.Pf,q):4===f.length&&
f(d.P,b,d.Pf,q)}catch(t){Qf(p,u,"4");}}}};
Yh.prototype.register=function(a,b,c){if(3!==ei(this,a).status){ei(this,a).Ff=b;ei(this,a).status=3;c&&(ei(this,a).jb=c);var d=ef(a),e=bi[d.containerId];if(void 0!==e){var f=N[d.containerId].bootstrap,h=d.prefix.toUpperCase();N[d.containerId]._spx&&(h=h.toLowerCase());var k=Wf("gtm.uniqueEventId"),l=h,m=Ra()-f;if(Mf&&!Ef[k]){k!==Af&&(yf(),Af=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);If=If?If+","+n:"&cl="+n}delete bi[d.containerId]}this.flush()}};
Yh.prototype.push=function(a,b,c,d){var e=Math.floor(Ra()/1E3);if(c){var f=ef(c),h;if(h=f){var k;if(k=1===ei(this,c).status)a:{var l=f.prefix;k=!0}h=k}if(h&&(ei(this,c).status=2,this.push("require",[],f.containerId),bi[f.containerId]=Ra(),!eg())){var m=encodeURIComponent(f.containerId),n=("http:"!=B.location.protocol?"https:":
"http:")+"//www.googletagmanager.com";ye(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.Bb.push(new di(a,e,c,b,d));d||this.flush()};
Yh.prototype.flush=function(a){for(var b=this;this.Bb.length;){var c=this.Bb[0];if(c.defer)c.defer=!1,this.Bb.push(c);else switch(c.type){case "require":if(3!==ei(this,c.P).status&&!a)return;break;case "set":Ka(c.sc[0],function(l,m){G(Ya(l,m),b.hf)});break;case "config":var d=c.sc[0],e=!!d[M.gc];delete d[M.gc];var f=ei(this,c.P),h=ef(c.P),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.P]={});f.jf&&e||fi(this,M.D,d,c);f.jf=!0;delete d[M.Ba];k?G(d,f.containerConfig):G(d,f.targetConfig[c.P]);
break;case "event":fi(this,c.sc[1],c.sc[0],c)}this.Bb.shift()}};var gi=function(a,b){return!0};var hi=function(a,b){var c;return c};var ii=function(a){};var ji=function(a){var b;F(this.getName(),["path:!string"],arguments);ee(this,"access_globals","read",a);var c=a.split("."),d=B,e;for(e=0;e<c.length-1;e++)if(d=d[c[e]],null==d)return;b=d[c[e]];return hb(b,this.h())};var ki=function(a,b){var c=null;return hb(c,this.h())};var li=function(a){var b;return hb(b,
this.h())};var mi=function(a){var b;return b};var ni=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},qi=function(a,b,c,d){var e=oi(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=pi(e,function(f){return f.zc},b);if(1===e.length)return e[0].id;e=pi(e,function(f){return f.Nb},c);return e[0]?e[0].id:void 0}};
function ri(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=ni(b,e).indexOf(c)}
var ui=function(a,b,c,d,e){var f;if(void 0==b)f=a+"=deleted; expires="+(new Date(0)).toUTCString();else{d&&(b=encodeURIComponent(b));var h=b;h&&1200<h.length&&(h=h.substring(0,1200));b=h;f=a+"="+b}var k=void 0,l=void 0,m;for(m in c)if(c.hasOwnProperty(m)){var n=c[m];if(null!=n)switch(m){case "secure":n&&(f+="; secure");break;case "domain":k=n;break;default:"path"==m&&(l=n),"expires"==m&&n instanceof Date&&(n=n.toUTCString()),f+="; "+m+"="+n}}if("auto"===k){for(var p=si(),u=void 0,q=0,t=0;t<p.length;++t){var v=
"none"!=p[t]?p[t]:void 0;if(e){c.domain=v;try{e(a,c)}catch(w){u=w;continue}}q+=1;if(!ti(v,l)&&ri(f+(v?"; domain="+v:""),a,b))return!0}if(u&&!q)throw u;return!1}e&&e(a,c);k&&"none"!=k&&(f+="; domain="+k);return!ti(k,l)&&ri(f,a,b)},vi=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);return ui(a,b,h,f)};
function pi(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function oi(a,b){for(var c=[],d=ni(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),zc:1*k[0]||1,Nb:1*k[1]||1}))}}return c}
var wi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,xi=/(^|\.)doubleclick\.net$/i,ti=function(a,b){return xi.test(document.location.hostname)||"/"===b&&wi.test(a)},si=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;xi.test(e)||wi.test(e)||a.push("none");return a};var yi=function(a,b){b=void 0===b?!0:b;var c;return c};var zi=function(a,b){var c;return c};var Ai=function(a,b){var c;return c};var Bi=function(a){var b="";return b};var Ci=function(a){var b="";F(this.getName(),["component:?string"],arguments),ee(this,"get_url",a),b=jh(lh(B.location.href),a);return b};var Di=function(a,b){F(this.getName(),["url:!string","onSuccess:?Fn"],arguments);ee(this,"inject_hidden_iframe",a);var c=this.h();Ae(a,function(){b instanceof D&&b.wa(c)})};var Ei={},Fi=function(a,b,c,d){F(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);ee(this,"inject_script",a);var e=this.h(),f=function(){b instanceof D&&b.wa(e)},h=function(){c instanceof D&&c.wa(e)};if(d){var k=d;Ei[k]?(Ei[k].onSuccess.push(f),Ei[k].onFailure.push(h)):(Ei[k]={onSuccess:[f],onFailure:[h]},f=function(){for(var l=Ei[k].onSuccess,m=0;m<l.length;m++)I(l[m]);l.push=function(n){I(n);return 0}},h=function(){for(var l=Ei[k].onFailure,m=0;m<l.length;m++)I(l[m]);
Ei[k]=null},ye(a,f,h))}else ye(a,f,h)};var Gi=function(){return!1},Hi={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Ii=function(){};var Ji=function(a,b){var c=!1;return c};var Ki=function(a,b,c){F(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn"],arguments);ee(this,"send_pixel",a);var d=this.h();Be(a,function(){b instanceof D&&b.wa(d)},function(){c instanceof D&&c.wa(d)});};var Li=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var Mi=function(a,b,c){F(this.getName(),["path:!string","value:?*","overrideExisting:?boolean"],arguments);ee(this,"access_globals","readwrite",a);var d=a.split("."),e=B,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=ib(b,this.h()),!0;return!1};var Ni=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var Oi=function(a,b,c){var d=this;};var Pi=function(a){var b;return b};function Qi(a){}
function Ri(a,b){var c;return hb(c,this.h())}function Si(){var a="";return a}
function Ti(){var a="";return a}
var Ui=function(){var a=new se;eg()?(a.add("injectHiddenIframe",za),a.add("injectScript",za)):(a.add("injectHiddenIframe",Di),a.add("injectScript",Fi));var b=Ki;a.add("addEventCallback",Qi);a.add("aliasInWindow",gi);a.add("assertThat",Xd);a.add("assertApi",Wd);a.add("callInWindow",hi);a.add("callLater",ii);a.add("copyFromDataLayer",
Ri);a.add("copyFromWindow",ji);a.add("createQueue",li);a.add("createArgumentsQueue",ki);a.add("encodeUri",$d);a.add("encodeUriComponent",ae);a.add("fail",be);a.add("generateRandom",ce);a.add("getCookieValues",yi);a.add("getQueryParameters",zi);a.add("getReferrerQueryParameters",Ai);a.add("getReferrerUrl",Bi);a.add("getTimestamp",de);a.add("getUrl",Ci);a.add("logToConsole",Ii);a.add("makeInteger",je);a.add("makeString",le);a.add("makeTableMap",me);a.add("mock",re);a.add("queryPermission",Ji);a.add("readCharacterSet",
Si);a.add("readTitle",Ti);a.add("sendPixel",b);a.add("setCookie",Li);a.add("setInWindow",Mi);a.add("TestHelper",te());a.add("Math",pe());a.add("decodeUri",Yd),a.add("decodeUriComponent",Zd);a.add("sha256",Oi);
a.add("makeNumber",ke);a.add("getType",ie);return function(c){var d;if(a.Qb.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Vi,Bd;
function Wi(){var a=data.runtime||[],b=data.runtime_lines;Vi=new xc;Xi();Uc=function(e,f,h){Yi(f);var k=new ab;Ka(f,function(n,p){k.set(n,hb(p))});Vi.La(pd());var l={Ug:Dd(e),eventId:void 0!==h?h.id:void 0};qh()&&(l.aa={Nd:qe(),Ab:{},Gb:th()});var m=Vi.Oc(l,[e,k]);Vi.La(void 0);m instanceof pa&&"return"===m.R&&(m=m.getData());return ib(m)};Vi.Da("require",Ui());for(var c=0;c<a.length;c++){var d=a[c];if(!Ea(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&ld(d,b[c]);Vi.ab(d)}}
function Yi(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Aa(b)&&(a.gtmOnSuccess=function(){I(b)});Aa(c)&&(a.gtmOnFailure=function(){I(c)})}function Xi(){var a=Vi;N.SANDBOXED_JS_SEMAPHORE=N.SANDBOXED_JS_SEMAPHORE||0;a.xa(function(b,c,d){N.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{N.SANDBOXED_JS_SEMAPHORE--}})};var Zi="".split(/,/),$i=!1;var aj=null,bj={},cj={},dj;function ej(a,b){var c={event:a};b&&(c.eventModel=G(b),b[M.dd]&&(c.eventCallback=b[M.dd]),b[M.ob]&&(c.eventTimeout=b[M.ob]));return c}
var kj={config:function(a){},event:function(a){var b=a[1];if(r(b)&&!(3<a.length)){var c;if(2<a.length){if(!gb(a[2])&&void 0!=a[2])return;c=a[2]}var d=ej(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Bd.Df;d.Ob[b]?
d.Ob[b].push(c):d.Ob[b]=[c]}},set:function(a){var b;2==a.length&&gb(a[1])?b=G(a[1]):3==a.length&&r(a[1])&&(b={},gb(a[2])||Ea(a[2])?b[a[1]]=G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},lj={policy:!0};var mj=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},oj=function(a){var b=nj(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Bj=function(a){if(Aj(a))return a;this.Ui=a};Bj.prototype.Gh=function(){return this.Ui};var Aj=function(a){return!a||"object"!==eb(a)||gb(a)?!1:"getUntrustedUpdateValue"in a};Bj.prototype.getUntrustedUpdateValue=Bj.prototype.Gh;var Cj=!1,Dj=[];function Ej(){if(!Cj){Cj=!0;for(var a=0;a<Dj.length;a++)I(Dj[a])}}var Fj=function(a){Cj?I(a):Dj.push(a)};var Gj=[],Hj=!1,Ij=function(a){return B["dataLayer"].push(a)},Jj=function(a){var b=N["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Kj(a){var b=a._clear;Ka(a,function(f,h){"_clear"!==f&&(b&&bg(f,void 0),bg(f,h))});mf||(mf=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=sf(),a["gtm.uniqueEventId"]=d,bg("gtm.uniqueEventId",d));of=c;var e=Lj(a);of=
null;switch(c){case "gtm.init":uf("GTM",19),e&&uf("GTM",20)}return e}function Lj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=N.zones;d=e?e.checkState(xd.s,c):Bg;return d.active?Eh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Nj(){for(var a=!1;!Hj&&0<Gj.length;){Hj=!0;delete Tf.eventModel;Vf();var b=Gj.shift();if(null!=b){var c=Aj(b);if(c){var d=b;b=Aj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Wf(h,1);if(Ea(k)||gb(k))k=G(k);Uf[h]=k}}try{if(Aa(b))try{b.call(Xf)}catch(t){}else if(Ea(b)){var l=b;if(r(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),u=Wf(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,p)}catch(t){}}}else{if(La(b)){a:{if(b.length&&r(b[0])){var q=kj[b[0]];if(q&&(!c||!lj[b[0]])){b=q(b);break a}}b=void 0}if(!b){Hj=!1;continue}}a=Kj(b)||a}}finally{c&&Vf(!0)}}Hj=!1}return!a}function Oj(){var a=Nj();try{mj(B["dataLayer"],xd.s)}catch(b){}return a}
var Qj=function(){var a=we("dataLayer",[]),b=we("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Kg(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Fj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<N.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Bj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Gj.push.apply(Gj,d);if(300<
this.length)for(uf("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Nj()&&h};Gj.push.apply(Gj,a.slice(0));Pj()&&I(Oj)},Pj=function(){var a=!0;return a};var Rj={};Rj.hc=new String("undefined");
var Sj=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Rj.hc?b:a[d]);return c.join("")}};Sj.prototype.toString=function(){return this.resolve("undefined")};Sj.prototype.valueOf=Sj.prototype.toString;Rj.Eg=Sj;Rj.qd={};Rj.nh=function(a){return new Sj(a)};var Tj={};Rj.Di=function(a,b){var c=sf();Tj[c]=[a,b];return c};Rj.Ze=function(a){var b=a?0:1;return function(c){var d=Tj[c];if(d&&"function"===typeof d[b])d[b]();Tj[c]=void 0}};Rj.Xh=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Rj.si=function(a){if(a===Rj.hc)return a;var b=sf();Rj.qd[b]=a;return'google_tag_manager["'+xd.s+'"].macro('+b+")"};Rj.gi=function(a,b,c){a instanceof Rj.Eg&&(a=a.resolve(Rj.Di(b,c)),b=za);return{Ed:a,B:b}};var Uj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ee(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Vj=function(a){N.hasOwnProperty("autoEventsSettings")||(N.autoEventsSettings={});var b=N.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Wj=function(a,b,c){Vj(a)[b]=c},Xj=function(a,b,c,d){var e=Vj(a),f=Sa(e,b,d);e[b]=c(f)},Yj=function(a,b,c){var d=Vj(a);return Sa(d,b,c)};var Zj=function(){for(var a=ue.userAgent+(H.cookie||"")+(H.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ra()/1E3)].join(".")},ck=function(a,b,c,d){var e=ak(b);return qi(a,e,bk(c),d)},dk=function(a,b,c,d){var e=""+ak(c),f=bk(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ak=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},bk=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var ek=["1"],fk={},jk=function(a,b,c,d){var e=gk(a);fk[e]||hk(e,b,c)||(ik(e,Zj(),b,c,d),hk(e,b,c))};function ik(a,b,c,d,e){var f=dk(b,"1",d,c);vi(a,f,c,d,0==e?void 0:new Date(Ra()+1E3*(void 0==e?7776E3:e)))}function hk(a,b,c){var d=ck(a,b,c,ek);d&&(fk[a]=d);return d}function gk(a){return(a||"_gcl")+"_au"};var kk=function(){for(var a=[],b=H.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({ce:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].ce]||(f[a[h].ce]=[]),f[a[h].ce].push({timestamp:k[1],Ah:k[2]}))}return f};function lk(){for(var a=mk,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function nk(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var mk,ok;function pk(a){mk=mk||nk();ok=ok||lk();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(mk[l],mk[m],mk[n],mk[p])}return b.join("")}
function qk(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=ok[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}mk=mk||nk();ok=ok||lk();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var rk;function sk(a,b){if(!a||b===H.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var wk=function(){var a=tk,b=uk,c=vk(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Ce(H,"mousedown",d);Ce(H,"keyup",d);Ce(H,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},vk=function(){var a=we("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var xk=/(.*?)\*(.*?)\*(.*)/,yk=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,zk=/^(?:www\.|m\.|amp\.)+/,Ak=/([^?#]+)(\?[^#]*)?(#.*)?/,Bk=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Dk=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(pk(String(d))))}var e=b.join("*");return["1",Ck(e),e].join("*")},Ck=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=rk)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}rk=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^rk[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Fk=function(){return function(a){var b=lh(B.location.href),c=b.search.replace("?",""),d=gh(c,"_gl",!1,!0)||"";a.query=Ek(d)||{};var e=jh(b,"fragment").match(Bk);a.fragment=Ek(e&&
e[3]||"")||{}}},Gk=function(){var a=Fk(),b=vk();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ua(c,d.query),Ua(c,d.fragment));return c},Ek=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=xk.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Ck(k,n)){l=!0;break a}l=!1}if(l){for(var p={},u=k?k.split("*"):[],q=0;q<u.length;q+=2)p[u[q]]=qk(u[q+1]);return p}}}}catch(t){}};
function Hk(a,b,c){function d(m){var n=m,p=Bk.exec(n),u=n;if(p){var q=p[2],t=p[4];u=p[1];t&&(u=u+q+t)}m=u;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Ak.exec(b);if(!e)return"";var f=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+f+h+k}
function Ik(a,b,c){for(var d={},e={},f=vk().decorators,h=0;h<f.length;++h){var k=f[h];(!c||k.forms)&&sk(k.domains,b)&&(k.fragment?Ua(e,k.callback()):Ua(d,k.callback()))}if(Va(d)){var l=Dk(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,u=0;u<n.length;u++){var q=n[u];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var t=H.createElement("input");t.setAttribute("type","hidden");t.setAttribute("name","_gl");t.setAttribute("value",
l);a.appendChild(t)}}else if("post"===m){var v=Hk(l,a.action);eh.test(v)&&(a.action=v)}}}else Jk(l,a,!1)}if(!c&&Va(e)){var w=Dk(e);Jk(w,a,!0)}}function Jk(a,b,c){if(b.href){var d=Hk(a,b.href,void 0===c?!1:c);eh.test(d)&&(b.href=d)}}
var tk=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Ik(e,e.hostname,!1)}}catch(h){}},uk=function(a){try{if(a.action){var b=jh(lh(a.action),"host");Ik(a,b,!0)}}catch(c){}},Kk=function(a,b,c,d){wk();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};vk().decorators.push(e)},Lk=function(){var a=H.location.hostname,b=yk.exec(H.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(zk,""),l=e.replace(zk,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Mk=function(a,b){return!1===a?!1:a||b||Lk()};var Nk={};var Ok=/^\w+$/,Pk=/^[\w-]+$/,Qk=/^~?[\w-]+$/,Rk={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Sk(a){return a&&"string"==typeof a&&a.match(Ok)?a:"_gcl"}var Uk=function(){var a=lh(B.location.href),b=jh(a,"query",!1,void 0,"gclid"),c=jh(a,"query",!1,void 0,"gclsrc"),d=jh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||gh(e,"gclid",!1,void 0);c=c||gh(e,"gclsrc",!1,void 0)}return Tk(b,c,d)};
function Tk(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};if(void 0!==a&&a.match(Pk))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Nk.gtm_3pds?0:Nk.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d}var Wk=function(a){var b=Uk();Vk(b,a)};
function Vk(a,b,c){function d(p,u){var q=Xk(p,e);q&&vi(q,u,h,f,l,!0)}b=b||{};var e=Sk(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.fb?7776E3:b.fb;c=c||Ra();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.Gj?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Zk=function(a,b,c,d,e){for(var f=Gk(),h=Sk(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Rk[l]){var m=Xk(l,h),n=f[m];if(n){var p=Math.min(Yk(n),Ra()),u;b:{for(var q=p,t=ni(m,H.cookie),v=0;v<t.length;++v)if(Yk(t[v])>q){u=!0;break b}u=!1}u||vi(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Vk(Tk(f.gclid,f.gclsrc),w)},Xk=function(a,b){var c=Rk[a];if(void 0!==c)return b+c},Yk=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function $k(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var al=function(a,b,c,d,e){if(Ea(b)){var f=Sk(e);Kk(function(){for(var h={},k=0;k<a.length;++k){var l=Xk(a[k],f);if(l){var m=ni(l,H.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},bl=function(a){return a.filter(function(b){return Qk.test(b)})},cl=function(a,b){for(var c=Sk(b&&b.prefix),d={},e=0;e<a.length;e++)Rk[a[e]]&&(d[a[e]]=Rk[a[e]]);Ka(d,function(f,h){var k=ni(c+h,H.cookie);if(k.length){var l=k[0],m=Yk(l),n={};n[f]=[$k(l)];Vk(n,b,m)}})};var dl=/^\d+\.fls\.doubleclick\.net$/;function el(a){var b=lh(B.location.href),c=jh(b,"host",!1);if(c&&c.match(dl)){var d=jh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function fl(a,b){if("aw"==a||"dc"==a){var c=el("gcl"+a);if(c)return c.split(".")}var d=Sk(b);if("_gcl"==d){var e;e=Uk()[a]||[];if(0<e.length)return e}var f=Xk(a,d),h;if(f){var k=[];if(H.cookie){var l=ni(f,H.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=$k(l[m]);n&&-1===Fa(k,n)&&k.push(n)}h=bl(k)}else h=k}else h=k}else h=[];return h}
var gl=function(){var a=el("gac");if(a)return decodeURIComponent(a);var b=kk(),c=[];Ka(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].Ah);f=bl(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},hl=function(a,b,c,d,e){jk(b,c,d,e);var f=fk[gk(b)],h=Uk().dc||[],k=!1;if(f&&0<h.length){var l=N.joined_au=N.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",u=p=p+"?gclid="+h[n]+"&auiddc="+f;ue.sendBeacon&&ue.sendBeacon(u)||Be(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&f){var q=gk(b),t=fk[q];t&&ik(q,t,c,d,e)}};var il;if(3===xd.mc.length)il="g";else{var jl="G";il=jl}
var kl={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:il,OPT:"o"},ll=function(a){var b=xd.s.split("-"),c=b[0].toUpperCase(),d=kl[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===xd.mc.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+xd.mc+e};
var ml=function(a){return!(void 0===a||null===a||0===(a+"").length)},nl=function(a,b){var c;if(2===b.Z)return a("ord",Ha(1E11,1E13)),!0;if(3===b.Z)return a("ord","1"),a("num",Ha(1E11,1E13)),!0;if(4===b.Z)return ml(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.Z)c="1";else if(6===b.Z)c=b.Wd;else return!1;ml(c)&&a("qty",c);ml(b.wc)&&a("cost",b.wc);ml(b.transactionId)&&a("ord",b.transactionId);return!0},ol=encodeURIComponent,pl=function(a,b){function c(n,p,u){f.hasOwnProperty(n)||(p+="",e+=";"+n+"="+
(u?p:ol(p)))}var d=a.Ad,e=a.protocol;e+=a.Pc?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+ol(d)+(";type="+ol(a.Cd))+(";cat="+ol(a.zb));var f=a.ph||{};Ka(f,function(n,p){e+=";"+ol(n)+"="+ol(p+"")});if(nl(c,a)){ml(a.Xc)&&c("u",a.Xc);ml(a.Wc)&&c("tran",a.Wc);c("gtm",ll());!1===a.Og&&c("npa","1");if(a.xd){var h=fl("dc",a.Xa);h&&h.length&&c("gcldc",h.join("."));var k=fl("aw",a.Xa);k&&k.length&&c("gclaw",k.join("."));var l=gl();l&&c("gac",l);jk(a.Xa,void 0,a.lh,a.mh);
var m=fk[gk(a.Xa)];m&&c("auiddc",m)}ml(a.Sd)&&c("prd",a.Sd,!0);Ka(a.ee,function(n,p){c(n,p)});e+=b||"";ml(a.Jc)&&c("~oref",a.Jc);a.Pc?Ae(e+"?",a.B):Be(e+"?",a.B,a.w)}else I(a.w)};var ql=["input","select","textarea"],rl=["button","hidden","image","reset","submit"],sl=function(a){var b=a.tagName.toLowerCase();return!Ga(ql,function(c){return c===b})||"input"===b&&Ga(rl,function(c){return c===a.type.toLowerCase()})?!1:!0},tl=function(a){return a.form?a.form.tagName?a.form:H.getElementById(a.form):He(a,["form"],100)},ul=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(sl(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var xl=!!B.MutationObserver,yl=void 0,zl=function(a){if(!yl){var b=function(){var c=H.body;if(c)if(xl)(new MutationObserver(function(){for(var e=0;e<yl.length;e++)I(yl[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ce(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<yl.length;e++)I(yl[e])}))})}};yl=[];H.body?b():I(b)}yl.push(a)};var Ul=B.clearTimeout,Vl=B.setTimeout,T=function(a,b,c){if(eg()){b&&I(b)}else return ye(a,b,c)},Wl=function(){return B.location.href},Xl=function(a){return jh(lh(a),"fragment")},Yl=function(a){return kh(lh(a))},Zl=function(a,b){return Wf(a,b||2)},$l=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Ij(a)},am=function(a,b){B[a]=b},U=function(a,b,c){b&&(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},
bm=function(a,b,c){return ni(a,b,void 0===c?!0:!!c)},cm=function(a,b){if(eg()){b&&I(b)}else Ae(a,b)},dm=function(a){return!!Yj(a,"init",!1)},em=function(a){Wj(a,"init",!0)},fm=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":lf;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(R("https://","http://",c))},gm=function(a,b){var c=a[b];return c};
var hm=Rj.gi;var im;var Fm=new Ia;function Gm(a,b){function c(h){var k=lh(h),l=jh(k,"protocol"),m=jh(k,"host",!0),n=jh(k,"port"),p=jh(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Hm(a){return Im(a)?1:0}
function Im(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ea(c)){for(var d=0;d<c.length;d++)if(Hm({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=Fa(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var u=a.ignore_case?"i":void 0;try{var q=String(c)+u,t=Fm.get(q);t||(t=new RegExp(c,u),Fm.set(q,t));p=t.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));
case "_um":return Gm(b,c)}return!1};var Jm=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Km={},Lm=encodeURI,X=encodeURIComponent,Mm=Be;var Nm=function(a,b){if(!a)return!1;var c=jh(lh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Om=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Km.Yh=function(){var a=!1;return a};var ao=function(){var a=B.gaGlobal=B.gaGlobal||{};a.hid=a.hid||Ha();return a.hid};var mo=window,no=document,oo=function(a){var b=mo._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===mo["ga-disable-"+a])return!0;try{var c=mo.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=ni("AMP_TOKEN",no.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return no.getElementById("__gaOptOutExtension")?!0:!1};function ro(a){return"_"===a.charAt(0)}var so=function(a){Ka(a,function(c){ro(c)&&delete a[c]});var b=a[M.da]||{};Ka(b,function(c){ro(c)&&delete b[c]})};var wo=function(a,b,c){$h(b,c,a)},xo=function(a,b,c){$h(b,c,a,!0)},zo=function(a,b){};
function yo(a,b){}var Z={a:{}};

Z.a.send_pixel=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__send_pixel=b;Z.__send_pixel.b="send_pixel";Z.__send_pixel.g=!0;Z.__send_pixel.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!r(f))throw d(e,{},"URL must be a string.");try{if(Pd(lh(f),c))return}catch(h){throw d(e,{},"Invalid URL filter.");}throw d(e,{},"Prohibited URL: "+f+".");},I:a}})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;pl(b,c)}(function(b){Z.__flc=b;Z.__flc.b="flc";Z.__flc.g=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Om(b.vtp_customVariable||[],"key","value")||{},e={zb:b.vtp_activityTag,xd:c,Xa:b.vtp_conversionCookiePrefix||void 0,wc:void 0,Z:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Ad:b.vtp_advertiserId,Cd:b.vtp_groupTag,w:b.vtp_gtmOnFailure,B:b.vtp_gtmOnSuccess,
Jc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",Wd:void 0,Pc:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Wc:b.vtp_transactionVariable,transactionId:void 0,Xc:b.vtp_userVariable,ee:d};if(b.vtp_enableAttribution){var f=b.vtp_attributionFields||[];if(f.length){T("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,U("google_attr").build([Om(f,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(dg(a.vtp_gtmEventId,"event"))})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Uj(c,"gtm.click");$l(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!dm("cl")){var c=U("document");Ce(c,"click",a,!0);em("cl")}I(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=U(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return bm(a.vtp_name,Zl("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.b="access_globals";Z.__access_globals.g=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],h=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&h.push(m)}return{assert:function(n,p,u){if(!r(u))throw d(n,{},"Key must be a string.");if("read"===p){if(-1<Fa(e,u))return}else if("write"===p){if(-1<Fa(f,u))return}else if("readwrite"===p){if(-1<Fa(f,u)&&-1<Fa(e,u))return}else if("execute"===p){if(-1<Fa(h,u))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+p);throw d(n,{},"Prohibited "+p+" on global variable: "+
u+".");},I:a}})}();Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return Ha(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Zl("gtm.url",1))||Wl();var d=b[a("vtp_component")];if(!d||"URL"==d)return Yl(String(c));var e=lh(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?Ea(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=jh(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){f=p;break a}}f=void 0}else f=jh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Zl(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(b){return function(){if(b.Ld&&b.Od>=b.Ld)b.Gd&&U("self").clearInterval(b.Gd);else{b.Od++;var c=(new Date).getTime();$l({event:b.na,"gtm.timerId":b.Gd,"gtm.timerEventNumber":b.Od,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Ld,"gtm.timerStartTime":b.Nf,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Nf,"gtm.triggers":b.Ri})}}}(function(b){Z.__tl=b;Z.__tl.b="tl";Z.__tl.g=!0;Z.__tl.priorityOverride=0})(function(b){I(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{na:b.vtp_eventName,Od:0,interval:Number(b.vtp_interval),Ld:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Ri:String(b.vtp_uniqueTriggerId||"0"),Nf:(new Date).getTime()};c.Gd=U("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;G(Om(n.vtp_fieldsToSet,"fieldName","value"),f);G(Om(n.vtp_contentGroup,"index","group"),h);G(Om(n.vtp_dimension,"index","dimension"),k);G(Om(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=G(n);d=G(d,p)}G(Om(d.vtp_fieldsToSet,"fieldName","value"),f);G(Om(d.vtp_contentGroup,
"index","group"),h);G(Om(d.vtp_dimension,"index","dimension"),k);G(Om(d.vtp_metric,"index","metric"),l);var u=$g(d.vtp_functionName);if(Aa(u)){var q="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,q=t+"."):(t="gtm"+sf(),q=t+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(Q){var K=[].slice.call(arguments,0);K[0]=q+K[0];u.apply(window,K)},x=function(Q,K){return void 0===K?K:Q(K)},z=function(Q,K){if(K)for(var Ba in K)K.hasOwnProperty(Ba)&&y("set",Q+Ba,K[Ba])},C=function(){},A=function(Q,K,Ba){var Vb=0;if(Q)for(var Na in Q)if(Q.hasOwnProperty(Na)&&(Ba&&v[Na]||!Ba&&void 0===v[Na])){var nb=w[Na]?Oa(Q[Na]):Q[Na];"anonymizeIp"!=Na||nb||(nb=void 0);K[Na]=nb;Vb++}return Vb},E={name:t};A(f,E,!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",ll(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(Q,K){void 0!==d[K]&&y("set",Q,d[K])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var J={};A(f,J,!1)&&y("set",J);var O;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var Q=f&&f.hitCallback;Aa(Q)&&Q();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());var Y={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Ma,d.vtp_eventValue||
e.value)};A(O,Y,!1);y("send",Y);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var wa=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:wa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ua="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ua})}O?y("send","pageview",O):y("send","pageview");}if(!a){var Ca=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(Ca="internal/"+Ca);a=!0;var pb=R("https:","http:","//www.google-analytics.com/"+Ca,f&&f.forceSSL);T(pb,function(){var Q=Yg();Q&&Q.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else I(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();
Z.a.get_url=["google"],function(){function a(b,c,d){return{component:c,queryKey:d}}(function(b){Z.__get_url=b;Z.__get_url.b="get_url";Z.__get_url.g=!0;Z.__get_url.priorityOverride=0})(function(b){var c="any"===b.vtp_urlParts?null:[];c&&(b.vtp_protocol&&c.push("protocol"),b.vtp_host&&c.push("host"),b.vtp_port&&c.push("port"),b.vtp_path&&c.push("path"),b.vtp_extension&&c.push("extension"),b.vtp_query&&c.push("query"),b.vtp_fragment&&c.push("fragment"));var d=c&&"any"!==b.vtp_queriesAllowed?b.vtp_queryKeys||
[]:null,e=b.vtp_createPermissionError;return{assert:function(f,h,k){if(h){if(!r(h))throw e(f,{},"URL component must be a string.");if(c&&0>Fa(c,h))throw e(f,{},"Prohibited URL component: "+h);if("query"===h&&d){if(!k)throw e(f,{},"Prohibited from getting entire URL query when query keys are specified.");if(!r(k))throw e(f,{},"Query key must be a string.");if(0>Fa(d,k))throw e(f,{},"Prohibited query key: "+k);}}else if(c)throw e(f,{},"Prohibited from getting entire URL when components are specified.");
},I:a}})}();





Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){I(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
Lk())){Zk(a,h,k,l,void 0);}var m={prefix:e,path:c,domain:d,fb:void 0};Wk(m);cl(["aw","dc"],m);hl(f,e,c,d);var n=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var p=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),u=b.vtp_urlPosition,q=!!b.vtp_formDecoration;al(a,p,u,q,n);}})}();


Z.a.aev=["google"],function(){function a(q,t){var v=dg(q,"gtm");if(v)return v[t]}function b(q,t,v,w){w||(w="element");var y=q+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(q,w);if(z&&(x=v(z),n[y]=x,p.push(y),35<p.length)){var C=p.shift();delete n[C]}}return x}function c(q,t,v){var w=a(q,u[t]);return void 0!==w?w:v}function d(q,t){if(!q)return!1;var v=e(Wl());Ea(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(q))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!Nm(q,w)}function e(q){m.test(q)||(q="http://"+q);return jh(lh(q),"HOST",!0)}function f(q,t,v){switch(q){case "SUBMIT_TEXT":return b(t,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Ee(q,"value");case "button":return Fe(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var t=0,v=0;v<q.elements.length;v++)sl(q.elements[v])&&t++;return t}}function l(q,t,v){var w=a(q,"interactedFormField");return w&&Ee(w,t)||v}var m=/^https?:\/\//i,n={},p=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var t=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,Fe)||v;case "URL":var x;a:{var z=String(a(t,"elementUrl")||v||""),C=lh(z),A=String(q.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,q.vtp_affiliatedDomains);break a;default:x=jh(C,A,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(t,w,v);else{var J=q.vtp_attribute,O=a(t,"element");E=O&&Ee(O,J)||v||""}return E;case "MD":var Y=q.vtp_mdValue,la=b(t,"MD",Gl);return Y&&la?Jl(la,
Y)||v:la||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();

Z.a.cegg=["nonGoogleScripts"],function(){var a={};(function(b){Z.__cegg=b;Z.__cegg.b="cegg";Z.__cegg.g=!0;Z.__cegg.priorityOverride=0})(function(b){try{var c=b.vtp_usersNumericId;if(c)if(a.hasOwnProperty(c)&&!0===a[c])b.vtp_gtmOnSuccess();else{b.vtp_snapshotName&&(B.CE_SNAPSHOT_NAME=b.vtp_snapshotName);for(var d=c.toString();8>d.length;)d="0"+d;var e=d.replace(/(\d+)(\d{4})$/,"/pages/scripts/$1/$2.js");T("//script.crazyegg.com"+e+"?"+Math.floor((new Date).getTime()/36E5),b.vtp_gtmOnSuccess,b.vtp_gtmOnFailure);
a[c]=!0}else I(b.vtp_gtmOnFailure)}catch(f){I(b.vtp_gtmOnFailure)}})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=U("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){Tg();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:ll()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var z="DATA_LAYER"==v?Zl(x):k[y];z&&(l[w]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var p=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||
{})[v]=w},u=function(v){return function(w,y,x,z){var C="DATA_LAYER"==v?Zl(x):k[y];z(C)&&p(w,C)}},q=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=
v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var t=!0;t&&b.push(l);a||(a=!0,T(q,f(),e(q)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=U(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},h=function(k,l){void 0!==c[k]&&(f[l]=c[k])};h("vtp_goalValue","gv");h("vtp_eventCategory","ec");h("vtp_eventAction","ea");h("vtp_eventLabel","el");h("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{T("//bat.bing.com/bat.js",
function(){var k=Jm(U("UET"),{ti:c.vtp_tagId,q:e});B[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){I(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.b="baut";Z.__baut.g=!0;Z.__baut.priorityOverride=0}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Om(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){I(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=H.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,xe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){I(h)}}}var c=function(d){if(H.body){var e=
d.vtp_gtmOnFailure,f=hm(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Ed,k=f.B;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(H.body,Ge(h),k,e)()}else Vl(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();




Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0;Z.__img.priorityOverride=0})(function(a){var b=Ge('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Mm(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var rp={};rp.macro=function(a){if(Rj.qd.hasOwnProperty(a))return Rj.qd[a]},rp.onHtmlSuccess=Rj.Ze(!0),rp.onHtmlFailure=Rj.Ze(!1);rp.dataLayer=Xf;rp.callback=function(a){qf.hasOwnProperty(a)&&Aa(qf[a])&&qf[a]();delete qf[a]};function sp(){N[xd.s]=rp;Ua(rf,Z.a);bd=bd||Rj;cd=Ag}
function tp(){Nk.gtm_3pds=!0;N=B.google_tag_manager=B.google_tag_manager||{};if(N[xd.s]){var a=N.zones;a&&a.unregisterChild(xd.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Vc.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Yc.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)Xc.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},u=0;u<n.length;u++)p[n[u][0]]=Array.prototype.slice.call(n[u],1);Wc.push(p)}$c=Z;ad=Hm;var q=data.permissions||{},t=data.sandboxed_scripts;Wi();Bd=new Ad(q);if(void 0!==t)for(var v=["sandboxedScripts"],w=0;w<t.length;w++){var y=t[w].replace(/^_*/,"");rf[y]=v}sp();Qj();Fg=!1;Gg=0;if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)Ig();else{Ce(H,"DOMContentLoaded",Ig);Ce(H,"readystatechange",
Ig);if(H.createEventObject&&H.documentElement.doScroll){var x=!0;try{x=!B.frameElement}catch(E){}x&&Jg()}Ce(B,"load",Ig)}Cj=!1;"complete"===H.readyState?Ej():Ce(B,"load",Ej);a:{if(!Mf)break a;B.setInterval(Nf,864E5);}
nf=(new Date).getTime();}}tp();

})()
