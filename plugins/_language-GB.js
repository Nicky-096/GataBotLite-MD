import { en, es, id, ar, pt } from '../lib/idiomas/total-idiomas.js'  
export function before(m, { conn }) {
let user = global.db.data.users[m.sender]

if (user.GBLanguage == 'es') {
global.lenguajeGB = es
} else if (user.GBLanguage == 'en') {
global.lenguajeGB = en
} else if (user.GBLanguage == 'pt') {
global.lenguajeGB = pt
} else if (user.GBLanguage == 'ar') {
global.lenguajeGB = ar
} else if (user.GBLanguage == 'id') {
global.lenguajeGB = id
} else {
global.lenguajeGB = es
}
}
