// ===== ДАННЫЕ =====
const zodiacSigns = [
    {id: 'aries', name: 'Овен', nameGen: 'Овна', symbol: '♈', dates: '(21.03 — 19.04)', tagline: 'Режим Сигма', img: 'img/oven.png', zodiac: 'img/zodiacs/oven.png'},
    {id: 'taurus', name: 'Телец', nameGen: 'Тельца', symbol: '♉', dates: '(20.04 — 20.05)', tagline: 'Главный Масик офиса', img: 'img/telec.png', zodiac: 'img/zodiacs/telec.png'},
    {id: 'gemini', name: 'Близнецы', nameGen: 'Близнецов', symbol: '♊', dates: '(21.05 — 20.06)', tagline: 'Повелитель Рофлов', img: 'img/bliznecy.png', zodiac: 'img/zodiacs/bliznetc.png'},
    {id: 'cancer', name: 'Рак', nameGen: 'Рака', symbol: '♋', dates: '(21.06 — 22.07)', tagline: 'Грин флаг коллектива', img: 'img/rak.png', zodiac: 'img/zodiacs/rak.png'},
    {id: 'leo', name: 'Лев', nameGen: 'Льва', symbol: '♌', dates: '(23.07 — 22.08)', tagline: 'Main Character', img: 'img/lev.png', zodiac: 'img/zodiacs/lev.png'},
    {id: 'virgo', name: 'Дева', nameGen: 'Девы', symbol: '♍', dates: '(23.08 — 22.09)', tagline: 'Пояснил за структуру', img: 'img/deva.png', zodiac: 'img/zodiacs/deva.png'},
    {id: 'libra', name: 'Весы', nameGen: 'Весов', symbol: '♎', dates: '(23.09 — 22.10)', tagline: 'На чиле, на расслабоне', img: 'img/vesy.png', zodiac: 'img/zodiacs/vesy.png'},
    {id: 'scorpio', name: 'Скорпион', nameGen: 'Скорпиона', symbol: '♏', dates: '(23.10 — 21.11)', tagline: 'Не Тюбик, а Скала', img: 'img/scorpion.png', zodiac: 'img/zodiacs/scorp.png'},
    {id: 'sagittarius', name: 'Стрелец', nameGen: 'Стрельца', symbol: '♐', dates: '(22.11 — 21.12)', tagline: 'Визионер (не Делулу)', img: 'img/strelec.png', zodiac: 'img/zodiacs/streletc.png'},
    {id: 'capricorn', name: 'Козерог', nameGen: 'Козерога', symbol: '♑', dates: '(22.12 — 19.01)', tagline: 'Босс-левел', img: 'img/kozerog.png', zodiac: 'img/zodiacs/kozerog.png'},
    {id: 'aquarius', name: 'Водолей', nameGen: 'Водолея', symbol: '♒', dates: '(20.01 — 18.02)', tagline: 'Альтушка от мира науки', img: 'img/vodoley.png', zodiac: 'img/zodiacs/vodoley.png'},
    {id: 'pisces', name: 'Рыбы', nameGen: 'Рыб', symbol: '♓', dates: '(19.02 — 20.03)', tagline: 'В потоке и в ресурсе', img: 'img/ryby.png', zodiac: 'img/zodiacs/ruby.png'},
];

