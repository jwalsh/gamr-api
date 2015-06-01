console.log('index.js');

$('#id-form').validate();

// Provided games

// At least one game must have been provided
var validate_exists_game = function() {
  return $('input:text.username:filled').length > 0;
};

// Any provided game requires all fields be filled
var validate_provided_games = function() {
  // The markup for the form needs a container fieldset for all
  // compound values
  // $provided_games
  var valid = true;
  $('input:text.username:filled')
      .map(function() {
        // If any of the compound values are missing we fail
        console.log('checking compound values for ' + $(this).attr('id'));
        var compound_values_provided = $(this)
                .parent()
                .children(':blank')
                .length === 0;
        console.log('all compound values provided: ' +
                        compound_values_provided);
        valid = valid && compound_values_provided;
      });
  return valid;
};

$('#validate-game-exists').click(function() {
  console.log('game exists:' + JSON.stringify(validate_exists_game()));
  if (validate_exists_game()) {
    console.log('provided games valid: ' + validate_provided_games());
  }
});

$('#validate-existing-gamer').click(function() {
  console.log('validate existing gamer');
  $.get('/api/validate/existing/:game/:region/:gamer',
      function(data) {
        console.log(data);
      });
});

$('#validate-duplicate-gamer').click(function() {
  console.log('validate duplicate gamer');
  $.get('/api/validate/duplicate/:game/:gamer',
      function(data) {
        console.log(data);
      });
});

$('#save').click(function() {
  console.log('save');
  $.get('/api/save',
      function(data) {
        console.log(data);
      });
});
