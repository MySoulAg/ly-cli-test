// 格式化的工具类方法

export default {
    /**
   * 去除空格
   */
  removeSpaces(str) {
    return str.replace(/\s+/g, "");
  },

  /**
   * 中间显示成*号
   * @param value
   * @param frontCount 前显示的位
   * @param endCount 后显示的位
   * @returns value
   */
  format2Star(value, frontCount, endCount) {
    if (this.isEmpty(value)) {
      return "";
    }
    let vLength = value.length;
    let starCount = vLength - frontCount - endCount;
    if (starCount <= 0) {
      return value;
    } else {
      let reg = new RegExp(
        "^(.{" + frontCount + "})(.{" + starCount + "})(.*)$"
      );
      let result = value.match(reg);
      let star = (Math.pow(10, starCount) + "")
        .replace(/0/g, "*")
        .replace("1", "");
      return result[1] + star + result[3];
    }
  },
}