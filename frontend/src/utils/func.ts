import Moment from 'moment-jalaali'
export const GregorianToJalali = (gregorian: Date | string) => {
  gregorian = new Date(gregorian)
  gregorian = `${gregorian.getFullYear()}-${
    gregorian.getMonth() + 1
  }-${gregorian.getDate()} ${gregorian.getHours()}:${gregorian.getMinutes()}:${gregorian.getSeconds()}`
  return Moment(`${gregorian}`, 'YYYY-MM-DD HH:mm:ss').format('HH:mm:ss')
}
