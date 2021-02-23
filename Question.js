class Question{
    constructor() {
        this.input = createInput("Name");
        this.input1 = createInput("Enter Correct Option Here");

        this.button = createButton('Submit');
        this.question1 = createElement('h4');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');

      }
      hide(){
        this.question1.hide();
        this.button.hide();
        this.input.hide();
        this.input1.hide();
      }
      display(){
        var title = createElement('h2')
        title.html("My Quiz Game");
        title.position(350, 0);

       

    this.question1.html("Question:- What starts and ends with the letter 'E', but has only one letter")
        this.question1.position(150, 80);

        this.button.position(250, 300);

        this.option1.html("1: Everyone")
        this.option1.position(150, 100);

        
        this.option2.html("2: Envelope")
        this.option2.position(150, 120);

        
        this.option3.html("3: Example")
        this.option3.position(150, 140);

        
        this.option4.html("4: Examine")
        this.option4.position(150, 160);

        this.input1.position(200,250)
        this.input.position(200,230)
      }
    
    
    
}