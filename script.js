// const player = new Plyr("video", { captions: { active: true } });
const players = Array.from(document.querySelectorAll(".js-player")).map(
  (p) => new Plyr(p, { captions: { active: true } })
);
const btn_menu = document.querySelector(".left");
const current_langue = "EN";
const menu = document.querySelectorAll(".header-left-menu-langue");

// Expose player so it can be used from the console
// window.player = player;
var skillPers = document.querySelectorAll(".skill-per");

btn_menu.addEventListener("click", function () {
  // menu.classList.toggle("open");
  menu.forEach(function (item) {
    item.addEventListener("click", function () {
      item.classList.toggle("open");
    });
  });
});

menu.forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.remove("header-left-menu-langue open");
  });
});
// menu.addEventListener("click", function () {
//   menu.classList.remove("header-left-menu-langue open");
// });
skillPers.forEach(function (skillPer) {
  var per = parseFloat(skillPer.getAttribute("per"));
  skillPer.style.width = per + "%";

  var animatedValue = 0;
  var startTime = null;

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)

    if (stepPercentage < 1) {
      animatedValue = per * stepPercentage;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
      requestAnimationFrame(animate);
    } else {
      animatedValue = per;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
    }
  }

  requestAnimationFrame(animate);
});

document.querySelector(".top-bar .next").onclick = function () {
  const widthItem = document.querySelector("#formList .card").offsetWidth + 14;
  document.getElementById("formList").scrollLeft += widthItem;
};
document.querySelector(".top-bar .prev").onclick = function () {
  const widthItem = document.querySelector("#formList .card").offsetWidth + 14;
  document.getElementById("formList").scrollLeft -= widthItem;
};

