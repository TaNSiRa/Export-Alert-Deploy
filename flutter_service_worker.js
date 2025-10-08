'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "3fb7c588e7e0e734238344f3382f0451",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "53030172a4b34ca916a33b6dd9f778c1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63e1029055018ebcff2094097c86ecb4",
".git/logs/refs/heads/master": "63e1029055018ebcff2094097c86ecb4",
".git/logs/refs/remotes/origin/master": "3f9663918ee9622279ff0fb52433400e",
".git/objects/02/dfed9e5b5f41d6669f1511b0e42c69ba52bc04": "32f42d8a6b3ce7b6282ac9e45b54bbd0",
".git/objects/03/3813cba4a2934aca55f3da35177693332de121": "b00f7c83d7cc69b6becaa8da9288db8b",
".git/objects/05/9dba400a9bcaa1b6cd62f871edbda53ef3612a": "5fb95c1603874ab2cb450193584840af",
".git/objects/08/6594b23d25e9ef0de109f517db5776af8a0d2a": "95b3a094099c882d3a8a73f38c703666",
".git/objects/08/ed3e2bf6559b6a40ee7e0415e3195eb513ec3e": "1d8bb8877d5712fd0a04e94e42c0d55a",
".git/objects/0a/882952613abdc04c99ca7565b52c4e6fd904eb": "732a9c4e7d93a0e965c939ebc2a829ca",
".git/objects/0b/b21fa578d80c495345d93e79315862b1c04475": "0d08131b74140f2758fa454f802db1f8",
".git/objects/0d/0688359c261332b120bf331a431a8d06156d8f": "2d483e8724b59da77d05b3598a70601d",
".git/objects/0e/21c6c91540f442e2efd2709e59318675e4d855": "da19674c93f30daf43c446c699efdae2",
".git/objects/0f/11ae6d1ab73f072fdfd7ff2c98e29b227f731a": "8d5540ee27e5d09b4ca6fcdbfcaaab5f",
".git/objects/10/fc9e347c8cc81d50902e2587703e514c89df51": "4f4090307ee7e1db22c2774a2857b2e7",
".git/objects/11/38d3804d4a8176fe4c4487f1f78d2367c60e38": "6c4bf187559115ca9a70dca89db43bae",
".git/objects/11/87de618be1189617f3372dce48d241b40a64ba": "36328d59b163644f7799e5955e509650",
".git/objects/12/6bfabf172f57c7d49eb1bf38ebf20b5a4a5e00": "4b65ffb742e2a01e226e63c0526f4fdb",
".git/objects/14/6632ea0715355249047d7447bc1a5a0b5c6e71": "971fbf605c510e8e40166258f663b747",
".git/objects/14/8ef4befdbf77fdfd4e00d4e64e76736266ab62": "e9d5413527dbc6743415c0989192d239",
".git/objects/15/73c51dc80031d755231c4eb96358cda6be98d9": "32d29fb2b2f218b4fbbc0f8ed7a306a8",
".git/objects/15/a8e90793bc0f3358e973359dd898c9b3d8dc82": "161e33c2e6b9f3045308f57ff34afb6e",
".git/objects/16/25ae0486a7ed4c7831524c49ccfa873b7d6af5": "feee3d68aeb09581c69e273df885e680",
".git/objects/17/000818aad704fa36c466032699a7c4c776266b": "ff7a8db981405a2898872698c73d0acd",
".git/objects/18/f8bfd784510d6954c47e5588b96bfa432d856c": "399f77ae1a12342733a0f8a628b73dba",
".git/objects/19/51408ec63ce32b5b1e03d242430d3655f4a4a4": "1a10cc07a2f52125110b9d9bf5274a1c",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/19efc1343e969f7b0d4dc51282fff0e8345d2b": "7debc69fcc3f9294d48e07c4c09e675b",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/5c1cd85c4482b7140a7253888d38d21e90ce9f": "7479762f9de2eab4890fdf77deb38b6a",
".git/objects/28/7123f94cde5c06d5451be7210de1252300efa9": "2475db09c6ea218ae26811b7bca61230",
".git/objects/28/d3b5a0611d3fc88090ff84181653748776d821": "06e30cbcd8bf5ccecd2f36714a688022",
".git/objects/28/f102657c475c7dca0a37375c0a4be0326f5680": "3b94b31ac42ee8518f0a9f42d1d9f4a8",
".git/objects/29/33fb1413cb764ad1c6bd9b250f5b762580825d": "2e15ab2ad5105ace6634719e6affefbf",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/1d94470251d4a51d2c9cceb1692d07b54e002a": "5a3fcd713bcec67bb57d46f576bfe1d0",
".git/objects/2c/52a109fdc6da81cb7e76414b72e1c62f1bf8a8": "d76dd00634f982b223da26278a2ced6f",
".git/objects/2c/c451d66ad786f503f3ca256cf9c1b51fd83194": "05514abca7240fe112bd077620f645fe",
".git/objects/2d/23a8c7356565cbaaa0f1d67293e384ef4eb751": "50ee372021717c2fbaf22125cda3e65d",
".git/objects/2d/4dce1990e2f43faf64d85b5955a6ccb0938eef": "870c71c54a8dd1268689d543a27c45e0",
".git/objects/2e/c9b0126584953ea44aaf05511841acf48da557": "07140e9ae943019b1821cf6cbc7bab7f",
".git/objects/30/e1fe888c1133c13710cf5be344f5ab5552cc2a": "d51a504fbaa2f8329951db123005c428",
".git/objects/31/9dafafdd99353575ae91ca0a3d8304df4fa3b5": "5c480fe87bbf2b36912449f24e4002bb",
".git/objects/34/3b9c4db1fef22238d0c601f65031db43fa282b": "58bbee4cfca6eb3866162df2cb4a8652",
".git/objects/35/b428f2f3c3c37692a529a5600b82061751b366": "8c03e915aa8d11a4bce61e34433579c4",
".git/objects/39/122a88eae5fc696a6185b020919a1db548aae4": "c6e5e82546b384af5110373403552ba8",
".git/objects/3c/cd45ef55f8827b1d012ce38f0c3d2fb7c55cad": "e604eb2d6a6cb9650c8755501eee4f7e",
".git/objects/3d/3f7d3a511f11688a16deff9522c80fbd810b4e": "475ff51a832dac51d969b1617aeaa289",
".git/objects/40/2c7f00f4998d0ede6328409dec7c3854bbfff9": "d7ac20fa7c8021b90aeef45d0059702d",
".git/objects/40/5f083ef941c137e9818397c99d75e7cd1a2ad5": "7cd399ca0d41eb9d876c89930b74a2b8",
".git/objects/41/3e1ea56abcf3a8a24379ca5554a34eabaa63c7": "e3b7f39585de6f15148cc5a3184e3462",
".git/objects/42/be8819b85180b216b99f82d3d0592d9227f357": "f9ad41faea904d2c6dd9cc1a0298bef1",
".git/objects/46/586397da1f43045bf5a6eaf5d32983aaa28011": "8dcebbfed317872cb0382594a6378723",
".git/objects/47/47d6c04abf8db0a5dd5bb75e6f285a3446e49b": "f83e513fbcc0aee0bb0e3888acc6ccdb",
".git/objects/48/c9a5de3c07741031ae3511b8dea8b3fc46304e": "23136572466a1f230b7f050e11cbf994",
".git/objects/4a/4edfbeb81b6dca5b78223d0217bc640bcd5b0a": "db9caa46f6baf463e03403ca827e38bb",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/701f8c79d41d193884af5d8629ee2fed59a975": "e4c148d6488da5d2f60596c07c01ab5f",
".git/objects/4c/fe69a7abb987a39958f66eb8ad5fa75d3ddb15": "ef904bc24cef4805ef2cb8588f3ee0f1",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/4a3accfd71ccfe6146dd4a41545c0da73f66c4": "3ed5ef76d43d8ccec75df2dc3feda767",
".git/objects/51/15f1ba5d8f6255b0c46d85d277a5847bb1f9b3": "b50d2b2594f6ae72b6c83c452cc1bd1a",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/5596c384149764bc204c47dc64c4d68e4cee1d": "6fee5e6c0e95042c7b8e142a0890eb40",
".git/objects/54/bfdfbbd41549701ef0ece5c8ef20943486a84f": "9a209a855d1b12b6911a813ad04d4d8c",
".git/objects/54/f3e29af8a8f22bbd35b65ae95da51822946dc8": "9106faa09fe94f37541b53deca26fdad",
".git/objects/55/8ff7972e13c70b06e711fa0ced494a3f70bf71": "9f8a3069d6d9f6d59a4626cce917cede",
".git/objects/59/e456fdab493a5c6234d094cc45bee6b559a85c": "a478e875b95ce123b654ac4b6125b1c9",
".git/objects/59/ef4d735e045714475b9956d2658edcb0da070d": "994b26ab4b760cb51c3ec78825c5cad9",
".git/objects/5f/084eeb104f44be1dd1b94d2096de2423eea410": "d3f46fbb0dad76c47e1ac97b5ba0373e",
".git/objects/60/060fa96edf9abb15cbfbe67600c789baed4ea2": "0db9637414953e423b0bfdb841749dcd",
".git/objects/65/2f2d0eacdb11d24e0726851ccfcc2e9e918e1b": "d04710f2e32f37316f9182d88b92c4f0",
".git/objects/68/356d26dcbc884dc5b9ce5ba95bb0ae4e448d9a": "1d9bc46d5297d60db26e30ec74c1b399",
".git/objects/69/e80b4553f818d78c029e51950d7d85bf9440ec": "1c8c1f98a75af40fa36e535c129ebb50",
".git/objects/6a/48fb258632ca118220ca2f6255bc4d332e4d10": "227862f2a1a74a3b5a785118aa7b700b",
".git/objects/6a/63db28217c4fe204e114ba335ba664ccbc98e5": "05d93aa8ba000968bb3f32fdead9c650",
".git/objects/6b/0802223d92d8b7d536506a32905b4e69478101": "1949b3b7012321ae6f498e62ac3e2aec",
".git/objects/6b/52a45868c4578dccbe07c139cbbf3445a0f9da": "2e08a953ec387b905ee3a147b0777664",
".git/objects/6b/6e96e1bd0378204ad782bec81dbcf2dd570f81": "f4f306625ec0cbc1ee5a63dc439e151e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/2192b644a220e3f4e3b6d4c3ce8e5201f6f7af": "150fa9d6e62820c8320d826a75f411e0",
".git/objects/6f/faea5bafe7a0380ae6dd2d2e4afed0c6768c25": "af6815f35e52079c1b8ea8c95b88a605",
".git/objects/70/c3057fadaf7c76a57efe0e9881eff1c7346e71": "bc7b00652e7e1109b6a876f3efcc44e7",
".git/objects/73/47f7b71021edf2ce396b289fca66881c01fe30": "ebed1ff80467098b6caaed61c4843aae",
".git/objects/73/78894c37b5bb17dfd87f8b60bb0a96fed57f5d": "64bff8ae4f1b3df8586d1bd7411ab521",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/b48c14f56a666a72e67bd951e80075240599d2": "1e9ba57f62bfc1a53663836ea6f21d83",
".git/objects/75/2c343f48124d931b40270bb5ad89663057cc39": "4b36173d86288dc0b89bc067406a408f",
".git/objects/76/2bd2a225b011c94dbff7b0eb51feef09e683cb": "8a65bc5ef08474d5ab2b88d5dcedb23e",
".git/objects/76/33765fe9df355e49cd24d5393310325892c40a": "4468a69895dc8015591a803d13790d01",
".git/objects/76/99fa6fd0967a393e3d856c6a35919ec560a520": "545f4c3d63c0ea35df5019896f7f4498",
".git/objects/76/afd21416de982a0a95422980dc4f33fdf4ffec": "fad6a6118826bd03cf093623e2e79675",
".git/objects/76/c1e278c0dbf24dc0bbb2e06bd675527ce32709": "59b7761eab8a804eb256f8b307f2a90b",
".git/objects/7c/6be9cb727965a06eab77678419f9e1322740b2": "b49c9108ac49d096aec1f95182d25901",
".git/objects/7c/7674efe946422effb7afffc8eac09eeeab02a4": "546cc2068af70a216347ad1d42b68d9d",
".git/objects/7d/634e8c517a898be51b873c7a2cd55c6c776f36": "a120863f5da036cc8a91e6cad38dd3ba",
".git/objects/7e/3bb2f8ce7ae5b69e9f32c1481a06f16ebcfe71": "4ac6c0fcf7071bf9fc9c013172f9996f",
".git/objects/7f/6242ec33c1605f357f09a1363a3c467916a6c6": "cd8954e3f5c077749a2e95c3425c55a8",
".git/objects/7f/b7f58a0d646ae83738b128c98f1accaba229c2": "deed2effd1007cf3e44470fbf084c758",
".git/objects/86/6501a22de88d046af5e729672970a7252fef16": "e561c5cd64c79e50085bedcb8cd31377",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0da686591cec7e053e5e6cb8287cfdcb9a5321": "1670d03d4219feade0178bba1a7f4114",
".git/objects/89/13354cb89c32b88b19b9b955e57f1db81f50f8": "25619220684aa9fa41b866970b144423",
".git/objects/89/b88210c6f8b2ddf1568cd1c39e82040d0fb834": "e55f5f423f51ea1176dfa63e93dbac18",
".git/objects/8a/7f8dba5a296546761e4378dc2216eebca5cbc6": "71032145636ddc351d5ecfe0eb13f74a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/fd51b914f412a4e5e1f06a88dbf351d9a2e128": "3699ddf5b891b0d3179b68eba30a7f43",
".git/objects/8f/6a3baeb266ae8068a4d9f9546371cd936f1df0": "0a0594c79e4c55fc0abb0628678d55c3",
".git/objects/90/87cf1e0a2cd8166d73fba407b29b8d49d5abac": "8a5167aab170fd7ffd8b2f7f64c6c977",
".git/objects/95/eeb6230d18030a30d7b7a991fa777cd05a92f3": "cc2450b09af64764eb85eaf0763a4075",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/d5b18861e7dac1d167bae58856832b570a4aff": "a1879cface95f1192ed5b89aabff097f",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/773037f7851b78cd1896f968a9c831978ab7d1": "3bc0d93496787a6d1a8279e57df6a77e",
".git/objects/9b/b90c68a6c7b3ae882e85c8792b79bf05595271": "f0aa644beefea313f5e29393d329ef47",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/6798cf1bae508887dd1c01b3922fd413dbc3ee": "dc55440232a26a58678388ccbc852a13",
".git/objects/9d/7cf220f98402e6908795046cd3c124886fc54a": "2fe461ce38db262ea17658f27acd3579",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/5ff9ffe1d0045df2e277603d92335668fdff47": "970faac462457257bc42e87f6518596f",
".git/objects/a1/ce39e238fc00ba4d87e986c9151994bfbdea15": "a43d54d0985e4bdb3a640da4c2e04f8e",
".git/objects/a3/621f148d832cf277c4a2b45baa566422469ab8": "c3495026e93187b7fbbbe8ab7694eddd",
".git/objects/a3/9a95951b6c13104ff841a1d019704fd07b2344": "4949158085ddc34c2fce1da9fd2239e5",
".git/objects/a4/a3bff8b53177b6e15081166feea9f584e60cdd": "46c623f14339fcfe00efcc1bb62386a4",
".git/objects/a8/082adc50f5554de2cf9212a7ed8780a9b57351": "77d9596ac4329443ac211d8ac3346eb2",
".git/objects/aa/f3898406ddb21a733f3984a88cef3080597343": "1fe60bca3552c8b1122f0e6455b353dd",
".git/objects/b3/32b82d4fa88c3240fca0f9a4b35340077e2bca": "eccb5059ab298dcf720cbfad4f534493",
".git/objects/b3/b5459fcc393e5cff3c80db6f27e5a18c8f1bde": "1934075bb8df57f7bb2253079ab7263f",
".git/objects/b4/ffb63f3e603e5a183fa6b6b3f9946178274cdc": "270d6d75a36ece7132f7b409f112659f",
".git/objects/b5/a882a2ddb7f8a279ee7a143f4937fdd9b54107": "acba69d5ca6ffea33b0831d597a3c7f1",
".git/objects/b6/605b8c7b3f3e858985227114ce0db80ba97e1e": "c91c4c0e5008d556dff5ab53c9e0f04c",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/ab3e923ed751c8e0076c910e3149c87bb81286": "70d0480c28974a413a0699e659cf48f9",
".git/objects/bb/f5d8ffedf745e38ecbe1d6844d687c1404a118": "ed558d014ca2457a1b2ac03d164854fc",
".git/objects/bc/1525ae9971d4ef54d1fe3a0d6642043aa29418": "19d1d8c0a0117e08d0b4f60ae282f1c2",
".git/objects/bd/1297a058ff389c8be59799e0250ddf7ddf6eae": "c05f6dbb7ab9928163f41ce1eae2618d",
".git/objects/bf/196c1d23223fcad88cb5ac9fe0c02a033ab945": "fb2c29ae9f29d04089ebc52c9b185d5a",
".git/objects/c0/19163f799a607e611e9f3e3af882dcd3b3efba": "c33a8715367c85fd620d1a6bcd30254d",
".git/objects/c0/3869c2b1e3be7a712b6680f6aeaa79b2004e26": "914bd9815773421c01100c325f877486",
".git/objects/c0/ba2617bd346bb1494a2c0aa556a4af69fe4856": "9029c06b10a592832b1f514abf9fd588",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/58cd5a88f08898cee884149005dbad9be3616b": "c09790921e375fcc5e44344339a90c1a",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/683a67d368eb183a9a80518b2fee0dc632820a": "156e85ce76995021e808d027423d6ad8",
".git/objects/c9/b28e0d107879f64006f4f1c0b81459e6cfeb42": "d09756ea1527e4b38015c21e4ef4851a",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/5a721adea36ad6db9f01ad8d37402752033d94": "804675145ebacf74eb23ab2cf9f6c27f",
".git/objects/cf/0ce15410a65e8b1aed17ebd807da45ee52d4ab": "3ae219975cb5a27c153e99e1aa872ff1",
".git/objects/d0/c76602c0607e14063707cd6f9bc2de6d98ad11": "576eec2242eb0ad9c5e4d6a0e943be10",
".git/objects/d1/068697438f424c6a955feaf8f846ed35fb1081": "f2ba3845b1eb3b43f95503492f572dd7",
".git/objects/d1/7b8bf7626815ec19526e445f7fc38df3e5ebf0": "364ae5dc21fe7d9b5724779ac1c28fb0",
".git/objects/d2/64ebfc2e70802fc9457f0eba2ac8d910476231": "44707610fb7222e97ba9b5ada5375169",
".git/objects/d3/a736a0a0d1c16f84452d7a53e8920449fe7d82": "4f1e23ca1051dfb71e56ce83761e224e",
".git/objects/d4/17210b68f44322cca6072346a2f09441615835": "5b3f5e6a090fdd2c6cd321a6a9a821ef",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/4a416018c6761aea269cfe4d7e6ee6c559bab0": "76ec727b5979f39049ed824004b15b90",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/7a002932a02fdc81d95f9c60d62401bcc0e46c": "c7529820c75f5afbafebb1f598548d21",
".git/objects/e0/35bb6998e1af9098723aebdeeccf6aa86b5f08": "88198d116a01a2d890dfe06566f24e82",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/fa16230926a25c7ca209f4e2393cc3184d8140": "aa8dde0fa95307db3de11721dc062364",
".git/objects/e5/1d1ffbc2e8656d66ab05b58f86efc6724bb42a": "f251f533d768435774d5b869e928d882",
".git/objects/e6/04cee3f19db5bd965fcf5f77e0280a33aed623": "08db960bf8619a55c7baed3b3b2e244d",
".git/objects/e6/d7d4eda26c4923396d86b9363018176a582488": "c07da7a9f2a8d0c2f668f9f50e1f2c62",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/686880e481d4a29a3461724fd2c433c1872607": "5e5b1f7222ef50ed81aa1883ffc45618",
".git/objects/f0/b07a8a31381a44958a8219253456ba3b25b3f9": "7c936e5bb9caee1d2c8d50df4f63a1ba",
".git/objects/f0/b22970add706d92c74894f20387f87313e4d7f": "489f45cfd38956319f525f3c213f7185",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/84e08ac9e8b96a3388f812cfb54bb67542a909": "24b61f19c4357a1247bdded41d93f2dc",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/e15a327032b78cee8e29dd78f3470164328dfa": "42f5dd45fee499a649197fa9f2fde7de",
".git/objects/f6/8d0c63dc1710e3e20b6f030cd6d137c205d5be": "4d8c1f3afcec448ef0020839d476cba3",
".git/objects/f9/4465b1d24b7bb4538a317d98293eab4e8a7de7": "5998fb07a8a30c6c00fb5c3fbf73cea5",
".git/objects/f9/de827299fac5ae8ef837afadadc355c38b2f06": "a81db9169ddd0601edcdda50a56fc0ee",
".git/objects/fc/3e020ca4f69520e844961dd6a1c1fe166742fb": "4877aabcba464840e205c93d262f2e99",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/master": "7b85ab2cea38b4bbacdb805dff9a76d1",
".git/refs/remotes/origin/master": "7b85ab2cea38b4bbacdb805dff9a76d1",
".vscode/settings.json": "698cc242bb3096bdf42e4d884ee26c07",
"assets/AssetManifest.bin": "28ead041a929a76843f3ada2071c3603",
"assets/AssetManifest.bin.json": "7d26e5aa348f2c7eed604d206e693277",
"assets/AssetManifest.json": "dcf8711d0a91170f0ed9669eda16e8f2",
"assets/assets/alertalarm/alarm.wav": "6389aeedc9437d82f1fdf30a92c76a02",
"assets/assets/alertalarm/alarmIn.wav": "8f3754e17cc5cac55d86d9e5e53efbed",
"assets/assets/alertalarm/alarmOut.wav": "0ed9d996e7f39faff227a52c568e4756",
"assets/assets/fonts/NotoSansThai/NotoSansThai-Bold.ttf": "41916065aee5eae670ae746bea86426f",
"assets/assets/fonts/NotoSansThai/NotoSansThai-Regular.ttf": "427671697e1a490b1e0015e2d7eb4653",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "8c9110ec6a1737b15a5611dc810b0f92",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/icons/icon-caution@3x.png": "8f984d63371c3c065a6600c8a3ce4610",
"assets/assets/icons/icon-close@3x.png": "acd36d73c212b0340765271095d4ab7a",
"assets/assets/icons/icon-correct@2x-green.png": "70325b6ace4a1fb08f6cdae73f72bb74",
"assets/assets/icons/icon-down_4@3x.png": "f7bd2048bda76031dc2c9f1c1851e39c",
"assets/assets/icons/icon-error@3x.png": "e5b60c16a6694859a9a342e66dc09609",
"assets/assets/icons/icon-info@3x.png": "f14fc07d89153a98cc979979c02757d8",
"assets/assets/icons/icon-notifications.png": "01e90e91bd50b2eb166784bac884b7e3",
"assets/assets/images/InsideSST.png": "32d53a02e42c6c53337837d35900be74",
"assets/assets/images/logo_tpk.png": "6c5e90f3a6d7793651ae96a21318a911",
"assets/assets/images/Salt-Spray-Machine.png": "40683f461b8828020313f02ea973287b",
"assets/assets/images/thaiparker.jpg": "3f2e724345e044c0f280da7aef74182c",
"assets/assets/lottie/error.json": "ef86708063b869ef7c06449458b55f3f",
"assets/assets/lottie/loading.json": "0360c225f6303eba41fb06b14a98b2cf",
"assets/assets/lottie/loadingFinger.json": "56721c099bfc1e1111eaf9367a617bbd",
"assets/assets/lottie/loadingGlobal.json": "8140dee112e141cd5c53c04e5727cb58",
"assets/assets/lottie/success.json": "d5f782390a29704806961a7013870025",
"assets/FontManifest.json": "487965ef15a8d2a820747943bea9b54a",
"assets/fonts/MaterialIcons-Regular.otf": "a1806635ab4e7e8386e60ac2eec7599f",
"assets/NOTICES": "71411b84085f1ea8e852bcd96d980ba6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "dd677b435b16f44e4ca08a9f354bac24",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "40361f2cfa299fe92e1ccc15157cd4d5",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "04259c6ac14401d668349eff1a429b84",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "67d7a7bfc806cce2daf6a7874dd4ed5e",
"/": "67d7a7bfc806cce2daf6a7874dd4ed5e",
"main.dart.js": "f439104fbcb7e35f65476ee7a0d82c6e",
"manifest.json": "996d5316c75feb4ef42ebb1e31a6fd1e",
"version.json": "7f86edf6c13624ed15391b7ecd82e7d0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
