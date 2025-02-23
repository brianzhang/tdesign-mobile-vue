:: BASE_DOC ::

## API
### Avatar Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
imageProps | Object | - | 透传至 Image 组件 | N
alt | String | - | 头像替换文本，仅当图片加载失败时有效 | N
badgeProps | Object | - | 头像右上角提示信息，继承 Badge 组件的全部特性。如：小红点，或者数字。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/avatar/type.ts) | N
hideOnLoadFailed | Boolean | false | 加载失败时隐藏图片 | N
icon | Slot / Function | - | 图标。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
image | String | - | 图片地址 | N
shape | String | circle | 形状。可选项：circle/round。TS 类型：`ShapeEnum ` `type ShapeEnum = 'circle' \| 'round'`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/avatar/type.ts) | N
size | String | - | 尺寸，示例值：small/medium/large/24px/38px 等，默认为 large | N
onError | Function |  | TS 类型：`() => void`<br/>图片加载失败时触发 | N

### Avatar Events

名称 | 参数 | 描述
-- | -- | --
error | \- | 图片加载失败时触发

### AvatarGroup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
cascading | String | 'right-up' | 图片之间的层叠关系，可选值：左侧图片在上和右侧图片在上。可选项：left-up/right-up。TS 类型：`CascadingValue` `type CascadingValue = 'left-up' \| 'right-up'`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/avatar/type.ts) | N
collapseAvatar | String / Slot / Function | - | 头像数量超出时，会出现一个头像折叠元素。该元素内容可自定义。默认为 `+N`。示例：`+5`，`...`, `更多`。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
max | Number | - | 能够同时显示的最多头像数量 | N
size | String | medium | 尺寸，示例值：small/medium/large/24px/38px 等。优先级低于 Avatar.size | N
