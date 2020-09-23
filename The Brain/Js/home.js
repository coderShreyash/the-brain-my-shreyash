class Home{
    constructor(){
    this.name=createElement('h3',form.Name.value())
    this.opt = createSelect();
    this.opt.option('Home');
    this.opt.option('Quizzes');
    this.opt.option('Games');
    this.opt.option('Leaderboard');
    this.opt.option('IQ Meter');
    this.opt.option('Profile');
    this.sel = this.opt.value();
    //this.point = createElement('h2',player.points)
    

    }
    

    display(){
         
         this.name.position(displayWidth-900,displayHeight-600)
         this.opt.position(displayWidth-1500,displayHeight-800)
          if(this.sel=='Quizzes'){
              this.name.hide();
              this.opt.hide();
              quizz = new quiz();
              quizz.display();
          }
        // this.point.position(displayWidth-900,displayHeight-300)
    }
}