const horoscopes = {
    aries: `Овен, в 2026 году ты влетаешь в офис с энергией настоящего <strong>сигмы</strong>. Пока остальные <strong>чечики</strong> только пьют утренний кофе, ты уже закрыл три задачи. МТИ для тебя — это база, где ты можешь показать свой <strong>ризз</strong> в управлении проектами. Твоя энергия — это просто <strong>имба</strong>, главное — не навести суету там, где не надо. Ты драйвер команды, и в этом году ты реально можешь затащить самые сложные проекты без <strong>кринжа</strong>.`,
    taurus: `Телец, ты в 2026 году — амбассадор спокойствия и качества. Твой вайб — это уверенность и надежность. Ты настоящий <strong>масик</strong> для своего отдела: все решаешь, помогаешь и никогда не подводишь. В МТИ ценят твой основательный подход: пока другие ловят <strong>тильт</strong>, ты закрываешь дедлайны. Ты доказываешь, что продуктивность и комфорт — это лучшая <strong>жиза</strong>.`,
    gemini: `Близнецы, вы в 2026 году — главный новостной хаб МТИ. Вы знаете всё: инсайты руководства и где заказать лучшую еду. Ваша суперсила — нетворкинг. Вы не <strong>нормис</strong>, вы умеете найти подход к каждому. Вы можете отвечать на почту, сидеть на зуме и кидать <strong>рофлы</strong> в рабочий чат одновременно.`,
    cancer: `Рак, в 2026 году ты привносишь в МТИ человечность. Ты понимаешь, что за KPI стоят живые люди. Твоя интуиция помогает разруливать сложные ситуации. Ты создаешь в отделе атмосферу доверия. Ты чувствуешь <strong>вайб</strong> коллектива лучше любого аналитика и сразу видишь <strong>ред флаги</strong> в проектах.`,
    leo: `Лев, МТИ — престижное место, и ты тут — главная звезда. В 2026 году ты берешься за самые хайповые проекты. Тебе важно не просто сделать работу, а сделать её так, чтобы все сказали: «Ну это <strong>имба</strong>!». Твой личный бренд внутри компании растет, и ты становишься настоящим <strong>крашем</strong> для профессионального сообщества.`,
    virgo: `Дева, в 2026 году твой мозг — главное оружие МТИ. Ты видишь детали, которые другие скипают. Твои отчеты идеальны. Кто-то в шутку назовет тебя <strong>душнилой</strong>, но когда придет проверка, ты всех спасешь, и станешь настоящим <strong>масиком</strong> для отдела. Ты тот сотрудник, который не пропустит ни одного <strong>ред флага</strong> в документации.`,
    libra: `Весы, 2026 год в МТИ пройдет на <strong>чиле</strong>, но с крутыми результатами. Вы — главные дипломаты офиса. Вы умеете сгладить углы и не допустить <strong>криповых</strong> ситуаций в переговорах. Вы доказываете, что можно быть продуктивным, не теряя при этом легкости. Вы — ходячий <strong>грин флаг</strong> любого проекта.`,
    scorpio: `Скорпион, в 2026 году ты в МТИ — спецназ по особым поручениям. Тебе скучно заниматься рутиной, дайте тебе что-то сложное. Ты не <strong>тюбик</strong>, который сливается при первой трудности, ты решаешь проблемы. Ты погружаешься в работу с головой и находишь решения, до которых другие бы не додумались.`,
    sagittarius: `Стрелец, 2026 год для тебя — время расширения горизонтов. Тебе тесно в рамках одной инструкции. Ты мыслишь стратегически: куда движется МТИ. Ты не <strong>делулу</strong>, твои планы амбициозны, но реальны. Твой оптимизм приносит свежий воздух в любой кабинет. Ты — амбассадор перемен.`,
    capricorn: `Козерог, в 2026 году ты показываешь в МТИ эталонный профессионализм. У тебя есть четкий карьерный трек. Ты настоящий <strong>сигма</strong> в мире управления: дисциплинированный, жесткий, но справедливый. Ты не тратишь время на пустые разговоры с <strong>чечиками</strong>, ты делаешь дела.`,
    aquarius: `Водолей, МТИ — идеальная песочница для твоего креативного ума. В 2026 году ты будешь предлагать решения, опережающие время. Ты немного <strong>альтушка</strong> в подходе к работе: нестандартный, яркий, не такой как все. Ты не хочешь быть <strong>НПС</strong>, ты ищешь способы сделать «лучше и быстрее».`,
    pisces: `Рыбы, в 2026 году вы доказываете, что даже в техническом вузе есть место творчеству. Вы подходите к задачам нешаблонно. Ваша работа — это ваш <strong>краш</strong> в этом году. Вы умеете находить изящные выходы из ситуаций, которые другим кажутся <strong>криповыми</strong>.`,
};

