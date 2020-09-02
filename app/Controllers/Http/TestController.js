'use strict'

class TestController {
    hello(){
        return "Hello from Controller";
    }
   //Extracting the view class of the HTTP context
    edge({ view }) {
        //view.render is calling test.edge by default, so there is no need to add the .edge extension
        return view.render("test");
    }
}

module.exports = TestController
