class Server{
  constructor(){

    this.express = require('express');
    this.app = this.express();
    this.apiRouter = this.express.Router();

    this.setupRouting();
    this.app.listen(8888);
  }
  setupRouting(){
    const path = require('path');

    this.app.use('/style',this.express.static(path.join(__dirname,'style')));
    this.app.use('/inspect',this.express.static(path.join(__dirname,'inspect')));
    this.app.use(this.express.static('views'));

    this.apiRouter.get('/',(req,res,next)=>{
      res.send('root');
    });

    this.app.use('/',this.apiRouter);
  }
}
new Server();