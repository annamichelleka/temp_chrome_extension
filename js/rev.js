class revstr{
    constructor(str){
      this.str=str;
      this.revstr="";
      
    }
    reverse(){
      for(let i=this.str.length-1;i>=0;i--){
       this.revstr=this.revstr+this.str[i];
       
      }
      
      return this.revstr;
    }
    display(){
    console.log("The original string is:"+this.str);
    console.log("The reverse string is:"+this.revstr);
    }
  }
  
  let x=prompt("Enter a new string?");
  let r=new revstr(x);
  let rev=r.reverse();
  r.display();
  
  