P.homescreen_caag = {
    getTimeText: function(search) {
      var monthDiff = function(d1, d2) {
        if( d2 < d1 ) { 
          var dTmp = d2;
          d2 = d1;
          d1 = dTmp;
        }

        var months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth() + 1;
        months += d2.getMonth();
        
        if( d1.getDate() <= d2.getDate() ) months += 1;
        
        return months < 0 ? 0 : months;
      }
      
      var now = (new Date()).getTime();
      var diffMs = now - search.when;

      var diffMonths = monthDiff(new Date(search.when - 86400000), new Date());
      var diffDays = Math.round(diffMs / 86400000); 
      var diffHours = Math.round((diffMs % 86400000) / 3600000);
      var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

      var timeText = "now";
      if( diffMonths > 0 ) 
        timeText = diffMonths + " month" + (diffMonths == 1 ? "" : "s") + " ago";
      else if( diffDays > 0 ) 
        timeText = diffDays + " day" + (diffDays == 1 ? "" : "s") + " ago";
      else if( diffHours > 0 ) 
        timeText = diffHours + " hour" + (diffHours == 1 ? "" : "s") + " ago";
      else if( diffMins > 0 ) 
        timeText = diffMins + " min" + (diffMins == 1 ? "" : "s") + " ago";
      
      return timeText;
    },
    getSearchSections: function(searchSections) {
      var sections = [];
      var displaySections = {
          "keyword": "Keywords in Resume",
          "school": "School",
          "school_region": "Geographical Region",
          "major": "Major",
          "program": "Program",
          "year": "Graduation Year",
          "month": "Graduation Month",
          "skill": "Skills",
          "indicator": "Badges",
          "class": "Classes",
          "foobarId": "Roles",
          "work": "Work Experience",
          "professor": "Professors",
          "event": "Events",
          "folder": "Folders",
          "name": "By Name",
          "keyword_resume": "Keywords in Resume"
        }
      
      if( !searchSections )
        return sections;
      
      for (var key in searchSections) {
        if (!searchSections.hasOwnProperty(key)) 
          continue;
        
        if( sections.indexOf(displaySections[key]) == -1)
          sections.push(displaySections[key]);
      }    
      return sections;
    },
    processCompanies: function (company_info, companyArray, companyHashOpt) {
      var companyHash = companyHashOpt || {};
      companyArray = companyArray || [];
      for(var i = 0; i < companyArray.length; i++) {
        if( !companyArray[i] ) continue;
        
        if( company_info[companyArray[i].internal_id] ) {
          companyArray[i] = $.extend(companyArray[i], company_info[companyArray[i].internal_id]);
          companyHash[companyArray[i].internal_id] = {priority: companyArray[i].priority, period_index: companyArray[i].period_index};
        } else
          companyArray[i] = null;
      }
      companyArray = companyArray.filter(function(c) { return c != null });
      return companyArray;
    },
    shuffleArray: function(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },  
    rsvpEvent: function(event) {
      var companiesMap = P.top_bar.allCompanies;
      if(!companiesMap) companiesMap = P.homescreen.allCompanies;
      if(!companiesMap) return;
      
      var eventId = event.getAttribute("event_id");
      var eventArray = P.top_bar.futureEvents.filter(function(e){ return e.id == eventId});
      
      if( eventArray.length == 0)
        return;
      
      var event = eventArray[0];
      
      var params = {event_id: eventId};
      if (event.following) {
        event.followers -= 1;
        params.unfollow = true;
        event.following = false;
        event.rsvp_list = event.rsvp_list.filter(function (el) { return el.id !== PA.user.id; });
      } else {
        event.followers += 1;
        event.following = true;
        event.rsvp_list.push({id : PA.user.id, name: PA.user.name});
      }
      
      var thisBlock = this;
      PA.call_pj("company_event.follow_unfollow_event", params, 1, function(data) {
        thisBlock.showCaagUpcomingEvents(companiesMap);
      });
    },
    processProfileAcademic: function(student, maxShow, forStudent) {
      if( student == null )
        return;
      
      var indicators = {
        "started_company_0":{order: 3, no_pick:1, hide:1, name:"Did not raise Financing", group:"started_company"},
        "started_company_10k":{order: 3, no_pick:1, name:"Raised Financing of 10K-100K", group:"started_company"},
        "started_company_100k":{order: 3, no_pick:1, name:"Raised Financing of 100K-1MM", group:"started_company"},
        "started_company_1m":{order: 3, no_pick:1, name:"Raised Financing of Above 1MM", group:"started_company"},
        "i_am_smart": {order:4, name: "Part of Dean's List", group:"i_am_smart", longName: "Part of Dean's/Provost's/Chancellor's/President's/Director's List"},
        "i_am_athlete": {order:5, name:"College Level Varsity Athlete", group:"i_am_athlete"},
        "started_company": {order:3, no_pick:1, name:"Started a Company", group:"started_company", longName: "Started a Company"},
        "published_app": {order:6, name:"Published Mobile App", group:"published_app", longName: "Published a Mobile App to the App Store or Google Play"},
        "competition": {order:7, name:"Participated in Competition", group:"competition", longName:"Coding Competition or Hackathon Participant"},
        "competition_won": {order:8, name:"Finalist in Competition", group:"competition_won", longName: "Coding Competition or Hackathon Finalist"},
        "scholarship": {order:9, name:"Received a Scholarship ", group:"scholarship", longName: "Received a Scholarship of > $10k USD"},
        "i_have_leadership": {order:10, name: "Leadership Position", group:"i_have_leadership", longName: "Leadership Position in a College Student Club or Organization"},
        "student_club_member": {order:11, name: "Student Club Member", group: "student_club_member", longName: "Member of a College Student Club or Organization"},
        "i_have_exp": {order:12, name:"Full Time Work Exp", group:"i_have_exp"},
        //"i_have_exp": {order:12, name:"Industry Full Time Work Experience", group:"i_have_exp"},
        //"i_have_parttime":     {order:13, name: "Industry Internship or Part-Time Work Experience", group: "i_have_parttime"},
        "i_have_parttime":     {order:13, name: "Internship Work Exp", group: "i_have_parttime"},
        "i_am_valedictorian":  {order:14, name: "Valedictorian/Salutatorian", group: "i_am_valedictorian"},
        "eagle_scout": {order:15, name: "Eagle Scout", group: "eagle_scout"},
        "citizen_of_community":{order:16, name:"Citizen of the Community", group:"citizen_of_community", longName:"Citizen of the Community (makes your profile public to the student community)"},
        "olympiad_participant": {order:17, name: "National Olympiad Participant", group: "olympiad_participant", longName:"Olympiad Participant at the National Level"},
        "olympiad_international": {order:18, name: "International Olympiad Participant", group: "olympiad_international", longName:"Olympiad Participant at the International Level"},
        "diversity_women": {order:19, name: "Female", group: "diversity_women", longName: "Female"},
        "diversity_lgbt": {order:20, hide:1, name: "LGBTQ", group: "diversity_lgbt", longName: "LGBTQ (visible to companies, not students)"},
        "diversity_african_american": {order:20, hide:1, name: "African American or Black", id:"diversity_african_american", group: "diversity_lgbt", longName: "African American or Black (visible to companies, not students)"},
        "diversity_hispanic": {order:20, hide:1, name: "Hispanic or Latino", id:"diversity_hispanic", group: "diversity_lgbt", longName: "Hispanic or Latino (visible to companies, not students)"},
        "diversity_pacific_islander": {order:20, hide:1, name: "Pacific Islander", id:"diversity_pacific_islander", group: "diversity_lgbt", longName: "Pacific Islander (visible to companies, not students)"},
        "diversity_native_american": {order:20, hide:1, name:"Native American", id:"diversity_native_american", group: "diversity_lgbt", longName: "Native American (visible to companies, not students)"},
        "diversity_1g": {order:20, hide:1, name: "1st Generation College", id:"diversity_1g", group: "diversity_lgbt", longName: "1st Generation College Student (visible to companies, not students)"},
        "diversity_military" : {order:20, hide:1, name:"Military/Armed Services", id:"diversity_military", group:"diversity_lgbt", longName:"Military/Armed Services"},
        "diversity_disability" : {order:20, hide:1, name:"Student with a Disability", id:"diversity_disability", group:"diversity_lgbt", longName:"Student with a Disability"},
        "i_have_a_personal_project": {order:21, name:"Has Side Projects", group:"i_have_a_personal_project", longName: "Has Side Projects (list personal projects in your profile to activate)", disabled:1},
        "coding_since_hs": {order:1, name:"Coding Since High School", group:"coding_since_hs", longName: "Coding Since High School (system determined)", disabled:1},
        "i_have_resume": {order:0, name:"Has Resume", group:"has_resume", id:"i_have_resume", longName:"Has Uploaded a Resume (system determined)", disabled:1}
      };
      
      var classes = [];
      var additional = [];
      var GRAD_MONTHS = {
        "1": "Jan",
        "2": "Feb",
        "3": "Mar",
        "4": "Apr",
        "5": "May",
        "6": "Jun",
        "7": "Jul",
        "8": "Aug",
        "9": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec"
      };
      maxShow |= 3;
      // prepare classes
      if (!student.company) student.company = {};
      if (!student.company[company.term]) student.company[company.term] = {};
      if (student.company[company.term].status && student.company[company.term].status == "-")
        student.company[company.term].status = "";
      if (student.resume) {
        student.isPdfResume = (student.resume.toLowerCase().match('\\.pdf$') !== null);
      }
      var tas = [];
      var tss = [];
      var all = [];
      if (student.all_classes) {
        for (var nid in student.all_classes) {
          var c = student.all_classes[nid];
          additional.push(c);
          if (c.is_ta)
            tas.push(c);
          else if (c.is_top)
            tss.push(c);
          all.push(c);
        }
      }
      var classSort = function(a, b){
        if (a.is_ta && !b.is_ta) return -1;
        if (!a.is_ta && b.is_ta) return 1;
        if (a.difficulty == "grad" && b.difficulty != "grad") return -1;
        if (a.difficulty != "grad" && b.difficulty == "grad") return 1;
        if (a.difficulty == "upper_level" && b.difficulty != "upper_level") return -1;
        if (a.difficulty != "upper_level" && b.difficulty == "upper_level") return 1;
        if (a.term < b.term) return 1;
        if (a.term > b.term) return -1;
        return 0;
      };
      additional.sort(classSort);
      all.sort(classSort);
      tas.sort(classSort);
      tss.sort(classSort);
      student.classes_ta = tas;
      student.classes_ts = tss;
      student.classes_all = all;
      classes = additional.splice(0, maxShow);
      student.classes = classes;
      student.moreClasses = additional;
      student.haveMoreClasses = (additional.length > 0);
      if (student.academics) {
        if (student.academics.minor && student.academics.minor == "[ ]")
          student.academics.minor = null;
        if (student.academics && student.academics.grad_month)
          student.academics.grad_month_str = GRAD_MONTHS[student.academics.grad_month];
      }

      if (!student.recent_work)
        student.recent_work = {};
      // prepare worked at
      var studentCompanies = {};
      if (student.worked_at) {
        for (var i = 0; i < student.worked_at.length; i++) {
          if(typeof(student.worked_at[i]) == "string") studentCompanies[student.worked_at[i].toLowerCase()] = student.worked_at[i];
          else if(typeof(student.worked_at[i].company) == "string") studentCompanies[student.worked_at[i].company.toLowerCase()] = student.worked_at[i].company;
        }
      }
      if (student.past_work) {
        for (var i = 0; i < student.past_work.length; i++) {
          if(typeof(student.past_work[i]) == "string") studentCompanies[student.past_work[i].toLowerCase()] = student.past_work[i];
          else if(typeof(student.past_work[i].company) == "string") studentCompanies[student.past_work[i].company.toLowerCase()] = student.past_work[i].company;
        }
      }
      if (student.recent_work && student.recent_work.company)
        studentCompanies[student.recent_work.company.toLowerCase()] = student.recent_work.company;
      if (student.upcoming_work && student.upcoming_work.company)
        studentCompanies[student.upcoming_work.company.toLowerCase()] = student.upcoming_work.company;
      if (student.other_works && student.other_works.length > 0)
        for (var i = 0; i < student.other_works.length; i++) {
          if (student.other_works[i].company)
            studentCompanies[student.other_works[i].company.toLowerCase()] = student.other_works[i].company;
        }
      if (student.work_experience && student.work_experience.length > 0) {
        for (var i = 0; i < student.work_experience.length; i++) {
          if (student.work_experience[i].company)
            studentCompanies[student.work_experience[i].company.toLowerCase()] = student.work_experience[i].company;
        }
      }
          

      student.workedAt = [];
      student.moreWorkedAt = [];
      for (var companyKey in studentCompanies) {
        if (student.workedAt.length < maxShow)
          student.workedAt.push(studentCompanies[companyKey]);
        else
          student.moreWorkedAt.push(studentCompanies[companyKey]);
      }
      student.haveMoreWorkedAt = (student.moreWorkedAt.length > 0);

      // sort skills
      if (!student.skills)
        student.skills = [];
      student.skills.sort(function(a,b){
        if (!a.level) return 1;
        if (!b.level) return -1;
        return b.level - a.level;
      });
      // prepare indicators
      student.indicators = [];
      var indicatorHash = {};
      if (!student.tags) student.tags = [];
      for (var i = 0; i < student.tags.length; i++)
        if (indicators[student.tags[i]]) {
          var tag = student.tags[i];
          // CHECK against preferences!!!
          if (indicators[student.tags[i]].group) {
            if (forStudent && indicators[student.tags[i]].hide)
              continue;
            var t = indicatorHash[indicators[tag].group];
            if (!t) {
              t = {id: tag, tag:indicators[tag].group, name:indicators[tag].name, order:indicators[tag].order};
              indicatorHash[indicators[tag].group] = t;
              student.indicators.push(t);
            } else {
              t.name = t.name + "\n" + indicators[tag].name;
            }
          } else {
            student.indicators.push({id: tag, tag:tag, name:indicators[tag].name, order:indicators[tag].order});
          }
        }
      student.indicators.sort(function(a,b){return a.order - b.order;});
    },
    caagGetStudentPhoto: function(profile) {
      var photoUrl = "https://piazza.com/images/careers_dashboard/default_profile.gif";
      if( profile && profile.photo && profile.photo != "" ) {
        photoUrl = profile.photo.replace("35", "200");
      }
      return photoUrl;
    },
    getMonthsList: function() {
      var monthNames = {
        "1": "January",
        "2": "February",
        "3": "March",
        "4": "April",
        "5": "May",
        "6": "June",
        "7": "July",
        "8": "August",
        "9": "September",
        "10": "October",
        "11": "November",
        "12": "December",
      }
      var list = {};
      var keys = [];
      for (k in monthNames) {
        if (monthNames.hasOwnProperty(k)) {
          keys.push(k);
        }
      }

      keys.sort();

      for (i = 0; i < keys.length; i++) {
        k = keys[i];
      }
      
      for (var key in monthNames) {
        if (monthNames.hasOwnProperty(key)) {
//          list.push({name: monthNames[key], id: monthNames[key]});
          list[key] = {val: monthNames[key], id: key};
        }
      }
      return list;
    },
    getPiazzaCareersLinkText: function() {
      return P.homescreen.getCaagVisibilitySettings().is_opt_in ? "Edit career preferences" : "Join Piazza Careers";    
    },
    showCaagCompaniesSearching: function(companiesMap, onlyHide) {
      var companyHash = {};
      var dynamicCompanyHash = {};
      var data = P.modules.data.user_profile.splash_data;
      
      var companies = jQuery.extend([], data.companies);
      var dynamic_companies = jQuery.extend({}, data.dynamic_companies);
      
      companies = P.homescreen_caag.processCompanies(companiesMap, companies, companyHash);
      P.homescreen_caag.shuffleArray(companies);
      
      for (var key in dynamic_companies ) {
        if (dynamic_companies.hasOwnProperty(key)) {
          dynamic_companies[key] = P.homescreen_caag.processCompanies(companiesMap, dynamic_companies[key], dynamicCompanyHash);
          shuffleArray(dynamic_companies[key]);
          
          dynamic_companies[key] = dynamic_companies[key].filter(function (c) {
            if( companyHash[c.internal_id] ) {
              return c.period_index < companyHash[c.internal_id].period_index;
            }
            return true; 
          });
        }
      }
      
      companies = companies.filter(function (c) {
        if( dynamicCompanyHash[c.internal_id] ) {
          return c.period_index <= dynamicCompanyHash[c.internal_id].period_index;
        }
        return true; 
      });
      
      var majorCompanies = dynamic_companies[1] || [];
      var schoolCompanies = dynamic_companies[2] || [];
      var genericCompanies = dynamic_companies[3] || [];
      
      var getCompanyChunk = function(list, priority) {
        if( priority == 0 ) 
          return list.splice(0, 2);
        else
          return list.splice(0, 1);
      }    
      
      var MAX_COMPANY_COUNT = 4
      var companyFiltered = [];
      for(var i = 0; i < MAX_COMPANY_COUNT; i++) {
        companyFiltered.push.apply(companyFiltered, getCompanyChunk(companies, 0));
        companyFiltered.push.apply(companyFiltered, getCompanyChunk(majorCompanies, 1));
        companyFiltered.push.apply(companyFiltered, getCompanyChunk(schoolCompanies, 2));
      }
      
      companyFiltered.push.apply(companyFiltered, genericCompanies);
      companyFiltered.splice(MAX_COMPANY_COUNT, Math.max(0, companyFiltered.length - MAX_COMPANY_COUNT));
      
      companyFiltered.sort(function(a,b) {
        if( a.period_index != b.period_index )
          return a.period_index - b.period_index; 
        if( a.priority != b.priority )
          return a.priority - b.priority; 
        return b.when - a.when; 
      });
      
      companyFiltered.map( function(item) {
        item.tagText = "Similar Student";
        if( item.tag == "classmates" ) item.tagText = "Classmates";
        if( item.tag == "searches_major" ) item.tagText = "Major";
        if( item.tag == "searches_school" ) item.tagText = "School";
      });

      if( companyFiltered.lenght == 0 || onlyHide) {
        $('#caag_companies_searching_container').hide();
        return false;
      }
      $('#caag_companies_searching_container').show();

      for(var i = 0; i < MAX_COMPANY_COUNT; i++ ) {
        var company =  companyFiltered.length > i ? companyFiltered[i] : null;
        
        if( !company ) {
          $('#caag_companies_searching_' + i).hide();
          continue;
        }

        $('#caag_companies_searching_' + i).show();
        $('#caag_companies_searching_' + i + '_image').attr('src', companiesMap[company.internal_id].photo_card);
        $('#caag_companies_searching_' + i + '_profile').attr('href', "/careers/dashboard#/company_profile/" + company.internal_id);
        $('#caag_companies_searching_' + i + '_name').text(company.name);
        $('#caag_companies_searching_' + i + '_location').text(company.location);
        $('#caag_companies_searching_' + i + '_match_type').text("Matched on: " + company.tagText);
      }    
      return true;
    },
    showCaagCompaniesMostRecentlyAdded: function(companiesMap, onlyHide) {
      var allCompanies = [];
      var MAX_COMPANY_COUNT = 4;
      
      for (var key in companiesMap) {
        if (companiesMap.hasOwnProperty(key)) {
          allCompanies.push(companiesMap[key]);
        }
      }
      
      allCompanies.sort(function(a,b) { return b.published_at - a.published_at; });
      allCompanies.splice(MAX_COMPANY_COUNT, Math.max(0, allCompanies.length - MAX_COMPANY_COUNT));

      if( !allCompanies.length || onlyHide ) {
        $('#caag_new_companies_container').hide();
        return false;
      }
      $('#caag_new_companies_container').show();

      for(var i = 0; i < MAX_COMPANY_COUNT; i++ ) {
        var company =  allCompanies.length > i ? allCompanies[i] : null;
        
        if( !company ) {
          $('#caag_new_companies_' + i).hide();
          continue;
        }

        $('#caag_new_companies_' + i).show();
        $('#caag_new_companies_' + i + '_image').attr('src', company.photo_card);
        $('#caag_new_companies_' + i + '_profile').attr('href', "/careers/dashboard#/company_profile/" + company.internal_id);
        $('#caag_new_companies_' + i + '_name').text(company.name);
        $('#caag_new_companies_' + i + '_location').text(company.location);
      }
      return true;
    },
    showCaagCompanyQueries: function(companiesMap, onlyHide){
      var MAX_COMPANY_QUERIES_COUNT = 6;
      var data = P.modules.data.user_profile.splash_data;
      var searches = jQuery.extend([], data.searches);
      
      if( !searches.length || onlyHide ) {
        $('#caag_company_query_container').hide();
        return false;
      }
      $('#caag_company_query_container').show();

      searches = P.homescreen_caag.processCompanies(companiesMap, searches, {});
      searches.sort(function(a,b) { return b.when - a.when; });

      for(var i = 0; i < MAX_COMPANY_QUERIES_COUNT; i++ ) {
        var search =  searches.length > i ? searches[i] : null;
        
        if( !search ) {
          $('#caag_company_query_' + i).hide();
          continue;
        }
        
        $('#caag_company_query_' + i).show();
        $('#caag_company_query_' + i + '_image').attr('src', search.image);
        $('#caag_company_query_' + i + '_profile').attr('href', "/careers/dashboard#/company_profile/" + search.internal_id);
        $('#caag_company_query_' + i + '_name').text(search.company);
        $('#caag_company_query_' + i + '_when_str').text(P.homescreen_caag.getTimeText(search));
        $('#caag_company_query_' + i + '_sections').text(P.homescreen_caag.getSearchSections(search.sections).join(", "));
      }     
      return true;
    },
    showCaagUpcomingEvents: function(companiesMap, onlyHide) {
      var MAX_COMPANY_EVENT_COUNT = 3
      var events = P.top_bar.futureEvents || [];
      
      if( !events.length  || onlyHide) {
        $('#caag_upcoming_events_container').hide();
        return false;
      }
      $('#caag_upcoming_events_container').show();
      
      events.sort(function(a, b){
        if (a.start_date > b.start_date) return 1;
        if (a.start_date < b.start_date) return -1;
        return 0;
      });
      
      for(var i = 0; i < MAX_COMPANY_EVENT_COUNT; i++ ) {
        var event =  events.length > i ? events[i] : null;
        
        if( !event) {
          $('#caag_upcoming_events_' + i).hide();
          continue;
        }
        
        var attendees = (event.followers || 0) + " attendee" + ( event.followers == 1 ? "" : "s");
        var description = event.description_original || "";
        
        description = $("<div/>").html(description).text();
        if( description.length > 120 ) {
          description = description.substring(0, 120) + "...";
        }
        
        $('#caag_upcoming_events_' + i).show();
        $('#caag_upcoming_events_' + i + '_image').attr('src', companiesMap[event.internal_id].image);
        $('#caag_upcoming_events_' + i + '_title').text(event.title);
        $('#caag_upcoming_events_' + i + '_date_time_str').text(event.date_time_str);
        $('#caag_upcoming_events_' + i + '_description').text(description);
        $('#caag_upcoming_events_' + i + '_attendees').text(attendees);
        
        if( $('#caag_upcoming_events_' + i + '_rsvp').length > 0)
          $('#caag_upcoming_events_' + i + '_rsvp')[0].setAttribute("event_id", event.id);
        if( $('#caag_upcoming_events_' + i + '_unrsvp').length > 0)
          $('#caag_upcoming_events_' + i + '_unrsvp')[0].setAttribute("event_id", event.id);
        
        if (event.following) {
          $('#caag_upcoming_events_' + i + '_rsvp').hide();
          $('#caag_upcoming_events_' + i + '_unrsvp').show();
        } else {
          $('#caag_upcoming_events_' + i + '_rsvp').show();
          $('#caag_upcoming_events_' + i + '_unrsvp').hide();
        }
      }         
      
      return true;
    },
    showCaagStudentsInNetwork: function(companiesMap, onlyHide) {
      var data = P.modules.data.user_profile.splash_data;
      var MAX_COMPANY_STUDENT_COUNT = 6
      var MAX_INDICATOR_COUNT = 6

      if( !data.students.length || onlyHide ) {
        $('#caag_network_container').hide();
        return false;
      }
      $('#caag_network_container').show();
      
      for(var i = 0; i < data.students.length; i++) {
        P.homescreen_caag.processProfileAcademic(data.students[i], 6, true);
      }
      
      var gradMonths = P.homescreen_caag.getMonthsList();
      
      for(var i = 0; i < MAX_COMPANY_STUDENT_COUNT; i++ ) {
        var student =  data.students.length > i ? data.students[i] : null;
        
        if( !student ) {
          $('#caag_network_' + i).hide();
          continue;
        }
        
        var program = "";
        var major = "";
        if( student.academics ) {
          program = student.academics.program
          if( student.academics.grad_month ) program += " " + gradMonths[student.academics.grad_month].val;
          if( student.academics.grad_year )  program += " " + student.academics.grad_year;
          major = "Major: " + (student.academics.major ? student.academics.major : "");
        }
        
        $('#caag_network_' + i).show();
        $('#caag_network_' + i + '_image').attr('src', P.homescreen_caag.caagGetStudentPhoto(student));
        $('#caag_network_' + i + '_profile').attr('href', "/careers/dashboard#/feed/" + student.user_id);
        $('#caag_network_' + i + '_name').text(student.name);
        $('#caag_network_' + i + '_school').text(student.school);
//        {{student.academics.program}} {{gradMonths[student.academics.grad_month - 1].val}} {{student.academics.grad_year}}

        $('#caag_network_' + i + '_program').text(program);
        $('#caag_network_' + i + '_major').text(major);
        
        for(var i2 = 0; i2 < MAX_INDICATOR_COUNT; i2++ ) {
          var indicator = student.indicators[i2];
          
          if(!indicator) {
            $('#caag_network_' + i + '_' + i2 + '_indicator').hide();
            continue;
          } 
            
          $('#caag_network_' + i + '_' + i2 + '_indicator').attr('src', "https://recruiting.piazza.com/images/careers_dashboard/indicators/" + indicator.id + ".png");
        }
      }  
      return true;
    },
    showCaagYourProfile: function(companiesMap, onlyHide) {
      
      var MAX_INDICATOR_COUNT = 6
      var profile = jQuery.extend({}, P.modules.data.user_profile);
      var gradMonths = P.homescreen_caag.getMonthsList();
      P.homescreen_caag.processProfileAcademic(profile, 6, true);
      P.homescreen.computeProfileProgress(profile);
      
      var program = "";
      var major = "";
      if( profile.academics ) {
        program = profile.academics.program
        if( profile.academics.grad_month ) program += " " + gradMonths[profile.academics.grad_month].val;
        if( profile.academics.grad_year ) program += + " " + profile.academics.grad_year;
        major = "Major: " + (profile.academics.major ? profile.academics.major : "");
      }    

      if( onlyHide ) {
        $('#caag_your_profile_container').hide();
        return false;
      }
      $('#caag_your_profile_container').show();

      $('#caag_your_profile_image').attr('src', P.homescreen_caag.caagGetStudentPhoto(profile));
      $('#caag_your_profile_name').text(profile.name);
      $('#caag_your_profile_school').text(profile.school);
      $('#caag_your_profile_grad').text(program);
      $('#caag_your_profile_major').text(major);
      $('#caag_your_profile_completion').text(profile.progress +"%");

      for(var i2 = 0; i2 < MAX_INDICATOR_COUNT; i2++ ) {
        var indicator = profile.indicators[i2];
        
        if(!indicator) {
          $('#caag_your_profile_' + i2 + '_indicator').hide();
          continue;
        } 
          
        $('#caag_your_profile_' + i2 + '_indicator').attr('src', "https://recruiting.piazza.com/images/careers_dashboard/indicators/" + indicator.id + ".png");
      }    
      return true;
    },
    showCaag: function() {
      if( P.modules.data.user_profile.splash_data.pageLoaded || true )
        return;
      
      var companiesMap = P.top_bar.allCompanies;
      if(!companiesMap) companiesMap = P.homescreen.allCompanies;
      if(!companiesMap) return;
  
      var caagBlocks = [P.homescreen_caag.showCaagCompaniesMostRecentlyAdded]
      if( P.homescreen.getCaagVisibilitySettings().is_opt_in ) {
        caagBlocks = caagBlocks.concat([P.homescreen_caag.showCaagCompaniesSearching, 
                        P.homescreen_caag.showCaagCompanyQueries, P.homescreen_caag.showCaagUpcomingEvents,
                        P.homescreen_caag.showCaagStudentsInNetwork, P.homescreen_caag.showCaagYourProfile]);
      }
      
      P.homescreen_caag.shuffleArray(caagBlocks);
      var blockDisplayed = false;
      for(var i = 0; i < caagBlocks.length; i++) {
        if( !blockDisplayed && (blockDisplayed = caagBlocks[i](companiesMap)) ) {
          $("#the_caag_wrapper").show();
          $('#headed_to_fields').hide();
        } else {
          caagBlocks[i](companiesMap, true);          
        } 
      }
      $('#caag_career_preferences').text( P.homescreen_caag.getPiazzaCareersLinkText()  );
      
      P.modules.data.user_profile.splash_data.pageLoaded = true;
    }
};

for (var i in P.homescreen_caag)
  P.homescreen[i] = P.homescreen_caag[i];
