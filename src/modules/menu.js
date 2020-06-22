function renderMenu(){
    const content=document.createElement("div");
    let list = [{
        "Fresh P": "4 Point Kneeling Lumbar",
        "Params": [{
          "param": "Sets",
          "childParam": "1"
        }, {
          "param": "Reps",
          "childParam": "1"
        }]
      }, {
        "exerciseName": "Side Flexion",
        "Params": [{
          "param": "Sets",
          "childParam": "1"
        }, {
          "param": "Reps",
          "childParam": "1"
        }]
      }];
      
      let html = '';
      
      for (var i = 0, l = list.length; i < l; i++) {
        html += '<li>' + list[i].exerciseName;
        for (var j = 0, k = list[i].Params.length; j < k; j++) {
          html += ', ' + list[i].Params[j].param + ': ' + list[i].Params[j].childParam
        }
        html += '</li>';
      }
    
    content.innerHTML=html;

    
    return content
}
export {renderMenu};