const horoscopeDetails = {
    aries: [
        {label: 'Работа', text: 'Ты пушишь задачи вперед. Твои идеи — это <strong>слэй</strong>, руководство оценит твою проактивность. Не бойся брать ответственность — это <strong>грин флаг</strong> для карьеры.'},
        {label: 'Тиммейты', text: 'Ты задаешь ритм, но не будь <strong>душнилой</strong>, если кто-то не успевает. Коллеги видят в тебе лидера, а не надзирателя.'},
        {label: 'Кэш', text: 'Твоя активность бустит твои бонусы. Перевыполнение плана — это <strong>пруф</strong> твоего профессионализма.'},
        {label: 'Энерджи', text: 'Адреналин на максимуме. Обязательно ходи в зал, чтобы не превратиться в уставшего <strong>скуфа</strong> к концу года.'},
    ],
    taurus: [
        {label: 'Работа', text: 'Твои отчеты — это <strong>имба</strong>, к ним не придраться. Ты тот сотрудник, на котором держится вся база, и это <strong>пруф</strong> твоего статуса.'},
        {label: 'Тиммейты', text: 'Ты — <strong>комфортик</strong> (очень приятный человек) для коллег. К тебе идут, когда нужно выдохнуть, потому что ты никогда не устроишь <strong>гостинг</strong> по рабочим задачам.'},
        {label: 'Кэш', text: 'Ты шаришь за финансы. Твоя стратегия на 2026 год надежная. Стабильность — твое второе имя.'},
        {label: 'Энерджи', text: 'Твой ресурс — в удобстве. Обустрой рабочее место эстетично, чтобы ловить правильный <strong>вайб</strong>.'},
    ],
    gemini: [
        {label: 'Работа', text: 'Переговоры и презентации — это ваш <strong>слэй</strong>. Вы можете продать любую идею. Ваш <strong>ризз</strong> помогает договариваться с самыми сложными партнерами.'},
        {label: 'Тиммейты', text: 'Вы — душа офиса. С вами не душно. Главное — не быть <strong>тюбиком</strong>, который только обещает, но не делает.'},
        {label: 'Кэш', text: 'Ваши связи — это ваш капитал. Нетворкинг внутри МТИ принесет вам новые возможности.'},
        {label: 'Энерджи', text: 'Вас заряжает движ. Не сидите в рутине, вписывайтесь в новые проекты, вам нужен экшн.'},
    ],
    cancer: [
        {label: 'Работа', text: 'HR, работа с клиентами — это твой конек. Ты не <strong>симп</strong>, ты просто умеешь заботиться о клиентах и коллегах, сохраняя достоинство.'},
        {label: 'Тиммейты', text: 'Ты — эмоциональный якорь. Если кто-то ведет себя как <strong>НПС</strong>, ты поможешь ему включиться.'},
        {label: 'Кэш', text: 'Стабильность и безопасность. Выбирай надежные проекты, не рискуй понапрасну.'},
        {label: 'Энерджи', text: 'Не принимай рабочие факапы близко к сердцу. Учись оставлять работу за дверью офиса, береги менталку.'},
    ],
    leo: [
        {label: 'Работа', text: 'Ты рожден лидить. Твои презентации убедительны. Твой <strong>ризз</strong> работает на 100%, руководство это видит.'},
        {label: 'Тиммейты', text: 'Ты инфлюенсер отдела. Люди тянутся к твоему успеху. Ты задаешь планку, и за тобой хотят идти.'},
        {label: 'Кэш', text: 'Твой авторитет растет, а с ним и бонусы. Твое имя работает на тебя.'},
        {label: 'Энерджи', text: 'Тебе нужно признание. Похвала от босса и успешный кейс — лучшее топливо.'},
    ],
    virgo: [
        {label: 'Работа', text: 'Аналитика и доки. Ты находишь баги еще до того, как они станут проблемой. Твой перфекционизм — это <strong>имба</strong>.'},
        {label: 'Тиммейты', text: 'Ты — мозг команды. На тебя полагаются, когда нужно всё проверить. Ты гарант того, что не будет <strong>кринжа</strong> на сдаче проекта.'},
        {label: 'Кэш', text: 'Твой прагматизм помогает тебе эффективно управлять ресурсами. Ты точно знаешь, за что тебе платят.'},
        {label: 'Энерджи', text: 'Тебя успокаивает порядок. Выполненный ту-ду лист — твой личный вид медитации.'},
    ],
    libra: [
        {label: 'Работа', text: 'Партнерка, переговоры. Вы отлично работаете в связке с другими отделами.'},
        {label: 'Тиммейты', text: 'Вы создаете приятную атмосферу. С вами легко договориться, вы не токсичны и всегда готовы к диалогу.'},
        {label: 'Кэш', text: 'Успех приходит через коннекты. Совместные проекты дадут отличный финансовый буст.'},
        {label: 'Энерджи', text: 'Вам важна эстетика. Красивый офис и приятные коллеги повышают вашу эффективность в разы.'},
    ],
    scorpio: [
        {label: 'Работа', text: 'Исследования, аналитика. Ты видишь скрытые риски. Твой фокус на цели просто бешеный.'},
        {label: 'Тиммейты', text: 'Тебя уважают за профи скиллы. В твой ближний круг попасть непросто, но «своих» ты не <strong>гостишь</strong>.'},
        {label: 'Кэш', text: 'Твои уникальные скиллы стоят дорого. Ты становишься незаменимым спецом, и это отлично сказывается на зарплате.'},
        {label: 'Энерджи', text: 'Тебя драйвит преодоление трудностей. Чем сложнее задача, тем больше у тебя азарта её хакнуть.'},
    ],
    sagittarius: [
        {label: 'Работа', text: 'Стратегия, развитие новых направлений. Ты генерируешь идеи, которые двигают институт вперед.'},
        {label: 'Тиммейты', text: 'Ты — вдохновитель. С тобой интересно, ты расширяешь кругозор коллег. Главное — не превращай работу в сплошной <strong>рофл</strong>.'},
        {label: 'Кэш', text: 'Твоя предприимчивость поможет найти новые точки роста. Успех ждет в масштабных проектах.'},
        {label: 'Энерджи', text: 'Движение — жизнь. Командировки и ивенты — это то, что не дает тебе закиснуть.'},
    ],
    capricorn: [
        {label: 'Работа', text: 'Управление, организация. Ты умеешь выстраивать структуры, которые реально работают. Твой авторитет — железобетонный.'},
        {label: 'Тиммейты', text: 'Ты строг, но справедлив. Коллеги знают: если Козерог сказал — значит, будет сделано. Ты — стержень команды.'},
        {label: 'Кэш', text: 'Ты работаешь в долгую. Твоя репутация и результаты в этом году заложат основу для серьезного финансового роста.'},
        {label: 'Энерджи', text: 'Тебя мотивируют реальные достижения. Закрытый квартал — твоя личная победа. Не забывай про спорт, чтобы не стать <strong>скуфом</strong>.'},
    ],
    aquarius: [
        {label: 'Работа', text: 'IT, креатив. Твой нестандартный подход помогает оптимизировать рутину. Ты буквально хакаешь систему (в хорошем смысле).'},
        {label: 'Тиммейты', text: 'Ты находишь единомышленников. В команде ты отвечаешь за свежий взгляд.'},
        {label: 'Кэш', text: 'Твои идеи могут принести реальный профит институту, а тебе — премии за инновации.'},
        {label: 'Энерджи', text: 'Свобода творчества заряжает тебя. Предлагай смелые идеи, не бойся экспериментировать.'},
    ],
    pisces: [
        {label: 'Работа', text: 'Креативные задачи, маркетинг. Там, где нужно воображение, вы незаменимы.'},
        {label: 'Тиммейты', text: 'Вы чувствуете атмосферу. Если назревает конфликт, вы умеете его мягко погасить. Вы — <strong>комфортик</strong> (он же масик, только мягче) отдела.'},
        {label: 'Кэш', text: 'Слушайте свою интуицию. Она подскажет, какие проекты принесут кэш.'},
        {label: 'Энерджи', text: 'Вам нужно время на перезагрузку. Не уходите в <strong>делулу</strong>, держите связь с реальностью.'},
    ],
};

