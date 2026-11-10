AULA.unit({
  n: 9, title: 'Antes y ahora', ko: '예전과 지금 — 시대 비교',
  goal: '과거의 습관·관습·상황 묘사하기, 과거와 현재 비교하기 — 가장 흥미로운 시대 토론하기',
  can: ['불완료과거 (pretérito imperfecto)', 'ya no / todavía', '과거·현재 시간 표현', '토론하기'],
  tags: ['pretérito imperfecto', 'ya no / todavía', 'antes / ahora', 'historia', 'etapas de la vida', 'debatir'],
  vocab: [
    { g: '인생의 시기 · Etapas de la vida', w: [['la infancia', '유년기'], ['la niñez', '어린 시절'], ['la adolescencia', '청소년기'], ['la juventud', '청년기'], ['la edad adulta', '성인기'], ['la vejez', '노년기'], ['de pequeño/-a', '어렸을 때'], ['de joven', '젊었을 때'], ['cuando tenía diez años', '10살이었을 때']] },
    { g: '역사 시대 · Periodos históricos', w: [['la Prehistoria', '선사시대'], ['la Antigüedad', '고대'], ['la Edad Media', '중세'], ['el Renacimiento', '르네상스'], ['el siglo XX', '20세기'], ['los años 80', '80년대'], ['la época', '시대'], ['las costumbres', '관습']] },
    { g: '시간 표현 · Marcadores', w: [['antes', '예전에'], ['ahora / hoy en día', '지금 / 요즘'], ['en aquella época', '그 시절에'], ['entonces', '그때'], ['actualmente', '현재'], ['ya no', '더 이상 ~않다'], ['todavía / aún', '아직도'], ['siempre', '항상'], ['a veces', '가끔']] },
    { g: '토론 · Debatir', w: [['Yo creo que…', '내 생각엔…'], ['En mi opinión…', '내 의견으로는…'], ['Estoy de acuerdo.', '동의해.'], ['No estoy de acuerdo.', '동의하지 않아.'], ['Sí, pero…', '그래, 하지만…'], ['Para mí…', '나에게는…'], ['¡Qué va!', '말도 안 돼!']] }
  ],
  gram: [
    { h: '불완료과거 (pretérito imperfecto)', p: '과거의 **습관**, **묘사**, **상황**(“~하곤 했다, ~였다”).', t: [['', 'jugar', 'tener', 'vivir'], ['yo', 'jugaba', 'tenía', 'vivía'], ['tú', 'jugabas', 'tenías', 'vivías'], ['él/ella/usted', 'jugaba', 'tenía', 'vivía'], ['nosotros/-as', 'jugábamos', 'teníamos', 'vivíamos'], ['vosotros/-as', 'jugabais', 'teníais', 'vivíais'], ['ellos/ellas/ustedes', 'jugaban', 'tenían', 'vivían']] },
    { h: '불규칙은 단 3개!', t: [['', 'ser', 'ir', 'ver'], ['yo', 'era', 'iba', 'veía'], ['tú', 'eras', 'ibas', 'veías'], ['él/ella/usted', 'era', 'iba', 'veía'], ['nosotros/-as', 'éramos', 'íbamos', 'veíamos'], ['vosotros/-as', 'erais', 'ibais', 'veíais'], ['ellos/ellas/ustedes', 'eran', 'iban', 'veían']], ex: [['De pequeña era muy tímida y no hablaba mucho.', '어렸을 때 나는 아주 수줍었고 말을 많이 안 했다.'], ['Antes la gente no tenía móviles.', '예전엔 사람들이 휴대폰이 없었다.']] },
    { h: 'YA NO / TODAVÍA', ex: [['Antes vivía en Daejeon, pero ya no vivo allí.', '예전엔 대전에 살았지만 더 이상 안 살아.'], ['Todavía juego al fútbol los domingos.', '아직도 일요일마다 축구를 해.']] },
    { h: '“Antes … ahora …” 비교', ex: [['Antes la gente escribía cartas; ahora manda mensajes.', '예전엔 편지를 썼고, 지금은 메시지를 보낸다.']] }
  ],
  ex: [
    { k: 'fill', t: '불완료과거 규칙형', it: ['De pequeño [jugaba] en la calle con mis amigos. (jugar, yo)', 'Mi abuela [cocinaba] todos los días. (cocinar)', 'Antes nosotros [vivíamos] en un pueblo. (vivir)', '¿Qué [hacías] los veranos? (hacer, tú)', 'En los años 90 la gente [escuchaba] cintas. (escuchar)', 'Mis padres [tenían] una tienda. (tener)'] },
    { k: 'fill', t: 'ser · ir · ver', it: ['Cuando [era] niña, quería ser astronauta. (ser, yo)', 'Los domingos [íbamos] a casa de mis abuelos. (ir, nosotros)', 'Antes [veía] dibujos animados todas las mañanas. (ver, yo)', 'Mi barrio [era] muy tranquilo. (ser)', '¿[Ibas] al colegio andando? (ir, tú)'] },
    { k: 'fill', t: 'ya no 또는 todavía', it: ['Antes fumaba, pero [ya no] fumo.', 'Tengo 70 años y [todavía] trabajo en el campo.', 'Mis padres [ya no] viven en Busan; ahora viven en Seúl.', '¿[Todavía] tienes tu primera bicicleta?'] },
    { k: 'sort', t: '예전? 지금?', d: '디지털 시대 이전(antes)인지 요즘(ahora)인지 분류하세요.', cats: ['📼 antes', '📱 ahora'], it: [['La gente escribía cartas.', 0], ['Vemos series en plataformas.', 1], ['Se usaban cabinas de teléfono.', 0], ['Pagamos con el móvil.', 1], ['Se compraban mapas de papel.', 0], ['Usamos el GPS.', 1]] },
    { k: 'mc', t: '어떤 시대?', d: '설명에 맞는 시대를 고르세요.', it: [['La gente vivía en cuevas y cazaba animales.', '*la Prehistoria|el Renacimiento|el siglo XX'], ['Había reyes, castillos y caballeros.', 'la Prehistoria|*la Edad Media|los años 80'], ['Artistas como Leonardo pintaban y hacían inventos.', 'la Edad Media|*el Renacimiento|la Antigüedad'], ['La gente escuchaba música en walkman.', 'la Edad Media|el Renacimiento|*los años 80']] },
    { k: 'tf', t: '읽기 — 할아버지의 어린 시절', text: 'Mi abuelo **Manuel** nació en un pueblo de Extremadura en 1948. Cuando era pequeño, no había televisión en su casa: por las noches la familia escuchaba la radio. Iba a la escuela andando, a tres kilómetros. En verano ayudaba a su padre en el campo y jugaba en el río con sus hermanos. Ahora vive en Madrid y ya no trabaja, pero todavía va al pueblo cada agosto.',
      it: [['Manuel tenía televisión de pequeño.', false], ['Iba a la escuela en autobús.', false], ['En verano trabajaba en el campo.', true], ['Ahora vive en el pueblo.', false], ['Todavía visita el pueblo en verano.', true]] },
    { k: 'dlg', t: '듣기 — 가장 흥미로운 시대 토론', listen: 1,
      lines: [['Ana', 'Yo creo que el Renacimiento era la época más interesante: había mucho arte y muchos descubrimientos.'], ['Leo', 'Sí, pero la gente vivía muy poco y no había medicinas.'], ['Ana', 'Bueno, eso es verdad.'], ['Leo', 'Para mí, los años 80 molaban: la música era genial y la gente salía mucho.'], ['Ana', '¡Qué va! Tampoco había internet.']],
      it: [['Ana가 가장 흥미롭다고 한 시대는?', '중세|*르네상스|80년대'], ['Leo가 지적한 르네상스의 문제는?', '*수명이 짧고 약이 없었다|예술이 없었다|여행을 못 했다'], ['Leo가 좋아하는 시대는?', '르네상스|20세기 초|*80년대'], ['Ana가 80년대에 반대하는 이유는?', '음악|*인터넷이 없었다|사람들이 안 나갔다']] },
    { k: 'order', t: '문장 만들기', it: ['De pequeño vivía en un pueblo.', 'Antes no había teléfonos móviles.', 'Ya no juego a los videojuegos.', 'En aquella época la gente escribía cartas.'] },
    { k: 'dict', t: '받아쓰기', it: ['Cuando era niño, era muy tímido.', 'Todos los veranos íbamos a la playa.', 'Antes la vida era más tranquila.'] },
    { k: 'write', t: '어린 시절의 나 vs. 지금의 나', d: '어렸을 때(불완료과거) 어땠는지와 지금은 어떤지 비교해 써 보세요. ya no / todavía를 넣으세요.', model: 'Cuando tenía siete años, vivía en Gwangju con mis abuelos. Era una niña muy activa y jugaba en el parque todas las tardes. No me gustaba nada leer. Ahora vivo en Seúl con mis padres y ya no juego en el parque, pero todavía soy muy activa: hago natación. Además, ¡ahora me encanta leer!' }
  ]
});
