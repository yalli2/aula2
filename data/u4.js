AULA.unit({
  n: 4, title: '¿Cómo va todo?', ko: '다들 잘 지내? — 사교 상황 표현',
  goal: '격식·비격식 상황에서 인사·소개·초대하기, 부탁·허락 구하기, 변명하기',
  can: ['현재분사(gerundio)', 'estar + gerundio', '조건법으로 공손하게', 'dar · dejar · prestar', 'tú vs. usted'],
  tags: ['gerundio', 'estar + gerundio', 'condicional', 'cortesía', 'pedir permiso', 'invitaciones'],
  vocab: [
    { g: '인사·작별 (격식/비격식)', w: [['¿Cómo va todo?', '다 잘 돼가?'], ['¿Qué tal te va?', '어떻게 지내?'], ['¡Cuánto tiempo!', '오랜만이야!'], ['¿Cómo está usted?', '어떻게 지내십니까?'], ['Le presento a…', '…를 소개해 드립니다'], ['Te presento a…', '…를 소개할게'], ['Mucho gusto', '반갑습니다'], ['Encantado/-a', '반가워요'], ['Me tengo que ir', '이제 가야 해'], ['Recuerdos a tu familia', '가족에게 안부 전해 줘'], ['¡Que te vaya bien!', '잘 지내!']] },
    { g: '부탁·허락 · Pedir y conceder', w: [['¿Puedo…?', '…해도 돼?'], ['¿Te importa si…?', '…해도 괜찮아?'], ['¿Me dejas…?', '…빌려줄래?/…하게 해 줄래?'], ['¿Me prestas…?', '…빌려줄래?'], ['¿Me das…?', '…줄래?'], ['¿Podrías…?', '…해 줄 수 있어?'], ['¿Le importaría…?', '…해 주시겠습니까?'], ['Sí, claro / Por supuesto', '물론이지'], ['Es que…', '사실은…(변명)'], ['Lo siento, pero…', '미안하지만…']] },
    { g: '초대 · Invitaciones', w: [['¿Quieres venir a…?', '…에 올래?'], ['¿Te apetece…?', '…하고 싶어?'], ['¡Vale! / ¡Genial!', '좋아!'], ['No puedo, es que…', '못 가, 왜냐면…'], ['Otro día, ¿vale?', '다음에 하자, 응?'], ['Pasa, pasa', '들어와, 들어와'], ['Estás en tu casa', '편하게 있어'], ['¿Quieres tomar algo?', '뭐 마실래?']] }
  ],
  gram: [
    { h: '현재분사 (gerundio)', t: [['원형', '현재분사'], ['-ar → -ando', 'hablar → hablando'], ['-er / -ir → -iendo', 'comer → comiendo, vivir → viviendo']], tip: '불규칙: leer → **leyendo**, ir → **yendo**, dormir → **durmiendo**, decir → **diciendo**, pedir → **pidiendo**, sentir → **sintiendo**' },
    { h: 'ESTAR + gerundio (~하는 중이다)', p: '지금 이 순간 진행 중인 행동.', ex: [['¿Qué estás haciendo? — Estoy cocinando.', '뭐 하고 있어? — 요리하는 중이야.'], ['Mis padres están viendo la tele.', '부모님은 TV를 보고 계셔.']] },
    { h: '조건법 — 공손한 부탁', p: '**poder**와 **importar**를 조건법으로 쓰면 더 공손해요: **podrías, podría, te importaría, le importaría**', t: [['', 'poder', 'importar'], ['tú', 'podrías', '¿te importaría…?'], ['usted', 'podría', '¿le importaría…?']], ex: [['¿Podrías cerrar la ventana?', '창문 좀 닫아 줄래?'], ['¿Le importaría hablar más despacio?', '조금 더 천천히 말씀해 주시겠어요?']] },
    { h: '부탁의 단계 (공손함)', p: '¿Me das un vaso de agua? → ¿**Puedes** darme…? → ¿**Podrías** darme…? → ¿**Te importaría** darme…?', tip: '**¿Te importa si** + 현재형? (허락) → 대답 "No, no, claro" = 괜찮아!' },
    { h: 'dar · dejar · prestar', p: '**dar** 주다 · **dejar** 빌려주다/허락하다 · **prestar** 빌려주다', ex: [['¿Me dejas tu bici esta tarde?', '오늘 오후에 자전거 빌려줄래?'], ['¿Me prestas cinco euros?', '5유로 빌려줄래?']] }
  ],
  ex: [
    { k: 'fill', t: '현재분사 만들기', it: ['hablar → [hablando]', 'aprender → [aprendiendo]', 'escribir → [escribiendo]', 'leer → [leyendo]', 'dormir → [durmiendo]', 'decir → [diciendo]', 'pedir → [pidiendo]'] },
    { k: 'fill', t: 'estar + gerundio', d: '지금 무엇을 하고 있나요?', it: ['Ahora mismo yo [estoy estudiando] para el examen. (estudiar)', 'Mi hermano [está jugando] a la Play. (jugar)', '¿Qué [estás haciendo]? (hacer, tú)', 'Nosotros [estamos comiendo] en un restaurante. (comer)', 'Los niños [están durmiendo]. (dormir)'] },
    { k: 'mc', t: '격식? 비격식?', d: '상황에 알맞은 표현을 고르세요.', it: [['교장 선생님께 처음 인사할 때', '¡Hola! ¿Qué tal te va?|*Encantado de conocerle.|¡Cuánto tiempo, tío!'], ['친구에게 다른 친구를 소개할 때', 'Le presento a Marta.|*Mira, te presento a Marta.|Mucho gusto, señora.'], ['처음 보는 어른에게 길을 물을 때', '*Perdone, ¿podría ayudarme?|Oye, ¿me ayudas?|¡Eh, tú!'], ['오랜만에 만난 친구에게', '¿Cómo está usted?|*¡Cuánto tiempo! ¿Cómo va todo?|Le presento a…']] },
    { k: 'mc', t: '더 공손하게 부탁하기', d: '가장 공손한 표현을 고르세요.', it: [['창문 닫기', 'Cierra la ventana.|¿Cierras la ventana?|*¿Le importaría cerrar la ventana?'], ['펜 빌리기', 'Dame un boli.|*¿Podrías prestarme un boli?|Un boli.'], ['좀 더 천천히', '*¿Podría hablar más despacio, por favor?|Más despacio.|Habla despacio.']] },
    { k: 'match', t: '부탁과 대답', d: '부탁에 맞는 대답을 연결하세요.', it: [['¿Te importa si abro la ventana?', 'No, no, ábrela.'], ['¿Me prestas tu cargador?', 'Lo siento, es que lo necesito ahora.'], ['¿Quieres venir a cenar el sábado?', '¡Vale! ¿A qué hora?'], ['¿Puedo usar tu ordenador?', 'Sí, claro, úsalo.'], ['¿Te apetece ir al cine?', 'Hoy no puedo, es que tengo examen.']] },
    { k: 'fill', t: 'dar · dejar · prestar', it: ['¿Me [das] un vaso de agua, por favor?', 'Mis padres no me [dejan] salir los jueves.', '¿Me [prestas] tu diccionario? Te lo devuelvo mañana.', '¿Me [dejas] tu móvil un momento? Tengo que llamar a mi madre.'] },
    { k: 'dlg', t: '듣기 — 친구 집 방문', listen: 1,
      lines: [['Andrea', '¡Hola, Sergio! Pasa, pasa. Estás en tu casa.'], ['Sergio', 'Gracias. Mira, te presento a mi primo Óscar. Está pasando unos días en Madrid.'], ['Andrea', 'Encantada, Óscar. ¿Queréis tomar algo?'], ['Óscar', 'Un vaso de agua, por favor. ¿Te importa si dejo la mochila aquí?'], ['Andrea', 'No, no, claro. Oye, ¿os apetece venir a una fiesta el viernes?'], ['Sergio', 'Me encantaría, pero no puedo, es que tengo que trabajar.']],
      it: [['Óscar는 Sergio의 누구?', '형제|*사촌|친구'], ['Óscar가 부탁한 것은?', '휴대폰 빌리기|*가방 두기|창문 열기'], ['Andrea의 초대는 언제?', '토요일|*금요일|일요일'], ['Sergio가 못 가는 이유는?', '시험|*일해야 함|여행']] },
    { k: 'sort', t: '변명(excusa)일까, 수락일까?', cats: ['✅ 수락', '🙅 거절·변명'], it: [['¡Claro que sí!', 0], ['Es que tengo que estudiar.', 1], ['¡Genial! ¿A qué hora?', 0], ['Lo siento, ya tengo planes.', 1], ['Por supuesto.', 0], ['Otro día, ¿vale?', 1]] },
    { k: 'order', t: '문장 만들기', it: ['¿Te importa si cierro la puerta?', '¿Podrías ayudarme con la maleta?', 'Ahora estoy viendo una serie.', 'Lo siento, es que no tengo tiempo.'] },
    { k: 'dict', t: '받아쓰기', it: ['¿Me prestas tu bolígrafo?', 'Estamos esperando el autobús.', '¿Le importaría repetir su nombre?'] },
    { k: 'write', t: '상황극 대본 쓰기', d: '선생님(usted) 또는 친구(tú)에게 무언가를 부탁하고, 상대가 거절하며 변명하는 짧은 대화를 써 보세요.', model: '— Perdone, profesora, ¿podría explicarme otra vez el ejercicio 3? — Sí, claro. — Y… ¿le importaría darme un poco más de tiempo para el trabajo? — Lo siento, Hana, pero es que mañana tengo que entregar las notas.' }
  ]
});