// translate language
// dang english => japan
const arrLang = {
  ENG: {
    "PHÁT TRIỂN CỤM DÂN CƯ PÀ-CĂNG MỚI, THÔN PÀ ONG, XÃ CÀ DY, HUYỆN NAM GIANG":
      "DEVELOPING NEW PA-CANG VILLAGE, CA DY COMMUNE, NAM GIANG DISTRICT",
    "ベトナムのコトゥ民族のパキャン村の 持続可能な発展":
      "DEVELOPING NEW PA-CANG VILLAGE, CA DY COMMUNE, NAM GIANG DISTRICT",
    "Village Pa Cang du peuple Cotu au Vietnamle développement durable":
      "DEVELOPING NEW PA-CANG VILLAGE, CA DY COMMUNE, NAM GIANG DISTRICT",
    // taskbar
    "Trang chủ": "Home",
    ホームページ: "Home",
    Accueil: "Home",
    "Từ thiện": "Charity",
    慈善: "Charity",
    Charité: "Charity",
    "Nhà tài trợ": "Sponsor",
    投稿者: "Sponsor",
    Donateur: "Sponsor",
    "Tổ chức": "Organization",
    組織: "Organization",
    Organisation: "Organization",
    "Liên hệ": "Contact",
    連絡先: "Contact",
    Contact: "Contact",
    "Quyên góp": "Donate",
    寄付: "Donate",
    Don: "Donate",
    "Tổng quan": "Overview",
    概要: "Overview",
    Aperçu: "Overview",
    "Kế hoạch": "Plan",
    計画: "Plan",
    Plan: "Plan",
    "Trở thành nhà tài trợ": "Become a sponsor",
    スポンサーになる: "Become a sponsor",
    "Devenir un sponsor": "Become a sponsor",
    // Project
    "Cụm dân cư Pà-Căng mới cách cầu Xơi đường Hồ Chí Minh 3km đường bộ. Làng nằm bên bờ con sông Dakmy hiền hòa và phía sau là những dãy núi mây phủ sớm chiều êm đềm nên thơ. Tiếng nước chảy róc rách từ những dòng suối, tiếng gió thổi xì xào qua những rặng cây, tiếng chim kêu líu lo trên bầu trời lúc nào cũng làm cho không gian nơi đây tràn đầy sức sống tự nhiên.":
      "The new Pa-Cang residential cluster is 3km by road from Xoi bridge on Ho Chi Minh Road. The village is located on the banks of the gentle Dakmy River. Behind the village is the cloud-covered mountains with peaceful scenary. The sound of bubbling water from streams, the wind blowing through the trees, and the chirping of birds in the sky always make the space here full of natural vitality.",
    "新しいパキャン住宅群は、ホーチミン道路のソイ橋から歩いて 3 km の場所にあります。 村は穏やかなダクミー川のほとりにあります。 村の後ろには雲に覆われた山々があり、のどかな風景が広がっています。 小川のせせらぎの音、木々を吹き抜ける風、そして空を飛ぶ鳥のさえずりが、ここの空間は常に自然の生命力に満ちています。":
      "The new Pa-Cang residential cluster is 3km by road from Xoi bridge on Ho Chi Minh Road. The village is located on the banks of the gentle Dakmy River. Behind the village is the cloud-covered mountains with peaceful scenary. The sound of bubbling water from streams, the wind blowing through the trees, and the chirping of birds in the sky always make the space here full of natural vitality.",
    "Nous sommes au centre du Vietnam, près de Da Nang. Le village de montagne Pa-Cang se trouve à 3 km du pont Xoi, sur la route Ho Chi Minh. Il s’ètend sur les rives de la douce rivière Dakmy. Derrière lui se trouvent les montagnes couvertes de nuages, avec un paysage paisible. Le bruit des bulles du courant de la rivière, l'eau des ruisseaux, le vent soufflant à travers les branches et le chant des oiseaux dans le ciel, rendent toujours cet endroit plein de vitalité naturelle.":
      "The new Pa-Cang residential cluster is 3km by road from Xoi bridge on Ho Chi Minh Road. The village is located on the banks of the gentle Dakmy River. Behind the village is the cloud-covered mountains with peaceful scenary. The sound of bubbling water from streams, the wind blowing through the trees, and the chirping of birds in the sky always make the space here full of natural vitality.",
    //----
    "Une nouvelle journée commence. Papa a conduit la mère et l'enfant à l'école en moto, puis lui et maman sont allés travailler. La puissante moto a couru sur la route de gravier cahoteuse. Un couple s'est emmené pêcher avec des sourires éclatants sur les visages. Une femme portait un panier et partait dans la forêt pour chercher de la nourriture. Les mères de jeunes enfants restent à la maison pour s'occuper de leurs enfants et faire le ménage. Les maris revenaient de la pêche ensemble et partageaient le poisson dans la joie et le contentement. Les enfants du primaire sont récupérés par leurs parents après une journée d'école. Les enfants font volontairement leurs devoirs et aident leurs parents à nourrir les poules. Le soir, toute la famille se réunit autour d’un plateau de riz fourré à l’argent, chaleureux et plein d’amour.":
      "A new day is starting. Dad drove mother and child to school on the motorbike, then he and mom went to work. The powerful motorbike raced across the bumpy gravel road. A couple took each other fishing with bright smiles on their faces. A wife carried a basket and went into the forest to find food. Mothers with young children stay home to take care of their children and do housework. The husbands returned from fishing together, and shared the fish with each other in joy and contentment. Primary school children are picked up by their parents after a day at school. The children voluntarily do their homework and help their parents feed the chickens. At night, the whole family gathers around a tray of silver-filled rice, warm and full of love.",
    "Một ngày mới đang bắt đầu. Bố chở hai mẹ con đến trường, trên chiếc xe máy, rồi bố cùng mẹ đi làm. Chiếc xe máy khỏe chạy băng băng trên con đường sỏi đá gập gềnh. Một vợ chồng chở nhau đi đánh cá với nụ cười tươi rói trên môi. Một người vợ mang gùi đi vào rừng kiếm thức ăn. Những người mẹ có con nhỏ ở nhà chăm con và làm việc nhà. Những người chồng cùng đi đánh bắt cá về, và chia cá cho nhau trong sự vui vẻ mãn nguyện. Trẻ em cấp một sau một ngày học ở trường được bố mẹ đón về nhà. Các em nhỏ tự giác làm bài tập, giúp bố mẹ cho gà ăn. Tối đến, cả nhà sum vầy bên mâm cơm đượm bạc, ấm áp và đầy yêu thương.":
      "A new day is starting. Dad drove mother and child to school on the motorbike, then he and mom went to work. The powerful motorbike raced across the bumpy gravel road. A couple took each other fishing with bright smiles on their faces. A wife carried a basket and went into the forest to find food. Mothers with young children stay home to take care of their children and do housework. The husbands returned from fishing together, and shared the fish with each other in joy and contentment. Primary school children are picked up by their parents after a day at school. The children voluntarily do their homework and help their parents feed the chickens. At night, the whole family gathers around a tray of silver-filled rice, warm and full of love.",
    "新しい一日が始まります。 お父さんは母子をバイクで学校まで送り、それからお父さんとお母さんは仕事に行きました。 パワフルなバイクはでこぼこした砂利道を駆け抜けました。 カップルは明るい笑顔で釣りをしていた。 妻はかごを背負って森へ食べ物を探しに行きました。 小さな子供を持つ母親は、子供の世話や家事をするために家にいます。 夫たちは一緒に釣りから戻り、喜びと満足感を持ってお互いに魚を分け合いました。 小学生は学校で一日を過ごした後、保護者が迎えに来ます。 子どもたちは自発的に宿題をし、親が鶏に餌をあげるのを手伝います。 夜になると、家族全員が温かく愛情に満ちた銀色のご飯を囲んで集まります。":
      "A new day is starting. Dad drove mother and child to school on the motorbike, then he and mom went to work. The powerful motorbike raced across the bumpy gravel road. A couple took each other fishing with bright smiles on their faces. A wife carried a basket and went into the forest to find food. Mothers with young children stay home to take care of their children and do housework. The husbands returned from fishing together, and shared the fish with each other in joy and contentment. Primary school children are picked up by their parents after a day at school. The children voluntarily do their homework and help their parents feed the chickens. At night, the whole family gathers around a tray of silver-filled rice, warm and full of love.",
    // --------------
    "新しいパチャンの住宅群は 2017 年に設立され、現在は大人 57 人、子供 75 人のコトゥ家族 30 世帯が住んでいます。 安定した収入のある世帯が4世帯あります。 残りの 26 世帯には仕事がありません。 人々は毎日、食べ物や売れる物を求めて森や川へ行きます。 場合によっては、石工として働いたり、木を切ったり、木の世話をしたりするために雇われることもあります。 世帯の平均月収は 1,500,000 VND 未満です。 人々の毎日の最大の心配は、特に雨季の衣料品の不足です。":
      "The new Pa-Cang residential cluster was established in 2017, currently there are 30 Co-Tu families living, with 57 adults and 75 children. There are 4 households with stable income. The remaining 26 households do not have jobs. Every day people go to the forest or to the river to find food and items that can be sold. Sometimes they are hired to work as masons, cut trees, and nurse trees. The average monthly income of the household is less than 1,500,000 VND. The biggest worry of people every day is lack of food and clothing, especially during the rainy season.",
    "Le nouveau groupe résidentiel Pa-Cang a été créé en 2017 et compte actuellement 30 familles Co-Tu, avec 57 adultes et 75 enfants. Il y a 4 ménages avec des revenus stables. Les 26 ménages restants n'ont pas d'emploi. Chaque jour, les gens vont dans la forêt ou à la rivière pour trouver de la nourriture et des objets à vendre. Parfois, ils sont embauchés pour travailler comme maçons, couper des arbres et soigner des arbres. Le revenu mensuel moyen du ménage est inférieur à 1 500 000 VND. La plus grande préoccupation des gens au quotidien est le manque de nourriture et de vêtements, surtout pendant la saison des pluies.":
      "The new Pa-Cang residential cluster was established in 2017, currently there are 30 Co-Tu families living, with 57 adults and 75 children. There are 4 households with stable income. The remaining 26 households do not have jobs. Every day people go to the forest or to the river to find food and items that can be sold. Sometimes they are hired to work as masons, cut trees, and nurse trees. The average monthly income of the household is less than 1,500,000 VND. The biggest worry of people every day is lack of food and clothing, especially during the rainy season.",
    "Cụm dân cư Pà-Căng mới được thành lập năm 2017, hiện có 30 gia đình người Cơ-Tu đang sinh sống, với 57 người lớn và 75 trẻ em. Có 4 hộ có thu nhập ổn định. 26 hộ còn lại không có việc làm. Hằng ngày người dân đi vào rừng hoặc ra sông tìm thức ăn và những món có thể bán. Đôi khi họ được thuê để đi làm phụ hồ, chặt cây, ươm cây. Thu nhập trung bình tháng của hộ dưới 1.500.000 đồng. Sự lo lắng lớn nhất mỗi ngày của bà con là thiếu ăn, thiếu mặc nhất là vào những ngày mùa mưa.":
      "The new Pa-Cang residential cluster was established in 2017, currently there are 30 Co-Tu families living, with 57 adults and 75 children. There are 4 households with stable income. The remaining 26 households do not have jobs. Every day people go to the forest or to the river to find food and items that can be sold. Sometimes they are hired to work as masons, cut trees, and nurse trees. The average monthly income of the household is less than 1,500,000 VND. The biggest worry of people every day is lack of food and clothing, especially during the rainy season.",
    // ---
    "Consciente des difficultés des gens d'ici, Smile Eye Charity appelle au soutien des organisations et des individus nationaux et étrangers pour qu'ils s'associent au gouvernement pour aider les gens d'ici à améliorer leurs compétences en matière d'affaires, d'économie et de vie. Ensemble, nous pouvons rendre cet endroit plus beau et aider les gens à créer de nouvelles opportunités pour l'avenir. S'il vous plaît, rejoignez-nous et partagez votre amour avec les gens ici, pour aider cet endroit à grandir et à se propager.":
      "Realizing the difficulties of the people here, Smile Eye Charity calls for the support of domestic and foreign organizations and individuals to join hands with the government to help people here improve their business skills. economics and life skills. Together, we can make this place more beautiful and help people create new opportunities for the future. Please join and share your love with the people here, to help this place grow and spread.",
    "ここの人々の困難を認識し、スマイル・アイ・チャリティーは、政府と協力してここの人々がビジネススキル、経済スキル、生活スキルを向上できるよう支援するよう、国内外の組織や個人に支援を求めています。 私たちは力を合わせてこの場所をより美しくし、人々が未来に向けて新たな機会を生み出すお手伝いをすることができます。 ぜひ参加して、ここの人々とあなたの愛を分かち合い、この場所の成長と広がりを助けてください。":
      "Realizing the difficulties of the people here, Smile Eye Charity calls for the support of domestic and foreign organizations and individuals to join hands with the government to help people here improve their business skills. economics and life skills. Together, we can make this place more beautiful and help people create new opportunities for the future. Please join and share your love with the people here, to help this place grow and spread.",
    "Nhận thấy sự khó khăn của người dân nơi đây, Smile Eye Charity kêu gọi sự hỗ trợ của các tổ chức cá nhân trong và ngoài nước cùng chung tay với cấp chính quyền, để giúp cùng bà con nơi đây nâng cao kỹ năng làm kinh tế và kỹ năng sống. Cùng chung tay, chúng ta có thể làm cho nơi này trở nên tươi đẹp hơn và giúp người dân tạo ra những cơ hội mới cho tương lai. Hãy tham gia và chia sẻ tình yêu của bạn với bà con nơi đây, để giúp nơi này phát triển và lan tỏa.":
      "Realizing the difficulties of the people here, Smile Eye Charity calls for the support of domestic and foreign organizations and individuals to join hands with the government to help people here improve their business skills. economics and life skills. Together, we can make this place more beautiful and help people create new opportunities for the future. Please join and share your love with the people here, to help this place grow and spread.",

    //-----
    "Làng Pà Căng mới và các hộ gia đình có điện nước đầy đủ. Mỗi hộ có diện tích vườn trên 500m2. Trồng trọt và chăn nuôi là công việc chính của người dân. Tuy nhiên bà con chua được tiếp cận kỹ thuật nuôi trồng. Hầu hết các vườn nhà đang còn để trống, chỉ có vài cây ăn quả. Vài con gà, heo được nuôi thả thuận theo tự nhiên. Môi trường ngày càng ô nhiễm do chất thải và rác được thải trực tiếp ra vườn và suối.":
      "Pa Cang village is new and households have full electricity and water. Each household has a garden area of over 500m2. Cultivation and animal husbandry are the main occupations of the people. However, farmers do not have access to farming techniques. Most of the home gardens are still empty, with only a few fruit trees. Some chickens and pigs are raised naturally. The environment is increasingly polluted because waste and garbage are discharged directly into gardens and streams.",
    "パチャン村は新しく、各家庭には電気と水道が完備されています。 各世帯には500平方メートル以上の庭面積があります。 栽培と畜産業が人々の主な職業です。 しかし、農民は農業技術を利用することができません。 ほとんどの家庭菜園はまだ空き地で、果樹が数本あるだけだ。 一部の鶏や豚は自然に飼育されています。 廃棄物やゴミが庭や小川に直接排出されるため、環境はますます汚染されています。":
      "Pa Cang village is new and households have full electricity and water. Each household has a garden area of over 500m2. Cultivation and animal husbandry are the main occupations of the people. However, farmers do not have access to farming techniques. Most of the home gardens are still empty, with only a few fruit trees. Some chickens and pigs are raised naturally. The environment is increasingly polluted because waste and garbage are discharged directly into gardens and streams.",
    "Le village de Pa Cang est nouveau et les ménages disposent de l'électricité et de l'eau. Chaque foyer dispose d'un espace jardin de plus de 500m2. La culture et l'élevage sont les principales occupations de la population. Cependant, les agriculteurs n’ont pas accès aux techniques agricoles. La plupart des jardins familiaux sont encore vides, avec seulement quelques arbres fruitiers. Certains poulets et porcs sont élevés naturellement. L'environnement est de plus en plus pollué car les déchets et les ordures sont déversés directement dans les jardins et les cours d'eau.":
      "Pa Cang village is new and households have full electricity and water. Each household has a garden area of over 500m2. Cultivation and animal husbandry are the main occupations of the people. However, farmers do not have access to farming techniques. Most of the home gardens are still empty, with only a few fruit trees. Some chickens and pigs are raised naturally. The environment is increasingly polluted because waste and garbage are discharged directly into gardens and streams.",
    //--
    "Phân bón hữu cơ là thành phần quan trọng quyết định chất lượng và sản lượng cây trồng. Dự án nhằm tái sử dụng các chất thải gia súc gia cầm, rác thải gia đình, rác thải nông nghiệp trong làng để làm nguồn phân cung cấp cho các mô hình kinh tế vườn và trang trại của bà con. Kết quả là bà con có phân bón hữu cơ chất lượng cho vườn của mình với chi phí thấp.":
      "Organic fertilizer is an important ingredient that determines crop quality and yield. The project aims to reuse livestock and poultry waste, household waste, and agricultural waste in the village as a source of manure to supply people's garden and farm economic models. As a result, people have quality organic fertilizer for their gardens at low cost.",
    "有機肥料は作物の品質と収量を決める重要な要素です。 このプロジェクトは、村内の家畜や家禽の排泄物、家庭廃棄物、農業廃棄物を肥料源として再利用し、人々の庭や農業の経済モデルに供給することを目的としています。 その結果、人々は庭に高品質の有機肥料を低コストで入手できるようになりました。":
      "Organic fertilizer is an important ingredient that determines crop quality and yield. The project aims to reuse livestock and poultry waste, household waste, and agricultural waste in the village as a source of manure to supply people's garden and farm economic models. As a result, people have quality organic fertilizer for their gardens at low cost.",
    "L'engrais organique est un ingrédient important qui détermine la qualité et le rendement des cultures. Le projet vise à réutiliser les déchets d'élevage et de volaille, les déchets ménagers et les déchets agricoles du village comme source de fumier pour alimenter les modèles économiques de jardin et de ferme des gens. En conséquence, les gens disposent d’engrais organiques de qualité pour leurs jardins à faible coût.":
      "Organic fertilizer is an important ingredient that determines crop quality and yield. The project aims to reuse livestock and poultry waste, household waste, and agricultural waste in the village as a source of manure to supply people's garden and farm economic models. As a result, people have quality organic fertilizer for their gardens at low cost.",
    "CÁC CHƯƠNG TRÌNH CỤ THỂ": "SPECIFIC PROGRAMS",
    具体的なプログラム: "SPECIFIC PROGRAMS",
    "PROGRAMMES SPÉCIFIQUES": "SPECIFIC PROGRAMS",
    // cac chuong trinh cu the
    "DỰ ÁN HỖ TRỢ XÂY DỰNG MÔ HÌNH KINH TẾ VƯỜN Ở LÀNG PÀ CĂNG":
      "PROJECT TO SUPPORT THE CONSTRUCTION OF GARDEN ECONOMIC MODEL IN PA CANG VILLAGE",
    パキャン村での園芸経済モデル構築を支援するプロジェクト:
      "PROJECT TO SUPPORT THE CONSTRUCTION OF GARDEN ECONOMIC MODEL IN PA CANG VILLAGE",
    "PROJET DE SOUTIEN À LA CONSTRUCTION D'UN MODÈLE ÉCONOMIQUE DE JARDINAGE AU VILLAGE DE PA CANG":
      "PROJECT TO SUPPORT THE CONSTRUCTION OF GARDEN ECONOMIC MODEL IN PA CANG VILLAGE",
    // ---
    "DỰ ÁN XÂY DỰNG XƯỞNG SẢN XUẤT PHÂN HỮU CƠ Ở LÀNG PÀ CĂNG GIÚP THOÁT NGHÈO":
      "BUILDING ORGANIC FERTILIZER PRODUCTION WORKSHOP",
    貧困脱却を目的にパチャン村に有機肥料生産工場を建設するプロジェクト:
      "BUILDING ORGANIC FERTILIZER PRODUCTION WORKSHOP",
    "CONSTRUCTION D'UN ATELIER DE PRODUCTION D'ENGRAIS ORGANIQUE":
      "BUILDING ORGANIC FERTILIZER PRODUCTION WORKSHOP",
    //----
    // cac chuong trinh dang thuc hien
    "CÁC CHƯƠNG TRÌNH ĐANG THỰC HIỆN": "PROGRAMS ARE RUNNING",
    実行中のプログラム: "PROGRAMS ARE RUNNING",
    "PROGRAMMES EN COURS": "PROGRAMS ARE RUNNING",
    //Blog
    ブログ: "Blog",
    //--
    "Dự án làng Pà-Ong Đà Nẵng": "Pa-Ong village project in Da Nang",
    ダナンのパオン村プロジェクト: "Pa-Ong village project in Da Nang",
    "Projet du village Pa-Ong à Da Nang": "Pa-Ong village project in Da Nang",
    //--
    "Học sinh nghèo có hoàn cảnh khó khăn, chủ yếu là ở vùng cao. Các trường hợp học sinh gặp khó khăn đặc biệt khác":
      "Poor students come from difficult circumstances, mainly in highland areas. Other cases of students having special difficulties",
    "貧しい学生は、主に高地地域で困難な環境に住んでいます。 特別な困難を抱えた学生のその他のケース":
      "Poor students come from difficult circumstances, mainly in highland areas. Other cases of students having special difficulties",
    "Les étudiants pauvres viennent de conditions difficiles, principalement dans les zones montagneuses. Autres cas d'élèves rencontrant des difficultés particulières":
      "Poor students come from difficult circumstances, mainly in highland areas. Other cases of students having special difficulties",

    //Nha Sang Lap
    "Nhà Đóng Góp": "CONTRIBUTOR",
    投稿者: "CONTRIBUTOR",
    Donateur: "CONTRIBUTOR",
    "ĐÓNG GÓP TỪ THIỆN": "CHARITABLE CONTRIBUTION",
    慈善寄付: "CHARITABLE CONTRIBUTION",
    "CONTRIBUTION CARITATIVE": "CHARITABLE CONTRIBUTION",
    "NGƯỜI SÁNG LẬP": "FOUNDER",
    設立者: "FOUNDER",
    FONDATEUR: "FOUNDER",
    //---
    "Cô Đinh Thị Đông Phương là giảng viên tại trường Đại học VKU tại Việt Nam. Cô là người chủ trì môn học Chuyên đề IT tại trường.Môn học Chuyên đề IT là một môn học chuyên sâu trong lĩnh vực Công nghệ thông tin. Môn học này được thiết kế nhằm cung cấp kiến thức và kỹ năng chuyên môn sâu về các vấn đề liên quan đến công nghệ thông tin, trong đó bao gồm cả các xu hướng mới nhất và các công nghệ tiên tiến.Phân tích và thiết kế hệ thống: Cô sẽ giảng dạy về các phương pháp và kỹ thuật phân tích, thiết kế hệ thống thông tin, từ việc xác định yêu cầu đến xây dựng mô hình hệ thống.Phát triển ứng dụng: Cô sẽ hướng dẫn sinh viên về quy trình phát triển phần mềm, bao gồm việc lựa chọn ngôn ngữ lập trình, quản lý dự án, kiểm thử và triển khai ứng dụng.":
      "Ms. Dinh Thi Dong Phuong is a lecturer at VKU University in Vietnam. She is the chair of the IT subject at the school. The IT subject is an in-depth subject in the field of Information Technology. This course is designed to provide in-depth knowledge and skills on information technology-related issues, including the latest trends and cutting-edge technologies. Analysis and design System design: She will teach information system analysis and design methods and techniques, from determining requirements to building system models. Application development: She will guide students about the software development process, including programming language selection, project management, testing, and application deployment.",
    "ディン・ティ・ドン・フオン女史は、ベトナムの VKU 大学の講師です。 彼女は学校の IT 科目の議長を務めており、IT 科目は情報技術の分野における詳細な科目です。 最新動向や先端技術など、情報技術に関する深い知識と技術を修得するコースです 分析・設計 システム設計：情報システムの分析・設計の手法や技術を要件定義から学びます。アプリケーション開発: プログラミング言語の選択、プロジェクト管理、テスト、アプリケーションの展開などのソフトウェア開発プロセスについて学生を指導します。":
      "Ms. Dinh Thi Dong Phuong is a lecturer at VKU University in Vietnam. She is the chair of the IT subject at the school. The IT subject is an in-depth subject in the field of Information Technology. This course is designed to provide in-depth knowledge and skills on information technology-related issues, including the latest trends and cutting-edge technologies. Analysis and design System design: She will teach information system analysis and design methods and techniques, from determining requirements to building system models. Application development: She will guide students about the software development process, including programming language selection, project management, testing, and application deployment.",
    "Mme Dinh Thi Dong Phuong est chargée de cours à l'Université VKU au Vietnam. Elle est présidente de la matière informatique à l'école. La matière informatique est une matière approfondie dans le domaine des technologies de l'information. Ce cours est conçu pour fournir des connaissances et des compétences approfondies sur les questions liées aux technologies de l'information, y compris les dernières tendances et technologies avancées.Analyse et conception Conception de systèmes : elle enseignera les méthodes et techniques d'analyse et de conception des systèmes d'information, de la détermination des exigences à la construction. modèles de systèmes.Développement d'applications : elle guidera les étudiants dans le processus de développement de logiciels, y compris la sélection du langage de programmation, la gestion de projet, les tests et le déploiement d'applications.":
      "Ms. Dinh Thi Dong Phuong is a lecturer at VKU University in Vietnam. She is the chair of the IT subject at the school. The IT subject is an in-depth subject in the field of Information Technology. This course is designed to provide in-depth knowledge and skills on information technology-related issues, including the latest trends and cutting-edge technologies. Analysis and design System design: She will teach information system analysis and design methods and techniques, from determining requirements to building system models. Application development: She will guide students about the software development process, including programming language selection, project management, testing, and application deployment.",
    //---
    "An ninh mạng: Cô sẽ truyền đạt kiến thức về các vấn đề liên quan đến an ninh mạng, bao gồm bảo mật thông tin, phòng chống tấn công mạng và quản lý rủi ro.Công nghệ mới: Cô sẽ cập nhật sinh viên với các xu hướng mới nhất trong lĩnh vực Công nghệ thông tin, bao gồm trí tuệ nhân tạo, học máy, blockchain, IoT và các công nghệ khác.":
      "Cyber Security: She will impart knowledge on issues related to cyber security, including information security, cyber attack prevention, and risk management. New Technology: She will update students with the latest trends in the IT sector, including artificial intelligence, machine learning, blockchain, IoT and other technologies.",
    "サイバーセキュリティ: 情報セキュリティ、サイバー攻撃の防止、リスク管理など、サイバーセキュリティに関連する問題に関する知識を伝えます 新しいテクノロジー: 人工知能、機械学習などの IT 分野の最新トレンドを学生に提供します、ブロックチェーン、IoT、その他のテクノロジー。":
      "Cyber Security: She will impart knowledge on issues related to cyber security, including information security, cyber attack prevention, and risk management. New Technology: She will update students with the latest trends in the IT sector, including artificial intelligence, machine learning, blockchain, IoT and other technologies.",
    "Cyber ​​​​sécurité : elle transmettra des connaissances sur les questions liées à la cybersécurité, notamment la sécurité de l'information, la prévention des cyberattaques et la gestion des risques. Nouvelles technologies : elle mettra à jour les étudiants avec les dernières tendances du secteur informatique, notamment l'intelligence artificielle, l'apprentissage automatique. , blockchain, IoT et autres technologies.":
      "Cyber Security: She will impart knowledge on issues related to cyber security, including information security, cyber attack prevention, and risk management. New Technology: She will update students with the latest trends in the IT sector, including artificial intelligence, machine learning, blockchain, IoT and other technologies.",
    //Footer
    私たちの場所: "Our location",
    お電話ください: "Call us",
    私たちのメール: "Our Email",
    エコファイン: "Ecofine",
    クイックリンク: "Quick Link",
    最近のニュース: "Recent News",
    ニュースレター: "Newsletter",
    ボランティア: "Volunteer",
    地球温暖化: "Global Warning",
    気候適応: "Climate Adaptation",
    都市計画: "Urban planning",
    エネルギー: "Energy Consulting",
    //--
    "Cùng chung tay vì một xã hội không còn những khoảng cách về kinh tế, điều kiện và giáo dục":
      "Let's join hands for a society that no longer has gaps in economics, conditions and education",
    "Unissons-nous pour une société qui n'a plus de lacunes en matière d'économie, de conditions de vie et d'éducation.":
      "Let's join hands for a society that no longer has gaps in economics, conditions and education",
    "経済、条件、教育の格差のない社会を目指して力を合わせましょう":
      "Let's join hands for a society that no longer has gaps in economics, conditions and education",
    //--
    "Quỹ trò nghèo vùng cao": "Upland Poverty Fund",
    高地貧困基金: "Upland Poverty Fund",
    "Fonds de pauvreté des": "Upland Poverty Fund",
    //--
    "あなたの貢献は、このプロジェクトの完了と発展にとって非常に重要です。":
      "Your contributions are very important for the completion and development of this project.",
    "Vos contributions sont très importantes pour la réalisation et le développement de ce projet.":
      "Your contributions are very important for the completion and development of this project.",
    "Những đóng góp của bạn rất quan trọng cho quá trình hoàn thiện và phát triển cho dự án này.":
      "Your contributions are very important for the completion and development of this project.",
    //share
    Share: "Partager",
    共有: "Partager",
    "Chia sẻ": "Partager",

    "Share with": "Partager avec",
    "Chia sẻ với": "Partager avec",
    と共有する: "Partager avec",

    "Or copy the link below": "Ou copiez le lien ci-dessous",
    "Hoặc copy link dưới": "Ou copiez le lien ci-dessous",
    "または、以下のリンクをコピーしてください": "Ou copiez le lien ci-dessous",

    コピー: "Copie",
    Copy: "Copie",
    "Sao chép": "Copie",
    //form
    "Số tài khoản:": "Numéro de compte:",
    "口座番号：": "Numéro de compte:",
    "Account number:": "Numéro de compte:",

    "Công ty hoạt động từ thiện Smile Eye Charity, viết tắt là Smile Eye Charity, là công ty phi lợi nhuận. Smile Eye Charity kết nối các nguồn lực trong và ngoài nước để tổ chức các chương trình đào tạo thực tế, đồng hành, và hỗ trợ người dân ở các khu vực còn nhiều khó khăn. Các chương trình đào tạo nhằm mục đích giúp người dân nâng cao kỹ năng sống và kỹ năng làm kinh tế một cách bền vững.":
      "Smile Eye Charity, en abrégé Smile Eye Charity, est une société à but non lucratif. Smile Eye Charity met en relation des ressources nationales et étrangères pour organiser des programmes de formation pratique, accompagner et soutenir les personnes dans des zones difficiles. Les programmes de formation visent à aider les gens à améliorer leurs compétences de vie et économiques de manière durable.",
    "Smile Eye Charity, abbreviated as Smile Eye Charity, is a non-profit company. Smile Eye Charity connects domestic and foreign resources to organize practical training programs, accompany, and support people in difficult areas. Training programs aim to help people improve their life and economic skills in a sustainable way.":
      "Smile Eye Charity, en abrégé Smile Eye Charity, est une société à but non lucratif. Smile Eye Charity met en relation des ressources nationales et étrangères pour organiser des programmes de formation pratique, accompagner et soutenir les personnes dans des zones difficiles. Les programmes de formation visent à aider les gens à améliorer leurs compétences de vie et économiques de manière durable.",
    "Smile Eye Charity (略称 Smile Eye Charity) は非営利企業です。 Smile Eye Charity は国内外のリソースを結びつけ、実践的なトレーニング プログラムを企画し、困難な地域にいる人々に同行し、支援します。 研修プログラムは、人々が持続可能な方法で生活と経済スキルを向上できるよう支援することを目的としています。":
      "Smile Eye Charity, en abrégé Smile Eye Charity, est une société à but non lucratif. Smile Eye Charity met en relation des ressources nationales et étrangères pour organiser des programmes de formation pratique, accompagner et soutenir les personnes dans des zones difficiles. Les programmes de formation visent à aider les gens à améliorer leurs compétences de vie et économiques de manière durable.",

    "Thông tin công ty:": "Informations sur la société:",
    "企業情報：": "Informations sur la société:",
    "Company information:": "Informations sur la société:",

    "Tên:": "Nom:",
    "Name:": "Nom:",
    "名前：": "Nom:",

    "Công ty phi lợi nhuận hoạt động từ thiện Smile Eye Charity, viết tắt là Smile Eye Charity":
      "Entreprise caritative à but non lucratif Smile Eye Charity, en abrégé Smile Eye Charity",
    "Non-profit charitable company Smile Eye Charity, abbreviated as Smile Eye Charity":
      "Entreprise caritative à but non lucratif Smile Eye Charity, en abrégé Smile Eye Charity",
    "非営利慈善団体Smile Eye Charity、略称Smile Eye Charity":
      "Entreprise caritative à but non lucratif Smile Eye Charity, en abrégé Smile Eye Charity",

    "Giấy phép đăng ký:": "Enregistrement de licence:",
    "ライセンス登録：": "Enregistrement de licence:",
    "License registration:": "Enregistrement de licence:",

    "Địa chỉ:": "Adresse:",
    "Address:": "Adresse:",
    "住所：": "Adresse:",

    "Người đại diện:": "Représentant:",
    "代表：": "Représentant:",
    "Representative:": "Représentant:",

    "Điện thoại:": "Téléphone:",
    "Phone:": "Téléphone:",
    "電話：": "Téléphone:",

    "Liên Hệ": "Contact",
    接触: "Contact",
    Contact: "Contact",

    "Nội dung*": "Contenu*",
    "Content*": "Contenu*",
    "コンテンツ*": "Contenu*",

    "First and last name*": "Nom et prénom*",
    "Họ và tên*": "Nom et prénom*",
    "名前と苗字*": "Nom et prénom*",

    "Số điện thoại:": "Numéro de téléphone:",
    "Phone number:": "Numéro de téléphone:",
    "電話番号：": "Numéro de téléphone:",

    Gửi: "Envoyer",
    送信: "Envoyer",
    Send: "Envoyer",

    "Eメール*": "Email*",
  },
  VN: {
    "DEVELOPING NEW PA-CANG VILLAGE, CA DY COMMUNE, NAM GIANG DISTRICT":
      "PHÁT TRIỂN CỤM DÂN CƯ PÀ-CĂNG MỚI, THÔN PÀ ONG, XÃ CÀ DY, HUYỆN NAM GIANG",
    "ベトナムのコトゥ民族のパキャン村の 持続可能な発展":
      "PHÁT TRIỂN CỤM DÂN CƯ PÀ-CĂNG MỚI, THÔN PÀ ONG, XÃ CÀ DY, HUYỆN NAM GIANG",
    "Village Pa Cang du peuple Cotu au Vietnamle développement durable":
      "PHÁT TRIỂN CỤM DÂN CƯ PÀ-CĂNG MỚI, THÔN PÀ ONG, XÃ CÀ DY, HUYỆN NAM GIANG",
    "The new Pa-Cang residential cluster is 3km by road from Xoi bridge on Ho Chi Minh Road. The village is located on the banks of the gentle Dakmy River. Behind the village is the cloud-covered mountains with peaceful scenary. The sound of bubbling water from streams, the wind blowing through the trees, and the chirping of birds in the sky always make the space here full of natural vitality.":
      "Cụm dân cư Pà-Căng mới cách cầu Xơi đường Hồ Chí Minh 3km đường bộ. Làng nằm bên bờ con sông Dakmy hiền hòa và phía sau là những dãy núi mây phủ sớm chiều êm đềm nên thơ. Tiếng nước chảy róc rách từ những dòng suối, tiếng gió thổi xì xào qua những rặng cây, tiếng chim kêu líu lo trên bầu trời lúc nào cũng làm cho không gian nơi đây tràn đầy sức sống tự nhiên.",
    "新しいパキャン住宅群は、ホーチミン道路のソイ橋から歩いて 3 km の場所にあります。 村は穏やかなダクミー川のほとりにあります。 村の後ろには雲に覆われた山々があり、のどかな風景が広がっています。 小川のせせらぎの音、木々を吹き抜ける風、そして空を飛ぶ鳥のさえずりが、ここの空間は常に自然の生命力に満ちています。":
      "Cụm dân cư Pà-Căng mới cách cầu Xơi đường Hồ Chí Minh 3km đường bộ. Làng nằm bên bờ con sông Dakmy hiền hòa và phía sau là những dãy núi mây phủ sớm chiều êm đềm nên thơ. Tiếng nước chảy róc rách từ những dòng suối, tiếng gió thổi xì xào qua những rặng cây, tiếng chim kêu líu lo trên bầu trời lúc nào cũng làm cho không gian nơi đây tràn đầy sức sống tự nhiên.",
    "Nous sommes au centre du Vietnam, près de Da Nang. Le village de montagne Pa-Cang se trouve à 3 km du pont Xoi, sur la route Ho Chi Minh. Il s’ètend sur les rives de la douce rivière Dakmy. Derrière lui se trouvent les montagnes couvertes de nuages, avec un paysage paisible. Le bruit des bulles du courant de la rivière, l'eau des ruisseaux, le vent soufflant à travers les branches et le chant des oiseaux dans le ciel, rendent toujours cet endroit plein de vitalité naturelle.":
      "Cụm dân cư Pà-Căng mới cách cầu Xơi đường Hồ Chí Minh 3km đường bộ. Làng nằm bên bờ con sông Dakmy hiền hòa và phía sau là những dãy núi mây phủ sớm chiều êm đềm nên thơ. Tiếng nước chảy róc rách từ những dòng suối, tiếng gió thổi xì xào qua những rặng cây, tiếng chim kêu líu lo trên bầu trời lúc nào cũng làm cho không gian nơi đây tràn đầy sức sống tự nhiên.",
    // taskbar
    Home: "Trang chủ",
    ホームページ: "Trang chủ",
    Accueil: "Trang chủ",
    Charity: "Từ thiện",
    慈善: "Từ thiện",
    Charité: "Từ thiện",
    Sponsor: "Nhà tài trợ",
    投稿者: "Nhà tài trợ",
    Donateur: "Nhà tài trợ",
    Organisation: "Tổ chức",
    組織: "Tổ chức",
    Organization: "Tổ chức",
    Contact: "Liên hệ",
    連絡先: "Liên hệ",
    Contact: "Liên hệ",
    Donate: "Quyên góp",
    寄付: "Quyên góp",
    Don: "Quyên góp",
    Overview: "Tổng quan",
    概要: "Tổng quan",
    Aperçu: "Tổng quan",
    Plan: "Kế hoạch",
    計画: "Kế hoạch",
    Plan: "Kế hoạch",
    "Become a sponsor": "Trở thành nhà tài trợ",
    スポンサーになる: "Trở thành nhà tài trợ",
    "Devenir un sponsor": "Trở thành nhà tài trợ",
    "SPECIFIC PROGRAMS": "CÁC CHƯƠNG TRÌNH CỤ THỂ",
    具体的なプログラム: "CÁC CHƯƠNG TRÌNH CỤ THỂ",
    "PROGRAMMES SPÉCIFIQUES": "CÁC CHƯƠNG TRÌNH CỤ THỂ",

    // Project
    "A new day is starting. Dad drove mother and child to school on the motorbike, then he and mom went to work. The powerful motorbike raced across the bumpy gravel road. A couple took each other fishing with bright smiles on their faces. A wife carried a basket and went into the forest to find food. Mothers with young children stay home to take care of their children and do housework. The husbands returned from fishing together, and shared the fish with each other in joy and contentment. Primary school children are picked up by their parents after a day at school. The children voluntarily do their homework and help their parents feed the chickens. At night, the whole family gathers around a tray of silver-filled rice, warm and full of love.":
      "Một ngày mới đang bắt đầu. Bố chở hai mẹ con đến trường, trên chiếc xe máy, rồi bố cùng mẹ đi làm. Chiếc xe máy khỏe chạy băng băng trên con đường sỏi đá gập gềnh. Một vợ chồng chở nhau đi đánh cá với nụ cười tươi rói trên môi. Một người vợ mang gùi đi vào rừng kiếm thức ăn. Những người mẹ có con nhỏ ở nhà chăm con và làm việc nhà. Những người chồng cùng đi đánh bắt cá về, và chia cá cho nhau trong sự vui vẻ mãn nguyện. Trẻ em cấp một sau một ngày học ở trường được bố mẹ đón về nhà. Các em nhỏ tự giác làm bài tập, giúp bố mẹ cho gà ăn. Tối đến, cả nhà sum vầy bên mâm cơm đượm bạc, ấm áp và đầy yêu thương.",
    "新しい一日が始まります。 お父さんは母子をバイクで学校まで送り、それからお父さんとお母さんは仕事に行きました。 パワフルなバイクはでこぼこした砂利道を駆け抜けました。 カップルは明るい笑顔で釣りをしていた。 妻はかごを背負って森へ食べ物を探しに行きました。 小さな子供を持つ母親は、子供の世話や家事をするために家にいます。 夫たちは一緒に釣りから戻り、喜びと満足感を持ってお互いに魚を分け合いました。 小学生は学校で一日を過ごした後、保護者が迎えに来ます。 子どもたちは自発的に宿題をし、親が鶏に餌をあげるのを手伝います。 夜になると、家族全員が温かく愛情に満ちた銀色のご飯を囲んで集まります。":
      "Một ngày mới đang bắt đầu. Bố chở hai mẹ con đến trường, trên chiếc xe máy, rồi bố cùng mẹ đi làm. Chiếc xe máy khỏe chạy băng băng trên con đường sỏi đá gập gềnh. Một vợ chồng chở nhau đi đánh cá với nụ cười tươi rói trên môi. Một người vợ mang gùi đi vào rừng kiếm thức ăn. Những người mẹ có con nhỏ ở nhà chăm con và làm việc nhà. Những người chồng cùng đi đánh bắt cá về, và chia cá cho nhau trong sự vui vẻ mãn nguyện. Trẻ em cấp một sau một ngày học ở trường được bố mẹ đón về nhà. Các em nhỏ tự giác làm bài tập, giúp bố mẹ cho gà ăn. Tối đến, cả nhà sum vầy bên mâm cơm đượm bạc, ấm áp và đầy yêu thương.",
    "Une nouvelle journée commence. Papa a conduit la mère et l'enfant à l'école en moto, puis lui et maman sont allés travailler. La puissante moto a couru sur la route de gravier cahoteuse. Un couple s'est emmené pêcher avec des sourires éclatants sur les visages. Une femme portait un panier et partait dans la forêt pour chercher de la nourriture. Les mères de jeunes enfants restent à la maison pour s'occuper de leurs enfants et faire le ménage. Les maris revenaient de la pêche ensemble et partageaient le poisson dans la joie et le contentement. Les enfants du primaire sont récupérés par leurs parents après une journée d'école. Les enfants font volontairement leurs devoirs et aident leurs parents à nourrir les poules. Le soir, toute la famille se réunit autour d’un plateau de riz fourré à l’argent, chaleureux et plein d’amour.":
      "Một ngày mới đang bắt đầu. Bố chở hai mẹ con đến trường, trên chiếc xe máy, rồi bố cùng mẹ đi làm. Chiếc xe máy khỏe chạy băng băng trên con đường sỏi đá gập gềnh. Một vợ chồng chở nhau đi đánh cá với nụ cười tươi rói trên môi. Một người vợ mang gùi đi vào rừng kiếm thức ăn. Những người mẹ có con nhỏ ở nhà chăm con và làm việc nhà. Những người chồng cùng đi đánh bắt cá về, và chia cá cho nhau trong sự vui vẻ mãn nguyện. Trẻ em cấp một sau một ngày học ở trường được bố mẹ đón về nhà. Các em nhỏ tự giác làm bài tập, giúp bố mẹ cho gà ăn. Tối đến, cả nhà sum vầy bên mâm cơm đượm bạc, ấm áp và đầy yêu thương.",
    // -----
    "The new Pa-Cang residential cluster was established in 2017, currently there are 30 Co-Tu families living, with 57 adults and 75 children. There are 4 households with stable income. The remaining 26 households do not have jobs. Every day people go to the forest or to the river to find food and items that can be sold. Sometimes they are hired to work as masons, cut trees, and nurse trees. The average monthly income of the household is less than 1,500,000 VND. The biggest worry of people every day is lack of food and clothing, especially during the rainy season.":
      "Cụm dân cư Pà-Căng mới được thành lập năm 2017, hiện có 30 gia đình người Cơ-Tu đang sinh sống, với 57 người lớn và 75 trẻ em. Có 4 hộ có thu nhập ổn định. 26 hộ còn lại không có việc làm. Hằng ngày người dân đi vào rừng hoặc ra sông tìm thức ăn và những món có thể bán. Đôi khi họ được thuê để đi làm phụ hồ, chặt cây, ươm cây. Thu nhập trung bình tháng của hộ dưới 1.500.000 đồng. Sự lo lắng lớn nhất mỗi ngày của bà con là thiếu ăn, thiếu mặc nhất là vào những ngày mùa mưa.",
    "新しいパチャンの住宅群は 2017 年に設立され、現在は大人 57 人、子供 75 人のコトゥ家族 30 世帯が住んでいます。 安定した収入のある世帯が4世帯あります。 残りの 26 世帯には仕事がありません。 人々は毎日、食べ物や売れる物を求めて森や川へ行きます。 場合によっては、石工として働いたり、木を切ったり、木の世話をしたりするために雇われることもあります。 世帯の平均月収は 1,500,000 VND 未満です。 人々の毎日の最大の心配は、特に雨季の衣料品の不足です。":
      "Cụm dân cư Pà-Căng mới được thành lập năm 2017, hiện có 30 gia đình người Cơ-Tu đang sinh sống, với 57 người lớn và 75 trẻ em. Có 4 hộ có thu nhập ổn định. 26 hộ còn lại không có việc làm. Hằng ngày người dân đi vào rừng hoặc ra sông tìm thức ăn và những món có thể bán. Đôi khi họ được thuê để đi làm phụ hồ, chặt cây, ươm cây. Thu nhập trung bình tháng của hộ dưới 1.500.000 đồng. Sự lo lắng lớn nhất mỗi ngày của bà con là thiếu ăn, thiếu mặc nhất là vào những ngày mùa mưa.",
    "Le nouveau groupe résidentiel Pa-Cang a été créé en 2017 et compte actuellement 30 familles Co-Tu, avec 57 adultes et 75 enfants. Il y a 4 ménages avec des revenus stables. Les 26 ménages restants n'ont pas d'emploi. Chaque jour, les gens vont dans la forêt ou à la rivière pour trouver de la nourriture et des objets à vendre. Parfois, ils sont embauchés pour travailler comme maçons, couper des arbres et soigner des arbres. Le revenu mensuel moyen du ménage est inférieur à 1 500 000 VND. La plus grande préoccupation des gens au quotidien est le manque de nourriture et de vêtements, surtout pendant la saison des pluies.":
      "Cụm dân cư Pà-Căng mới được thành lập năm 2017, hiện có 30 gia đình người Cơ-Tu đang sinh sống, với 57 người lớn và 75 trẻ em. Có 4 hộ có thu nhập ổn định. 26 hộ còn lại không có việc làm. Hằng ngày người dân đi vào rừng hoặc ra sông tìm thức ăn và những món có thể bán. Đôi khi họ được thuê để đi làm phụ hồ, chặt cây, ươm cây. Thu nhập trung bình tháng của hộ dưới 1.500.000 đồng. Sự lo lắng lớn nhất mỗi ngày của bà con là thiếu ăn, thiếu mặc nhất là vào những ngày mùa mưa.",
    // ------
    "Consciente des difficultés des gens d'ici, Smile Eye Charity appelle au soutien des organisations et des individus nationaux et étrangers pour qu'ils s'associent au gouvernement pour aider les gens d'ici à améliorer leurs compétences en matière d'affaires, d'économie et de vie. Ensemble, nous pouvons rendre cet endroit plus beau et aider les gens à créer de nouvelles opportunités pour l'avenir. S'il vous plaît, rejoignez-nous et partagez votre amour avec les gens ici, pour aider cet endroit à grandir et à se propager.":
      "Nhận thấy sự khó khăn của người dân nơi đây, Smile Eye Charity kêu gọi sự hỗ trợ của các tổ chức cá nhân trong và ngoài nước cùng chung tay với cấp chính quyền, để giúp cùng bà con nơi đây nâng cao kỹ năng làm kinh tế và kỹ năng sống. Cùng chung tay, chúng ta có thể làm cho nơi này trở nên tươi đẹp hơn và giúp người dân tạo ra những cơ hội mới cho tương lai. Hãy tham gia và chia sẻ tình yêu của bạn với bà con nơi đây, để giúp nơi này phát triển và lan tỏa.",
    "ここの人々の困難を認識し、スマイル・アイ・チャリティーは、政府と協力してここの人々がビジネススキル、経済スキル、生活スキルを向上できるよう支援するよう、国内外の組織や個人に支援を求めています。 私たちは力を合わせてこの場所をより美しくし、人々が未来に向けて新たな機会を生み出すお手伝いをすることができます。 ぜひ参加して、ここの人々とあなたの愛を分かち合い、この場所の成長と広がりを助けてください。":
      "Nhận thấy sự khó khăn của người dân nơi đây, Smile Eye Charity kêu gọi sự hỗ trợ của các tổ chức cá nhân trong và ngoài nước cùng chung tay với cấp chính quyền, để giúp cùng bà con nơi đây nâng cao kỹ năng làm kinh tế và kỹ năng sống. Cùng chung tay, chúng ta có thể làm cho nơi này trở nên tươi đẹp hơn và giúp người dân tạo ra những cơ hội mới cho tương lai. Hãy tham gia và chia sẻ tình yêu của bạn với bà con nơi đây, để giúp nơi này phát triển và lan tỏa.",
    "Realizing the difficulties of the people here, Smile Eye Charity calls for the support of domestic and foreign organizations and individuals to join hands with the government to help people here improve their business skills. economics and life skills. Together, we can make this place more beautiful and help people create new opportunities for the future. Please join and share your love with the people here, to help this place grow and spread.":
      "Nhận thấy sự khó khăn của người dân nơi đây, Smile Eye Charity kêu gọi sự hỗ trợ của các tổ chức cá nhân trong và ngoài nước cùng chung tay với cấp chính quyền, để giúp cùng bà con nơi đây nâng cao kỹ năng làm kinh tế và kỹ năng sống. Cùng chung tay, chúng ta có thể làm cho nơi này trở nên tươi đẹp hơn và giúp người dân tạo ra những cơ hội mới cho tương lai. Hãy tham gia và chia sẻ tình yêu của bạn với bà con nơi đây, để giúp nơi này phát triển và lan tỏa.",
    // cac chuong trinh cu the
    "PROJECT TO SUPPORT THE CONSTRUCTION OF GARDEN ECONOMIC MODEL IN PA CANG VILLAGE":
      "DỰ ÁN HỖ TRỢ XÂY DỰNG MÔ HÌNH KINH TẾ VƯỜN Ở LÀNG PÀ CĂNG",
    パキャン村での園芸経済モデル構築を支援するプロジェクト:
      "DỰ ÁN HỖ TRỢ XÂY DỰNG MÔ HÌNH KINH TẾ VƯỜN Ở LÀNG PÀ CĂNG",
    "PROJET DE SOUTIEN À LA CONSTRUCTION D'UN MODÈLE ÉCONOMIQUE DE JARDINAGE AU VILLAGE DE PA CANG":
      "DỰ ÁN HỖ TRỢ XÂY DỰNG MÔ HÌNH KINH TẾ VƯỜN Ở LÀNG PÀ CĂNG",
    // ---
    "Le village de Pa Cang est nouveau et les ménages disposent de l'électricité et de l'eau. Chaque foyer dispose d'un espace jardin de plus de 500m2. La culture et l'élevage sont les principales occupations de la population. Cependant, les agriculteurs n’ont pas accès aux techniques agricoles. La plupart des jardins familiaux sont encore vides, avec seulement quelques arbres fruitiers. Certains poulets et porcs sont élevés naturellement. L'environnement est de plus en plus pollué car les déchets et les ordures sont déversés directement dans les jardins et les cours d'eau.":
      "Làng Pà Căng mới và các hộ gia đình có điện nước đầy đủ. Mỗi hộ có diện tích vườn trên 500m2. Trồng trọt và chăn nuôi là công việc chính của người dân. Tuy nhiên bà con chua được tiếp cận kỹ thuật nuôi trồng. Hầu hết các vườn nhà đang còn để trống, chỉ có vài cây ăn quả. Vài con gà, heo được nuôi thả thuận theo tự nhiên. Môi trường ngày càng ô nhiễm do chất thải và rác được thải trực tiếp ra vườn và suối.",
    "Pa Cang village is new and households have full electricity and water. Each household has a garden area of over 500m2. Cultivation and animal husbandry are the main occupations of the people. However, farmers do not have access to farming techniques. Most of the home gardens are still empty, with only a few fruit trees. Some chickens and pigs are raised naturally. The environment is increasingly polluted because waste and garbage are discharged directly into gardens and streams.":
      "Làng Pà Căng mới và các hộ gia đình có điện nước đầy đủ. Mỗi hộ có diện tích vườn trên 500m2. Trồng trọt và chăn nuôi là công việc chính của người dân. Tuy nhiên bà con chua được tiếp cận kỹ thuật nuôi trồng. Hầu hết các vườn nhà đang còn để trống, chỉ có vài cây ăn quả. Vài con gà, heo được nuôi thả thuận theo tự nhiên. Môi trường ngày càng ô nhiễm do chất thải và rác được thải trực tiếp ra vườn và suối.",
    "パチャン村は新しく、各家庭には電気と水道が完備されています。 各世帯には500平方メートル以上の庭面積があります。 栽培と畜産業が人々の主な職業です。 しかし、農民は農業技術を利用することができません。 ほとんどの家庭菜園はまだ空き地で、果樹が数本あるだけだ。 一部の鶏や豚は自然に飼育されています。 廃棄物やゴミが庭や小川に直接排出されるため、環境はますます汚染されています。":
      "Làng Pà Căng mới và các hộ gia đình có điện nước đầy đủ. Mỗi hộ có diện tích vườn trên 500m2. Trồng trọt và chăn nuôi là công việc chính của người dân. Tuy nhiên bà con chua được tiếp cận kỹ thuật nuôi trồng. Hầu hết các vườn nhà đang còn để trống, chỉ có vài cây ăn quả. Vài con gà, heo được nuôi thả thuận theo tự nhiên. Môi trường ngày càng ô nhiễm do chất thải và rác được thải trực tiếp ra vườn và suối.",

    "BUILDING ORGANIC FERTILIZER PRODUCTION WORKSHOP":
      "DỰ ÁN XÂY DỰNG XƯỞNG SẢN XUẤT PHÂN HỮU CƠ Ở LÀNG PÀ CĂNG GIÚP THOÁT NGHÈO",
    貧困脱却を目的にパチャン村に有機肥料生産工場を建設するプロジェクト:
      "DỰ ÁN XÂY DỰNG XƯỞNG SẢN XUẤT PHÂN HỮU CƠ Ở LÀNG PÀ CĂNG GIÚP THOÁT NGHÈO",
    "CONSTRUCTION D'UN ATELIER DE PRODUCTION D'ENGRAIS ORGANIQUE":
      "DỰ ÁN XÂY DỰNG XƯỞNG SẢN XUẤT PHÂN HỮU CƠ Ở LÀNG PÀ CĂNG GIÚP THOÁT NGHÈO",
    ///Blog
    ブログ: "Blog",
    //--
    "Pa-Ong village project in Da Nang": "Dự án làng Pà-Ong Đà Nẵng",
    ダナンのパオン村プロジェクト: "Dự án làng Pà-Ong Đà Nẵng",
    "Projet du village Pa-Ong à Da Nang": "Dự án làng Pà-Ong Đà Nẵng",
    //--
    "Les étudiants pauvres viennent de conditions difficiles, principalement dans les zones montagneuses. Autres cas d'élèves rencontrant des difficultés particulières":
      "Học sinh nghèo có hoàn cảnh khó khăn, chủ yếu là ở vùng cao. Các trường hợp học sinh gặp khó khăn đặc biệt khác",
    "貧しい学生は、主に高地地域で困難な環境に住んでいます。 特別な困難を抱えた学生のその他のケース":
      "Học sinh nghèo có hoàn cảnh khó khăn, chủ yếu là ở vùng cao. Các trường hợp học sinh gặp khó khăn đặc biệt khác",
    "Poor students come from difficult circumstances, mainly in highland areas. Other cases of students having special difficulties":
      "Học sinh nghèo có hoàn cảnh khó khăn, chủ yếu là ở vùng cao. Các trường hợp học sinh gặp khó khăn đặc biệt khác",

    //Nha Sang Lap
    CONTRIBUTOR: "Nhà Đóng Góp",
    投稿者: "Nhà Đóng Góp",
    DONATEUR: "Nhà Đóng Góp",
    "CHARITABLE CONTRIBUTION": "ĐÓNG GÓP TỪ THIỆN",
    慈善寄付: "ĐÓNG GÓP TỪ THIỆN",
    "CONTRIBUTION CARITATIVE": "ĐÓNG GÓP TỪ THIỆN",
    FOUNDER: "NGƯỜI SÁNG LẬP",
    設立者: "NGƯỜI SÁNG LẬP",
    FONDATEUR: "NGƯỜI SÁNG LẬP",
    //---
    "Mme Dinh Thi Dong Phuong est chargée de cours à l'Université VKU au Vietnam. Elle est présidente de la matière informatique à l'école. La matière informatique est une matière approfondie dans le domaine des technologies de l'information. Ce cours est conçu pour fournir des connaissances et des compétences approfondies sur les questions liées aux technologies de l'information, y compris les dernières tendances et technologies avancées.Analyse et conception Conception de systèmes : elle enseignera les méthodes et techniques d'analyse et de conception des systèmes d'information, de la détermination des exigences à la construction. modèles de systèmes.Développement d'applications : elle guidera les étudiants dans le processus de développement de logiciels, y compris la sélection du langage de programmation, la gestion de projet, les tests et le déploiement d'applications.":
      "Cô Đinh Thị Đông Phương là giảng viên tại trường Đại học VKU tại Việt Nam. Cô là người chủ trì môn học Chuyên đề IT tại trường.Môn học Chuyên đề IT là một môn học chuyên sâu trong lĩnh vực Công nghệ thông tin. Môn học này được thiết kế nhằm cung cấp kiến thức và kỹ năng chuyên môn sâu về các vấn đề liên quan đến công nghệ thông tin, trong đó bao gồm cả các xu hướng mới nhất và các công nghệ tiên tiến.Phân tích và thiết kế hệ thống: Cô sẽ giảng dạy về các phương pháp và kỹ thuật phân tích, thiết kế hệ thống thông tin, từ việc xác định yêu cầu đến xây dựng mô hình hệ thống.Phát triển ứng dụng: Cô sẽ hướng dẫn sinh viên về quy trình phát triển phần mềm, bao gồm việc lựa chọn ngôn ngữ lập trình, quản lý dự án, kiểm thử và triển khai ứng dụng.",
    "ディン・ティ・ドン・フオン女史は、ベトナムの VKU 大学の講師です。 彼女は学校の IT 科目の議長を務めており、IT 科目は情報技術の分野における詳細な科目です。 最新動向や先端技術など、情報技術に関する深い知識と技術を修得するコースです 分析・設計 システム設計：情報システムの分析・設計の手法や技術を要件定義から学びます。アプリケーション開発: プログラミング言語の選択、プロジェクト管理、テスト、アプリケーションの展開などのソフトウェア開発プロセスについて学生を指導します。":
      "Cô Đinh Thị Đông Phương là giảng viên tại trường Đại học VKU tại Việt Nam. Cô là người chủ trì môn học Chuyên đề IT tại trường.Môn học Chuyên đề IT là một môn học chuyên sâu trong lĩnh vực Công nghệ thông tin. Môn học này được thiết kế nhằm cung cấp kiến thức và kỹ năng chuyên môn sâu về các vấn đề liên quan đến công nghệ thông tin, trong đó bao gồm cả các xu hướng mới nhất và các công nghệ tiên tiến.Phân tích và thiết kế hệ thống: Cô sẽ giảng dạy về các phương pháp và kỹ thuật phân tích, thiết kế hệ thống thông tin, từ việc xác định yêu cầu đến xây dựng mô hình hệ thống.Phát triển ứng dụng: Cô sẽ hướng dẫn sinh viên về quy trình phát triển phần mềm, bao gồm việc lựa chọn ngôn ngữ lập trình, quản lý dự án, kiểm thử và triển khai ứng dụng.",
    "Ms. Dinh Thi Dong Phuong is a lecturer at VKU University in Vietnam. She is the chair of the IT subject at the school. The IT subject is an in-depth subject in the field of Information Technology. This course is designed to provide in-depth knowledge and skills on information technology-related issues, including the latest trends and cutting-edge technologies. Analysis and design System design: She will teach information system analysis and design methods and techniques, from determining requirements to building system models. Application development: She will guide students about the software development process, including programming language selection, project management, testing, and application deployment.":
      "Cô Đinh Thị Đông Phương là giảng viên tại trường Đại học VKU tại Việt Nam. Cô là người chủ trì môn học Chuyên đề IT tại trường.Môn học Chuyên đề IT là một môn học chuyên sâu trong lĩnh vực Công nghệ thông tin. Môn học này được thiết kế nhằm cung cấp kiến thức và kỹ năng chuyên môn sâu về các vấn đề liên quan đến công nghệ thông tin, trong đó bao gồm cả các xu hướng mới nhất và các công nghệ tiên tiến.Phân tích và thiết kế hệ thống: Cô sẽ giảng dạy về các phương pháp và kỹ thuật phân tích, thiết kế hệ thống thông tin, từ việc xác định yêu cầu đến xây dựng mô hình hệ thống.Phát triển ứng dụng: Cô sẽ hướng dẫn sinh viên về quy trình phát triển phần mềm, bao gồm việc lựa chọn ngôn ngữ lập trình, quản lý dự án, kiểm thử và triển khai ứng dụng.",

    //---
    "Cyber Security: She will impart knowledge on issues related to cyber security, including information security, cyber attack prevention, and risk management. New Technology: She will update students with the latest trends in the IT sector, including artificial intelligence, machine learning, blockchain, IoT and other technologies.":
      "An ninh mạng: Cô sẽ truyền đạt kiến thức về các vấn đề liên quan đến an ninh mạng, bao gồm bảo mật thông tin, phòng chống tấn công mạng và quản lý rủi ro.Công nghệ mới: Cô sẽ cập nhật sinh viên với các xu hướng mới nhất trong lĩnh vực Công nghệ thông tin, bao gồm trí tuệ nhân tạo, học máy, blockchain, IoT và các công nghệ khác.",
    "サイバーセキュリティ: 情報セキュリティ、サイバー攻撃の防止、リスク管理など、サイバーセキュリティに関連する問題に関する知識を伝えます 新しいテクノロジー: 人工知能、機械学習などの IT 分野の最新トレンドを学生に提供します、ブロックチェーン、IoT、その他のテクノロジー。":
      "An ninh mạng: Cô sẽ truyền đạt kiến thức về các vấn đề liên quan đến an ninh mạng, bao gồm bảo mật thông tin, phòng chống tấn công mạng và quản lý rủi ro.Công nghệ mới: Cô sẽ cập nhật sinh viên với các xu hướng mới nhất trong lĩnh vực Công nghệ thông tin, bao gồm trí tuệ nhân tạo, học máy, blockchain, IoT và các công nghệ khác.",
    "Cyber ​​​​sécurité : elle transmettra des connaissances sur les questions liées à la cybersécurité, notamment la sécurité de l'information, la prévention des cyberattaques et la gestion des risques. Nouvelles technologies : elle mettra à jour les étudiants avec les dernières tendances du secteur informatique, notamment l'intelligence artificielle, l'apprentissage automatique. , blockchain, IoT et autres technologies.":
      "An ninh mạng: Cô sẽ truyền đạt kiến thức về các vấn đề liên quan đến an ninh mạng, bao gồm bảo mật thông tin, phòng chống tấn công mạng và quản lý rủi ro.Công nghệ mới: Cô sẽ cập nhật sinh viên với các xu hướng mới nhất trong lĩnh vực Công nghệ thông tin, bao gồm trí tuệ nhân tạo, học máy, blockchain, IoT và các công nghệ khác.",
    // cac chuong trinh dang thuc hien
    "PROGRAMS ARE RUNNING": "CÁC CHƯƠNG TRÌNH ĐANG THỰC HIỆN",
    実行中のプログラム: "CÁC CHƯƠNG TRÌNH ĐANG THỰC HIỆN",
    "PROGRAMMES EN COURS": "CÁC CHƯƠNG TRÌNH ĐANG THỰC HIỆN",
    //Footer
    私たちの場所: "Our location",
    お電話ください: "Call us",
    私たちのメール: "Our Email",
    エコファイン: "Ecofine",
    クイックリンク: "Quick Link",
    最近のニュース: "Recent News",
    ニュースレター: "Newsletter",
    ボランティア: "Volunteer",
    地球温暖化: "Global Warning",
    気候適応: "Climate Adaptation",
    都市計画: "Urban planning",
    エネルギー: "Energy Consulting",
    //--
    "経済、条件、教育の格差のない社会を目指して力を合わせましょう":
      "Cùng chung tay vì một xã hội không còn những khoảng cách về kinh tế, điều kiện và giáo dục",
    "Let's join hands for a society that no longer has gaps in economics, conditions and education":
      "Cùng chung tay vì một xã hội không còn những khoảng cách về kinh tế, điều kiện và giáo dục",
    "Unissons-nous pour une société qui n'a plus de lacunes en matière d'économie, de conditions de vie et d'éducation.":
      "Cùng chung tay vì một xã hội không còn những khoảng cách về kinh tế, điều kiện và giáo dục",
    //--
    "Upland Poverty Fund": "Quỹ trò nghèo vùng cao",
    高地貧困基金: "Quỹ trò nghèo vùng cao",
    "Fonds de pauvreté des": "Quỹ trò nghèo vùng cao",
    //--
    "Your contributions are very important for the completion and development of this project.":
      "Những đóng góp của bạn rất quan trọng cho quá trình hoàn thiện và phát triển cho dự án này.",
    "あなたの貢献は、このプロジェクトの完了と発展にとって非常に重要です。":
      "Những đóng góp của bạn rất quan trọng cho quá trình hoàn thiện và phát triển cho dự án này.",
    "Vos contributions sont très importantes pour la réalisation et le développement de ce projet.":
      "Những đóng góp của bạn rất quan trọng cho quá trình hoàn thiện và phát triển cho dự án này.",
    //share
    Share: "Chia sẻ",
    Partager: "Chia sẻ",
    共有: "Chia sẻ",

    "Share with": "Chia sẻ với",
    と共有する: "Chia sẻ với",
    "Partager avec": "Chia sẻ với",

    "Or copy the link below": "Hoặc copy link dưới",
    "または、以下のリンクをコピーしてください": "Hoặc copy link dưới",
    "Ou copiez le lien ci-dessous": "Hoặc copy link dưới",

    Copie: "Sao chép",
    Copy: "Sao chép",
    コピー: "Sao chép",

    //form
    "Account number:": "Số tài khoản:",
    "口座番号：": "Số tài khoản:",
    "Numéro de compte:": "Số tài khoản:",

    "Smile Eye Charity, abbreviated as Smile Eye Charity, is a non-profit company. Smile Eye Charity connects domestic and foreign resources to organize practical training programs, accompany, and support people in difficult areas. Training programs aim to help people improve their life and economic skills in a sustainable way.":
      "Công ty hoạt động từ thiện Smile Eye Charity, viết tắt là Smile Eye Charity, là công ty phi lợi nhuận. Smile Eye Charity kết nối các nguồn lực trong và ngoài nước để tổ chức các chương trình đào tạo thực tế, đồng hành, và hỗ trợ người dân ở các khu vực còn nhiều khó khăn. Các chương trình đào tạo nhằm mục đích giúp người dân nâng cao kỹ năng sống và kỹ năng làm kinh tế một cách bền vững.",
    "Smile Eye Charity, en abrégé Smile Eye Charity, est une société à but non lucratif. Smile Eye Charity met en relation des ressources nationales et étrangères pour organiser des programmes de formation pratique, accompagner et soutenir les personnes dans des zones difficiles. Les programmes de formation visent à aider les gens à améliorer leurs compétences de vie et économiques de manière durable.":
      "Công ty hoạt động từ thiện Smile Eye Charity, viết tắt là Smile Eye Charity, là công ty phi lợi nhuận. Smile Eye Charity kết nối các nguồn lực trong và ngoài nước để tổ chức các chương trình đào tạo thực tế, đồng hành, và hỗ trợ người dân ở các khu vực còn nhiều khó khăn. Các chương trình đào tạo nhằm mục đích giúp người dân nâng cao kỹ năng sống và kỹ năng làm kinh tế một cách bền vững.",
    "Smile Eye Charity (略称 Smile Eye Charity) は非営利企業です。 Smile Eye Charity は国内外のリソースを結びつけ、実践的なトレーニング プログラムを企画し、困難な地域にいる人々に同行し、支援します。 研修プログラムは、人々が持続可能な方法で生活と経済スキルを向上できるよう支援することを目的としています。":
      "Công ty hoạt động từ thiện Smile Eye Charity, viết tắt là Smile Eye Charity, là công ty phi lợi nhuận. Smile Eye Charity kết nối các nguồn lực trong và ngoài nước để tổ chức các chương trình đào tạo thực tế, đồng hành, và hỗ trợ người dân ở các khu vực còn nhiều khó khăn. Các chương trình đào tạo nhằm mục đích giúp người dân nâng cao kỹ năng sống và kỹ năng làm kinh tế một cách bền vững.",

    "Company information:": "Thông tin công ty:",
    "企業情報：": "Thông tin công ty:",
    "Informations sur la société:": "Thông tin công ty:",

    "Name:": "Tên:",
    "Nom:": "Tên:",
    "名前：": "Tên:",

    "Non-profit charitable company Smile Eye Charity, abbreviated as Smile Eye Charity":
      "Công ty phi lợi nhuận hoạt động từ thiện Smile Eye Charity, viết tắt là Smile Eye Charity",
    "Entreprise caritative à but non lucratif Smile Eye Charity, en abrégé Smile Eye Charity":
      "Công ty phi lợi nhuận hoạt động từ thiện Smile Eye Charity, viết tắt là Smile Eye Charity",
    "非営利慈善団体Smile Eye Charity、略称Smile Eye Charity":
      "Công ty phi lợi nhuận hoạt động từ thiện Smile Eye Charity, viết tắt là Smile Eye Charity",

    "Giấy phép đăng ký:": "Giấy phép đăng ký:",
    "ライセンス登録：": "Giấy phép đăng ký:",
    "Enregistrement de licence:": "Giấy phép đăng ký:",

    "Address:": "Địa chỉ:",
    "Adresse:": "Địa chỉ:",
    "住所：": "Địa chỉ:",

    "Representative:": "Người đại diện:",
    "代表：": "Người đại diện:",
    "Représentant:": "Người đại diện:",

    "Phone:": "Điện thoại:",
    "Téléphone:": "Điện thoại:",
    "電話：": "Điện thoại:",

    Contact: "Liên Hệ",
    接触: "Liên Hệ",
    Contact: "Liên Hệ",

    "Content*": "Nội dung*",
    "Contenu*": "Nội dung*",
    "コンテンツ*": "Nội dung*",

    "Nom et prénom*": "Họ và tên*",
    "First and last name*": "Họ và tên*",
    "名前と苗字*": "Họ và tên*",

    "Phone number:": "Số điện thoại:",
    "Numéro de téléphone:": "Số điện thoại:",
    "電話番号：": "Số điện thoại:",

    Send: "Gửi",
    送信: "Gửi",
    Envoyer: "Gửi",

    "Eメール*": "Email*",
  },
  JAPAN: {
    "DEVELOPING NEW PA-CANG VILLAGE, CA DY COMMUNE, NAM GIANG DISTRICT":
      "ベトナムのコトゥ民族のパキャン村の 持続可能な発展",
    "PHÁT TRIỂN CỤM DÂN CƯ PÀ-CĂNG MỚI, THÔN PÀ ONG, XÃ CÀ DY, HUYỆN NAM GIANG":
      "ベトナムのコトゥ民族のパキャン村の 持続可能な発展",
    "Village Pa Cang du peuple Cotu au Vietnamle développement durable":
      "ベトナムのコトゥ民族のパキャン村の 持続可能な発展",
    "The new Pa-Cang residential cluster is 3km by road from Xoi bridge on Ho Chi Minh Road. The village is located on the banks of the gentle Dakmy River. Behind the village is the cloud-covered mountains with peaceful scenary. The sound of bubbling water from streams, the wind blowing through the trees, and the chirping of birds in the sky always make the space here full of natural vitality.":
      "新しいパキャン住宅群は、ホーチミン道路のソイ橋から歩いて 3 km の場所にあります。 村は穏やかなダクミー川のほとりにあります。 村の後ろには雲に覆われた山々があり、のどかな風景が広がっています。 小川のせせらぎの音、木々を吹き抜ける風、そして空を飛ぶ鳥のさえずりが、ここの空間は常に自然の生命力に満ちています。",
    "Cụm dân cư Pà-Căng mới cách cầu Xơi đường Hồ Chí Minh 3km đường bộ. Làng nằm bên bờ con sông Dakmy hiền hòa và phía sau là những dãy núi mây phủ sớm chiều êm đềm nên thơ. Tiếng nước chảy róc rách từ những dòng suối, tiếng gió thổi xì xào qua những rặng cây, tiếng chim kêu líu lo trên bầu trời lúc nào cũng làm cho không gian nơi đây tràn đầy sức sống tự nhiên.":
      "新しいパキャン住宅群は、ホーチミン道路のソイ橋から歩いて 3 km の場所にあります。 村は穏やかなダクミー川のほとりにあります。 村の後ろには雲に覆われた山々があり、のどかな風景が広がっています。 小川のせせらぎの音、木々を吹き抜ける風、そして空を飛ぶ鳥のさえずりが、ここの空間は常に自然の生命力に満ちています。",
    "Nous sommes au centre du Vietnam, près de Da Nang. Le village de montagne Pa-Cang se trouve à 3 km du pont Xoi, sur la route Ho Chi Minh. Il s’ètend sur les rives de la douce rivière Dakmy. Derrière lui se trouvent les montagnes couvertes de nuages, avec un paysage paisible. Le bruit des bulles du courant de la rivière, l'eau des ruisseaux, le vent soufflant à travers les branches et le chant des oiseaux dans le ciel, rendent toujours cet endroit plein de vitalité naturelle.":
      "新しいパキャン住宅群は、ホーチミン道路のソイ橋から歩いて 3 km の場所にあります。 村は穏やかなダクミー川のほとりにあります。 村の後ろには雲に覆われた山々があり、のどかな風景が広がっています。 小川のせせらぎの音、木々を吹き抜ける風、そして空を飛ぶ鳥のさえずりが、ここの空間は常に自然の生命力に満ちています。",
    // taskbar
    Home: "ホームページ",
    Accueil: "ホームページ",
    "Trang chủ": "ホームページ",
    Charity: "慈善",
    Charité: "慈善",
    "Từ thiện": "慈善",
    Sponsor: "投稿者",
    Donateur: "投稿者",
    "Nhà tài trợ": "投稿者",
    Organisation: "組織",
    Organization: "組織",
    "Tổ chức": "組織",
    Contact: "連絡先",
    Contact: "連絡先",
    "Liên hệ": "連絡先",
    Donate: "寄付",
    Don: "寄付",
    "Quyên góp": "寄付",
    Overview: "概要",
    Aperçu: "概要",
    "Tổng quan": "概要",
    Plan: "計画",
    Plan: "計画",
    "Kế hoạch": "計画",
    "Become a sponsor": "スポンサーになる",
    "Devenir un sponsor": "スポンサーになる",
    "Trở thành nhà tài trợ": "スポンサーになる",
    "SPECIFIC PROGRAMS": "具体的なプログラム",
    "CÁC CHƯƠNG TRÌNH CỤ THỂ": "具体的なプログラム",
    "PROGRAMMES SPÉCIFIQUES": "具体的なプログラム",

    // project
    "Une nouvelle journée commence. Papa a conduit la mère et l'enfant à l'école en moto, puis lui et maman sont allés travailler. La puissante moto a couru sur la route de gravier cahoteuse. Un couple s'est emmené pêcher avec des sourires éclatants sur les visages. Une femme portait un panier et partait dans la forêt pour chercher de la nourriture. Les mères de jeunes enfants restent à la maison pour s'occuper de leurs enfants et faire le ménage. Les maris revenaient de la pêche ensemble et partageaient le poisson dans la joie et le contentement. Les enfants du primaire sont récupérés par leurs parents après une journée d'école. Les enfants font volontairement leurs devoirs et aident leurs parents à nourrir les poules. Le soir, toute la famille se réunit autour d’un plateau de riz fourré à l’argent, chaleureux et plein d’amour.":
      "新しい一日が始まります。 お父さんは母子をバイクで学校まで送り、それからお父さんとお母さんは仕事に行きました。 パワフルなバイクはでこぼこした砂利道を駆け抜けました。 カップルは明るい笑顔で釣りをしていた。 妻はかごを背負って森へ食べ物を探しに行きました。 小さな子供を持つ母親は、子供の世話や家事をするために家にいます。 夫たちは一緒に釣りから戻り、喜びと満足感を持ってお互いに魚を分け合いました。 小学生は学校で一日を過ごした後、保護者が迎えに来ます。 子どもたちは自発的に宿題をし、親が鶏に餌をあげるのを手伝います。 夜になると、家族全員が温かく愛情に満ちた銀色のご飯を囲んで集まります。",
    "A new day is starting. Dad drove mother and child to school on the motorbike, then he and mom went to work. The powerful motorbike raced across the bumpy gravel road. A couple took each other fishing with bright smiles on their faces. A wife carried a basket and went into the forest to find food. Mothers with young children stay home to take care of their children and do housework. The husbands returned from fishing together, and shared the fish with each other in joy and contentment. Primary school children are picked up by their parents after a day at school. The children voluntarily do their homework and help their parents feed the chickens. At night, the whole family gathers around a tray of silver-filled rice, warm and full of love.":
      "新しい一日が始まります。 お父さんは母子をバイクで学校まで送り、それからお父さんとお母さんは仕事に行きました。 パワフルなバイクはでこぼこした砂利道を駆け抜けました。 カップルは明るい笑顔で釣りをしていた。 妻はかごを背負って森へ食べ物を探しに行きました。 小さな子供を持つ母親は、子供の世話や家事をするために家にいます。 夫たちは一緒に釣りから戻り、喜びと満足感を持ってお互いに魚を分け合いました。 小学生は学校で一日を過ごした後、保護者が迎えに来ます。 子どもたちは自発的に宿題をし、親が鶏に餌をあげるのを手伝います。 夜になると、家族全員が温かく愛情に満ちた銀色のご飯を囲んで集まります。",
    "Một ngày mới đang bắt đầu. Bố chở hai mẹ con đến trường, trên chiếc xe máy, rồi bố cùng mẹ đi làm. Chiếc xe máy khỏe chạy băng băng trên con đường sỏi đá gập gềnh. Một vợ chồng chở nhau đi đánh cá với nụ cười tươi rói trên môi. Một người vợ mang gùi đi vào rừng kiếm thức ăn. Những người mẹ có con nhỏ ở nhà chăm con và làm việc nhà. Những người chồng cùng đi đánh bắt cá về, và chia cá cho nhau trong sự vui vẻ mãn nguyện. Trẻ em cấp một sau một ngày học ở trường được bố mẹ đón về nhà. Các em nhỏ tự giác làm bài tập, giúp bố mẹ cho gà ăn. Tối đến, cả nhà sum vầy bên mâm cơm đượm bạc, ấm áp và đầy yêu thương.":
      "新しい一日が始まります。 お父さんは母子をバイクで学校まで送り、それからお父さんとお母さんは仕事に行きました。 パワフルなバイクはでこぼこした砂利道を駆け抜けました。 カップルは明るい笑顔で釣りをしていた。 妻はかごを背負って森へ食べ物を探しに行きました。 小さな子供を持つ母親は、子供の世話や家事をするために家にいます。 夫たちは一緒に釣りから戻り、喜びと満足感を持ってお互いに魚を分け合いました。 小学生は学校で一日を過ごした後、保護者が迎えに来ます。 子どもたちは自発的に宿題をし、親が鶏に餌をあげるのを手伝います。 夜になると、家族全員が温かく愛情に満ちた銀色のご飯を囲んで集まります。",
    // -----
    "Le nouveau groupe résidentiel Pa-Cang a été créé en 2017 et compte actuellement 30 familles Co-Tu, avec 57 adultes et 75 enfants. Il y a 4 ménages avec des revenus stables. Les 26 ménages restants n'ont pas d'emploi. Chaque jour, les gens vont dans la forêt ou à la rivière pour trouver de la nourriture et des objets à vendre. Parfois, ils sont embauchés pour travailler comme maçons, couper des arbres et soigner des arbres. Le revenu mensuel moyen du ménage est inférieur à 1 500 000 VND. La plus grande préoccupation des gens au quotidien est le manque de nourriture et de vêtements, surtout pendant la saison des pluies.":
      "新しいパチャンの住宅群は 2017 年に設立され、現在は大人 57 人、子供 75 人のコトゥ家族 30 世帯が住んでいます。 安定した収入のある世帯が4世帯あります。 残りの 26 世帯には仕事がありません。 人々は毎日、食べ物や売れる物を求めて森や川へ行きます。 場合によっては、石工として働いたり、木を切ったり、木の世話をしたりするために雇われることもあります。 世帯の平均月収は 1,500,000 VND 未満です。 人々の毎日の最大の心配は、特に雨季の衣料品の不足です。",
    "Cụm dân cư Pà-Căng mới được thành lập năm 2017, hiện có 30 gia đình người Cơ-Tu đang sinh sống, với 57 người lớn và 75 trẻ em. Có 4 hộ có thu nhập ổn định. 26 hộ còn lại không có việc làm. Hằng ngày người dân đi vào rừng hoặc ra sông tìm thức ăn và những món có thể bán. Đôi khi họ được thuê để đi làm phụ hồ, chặt cây, ươm cây. Thu nhập trung bình tháng của hộ dưới 1.500.000 đồng. Sự lo lắng lớn nhất mỗi ngày của bà con là thiếu ăn, thiếu mặc nhất là vào những ngày mùa mưa.":
      "新しいパチャンの住宅群は 2017 年に設立され、現在は大人 57 人、子供 75 人のコトゥ家族 30 世帯が住んでいます。 安定した収入のある世帯が4世帯あります。 残りの 26 世帯には仕事がありません。 人々は毎日、食べ物や売れる物を求めて森や川へ行きます。 場合によっては、石工として働いたり、木を切ったり、木の世話をしたりするために雇われることもあります。 世帯の平均月収は 1,500,000 VND 未満です。 人々の毎日の最大の心配は、特に雨季の衣料品の不足です。",
    "The new Pa-Cang residential cluster was established in 2017, currently there are 30 Co-Tu families living, with 57 adults and 75 children. There are 4 households with stable income. The remaining 26 households do not have jobs. Every day people go to the forest or to the river to find food and items that can be sold. Sometimes they are hired to work as masons, cut trees, and nurse trees. The average monthly income of the household is less than 1,500,000 VND. The biggest worry of people every day is lack of food and clothing, especially during the rainy season.":
      "新しいパチャンの住宅群は 2017 年に設立され、現在は大人 57 人、子供 75 人のコトゥ家族 30 世帯が住んでいます。 安定した収入のある世帯が4世帯あります。 残りの 26 世帯には仕事がありません。 人々は毎日、食べ物や売れる物を求めて森や川へ行きます。 場合によっては、石工として働いたり、木を切ったり、木の世話をしたりするために雇われることもあります。 世帯の平均月収は 1,500,000 VND 未満です。 人々の毎日の最大の心配は、特に雨季の衣料品の不足です。",
    // -----
    "Consciente des difficultés des gens d'ici, Smile Eye Charity appelle au soutien des organisations et des individus nationaux et étrangers pour qu'ils s'associent au gouvernement pour aider les gens d'ici à améliorer leurs compétences en matière d'affaires, d'économie et de vie. Ensemble, nous pouvons rendre cet endroit plus beau et aider les gens à créer de nouvelles opportunités pour l'avenir. S'il vous plaît, rejoignez-nous et partagez votre amour avec les gens ici, pour aider cet endroit à grandir et à se propager.":
      "ここの人々の困難を認識し、スマイル・アイ・チャリティーは、政府と協力してここの人々がビジネススキル、経済スキル、生活スキルを向上できるよう支援するよう、国内外の組織や個人に支援を求めています。 私たちは力を合わせてこの場所をより美しくし、人々が未来に向けて新たな機会を生み出すお手伝いをすることができます。 ぜひ参加して、ここの人々とあなたの愛を分かち合い、この場所の成長と広がりを助けてください。",
    "Realizing the difficulties of the people here, Smile Eye Charity calls for the support of domestic and foreign organizations and individuals to join hands with the government to help people here improve their business skills. economics and life skills. Together, we can make this place more beautiful and help people create new opportunities for the future. Please join and share your love with the people here, to help this place grow and spread.":
      "ここの人々の困難を認識し、スマイル・アイ・チャリティーは、政府と協力してここの人々がビジネススキル、経済スキル、生活スキルを向上できるよう支援するよう、国内外の組織や個人に支援を求めています。 私たちは力を合わせてこの場所をより美しくし、人々が未来に向けて新たな機会を生み出すお手伝いをすることができます。 ぜひ参加して、ここの人々とあなたの愛を分かち合い、この場所の成長と広がりを助けてください。",
    "Nhận thấy sự khó khăn của người dân nơi đây, Smile Eye Charity kêu gọi sự hỗ trợ của các tổ chức cá nhân trong và ngoài nước cùng chung tay với cấp chính quyền, để giúp cùng bà con nơi đây nâng cao kỹ năng làm kinh tế và kỹ năng sống. Cùng chung tay, chúng ta có thể làm cho nơi này trở nên tươi đẹp hơn và giúp người dân tạo ra những cơ hội mới cho tương lai. Hãy tham gia và chia sẻ tình yêu của bạn với bà con nơi đây, để giúp nơi này phát triển và lan tỏa.":
      "ここの人々の困難を認識し、スマイル・アイ・チャリティーは、政府と協力してここの人々がビジネススキル、経済スキル、生活スキルを向上できるよう支援するよう、国内外の組織や個人に支援を求めています。 私たちは力を合わせてこの場所をより美しくし、人々が未来に向けて新たな機会を生み出すお手伝いをすることができます。 ぜひ参加して、ここの人々とあなたの愛を分かち合い、この場所の成長と広がりを助けてください。",
    // cac chuong trinh cu the
    "DỰ ÁN HỖ TRỢ XÂY DỰNG MÔ HÌNH KINH TẾ VƯỜN Ở LÀNG PÀ CĂNG":
      "パキャン村での園芸経済モデル構築を支援するプロジェクト",
    "PROJECT TO SUPPORT THE CONSTRUCTION OF GARDEN ECONOMIC MODEL IN PA CANG VILLAGE":
      "パキャン村での園芸経済モデル構築を支援するプロジェクト",
    "PROJET DE SOUTIEN À LA CONSTRUCTION D'UN MODÈLE ÉCONOMIQUE DE JARDINAGE AU VILLAGE DE PA CANG":
      "パキャン村での園芸経済モデル構築を支援するプロジェクト",
    //---
    "Làng Pà Căng mới và các hộ gia đình có điện nước đầy đủ. Mỗi hộ có diện tích vườn trên 500m2. Trồng trọt và chăn nuôi là công việc chính của người dân. Tuy nhiên bà con chua được tiếp cận kỹ thuật nuôi trồng. Hầu hết các vườn nhà đang còn để trống, chỉ có vài cây ăn quả. Vài con gà, heo được nuôi thả thuận theo tự nhiên. Môi trường ngày càng ô nhiễm do chất thải và rác được thải trực tiếp ra vườn và suối.":
      "パチャン村は新しく、各家庭には電気と水道が完備されています。 各世帯には500平方メートル以上の庭面積があります。 栽培と畜産業が人々の主な職業です。 しかし、農民は農業技術を利用することができません。 ほとんどの家庭菜園はまだ空き地で、果樹が数本あるだけだ。 一部の鶏や豚は自然に飼育されています。 廃棄物やゴミが庭や小川に直接排出されるため、環境はますます汚染されています。",
    "Le village de Pa Cang est nouveau et les ménages disposent de l'électricité et de l'eau. Chaque foyer dispose d'un espace jardin de plus de 500m2. La culture et l'élevage sont les principales occupations de la population. Cependant, les agriculteurs n’ont pas accès aux techniques agricoles. La plupart des jardins familiaux sont encore vides, avec seulement quelques arbres fruitiers. Certains poulets et porcs sont élevés naturellement. L'environnement est de plus en plus pollué car les déchets et les ordures sont déversés directement dans les jardins et les cours d'eau.":
      "パチャン村は新しく、各家庭には電気と水道が完備されています。 各世帯には500平方メートル以上の庭面積があります。 栽培と畜産業が人々の主な職業です。 しかし、農民は農業技術を利用することができません。 ほとんどの家庭菜園はまだ空き地で、果樹が数本あるだけだ。 一部の鶏や豚は自然に飼育されています。 廃棄物やゴミが庭や小川に直接排出されるため、環境はますます汚染されています。",
    "Pa Cang village is new and households have full electricity and water. Each household has a garden area of over 500m2. Cultivation and animal husbandry are the main occupations of the people. However, farmers do not have access to farming techniques. Most of the home gardens are still empty, with only a few fruit trees. Some chickens and pigs are raised naturally. The environment is increasingly polluted because waste and garbage are discharged directly into gardens and streams.":
      "パチャン村は新しく、各家庭には電気と水道が完備されています。 各世帯には500平方メートル以上の庭面積があります。 栽培と畜産業が人々の主な職業です。 しかし、農民は農業技術を利用することができません。 ほとんどの家庭菜園はまだ空き地で、果樹が数本あるだけだ。 一部の鶏や豚は自然に飼育されています。 廃棄物やゴミが庭や小川に直接排出されるため、環境はますます汚染されています。",

    "BUILDING ORGANIC FERTILIZER PRODUCTION WORKSHOP":
      "貧困脱却を目的にパチャン村に有機肥料生産工場を建設するプロジェクト",
    "DỰ ÁN XÂY DỰNG XƯỞNG SẢN XUẤT PHÂN HỮU CƠ Ở LÀNG PÀ CĂNG GIÚP THOÁT NGHÈO":
      "貧困脱却を目的にパチャン村に有機肥料生産工場を建設するプロジェクト",
    "CONSTRUCTION D'UN ATELIER DE PRODUCTION D'ENGRAIS ORGANIQUE":
      "貧困脱却を目的にパチャン村に有機肥料生産工場を建設するプロジェクト",
    CONTRIBUTOR: "投稿者",
    "Nhà Đóng Góp": "投稿者",
    DONATEUR: "投稿者",
    "CHARITABLE CONTRIBUTION": "慈善寄付",
    "ĐÓNG GÓP TỪ THIỆN": "慈善寄付",
    "CONTRIBUTION CARITATIVE": "慈善寄付",
    FOUNDER: "設立者",
    "NGƯỜI SÁNG LẬP": "設立者",
    FONDATEUR: "設立者",
    //--
    "Mme Dinh Thi Dong Phuong est chargée de cours à l'Université VKU au Vietnam. Elle est présidente de la matière informatique à l'école. La matière informatique est une matière approfondie dans le domaine des technologies de l'information. Ce cours est conçu pour fournir des connaissances et des compétences approfondies sur les questions liées aux technologies de l'information, y compris les dernières tendances et technologies avancées.Analyse et conception Conception de systèmes : elle enseignera les méthodes et techniques d'analyse et de conception des systèmes d'information, de la détermination des exigences à la construction. modèles de systèmes.Développement d'applications : elle guidera les étudiants dans le processus de développement de logiciels, y compris la sélection du langage de programmation, la gestion de projet, les tests et le déploiement d'applications.":
      "ディン・ティ・ドン・フオン女史は、ベトナムの VKU 大学の講師です。 彼女は学校の IT 科目の議長を務めており、IT 科目は情報技術の分野における詳細な科目です。 最新動向や先端技術など、情報技術に関する深い知識と技術を修得するコースです 分析・設計 システム設計：情報システムの分析・設計の手法や技術を要件定義から学びます。アプリケーション開発: プログラミング言語の選択、プロジェクト管理、テスト、アプリケーションの展開などのソフトウェア開発プロセスについて学生を指導します。",
    "Ms. Dinh Thi Dong Phuong is a lecturer at VKU University in Vietnam. She is the chair of the IT subject at the school. The IT subject is an in-depth subject in the field of Information Technology. This course is designed to provide in-depth knowledge and skills on information technology-related issues, including the latest trends and cutting-edge technologies. Analysis and design System design: She will teach information system analysis and design methods and techniques, from determining requirements to building system models. Application development: She will guide students about the software development process, including programming language selection, project management, testing, and application deployment.":
      "ディン・ティ・ドン・フオン女史は、ベトナムの VKU 大学の講師です。 彼女は学校の IT 科目の議長を務めており、IT 科目は情報技術の分野における詳細な科目です。 最新動向や先端技術など、情報技術に関する深い知識と技術を修得するコースです 分析・設計 システム設計：情報システムの分析・設計の手法や技術を要件定義から学びます。アプリケーション開発: プログラミング言語の選択、プロジェクト管理、テスト、アプリケーションの展開などのソフトウェア開発プロセスについて学生を指導します。",
    "Cô Đinh Thị Đông Phương là giảng viên tại trường Đại học VKU tại Việt Nam. Cô là người chủ trì môn học Chuyên đề IT tại trường.Môn học Chuyên đề IT là một môn học chuyên sâu trong lĩnh vực Công nghệ thông tin. Môn học này được thiết kế nhằm cung cấp kiến thức và kỹ năng chuyên môn sâu về các vấn đề liên quan đến công nghệ thông tin, trong đó bao gồm cả các xu hướng mới nhất và các công nghệ tiên tiến.Phân tích và thiết kế hệ thống: Cô sẽ giảng dạy về các phương pháp và kỹ thuật phân tích, thiết kế hệ thống thông tin, từ việc xác định yêu cầu đến xây dựng mô hình hệ thống.Phát triển ứng dụng: Cô sẽ hướng dẫn sinh viên về quy trình phát triển phần mềm, bao gồm việc lựa chọn ngôn ngữ lập trình, quản lý dự án, kiểm thử và triển khai ứng dụng.":
      "ディン・ティ・ドン・フオン女史は、ベトナムの VKU 大学の講師です。 彼女は学校の IT 科目の議長を務めており、IT 科目は情報技術の分野における詳細な科目です。 最新動向や先端技術など、情報技術に関する深い知識と技術を修得するコースです 分析・設計 システム設計：情報システムの分析・設計の手法や技術を要件定義から学びます。アプリケーション開発: プログラミング言語の選択、プロジェクト管理、テスト、アプリケーションの展開などのソフトウェア開発プロセスについて学生を指導します。",
    //---
    "Cyber Security: She will impart knowledge on issues related to cyber security, including information security, cyber attack prevention, and risk management. New Technology: She will update students with the latest trends in the IT sector, including artificial intelligence, machine learning, blockchain, IoT and other technologies.":
      "サイバーセキュリティ: 情報セキュリティ、サイバー攻撃の防止、リスク管理など、サイバーセキュリティに関連する問題に関する知識を伝えます 新しいテクノロジー: 人工知能、機械学習などの IT 分野の最新トレンドを学生に提供します、ブロックチェーン、IoT、その他のテクノロジー。",
    "Cyber ​​​​sécurité : elle transmettra des connaissances sur les questions liées à la cybersécurité, notamment la sécurité de l'information, la prévention des cyberattaques et la gestion des risques. Nouvelles technologies : elle mettra à jour les étudiants avec les dernières tendances du secteur informatique, notamment l'intelligence artificielle, l'apprentissage automatique. , blockchain, IoT et autres technologies.":
      "サイバーセキュリティ: 情報セキュリティ、サイバー攻撃の防止、リスク管理など、サイバーセキュリティに関連する問題に関する知識を伝えます 新しいテクノロジー: 人工知能、機械学習などの IT 分野の最新トレンドを学生に提供します、ブロックチェーン、IoT、その他のテクノロジー。",
    "An ninh mạng: Cô sẽ truyền đạt kiến thức về các vấn đề liên quan đến an ninh mạng, bao gồm bảo mật thông tin, phòng chống tấn công mạng và quản lý rủi ro.Công nghệ mới: Cô sẽ cập nhật sinh viên với các xu hướng mới nhất trong lĩnh vực Công nghệ thông tin, bao gồm trí tuệ nhân tạo, học máy, blockchain, IoT và các công nghệ khác.":
      "サイバーセキュリティ: 情報セキュリティ、サイバー攻撃の防止、リスク管理など、サイバーセキュリティに関連する問題に関する知識を伝えます 新しいテクノロジー: 人工知能、機械学習などの IT 分野の最新トレンドを学生に提供します、ブロックチェーン、IoT、その他のテクノロジー。",
    // cac chuong trinh dang thuc hien
    "PROGRAMS ARE RUNNING": "実行中のプログラム",
    "CÁC CHƯƠNG TRÌNH ĐANG THỰC HIỆN": "実行中のプログラム",
    "PROGRAMMES EN COURS": "実行中のプログラム",
    ///Blog
    Blog: "ブログ",
    //--
    "Dự án làng Pà-Ong Đà Nẵng": "ダナンのパオン村プロジェクト",
    "Pa-Ong village project in Da Nang": "ダナンのパオン村プロジェクト",
    "Projet du village Pa-Ong à Da Nang": "ダナンのパオン村プロジェクト",
    //--
    "Học sinh nghèo có hoàn cảnh khó khăn, chủ yếu là ở vùng cao. Các trường hợp học sinh gặp khó khăn đặc biệt khác":
      "貧しい学生は、主に高地地域で困難な環境に住んでいます。 特別な困難を抱えた学生のその他のケース",
    "Poor students come from difficult circumstances, mainly in highland areas. Other cases of students having special difficulties":
      "貧しい学生は、主に高地地域で困難な環境に住んでいます。 特別な困難を抱えた学生のその他のケース",
    "Les étudiants pauvres viennent de conditions difficiles, principalement dans les zones montagneuses. Autres cas d'élèves rencontrant des difficultés particulières":
      "貧しい学生は、主に高地地域で困難な環境に住んでいます。 特別な困難を抱えた学生のその他のケース",
    //Footer
    "Our location": "私たちの場所",
    "Call us": "お電話ください",
    "Our Email": "私たちのメール",
    Ecofine: "エコファイン",
    "Quick Link": "クイックリンク",
    "Recent News": "最近のニュース",
    Newsletter: "ニュースレター",
    Volunteer: "ボランティア",
    "Global Warning": "地球温暖化",
    "Climate Adaptation": "気候適応",
    "Urban planning": "都市計画",
    "Energy Consulting": "エネルギー",
    //--
    "Cùng chung tay vì một xã hội không còn những khoảng cách về kinh tế, điều kiện và giáo dục":
      "経済、条件、教育の格差のない社会を目指して力を合わせましょう",
    "Unissons-nous pour une société qui n'a plus de lacunes en matière d'économie, de conditions de vie et d'éducation.":
      "経済、条件、教育の格差のない社会を目指して力を合わせましょう",
    "Let's join hands for a society that no longer has gaps in economics, conditions and education":
      "経済、条件、教育の格差のない社会を目指して力を合わせましょう",
    //--
    "Quỹ trò nghèo vùng cao": "高地貧困基金",
    "Fonds de pauvreté des": "高地貧困基金",
    "Upland Poverty Fund": "高地貧困基金",
    //--
    "Những đóng góp của bạn rất quan trọng cho quá trình hoàn thiện và phát triển cho dự án này.":
      "あなたの貢献は、このプロジェクトの完了と発展にとって非常に重要です。",
    "Your contributions are very important for the completion and development of this project.":
      "あなたの貢献は、このプロジェクトの完了と発展にとって非常に重要です。",
    "Vos contributions sont très importantes pour la réalisation et le développement de ce projet.":
      "あなたの貢献は、このプロジェクトの完了と発展にとって非常に重要です。",
    //share
    Share: "共有",
    Partager: "共有",
    "Chia sẻ": "共有",

    "Share with": "と共有する",
    "Chia sẻ với": "と共有する",
    "Partager avec": "と共有する",

    "Or copy the link below": "または、以下のリンクをコピーしてください",
    "Hoặc copy link dưới": "または、以下のリンクをコピーしてください",
    "Ou copiez le lien ci-dessous": "または、以下のリンクをコピーしてください",

    Copie: "コピー",
    Copy: "コピー",
    "Sao chép": "コピー",
    //form
    "Số tài khoản:": "口座番号：",
    "Account number:": "口座番号：",
    "Numéro de compte:": "口座番号：",

    "Công ty hoạt động từ thiện Smile Eye Charity, viết tắt là Smile Eye Charity, là công ty phi lợi nhuận. Smile Eye Charity kết nối các nguồn lực trong và ngoài nước để tổ chức các chương trình đào tạo thực tế, đồng hành, và hỗ trợ người dân ở các khu vực còn nhiều khó khăn. Các chương trình đào tạo nhằm mục đích giúp người dân nâng cao kỹ năng sống và kỹ năng làm kinh tế một cách bền vững.":
      "Smile Eye Charity (略称 Smile Eye Charity) は非営利企業です。 Smile Eye Charity は国内外のリソースを結びつけ、実践的なトレーニング プログラムを企画し、困難な地域にいる人々に同行し、支援します。 研修プログラムは、人々が持続可能な方法で生活と経済スキルを向上できるよう支援することを目的としています。",
    "Smile Eye Charity, en abrégé Smile Eye Charity, est une société à but non lucratif. Smile Eye Charity met en relation des ressources nationales et étrangères pour organiser des programmes de formation pratique, accompagner et soutenir les personnes dans des zones difficiles. Les programmes de formation visent à aider les gens à améliorer leurs compétences de vie et économiques de manière durable.":
      "Smile Eye Charity (略称 Smile Eye Charity) は非営利企業です。 Smile Eye Charity は国内外のリソースを結びつけ、実践的なトレーニング プログラムを企画し、困難な地域にいる人々に同行し、支援します。 研修プログラムは、人々が持続可能な方法で生活と経済スキルを向上できるよう支援することを目的としています。",
    "Smile Eye Charity, abbreviated as Smile Eye Charity, is a non-profit company. Smile Eye Charity connects domestic and foreign resources to organize practical training programs, accompany, and support people in difficult areas. Training programs aim to help people improve their life and economic skills in a sustainable way.":
      "Smile Eye Charity (略称 Smile Eye Charity) は非営利企業です。 Smile Eye Charity は国内外のリソースを結びつけ、実践的なトレーニング プログラムを企画し、困難な地域にいる人々に同行し、支援します。 研修プログラムは、人々が持続可能な方法で生活と経済スキルを向上できるよう支援することを目的としています。",

    "Thông tin công ty:": "企業情報：",
    "Company information:": "企業情報：",
    "Informations sur la société:": "企業情報：",

    "Tên:": "名前：",
    "Name:": "名前：",
    "名前：": "名前：",

    "Công ty phi lợi nhuận hoạt động từ thiện Smile Eye Charity, viết tắt là Smile Eye Charity":
      "非営利慈善団体Smile Eye Charity、略称Smile Eye Charity",
    "Entreprise caritative à but non lucratif Smile Eye Charity, en abrégé Smile Eye Charity":
      "非営利慈善団体Smile Eye Charity、略称Smile Eye Charity",
    "Non-profit charitable company Smile Eye Charity, abbreviated as Smile Eye Charity":
      "非営利慈善団体Smile Eye Charity、略称Smile Eye Charity",

    "Giấy phép đăng ký:": "ライセンス登録：",
    "License registration:": "ライセンス登録：",
    "Enregistrement de licence:": "ライセンス登録：",

    "Địa chỉ:": "住所：",
    "Adresse:": "住所：",
    "Address:": "住所：",

    "Người đại diện:": "代表：",
    "Representative:": "代表：",
    "Représentant:": "代表：",

    "Điện thoại:": "電話：",
    "Téléphone:": "電話：",
    "Phone:": "電話：",

    "Liên Hệ": "接触",
    Contact: "接触",
    Contact: "接触",

    "Nội dung*": "コンテンツ*",
    "Contenu*": "コンテンツ*",
    "Content*": "コンテンツ*",

    "Nom et prénom*": "名前と苗字*",
    "Họ và tên*": "名前と苗字*",
    "First and last name*": "名前と苗字*",

    "Số điện thoại:": "電話番号：",
    "Numéro de téléphone:": "電話番号：",
    "Phone number:": "電話番号：",

    Gửi: "送信",
    Send: "送信",
    Envoyer: "送信",

    "Email*": "Eメール*",
  },

  FRANCE: {
    "DEVELOPING NEW PA-CANG VILLAGE, CA DY COMMUNE, NAM GIANG DISTRICT":
      "Village Pa Cang du peuple Cotu au Vietnamle développement durable",
    "PHÁT TRIỂN CỤM DÂN CƯ PÀ-CĂNG MỚI, THÔN PÀ ONG, XÃ CÀ DY, HUYỆN NAM GIANG":
      "Village Pa Cang du peuple Cotu au Vietnamle développement durable",
    "ベトナムのコトゥ民族のパキャン村の 持続可能な発展":
      "Village Pa Cang du peuple Cotu au Vietnamle développement durable",
    //----
    "Cụm dân cư Pà-Căng mới cách cầu Xơi đường Hồ Chí Minh 3km đường bộ. Làng nằm bên bờ con sông Dakmy hiền hòa và phía sau là những dãy núi mây phủ sớm chiều êm đềm nên thơ. Tiếng nước chảy róc rách từ những dòng suối, tiếng gió thổi xì xào qua những rặng cây, tiếng chim kêu líu lo trên bầu trời lúc nào cũng làm cho không gian nơi đây tràn đầy sức sống tự nhiên.":
      "Nous sommes au centre du Vietnam, près de Da Nang. Le village de montagne Pa-Cang se trouve à 3 km du pont Xoi, sur la route Ho Chi Minh. Il s’ètend sur les rives de la douce rivière Dakmy. Derrière lui se trouvent les montagnes couvertes de nuages, avec un paysage paisible. Le bruit des bulles du courant de la rivière, l'eau des ruisseaux, le vent soufflant à travers les branches et le chant des oiseaux dans le ciel, rendent toujours cet endroit plein de vitalité naturelle.",
    "新しいパキャン住宅群は、ホーチミン道路のソイ橋から歩いて 3 km の場所にあります。 村は穏やかなダクミー川のほとりにあります。 村の後ろには雲に覆われた山々があり、のどかな風景が広がっています。 小川のせせらぎの音、木々を吹き抜ける風、そして空を飛ぶ鳥のさえずりが、ここの空間は常に自然の生命力に満ちています。":
      "Nous sommes au centre du Vietnam, près de Da Nang. Le village de montagne Pa-Cang se trouve à 3 km du pont Xoi, sur la route Ho Chi Minh. Il s’ètend sur les rives de la douce rivière Dakmy. Derrière lui se trouvent les montagnes couvertes de nuages, avec un paysage paisible. Le bruit des bulles du courant de la rivière, l'eau des ruisseaux, le vent soufflant à travers les branches et le chant des oiseaux dans le ciel, rendent toujours cet endroit plein de vitalité naturelle.",
    "The new Pa-Cang residential cluster is 3km by road from Xoi bridge on Ho Chi Minh Road. The village is located on the banks of the gentle Dakmy River. Behind the village is the cloud-covered mountains with peaceful scenary. The sound of bubbling water from streams, the wind blowing through the trees, and the chirping of birds in the sky always make the space here full of natural vitality.":
      "Nous sommes au centre du Vietnam, près de Da Nang. Le village de montagne Pa-Cang se trouve à 3 km du pont Xoi, sur la route Ho Chi Minh. Il s’ètend sur les rives de la douce rivière Dakmy. Derrière lui se trouvent les montagnes couvertes de nuages, avec un paysage paisible. Le bruit des bulles du courant de la rivière, l'eau des ruisseaux, le vent soufflant à travers les branches et le chant des oiseaux dans le ciel, rendent toujours cet endroit plein de vitalité naturelle.",
    // taskbar
    Home: "Accueil",
    ホームページ: "Accueil",
    "Trang chủ": "Accueil",
    Charity: "Charité",
    慈善: "Charité",
    "Từ thiện": "Charité",
    Sponsor: "Donateur",
    投稿者: "Donateur",
    "Nhà tài trợ": "Donateur",
    Organization: "Organisation",
    組織: "Organisation",
    "Tổ chức": "Organisation",
    Contact: "Contact",
    連絡先: "Contact",
    "Liên hệ": "Contact",
    Donate: "Don",
    寄付: "Don",
    "Quyên góp": "Don",
    Overview: "Aperçu",
    Aperçu: "Aperçu",
    "Tổng quan": "Aperçu",
    "概要": "Aperçu",
    Plan: "Plan",
    計画: "Plan",
    "Kế hoạch": "Plan",
    "Become a sponsor": "Devenir un sponsor",
    "Devenir un sponsor": "Devenir un sponsor",
    "Trở thành nhà tài trợ": "Devenir un sponsor",
    "SPECIFIC PROGRAMS": "PROGRAMMES SPÉCIFIQUES",
    "CÁC CHƯƠNG TRÌNH CỤ THỂ": "PROGRAMMES SPÉCIFIQUES",
    具体的なプログラム: "PROGRAMMES SPÉCIFIQUES",

    // project
    "新しい一日が始まります。 お父さんは母子をバイクで学校まで送り、それからお父さんとお母さんは仕事に行きました。 パワフルなバイクはでこぼこした砂利道を駆け抜けました。 カップルは明るい笑顔で釣りをしていた。 妻はかごを背負って森へ食べ物を探しに行きました。 小さな子供を持つ母親は、子供の世話や家事をするために家にいます。 夫たちは一緒に釣りから戻り、喜びと満足感を持ってお互いに魚を分け合いました。 小学生は学校で一日を過ごした後、保護者が迎えに来ます。 子どもたちは自発的に宿題をし、親が鶏に餌をあげるのを手伝います。 夜になると、家族全員が温かく愛情に満ちた銀色のご飯を囲んで集まります。":
      "Une nouvelle journée commence. Papa a conduit la mère et l'enfant à l'école en moto, puis lui et maman sont allés travailler. La puissante moto a couru sur la route de gravier cahoteuse. Un couple s'est emmené pêcher avec des sourires éclatants sur les visages. Une femme portait un panier et partait dans la forêt pour chercher de la nourriture. Les mères de jeunes enfants restent à la maison pour s'occuper de leurs enfants et faire le ménage. Les maris revenaient de la pêche ensemble et partageaient le poisson dans la joie et le contentement. Les enfants du primaire sont récupérés par leurs parents après une journée d'école. Les enfants font volontairement leurs devoirs et aident leurs parents à nourrir les poules. Le soir, toute la famille se réunit autour d’un plateau de riz fourré à l’argent, chaleureux et plein d’amour.",
    "A new day is starting. Dad drove mother and child to school on the motorbike, then he and mom went to work. The powerful motorbike raced across the bumpy gravel road. A couple took each other fishing with bright smiles on their faces. A wife carried a basket and went into the forest to find food. Mothers with young children stay home to take care of their children and do housework. The husbands returned from fishing together, and shared the fish with each other in joy and contentment. Primary school children are picked up by their parents after a day at school. The children voluntarily do their homework and help their parents feed the chickens. At night, the whole family gathers around a tray of silver-filled rice, warm and full of love.":
      "Une nouvelle journée commence. Papa a conduit la mère et l'enfant à l'école en moto, puis lui et maman sont allés travailler. La puissante moto a couru sur la route de gravier cahoteuse. Un couple s'est emmené pêcher avec des sourires éclatants sur les visages. Une femme portait un panier et partait dans la forêt pour chercher de la nourriture. Les mères de jeunes enfants restent à la maison pour s'occuper de leurs enfants et faire le ménage. Les maris revenaient de la pêche ensemble et partageaient le poisson dans la joie et le contentement. Les enfants du primaire sont récupérés par leurs parents après une journée d'école. Les enfants font volontairement leurs devoirs et aident leurs parents à nourrir les poules. Le soir, toute la famille se réunit autour d’un plateau de riz fourré à l’argent, chaleureux et plein d’amour.",
    "Một ngày mới đang bắt đầu. Bố chở hai mẹ con đến trường, trên chiếc xe máy, rồi bố cùng mẹ đi làm. Chiếc xe máy khỏe chạy băng băng trên con đường sỏi đá gập gềnh. Một vợ chồng chở nhau đi đánh cá với nụ cười tươi rói trên môi. Một người vợ mang gùi đi vào rừng kiếm thức ăn. Những người mẹ có con nhỏ ở nhà chăm con và làm việc nhà. Những người chồng cùng đi đánh bắt cá về, và chia cá cho nhau trong sự vui vẻ mãn nguyện. Trẻ em cấp một sau một ngày học ở trường được bố mẹ đón về nhà. Các em nhỏ tự giác làm bài tập, giúp bố mẹ cho gà ăn. Tối đến, cả nhà sum vầy bên mâm cơm đượm bạc, ấm áp và đầy yêu thương.":
      "Une nouvelle journée commence. Papa a conduit la mère et l'enfant à l'école en moto, puis lui et maman sont allés travailler. La puissante moto a couru sur la route de gravier cahoteuse. Un couple s'est emmené pêcher avec des sourires éclatants sur les visages. Une femme portait un panier et partait dans la forêt pour chercher de la nourriture. Les mères de jeunes enfants restent à la maison pour s'occuper de leurs enfants et faire le ménage. Les maris revenaient de la pêche ensemble et partageaient le poisson dans la joie et le contentement. Les enfants du primaire sont récupérés par leurs parents après une journée d'école. Les enfants font volontairement leurs devoirs et aident leurs parents à nourrir les poules. Le soir, toute la famille se réunit autour d’un plateau de riz fourré à l’argent, chaleureux et plein d’amour.",
    // -----
    "The new Pa-Cang residential cluster was established in 2017, currently there are 30 Co-Tu families living, with 57 adults and 75 children. There are 4 households with stable income. The remaining 26 households do not have jobs. Every day people go to the forest or to the river to find food and items that can be sold. Sometimes they are hired to work as masons, cut trees, and nurse trees. The average monthly income of the household is less than 1,500,000 VND. The biggest worry of people every day is lack of food and clothing, especially during the rainy season.":
      "Le nouveau groupe résidentiel Pa-Cang a été créé en 2017 et compte actuellement 30 familles Co-Tu, avec 57 adultes et 75 enfants. Il y a 4 ménages avec des revenus stables. Les 26 ménages restants n'ont pas d'emploi. Chaque jour, les gens vont dans la forêt ou à la rivière pour trouver de la nourriture et des objets à vendre. Parfois, ils sont embauchés pour travailler comme maçons, couper des arbres et soigner des arbres. Le revenu mensuel moyen du ménage est inférieur à 1 500 000 VND. La plus grande préoccupation des gens au quotidien est le manque de nourriture et de vêtements, surtout pendant la saison des pluies.",
    "新しいパチャンの住宅群は 2017 年に設立され、現在は大人 57 人、子供 75 人のコトゥ家族 30 世帯が住んでいます。 安定した収入のある世帯が4世帯あります。 残りの 26 世帯には仕事がありません。 人々は毎日、食べ物や売れる物を求めて森や川へ行きます。 場合によっては、石工として働いたり、木を切ったり、木の世話をしたりするために雇われることもあります。 世帯の平均月収は 1,500,000 VND 未満です。 人々の毎日の最大の心配は、特に雨季の衣料品の不足です。":
      "Le nouveau groupe résidentiel Pa-Cang a été créé en 2017 et compte actuellement 30 familles Co-Tu, avec 57 adultes et 75 enfants. Il y a 4 ménages avec des revenus stables. Les 26 ménages restants n'ont pas d'emploi. Chaque jour, les gens vont dans la forêt ou à la rivière pour trouver de la nourriture et des objets à vendre. Parfois, ils sont embauchés pour travailler comme maçons, couper des arbres et soigner des arbres. Le revenu mensuel moyen du ménage est inférieur à 1 500 000 VND. La plus grande préoccupation des gens au quotidien est le manque de nourriture et de vêtements, surtout pendant la saison des pluies.",
    "Cụm dân cư Pà-Căng mới được thành lập năm 2017, hiện có 30 gia đình người Cơ-Tu đang sinh sống, với 57 người lớn và 75 trẻ em. Có 4 hộ có thu nhập ổn định. 26 hộ còn lại không có việc làm. Hằng ngày người dân đi vào rừng hoặc ra sông tìm thức ăn và những món có thể bán. Đôi khi họ được thuê để đi làm phụ hồ, chặt cây, ươm cây. Thu nhập trung bình tháng của hộ dưới 1.500.000 đồng. Sự lo lắng lớn nhất mỗi ngày của bà con là thiếu ăn, thiếu mặc nhất là vào những ngày mùa mưa.":
      "Le nouveau groupe résidentiel Pa-Cang a été créé en 2017 et compte actuellement 30 familles Co-Tu, avec 57 adultes et 75 enfants. Il y a 4 ménages avec des revenus stables. Les 26 ménages restants n'ont pas d'emploi. Chaque jour, les gens vont dans la forêt ou à la rivière pour trouver de la nourriture et des objets à vendre. Parfois, ils sont embauchés pour travailler comme maçons, couper des arbres et soigner des arbres. Le revenu mensuel moyen du ménage est inférieur à 1 500 000 VND. La plus grande préoccupation des gens au quotidien est le manque de nourriture et de vêtements, surtout pendant la saison des pluies.",
    // ----
    "ここの人々の困難を認識し、スマイル・アイ・チャリティーは、政府と協力してここの人々がビジネススキル、経済スキル、生活スキルを向上できるよう支援するよう、国内外の組織や個人に支援を求めています。 私たちは力を合わせてこの場所をより美しくし、人々が未来に向けて新たな機会を生み出すお手伝いをすることができます。 ぜひ参加して、ここの人々とあなたの愛を分かち合い、この場所の成長と広がりを助けてください。":
      "Consciente des difficultés des gens d'ici, Smile Eye Charity appelle au soutien des organisations et des individus nationaux et étrangers pour qu'ils s'associent au gouvernement pour aider les gens d'ici à améliorer leurs compétences en matière d'affaires, d'économie et de vie. Ensemble, nous pouvons rendre cet endroit plus beau et aider les gens à créer de nouvelles opportunités pour l'avenir. S'il vous plaît, rejoignez-nous et partagez votre amour avec les gens ici, pour aider cet endroit à grandir et à se propager.",
    "Realizing the difficulties of the people here, Smile Eye Charity calls for the support of domestic and foreign organizations and individuals to join hands with the government to help people here improve their business skills. economics and life skills. Together, we can make this place more beautiful and help people create new opportunities for the future. Please join and share your love with the people here, to help this place grow and spread.":
      "Consciente des difficultés des gens d'ici, Smile Eye Charity appelle au soutien des organisations et des individus nationaux et étrangers pour qu'ils s'associent au gouvernement pour aider les gens d'ici à améliorer leurs compétences en matière d'affaires, d'économie et de vie. Ensemble, nous pouvons rendre cet endroit plus beau et aider les gens à créer de nouvelles opportunités pour l'avenir. S'il vous plaît, rejoignez-nous et partagez votre amour avec les gens ici, pour aider cet endroit à grandir et à se propager.",
    "Nhận thấy sự khó khăn của người dân nơi đây, Smile Eye Charity kêu gọi sự hỗ trợ của các tổ chức cá nhân trong và ngoài nước cùng chung tay với cấp chính quyền, để giúp cùng bà con nơi đây nâng cao kỹ năng làm kinh tế và kỹ năng sống. Cùng chung tay, chúng ta có thể làm cho nơi này trở nên tươi đẹp hơn và giúp người dân tạo ra những cơ hội mới cho tương lai. Hãy tham gia và chia sẻ tình yêu của bạn với bà con nơi đây, để giúp nơi này phát triển và lan tỏa.":
      "Consciente des difficultés des gens d'ici, Smile Eye Charity appelle au soutien des organisations et des individus nationaux et étrangers pour qu'ils s'associent au gouvernement pour aider les gens d'ici à améliorer leurs compétences en matière d'affaires, d'économie et de vie. Ensemble, nous pouvons rendre cet endroit plus beau et aider les gens à créer de nouvelles opportunités pour l'avenir. S'il vous plaît, rejoignez-nous et partagez votre amour avec les gens ici, pour aider cet endroit à grandir et à se propager.",
    // cac chuong trinh cu the
    "DỰ ÁN HỖ TRỢ XÂY DỰNG MÔ HÌNH KINH TẾ VƯỜN Ở LÀNG PÀ CĂNG":
      "PROJET DE SOUTIEN À LA CONSTRUCTION D'UN MODÈLE ÉCONOMIQUE DE JARDINAGE AU VILLAGE DE PA CANG",
    "PROJECT TO SUPPORT THE CONSTRUCTION OF GARDEN ECONOMIC MODEL IN PA CANG VILLAGE":
      "PROJET DE SOUTIEN À LA CONSTRUCTION D'UN MODÈLE ÉCONOMIQUE DE JARDINAGE AU VILLAGE DE PA CANG",
    パキャン村での園芸経済モデル構築を支援するプロジェクト:
      "PROJET DE SOUTIEN À LA CONSTRUCTION D'UN MODÈLE ÉCONOMIQUE DE JARDINAGE AU VILLAGE DE PA CANG",
    //---
    "Làng Pà Căng mới và các hộ gia đình có điện nước đầy đủ. Mỗi hộ có diện tích vườn trên 500m2. Trồng trọt và chăn nuôi là công việc chính của người dân. Tuy nhiên bà con chua được tiếp cận kỹ thuật nuôi trồng. Hầu hết các vườn nhà đang còn để trống, chỉ có vài cây ăn quả. Vài con gà, heo được nuôi thả thuận theo tự nhiên. Môi trường ngày càng ô nhiễm do chất thải và rác được thải trực tiếp ra vườn và suối.":
      "Le village de Pa Cang est nouveau et les ménages disposent de l'électricité et de l'eau. Chaque foyer dispose d'un espace jardin de plus de 500m2. La culture et l'élevage sont les principales occupations de la population. Cependant, les agriculteurs n’ont pas accès aux techniques agricoles. La plupart des jardins familiaux sont encore vides, avec seulement quelques arbres fruitiers. Certains poulets et porcs sont élevés naturellement. L'environnement est de plus en plus pollué car les déchets et les ordures sont déversés directement dans les jardins et les cours d'eau.",
    "Pa Cang village is new and households have full electricity and water. Each household has a garden area of over 500m2. Cultivation and animal husbandry are the main occupations of the people. However, farmers do not have access to farming techniques. Most of the home gardens are still empty, with only a few fruit trees. Some chickens and pigs are raised naturally. The environment is increasingly polluted because waste and garbage are discharged directly into gardens and streams.":
      "Le village de Pa Cang est nouveau et les ménages disposent de l'électricité et de l'eau. Chaque foyer dispose d'un espace jardin de plus de 500m2. La culture et l'élevage sont les principales occupations de la population. Cependant, les agriculteurs n’ont pas accès aux techniques agricoles. La plupart des jardins familiaux sont encore vides, avec seulement quelques arbres fruitiers. Certains poulets et porcs sont élevés naturellement. L'environnement est de plus en plus pollué car les déchets et les ordures sont déversés directement dans les jardins et les cours d'eau.",
    "パチャン村は新しく、各家庭には電気と水道が完備されています。 各世帯には500平方メートル以上の庭面積があります。 栽培と畜産業が人々の主な職業です。 しかし、農民は農業技術を利用することができません。 ほとんどの家庭菜園はまだ空き地で、果樹が数本あるだけだ。 一部の鶏や豚は自然に飼育されています。 廃棄物やゴミが庭や小川に直接排出されるため、環境はますます汚染されています。":
      "Le village de Pa Cang est nouveau et les ménages disposent de l'électricité et de l'eau. Chaque foyer dispose d'un espace jardin de plus de 500m2. La culture et l'élevage sont les principales occupations de la population. Cependant, les agriculteurs n’ont pas accès aux techniques agricoles. La plupart des jardins familiaux sont encore vides, avec seulement quelques arbres fruitiers. Certains poulets et porcs sont élevés naturellement. L'environnement est de plus en plus pollué car les déchets et les ordures sont déversés directement dans les jardins et les cours d'eau.",

    "BUILDING ORGANIC FERTILIZER PRODUCTION WORKSHOP":
      "CONSTRUCTION D'UN ATELIER DE PRODUCTION D'ENGRAIS ORGANIQUE",
    "DỰ ÁN XÂY DỰNG XƯỞNG SẢN XUẤT PHÂN HỮU CƠ Ở LÀNG PÀ CĂNG GIÚP THOÁT NGHÈO":
      "CONSTRUCTION D'UN ATELIER DE PRODUCTION D'ENGRAIS ORGANIQUE",
    貧困脱却を目的にパチャン村に有機肥料生産工場を建設するプロジェクト:
      "CONSTRUCTION D'UN ATELIER DE PRODUCTION D'ENGRAIS ORGANIQUE",
    //Nha Sang Lap
    CONTRIBUTOR: "DONATEUR",
    "Nhà Đóng Góp": "DONATEUR",
    投稿者: "DONATEUR",
    "CHARITABLE CONTRIBUTION": "CONTRIBUTION CARITATIVE",
    "ĐÓNG GÓP TỪ THIỆN": "CONTRIBUTION CARITATIVE",
    慈善寄付: "CONTRIBUTION CARITATIVE",
    FOUNDER: "FONDATEUR",
    "NGƯỜI SÁNG LẬP": "FONDATEUR",
    設立者: "FONDATEUR",
    //---
    "ディン・ティ・ドン・フオン女史は、ベトナムの VKU 大学の講師です。 彼女は学校の IT 科目の議長を務めており、IT 科目は情報技術の分野における詳細な科目です。 最新動向や先端技術など、情報技術に関する深い知識と技術を修得するコースです 分析・設計 システム設計：情報システムの分析・設計の手法や技術を要件定義から学びます。アプリケーション開発: プログラミング言語の選択、プロジェクト管理、テスト、アプリケーションの展開などのソフトウェア開発プロセスについて学生を指導します。":
      "Mme Dinh Thi Dong Phuong est chargée de cours à l'Université VKU au Vietnam. Elle est présidente de la matière informatique à l'école. La matière informatique est une matière approfondie dans le domaine des technologies de l'information. Ce cours est conçu pour fournir des connaissances et des compétences approfondies sur les questions liées aux technologies de l'information, y compris les dernières tendances et technologies avancées.Analyse et conception Conception de systèmes : elle enseignera les méthodes et techniques d'analyse et de conception des systèmes d'information, de la détermination des exigences à la construction. modèles de systèmes.Développement d'applications : elle guidera les étudiants dans le processus de développement de logiciels, y compris la sélection du langage de programmation, la gestion de projet, les tests et le déploiement d'applications.",
    "Ms. Dinh Thi Dong Phuong is a lecturer at VKU University in Vietnam. She is the chair of the IT subject at the school. The IT subject is an in-depth subject in the field of Information Technology. This course is designed to provide in-depth knowledge and skills on information technology-related issues, including the latest trends and cutting-edge technologies. Analysis and design System design: She will teach information system analysis and design methods and techniques, from determining requirements to building system models. Application development: She will guide students about the software development process, including programming language selection, project management, testing, and application deployment.":
      "Mme Dinh Thi Dong Phuong est chargée de cours à l'Université VKU au Vietnam. Elle est présidente de la matière informatique à l'école. La matière informatique est une matière approfondie dans le domaine des technologies de l'information. Ce cours est conçu pour fournir des connaissances et des compétences approfondies sur les questions liées aux technologies de l'information, y compris les dernières tendances et technologies avancées.Analyse et conception Conception de systèmes : elle enseignera les méthodes et techniques d'analyse et de conception des systèmes d'information, de la détermination des exigences à la construction. modèles de systèmes.Développement d'applications : elle guidera les étudiants dans le processus de développement de logiciels, y compris la sélection du langage de programmation, la gestion de projet, les tests et le déploiement d'applications.",
    "Cô Đinh Thị Đông Phương là giảng viên tại trường Đại học VKU tại Việt Nam. Cô là người chủ trì môn học Chuyên đề IT tại trường.Môn học Chuyên đề IT là một môn học chuyên sâu trong lĩnh vực Công nghệ thông tin. Môn học này được thiết kế nhằm cung cấp kiến thức và kỹ năng chuyên môn sâu về các vấn đề liên quan đến công nghệ thông tin, trong đó bao gồm cả các xu hướng mới nhất và các công nghệ tiên tiến.Phân tích và thiết kế hệ thống: Cô sẽ giảng dạy về các phương pháp và kỹ thuật phân tích, thiết kế hệ thống thông tin, từ việc xác định yêu cầu đến xây dựng mô hình hệ thống.Phát triển ứng dụng: Cô sẽ hướng dẫn sinh viên về quy trình phát triển phần mềm, bao gồm việc lựa chọn ngôn ngữ lập trình, quản lý dự án, kiểm thử và triển khai ứng dụng.":
      "Mme Dinh Thi Dong Phuong est chargée de cours à l'Université VKU au Vietnam. Elle est présidente de la matière informatique à l'école. La matière informatique est une matière approfondie dans le domaine des technologies de l'information. Ce cours est conçu pour fournir des connaissances et des compétences approfondies sur les questions liées aux technologies de l'information, y compris les dernières tendances et technologies avancées.Analyse et conception Conception de systèmes : elle enseignera les méthodes et techniques d'analyse et de conception des systèmes d'information, de la détermination des exigences à la construction. modèles de systèmes.Développement d'applications : elle guidera les étudiants dans le processus de développement de logiciels, y compris la sélection du langage de programmation, la gestion de projet, les tests et le déploiement d'applications.",
    //--
    "サイバーセキュリティ: 情報セキュリティ、サイバー攻撃の防止、リスク管理など、サイバーセキュリティに関連する問題に関する知識を伝えます 新しいテクノロジー: 人工知能、機械学習などの IT 分野の最新トレンドを学生に提供します、ブロックチェーン、IoT、その他のテクノロジー。":
      "Cyber ​​​​sécurité : elle transmettra des connaissances sur les questions liées à la cybersécurité, notamment la sécurité de l'information, la prévention des cyberattaques et la gestion des risques. Nouvelles technologies : elle mettra à jour les étudiants avec les dernières tendances du secteur informatique, notamment l'intelligence artificielle, l'apprentissage automatique. , blockchain, IoT et autres technologies.",
    "Cyber Security: She will impart knowledge on issues related to cyber security, including information security, cyber attack prevention, and risk management. New Technology: She will update students with the latest trends in the IT sector, including artificial intelligence, machine learning, blockchain, IoT and other technologies.":
      "Cyber ​​​​sécurité : elle transmettra des connaissances sur les questions liées à la cybersécurité, notamment la sécurité de l'information, la prévention des cyberattaques et la gestion des risques. Nouvelles technologies : elle mettra à jour les étudiants avec les dernières tendances du secteur informatique, notamment l'intelligence artificielle, l'apprentissage automatique. , blockchain, IoT et autres technologies.",
    "An ninh mạng: Cô sẽ truyền đạt kiến thức về các vấn đề liên quan đến an ninh mạng, bao gồm bảo mật thông tin, phòng chống tấn công mạng và quản lý rủi ro.Công nghệ mới: Cô sẽ cập nhật sinh viên với các xu hướng mới nhất trong lĩnh vực Công nghệ thông tin, bao gồm trí tuệ nhân tạo, học máy, blockchain, IoT và các công nghệ khác.":
      "Cyber ​​​​sécurité : elle transmettra des connaissances sur les questions liées à la cybersécurité, notamment la sécurité de l'information, la prévention des cyberattaques et la gestion des risques. Nouvelles technologies : elle mettra à jour les étudiants avec les dernières tendances du secteur informatique, notamment l'intelligence artificielle, l'apprentissage automatique. , blockchain, IoT et autres technologies.",
    // cac chuong trinh dang thuc hien
    "PROGRAMS ARE RUNNING": "PROGRAMMES EN COURS",
    "CÁC CHƯƠNG TRÌNH ĐANG THỰC HIỆN": "PROGRAMMES EN COURS",
    実行中のプログラム: "PROGRAMMES EN COURS",
    ///Blog
    ブログ: "Blog",
    //--
    "Dự án làng Pà-Ong Đà Nẵng": "Projet du village Pa-Ong à Da Nang",
    ダナンのパオン村プロジェクト: "Projet du village Pa-Ong à Da Nang",
    "Pa-Ong village project in Da Nang": "Projet du village Pa-Ong à Da Nang",
    //---

    "貧しい学生は、主に高地地域で困難な環境に住んでいます。 特別な困難を抱えた学生のその他のケース":
      "Les étudiants pauvres viennent de conditions difficiles, principalement dans les zones montagneuses. Autres cas d'élèves rencontrant des difficultés particulières",
    "Poor students come from difficult circumstances, mainly in highland areas. Other cases of students having special difficulties":
      "Les étudiants pauvres viennent de conditions difficiles, principalement dans les zones montagneuses. Autres cas d'élèves rencontrant des difficultés particulières",
    "Học sinh nghèo có hoàn cảnh khó khăn, chủ yếu là ở vùng cao. Các trường hợp học sinh gặp khó khăn đặc biệt khác":
      "Les étudiants pauvres viennent de conditions difficiles, principalement dans les zones montagneuses. Autres cas d'élèves rencontrant des difficultés particulières",
    //Footer
    私たちの場所: "Our location",
    お電話ください: "Call us",
    私たちのメール: "Our Email",
    エコファイン: "Ecofine",
    クイックリンク: "Quick Link",
    最近のニュース: "Recent News",
    ニュースレター: "Newsletter",
    ボランティア: "Volunteer",
    地球温暖化: "Global Warning",
    気候適応: "Climate Adaptation",
    都市計画: "Urban planning",
    エネルギー: "Energy Consulting",
    //--
    "Cùng chung tay vì một xã hội không còn những khoảng cách về kinh tế, điều kiện và giáo dục":
      "Unissons-nous pour une société qui n'a plus de lacunes en matière d'économie, de conditions de vie et d'éducation.",
    "Let's join hands for a society that no longer has gaps in economics, conditions and education":
      "Unissons-nous pour une société qui n'a plus de lacunes en matière d'économie, de conditions de vie et d'éducation.",
    "経済、条件、教育の格差のない社会を目指して力を合わせましょう":
      "Unissons-nous pour une société qui n'a plus de lacunes en matière d'économie, de conditions de vie et d'éducation.",
    //--
    "Upland Poverty Fund": "Fonds de pauvreté des",
    "Quỹ trò nghèo vùng cao": "Fonds de pauvreté des",
    高地貧困基金: "Fonds de pauvreté des",
    //--
    "Your contributions are very important for the completion and development of this project.":
      "Vos contributions sont très importantes pour la réalisation et le développement de ce projet.",
    "あなたの貢献は、このプロジェクトの完了と発展にとって非常に重要です。":
      "Vos contributions sont très importantes pour la réalisation et le développement de ce projet.",
    "Những đóng góp của bạn rất quan trọng cho quá trình hoàn thiện và phát triển cho dự án này.":
      "Vos contributions sont très importantes pour la réalisation et le développement de ce projet.",

    //share
    "Chia sẻ": "Share",
    Partager: "Share",
    共有: "Share",
    分享: "Share",

    "Chia sẻ với": "Share with",
    と共有する: "Share with",
    "Partager avec": "Share with",

    "Hoặc copy link dưới": "Or copy the link below",
    "または、以下のリンクをコピーしてください": "Or copy the link below",
    "Ou copiez le lien ci-dessous": "Or copy the link below",

    Copie: "Copy",
    "Sao chép": "Copy",
    コピー: "Copy",

    //form
    "Số tài khoản:": "Account number:",
    "口座番号：": "Account number:",
    "Numéro de compte:": "Account number:",

    "Công ty hoạt động từ thiện Smile Eye Charity, viết tắt là Smile Eye Charity, là công ty phi lợi nhuận. Smile Eye Charity kết nối các nguồn lực trong và ngoài nước để tổ chức các chương trình đào tạo thực tế, đồng hành, và hỗ trợ người dân ở các khu vực còn nhiều khó khăn. Các chương trình đào tạo nhằm mục đích giúp người dân nâng cao kỹ năng sống và kỹ năng làm kinh tế một cách bền vững.":
      "Smile Eye Charity, abbreviated as Smile Eye Charity, is a non-profit company. Smile Eye Charity connects domestic and foreign resources to organize practical training programs, accompany, and support people in difficult areas. Training programs aim to help people improve their life and economic skills in a sustainable way.",
    "Smile Eye Charity, en abrégé Smile Eye Charity, est une société à but non lucratif. Smile Eye Charity met en relation des ressources nationales et étrangères pour organiser des programmes de formation pratique, accompagner et soutenir les personnes dans des zones difficiles. Les programmes de formation visent à aider les gens à améliorer leurs compétences de vie et économiques de manière durable.":
      "Smile Eye Charity, abbreviated as Smile Eye Charity, is a non-profit company. Smile Eye Charity connects domestic and foreign resources to organize practical training programs, accompany, and support people in difficult areas. Training programs aim to help people improve their life and economic skills in a sustainable way.",
    "Smile Eye Charity (略称 Smile Eye Charity) は非営利企業です。 Smile Eye Charity は国内外のリソースを結びつけ、実践的なトレーニング プログラムを企画し、困難な地域にいる人々に同行し、支援します。 研修プログラムは、人々が持続可能な方法で生活と経済スキルを向上できるよう支援することを目的としています。":
      "Smile Eye Charity, abbreviated as Smile Eye Charity, is a non-profit company. Smile Eye Charity connects domestic and foreign resources to organize practical training programs, accompany, and support people in difficult areas. Training programs aim to help people improve their life and economic skills in a sustainable way.",

    "Thông tin công ty:": "Company information:",
    "企業情報：": "Company information:",
    "Informations sur la société:": "Company information:",

    "Tên:": "Name:",
    "Nom:": "Name:",
    "名前：": "Name:",

    "Công ty phi lợi nhuận hoạt động từ thiện Smile Eye Charity, viết tắt là Smile Eye Charity":
      "Non-profit charitable company Smile Eye Charity, abbreviated as Smile Eye Charity",
    "Entreprise caritative à but non lucratif Smile Eye Charity, en abrégé Smile Eye Charity":
      "Non-profit charitable company Smile Eye Charity, abbreviated as Smile Eye Charity",
    "非営利慈善団体Smile Eye Charity、略称Smile Eye Charity":
      "Non-profit charitable company Smile Eye Charity, abbreviated as Smile Eye Charity",

    "Giấy phép đăng ký:": "License registration:",
    "ライセンス登録：": "License registration:",
    "Enregistrement de licence:": "License registration:",

    "Địa chỉ:": "Address:",
    "Adresse:": "Address:",
    "住所：": "Address:",

    "Người đại diện:": "Representative:",
    "代表：": "Representative:",
    "Représentant:": "Representative:",

    "Điện thoại:": "Phone:",
    "Téléphone:": "Phone:",
    "電話：": "Phone:",

    "Liên Hệ": "Contact",
    接触: "Contact",
    Contact: "Contact",

    "Nội dung*": "Content*",
    "Contenu*": "Content*",
    "コンテンツ*": "Content*",

    "Nom et prénom*": "First and last name*",
    "Họ và tên*": "First and last name*",
    "名前と苗字*": "First and last name*",

    "Số điện thoại:": "Phone number:",
    "Numéro de téléphone:": "Phone number:",
    "電話番号：": "Phone number:",

    Gửi: "Send",
    送信: "Send",
    Envoyer: "Send",

    "Eメール*": "Email*",
  },
};

