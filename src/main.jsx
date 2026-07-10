import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Bot,
  Box,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  X,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Target,
  WandSparkles,
  Wrench,
} from 'lucide-react';
import { detailWorks, featuredWorks, workGroups } from './workData';
import './styles.css';

const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const profile = {
  name: '毛亚锋',
  title: '视觉设计师 / AI设计师 / 品牌设计师',
  location: '深圳',
  phone: '18702592677',
  wechat: '18702592677',
  email: '276094629@qq.com',
  tools: 'PS / AI / C4D / Keyshot / GPT / 即梦',
};

const metrics = [
  { value: '10年', label: '电商与品牌视觉经验' },
  { value: 'TOP 1', label: '灭蚊拍视觉助力天猫类目第一' },
  { value: 'TOP 10', label: '多款夏季小家电进入类目前十' },
  { value: '5w+', label: '店铺日销从 1w+ 提升至 5w+' },
];

const timeline = [
  {
    time: '2024.03 - 2026.07',
    company: '炽音电子',
    role: '高级电商视觉设计师',
    detail:
      '负责风扇、灭蚊拍、暖风机等四季小家电全品类天猫视觉设计；独立完成产品主图、详情页、产品包装、店铺视觉整体统筹，主导新品视觉风格规划与迭代，统一全店品牌视觉调性。',
  },
  {
    time: '2021.03 - 2024.02',
    company: '蓝禾科技 / 图拉斯品牌',
    role: '电商视觉设计师',
    detail:
      '负责 3C 影音、手机壳膜、iPad 壳全品类线上视觉；统筹方龙、简飞两家店铺及图拉斯旗舰店 iPad 壳视觉输出。以数据为设计导向，协同运营迭代商品主图与详情页面，统一多店铺品牌视觉规范。',
  },
  {
    time: '2016.03 - 2021.02',
    company: '电商视觉相关岗位',
    role: '电商视觉设计师',
    detail:
      '积累 5 年电商平面设计基础，熟练掌握商品精修、详情策划、店铺视觉规范搭建，夯实 PS、AI 核心软件实操能力，熟悉电商全流程设计落地逻辑。',
  },
];

const projects = [
  {
    title: '家居两季爆款视觉体系',
    tag: 'Chiyin Electronics / 2025-2026',
    desc: '负责灭蚊拍、风扇、暖风机等产品的视觉定位、主图创意、详情策划、包装设计与长期迭代。',
    result: '天猫类目第一 / 多款类目前十',
  },
  {
    title: '图拉斯 3C 多店铺视觉升级',
    tag: 'TORRAS / 2021-2024',
    desc: '统筹方龙、简飞与旗舰店 iPad 壳视觉输出，以数据反馈迭代主图、详情页和店铺视觉规范。',
    result: '单店日销 1w+ 至 5w+',
  },
  {
    title: 'AI 创意素材生产流',
    tag: 'AI Assisted Design',
    desc: '使用 LIBTV、GPT、即梦等 AI 工具生成创意素材、辅助构图和优化画面，提升批量上新效率。',
    result: '更快出图 / 更统一质感',
  },
];

const strengths = [
  {
    icon: Target,
    title: '数据化爆款视觉',
    text: '长期以点击、转化和竞品趋势反推页面策略，擅长把产品卖点转译成高点击、高转化的主图与详情。',
  },
  {
    icon: Layers3,
    title: '品牌视觉管控',
    text: '具备多店铺、多品类视觉统一经验，能建立稳定的电商品牌识别，并兼顾产品质感与商业转化。',
  },
  {
    icon: WandSparkles,
    title: 'AI 增效创作',
    text: '熟练使用 AI 生图与文本工具完成创意发散、素材生成和画面优化，适配高强度、大批量上新节奏。',
  },
  {
    icon: Box,
    title: '全流程落地',
    text: '覆盖主图、详情页、包装、店铺视觉、线下物料等完整链路，能独立推进从风格定义到最终交付。',
  },
];

