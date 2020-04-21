var Singleton = (function () {
      var instance;
      var element;
      var logs;

  
      function ScannerJS(){

    //   this.getElementClass = function(){
    //       return this.element;
    //   }
    //   this.setElementClass = function(element){
    //       this.element = element;
    //   }
     

    this.setElementId = function(element){
        this.element = element;
    }
    this.getElementId = function(){
        return this.element;
    }

      this.inputDataInId = function(data){
          document.querySelector('#'+this.element).value = data;
      }
          
       this.updateLogs = function(data){
             alert(data);
//          this.logs = data;
      }
            
          this.getLogs = function(){
                alert(this.logs);
         return this.logs;
      }   
      
          this.fetchLogs = function(){
         EnterpriseScanner.GetBrowserLogs();
      } 
            
      this.triggerScanner = function(){
        EnterpriseScanner.Trigger();
    }
                    
      this.openKeyboard = function(){
        EnterpriseScanner.OpenKeyboard();
    }
                               
      this.closeKeyboard = function(){
        EnterpriseScanner.CloseKeyboard();
    }
            
       this.resizePage = function(isResizing){
        EnterpriseScanner.PageResizing(isResizing);
    }

    //   this.inputDataInClass = function(data){
    //     // document.querySelector('.'+this.element).value = data;
    //     var x,i;
    //     x= document.querySelectorAll('.'+this.element);
    //     for (i = 0; i < x.length; i++) {
    //       x[i].value = data;
    //     }
    // }

      }
  
      function createInstance() {
          var object = new ScannerJS();
          return object;
      }
   
      return {
          getInstance: function () {
              if (!instance) {
                  instance = createInstance();
              }
              return instance;
          }
      };
  
     
  })();
  

