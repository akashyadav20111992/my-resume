var formattedname = HTMLheaderName.replace("%data%","Akash Yadav");
var formattedrole = HTMLheaderRole.replace("%data%","Front-End Web Developer");
$("#header").prepend(formattedrole);
$("#header").prepend(formattedname);
var bio = {};
bio.name = "Akash Yadav";
bio.role = "Front-End Web Developer";
bio.contact_info = "akashyadav20111992@gmail.com"
bio.pictureURL = "";
bio.welcome_msg = "";
bio.skills = ["awesomeness","programming","c++","JS"];
if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#header").append(formattedSkill);
}
var work = {
  "jobs" : [
    {
      "title" : "Front-End Web Developer",
      "employer" : "Infosys",
      "dates" : "Joining in January 2017",
      "location" : "Mysore",
      "description" : "I will join Infosys in January 2017 at Mysore, Karnataka"
    }
  ]
};
for(job in work.jobs){
  console.log("hellooooo");
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
  var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
  var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
  var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  $(".work-entry:last").append(formattedDates);
  $(".work-entry:last").append(formattedLocation);
  $(".work-entry:last").append(formattedDescription);
}
$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});
function inName(name){
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
