# 详情页规范

做新的作品详情页（`/works/<id>`）或修改已有的详情页之前，先读这份。它分两层：

- **判断**：叙事、事实、措辞。代码里读不出来，靠这份文档传下去。
- **形式**：结构、开场、媒体、动效、排版。代码注释里也有，这里集中说清。

详情页分两种：**完整版**给首页 selected 和 concepts 里的作品，**简版**给 map 上的其他作品（见第 12 节）。完整版的参考页是 Risee、Lifeo、Piko、Banana Exoskeleton、Bread Reader、Lino App、Rethinking Rabbit R1、Playground OS、Witness，简版的参考页是 Aurora House。拿不准时，先看它们怎么做。

## 1. 文件在哪

| 要改什么 | 文件 |
| --- | --- |
| 一页的叙事 | `src/content/details/<id>.md`（字段说明见 `src/content.config.ts` 的注释） |
| 作品的名字、日期、图标 | `src/content/works/<id>.md`（`listTitle` 就是页面上显示的名字） |
| 首页卡片上的名字和一句话 | `src/data/home.ts`（名字要和 `listTitle` 一致） |
| 页面模板 | `src/pages/works/[id].astro` |
| 样式和动效 | `src/styles/detail.css`、`src/scripts/detail.ts` |
| 某个作品专用的开场或线条画 | `src/components/*.astro` |
| 媒体 | 原图在 `public/Assets/Works/…`，生成的在 `public/media/works/<id>/`，生成方法写进 `scripts/make-detail-media.sh` |

旧版内容（课程、老师、合作者、原文、Figma 链接）在 `public/works.js`，动笔前先读这一段，并把所有素材逐张看一遍，GIF 拆成帧看。

## 2. 叙事

一页是一个故事，一屏一句话。

- **先找论点。** 用一句话说出这个作品想证明什么，每一屏都要为它服务。和论点偏了的例子，再好也删掉（Rethinking Rabbit R1 删掉了 Monet 那页：它讲艺术创作，论点讲的是日常生活里的可能性）。
- **常见的骨架**：现状 → 问题 → 洞察 → 黑底的作品名 → 怎么做 → 具体的样子 → 收尾。不必死守，但"问题"这一环不能缺，缺了读者不知道为什么要有这个作品。
- **逻辑不能跳。** 从通用的论点落到这件作品时，要有一屏说明"为什么是它"（R1："Too small to scroll on. Just right for a surprise."，从设备的形态推到"给生活带来惊喜"）。
- **长度**：12–13 屏左右。多了就找能合并的屏。
- **黑底（`tone: ink`）只给作品名和关键转折。** 两个黑底大句之间至少隔一屏以上，否则后一个就不重了。
- **收尾句最好回应开场。** R1 开场是 "Ask an AI what to do, and you get one answer."，收尾是 "It doesn't decide for you. It shows you what else you could do."
- **没有配图的一屏，就把那一句写得足够好；** 或者配一张能说明问题的线条画（R1 的尺寸对比），不要为了有图硬塞图。

## 3. 事实与时间

- **讲项目当时的情况用过去时。** 写 "Back then, we used AI…"，不写 "Today we use…"。页面左下角的年份就是那一屏所在的时间。
- **说"我当时走在前面"之前先查证。** 查清那个概念是什么时候成形的，再写脚注。措辞要留余地：写"在 X 成为一个词 / 成为标配之前"，不写"那时还没有 X"。概念多半早有零星说法，只是没流行。
- **脚注写法**：句子末尾加 `*`，`footnote` 写 `* …`。例：
  - Lino App："* Well before Andrej Karpathy proposed the LLM Wiki in April 2026"
  - R1："* Well before “context engineering” became a term, in June 2025"
  - Playground OS："* Before today’s idea of an agent took shape: Anthropic’s “Building effective agents” came out that December, Operator and Claude Code in early 2025"
- **平台、设备、身份只写确定的。** 只是视觉语言像 Vision Pro，就写 "seen through an XR device"，不写 "for Vision Pro"，也不写 "in the visual language of visionOS"。合作者、课程、老师照旧版原文写。
- **自己补的说法要标出来让作者确认。** 比如从动画里推断出的交互、给照片补的图注。

## 4. 措辞（英文）

- **一句只说一件事，短。** 大句（`line`）是讲给人听的话，小字（`note`）补充细节。
- **用读者认得的词，** 不用内部术语。功能名放在图注里（"Process Visualization and Fluid Widgets."），大句讲它为人做了什么（"You see what it draws on."）。
- **少用套路句式**：破折号插入语、"not X, but Y"、冒号后揭晓。偶尔用一次可以，满页都是就会像生成的。
- **结尾、作品名、转折句可以有节奏，** 其他句子朴素就好。

