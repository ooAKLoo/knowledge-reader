import type { Article } from "./types";

export const article14: Article = {
  id: 14,
  meta: { source: "Gemini", date: "2025年3月" },
  title: "程序化城市路网：张量场如何生成「自然感」",
  brief:
    "从L-System、张量场、Voronoi图三条技术路线出发，拆解程序化生成自然感2D城市路网的核心算法，以及从宏观路网到微观建筑足迹的完整生成管线。",
  sections: [
    {
      question: "程序化生成城市路网有哪些主流方法？各自解决什么问题？",
      context: null,
      image: "/images/city-map-gray.webp",
      body: `三条主要技术路线。

**L-System增长法（Parish & Müller, SIGGRAPH 2001）。** 该领域的奠基之作。使用扩展L-system从种子点出发迭代扩展道路网络，每步由globalGoals（全局目标）决定生长方向、localConstraints（局部约束）处理碰撞。核心创新是**自敏感L-system**：不同分支可相互感知，两条道路接近时自动形成交叉口或T字路口，将树状拓扑转化为网状拓扑。13,000栋建筑的曼哈顿级城市，道路图生成不到10秒。但从单点向外生长导致全局控制困难，Sean Barrett在"L-Systems Considered Harmful"中指出其形式化是不必要的复杂化，核心本质就是优先队列+局部约束+全局目标的增长系统。

**张量场法（Tensor Field, Chen et al., SIGGRAPH 2008）。** 目前效果最好、控制力最强的方法。核心洞见：城市街道在任何局部位置都有两个主导方向（通常近似正交），2×2对称无迹张量的两个特征向量恰好提供这样一对正交方向。不同类型的基础场（Basis Field）产生不同城市模式——Grid场产生棋盘格、Radial场产生环形放射、Heightmap场让道路沿等高线、Polyline场让道路沿海岸线走向。多个基础场通过径向基函数（RBF）加权混合，实现不同模式间的**平滑过渡**——这是张量场最强大的特性。

**Voronoi图法。** 以watabou的Medieval Fantasy City Generator为代表。在随机点集上计算Voronoi图，边界线作为道路、单元格作为街区。通过Lloyd Relaxation控制规则度，Perlin噪声扰动边界增强有机感。天然产生类晶体结构的不规则布局，**非常适合中世纪/老城区风格**，但难以产生现代城市的整齐网格，也缺乏道路层级机制。`,
    },
    {
      question: "张量场方法的数学本质是什么？道路是怎么从「场」里长出来的？",
      context:
        "张量场被认为是当前生成自然感路网的最优解，其数学原理值得深挖。",
      body: `数学本质是定义张量T(p) = R·[cos2θ, sin2θ; sin2θ, -cos2θ]，其中θ为方向角、R为强度。道路生成通过**超流线追踪（Hyperstreamline Tracing）**实现：从种子点出发，使用RK4积分器沿特征向量场逐步前进，生成的曲线即为道路。先以大间距（200–400m）追踪主干道，再以中间距（100–200m）填充次干道，最后以小间距（40–80m）追踪支路，天然形成层级结构。

追踪过程中需处理两个关键问题：**方向一致性修正**——特征向量有±180°歧义，需检查与前一步的点积并在必要时反转；**退化点**——张量为零处，对应城市模式的拓扑变化点，流线碰到即停止。

打破纯网格机械感的关键技巧是叠加**旋转噪声场**——在基础张量上加入Perlin噪声控制的角度偏转，创造老城区般不规则但连贯的有机道路模式。混合城市模式的操作也很直接：中心放Radial场产生环形广场和放射大道，两侧放不同角度的Grid场产生棋盘格街区，旧城区叠加旋转噪声，每个场的RBF衰减参数d控制影响范围——**d越小影响范围越大、过渡越平滑**。`,
    },
    {
      question: "有哪些开源项目值得参考？",
      context: null,
      image: "/images/city-map-blue.webp",
      body: `六个项目各有侧重。

[ProbableTrain/MapGenerator](https://github.com/ProbableTrain/MapGenerator)（1,400+ stars，TypeScript，LGPL-3.0）是最成熟的张量场2D城市生成器，完全在浏览器端用TypeScript + Canvas 2D运行。代码结构清晰：tensor.ts定义张量数学、basis_field.ts实现各类基础场、streamlines.ts执行流线追踪。水体区域张量值设为零使流线碰到即停，自然形成沿海岸线的道路布局。[在线Demo](https://maps.probabletrain.com)可直接体验。**最值得深入研究源码的参考项目。**

[watabou/TownGeneratorOS](https://github.com/watabou/TownGeneratorOS)（1,800+ stars，该领域最高，Haxe/OpenFL，GPL-3.0）基于Voronoi图生成中世纪欧洲城市风格，自然感评分最高，支持城墙、河流、城堡等元素，[在线版](https://watabou.itch.io/medieval-fantasy-city-generator)可直接生成。[t-mw/citygen](https://github.com/t-mw/citygen)（241 stars，CoffeeScript）是Parish & Müller论文的忠实实现，代码紧凑，有Godot 3和Rust移植版。

[phiresky/procedural-cities](https://github.com/phiresky/procedural-cities)（158 stars，TypeScript）包含详细文献调研论文和交互Demo，**是理解所有方法的最佳入门资源**。[josauder/procedural_city_generation](https://github.com/josauder/procedural_city_generation)（583 stars，Python）实现了路网→地块→建筑→3D渲染的完整管线。[leirimnad/voronoi-street-map](https://github.com/leirimnad/voronoi-street-map)（JavaScript）使用递归分形Voronoi，基于d3-delaunay，代码简洁，适合快速实现旧欧洲有机风格。`,
    },
    {
      question: "从路网到建筑足迹的完整管线是怎样的？",
      context:
        "有了路网之后，如何一步步细分出街区、地块、建筑？",
      body: `四步管线。

**第一步：张量场流线追踪生成道路。** 从水域边界自动生成Polyline基础场，人口中心放置Grid或Radial基础场，老城区叠加旋转噪声，所有场通过RBF加权混合。流线分三批追踪（主干道→次干道→支路），种子点从已生成流线两侧产生，加入按人口密度排序的优先队列。张量场采样缓存到网格可提升**3倍以上**查询速度。

**第二步：提取街区多边形。** 路网构成平面图（Planar Graph），街区即为该图的面。使用**半边数据结构（DCEL）**，从任意半边出发每次选逆时针最小角度的下一条半边，循环回起点即得到一个最小面。将道路边向内偏移一个道路半宽得到实际街区。避免过于规整的策略：随机删除部分路段合并相邻街区、部分支路只延伸一半形成死胡同、交叉口加入微小随机偏移。

**第三步：街区内细分为建筑地块。** 两种互补方案。**OBB递归细分**——计算最小面积有向包围盒（Oriented Bounding Box），沿短轴切割递归至面积低于阈值，关键是**概率性终止**（每个约束有25%放宽概率，多次放宽指数递减），自然产生大小变化但不失控。**Straight Skeleton细分**——计算街区轮廓的直骨架，产生"前面沿街、后面背靠"的地块模式，正是欧洲密集围合式街区的典型形态。Vanegas et al. 2012的实验表明与真实城市数据对比，**地块面积和宽度分布的均值精度达92%**。

**第四步：建筑足迹与渲染。** 每个地块内缩一个小边距即为建筑足迹。极简城市海报风格的渲染：背景色作为道路留白，逐个填充建筑多边形，分层顺序为水体→公园绿地→建筑色块→可选道路描边→文字标注。`,
    },
    {
      question: "在JavaScript/Canvas环境下实现可行吗？推荐什么技术栈？",
      context:
        "ProbableTrain/MapGenerator已经用TypeScript + Canvas 2D完整实现了全流程，证明了浏览器端的可行性。",
      body: `完全可行，推荐的JS库组合：**几何基础**用d3-delaunay（业界最快的2D Delaunay三角化）、robust-predicates（鲁棒几何谓词）、earcut（Mapbox出品，最快的多边形三角化）；**多边形运算**用martinez-polygon-clipping（比JSTS**快约14倍**）；**直骨架**用straight-skeleton（TypeScript库，封装CGAL为WASM）——纯JS实现直骨架的浮点精度问题严重，**强烈建议用WASM版本**。

渲染方面，中小规模（数千建筑）用原生Canvas 2D API即可，大规模场景推荐**PixiJS v8**（最快的2D WebGL/WebGPU引擎）或**regl**（函数式WebGL封装，仅21KB gzip）。

性能关键点：张量场采样缓存到网格；流线碰撞检测用**quadtree**加速；CPU密集计算通过**Web Worker**并行化，实测4核可获4–5倍加速；使用SharedArrayBuffer + Float32Array实现零拷贝数据传输。ProbableTrain的实现采用增量分阶段生成（张量场→主干道→次干道→支路→建筑），既支持动画展示又可快速批量生成。`,
    },
  ],
  takeaway:
    "「自然感」的三个核心来源：张量场的多基础场混合让不同区域呈现不同模式并平滑过渡；旋转噪声叠加打破网格的机械规整性；概率性地块细分让建筑大小有自然的随机变化。这三个技巧的组合，正是从「方块拼接」走向「真实城市俯瞰感」的核心技术跃迁。",
};