const language_options = ["vn", "eng"];

const selectWrapper = document.querySelector(".select-wrapper");
const selectBtn = selectWrapper.querySelector(".select-btn");
const searchInput = selectWrapper.querySelector("input");
const optionsBox = selectWrapper.querySelector(".options");
const current_language = document.querySelector(".current-language-flag");
const overview_link_drive = document.querySelectorAll(".overview_link_drive");
const plan_link_drive = document.querySelectorAll(".plan_link_drive");

const countries = ["VN", "ENG", "JAPAN", "FRANCE"];

function addCountry() {
  for (let country of countries) {
    optionsBox.insertAdjacentHTML(
      "beforeend",
      `
            <div class="language-flag-wrap">
            <img class="language-flag" src="./assets/img/${country.toLowerCase()}.png" />
            <li onclick="updateName(this)">${country}</li>
            </div>
        `
    );
  }
}

const link_drive_mapping = {
  eng: "https://drive.google.com/file/d/1FOtMgIyNB5_v_9YwaIHJsc_rpV9LPJtR/view",
  japan:
    "https://drive.google.com/file/d/1byiu9-M1lJBL7SB0ZVcouB4EmI4AnP0x/view",
  france:
    "https://drive.google.com/file/d/1pAX6RbP93NaBmvz9epEuLhBvVXeOymYE/view",
  vn: "https://drive.google.com/file/d/1iJad-6AooZAFskVbaHONQhz24t5LrN0a/view",
};

