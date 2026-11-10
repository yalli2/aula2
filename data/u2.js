AULA.unit({
  n: 2, title: 'Una vida de película', ko: '영화 같은 인생 — 전기 쓰기',
  goal: '과거의 사건을 순서대로 이야기하고, 유명인의 전기(biografía) 쓰기',
  can: ['단순과거 (pretérito indefinido)', 'empezar a + 원형', 'irse', '과거 시간 표현', 'desde / durante / hasta'],
  tags: ['pretérito indefinido', 'biografías', 'cine', 'marcadores temporales', 'empezar a', 'irse'],
  vocab: [
    { g: '인생 사건 · Biografías', w: [['nacer', '태어나다'], ['crecer', '자라다'], ['estudiar en la universidad', '대학에서 공부하다'], ['terminar la carrera', '대학을 졸업하다'], ['conseguir un trabajo', '일자리를 얻다'], ['casarse (con)', '(~와) 결혼하다'], ['separarse / divorciarse', '별거하다 / 이혼하다'], ['tener un hijo', '아이를 낳다'], ['mudarse', '이사하다'], ['irse a vivir a', '~로 살러 가다'], ['ganar un premio', '상을 받다', '🏆'], ['morir', '죽다'], ['jubilarse', '은퇴하다']] },
    { g: '영화 · El cine', w: [['el director / la directora', '감독'], ['el actor / la actriz', '배우'], ['el guion', '시나리오'], ['rodar una película', '영화를 촬영하다'], ['estrenar', '개봉하다'], ['el estreno', '개봉'], ['el papel protagonista', '주연'], ['la banda sonora', '사운드트랙'], ['el éxito', '성공·히트']] },
    { g: '과거 시간 표현', w: [['ayer', '어제'], ['anteayer', '그제'], ['anoche', '어젯밤'], ['el lunes pasado', '지난 월요일'], ['la semana pasada', '지난주'], ['el año pasado', '작년'], ['en 1995', '1995년에'], ['hace dos años', '2년 전에'], ['a los 18 años', '18살 때'], ['al año siguiente', '그다음 해에'], ['dos años después', '2년 후에']] }
  ],
  gram: [
    { h: '단순과거 — 규칙형', p: '끝난 과거(어제, 작년, 1990년에…)의 사건.', t: [['', 'trabajar', 'nacer', 'vivir'], ['yo', 'trabajé', 'nací', 'viví'], ['tú', 'trabajaste', 'naciste', 'viviste'], ['él/ella/usted', 'trabajó', 'nació', 'vivió'], ['nosotros/-as', 'trabajamos', 'nacimos', 'vivimos'], ['vosotros/-as', 'trabajasteis', 'nacisteis', 'vivisteis'], ['ellos/ellas/ustedes', 'trabajaron', 'nacieron', 'vivieron']], tip: '-er와 -ir 동사는 같은 어미! 철자 변화: empezar → empe**cé**, llegar → lle**gué**, buscar → bus**qué**, leer → le**yó**' },
    { h: '단순과거 — 주요 불규칙', t: [['', 'ser / ir', 'estar', 'tener', 'hacer'], ['yo', 'fui', 'estuve', 'tuve', 'hice'], ['tú', 'fuiste', 'estuviste', 'tuviste', 'hiciste'], ['él/ella/usted', 'fue', 'estuvo', 'tuvo', 'hizo'], ['nosotros/-as', 'fuimos', 'estuvimos', 'tuvimos', 'hicimos'], ['vosotros/-as', 'fuisteis', 'estuvisteis', 'tuvisteis', 'hicisteis'], ['ellos/ellas/ustedes', 'fueron', 'estuvieron', 'tuvieron', 'hicieron']], tip: '**ser**와 **ir**는 단순과거 형태가 같아요: Fue actriz. (ser) / Fue a París. (ir)' },
    { h: 'EMPEZAR A + 원형 / IRSE', ex: [['Empezó a cantar a los ocho años.', '8살에 노래를 시작했다.'], ['En 2010 se fue a vivir a Nueva York.', '2010년에 뉴욕으로 살러 떠났다.']] },
    { h: 'desde · durante · hasta', ex: [['Vivió en Cuba desde 1990 hasta 2001.', '1990년부터 2001년까지 쿠바에 살았다.'], ['Trabajó en la radio durante diez años.', '10년 동안 라디오에서 일했다.']] }
  ],
  ex: [
    { k: 'fill', t: '규칙 단순과거', it: ['Picasso [nació] en Málaga en 1881. (nacer)', 'Yo [terminé] la carrera en 2018. (terminar)', '¿Dónde [viviste] el año pasado? (vivir, tú)', 'Mis abuelos se [casaron] en 1975. (casarse)', 'Nosotros [estudiamos] juntos en Lima. (estudiar)', 'Ella [ganó] un premio muy importante. (ganar)', '¿Vosotros [vendisteis] la casa? (vender)'] },
    { k: 'fill', t: '철자 변화 주의 (yo)', it: ['Ayer [llegué] tarde a clase. (llegar)', 'El año pasado [empecé] a estudiar chino. (empezar)', '[Busqué] la palabra en el diccionario. (buscar)', '[Pagué] con tarjeta. (pagar)', '[Toqué] la guitarra en la fiesta. (tocar)'] },
    { k: 'fill', t: '불규칙 단순과거', it: ['Frida Kahlo [fue] una pintora mexicana. (ser)', 'El verano pasado [fuimos] a Cuba. (ir, nosotros)', 'Ayer [estuve] en casa todo el día. (estar, yo)', 'Mi madre [tuvo] tres hijos. (tener)', '¿Qué [hiciste] el fin de semana? (hacer, tú)', 'Ellos [estuvieron] en Chile durante un mes. (estar)'] },
    { k: 'mc', t: 'ser? ir?', d: 'fue / fueron이 ser인지 ir인지 고르세요.', it: [['Gabriel García Márquez **fue** un escritor colombiano.', '*ser|ir'], ['El verano pasado **fue** a Japón.', 'ser|*ir'], ['Los Beatles **fueron** muy famosos.', '*ser|ir'], ['Mis padres **fueron** al cine.', 'ser|*ir'], ['La fiesta **fue** increíble.', '*ser|ir']] },
    { k: 'fill', t: 'desde · durante · hasta · hace', it: ['Vivió en Roma [desde] 1999 [hasta] 2005.', 'Trabajé en un restaurante [durante] tres veranos.', 'Me mudé a esta ciudad [hace] dos años.', 'Estudié alemán [hasta] los dieciocho años.'] },
    { k: 'tf', t: '읽기 — 감독의 전기', d: '가상의 영화감독 이야기입니다. 읽고 V/F.',
      text: '**Lucía Ferrer** nació en Zaragoza en 1978. A los quince años empezó a hacer cortometrajes con la cámara de su padre. Estudió Comunicación Audiovisual en Barcelona y en 2003 se fue a vivir a México, donde trabajó como guionista durante seis años. En 2010 rodó su primera película, *Tierra de nadie*, que ganó un premio en el Festival de San Sebastián. Se casó con un actor argentino y tuvo dos hijas. Desde 2015 vive en Madrid.',
      it: [['Lucía nació en Barcelona.', false], ['Empezó a hacer cortos a los quince años.', true], ['Trabajó en México como actriz.', false], ['Su primera película ganó un premio.', true], ['Vivió en México seis años.', true]] },
    { k: 'dlg', t: '듣기 — 지난 주말에 뭐 했어?', listen: 1,
      lines: [['Irene', '¿Qué hiciste el fin de semana, Marcos?'], ['Marcos', 'El sábado fui al estreno de la nueva película de Almodóvar.'], ['Irene', '¡Qué bien! ¿Y te gustó?'], ['Marcos', 'Sí, mucho. La banda sonora es preciosa. ¿Y tú?'], ['Irene', 'Yo estuve en casa de mis abuelos en Toledo. Volví ayer por la noche.']],
      it: [['Marcos는 토요일에 무엇을 했나요?', '콘서트|*영화 개봉 관람|축구'], ['Marcos가 특히 좋아한 것은?', '배우|*사운드트랙|감독'], ['Irene은 어디에 있었나요?', '마드리드|*톨레도|세비야'], ['Irene은 언제 돌아왔나요?', '오늘 아침|*어젯밤|일요일 아침']] },
    { k: 'match', t: '인생의 순서', d: '빈칸에 이어질 말을 연결하세요.', it: [['Nació en Quito', 'en 1990.'], ['A los 6 años', 'empezó a ir al colegio.'], ['Terminó la carrera', 'y consiguió su primer trabajo.'], ['En 2018 se casó', 'con su novio de la universidad.'], ['Dos años después', 'tuvo una hija.']] },
    { k: 'order', t: '문장 만들기', it: ['Nació en Sevilla en 1985.', 'A los veinte años se fue a vivir a Londres.', 'Trabajó como actriz durante diez años.', '¿Qué hiciste ayer por la tarde?'] },
    { k: 'dict', t: '받아쓰기', it: ['El año pasado fui a México.', 'Empezó a cantar muy joven.', 'Vivieron en Chile hasta 2010.'] },
    { k: 'write', t: '전기 쓰기', d: '존경하는 사람(또는 가족)의 인생을 단순과거로 6문장 이상 써 보세요.', model: 'Mi abuela nació en Jeonju en 1950. A los ocho años se fue a vivir a Seúl con su familia. Estudió para ser profesora y empezó a trabajar en una escuela en 1972. Se casó con mi abuelo en 1975 y tuvieron tres hijos. Trabajó como profesora durante treinta y cinco años. En 2010 se jubiló y ahora vive en el campo.' }
  ]
});
