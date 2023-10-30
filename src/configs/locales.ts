import enUS from "@/locales/en_US";
import zhCN from "@/locales/zh_CN";
import zhHK from "@/locales/zh_HK";


// 设定支持语言代码
const supported = ["en", "cn", "hk"];

// 设置默认初始语言类型代码
let locale = "en";
try {
  const { 0: browserLang } = navigator.language.split("-");
  if (supported.includes(browserLang)) locale = browserLang;
} catch (e) {
  console.log(e);
}


export default {
  // 当前语言代码
  locale,

  // 目标语言不存在时默认返回语言类型
  fallbackLocale: "en",

  // 可利用语言列表
  availableLocales: [
    {
      code: "en",
      flag: "us",
      name: "united-states",
      label: "English",
      messages: enUS,
    },
    {
      code: "cn",
      flag: "cn",
      name: "china",
      label: "简体中文",
      messages: zhCN,
    },
    {
      code: "hk",
      flag: "hk",
      name: "hk",
      label: "繁體中文",
      messages: zhHK,
    },
  ],
  messages: {
    en: enUS,
    cn: zhCN,
    hk: zhHK,
  },
};