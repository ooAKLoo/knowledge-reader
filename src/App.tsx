import { useState } from "react";

const ARTICLES = [
  {
    id: 1,
    meta: { source: "Claude", date: "2025年3月19日" },
    title: "转转商业模式：一门「不可能」的生意是怎么做起来的",
    brief:
      "从直觉上的「不可能」出发，逐步拆解了转转的质检壁垒、多层分销和烧钱逻辑。最终发现一个通用规律：越是非标准化、信息不对称的商品，中间商利润越厚。",
    sections: [
      {
        question: "这门生意直觉上不可能做起来，转转到底怎么做到的？",
        context:
          "二手交易水很深——鉴定假货、检测内部损坏都极其复杂，买卖频次又低。直觉上这门生意做不成。",
        body: `转转2015年从58集团孵化，早期做个人对个人的撮合，很快发现信任问题太严重——你说的鉴定问题是核心矛盾。于是逐步转向平台介入每一笔交易的重模式：收来的手机自己质检、定价、再卖出去。

2017年拿到腾讯2亿美元融资，2020年和找靓机合并，估值18亿美元。到2025年，彻底关停了运营十年的个人直卖业务，完全走C2B2C。花了十年时间，从轻模式走到了重模式。`,
      },
      {
        question: "鉴定假货、检测内部损坏，这些复杂问题怎么解决？",
        context: null,
        body: `每部手机经过20道外观检测和55道功能检测，质检中心配备X光设备——曾经发现过一台手机内部被注入4块强胶、主板都没有的极端造假，肉眼完全看不出来。

关键不是培养全能鉴定师，而是把检测拆成流水线上的标准化步骤。全国三大质检中心、2000多名质检师，还收购了ZEALER核心团队的WHYLAB实验室，用设备和数据库降低对个人技能的依赖。2024年成立AI事业部，计划三年投20亿做AI验机。

不过执行中确实有问题。质检外包后出现过「阴阳检测报告」——同一部手机在两家门店，买入时说没问题，卖出时检出一堆毛病。`,
      },
      {
        question: "场景这么低频——几年才换一次手机，市场能撑起来吗？",
        context: null,
        body: `单个用户确实低频，但中国十几亿部智能手机在流通。哪怕每年很小比例的人想处理旧手机，绝对数字也很大。

更有意思的是流通格局：一二线城市追新品，淘汰的手机流向价格敏感的三四五线城市。二手旗舰已经成了中端新机最合适的「平替」。`,
      },
      {
        question: "收来的东西卖给谁？「比官方回收价高」还怎么赚钱？",
        context:
          "广告里打高价回收，铺天盖地的投放意味着巨大成本，官方回收价之上又多付了钱——利润空间在哪？",
        body: `转转的出货不只是「高价收再高价卖给个人」这一条路，至少有三条渠道：

平台直接卖给消费者，这是利润最高的一条。通过「采货侠」批量拍卖给全国各地的线下手机店，走B2B。线下自营门店目前约500家，直接面对面卖。

利润来源有几层：普通人凭外观判断手机价值，但内部状况才是真正影响价格的因素，平台掌握定价权就有了信息差收益。规模化后质检边际成本被摊薄。品相不同的手机走不同渠道——好的卖C端赚高差价，一般的批发给B端，太旧的拆解回收元器件。`,
      },
      {
        question:
          "「柠檬市场」是什么？为什么二手利润反而高于新机？",
        context:
          "对话中提到的「柠檬市场」是一个经济学术语。同时，IDC分析称二手手机销售利润高于新机——这一点颠覆了直觉认知。",
        body: `**柠檬市场**来自1970年经济学家阿克洛夫的论文（后获诺奖）。「Lemon」在美语里指次品。核心思想：买卖双方信息严重不对称时，买家只愿按平均质量出价，好货卖家觉得不值就退出，最终市场只剩次品，整个市场萎缩。二手车是经典案例，二手手机同理。转转做质检，本质是试图打破这个困境。

至于二手利润高于新机——这是站在经销商角度说的，不是品牌方。新手机价格极度透明，京东天猫随手比价，经销商加价空间被压到几十块。但二手手机天然非标，同一款iPhone成色不同价格差异很大，定价空间大得多。

这其实是个通用规律：**越标准化、价格越透明的商品，渠道利润越薄；越非标、信息越不对称的商品，中间商利润越厚。** 二手车、二手奢侈品、古董收藏品全是这个逻辑。4S店卖新车经常亏钱（靠售后和金融赚），但二手车商的利润率远高于新车销售。`,
      },
      {
        question: "没盈利为什么还疯狂投广告？这钱从哪来的？",
        context:
          "B站上频繁刷到转转广告，直觉上以为已经盈利了才有钱投。实际上转转自称2023年底才盈利，且未经审计。",
        body: `这背后是互联网公司和传统生意完全不同的商业思维。

花的不是自己赚的钱，是投资人的钱。转转累计融资近5.5亿美金，背后有腾讯、小米等。投资人给钱的前提就是「去花钱做大规模」，赌未来上市时的股权增值。

二手平台有「双边冷启动」困境——卖家少则买家走，买家少则卖家不来。一旦停止投放、声量下去，平台可能迅速萎缩，之前投入的质检体系全部沉没。从这个角度说，持续投放确实是「刀刃」上的钱。

还有竞争压力。闲鱼背靠阿里流量几乎不花钱获客，转转停投放用户就流向闲鱼。而且广告本身也是一种「信号」——让投资人和加盟商觉得势头很猛。

最新数据：2025年3月闲鱼MAU 2.15亿（同比+20.8%），转转3588万（同比-5.3%）。差距六七倍且在拉大。转转正在通过收购红布林、开线下大店寻找新增长点。`,
      },
    ],
    takeaway:
      "转转的故事揭示了一个普遍的商业逻辑：把「非标变标准化」是一种极强的能力壁垒，但建立和维持这种壁垒的成本也极高。它做了十年，至今仍在寻找确定性的盈利模型——你最初「不太应该能做起来」的直觉，从某种意义上被市场部分验证了。",
  },
  {
    id: 2,
    meta: { source: "Claude", date: "2025年3月20日" },
    title: "独立开发者引流：找到你的「牙科诊所」",
    brief:
      "从小红书发帖的产品命名问题切入，引出余华「牙科诊所」的比喻，最终落到独立开发者如何精准找到小众用户的策略。",
    sections: [
      {
        question:
          "小红书发帖不想用「软件」「工具」这种冷冰冰的词，该怎么称呼产品？",
        context: null,
        body: `小红书的语境下，「软件」「工具」偏技术偏冷。最自然的做法是根本不给它一个名词，而是用动作来带——「铺在地图上」「丢到地图上」这类短语就够了，读起来像在分享一个发现而不是推销产品。

如果一定要填空「我做了一个____」，最推荐**「小东西」或「小玩意」**。自带一种「随手做的没什么大不了」的松弛感，小红书上这种反差调性点击率很高。

甚至可以故意不说完：「我做了一个把收藏夹丢到地图上的」——句子悬着，反而最勾好奇心。`,
      },
      {
        question:
          "余华的牙科诊所比喻——小众工具的用户到底聚集在哪里？",
        context:
          "余华说他牙疼去县城牙科，挤满了人，但日常生活中你连一个牙疼的人都碰不到。对的时间、对的地方、就能碰到一大堆对的人。",
        body: `你的用户不是按地理位置聚集的，是按**「痛的那一刻」**聚集的。

一个人什么时候需要「收藏夹铺在地图上」？是他打开收藏夹翻了五分钟没找到那家店、烦了的那一刻。这些人不在咖啡馆，在评论区里。

去小红书搜「收藏夹太乱了」「收藏了不去」「收藏夹吃灰」，你会发现大量的人在吐槽。这些帖子的评论区，就是你的牙科诊所。`,
      },
      {
        question: "线下地推不现实，线上具体怎么操作？",
        context: null,
        body: `四个思路：

**标题围绕痛点而非工具。** 比如「收藏了400家店，终于看清自己是哪个区的地头蛇」——用户因共鸣点进来，看完才发现有这么个东西，转化率反而最高。

**去「牙疼帖」底下当牙医。** 不是硬广，是真的帮人解决问题。评论说「我之前也是，后来自己做了个能铺在地图上看的，要不要试试」。这种场景下你是雪中送炭。

**小众是优势不是劣势。** 算法喜欢高互动率内容。一千个精准用户的商业价值，可能比十万个随便刷到的人高得多。

**平台差异化运营。** 小红书适合用结果展示种草（直接晒效果图），B站适合过程记录建信任（独立开发者日记），海外走Product Hunt、Reddit和Twitter的 #buildinpublic 标签。`,
      },
    ],
    takeaway:
      "核心转换：不要想「怎么推广我的工具」，而是想「我的用户此刻正在哪里喊牙疼」，然后走过去说一句「我刚好是牙医」。",
  },
  {
    id: 3,
    meta: { source: "Gemini", date: "2025年3月20日" },
    title: "「虚物实化」：一套可以无限裂变的创意选题公式",
    brief:
      "从「把云当宠物养」的爆款案例出发，提炼出 Tangible Fantasy 选题公式，并通过变量置换裂变出一系列新选题。",
    sections: [
      {
        question:
          "有博主把云做成宠物养，很火——这种选题思路怎么总结和复制？",
        context: null,
        body: `这种选题的本质是**「虚物实化」（Tangible Fantasy）**——把原本抓不住的自然现象变成可以拥有的私人物品。

公式：**不可触碰的浪漫意象 × 世俗化的占有关系 × 硬核实现**

意象可以是云、彩虹、闪电、月光、风、影子。占有关系可以是当宠物、装罐子、做标本、穿在身上。实现手段可以是磁悬浮、加湿器原理、编程LED。

它爆的原因是制造了「反差萌 + 治愈感」：用理性的技术手段，去实现一个感性的、孩子气的愿望。`,
      },
      {
        question: "怎么用这个公式裂变出更多选题？",
        context: null,
        body: `三种置换策略：

**换意象：** 云 → 雨、极光、彩虹、浪花。比如「我在桌面上养了一场雷雨」——超声波雾化器造云，LED模拟闪电，白噪音模块播雷声。

**换关系：** 养宠物 → 做标本、种盆里、当家具、做首饰。比如「把今天的晚霞做成切片」——抓取当天日落色值，用滴胶做成半透明方糖。

**换感官：** 视觉 → 听觉、触觉、嗅觉。比如「给风做一具身体」——极轻的动力装置放在窗边，微风吹过呈现生物般的律动。

核心是捕捉「要是能……就好了」的瞬间，然后极其认真地去实现这个本来「无用」的愿望。这就是无用之用所带来的浪漫。`,
      },
    ],
    takeaway:
      "选题公式的底层逻辑：人们不是不想要这些东西，而是从来没想过这些东西可以被拥有。当你把它实现出来的那一刻，需求就被创造出来了。",
  },
  {
    id: 4,
    meta: { source: "Gemini", date: "2025年3月20日" },
    title: "柯立芝繁荣：一百年前的泡沫如何照进当下",
    brief:
      "从1920年代美国的经济奇迹出发，拆解繁荣背后的隐患，以及对当下个人财务和职业选择的启示。",
    sections: [
      {
        question: "什么是柯立芝繁荣？",
        context: null,
        body: `1923-1929年美国经济的高速增长期，因总统柯立芝得名，也叫「咆哮的二十年代」。

核心特征：工业生产7年飙升70%，汽车走入普通家庭，收音机、洗衣机大规模普及，分期付款模式让「先消费后付款」成为常态，全民涌入股市。

驱动力：一战让美国从债务国变成债权国，柯立芝推行减税、削减开支、放松监管的「小政府」路线，叠加电力和内燃机的技术革命进入应用阶段。

但繁荣下有三个隐患：财富过度集中、农业被甩在身后没享受到红利、金融投机失控。1929年10月股市崩盘，进入长达十年的大萧条。`,
      },
      {
        question: "对当下普通人的生活有什么具体启示？",
        context: null,
        body: `**警惕信用消费幻象。** 当年分期付款让人以为自己富了，今天的网贷和「先享后付」也一样。分清你买的是资产还是负债——如果借钱买的东西在不断贬值，繁荣就是脆弱的。

**技术变革中价值向两端转移。** 电力革命让传统手工艺人失业，但创造了新岗位。AI时代同理——价值会集中在掌握核心技术的人和提供情绪价值/个性化服务的人，中间层被挤压。

**不存在「永久增长」。** 当时全社会相信「贫困即将消灭」「股市永远涨」，然后崩盘了。当某个行业出现不符合常理的暴利时，往往是泡沫最危险的时刻。

**建立多重护城河。** 当年的繁荣只集中在城市和新兴工业，农业和煤矿一直在低迷。今天的社会也在走「K型」分化。不要让自己的收入完全依赖单一行业或单一来源。`,
      },
      {
        question:
          "大萧条中哪些行业逆势增长？怎么提前判断泡沫？",
        context: null,
        body: `**逆势行业有三类。**

「口红效应」——买不起大件就买小件补偿。电影、烟草、巧克力在萧条期反而增长。现代对应的是休闲游戏、短视频、入门级文创。

标准化效能产品——宝洁在萧条期坚持投广告、强调洗涤效率，反而超越对手。消费者极度追求性价比和耐用性的时候，有品牌信任的效能产品赢面大。

工业设计——1930年代「流线型」美学兴起，用视觉上的未来感和速度感刺激消费。极简、丝滑的UI设计在今天起到类似作用——通过视觉上的确定性消解现实中的焦虑。

**泡沫预兆的观察指标：** 产能过剩库存积压、居民债务收入比飙升、股市涨幅远超实体经济利润增速。还有一个生活中的「体感」信号——当身边连完全不懂金融的人都在讨论加杠杆时，要警惕了。`,
      },
    ],
    takeaway:
      "柯立芝繁荣最核心的一句话：所有的馈赠都在暗中标好了价格。在高速运转的时期，个人最该做的不是追风口，而是守住财务底线、投资自身成长、关注机器无法替代的人性温度。",
  },
];

