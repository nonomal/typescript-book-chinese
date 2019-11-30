/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8300e980d0f67e544604eea1b67d7704"
  },
  {
    "url": "assets/css/0.styles.890f74af.css",
    "revision": "8eeb886704f60240fb174210d51e6483"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.67330217.js",
    "revision": "def7620a95051417d122788af4699882"
  },
  {
    "url": "assets/js/11.137c02b8.js",
    "revision": "3e459fc0ef78c9dbc76a8b246961d02e"
  },
  {
    "url": "assets/js/12.fc3eddde.js",
    "revision": "5c569245c3ac243f45de91a434d82009"
  },
  {
    "url": "assets/js/13.85f545ee.js",
    "revision": "e8fa1245c0d7e64715f4356a6e1cfb0d"
  },
  {
    "url": "assets/js/14.3a464195.js",
    "revision": "8b8cdb36b6b35de10e6d5241c593ea54"
  },
  {
    "url": "assets/js/15.7ee47059.js",
    "revision": "c7bb128f00696ef62545044d1ab7c7cf"
  },
  {
    "url": "assets/js/16.d74802ae.js",
    "revision": "6eaea9cdffcd23449087023f4d3821d7"
  },
  {
    "url": "assets/js/17.d0579439.js",
    "revision": "781691d8d27c1dfcbcd61b8b7b8e0b3a"
  },
  {
    "url": "assets/js/18.68d3246a.js",
    "revision": "eb2d03a62f132c370368ae70ffa6e720"
  },
  {
    "url": "assets/js/19.71c2f74c.js",
    "revision": "b74fb50418e78b5b6a1ff5b37888f324"
  },
  {
    "url": "assets/js/2.482d3ed7.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.d43ca1f9.js",
    "revision": "d94eab79ed6b05c82267fff83a241904"
  },
  {
    "url": "assets/js/21.35d0661a.js",
    "revision": "e1709c6bb3240f704be93ad0e322ebea"
  },
  {
    "url": "assets/js/22.a644f843.js",
    "revision": "ce5046274c37ae6ab957ec1633810fd2"
  },
  {
    "url": "assets/js/23.e6474d5c.js",
    "revision": "9838ace950894467d7bc641e1d9079e5"
  },
  {
    "url": "assets/js/24.fcab3a44.js",
    "revision": "091ededa6c04dd799c5ff7e44aef1b1f"
  },
  {
    "url": "assets/js/25.730c5e9c.js",
    "revision": "b37b1d80121ef221b207827a3fc19f88"
  },
  {
    "url": "assets/js/26.be1b030d.js",
    "revision": "7353d2131e7eddc5905790644a914711"
  },
  {
    "url": "assets/js/27.7c04bab3.js",
    "revision": "1913303f13b381d103f2328de65492fc"
  },
  {
    "url": "assets/js/28.32d50c9e.js",
    "revision": "e9549d094bcf151979c9869b86d932b5"
  },
  {
    "url": "assets/js/29.3deaea8b.js",
    "revision": "2c25dc549d71996d804e2a1c11dcc67b"
  },
  {
    "url": "assets/js/3.1f3c9c35.js",
    "revision": "73d771c17a99a9ae50e7666393575011"
  },
  {
    "url": "assets/js/30.fa4f6072.js",
    "revision": "510b944705187332b3cecbc49c6ac2cf"
  },
  {
    "url": "assets/js/31.1b380e5a.js",
    "revision": "5d88588a49074482c8b208e0f874530c"
  },
  {
    "url": "assets/js/32.d8400547.js",
    "revision": "51a60ee376cb54a42332edfa060a58c6"
  },
  {
    "url": "assets/js/33.dca0115f.js",
    "revision": "2f6e1d454bc388a17a2816c01fabce00"
  },
  {
    "url": "assets/js/34.3aae9a5c.js",
    "revision": "f9b5fa15a3a7e4d57efb82c22c83d216"
  },
  {
    "url": "assets/js/35.d543beb6.js",
    "revision": "4d63c68cf34415ab2105ddf40823cb10"
  },
  {
    "url": "assets/js/36.21d4c288.js",
    "revision": "8089f332d2310ab3fd3a290097eaccd3"
  },
  {
    "url": "assets/js/37.23915758.js",
    "revision": "da7b3ace9ed4da60223ad5a6776ca67c"
  },
  {
    "url": "assets/js/38.0445e808.js",
    "revision": "ca8189f26d381303a6ccbfe651042ee9"
  },
  {
    "url": "assets/js/39.cdf4d714.js",
    "revision": "6da85ab21771cab892754682e419e59b"
  },
  {
    "url": "assets/js/4.734505bf.js",
    "revision": "453cb0cd47811c5ab718a6530cbef4f1"
  },
  {
    "url": "assets/js/40.b0f54248.js",
    "revision": "a5bf8ae3afdfc45779d833be35de74dc"
  },
  {
    "url": "assets/js/41.4f8dd48f.js",
    "revision": "1b2aabd3e7874931bd4a0c1cb0bd6c3f"
  },
  {
    "url": "assets/js/42.ef87486d.js",
    "revision": "e1cd8de57e44df9a375a79e6f655efe1"
  },
  {
    "url": "assets/js/43.59dd4eab.js",
    "revision": "9afbef163113fdb6126761e17eb7165e"
  },
  {
    "url": "assets/js/44.cdfc0016.js",
    "revision": "d312aa699f3cb7519fbd6ad601721e78"
  },
  {
    "url": "assets/js/45.c23d845a.js",
    "revision": "1bd6ec2c1fe1d94e51d208d7699cd51d"
  },
  {
    "url": "assets/js/46.95079b6d.js",
    "revision": "49e95733f408d242a76f05cdfb45e9b0"
  },
  {
    "url": "assets/js/47.8fb53257.js",
    "revision": "bc5f56b8853ee8078de18eb7ba445931"
  },
  {
    "url": "assets/js/48.deeef2f6.js",
    "revision": "98641b955ac73e7ca33644d180cd8f5c"
  },
  {
    "url": "assets/js/49.c0b1a804.js",
    "revision": "4738658a4ffc235738118e159b1a05c7"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.9c758278.js",
    "revision": "24b40cca64542326d03dfbd2e82c32f5"
  },
  {
    "url": "assets/js/51.192fac2c.js",
    "revision": "3f6fa9cfaf772730957bbe3f46ebecdc"
  },
  {
    "url": "assets/js/52.9d212c5e.js",
    "revision": "23f54f1f22138f44af4201c1ad2dc09c"
  },
  {
    "url": "assets/js/53.16ea2561.js",
    "revision": "dbf96890c4314f4567fa4d52f7828821"
  },
  {
    "url": "assets/js/54.dd9ef73e.js",
    "revision": "0e93baf42c1aeef335cab0691bd835c2"
  },
  {
    "url": "assets/js/55.55d04b32.js",
    "revision": "161cc74a22e0b53f3af863894ad54941"
  },
  {
    "url": "assets/js/56.ae88c64e.js",
    "revision": "0e4f7236b949b1ffde8ca22add5cf190"
  },
  {
    "url": "assets/js/57.2e571750.js",
    "revision": "3a3bd79dcc8cc36136b4124c3561ad3d"
  },
  {
    "url": "assets/js/58.583e5d73.js",
    "revision": "53cbc4f60b17ef87a60dc9ee98420863"
  },
  {
    "url": "assets/js/59.9b5bb95f.js",
    "revision": "48dcc6df7870c08d908a459e6b44f32e"
  },
  {
    "url": "assets/js/6.d526daf2.js",
    "revision": "505763767147b03e6a63a92132f14348"
  },
  {
    "url": "assets/js/60.3eb16bc9.js",
    "revision": "99ae2bf91d22b6eab2ca832cb8b5e055"
  },
  {
    "url": "assets/js/61.ab3b9ae6.js",
    "revision": "19097e792ee3bb478cc635710d548cf2"
  },
  {
    "url": "assets/js/62.888788a9.js",
    "revision": "6f92e2f917d886c9559eaa603ab4faaf"
  },
  {
    "url": "assets/js/63.89a7f55f.js",
    "revision": "633169f2d4dc815fbbca91fdfe168237"
  },
  {
    "url": "assets/js/64.547bf82a.js",
    "revision": "ae124fad8cf201f53cf798ea610b7842"
  },
  {
    "url": "assets/js/65.d9fe6c6a.js",
    "revision": "8d1aacdd5b8829c00261768f054da4d0"
  },
  {
    "url": "assets/js/66.d7f5542d.js",
    "revision": "8dcc03c9ba943690fde9378cddaaccfd"
  },
  {
    "url": "assets/js/67.81e1d1dd.js",
    "revision": "878fbc27a4fd1163698b33a40dcb5ac2"
  },
  {
    "url": "assets/js/68.f4b44603.js",
    "revision": "12f410e75342e49af63ab610d8411266"
  },
  {
    "url": "assets/js/69.3a207aa6.js",
    "revision": "d16c7ab69666c9572e22444f7fb8cc03"
  },
  {
    "url": "assets/js/7.e446ea68.js",
    "revision": "76b8c3ca6d1997e6b6c89d83e1999211"
  },
  {
    "url": "assets/js/70.ddf357b3.js",
    "revision": "b9451c238b25728a103721813860a301"
  },
  {
    "url": "assets/js/71.5c88cc5c.js",
    "revision": "e3894d392a693e9acf9f2e95f99a5fee"
  },
  {
    "url": "assets/js/72.6e44ed20.js",
    "revision": "6e6c45370c7d734508d755b1baa95444"
  },
  {
    "url": "assets/js/73.afdcea33.js",
    "revision": "fd5d67d52f2ee8f7a16d7db78d2c4220"
  },
  {
    "url": "assets/js/74.0d2ae292.js",
    "revision": "b6bbc54d1666e0053b38e5f68ce79c74"
  },
  {
    "url": "assets/js/75.98e18b62.js",
    "revision": "b63ca14674ea84649023c7a885c59ad0"
  },
  {
    "url": "assets/js/76.34d7215d.js",
    "revision": "10edec7ba31702359017deb7b13f3c6a"
  },
  {
    "url": "assets/js/77.b0051ced.js",
    "revision": "e7dfd309eb59fcc7121c1f952760070a"
  },
  {
    "url": "assets/js/78.0c1b6bbe.js",
    "revision": "3f2b6598c3b2c186a34700d39482bc7f"
  },
  {
    "url": "assets/js/79.49ba08f7.js",
    "revision": "5e760b78e1609d0f783d3370d9aaa036"
  },
  {
    "url": "assets/js/8.9c98c03d.js",
    "revision": "c0330f6cbabf784d79bcb72e12861312"
  },
  {
    "url": "assets/js/80.6c03d46e.js",
    "revision": "7640a049da4a52c16ac0876bea792850"
  },
  {
    "url": "assets/js/81.5c17a27c.js",
    "revision": "3e46fa8c50a4515504a036a579ece63c"
  },
  {
    "url": "assets/js/82.9b10ca3d.js",
    "revision": "817b6deed00c6f16935c37caf25e4fc1"
  },
  {
    "url": "assets/js/83.318cfe9a.js",
    "revision": "c77699dd36f52b3935a7b2ce66f87f95"
  },
  {
    "url": "assets/js/84.5af99182.js",
    "revision": "e4e82d4109a9c384e44b7f473261d8dd"
  },
  {
    "url": "assets/js/85.5f112fbc.js",
    "revision": "516fbf681614aae4995ed42a18d888be"
  },
  {
    "url": "assets/js/86.f7df3cdf.js",
    "revision": "1fda0c0eb32e16ec3945f43039cfd27c"
  },
  {
    "url": "assets/js/87.1cd8ad3c.js",
    "revision": "32f168a83f661d28bcd31a63a06d1d08"
  },
  {
    "url": "assets/js/88.e7ac3ac6.js",
    "revision": "63bd4b0e01a9b40160664650b917b844"
  },
  {
    "url": "assets/js/9.01fff7e2.js",
    "revision": "df353b22506e9426450286a79ae2c2da"
  },
  {
    "url": "assets/js/app.6f1d6c4a.js",
    "revision": "067b910f9b21de05603a14358a54aa80"
  },
  {
    "url": "compiler/ast.html",
    "revision": "504278bb616f4714679c3421856efd6c"
  },
  {
    "url": "compiler/binder.html",
    "revision": "960593338405ef086e7677b81a4d7605"
  },
  {
    "url": "compiler/checker.html",
    "revision": "f3fbfe3389163dcdc2fcece942470694"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "2ba9d62b4265a27bfef28aafd3f98d87"
  },
  {
    "url": "compiler/overview.html",
    "revision": "e1408f7a66bc1f16bb6bbf5feb87db75"
  },
  {
    "url": "compiler/parser.html",
    "revision": "fb2c618f390c961d01d857380ce63037"
  },
  {
    "url": "compiler/program.html",
    "revision": "4efdb4902936843b7b0f8569e5b3d2d1"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "ba6fc5243b1400c9e4bff15c4bb7bfef"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "9acaddd2f731983e180f2dd0917e6e4b"
  },
  {
    "url": "error/interpreting.html",
    "revision": "1c21c1fd4dc8488137995ece13a63605"
  },
  {
    "url": "faqs/class.html",
    "revision": "b5642d71e69fd3265193245bceac1255"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "c4eeae546f187a160cd4b12865ce5ccc"
  },
  {
    "url": "faqs/comments.html",
    "revision": "02899b0846cc3a51f6963851b207e681"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "541df09c1a4333793b8abccf3f9b40f2"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "8f170efc990d53a356d5a0a92ac288e3"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "c8aaa76d0822c1fd653da7b1f7694ec2"
  },
  {
    "url": "faqs/enums.html",
    "revision": "a91ebc139b8e3b1b5fe113bbf10b504d"
  },
  {
    "url": "faqs/function.html",
    "revision": "16701b586c72d868ad21f4e871cafcd3"
  },
  {
    "url": "faqs/generics.html",
    "revision": "4e76dd54346d58bbf8b669478a335815"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "de57fba7c27ed54091a0f495f717346c"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "5c7d7696f9afb0826bd461aba3989677"
  },
  {
    "url": "faqs/modules.html",
    "revision": "27fb734588decfaa1e85f3726f2ea92d"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "3a1c06b45518d08e796075c2202f8ad2"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "f554bbbf79e04a902c9a5c22bdae9ae3"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "7e5eaf3a84b6c153a9c05e6f6044e7de"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "3c0ee06fbca77b6c2afb4801fd3ea6c6"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "76f8948cd9787c07b18d4660d5873c79"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "f6112c063cd2ccaf06a887a23564f2e6"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "8c6c86bf9da7683ee40c81b879ea4933"
  },
  {
    "url": "jsx/support.html",
    "revision": "1f92e53f5a30eb5adcf96d220eb44b37"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "new/typescript-3.7.html",
    "revision": "8f30a63b37189727b5bf7a6c45dfbb8a"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "b5ded989b604e9269b397e215787695e"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "b1a7e3c3c7ca46a5080836a889ad1624"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "872ff26ce107124a3bc6969878fdbe6c"
  },
  {
    "url": "project/modules.html",
    "revision": "2792dadfd55e9d704f715147a088a61e"
  },
  {
    "url": "project/namespaces.html",
    "revision": "bbd6ac95ca11fc4ff74e6a9f747e5f46"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "ba36f8135674023d25701623308ded23"
  },
  {
    "url": "tips/barrel.html",
    "revision": "0cc581bbc2721e1f55bb5dee6852f642"
  },
  {
    "url": "tips/bind.html",
    "revision": "b36d2718b7d63e4d2d8cd827a0984ff6"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "7cd03f6b737bea710913a167e3e1643f"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "e8422af0ea1045813ad46cf3279da985"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "84557a9f9d6b7fbe410e9ea866cde375"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "477ce00523b967b8ab0b7f7883c89bfb"
  },
  {
    "url": "tips/curry.html",
    "revision": "c4d619760191620166e5cabafbf2b085"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "24c0a1cf6f1e25146e31072f1693db9c"
  },
  {
    "url": "tips/infer.html",
    "revision": "5961b48248042f449857d2d2dec173e5"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "7bf9375d159f13e486c11621c60bcd3d"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "29de8145cc2ae44222882aaaf4ee2102"
  },
  {
    "url": "tips/metadata.html",
    "revision": "1f72eb9eeefaedf813a7ba2870a08edd"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "13ca5897a17ef7768b3db8b1e4d1a10c"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "0f50ca3823f2badd387bf467e1f6e0b9"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "f86e34d0784b3a6dc7bc41c3db74659f"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "98aeda4de11f98effe425030e55cfd12"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "f960029d1d6e0820d6ce7e01a5271884"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "f2585c103070d74dd4033ccbf4243185"
  },
  {
    "url": "tips/truthy.html",
    "revision": "e644fcaf44630e09aea51b0f0ebbc529"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "72089dea73482cb11ed00755298511aa"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "d302e623e17717c6b0482cf4bf5aed48"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "31a339cf7770ba26461e88276173ea0c"
  },
  {
    "url": "typings/callable.html",
    "revision": "3a2f46202c420ffa0ffe5873ff8a47bb"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "569ae45e95e190bc65ab32054632528d"
  },
  {
    "url": "typings/enums.html",
    "revision": "f1fae6da896714b3a99a325c14a26d67"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "18f8637bfcbe6d8cf30f28b2f5718389"
  },
  {
    "url": "typings/freshness.html",
    "revision": "df7b2837a0bc3eb2981a6316d33a8043"
  },
  {
    "url": "typings/functions.html",
    "revision": "71c05f2eb15165c21f4ab8792c30d8ad"
  },
  {
    "url": "typings/generices.html",
    "revision": "9a934580eadce364669fd5a2d3211df1"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "844a3c140dd9d9ba5a260648cc0f1720"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "bad5e3b011547bc011069360a28f5e5c"
  },
  {
    "url": "typings/lib.html",
    "revision": "6d741f99a6c1676ec13c9f5ed21f454c"
  },
  {
    "url": "typings/literals.html",
    "revision": "a1dcff8c1f42d12db4fd99f32d772cb4"
  },
  {
    "url": "typings/migrating.html",
    "revision": "621477df5a3701a477eabcf19ef9b3be"
  },
  {
    "url": "typings/mixins.html",
    "revision": "41bd6af62e4c2ba2afb50d807a9892f9"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "80d5ed9a467f9b59010914967a08f69a"
  },
  {
    "url": "typings/neverType.html",
    "revision": "6f75e525c17f9cfa04fc50f0166ac206"
  },
  {
    "url": "typings/overview.html",
    "revision": "42cd114337ed978073a9c05f771ab516"
  },
  {
    "url": "typings/readonly.html",
    "revision": "c38bd063f66a833bc2bcfeafd7f0caea"
  },
  {
    "url": "typings/thisType.html",
    "revision": "7573724001bf8a11f0f3de79ae422134"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "855d09a247dd86d8b382453fe303e31c"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "aa3f6c4bb6b219d76dff515aca06cec8"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "5bec1cce7144a1fc573a5c240be3cc66"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "477f76900d4f8f785f6a99e8661120ef"
  },
  {
    "url": "typings/types.html",
    "revision": "bc76d938f0b90ebab76f72b65d6be358"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})