AULA.unit({
  n: 7, title: 'Nos gustó mucho', ko: '정말 좋았어 — 경험 평가하기',
  goal: '경험을 이야기하고 평가하기, 사람·장소에 대한 인상 말하기, 하고 싶은 것 표현하기',
  can: ['현재완료 vs. 단순과거', 'parecer', 'me gustaría + 원형', 'caer bien / mal', '감탄문 ¡Qué…!', 'pasárselo bien'],
  tags: ['perfecto vs. indefinido', 'parecer', 'gustaría', 'caer bien', 'exclamativas', 'cultura'],
  vocab: [
    { g: '평가 · Valorar', w: [['¡Qué bonito!', '정말 예쁘다!'], ['¡Qué rollo!', '정말 지루해!'], ['¡Qué pasada!', '대박!'], ['¡Qué miedo!', '무서워!'], ['genial / estupendo', '훌륭한'], ['increíble', '믿을 수 없는'], ['precioso', '아름다운'], ['aburrido', '지루한'], ['horrible', '끔찍한'], ['impresionante', '인상적인'], ['un poco decepcionante', '좀 실망스러운']] },
    { g: '경험 · Experiencias', w: [['pasárselo bien / mal', '즐겁게 / 안 즐겁게 보내다'], ['pasárselo bomba', '엄청 재밌게 보내다'], ['caer bien / mal', '(사람이) 마음에 들다 / 안 들다'], ['parecer', '~처럼 보이다/생각되다'], ['merecer la pena', '~할 가치가 있다'], ['recomendar', '추천하다'], ['probar', '맛보다'], ['conocer', '알게 되다·가 보다']] },
    { g: '문화 명소 · Ofertas culturales', w: [['el barrio histórico', '역사 지구'], ['el mirador', '전망대'], ['el festival', '축제'], ['la feria', '박람회·축제'], ['el espectáculo', '공연'], ['la catedral', '대성당'], ['la galería de arte', '미술관'], ['el palacio', '궁전']] }
  ],
  gram: [
    { h: '현재완료 vs. 단순과거', t: [['현재완료 (he visitado)', '단순과거 (visité)'], ['hoy, esta mañana, este año', 'ayer, anoche, el año pasado'], ['alguna vez, nunca, ya, todavía no', 'en 2019, hace tres días, el lunes'], ['아직 끝나지 않은 시간 안의 일', '끝난 시간 안의 일']], ex: [['Este verano he estado en Perú.', '올여름 페루에 다녀왔어.'], ['El verano pasado estuve en Perú.', '작년 여름 페루에 갔었어.']], tip: '중남미와 스페인 일부 지역에서는 현재완료 대신 단순과거를 더 많이 써요.' },
    { h: 'PARECER — 인상 말하기 (gustar처럼)', ex: [['El museo me pareció muy interesante.', '박물관은 아주 흥미로웠어.'], ['¿Qué te parecieron los conciertos?', '콘서트들 어땠어?']] },
    { h: 'CAER BIEN / MAL — 사람의 인상', ex: [['Tu primo me cae muy bien.', '네 사촌 정말 마음에 들어.'], ['Los vecinos nos cayeron fatal.', '이웃들이 우리 마음에 전혀 안 들었어.']] },
    { h: 'ME GUSTARÍA + 원형 (하고 싶다, 소망)', t: [['', ''], ['(a mí)', 'me gustaría'], ['(a ti)', 'te gustaría'], ['(a él/ella)', 'le gustaría'], ['(a nosotros)', 'nos gustaría']], th: false, ex: [['Me gustaría volver a Cuba.', '쿠바에 다시 가고 싶어.']] },
    { h: '감탄문 ¡Qué…!', ex: [['¡Qué bonito!', '정말 예쁘다!'], ['¡Qué ciudad tan bonita!', '정말 예쁜 도시다!'], ['¡Qué bien lo pasamos!', '정말 즐거웠어!']] }
  ],
  ex: [
    { k: 'fill', t: '현재완료? 단순과거?', it: ['Esta mañana {*he visitado|visité} el Museo del Prado.', 'El año pasado {he ido|*fui} a Costa Rica.', '¿{*Has probado|Probaste} alguna vez el mate?', 'Anoche {hemos cenado|*cenamos} en un restaurante peruano.', 'En 2020 {ha vivido|*vivió} en Buenos Aires.', 'Hoy {*me he levantado|me levanté} muy temprano.'] },
    { k: 'fill', t: '단순과거 / 현재완료 형태 쓰기', it: ['Ayer [vi] una película muy buena. (ver, yo)', 'Este fin de semana [hemos ido] a la playa. (ir, nosotros)', 'El verano pasado mis padres [viajaron] a Perú. (viajar)', '¿Ya [has terminado] el libro? (terminar, tú)', 'Hace dos años [conocí] a mi mejor amiga. (conocer, yo)'] },
    { k: 'fill', t: 'parecer / caer bien·mal', it: ['El concierto me [pareció] increíble. (parecer, 과거)', 'Las playas nos [parecieron] preciosas. (parecer, 과거)', 'La nueva profesora me [cae] muy bien. (caer, 현재)', 'Tus amigos me [cayeron] genial. (caer, 과거)', '¿Qué te [parece] la idea? (parecer, 현재)'] },
    { k: 'mc', t: '감탄문 고르기', it: [['친구가 해외여행 사진을 보여 줘요. 바다가 정말 예뻐요!', '*¡Qué bonito!|¡Qué rollo!|¡Qué miedo!'], ['3시간 동안 지루한 강의를 들었어요.', '¡Qué pasada!|*¡Qué rollo!|¡Qué bien!'], ['롤러코스터가 엄청 높아요.', '¡Qué aburrido!|*¡Qué miedo!|¡Qué rico!'], ['콘서트가 최고였어요!', '*¡Qué pasada!|¡Qué rollo!|¡Qué pena!']] },
    { k: 'fill', t: 'me/te/le/nos… gustaría', it: ['A mí [me] gustaría conocer Machu Picchu.', '¿[Te] gustaría venir con nosotros?', 'A mis padres [les] gustaría vivir en el campo.', 'A nosotros [nos] gustaría aprender a bailar tango.'] },
    { k: 'tf', t: '읽기 — 여행 블로그', text: '**Tres días en Oaxaca (México)**\nEl mes pasado estuve en Oaxaca y ¡me encantó! El primer día visité el centro histórico: las iglesias me parecieron impresionantes. El segundo día fui a Monte Albán, unas ruinas zapotecas. ¡Qué vistas! Lo único malo: hizo muchísimo calor. El último día probé el mole negro y el chocolate caliente. La gente me cayó genial: todos muy amables. Me gustaría volver para la Guelaguetza, un festival de julio. ¡Merece mucho la pena!',
      it: [['La autora fue a Oaxaca el mes pasado.', true], ['Las iglesias le parecieron aburridas.', false], ['En Monte Albán hizo frío.', false], ['La gente le cayó muy bien.', true], ['Quiere volver para un festival.', true]] },
    { k: 'dlg', t: '듣기 — 여행 다녀온 친구', listen: 1,
      lines: [['Nerea', '¡Hola, Iván! ¿Qué tal por Lisboa?'], ['Iván', '¡Genial! Nos lo pasamos bomba. La ciudad me pareció preciosa.'], ['Nerea', '¿Y qué hicisteis?'], ['Iván', 'Subimos al mirador de Santa Lucía y fuimos a un concierto de fado. ¡Qué pasada!'], ['Nerea', '¿Y el hotel?'], ['Iván', 'Bueno… un poco decepcionante. Y el recepcionista nos cayó fatal.']],
      it: [['Iván은 리스본 여행이 어땠나요?', '*아주 즐거웠다|지루했다|무서웠다'], ['Iván 일행이 간 공연은?', '플라멩코|*파두|재즈'], ['호텔은 어땠나요?', '최고|*좀 실망스러움|아주 쌈'], ['리셉션 직원은?', '마음에 들었다|*전혀 마음에 안 들었다|못 만났다']] },
    { k: 'order', t: '문장 만들기', it: ['El museo me pareció muy interesante.', '¿Te gustaría ir a Granada?', 'Este verano he estado en Perú.', '¡Qué ciudad tan bonita!'] },
    { k: 'dict', t: '받아쓰기', it: ['Nos lo pasamos muy bien.', 'Tus amigos me caen genial.', 'Me gustaría volver el año que viene.'] },
    { k: 'write', t: '여행 후기 쓰기', d: '가 본 곳(또는 우리 도시)의 추천 명소 3곳을 평가하는 글을 써 보세요. parecer, ¡Qué…!, me gustaría를 사용하세요.', model: 'El año pasado estuve en Gyeongju con mi clase. Primero visitamos el templo Bulguksa: me pareció precioso. Después fuimos al museo nacional, un poco aburrido para mí. Por la noche vimos el estanque Donggung iluminado. ¡Qué bonito! Nos lo pasamos genial. Me gustaría volver en primavera para ver los cerezos.' }
  ]
});
