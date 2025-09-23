'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "5fcf94f9ee63dd62227b790fd72bd92c",
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
".git/index": "7d7ded7e4ef58fec03073bd493ec29cd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "444339532875b696ccbaa00a166268bf",
".git/logs/refs/heads/master": "444339532875b696ccbaa00a166268bf",
".git/logs/refs/remotes/origin/master": "107ab381c2072a0996846289ff65821e",
".git/objects/02/dfed9e5b5f41d6669f1511b0e42c69ba52bc04": "32f42d8a6b3ce7b6282ac9e45b54bbd0",
".git/objects/03/3813cba4a2934aca55f3da35177693332de121": "b00f7c83d7cc69b6becaa8da9288db8b",
".git/objects/08/6594b23d25e9ef0de109f517db5776af8a0d2a": "95b3a094099c882d3a8a73f38c703666",
".git/objects/08/ed3e2bf6559b6a40ee7e0415e3195eb513ec3e": "1d8bb8877d5712fd0a04e94e42c0d55a",
".git/objects/0d/0688359c261332b120bf331a431a8d06156d8f": "2d483e8724b59da77d05b3598a70601d",
".git/objects/10/fc9e347c8cc81d50902e2587703e514c89df51": "4f4090307ee7e1db22c2774a2857b2e7",
".git/objects/11/38d3804d4a8176fe4c4487f1f78d2367c60e38": "6c4bf187559115ca9a70dca89db43bae",
".git/objects/12/6bfabf172f57c7d49eb1bf38ebf20b5a4a5e00": "4b65ffb742e2a01e226e63c0526f4fdb",
".git/objects/18/f8bfd784510d6954c47e5588b96bfa432d856c": "399f77ae1a12342733a0f8a628b73dba",
".git/objects/19/51408ec63ce32b5b1e03d242430d3655f4a4a4": "1a10cc07a2f52125110b9d9bf5274a1c",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/19efc1343e969f7b0d4dc51282fff0e8345d2b": "7debc69fcc3f9294d48e07c4c09e675b",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/28/d3b5a0611d3fc88090ff84181653748776d821": "06e30cbcd8bf5ccecd2f36714a688022",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/1d94470251d4a51d2c9cceb1692d07b54e002a": "5a3fcd713bcec67bb57d46f576bfe1d0",
".git/objects/2c/52a109fdc6da81cb7e76414b72e1c62f1bf8a8": "d76dd00634f982b223da26278a2ced6f",
".git/objects/2d/23a8c7356565cbaaa0f1d67293e384ef4eb751": "50ee372021717c2fbaf22125cda3e65d",
".git/objects/2d/4dce1990e2f43faf64d85b5955a6ccb0938eef": "870c71c54a8dd1268689d543a27c45e0",
".git/objects/30/e1fe888c1133c13710cf5be344f5ab5552cc2a": "d51a504fbaa2f8329951db123005c428",
".git/objects/31/9dafafdd99353575ae91ca0a3d8304df4fa3b5": "5c480fe87bbf2b36912449f24e4002bb",
".git/objects/34/3b9c4db1fef22238d0c601f65031db43fa282b": "58bbee4cfca6eb3866162df2cb4a8652",
".git/objects/39/122a88eae5fc696a6185b020919a1db548aae4": "c6e5e82546b384af5110373403552ba8",
".git/objects/3c/cd45ef55f8827b1d012ce38f0c3d2fb7c55cad": "e604eb2d6a6cb9650c8755501eee4f7e",
".git/objects/3d/3f7d3a511f11688a16deff9522c80fbd810b4e": "475ff51a832dac51d969b1617aeaa289",
".git/objects/40/2c7f00f4998d0ede6328409dec7c3854bbfff9": "d7ac20fa7c8021b90aeef45d0059702d",
".git/objects/42/be8819b85180b216b99f82d3d0592d9227f357": "f9ad41faea904d2c6dd9cc1a0298bef1",
".git/objects/47/47d6c04abf8db0a5dd5bb75e6f285a3446e49b": "f83e513fbcc0aee0bb0e3888acc6ccdb",
".git/objects/48/c9a5de3c07741031ae3511b8dea8b3fc46304e": "23136572466a1f230b7f050e11cbf994",
".git/objects/4a/4edfbeb81b6dca5b78223d0217bc640bcd5b0a": "db9caa46f6baf463e03403ca827e38bb",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/4a3accfd71ccfe6146dd4a41545c0da73f66c4": "3ed5ef76d43d8ccec75df2dc3feda767",
".git/objects/51/15f1ba5d8f6255b0c46d85d277a5847bb1f9b3": "b50d2b2594f6ae72b6c83c452cc1bd1a",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/bfdfbbd41549701ef0ece5c8ef20943486a84f": "9a209a855d1b12b6911a813ad04d4d8c",
".git/objects/54/f3e29af8a8f22bbd35b65ae95da51822946dc8": "9106faa09fe94f37541b53deca26fdad",
".git/objects/59/e456fdab493a5c6234d094cc45bee6b559a85c": "a478e875b95ce123b654ac4b6125b1c9",
".git/objects/68/356d26dcbc884dc5b9ce5ba95bb0ae4e448d9a": "1d9bc46d5297d60db26e30ec74c1b399",
".git/objects/69/e80b4553f818d78c029e51950d7d85bf9440ec": "1c8c1f98a75af40fa36e535c129ebb50",
".git/objects/6a/63db28217c4fe204e114ba335ba664ccbc98e5": "05d93aa8ba000968bb3f32fdead9c650",
".git/objects/6b/0802223d92d8b7d536506a32905b4e69478101": "1949b3b7012321ae6f498e62ac3e2aec",
".git/objects/6b/52a45868c4578dccbe07c139cbbf3445a0f9da": "2e08a953ec387b905ee3a147b0777664",
".git/objects/6b/6e96e1bd0378204ad782bec81dbcf2dd570f81": "f4f306625ec0cbc1ee5a63dc439e151e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/2192b644a220e3f4e3b6d4c3ce8e5201f6f7af": "150fa9d6e62820c8320d826a75f411e0",
".git/objects/73/47f7b71021edf2ce396b289fca66881c01fe30": "ebed1ff80467098b6caaed61c4843aae",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/b48c14f56a666a72e67bd951e80075240599d2": "1e9ba57f62bfc1a53663836ea6f21d83",
".git/objects/75/2c343f48124d931b40270bb5ad89663057cc39": "4b36173d86288dc0b89bc067406a408f",
".git/objects/76/2bd2a225b011c94dbff7b0eb51feef09e683cb": "8a65bc5ef08474d5ab2b88d5dcedb23e",
".git/objects/7c/7674efe946422effb7afffc8eac09eeeab02a4": "546cc2068af70a216347ad1d42b68d9d",
".git/objects/7e/3bb2f8ce7ae5b69e9f32c1481a06f16ebcfe71": "4ac6c0fcf7071bf9fc9c013172f9996f",
".git/objects/7f/6242ec33c1605f357f09a1363a3c467916a6c6": "cd8954e3f5c077749a2e95c3425c55a8",
".git/objects/7f/b7f58a0d646ae83738b128c98f1accaba229c2": "deed2effd1007cf3e44470fbf084c758",
".git/objects/86/6501a22de88d046af5e729672970a7252fef16": "e561c5cd64c79e50085bedcb8cd31377",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/fd51b914f412a4e5e1f06a88dbf351d9a2e128": "3699ddf5b891b0d3179b68eba30a7f43",
".git/objects/8f/6a3baeb266ae8068a4d9f9546371cd936f1df0": "0a0594c79e4c55fc0abb0628678d55c3",
".git/objects/90/87cf1e0a2cd8166d73fba407b29b8d49d5abac": "8a5167aab170fd7ffd8b2f7f64c6c977",
".git/objects/95/eeb6230d18030a30d7b7a991fa777cd05a92f3": "cc2450b09af64764eb85eaf0763a4075",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/d5b18861e7dac1d167bae58856832b570a4aff": "a1879cface95f1192ed5b89aabff097f",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/773037f7851b78cd1896f968a9c831978ab7d1": "3bc0d93496787a6d1a8279e57df6a77e",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/6798cf1bae508887dd1c01b3922fd413dbc3ee": "dc55440232a26a58678388ccbc852a13",
".git/objects/9d/7cf220f98402e6908795046cd3c124886fc54a": "2fe461ce38db262ea17658f27acd3579",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a3/621f148d832cf277c4a2b45baa566422469ab8": "c3495026e93187b7fbbbe8ab7694eddd",
".git/objects/a3/9a95951b6c13104ff841a1d019704fd07b2344": "4949158085ddc34c2fce1da9fd2239e5",
".git/objects/a8/082adc50f5554de2cf9212a7ed8780a9b57351": "77d9596ac4329443ac211d8ac3346eb2",
".git/objects/b3/32b82d4fa88c3240fca0f9a4b35340077e2bca": "eccb5059ab298dcf720cbfad4f534493",
".git/objects/b3/b5459fcc393e5cff3c80db6f27e5a18c8f1bde": "1934075bb8df57f7bb2253079ab7263f",
".git/objects/b4/ffb63f3e603e5a183fa6b6b3f9946178274cdc": "270d6d75a36ece7132f7b409f112659f",
".git/objects/b6/605b8c7b3f3e858985227114ce0db80ba97e1e": "c91c4c0e5008d556dff5ab53c9e0f04c",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bb/f5d8ffedf745e38ecbe1d6844d687c1404a118": "ed558d014ca2457a1b2ac03d164854fc",
".git/objects/bd/1297a058ff389c8be59799e0250ddf7ddf6eae": "c05f6dbb7ab9928163f41ce1eae2618d",
".git/objects/bf/196c1d23223fcad88cb5ac9fe0c02a033ab945": "fb2c29ae9f29d04089ebc52c9b185d5a",
".git/objects/c0/3869c2b1e3be7a712b6680f6aeaa79b2004e26": "914bd9815773421c01100c325f877486",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/58cd5a88f08898cee884149005dbad9be3616b": "c09790921e375fcc5e44344339a90c1a",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/5a721adea36ad6db9f01ad8d37402752033d94": "804675145ebacf74eb23ab2cf9f6c27f",
".git/objects/cf/0ce15410a65e8b1aed17ebd807da45ee52d4ab": "3ae219975cb5a27c153e99e1aa872ff1",
".git/objects/d2/64ebfc2e70802fc9457f0eba2ac8d910476231": "44707610fb7222e97ba9b5ada5375169",
".git/objects/d3/a736a0a0d1c16f84452d7a53e8920449fe7d82": "4f1e23ca1051dfb71e56ce83761e224e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/4a416018c6761aea269cfe4d7e6ee6c559bab0": "76ec727b5979f39049ed824004b15b90",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/35bb6998e1af9098723aebdeeccf6aa86b5f08": "88198d116a01a2d890dfe06566f24e82",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/fa16230926a25c7ca209f4e2393cc3184d8140": "aa8dde0fa95307db3de11721dc062364",
".git/objects/e5/1d1ffbc2e8656d66ab05b58f86efc6724bb42a": "f251f533d768435774d5b869e928d882",
".git/objects/e6/04cee3f19db5bd965fcf5f77e0280a33aed623": "08db960bf8619a55c7baed3b3b2e244d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/84e08ac9e8b96a3388f812cfb54bb67542a909": "24b61f19c4357a1247bdded41d93f2dc",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/8d0c63dc1710e3e20b6f030cd6d137c205d5be": "4d8c1f3afcec448ef0020839d476cba3",
".git/objects/f9/4465b1d24b7bb4538a317d98293eab4e8a7de7": "5998fb07a8a30c6c00fb5c3fbf73cea5",
".git/objects/fc/3e020ca4f69520e844961dd6a1c1fe166742fb": "4877aabcba464840e205c93d262f2e99",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/master": "49208a4111bc93fdbd31532868699be5",
".git/refs/remotes/origin/master": "49208a4111bc93fdbd31532868699be5",
".vscode/settings.json": "b26708d1853b1b30a92cda8880f9ef91",
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
"assets/fonts/MaterialIcons-Regular.otf": "38fc1591fb81b23ab3115dcf2475b367",
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
"flutter_bootstrap.js": "af13aabc1fd085e852df6af5a0638f73",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "67d7a7bfc806cce2daf6a7874dd4ed5e",
"/": "67d7a7bfc806cce2daf6a7874dd4ed5e",
"main.dart.js": "1549c557ef35b574777ab62c49dec6d8",
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
