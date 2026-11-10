AULA.unit({
  n: 10, title: 'Momentos especiales', ko: '특별한 순간 — 일화 이야기하기',
  goal: '개인 일화를 순서대로 이야기하기, 감정 표현하기, 단순과거와 불완료과거 구분하기',
  can: ['불규칙 단순과거', '단순과거 vs. 불완료과거', 'estaba + gerundio', '이야기 연결어', '감정 표현'],
  tags: ['indefinido irregular', 'indefinido / imperfecto', 'estar + gerundio', 'anécdotas', 'emociones', 'conectores'],
  vocab: [
    { g: '감정 · Emociones', w: [['¡Qué alegría!', '정말 기뻐!'], ['¡Qué vergüenza!', '정말 창피해!'], ['¡Qué susto!', '깜짝이야!'], ['¡Qué pena!', '안타깝다!'], ['¡Qué rabia!', '열 받아!'], ['¡Qué nervios!', '너무 떨려!'], ['ponerse nervioso/-a', '긴장하다'], ['ponerse rojo/-a', '얼굴이 빨개지다'], ['emocionarse', '감동하다'], ['llorar de alegría', '기뻐서 울다'], ['dar miedo', '무섭게 하다'], ['dar vergüenza', '창피하게 하다']] },
    { g: '이야기 연결어 · Conectores', w: [['un día', '어느 날'], ['aquel día', '그날'], ['de repente', '갑자기'], ['en ese momento', '그 순간'], ['entonces', '그러자'], ['al principio', '처음에는'], ['luego / después', '그 후'], ['al final', '결국'], ['al cabo de un rato', '잠시 후'], ['esa misma noche', '바로 그날 밤']] },
    { g: '역사적 사건 · Acontecimientos', w: [['la llegada del hombre a la Luna', '인류의 달 착륙'], ['la caída del Muro de Berlín', '베를린 장벽 붕괴'], ['los Juegos Olímpicos', '올림픽'], ['la Copa del Mundo', '월드컵'], ['ganar el Mundial', '월드컵 우승하다'], ['un terremoto', '지진']] }
  ],
  gram: [
    { h: '불규칙 단순과거 (어간 변화형)', t: [['원형', 'yo', 'él/ella', 'ellos'], ['poder', 'pude', 'pudo', 'pudieron'], ['poner', 'puse', 'puso', 'pusieron'], ['saber', 'supe', 'supo', 'supieron'], ['querer', 'quise', 'quiso', 'quisieron'], ['venir', 'vine', 'vino', 'vinieron'], ['decir', 'dije', 'dijo', 'dijeron'], ['traer', 'traje', 'trajo', 'trajeron'], ['dar', 'di', 'dio', 'dieron']], tip: 'e→i (3인칭): pedir → p**i**dió, sentir → s**i**ntió · o→u: dormir → d**u**rmió, morir → m**u**rió' },
    { h: '단순과거 vs. 불완료과거', t: [['단순과거 — 사건 (무슨 일이 일어났나)', '불완료과거 — 배경 (어떤 상황이었나)'], ['Llegué a casa a las diez.', 'Era tarde y llovía.'], ['Vi a mi ex en el metro.', 'Estaba muy cansada.'], ['De repente sonó el teléfono.', 'Yo leía un libro.']], ex: [['Cuando salí de casa, hacía mucho frío.', '집을 나섰을 때 아주 추웠다.']] },
    { h: 'ESTABA + gerundio (~하고 있던 중이었다)', p: '진행 중이던 상황 + 그때 끼어든 사건(단순과거).', ex: [['Estaba cocinando cuando llamó mi madre.', '요리하고 있는데 엄마가 전화했다.'], ['¿Qué estabas haciendo cuando te enteraste?', '그 소식을 들었을 때 뭐 하고 있었어?']] }
  ],
  ex: [
    { k: 'fill', t: '불규칙 단순과거', it: ['Ayer no [pude] dormir bien. (poder, yo)', 'Mi hermano [vino] a casa con su novia. (venir)', '¿Qué te [dijo] el profesor? (decir)', 'Mis amigos [trajeron] una tarta. (traer)', 'Cuando lo [supe], me puse muy contenta. (saber, yo)', 'Anoche Marta [durmió] diez horas. (dormir)', 'Mi abuela me [dio] un regalo precioso. (dar)'] },
    { k: 'fill', t: '단순과거? 불완료과거?', it: ['Cuando {*llegué|llegaba} a la fiesta, todos {bailaron|*bailaban}.', '{*Hacía|Hizo} sol y el cielo {*estaba|estuvo} azul.', 'De repente {*empezó|empezaba} a llover.', 'Yo {*tenía|tuve} doce años cuando {*conocí|conocía} a mi mejor amigo.', 'Mientras {*estudiaba|estudié}, {*sonó|sonaba} el timbre.'] },
    { k: 'fill', t: 'estaba + gerundio', it: ['[Estaba] duchándome cuando sonó el móvil. (yo)', 'Cuando llegaste, nosotros [estábamos] cenando.', '¿Qué [estabas] haciendo a las nueve? (tú)', 'Los niños [estaban] durmiendo cuando volvimos.'] },
    { k: 'mc', t: '감정 표현 고르기', it: [['시험에 합격했어요!', '*¡Qué alegría!|¡Qué rabia!|¡Qué susto!'], ['반 친구들 앞에서 넘어졌어요.', '¡Qué alegría!|*¡Qué vergüenza!|¡Qué pena!'], ['어두운 데서 누가 갑자기 “왁!”', '¡Qué pena!|¡Qué rabia!|*¡Qué susto!'], ['친구가 오랫동안 기다린 콘서트를 못 가게 됐어요.', '*¡Qué pena!|¡Qué alegría!|¡Qué susto!'], ['버스가 내 앞에서 그냥 떠났어요.', '¡Qué alegría!|*¡Qué rabia!|¡Qué vergüenza!']] },
    { k: 'tf', t: '듣기 — 잊을 수 없는 날', listen: 1,
      text: 'Te voy a contar una anécdota. Era el día de mi graduación y estaba muy nerviosa. Hacía un calor horrible. Cuando dijeron mi nombre, me levanté y fui al escenario. De repente, me caí delante de todo el mundo. ¡Qué vergüenza! Me puse rojísima. Pero entonces todos empezaron a aplaudir y al final me reí mucho. Ahora es mi recuerdo favorito.',
      it: [['Era el día de su boda.', false], ['Hacía mucho calor.', true], ['Se cayó en el escenario.', true], ['La gente se rió de ella y se fue.', false], ['Ahora es un buen recuerdo.', true]] },
    { k: 'order', t: '일화 순서대로 문장 만들기', it: ['Era un sábado por la tarde y llovía mucho.', 'Estaba leyendo en el sofá.', 'De repente alguien llamó a la puerta.', 'Al final era mi prima de Argentina.'] },
    { k: 'mc', t: '역사적 사건 퀴즈', it: [['El hombre llegó a la Luna en…', '1959|*1969|1979'], ['El Muro de Berlín cayó en…', '1979|*1989|1999'], ['España ganó el Mundial de fútbol en…', '2006|*2010|2014'], ['Los Juegos Olímpicos de Barcelona fueron en…', '1988|*1992|1996']] },
    { k: 'match', t: '이야기 연결어', it: [['de repente', '갑자기'], ['al final', '결국'], ['en ese momento', '그 순간'], ['al principio', '처음에는'], ['al cabo de un rato', '잠시 후']] },
    { k: 'dict', t: '받아쓰기', it: ['Cuando llegué, todos estaban esperando.', 'De repente empezó a llover.', '¡Qué susto me di!'] },
    { k: 'write', t: '나의 특별한 순간', d: '잊을 수 없는 일화를 써 보세요. 배경(불완료과거) + 사건(단순과거) + 연결어 + 감정.', model: 'El verano pasado estaba de vacaciones en Jeju con mi familia. Era un día precioso y hacía sol. Estábamos nadando en la playa cuando, de repente, vi un delfín muy cerca. ¡Qué emoción! Al principio pensé que era un tiburón y me di un susto enorme. Pero luego aparecieron tres más. Al final, saqué muchas fotos. Fue el mejor día del verano.' }
  ]
});