const detailCopy = {
  LN3: {
    title: '全屋速暖，一台就够',
    text: '围绕冬季取暖的核心决策点，强化速热、恒温、省电与安全感，让用户在首屏就理解产品价值。',
    points: ['AI 恒温控热', '大空间速暖', '多场景冬季方案'],
  },
  挡风被: {
    title: '冬季骑行，也要有体感温度',
    text: '用天气场景、通勤痛点和材质细节建立购买理由，让防风、保暖、防泼水变成可感知的视觉证据。',
    points: ['抗寒通勤', '材质卖点可视化', '场景化转化表达'],
  },
  蝴蝶枕: {
    title: '把睡眠支撑做成视觉记忆点',
    text: '以颈椎支撑、侧睡贴合和舒适曲线作为主线，兼顾功能解释与生活方式氛围。',
    points: ['分区承托', '舒适睡眠场景', '柔和情绪化表达'],
  },
  锤子: {
    title: '掌心强风，快速降温',
    text: '突出小体积高风量、便携使用和夏季即时降温，用清爽色彩和参数可视化提升点击效率。',
    points: ['轻量便携', '强风降温', '夏季出行场景'],
  },
};

const researchNotes = [
  {
    title: '用户决策场景',
    text: '小家电购买往往发生在明确痛点中：冬季取暖、骑行防寒、睡眠支撑、夏季降温。页面先建立生活场景，再进入参数解释。',
  },
  {
    title: '平台竞争环境',
    text: '天猫与京东同类目主图普遍强调参数和价格，详情页需要用更明确的视觉层级，把“为什么买”讲得更快。',
  },
  {
    title: '视觉转化策略',
    text: '将产品优势拆成场景、技术、材质、背书和福利五个模块，用高对比画面承接点击，用结构化信息推动转化。',
  },
];

const creativeNarratives = [
  {
    kicker: '冬季取暖',
    title: '从“冷”到“暖”的体感叙事',
    text: '通过冷暖对比、热能路径、家庭空间和顺丰发货等信任信息，让用户感受到速度、温度和安全感。',
    image: '/assets/detail-highlights/highlight-ln3-brand.jpg',
  },
  {
    kicker: '骑行防寒',
    title: '把通勤痛点变成购买理由',
    text: '围绕低温、风阻、防泼水与保暖材质建立视觉证据，让挡风被不只是配件，而是冬季出行方案。',
    image: '/assets/detail-highlights/highlight-wind-cold.jpg',
  },
  {
    kicker: '睡眠支撑',
    title: '用安静画面表达功能舒适',
    text: '以夜间氛围、人体曲线和承托分区为核心，降低功能解释的生硬感，提升家居品类的信任与亲和。',
    image: '/assets/detail-highlights/highlight-pillow-sleep.jpg',
  },
  {
    kicker: '夏季降温',
    title: '小体积也要有强风量记忆点',
    text: '通过风场、冷感色彩和参数可视化强化“快速降温”，让小风扇在同质化产品中形成更高识别度。',
    image: '/assets/detail-highlights/highlight-fan-cooling.jpg',
  },
];

const fullDetailSections = detailWorks.map((item) => ({
  ...item,
  ...(detailCopy[item.product] || {
    title: '把产品卖点转译成购买理由',
    text: '围绕人群、场景、参数和情绪氛围组织页面，让详情页兼具质感、信息效率与转化导向。',
    points: ['卖点结构化', '场景氛围化', '视觉统一化'],
  }),
}));

const detailProductSections = fullDetailSections.reduce((groups, item) => {
  const existing = groups.find((group) => group.product === item.product);
  if (existing) {
    existing.items.push(item);
    return groups;
  }
  return [
    ...groups,
    {
      product: item.product,
      title: item.title,
      text: item.text,
      points: item.points,
      items: [item],
    },
  ];
}, []);

