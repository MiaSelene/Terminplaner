$(document).ready(function() {
  createRandomPatterns();
  jobMenu();
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomPatterns() {
  var angle = 45;
  for (var a = 0; a < 6; a++) {
    var currChild = a+1;
    var originOptions = ['top', 'bottom', 'left', 'right', 'center'];
    var newOrigin = getRandomInt(0, 4);

    if (originOptions[newOrigin] == 'top') {
      angle = -angle;
    }

    $('#panel-'+currChild+' > .background').css({
      'transformOrigin': originOptions[newOrigin] + ' center',
      'webkitTransformOrigin': originOptions[newOrigin] + ' center',
      'mozTransformOrigin': originOptions[newOrigin] + ' center',
      'msTransformOrigin': originOptions[newOrigin] + ' center',
      'transform': 'rotate('+angle+'deg)',
      'webkitTransform': 'rotate('+angle+'deg)',
      'mozTransform': 'rotate('+angle+'deg)',
      'msTransform': 'rotate('+angle+'deg)'
    });

    if (angle < 0) {
      angle = -angle;
    }
  }
}

function jobMenu() {
  var jobHeadings = ['Künstler', 'Game Designer', 'Programmierer', 'Sound Designer', 'Story Writer', 'Komponist'];
  var jobDescriptions = [];
  //hier fehlen line breaks in den Stichpunkten jeweils nach dem Doppelpunkt
  var jobDescArtist = 'Als Künstler bist du für das Aussehen des Spiels zuständig. Dein Aufgabenbereich reicht von Conceptart bis Levelaussehen und Charakterdesign. Ohne einen durchgehenden Artstyle kann ein Spieler schnell aus der Erfahrung herausfallen und einige Spiele werden allein für ihre Schönheit gespielt.' +
                      'Als Künstler solltest du einen breiten Wissensstand in deiner Rolle haben und/oder bereit sein für dieses Projekt Neues zu Lernen. Da der Artstyle des Spiels noch nicht feststeht, kannst du dich maßgeblich bei der Entwicklung des Themas beteiligen.' +
                      'Dinge, auf die du Lust haben solltest um bei diesem Projekt mitzuarbeiten: immer mal wieder einen Nachmittag oder eine Freistunde opfern im Team arbeiten Spieleentwicklung Durch dieses Projekt etwas im Künstlerischen Themenbereich dazulernen :D';

  var jobDescGameDes = 'Game Designer erstellen Systeme und Mechaniken, die ein spaßiges Spiel ermöglichen. Als Game Designer musst du noch mehr im Team arbeiten als in den anderen Rollen, da du selber keinen Teil des Spiels bearbeitest, sondern eher eng mit den anderen zusammenarbeitest um zu garantieren, dass deine Ideen richtig umgesetzt werden. Um hier mitzumachen, ' +
                       'solltest du dich bereits einmal mit Game Design auseinandergesetzt haben. Falls nicht, solltest du dir nochmal überlegen ob du wirklich den ganzen Stoff nachholen möchtest. Wir sind gerne bereit dir entsprechendes Material zur Verfügung zu stellen, aber es wird für dich wesentlich stressiger sein. Folgende Dinge solltest du tun können, ' +
                       'um bei diesem Projekt mitzumachen: Regelmäßig Zeit für Teambesprechungen haben Deine Ideen mit anderen Game Designern absprechen und dann auch dem Rest des Teams Illustrieren können Spaß daran haben anderen Spaß zu bringen :D';

  var jobDescProgrammer = 'Was Programmierer machen, weicht in Spielen nicht viel von den normalen Anforderungen des Jobs ab. Unterschiede können darin liegen, dass einige durch Programmieren festgelegte Regeln direkten Einfluss auf das das Spielerlebnis haben und deshalb stark mit den Game Designern abgesprochen werden müssen. Außerdem gibt es manchmal Probleme vom Rest des Teams die nur von einem Programmierer gelöst werden können. Du solltest also auch dazu in der Lage sein. ' +
                          'Zusätzlich wird eventuell eine Entwicklungsumgebung genutzt, was für dich eventuell gut oder schlecht ist. In Unity oder ähnlichem wird zwar der benötigte Code stark reduziert, aber dafür musst du dich in ein völlig neues System reinlesen. Zum Glück hast du als Programmierer wie jede andere Rolle auch ein Mitspracherecht und kannst das wenn es dir nicht passt eventuell verhindern. Programmierer haben viel Gewicht auf den Schultern, ' +
                          'da sie die direkte Translation von Ideen in Mechaniken darstellen. Je besser das ausgefüllt wird, desto besser spielt sich das Spiel. Wenn du Programmierer werden möchtest solltest du also: Mit der ausgewählten Sprache und Umgebung klar kommen. Im Team arbeiten und auch teamfähigen Code schreiben (Dokumentation etc). Zeit für dieses Projekt haben (sei es Weiterarbeit oder Besprechungen). Und ein Spiel programmieren wollen :D';

  var jobDescSoundDes = 'Als Sound Designer wirst du dich um alle Sounds kümmern die das Spiel hat, um das Thema zu verdeutlichen und die Mechaniken zu verbessern. Diese Rolle hat erst einmal nichts mit Musik zu tun. Dafür musst du dich an die Komponistenrolle wenden. Es ist aber durchaus möglich, beide Rollen parallel auszuüben, da sich das Themengebiet ein wenig überschneidet und Sound Design außerdem vermutlich nicht so arbeitsintensiv wird. ' +
                        'Eine Ausnahme könnte hier Voice Acting sein, wenn die Story Writer darauf bestehen und du bereit bist das zu machen. Dabei kannst du aber auf das Team für Akteure zählen, du musst also nicht selber rekrutieren, wenn du nicht möchtest. Dennoch würde das einen Mehraufwand bedeuten der vielleicht dafür sorgt, dass die Qualität singt, wenn du Komposition und Sound Design kombinierst. Ich denke mal, Sound Design für ein Spiel sollte bei allen ziemlich neu sein, ' +
                        'was heißt dass du kaum Vorwissen brauchst. Du musst nur bereit sein zu lernen. Außerdem wichtig ist: Du solltest Zeit für dieses Projekt haben (sei es Weiterarbeit oder Besprechungen). Du solltest selber gerne spielen und in der Lage sein das Sound Design einiger Spiele zu analysieren. Du musst bereit sein viel zu lernen. Du solltest natürlich auch Lust haben mitzuarbeiten :D';

  var jobDescStoryWriter = 'Story Writer schreiben, wie der Name schon erkennen lässt die Story. Tatsächlich ist schreiben auch ein großer Teil des Jobs. Aber es ist nicht das einzige, wofür du verantwortlich bist. Da du die Story schreibst, darfst du den Game Designern auftragen diese in den Mechaniken zu verankern und den Künstlern durch eine detailreiche Welt ihr Leben schwer zu machen :D. Wenn du gern mal eine interaktive Story, ' +
                           'oder eine durch Gameplay verbesserte Story schreiben wolltest bist du hier an der richtigen Stelle. Bedenke nur, dass du vermutlich auch die Texte fürs Voice Acting schreiben musst. Wenn dich also als Story Writer anmeldest, solltest du: Bereit sein, eine an das Spiel angepasste Story zu schreiben. Zeit und Lust haben mit deinem Team das Spiel durchzusetzen :D';

  var jobDescKomponist = 'Ziemlich selbsterklärend. Als Komponist komponierst du den Soundtrack des Spiels. Es wird höchstwahrscheinlich keine dynamische Musik geben, also einfach nur gute alte Stücke die gut zu einem Spiel passen. Du solltest dich bereits mit Komposition auseinandergesetzt haben oder sehr schnell lernen. Bedenke, dass Videospielmusik sich ein wenig von anderer Musik unterscheidet. Aber inwiefern kriegst du auch so mit. Du solltest also: Zeit haben.' +
                         ' Komponier-Vorwissen haben. Lust haben :D';

  jobDescriptions.push(jobDescArtist, jobDescGameDes, jobDescProgrammer, jobDescSoundDes, jobDescStoryWriter, jobDescKomponist);

  var leaveButton = document.getElementById('leave-site');

  // Event Listener hinzufügen
  leaveButton.addEventListener('click', function() {
    window.location.href = 'https://www.google.com';
  });

  $('#fullscreen-div').css('height', window.innerHeight);

  $('.card').click(function() {
    var id = $(this).attr('id');
    var jobNum = id.slice(6, 7);

    // Textänderung von overlay
    $('#job-heading').text(jobHeadings[jobNum-1]);
    $('#job-description').text(jobDescriptions[jobNum-1]);

    $('#fullscreen-div').addClass('show');
    $('body').css({
      'height': window.innerHeight,
      'overflow': 'hidden'
    });
  });

  $('#close-menu').click(function() {
    $('#fullscreen-div').removeClass('show');
    $('body').css({
      'height': '',
      'overflow': ''
    });
  });

  $('#job-wrapper').click(function() {
    $('.select-box-wrap').toggleClass('show');
  });

  $('.option-wrap p').click(function() {
    var currId = $('#' + $(this).attr('id'));
    var currText = $(this).text();

    if (!(currId).hasClass('selected')) {
      $('.option-wrap p').removeClass('selected');
      $(currId).addClass('selected');
      $('#currentlySelected').text(currText);
    }
  });
}
