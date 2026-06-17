// Language switcher using a translation dictionary and localStorage
document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    navAbout: { ko: '단체 소개', en: 'About Us' },
    navProjects: { ko: '프로젝트', en: 'Projects' },
    navTrans: { ko: '투명성', en: 'Transparency' },
    navNews: { ko: '활동 소식', en: 'News' },
    navDonate: { ko: '후원하기', en: 'Donate' },
    heroTag: { ko: '청소년 주도 비영리 단체', en: 'Youth-Led Non-Profit Organization' },
    heroTitle: { ko: '상큼한 <span style="color: #FFD93D">희망</span>을 나눕니다', en: 'Sharing Fresh <span style="color: #FFD93D">Hope</span>' },
    heroDesc: { ko: '청소년이 주도하는 투명하고 책임 있는 나눔.<br>레모네이드 포 올과 함께하세요.', en: 'Transparent and responsible giving led by youth.<br>Join us at Lemonade For All.' },
    heroDonate: { ko: '후원하기', en: 'Donate' },
    heroLearn: { ko: '더 알아보기', en: 'Learn More' },
    statProjects: { ko: '진행 중 프로젝트', en: 'Ongoing Projects' },
    statTrans: { ko: '기부금 투명 공개', en: 'Transparent Donations' },
    statCountry: { ko: '지원 대상 국가', en: 'Supported Countries' },
    statFounded: { ko: '설립 연도', en: 'Founded' },
    projectTag: { ko: '프로젝트', en: 'Projects' },
    projectTitle: { ko: '진행 중인 프로젝트', en: 'Ongoing Projects' },
    cambodiaShort: { ko: '캄보디아 취약계층 아동·청소년 가정에 의류, 보건 물품 지원', en: 'Support for clothing and health supplies for vulnerable children and youth in Cambodia' },
    campaignTitle: { ko: '기부 인식 캠페인', en: 'Donation Awareness Campaign' },
    campaignShort: { ko: '학교 및 지역사회 공익 활동 교육 및 기부 캠페인', en: 'Public service education and donation campaign for schools and communities' },
    viewDetail: { ko: '상세 보기 →', en: 'View Details →' },
    allProjects: { ko: '모든 프로젝트 보기', en: 'View All Projects' },
    ctaTitle: { ko: '지금 함께해주세요', en: 'Join Us Now' },
    ctaDesc: { ko: '여러분의 작은 나눔이 세상을 바꿉니다', en: 'Your small contribution changes lives' },
    ctaDonate: { ko: '후원하기', en: 'Donate' },
    footerDesc: { ko: '청소년이 만드는 투명한 나눔', en: 'Transparent giving led by youth' },
    statusActive: { ko: '활동 중', en: 'Active' },

    // Project detail keys
    cambodia_page_title: { ko: 'Lemonade For Cambodia', en: 'Lemonade For Cambodia' },
    cambodia_page_sub: { ko: '캄보디아 취약계층 아동·청소년에게 따뜻한 나눔을 전합니다', en: 'Bringing warm support to vulnerable children and youth in Cambodia' },
    cambodia_overview: { ko: '프로젝트 개요', en: 'Project Overview' },
    cambodia_desc: { ko: 'Lemonade For Cambodia 프로젝트는 캄보디아 취약계층 아동·청소년 가정을 대상으로 의류, 보건 물품 등 생활 필수품을 지원하는 프로젝트입니다.', en: 'The Lemonade For Cambodia project provides essential items such as clothing and health supplies to vulnerable children and youth households in Cambodia.' },
    cambodia_support: { ko: '지원 내용', en: 'Support Details' },
    support_item_1: { ko: '의류 및 신발 제공', en: 'Provision of clothing and shoes' },
    support_item_2: { ko: '보건 위생 물품 지원', en: 'Health and hygiene supplies' },
    support_item_3: { ko: '학용품 및 교육 자료 전달', en: 'School supplies and educational materials' },
    support_item_4: { ko: '기본 생활 필수품 제공', en: 'Basic living essentials' },
    cambodia_partner: { ko: '파트너', en: 'Partners' },
    cambodia_impact: { ko: '기대 효과', en: 'Expected Impact' },
    cambodia_partner_desc: { ko: '태화복지재단과의 공식 협력을 통해 모든 기부 물품이 캄보디아 현지에 안전하고 투명하게 전달됩니다. 전문 NGO와의 협력으로 신뢰할 수 있는 지원 체계를 구축했습니다.', en: 'Through official cooperation with Taehwa Welfare Foundation, all donated items are delivered safely and transparently to Cambodia. Collaboration with professional NGOs ensures a reliable support system.' },
    cambodia_impact_desc: { ko: '취약계층 아동들의 기본적인 생활 환경을 개선하고, 건강하고 안전한 성장을 지원합니다. 장기적으로 교육 기회 확대와 자립 기반 마련에 기여하고자 합니다.', en: 'Improve basic living conditions for vulnerable children, support healthy and safe growth, and contribute to expanded educational opportunities and self-reliance in the long term.' },
    donate_project_btn: { ko: '이 프로젝트 후원하기', en: 'Support this project' },

    // Campaign page keys
    campaign_page_title: { ko: '기부 인식 캠페인', en: 'Donation Awareness Campaign' },
    campaign_page_sub: { ko: '청소년이 직접 만들어가는 투명한 기부 문화', en: 'Youth-led transparent donation culture' },
    campaign_overview: { ko: '프로젝트 개요', en: 'Project Overview' },
    campaign_desc: { ko: '기부 인식 캠페인은 학교 및 지역사회에서 공익 활동 교육과 기부 참여를 촉진하는 프로젝트입니다.', en: 'The Donation Awareness Campaign promotes public service education and donation participation in schools and communities.' },
    campaign_activities: { ko: '주요 활동', en: 'Main Activities' },
    campaign_item_1: { ko: '학교 기부 교육 프로그램 진행', en: 'School donation education programs' },
    campaign_item_2: { ko: '지역사회 봉사 활동 조직', en: 'Organize community volunteer activities' },
    campaign_item_3: { ko: '국제사회 현안 저널 및 콘텐츠 제작', en: 'Produce journals and content on international issues' },
    campaign_item_4: { ko: '청소년 나눔 문화 확산 캐페인', en: 'Campaign to spread youth sharing culture' },
    campaign_impact: { ko: '기대 효과', en: 'Expected Impact' },
    campaign_impact_desc: { ko: '청소년들이 기부와 나눔의 가치를 이해하고 실천하는 계기를 마련합니다. 투명한 기부 문화를 확산하여 사회 전반의 나눔 의식을 높이는 것을 목표로 합니다.', en: 'It provides opportunities for youth to understand and practice the value of giving, aiming to spread a transparent donation culture and raise awareness across society.' },
    campaign_join_btn: { ko: '함께 참여하기', en: 'Join Us' },

    // Donate page keys
    donate_page_title: { ko: '후원하기', en: 'Donate' },
    donate_page_sub: { ko: '여러분의 따뜻한 마음이 캄보디아 아이들에게 큰 희망이 됩니다', en: 'Your warm support brings great hope to children in Cambodia' },
    donate_money: { ko: '금전 후원', en: 'Monetary Donation' },
    donate_money_desc: { ko: '아래 계좌로 후원금을 보내주시면 전액 캄보디아 지원 사업에 사용됩니다.', en: 'Send donations to the account below; all funds are used for Cambodia support programs.' },
    donate_goods: { ko: '물품 후원', en: 'Goods Donation' },
    donate_goods_desc: { ko: '깨끗한 의류, 생활용품, 학용품을 기부해주세요. 직접 캄보디아로 전달됩니다.', en: 'Donate clean clothing, household items, and school supplies. They will be delivered directly to Cambodia.' },
    donate_volunteer: { ko: '봉사 참여', en: 'Volunteer' },
    donate_volunteer_desc: { ko: '캠페인 기획, 콘텐츠 제작, 현장 봉사 등 다양한 방식으로 참여할 수 있습니다.', en: 'Participate in campaign planning, content creation, field volunteering, and more.' },
    donate_money_button: { ko: '문의하기', en: 'Contact Us' },
    donate_goods_button: { ko: '문의하기', en: 'Contact Us' },
    donate_volunteer_button: { ko: '신청하기', en: 'Apply' },
    donate_account_info: { ko: '계좌번호는 이메일로 문의해주세요<br>lemonadeforall@gmail.com', en: 'Please inquire about the account number via email<br>lemonadeforall@gmail.com' },
    donate_usage: { ko: '후원금 사용 내역', en: 'Donation Usage' },
    donate_usage_desc: { ko: '모든 후원금은 투명하게 공개되며, 85%는 프로그램 직접 지원, 10%는 운영비, 5%는 교육 및 캠페인에 사용됩니다.', en: 'All donations are disclosed transparently: 85% program support, 10% operations, 5% education and campaigns.' },
    donate_report: { ko: '정기적으로 재정 보고서를 업데이트하여 후원자 여러분께 투명한 정보를 제공합니다.', en: 'We regularly update financial reports to provide transparent information to our donors.' },
    // About page
    about_title: { ko: '단체 소개', en: 'About Us' },
    about_sub: { ko: '레모네이드 포 올은 세상을 바꾸는 작은 나눔을 실천하는 청소년 주도 비영리 단체입니다', en: 'Lemonade For All is a youth-led non-profit practicing small acts of giving that change the world.' },
    about_start: { ko: '우리의 시작', en: 'Our Beginning' },
    about_start_desc: { ko: '레모네이드 포 올은 2026년, 국내외 취약계층을 실질적으로 지원하고 기부 과정의 투명성을 강화하기 위해 청소년들이 설립한 비영리 단체입니다. 우리는 작은 나눔이 모여 큰 변화를 만들 수 있다고 믿습니다.', en: 'Founded in 2026 by youth to support vulnerable groups and strengthen transparency in donations. We believe small acts of giving can create big change.' },
    about_mission: { ko: '미션', en: 'Mission' },
    about_mission_desc: { ko: '취약계층 아동·청소년에게 의류, 보건, 교육 분야에서 실질적인 생활 지원을 제공합니다. 특히 캄보디아 지역 아동들의 기본적인 생활 환경 개선을 목표로 합니다.', en: 'Provide practical support in clothing, health, and education to vulnerable children and youth, with a focus on improving living conditions in Cambodia.' },
    about_vision: { ko: '비전', en: 'Vision' },
    about_vision_desc: { ko: '투명하고 책임 있는 기부 문화를 청소년이 직접 만들어갑니다. 모든 기부금과 물품의 흐름을 투명하게 공개하여 후원자들이 신뢰할 수 있는 단체를 구축합니다.', en: 'Youth lead a transparent and responsible donation culture by openly publishing all donation and item flows to build donor trust.' },
    about_values: { ko: '핵심 가치', en: 'Core Values' },
    about_values_desc: { ko: '태화복지재단과의 협력을 통해 신뢰 있는 나눔을 실천합니다. 전문 단체와의 파트너십을 통해 기부금이 효과적으로 사용될 수 있도록 합니다.', en: 'Act with trusted partners like Taehwa Welfare Foundation to ensure donations are used effectively.' },

    // Projects page
    projects_title: { ko: '프로젝트', en: 'Projects' },
    projects_sub: { ko: '레모네이드 포 올이 진행하는 다양한 프로젝트를 소개합니다', en: 'Explore the various projects run by Lemonade For All' },
    projects_cambodia_desc: { ko: '캄보디아 취약계층 아동·청소년 가정에 의류, 보건 물품 등 생활 필수품을 지원합니다. 태화복지재단과 협력하여 현지에 직접 전달합니다.', en: 'We provide essential items such as clothing and health supplies to vulnerable children and youth households in Cambodia, delivered in cooperation with Taehwa Welfare Foundation.' },
    projects_campaign_desc: { ko: '학교 및 지역사회에서 공익 활동 교육과 기부 참여 캠페인을 진행합니다. 국제사회 현안에 대한 인식을 높입니다.', en: 'Conduct public service education and donation participation campaigns in schools and communities to raise awareness of global issues.' },

    // Transparency page
    transparency_title: { ko: '투명성 보고', en: 'Transparency Report' },
    transparency_sub: { ko: '모든 기부금과 물품의 흐름을 투명하게 공개합니다', en: 'We disclose all donation and goods flows transparently' },
    trans_program: { ko: '프로그램 직접 지원', en: 'Program direct support' },
    trans_ops: { ko: '운영비', en: 'Operations' },
    trans_edu: { ko: '교육 및 캠페인', en: 'Education & Campaigns' },
    trans_fin_principles: { ko: '재정 원칙', en: 'Financial Principles' },
    trans_fin_principles_desc: { ko: '레모네이드 포 올은 투명한 재정 운영을 최우선 가치로 삼고 있습니다. 모든 후원금과 물품의 입금 및 지출 내역을 정기적으로 공개합니다.', en: 'Lemonade For All prioritizes transparent financial management and regularly publishes all donation and goods income and expenditure.' },
    trans_report_period: { ko: '보고 주기', en: 'Reporting Period' },
    trans_report_period_desc: { ko: '매 분기마다 재정 보고서를 작성하여 웹사이트에 공개하며, 모든 후원자에게 이메일로 전달합니다. 주요 프로젝트 진행 상황과 기부금 사용 내역을 상세히 안내해드립니다.', en: 'We publish quarterly financial reports on the website and send them to donors by email, detailing project progress and donation usage.' },
    trans_partner: { ko: '파트너 협력', en: 'Partner Collaboration' },
    trans_partner_desc: { ko: '태화복지재단과의 공식 협력을 통해 모든 물품이 안전하게 캄보디아 현지에 전달되며, 그 과정을 사진과 보고서로 기록합니다.', en: 'Through official cooperation with Taehwa Welfare Foundation, all items are delivered safely to Cambodia and documented with photos and reports.' },

    // News page
    news_title: { ko: '활동 소식', en: 'News' },
    news_sub: { ko: '레모네이드 포 올의 최근 소식과 활동 내용을 확인하세요', en: 'Check out the latest news and activities from Lemonade For All' },
    news1_title: { ko: '캄보디아 1차 물품 지원 완료', en: 'First round of supplies delivered to Cambodia' },
    news1_desc: { ko: '태화복지재단과 협력하여 캄보디아 현지 가정에 의류 및 보건 물품을 성공적으로 전달했습니다. 취약계층 아동 50명이 지원을 받았습니다.', en: 'In cooperation with Taehwa Welfare Foundation, clothing and health supplies were successfully delivered to families in Cambodia, supporting 50 vulnerable children.' },
    news2_title: { ko: '학교 기부 캠페인 진행', en: 'School donation campaign held' },
    news2_desc: { ko: '포항 지역 학교에서 공익 활동 교육 캠페인을 진행하며 청소년 나눔 문화 확산에 기여했습니다. 200여 명의 학생들이 참여했습니다.', en: 'A public service education campaign was held at a Pohang school, contributing to the spread of youth giving culture with about 200 students participating.' },
    news3_title: { ko: '레모네이드 포 올 공식 창립', en: 'Lemonade For All officially founded' },
    news3_desc: { ko: '청소년 주도의 비영리 단체 레모네이드 포 올이 공식 창립되었습니다. 함께해주셔서 감사합니다.', en: 'The youth-led nonprofit Lemonade For All has been officially founded. Thank you for joining us.' },
    // Document titles
    index_doc: { ko: 'Lemonade For All | 청소년이 만드는 투명한 나눔', en: 'Lemonade For All | Youth-Led Transparent Giving' },
    about_doc: { ko: '단체 소개 | Lemonade For All', en: 'About | Lemonade For All' },
    projects_doc: { ko: '프로젝트 | Lemonade For All', en: 'Projects | Lemonade For All' },
    donate_doc: { ko: '후원하기 | Lemonade For All', en: 'Donate | Lemonade For All' },
    transparency_doc: { ko: '투명성 보고 | Lemonade For All', en: 'Transparency Report | Lemonade For All' },
    news_doc: { ko: '활동 소식 | Lemonade For All', en: 'News | Lemonade For All' },
    cambodia_doc: { ko: 'Lemonade For Cambodia | Lemonade For All', en: 'Lemonade For Cambodia | Lemonade For All' },
    campaign_doc: { ko: '기부 인식 캠페인 | Lemonade For All', en: 'Donation Awareness Campaign | Lemonade For All' },
  };

  const getStoredLang = () => localStorage.getItem('siteLang') || 'ko';
  let currentLang = getStoredLang();

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      const entry = translations[key];
      if (!entry) return;
      const text = entry[currentLang];
      if (text.includes('<') && text.includes('>')) el.innerHTML = text; else el.textContent = text;
    });

    // Update any elements that have explicit page keys
    document.documentElement.lang = currentLang === 'ko' ? 'ko' : 'en';

    // Update all language buttons text
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.textContent = currentLang === 'ko' ? 'ENG' : '한국어';
    });
  }

  // Toggle language when any .lang-btn is clicked
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'ko' ? 'en' : 'ko';
      localStorage.setItem('siteLang', currentLang);
      applyTranslations();
    });
  });

  // Initial apply
  applyTranslations();
});

console.log('Lang.js loaded');