const advice = {
    aries: 'Газуй, но чекай карту. Твоя скорость + ресурсы МТИ = тотальный вин.',
    taurus: 'Не торопись. Твой размеренный темп — самый эффективный. Тише едешь — больше заработаешь.',
    gemini: 'Фокус, плз! Важно не только начать, но и довести задачу до финала, чтобы не было кринжа.',
    cancer: 'Доверяй чуйке. В сложных моментах она подскажет верное решение лучше любой инструкции.',
    leo: 'Сияй, но не забывай, что успех проекта — это заслуга всей команды. Делись лучами славы.',
    virgo: 'Иногда лучшее — враг хорошего. Не закапывайся в мелочах, смотри на картину шире.',
    libra: 'Не бойся принимать решения. Твоя взвешенная позиция — это именно то, что нужно.',
    scorpio: 'Используй свою проницательность. Твоя энергия способна сдвинуть горы, направь её на развитие МТИ.',
    sagittarius: 'Твой энтузиазм заразителен. Но следи за деталями, иногда в погоне за великим можно упустить базу.',
    capricorn: 'Ты машина продуктивности, но не забывай про отдых. Чтобы эффективно рулить процессами, нужно быть в ресурсе.',
    aquarius: 'Не бойся быть непонятым сначала. Твое новаторство — это именно то, что нужно.',
    pisces: 'Сочетайте творческий подход с дисциплиной, и вы сможете достичь топовых результатов.',
};

