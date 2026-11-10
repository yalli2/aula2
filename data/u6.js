AULA.unit({
  n: 6, title: 'No como carne', ko: '나는 고기를 안 먹어 — 요리와 식습관',
  goal: '식습관과 취향 말하기, 요리법 설명하기 — 반 파티 메뉴 준비하기',
  can: ['직접목적대명사 lo/la/los/las', '비인칭 se (레시피)', 'ser vs. estar (음식)', 'y · pero · además', '무게·분량'],
  tags: ['pronombres OD', 'se impersonal', 'recetas', 'ser / estar', 'alimentos', 'pesos y medidas'],
  vocab: [
    { g: '식재료 · Alimentos', w: [['las legumbres', '콩류'], ['los garbanzos', '병아리콩'], ['las lentejas', '렌틸콩'], ['el tofu', '두부'], ['la harina', '밀가루'], ['el azúcar', '설탕'], ['la sal', '소금'], ['la pimienta', '후추'], ['la mantequilla', '버터'], ['el pimiento', '파프리카'], ['el calabacín', '애호박'], ['la berenjena', '가지'], ['el limón', '레몬', '🍋'], ['las especias', '향신료']] },
    { g: '요리 동사 · Cocinar', w: [['cortar', '자르다', '🔪'], ['pelar', '껍질을 벗기다'], ['freír', '튀기다'], ['hervir', '끓이다'], ['añadir', '넣다·첨가하다'], ['mezclar', '섞다'], ['batir', '휘젓다'], ['calentar', '데우다'], ['echar', '붓다·넣다'], ['servir', '내다·담다'], ['asar', '굽다'], ['dejar enfriar', '식히다']] },
    { g: '분량 · Pesos y medidas', w: [['un kilo de', '1킬로'], ['medio kilo de', '0.5킬로'], ['cien gramos de', '100그램'], ['un litro de', '1리터'], ['una docena de huevos', '달걀 한 판(12개)'], ['una cucharada de', '한 숟가락'], ['un poco de', '약간'], ['una lata de', '한 캔'], ['un paquete de', '한 봉지'], ['un diente de ajo', '마늘 한 쪽']] },
    { g: '식습관 · Hábitos', w: [['ser vegetariano/-a', '채식주의자이다'], ['ser vegano/-a', '비건이다'], ['ser alérgico/-a a', '…알레르기가 있다'], ['no tomar lácteos', '유제품을 안 먹다'], ['comer sano', '건강하게 먹다'], ['picar entre horas', '간식을 먹다'], ['estar a dieta', '다이어트 중이다']] }
  ],
  gram: [
    { h: '직접목적대명사 (복습·확장)', p: '앞에 나온 사물을 대신해요. 활용된 동사 **앞**, 또는 원형·현재분사 **뒤에 붙여** 씀.', t: [['', '남성', '여성'], ['단수', 'lo', 'la'], ['복수', 'los', 'las']], ex: [['— ¿Comes carne? — No, no la como nunca.', '고기 먹어? — 아니, 절대 안 먹어.'], ['Las patatas tienes que pelarlas primero.', '감자는 먼저 껍질을 벗겨야 해.']] },
    { h: '비인칭 se — 레시피 쓰기', ex: [['Primero se cortan las cebollas.', '먼저 양파를 자른다.'], ['Después se añade un poco de sal.', '그다음 소금을 조금 넣는다.'], ['Se sirve frío.', '차갑게 낸다.']] },
    { h: 'SER vs. ESTAR — 음식', p: '**ser**: 일반적 특징·평가 (La paella **es** un plato típico. Las fresas **son** dulces.) · **estar**: 지금 이 음식의 맛·상태 (Esta sopa **está** muy salada. La carne **está** cruda.)' },
    { h: '연결어 y · pero · además', ex: [['No como carne, pero sí como pescado.', '고기는 안 먹지만 생선은 먹어.'], ['Es fácil de preparar y, además, es muy barato.', '만들기 쉽고, 게다가 아주 싸.']] }
  ],
  ex: [
    { k: 'fill', t: 'lo · la · los · las', it: ['— ¿Tomas leche? — No, no [la] tomo: soy vegano.', '— ¿Dónde compras el pan? — [Lo] compro en la panadería.', '— ¿Y los garbanzos? — [Los] pongo en agua la noche anterior.', '— ¿Te gustan las berenjenas? — Sí, [las] hago al horno.', '— ¿El tofu? Tienes que cortar[lo] en cubos.'] },
    { k: 'fill', t: '레시피 — 비인칭 se', d: '동사의 단·복수에 주의!', it: ['Primero se {*pela|pelan} la cebolla.', 'Después se {corta|*cortan} los tomates.', 'Se {*añade|añaden} un poco de aceite.', 'Se {bate|*baten} los huevos.', 'Se {*sirve|sirven} con pan.'] },
    { k: 'fill', t: 'ser 또는 estar', it: ['El gazpacho {*es|está} una sopa fría.', '¡Uf! Este café {es|*está} muy caliente.', 'Los limones {*son|están} ácidos.', 'La sopa {es|*está} un poco sosa hoy.', 'El aguacate {*es|está} una fruta muy sana.'] },
    { k: 'mc', t: '분량 표현', it: [['… de leche', 'un kilo|*un litro|una docena'], ['… de huevos', '*una docena|un litro|una lata'], ['… de azúcar', 'un diente|*cien gramos|una docena'], ['… de ajo', 'un litro|*un diente|una lata'], ['… de atún', 'un diente|un litro|*una lata']] },
    { k: 'order', t: '레시피 순서 맞추기 — 토르티야', d: '각 문장을 바른 순서로 만드세요.', it: ['Primero se pelan las patatas.', 'Luego se fríen con un poco de cebolla.', 'Después se baten los huevos.', 'Al final se mezcla todo en la sartén.'] },
    { k: 'tf', t: '듣기 — 파티 메뉴 회의', listen: 1,
      lines: [['Aitor', 'Bueno, para la fiesta de la clase, ¿qué preparamos?'], ['Sara', 'Yo hago una ensalada de lentejas. Además, es perfecta para Kofi, que es vegano.'], ['Aitor', 'Yo puedo traer una tortilla de patatas, pero lleva huevo.'], ['Kofi', 'No pasa nada, yo no la como, pero hay más cosas.'], ['Sara', 'Ojo, Lena es alérgica a los frutos secos.'], ['Aitor', 'Vale, entonces nada de almendras en el postre.']],
      it: [['Sara prepara una ensalada de lentejas.', true], ['Kofi es vegetariano pero toma huevos.', false], ['La tortilla lleva huevo.', true], ['Lena es alérgica a la leche.', false], ['El postre no va a llevar almendras.', true]] },
    { k: 'sort', t: '비건이 먹을 수 있을까?', cats: ['🌱 sí', '🚫 no'], it: [['las lentejas', 0], ['el queso', 1], ['el tofu', 0], ['la miel', 1], ['el arroz', 0], ['los huevos', 1], ['las espinacas', 0], ['el jamón', 1]] },
    { k: 'match', t: '요리 동사', it: [['pelar', '껍질을 벗기다'], ['hervir', '끓이다'], ['batir', '휘젓다'], ['añadir', '첨가하다'], ['freír', '튀기다'], ['cortar', '자르다']] },
    { k: 'dict', t: '받아쓰기', it: ['No como carne, pero sí pescado.', 'Se añade un poco de sal.', 'Esta sopa está muy rica.'] },
    { k: 'write', t: '우리 반 파티 레시피', d: '파티에 가져갈 요리 하나를 골라 재료(분량)와 만드는 법을 비인칭 se로 써 보세요.', model: 'Ensalada de garbanzos (para 6 personas). Ingredientes: medio kilo de garbanzos cocidos, dos tomates, un pimiento, media cebolla, aceite de oliva, sal y un limón. Primero se cortan los tomates, el pimiento y la cebolla. Después se mezclan con los garbanzos. Se añade aceite, sal y zumo de limón. Se sirve fría. ¡Es vegana y, además, muy fácil!' }
  ]
});
