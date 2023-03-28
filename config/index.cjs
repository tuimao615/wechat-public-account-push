/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx3d7d57d4e2b42601',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '51e348e1ee0bea4d73e60f1dc5e2f810',

  PROVINCE: '安徽',
  CITY: '亳州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '亲爱的娴贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o1yCq6ImnaihAxQDskPUMqShyLuU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'AJW5zuJkomMYSLlBejTfWSL2dEggJ68JlXDvCgJHLJE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '叶淑娴', year: '2000', date: '02-03',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '11-15',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-01-26' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'AJW5zuJkomMYSLlBejTfWSL2dEggJ68JlXDvCgJHLJE',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o1yCq6AVt7_eY_HwqsvWa9lOn_bk',
    }
  ],

}

module.exports = USER_CONFIG

