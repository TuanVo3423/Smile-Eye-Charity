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
    // ------
    "Một ngày mới đang bắt đầu. Bố chở hai mẹ con đến trường, trên chiếc xe máy, rồi bố cùng mẹ đi làm. Chiếc xe máy khỏe chạy băng băng trên con đường sỏi đá gập gềnh. Một vợ chồng chở nhau đi đánh cá với nụ cười tươi rói trên môi. Một người vợ mang gùi đi vào rừng kiếm thức ăn. Những người mẹ có con nhỏ ở nhà chăm con và làm việc nhà. Những người chồng cùng đi đánh bắt cá về, và chia cá cho nhau trong sự vui vẻ mãn nguyện. Trẻ em cấp một sau một ngày học ở trường được bố mẹ đón về nhà. Các em nhỏ tự giác làm bài tập, giúp bố mẹ cho gà ăn. Tối đến, cả nhà sum vầy bên mâm cơm đượm bạc, ấm áp và đầy yêu thương.":
      "A new day is starting. Dad takes mother and child to school on the motorbike, then he and mom go to work. The powerful motorbike races across the bumpy gravel road. A couple are going fishing with bright smiles on their faces. A wife carries a basket into the forest to find food. Mothers with young children stay home to take care of their children and do housework. The husbands return from fishing and share the fish with each other in joy and contentment. Primary school children are picked up by their parents after a day at school. The children voluntarily do their homework and help their parents feed the chickens. At night, the whole family gathers around a tray of simple meal, warm and full of love.",
    "ここで新しい一日が始まります。 お父さんはお母さんと子供をバイクで学校に送り、それからお父さんとお母さんは仕事に行きます。 でこぼこした砂利道をパワフルなバイクが駆け抜けます。 明るい笑顔で釣りをするカップル。 妻はかごを背負って森へ食べ物を探しに行きました。 小さな子供を持つ母親は、子供の世話や家事をするために家にいます。 夫たちは一緒に釣りから戻り、喜びと満足感を持ってお互いに魚を分け合います。 小学生は学校で一日を過ごした後、保護者が迎えに来ます。 子どもたちは自発的に宿題をし、親が鶏に餌をあげるのを手伝います。 夜には、家族全員が、温かく愛情に満ちたシンプルな食事をするためにトレイの周りに集まります。":
      "A new day is starting. Dad takes mother and child to school on the motorbike, then he and mom go to work. The powerful motorbike races across the bumpy gravel road. A couple are going fishing with bright smiles on their faces. A wife carries a basket into the forest to find food. Mothers with young children stay home to take care of their children and do housework. The husbands return from fishing and share the fish with each other in joy and contentment. Primary school children are picked up by their parents after a day at school. The children voluntarily do their homework and help their parents feed the chickens. At night, the whole family gathers around a tray of simple meal, warm and full of love.",
    "Une nouvelle journée commence. Papa et maman emmènent l'enfant à l'école en moto, avant de partir travailler.  La puissante moto dèvale la route cahoteuse, pleine de graviers.Un couple part à la pêche avec un sourire éclatant sur le visage.  Une femme part en forèt, un panier d’osier sur le dos, pour trouver de la nourriture. Les jeunes mères restent à la maison pour s'occuper de leurs enfants et faire le ménage. Les maris reviennent de la pêche et partagent le poisson entre eux dans la joie et le contentement.  Les enfants du primaire sont récupérés par leurs parents après une journée d'école. Ils font volontairement leurs devoirs et aident à nourrir les poules.  Le soir, toute la famille se retrouve autour d'un plateau repas simple, chaleureux et plein d'amour.":
      "A new day is starting. Dad takes mother and child to school on the motorbike, then he and mom go to work. The powerful motorbike races across the bumpy gravel road. A couple are going fishing with bright smiles on their faces. A wife carries a basket into the forest to find food. Mothers with young children stay home to take care of their children and do housework. The husbands return from fishing and share the fish with each other in joy and contentment. Primary school children are picked up by their parents after a day at school. The children voluntarily do their homework and help their parents feed the chickens. At night, the whole family gathers around a tray of simple meal, warm and full of love.",
    // --------------
    "Le cluster résidentiel Pa-Cang a été créé en 2017 et compte actuellement 30 familles de l ’ethnie Co-Tu, avec 57 adultes et 75 enfants. Il y a 4 ménages avec des revenus stables. Les 26 ménages restants n'ont pas d'emploi. Chaque jour, les gens se rendent à la montagne ou à la rivière pour trouver de la nourriture et diverses choses à vendre.  Parfois, ils sont embauchés pour travailler comme maçons, couper du bois ou rèaliser des travaux agricoles. Le revenu mensuel moyen des ménages est inférieur à 1 500 000 VND, environ 60 euros. La plus grande préoccupation des gens au quotidien est le manque de nourriture et de vêtements, surtout pendant la saison des pluies.":
      "Pa-Cang residential cluster was established in 2017, currently there are 30 Co-Tu families living, with 57 adults and 75 children. There are 4 households with stable income. The remaining 26 households do not have jobs. Every day the people go to the moutain or to the river to find food and items that can be sold. Sometimes they are hired to work as masons, cut trees, and nurse trees. The average monthly income of the household is less than 1,500,000 VND. The biggest worry of people every day is lack of food and clothing, especially during the rainy season.",
    "Cụm dân cư Pà-Căng mới được thành lập năm 2017, hiện có 30 gia đình người Cơ-Tu đang sinh sống, với 57 người lớn và 75 trẻ em. Có 4 hộ có thu nhập ổn định. 26 hộ còn lại không có việc làm. Hằng ngày người dân đi vào rừng hoặc ra sông tìm thức ăn và những món có thể bán. Đôi khi họ được thuê để đi làm phụ hồ, chặt cây, ươm cây. Thu nhập trung bình tháng của hộ dưới 1.500.000 đồng. Sự lo lắng lớn nhất mỗi ngày của bà con là thiếu ăn, thiếu mặc nhất là vào những ngày mùa mưa.":
      "Pa-Cang residential cluster was established in 2017, currently there are 30 Co-Tu families living, with 57 adults and 75 children. There are 4 households with stable income. The remaining 26 households do not have jobs. Every day the people go to the moutain or to the river to find food and items that can be sold. Sometimes they are hired to work as masons, cut trees, and nurse trees. The average monthly income of the household is less than 1,500,000 VND. The biggest worry of people every day is lack of food and clothing, especially during the rainy season.",
    "パキャンの住宅群は 2017 年に設立され、現在、大人 57 人、子供 75 人のコトゥ家族 30 世帯が住んでいます。 安定した収入のある世帯が4世帯のみですあります。 残りの 26 世帯には仕事がありません。 人々は毎日山や川へ食べ物や売れる物を探しに行きます。 場合によっては、石工として働いたり、木を切ったり、木の世話をしたりするために雇われることもあります。 世帯の平均月収は 7000 円 未満です。 人々の毎日の最大の心配は、特に雨季に食べ物や衣料品の不足です。":
      "Pa-Cang residential cluster was established in 2017, currently there are 30 Co-Tu families living, with 57 adults and 75 children. There are 4 households with stable income. The remaining 26 households do not have jobs. Every day the people go to the moutain or to the river to find food and items that can be sold. Sometimes they are hired to work as masons, cut trees, and nurse trees. The average monthly income of the household is less than 1,500,000 VND. The biggest worry of people every day is lack of food and clothing, especially during the rainy season.",
    // ---
    "Nhận thấy sự khó khăn của người dân nơi đây, Smile Eye Charity kêu gọi sự hỗ trợ của các tổ chức cá nhân trong và ngoài nước cùng chung tay với cấp chính quyền, để giúp cùng bà con nơi đây nâng cao kỹ năng làm kinh tế và kỹ năng sống. Cùng chung tay, chúng ta có thể làm cho nơi này trở nên tươi đẹp hơn và giúp người dân tạo ra những cơ hội mới cho tương lai. Hãy tham gia và chia sẻ tình yêu của bạn với bà con nơi đây, để giúp nơi này phát triển và lan tỏa.":
      "Recognizing the difficulties of the people here, Smile Eye Charity calls for the support of organizations and individuals to raise hands with the government to help people here improve their living by practical training programs. Together, we can help this place more beautiful and help the people create new opportunities for the future. Please join and share your love with the people here, to help this place grow and spread.",
    "ここの人々の生活困難を認識し、スマイル・アイ・チャリティーは、実践的な訓練プログラムによってかれらここの人々の生活改善を支援するために政府に手を上げる団体や個人の支援を呼びかけています。 私たちは力を合わせてこの場所をより美しくし、人々が未来に向けて新たな機会を生み出すお手伝いをすることができます。 ぜひ参加して、ここの人々とあなたの愛を分かち合い、この場所の成長と希望ある未来への広がりを助けてください。":
      "Recognizing the difficulties of the people here, Smile Eye Charity calls for the support of organizations and individuals to raise hands with the government to help people here improve their living by practical training programs. Together, we can help this place more beautiful and help the people create new opportunities for the future. Please join and share your love with the people here, to help this place grow and spread.",
    "Consciente des difficultés rencontrées par les habitants de ce village, Smile Eye Charity appelle au soutien des organisations et des individus outre la participation du gouvernement Vietnamien afin d'aider les habitants à améliorer leurs conditions de vie par des programmes de formation pratique. Ensemble, nous pouvons rendre cet endroit plus beau et aider les gens à créer de nouvelles opportunités pour l'avenir. S'il vous plaît, rejoignez-nous et partagez votre amour avec les gens d’ici, pour aider cet endroit à se developper pour le bonheur de tous.":
      "Recognizing the difficulties of the people here, Smile Eye Charity calls for the support of organizations and individuals to raise hands with the government to help people here improve their living by practical training programs. Together, we can help this place more beautiful and help the people create new opportunities for the future. Please join and share your love with the people here, to help this place grow and spread.",

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
    "DỰ ÁN XÂY DỰNG XƯỞNG SẢN XUẤT PHÂN HỮU CƠ":
      "BUILDING ORGANIC FERTILIZER PRODUCTION WORKSHOP",
    有機肥料生産工場の建設: "BUILDING ORGANIC FERTILIZER PRODUCTION WORKSHOP",
    "CONSTRUCTION D'UN ATELIER DE PRODUCTION D'ENGRAIS ORGANIQUE":
      "BUILDING ORGANIC FERTILIZER PRODUCTION WORKSHOP",
    //----
    // cac chuong trinh dang thuc hien
    "CÁC CHƯƠNG TRÌNH ĐANG THỰC HIỆN": "PROGRAMS ARE RUNNING",
    実行中のプログラム: "PROGRAMS ARE RUNNING",
    "PROGRAMMES EN COURS": "PROGRAMS ARE RUNNING",

    // "NHÀ ĐÓNG GÓP": "CONTRIBUTOR",
    // 投稿者: "CONTRIBUTOR",
    // DONATEUR: "CONTRIBUTOR",
    // "ĐÓNG GÓP TỪ THIỆN": "CHARITABLE CONTRIBUTION",
    // 慈善寄付: "CHARITABLE CONTRIBUTION",
    // "CONTRIBUTION CARITATIVE": "CHARITABLE CONTRIBUTION",
    // "NGƯỜI SÁNG LẬP": "FOUNDER",
    // 設立者: "FOUNDER",
    // FONDATEUR: "FOUNDER",
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
    "Une nouvelle journée commence. Papa et maman emmènent l'enfant à l'école en moto, avant de partir travailler.  La puissante moto dèvale la route cahoteuse, pleine de graviers.Un couple part à la pêche avec un sourire éclatant sur le visage.  Une femme part en forèt, un panier d’osier sur le dos, pour trouver de la nourriture. Les jeunes mères restent à la maison pour s'occuper de leurs enfants et faire le ménage. Les maris reviennent de la pêche et partagent le poisson entre eux dans la joie et le contentement.  Les enfants du primaire sont récupérés par leurs parents après une journée d'école. Ils font volontairement leurs devoirs et aident à nourrir les poules.  Le soir, toute la famille se retrouve autour d'un plateau repas simple, chaleureux et plein d'amour.":
      "Một ngày mới đang bắt đầu. Bố chở hai mẹ con đến trường, trên chiếc xe máy, rồi bố cùng mẹ đi làm. Chiếc xe máy khỏe chạy băng băng trên con đường sỏi đá gập gềnh. Một vợ chồng chở nhau đi đánh cá với nụ cười tươi rói trên môi. Một người vợ mang gùi đi vào rừng kiếm thức ăn. Những người mẹ có con nhỏ ở nhà chăm con và làm việc nhà. Những người chồng cùng đi đánh bắt cá về, và chia cá cho nhau trong sự vui vẻ mãn nguyện. Trẻ em cấp một sau một ngày học ở trường được bố mẹ đón về nhà. Các em nhỏ tự giác làm bài tập, giúp bố mẹ cho gà ăn. Tối đến, cả nhà sum vầy bên mâm cơm đượm bạc, ấm áp và đầy yêu thương.",
    "ここで新しい一日が始まります。 お父さんはお母さんと子供をバイクで学校に送り、それからお父さんとお母さんは仕事に行きます。 でこぼこした砂利道をパワフルなバイクが駆け抜けます。 明るい笑顔で釣りをするカップル。 妻はかごを背負って森へ食べ物を探しに行きました。 小さな子供を持つ母親は、子供の世話や家事をするために家にいます。 夫たちは一緒に釣りから戻り、喜びと満足感を持ってお互いに魚を分け合います。 小学生は学校で一日を過ごした後、保護者が迎えに来ます。 子どもたちは自発的に宿題をし、親が鶏に餌をあげるのを手伝います。 夜には、家族全員が、温かく愛情に満ちたシンプルな食事をするためにトレイの周りに集まります":
      "Một ngày mới đang bắt đầu. Bố chở hai mẹ con đến trường, trên chiếc xe máy, rồi bố cùng mẹ đi làm. Chiếc xe máy khỏe chạy băng băng trên con đường sỏi đá gập gềnh. Một vợ chồng chở nhau đi đánh cá với nụ cười tươi rói trên môi. Một người vợ mang gùi đi vào rừng kiếm thức ăn. Những người mẹ có con nhỏ ở nhà chăm con và làm việc nhà. Những người chồng cùng đi đánh bắt cá về, và chia cá cho nhau trong sự vui vẻ mãn nguyện. Trẻ em cấp một sau một ngày học ở trường được bố mẹ đón về nhà. Các em nhỏ tự giác làm bài tập, giúp bố mẹ cho gà ăn. Tối đến, cả nhà sum vầy bên mâm cơm đượm bạc, ấm áp và đầy yêu thương.",
    "A new day is starting. Dad takes mother and child to school on the motorbike, then he and mom go to work. The powerful motorbike races across the bumpy gravel road. A couple are going fishing with bright smiles on their faces. A wife carries a basket into the forest to find food. Mothers with young children stay home to take care of their children and do housework. The husbands return from fishing and share the fish with each other in joy and contentment. Primary school children are picked up by their parents after a day at school. The children voluntarily do their homework and help their parents feed the chickens. At night, the whole family gathers around a tray of simple meal, warm and full of love.":
      "Một ngày mới đang bắt đầu. Bố chở hai mẹ con đến trường, trên chiếc xe máy, rồi bố cùng mẹ đi làm. Chiếc xe máy khỏe chạy băng băng trên con đường sỏi đá gập gềnh. Một vợ chồng chở nhau đi đánh cá với nụ cười tươi rói trên môi. Một người vợ mang gùi đi vào rừng kiếm thức ăn. Những người mẹ có con nhỏ ở nhà chăm con và làm việc nhà. Những người chồng cùng đi đánh bắt cá về, và chia cá cho nhau trong sự vui vẻ mãn nguyện. Trẻ em cấp một sau một ngày học ở trường được bố mẹ đón về nhà. Các em nhỏ tự giác làm bài tập, giúp bố mẹ cho gà ăn. Tối đến, cả nhà sum vầy bên mâm cơm đượm bạc, ấm áp và đầy yêu thương.",
    // -----
    "Pa-Cang residential cluster was established in 2017, currently there are 30 Co-Tu families living, with 57 adults and 75 children. There are 4 households with stable income. The remaining 26 households do not have jobs. Every day the people go to the moutain or to the river to find food and items that can be sold. Sometimes they are hired to work as masons, cut trees, and nurse trees. The average monthly income of the household is less than 1,500,000 VND. The biggest worry of people every day is lack of food and clothing, especially during the rainy season.":
      "Cụm dân cư Pà-Căng mới được thành lập năm 2017, hiện có 30 gia đình người Cơ-Tu đang sinh sống, với 57 người lớn và 75 trẻ em. Có 4 hộ có thu nhập ổn định. 26 hộ còn lại không có việc làm. Hằng ngày người dân đi vào rừng hoặc ra sông tìm thức ăn và những món có thể bán. Đôi khi họ được thuê để đi làm phụ hồ, chặt cây, ươm cây. Thu nhập trung bình tháng của hộ dưới 1.500.000 đồng. Sự lo lắng lớn nhất mỗi ngày của bà con là thiếu ăn, thiếu mặc nhất là vào những ngày mùa mưa.",
    "パキャンの住宅群は 2017 年に設立され、現在、大人 57 人、子供 75 人のコトゥ家族 30 世帯が住んでいます。 安定した収入のある世帯が4世帯のみですあります。 残りの 26 世帯には仕事がありません。 人々は毎日山や川へ食べ物や売れる物を探しに行きます。 場合によっては、石工として働いたり、木を切ったり、木の世話をしたりするために雇われることもあります。 世帯の平均月収は 7000 円 未満です。 人々の毎日の最大の心配は、特に雨季に食べ物や衣料品の不足です。":
      "Cụm dân cư Pà-Căng mới được thành lập năm 2017, hiện có 30 gia đình người Cơ-Tu đang sinh sống, với 57 người lớn và 75 trẻ em. Có 4 hộ có thu nhập ổn định. 26 hộ còn lại không có việc làm. Hằng ngày người dân đi vào rừng hoặc ra sông tìm thức ăn và những món có thể bán. Đôi khi họ được thuê để đi làm phụ hồ, chặt cây, ươm cây. Thu nhập trung bình tháng của hộ dưới 1.500.000 đồng. Sự lo lắng lớn nhất mỗi ngày của bà con là thiếu ăn, thiếu mặc nhất là vào những ngày mùa mưa.",
    "Le cluster résidentiel Pa-Cang a été créé en 2017 et compte actuellement 30 familles de l ’ethnie Co-Tu, avec 57 adultes et 75 enfants. Il y a 4 ménages avec des revenus stables. Les 26 ménages restants n'ont pas d'emploi. Chaque jour, les gens se rendent à la montagne ou à la rivière pour trouver de la nourriture et diverses choses à vendre.  Parfois, ils sont embauchés pour travailler comme maçons, couper du bois ou rèaliser des travaux agricoles. Le revenu mensuel moyen des ménages est inférieur à 1 500 000 VND, environ 60 euros. La plus grande préoccupation des gens au quotidien est le manque de nourriture et de vêtements, surtout pendant la saison des pluies.":
      "Cụm dân cư Pà-Căng mới được thành lập năm 2017, hiện có 30 gia đình người Cơ-Tu đang sinh sống, với 57 người lớn và 75 trẻ em. Có 4 hộ có thu nhập ổn định. 26 hộ còn lại không có việc làm. Hằng ngày người dân đi vào rừng hoặc ra sông tìm thức ăn và những món có thể bán. Đôi khi họ được thuê để đi làm phụ hồ, chặt cây, ươm cây. Thu nhập trung bình tháng của hộ dưới 1.500.000 đồng. Sự lo lắng lớn nhất mỗi ngày của bà con là thiếu ăn, thiếu mặc nhất là vào những ngày mùa mưa.",
    // ------
    "Consciente des difficultés rencontrées par les habitants de ce village, Smile Eye Charity appelle au soutien des organisations et des individus outre la participation du gouvernement Vietnamien afin d'aider les habitants à améliorer leurs conditions de vie par des programmes de formation pratique. Ensemble, nous pouvons rendre cet endroit plus beau et aider les gens à créer de nouvelles opportunités pour l'avenir. S'il vous plaît, rejoignez-nous et partagez votre amour avec les gens d’ici, pour aider cet endroit à se developper pour le bonheur de tous.":
      "Nhận thấy sự khó khăn của người dân nơi đây, Smile Eye Charity kêu gọi sự hỗ trợ của các tổ chức cá nhân trong và ngoài nước cùng chung tay với cấp chính quyền, để giúp cùng bà con nơi đây nâng cao kỹ năng làm kinh tế và kỹ năng sống. Cùng chung tay, chúng ta có thể làm cho nơi này trở nên tươi đẹp hơn và giúp người dân tạo ra những cơ hội mới cho tương lai. Hãy tham gia và chia sẻ tình yêu của bạn với bà con nơi đây, để giúp nơi này phát triển và lan tỏa.",
    "ここの人々の生活困難を認識し、スマイル・アイ・チャリティーは、実践的な訓練プログラムによってかれらここの人々の生活改善を支援するために政府に手を上げる団体や個人の支援を呼びかけています。 私たちは力を合わせてこの場所をより美しくし、人々が未来に向けて新たな機会を生み出すお手伝いをすることができます。 ぜひ参加して、ここの人々とあなたの愛を分かち合い、この場所の成長と希望ある未来への広がりを助けてください":
      "Nhận thấy sự khó khăn của người dân nơi đây, Smile Eye Charity kêu gọi sự hỗ trợ của các tổ chức cá nhân trong và ngoài nước cùng chung tay với cấp chính quyền, để giúp cùng bà con nơi đây nâng cao kỹ năng làm kinh tế và kỹ năng sống. Cùng chung tay, chúng ta có thể làm cho nơi này trở nên tươi đẹp hơn và giúp người dân tạo ra những cơ hội mới cho tương lai. Hãy tham gia và chia sẻ tình yêu của bạn với bà con nơi đây, để giúp nơi này phát triển và lan tỏa.",
    "Recognizing the difficulties of the people here, Smile Eye Charity calls for the support of organizations and individuals to raise hands with the government to help people here improve their living by practical training programs. Together, we can help this place more beautiful and help the people create new opportunities for the future. Please join and share your love with the people here, to help this place grow and spread.":
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
      "DỰ ÁN XÂY DỰNG XƯỞNG SẢN XUẤT PHÂN HỮU CƠ",
    有機肥料生産工場の建設: "DỰ ÁN XÂY DỰNG XƯỞNG SẢN XUẤT PHÂN HỮU CƠ",
    "CONSTRUCTION D'UN ATELIER DE PRODUCTION D'ENGRAIS ORGANIQUE":
      "DỰ ÁN XÂY DỰNG XƯỞNG SẢN XUẤT PHÂN HỮU CƠ",
    // CONTRIBUTOR: "NHÀ ĐÓNG GÓP",
    // 投稿者: "NHÀ ĐÓNG GÓP",
    // DONATEUR: "NHÀ ĐÓNG GÓP",
    // "CHARITABLE CONTRIBUTION": "ĐÓNG GÓP TỪ THIỆN",
    // 慈善寄付: "ĐÓNG GÓP TỪ THIỆN",
    // "CONTRIBUTION CARITATIVE": "ĐÓNG GÓP TỪ THIỆN",
    // FOUNDER: "NGƯỜI SÁNG LẬP",
    // 設立者: "NGƯỜI SÁNG LẬP",
    // FONDATEUR: "NGƯỜI SÁNG LẬP",
    // cac chuong trinh dang thuc hien
    "PROGRAMS ARE RUNNING": "CÁC CHƯƠNG TRÌNH ĐANG THỰC HIỆN",
    実行中のプログラム: "CÁC CHƯƠNG TRÌNH ĐANG THỰC HIỆN",
    "PROGRAMMES EN COURS": "CÁC CHƯƠNG TRÌNH ĐANG THỰC HIỆN",
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
    "Une nouvelle journée commence. Papa et maman emmènent l'enfant à l'école en moto, avant de partir travailler.  La puissante moto dèvale la route cahoteuse, pleine de graviers.Un couple part à la pêche avec un sourire éclatant sur le visage.  Une femme part en forèt, un panier d’osier sur le dos, pour trouver de la nourriture. Les jeunes mères restent à la maison pour s'occuper de leurs enfants et faire le ménage. Les maris reviennent de la pêche et partagent le poisson entre eux dans la joie et le contentement.  Les enfants du primaire sont récupérés par leurs parents après une journée d'école. Ils font volontairement leurs devoirs et aident à nourrir les poules.  Le soir, toute la famille se retrouve autour d'un plateau repas simple, chaleureux et plein d'amour.":
      "ここで新しい一日が始まります。 お父さんはお母さんと子供をバイクで学校に送り、それからお父さんとお母さんは仕事に行きます。 でこぼこした砂利道をパワフルなバイクが駆け抜けます。 明るい笑顔で釣りをするカップル。 妻はかごを背負って森へ食べ物を探しに行きました。 小さな子供を持つ母親は、子供の世話や家事をするために家にいます。 夫たちは一緒に釣りから戻り、喜びと満足感を持ってお互いに魚を分け合います。 小学生は学校で一日を過ごした後、保護者が迎えに来ます。 子どもたちは自発的に宿題をし、親が鶏に餌をあげるのを手伝います。 夜には、家族全員が、温かく愛情に満ちたシンプルな食事をするためにトレイの周りに集まります。",
    "A new day is starting. Dad takes mother and child to school on the motorbike, then he and mom go to work. The powerful motorbike races across the bumpy gravel road. A couple are going fishing with bright smiles on their faces. A wife carries a basket into the forest to find food. Mothers with young children stay home to take care of their children and do housework. The husbands return from fishing and share the fish with each other in joy and contentment. Primary school children are picked up by their parents after a day at school. The children voluntarily do their homework and help their parents feed the chickens. At night, the whole family gathers around a tray of simple meal, warm and full of love.":
      "ここで新しい一日が始まります。 お父さんはお母さんと子供をバイクで学校に送り、それからお父さんとお母さんは仕事に行きます。 でこぼこした砂利道をパワフルなバイクが駆け抜けます。 明るい笑顔で釣りをするカップル。 妻はかごを背負って森へ食べ物を探しに行きました。 小さな子供を持つ母親は、子供の世話や家事をするために家にいます。 夫たちは一緒に釣りから戻り、喜びと満足感を持ってお互いに魚を分け合います。 小学生は学校で一日を過ごした後、保護者が迎えに来ます。 子どもたちは自発的に宿題をし、親が鶏に餌をあげるのを手伝います。 夜には、家族全員が、温かく愛情に満ちたシンプルな食事をするためにトレイの周りに集まります。",
    "Một ngày mới đang bắt đầu. Bố chở hai mẹ con đến trường, trên chiếc xe máy, rồi bố cùng mẹ đi làm. Chiếc xe máy khỏe chạy băng băng trên con đường sỏi đá gập gềnh. Một vợ chồng chở nhau đi đánh cá với nụ cười tươi rói trên môi. Một người vợ mang gùi đi vào rừng kiếm thức ăn. Những người mẹ có con nhỏ ở nhà chăm con và làm việc nhà. Những người chồng cùng đi đánh bắt cá về, và chia cá cho nhau trong sự vui vẻ mãn nguyện. Trẻ em cấp một sau một ngày học ở trường được bố mẹ đón về nhà. Các em nhỏ tự giác làm bài tập, giúp bố mẹ cho gà ăn. Tối đến, cả nhà sum vầy bên mâm cơm đượm bạc, ấm áp và đầy yêu thương.":
      "ここで新しい一日が始まります。 お父さんはお母さんと子供をバイクで学校に送り、それからお父さんとお母さんは仕事に行きます。 でこぼこした砂利道をパワフルなバイクが駆け抜けます。 明るい笑顔で釣りをするカップル。 妻はかごを背負って森へ食べ物を探しに行きました。 小さな子供を持つ母親は、子供の世話や家事をするために家にいます。 夫たちは一緒に釣りから戻り、喜びと満足感を持ってお互いに魚を分け合います。 小学生は学校で一日を過ごした後、保護者が迎えに来ます。 子どもたちは自発的に宿題をし、親が鶏に餌をあげるのを手伝います。 夜には、家族全員が、温かく愛情に満ちたシンプルな食事をするためにトレイの周りに集まります。",
    // -----
    "Cụm dân cư Pà-Căng mới được thành lập năm 2017, hiện có 30 gia đình người Cơ-Tu đang sinh sống, với 57 người lớn và 75 trẻ em. Có 4 hộ có thu nhập ổn định. 26 hộ còn lại không có việc làm. Hằng ngày người dân đi vào rừng hoặc ra sông tìm thức ăn và những món có thể bán. Đôi khi họ được thuê để đi làm phụ hồ, chặt cây, ươm cây. Thu nhập trung bình tháng của hộ dưới 1.500.000 đồng. Sự lo lắng lớn nhất mỗi ngày của bà con là thiếu ăn, thiếu mặc nhất là vào những ngày mùa mưa.":
      "パキャンの住宅群は 2017 年に設立され、現在、大人 57 人、子供 75 人のコトゥ家族 30 世帯が住んでいます。 安定した収入のある世帯が4世帯のみですあります。 残りの 26 世帯には仕事がありません。 人々は毎日山や川へ食べ物や売れる物を探しに行きます。 場合によっては、石工として働いたり、木を切ったり、木の世話をしたりするために雇われることもあります。 世帯の平均月収は 7000 円 未満です。 人々の毎日の最大の心配は、特に雨季に食べ物や衣料品の不足です。",
    "Pa-Cang residential cluster was established in 2017, currently there are 30 Co-Tu families living, with 57 adults and 75 children. There are 4 households with stable income. The remaining 26 households do not have jobs. Every day the people go to the moutain or to the river to find food and items that can be sold. Sometimes they are hired to work as masons, cut trees, and nurse trees. The average monthly income of the household is less than 1,500,000 VND. The biggest worry of people every day is lack of food and clothing, especially during the rainy season.":
      "パキャンの住宅群は 2017 年に設立され、現在、大人 57 人、子供 75 人のコトゥ家族 30 世帯が住んでいます。 安定した収入のある世帯が4世帯のみですあります。 残りの 26 世帯には仕事がありません。 人々は毎日山や川へ食べ物や売れる物を探しに行きます。 場合によっては、石工として働いたり、木を切ったり、木の世話をしたりするために雇われることもあります。 世帯の平均月収は 7000 円 未満です。 人々の毎日の最大の心配は、特に雨季に食べ物や衣料品の不足です。",
    "Le cluster résidentiel Pa-Cang a été créé en 2017 et compte actuellement 30 familles de l ’ethnie Co-Tu, avec 57 adultes et 75 enfants. Il y a 4 ménages avec des revenus stables. Les 26 ménages restants n'ont pas d'emploi. Chaque jour, les gens se rendent à la montagne ou à la rivière pour trouver de la nourriture et diverses choses à vendre.  Parfois, ils sont embauchés pour travailler comme maçons, couper du bois ou rèaliser des travaux agricoles. Le revenu mensuel moyen des ménages est inférieur à 1 500 000 VND, environ 60 euros. La plus grande préoccupation des gens au quotidien est le manque de nourriture et de vêtements, surtout pendant la saison des pluies.":
      "パキャンの住宅群は 2017 年に設立され、現在、大人 57 人、子供 75 人のコトゥ家族 30 世帯が住んでいます。 安定した収入のある世帯が4世帯のみですあります。 残りの 26 世帯には仕事がありません。 人々は毎日山や川へ食べ物や売れる物を探しに行きます。 場合によっては、石工として働いたり、木を切ったり、木の世話をしたりするために雇われることもあります。 世帯の平均月収は 7000 円 未満です。 人々の毎日の最大の心配は、特に雨季に食べ物や衣料品の不足です。",
    // -----
    "Consciente des difficultés rencontrées par les habitants de ce village, Smile Eye Charity appelle au soutien des organisations et des individus outre la participation du gouvernement Vietnamien afin d'aider les habitants à améliorer leurs conditions de vie par des programmes de formation pratique. Ensemble, nous pouvons rendre cet endroit plus beau et aider les gens à créer de nouvelles opportunités pour l'avenir. S'il vous plaît, rejoignez-nous et partagez votre amour avec les gens d’ici, pour aider cet endroit à se developper pour le bonheur de tous.":
      "ここの人々の生活困難を認識し、スマイル・アイ・チャリティーは、実践的な訓練プログラムによってかれらここの人々の生活改善を支援するために政府に手を上げる団体や個人の支援を呼びかけています。 私たちは力を合わせてこの場所をより美しくし、人々が未来に向けて新たな機会を生み出すお手伝いをすることができます。 ぜひ参加して、ここの人々とあなたの愛を分かち合い、この場所の成長と希望ある未来への広がりを助けてください。",
    "Recognizing the difficulties of the people here, Smile Eye Charity calls for the support of organizations and individuals to raise hands with the government to help people here improve their living by practical training programs. Together, we can help this place more beautiful and help the people create new opportunities for the future. Please join and share your love with the people here, to help this place grow and spread.":
      "ここの人々の生活困難を認識し、スマイル・アイ・チャリティーは、実践的な訓練プログラムによってかれらここの人々の生活改善を支援するために政府に手を上げる団体や個人の支援を呼びかけています。 私たちは力を合わせてこの場所をより美しくし、人々が未来に向けて新たな機会を生み出すお手伝いをすることができます。 ぜひ参加して、ここの人々とあなたの愛を分かち合い、この場所の成長と希望ある未来への広がりを助けてください。",
    "Nhận thấy sự khó khăn của người dân nơi đây, Smile Eye Charity kêu gọi sự hỗ trợ của các tổ chức cá nhân trong và ngoài nước cùng chung tay với cấp chính quyền, để giúp cùng bà con nơi đây nâng cao kỹ năng làm kinh tế và kỹ năng sống. Cùng chung tay, chúng ta có thể làm cho nơi này trở nên tươi đẹp hơn và giúp người dân tạo ra những cơ hội mới cho tương lai. Hãy tham gia và chia sẻ tình yêu của bạn với bà con nơi đây, để giúp nơi này phát triển và lan tỏa.":
      "ここの人々の生活困難を認識し、スマイル・アイ・チャリティーは、実践的な訓練プログラムによってかれらここの人々の生活改善を支援するために政府に手を上げる団体や個人の支援を呼びかけています。 私たちは力を合わせてこの場所をより美しくし、人々が未来に向けて新たな機会を生み出すお手伝いをすることができます。 ぜひ参加して、ここの人々とあなたの愛を分かち合い、この場所の成長と希望ある未来への広がりを助けてください。",
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

    "BUILDING ORGANIC FERTILIZER PRODUCTION WORKSHOP": "有機肥料生産工場の建設",
    "DỰ ÁN XÂY DỰNG XƯỞNG SẢN XUẤT PHÂN HỮU CƠ": "有機肥料生産工場の建設",
    "CONSTRUCTION D'UN ATELIER DE PRODUCTION D'ENGRAIS ORGANIQUE":
      "有機肥料生産工場の建設",
    // CONTRIBUTOR: "投稿者",
    // "NHÀ ĐÓNG GÓP": "投稿者",
    // DONATEUR: "投稿者",
    // "CHARITABLE CONTRIBUTION": "慈善寄付",
    // "ĐÓNG GÓP TỪ THIỆN": "慈善寄付",
    // "CONTRIBUTION CARITATIVE": "慈善寄付",
    // FOUNDER: "設立者",
    // "NGƯỜI SÁNG LẬP": "設立者",
    // FONDATEUR: "設立者",
    // cac chuong trinh dang thuc hien
    "PROGRAMS ARE RUNNING": "実行中のプログラム",
    "CÁC CHƯƠNG TRÌNH ĐANG THỰC HIỆN": "実行中のプログラム",
    "PROGRAMMES EN COURS": "実行中のプログラム",
  },

  FRANCE: {
    "DEVELOPING NEW PA-CANG VILLAGE, CA DY COMMUNE, NAM GIANG DISTRICT":
      "Village Pa Cang du peuple Cotu au Vietnamle développement durable",
    "PHÁT TRIỂN CỤM DÂN CƯ PÀ-CĂNG MỚI, THÔN PÀ ONG, XÃ CÀ DY, HUYỆN NAM GIANG":
      "Village Pa Cang du peuple Cotu au Vietnamle développement durable",
    "ベトナムのコトゥ民族のパキャン村の 持続可能な発展":
      "Village Pa Cang du peuple Cotu au Vietnamle développement durable",
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
    "Một ngày mới đang bắt đầu. Bố chở hai mẹ con đến trường, trên chiếc xe máy, rồi bố cùng mẹ đi làm. Chiếc xe máy khỏe chạy băng băng trên con đường sỏi đá gập gềnh. Một vợ chồng chở nhau đi đánh cá với nụ cười tươi rói trên môi. Một người vợ mang gùi đi vào rừng kiếm thức ăn. Những người mẹ có con nhỏ ở nhà chăm con và làm việc nhà. Những người chồng cùng đi đánh bắt cá về, và chia cá cho nhau trong sự vui vẻ mãn nguyện. Trẻ em cấp một sau một ngày học ở trường được bố mẹ đón về nhà. Các em nhỏ tự giác làm bài tập, giúp bố mẹ cho gà ăn. Tối đến, cả nhà sum vầy bên mâm cơm đượm bạc, ấm áp và đầy yêu thương. ":
      "Une nouvelle journée commence. Papa et maman emmènent l'enfant à l'école en moto, avant de partir travailler.  La puissante moto dèvale la route cahoteuse, pleine de graviers.Un couple part à la pêche avec un sourire éclatant sur le visage.  Une femme part en forèt, un panier d’osier sur le dos, pour trouver de la nourriture. Les jeunes mères restent à la maison pour s'occuper de leurs enfants et faire le ménage. Les maris reviennent de la pêche et partagent le poisson entre eux dans la joie et le contentement.  Les enfants du primaire sont récupérés par leurs parents après une journée d'école. Ils font volontairement leurs devoirs et aident à nourrir les poules.  Le soir, toute la famille se retrouve autour d'un plateau repas simple, chaleureux et plein d'amour.",
    "A new day is starting. Dad takes mother and child to school on the motorbike, then he and mom go to work. The powerful motorbike races across the bumpy gravel road. A couple are going fishing with bright smiles on their faces. A wife carries a basket into the forest to find food. Mothers with young children stay home to take care of their children and do housework. The husbands return from fishing and share the fish with each other in joy and contentment. Primary school children are picked up by their parents after a day at school. The children voluntarily do their homework and help their parents feed the chickens. At night, the whole family gathers around a tray of simple meal, warm and full of love.":
      "Une nouvelle journée commence. Papa et maman emmènent l'enfant à l'école en moto, avant de partir travailler.  La puissante moto dèvale la route cahoteuse, pleine de graviers.Un couple part à la pêche avec un sourire éclatant sur le visage.  Une femme part en forèt, un panier d’osier sur le dos, pour trouver de la nourriture. Les jeunes mères restent à la maison pour s'occuper de leurs enfants et faire le ménage. Les maris reviennent de la pêche et partagent le poisson entre eux dans la joie et le contentement.  Les enfants du primaire sont récupérés par leurs parents après une journée d'école. Ils font volontairement leurs devoirs et aident à nourrir les poules.  Le soir, toute la famille se retrouve autour d'un plateau repas simple, chaleureux et plein d'amour.",
    "ここで新しい一日が始まります。 お父さんはお母さんと子供をバイクで学校に送り、それからお父さんとお母さんは仕事に行きます。 でこぼこした砂利道をパワフルなバイクが駆け抜けます。 明るい笑顔で釣りをするカップル。 妻はかごを背負って森へ食べ物を探しに行きました。 小さな子供を持つ母親は、子供の世話や家事をするために家にいます。 夫たちは一緒に釣りから戻り、喜びと満足感を持ってお互いに魚を分け合います。 小学生は学校で一日を過ごした後、保護者が迎えに来ます。 子どもたちは自発的に宿題をし、親が鶏に餌をあげるのを手伝います。 夜には、家族全員が、温かく愛情に満ちたシンプルな食事をするためにトレイの周りに集まります。":
      "Une nouvelle journée commence. Papa et maman emmènent l'enfant à l'école en moto, avant de partir travailler.  La puissante moto dèvale la route cahoteuse, pleine de graviers.Un couple part à la pêche avec un sourire éclatant sur le visage.  Une femme part en forèt, un panier d’osier sur le dos, pour trouver de la nourriture. Les jeunes mères restent à la maison pour s'occuper de leurs enfants et faire le ménage. Les maris reviennent de la pêche et partagent le poisson entre eux dans la joie et le contentement.  Les enfants du primaire sont récupérés par leurs parents après une journée d'école. Ils font volontairement leurs devoirs et aident à nourrir les poules.  Le soir, toute la famille se retrouve autour d'un plateau repas simple, chaleureux et plein d'amour.",
    // -----
    "Cụm dân cư Pà-Căng mới được thành lập năm 2017, hiện có 30 gia đình người Cơ-Tu đang sinh sống, với 57 người lớn và 75 trẻ em. Có 4 hộ có thu nhập ổn định. 26 hộ còn lại không có việc làm. Hằng ngày người dân đi vào rừng hoặc ra sông tìm thức ăn và những món có thể bán. Đôi khi họ được thuê để đi làm phụ hồ, chặt cây, ươm cây. Thu nhập trung bình tháng của hộ dưới 1.500.000 đồng. Sự lo lắng lớn nhất mỗi ngày của bà con là thiếu ăn, thiếu mặc nhất là vào những ngày mùa mưa. ":
      "Le cluster résidentiel Pa-Cang a été créé en 2017 et compte actuellement 30 familles de l ’ethnie Co-Tu, avec 57 adultes et 75 enfants. Il y a 4 ménages avec des revenus stables. Les 26 ménages restants n'ont pas d'emploi. Chaque jour, les gens se rendent à la montagne ou à la rivière pour trouver de la nourriture et diverses choses à vendre.  Parfois, ils sont embauchés pour travailler comme maçons, couper du bois ou rèaliser des travaux agricoles. Le revenu mensuel moyen des ménages est inférieur à 1 500 000 VND, environ 60 euros. La plus grande préoccupation des gens au quotidien est le manque de nourriture et de vêtements, surtout pendant la saison des pluies.",
    "パキャンの住宅群は 2017 年に設立され、現在、大人 57 人、子供 75 人のコトゥ家族 30 世帯が住んでいます。 安定した収入のある世帯が4世帯のみですあります。 残りの 26 世帯には仕事がありません。 人々は毎日山や川へ食べ物や売れる物を探しに行きます。 場合によっては、石工として働いたり、木を切ったり、木の世話をしたりするために雇われることもあります。 世帯の平均月収は 7000 円 未満です。 人々の毎日の最大の心配は、特に雨季に食べ物や衣料品の不足です。":
      "Le cluster résidentiel Pa-Cang a été créé en 2017 et compte actuellement 30 familles de l ’ethnie Co-Tu, avec 57 adultes et 75 enfants. Il y a 4 ménages avec des revenus stables. Les 26 ménages restants n'ont pas d'emploi. Chaque jour, les gens se rendent à la montagne ou à la rivière pour trouver de la nourriture et diverses choses à vendre.  Parfois, ils sont embauchés pour travailler comme maçons, couper du bois ou rèaliser des travaux agricoles. Le revenu mensuel moyen des ménages est inférieur à 1 500 000 VND, environ 60 euros. La plus grande préoccupation des gens au quotidien est le manque de nourriture et de vêtements, surtout pendant la saison des pluies.",
    "Pa-Cang residential cluster was established in 2017, currently there are 30 Co-Tu families living, with 57 adults and 75 children. There are 4 households with stable income. The remaining 26 households do not have jobs. Every day the people go to the moutain or to the river to find food and items that can be sold. Sometimes they are hired to work as masons, cut trees, and nurse trees. The average monthly income of the household is less than 1,500,000 VND. The biggest worry of people every day is lack of food and clothing, especially during the rainy season.":
      "Le cluster résidentiel Pa-Cang a été créé en 2017 et compte actuellement 30 familles de l ’ethnie Co-Tu, avec 57 adultes et 75 enfants. Il y a 4 ménages avec des revenus stables. Les 26 ménages restants n'ont pas d'emploi. Chaque jour, les gens se rendent à la montagne ou à la rivière pour trouver de la nourriture et diverses choses à vendre.  Parfois, ils sont embauchés pour travailler comme maçons, couper du bois ou rèaliser des travaux agricoles. Le revenu mensuel moyen des ménages est inférieur à 1 500 000 VND, environ 60 euros. La plus grande préoccupation des gens au quotidien est le manque de nourriture et de vêtements, surtout pendant la saison des pluies.",
    // ----
    "Nhận thấy sự khó khăn của người dân nơi đây, Smile Eye Charity kêu gọi sự hỗ trợ của các tổ chức cá nhân trong và ngoài nước cùng chung tay với cấp chính quyền, để giúp cùng bà con nơi đây nâng cao kỹ năng làm kinh tế và kỹ năng sống. Cùng chung tay, chúng ta có thể làm cho nơi này trở nên tươi đẹp hơn và giúp người dân tạo ra những cơ hội mới cho tương lai. Hãy tham gia và chia sẻ tình yêu của bạn với bà con nơi đây, để giúp nơi này phát triển và lan tỏa.":
      "Consciente des difficultés rencontrées par les habitants de ce village, Smile Eye Charity appelle au soutien des organisations et des individus outre la participation du gouvernement Vietnamien afin d'aider les habitants à améliorer leurs conditions de vie par des programmes de formation pratique. Ensemble, nous pouvons rendre cet endroit plus beau et aider les gens à créer de nouvelles opportunités pour l'avenir. S'il vous plaît, rejoignez-nous et partagez votre amour avec les gens d’ici, pour aider cet endroit à se developper pour le bonheur de tous.",
    "Recognizing the difficulties of the people here, Smile Eye Charity calls for the support of organizations and individuals to raise hands with the government to help people here improve their living by practical training programs. Together, we can help this place more beautiful and help the people create new opportunities for the future. Please join and share your love with the people here, to help this place grow and spread.":
      "Consciente des difficultés rencontrées par les habitants de ce village, Smile Eye Charity appelle au soutien des organisations et des individus outre la participation du gouvernement Vietnamien afin d'aider les habitants à améliorer leurs conditions de vie par des programmes de formation pratique. Ensemble, nous pouvons rendre cet endroit plus beau et aider les gens à créer de nouvelles opportunités pour l'avenir. S'il vous plaît, rejoignez-nous et partagez votre amour avec les gens d’ici, pour aider cet endroit à se developper pour le bonheur de tous.",
    "ここの人々の生活困難を認識し、スマイル・アイ・チャリティーは、実践的な訓練プログラムによってかれらここの人々の生活改善を支援するために政府に手を上げる団体や個人の支援を呼びかけています。 私たちは力を合わせてこの場所をより美しくし、人々が未来に向けて新たな機会を生み出すお手伝いをすることができます。 ぜひ参加して、ここの人々とあなたの愛を分かち合い、この場所の成長と希望ある未来への広がりを助けてください。":
      "Consciente des difficultés rencontrées par les habitants de ce village, Smile Eye Charity appelle au soutien des organisations et des individus outre la participation du gouvernement Vietnamien afin d'aider les habitants à améliorer leurs conditions de vie par des programmes de formation pratique. Ensemble, nous pouvons rendre cet endroit plus beau et aider les gens à créer de nouvelles opportunités pour l'avenir. S'il vous plaît, rejoignez-nous et partagez votre amour avec les gens d’ici, pour aider cet endroit à se developper pour le bonheur de tous.",
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
    "DỰ ÁN XÂY DỰNG XƯỞNG SẢN XUẤT PHÂN HỮU CƠ":
      "CONSTRUCTION D'UN ATELIER DE PRODUCTION D'ENGRAIS ORGANIQUE",
    有機肥料生産工場の建設:
      "CONSTRUCTION D'UN ATELIER DE PRODUCTION D'ENGRAIS ORGANIQUE",
    // CONTRIBUTOR: "DONATEUR",
    // "NHÀ ĐÓNG GÓP": "DONATEUR",
    // 投稿者: "DONATEUR",
    // "CHARITABLE CONTRIBUTION": "CONTRIBUTION CARITATIVE",
    // "ĐÓNG GÓP TỪ THIỆN": "CONTRIBUTION CARITATIVE",
    // 慈善寄付: "CONTRIBUTION CARITATIVE",
    // FOUNDER: "FONDATEUR",
    // "NGƯỜI SÁNG LẬP": "FONDATEUR",
    // 設立者: "FONDATEUR",
    // cac chuong trinh dang thuc hien
    "PROGRAMS ARE RUNNING": "PROGRAMMES EN COURS",
    "CÁC CHƯƠNG TRÌNH ĐANG THỰC HIỆN": "PROGRAMMES EN COURS",
    実行中のプログラム: "PROGRAMMES EN COURS",
  },
};
const language_options = ["vn", "eng"];

const selectWrapper = document.querySelector(".select-wrapper");
const selectBtn = selectWrapper.querySelector(".select-btn");
const searchInput = selectWrapper.querySelector("input");
const optionsBox = selectWrapper.querySelector(".options");

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

addCountry();

function updateName(selectedLi) {
  selectWrapper.classList.remove("active");
  selectBtn.firstElementChild.textContent = selectedLi.textContent;
  $(".language").each(function (index, element) {
    $(this).text(arrLang[selectedLi.textContent][$(this).text().trim()]);
    console.log(arrLang[selectedLi.textContent][$(this).text().trim()]);
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

