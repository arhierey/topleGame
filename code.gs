function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Tople')
      .addItem('Check', 'check')
      .addToUi();
}

function check() {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = spreadSheet.getSheetByName('Test');
  var sheet2 = spreadSheet.getSheetByName('True');
  
  var cell1, cell2;
  var trueListVals = sheet2.getRange('C2:C11').getValues();

  for (var i=1; i<=10; i++) {
    cell1 = sheet1.getRange('C' + (i+1));
    cell2 = sheet2.getRange('C' + (i+1));

    var val1 = cell1.getValue();
    var val2 = cell2.getValue();

    if (val1 && val2 && val1.toLowerCase() === val2.toLowerCase()) {
      cell1.setBackgroundRGB(108, 169, 101); // GREEN
    } else {

      var wrongPlace = false;
      for (var j=0; j<=trueListVals.length-1; j++) {
        if (val1 && trueListVals[j][0] && val1.toLowerCase() === trueListVals[j][0].toLowerCase()) {
          wrongPlace = true;
          break;
        }
      }

      if (wrongPlace) {
        cell1.setBackgroundRGB(200, 182, 83); // YELLOW
      } else {
        cell1.setBackgroundRGB(120, 124, 127); // GREY
      }
    }
  }
