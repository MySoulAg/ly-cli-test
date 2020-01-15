// 校验类的工具方法

export default {
  /**
   * 判断是否为正整数,返回true或false
   * @param {*} arg
   */
  isPositiveInteger(arg) {
    let num = arg.toString();
    if (!/(^[1-9]\d*$)/.test(num)) {
      return false;
    } else {
      return true;
    }
  },

  /**
   * 判断是不是全中文
   * @param {*} str
   */
  isChn(str) {
    const reg = new RegExp("^[\u4E00-\u9FA5]+$");
    if (reg.test(str)) {
      return true;
    }
    return false;
  },

  /**
   * 验证是否是英文
   * @param {*} s
   */
  isEng(str) {
    const reg = new RegExp("^[A-Za-z]+$");
    if (reg.test(str)) {
      return true;
    }
    return false;
  },
}