export default function KnowledgeReader() {
  const [selected, setSelected] = useState<number | null>(null);

  const article = selected !== null ? ARTICLES.find((a) => a.id === selected) : null;

  return (
    <div style={S.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: rgba(200,140,100,0.15); }
        a { color: inherit; text-decoration: none; }
      `}</style>

      {!article ? (
        /* ======= INDEX ======= */
        <div style={S.index}>
          <header style={S.indexHeader}>
            <h1 style={S.indexTitle}>叩问录</h1>
            <p style={S.indexSub}>
              {ARTICLES.length} 篇对话 ·{" "}
              {ARTICLES.reduce((s, a) => s + a.sections.length, 0)} 个问题
            </p>
          </header>

          <div style={S.list}>
            {ARTICLES.map((a) => (
              <div
                key={a.id}
                style={S.listItem}
                onClick={() => setSelected(a.id)}
              >
                <div style={S.listMeta}>
                  <span style={S.listSource}>{a.meta.source}</span>
                  <span style={S.listDate}>{a.meta.date}</span>
                </div>
                <h2 style={S.listTitle}>{a.title}</h2>
                <div style={S.listQuestions}>
                  {a.sections.map((s, i) => (
                    <div key={i} style={S.listQ}>
                      <span style={S.listQNum}>Q{i + 1}</span>
                      {s.question}
                    </div>
                  ))}
                </div>
                <p style={S.listBrief}>{a.brief}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* ======= ARTICLE ======= */
        <article style={S.article}>
          <div
            style={S.back}
            onClick={() => setSelected(null)}
          >
            ← 返回
          </div>

          {/* Head */}
          <div style={S.artMeta}>
            {article.meta.source} · {article.meta.date}
          </div>
          <h1 style={S.artTitle}>{article.title}</h1>

          {/* Question Chain — the hook */}
          <div style={S.qChain}>
            {article.sections.map((s, i) => (
              <div
                key={i}
                style={S.qChainItem}
                onClick={() => {
                  document
                    .getElementById(`q-${i}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <span style={S.qChainNum}>Q{i + 1}</span>
                <span style={S.qChainText}>{s.question}</span>
              </div>
            ))}
          </div>

          <p style={S.artBrief}>{article.brief}</p>

          <div style={S.divider} />

          {/* Sections */}
          {article.sections.map((sec, i) => (
            <section key={i} id={`q-${i}`} style={S.section}>
              <div style={S.qBlock}>
                <div style={S.qDot}>{i + 1}</div>
                <h2 style={S.qTitle}>{sec.question}</h2>
              </div>

              {sec.context && (
                <div style={S.callout}>
                  <div style={S.calloutBar} />
                  <div style={S.calloutText}>{sec.context}</div>
                </div>
              )}

              <div style={S.body}>
                {sec.body.split("\n\n").map((para, pi) => (
                  <p
                    key={pi}
                    style={S.para}
                    dangerouslySetInnerHTML={{
                      __html: para
                        .replace(
                          /\*\*(.+?)\*\*/g,
                          '<strong style="color:#2C2C2C;font-weight:500">$1</strong>'
                        ),
                    }}
                  />
                ))}
              </div>
            </section>
          ))}

          {/* Takeaway */}
          <div style={S.divider} />
          <div style={S.takeaway}>
            <div style={S.takeawayLabel}>写在最后</div>
            <p style={S.takeawayText}>{article.takeaway}</p>
          </div>
        </article>
      )}
    </div>
  );
}

