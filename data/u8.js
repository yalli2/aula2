AULA.unit({
  n: 8, title: 'Estamos muy bien', ko: '우리는 아주 좋아요 — 건강과 기분',
  goal: '기분·몸 상태와 통증 말하기, 조언하기 — 친구 고민 해결해 주기',
  can: ['ser vs. estar (상태)', 'doler', '긍정 명령형 (tú/usted)', '조언하기', '신체 부위·증상'],
  tags: ['doler', 'imperativo', 'consejos', 'cuerpo', 'salud', 'estados de ánimo', 'ser / estar'],
  vocab: [
    { g: '신체 · Partes del cuerpo', w: [['la cabeza', '머리'], ['la garganta', '목(구멍)'], ['el cuello', '목'], ['la espalda', '등·허리'], ['el estómago', '위·배'], ['la barriga', '배'], ['el brazo', '팔'], ['la mano', '손'], ['la pierna', '다리'], ['la rodilla', '무릎'], ['el pie', '발'], ['los oídos', '귀(속)'], ['las muelas', '어금니'], ['los ojos', '눈']] },
    { g: '증상 · Síntomas', w: [['tener fiebre', '열이 있다', '🤒'], ['tener tos', '기침을 하다'], ['tener gripe', '독감에 걸리다'], ['estar resfriado/-a', '감기에 걸렸다'], ['estar mareado/-a', '어지럽다'], ['tener alergia', '알레르기가 있다'], ['tener el estómago revuelto', '속이 안 좋다'], ['torcerse el tobillo', '발목을 삐다'], ['sentirse fatal', '몸이 아주 안 좋다']] },
    { g: '기분 · Estados de ánimo', w: [['estar contento/-a', '기쁘다'], ['estar triste', '슬프다'], ['estar cansado/-a', '피곤하다'], ['estar estresado/-a', '스트레스 받다'], ['estar preocupado/-a', '걱정되다'], ['estar nervioso/-a', '긴장되다'], ['estar enfadado/-a', '화났다'], ['estar aburrido/-a', '지루하다'], ['estar de buen / mal humor', '기분이 좋다 / 나쁘다']] }
  ],
  gram: [
    { h: 'DOLER (아프다) — gustar처럼!', p: '아픈 부위가 주어: **me duele** + 단수, **me duelen** + 복수. (o → ue)', ex: [['Me duele la cabeza.', '머리가 아파.'], ['Me duelen los pies.', '발이 아파.'], ['¿Te duele la garganta?', '목 아파?']] },
    { h: 'SER vs. ESTAR', t: [['ser (성격·본질)', 'estar (일시적 상태)'], ['Es nervioso. (원래 긴장 잘함)', 'Está nervioso. (지금 긴장함)'], ['Es aburrido. (재미없는 사람)', 'Está aburrido. (지금 지루함)'], ['Es listo. (똑똑한)', 'Está listo. (준비됐다)']] },
    { h: '긍정 명령형 (imperativo afirmativo)', t: [['원형', 'tú', 'usted', 'vosotros'], ['tomar', 'toma', 'tome', 'tomad'], ['beber', 'bebe', 'beba', 'bebed'], ['descansar', 'descansa', 'descanse', 'descansad'], ['dormir', 'duerme', 'duerma', 'dormid']], tip: '불규칙 (tú): hacer → **haz**, ir → **ve**, poner → **pon**, salir → **sal**, tener → **ten**, venir → **ven**, decir → **di**. 대명사는 뒤에 붙여요: **tómate** un té, **acuéstate**.' },
    { h: '조언하기', p: '**Tienes que / Deberías / Es bueno / ¿Por qué no…? / 명령형**', ex: [['Deberías dormir más.', '잠을 더 자는 게 좋겠어.'], ['Toma un té con miel y descansa.', '꿀차 마시고 쉬어.']] }
  ],
  ex: [
    { k: 'fill', t: 'duele 또는 duelen', it: ['Me {*duele|duelen} la espalda.', '¿Te {duele|*duelen} los ojos?', 'A mi abuelo le {*duele|duelen} la rodilla.', 'Nos {duele|*duelen} los pies de caminar.', 'Le {*duele|duelen} mucho la cabeza.'] },
    { k: 'fill', t: 'ser 또는 estar', it: ['Hoy {es|*está} muy cansado: no ha dormido.', 'Mi hermana {*es|está} muy simpática.', '¿Por qué {eres|*estás} triste?', 'Mi profesor {*es|está} una persona tranquila.', '¡Ya {soy|*estoy} listo! Podemos salir.'] },
    { k: 'fill', t: '명령형 tú 만들기', it: ['[Bebe] mucha agua. (beber)', '[Descansa] un poco. (descansar)', '[Haz] ejercicio todos los días. (hacer)', '[Ve] al médico. (ir)', '[Duerme] ocho horas. (dormir)', '[Ponte] una chaqueta. (ponerse)'] },
    { k: 'fill', t: '명령형 usted 만들기', d: '의사가 환자에게.', it: ['[Tome] este jarabe tres veces al día. (tomar)', '[Beba] mucha agua. (beber)', '[Descanse] dos días. (descansar)', '[Coma] fruta y verdura. (comer)', '[Haga] un poco de ejercicio. (hacer)'] },
    { k: 'match', t: '증상과 조언', it: [['Me duele la garganta.', 'Toma un té con miel y limón.'], ['Estoy muy estresado.', 'Haz yoga o sal a pasear.'], ['Me he torcido el tobillo.', 'Ponte hielo y no camines mucho.'], ['Tengo fiebre.', 'Quédate en la cama y ve al médico.'], ['No puedo dormir.', 'No tomes café por la tarde.']] },
    { k: 'tf', t: '듣기 — 병원에서', listen: 1,
      lines: [['Médica', 'Buenos días. ¿Qué le pasa?'], ['Paciente', 'Pues desde hace tres días me duele mucho la garganta y tengo tos.'], ['Médica', '¿Tiene fiebre?'], ['Paciente', 'Sí, un poco, treinta y ocho.'], ['Médica', 'Es una gripe. Tome este medicamento cada ocho horas, beba mucha agua y descanse. No vaya a trabajar esta semana.'], ['Paciente', 'Muchas gracias, doctora.']],
      it: [['El paciente está mal desde hace tres días.', true], ['Le duele el estómago.', false], ['Tiene un poco de fiebre.', true], ['Tiene que tomar el medicamento cada doce horas.', false], ['La médica le dice que no trabaje esta semana.', true]] },
    { k: 'sort', t: '기분 — 긍정? 부정?', cats: ['😊', '😟'], it: [['contento', 0], ['preocupado', 1], ['relajado', 0], ['enfadado', 1], ['ilusionado', 0], ['estresado', 1], ['tranquilo', 0], ['triste', 1]] },
    { k: 'match', t: '신체 부위', it: [['la cabeza', '머리'], ['la espalda', '등'], ['la rodilla', '무릎'], ['la garganta', '목구멍'], ['el estómago', '위·배'], ['el tobillo', '발목']] },
    { k: 'order', t: '문장 만들기', it: ['Me duele mucho la cabeza.', 'Deberías ir al médico.', 'Bebe agua y descansa un poco.', 'Hoy estoy muy cansada.'] },
    { k: 'dict', t: '받아쓰기', it: ['Me duelen los pies.', 'Tómate un té y acuéstate.', '¿Por qué estás tan nervioso?'] },
    { k: 'write', t: '고민 상담 답장', d: '친구 고민: 「시험 때문에 스트레스가 심하고, 잠을 못 자고, 머리가 아파.」 조언 4가지를 써 보세요(명령형, deberías, tienes que).', model: '¡Hola, Mina! Siento que estés tan estresada. Te doy algunos consejos: primero, haz un horario de estudio y descansa diez minutos cada hora. Segundo, no tomes café por la tarde. También deberías salir a caminar un poco cada día. Y si te duele mucho la cabeza, tienes que ir al médico. ¡Ánimo, todo va a salir bien!' }
  ]
});