const dictionary = {
    aries: [
        {word: 'Сигма', translation: 'Независимый, крутой и успешный одиночка (иронично: крутой лидер)'},
        {word: 'НПС (NPC)', translation: 'Человек без собственного мнения, «массовка»'},
        {word: 'Чечик', translation: 'Просто парень, малознакомый человек'},
        {word: 'Ризз', translation: 'Харизма, умение очаровывать'},
        {word: 'Имба', translation: 'Что-то очень крутое, несбалансированно сильное'},
        {word: 'Кринж', translation: 'Чувство стыда за чужие действия, неловкость'},
        {word: 'Слэй', translation: 'Сделала/сделал что-то потрясающе, шикарно'},
        {word: 'Грин флаг', translation: 'Положительный сигнал, признак чего-то хорошего'},
        {word: 'Душнила', translation: 'Нудный, придирчивый человек'},
        {word: 'Пруф', translation: 'Доказательство'},
        {word: 'Скуф', translation: 'Неопрятный мужчина 30+, переставший следить за собой'},
    ],
    taurus: [
        {word: 'Чилл', translation: 'Расслабленный отдых, спокойствие'},
        {word: 'Масик', translation: 'Заботливый, надежный мужчина, решающий проблемы'},
        {word: 'Жиза', translation: 'Жизненная ситуация, знакомая многим'},
        {word: 'Имба', translation: 'Что-то очень крутое, лучшее'},
        {word: 'Пруф', translation: 'Доказательство'},
        {word: 'Гостинг', translation: 'Резкое прекращение общения без объяснения причин'},
        {word: 'Вайб', translation: 'Атмосфера, настроение'},
    ],
    gemini: [
        {word: 'ПОВ (POV)', translation: '«Точка зрения», ситуация глазами участника'},
        {word: 'Нормис', translation: 'Обычный человек, следующий мейнстриму'},
        {word: 'Рофл', translation: 'Шутка, прикол'},
        {word: 'Слэй', translation: 'Сделала/сделал потрясающе (здесь: отлично выступили)'},
        {word: 'Ризз', translation: 'Харизма, умение очаровывать'},
        {word: 'Тюбик', translation: 'Инфантильный, слабый или ненадежный парень'},
        {word: 'Кринж', translation: 'Чувство стыда, неловкость'},
    ],
    cancer: [
        {word: 'Грин флаг', translation: 'Признак здоровых отношений и адекватности'},
        {word: 'Вайб', translation: 'Атмосфера, энергетика'},
        {word: 'Ред флаг', translation: 'Тревожный сигнал, предупреждение об опасности'},
        {word: 'Симп', translation: 'Парень, чрезмерно старающийся угодить'},
        {word: 'НПС (NPC)', translation: 'Человек без мнения, ведущий себя по шаблону'},
    ],
    leo: [
        {word: 'Слэй', translation: 'Сделал что-то потрясающе, выглядит шикарно'},
        {word: 'Имба', translation: 'Что-то очень крутое, лучшее'},
        {word: 'Краш', translation: 'Человек, который очень нравится (объект восхищения)'},
        {word: 'Ризз', translation: 'Харизма, умение очаровывать'},
    ],
    virgo: [
        {word: 'Душнила', translation: 'Нудный, придирчивый человек'},
        {word: 'Масик', translation: 'Заботливый, надежный человек, решающий проблемы'},
        {word: 'Ред флаг', translation: 'Тревожный сигнал в документах/процессах'},
        {word: 'Имба', translation: 'Что-то очень крутое'},
        {word: 'Кринж', translation: 'Чувство стыда, провал'},
    ],
    libra: [
        {word: 'Чилл', translation: 'Расслабленный отдых, спокойствие'},
        {word: 'Криповый', translation: 'Страшный, пугающий, неприятный'},
        {word: 'Грин флаг', translation: 'Признак адекватности и надежности'},
    ],
    scorpio: [
        {word: 'Тюбик', translation: 'Слабый, инфантильный, ненадежный парень'},
        {word: 'Гостинг', translation: 'Игнорировать, исчезать без объяснений'},
    ],
    sagittarius: [
        {word: 'Делулу', translation: 'Человек, живущий в иллюзиях, оторванный от реальности'},
        {word: 'Рофл', translation: 'Шутка, прикол'},
    ],
    capricorn: [
        {word: 'Сигма', translation: 'Независимый, крутой и успешный одиночка'},
        {word: 'Чечик', translation: 'Просто парень, малознакомый человек'},
        {word: 'Скуф', translation: 'Мужчина, который перестал следить за собой и «обабился»'},
    ],
    aquarius: [
        {word: 'Альтушка', translation: 'Девушка (или человек), старающаяся выглядеть неформально, «не как все»'},
        {word: 'НПС (NPC)', translation: 'Человек без собственного мнения, действующий по шаблону'},
    ],
    pisces: [
        {word: 'Краш', translation: 'Предмет влюбленности или сильной симпатии'},
        {word: 'Криповый', translation: 'Жуткий, пугающий'},
        {word: 'Комфортик', translation: 'Приятный, уютный человек'},
        {word: 'Делулу', translation: 'Жизнь в иллюзиях, отрыв от реальности'},
    ],
};