addCountry();
localStorage.setItem("current-language", "vn");
function updateName(selectedLi) {
  selectWrapper.classList.remove("active");
  selectBtn.lastElementChild.textContent = selectedLi.textContent;
  localStorage.setItem(
    "current-language",
    selectedLi.textContent.toLowerCase()
  );
  current_language.setAttribute(
    "src",
    `./assets/img/${selectedLi.textContent.toLowerCase()}.png`
  );
  $(".language").each(function (index, element) {
    $(this).text(arrLang[selectedLi.textContent][$(this).text().trim()]);
    console.log(arrLang[selectedLi.textContent][$(this).text().trim()]);
  });

  overview_link_drive.forEach(function (item) {
    item.setAttribute(
      "href",
      link_drive_mapping[localStorage.getItem("current-language").toLowerCase()]
    );
    console.log(
      link_drive_mapping[localStorage.getItem("current-language").toLowerCase()]
    );
  });

  plan_link_drive.forEach(function (item) {
    item.setAttribute(
      "href",
      link_drive_mapping[localStorage.getItem("current-language").toLowerCase()]
    );
  });
}

selectBtn.addEventListener("click", () => {
  selectWrapper.classList.toggle("active");
});

// header active
$(".nav-item").each(function (index, element) {
  $(this).click(function () {
    $(".nav-item").removeClass("nav-item-active");
    $(this).addClass("nav-item-active");
  });
});

$(".become-sponsor-btn").click(function () {
  $(".modal").attr("style", "display: flex;");
});

$(".close-modal-btn").click(function () {
  $(".modal").attr("style", "display: none;");
});