## 5. 开场

开场是这个作品自己的样子，不是三行通用的话。

| 页面 | `openerStyle` | 开场 |
| --- | --- | --- |
| Lino App | `lines` | 三句话，最后一句斜体 |
| Banana Exoskeleton | `lines` + `openerMedia` | 一根根不同的香蕉，加一句 |
| Piko | `equation` | Wearable device × AI companion × Fashion item |
| Bread Reader | `poem` | 面包"写"出的一首诗 |
| Risee | `selection` | 选中一个词，动作胶囊绕着它转进来 |
| Lifeo | `context` | 一句话里的标签轮换（语言、地点、话题） |
| Rethinking Rabbit R1 | `wheel` | R1 先只给一个回答，然后滚轮转出其他可能 |
| Playground OS | `dock` | 问句加 OS 的四个按钮 |
| Witness | `log` | agent 写下的一条观察：模糊的画面、字段、它的推断 |

- **能直接展示作品的交互，就别额外加变换。** Playground OS 原本让"沙子"翻成 "Materials"，删掉了，直接显示四个按钮。
- **用作品自己的素材，** 不要用代码画一个近似版。R1 的开场原本用 CSS 画机身，看起来像示意图，后来换成项目自己的渲染图，屏幕上的回答再用真文字叠上去（`scripts/r1-device.py`）。
- **新的开场样式**：在 `content.config.ts` 的 `openerStyle` 里加一项并写清字段含义，组件放进 `src/components/`，在 `[id].astro` 里接上（`OWN` 列表决定它下面要不要放斜体的 `openerNote`）。

## 6. 场景字段速查

完整说明以 `content.config.ts` 的注释为准。

- `line`：这一屏的大句。可以用 `\n` 换行，让两句话各起一行。
- `lead`：大句上方较淡的一句，也可以用 `\n` 换行。`big: true` 时，大句会放大成作品名或宣言。
- `note`：小字说明。`caption`：紧贴在图下面的图注。`footnote`：最后一行小字，配合大句里的 `*`。
- `media`：一张图或一段视频；多张图默认会交替淡入淡出。`pair: true` 两张并排，`gallery: true` 几张摊开。
- `cutout: true`：透明底的图，不加框和阴影。`wide: true`：给图更多宽度。`round`：图里自带圆角时，按宽度比例补上圆角。
- `drawing`：线条画，现有 `balance`、`reasons`、`bananas`、`fit`、`decode`、`sizes`、`capture`、`tiers`。
- `file`：原样引用一个文本文件（文件名 + 行）。`#` 开头的行和 ` # ` 后面的注释变淡；以 `! ` 开头的行加波浪下划线，表示它写错了（Witness 的 OpenClaw 工作区和 physical-pattern.md）。
- `facts`、`equation`、`list`、`poem`、`card`、`link`、`icon`、`backdrop`：见注释和已有页面。
- `tone`：`paper`（默认）或 `ink`。`year`：左下角的年份，相邻两屏年份不同时会滚动过去（Playground OS 从 1972 滚到 2024）。
- 页尾：`colophon` 写角色、团队、课程、年份、工具、原型链接、状态；`next` 指向下一个作品。

## 7. 媒体

- **全部在 `scripts/make-detail-media.sh` 里生成，** 原图不动。视频和 GIF 转成 H.264 循环视频，另配一张封面图；静态图转成 WebP，最宽 1600px。
- **白底的线稿和图表，去掉白底直接放在纸色上**：`python3 scripts/clear-white.py SRC OUT [x y w h] [最大宽度]`。扫描件的灰纸也能处理，本来就透明的图会先垫一层白。
- **黑底的图放在黑底屏上，** 把黑色提到页面的墨色（#111）。写法见 Banana Exoskeleton 和 R1 Tokyo 那两行。
- **截取原图时，把原图里自带的图注裁掉，** 改用 `caption` 写。
- **一张图里有几块各自动的内容，就拆开各成一屏**（R1 的三个功能是从同一个 GIF 里裁出来的）。
- **GIF 的色斑**：可以用中值滤波，或只模糊那一片平整的色面（见 `scripts/r1-device.py`）。

## 8. 线条画

- **和页面统一：** 细线，`--fg` 颜色，依次画出来。每个物件放在一个 `<g class="obj">` 里，路径加 `pathLength="1"`。
- **要比较尺寸，就按真实尺寸画，数据先查证。** `Sizes.astro` 以毫米为单位：iPad、手机、R1 站在同一条线上，主角用它自己的颜色（R1 的橙色）。
- **注意：** 如果线条画在宽屏上会显示得比它自身的 viewBox 单位大，就要给它的路径设 `vector-effect: none`。否则 non-scaling-stroke 会在屏幕上计算虚线长度，线还没画完就停了。

