function inside([title,day]) {
   let title1 = title.toLowerCase();
   let day1 = day.toLowerCase();
 
   if(title1 == "the godfather") {
      switch (day1) {
         case "monday": return 12;
         case "tuesday": return 10;
         case "wednesday" : return 15;
         case "thursday" : return 12.5;
         case "friday" : return 15;
         case "saturday" : return 25;
         case "sunday" : return 30;
         default: return "error";
      }
    }
    else if(title1 == "schindler's list") {
      switch (day1) {
         case "monday":
            return 8.5;
         case "tuesday":
            return 8.5;
         case "wednesday" :
            return 8.5;
         case "thursday" :
            return 8.5;
         case "friday" :
            return 8.5;
         case "saturday" :
            return 15;
         case "sunday" :
            return 15;
         default:
            return "error";
      }
   }
   else if (title1 == "casablanca") {
      switch (day1) {
         case "monday":
            return 8;
         case "tuesday":
            return 8;
         case "wednesday" :
            return 8;
         case "thursday" :
            return 8;
         case "friday" :
            return 8;
         case "saturday" :
            return 10;
         case "sunday" :
            return 10;
         default:
            return "error";
      }
   }
   else if(title1 == "the wizard of oz") {
      switch (day1) {
         case "monday":
            return 10;
         case "tuesday":
            return 10;
         case "wednesday" :
            return 10;
         case "thursday" :
            return 10;
         case "friday" :
            return 10;
         case "saturday" :
            return 15;
         case "sunday" :
            return 15;
         default:
            return "error";
      }
   }
   else{
      return "error";
   }
}