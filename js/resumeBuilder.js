// bio object start
var bio = {};
bio.name = "Akash Yadav";
bio.role = "Front-End Web Developer";
bio.contacts = {
  "mobile" : "+919992585439",
  "email" : "akashyadav20111992@gmail.com",
  "github" : "akashyadav20111992",
  "twitter" : "@akashyadav_1992",
  "location" : "Bhiwadi"
};
bio.biopic = "images/IMG-20160109-WA0003.jpg";
bio.welcomeMessage = "Its me and all about myself!";
bio.skills = ["awesomeness","programming","c++","JS"];
bio.display = function(){
  $("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
  $("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
  $("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
  $("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
  $("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
  $("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for(var skill=0;skill<bio.skills.length;skill++){
      var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
      $("#header").append(formattedSkill);
    }
  }
}
bio.display();
// bio object ends

//work object starts
var work = {};
work.jobs = [
  {
    "title" : "Front-End Web Developer",
    "employer" : "Infosys",
    "dates" : "Joining in January 2017",
    "location" : "Mysore",
    "description" : "I will join Infosys in January 2017 at Mysore, Karnataka"
  }
]
work.display = function(){
  for(var job=0;job<work.jobs.length;job++){
    console.log("hellooooo");
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer).replace("#","https://www.infosys.com/");
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
}
work.display();
// work object ends

//education object starts
var education = {};
education.schools = [
  {
    "name" : "UIET Kurukshetra University",
    "location" : "Kurukshetra",
    "degree" : "Bachelor of Technology",
    "majors" : "CS",
    "dates" : "2016",
    "url" : "http://www.uietkuk.org/"
  },
  {
    "name" : "Modern Public School",
    "location" : "Bhiwadi",
    "degree" : "Matriculation & Senior Secondary",
    "majors" : "Physics, Chemistry, Mathematics",
    "dates" : "2011",
    "url" : "http://www.mpssociety.in/"
  }
]
education.onlineCourses = [
  {
    "title" : "Front-End web Developer Nanodegree",
    "school" : "Udacity",
    "dates" : "2016",
    "url" : "https://in.udacity.com/"
  }
]
education.display = function(){
  for(var school=0;school<education.schools.length;school++){
    console.log("hellooooo");
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name).replace("#",education.schools[school].url);
    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
    $(".education-entry:last").append(formattedName);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);
    $(".education-entry:last").append(formattedMajor);
  }

  for(var onlineCourse=0;onlineCourse<education.onlineCourses.length;onlineCourse++){
    $(".education-entry:last").append(HTMLonlineClasses);
    var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title).replace("#",education.onlineCourses[onlineCourse].url);
    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
    var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url).replace("#",education.onlineCourses[onlineCourse].url);
    $(".education-entry:last").append(formattedTitle);
    $(".education-entry:last").append(formattedSchool);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedUrl);
  }
}
education.display();
//education object ends

//projects object starts
var projects = {};
projects.projects = [
  {
    "title" : "Viraj",
    "dates" : "Future",
    "description" : "Website of Viraj Enterprises",
    "images" : ["images/projectimage.jpg"]
  }
]
projects.display = function(){
  for(var project=0;project<projects.projects.length;project++){
    console.log("prooooooooooo");
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title).replace("#","www.akashyadav20111992.com");
    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    var formattedImages = HTMLprojectImage.replace("%data%",projects.projects[project].images);
    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
    $(".project-entry:last").append(formattedImages);
  }
}
projects.display();
//projects object ends

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
$("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
