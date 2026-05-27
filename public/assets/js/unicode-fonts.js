/**
 * Unicode Font Engine for FancyFontsCopy.com
 * Complete character mappings for 50+ Unicode font styles
 * Zero dependencies - pure JavaScript
 */

(function(global) {
  'use strict';

  // ============================================================
  // COMPLETE UNICODE CHARACTER MAPS
  // Each map: lowercase a-z, uppercase A-Z, digits 0-9
  // ============================================================

  const FONT_MAPS = {

    // 1. Mathematical Bold
    bold: {
      a:'𝗮',b:'𝗯',c:'𝗰',d:'𝗱',e:'𝗲',f:'𝗳',g:'𝗴',h:'𝗵',i:'𝗶',j:'𝗷',
      k:'𝗸',l:'𝗹',m:'𝗺',n:'𝗻',o:'𝗼',p:'𝗽',q:'𝗾',r:'𝗿',s:'𝘀',t:'𝘁',
      u:'𝘂',v:'𝘃',w:'𝘄',x:'𝘅',y:'𝘆',z:'𝘇',
      A:'𝗔',B:'𝗕',C:'𝗖',D:'𝗗',E:'𝗘',F:'𝗙',G:'𝗚',H:'𝗛',I:'𝗜',J:'𝗝',
      K:'𝗞',L:'𝗟',M:'𝗠',N:'𝗡',O:'𝗢',P:'𝗣',Q:'𝗤',R:'𝗥',S:'𝗦',T:'𝗧',
      U:'𝗨',V:'𝗩',W:'𝗪',X:'𝗫',Y:'𝗬',Z:'𝗭',
      0:'𝟬',1:'𝟭',2:'𝟮',3:'𝟯',4:'𝟰',5:'𝟱',6:'𝟲',7:'𝟳',8:'𝟴',9:'𝟵'
    },

    // 2. Mathematical Italic
    italic: {
      a:'𝘢',b:'𝘣',c:'𝘤',d:'𝘥',e:'𝘦',f:'𝘧',g:'𝘨',h:'𝘩',i:'𝘪',j:'𝘫',
      k:'𝘬',l:'𝘭',m:'𝘮',n:'𝘯',o:'𝘰',p:'𝘱',q:'𝘲',r:'𝘳',s:'𝘴',t:'𝘵',
      u:'𝘶',v:'𝘷',w:'𝘸',x:'𝘹',y:'𝘺',z:'𝘻',
      A:'𝘈',B:'𝘉',C:'𝘊',D:'𝘋',E:'𝘌',F:'𝘍',G:'𝘎',H:'𝘏',I:'𝘐',J:'𝘑',
      K:'𝘒',L:'𝘓',M:'𝘔',N:'𝘕',O:'𝘖',P:'𝘗',Q:'𝘘',R:'𝘙',S:'𝘚',T:'𝘛',
      U:'𝘜',V:'𝘝',W:'𝘞',X:'𝘟',Y:'𝘠',Z:'𝘡',
      0:'0',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9'
    },

    // 3. Mathematical Bold Italic
    boldItalic: {
      a:'𝙖',b:'𝙗',c:'𝙘',d:'𝙙',e:'𝙚',f:'𝙛',g:'𝙜',h:'𝙝',i:'𝙞',j:'𝙟',
      k:'𝙠',l:'𝙡',m:'𝙢',n:'𝙣',o:'𝙤',p:'𝙥',q:'𝙦',r:'𝙧',s:'𝙨',t:'𝙩',
      u:'𝙪',v:'𝙫',w:'𝙬',x:'𝙭',y:'𝙮',z:'𝙯',
      A:'𝘼',B:'𝘽',C:'𝘾',D:'𝘿',E:'𝙀',F:'𝙁',G:'𝙂',H:'𝙃',I:'𝙄',J:'𝙅',
      K:'𝙆',L:'𝙇',M:'𝙈',N:'𝙉',O:'𝙊',P:'𝙋',Q:'𝙌',R:'𝙍',S:'𝙎',T:'𝙏',
      U:'𝙐',V:'𝙑',W:'𝙒',X:'𝙓',Y:'𝙔',Z:'𝙕',
      0:'𝟬',1:'𝟭',2:'𝟮',3:'𝟯',4:'𝟰',5:'𝟱',6:'𝟲',7:'𝟳',8:'𝟴',9:'𝟵'
    },

    // 4. Mathematical Script (Cursive)
    cursive: {
      a:'𝓪',b:'𝓫',c:'𝓬',d:'𝓭',e:'𝓮',f:'𝓯',g:'𝓰',h:'𝓱',i:'𝓲',j:'𝓳',
      k:'𝓴',l:'𝓵',m:'𝓶',n:'𝓷',o:'𝓸',p:'𝓹',q:'𝓺',r:'𝓻',s:'𝓼',t:'𝓽',
      u:'𝓾',v:'𝓿',w:'𝔀',x:'𝔁',y:'𝔂',z:'𝔃',
      A:'𝓐',B:'𝓑',C:'𝓒',D:'𝓓',E:'𝓔',F:'𝓕',G:'𝓖',H:'𝓗',I:'𝓘',J:'𝓙',
      K:'𝓚',L:'𝓛',M:'𝓜',N:'𝓝',O:'𝓞',P:'𝓟',Q:'𝓠',R:'𝓡',S:'𝓢',T:'𝓣',
      U:'𝓤',V:'𝓥',W:'𝓦',X:'𝓧',Y:'𝓨',Z:'𝓩',
      0:'0',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9'
    },

    // 5. Mathematical Script Light
    cursiveLight: {
      a:'𝒶',b:'𝒷',c:'𝒸',d:'𝒹',e:'𝑒',f:'𝒻',g:'𝑔',h:'𝒽',i:'𝒾',j:'𝒿',
      k:'𝓀',l:'𝓁',m:'𝓂',n:'𝓃',o:'𝑜',p:'𝓅',q:'𝓆',r:'𝓇',s:'𝓈',t:'𝓉',
      u:'𝓊',v:'𝓋',w:'𝓌',x:'𝓍',y:'𝓎',z:'𝓏',
      A:'𝒜',B:'𝐵',C:'𝒞',D:'𝒟',E:'𝐸',F:'𝐹',G:'𝒢',H:'𝐻',I:'𝐼',J:'𝒥',
      K:'𝒦',L:'𝐿',M:'𝑀',N:'𝒩',O:'𝒪',P:'𝒫',Q:'𝒬',R:'𝑅',S:'𝒮',T:'𝒯',
      U:'𝒰',V:'𝒱',W:'𝒲',X:'𝒳',Y:'𝒴',Z:'𝒵',
      0:'0',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9'
    },

    // 6. Fraktur (Gothic)
    gothic: {
      a:'𝔞',b:'𝔟',c:'𝔠',d:'𝔡',e:'𝔢',f:'𝔣',g:'𝔤',h:'𝔥',i:'𝔦',j:'𝔧',
      k:'𝔨',l:'𝔩',m:'𝔪',n:'𝔫',o:'𝔬',p:'𝔭',q:'𝔮',r:'𝔯',s:'𝔰',t:'𝔱',
      u:'𝔲',v:'𝔳',w:'𝔴',x:'𝔵',y:'𝔶',z:'𝔷',
      A:'𝔄',B:'𝔅',C:'𝔆',D:'𝔇',E:'𝔈',F:'𝔉',G:'𝔊',H:'𝔋',I:'𝔌',J:'𝔍',
      K:'𝔎',L:'𝔏',M:'𝔐',N:'𝔑',O:'𝔒',P:'𝔓',Q:'𝔔',R:'𝔕',S:'𝔖',T:'𝔗',
      U:'𝔘',V:'𝔙',W:'𝔚',X:'𝔛',Y:'𝔜',Z:'𝔝',
      0:'0',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9'
    },

    // 7. Bold Fraktur (Bold Gothic)
    boldGothic: {
      a:'𝖆',b:'𝖇',c:'𝖈',d:'𝖉',e:'𝖊',f:'𝖋',g:'𝖌',h:'𝖍',i:'𝖎',j:'𝖏',
      k:'𝖐',l:'𝖑',m:'𝖒',n:'𝖓',o:'𝖔',p:'𝖕',q:'𝖖',r:'𝖗',s:'𝖘',t:'𝖙',
      u:'𝖚',v:'𝖛',w:'𝖜',x:'𝖝',y:'𝖞',z:'𝖟',
      A:'𝕬',B:'𝕭',C:'𝕮',D:'𝕯',E:'𝕰',F:'𝕱',G:'𝕲',H:'𝕳',I:'𝕴',J:'𝕵',
      K:'𝕶',L:'𝕷',M:'𝕸',N:'𝕹',O:'𝕺',P:'𝕻',Q:'𝕼',R:'𝕽',S:'𝕾',T:'𝕿',
      U:'𝖀',V:'𝖁',W:'𝖂',X:'𝖃',Y:'𝖄',Z:'𝖅',
      0:'0',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9'
    },

    // 8. Double-Struck (Blackboard Bold)
    doubleStruck: {
      a:'𝕒',b:'𝕓',c:'𝕔',d:'𝕕',e:'𝕖',f:'𝕗',g:'𝕘',h:'𝕙',i:'𝕚',j:'𝕛',
      k:'𝕜',l:'𝕝',m:'𝕞',n:'𝕟',o:'𝕠',p:'𝕡',q:'𝕢',r:'𝕣',s:'𝕤',t:'𝕥',
      u:'𝕦',v:'𝕧',w:'𝕨',x:'𝕩',y:'𝕪',z:'𝕫',
      A:'𝔸',B:'𝔹',C:'𝔻',D:'𝔻',E:'𝔼',F:'𝔽',G:'𝔾',H:'𝐇',I:'𝕀',J:'𝕁',
      K:'𝕂',L:'𝕃',M:'𝕄',N:'𝐍',O:'𝕆',P:'𝐏',Q:'𝐐',R:'𝐑',S:'𝕊',T:'𝕋',
      U:'𝕌',V:'𝕍',W:'𝕎',X:'𝕏',Y:'𝕐',Z:'𝐙',
      0:'𝟘',1:'𝟙',2:'𝟚',3:'𝟛',4:'𝟜',5:'𝟝',6:'𝟞',7:'𝟟',8:'𝟠',9:'𝟡'
    },

    // 9. Monospace
    monospace: {
      a:'𝚊',b:'𝚋',c:'𝚌',d:'𝚍',e:'𝚎',f:'𝚏',g:'𝚐',h:'𝚑',i:'𝚒',j:'𝚓',
      k:'𝚔',l:'𝚕',m:'𝚖',n:'𝚗',o:'𝚘',p:'𝚙',q:'𝚚',r:'𝚛',s:'𝚜',t:'𝚝',
      u:'𝚞',v:'𝚟',w:'𝚠',x:'𝚡',y:'𝚢',z:'𝚣',
      A:'𝙰',B:'𝙱',C:'𝙲',D:'𝙳',E:'𝙴',F:'𝙵',G:'𝙶',H:'𝙷',I:'𝙸',J:'𝙹',
      K:'𝙺',L:'𝙻',M:'𝙼',N:'𝙽',O:'𝙾',P:'𝙿',Q:'𝚀',R:'𝚁',S:'𝚂',T:'𝚃',
      U:'𝚄',V:'𝚅',W:'𝚆',X:'𝚇',Y:'𝚈',Z:'𝚉',
      0:'𝟶',1:'𝟷',2:'𝟸',3:'𝟹',4:'𝟺',5:'𝟻',6:'𝟼',7:'𝟽',8:'𝟾',9:'𝟿'
    },

    // 10. Circled (Bubble)
    bubble: {
      a:'ⓐ',b:'ⓑ',c:'ⓒ',d:'ⓓ',e:'ⓔ',f:'ⓕ',g:'ⓖ',h:'ⓗ',i:'ⓘ',j:'ⓙ',
      k:'ⓚ',l:'ⓛ',m:'ⓜ',n:'ⓝ',o:'ⓞ',p:'ⓟ',q:'ⓠ',r:'ⓡ',s:'ⓢ',t:'ⓣ',
      u:'ⓤ',v:'ⓥ',w:'ⓦ',x:'ⓧ',y:'ⓨ',z:'ⓩ',
      A:'Ⓐ',B:'Ⓑ',C:'Ⓒ',D:'Ⓓ',E:'Ⓔ',F:'Ⓕ',G:'Ⓖ',H:'Ⓗ',I:'Ⓘ',J:'Ⓙ',
      K:'Ⓚ',L:'Ⓛ',M:'Ⓜ',N:'Ⓝ',O:'Ⓞ',P:'Ⓟ',Q:'Ⓠ',R:'Ⓡ',S:'Ⓢ',T:'Ⓣ',
      U:'Ⓤ',V:'Ⓥ',W:'Ⓦ',X:'Ⓧ',Y:'Ⓨ',Z:'Ⓩ',
      0:'⓪',1:'①',2:'②',3:'③',4:'④',5:'⑤',6:'⑥',7:'⑦',8:'⑧',9:'⑨'
    },

    // 11. Negative Circled (Black Bubble)
    blackBubble: {
      a:'🅐',b:'🅑',c:'🅒',d:'🅓',e:'🅔',f:'🅕',g:'🅖',h:'🅗',i:'🅘',j:'🅙',
      k:'🅚',l:'🅛',m:'🅜',n:'🅝',o:'🅞',p:'🅟',q:'🅠',r:'🅡',s:'🅢',t:'🅣',
      u:'🅤',v:'🅥',w:'🅦',x:'🅧',y:'🅨',z:'🅩',
      A:'🅐',B:'🅑',C:'🅒',D:'🅓',E:'🅔',F:'🅕',G:'🅖',H:'🅗',I:'🅘',J:'🅙',
      K:'🅚',L:'🅛',M:'🅜',N:'🅝',O:'🅞',P:'🅟',Q:'🅠',R:'🅡',S:'🅢',T:'🅣',
      U:'🅤',V:'🅥',W:'🅦',X:'🅧',Y:'🅨',Z:'🅩',
      0:'⓿',1:'❶',2:'❷',3:'❸',4:'❹',5:'❺',6:'❻',7:'❼',8:'❽',9:'❾'
    },

    // 12. Squared
    square: {
      a:'🄰',b:'🄱',c:'🄲',d:'🄳',e:'🄴',f:'🄵',g:'🄶',h:'🄷',i:'🄸',j:'🄹',
      k:'🄺',l:'🄻',m:'🄼',n:'🄽',o:'🄾',p:'🄿',q:'🅀',r:'🅁',s:'🅂',t:'🅃',
      u:'🅄',v:'🅅',w:'🅆',x:'🅇',y:'🅈',z:'🅉',
      A:'🄰',B:'🄱',C:'🄲',D:'🄳',E:'🄴',F:'🄵',G:'🄶',H:'🄷',I:'🄸',J:'🄹',
      K:'🄺',L:'🄻',M:'🄼',N:'🄽',O:'🄾',P:'🄿',Q:'🅀',R:'🅁',S:'🅂',T:'🅃',
      U:'🅄',V:'🅅',W:'🅆',X:'🅇',Y:'🅈',Z:'🅉',
      0:'0',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9'
    },

    // 13. Negative Squared (Black Square)
    blackSquare: {
      a:'🅰',b:'🅱',c:'🅲',d:'🅳',e:'🅴',f:'🅵',g:'🅶',h:'🅷',i:'🅸',j:'🅹',
      k:'🅺',l:'🅻',m:'🅼',n:'🅽',o:'🅾',p:'🅿',q:'🆀',r:'🆁',s:'🆂',t:'🆃',
      u:'🆄',v:'🆅',w:'🆆',x:'🆇',y:'🆈',z:'🆉',
      A:'🅰',B:'🅱',C:'🅲',D:'🅳',E:'🅴',F:'🅵',G:'🅶',H:'🅷',I:'🅸',J:'🅹',
      K:'🅺',L:'🅻',M:'🅼',N:'🅽',O:'🅾',P:'🅿',Q:'🆀',R:'🆁',S:'🆂',T:'🆃',
      U:'🆄',V:'🆅',W:'🆆',X:'🆇',Y:'🆈',Z:'🆉',
      0:'0',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9'
    },

    // 14. Small Caps
    smallCaps: {
      a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ꜰ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',
      k:'ᴋ',l:'ʟ',m:'ᴍ',n:'ɴ',o:'ᴏ',p:'ᴘ',q:'ǫ',r:'ʀ',s:'ꜱ',t:'ᴛ',
      u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ',
      A:'A',B:'B',C:'C',D:'D',E:'E',F:'F',G:'G',H:'H',I:'I',J:'J',
      K:'K',L:'L',M:'M',N:'N',O:'O',P:'P',Q:'Q',R:'R',S:'S',T:'T',
      U:'U',V:'V',W:'W',X:'X',Y:'Y',Z:'Z',
      0:'0',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9'
    },

    // 15. Superscript
    superscript: {
      a:'ᵃ',b:'ᵇ',c:'ᶜ',d:'ᵈ',e:'ᵉ',f:'ᶠ',g:'ᵍ',h:'ʰ',i:'ⁱ',j:'ʲ',
      k:'ᵏ',l:'ˡ',m:'ᵐ',n:'ⁿ',o:'ᵒ',p:'ᵖ',q:'q',r:'ʳ',s:'ˢ',t:'ᵗ',
      u:'ᵘ',v:'ᵛ',w:'ʷ',x:'ˣ',y:'ʸ',z:'ᶻ',
      A:'ᴬ',B:'ᴮ',C:'ᶜ',D:'ᴰ',E:'ᴱ',F:'ᶠ',G:'ᴳ',H:'ᴴ',I:'ᴵ',J:'ᴶ',
      K:'ᴷ',L:'ᴸ',M:'ᴹ',N:'ᴺ',O:'ᴼ',P:'ᴾ',Q:'Q',R:'ᴿ',S:'ˢ',T:'ᵀ',
      U:'ᵁ',V:'ⱽ',W:'ᵂ',X:'ˣ',Y:'ʸ',Z:'ᶻ',
      0:'⁰',1:'¹',2:'²',3:'³',4:'⁴',5:'⁵',6:'⁶',7:'⁷',8:'⁸',9:'⁹'
    },

    // 16. Subscript
    subscript: {
      a:'ₐ',b:'b',c:'c',d:'d',e:'ₑ',f:'f',g:'g',h:'ₕ',i:'ᵢ',j:'ⱼ',
      k:'ₖ',l:'ₗ',m:'ₘ',n:'ₙ',o:'ₒ',p:'ₚ',q:'q',r:'ᵣ',s:'ₛ',t:'ₜ',
      u:'ᵤ',v:'ᵥ',w:'w',x:'ₓ',y:'y',z:'z',
      A:'A',B:'B',C:'C',D:'D',E:'E',F:'F',G:'G',H:'H',I:'I',J:'J',
      K:'K',L:'L',M:'M',N:'N',O:'O',P:'P',Q:'Q',R:'R',S:'S',T:'T',
      U:'U',V:'V',W:'W',X:'X',Y:'Y',Z:'Z',
      0:'₀',1:'₁',2:'₂',3:'₃',4:'₄',5:'₅',6:'₆',7:'₇',8:'₈',9:'₉'
    },

    // 17. Upside Down
    upsideDown: {
      a:'ɐ',b:'q',c:'ɔ',d:'p',e:'ǝ',f:'ɟ',g:'ƃ',h:'ɥ',i:'ᴉ',j:'ɾ',
      k:'ʞ',l:'l',m:'ɯ',n:'u',o:'o',p:'d',q:'b',r:'ɹ',s:'s',t:'ʇ',
      u:'n',v:'ʌ',w:'ʍ',x:'x',y:'ʎ',z:'z',
      A:'∀',B:'ꓭ',C:'Ɔ',D:'ꓷ',E:'Ǝ',F:'Ⅎ',G:'⅁',H:'H',I:'I',J:'ſ',
      K:'ꓘ',L:'˥',M:'W',N:'N',O:'O',P:'Ԁ',Q:'Ꝺ',R:'ꓤ',S:'S',T:'⊥',
      U:'∩',V:'Λ',W:'M',X:'X',Y:'⅄',Z:'Z',
      0:'0',1:'Ɩ',2:'ᄅ',3:'Ɛ',4:'ㄣ',5:'ϛ',6:'9',7:'ㄥ',8:'8',9:'6',
      '.':'˙',',':'\'','\'':',','!':'¡','?':'¿','(':')',')':'(',
      '[':']',']':'[','{':'}','}':'{','<':'>','>':'<','&':'⅋','_':'‾'
    },

    // 18. Fullwidth (Aesthetic / Vaporwave)
    fullWidth: {
      a:'ａ',b:'ｂ',c:'ｃ',d:'ｄ',e:'ｅ',f:'ｆ',g:'ｇ',h:'ｈ',i:'ｉ',j:'ｊ',
      k:'ｋ',l:'ｌ',m:'ｍ',n:'ｎ',o:'ｏ',p:'ｐ',q:'ｑ',r:'ｒ',s:'ｓ',t:'ｔ',
      u:'ｕ',v:'ｖ',w:'ｗ',x:'ｘ',y:'ｙ',z:'ｚ',
      A:'Ａ',B:'Ｂ',C:'Ｃ',D:'Ｄ',E:'Ｅ',F:'Ｆ',G:'Ｇ',H:'Ｈ',I:'Ｉ',J:'Ｊ',
      K:'Ｋ',L:'Ｌ',M:'Ｍ',N:'Ｎ',O:'Ｏ',P:'Ｐ',Q:'Ｑ',R:'Ｒ',S:'Ｓ',T:'Ｔ',
      U:'Ｕ',V:'Ｖ',W:'Ｗ',X:'Ｘ',Y:'Ｙ',Z:'Ｚ',
      0:'０',1:'１',2:'２',3:'３',4:'４',5:'５',6:'６',7:'７',8:'８',9:'９',
      ' ':'　','!':'！','"':'＂','#':'＃','$':'＄','%':'％','&':'＆',
      '\'':'＇','(':'（',')':'）','*':'＊','+':'＋',',':'，','-':'－',
      '.':'．','/':'／',':':'：',';':'；','<':'＜','=':'＝','>':'＞',
      '?':'？','@':'＠','[':'［','\\':'＼',']':'］','^':'＾','_':'＿',
      '`':'｀','{':'｛','|':'｜','}':'｝','~':'～'
    },

    // 19. Sans-Serif
    sansSerif: {
      a:'𝖺',b:'𝖻',c:'𝖼',d:'𝖽',e:'𝖾',f:'𝖿',g:'𝗀',h:'𝗁',i:'𝗂',j:'𝗃',
      k:'𝗄',l:'𝗅',m:'𝗆',n:'𝗇',o:'𝗈',p:'𝗉',q:'𝗊',r:'𝗋',s:'𝗌',t:'𝗍',
      u:'𝗎',v:'𝗏',w:'𝗐',x:'𝗑',y:'𝗒',z:'𝗓',
      A:'𝖠',B:'𝖡',C:'𝖢',D:'𝖣',E:'𝖤',F:'𝖥',G:'𝖦',H:'𝖧',I:'𝖨',J:'𝖩',
      K:'𝖪',L:'𝖫',M:'𝖬',N:'𝖭',O:'𝖮',P:'𝖯',Q:'𝖰',R:'𝖱',S:'𝖲',T:'𝖳',
      U:'𝖴',V:'𝖵',W:'𝖶',X:'𝖷',Y:'𝖸',Z:'𝖹',
      0:'𝟢',1:'𝟣',2:'𝟤',3:'𝟥',4:'𝟦',5:'𝟧',6:'𝟨',7:'𝟩',8:'𝟪',9:'𝟫'
    },

    // 20. Sans-Serif Bold
    sansSerifBold: {
      a:'𝗮',b:'𝗯',c:'𝗰',d:'𝗱',e:'𝗲',f:'𝗳',g:'𝗴',h:'𝗵',i:'𝗶',j:'𝗷',
      k:'𝗸',l:'𝗹',m:'𝗺',n:'𝗻',o:'𝗼',p:'𝗽',q:'𝗾',r:'𝗿',s:'𝘀',t:'𝘁',
      u:'𝘂',v:'𝘃',w:'𝘄',x:'𝘅',y:'𝘆',z:'𝘇',
      A:'𝗔',B:'𝗕',C:'𝗖',D:'𝗗',E:'𝗘',F:'𝗙',G:'𝗚',H:'𝗛',I:'𝗜',J:'𝗝',
      K:'𝗞',L:'𝗟',M:'𝗠',N:'𝗡',O:'𝗢',P:'𝗣',Q:'𝗤',R:'𝗥',S:'𝗦',T:'𝗧',
      U:'𝗨',V:'𝗩',W:'𝗪',X:'𝗫',Y:'𝗬',Z:'𝗭',
      0:'𝟬',1:'𝟭',2:'𝟮',3:'𝟯',4:'𝟰',5:'𝟱',6:'𝟲',7:'𝟳',8:'𝟴',9:'𝟵'
    },

    // 21. Sans-Serif Italic
    sansSerifItalic: {
      a:'𝘢',b:'𝘣',c:'𝘤',d:'𝘥',e:'𝘦',f:'𝘧',g:'𝘨',h:'𝘩',i:'𝘪',j:'𝘫',
      k:'𝘬',l:'𝘭',m:'𝘮',n:'𝘯',o:'𝘰',p:'𝘱',q:'𝘲',r:'𝘳',s:'𝘴',t:'𝘵',
      u:'𝘶',v:'𝘷',w:'𝘸',x:'𝘹',y:'𝘺',z:'𝘻',
      A:'𝘈',B:'𝘉',C:'𝘊',D:'𝘋',E:'𝘌',F:'𝘍',G:'𝘎',H:'𝘏',I:'𝘐',J:'𝘑',
      K:'𝘒',L:'𝘓',M:'𝘔',N:'𝘕',O:'𝘖',P:'𝘗',Q:'𝘘',R:'𝘙',S:'𝘚',T:'𝘛',
      U:'𝘜',V:'𝘝',W:'𝘞',X:'𝘟',Y:'𝘠',Z:'𝘡',
      0:'0',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9'
    },

    // 22. Sans-Serif Bold Italic
    sansSerifBoldItalic: {
      a:'𝙖',b:'𝙗',c:'𝙘',d:'𝙙',e:'𝙚',f:'𝙛',g:'𝙜',h:'𝙝',i:'𝙞',j:'𝙟',
      k:'𝙠',l:'𝙡',m:'𝙢',n:'𝙣',o:'𝙤',p:'𝙥',q:'𝙦',r:'𝙧',s:'𝙨',t:'𝙩',
      u:'𝙪',v:'𝙫',w:'𝙬',x:'𝙭',y:'𝙮',z:'𝙯',
      A:'𝘼',B:'𝘽',C:'𝘾',D:'𝘿',E:'𝙀',F:'𝙁',G:'𝙂',H:'𝙃',I:'𝙄',J:'𝙅',
      K:'𝙆',L:'𝙇',M:'𝙈',N:'𝙉',O:'𝙊',P:'𝙋',Q:'𝙌',R:'𝙍',S:'𝙎',T:'𝙏',
      U:'𝙐',V:'𝙑',W:'𝙒',X:'𝙓',Y:'𝙔',Z:'𝙕',
      0:'𝟬',1:'𝟭',2:'𝟮',3:'𝟯',4:'𝟰',5:'𝟱',6:'𝟲',7:'𝟳',8:'𝟴',9:'𝟵'
    },

    // 23. Parenthesized
    parenthesized: {
      a:'⒜',b:'⒝',c:'⒞',d:'⒟',e:'⒠',f:'⒡',g:'⒢',h:'⒣',i:'⒤',j:'⒥',
      k:'⒦',l:'⒧',m:'⒨',n:'⒩',o:'⒪',p:'⒫',q:'⒬',r:'⒭',s:'⒮',t:'⒯',
      u:'⒰',v:'⒱',w:'⒲',x:'⒳',y:'⒴',z:'⒵',
      A:'⒜',B:'⒝',C:'⒞',D:'⒟',E:'⒠',F:'⒡',G:'⒢',H:'⒣',I:'⒤',J:'⒥',
      K:'⒦',L:'⒧',M:'⒨',N:'⒩',O:'⒪',P:'⒫',Q:'⒬',R:'⒭',S:'⒮',T:'⒯',
      U:'⒰',V:'⒱',W:'⒲',X:'⒳',Y:'⒴',Z:'⒵',
      0:'0',1:'⑴',2:'⑵',3:'⑶',4:'⑷',5:'⑸',6:'⑹',7:'⑺',8:'⑻',9:'⑼'
    },

    // 24. Math Bold Serif
    serifBold: {
      a:'𝐚',b:'𝐛',c:'𝐜',d:'𝐝',e:'𝐞',f:'𝐟',g:'𝐠',h:'𝐡',i:'𝐢',j:'𝐣',
      k:'𝐤',l:'𝐥',m:'𝐦',n:'𝐧',o:'𝐨',p:'𝐩',q:'𝐪',r:'𝐫',s:'𝐬',t:'𝐭',
      u:'𝐮',v:'𝐯',w:'𝐰',x:'𝐱',y:'𝐲',z:'𝐳',
      A:'𝐀',B:'𝐁',C:'𝐂',D:'𝐃',E:'𝐄',F:'𝐅',G:'𝐆',H:'𝐇',I:'𝐈',J:'𝐉',
      K:'𝐊',L:'𝐋',M:'𝐌',N:'𝐍',O:'𝐎',P:'𝐏',Q:'𝐐',R:'𝐑',S:'𝐒',T:'𝐓',
      U:'𝐔',V:'𝐕',W:'𝐖',X:'𝐗',Y:'𝐘',Z:'𝐙',
      0:'𝟎',1:'𝟏',2:'𝟐',3:'𝟑',4:'𝟒',5:'𝟓',6:'𝟔',7:'𝟕',8:'𝟖',9:'𝟗'
    },

    // 25. Math Italic Serif
    serifItalic: {
      a:'𝑎',b:'𝑏',c:'𝑐',d:'𝑑',e:'𝑒',f:'𝑓',g:'𝑔',h:'ℎ',i:'𝑖',j:'𝑗',
      k:'𝑘',l:'𝑙',m:'𝑚',n:'𝑛',o:'𝑜',p:'𝑝',q:'𝑞',r:'𝑟',s:'𝑠',t:'𝑡',
      u:'𝑢',v:'𝑣',w:'𝑤',x:'𝑥',y:'𝑦',z:'𝑧',
      A:'𝐴',B:'𝐵',C:'𝐶',D:'𝐷',E:'𝐸',F:'𝐹',G:'𝐺',H:'𝐻',I:'𝐼',J:'𝐽',
      K:'𝐾',L:'𝐿',M:'𝑀',N:'𝑁',O:'𝑂',P:'𝑃',Q:'𝑄',R:'𝑅',S:'𝑆',T:'𝑇',
      U:'𝑈',V:'𝑉',W:'𝑊',X:'𝑋',Y:'𝑌',Z:'𝑍',
      0:'0',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9'
    },

    // 26. Math Bold Italic Serif
    serifBoldItalic: {
      a:'𝒂',b:'𝒃',c:'𝒄',d:'𝒅',e:'𝒆',f:'𝒇',g:'𝒈',h:'𝒉',i:'𝒊',j:'𝒋',
      k:'𝒌',l:'𝒍',m:'𝒎',n:'𝒏',o:'𝒐',p:'𝒑',q:'𝒒',r:'𝒓',s:'𝒔',t:'𝒕',
      u:'𝒖',v:'𝒗',w:'𝒘',x:'𝒙',y:'𝒚',z:'𝒛',
      A:'𝑨',B:'𝑩',C:'𝑪',D:'𝑫',E:'𝑬',F:'𝑭',G:'𝑮',H:'𝑯',I:'𝑰',J:'𝑱',
      K:'𝑲',L:'𝑳',M:'𝑴',N:'𝑵',O:'𝑶',P:'𝑷',Q:'𝑸',R:'𝑹',S:'𝑺',T:'𝑻',
      U:'𝑼',V:'𝑽',W:'𝑾',X:'𝑿',Y:'𝒀',Z:'𝒁',
      0:'0',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9'
    },

    // 27. Currency Style
    currency: {
      a:'@',b:'ß',c:'¢',d:'d',e:'€',f:'f',g:'g',h:'h',i:'i',j:'j',
      k:'k',l:'l',m:'m',n:'n',o:'0',p:'p',q:'q',r:'r',s:'$',t:'t',
      u:'u',v:'v',w:'w',x:'x',y:'¥',z:'z',
      A:'@',B:'ß',C:'¢',D:'D',E:'€',F:'F',G:'G',H:'H',I:'I',J:'J',
      K:'K',L:'L',M:'M',N:'N',O:'0',P:'P',Q:'Q',R:'R',S:'$',T:'T',
      U:'U',V:'V',W:'W',X:'X',Y:'¥',Z:'Z',
      0:'0',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9'
    },

    // 28. Thai-Style Accents
    creepyZalgoLight: {
      // Will use combining chars in function instead
    },

    // 29. Lenticular Brackets
    lenticularBrackets: {},

    // 30. Wide with Dots
    wideWithDots: {},

    // 31. Serif Bold Digits
    serifBoldDigits: {},

    // 28. Mirror / Reversed characters
    mirror: {
      a:'ɒ',b:'d',c:'ɔ',d:'b',e:'ɘ',f:'Ꮈ',g:'ǫ',h:'ʜ',i:'i',j:'ꞁ',
      k:'ʞ',l:'l',m:'m',n:'ᴎ',o:'o',p:'q',q:'p',r:'ɿ',s:'ꙅ',t:'ƚ',
      u:'u',v:'v',w:'w',x:'x',y:'ʏ',z:'z',
      A:'A',B:'ꓭ',C:'Ↄ',D:'ꓷ',E:'Ǝ',F:'ꓞ',G:'⅁',H:'H',I:'I',J:'Ⴑ',
      K:'ꓘ',L:'⌐',M:'M',N:'ᴎ',O:'O',P:'ꟼ',Q:'Ọ',R:'Я',S:'Ꙅ',T:'T',
      U:'U',V:'V',W:'W',X:'X',Y:'Y',Z:'Z',
      0:'0',1:'1',2:'2',3:'Ɛ',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',
      '?':'⸮','(':')',')':'(','{':'}','}':'{','[':']',']':'[',
      '<':'>','>':'<','/':'\\','\\':'/'
    },

    // Additional styles defined via decoration functions below
  };

  // ============================================================
  // DECORATIVE TEXT STYLES (using combining characters & patterns)
  // ============================================================

  // Combining diacritical marks for Zalgo
  const ZALGO_UP = [
    '\u030d','\u030e','\u0304','\u0305','\u033f','\u0311','\u0306','\u0310',
    '\u0352','\u0357','\u0351','\u0307','\u0308','\u030a','\u0342','\u0343',
    '\u0344','\u034a','\u034b','\u034c','\u0303','\u0302','\u030c','\u0350',
    '\u0300','\u0301','\u030b','\u030f','\u0312','\u0313','\u0314','\u033d',
    '\u0309','\u0363','\u0364','\u0365','\u0366','\u0367','\u0368','\u0369',
    '\u036a','\u036b','\u036c','\u036d','\u036e','\u036f','\u033e','\u035b'
  ];

  const ZALGO_MID = [
    '\u0315','\u031b','\u0340','\u0341','\u0358','\u0321','\u0322','\u0327',
    '\u0328','\u0334','\u0335','\u0336','\u034f','\u035c','\u035d','\u035e',
    '\u035f','\u0360','\u0362','\u0338','\u0337'
  ];

  const ZALGO_DOWN = [
    '\u0316','\u0317','\u0318','\u0319','\u031c','\u031d','\u031e','\u031f',
    '\u0320','\u0324','\u0325','\u0326','\u0329','\u032a','\u032b','\u032c',
    '\u032d','\u032e','\u032f','\u0330','\u0331','\u0332','\u0333','\u0339',
    '\u033a','\u033b','\u033c','\u0345','\u0347','\u0348','\u0349','\u034d',
    '\u034e','\u0353','\u0354','\u0355','\u0356','\u0359','\u035a','\u0323'
  ];

  // ============================================================
  // FONT STYLE METADATA
  // ============================================================

  const FONT_STYLES = [
    // --- Bold Variants ---
    { id: 'bold', name: 'Bold', category: 'bold', map: 'bold' },
    { id: 'serifBold', name: 'Serif Bold', category: 'bold', map: 'serifBold' },
    { id: 'sansSerifBold', name: 'Sans-Serif Bold', category: 'bold', map: 'sansSerifBold' },

    // --- Italic Variants ---
    { id: 'italic', name: 'Italic', category: 'italic', map: 'italic' },
    { id: 'serifItalic', name: 'Serif Italic', category: 'italic', map: 'serifItalic' },
    { id: 'sansSerifItalic', name: 'Sans-Serif Italic', category: 'italic', map: 'sansSerifItalic' },

    // --- Bold Italic ---
    { id: 'boldItalic', name: 'Bold Italic', category: 'bold-italic', map: 'boldItalic' },
    { id: 'serifBoldItalic', name: 'Serif Bold Italic', category: 'bold-italic', map: 'serifBoldItalic' },
    { id: 'sansSerifBoldItalic', name: 'Sans-Serif Bold Italic', category: 'bold-italic', map: 'sansSerifBoldItalic' },

    // --- Cursive / Script ---
    { id: 'cursive', name: 'Cursive (Bold Script)', category: 'cursive', map: 'cursive' },
    { id: 'cursiveLight', name: 'Cursive (Light Script)', category: 'cursive', map: 'cursiveLight' },

    // --- Gothic / Fraktur ---
    { id: 'gothic', name: 'Gothic (Fraktur)', category: 'gothic', map: 'gothic' },
    { id: 'boldGothic', name: 'Bold Gothic', category: 'gothic', map: 'boldGothic' },

    // --- Special ---
    { id: 'doubleStruck', name: 'Double-Struck', category: 'special', map: 'doubleStruck' },
    { id: 'monospace', name: 'Monospace', category: 'special', map: 'monospace' },
    { id: 'sansSerif', name: 'Sans-Serif', category: 'special', map: 'sansSerif' },
    { id: 'smallCaps', name: 'Small Caps', category: 'small', map: 'smallCaps' },

    // --- Bubble / Enclosed ---
    { id: 'bubble', name: 'Bubble (Circled)', category: 'bubble', map: 'bubble' },
    { id: 'blackBubble', name: 'Black Bubble', category: 'bubble', map: 'blackBubble' },
    { id: 'square', name: 'Square', category: 'bubble', map: 'square' },
    { id: 'blackSquare', name: 'Black Square', category: 'bubble', map: 'blackSquare' },
    { id: 'parenthesized', name: 'Parenthesized', category: 'bubble', map: 'parenthesized' },

    // --- Size / Position ---
    { id: 'superscript', name: 'Superscript', category: 'small', map: 'superscript' },
    { id: 'subscript', name: 'Subscript', category: 'small', map: 'subscript' },

    // --- Transformation ---
    { id: 'upsideDown', name: 'Upside Down', category: 'flip', map: 'upsideDown', reverse: true },
    { id: 'mirror', name: 'Mirror Text', category: 'mirror', fn: 'mirror' },
    { id: 'fullWidth', name: 'Full Width (Aesthetic)', category: 'aesthetic', map: 'fullWidth' },

    // --- Decorative (function-based) ---
    { id: 'strikethrough', name: 'Strikethrough', category: 'strikethrough', fn: 'strikethrough' },
    { id: 'doubleStrikethrough', name: 'Double Strikethrough', category: 'strikethrough', fn: 'doubleStrikethrough' },
    { id: 'underline', name: 'Underline', category: 'underline', fn: 'underline' },
    { id: 'doubleUnderline', name: 'Double Underline', category: 'underline', fn: 'doubleUnderline' },
    { id: 'vaporwave', name: 'V a p o r w a v e', category: 'aesthetic', fn: 'vaporwave' },
    { id: 'zalgoLight', name: 'Zalgo (Light)', category: 'zalgo', fn: 'zalgoLight' },
    { id: 'zalgoMedium', name: 'Zalgo (Medium)', category: 'zalgo', fn: 'zalgoMedium' },
    { id: 'zalgoHeavy', name: 'Zalgo (Insane)', category: 'zalgo', fn: 'zalgoHeavy' },

    // --- Symbol Decorative Styles ---
    { id: 'heartsBetween', name: 'Hearts Between', category: 'decorative', fn: 'heartsBetween' },
    { id: 'starsBetween', name: 'Stars Between', category: 'decorative', fn: 'starsBetween' },
    { id: 'dotsBetween', name: 'Dots Between', category: 'decorative', fn: 'dotsBetween' },
    { id: 'crossesBetween', name: 'Crosses Between', category: 'decorative', fn: 'crossesBetween' },
    { id: 'arrowsBetween', name: 'Arrows Between', category: 'decorative', fn: 'arrowsBetween' },

    // --- Bracket / Frame Styles ---
    { id: 'wavyBrackets', name: 'Wavy Frame', category: 'framed', fn: 'wavyBrackets' },
    { id: 'starFrame', name: 'Star Frame', category: 'framed', fn: 'starFrame' },
    { id: 'sparkleFrame', name: 'Sparkle Frame', category: 'framed', fn: 'sparkleFrame' },
    { id: 'flowerFrame', name: 'Flower Frame', category: 'framed', fn: 'flowerFrame' },
    { id: 'heartFrame', name: 'Heart Frame', category: 'framed', fn: 'heartFrame' },
    { id: 'diamondFrame', name: 'Diamond Frame', category: 'framed', fn: 'diamondFrame' },

    // --- More Unicode Map Styles ---
    { id: 'currency', name: 'Currency Style', category: 'decorative', map: 'currency' },

    // --- Combined Styles ---
    { id: 'boldCursive', name: 'Bold Cursive', category: 'cursive', map: 'cursive' },
    { id: 'invertedBubble', name: 'Inverted Bubble', category: 'bubble', map: 'blackBubble' },

    // --- Extra Decorative ---
    { id: 'medievalFrame', name: 'Medieval Frame', category: 'framed', fn: 'medievalFrame' },
    { id: 'japaneseFrame', name: 'Japanese Frame', category: 'framed', fn: 'japaneseFrame' },
    { id: 'boldStrike', name: 'Bold + Strikethrough', category: 'bold', fn: 'boldStrike' },
    { id: 'italicUnderline', name: 'Italic + Underline', category: 'italic', fn: 'italicUnderline' },
    { id: 'wideSpaced', name: 'W i d e  S p a c e d', category: 'aesthetic', fn: 'wideSpaced' },
    { id: 'dotAbove', name: 'Dot Above Each Letter', category: 'decorative', fn: 'dotAbove' },
    { id: 'ringAbove', name: 'Ring Above Each Letter', category: 'decorative', fn: 'ringAbove' },
  ];

  // ============================================================
  // CONVERSION FUNCTIONS
  // ============================================================

  /**
   * Convert text using a character map
   */
  function convertText(input, fontMapKey) {
    var map = FONT_MAPS[fontMapKey];
    if (!map) return input;
    var result = '';
    for (var i = 0; i < input.length; i++) {
      var ch = input[i];
      result += (map[ch] !== undefined) ? map[ch] : ch;
    }
    return result;
  }

  /**
   * Convert text then reverse it (for upside-down)
   */
  function convertAndReverse(input, fontMapKey) {
    var converted = convertText(input, fontMapKey);
    // Reverse using Array.from to handle surrogate pairs
    return Array.from(converted).reverse().join('');
  }

  /**
   * Generate Zalgo text
   */
  function generateZalgo(input, intensity) {
    var result = '';
    for (var i = 0; i < input.length; i++) {
      result += input[i];
      if (input[i] === ' ' || input[i] === '\n') continue;

      var numUp = Math.floor(Math.random() * intensity) + 1;
      var numMid = Math.floor(Math.random() * Math.ceil(intensity / 2));
      var numDown = Math.floor(Math.random() * intensity) + 1;

      for (var j = 0; j < numUp; j++) {
        result += ZALGO_UP[Math.floor(Math.random() * ZALGO_UP.length)];
      }
      for (var j = 0; j < numMid; j++) {
        result += ZALGO_MID[Math.floor(Math.random() * ZALGO_MID.length)];
      }
      for (var j = 0; j < numDown; j++) {
        result += ZALGO_DOWN[Math.floor(Math.random() * ZALGO_DOWN.length)];
      }
    }
    return result;
  }

  /**
   * Vaporwave: add space between each character
   */
  function generateVaporwave(input) {
    return Array.from(input).join(' ');
  }

  /**
   * Add combining strikethrough to each character
   */
  function addStrikethrough(input) {
    var result = '';
    for (var i = 0; i < input.length; i++) {
      result += input[i];
      if (input[i] !== ' ' && input[i] !== '\n') {
        result += '\u0336';
      }
    }
    return result;
  }

  /**
   * Add combining double strikethrough (short stroke overlay) to each character
   */
  function addDoubleStrikethrough(input) {
    var result = '';
    for (var i = 0; i < input.length; i++) {
      result += input[i];
      if (input[i] !== ' ' && input[i] !== '\n') {
        result += '\u0335';
      }
    }
    return result;
  }

  /**
   * Mirror text: reverse character order and map to mirrored equivalents
   */
  function generateMirror(input) {
    var map = FONT_MAPS.mirror;
    var chars = Array.from(input);
    var result = '';
    for (var i = chars.length - 1; i >= 0; i--) {
      var ch = chars[i];
      result += (map[ch] !== undefined) ? map[ch] : ch;
    }
    return result;
  }

  /**
   * Add combining underline to each character
   */
  function addUnderline(input) {
    var result = '';
    for (var i = 0; i < input.length; i++) {
      result += input[i];
      if (input[i] !== ' ' && input[i] !== '\n') {
        result += '\u0332';
      }
    }
    return result;
  }

  /**
   * Add combining double underline to each character
   */
  function addDoubleUnderline(input) {
    var result = '';
    for (var i = 0; i < input.length; i++) {
      result += input[i];
      if (input[i] !== ' ' && input[i] !== '\n') {
        result += '\u0333';
      }
    }
    return result;
  }

  /**
   * Add separator character between each letter
   */
  function addBetween(input, sep) {
    return Array.from(input).join(sep);
  }

  /**
   * Frame text with decorative characters
   */
  function frameText(input, left, right) {
    return left + ' ' + input + ' ' + right;
  }

  /**
   * Add combining dot above each character
   */
  function addDotAbove(input) {
    var result = '';
    for (var i = 0; i < input.length; i++) {
      result += input[i];
      if (input[i] !== ' ' && input[i] !== '\n') {
        result += '\u0307';
      }
    }
    return result;
  }

  /**
   * Add combining ring above each character
   */
  function addRingAbove(input) {
    var result = '';
    for (var i = 0; i < input.length; i++) {
      result += input[i];
      if (input[i] !== ' ' && input[i] !== '\n') {
        result += '\u030a';
      }
    }
    return result;
  }

  // ============================================================
  // MASTER CONVERT FUNCTION
  // ============================================================

  /**
   * Convert text for a given font style definition
   */
  function convert(input, styleDef) {
    if (!input) return '';

    // Map-based conversion
    if (styleDef.map) {
      if (styleDef.reverse) {
        return convertAndReverse(input, styleDef.map);
      }
      return convertText(input, styleDef.map);
    }

    // Function-based conversion
    if (styleDef.fn) {
      switch (styleDef.fn) {
        case 'strikethrough': return addStrikethrough(input);
        case 'doubleStrikethrough': return addDoubleStrikethrough(input);
        case 'mirror': return generateMirror(input);
        case 'underline': return addUnderline(input);
        case 'doubleUnderline': return addDoubleUnderline(input);
        case 'vaporwave': return generateVaporwave(input);
        case 'zalgoLight': return generateZalgo(input, 2);
        case 'zalgoMedium': return generateZalgo(input, 5);
        case 'zalgoHeavy': return generateZalgo(input, 12);
        case 'heartsBetween': return addBetween(input, '\u2665');
        case 'starsBetween': return addBetween(input, '\u2605');
        case 'dotsBetween': return addBetween(input, '\u2022');
        case 'crossesBetween': return addBetween(input, '\u2720');
        case 'arrowsBetween': return addBetween(input, '\u279c');
        case 'wavyBrackets': return frameText(input, '\u2E3D\u2E3D\u2E3D', '\u2E3D\u2E3D\u2E3D');
        case 'starFrame': return frameText(input, '\u2729\u2729\u2729', '\u2729\u2729\u2729');
        case 'sparkleFrame': return frameText(input, '\u2728\u2728\u2728', '\u2728\u2728\u2728');
        case 'flowerFrame': return frameText(input, '\u2740\u2740\u2740', '\u2740\u2740\u2740');
        case 'heartFrame': return frameText(input, '\u2764\u2764\u2764', '\u2764\u2764\u2764');
        case 'diamondFrame': return frameText(input, '\u2666\u2666\u2666', '\u2666\u2666\u2666');
        case 'medievalFrame': return frameText(input, '\u2694\uFE0F\u2694\uFE0F', '\u2694\uFE0F\u2694\uFE0F');
        case 'japaneseFrame': return frameText(input, '\u300E', '\u300F');
        case 'boldStrike': return addStrikethrough(convertText(input, 'bold'));
        case 'italicUnderline': return addUnderline(convertText(input, 'italic'));
        case 'wideSpaced': return Array.from(input).join('  ');
        case 'dotAbove': return addDotAbove(input);
        case 'ringAbove': return addRingAbove(input);
        default: return input;
      }
    }

    return input;
  }

  // ============================================================
  // CATEGORY DEFINITIONS
  // ============================================================

  var CATEGORIES = {
    'bold': 'Bold',
    'italic': 'Italic',
    'bold-italic': 'Bold Italic',
    'cursive': 'Cursive / Script',
    'gothic': 'Gothic / Fraktur',
    'special': 'Special',
    'small': 'Small Text',
    'bubble': 'Bubble / Enclosed',
    'flip': 'Flipped',
    'mirror': 'Mirror',
    'aesthetic': 'Aesthetic',
    'strikethrough': 'Strikethrough',
    'underline': 'Underline',
    'zalgo': 'Zalgo / Glitch',
    'decorative': 'Decorative',
    'framed': 'Framed'
  };

  // ============================================================
  // PUBLIC API
  // ============================================================

  var UnicodeFonts = {
    FONT_MAPS: FONT_MAPS,
    FONT_STYLES: FONT_STYLES,
    CATEGORIES: CATEGORIES,
    convert: convert,
    convertText: convertText,
    convertAndReverse: convertAndReverse,
    generateZalgo: generateZalgo,
    generateVaporwave: generateVaporwave,
    addStrikethrough: addStrikethrough,
    addDoubleStrikethrough: addDoubleStrikethrough,
    generateMirror: generateMirror,
    addUnderline: addUnderline,
    addDoubleUnderline: addDoubleUnderline,
    addBetween: addBetween,
    frameText: frameText,

    /**
     * Get all styles for a category
     */
    getStylesByCategory: function(category) {
      return FONT_STYLES.filter(function(s) { return s.category === category; });
    },

    /**
     * Get a style by its ID
     */
    getStyleById: function(id) {
      for (var i = 0; i < FONT_STYLES.length; i++) {
        if (FONT_STYLES[i].id === id) return FONT_STYLES[i];
      }
      return null;
    },

    /**
     * Convert text for ALL styles at once, returns array of { id, name, category, result }
     */
    convertAll: function(input) {
      return FONT_STYLES.map(function(style) {
        return {
          id: style.id,
          name: style.name,
          category: style.category,
          result: convert(input, style)
        };
      });
    },

    /**
     * Get styles for a specific filter (used by dedicated tool pages)
     */
    getFilteredStyles: function(filterCategories) {
      return FONT_STYLES.filter(function(s) {
        return filterCategories.indexOf(s.category) !== -1;
      });
    }
  };

  // Export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = UnicodeFonts;
  }
  global.UnicodeFonts = UnicodeFonts;

})(typeof window !== 'undefined' ? window : this);
