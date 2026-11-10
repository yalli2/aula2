AULA.unit({
  n: 3, title: 'Hogar, dulce hogar', ko: '즐거운 나의 집 — 집 꾸미기',
  goal: '집을 묘사하고 비교하기, 물건 위치·모양·재료 말하기, 취향 표현하기',
  can: ['비교급', '위치 전치사', '소유대명사 el mío…', 'ser vs. estar', 'gustar · encantar · preferir'],
  tags: ['comparativos', 'posesivos tónicos', 'ser / estar', 'la casa', 'muebles', 'preposiciones'],
  vocab: [
    { g: '집 종류 · Tipos de vivienda', w: [['el piso', '아파트(공동주택의 한 집)'], ['el apartamento', '작은 아파트'], ['la casa', '단독주택'], ['el chalé', '정원 딸린 주택'], ['el estudio', '원룸'], ['el ático', '꼭대기층 집'], ['la casa de campo', '시골집']] },
    { g: '집의 공간 · Partes de la casa', w: [['el salón', '거실'], ['la cocina', '부엌'], ['el dormitorio', '침실'], ['el baño', '욕실'], ['el pasillo', '복도'], ['la terraza', '테라스'], ['el balcón', '발코니'], ['el jardín', '정원'], ['el garaje', '차고'], ['el ascensor', '엘리베이터']] },
    { g: '가구·물건 · Muebles', w: [['el sofá', '소파', '🛋️'], ['la cama', '침대', '🛏️'], ['el armario', '옷장'], ['la estantería', '책장'], ['la lámpara', '램프', '💡'], ['la alfombra', '카펫'], ['el espejo', '거울', '🪞'], ['la nevera', '냉장고'], ['la lavadora', '세탁기'], ['el cuadro', '그림 액자', '🖼️'], ['la planta', '화분', '🪴'], ['las cortinas', '커튼']] },
    { g: '모양·재료·스타일', w: [['redondo / redonda', '둥근'], ['cuadrado / cuadrada', '정사각형의'], ['rectangular', '직사각형의'], ['de madera', '나무로 된'], ['de metal', '금속으로 된'], ['de cristal', '유리로 된'], ['de plástico', '플라스틱으로 된'], ['de tela', '천으로 된'], ['moderno / clásico', '현대적인 / 클래식한'], ['luminoso / oscuro', '밝은 / 어두운'], ['amplio / pequeño', '넓은 / 작은']] }
  ],
  gram: [
    { h: '비교급', t: [['형태', '예'], ['más + 형용사 + que', 'Mi piso es **más** grande **que** el tuyo.'], ['menos + 형용사 + que', 'Es **menos** caro **que** el ático.'], ['tan + 형용사 + como', 'Es **tan** luminoso **como** el salón.'], ['명사: más/menos … que', 'Tiene **más** habitaciones **que** mi casa.'], ['tanto/-a/-os/-as + 명사 + como', 'Tiene **tantas** ventanas **como** el mío.']], tip: '불규칙: bueno → **mejor**, malo → **peor**, grande(나이) → **mayor**, pequeño(나이) → **menor**' },
    { h: '위치 전치사', t: [['표현', '뜻'], ['encima de', '위에'], ['debajo de', '아래에'], ['delante de', '앞에'], ['detrás de', '뒤에'], ['dentro de', '안에'], ['al lado de', '옆에'], ['entre … y …', '사이에'], ['con / sin', '~이 있는 / 없는']] },
    { h: '소유대명사 (el mío, la tuya…)', t: [['', '남성 단수', '여성 단수', '복수'], ['나', 'el mío', 'la mía', 'los míos / las mías'], ['너', 'el tuyo', 'la tuya', 'los tuyos / las tuyas'], ['그·그녀·당신', 'el suyo', 'la suya', 'los suyos / las suyas'], ['우리', 'el nuestro', 'la nuestra', 'los nuestros / las nuestras']], ex: [['Mi habitación es pequeña. ¿Y la tuya?', '내 방은 작아. 네 방은?']] },
    { h: 'SER vs. ESTAR (집 묘사)', p: '**ser**: 본질·특징·재료·모양 (Es grande. Es de madera.) · **estar**: 위치·상태 (Está en el centro. Está ordenado.)' },
    { h: 'gustar · encantar · preferir', ex: [['Me encantan las casas antiguas.', '나는 오래된 집이 정말 좋아.'], ['Prefiero vivir en el centro.', '시내에 사는 게 더 좋아.'], ['— A mí me gusta el campo. — A mí también.', '']] }
  ],
  ex: [
    { k: 'fill', t: '비교급 완성', it: ['Mi casa es [más] grande [que] la de Juan. (+)', 'El estudio es [menos] caro [que] el ático. (−)', 'Tu salón es [tan] luminoso [como] el mío. (=)', 'Este sofá es [mejor] que el viejo. (bueno+)', 'Mi hermana es [mayor] que yo. (나이+)', 'Tengo [tantos] libros [como] tú. (=)'] },
    { k: 'mc', t: '두 집 비교하기', d: 'Piso A: 80 m², 3 habitaciones, 900 €, centro · Piso B: 60 m², 2 habitaciones, 700 €, afueras', audio: false, it: [['El piso A es … que el B.', '*más grande|más pequeño|tan grande'], ['El piso B es … que el A.', 'más caro|*más barato|tan caro'], ['El piso A tiene … habitaciones que el B.', 'menos|*más|tantas'], ['El piso B está … del centro que el A.', '*más lejos|más cerca|tan lejos']] },
    { k: 'fill', t: '위치 전치사', d: '그림 대신 설명을 보고 고르세요.', it: ['La lámpara está {*encima de|debajo de} la mesa. (위)', 'El gato duerme {encima de|*debajo de} la cama. (아래)', 'El sofá está {*entre|dentro de} la ventana y la puerta. (사이)', 'La ropa está {encima del|*dentro del} armario. (안)', 'El jardín está {delante de|*detrás de} la casa. (뒤)'] },
    { k: 'fill', t: '소유대명사', it: ['— Mi cocina es muy pequeña. ¿Y [la tuya]? (너의)', '— Este no es mi libro. [El mío] es rojo. (나의)', '— Nuestros vecinos son simpáticos. ¿Y [los vuestros]? (너희의)', '— ¿Es de Ana esta mochila? — Sí, es [la suya]. (그녀의)', '— Vuestra casa es moderna; [la nuestra] es antigua. (우리의)'] },
    { k: 'fill', t: 'ser 또는 estar', it: ['Mi piso {*es|está} muy luminoso.', 'La casa {es|*está} en las afueras.', 'La mesa {*es|está} de madera.', 'Hoy la cocina {es|*está} muy desordenada.', 'El espejo {*es|está} redondo.', 'El baño {es|*está} al final del pasillo.'] },
    { k: 'sort', t: '이 물건은 어느 방에?', cats: ['🍳 cocina', '🛏️ dormitorio', '🛁 baño'], it: [['la nevera', 0], ['la cama', 1], ['la ducha', 2], ['el horno', 0], ['el armario', 1], ['el lavabo', 2], ['la mesita de noche', 1], ['el microondas', 0]] },
    { k: 'tf', t: '읽기 — 집 광고', text: '**SE ALQUILA** ático en el barrio de Gràcia (Barcelona). 75 m², dos dormitorios, salón muy luminoso con chimenea, cocina americana y una terraza de 20 m² con vistas. Muebles de diseño. Sin ascensor (4.º piso). A 5 minutos del metro. 1.300 €/mes.',
      it: [['El piso tiene dos dormitorios.', true], ['Hay ascensor.', false], ['La terraza tiene vistas.', true], ['Está lejos del metro.', false], ['Cuesta más de mil euros al mes.', true]] },
    { k: 'dlg', t: '듣기 — 이사 갈 집 구경', listen: 1,
      lines: [['Agente', 'Este es el salón. Es muy amplio y tiene mucha luz.'], ['Paula', 'Sí, es más grande que el salón de mi piso actual. ¿Y la cocina?'], ['Agente', 'Está al lado. Es pequeña, pero es nueva.'], ['Paula', '¿Tiene lavadora?'], ['Agente', 'Sí, está en el baño, debajo del lavabo.'], ['Paula', 'Mmm… Prefiero una cocina más grande, pero me encanta la terraza.']],
      it: [['거실은 어떤가요?', '*넓고 밝다|작고 어둡다|오래됐다'], ['부엌은?', '크고 오래됐다|*작지만 새것이다|없다'], ['세탁기는 어디에?', '부엌|*욕실 세면대 아래|테라스'], ['Paula가 정말 좋아한 것은?', '부엌|*테라스|욕실']] },
    { k: 'order', t: '문장 만들기', it: ['Mi habitación es más pequeña que la tuya.', 'La lámpara está encima de la mesa.', 'Prefiero las casas con jardín.', 'La mesa es redonda y de madera.'] },
    { k: 'dict', t: '받아쓰기', it: ['El sofá está entre la ventana y la puerta.', 'Me encantan las casas antiguas.', 'Su piso es tan caro como el mío.'] },
    { k: 'write', t: '나의 꿈의 집 설계', d: '어떤 집인지, 방 구성, 가구 위치, 지금 집과의 비교를 써 보세요.', model: 'Mi casa ideal es un ático en el centro de la ciudad. Tiene tres dormitorios, dos baños y un salón enorme con una pared de cristal. En el salón hay un sofá blanco y, encima de la mesa de madera, muchas plantas. Es mucho más luminosa que mi casa actual y tiene una terraza con vistas al mar. ¡Me encanta!' }
  ]
});
