/**
 * Element-UI-form-Validator       element-ui 表单验证方法集合对象
 * Version: V1.0.0
 * Author: zongzi531 <zongzi.xy@gmail.com>
 * ------------------------------------------------------------
 * HOW TO USE
 *
 * ES6 Module
 * 1.import EleValidator from './element-ui-form-validator.js'
 * 2.import { ... } from './element-ui-form-validator.js'
 * ------------------------------------------------------------
 * @param   {Object}     rule      表单验证规则[el-form :rules属性 ref属性]
 * @param   {All}        value     表单验证内容[el-form :v-model属性, el-input v-model属性, el-form-item prop属性]
 * @param   {Function}   callback  回调显示的内容[错误内容可实例化Error]
 * @type    {Object}
 */
export default {
  checkPhone,
  checkPassword,
  verifyCode,
  NotNull,
  isNumber,
  isInteger
}

//  手机号长度
const PHONELENGTH = 11
//  验证码长度
const VERIFYCODELENGTH = 6
//  手机号正则表达式
const REGULARPHONE = /^(13[0-9]|15[012356789]|17[01678]|18[0-9]|14[57])[0-9]{8}$/
//  https://github.com/airyland/vux/blob/v2/src/tools/validator/chinaMobile.js
//  const REGULARPHONE = /^1[3|4|5|7|8][0-9]{9}$/

//  function内获取value长度的一个快捷方法
const ELENGTH = function (value) {
  return String(value).length
}
/**
 * checkPhone 手机号码验证
 * @return
 */
export function checkPhone (rule, value, callback) {
  //  判断值是否存在
  if (!value) {
    callback(new Error('手机号不能为空'))
  } else if (
    // 判断值是否为数字
    !Number.isInteger(value) ||
    // 判断值是否11位，value无length属性，将其转换为String再取length
    ELENGTH(value) !== PHONELENGTH ||
    // 正则校验手机正确性
    !REGULARPHONE.test(value)
    ) {
    callback(new Error('请输入正确格式的手机号码！'))
  } else {
    callback()
  }
}

/**
 * checkPassword 密码验证
 * @return
 */
export function checkPassword (rule, value, callback) {
  //  判断值是否存在
  if (!value) {
    callback(new Error('密码不能为空'))
  } else {
    callback()
  }
}

/**
 * verifyCode 验证码位数验证 默认6位
 * @return
 */
export function verifyCode (rule, value, callback) {
  //  判断值是否存在
  if (!value) {
    callback(new Error('验证码不能为空'))
  } else if (ELENGTH(value) !== VERIFYCODELENGTH) {
    callback(new Error('请输入正确的验证码'))
  } else {
    callback()
  }
}

/**
 * NotNull 非空校验
 * @return
 */
export function NotNull (rule, value, callback) {
  //  判断值是否存在
  if (!value) {
    callback(new Error('此为必填项喔'))
  } else if (Array.isArray(value)) {
    if (value[0]) {
      callback()
    } else {
      callback(new Error('此为必填项喔'))
    }
  } else {
    callback()
  }
}

/**
 * isNumber 是否数值
 * @return
 */
export function isNumber (rule, value, callback) {
  //  判断值是否存在
  if (!value) {
    callback(new Error('此为必填项喔'))
  } else if ((String(Number.parseFloat(value)) !== value)) {
    callback(new Error('请输入数值喔'))
  } else {
    callback()
  }
}

/**
 * isInteger 是否数值
 * @return
 */
export function isInteger (rule, value, callback) {
  //  判断值是否存在
  if (!value) {
    callback(new Error('此为必填项喔'))
  } else if ((String(Number.parseInt(value)) !== value) || (Number.parseInt(value) < 0)) {
    callback(new Error('请输入正整数值喔'))
  } else {
    callback()
  }
}