function App() {
  const [activeDetail, setActiveDetail] = useState(null);

  return (
    <main>
      <section id="home" className="section about aboutFirst">
        <nav className="nav shell">
          <a className="brand" href="#home" aria-label="返回首页">
            <span>MYF</span>
            <small>Visual Systems</small>
          </a>
          <div className="navLinks" aria-label="主导航">
            <a href="#home">简介</a>
            <a href="#projects">项目</a>
            <a href="#works">作品</a>
            <a href="#contact">联系</a>
          </div>
          <a className="navCta" href={`mailto:${profile.email}`}>
            <Mail size={16} />
            联系我
          </a>
        </nav>
        <div className="shell aboutGrid">
          <div className="portraitPanel">
            <div className="portraitTop">
              <strong>MAO YAFENG</strong>
              <span>VISUAL / AI / BRAND DESIGNER</span>
            </div>
            <div className="portraitImageFrame">
              <img
                src={assetPath('/assets/profile-photo.jpg')}
                alt="毛亚锋个人照片"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="portraitCaption">
              <Sparkles size={18} />
              AI-assisted commercial visual design
            </div>
          </div>

          <div className="aboutContent">
            <p className="sectionKicker">Profile</p>
            <h2>毛亚锋，深耕电商视觉与品牌表达的设计师。</h2>
            <p>
              拥有 10 年电商与品牌视觉设计经验，长期负责天猫店铺主图、详情页、产品包装、
              全店视觉统筹与新品视觉风格规划。曾服务图拉斯 3C 品牌与小家电品类，熟悉平台运营规则、
              爆款视觉逻辑和从创意到落地的完整链路。
            </p>
            <p>
              近年将 AI 工具融入创作流程，使用 LIBTV、GPT、即梦等工具进行创意构图、素材生成与画面优化，
              在保持品牌质感的同时提升批量出图效率。
            </p>
            <div className="contactStrip">
              <span><Phone size={16} /> {profile.phone}</span>
              <span><Bot size={16} /> 微信 {profile.wechat}</span>
              <span><Mail size={16} /> {profile.email}</span>
            </div>
          </div>

          <div className="infoDashboard">
            <div className="infoBlock contactBlock">
              <span><MapPin size={18} /> {profile.location}</span>
              <span><Phone size={18} /> {profile.phone}</span>
              <span><Mail size={18} /> {profile.email}</span>
              <span><Wrench size={18} /> {profile.tools}</span>
            </div>
            <div className="infoBlock metricBlock">
              {metrics.map((item) => (
                <div className="miniMetric" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="infoBlock timelineBlock">
              {timeline.map((item) => (
                <div className="timelineItem" key={item.company}>
                  <CalendarDays size={15} />
                  <time>{item.time}</time>
                  <strong>{item.company}</strong>
                  <span>{item.role}</span>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a className="scrollCue aboutCue" href="#experience" aria-label="查看首屏标语">
          <ChevronDown size={22} />
        </a>
      </section>

      <section id="experience" className="hero">
        <video className="heroVideo" autoPlay muted loop playsInline preload="none" poster={assetPath('/assets/hero-poster.png')}>
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="heroShade" />
        <div className="heroInner shell">
          <p className="eyebrow">Senior E-commerce Visual Designer</p>
          <h1>
            用 AI 与品牌视觉，
            <br />
            为产品建立更强的销售表达。
          </h1>
          <div className="heroMeta">
            <span>{profile.title}</span>
            <span>3C 数码 / 家居小家电 / 电商增长视觉</span>
          </div>
        </div>
        <a className="scrollCue" href="#projects" aria-label="查看精选项目">
          <ChevronDown size={22} />
        </a>
      </section>

      <section id="projects" className="section projects">
        <div className="shell">
          <div className="sectionHead">
            <p className="sectionKicker">Selected Work</p>
            <h2>精选项目</h2>
          </div>
          <div className="projectGrid textOnly">
            {projects.map((project) => (
              <article className="projectCard" key={project.title}>
                <p>{project.tag}</p>
                <h3>{project.title}</h3>
                <span>{project.desc}</span>
                <strong>
                  {project.result}
                  <ArrowUpRight size={18} />
                </strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="section works">
        <div className="shell">
          <div className="sectionHead">
            <p className="sectionKicker">Work Preview</p>
            <h2>产品视觉滚动展示</h2>
          </div>
        </div>
        <div className="workScroller autoScroll" aria-label="自动滚动作品展示">
          <div className="workTrack">
          {featuredWorks.map((work) => (
            <article className="workSlide" key={`${work.product}-${work.src}`}>
              <div className="workImageWrap">
                <img src={assetPath(work.src)} alt={work.name} loading="eager" decoding="async" />
              </div>
              <div>
                <p>{work.category}</p>
                <h3>{work.product}</h3>
              </div>
            </article>
          ))}
          </div>
        </div>
        <div className="shell workGroups">
          {workGroups.map((group) => (
            <article className="productGroup" key={`${group.category}-${group.product}`}>
              <div className="groupHead">
                <span>{group.category}</span>
                <h3>{group.product}</h3>
                <p>{group.items.length} 张作品</p>
              </div>
              <div className="groupImages">
                {group.items.map((item) => (
                  <figure key={item.src}>
                    <img src={assetPath(item.src)} alt={item.name} loading="eager" decoding="async" />
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="shell detailShowcase">
          <div className="sectionHead">
            <p className="sectionKicker">Detail Pages</p>
            <h2>详情展示</h2>
          </div>
          <div className="researchPanel">
            <div className="researchIntro">
              <span>Research / Creative Direction</span>
              <h3>从类目痛点出发，把详情页做成可被快速理解的购买路径。</h3>
            </div>
            {researchNotes.map((note) => (
              <article key={note.title}>
                <h4>{note.title}</h4>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
          <div className="narrativeGrid">
            {creativeNarratives.map((item) => (
              <article className="narrativeCard" key={item.title}>
                <img src={assetPath(item.image)} alt={item.title} loading="lazy" decoding="async" />
                <div>
                  <span>{item.kicker}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="fullDetails">
            {detailProductSections.map((group, index) => (
              <section className="fullDetailGroup" key={group.product}>
                <div className="fullDetailDivider">
                  <span>{String(index + 1).padStart(2, '0')} / {group.product}</span>
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                  <ul>
                    {group.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className={`fullDetailPair ${group.items.length === 1 ? 'single' : ''}`}>
                  {group.items.map((item) => (
                    <article className="fullDetailPanel" key={item.src}>
                      <button
                        className="fullDetailImage"
                        type="button"
                        onClick={() => setActiveDetail(item)}
                        aria-label={`查看${item.name}完整大图`}
                      >
                        <img src={assetPath(item.src)} alt={item.name} loading="lazy" decoding="async" />
                      </button>
                      <button
                        className="fullDetailAction"
                        type="button"
                        onClick={() => setActiveDetail(item)}
                      >
                        {item.name}
                        <ArrowUpRight size={16} />
                      </button>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="strengths" className="section strengths">
        <div className="shell">
          <div className="sectionHead compact">
            <p className="sectionKicker">Capability</p>
            <h2>把视觉做成可持续增长的系统。</h2>
          </div>
          <div className="strengthGrid">
            {strengths.map(({ icon: Icon, title, text }) => (
              <article className="strengthCard" key={title}>
                <Icon size={26} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contactFinal">
        <div className="shell finalInner">
          <p className="sectionKicker">Available Now</p>
          <h2>期待与更重视视觉转化的品牌一起工作。</h2>
          <div className="finalActions">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`}>
              <Phone size={18} />
              {profile.phone}
            </a>
          </div>
          <div className="footerLine">
            <span>MAO YAFENG PORTFOLIO</span>
            <span>Visual / AI / Brand Design</span>
          </div>
        </div>
      </section>

      {activeDetail && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeDetail.name}大图预览`}
          onClick={() => setActiveDetail(null)}
        >
          <button
            className="lightboxClose"
            type="button"
            onClick={() => setActiveDetail(null)}
            aria-label="关闭大图"
          >
            <X size={22} />
          </button>
          <div className="lightboxPanel" onClick={(event) => event.stopPropagation()}>
            <img src={assetPath(activeDetail.src)} alt={activeDetail.name} loading="eager" />
          </div>
          <div className="lightboxCaption">
            <span>{activeDetail.product}</span>
            <strong>{activeDetail.name}</strong>
          </div>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
