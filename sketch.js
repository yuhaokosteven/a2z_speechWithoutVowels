let txt;
let alltxt;
let words;
let speech;

function preload() {
  txt = loadStrings('text.txt');
}

function setup() {
  noCanvas();

  speech = new p5.Speech();
  alltxt = join(txt, " ");
  // console.log(alltxt);
  let textArea = select("#textinput");
  textArea.value(alltxt);
  // createDiv(alltxt);
  let dlt = select("#delete")
  dlt.mouseClicked(deletion);

}


function deletion() {

  alltxt = alltxt.replace(/[aeiou]/gi, "");
  let output = createDiv(alltxt);
  output.style('margin', '10px');
  output.style('width', '600px');

  speech.speak(alltxt);


}