// ===== ALPINE КОМПОНЕНТ =====
document.addEventListener('alpine:init', () =>
    Alpine.data('horoscopeApp', () => ({
        // Состояние
        showResult: false,
        currentIndex: 0,
        selectedSign: null,
        openAccordions: [],

        // Данные
        zodiacSigns,

        // Снежинки и гирлянды
        snowflakes: [],
        garlandColors: ['red', 'green', 'blue', 'yellow', 'pink', 'red', 'green', 'blue', 'yellow', 'pink', 'red', 'green', 'blue', 'yellow', 'pink', 'red', 'green'],

        // Пикер
        itemHeight: 44,
        pickerOffset: -22,
        pickerTransition: 'transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
        isDragging: false,
        startY: 0,
        lastY: 0,
        dragOffset: 0,
        velocity: 0,

        // Инициализация
        init() {
            this.generateSnowflakes();
            this.selectedSign = this.zodiacSigns[0];
            this.scrollToIndex(0, false);

            // Глобальные обработчики мыши
            document.addEventListener('mousemove', e => this.onPickerMove(e));
            document.addEventListener('mouseup', e => this.onPickerEnd(e));
        },

        // Генерация снежинок
        generateSnowflakes() {
            const count = 35;
            for (let i = 0; i < count; i++) {
                const size = Math.random() * 28 + 12;
                const left = Math.random() * 100;
                const duration = Math.random() * 8 + 10;
                const rotation = Math.random() * 360;
                const opacity = 0.4 + Math.random() * 0.6;
                const delay = -(Math.random() * duration);

                this.snowflakes.push({
                    id: i + 1,
                    style: `
                        width: ${size}px;
                        height: ${size}px;
                        left: ${left}%;
                        animation-duration: ${duration}s;
                        animation-delay: ${delay}s;
                        --rotation: ${rotation}deg;
                        opacity: ${opacity};
                    `,
                });
            }
        },

        // Пикер: прокрутка к индексу
        scrollToIndex(index, animated = true) {
            index = Math.max(0, Math.min(index, this.zodiacSigns.length - 1));
            this.currentIndex = index;
            this.selectedSign = this.zodiacSigns[index];

            const offset = -(index * this.itemHeight + this.itemHeight / 2);
            this.pickerTransition = animated ? 'transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)' : 'none';
            this.pickerOffset = offset;
            this.dragOffset = -index * this.itemHeight;
        },

        // Пикер: получить Y координату
        getY(e) {
            return e.touches ? e.touches[0].clientY : e.clientY;
        },

        // Пикер: начало драга
        onPickerStart(e) {
            this.isDragging = true;
            this.startY = this.getY(e);
            this.lastY = this.startY;
            this.velocity = 0;
            this.pickerTransition = 'none';
        },

        // Пикер: движение
        onPickerMove(e) {
            if (!this.isDragging) return;

            const y = this.getY(e);
            this.velocity = y - this.lastY;
            this.lastY = y;

            const diff = y - this.startY;
            let newOffset = this.dragOffset + diff;

            const minOffset = -(this.zodiacSigns.length - 1) * this.itemHeight;
            const maxOffset = 0;

            // Резиновый эффект
            if (newOffset > maxOffset) {
                newOffset = maxOffset + (newOffset - maxOffset) * 0.3;
            } else if (newOffset < minOffset) {
                newOffset = minOffset + (newOffset - minOffset) * 0.3;
            }

            this.pickerOffset = newOffset - this.itemHeight / 2;

            // Обновление активного индекса в реальном времени
            let newIndex = Math.round(-newOffset / this.itemHeight);
            newIndex = Math.max(0, Math.min(newIndex, this.zodiacSigns.length - 1));

            if (newIndex !== this.currentIndex) {
                this.currentIndex = newIndex;
                this.selectedSign = this.zodiacSigns[newIndex];
            }
        },

        // Пикер: конец драга
        onPickerEnd(e) {
            if (!this.isDragging) return;
            this.isDragging = false;

            const endY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
            const diff = endY - this.startY;
            const newOffset = this.dragOffset + diff;

            let targetIndex = Math.round(-newOffset / this.itemHeight);

            // Учёт инерции
            if (Math.abs(this.velocity) > 5) {
                targetIndex -= Math.sign(this.velocity) * Math.min(Math.floor(Math.abs(this.velocity) / 10), 2);
            }

            this.scrollToIndex(targetIndex, true);
        },

        // Пикер: колесо мыши
        onPickerWheel(e) {
            const dir = e.deltaY > 0 ? 1 : -1;
            const newIndex = this.currentIndex + dir;
            if (newIndex >= 0 && newIndex < this.zodiacSigns.length) {
                this.scrollToIndex(newIndex, true);
            }
        },

        // Выбор знака кликом
        selectSign(index) {
            if (Math.abs(this.startY - this.lastY) > 5) return;
            this.scrollToIndex(index, true);
        },

        // Подтверждение выбора
        confirmSelection() {
            this.selectedSign = this.zodiacSigns[this.currentIndex];
            this.openAccordions = [];
            this.showResult = true;

            // Скролл наверх
            this.$nextTick(() => {
                const resultScreen = document.querySelector('.screen-result');
                if (resultScreen) resultScreen.scrollTop = 0;
            });
        },

        // Назад
        goBack() {
            this.showResult = false;
        },

        // Получение данных
        getHoroscope() {
            if (!this.selectedSign) return '';
            const text = horoscopes[this.selectedSign.id] || '';
            return text
                .split('\n\n')
                .map(p => `<p>${p}</p>`)
                .join('');
        },

        getDetails() {
            if (!this.selectedSign) return [];
            return horoscopeDetails[this.selectedSign.id] || [];
        },

        getAdvice() {
            if (!this.selectedSign) return '';
            return advice[this.selectedSign.id] || '';
        },

        getDictionary() {
            if (!this.selectedSign) return [];
            return dictionary[this.selectedSign.id] || [];
        },

        // Аккордион
        toggleAccordion(index) {
            const i = this.openAccordions.indexOf(index);
            if (i > -1) {
                this.openAccordions.splice(i, 1);
            } else {
                this.openAccordions.push(index);
            }
        },
    }))
);