const S: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#FAFAF8",
    fontFamily: "'Noto Sans SC', -apple-system, sans-serif",
    color: "#3D3D3D",
    WebkitFontSmoothing: "antialiased",
  },

  /* ---- INDEX ---- */
  index: {
    maxWidth: 640,
    margin: "0 auto",
    padding: "48px 24px 80px",
  },
  indexHeader: {
    marginBottom: 40,
  },
  indexTitle: {
    fontFamily: "'Noto Serif SC', serif",
    fontSize: 28,
    fontWeight: 700,
    color: "#1A1A1A",
    marginBottom: 6,
  },
  indexSub: {
    fontSize: 14,
    color: "#AAAAAA",
    fontWeight: 300,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  listItem: {
    padding: "28px 0",
    borderBottom: "1px solid #ECEAE4",
    cursor: "pointer",
  },
  listMeta: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  listSource: {
    fontSize: 12,
    fontWeight: 500,
    color: "#B08860",
  },
  listDate: {
    fontSize: 12,
    color: "#C0C0C0",
  },
  listTitle: {
    fontFamily: "'Noto Serif SC', serif",
    fontSize: 19,
    fontWeight: 600,
    lineHeight: 1.55,
    color: "#1A1A1A",
    marginBottom: 12,
  },
  listQuestions: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    borderLeft: "2px solid #E8E2D6",
    paddingLeft: 16,
    marginLeft: 2,
    marginBottom: 12,
  },
  listQ: {
    fontSize: 13.5,
    lineHeight: 1.55,
    color: "#555",
    display: "flex",
    alignItems: "baseline",
    gap: 8,
    padding: "5px 0",
  },
  listQNum: {
    fontSize: 11,
    fontWeight: 600,
    color: "#B08860",
    flexShrink: 0,
    fontFamily: "-apple-system, sans-serif",
  },
  listBrief: {
    fontSize: 13,
    lineHeight: 1.75,
    color: "#AAA",
  },

  /* ---- ARTICLE ---- */
  article: {
    maxWidth: 640,
    margin: "0 auto",
    padding: "32px 24px 100px",
  },
  back: {
    fontSize: 13,
    color: "#B0B0B0",
    cursor: "pointer",
    marginBottom: 28,
    display: "inline-block",
  },
  artMeta: {
    fontSize: 13,
    color: "#B08860",
    fontWeight: 400,
    marginBottom: 10,
  },
  artTitle: {
    fontFamily: "'Noto Serif SC', serif",
    fontSize: 26,
    fontWeight: 700,
    lineHeight: 1.5,
    color: "#1A1A1A",
    marginBottom: 20,
  },

  /* Question Chain */
  qChain: {
    marginBottom: 24,
    display: "flex",
    flexDirection: "column",
    gap: 0,
    borderLeft: "2px solid #E0D8C8",
    paddingLeft: 20,
    marginLeft: 2,
  },
  qChainItem: {
    display: "flex",
    alignItems: "baseline",
    gap: 10,
    padding: "7px 0",
    cursor: "pointer",
  },
  qChainNum: {
    fontSize: 12,
    fontWeight: 600,
    color: "#B08860",
    flexShrink: 0,
    fontFamily: "-apple-system, sans-serif",
  },
  qChainText: {
    fontSize: 15,
    lineHeight: 1.6,
    color: "#3D3D3D",
    fontWeight: 400,
  },

  artBrief: {
    fontSize: 14,
    lineHeight: 1.8,
    color: "#999",
  },

  divider: {
    height: 1,
    background: "#ECEAE4",
    margin: "32px 0",
  },

  /* Section */
  section: {
    marginBottom: 40,
  },
  qBlock: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 16,
  },
  qDot: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    background: "#1A1A1A",
    color: "#FAFAF8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 600,
    flexShrink: 0,
    marginTop: 3,
  },
  qTitle: {
    fontFamily: "'Noto Serif SC', serif",
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 1.6,
    color: "#1A1A1A",
  },

  /* Callout */
  callout: {
    display: "flex",
    gap: 12,
    marginBottom: 18,
    paddingLeft: 36,
  },
  calloutBar: {
    width: 3,
    borderRadius: 2,
    background: "#E0D8C8",
    flexShrink: 0,
  },
  calloutText: {
    fontSize: 13.5,
    lineHeight: 1.75,
    color: "#999",
    fontStyle: "italic",
  },

  /* Body */
  body: {
    paddingLeft: 36,
  },
  para: {
    fontSize: 15,
    lineHeight: 1.85,
    color: "#3D3D3D",
    marginBottom: 16,
    letterSpacing: 0.2,
  },

  /* Takeaway */
  takeaway: {
    padding: "20px 24px",
    background: "#F5F2EB",
    borderRadius: 6,
  },
  takeawayLabel: {
    fontSize: 12,
    fontWeight: 500,
    color: "#B08860",
    marginBottom: 8,
    letterSpacing: 1,
  },
  takeawayText: {
    fontSize: 15,
    lineHeight: 1.85,
    color: "#555",
  },
};
