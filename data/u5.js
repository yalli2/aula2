AULA.unit({
  n: 5, title: 'Guía del ocio', ko: '여가 가이드 — 주말 계획 세우기',
  goal: '여가 활동과 시간표 말하기, 경험 이야기하기, 계획과 의도 말하기',
  can: ['현재완료 (경험)', 'ya / todavía no', 'ir a + 원형', 'querer / pensar + 원형', '여가·여행 어휘'],
  tags: ['pretérito perfecto', 'ya / todavía no', 'ir a', 'pensar', 'ocio', 'viajes', 'horarios'],
  vocab: [
    { g: '여가 장소 · Lugares de ocio', w: [['el teatro', '극장'], ['la sala de conciertos', '공연장'], ['el museo', '박물관'], ['la exposición', '전시회'], ['el parque de atracciones', '놀이공원', '🎢'], ['el mercadillo', '벼룩시장'], ['la discoteca', '클럽'], ['la terraza', '야외 카페'], ['el estadio', '경기장', '🏟️'], ['el acuario', '수족관']] },
    { g: '여가 활동 · Actividades', w: [['ir de tapas', '타파스 먹으러 가다'], ['ir de compras', '쇼핑 가다'], ['salir de noche', '밤에 놀러 나가다'], ['hacer senderismo', '트레킹하다', '🥾'], ['montar en kayak', '카약 타다'], ['ver un musical', '뮤지컬을 보다'], ['dar un paseo', '산책하다'], ['tomar el sol', '햇볕을 쬐다'], ['visitar el casco antiguo', '구시가지를 방문하다'], ['hacer una ruta en bici', '자전거 코스를 돌다']] },
    { g: '시간표·예약 · Horarios', w: [['abre a las…', '…시에 연다'], ['cierra a las…', '…시에 닫는다'], ['de lunes a viernes', '월요일부터 금요일까지'], ['la entrada', '입장권'], ['gratis / gratuito', '무료'], ['reservar', '예약하다'], ['la visita guiada', '가이드 투어'], ['el horario', '운영 시간']] }
  ],
  gram: [
    { h: '현재완료 — 경험과 오늘의 일', p: 'haber + 과거분사. **alguna vez, nunca, ya, todavía no, hoy, este fin de semana**와 함께.', ex: [['¿Has estado alguna vez en Granada?', '그라나다에 가 본 적 있어?'], ['Este fin de semana he ido al teatro.', '이번 주말에 극장에 갔어.']], tip: '불규칙 과거분사 복습: hecho, visto, escrito, dicho, puesto, vuelto, abierto, roto, muerto' },
    { h: 'YA / TODAVÍA NO', ex: [['¿Ya has comprado las entradas? — Sí, ya las he comprado.', '벌써 표 샀어? — 응, 이미 샀어.'], ['Todavía no he visto la exposición.', '아직 전시회를 못 봤어.']] },
    { h: 'IR A + 원형 (미래 계획)', t: [['', 'ir a'], ['yo', 'voy a'], ['tú', 'vas a'], ['él/ella/usted', 'va a'], ['nosotros/-as', 'vamos a'], ['vosotros/-as', 'vais a'], ['ellos/ellas/ustedes', 'van a']], ex: [['Este sábado vamos a ir a un concierto.', '이번 토요일에 콘서트에 갈 거야.']] },
    { h: 'QUERER / PENSAR + 원형 (의도)', p: '**pensar** + 원형 = ~할 생각이다 (e → ie: pienso, piensas…)', ex: [['Pienso visitar el Museo Reina Sofía.', '레이나 소피아 미술관에 갈 생각이야.'], ['Queremos hacer senderismo en la sierra.', '우리는 산에서 트레킹하고 싶어.']] }
  ],
  ex: [
    { k: 'fill', t: '현재완료로 경험 묻기', it: ['¿[Has visto] alguna vez un musical? (ver, tú)', 'Yo nunca [he montado] en kayak. (montar)', 'Mis amigos [han ido] tres veces a ese festival. (ir)', '¿[Habéis probado] las tapas de este bar? (probar)', 'Hoy [hemos hecho] una ruta en bici. (hacer)'] },
    { k: 'mc', t: 'ya 또는 todavía no', it: [['— ¿Has reservado el hotel? — Sí, …', '*ya lo he reservado.|todavía no lo he reservado.'], ['— ¿Has visto la nueva película? — No, …', 'ya la he visto.|*todavía no la he visto.'], ['Son las diez y la tienda … ha abierto. ¡Qué raro!', 'ya|*todavía no'], ['— ¿Quieres comer? — No, gracias, … he comido.', '*ya|todavía no']] },
    { k: 'fill', t: 'ir a + 원형', it: ['Mañana [voy a] visitar el museo. (yo)', '¿Qué [vas a] hacer el sábado? (tú)', 'Mis padres [van a] cenar fuera. (ellos)', 'Nosotros [vamos a] ver un partido. (nosotros)', '¿[Vais a] venir a la fiesta? (vosotros)'] },
    { k: 'fill', t: 'pensar / querer + 원형', it: ['Este verano [pienso] hacer el Camino de Santiago. (pensar, yo)', '¿Qué [piensas] hacer después del examen? (pensar, tú)', 'Lucía [quiere] ir a un concierto de jazz. (querer)', 'Nosotros [pensamos] salir temprano. (pensar)'] },
    { k: 'tf', t: '읽기 — 주말 여가 안내', text: '**FIN DE SEMANA EN SEVILLA**\n🏛️ **Real Alcázar**: abre de martes a domingo de 9:30 a 19:00. Entrada: 14,50 €; gratis los lunes por la tarde para residentes.\n🎭 **Flamenco en Triana**: espectáculo a las 21:00 y a las 23:00. Reserva obligatoria.\n🚲 **Ruta en bici por el río**: salida los sábados a las 10:00 desde la Torre del Oro. Visita guiada en español e inglés.\n🛍️ **Mercadillo del Jueves**: solo los jueves por la mañana.',
      it: [['El Alcázar abre los lunes para todos.', false], ['Hay dos espectáculos de flamenco por la noche.', true], ['Hay que reservar para el flamenco.', true], ['La ruta en bici sale el domingo.', false], ['El mercadillo es el fin de semana.', false]] },
    { k: 'dlg', t: '듣기 — 주말 계획', listen: 1,
      lines: [['Raúl', '¿Qué vas a hacer este fin de semana?'], ['Elena', 'El sábado pienso ir al concierto de Rosalía. ¡Ya he comprado las entradas!'], ['Raúl', '¡Qué suerte! Yo nunca la he visto en directo.'], ['Elena', '¿Y tú?'], ['Raúl', 'Voy a hacer senderismo con mi hermano en la sierra. Todavía no hemos decidido la ruta.'], ['Elena', 'Pues yo el domingo quiero ir al mercadillo. ¿Vienes?']],
      it: [['Elena는 토요일에 무엇을 하나요?', '*콘서트|트레킹|벼룩시장'], ['Elena는 표를…', '아직 못 샀다|*이미 샀다|선물 받았다'], ['Raúl은 누구와 트레킹?', '친구|*형제|사촌'], ['아직 정하지 않은 것은?', '날짜|*코스|시간']] },
    { k: 'sort', t: '도시? 자연?', cats: ['🏙️ ciudad', '🌲 naturaleza'], it: [['ir de tapas', 0], ['hacer senderismo', 1], ['visitar un museo', 0], ['montar en kayak', 1], ['ver un musical', 0], ['observar aves', 1], ['ir de compras', 0], ['acampar', 1]] },
    { k: 'order', t: '문장 만들기', it: ['¿Has estado alguna vez en Sevilla?', 'Todavía no hemos reservado las entradas.', 'Este sábado voy a ir al teatro.', 'Pienso hacer una ruta en bici.'] },
    { k: 'dict', t: '받아쓰기', it: ['El museo abre a las diez.', 'Ya he visto esa exposición.', '¿Qué vas a hacer mañana?'] },
    { k: 'write', t: '스페인 도시 주말 계획', d: '스페인 도시 하나를 골라 토·일 계획(ir a, pensar, querer)과 이미 해 본 것(현재완료)을 써 보세요.', model: 'Este fin de semana voy a ir a Valencia con mi familia. El sábado por la mañana pensamos visitar la Ciudad de las Artes y las Ciencias y después vamos a comer paella en la playa. Nunca he probado la paella valenciana auténtica. El domingo quiero hacer una ruta en bici por el parque del Turia.' }
  ]
});
