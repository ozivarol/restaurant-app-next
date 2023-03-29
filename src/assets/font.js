import { Dancing_Script,Josefin_Sans} from '@next/font/google'

const dancing = Dancing_Script({ subsets: ['latin'],style: ['normal'] })
const josefin_sans = Josefin_Sans({subsets: ['latin'],style:['normal']})

const dancingClass = dancing.className
const josefinSansClass = josefin_sans.className

module.exports = {
    dancingClass,
    josefinSansClass,
}
