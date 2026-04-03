import type { Article } from "./types";

export const article10: Article = {
  id: 10,
  meta: { source: "Gemini", date: "2025年3月" },
  title: "AI视频生成的导演术：首尾帧策略与提示词公式",
  brief:
    "搞清楚了AI视频生成中首尾帧应该分开生成（而非一次性），以及在生成视频阶段如何用运镜、转场、动作描述词来控制画面流畅度。",
  sections: [
    {
      question: "首尾帧应该让AI一次性生成，还是分开生成？",
      context:
        "为了更好的视频效果，通常先生成图片作为首尾帧，再用这两帧去生成视频。但首尾帧本身该怎么生成？",
      body: `**分开生成，先定首帧再「演化」出尾帧。** 千万不要让AI一次性生成——它会把两种状态拼贴在同一张画面里，而视频AI需要的是两张独立的图片文件。

具体流程：第一步，精心打磨首帧，投入最多时间确定主体、光影、构图、色彩和风格，这张图定下整个视频的基调。第二步，拿首帧作为基础生成尾帧——用局部重绘（Inpainting）处理小变化（比如闭眼、手里多了把伞），或者用角色/风格一致性参数（如Midjourney的--cref、SD的ControlNet）生成同一人物的不同动作。这样能保证人物、画风、背景在过渡时不崩坏。

如果需要两个截然不同的场景（比如昏暗房间穿越到阳光森林），可以完全独立写提示词，但要确保画面比例一致。视频AI会自动计算中间的转场动画。`,
    },
    {
      question: "首尾帧都有了之后，生成视频时应该加哪些词让画面流畅自然？",
      context: null,
      body: `首尾帧确定后，提示词的角色从「描绘画面」变成了「导演调度」。核心公式：**运镜 + 主体中间动作 + 过渡方式 + 画面质感**。

**运镜词：** Zoom in/out（推拉），Dolly in/out（平滑推进），Pan left/right（左右摇），Tracking shot（跟随），Orbit camera（环绕），Crane shot（摇臂升降），Tilt up/down（仰俯）。

**过渡转场词：** Seamless transition（无缝转场），Smooth morphing（平滑变形），Time-lapse（延时——适合白天变夜、花开花落）。如果首尾帧差异大，用特效遮挡转场避免「融图」惊悚感：Dissolve into smoke（化为烟雾消散），Camera passes through clouds/water（镜头穿过云层/水面）。

**主体动作词：** 填补中间逻辑空白。Walking forward slowly、Turning around naturally、Blooming smoothly、Melting、Aging。

**质感修饰词：** Fluid motion、Cinematic lighting and motion、High coherence、Slow motion（慢动作能让AI少犯错，过渡更丝滑）。

**避坑：** 不要写与首尾帧矛盾的内容。首帧人在左边、尾帧在右边，就不能写「人物站在原地不动」，否则AI逻辑混乱导致画面崩坏。顺着首尾帧的逻辑「搭桥」。`,
    },
  ],
  takeaway:
    "掌握了首尾帧的控制就掌握了AI视频的导演权。核心思路是把自己当导演而不是画师——首尾帧定好「从哪到哪」，提示词负责告诉AI「镜头怎么走、主体怎么动、中间怎么过渡」。",
};
