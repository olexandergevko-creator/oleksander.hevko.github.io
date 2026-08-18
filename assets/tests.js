(function () {
  'use strict';

  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      const open = navLinks.classList.toggle('open');
      burger.classList.toggle('active', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const questions = [
    { text: 'У мене було відчуття напруги, тривоги та знервованості', reverse: false },
    { text: 'Я відчував (-ла), що мені є до кого звернутися за підтримкою у разі потреби', reverse: true },
    { text: 'У мене було відчуття, що зі мною все гаразд', reverse: true },
    { text: 'У мене було відчуття, що якщо щось піде не так, я можу впоратися', reverse: true },
    { text: 'Мене турбували болі чи інші фізичні проблеми', reverse: false },
    { text: 'У мене було відчуття задоволення від виконаної роботи', reverse: true },
    { text: 'У мене були труднощі з засинанням чи сном', reverse: false },
    { text: 'Я відчував(-ла) теплоту або привʼязаність до когось', reverse: true },
    { text: 'Мені вдалося виконати більшість справ, які необхідно було вирішити', reverse: true },
    { text: 'У мене було відчуття, що інші люди мене критикують', reverse: false },
    { text: 'Я почувався (-лася) нещасливим (-ою)', reverse: false },
    { text: 'У мене було відчуття роздратованості в присутності інших людей', reverse: false },
    { text: 'Я відчув(-ла) оптимізм щодо свого майбутнього', reverse: true },
    { text: 'Мені вдалося досягнути бажаного', reverse: true }
  ];
  const responseLabels = ['Зовсім ні', 'Зрідка', 'Іноді', 'Часто', 'Майже весь час'];
  const focusTopics = [
    'відчуття напруги, тривоги або знервованості',
    'доступність підтримки, коли вона потрібна',
    'ставлення до себе',
    'здатність справлятися, коли щось іде не так',
    'біль або інші фізичні проблеми',
    'задоволення від зробленого',
    'сон',
    'теплота та близькість у стосунках',
    'здатність виконувати необхідні справи',
    'відчуття критики з боку інших',
    'відчуття нещастя',
    'роздратованість поруч з іншими',
    'оптимізм щодо майбутнього',
    'досягнення бажаного'
  ];

  const startButton = document.getElementById('startGpCore');
  const testShell = document.getElementById('gpCoreTest');
  const form = document.getElementById('gpCoreForm');
  const questionsContainer = document.getElementById('gpCoreQuestions');
  const progressCopy = document.getElementById('progressCopy');
  const progressBar = document.getElementById('progressBar');
  const formError = document.getElementById('formError');
  const result = document.getElementById('gpCoreResult');
  const scoreValue = document.getElementById('scoreValue');
  const scoreMarker = document.getElementById('scoreMarker');
  const scoreMeaningTitle = document.getElementById('scoreMeaningTitle');
  const scoreMeaningText = document.getElementById('scoreMeaningText');
  const focusIntro = document.getElementById('focusIntro');
  const focusList = document.getElementById('focusList');
  const restartButton = document.getElementById('restartGpCore');
  const testTitle = document.getElementById('gpTestTitle');
  const resultTitle = document.getElementById('resultTitle');

  if (!testShell || !form || !questionsContainer || !result) return;

  questions.forEach(function (question, questionIndex) {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'question';

    const legend = document.createElement('legend');
    const number = document.createElement('span');
    number.className = 'question-number';
    number.setAttribute('aria-hidden', 'true');
    number.textContent = String(questionIndex + 1);
    legend.appendChild(number);
    legend.appendChild(document.createTextNode(question.text));
    fieldset.appendChild(legend);

    const options = document.createElement('div');
    options.className = 'options';
    responseLabels.forEach(function (labelText, value) {
      const label = document.createElement('label');
      label.className = 'option';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'q' + (questionIndex + 1);
      input.value = String(value);
      input.required = true;
      const visibleLabel = document.createElement('span');
      visibleLabel.textContent = labelText;
      label.appendChild(input);
      label.appendChild(visibleLabel);
      options.appendChild(label);
    });
    fieldset.appendChild(options);
    questionsContainer.appendChild(fieldset);
  });

  function answeredCount() {
    return questions.reduce(function (count, _question, index) {
      return count + (form.querySelector('input[name="q' + (index + 1) + '"]:checked') ? 1 : 0);
    }, 0);
  }

  function updateProgress() {
    const answered = answeredCount();
    progressCopy.textContent = 'Відповіді: ' + answered + ' із ' + questions.length;
    progressBar.style.width = ((answered / questions.length) * 100) + '%';
    if (answered === questions.length) formError.hidden = true;
  }

  function showTest() {
    result.hidden = true;
    testShell.hidden = false;
    formError.hidden = true;
    testShell.scrollIntoView({ behavior: 'smooth', block: 'start' });
    testTitle.focus({ preventScroll: true });
  }

  if (startButton) startButton.addEventListener('click', showTest);
  form.addEventListener('change', updateProgress);

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const firstUnanswered = questions.findIndex(function (_question, index) {
      return !form.querySelector('input[name="q' + (index + 1) + '"]:checked');
    });

    if (firstUnanswered !== -1) {
      formError.hidden = false;
      const firstInput = form.querySelector('input[name="q' + (firstUnanswered + 1) + '"]');
      firstInput.focus();
      firstInput.closest('.question').scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const scoredAnswers = questions.map(function (question, index) {
      const selected = form.querySelector('input[name="q' + (index + 1) + '"]:checked');
      const rawValue = Number(selected.value);
      return question.reverse ? 4 - rawValue : rawValue;
    });
    const total = scoredAnswers.reduce(function (sum, score) { return sum + score; }, 0);
    const mean = total / questions.length;

    scoreValue.textContent = mean.toFixed(2);
    scoreMarker.style.left = ((mean / 4) * 100) + '%';
    if (mean < 2) {
      scoreMeaningTitle.textContent = 'Ваш бал нижче середини шкали';
      scoreMeaningText.textContent = 'За вашими відповідями, протягом останнього тижня труднощі загалом були менш помітними. Водночас окремі теми можуть бути важливішими за середній бал.';
    } else if (mean > 2) {
      scoreMeaningTitle.textContent = 'Ваш бал вище середини шкали';
      scoreMeaningText.textContent = 'За вашими відповідями, протягом останнього тижня напруження та труднощі були помітними й могли впливати на самопочуття або щоденні справи.';
    } else {
      scoreMeaningTitle.textContent = 'Ваш бал у середині шкали';
      scoreMeaningText.textContent = 'У відповідях поєднуються ознаки благополуччя та труднощів. Корисно подивитися, які саме теми дали найбільший внесок у результат.';
    }

    const highestScore = Math.max.apply(null, scoredAnswers);
    focusList.replaceChildren();
    if (highestScore < 2) {
      focusIntro.textContent = 'Жодна окрема відповідь не дала високого внеску в бал. Якщо певна тема все одно турбує вас, вона може бути важливою незалежно від загального результату.';
      focusList.hidden = true;
    } else {
      const minimumFocusScore = highestScore >= 3 ? 3 : 2;
      const strongestTopics = scoredAnswers
        .map(function (score, index) { return { score: score, topic: focusTopics[index] }; })
        .filter(function (item) { return item.score >= minimumFocusScore; })
        .sort(function (a, b) { return b.score - a.score; })
        .slice(0, 3);

      focusIntro.textContent = highestScore >= 3
        ? 'Найбільше на результат вплинули відповіді про:'
        : 'Помітний внесок у результат дали відповіді про:';
      strongestTopics.forEach(function (item) {
        const listItem = document.createElement('li');
        listItem.textContent = item.topic;
        focusList.appendChild(listItem);
      });
      focusList.hidden = false;
    }
    testShell.hidden = true;
    result.hidden = false;
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    resultTitle.focus({ preventScroll: true });
  });

  restartButton.addEventListener('click', function () {
    form.reset();
    updateProgress();
    result.hidden = true;
    testShell.hidden = false;
    formError.hidden = true;
    testShell.scrollIntoView({ behavior: 'smooth', block: 'start' });
    testTitle.focus({ preventScroll: true });
  });

})();