## 9. 动效

- **多步连续的动作写成一段连续动画**（用 `requestAnimationFrame` 逐帧计算），不要拆成一串 CSS 过渡；否则每一步都会冲过去再停住，看起来在抖。见 `WheelOpener.astro`。
- **只动 `transform` 和 `opacity`。** 不要动 `font-size`、宽高这类会重新排版的属性，手机上会抖。
- **大物件原地淡入，** 不要用全站默认的"上升 12px"。
- **开场动画后面的文字和 Begin 按钮，要等动画快结束时再出现**（调 `transition-delay`），但不要让人等太久：开场动画控制在 6 秒以内。
- **尊重 `prefers-reduced-motion`：** 直接显示最终状态。

## 10. 排版细节

- **带破折号的术语**（A–A、Ask–Act）在破折号后面加一个 word joiner（U+2060），手机上就不会从中间断开。
- **大句在手机上从句子中间断行时**，用 `\n` 让每个句子各起一行。
- **每一屏都要在 390 宽的手机上看一遍：** 图、标签、胶囊都不能被裁掉，也不能挤出屏幕。

## 11. 完成前检查

1. `npm run build` 通过。
2. `npx astro preview` 起本地预览，用 Playwright 截图：手机 390×844、桌面 1440×900，每一屏都截。开场按时间截几张，看动画过程，不只看最后一帧。
3. 有动画的开场，逐帧记录元素位置，确认没有多余的来回位移。
4. 对照旧版原文核对事实：课程、老师、合作者、年份、链接。
5. 自己补的说法列给作者确认。
6. 首页卡片的名字和 `listTitle` 一致，`next` 串起来没有断。现在的顺序：Risee → Lifeo → Rethinking Rabbit R1 → Playground OS → Lino App → Witness → Piko；Piko → Banana Exoskeleton → Bread Reader → Witness。

## 12. 简版（map 上的其他作品）

完整版每页都要定制开场、重新构思叙事，代价大，也只有最好的作品才配得上。map 上的其他作品做简版：用同一套模板和视觉，读起来是同一个网站，但只写 Markdown，不写新代码。第 3、4 节（事实与时间、措辞）照样适用。

- **开场**：一律 `lines` 加 `openerMedia`，即一张代表图加一两句话，说清这个项目是什么，最后一句是斜体。不做定制开场。
- **4–6 屏**：背景 → 我做了什么 → 一两组关键图 → 结果。图多的项目用 `gallery` 或 `pair`。
- **不做专属的东西**：不加专为某一页写的组件、开场、动效。
- **埋在复杂展板里的关键信息，用通用图组件重画**（`diagram` 字段，`src/components/Diagram.astro`）：在 Markdown 里写数据，三种形态——`pairs`（左列对右列，如神 → 主题）、`steps`（步骤或时间线）、`cycle`（循环；手机上变成一列，左侧括线连回第一项）。每页一两张，只放原图在手机上读不出来的信息；原图好看又读得清的照旧用原图。
- **文案以旧版原文和图里的文字为基础**，精简改写，不重新构思叙事。图里常有原文没写的关键事实（日期、奖项、工具），要逐张读出来。
- **colophon** 写清角色和贡献、团队、课程或比赛、老师、年份。角色只写做了哪些部分，不写百分比。
- **哪些作品做简版**：Aurora House、Go Above or Below、Parade with Gods、Vive Towers、T1、ReCurv、Hill Making、Lino、MOREDANCE。Lino 单独做，不并入 Lino App。Boba Bubble Trouble 移到 playground，不做详情页。
- **playground 里的实验**不做详情页：`/playground/` 一页（`src/pages/playground.astro`，数据在 `src/data/playground.ts`），一项一张卡片，"More" 在原地展开两三句和第二张图。只放自己想做、做出来了的东西，不放课程作业和复刻。现在是 Deploybell、Rehears、RotFix、A Walk with Shooting Star、Boba Bubble Trouble（Deploybell 和 Rehears 的原图来自 v1be.online 仓库的 project-images）。Boba 仍留在 map 上（保住 D 组的编号），点开去它的卡片。链接都写 `/playground/`（带斜杠），不带斜杠可能落到旧的 `playground.html`，它只负责跳转。
- 以后哪个简版要升级成完整版，只需要换开场、补叙事，结构不用推翻。

