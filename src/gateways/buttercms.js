import Butter from 'buttercms'
console.log(process.env.VUE_APP_BUTTER_KEY)
export const butter  = Butter(process.env.VUE_APP_BUTTER_KEY)

